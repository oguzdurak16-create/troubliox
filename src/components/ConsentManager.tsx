"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "troublio:consent:v2";
const LEGACY_KEY = "troublio:analytics-consent";

type Preferences = {
  analytics: boolean;
  ads: boolean;
  version: 2;
  savedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function createPreferences(analytics: boolean, ads: boolean): Preferences {
  return { analytics, ads, version: 2, savedAt: new Date().toISOString() };
}

function applyConsent(value: Preferences) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer?.push(args); };
  window.gtag("consent", "update", {
    analytics_storage: value.analytics ? "granted" : "denied",
    ad_storage: value.ads ? "granted" : "denied",
    ad_user_data: value.ads ? "granted" : "denied",
    ad_personalization: value.ads ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function readPreferences(): Preferences | null {
  try {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<Preferences>;
      if (typeof parsed.analytics === "boolean" && typeof parsed.ads === "boolean") {
        return createPreferences(parsed.analytics, parsed.ads);
      }
    }

    const legacy = window.localStorage.getItem(LEGACY_KEY);
    if (legacy === "accepted") return createPreferences(true, true);
    if (legacy === "declined") return createPreferences(false, false);
  } catch {
    return null;
  }
  return null;
}

export function ConsentManager({ gaId }: { gaId?: string }) {
  const [preferences, setPreferences] = useState<Preferences>(() => createPreferences(false, false));
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    const stored = readPreferences();
    if (stored) {
      setPreferences(stored);
      applyConsent(stored);
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
      window.localStorage.removeItem(LEGACY_KEY);
    } else {
      setOpen(true);
    }
    setReady(true);

    function reopen() {
      setDetails(true);
      setOpen(true);
    }

    window.addEventListener("troublio-open-consent", reopen);
    return () => window.removeEventListener("troublio-open-consent", reopen);
  }, []);

  function save(value: Preferences) {
    const normalized = createPreferences(value.analytics, value.ads);
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(normalized));
    window.localStorage.removeItem(LEGACY_KEY);
    setPreferences(normalized);
    applyConsent(normalized);
    setOpen(false);
    setDetails(false);
  }

  return (
    <>
      {ready && preferences.analytics && gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script>
        </>
      ) : null}

      {ready && open ? (
        <aside className="consent-banner" role="dialog" aria-modal="true" aria-label="Privacy and cookie choices">
          <div>
            <strong>Privacy choices</strong>
            <p>Essential storage keeps the site working. Optional Google Analytics and Google AdSense consent can be accepted, rejected, or managed separately.</p>
            {details ? (
              <div style={{ display: "grid", gap: "0.65rem", marginTop: "0.85rem" }}>
                <label style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                  <input type="checkbox" checked readOnly />
                  <span><strong>Essential</strong><br /><small>Security, basic operation, saved guides and privacy preferences.</small></span>
                </label>
                <label style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                  <input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })} />
                  <span><strong>Analytics</strong><br /><small>Google Analytics page and interaction measurement.</small></span>
                </label>
                <label style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                  <input type="checkbox" checked={preferences.ads} onChange={(event) => setPreferences({ ...preferences, ads: event.target.checked })} />
                  <span><strong>Advertising</strong><br /><small>Google AdSense storage, measurement and personalization signals.</small></span>
                </label>
              </div>
            ) : null}
          </div>
          <div className="consent-actions">
            <button type="button" className="button button-secondary" onClick={() => save(createPreferences(false, false))}>Reject all</button>
            {details ? (
              <button type="button" className="button button-primary" onClick={() => save(preferences)}>Save choices</button>
            ) : (
              <>
                <button type="button" className="button button-secondary" onClick={() => setDetails(true)}>Manage</button>
                <button type="button" className="button button-primary" onClick={() => save(createPreferences(true, true))}>Accept all</button>
              </>
            )}
          </div>
        </aside>
      ) : null}
    </>
  );
}

export function ConsentSettingsButton() {
  return <button type="button" className="footer-consent-button" onClick={() => window.dispatchEvent(new Event("troublio-open-consent"))}>Privacy settings</button>;
}
