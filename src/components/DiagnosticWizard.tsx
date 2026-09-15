"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import type { Step } from "@/data/problems";
import { submitContribution } from "@/lib/contributionClient";
import styles from "./DiagnosticWizard.module.css";

type Observation = { label: string; advice: string };
type FeedbackState = "idle" | "saving" | "fixed" | "not-fixed" | "duplicate" | "error";
type StepStat = { label: string; attempts: number; fixedCount: number; successRate: number };
type CommunityPayload = { stepStats?: StepStat[] };

type Props = {
  slug: string;
  title: string;
  steps: Step[];
  observations: Observation[];
  stopConditions: string[];
};

const MIN_ATTEMPTS_TO_SHOW_RATE = 5;
const MIN_ATTEMPTS_TO_REORDER = 15;
const MIN_RATE_ADVANTAGE_TO_REORDER = 12;

export function DiagnosticWizard({ slug, title, steps, observations, stopConditions }: Props) {
  const [selectedObservation, setSelectedObservation] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean[]>(() => steps.map(() => false));
  const [feedback, setFeedback] = useState<Record<number, FeedbackState>>({});
  const [stepStats, setStepStats] = useState<Record<string, StepStat>>({});

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/problem-experience?slug=${encodeURIComponent(slug)}`, { cache: "no-store" })
      .then(async (response) => response.ok ? await response.json() as CommunityPayload : null)
      .then((payload) => {
        if (cancelled || !payload?.stepStats) return;
        const next: Record<string, StepStat> = {};
        for (const stat of payload.stepStats) next[stat.label] = stat;
        setStepStats(next);
      })
      .catch(() => void 0);

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const checkableIndexes = useMemo(
    () => steps.map((step, index) => ({ step, index })).filter(({ step }) => step.level !== "stop").map(({ index }) => index),
    [steps],
  );
  const completedCount = checkableIndexes.filter((index) => completed[index]).length;
  const safeSteps = checkableIndexes.length;
  const complete = safeSteps > 0 && completedCount === safeSteps;

  const ordering = useMemo(() => {
    const original = steps.map((step, index) => ({ step, index }));
    const checkable = original.filter(({ step }) => step.level !== "stop");
    const stopOnly = original.filter(({ step }) => step.level === "stop");

    if (checkable.length < 2) return { items: original, communityRanked: false };

    const allQualified = checkable.every(({ step }) => (stepStats[step.title]?.attempts || 0) >= MIN_ATTEMPTS_TO_REORDER);
    if (!allQualified) return { items: original, communityRanked: false };

    const editorialFirst = checkable[0];
    const best = checkable.reduce((winner, candidate) => {
      const winnerRate = stepStats[winner.step.title]?.successRate || 0;
      const candidateRate = stepStats[candidate.step.title]?.successRate || 0;
      return candidateRate > winnerRate ? candidate : winner;
    }, checkable[0]);

    const editorialRate = stepStats[editorialFirst.step.title]?.successRate || 0;
    const bestRate = stepStats[best.step.title]?.successRate || 0;

    if (best.index === editorialFirst.index || bestRate < editorialRate + MIN_RATE_ADVANTAGE_TO_REORDER) {
      return { items: original, communityRanked: false };
    }

    const ranked = [...checkable].sort((a, b) => {
      const aStat = stepStats[a.step.title];
      const bStat = stepStats[b.step.title];
      const aScore = ((aStat?.fixedCount || 0) + 3) / ((aStat?.attempts || 0) + 6);
      const bScore = ((bStat?.fixedCount || 0) + 3) / ((bStat?.attempts || 0) + 6);
      if (bScore !== aScore) return bScore - aScore;
      return a.index - b.index;
    });

    return { items: [...ranked, ...stopOnly], communityRanked: true };
  }, [steps, stepStats]);

  function chooseObservation(index: number) {
    setSelectedObservation(index);
    window.gtag?.("event", "diagnostic_observation", {
      guide_slug: slug,
      guide_title: title,
      observation: observations[index]?.label,
    });
  }

  function toggleStep(index: number) {
    const next = completed.map((value, itemIndex) => (itemIndex === index ? !value : value));
    setCompleted(next);
    if (!next[index]) setFeedback((current) => ({ ...current, [index]: "idle" }));

    window.gtag?.("event", "diagnostic_step", {
      guide_slug: slug,
      step_number: index + 1,
      completed: next[index],
    });
    if (checkableIndexes.every((itemIndex) => next[itemIndex])) {
      window.gtag?.("event", "diagnostic_complete", { guide_slug: slug });
    }
  }

  async function saveOutcome(index: number, step: Step, fixed: boolean) {
    setFeedback((current) => ({ ...current, [index]: "saving" }));

    try {
      const { response, result } = await submitContribution({
        kind: "step",
        slug,
        stepLabel: step.title,
        fixed,
      });

      if (response.ok) {
        const state: FeedbackState = result.duplicate ? "duplicate" : fixed ? "fixed" : "not-fixed";
        setFeedback((current) => ({ ...current, [index]: state }));
        window.gtag?.("event", "quick_check_result", {
          guide_slug: slug,
          guide_title: title,
          step_number: index + 1,
          step_title: step.title,
          result: fixed ? "fixed" : "not_fixed",
          updated: Boolean(result.updated),
          duplicate: Boolean(result.duplicate),
        });
        return;
      }

      setFeedback((current) => ({ ...current, [index]: "error" }));
    } catch {
      setFeedback((current) => ({ ...current, [index]: "error" }));
    }
  }

  function reset() {
    setSelectedObservation(null);
    setCompleted(steps.map(() => false));
    setFeedback({});
  }

  return (
    <section className="diagnostic-wizard" id="guided-check">
      <div className="wizard-heading">
        <div>
          <span className="eyebrow">Guided check</span>
          <h2>Match the symptom, then work through the safe checks.</h2>
        </div>
        <span className="wizard-progress">{completedCount}/{safeSteps} checked</span>
      </div>

      <div className="wizard-block">
        <h3>1. What best matches what you observe?</h3>
        <div className="observation-buttons">
          {observations.map((observation, index) => (
            <button
              type="button"
              key={observation.label}
              className={selectedObservation === index ? "observation-button observation-button-active" : "observation-button"}
              onClick={() => chooseObservation(index)}
            >
              {observation.label}
            </button>
          ))}
        </div>
        {selectedObservation !== null ? (
          <div className="wizard-result" role="status">
            <span>Likely direction</span>
            <strong>{observations[selectedObservation].advice}</strong>
          </div>
        ) : null}
      </div>

      <div className="wizard-block">
        <h3>2. Complete only the checks that are safe for you.</h3>
        {ordering.communityRanked ? (
          <div className={styles.communityOrder}>
            <strong>Community-prioritized order</strong>
            <span>Every user-level check has at least {MIN_ATTEMPTS_TO_REORDER} recorded attempts, and the leading check materially outperformed the original first step.</span>
          </div>
        ) : null}
        <div className="wizard-steps">
          {ordering.items.map(({ step, index }) => {
            const checkPosition = ordering.items.filter((item) => item.step.level !== "stop").findIndex((item) => item.index === index) + 1;
            const stat = stepStats[step.title];
            const showRate = step.level !== "stop" && stat && stat.attempts >= MIN_ATTEMPTS_TO_SHOW_RATE;

            return step.level === "stop" ? (
              <div className="wizard-step wizard-step-stop" key={step.title}>
                <span className="wizard-checkmark" aria-hidden="true">!</span>
                <span>
                  <strong>{step.title}</strong>
                  <small>{step.detail}</small>
                </span>
                <em>Professional</em>
              </div>
            ) : (
              <Fragment key={step.title}>
                <label className={`wizard-step wizard-step-${step.level || "safe"}`}>
                  <input type="checkbox" checked={completed[index]} onChange={() => toggleStep(index)} />
                  <span className="wizard-checkmark" aria-hidden="true">{completed[index] ? "✓" : checkPosition}</span>
                  <span>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                    {showRate ? (
                      <span className={styles.communityRate}>{stat.successRate}% fixed it · {stat.attempts} tries</span>
                    ) : null}
                  </span>
                  <em>{step.level === "caution" ? "Caution" : "Safe"}</em>
                </label>

                {completed[index] ? (
                  <div className={styles.microFeedback}>
                    <div className={styles.microCopy}>
                      <strong>Did this check fix the problem?</strong>
                      <span>One tap helps Troublio learn which checks actually work. You can still add the exact model separately below.</span>
                    </div>
                    {feedback[index] === "fixed" ? <span className={styles.microResult}>Recorded as a real-world step result.</span> : null}
                    {feedback[index] === "duplicate" ? <span className={styles.microResult}>This check result is already recorded today.</span> : null}
                    {feedback[index] === "not-fixed" ? <span className={styles.microResult}>Recorded — continue to the next check.</span> : null}
                    {feedback[index] === "error" ? <span className={`${styles.microResult} ${styles.microError}`}>Could not save. You can try again.</span> : null}
                    {!feedback[index] || feedback[index] === "idle" || feedback[index] === "saving" || feedback[index] === "error" ? (
                      <div className={styles.microActions}>
                        <button
                          type="button"
                          className={`${styles.microButton} ${styles.microButtonPrimary}`}
                          disabled={feedback[index] === "saving"}
                          onClick={() => saveOutcome(index, step, true)}
                        >
                          {feedback[index] === "saving" ? "Saving…" : "Yes, fixed it"}
                        </button>
                        <button
                          type="button"
                          className={styles.microButton}
                          disabled={feedback[index] === "saving"}
                          onClick={() => saveOutcome(index, step, false)}
                        >
                          No, continue
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className={complete ? "wizard-summary wizard-summary-complete" : "wizard-summary"}>
        <div>
          <strong>{complete ? "Checklist completed." : `${safeSteps} user-level checks are available in this guide.`}</strong>
          <span>{complete ? "If the problem remains, use the model manual or qualified service rather than repeating risky checks." : "Stop immediately if any warning condition applies."}</span>
        </div>
        <button type="button" onClick={reset}>Reset</button>
      </div>

      <details className="wizard-stop">
        <summary>Show stop conditions</summary>
        <ul>{stopConditions.map((condition) => <li key={condition}>{condition}</li>)}</ul>
      </details>
    </section>
  );
}
