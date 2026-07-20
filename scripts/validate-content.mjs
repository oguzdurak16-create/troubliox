import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root = process.cwd();
const sourceDirectory = path.join(root, "src", "data");
const outputDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "troublio-content-"));
const require = createRequire(import.meta.url);

try {
  for (const filename of fs.readdirSync(sourceDirectory).filter((name) => name.endsWith(".ts"))) {
    const source = fs.readFileSync(path.join(sourceDirectory, filename), "utf8");
    const result = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
      fileName: filename,
      reportDiagnostics: true,
    });
    const errors = (result.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
    if (errors.length) {
      for (const error of errors) console.error(`${filename}: ${ts.flattenDiagnosticMessageText(error.messageText, "\n")}`);
      process.exit(1);
    }
    fs.writeFileSync(path.join(outputDirectory, filename.replace(/\.ts$/, ".js")), result.outputText);
  }

  const data = require(path.join(outputDirectory, "problems.js"));
  const problems = data.problems;
  const sources = problems.flatMap((problem) => problem.sources || []);
  const sourceHosts = new Set(sources.map((source) => new URL(source.url).hostname));
  const result = {
    guides: problems.length,
    errorCodes: problems.filter((problem) => problem.contentKind === "error-code").length,
    symptoms: problems.filter((problem) => problem.contentKind === "symptom").length,
    sourceBacked: problems.filter((problem) => problem.sources?.length).length,
    brands: data.brands.length,
    categories: data.categories.length,
    sourceDomains: sourceHosts.size,
  };
  console.log("Troublio content validation passed.");
  console.table(result);
} finally {
  fs.rmSync(outputDirectory, { recursive: true, force: true });
}
