import type { Problem } from "@/data/problems";

export type SearchIndexItem = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  category: string;
  categorySlug: string;
  brand?: string;
  brandSlug?: string;
  device: string;
  errorCode?: string;
  readTime: number;
  contentKind: "error-code" | "symptom" | "general";
  terms: string;
};

export function normalizeSearch(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function compactSearch(value: string) {
  return normalizeSearch(value).replace(/\s+/g, "");
}

export function buildSearchIndex(items: Problem[]): SearchIndexItem[] {
  return items.map((problem) => ({
    slug: problem.slug,
    title: problem.title,
    shortTitle: problem.shortTitle,
    summary: problem.summary,
    category: problem.category,
    categorySlug: problem.categorySlug,
    brand: problem.brand,
    brandSlug: problem.brandSlug,
    device: problem.device,
    errorCode: problem.errorCode,
    readTime: problem.readTime,
    contentKind: problem.contentKind || "general",
    terms: [
      problem.title,
      problem.shortTitle,
      problem.category,
      problem.brand || "",
      problem.device,
      problem.errorCode || "",
      ...(problem.aliases || []),
      ...problem.tags,
      ...problem.likelyCauses.slice(0, 4),
      ...problem.observations.map((item) => item.label),
    ].join(" "),
  }));
}

export function rankSearch(query: string, problem: SearchIndexItem) {
  const normalizedQuery = normalizeSearch(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  if (!terms.length) return 1;

  const haystack = normalizeSearch(problem.terms);
  const compactQuery = compactSearch(query);
  const compactHaystack = compactSearch(problem.terms);
  const normalizedTitle = normalizeSearch(problem.title);
  const normalizedShortTitle = normalizeSearch(problem.shortTitle);
  let score = 0;

  for (const term of terms) {
    if (haystack.includes(term)) score += 3;
    if (normalizedTitle.startsWith(term)) score += 2;
  }

  if (compactQuery && compactHaystack.includes(compactQuery)) score += 10;
  if (problem.errorCode && compactSearch(problem.errorCode) === compactQuery) score += 40;
  if (normalizedQuery && normalizedTitle === normalizedQuery) score += 40;
  if (normalizedQuery && normalizedTitle.includes(normalizedQuery)) score += 14;
  if (normalizedQuery && normalizedShortTitle.includes(normalizedQuery)) score += 8;
  if (problem.contentKind === "error-code" && /[a-z]*\d[a-z0-9-]*/i.test(query)) score += 2;

  return score;
}
