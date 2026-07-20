import { problems } from "@/data/problems";
import { buildSearchIndex } from "@/lib/search-index";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex(problems), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "noindex",
    },
  });
}
