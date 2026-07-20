import type { Metadata } from "next";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = { title: "Search troubleshooting guides", description: "Search Troublio by symptom, device, app, brand, or error code.", robots: { index: false, follow: true }, alternates: { canonical: "/search" } };

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;

  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-narrow"><span className="eyebrow">Problem search</span><h1>What is not working?</h1><p>Search with the exact symptom, error code, product, app, or vehicle system.</p></div>
        <SearchResults initialQuery={q} />
      </div>
    </section>
  );
}
