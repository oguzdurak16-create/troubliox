import "server-only";
import { experienceSeed, type ExperienceProduct } from "@/data/experienceSeed";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://ivvzpzmojfhtlfapfrxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";
const REVALIDATE_SECONDS = 300;
export const EXPERIENCE_INDEX_MIN_OWNERS = 10;

type ProductRow = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category: string;
};

type AggregateRow = {
  product_id: string;
  ownership_count: number | null;
  median_months: number | null;
  issue_rate: number | null;
  would_buy_again: number | null;
  common_issues: Array<{ label: string; reports: number }> | null;
  updated_at: string | null;
};

function headers() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    "Content-Type": "application/json",
  };
}

function normalizeIssueList(value: AggregateRow["common_issues"]) {
  return Array.isArray(value)
    ? value
        .filter((item) => item && typeof item.label === "string" && Number.isFinite(Number(item.reports)))
        .map((item) => ({ label: item.label.slice(0, 120), reports: Math.max(0, Number(item.reports)) }))
        .slice(0, 8)
    : [];
}

function asExperienceProduct(product: ProductRow, aggregate?: AggregateRow): ExperienceProduct {
  return {
    slug: product.slug,
    brand: product.brand,
    model: product.model,
    category: product.category,
    ownershipCount: Math.max(0, Number(aggregate?.ownership_count || 0)),
    medianMonths: Math.max(0, Number(aggregate?.median_months || 0)),
    issueRate: Math.max(0, Math.min(100, Number(aggregate?.issue_rate || 0))),
    wouldBuyAgain: Math.max(0, Math.min(100, Number(aggregate?.would_buy_again || 0))),
    commonIssues: normalizeIssueList(aggregate?.common_issues || []),
    demo: false,
    updatedAt: aggregate?.updated_at || undefined,
  };
}

export function isExperienceProductIndexable(product: ExperienceProduct) {
  return !product.demo && product.ownershipCount >= EXPERIENCE_INDEX_MIN_OWNERS;
}

export async function listExperienceProducts(): Promise<ExperienceProduct[]> {
  try {
    const [productsResponse, aggregatesResponse] = await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/troublio_products?select=id,slug,brand,model,category&order=brand.asc,model.asc&limit=1000`, {
        headers: headers(),
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch(`${SUPABASE_URL}/rest/v1/troublio_product_aggregates?select=product_id,ownership_count,median_months,issue_rate,would_buy_again,common_issues,updated_at&limit=1000`, {
        headers: headers(),
        next: { revalidate: REVALIDATE_SECONDS },
      }),
    ]);

    if (!productsResponse.ok || !aggregatesResponse.ok) throw new Error("experience_catalog_lookup_failed");

    const products = (await productsResponse.json()) as ProductRow[];
    const aggregates = (await aggregatesResponse.json()) as AggregateRow[];
    const aggregateByProduct = new Map(aggregates.map((row) => [row.product_id, row]));
    const live = products
      .filter((row) => row.slug && row.brand && row.model && row.category)
      .map((row) => asExperienceProduct(row, aggregateByProduct.get(row.id)));

    if (!live.length) return experienceSeed;

    const bySlug = new Map(live.map((product) => [product.slug, product]));
    for (const seed of experienceSeed) {
      if (!bySlug.has(seed.slug)) bySlug.set(seed.slug, seed);
    }
    return Array.from(bySlug.values()).sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
  } catch {
    return experienceSeed;
  }
}

export async function listIndexableExperienceProducts(): Promise<ExperienceProduct[]> {
  const products = await listExperienceProducts();
  return products.filter(isExperienceProductIndexable);
}

export async function getExperienceProduct(slug: string): Promise<ExperienceProduct | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const products = await listExperienceProducts();
  return products.find((product) => product.slug === slug) || null;
}
