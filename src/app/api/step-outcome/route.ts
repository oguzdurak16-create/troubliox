import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Direct contribution writes have moved to the protected contribution gateway." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
