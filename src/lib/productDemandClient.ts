const PRODUCT_DEMAND_URL = "https://ivvzpzmojfhtlfapfrxf.supabase.co/functions/v1/troublio-product-demand";
const PUBLISHABLE_KEY = "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";

export type ProductDemandResult = {
  ok?: boolean;
  created?: boolean;
  duplicate?: boolean;
  exists?: boolean;
  slug?: string;
  error?: string;
};

export async function submitProductDemand(payload: { brand: string; model: string; category: string }) {
  const response = await fetch(PRODUCT_DEMAND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as ProductDemandResult;
  return { response, result };
}
