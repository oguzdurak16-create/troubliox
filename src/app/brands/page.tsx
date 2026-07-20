import type { Metadata } from "next";
import Link from "next/link";
import { brands, getProblemsByBrand } from "@/data/problems";

export const metadata: Metadata = { title: "Brands", description: "Browse Troublio troubleshooting guides by brand.", alternates: { canonical: "/brands" } };

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Brand index</span><h1>Find model and brand-specific problems.</h1><p>Brand pages collect error codes, symptoms, and related guides without hiding the general troubleshooting path.</p></div></section>
      <section className="section-tight"><div className="container brand-grid">{brands.map((brand) => <Link className="brand-card" href={`/brands/${brand.slug}`} key={brand.slug}><strong>{brand.name}</strong><span>{getProblemsByBrand(brand.slug).length} guides</span></Link>)}</div></section>
    </>
  );
}
