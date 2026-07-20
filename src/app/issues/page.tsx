import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getHubProblems, issueHubs } from "@/data/hubs";

export const metadata: Metadata = {
  title: "Troubleshooting by symptom",
  description: "Browse common problem types: not connecting, not starting, not draining, leaking, not printing, blue screens, update errors, no sound, black screens, overheating, slow performance, and disconnects.",
  alternates: { canonical: "/issues" },
};

export default function IssuesPage() {
  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Issues" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">Browse by symptom</span>
          <h1>What is the problem doing?</h1>
          <p>Start with observable behavior when no clear error code appears. Compare connection state, sound, timing, heat, water movement, and display behavior.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container hub-directory-grid">
          {issueHubs.map((hub) => {
            const count = getHubProblems(hub).length;
            return (
              <Link className="hub-directory-card" href={`/issues/${hub.slug}`} key={hub.slug}>
                <span>{count} matching guides</span>
                <h2>{hub.name}</h2>
                <p>{hub.description}</p>
                <strong>Browse this issue →</strong>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
