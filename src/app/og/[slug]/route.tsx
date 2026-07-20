import { ImageResponse } from "next/og";
import { getProblem } from "@/data/problems";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const problem = getProblem(slug);
  const title = problem?.title || "Find what’s wrong. Know what to do.";
  const label = problem?.errorCode || problem?.category || "Troubleshooting guide";
  const brand = problem?.brand || problem?.device || "Troublio";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", padding: "64px", color: "#10282a", background: "#f7f4eb", fontFamily: "Arial, sans-serif" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "2px solid #c9d5cf", borderRadius: "34px", padding: "50px", background: "#fffdf7" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: 34, fontWeight: 800 }}>
              <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px", color: "#ffffff", background: "#106059" }}>!</div>
              Troublio
            </div>
            <div style={{ padding: "12px 20px", borderRadius: "999px", fontSize: 22, fontWeight: 800, color: "#104d48", background: "#eaf4d7" }}>{label}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ fontSize: 61, lineHeight: 1.08, letterSpacing: "-2px", fontWeight: 850, maxWidth: "1000px" }}>{title}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 25, color: "#536a65" }}>
              <span>{brand}</span><span>•</span><span>Safe checks first</span><span>•</span><span>Official sources where available</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 23, fontWeight: 700 }}>
            <span>Find what’s wrong. Know what to do.</span><span style={{ color: "#106059" }}>troublio.com</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800" },
    },
  );
}
