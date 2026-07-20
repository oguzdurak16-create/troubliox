import type { Metadata } from "next";
import { ConsentSettingsButton } from "@/components/ConsentManager";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy", description: "Troublio privacy policy and analytics choices.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Privacy</span><h1>Privacy policy.</h1><p>Troublio works without an account. Optional analytics are loaded only after the visitor accepts them.</p></div></section>
      <article className="container prose-page">
        <h2>Information processed</h2>
        <p>Standard hosting logs may include IP address, browser information, requested pages, and timestamps. The problem submission page prepares an email in the visitor&apos;s own email application and does not send the form through a Troublio server.</p>
        <h2>Local browser storage</h2>
        <p>Saved guides, recently opened guides, guide feedback, and the analytics choice are stored in the current browser using local storage. These items can be removed by clearing site data. Saved and recent guide lists are not accounts and are not synchronized between devices.</p>
        <h2>Optional analytics</h2>
        <p>When accepted, Google Analytics may process page views, searches, diagnostic interactions, guide feedback, saves, and shares. Troublio configures IP anonymization and does not intentionally send problem descriptions as personal identity data. Visitors may decline analytics and continue using the site.</p>
        <h2>Advertising</h2>
        <p>Advertising scripts are not loaded unless an advertising client is configured and the visitor has accepted analytics and advertising scripts. Additional consent controls may be required before advertising is enabled in some regions.</p>
        <h2>Change your choice</h2>
        <p><ConsentSettingsButton /></p>
        <h2>Contact</h2>
        <p>Privacy questions may be sent to {CONTACT_EMAIL}.</p>
        <h2>Scope</h2>
        <p>This policy describes the current Troublio implementation and should be reviewed when new data processors, forms, advertising systems, or account features are introduced.</p>
      </article>
    </>
  );
}
