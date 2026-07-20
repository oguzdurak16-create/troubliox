import type { Metadata } from "next";
import Link from "next/link";
import { ProblemCard } from "@/components/ProblemCard";
import { problems } from "@/data/problems";

export const metadata: Metadata = {
  title: "Recently reviewed troubleshooting guides",
  description: "The latest troubleshooting guides reviewed or updated by Troublio.",
  alternates: { canonical: "/recent" },
};

export default function RecentGuidesPage() {
  const recent = [...problems]
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
    .slice(0, 72);
  const latestDate = recent[0]?.updated;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">Freshness log</span>
          <h1>Recently reviewed guides.</h1>
          <p>New and materially updated troubleshooting paths, ordered by their latest editorial review date.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/search">Search a problem</Link><a className="button button-secondary" href="/feed.xml">RSS feed</a></div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="results-heading"><h2>{recent.length} latest guides</h2><span>{latestDate ? `Latest review: ${new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(latestDate))}` : ""}</span></div>
          <div className="problem-grid">{recent.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
        </div>
      </section>
    </>
  );
}
