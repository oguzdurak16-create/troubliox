"use client";

import { useEffect, useState } from "react";

const SAVED_KEY = "troublio:saved-guides";
const RECENT_KEY = "troublio:recent-guides";
const MAX_RECENT = 12;


function readStringArray(key: string): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function GuideActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedItems = readStringArray(SAVED_KEY);
    setSaved(savedItems.includes(slug));

    const recentItems = readStringArray(RECENT_KEY).filter((item) => item !== slug);
    window.localStorage.setItem(RECENT_KEY, JSON.stringify([slug, ...recentItems].slice(0, MAX_RECENT)));
  }, [slug]);

  function toggleSaved() {
    const items = readStringArray(SAVED_KEY).filter((item) => item !== slug);
    const nextSaved = !saved;
    if (nextSaved) items.unshift(slug);
    window.localStorage.setItem(SAVED_KEY, JSON.stringify(items));
    setSaved(nextSaved);
    setMessage(nextSaved ? "Guide saved on this device." : "Guide removed from saved items.");
    window.dispatchEvent(new Event("troublio-storage"));
    window.gtag?.("event", nextSaved ? "save_guide" : "unsave_guide", { guide_slug: slug, guide_title: title });
  }

  async function shareGuide() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        window.gtag?.("event", "share", { method: "web_share", content_type: "guide", item_id: slug });
        return;
      }
      await navigator.clipboard.writeText(url);
      setMessage("Guide link copied.");
      window.gtag?.("event", "share", { method: "clipboard", content_type: "guide", item_id: slug });
    } catch {
      setMessage("The link could not be shared. Copy it from the address bar.");
    }
  }

  return (
    <div className="guide-actions" aria-label="Guide actions">
      <button type="button" className={saved ? "action-button action-button-active" : "action-button"} onClick={toggleSaved}>
        <span aria-hidden="true">{saved ? "★" : "☆"}</span>
        {saved ? "Saved" : "Save guide"}
      </button>
      <button type="button" className="action-button" onClick={shareGuide}>
        <span aria-hidden="true">↗</span>
        Share
      </button>
      {message ? <span className="action-message" role="status">{message}</span> : null}
    </div>
  );
}
