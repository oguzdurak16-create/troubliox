import type { Metadata } from "next";
import Link from "next/link";
import { isModelIndexEligible, listModelExperiences } from "@/lib/modelExperience";
import styles from "./models.module.css";

export const metadata: Metadata = {
  title: "Real-World Product Models | Troublio",
  description: "Browse product models that Troublio users have reported in real troubleshooting sessions. See recurring issues and what actually fixed them.",
  alternates: { canonical: "/models" },
  robots: { index: true, follow: true },
};

export const revalidate = 300;

export default async function ModelsPage() {
  const models = await listModelExperiences(100);
  const matureCount = models.filter(isModelIndexEligible).length;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className={styles.hero}>
            <span className={styles.badge}>Built from real troubleshooting</span>
            <h1>Models grow here from user experience.</h1>
            <p>
              These are not manufacturer catalog pages. A model appears when someone reports what actually happened,
              what fixed it, and which exact model they used. More reports make each page more useful.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {models.length ? (
            <>
              <div className={styles.early}>
                {matureCount > 0
                  ? `${matureCount} model ${matureCount === 1 ? "page has" : "pages have"} enough structured reports to qualify for search indexing. Early pages remain visible to contributors but stay out of search results.`
                  : "The first model pages are still collecting structured reports. Early pages remain visible to contributors but stay out of search results until the data is strong enough."}
              </div>
              <div className={styles.grid} style={{ marginTop: 18 }}>
                {models.map((model) => (
                  <Link className={styles.card} href={`/models/${model.brandKey}/${model.modelKey}`} key={`${model.brandKey}/${model.modelKey}`}>
                    <small>{model.brand}</small>
                    <strong>{model.model}</strong>
                    <span>{model.reportCount} real-world {model.reportCount === 1 ? "report" : "reports"} · {model.resolutionRate}% reported resolved →</span>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.empty}>
              No model-specific reports yet. Model pages will appear automatically as people contribute from troubleshooting guides.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
