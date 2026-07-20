import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Editorial policy", description: "How Troublio researches, structures, reviews, and updates troubleshooting content.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Editorial policy</span><h1>Direct answers, visible limits, safer next steps.</h1><p>The policy below defines how troubleshooting guidance is researched, structured, reviewed, corrected, and separated from commercial influence.</p></div></section>
      <article className="container prose-page">
        <h2>Evidence hierarchy</h2>
        <p>Model-specific manuals, official support documents, safety notices, standards, and manufacturer instructions take priority. General diagnostic reasoning is used only where it does not conflict with product documentation.</p>
        <h2>Source labels</h2>
        <p>Error-code guides require an official reference and a warning that meanings can vary by model, region, firmware, or product family. Symptom guides display whether official sources were checked or whether the page is general safety-first guidance.</p>
        <h2>Page structure</h2>
        <p>Each guide should identify the likely meaning, list observable causes, order checks from lower risk to higher complexity, compare outcomes, and state when the user should stop.</p>
        <h2>Safety</h2>
        <p>Guides do not instruct unqualified users to open mains-powered equipment, handle refrigerant, bypass interlocks, work near live circuits, or continue when heat, smoke, leaks, swelling, chemical smell, or structural damage is present.</p>
        <h2>Updates and corrections</h2>
        <p>Pages include a review date. Material changes to the diagnosis, safety path, sources, structured data, or internal links count as significant updates. Corrections should be made promptly and should not preserve outdated advice for traffic reasons.</p>
        <div className="callout"><strong>Found a problem?</strong><p>Use the problem submission page and include the exact guide title, model context, and the official document that conflicts with the page.</p><Link href="/submit-problem">Submit a correction or missing problem →</Link></div>
        <h2>User feedback</h2>
        <p>Helpful and not-yet-helpful votes are collected as aggregate analytics after consent. They are prioritization signals, not proof that a diagnosis is correct for every model.</p>
        <h2>Commercial independence</h2>
        <p>Advertisements or affiliate links must be visually separated from editorial guidance. Commercial relationships do not determine the diagnosis, source selection, or order of checks.</p>
      </article>
    </>
  );
}
