"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ProblemCard } from "@/components/ProblemCard";
import { rankSearch, type SearchIndexItem } from "@/lib/search-index";

export function DiagnoseFinder() {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/search-index", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Search index returned ${response.status}`);
        return response.json() as Promise<SearchIndexItem[]>;
      })
      .then((items) => { setIndex(items); setLoadError(false); })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const categories = useMemo(() => Array.from(new Map(index.map((item) => [item.categorySlug, item.category])).entries()).sort((a, b) => a[1].localeCompare(b[1])), [index]);
  const brands = useMemo(() => Array.from(new Map(index.filter((item) => item.brandSlug && item.brand).map((item) => [item.brandSlug!, item.brand!])).entries()).sort((a, b) => a[1].localeCompare(b[1])), [index]);

  const results = useMemo(() => {
    if (!submitted) return [];
    return index
      .filter((item) => !category || item.categorySlug === category)
      .filter((item) => !brand || item.brandSlug === brand)
      .map((item) => ({ item, score: rankSearch(query, item) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 9)
      .map(({ item }) => item);
  }, [brand, category, index, query, submitted]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    window.gtag?.("event", "diagnose_search", { search_term: query, category, brand });
  }

  if (loading) return <div className="search-loading" role="status"><span className="search-spinner" aria-hidden="true" /><strong>Loading diagnostic paths…</strong></div>;
  if (loadError) return <div className="empty-state"><span aria-hidden="true">!</span><h2>Diagnosis index could not load</h2><p>Refresh the page or browse the guide directory.</p><Link className="button button-primary" href="/guides">Browse all guides</Link></div>;

  return (
    <>
      <form className="diagnose-form" onSubmit={submit}>
        <div className="diagnose-field diagnose-field-wide">
          <label htmlFor="diagnose-query">Describe the symptom or enter the exact error code</label>
          <input id="diagnose-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. dishwasher leaves water, Samsung 4C, phone black screen" />
        </div>
        <div className="diagnose-field">
          <label htmlFor="diagnose-category">Problem area</label>
          <select id="diagnose-category" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Any area</option>
            {categories.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
          </select>
        </div>
        <div className="diagnose-field">
          <label htmlFor="diagnose-brand">Brand</label>
          <select id="diagnose-brand" value={brand} onChange={(event) => setBrand(event.target.value)}>
            <option value="">Any brand</option>
            {brands.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
          </select>
        </div>
        <button className="button button-primary diagnose-submit" type="submit">Match my problem</button>
      </form>

      {submitted ? (
        <section className="diagnose-results" aria-live="polite">
          <div className="results-heading"><h2>{results.length ? "Best matching guides" : "No close match yet"}</h2><span>{results.length ? `${results.length} paths ranked by symptom, code, and context` : "Try fewer words or submit the exact problem"}</span></div>
          {results.length ? <div className="problem-grid">{results.map((item) => <ProblemCard key={item.slug} problem={item} />)}</div> : (
            <div className="empty-state"><p>Search using the visible behavior rather than a guessed failed part.</p><Link className="button button-primary" href={`/submit-problem?problem=${encodeURIComponent(query)}`}>Submit this problem</Link></div>
          )}
        </section>
      ) : (
        <div className="diagnose-tips">
          <strong>Best results include:</strong>
          <span>brand + product + exact display</span>
          <span>what happens before the problem</span>
          <span>what still works normally</span>
        </div>
      )}
    </>
  );
}
