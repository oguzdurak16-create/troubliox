import "server-only";
import type { Problem } from "@/data/problems";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://ivvzpzmojfhtlfapfrxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";
const REVALIDATE_SECONDS = 300;

type PublishedProblemRow = {
  slug: string;
  problem_json: unknown;
  published_at: string;
};

function headers() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    "Content-Type": "application/json",
  };
}

function isText(value: unknown, min = 1) {
  return typeof value === "string" && value.trim().length >= min;
}

function isPublishedProblem(value: unknown): value is Problem {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const problem = value as Record<string, unknown>;
  const contentKind = problem.contentKind;
  const sources = problem.sources;

  if (!isText(problem.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(problem.slug as string)) return false;
  if (!isText(problem.title, 20) || !isText(problem.shortTitle, 10) || !isText(problem.summary, 80)) return false;
  if (!isText(problem.category) || !isText(problem.categorySlug) || !isText(problem.device, 2)) return false;
  if (!isText(problem.updated) || !/^20\d{2}-\d{2}-\d{2}$/.test(problem.updated as string)) return false;
  if (typeof problem.readTime !== "number" || !Number.isFinite(problem.readTime) || problem.readTime < 2 || problem.readTime > 20) return false;
  if (!Array.isArray(problem.likelyCauses) || problem.likelyCauses.length < 3 || !problem.likelyCauses.every((item) => isText(item))) return false;
  if (!Array.isArray(problem.quickChecks) || problem.quickChecks.length < 3 || !problem.quickChecks.every((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return false;
    const check = item as Record<string, unknown>;
    return isText(check.title) && isText(check.detail) && ["safe", "caution", "stop"].includes(String(check.level || ""));
  })) return false;
  if (!Array.isArray(problem.observations) || problem.observations.length < 2 || !problem.observations.every((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return false;
    const observation = item as Record<string, unknown>;
    return isText(observation.label) && isText(observation.advice);
  })) return false;
  if (!Array.isArray(problem.whenToStop) || problem.whenToStop.length < 2 || !problem.whenToStop.every((item) => isText(item))) return false;
  if (!Array.isArray(problem.faq) || problem.faq.length < 2 || !problem.faq.every((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return false;
    const faq = item as Record<string, unknown>;
    return isText(faq.question) && isText(faq.answer);
  })) return false;
  if (!Array.isArray(problem.tags) || problem.tags.length < 3 || !problem.tags.every((item) => isText(item))) return false;
  if (!["error-code", "symptom", "general"].includes(String(contentKind || ""))) return false;
  if (!Array.isArray(sources) || sources.length < 1 || !sources.every((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return false;
    const source = item as Record<string, unknown>;
    return isText(source.label) && typeof source.url === "string" && source.url.startsWith("https://");
  })) return false;

  if (contentKind === "error-code") {
    if (!isText(problem.errorCode) || !isText(problem.brand) || !isText(problem.brandSlug) || !isText(problem.modelNote)) return false;
  }

  return true;
}

async function callRpc(name: string, body: Record<string, unknown>): Promise<PublishedProblemRow[]> {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) throw new Error(`Published Troublio content lookup failed (${response.status}).`);
  return (await response.json()) as PublishedProblemRow[];
}

export async function listPublishedDemandProblems(): Promise<Problem[]> {
  try {
    const rows = await callRpc("troublio_get_published_problems", {});
    const seen = new Set<string>();
    const valid: Problem[] = [];
    for (const row of rows) {
      if (!isPublishedProblem(row.problem_json) || row.problem_json.slug !== row.slug || seen.has(row.slug)) continue;
      seen.add(row.slug);
      valid.push(row.problem_json);
    }
    return valid;
  } catch {
    return [];
  }
}

export async function getPublishedDemandProblem(slug: string): Promise<Problem | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  try {
    const rows = await callRpc("troublio_get_published_problem", { p_slug: slug });
    const row = rows[0];
    return row && row.slug === slug && isPublishedProblem(row.problem_json) && row.problem_json.slug === slug
      ? row.problem_json
      : null;
  } catch {
    return null;
  }
}

export function mergePublishedProblems(base: Problem[], published: Problem[]): Problem[] {
  const bySlug = new Map(base.map((problem) => [problem.slug, problem]));
  for (const problem of published) {
    if (!bySlug.has(problem.slug)) bySlug.set(problem.slug, problem);
  }
  return Array.from(bySlug.values());
}
