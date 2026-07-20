import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { categories, getCategory, getProblemsByCategory } from "@/data/problems";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: `${category.name} troubleshooting`, description: category.description, alternates: { canonical: `/categories/${slug}` } };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProblemsByCategory(slug);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} troubleshooting guides`,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 100).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${SITE_URL}/problems/${item.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">{items.length} troubleshooting guides</span><h1>{category.name}</h1><p>{category.description}</p></div></section>
      <section className="section-tight"><div className="container">{items.length ? <div className="problem-grid">{items.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div> : <div className="empty-state"><span>+</span><h2>Guides are being added</h2><p>This category is part of the expansion structure and is ready for new content.</p></div>}</div></section>
    </>
  );
}
