"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./SeedModelContribution.module.css";

type Option = {
  slug: string;
  brand: string;
  device: string;
  title: string;
  solutions: string[];
};

type OptionsPayload = { options?: Option[] };

function keyify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function SeedModelContribution() {
  const [model, setModel] = useState("");
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [done, setDone] = useState(false);

  const validModel = useMemo(() => model.trim().length >= 2, [model]);

  useEffect(() => {
    const needle = query.trim();
    if (needle.length < 2) {
      setOptions([]);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      setLoading(true);
      fetch(`/api/model-contribution-options?q=${encodeURIComponent(needle)}`, { signal: controller.signal })
        .then(async (response) => response.ok ? await response.json() as OptionsPayload : null)
        .then((payload) => setOptions(payload?.options || []))
        .catch(() => void 0)
        .finally(() => setLoading(false));
    }, 220);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  async function submit(resolved: boolean, solutionLabel?: string) {
    if (!selected || !validModel) return;
    setSaving(true);
    setStatus("");

    try {
      const response = await fetch("/api/problem-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selected.slug,
          model: model.trim(),
          resolved,
          solutionLabel: resolved ? solutionLabel : undefined,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (response.ok) {
        setDone(true);
        window.localStorage.setItem(`troublio-problem-experience:${selected.slug}`, "done");
        window.gtag?.("event", "first_model_report_submitted", {
          guide_slug: selected.slug,
          brand: selected.brand,
          model: model.trim(),
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

      setStatus(payload.error || "Could not save this report.");
    } catch {
      setStatus("Could not save this report.");
    } finally {
      setSaving(false);
    }
  }

  if (done && selected) {
    const brandKey = keyify(selected.brand);
    const modelKey = keyify(model);
    return (
      <section className={styles.card} aria-label="Add first model report">
        <div className={styles.done} role="status">
          <strong>Report added.</strong>
          <span>{status || `${selected.brand} ${model.trim()} now has structured community data in Troublio.`}</span>
        </div>
        {brandKey && modelKey ? <Link className={styles.link} href={`/models/${brandKey}/${modelKey}`}>Open the model page →</Link> : null}
      </section>
    );
  }

  return (
    <section className={styles.card} aria-label="Add first model report">
      <div className={styles.head}>
        <strong>Your model is not here yet? Create it with a real experience.</strong>
        <span>Enter the exact model number, find the problem you actually had, and record the outcome. No review or account required.</span>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="seed-model">Exact model number</label>
          <input
            id="seed-model"
            value={model}
            maxLength={160}
            onChange={(event) => setModel(event.target.value)}
            placeholder="e.g. WAN28281GB"
            autoComplete="off"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="seed-issue">Search the issue or error code</label>
          <input
            id="seed-issue"
            value={query}
            maxLength={80}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(null);
            }}
            placeholder="e.g. Samsung 4C, Bosch E18, printer offline"
            autoComplete="off"
          />
        </div>
      </div>

      {!validModel && model.length ? <span className={styles.help}>Use the full model number from the product label when possible.</span> : null}
      {loading ? <span className={styles.help}>Searching known troubleshooting guides…</span> : null}

      {options.length ? (
        <div className={styles.results}>
          {options.map((option) => (
            <button
              type="button"
              key={option.slug}
              className={`${styles.result} ${selected?.slug === option.slug ? styles.resultActive : ""}`}
              onClick={() => {
                setSelected(option);
                setStatus("");
              }}
            >
              <strong>{option.title}</strong>
              <span>{option.brand} · {option.device}</span>
            </button>
          ))}
        </div>
      ) : query.trim().length >= 2 && !loading ? <span className={styles.help}>No matching Troublio guide yet. Try the brand plus the visible error code or symptom.</span> : null}

      {selected ? (
        <div className={styles.solutions}>
          <span className={styles.help}>Selected: {selected.brand} · {selected.title}. What was the outcome on {model.trim() || "your model"}?</span>
          <div className={styles.solutionGrid}>
            {selected.solutions.map((solution) => (
              <button className={styles.solution} type="button" key={solution} disabled={saving || !validModel} onClick={() => submit(true, solution)}>
                <strong>Fixed by: {solution}</strong>
              </button>
            ))}
            <button className={`${styles.solution} ${styles.notFixed}`} type="button" disabled={saving || !validModel} onClick={() => submit(false)}>
              <strong>Not fixed yet</strong>
              <span>Still useful: it confirms this model can show the problem.</span>
            </button>
          </div>
          {status ? <p className={styles.status} role="status">{status}</p> : null}
        </div>
      ) : null}
    </section>
  );
}
