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

function hashKey(parts: string[]) {
  return createHash("sha256").update(parts.join("|")).digest("hex");
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const slug = cleanText(body.slug, 180);
  const stepLabel = cleanText(body.stepLabel, 160);
  const fixed = body.fixed === true;
  const problem = getProblem(slug);

  if (!problem) return NextResponse.json({ error: "Unknown problem." }, { status: 404 });

  const step = problem.quickChecks.find((item) => item.title === stepLabel && item.level !== "stop");
  if (!step) return NextResponse.json({ error: "Unknown troubleshooting step." }, { status: 400 });

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const stepSubmissionKey = hashKey([forwardedFor, slug, stepLabel, day, "troublio-step-v1"]);

  const stepResponse = await fetch(`${SUPABASE_URL}/rest/v1/troublio_step_outcomes`, {
    method: "POST",
    headers: { ...headers(), Prefer: "return=minimal" },
    cache: "no-store",
    body: JSON.stringify({
      problem_slug: slug,
      step_label: stepLabel,
      fixed,
      submission_key: stepSubmissionKey,
    }),
  });

  if (stepResponse.status === 409) {
    return NextResponse.json({ error: "This check result was already recorded today." }, { status: 409 });
  }
  if (!stepResponse.ok) {
    return NextResponse.json({ error: "Check result could not be saved." }, { status: 502 });
  }

  let problemExperienceRecorded = false;

  if (fixed) {
    const problemSubmissionKey = hashKey([forwardedFor, slug, day, "troublio-problem-v1"]);
    const problemResponse = await fetch(`${SUPABASE_URL}/rest/v1/troublio_problem_experiences`, {
      method: "POST",
      headers: { ...headers(), Prefer: "return=minimal" },
      cache: "no-store",
      body: JSON.stringify({
        problem_slug: slug,
        brand: problem.brand || null,
        device: problem.device || null,
        model_text: null,
        resolved: true,
        solution_label: stepLabel,
        submission_key: problemSubmissionKey,
      }),
    });

    if (problemResponse.ok) problemExperienceRecorded = true;
    else if (problemResponse.status !== 409) {
      return NextResponse.json({
        ok: true,
        stepOutcomeRecorded: true,
        problemExperienceRecorded: false,
        warning: "The step result was saved, but the guide-level result could not be updated.",
      }, { status: 201, headers: { "Cache-Control": "no-store" } });
    }
  }

  return NextResponse.json({
    ok: true,
    stepOutcomeRecorded: true,
    problemExperienceRecorded,
  }, {
    status: 201,
    headers: { "Cache-Control": "no-store" },
  });
}
