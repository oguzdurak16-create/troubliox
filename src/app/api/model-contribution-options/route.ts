import { NextRequest, NextResponse } from "next/server";
import { problems } from "@/data/problems";

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export async function GET(request: NextRequest) {
  const rawQuery = request.nextUrl.searchParams.get("q") || "";
  const query = normalize(rawQuery).slice(0, 80);

  if (query.length < 2) {
    return NextResponse.json({ options: [] }, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  }

  const terms = query.split(/\s+/).filter(Boolean);
  const options = problems
    .filter((problem) => Boolean(problem.brand))
    .map((problem) => {
      const haystack = normalize([
        problem.brand || "",
        problem.device || "",
        problem.shortTitle || "",
        problem.title,
        problem.errorCode || "",
        ...(problem.tags || []),
      ].join(" "));
      const matchedTerms = terms.filter((term) => haystack.includes(term)).length;
      const startsWithBrand = problem.brand ? normalize(problem.brand).startsWith(terms[0] || "") : false;
      return { problem, matchedTerms, startsWithBrand };
    })
    .filter(({ matchedTerms }) => matchedTerms === terms.length)
    .sort((a, b) => Number(b.startsWithBrand) - Number(a.startsWithBrand) || a.problem.title.localeCompare(b.problem.title))
    .slice(0, 12)
    .map(({ problem }) => ({
      slug: problem.slug,
      brand: problem.brand,
      device: problem.device,
      title: problem.shortTitle || problem.title,
      solutions: problem.quickChecks
        .filter((step) => step.level !== "stop")
        .slice(0, 4)
        .map((step) => step.title),
    }));

  return NextResponse.json({ options }, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
  });
}
