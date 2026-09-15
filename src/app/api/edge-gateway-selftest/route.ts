import { NextResponse } from "next/server";

const FUNCTION_URL = "https://ivvzpzmojfhtlfapfrxf.supabase.co/functions/v1/troublio-contribute";
const PUBLISHABLE_KEY = "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";
const ANON_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dnpwem1vamZodGxmYXBmcnhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NzMzNjIsImV4cCI6MjEwNTA0OTM2Mn0.BiyYL9jpdXVnlYFcy2fUSHyzQs4K7vWlgX-ugWh2wlo";

export async function GET() {
  if (process.env.VERCEL_ENV !== "preview") {
    return NextResponse.json({ error: "Not available." }, { status: 404 });
  }

  const response = await fetch(FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
      Authorization: `Bearer ${ANON_JWT}`,
      Origin: "https://www.troublio.com",
    },
    body: JSON.stringify({
      kind: "problem",
      slug: "samsung-washer-4c-4e-error",
      model: "TEST-EDGE-VERIFY-0915",
      resolved: false,
    }),
    cache: "no-store",
  });

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: { "Content-Type": response.headers.get("content-type") || "application/json", "Cache-Control": "no-store" },
  });
}
