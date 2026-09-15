"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./ModelContributionPrompt.module.css";

type IssueOption = {
  slug: string;
  title: string;
  solutions: string[];
};

type Props = {
  brand: string;
  model: string;
  issues: IssueOption[];
};

export function ModelContributionPrompt({ brand, model, issues }: Props) {
  const [selectedSlug, setSelectedSlug] = useState(issues[0]?.slug || "");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [done, setDone] = useState(false);

  const selected = issues.find((issue) => issue.slug === selectedSlug) || issues[0];

  async function submit(resolved: boolean, solutionLabel?: string) {
    if (!selected) return;
    setSaving(true);
    setStatus("");

    try {
      const response = await fetch("/api/problem-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selected.slug,
          model,
          resolved,
          solutionLabel: resolved ? solutionLabel : undefined,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (response.ok) {
        window.localStorage.setItem(`troublio-problem-experience:${selected.slug}`, "done");
        setDone(true);
        window.gtag?.("event", "model_page_experience_submitted", {
          brand,
          model,
          guide_slug: selected.slug,
          resolved,
          solution: solutionLabel || "not_fixed",
        });
        return;
      }

      if (response.status === 409) {
        setDone(true);
        setStatus("This issue was already recorded from this connection today.");
        return;
      }

      setStatus(payload.error || "Could not save your experience.");
    } catch {
      setStatus("Could not save your experience.");
    } finally {
      setSaving(false);
    }
  }

  if (!issues.length) return null;

  if (done) {
    return (
      <section className={styles.card} aria-label="Add model experience">
        <div className={styles.done} role="status">
          <strong>Your experience is now part of this model's dataset.</strong>
          <span>{status || "It will be included in the community aggregates for future visitors."}</span>
        </div>
        <Link className={styles.link} href={`/problems/${selected?.slug}`}>Open the full troubleshooting guide →</Link>
      </section>
    );
  }

  return (
    <section className={styles.card} aria-label="Add model experience">
      <div className={styles.heading}>
        <strong>Do you use this exact model?</strong>
        <span>No review needed. Pick the problem you actually had and the result becomes structured community data.</span>
      </div>

      <div className={styles.issueGrid}>
        {issues.map((issue) => (
          <button
            className={`${styles.button} ${issue.slug === selectedSlug ? styles.buttonActive : ""}`}
            type="button"
            key={issue.slug}
            disabled={saving}
            onClick={() => {
              setSelectedSlug(issue.slug);
              setStatus("");
            }}
          >
            {issue.title}
          </button>
        ))}
      </div>

      {selected ? (
        <div className={styles.prompt}>
          <span className={styles.promptTitle}>What actually happened after troubleshooting?</span>
          <div className={styles.solutionGrid}>
            {selected.solutions.slice(0, 4).map((solution) => (
              <button
                className={styles.button}
                type="button"
                key={solution}
                disabled={saving}
                onClick={() => submit(true, solution)}
              >
                Fixed by: {solution}
              </button>
            ))}
            <button
              className={`${styles.button} ${styles.notFixed}`}
              type="button"
              disabled={saving}
              onClick={() => submit(false)}
            >
              Not fixed yet
            </button>
          </div>
          {status ? <p className={styles.status} role="status">{status}</p> : null}
          <Link className={styles.link} href={`/problems/${selected.slug}`}>See the full guide before answering →</Link>
        </div>
      ) : null}
    </section>
  );
}
