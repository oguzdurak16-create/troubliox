"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProblemCard } from "@/components/ProblemCard";
import type { SearchIndexItem } from "@/lib/search-index";

const SAVED_KEY = "troublio:saved-guides";
const RECENT_KEY = "troublio:recent-guides";

function read(key: string): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function SavedGuides() {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const bySlug = useMemo(() => new Map(index.map((item) => [item.slug, item])), [index]);

  const refresh = useCallback(() => {
    setSavedSlugs(read(SAVED_KEY));
    setRecentSlugs(read(RECENT_KEY));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/search-index", { signal: controller.signal })
      .then((response) => response.ok ? response.json() as Promise<SearchIndexItem[]> : Promise.reject(new Error(`HTTP ${response.status}`)))
      .then(setIndex)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("troublio-storage", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("troublio-storage", refresh);
    };
  }, [refresh]);

  const saved = savedSlugs.map((slug) => bySlug.get(slug)).filter((item): item is SearchIndexItem => Boolean(item));
  const recent = recentSlugs.map((slug) => bySlug.get(slug)).filter((item): item is SearchIndexItem => Boolean(item));

  function clearRecent() {
    window.localStorage.removeItem(RECENT_KEY);
    setRecentSlugs([]);
  }

  if (loading) return <div className="search-loading" role="status"><span className="search-spinner" aria-hidden="true" /><strong>Loading saved guides…</strong></div>;

  return (
    <>
      <section className="saved-section">
        <div className="saved-heading"><div><span className="eyebrow">Saved on this device</span><h2>{saved.length ? `${saved.length} saved guide${saved.length === 1 ? "" : "s"}` : "No saved guides yet"}</h2></div></div>
        {saved.length ? <div className="problem-grid">{saved.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div> : (
          <div className="empty-state compact-empty"><p>Open a guide and use “Save guide” to keep it here. No account is required.</p><Link className="button button-primary" href="/diagnose">Start diagnosis</Link></div>
        )}
      </section>

      <section className="saved-section">
        <div className="saved-heading"><div><span className="eyebrow">Recent history</span><h2>Recently opened guides</h2></div>{recent.length ? <button type="button" className="text-button" onClick={clearRecent}>Clear history</button> : null}</div>
        {recent.length ? <div className="problem-grid">{recent.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div> : <p className="muted-copy">Guides you open will appear here on this device.</p>}
      </section>
    </>
  );
}
