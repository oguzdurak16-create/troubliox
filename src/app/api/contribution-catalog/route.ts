import { NextRequest, NextResponse } from "next/server";
import { getProblem } from "@/data/problems";

function cleanSlug(value: string) {
  return value.trim().toLowerCase().slice(0, 180);
}

export async function GET(request: NextRequest) {
  const slug = cleanSlug(request.nextUrl.searchParams.get("slug") || "");
  if (!/^[a-z0-9-]{1,180}$/.test(slug)) {
    return NextResponse.json({ error: "Invalid problem slug." }, { status: 400 });
  }

  const problem = getProblem(slug);
  if (!problem) {
    return NextResponse.json({ error: "Problem not found." }, { status: 404 });
  }

  const allowedSteps = problem.quickChecks
    .filter((step) => step.level !== "stop")
    .map((step) => step.title);

  return NextResponse.json({
    slug: problem.slug,
    brand: problem.brand || null,
    device: problem.device || null,
    allowedSteps,
    allowedSolutions: allowedSteps,
  }, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
  });
}
