import Link from "next/link";
import type { Problem } from "@/data/problems";

function hostLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "source";
  }
}

export function SourceTrustPanel({ problem }: { problem: Problem }) {
  const hosts = Array.from(new Set((problem.sources || []).map((source) => hostLabel(source.url))));
  const sourceCount = problem.sources?.length || 0;

  return (
    <aside className="source-trust-panel" aria-label="Guide review information">
      <div className="source-trust-heading">
        <span className="source-trust-mark" aria-hidden="true">✓</span>
        <div>
          <strong>{sourceCount ? "Source-backed guide" : "General troubleshooting guide"}</strong>
          <span>Reviewed by the Troublio editorial desk</span>
        </div>
      </div>
      <dl>
        <div><dt>Last reviewed</dt><dd>{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(problem.updated))}</dd></div>
        <div><dt>Reference coverage</dt><dd>{sourceCount ? `${sourceCount} official ${sourceCount === 1 ? "source" : "sources"}` : "Safety-first general guidance"}</dd></div>
        <div><dt>Guide type</dt><dd>{problem.contentKind === "error-code" ? "Error-code diagnosis" : problem.contentKind === "symptom" ? "Symptom diagnosis" : "Troubleshooting guide"}</dd></div>
      </dl>
      {hosts.length ? <p>Checked against: {hosts.join(", ")}</p> : <p>Use the product manual as the deciding reference for model-specific instructions.</p>}
      <Link href="/editorial-policy">How Troublio reviews guides →</Link>
    </aside>
  );
}
