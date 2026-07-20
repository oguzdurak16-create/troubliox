import { problems } from "@/data/problems";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = [...problems]
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
    .slice(0, 80)
    .map((problem) => ({
      id: `${SITE_URL}/problems/${problem.slug}`,
      url: `${SITE_URL}/problems/${problem.slug}`,
      title: problem.title,
      content_text: problem.summary,
      date_modified: `${problem.updated}T12:00:00Z`,
      tags: [problem.category, problem.brand || problem.device, ...(problem.tags || [])].filter(Boolean),
    }));

  return Response.json({
    version: "https://jsonfeed.org/version/1.1",
    title: `${SITE_NAME} troubleshooting updates`,
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.json`,
    description: SITE_DESCRIPTION,
    items,
  }, {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
