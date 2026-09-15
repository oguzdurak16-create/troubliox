import { problems } from "@/data/problems";
import { listPublishedDemandProblems, mergePublishedProblems } from "@/lib/publishedDemandProblems";
import { buildSearchIndex } from "@/lib/search-index";

export const revalidate = 300;

export async function GET() {
  const published = await listPublishedDemandProblems();
  const allProblems = mergePublishedProblems(problems, published);

  return Response.json(buildSearchIndex(allProblems), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
