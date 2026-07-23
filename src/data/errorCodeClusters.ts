import { problems, type Problem } from "./problems";

export type ErrorCodeCluster = {
  slug: string;
  brand: string;
  brandSlug: string;
  device: string;
  deviceSlug: string;
  title: string;
  description: string;
  updated: string;
  problems: Problem[];
};

const clusterDevices = new Set(["Washing machine", "Dishwasher", "Dryer", "Refrigerator", "Printer"]);
const redirectedProblemSlugs = new Set(["bosch-washer-e17-f17-error"]);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const grouped = new Map<string, Problem[]>();

for (const problem of problems) {
  if (
    problem.contentKind !== "error-code" ||
    !problem.brand ||
    !problem.brandSlug ||
    !problem.errorCode ||
    !clusterDevices.has(problem.device) ||
    redirectedProblemSlugs.has(problem.slug)
  ) continue;

  const key = `${problem.brandSlug}:${problem.device}`;
  const group = grouped.get(key) || [];
  group.push(problem);
  grouped.set(key, group);
}

export const errorCodeClusters: ErrorCodeCluster[] = Array.from(grouped.entries())
  .map(([key, items]) => {
    const first = items[0];
    const deviceSlug = slugify(first.device);
    const sorted = [...items].sort((a, b) => a.shortTitle.localeCompare(b.shortTitle));
    const brand = first.brand || first.brandSlug || "Device";

    return {
      slug: `${first.brandSlug}-${deviceSlug}`,
      brand,
      brandSlug: first.brandSlug || key.split(":")[0],
      device: first.device,
      deviceSlug,
      title: `${brand} ${first.device.toLowerCase()} error codes`,
      description: `Browse ${sorted.length} ${brand} ${first.device.toLowerCase()} error-code guides with exact meanings, display variants, safe first checks, model warnings, and official support references.`,
      updated: sorted.reduce((latest, item) => item.updated > latest ? item.updated : latest, sorted[0].updated),
      problems: sorted,
    };
  })
  .filter((cluster) => cluster.problems.length >= 3)
  .sort((a, b) => b.problems.length - a.problems.length || a.title.localeCompare(b.title));

export function getErrorCodeCluster(slug: string) {
  return errorCodeClusters.find((cluster) => cluster.slug === slug);
}

export function getErrorCodeClusterForProblem(problem: Problem) {
  if (!problem.brandSlug || problem.contentKind !== "error-code" || redirectedProblemSlugs.has(problem.slug)) return undefined;
  return errorCodeClusters.find(
    (cluster) => cluster.brandSlug === problem.brandSlug && cluster.device === problem.device,
  );
}
