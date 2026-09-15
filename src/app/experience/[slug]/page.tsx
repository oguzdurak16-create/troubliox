import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";
import { experienceSeed } from "@/data/experienceSeed";
import styles from "../experience.module.css";

export function generateStaticParams() {
  return experienceSeed.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = experienceSeed.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product experience | Troublio", robots: { index: false, follow: false } };
  }

  return {
    title: `${product.brand} ${product.model} real-world owner experience | Troublio`,
    description: `Structured owner experience for ${product.brand} ${product.model}: reported ownership duration, problems, repair costs and buy-again intent.`,
    alternates: { canonical: `/experience/${product.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function ProductExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = experienceSeed.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className={styles.intro}>
            <span className={styles.kicker}>Real-world owner experience</span>
            <h1>{product.brand} {product.model}</h1>
            <p>
              A structured view of what owners report after living with this product: time in use, failures,
              repair cost and whether they would choose it again.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <ExperienceExplorer initialSlug={product.slug} />
        </div>
      </section>
    </>
  );
}
