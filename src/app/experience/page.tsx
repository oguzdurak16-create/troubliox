import type { Metadata } from "next";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";
import { listExperienceProducts } from "@/lib/experienceProducts";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Real-World Product Experience Pilot",
  description: "A private Troublio pilot for structured, aggregated product ownership, reliability and repair experience data.",
  alternates: { canonical: "/experience" },
  robots: { index: false, follow: false },
};

export const revalidate = 300;

export default async function ExperiencePage() {
  const products = await listExperienceProducts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className={styles.intro}>
            <span className={styles.kicker}>Troublio Experience Graph</span>
            <h1>What happened after people actually used it?</h1>
            <p>
              Search a model to see structured owner experience: how long it has been used, what failed,
              what repair cost, and whether owners would buy it again. Every contribution improves the next answer.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <ExperienceExplorer products={products} />
        </div>
      </section>
    </>
  );
}
