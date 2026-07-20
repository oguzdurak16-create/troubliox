"use client";

import { useMemo, useState } from "react";
import type { Step } from "@/data/problems";


type Observation = { label: string; advice: string };

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
    window.gtag?.("event", "diagnostic_step", {
      guide_slug: slug,
      step_number: index + 1,
      completed: next[index],
    });
    if (checkableIndexes.every((itemIndex) => next[itemIndex])) window.gtag?.("event", "diagnostic_complete", { guide_slug: slug });
  }

  function reset() {
    setSelectedObservation(null);
    setCompleted(steps.map(() => false));
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
            <label className={`wizard-step wizard-step-${step.level || "safe"}`} key={step.title}>
              <input type="checkbox" checked={completed[index]} onChange={() => toggleStep(index)} />
              <span className="wizard-checkmark" aria-hidden="true">{completed[index] ? "✓" : checkableIndexes.indexOf(index) + 1}</span>
              <span>
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </span>
              <em>{step.level === "caution" ? "Caution" : "Safe"}</em>
            </label>
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
