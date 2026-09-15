import type { Metadata } from "next";
import Link from "next/link";
import { ConsentSettingsButton } from "@/components/ConsentManager";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Troublio privacy policy covering browser storage, structured contributions, Google Analytics, Google AdSense and visitor choices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Privacy · Updated September 15, 2026</span><h1>Privacy policy.</h1><p>Troublio works without an account and provides separate choices for optional analytics and advertising consent.</p></div></section>
      <article className="container prose-page">
        <h2>Information processed</h2>
        <p>Standard hosting and security logs may include an IP address, browser or device information, requested pages, timestamps, response status and error details. These records are used to deliver the site, protect it from abuse and diagnose technical problems.</p>

        <h2>Local browser storage</h2>
        <p>Saved guides, recently opened guides, guide feedback, privacy choices and a random anonymous contributor identifier may be stored in the current browser. They are not user accounts and are not synchronized between devices. They can be removed by clearing Troublio site data.</p>
        <p>The contributor identifier is used to recognize a returning browser when structured product experiences or troubleshooting outcomes are submitted, so repeated submissions do not inflate owner, problem or model-community counts. It is not an advertising identifier. Troublio transforms that identifier into one-way hashes scoped to the relevant product, problem or model before storing a contribution; the browser identifier itself is not stored with the experience record. If local storage is unavailable, a privacy-preserving technical fallback may be used for deduplication.</p>

        <h2>Structured contributions</h2>
        <p>When a visitor submits a product experience, missing-product request, troubleshooting outcome or problem request, the selected structured fields are transmitted to Troublio so they can be aggregated, deduplicated, reviewed or used to improve the site. Free-text contact information and links are not requested for these flows. Public experience and model pages publish aggregate statistics rather than the visitor&apos;s raw contribution record.</p>

        <h2>Google Analytics</h2>
        <p>If analytics consent is granted, Google Analytics may measure page views, searches, diagnostic interactions, saves, shares and guide feedback. IP anonymization is enabled. Analytics storage is denied by default through Google Consent Mode and can be withdrawn without losing access to the guides.</p>

        <h2>Google AdSense and advertising</h2>
        <p>Troublio may use Google AdSense to fund free troubleshooting content. Google and authorized third-party advertising vendors may use cookies or similar technologies for ad delivery, frequency control, fraud prevention, reporting and, where the visitor permits it, personalization.</p>
        <p>Advertising storage, ad user data and ad personalization signals are denied by default. The AdSense tag may load in a restricted Consent Mode state for site verification and consent signalling, but advertising cookies and personalization are not enabled unless advertising consent is granted. Depending on region and Google settings, limited or non-personalized ads may be served.</p>

        <h2>Service providers and international processing</h2>
        <p>Hosting, database, analytics and advertising providers may process limited technical or consent-based data on infrastructure located outside the visitor&apos;s country. Those providers process data under their own privacy terms and security controls.</p>

        <h2>Manage or withdraw consent</h2>
        <p><ConsentSettingsButton /></p>
        <p>Browser controls can also delete or block site data. Google advertising personalization can be managed through Google&apos;s advertising settings. More detail is available in the <Link href="/cookies">cookie policy</Link>.</p>

        <h2>Contact and data questions</h2>
        <p>Privacy, correction or deletion questions may be sent to {CONTACT_EMAIL}. Because Troublio does not require an account, a submitted anonymous contribution may not always be linkable back to a specific visitor after its identifying browser token has been transformed or deleted.</p>

        <h2>Children</h2>
        <p>Troublio is a general-audience troubleshooting publication and does not intentionally collect personal information from children. A parent or guardian may contact us if they believe a child&apos;s information has been processed.</p>
      </article>
    </>
  );
}
