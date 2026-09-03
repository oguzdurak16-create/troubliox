import type { Problem } from "./problems";

const SAMSUNG_WASHER_ERROR_CODES_SOURCE = {
  label: "Samsung Support — washing machine information and error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
};

const SAMSUNG_DISHWASHER_ERROR_CODES_SOURCE = {
  label: "Samsung Support — dishwasher error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10004499/",
};

const EXACT_PROBLEM_SOURCES: Record<string, { label: string; url: string }> = {
  "brother-printer-unable-to-print-46": {
    label: "Brother Support — Unable to Print 46",
    url: "https://support.brother.ca/app/answers/detail/a_id/136250/kw/available",
  },
  "canon-printer-5100-error": {
    label: "Canon Support — Support Code 5100",
    url: "https://ij.manual.canon/ij/webmanual/ErrorCode/G1000%20series/EN/ERR/5100.html",
  },
  "canon-printer-b200-error": {
    label: "Canon Support — Support Code B200",
    url: "https://my.canon/en/support/8201786300",
  },
  "hp-printer-e4-error": {
    label: "HP Support — E4 paper jam error",
    url: "https://support.hp.com/us-en/document/ish_4609476-4609525-16",
  },
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
    const exactSource = EXACT_PROBLEM_SOURCES[problem.slug];
    if (exactSource) return addSource(problem, exactSource);

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
