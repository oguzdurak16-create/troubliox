import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const sourceDirectory = path.join(root, "src", "data");
const outputDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "troublio-similarity-"));
const require = createRequire(import.meta.url);
const MAX_CRITICAL_PAIRS = 188;
const MAX_GENERIC_SOURCE_ONLY_GUIDES = 0;

function listTypeScriptFiles(directory, relativeDirectory = "") {
  const currentDirectory = path.join(directory, relativeDirectory);
  const files = [];
  for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) files.push(...listTypeScriptFiles(directory, relativePath));
    else if (entry.isFile() && entry.name.endsWith(".ts")) files.push(relativePath);
  }
  return files;
}

function normalize(value, problem) {
  let text = String(value || "").toLowerCase();
  for (const removable of [problem.brand, problem.device, problem.errorCode, ...(problem.aliases || [])]) {
    if (!removable) continue;
    const escaped = String(removable).toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp(escaped, "g"), " ");
  }
  return text
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "that", "this", "from", "your", "you", "are", "can", "may", "but", "not", "into", "before", "after", "when", "what", "does", "will", "only", "use", "using", "model", "models", "manual", "official", "support", "service", "error", "code", "codes", "machine", "washer", "dishwasher",
]);

function contentTokens(problem) {
  const content = [
    problem.summary,
    ...(problem.likelyCauses || []),
    ...(problem.quickChecks || []).flatMap((step) => [step.title, step.detail]),
    ...(problem.observations || []).flatMap((item) => [item.label, item.advice]),
    ...(problem.whenToStop || []),
    ...(problem.faq || []).flatMap((item) => [item.question, item.answer]),
  ].join(" ");
  return new Set(normalize(content, problem));
}

function jaccard(left, right) {
  if (!left.size || !right.size) return 0;
  let intersection = 0;
  for (const token of left) if (right.has(token)) intersection += 1;
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 0;
}

function isGenericSource(urlString) {
  try {
    const url = new URL(urlString);
    const pathName = url.pathname.replace(/\/+$/, "").toLowerCase();
    return pathName === "" || pathName === "/" || /\/(support|help|manuals|downloads)$/.test(pathName);
  } catch {
    return true;
  }
}

function groupPairCounts(pairs) {
  const groups = new Map();
  for (const pair of pairs) {
    const key = `${pair.brand}\t${pair.device}`;
    groups.set(key, (groups.get(key) || 0) + 1);
  }
  return [...groups.entries()].sort((a, b) => b[1] - a[1]);
}

try {
  for (const relativeFilename of listTypeScriptFiles(sourceDirectory)) {
    const sourceFilename = path.join(sourceDirectory, relativeFilename);
    const source = fs.readFileSync(sourceFilename, "utf8");
    const result = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
      fileName: relativeFilename,
      reportDiagnostics: true,
    });
    const errors = (result.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
    if (errors.length) throw new Error(`Could not transpile ${relativeFilename} for similarity audit.`);
    const outputFilename = path.join(outputDirectory, relativeFilename.replace(/\.ts$/, ".js"));
    fs.mkdirSync(path.dirname(outputFilename), { recursive: true });
    fs.writeFileSync(outputFilename, result.outputText);
  }

  const { problems } = require(path.join(outputDirectory, "problems.js"));
  const { redirectedProblemSlugs } = require(path.join(outputDirectory, "problemAliases.js"));
  const allErrorGuides = problems.filter((problem) => problem.contentKind === "error-code");
  const errorGuides = allErrorGuides.filter((problem) => !redirectedProblemSlugs.has(problem.slug));
  const tokenSets = new Map(errorGuides.map((problem) => [problem.slug, contentTokens(problem)]));
  const pairs = [];

  for (let i = 0; i < errorGuides.length; i += 1) {
    for (let j = i + 1; j < errorGuides.length; j += 1) {
      const a = errorGuides[i];
      const b = errorGuides[j];
      if (a.brandSlug !== b.brandSlug || a.device !== b.device) continue;
      const score = jaccard(tokenSets.get(a.slug), tokenSets.get(b.slug));
      if (score >= 0.72) pairs.push({ score, a: a.slug, b: b.slug, brand: a.brand, device: a.device });
    }
  }

  pairs.sort((a, b) => b.score - a.score);
  const critical = pairs.filter((pair) => pair.score >= 0.9);
  const high = pairs.filter((pair) => pair.score >= 0.8 && pair.score < 0.9);
  const genericOnlyGuides = errorGuides.filter((problem) => !(problem.sources || []).some((source) => !isGenericSource(source.url)));
  const sourceBacked = errorGuides.length - genericOnlyGuides.length;

  console.log("Troublio content similarity audit");
  console.log(`Error-code guides in data: ${allErrorGuides.length}`);
  console.log(`Redirected alias guides excluded: ${allErrorGuides.length - errorGuides.length}`);
  console.log(`Canonical error-code guides audited: ${errorGuides.length}`);
  console.log(`Guides with at least one specific/deep source URL: ${sourceBacked}`);
  console.log(`Guides backed only by generic support/manual landing URLs: ${genericOnlyGuides.length}`);
  console.log(`Critical similarity pairs (>= 0.90): ${critical.length}`);
  console.log(`High similarity pairs (0.80-0.89): ${high.length}`);

  const criticalGroups = groupPairCounts(critical);
  if (criticalGroups.length) {
    console.log("\nCritical-pair concentration by brand/device:");
    for (const [group, count] of criticalGroups.slice(0, 20)) console.log(`${count}\t${group}`);
  }

  if (pairs.length) {
    console.log("\nHighest-similarity canonical pairs:");
    for (const pair of pairs.slice(0, 30)) {
      console.log(`${pair.score.toFixed(3)}\t${pair.brand}\t${pair.device}\t${pair.a}\t${pair.b}`);
    }
  }

  if (genericOnlyGuides.length) {
    console.log("\nGeneric-source-only remediation queue:");
    for (const problem of genericOnlyGuides
      .slice()
      .sort((a, b) => `${a.brand} ${a.device} ${a.slug}`.localeCompare(`${b.brand} ${b.device} ${b.slug}`))
      .slice(0, 80)) {
      console.log(`${problem.brand}\t${problem.device}\t${problem.slug}`);
    }
  }

  const regressions = [];
  if (critical.length > MAX_CRITICAL_PAIRS) {
    regressions.push(`critical similarity pairs increased from the locked baseline ${MAX_CRITICAL_PAIRS} to ${critical.length}`);
  }
  if (genericOnlyGuides.length > MAX_GENERIC_SOURCE_ONLY_GUIDES) {
    regressions.push(`generic-source-only guides increased above ${MAX_GENERIC_SOURCE_ONLY_GUIDES}: ${genericOnlyGuides.length}`);
  }

  if (regressions.length) {
    for (const regression of regressions) console.error(`\nQuality regression: ${regression}`);
    process.exitCode = 1;
  } else if (critical.length) {
    console.warn(`\nKnown similarity debt remains (${critical.length} critical pairs), but the locked baseline did not regress.`);
  }
} finally {
  fs.rmSync(outputDirectory, { recursive: true, force: true });
}
