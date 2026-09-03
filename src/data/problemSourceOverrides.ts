import type { Problem } from "./problems";

const SAMSUNG_WASHER_ERROR_CODES_SOURCE = {
  label: "Samsung Support — washing machine information and error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
};

const SAMSUNG_DISHWASHER_ERROR_CODES_SOURCE = {
  label: "Samsung Support — dishwasher error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10004499/",
};

function addSource(problem: Problem, source: { label: string; url: string }): Problem {
  if ((problem.sources || []).some((existing) => existing.url === source.url)) return problem;
  return {
    ...problem,
    updated: "2026-09-03",
    sources: [...(problem.sources || []), source],
  };
}

export function applyProblemSourceOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    if (problem.contentKind !== "error-code" || problem.brandSlug !== "samsung") return problem;

    if (problem.device === "Washing machine") {
      return addSource(problem, SAMSUNG_WASHER_ERROR_CODES_SOURCE);
    }

    if (problem.device === "Dishwasher") {
      return addSource(problem, SAMSUNG_DISHWASHER_ERROR_CODES_SOURCE);
    }

    return problem;
  });
}
