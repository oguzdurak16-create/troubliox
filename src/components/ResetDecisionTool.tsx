"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { resetGuides, resetLevelLabels, type ResetLevel } from "@/data/resetGuides";

type Scenario = "frozen" | "network" | "settings" | "transfer";

const scenarioLevel: Record<Scenario, ResetLevel> = {
  frozen: "restart",
  network: "network-reset",
  settings: "settings-reset",
  transfer: "factory-reset",
};

export function ResetDecisionTool() {
  const [device, setDevice] = useState("");
  const [scenario, setScenario] = useState<Scenario | "">("");
  const [backupReady, setBackupReady] = useState("unknown");
  const [submitted, setSubmitted] = useState(false);

  const guide = useMemo(() => resetGuides.find((item) => item.slug === device), [device]);
  const recommendedLevel = scenario ? scenarioLevel[scenario] : undefined;
  const availableLevel = useMemo(() => {
    if (!guide || !recommendedLevel) return undefined;
    return guide.levels.find((item) => item.level === recommendedLevel)
      ?? guide.levels.find((item) => item.level === guide.startWith)
      ?? guide.levels[0];
  }, [guide, recommendedLevel]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!device || !scenario) return;
    setSubmitted(true);
    window.gtag?.("event", "reset_decision", {
      device_type: device,
      scenario,
      backup_ready: backupReady,
      recommended_level: availableLevel?.level,
    });
  }

  return (
    <div className="reset-tool-shell">
      <form className="reset-tool-form" onSubmit={submit}>
        <div className="reset-field">
          <label htmlFor="reset-device">Device</label>
          <select id="reset-device" value={device} onChange={(event) => { setDevice(event.target.value); setSubmitted(false); }}>
            <option value="">Choose a device</option>
            {resetGuides.map((item) => <option key={item.slug} value={item.slug}>{item.device}</option>)}
          </select>
        </div>
        <div className="reset-field">
          <label htmlFor="reset-scenario">What is the goal?</label>
          <select id="reset-scenario" value={scenario} onChange={(event) => { setScenario(event.target.value as Scenario | ""); setSubmitted(false); }}>
            <option value="">Choose the closest situation</option>
            <option value="frozen">Frozen, slow, or temporarily not responding</option>
            <option value="network">Only Wi-Fi, Bluetooth, Ethernet, or internet is failing</option>
            <option value="settings">A setting or one feature is broken</option>
            <option value="transfer">Preparing for transfer or severe software corruption</option>
          </select>
        </div>
        <div className="reset-field">
          <label htmlFor="reset-backup">Backup or setup details ready?</label>
          <select id="reset-backup" value={backupReady} onChange={(event) => { setBackupReady(event.target.value); setSubmitted(false); }}>
            <option value="unknown">Not sure</option>
            <option value="yes">Yes, verified</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="button button-primary" type="submit" disabled={!device || !scenario}>Choose the safest reset</button>
      </form>

      {submitted && guide && availableLevel ? (
        <section className="reset-recommendation" aria-live="polite">
          <div className="reset-recommendation-top">
            <div><span className="eyebrow">Recommended starting point</span><h2>{availableLevel.title}</h2></div>
            <span className={`reset-level reset-level-${availableLevel.level}`}>{resetLevelLabels[availableLevel.level]}</span>
          </div>
          <p>{availableLevel.whenToUse}</p>
          {availableLevel.level === "factory-reset" && backupReady !== "yes" ? (
            <div className="reset-warning"><strong>Do not erase yet.</strong><span>Verify backups, credentials, recovery keys, and setup details before continuing.</span></div>
          ) : null}
          <div className="reset-impact-grid">
            <div><strong>Usually keeps</strong><ul>{availableLevel.keeps.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><strong>May remove</strong><ul>{availableLevel.removes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="reset-recommendation-actions">
            <Link className="button button-primary" href={`/reset/${guide.slug}#${availableLevel.level}`}>Open exact steps</Link>
            <Link className="button button-secondary" href="/decoder">Decode an error first</Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
