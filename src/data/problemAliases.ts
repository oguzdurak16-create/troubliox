export const problemAliases = [
  {
    sourceSlug: "bosch-washer-e29-f29-error",
    destinationSlug: "bosch-washer-f29-error",
  },
  {
    sourceSlug: "samsung-washer-sud-5d-error",
    destinationSlug: "samsung-washer-5d-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-4-3-error",
    destinationSlug: "whirlpool-dishwasher-f4e3-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-6-1-error",
    destinationSlug: "whirlpool-dishwasher-f6e1-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-6-4-error",
    destinationSlug: "whirlpool-dishwasher-f6e4-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-7-1-error",
    destinationSlug: "whirlpool-dishwasher-f7e1-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-8-1-error",
    destinationSlug: "whirlpool-dishwasher-f8e1-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-2-1-error",
    destinationSlug: "whirlpool-dishwasher-f2e1-error",
  },
  {
    sourceSlug: "whirlpool-dishwasher-9-1-error",
    destinationSlug: "whirlpool-dishwasher-f9e1-error",
  },
] as const;

export const redirectedProblemSlugs = new Set<string>(
  problemAliases.map((alias) => alias.sourceSlug),
);

export function canonicalProblemSlug(slug: string) {
  return problemAliases.find((alias) => alias.sourceSlug === slug)?.destinationSlug ?? slug;
}
