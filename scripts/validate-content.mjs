import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const sourceDirectory = path.join(root, "src", "data");
const outputDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "troublio-content-"));
const require = createRequire(import.meta.url);

function assertUnique(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (!item) throw new Error(`${label} contains an empty value.`);
    if (seen.has(item)) throw new Error(`${label} contains duplicate value: ${item}`);
    seen.add(item);
  }
}

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
    if (errors.length) {
      for (const error of errors) console.error(`${relativeFilename}: ${ts.flattenDiagnosticMessageText(error.messageText, "\n")}`);
      process.exit(1);
    }

    const outputFilename = path.join(outputDirectory, relativeFilename.replace(/\.ts$/, ".js"));
    fs.mkdirSync(path.dirname(outputFilename), { recursive: true });
    fs.writeFileSync(outputFilename, result.outputText);
  }

  const data = require(path.join(outputDirectory, "problems.js"));
  const modelData = require(path.join(outputDirectory, "modelNumberGuides.js"));
  const resetData = require(path.join(outputDirectory, "resetGuides.js"));
  const problems = data.problems;
  const modelNumberGuides = modelData.modelNumberGuides;
  const resetGuides = resetData.resetGuides;
  const sources = problems.flatMap((problem) => problem.sources || []);
  const sourceHosts = new Set(sources.map((source) => new URL(source.url).hostname));

  assertUnique(problems.map((problem) => problem.slug), "Problem slugs");
  assertUnique(modelNumberGuides.map((guide) => guide.slug), "Model guide slugs");
  assertUnique(resetGuides.map((guide) => guide.slug), "Reset guide slugs");

  for (const guide of resetGuides) {
    if (!guide.name || !guide.device || !guide.summary) throw new Error(`Reset guide ${guide.slug} is missing required copy.`);
    if (!Array.isArray(guide.levels) || guide.levels.length < 2) throw new Error(`Reset guide ${guide.slug} needs at least two reset levels.`);
    assertUnique(guide.levels.map((level) => level.level), `Reset levels for ${guide.slug}`);
    if (!guide.levels.some((level) => level.level === guide.startWith)) throw new Error(`Reset guide ${guide.slug} startWith level is missing.`);
    for (const level of guide.levels) {
      if (!level.steps?.length || !level.keeps?.length || !level.removes?.length) throw new Error(`Reset guide ${guide.slug}/${level.level} is incomplete.`);
    }
  }

  const result = {
    guides: problems.length,
    errorCodes: problems.filter((problem) => problem.contentKind === "error-code").length,
    symptoms: problems.filter((problem) => problem.contentKind === "symptom").length,
    sourceBacked: problems.filter((problem) => problem.sources?.length).length,
    brands: data.brands.length,
    categories: data.categories.length,
    modelGuides: modelNumberGuides.length,
    resetGuides: resetGuides.length,
    resetLevels: resetGuides.reduce((total, guide) => total + guide.levels.length, 0),
    sourceDomains: sourceHosts.size,
  };
  console.log("Troublio content validation passed.");
  console.table(result);
} finally {
  fs.rmSync(outputDirectory, { recursive: true, force: true });
}
