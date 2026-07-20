import { brands, categories, problems } from "@/data/problems";
import { deviceHubs, issueHubs } from "@/data/hubs";
import { modelNumberGuides } from "@/data/modelNumberGuides";
import { resetGuides } from "@/data/resetGuides";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const staticPaths = [
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
  const urls = [
    ...staticPaths.map((path) => `${SITE_URL}${path}`),
    ...resetGuides.map((guide) => `${SITE_URL}/reset/${guide.slug}`),
    ...modelNumberGuides.map((guide) => `${SITE_URL}/model-number/${guide.slug}`),
    ...deviceHubs.map((hub) => `${SITE_URL}/devices/${hub.slug}`),
    ...issueHubs.map((hub) => `${SITE_URL}/issues/${hub.slug}`),
    ...categories.map((category) => `${SITE_URL}/categories/${category.slug}`),
    ...brands.map((brand) => `${SITE_URL}/brands/${brand.slug}`),
    ...problems.map((problem) => `${SITE_URL}/problems/${problem.slug}`),
  ];
  return new Response(`${urls.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
