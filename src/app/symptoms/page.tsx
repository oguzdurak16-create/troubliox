import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { problems } from "@/data/problems";

export const metadata: Metadata = {
  title: "Appliance symptom guides",
  description: "Troubleshoot washing-machine and dishwasher symptoms even when no error code is shown.",
  alternates: { canonical: "/symptoms" },
};

export default function SymptomsPage() {
  const symptomGuides = problems.filter((problem) => problem.contentKind === "symptom");
  const washers = symptomGuides.filter((problem) => problem.device === "Washing machine").length;
  const dishwashers = symptomGuides.filter((problem) => problem.device === "Dishwasher").length;

  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Symptoms" }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Symptom library</span><h1>No code? Start with what the appliance does.</h1><p>These guides use visible behavior, timing, sound, water movement, and basic external checks rather than assuming a failed component.</p></div></section>
      <section className="section-tight"><div className="container error-hub-grid">
        <Link className="error-hub-card" href="/symptoms/washing-machines"><span className="error-hub-count">{washers} guides</span><h2>Washing-machine symptoms</h2><p>Draining, spinning, filling, leaks, vibration, smells, doors, and startup.</p><strong>Browse washer symptoms →</strong></Link>
        <Link className="error-hub-card" href="/symptoms/dishwashers"><span className="error-hub-count">{dishwashers} guides</span><h2>Dishwasher symptoms</h2><p>Draining, cleaning, filling, leaks, drying, odors, noise, and startup.</p><strong>Browse dishwasher symptoms →</strong></Link>
      </div></section>
    </>
  );
}
