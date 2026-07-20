"use client";

import { FormEvent, useState } from "react";

export default function SubmitProblemPage() {
  const [status, setStatus] = useState("");
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@troublio.com";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Troublio problem suggestion: ${form.get("problem") || "New problem"}`;
    const body = [
      `Problem: ${form.get("problem") || ""}`,
      `Area: ${form.get("area") || ""}`,
      `Model or context: ${form.get("model") || ""}`,
      `Details: ${form.get("details") || ""}`,
    ].join("\n\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the problem details prepared.");
  }

  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Content queue</span><h1>Submit a problem.</h1><p>Send the exact symptom people are searching for. Do not include passwords, account codes, addresses, or other private information.</p></div></section>
      <section className="section-tight"><div className="container submit-card">
        <form className="submit-form" onSubmit={submit}>
          <div className="form-field"><label htmlFor="problem">What is not working?</label><input id="problem" name="problem" required placeholder="e.g. LG washer shows OE and will not drain" /></div>
          <div className="form-field"><label htmlFor="area">Problem area</label><select id="area" name="area"><option>Phone or tablet</option><option>App or account</option><option>Internet or Wi-Fi</option><option>Computer or printer</option><option>Home appliance</option><option>TV or entertainment</option><option>Car</option><option>Everyday problem</option><option>Other</option></select></div>
          <div className="form-field"><label htmlFor="model">Brand, model, or context</label><input id="model" name="model" placeholder="Optional but useful" /></div>
          <div className="form-field"><label htmlFor="details">What happened and what was already tried?</label><textarea id="details" name="details" required /></div>
          <button className="button button-primary" type="submit">Prepare email</button>
          {status ? <p role="status">{status}</p> : null}
        </form>
        <div className="submit-copy"><h2>A useful problem report is observable.</h2><p>Describe what the product or situation does, not only what you think is broken.</p><ul><li>Include the exact error text or code.</li><li>State whether the issue is constant or intermittent.</li><li>Say what changed immediately before it began.</li><li>Do not send login, payment, or identity information.</li></ul></div>
      </div></section>
    </>
  );
}
