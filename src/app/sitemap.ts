import type { MetadataRoute } from "next";
import { brands, categories, problems } from "@/data/problems";
import { deviceHubs, issueHubs } from "@/data/hubs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-17");
  const pages = [
    "",
    "/diagnose",
    "/guides",
    "/recent",
    "/devices",
    "/issues",
    "/error-codes",
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

  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: updated,
      changeFrequency: path === "" || ["/guides", "/recent", "/devices", "/issues", "/diagnose"].includes(path) || path.startsWith("/error-codes") || path.startsWith("/symptoms") ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : ["/guides", "/recent", "/devices", "/issues", "/diagnose"].includes(path) ? 0.95 : path.startsWith("/error-codes") || path.startsWith("/symptoms") ? 0.9 : 0.6,
    })),
    ...deviceHubs.map((hub) => ({ url: `${SITE_URL}/devices/${hub.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...issueHubs.map((hub) => ({ url: `${SITE_URL}/issues/${hub.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.85 })),
    ...categories.map((category) => ({ url: `${SITE_URL}/categories/${category.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.75 })),
    ...brands.map((brand) => ({ url: `${SITE_URL}/brands/${brand.slug}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...problems.map((problem) => ({
      url: `${SITE_URL}/problems/${problem.slug}`,
      lastModified: new Date(problem.updated),
      changeFrequency: "monthly" as const,
      priority: problem.featured ? 0.9 : problem.contentKind === "error-code" ? 0.82 : 0.78,
    })),
  ];
}
