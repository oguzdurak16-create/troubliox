import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://ivvzpzmojfhtlfapfrxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";

function headers() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    "Content-Type": "application/json",
  };
}

function cleanText(value: unknown, max = 120) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET(request: NextRequest) {
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

  const aggregateResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_product_aggregates?product_id=eq.${product.id}&select=ownership_count,median_months,issue_rate,would_buy_again,common_issues&limit=1`,
    { headers: headers(), cache: "no-store" },
  );

  if (!aggregateResponse.ok) {
    return NextResponse.json({ error: "Experience aggregate lookup failed." }, { status: 502 });
  }

  const aggregates = (await aggregateResponse.json()) as Array<{
    ownership_count: number;
    median_months: number;
    issue_rate: number;
    would_buy_again: number;
    common_issues: Array<{ label: string; reports: number }> | null;
  }>;
  const aggregate = aggregates[0] || {
    ownership_count: 0,
    median_months: 0,
    issue_rate: 0,
    would_buy_again: 0,
    common_issues: [],
  };

  return NextResponse.json({
    configured: true,
    product,
    stats: {
      ownershipCount: aggregate.ownership_count,
      medianMonths: aggregate.median_months,
      issueRate: aggregate.issue_rate,
      wouldBuyAgain: aggregate.would_buy_again,
      commonIssues: aggregate.common_issues || [],
    },
  });
}

export async function POST(request: NextRequest) {
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
  if (hadProblem && !problemLabel) {
    return NextResponse.json({ error: "Describe the problem that occurred." }, { status: 400 });
  }
  if (!/^[A-Z]{3}$/.test(currency)) {
    return NextResponse.json({ error: "Invalid currency." }, { status: 400 });
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
