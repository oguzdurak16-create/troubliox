"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { experienceSeed, type ExperienceProduct } from "@/data/experienceSeed";
import { submitContribution } from "@/lib/contributionClient";
import styles from "@/app/experience/experience.module.css";

type LiveStats = Pick<ExperienceProduct, "ownershipCount" | "medianMonths" | "issueRate" | "wouldBuyAgain" | "commonIssues">;

type ApiStatsResponse = {
  configured?: boolean;
  stats?: LiveStats;
};

type ExperienceExplorerProps = {
  initialSlug?: string;
};

export function ExperienceExplorer({ initialSlug }: ExperienceExplorerProps = {}) {
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(initialSlug || experienceSeed[0]?.slug || "");
  const [hadProblem, setHadProblem] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [liveStats, setLiveStats] = useState<LiveStats | null>(null);
  const [backendLive, setBackendLive] = useState(false);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return experienceSeed;
    return experienceSeed.filter((product) =>
      `${product.brand} ${product.model} ${product.category}`.toLowerCase().includes(needle),
    );
  }, [query]);

  const selected = experienceSeed.find((product) => product.slug === selectedSlug) || filtered[0] || experienceSeed[0];

  useEffect(() => {
    if (!selected) return;
    let cancelled = false;
    setLiveStats(null);

    fetch(`/api/experience?slug=${encodeURIComponent(selected.slug)}`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as ApiStatsResponse;
      })
      .then((payload) => {
        if (cancelled || !payload) return;
        setBackendLive(Boolean(payload.configured));
        if (payload.configured && payload.stats) setLiveStats(payload.stats);
      })
      .catch(() => {
        if (!cancelled) setBackendLive(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selected?.slug]);

  if (!selected) return null;

  const visibleStats: LiveStats = liveStats || selected;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = new FormData(event.currentTarget);
    const payload = {
      kind: "product",
      productSlug: selected.slug,
      useMonths: Number(form.get("useMonths")),
      stillUsing: form.get("stillUsing") === "on",
      hadProblem,
      problemLabel: hadProblem ? String(form.get("problemLabel") || "") : "",
      repairCost: hadProblem ? String(form.get("repairCost") || "") : "",
      currency: String(form.get("currency") || "USD"),
      wouldBuyAgain: form.get("wouldBuyAgain") === "on",
    };

    try {
      const { response, result } = await submitContribution(payload);

      if (response.ok) {
        setStatus(result.updated
          ? "Your earlier contribution for today was updated."
          : result.duplicate
            ? "This contribution is already recorded for today."
            : "Contribution added to the shared experience graph.");
        event.currentTarget.reset();
        setHadProblem(false);
        const refreshed = await fetch(`/api/experience?slug=${encodeURIComponent(selected.slug)}&t=${Date.now()}`, { cache: "no-store" });
        if (refreshed.ok) {
          const refreshedPayload = (await refreshed.json()) as ApiStatsResponse;
          if (refreshedPayload.stats) setLiveStats(refreshedPayload.stats);
        }
        return;
      }

      setStatus(result.error || "Contribution could not be saved.");
    } catch {
      setStatus("Contribution could not be saved.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.shell}>
      <div className={styles.notice}>
        Live pilot: owner reports are stored as structured aggregate data. Individual free-text reviews are not published.
      </div>

      <input
        className={styles.search}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search a brand, model or product type"
        aria-label="Search pilot products"
      />

      {filtered.length ? (
        <div className={styles.grid}>
          {filtered.map((product) => (
            <button
              className={`${styles.productButton} ${product.slug === selected.slug ? styles.productButtonActive : ""}`}
              type="button"
              key={product.slug}
              onClick={() => setSelectedSlug(product.slug)}
            >
              <span>{product.category}</span>
              <strong>{product.brand} {product.model}</strong>
              <small>See how long it lasts, what fails, and whether owners would buy it again.</small>
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>No pilot product matches that search yet.</div>
      )}

      <section className={styles.panel} aria-live="polite">
        <div className={styles.panelHead}>
          <div>
            <p>{selected.category}</p>
            <h2>{selected.brand} {selected.model}</h2>
            <p><Link href={`/experience/${selected.slug}`}>Open the permanent model page →</Link></p>
          </div>
          <span className={styles.demoBadge}>{backendLive ? "Live user data" : "Seed aggregate"}</span>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}><strong>{visibleStats.ownershipCount}</strong><span>owner experiences</span></div>
          <div className={styles.stat}><strong>{visibleStats.medianMonths} mo</strong><span>median reported ownership</span></div>
          <div className={styles.stat}><strong>{visibleStats.issueRate}%</strong><span>reported at least one problem</span></div>
          <div className={styles.stat}><strong>{visibleStats.wouldBuyAgain}%</strong><span>would buy again</span></div>
        </div>

        <div className={styles.issueList}>
          {visibleStats.commonIssues.map((issue) => (
            <div className={styles.issueRow} key={issue.label}>
              <span>{issue.label}</span><span>{issue.reports} reports</span>
            </div>
          ))}
        </div>
      </section>

      <form className={styles.formCard} onSubmit={submit}>
        <div>
          <span className={styles.kicker}>Add one data point</span>
          <h3>Your normal use becomes useful data.</h3>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="useMonths">How many months have you used it?</label>
            <input id="useMonths" name="useMonths" type="number" min="0" max="600" required placeholder="24" />
          </div>
          <div className={styles.field}>
            <label htmlFor="currency">Repair-cost currency</label>
            <select id="currency" name="currency" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="TRY">TRY</option>
            </select>
          </div>
        </div>

        <div className={styles.toggleRow}>
          <label className={styles.toggle}><input type="checkbox" name="stillUsing" defaultChecked /> Still using it</label>
          <label className={styles.toggle}><input type="checkbox" checked={hadProblem} onChange={(event) => setHadProblem(event.target.checked)} /> Had a problem</label>
          <label className={styles.toggle}><input type="checkbox" name="wouldBuyAgain" defaultChecked /> Would buy again</label>
        </div>

        {hadProblem ? (
          <div className={styles.formGrid}>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label htmlFor="problemLabel">What actually happened?</label>
              <input id="problemLabel" name="problemLabel" maxLength={120} required placeholder="e.g. battery runtime dropped sharply" />
            </div>
            <div className={styles.field}>
              <label htmlFor="repairCost">What did the repair cost?</label>
              <input id="repairCost" name="repairCost" type="number" min="0" step="0.01" placeholder="Optional" />
            </div>
          </div>
        ) : null}

        <div className={styles.actions}>
          <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? "Saving…" : "Add my experience"}</button>
          {status ? <p className={styles.status} role="status">{status}</p> : null}
        </div>
      </form>
    </div>
  );
}
