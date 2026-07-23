import type { MetadataRoute } from "next";
import { brands, categories, problems } from "@/data/problems";
import { deviceHubs, issueHubs } from "@/data/hubs";
import { errorCodeClusters } from "@/data/errorCodeClusters";
import { modelNumberGuides } from "@/data/modelNumberGuides";
import { resetGuides } from "@/data/resetGuides";
import { SITE_URL } from "@/lib/site";

const redirectedProblemSlugs = new Set(["bosch-washer-e17-f17-error"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-23");
  const pages = [
    "",
    "/decoder",
    "/model-number",
    "/reset",
    "/diagnose",
    "/guides",
    "/recent",
    "/devices",
    "/issues",
    "/error-codes",
    "/error-codes/brands",
    "/error-codes/washing-machines",
    "/error-codes/dishwashers",
    "/error-codes/windows",
    "/error-codes/printers",
    "/error-codes/browser-web",
    "/symptoms",
    "/symptoms/washing-machines",
    "/symptoms/dishwashers",
    "/categories",
    "/brands",
    "/about",
    "/editorial-policy",
    "/disclaimer",
    "/privacy",
    "/terms",
  ];

  const highPriorityPages = ["/decoder", "/model-number", "/reset", "/guides", "/recent", "/devices", "/issues", "/diagnose", "/error-codes/brands"];

  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: updated,
      changeFrequency: path === "" || highPriorityPages.includes(path) || path.startsWith("/error-codes") || path.startsWith("/symptoms") ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : highPriorityPages.includes(path) ? 0.95 : path.startsWith("/error-codes") || path.startsWith("/symptoms") ? 0.9 : 0.6,
    })),
    ...errorCodeClusters.map((cluster) => ({ url: `${SITE_URL}/error-codes/brands/${cluster.slug}`, lastModified: new Date(cluster.updated), changeFrequency: "weekly" as const, priority: 0.92 })),
    ...resetGuides.map((guide) => ({ url: `${SITE_URL}/reset/${guide.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.84 })),
    ...modelNumberGuides.map((guide) => ({ url: `${SITE_URL}/model-number/${guide.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.82 })),
    ...deviceHubs.map((hub) => ({ url: `${SITE_URL}/devices/${hub.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...issueHubs.map((hub) => ({ url: `${SITE_URL}/issues/${hub.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.85 })),
    ...categories.map((category) => ({ url: `${SITE_URL}/categories/${category.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.75 })),
    ...brands.map((brand) => ({ url: `${SITE_URL}/brands/${brand.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...problems
      .filter((problem) => !redirectedProblemSlugs.has(problem.slug))
      .map((problem) => ({
        url: `${SITE_URL}/problems/${problem.slug}`,
        lastModified: new Date(problem.updated),
        changeFrequency: "monthly" as const,
        priority: problem.featured ? 0.9 : problem.contentKind === "error-code" ? 0.82 : 0.78,
      })),
  ];
}
