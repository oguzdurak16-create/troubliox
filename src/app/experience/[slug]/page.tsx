import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";
import {
  getExperienceProduct,
  isExperienceProductIndexable,
  listExperienceProducts,
} from "@/lib/experienceProducts";
import styles from "../experience.module.css";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await listExperienceProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getExperienceProduct(slug);

  if (!product) {
    return { title: "Product experience", robots: { index: false, follow: false } };
  }

  const indexable = isExperienceProductIndexable(product);
  const description = indexable
    ? `Real-world data from ${product.ownershipCount} deduplicated owner reports for ${product.brand} ${product.model}: median ownership ${product.medianMonths} months, ${product.issueRate}% reported a problem, and ${product.wouldBuyAgain}% would buy again.`
    : `Structured owner experience for ${product.brand} ${product.model}: reported ownership duration, problems, repair costs and buy-again intent.`;

  return {
    title: `${product.brand} ${product.model} real-world owner experience`,
    description,
    alternates: { canonical: `/experience/${product.slug}` },
    robots: { index: indexable, follow: true },
    openGraph: indexable ? {
      type: "website",
      title: `${product.brand} ${product.model} real-world owner experience`,
      description,
      url: `/experience/${product.slug}`,
    } : undefined,
  };
}

export default async function ProductExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await listExperienceProducts();
  const product = products.find((item) => item.slug === slug);
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
          <ExperienceExplorer initialSlug={product.slug} products={products} />
        </div>
      </section>
    </>
  );
}
