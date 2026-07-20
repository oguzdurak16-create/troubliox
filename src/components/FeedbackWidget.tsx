"use client";

import { useEffect, useState } from "react";


export function FeedbackWidget({ slug, title }: { slug: string; title: string }) {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const storageKey = `troublio-feedback:${slug}`;

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "yes" || stored === "no") setAnswer(stored);
  }, [storageKey]);

  function record(value: "yes" | "no") {
    setAnswer(value);
    window.localStorage.setItem(storageKey, value);
    window.gtag?.("event", "guide_feedback", {
      guide_slug: slug,
      guide_title: title,
      helpful: value === "yes",
    });
  }

  if (answer) {
    return (
      <div className="feedback feedback-complete" role="status">
        <strong>Response recorded.</strong>
        <span>{answer === "yes" ? "This guide helped." : "This guide needs a better path."}</span>
      </div>
    );
  }

  return (
    <div className="feedback">
      <div>
        <strong>Did this guide move you closer to a solution?</strong>
        <span>The response is stored on this device and sent to aggregate analytics.</span>
      </div>
      <div className="feedback-actions">
        <button type="button" onClick={() => record("yes")}>Yes</button>
        <button type="button" onClick={() => record("no")}>Not yet</button>
      </div>
    </div>
  );
}
