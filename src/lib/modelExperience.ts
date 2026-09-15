const SUPABASE_URL = process.env.SUPABASE_URL || "https://ivvzpzmojfhtlfapfrxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";

export type ModelIssueAggregate = { slug: string; reports: number };
export type ModelSolutionAggregate = { label: string; reports: number };

export type ModelExperienceAggregate = {
  brandKey: string;
  modelKey: string;
  brand: string;
  model: string;
  reportCount: number;
  resolvedCount: number;
  resolutionRate: number;
  topIssues: ModelIssueAggregate[];
  topSolutions: ModelSolutionAggregate[];
  lastContributionAt: string | null;
  updatedAt: string;
};

type DbModelExperienceAggregate = {
  brand_key: string;
  model_key: string;
  brand: string;
  model: string;
  report_count: number;
  resolved_count: number;
  resolution_rate: number;
  top_issues: ModelIssueAggregate[] | null;
  top_solutions: ModelSolutionAggregate[] | null;
  last_contribution_at: string | null;
  updated_at: string;
};

function headers() {
  return { apikey: SUPABASE_PUBLISHABLE_KEY };
}

function mapRow(row: DbModelExperienceAggregate): ModelExperienceAggregate {
  return {
    brandKey: row.brand_key,
    modelKey: row.model_key,
    brand: row.brand,
    model: row.model,
    reportCount: row.report_count,
    resolvedCount: row.resolved_count,
    resolutionRate: row.resolution_rate,
    topIssues: row.top_issues || [],
    topSolutions: row.top_solutions || [],
    lastContributionAt: row.last_contribution_at,
    updatedAt: row.updated_at,
  };
}

export function isModelIndexEligible(model: ModelExperienceAggregate) {
  const safeLabel = /^[A-Za-z0-9][A-Za-z0-9 ._/+()-]{1,79}$/.test(model.model);
  const safeBrand = /^[A-Za-z0-9][A-Za-z0-9 ._+()-]{0,59}$/.test(model.brand);
  return model.reportCount >= 3 && safeLabel && safeBrand;
}

export async function getModelExperience(brandKey: string, modelKey: string): Promise<ModelExperienceAggregate | null> {
  const select = "brand_key,model_key,brand,model,report_count,resolved_count,resolution_rate,top_issues,top_solutions,last_contribution_at,updated_at";
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_model_aggregates?brand_key=eq.${encodeURIComponent(brandKey)}&model_key=eq.${encodeURIComponent(modelKey)}&select=${select}&limit=1`,
    { headers: headers(), next: { revalidate: 300 } },
  );
  if (!response.ok) return null;
  const rows = (await response.json()) as DbModelExperienceAggregate[];
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function listModelExperiences(limit = 100): Promise<ModelExperienceAggregate[]> {
  const select = "brand_key,model_key,brand,model,report_count,resolved_count,resolution_rate,top_issues,top_solutions,last_contribution_at,updated_at";
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_model_aggregates?select=${select}&order=report_count.desc,updated_at.desc&limit=${Math.max(1, Math.min(limit, 500))}`,
    { headers: headers(), next: { revalidate: 300 } },
  );
  if (!response.ok) return [];
  const rows = (await response.json()) as DbModelExperienceAggregate[];
  return rows.map(mapRow);
}

export async function listIndexableModelExperiences(limit = 5000): Promise<ModelExperienceAggregate[]> {
  const select = "brand_key,model_key,brand,model,report_count,resolved_count,resolution_rate,top_issues,top_solutions,last_contribution_at,updated_at";
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/troublio_model_aggregates?report_count=gte.3&select=${select}&order=report_count.desc&limit=${Math.max(1, Math.min(limit, 5000))}`,
    { headers: headers(), next: { revalidate: 3600 } },
  );
  if (!response.ok) return [];
  const rows = (await response.json()) as DbModelExperienceAggregate[];
  return rows.map(mapRow).filter(isModelIndexEligible);
}
