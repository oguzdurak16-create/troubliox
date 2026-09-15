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

  const [aggregateResponse, stepResponse] = await Promise.all([
    fetch(
      `${SUPABASE_URL}/rest/v1/troublio_problem_aggregates?problem_slug=eq.${encodeURIComponent(slug)}&select=experience_count,resolved_count,resolution_rate,top_solutions&limit=1`,
      { headers: headers(), cache: "no-store" },
    ),
    fetch(
      `${SUPABASE_URL}/rest/v1/troublio_step_aggregates?problem_slug=eq.${encodeURIComponent(slug)}&select=step_label,attempts,fixed_count,success_rate&order=attempts.desc`,
      { headers: headers(), cache: "no-store" },
    ),
  ]);

  if (!aggregateResponse.ok || !stepResponse.ok) {
    return NextResponse.json({ error: "Community experience lookup failed." }, { status: 502 });
  }

  const rows = (await aggregateResponse.json()) as Array<{
    experience_count: number;
    resolved_count: number;
    resolution_rate: number;
    top_solutions: Array<{ label: string; reports: number }> | null;
  }>;
  const stepRows = (await stepResponse.json()) as Array<{
    step_label: string;
    attempts: number;
    fixed_count: number;
    success_rate: number;
  }>;
  const row = rows[0];

  const body = {
    experienceCount: row?.experience_count || 0,
    resolvedCount: row?.resolved_count || 0,
    resolutionRate: row?.resolution_rate || 0,
    topSolutions: row?.top_solutions || [],
    stepStats: stepRows.map((item) => ({
      label: item.step_label,
      attempts: item.attempts,
      fixedCount: item.fixed_count,
      successRate: item.success_rate,
    })),
  };

  return NextResponse.json(body, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
  });
}

export async function POST() {
  return NextResponse.json(
    { error: "Direct contribution writes have moved to the protected contribution gateway." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
