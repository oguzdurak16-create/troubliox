"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { ProblemCard } from "@/components/ProblemCard";
import { rankSearch, type SearchIndexItem } from "@/lib/search-index";

export function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [kind, setKind] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const lastTrackedQuery = useRef("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch("/api/search-index", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Search index returned ${response.status}`);
        return response.json() as Promise<SearchIndexItem[]>;
      })
      .then((items) => {
        setIndex(items);
        setLoadError(false);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const categories = useMemo(
    () => Array.from(new Map(index.map((problem) => [problem.categorySlug, problem.category])).entries()).sort((a, b) => a[1].localeCompare(b[1])),
    [index],
  );
  const brands = useMemo(
    () => Array.from(new Map(index.filter((problem) => problem.brand && problem.brandSlug).map((problem) => [problem.brandSlug!, problem.brand!])).entries()).sort((a, b) => a[1].localeCompare(b[1])),
    [index],
  );

  const results = useMemo(() => index
    .filter((problem) => !category || problem.categorySlug === category)
    .filter((problem) => !brand || problem.brandSlug === brand)
    .filter((problem) => !kind || problem.contentKind === kind)
    .map((problem) => ({ problem, score: rankSearch(deferredQuery, problem) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.problem.title.localeCompare(b.problem.title))
    .map((item) => item.problem), [brand, category, deferredQuery, index, kind]);

  useEffect(() => {
    const normalized = deferredQuery.toLowerCase().trim();
    if (loading || normalized.length < 3 || results.length > 0 || lastTrackedQuery.current === normalized) return;
    const timer = window.setTimeout(() => {
      window.gtag?.("event", "search_no_results", { search_term: deferredQuery.trim() });
      lastTrackedQuery.current = normalized;
    }, 900);
    return () => window.clearTimeout(timer);
  }, [deferredQuery, loading, results.length]);

  function resetFilters() {
    setCategory("");
    setBrand("");
    setKind("");
  }

  const filtered = Boolean(category || brand || kind);

  return (
    <>
      <div className="search-page-box">
        <span aria-hidden="true">⌕</span>
        <label className="sr-only" htmlFor="problem-search">Search all troubleshooting guides</label>
        <input
          id="problem-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Brand, appliance, symptom, or exact error code"
          autoFocus
        />
      </div>
      <div className="search-filters" aria-label="Search filters">
        <label><span>Area</span><select value={category} disabled={loading} onChange={(event) => setCategory(event.target.value)}><option value="">All areas</option>{categories.map(([slug, name]) => <option value={slug} key={slug}>{name}</option>)}</select></label>
        <label><span>Brand</span><select value={brand} disabled={loading} onChange={(event) => setBrand(event.target.value)}><option value="">All brands</option>{brands.map(([slug, name]) => <option value={slug} key={slug}>{name}</option>)}</select></label>
        <label><span>Guide type</span><select value={kind} disabled={loading} onChange={(event) => setKind(event.target.value)}><option value="">All types</option><option value="error-code">Error codes</option><option value="symptom">Symptoms</option><option value="general">General guides</option></select></label>
        {filtered ? <button type="button" className="filter-reset" onClick={resetFilters}>Clear filters</button> : null}
      </div>

      {loading ? (
        <div className="search-loading" role="status"><span className="search-spinner" aria-hidden="true" /><strong>Loading the troubleshooting index…</strong></div>
      ) : loadError ? (
        <div className="empty-state">
          <span aria-hidden="true">!</span>
          <h2>Search index could not load</h2>
          <p>Refresh the page or browse the complete guide directory while the index reloads.</p>
          <a className="button button-primary" href="/guides">Browse all guides</a>
        </div>
      ) : (
        <>
          <div className="results-heading">
            <h2>{query || filtered ? `${results.length} matching guides` : "All troubleshooting guides"}</h2>
            <span>{query ? `Results for “${query}”` : `${results.length} guides available`}</span>
          </div>
          {results.length ? (
            <div className="problem-grid">{results.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">?</span>
              <h2>No exact guide yet</h2>
              <p>Try the visible symptom, brand, and exact code with or without spaces, or submit the problem so it can be added.</p>
              <a className="button button-primary" href={`/submit-problem?problem=${encodeURIComponent(query)}`}>Submit this problem</a>
            </div>
          )}
        </>
      )}
    </>
  );
}
