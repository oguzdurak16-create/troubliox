import "../tooling.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ErrorCodeDecoder } from "@/components/ErrorCodeDecoder";
import { problemStats } from "@/data/problems";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Error code decoder for appliances, Windows, printers and devices",
  description: "Enter the exact error code, brand, and device to find matching Troublio diagnosis guides and model-specific safety notes.",
  alternates: { canonical: "/decoder" },
  openGraph: { title: "Troublio error code decoder", description: "Match an exact code to safe troubleshooting guides.", url: "/decoder" },
};

export default function DecoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Troublio Error Code Decoder",
    url: `${SITE_URL}/decoder`,
    description: metadata.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Error code decoder" }]} /></div>
      <section className="decoder-hero">
        <div className="container decoder-hero-grid">
          <div>
            <span className="eyebrow">Exact-code lookup</span>
            <h1>Decode the display before replacing anything.</h1>
            <p>Enter the complete code exactly as shown. Add the brand and device when you know them, then verify the full model before acting on a match.</p>
            <div className="decoder-stats"><span><strong>{problemStats.errorCodes}</strong> indexed codes</span><span><strong>{problemStats.brands}</strong> brands</span><span><strong>Free</strong> no account</span></div>
          </div>
          <aside className="decoder-tip"><span>Better match</span><strong>Use the full display</strong><p>“E15” is better than “15.” “0x80070005” is better than “access denied.” Include punctuation on the first try.</p><Link href="/model-number">Where is the model label? →</Link></aside>
        </div>
      </section>
      <section className="section-tight"><div className="container"><ErrorCodeDecoder /></div></section>
      <section className="section section-muted">
        <div className="container decoder-help-grid">
          <article><span>01</span><h2>Do not assume one code has one global meaning.</h2><p>The same characters can mean different things on another brand, device type, region, or product generation.</p></article>
          <article><span>02</span><h2>Match the symptom after the code.</h2><p>Use water movement, sound, timing, startup behavior, lights, or the failed action to confirm whether the guide fits.</p></article>
          <article><span>03</span><h2>Stop at covers, live power, gas, heat, or pressure.</h2><p>Troublio prioritizes external observations. Qualified service is the right step when safe access ends.</p></article>
        </div>
      </section>
    </>
  );
}
