import { problems } from "@/data/problems";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] || character);
}

export function GET() {
  const items = [...problems]
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
    .slice(0, 80)
    .map((problem) => `
      <item>
        <title>${escapeXml(problem.title)}</title>
        <link>${SITE_URL}/problems/${problem.slug}</link>
        <guid isPermaLink="true">${SITE_URL}/problems/${problem.slug}</guid>
        <description>${escapeXml(problem.summary)}</description>
        <category>${escapeXml(problem.category)}</category>
        <pubDate>${new Date(`${problem.updated}T12:00:00Z`).toUTCString()}</pubDate>
      </item>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(SITE_NAME)} troubleshooting updates</title>
        <link>${SITE_URL}</link>
        <description>${escapeXml(SITE_DESCRIPTION)}</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
