import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DiagnoseFinder } from "@/components/DiagnoseFinder";

export const metadata: Metadata = {
  title: "Guided problem diagnosis",
  description: "Describe a symptom or error code and match it to the most relevant Troublio troubleshooting guides.",
  alternates: { canonical: "/diagnose" },
};

export default function DiagnosePage() {
  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guided diagnosis" }]} /></div>
      <section className="page-hero diagnose-hero">
        <div className="container">
          <div className="page-hero-narrow"><span className="eyebrow">Troublio diagnosis</span><h1>Describe what is happening.</h1><p>Troublio ranks existing guides by visible symptom, exact display, category, and brand. It does not guess a failed part from one code.</p></div>
          <DiagnoseFinder />
        </div>
      </section>
    </>
  );
}
