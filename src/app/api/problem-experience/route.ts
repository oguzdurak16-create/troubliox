import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getProblem } from "@/data/problems";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://ivvzpzmojfhtlfapfrxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";

function headers() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    "Content-Type": "application/json",
  };
}

function cleanText(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET(request: NextRequest) {
  const slug = cleanText(request.nextUrl.searchParams.get("slug"), 180);
  if (!slug || !getProblem(slug)) {
    return NextResponse.json({ error: "Unknown problem." }, { status: 404 });
  }

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_problem_aggregates?problem_slug=eq.${encodeURIComponent(slug)}&select=experience_count,resolved_count,resolution_rate,top_solutions&limit=1`,
    { headers: headers(), cache: "no-store" },
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Community experience lookup failed." }, { status: 502 });
  }

  const rows = (await response.json()) as Array<{
    experience_count: number;
    resolved_count: number;
    resolution_rate: number;
    top_solutions: Array<{ label: string; reports: number }> | null;
  }>;
  const row = rows[0];

  const body = {
    experienceCount: row?.experience_count || 0,
    resolvedCount: row?.resolved_count || 0,
    resolutionRate: row?.resolution_rate || 0,
    topSolutions: row?.top_solutions || [],
  };

  return NextResponse.json(body, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const slug = cleanText(body.slug, 180);
  const modelText = cleanText(body.model, 160) || null;
  const resolved = body.resolved === true;
  const solutionLabel = resolved ? cleanText(body.solutionLabel, 160) : "";
  const problem = getProblem(slug);

  if (!problem) return NextResponse.json({ error: "Unknown problem." }, { status: 404 });

  const allowedSolutions = new Set([
    ...problem.quickChecks.map((item) => item.title),
    "Other / service repair",
  ]);
  if (resolved && (!solutionLabel || !allowedSolutions.has(solutionLabel))) {
    return NextResponse.json({ error: "Choose one of the available solution paths." }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const submissionKey = createHash("sha256")
    .update(`${forwardedFor}|${slug}|${day}|troublio-problem-v1`)
    .digest("hex");

  const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/troublio_problem_experiences`, {
    method: "POST",
    headers: { ...headers(), Prefer: "return=minimal" },
    cache: "no-store",
    body: JSON.stringify({
      problem_slug: slug,
      brand: problem.brand || null,
      device: problem.device || null,
      model_text: modelText,
      resolved,
      solution_label: resolved ? solutionLabel : null,
      submission_key: submissionKey,
    }),
  });

  if (insertResponse.status === 409) {
    return NextResponse.json({ error: "Your experience for this issue was already recorded today." }, { status: 409 });
  }
  if (!insertResponse.ok) {
    return NextResponse.json({ error: "Experience could not be saved." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, {
    status: 201,
    headers: { "Cache-Control": "no-store" },
  });
}
