import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { errorCodeClusters } from "@/data/errorCodeClusters";

export const metadata: Metadata = {
  title: "Error codes by brand and device",
  description: "Browse focused error-code libraries for Bosch, Samsung, LG, Whirlpool, GE Appliances, Canon, HP, and other supported brands and devices.",
  alternates: { canonical: "/error-codes/brands" },
};

export default function ErrorCodeBrandsPage() {
  const totalGuides = errorCodeClusters.reduce((sum, cluster) => sum + cluster.problems.length, 0);

  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Error codes", href: "/error-codes" }, { label: "Brands and devices" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{errorCodeClusters.length} focused libraries · {totalGuides} code guides</span>
          <h1>Error codes by brand and device.</h1>
          <p>Choose the exact maker and device before using a code meaning. Similar displays can mean different things on a washer, dishwasher, dryer, printer, or another product family.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container error-hub-grid">
          {errorCodeClusters.map((cluster) => (
            <Link className="error-hub-card" href={`/error-codes/brands/${cluster.slug}`} key={cluster.slug}>
              <span className="error-hub-count">{cluster.problems.length}</span>
              <h2>{cluster.brand} {cluster.device.toLowerCase()} codes</h2>
              <p>{cluster.description}</p>
              <strong>Browse all codes →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container cross-library-card">
          <div>
            <span className="eyebrow">Search accurately</span>
            <h2>Use every character shown on the display.</h2>
            <p>Include spaces, dashes, colons, flashing icons, and the complete model number. A code such as 5d can be confused with 5E, while E90 can describe different faults on different appliance types.</p>
          </div>
          <Link className="button button-primary" href="/decoder">Open the error-code decoder</Link>
        </div>
      </section>
    </>
  );
}
