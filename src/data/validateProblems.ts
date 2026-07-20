import type { Problem } from "./problems";
import { mergeGscOpportunityProblems } from "./gscOpportunityProblems";

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`[Troublio content] ${message}`);
}

export function validateProblems(items: Problem[]): Problem[] {
  const mergedItems = mergeGscOpportunityProblems(items);
  const slugs = new Set<string>();
  const titles = new Set<string>();

  for (const problem of mergedItems) {
    invariant(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(problem.slug), `Invalid slug: ${problem.slug}`);
    invariant(!slugs.has(problem.slug), `Duplicate slug: ${problem.slug}`);
    invariant(!titles.has(problem.title.toLowerCase()), `Duplicate title: ${problem.title}`);
    slugs.add(problem.slug);
    titles.add(problem.title.toLowerCase());

    invariant(problem.summary.trim().length >= 80, `${problem.slug}: summary is too short`);
    invariant(problem.likelyCauses.length >= 3, `${problem.slug}: at least 3 likely causes are required`);
    invariant(problem.quickChecks.length >= 3, `${problem.slug}: at least 3 quick checks are required`);
    invariant(problem.observations.length >= 2, `${problem.slug}: at least 2 observations are required`);
    invariant(problem.whenToStop.length >= 2, `${problem.slug}: at least 2 stop conditions are required`);
    invariant(problem.faq.length >= 2, `${problem.slug}: at least 2 FAQ entries are required`);
    invariant(/^\d{4}-\d{2}-\d{2}$/.test(problem.updated), `${problem.slug}: invalid updated date`);

    if (problem.contentKind === "error-code") {
      invariant(Boolean(problem.errorCode), `${problem.slug}: error-code guide is missing errorCode`);
      invariant(Boolean(problem.brand && problem.brandSlug), `${problem.slug}: error-code guide is missing brand data`);
      invariant((problem.sources?.length || 0) >= 1, `${problem.slug}: error-code guide needs an official source`);
      invariant(Boolean(problem.modelNote), `${problem.slug}: error-code guide needs a model-specific warning`);
    }

    for (const source of problem.sources || []) {
      invariant(source.url.startsWith("https://"), `${problem.slug}: source must use HTTPS (${source.url})`);
    }
  }

  return mergedItems;
}
