"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { rankSearch, type SearchIndexItem } from "@/lib/search-index";

let cachedIndex: SearchIndexItem[] | null = null;
let indexPromise: Promise<SearchIndexItem[]> | null = null;

function loadIndex() {
  if (cachedIndex) return Promise.resolve(cachedIndex);
  if (!indexPromise) {
    indexPromise = fetch("/api/search-index")
      .then((response) => {
        if (!response.ok) throw new Error(`Search index returned ${response.status}`);
        return response.json() as Promise<SearchIndexItem[]>;
      })
      .then((items) => {
        cachedIndex = items;
        return items;
      })
      .finally(() => { indexPromise = null; });
  }
  return indexPromise;
}

export function SearchBox({ compact = false, initialValue = "" }: { compact?: boolean; initialValue?: string }) {
  const [query, setQuery] = useState(initialValue);
  const [index, setIndex] = useState<SearchIndexItem[]>(cachedIndex || []);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const rootRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  function ensureIndex() {
    if (index.length) return;
    loadIndex().then(setIndex).catch(() => undefined);
  }

  const suggestions = useMemo(() => {
    const value = query.trim();
    if (value.length < 2) return [];
    return index
      .map((problem) => ({ problem, score: rankSearch(value, problem) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.problem.title.localeCompare(b.problem.title))
      .slice(0, compact ? 5 : 6)
      .map((item) => item.problem);
  }, [compact, index, query]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selected = activeIndex >= 0 ? suggestions[activeIndex] : null;
    if (selected) {
      window.gtag?.("event", "search_suggestion_open", { guide_slug: selected.slug, search_term: query.trim() });
      router.push(`/problems/${selected.slug}`);
      setOpen(false);
      return;
    }
    const value = query.trim();
    if (value) window.gtag?.("event", "search", { search_term: value });
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open || !suggestions.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <form ref={rootRef} className={compact ? "search-box search-box-compact smart-search" : "search-box smart-search"} onSubmit={submit} role="search">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <label className="sr-only" htmlFor={compact ? "site-search-compact" : "site-search"}>Describe your problem</label>
      <input
        id={compact ? "site-search-compact" : "site-search"}
        value={query}
        onFocus={() => { ensureIndex(); setOpen(true); }}
        onChange={(event) => { setQuery(event.target.value); setOpen(true); setActiveIndex(-1); ensureIndex(); }}
        onKeyDown={handleKeyDown}
        placeholder="e.g. Bosch dishwasher E15"
        autoComplete="off"
        aria-expanded={open && suggestions.length > 0}
        aria-controls={compact ? "search-suggestions-compact" : "search-suggestions"}
        aria-activedescendant={activeIndex >= 0 ? `search-suggestion-${compact ? "compact-" : ""}${activeIndex}` : undefined}
      />
      <button type="submit">Find the cause</button>
      {open && suggestions.length ? (
        <div className="search-autocomplete" id={compact ? "search-suggestions-compact" : "search-suggestions"} role="listbox">
          {suggestions.map((item, itemIndex) => (
            <Link
              id={`search-suggestion-${compact ? "compact-" : ""}${itemIndex}`}
              role="option"
              aria-selected={activeIndex === itemIndex}
              className={activeIndex === itemIndex ? "search-suggestion search-suggestion-active" : "search-suggestion"}
              href={`/problems/${item.slug}`}
              key={item.slug}
              onMouseEnter={() => setActiveIndex(itemIndex)}
              onClick={() => window.gtag?.("event", "search_suggestion_open", { guide_slug: item.slug, search_term: query.trim() })}
            >
              <span>{item.errorCode || item.category}</span>
              <strong>{item.shortTitle}</strong>
              <small>{item.brand || item.device}</small>
            </Link>
          ))}
          <button className="search-all-results" type="submit">See all results for “{query.trim()}” →</button>
        </div>
      ) : null}
    </form>
  );
}
