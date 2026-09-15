const FUNCTION_URL = "https://ivvzpzmojfhtlfapfrxf.supabase.co/functions/v1/troublio-contribute";
const PUBLISHABLE_KEY = "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";
const ANON_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dnpwem1vamZodGxmYXBmcnhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NzMzNjIsImV4cCI6MjEwNTA0OTM2Mn0.BiyYL9jpdXVnlYFcy2fUSHyzQs4K7vWlgX-ugWh2wlo";

export type ContributionResult = {
  ok?: boolean;
  created?: boolean;
  updated?: boolean;
  duplicate?: boolean;
  error?: string;
};

export async function submitContribution(payload: Record<string, unknown>) {
  const response = await fetch(FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
      Authorization: `Bearer ${ANON_JWT}`,
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as ContributionResult;
  return { response, result };
}
