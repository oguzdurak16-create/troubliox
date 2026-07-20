import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "About Troublio and its symptom-first troubleshooting approach.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <><section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">About Troublio</span><h1>Problem-first guidance for things that stop working.</h1><p>Troublio turns vague symptoms and error codes into structured, safe troubleshooting paths.</p></div></section><article className="container prose-page"><h2>What Troublio is</h2><p>Troublio is an independent troubleshooting reference. Guides begin with the most likely meaning, then separate safe observations from steps that require qualified service.</p><h2>What Troublio is not</h2><p>It is not an emergency service, manufacturer support channel, medical service, legal service, or substitute for a qualified technician. It does not ask users to bypass safety systems or perform hazardous work.</p><h2>How the site grows</h2><p>New guides are prioritized from real search patterns, recurring symptoms, documented error codes, and submitted problem wording. Pages are reviewed as products and software change.</p></article></>;
}
