"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { submitContribution } from "@/lib/contributionClient";

export default function SubmitProblemPage() {
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("problem");
    if (initial) setProblem(initial.slice(0, 160));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = new FormData(event.currentTarget);

    try {
      const { response, result } = await submitContribution({
        kind: "request",
        problem: problem.trim(),
        area: String(form.get("area") || ""),
        model: String(form.get("model") || "").trim(),
        errorText: String(form.get("errorText") || "").trim(),
        frequency: String(form.get("frequency") || "unknown"),
        triedAction: String(form.get("triedAction") || "nothing"),
      });

      if (!response.ok) {
        setStatus(result.error || "Could not add this problem to the queue.");
        return;
      }

      setSubmitted(true);
      setStatus(result.duplicate
        ? "This exact request is already counted from you today."
        : "Added to Troublio's content queue. Repeated requests from different users will raise its priority.");
      window.gtag?.("event", "problem_request_submitted", {
        problem_area: String(form.get("area") || ""),
        has_model: Boolean(String(form.get("model") || "").trim()),
        has_error_text: Boolean(String(form.get("errorText") || "").trim()),
        duplicate: Boolean(result.duplicate),
      });
    } catch {
      setStatus("Could not add this problem to the queue.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">Content queue</span>
          <h1>Request a missing troubleshooting guide.</h1>
          <p>
            Send the exact observable problem. Troublio groups repeated requests so real user demand decides which missing guides deserve attention first.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container submit-card">
          <form className="submit-form" onSubmit={submit}>
            <div className="form-field">
              <label htmlFor="problem">What is not working?</label>
              <input
                id="problem"
                name="problem"
                required
                minLength={3}
                maxLength={160}
                value={problem}
                onChange={(event) => {
                  setProblem(event.target.value);
                  setSubmitted(false);
                  setStatus("");
                }}
                placeholder="e.g. LG washer shows OE and will not drain"
                autoComplete="off"
              />
            </div>

            <div className="form-field">
              <label htmlFor="area">Problem area</label>
              <select id="area" name="area" defaultValue="home-appliance">
                <option value="phone-tablet">Phone or tablet</option>
                <option value="app-account">App or account</option>
                <option value="internet-wifi">Internet or Wi-Fi</option>
                <option value="computer-printer">Computer or printer</option>
                <option value="home-appliance">Home appliance</option>
                <option value="tv-entertainment">TV or entertainment</option>
                <option value="car">Car</option>
                <option value="everyday">Everyday problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="model">Brand, exact model, or short context</label>
              <input id="model" name="model" maxLength={80} placeholder="e.g. LG F4V5, iPhone 15 Pro, Windows 11" autoComplete="off" />
            </div>

            <div className="form-field">
              <label htmlFor="errorText">Visible error code or short error text</label>
              <input id="errorText" name="errorText" maxLength={80} placeholder="e.g. OE, E15, printer offline" autoComplete="off" />
            </div>

            <div className="form-field">
              <label htmlFor="frequency">How often does it happen?</label>
              <select id="frequency" name="frequency" defaultValue="always">
                <option value="always">Every time / constant</option>
                <option value="intermittent">Intermittent</option>
                <option value="once">Happened once</option>
                <option value="unknown">Not sure</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="triedAction">What basic thing was already tried?</label>
              <select id="triedAction" name="triedAction" defaultValue="nothing">
                <option value="nothing">Nothing yet</option>
                <option value="restart">Restart / power cycle</option>
                <option value="connection">Checked cable / network / supply</option>
                <option value="cleaning">Cleaned accessible filter / blockage</option>
                <option value="settings">Checked settings</option>
                <option value="reset">Reset attempted</option>
                <option value="service">Service already checked it</option>
                <option value="other">Another basic step</option>
              </select>
            </div>

            <button className="button button-primary" type="submit" disabled={submitting || problem.trim().length < 3}>
              {submitting ? "Adding…" : "Add to Troublio queue"}
            </button>
            {status ? <p role="status">{status}</p> : null}
            {submitted ? <Link className="button button-secondary" href="/search">Search another problem</Link> : null}
          </form>

          <div className="submit-copy">
            <h2>Structured requests become a real roadmap.</h2>
            <p>
              Troublio stores the problem as a private content-request signal, not as a public review. Similar requests can be counted together without publishing your entry as a page.
            </p>
            <ul>
              <li>Use the exact visible error code when there is one.</li>
              <li>Add the exact model if you can read it from the label.</li>
              <li>Choose whether the issue is constant or intermittent.</li>
              <li>Do not include names, email addresses, phone numbers, passwords, addresses, serial numbers, account codes, or links.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
