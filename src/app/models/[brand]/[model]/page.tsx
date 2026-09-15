import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProblem } from "@/data/problems";
import { getModelExperience, isModelIndexEligible } from "@/lib/modelExperience";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import styles from "../../models.module.css";

type Props = { params: Promise<{ brand: string; model: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, model } = await params;
  const aggregate = await getModelExperience(brand, model);
  if (!aggregate) {
    return { title: `Model experience | ${SITE_NAME}`, robots: { index: false, follow: true } };
  }

  const indexable = isModelIndexEligible(aggregate);
  const title = `${aggregate.brand} ${aggregate.model}: Real-World Problems & Fixes | ${SITE_NAME}`;
  const description = `${aggregate.reportCount} real-world Troublio reports for ${aggregate.brand} ${aggregate.model}. See recurring problems, reported fixes and community resolution data.`;

  return {
    title,
    description,
    alternates: { canonical: `/models/${aggregate.brandKey}/${aggregate.modelKey}` },
    robots: { index: indexable, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/models/${aggregate.brandKey}/${aggregate.modelKey}`,
    },
  };
}

export default async function ModelExperiencePage({ params }: Props) {
  const { brand, model } = await params;
  const aggregate = await getModelExperience(brand, model);
  if (!aggregate) notFound();

  const indexable = isModelIndexEligible(aggregate);
  const issues = aggregate.topIssues
    .map((item) => ({ ...item, problem: getProblem(item.slug) }))
    .filter((item) => Boolean(item.problem));

  const datasetSchema = indexable ? {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${aggregate.brand} ${aggregate.model} real-world troubleshooting experience`,
    description: `Aggregated community reports about recurring issues and successful troubleshooting outcomes for ${aggregate.brand} ${aggregate.model}.`,
    creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/models/${aggregate.brandKey}/${aggregate.modelKey}`,
    dateModified: aggregate.updatedAt,
    variableMeasured: ["reported issue", "resolution outcome", "reported solution"],
  } : null;

  return (
    <>
      {datasetSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} /> : null}
      <section className="page-hero">
        <div className="container">
          <div className={styles.hero}>
            <span className={styles.badge}>Real-world community data</span>
            <h1>{aggregate.brand} {aggregate.model}</h1>
            <p>
              This page is built from structured reports submitted by people while troubleshooting this exact model.
              It is community experience, not a manufacturer specification or a substitute for the official manual.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {!indexable ? (
            <div className={styles.early}>
              Early data: this model currently has {aggregate.reportCount} independent {aggregate.reportCount === 1 ? "report" : "reports"}.
              Troublio keeps early model pages out of search indexing until at least 3 reports support the page.
            </div>
          ) : null}

          <div className={styles.stats}>
            <div className={styles.stat}><strong>{aggregate.reportCount}</strong><span>real-world reports</span></div>
            <div className={styles.stat}><strong>{aggregate.resolutionRate}%</strong><span>reported a resolution</span></div>
            <div className={styles.stat}><strong>{aggregate.resolvedCount}</strong><span>resolved reports</span></div>
          </div>

          <div className={styles.columns}>
            <section className={styles.panel}>
              <h2>Problems people actually reported</h2>
              {issues.length ? (
                <div className={styles.rows}>
                  {issues.map((item) => (
                    <div className={styles.row} key={item.slug}>
                      <Link href={`/problems/${item.slug}`}>{item.problem?.shortTitle || item.problem?.title}</Link>
                      <span>{item.reports} {item.reports === 1 ? "report" : "reports"}</span>
                    </div>
                  ))}
                </div>
              ) : <div className={styles.empty}>No recurring issue has enough structured detail yet.</div>}
            </section>

            <section className={styles.panel}>
              <h2>What users say fixed it</h2>
              {aggregate.topSolutions.length ? (
                <div className={styles.rows}>
                  {aggregate.topSolutions.map((item) => (
                    <div className={styles.row} key={item.label}>
                      <span>{item.label}</span>
                      <span>{item.reports} {item.reports === 1 ? "report" : "reports"}</span>
                    </div>
                  ))}
                </div>
              ) : <div className={styles.empty}>No successful fix has been reported for this model yet.</div>}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
