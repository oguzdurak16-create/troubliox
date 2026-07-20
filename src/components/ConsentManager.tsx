"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Consent = "accepted" | "declined" | null;

const CONSENT_KEY = "troublio:analytics-consent";

export function ConsentManager({ gaId, adsenseClient }: { gaId?: string; adsenseClient?: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    setConsent(stored === "accepted" || stored === "declined" ? stored : null);
    setReady(true);

    function reopen() {
      setConsent(null);
      window.localStorage.removeItem(CONSENT_KEY);
    }

    window.addEventListener("troublio-open-consent", reopen);
    return () => window.removeEventListener("troublio-open-consent", reopen);
  }, []);

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, value);
    if (value === "declined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script>
          {adsenseClient ? <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} crossOrigin="anonymous" strategy="afterInteractive" /> : null}
        </>
      ) : null}

      {ready && consent === null ? (
        <aside className="consent-banner" role="dialog" aria-modal="false" aria-label="Analytics privacy choice">
          <div>
            <strong>Analytics choice</strong>
            <p>Troublio uses optional Google Analytics to understand searches and improve guides. Saved and recent guides stay in this browser.</p>
          </div>
          <div className="consent-actions">
            <button type="button" className="button button-secondary" onClick={() => choose("declined")}>Continue without analytics</button>
            <button type="button" className="button button-primary" onClick={() => choose("accepted")}>Accept analytics</button>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export function ConsentSettingsButton() {
  return <button type="button" className="footer-consent-button" onClick={() => window.dispatchEvent(new Event("troublio-open-consent"))}>Privacy settings</button>;
}
