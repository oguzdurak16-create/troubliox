import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, problems } from "@/data/problems";

export const metadata: Metadata = { title: "Troubleshooting categories", description: "Browse troubleshooting guides by device, app, appliance, vehicle, or everyday problem.", alternates: { canonical: "/categories" } };

export default function CategoriesPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">All categories</span><h1>Start with what is not working.</h1><p>Browse symptoms, error codes, and safe diagnostic paths across the main Troublio problem areas.</p></div></section>
      <section className="section-tight"><div className="container category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} count={problems.filter((problem) => problem.categorySlug === category.slug).length} />)}</div></section>
    </>
  );
}
