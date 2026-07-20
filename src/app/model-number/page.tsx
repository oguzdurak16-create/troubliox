import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ModelNumberFinder } from "@/components/ModelNumberFinder";
import { modelNumberGuides } from "@/data/modelNumberGuides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find a model number before troubleshooting",
  description: "Find model-number, product-code, hardware-revision, and serial labels on appliances, printers, routers, TVs, and laptops.",
  alternates: { canonical: "/model-number" },
};

export default function ModelNumberPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Model number location guides",
    description: metadata.description,
    url: `${SITE_URL}/model-number`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: modelNumberGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `${SITE_URL}/model-number/${guide.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Find a model number" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">Identify the exact product</span>
          <h1>Find the model number before you troubleshoot.</h1>
          <p>Error codes, manuals, firmware, and parts can change inside the same product family. Find the complete label first.</p>
          <ModelNumberFinder />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Label location guides</span><h2>Choose the device in front of you.</h2></div></div>
          <div className="model-guide-grid">
            {modelNumberGuides.map((guide) => (
              <Link className="model-guide-card" href={`/model-number/${guide.slug}`} key={guide.slug}>
                <span>{guide.examples[0]}</span>
                <h2>{guide.name}</h2>
                <p>{guide.description}</p>
                <strong>Find the label →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container model-privacy-note">
          <div><span className="eyebrow">Privacy check</span><h2>Share the model, not the private identifiers.</h2></div>
          <p>When asking for help publicly, crop or cover serial numbers, service tags, Wi-Fi passwords, QR codes, and MAC addresses. Keep the model and hardware revision visible.</p>
        </div>
      </section>
    </>
  );
}
