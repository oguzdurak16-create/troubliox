import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ResetDecisionTool } from "@/components/ResetDecisionTool";
import { resetGuides } from "@/data/resetGuides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reset assistant: restart, network reset, or factory reset?",
  description: "Choose the least destructive reset for routers, printers, TVs, phones, Windows PCs, and appliance controls before erasing settings or data.",
  alternates: { canonical: "/reset" },
  openGraph: {
    title: "Troublio reset assistant",
    description: "Choose the safest reset level before deleting data or configuration.",
    url: "/reset",
  },
};

export default function ResetPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Troublio Reset Assistant",
    url: `${SITE_URL}/reset`,
    description: metadata.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reset assistant" }]} /></div>
      <section className="reset-hero">
        <div className="container reset-hero-grid">
          <div>
            <span className="eyebrow">Least-destructive reset first</span>
            <h1>Restart it without erasing the wrong thing.</h1>
            <p>A restart, power cycle, network reset, settings reset, and factory reset are not interchangeable. Choose the smallest reset that matches the failure.</p>
          </div>
          <div className="reset-ladder" aria-label="Reset impact levels">
            <span><strong>1</strong> Restart</span>
            <span><strong>2</strong> Power cycle</span>
            <span><strong>3</strong> Network reset</span>
            <span><strong>4</strong> Settings reset</span>
            <span><strong>5</strong> Factory reset</span>
          </div>
        </div>
      </section>
      <section className="section-tight"><div className="container"><ResetDecisionTool /></div></section>
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Reset guides</span><h2>Choose the exact device type.</h2></div><p>Each guide explains what remains, what may be removed, what to save first, and when a reset is the wrong fix.</p></div>
          <div className="reset-guide-grid">
            {resetGuides.map((guide) => (
              <Link className="reset-guide-card" href={`/reset/${guide.slug}`} key={guide.slug}>
                <span>{guide.levels.length} reset levels</span>
                <h2>{guide.name}</h2>
                <p>{guide.summary}</p>
                <ul>{guide.symptoms.slice(0, 3).map((symptom) => <li key={symptom}>{symptom}</li>)}</ul>
                <strong>Open reset guide →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container reset-rule-card">
          <div><span className="eyebrow">Core rule</span><h2>Do not factory-reset a hardware fault.</h2></div>
          <p>Leaks, overheating, burnt smells, swollen batteries, tripped breakers, grinding mechanisms, gas odor, damaged power supplies, and disappearing storage require isolation or qualified service rather than repeated resets.</p>
        </div>
      </section>
    </>
  );
}
