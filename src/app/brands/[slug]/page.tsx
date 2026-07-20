import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { brands, getProblemsByBrand } from "@/data/problems";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return brands.map((brand) => ({ slug: brand.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  return brand ? { title: `${brand.name} troubleshooting and error codes`, description: `Troubleshooting guides, symptoms, and model-dependent error codes for ${brand.name}.`, alternates: { canonical: `/brands/${slug}` } } : {};
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();
  const items = getProblemsByBrand(slug);
  const groups = Array.from(new Set(items.map((problem) => problem.device))).map((device) => ({ device, problems: items.filter((problem) => problem.device === device) }));
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${brand.name} troubleshooting guides`,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 100).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${SITE_URL}/problems/${item.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }, { label: brand.name }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">{items.length} troubleshooting guides</span><h1>{brand.name}</h1><p>Model-aware symptoms, error codes, and safe checks related to {brand.name} products. Confirm the full model number before ordering parts.</p></div></section>
      {groups.map((group) => (
        <section className="section-tight" key={group.device}>
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{group.problems.length} guides</span><h2>{group.device}</h2></div></div>
            <div className="problem-grid">{group.problems.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
          </div>
        </section>
      ))}
    </>
  );
}
