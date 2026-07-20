"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { compactSearch, rankSearch, type SearchIndexItem } from "@/lib/search-index";

export function ErrorCodeDecoder() {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [brand, setBrand] = useState("");
  const [device, setDevice] = useState("");
  const [code, setCode] = useState("");
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
      .then((items) => {
        setIndex(items.filter((item) => item.contentKind === "error-code"));
        setLoadError(false);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const brands = useMemo(() => Array.from(new Map(index
    .filter((item) => item.brand && item.brandSlug)
    .map((item) => [item.brandSlug!, item.brand!])).entries())
    .sort((a, b) => a[1].localeCompare(b[1])), [index]);

  const devices = useMemo(() => Array.from(new Set(index
    .filter((item) => !brand || item.brandSlug === brand)
    .map((item) => item.device)))
    .sort((a, b) => a.localeCompare(b)), [brand, index]);

  const results = useMemo(() => {
    if (!submitted || !code.trim()) return [];
    const compactCode = compactSearch(code);
    return index
      .filter((item) => !brand || item.brandSlug === brand)
      .filter((item) => !device || item.device === device)
      .map((item) => {
        const exact = Boolean(item.errorCode && compactSearch(item.errorCode) === compactCode);
        const score = rankSearch(`${brand} ${device} ${code}`.trim(), item) + (exact ? 100 : 0);
        return { item, exact, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => Number(b.exact) - Number(a.exact) || b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 12);
  }, [brand, code, device, index, submitted]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!code.trim()) return;
    setSubmitted(true);
    window.gtag?.("event", "error_code_decode", {
      search_term: code.trim(),
      brand_filter: brand || "all",
      device_filter: device || "all",
    });
  }

  function reset() {
    setBrand("");
    setDevice("");
    setCode("");
    setSubmitted(false);
  }

  return (
    <div className="decoder-shell">
      <form className="decoder-form" onSubmit={submit}>
        <div className="decoder-field">
          <label htmlFor="decoder-brand">Brand <span>optional</span></label>
          <select id="decoder-brand" value={brand} disabled={loading} onChange={(event) => { setBrand(event.target.value); setDevice(""); setSubmitted(false); }}>
            <option value="">All brands</option>
            {brands.map(([slug, name]) => <option value={slug} key={slug}>{name}</option>)}
          </select>
        </div>
        <div className="decoder-field">
          <label htmlFor="decoder-device">Device <span>optional</span></label>
          <select id="decoder-device" value={device} disabled={loading} onChange={(event) => { setDevice(event.target.value); setSubmitted(false); }}>
            <option value="">All devices</option>
            {devices.map((name) => <option value={name} key={name}>{name}</option>)}
          </select>
        </div>
        <div className="decoder-field decoder-code-field">
          <label htmlFor="decoder-code">Exact code or message</label>
          <input id="decoder-code" value={code} onChange={(event) => { setCode(event.target.value); setSubmitted(false); }} placeholder="E15, OE, 0x80070005…" autoComplete="off" />
        </div>
        <button className="button button-primary" type="submit" disabled={loading || !code.trim()}>Decode the error</button>
      </form>

      {loading ? <div className="decoder-state" role="status">Loading the error-code index…</div> : null}
      {loadError ? <div className="decoder-state decoder-error">The code index could not load. <Link href="/search">Use full search instead.</Link></div> : null}

      {submitted && !loading && !loadError ? (
        <div className="decoder-results" aria-live="polite">
          <div className="decoder-results-heading">
            <div><span className="eyebrow">Decoder results</span><h2>{results.length ? `${results.length} possible matches` : "No indexed match yet"}</h2></div>
            <button type="button" onClick={reset}>Clear</button>
          </div>
          {results.length ? (
            <div className="decoder-result-list">
              {results.map(({ item, exact }) => (
                <Link href={`/problems/${item.slug}`} key={item.slug} className={exact ? "decoder-result decoder-result-exact" : "decoder-result"}>
                  <div><span>{exact ? "Exact code match" : item.category}</span><code>{item.errorCode}</code></div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <strong>Open diagnosis →</strong>
                </Link>
              ))}
            </div>
          ) : (
            <div className="decoder-empty">
              <h3>Keep the full code and add the model number.</h3>
              <p>Codes can change between product families. Search the complete model, code, and visible symptom together.</p>
              <div><Link className="button button-primary" href={`/search?q=${encodeURIComponent(`${brand} ${device} ${code}`.trim())}`}>Search all guides</Link><Link className="button button-secondary" href="/model-number">Find the model number</Link></div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
