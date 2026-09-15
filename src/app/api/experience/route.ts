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

export async function POST() {
  return NextResponse.json(
    { error: "Direct contribution writes have moved to the protected contribution gateway." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
