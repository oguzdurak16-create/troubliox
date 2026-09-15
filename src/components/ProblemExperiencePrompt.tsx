"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ProblemExperiencePrompt.module.css";

type Aggregate = {
  experienceCount: number;
  resolvedCount: number;
  resolutionRate: number;
  topSolutions: Array<{ label: string; reports: number }>;
};

type Props = {
  slug: string;
  title: string;
  brand?: string | null;
  device?: string | null;
  solutions: string[];
};

export function ProblemExperiencePrompt({ slug, title, brand, device, solutions }: Props) {
  const storageKey = `troublio-problem-experience:${slug}`;
  const [stage, setStage] = useState<"ask" | "details" | "done" | "dismissed">("ask");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [aggregate, setAggregate] = useState<Aggregate | null>(null);

  const choices = useMemo(() => {
    const unique = Array.from(new Set(solutions.filter(Boolean))).slice(0, 4);
    return [...unique, "Other / service repair"];
  }, [solutions]);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "done") setStage("done");
    if (stored === "dismissed") setStage("dismissed");

    fetch(`/api/problem-experience?slug=${encodeURIComponent(slug)}`)
      .then(async (response) => response.ok ? ((await response.json()) as Aggregate) : null)
      .then((data) => data && setAggregate(data))
      .catch(() => undefined);
  }, [slug, storageKey]);

  function start() {
    setStage("details");
    window.gtag?.("event", "experience_started", {
      guide_slug: slug,
      guide_title: title,
      brand: brand || undefined,
      device: device || undefined,
    });
  }

  function dismiss() {
    setStage("dismissed");
    window.localStorage.setItem(storageKey, "dismissed");
  }

  async function submit(resolved: boolean, solutionLabel?: string) {
    setSaving(true);
    setStatus("");

    try {
      const response = await fetch("/api/problem-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          model,
          resolved,
          solutionLabel: resolved ? solutionLabel : undefined,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        if (response.status === 409) {
          window.localStorage.setItem(storageKey, "done");
          setStage("done");
          setStatus("Already recorded for this issue today.");
          return;
        }
        setStatus(result.error || "Could not save your experience.");
        return;
      }

      window.localStorage.setItem(storageKey, "done");
      setStage("done");
      window.gtag?.("event", "experience_submitted", {
        guide_slug: slug,
        guide_title: title,
        resolved,
        solution: solutionLabel || "not_fixed",
        model_provided: Boolean(model.trim()),
      });

      const refreshed = await fetch(`/api/problem-experience?slug=${encodeURIComponent(slug)}&t=${Date.now()}`, { cache: "no-store" });
      if (refreshed.ok) setAggregate((await refreshed.json()) as Aggregate);
    } catch {
      setStatus("Could not save your experience.");
    } finally {
      setSaving(false);
    }
  }

  if (stage === "dismissed") return null;

  const showCommunity = aggregate && aggregate.experienceCount >= 3;

  return (
    <section className={styles.card} aria-label="Real-world experience">
      {stage === "done" ? (
        <div className={styles.done}>
          <strong>Your real-world result is now part of Troublio.</strong>
          <span>{status || "It will improve the answer for the next person with the same problem."}</span>
        </div>
      ) : (
        <>
          <div className={styles.topline}>
            <div className={styles.copy}>
              <strong>Did this exact problem happen on your device?</strong>
              <span>No review to write. Two clicks can turn your experience into useful data.</span>
            </div>
            {stage === "ask" ? (
              <div className={styles.actions}>
                <button className={`${styles.button} ${styles.buttonPrimary}`} type="button" onClick={start}>Yes, it happened</button>
                <button className={styles.button} type="button" onClick={dismiss}>No</button>
              </div>
            ) : null}
          </div>

          {stage === "details" ? (
            <div className={styles.details}>
              <div className={styles.field}>
                <label htmlFor={`experience-model-${slug}`}>Exact model number (optional, but very valuable)</label>
                <input
                  id={`experience-model-${slug}`}
                  value={model}
                  onChange={(event) => setModel(event.target.value.slice(0, 160))}
                  placeholder="e.g. WAN28281GB, UE55AU8000, iPhone 15 Pro"
                  autoComplete="off"
                />
              </div>

              <div>
                <div className={styles.solutionTitle}>What actually fixed it?</div>
                <div className={styles.solutionGrid}>
                  {choices.map((choice) => (
                    <button className={styles.solutionButton} type="button" disabled={saving} key={choice} onClick={() => submit(true, choice)}>
                      {choice}
                    </button>
                  ))}
                  <button className={`${styles.solutionButton} ${styles.notFixed}`} type="button" disabled={saving} onClick={() => submit(false)}>
                    Not fixed yet
                  </button>
                </div>
              </div>
              {status ? <p className={styles.status} role="status">{status}</p> : null}
            </div>
          ) : null}
        </>
      )}

      {showCommunity ? (
        <div className={styles.community}>
          <strong>Real-world data:</strong> {aggregate.experienceCount} people reported this issue; {aggregate.resolutionRate}% reported a fix.
          {aggregate.topSolutions.length ? (
            <div className={styles.communityList}>
              {aggregate.topSolutions.slice(0, 3).map((item) => <span key={item.label}>{item.label}: {item.reports}</span>)}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
