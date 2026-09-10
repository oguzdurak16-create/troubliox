import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

function isConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_SECRET_KEY);
}

function headers() {
  return {
    apikey: SUPABASE_SECRET_KEY || "",
    Authorization: `Bearer ${SUPABASE_SECRET_KEY || ""}`,
    "Content-Type": "application/json",
  };
}

function cleanText(value: unknown, max = 120) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET(request: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ mode: "demo", configured: false });
  }

  const slug = cleanText(request.nextUrl.searchParams.get("slug"), 160);
  if (!slug) {
    return NextResponse.json({ error: "Missing product slug." }, { status: 400 });
  }

  const productResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_products?slug=eq.${encodeURIComponent(slug)}&select=id,slug,brand,model,category&limit=1`,
    { headers: headers(), cache: "no-store" },
  );

  if (!productResponse.ok) {
    return NextResponse.json({ error: "Product lookup failed." }, { status: 502 });
  }

  const products = (await productResponse.json()) as Array<{
    id: string;
    slug: string;
    brand: string;
    model: string;
    category: string;
  }>;
  const product = products[0];

  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const experienceResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_experiences?product_id=eq.${product.id}&select=use_months,still_using,had_problem,problem_label,would_buy_again`,
    { headers: headers(), cache: "no-store" },
  );

  if (!experienceResponse.ok) {
    return NextResponse.json({ error: "Experience lookup failed." }, { status: 502 });
  }

  const rows = (await experienceResponse.json()) as Array<{
    use_months: number;
    still_using: boolean;
    had_problem: boolean;
    problem_label: string | null;
    would_buy_again: boolean;
  }>;

  const sortedMonths = rows.map((row) => row.use_months).sort((a, b) => a - b);
  const medianMonths = sortedMonths.length
    ? sortedMonths[Math.floor((sortedMonths.length - 1) / 2)]
    : 0;
  const problemCount = rows.filter((row) => row.had_problem).length;
  const buyAgainCount = rows.filter((row) => row.would_buy_again).length;
  const issueCounts = new Map<string, number>();

  for (const row of rows) {
    if (row.had_problem && row.problem_label) {
      issueCounts.set(row.problem_label, (issueCounts.get(row.problem_label) || 0) + 1);
    }
  }

  const commonIssues = [...issueCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([label, reports]) => ({ label, reports }));

  return NextResponse.json({
    configured: true,
    product,
    stats: {
      ownershipCount: rows.length,
      medianMonths,
      issueRate: rows.length ? Math.round((problemCount / rows.length) * 100) : 0,
      wouldBuyAgain: rows.length ? Math.round((buyAgainCount / rows.length) * 100) : 0,
      commonIssues,
    },
  });
}

export async function POST(request: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Shared experience database is not configured yet." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const productSlug = cleanText(body.productSlug, 160);
  const useMonths = Number(body.useMonths);
  const stillUsing = Boolean(body.stillUsing);
  const hadProblem = Boolean(body.hadProblem);
  const wouldBuyAgain = Boolean(body.wouldBuyAgain);
  const problemLabel = hadProblem ? cleanText(body.problemLabel, 120) : "";
  const repairCost = body.repairCost === "" || body.repairCost == null ? null : Number(body.repairCost);
  const currency = cleanText(body.currency, 3).toUpperCase() || "USD";

  if (!productSlug || !Number.isInteger(useMonths) || useMonths < 0 || useMonths > 600) {
    return NextResponse.json({ error: "Invalid experience data." }, { status: 400 });
  }
  if (repairCost !== null && (!Number.isFinite(repairCost) || repairCost < 0 || repairCost > 10000000)) {
    return NextResponse.json({ error: "Invalid repair cost." }, { status: 400 });
  }

  const productResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_products?slug=eq.${encodeURIComponent(productSlug)}&select=id&limit=1`,
    { headers: headers(), cache: "no-store" },
  );
  if (!productResponse.ok) {
    return NextResponse.json({ error: "Product lookup failed." }, { status: 502 });
  }
  const products = (await productResponse.json()) as Array<{ id: string }>;
  const product = products[0];
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const submissionKey = createHash("sha256")
    .update(`${forwardedFor}|${product.id}|${day}|troublio-v1`)
    .digest("hex");

  const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/troublio_experiences`, {
    method: "POST",
    headers: { ...headers(), Prefer: "return=minimal" },
    body: JSON.stringify({
      product_id: product.id,
      use_months: useMonths,
      still_using: stillUsing,
      had_problem: hadProblem,
      problem_label: problemLabel || null,
      repair_cost: repairCost,
      currency,
      would_buy_again: wouldBuyAgain,
      submission_key: submissionKey,
    }),
  });

  if (insertResponse.status === 409) {
    return NextResponse.json({ error: "A contribution for this product was already received today." }, { status: 409 });
  }
  if (!insertResponse.ok) {
    return NextResponse.json({ error: "Contribution could not be saved." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
