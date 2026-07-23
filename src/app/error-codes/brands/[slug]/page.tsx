import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { errorCodeClusters, getErrorCodeCluster } from "@/data/errorCodeClusters";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return errorCodeClusters.map((cluster) => ({ slug: cluster.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getErrorCodeCluster(slug);
  if (!cluster) return {};

  const title = `${cluster.brand} ${cluster.device} Error Codes & Fixes`;
  return {
    title,
    description: cluster.description,
    alternates: { canonical: `/error-codes/brands/${cluster.slug}` },
    openGraph: {
      type: "website",
      title,
      description: cluster.description,
      url: `/error-codes/brands/${cluster.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cluster.description,
    },
  };
}

function firstChecks(device: string) {
  const normalized = device.toLowerCase();
  if (normalized === "washing machine") return ["Pause the cycle and record the exact display before resetting it.", "Check the water supply, drain path, door, load balance, and visible leaks without opening panels.", "Match the complete model number because the same code can vary by product family and market."];
  if (normalized === "dishwasher") return ["Record the complete code and any flashing tap, drain, or warning icon.", "Check for visible water, a blocked filter, a kinked hose, and a fully open supply valve.", "Keep power and water off when a leak, burning smell, or breaker trip is present."];
  if (normalized === "printer") return ["Record the complete code and whether it appeared during startup, feeding, or printing.", "Check accessible paper paths, doors, cartridges, and cables without forcing moving parts.", "Use the exact printer family and regional manual before replacing a printhead or board."];
  return ["Record the complete code before restarting the device.", "Start with user-accessible checks and stop before opening powered equipment.", "Verify the exact model and official manual when code meanings differ."];
}

export default async function ErrorCodeClusterPage({ params }: Props) {
  const { slug } = await params;
  const cluster = getErrorCodeCluster(slug);
  if (!cluster) notFound();

  const codeList = cluster.problems.map((problem) => problem.errorCode).filter(Boolean).join(", ");
  const checks = firstChecks(cluster.device);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cluster.title,
    description: cluster.description,
    numberOfItems: cluster.problems.length,
    itemListElement: cluster.problems.map((problem, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: problem.shortTitle,
      url: `${SITE_URL}/problems/${problem.slug}`,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Error codes", item: `${SITE_URL}/error-codes` },
      { "@type": "ListItem", position: 3, name: "Brands and devices", item: `${SITE_URL}/error-codes/brands` },
      { "@type": "ListItem", position: 4, name: cluster.title, item: `${SITE_URL}/error-codes/brands/${cluster.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Error codes", href: "/error-codes" }, { label: "Brands and devices", href: "/error-codes/brands" }, { label: `${cluster.brand} ${cluster.device} codes` }]} /></div>

      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{cluster.problems.length} model-aware guides · Updated {cluster.updated}</span>
          <h1>{cluster.brand} {cluster.device.toLowerCase()} error codes.</h1>
          <p>{cluster.description}</p>
          <p><strong>Codes covered:</strong> {codeList}.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container cross-library-card">
          <div>
            <span className="eyebrow">Before choosing a code</span>
            <h2>Confirm the appliance type and full model number.</h2>
            <p>{cluster.brand} can reuse similar displays across product families. The exact {cluster.device.toLowerCase()} manual is the deciding source when a code differs by market or production year.</p>
          </div>
          <Link className="button button-primary" href="/model-number">Find the model number</Link>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Exact code lookup</span><h2>{cluster.brand} {cluster.device.toLowerCase()} guides.</h2></div>
            <p>Select the characters exactly as shown. Each guide separates safe user checks from model-specific service work.</p>
          </div>
          <div className="problem-grid">{cluster.problems.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <article className="article-flow">
            <section>
              <h2>First checks for {cluster.brand} {cluster.device.toLowerCase()} codes</h2>
              <ul className="cause-list">{checks.map((check) => <li key={check}>{check}</li>)}</ul>
            </section>
            <section>
              <h2>Why the exact display matters</h2>
              <p>A letter can resemble a number on a segmented display, and spaces or separators can change the diagnosis. Photograph the display before clearing it, note when it appears, and compare the complete model identifier with official {cluster.brand} support.</p>
            </section>
            <section>
              <h2>How Troublio organizes these guides</h2>
              <p>{SITE_NAME} groups codes by both brand and device so a meaning from a dryer, dishwasher, washer, or printer is not applied to the wrong product. Every linked guide includes likely causes, checks in order, stop conditions, model warnings, and available official references.</p>
            </section>
          </article>
          <aside className="article-nav">
            <strong>Code library</strong>
            {cluster.problems.slice(0, 12).map((problem) => <Link href={`/problems/${problem.slug}`} key={problem.slug}>{problem.errorCode || problem.shortTitle}</Link>)}
          </aside>
        </div>
      </section>
    </>
  );
}
