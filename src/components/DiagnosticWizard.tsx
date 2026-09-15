"use client";

import { Fragment, useMemo, useState } from "react";
import type { Step } from "@/data/problems";
import styles from "./DiagnosticWizard.module.css";

type Observation = { label: string; advice: string };
type FeedbackState = "idle" | "saving" | "fixed" | "not-fixed" | "duplicate" | "error";

type Props = {
  slug: string;
  title: string;
  steps: Step[];
  observations: Observation[];
  stopConditions: string[];
};

export function DiagnosticWizard({ slug, title, steps, observations, stopConditions }: Props) {
  const [selectedObservation, setSelectedObservation] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean[]>(() => steps.map(() => false));
  const [feedback, setFeedback] = useState<Record<number, FeedbackState>>({});
  const checkableIndexes = useMemo(() => steps.map((step, index) => ({ step, index })).filter(({ step }) => step.level !== "stop").map(({ index }) => index), [steps]);
  const completedCount = checkableIndexes.filter((index) => completed[index]).length;
  const safeSteps = checkableIndexes.length;
  const complete = safeSteps > 0 && completedCount === safeSteps;

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
    if (!next[index]) {
      setFeedback((current) => ({ ...current, [index]: "idle" }));
    }
    window.gtag?.("event", "diagnostic_step", {
      guide_slug: slug,
      step_number: index + 1,
      completed: next[index],
    });
    if (checkableIndexes.every((itemIndex) => next[itemIndex])) window.gtag?.("event", "diagnostic_complete", { guide_slug: slug });
  }

  function markNotFixed(index: number, step: Step) {
    setFeedback((current) => ({ ...current, [index]: "not-fixed" }));
    window.gtag?.("event", "quick_check_result", {
      guide_slug: slug,
      guide_title: title,
      step_number: index + 1,
      step_title: step.title,
      result: "not_fixed",
    });
  }

  async function markFixed(index: number, step: Step) {
    setFeedback((current) => ({ ...current, [index]: "saving" }));

    try {
      const response = await fetch("/api/problem-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, resolved: true, solutionLabel: step.title }),
      });

      if (response.ok) {
        window.localStorage.setItem(`troublio-problem-experience:${slug}`, "done");
        setFeedback((current) => ({ ...current, [index]: "fixed" }));
        window.gtag?.("event", "quick_check_result", {
          guide_slug: slug,
          guide_title: title,
          step_number: index + 1,
          step_title: step.title,
          result: "fixed",
        });
        return;
      }

      if (response.status === 409) {
        window.localStorage.setItem(`troublio-problem-experience:${slug}`, "done");
        setFeedback((current) => ({ ...current, [index]: "duplicate" }));
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
        <div className="wizard-steps">
          {steps.map((step, index) => step.level === "stop" ? (
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
                <span className="wizard-checkmark" aria-hidden="true">{completed[index] ? "✓" : checkableIndexes.indexOf(index) + 1}</span>
                <span>
                  <strong>{step.title}</strong>
                  <small>{step.detail}</small>
                </span>
                <em>{step.level === "caution" ? "Caution" : "Safe"}</em>
              </label>

              {completed[index] ? (
                <div className={styles.microFeedback}>
                  <div className={styles.microCopy}>
                    <strong>Did this check fix the problem?</strong>
                    <span>One tap helps Troublio learn which checks actually work.</span>
                  </div>
                  {feedback[index] === "fixed" ? <span className={styles.microResult}>Recorded as a real-world fix.</span> : null}
                  {feedback[index] === "duplicate" ? <span className={styles.microResult}>Your result for this issue is already recorded today.</span> : null}
                  {feedback[index] === "not-fixed" ? <span className={styles.microResult}>Okay — continue to the next check.</span> : null}
                  {feedback[index] === "error" ? <span className={`${styles.microResult} ${styles.microError}`}>Could not save. You can try again.</span> : null}
                  {!feedback[index] || feedback[index] === "idle" || feedback[index] === "saving" || feedback[index] === "error" ? (
                    <div className={styles.microActions}>
                      <button
                        type="button"
                        className={`${styles.microButton} ${styles.microButtonPrimary}`}
                        disabled={feedback[index] === "saving"}
                        onClick={() => markFixed(index, step)}
                      >
                        {feedback[index] === "saving" ? "Saving…" : "Yes, fixed it"}
                      </button>
                      <button
                        type="button"
                        className={styles.microButton}
                        disabled={feedback[index] === "saving"}
                        onClick={() => markNotFixed(index, step)}
                      >
                        No, continue
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </Fragment>
          ))}
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
