import type { Metadata } from "next";
import Link from "next/link";
import { ConsentSettingsButton } from "@/components/ConsentManager";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Troublio cookie policy for essential storage, Google Analytics and Google AdSense advertising choices.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Legal · Updated July 27, 2026</span><h1>Cookie policy.</h1><p>Optional analytics and advertising categories are disabled by default and can be managed separately.</p></div></section>
      <article className="container prose-page">
        <h2>What cookies and local storage are</h2>
        <p>Cookies and local browser storage are small records used to operate websites, remember choices, measure usage and support advertising. Troublio&apos;s core guides remain available when optional categories are rejected.</p>

        <h2>Essential storage</h2>
        <p>Essential browser storage supports privacy choices, saved guides, recent guides, interface preferences and basic security. It is not used for advertising personalization.</p>

        <h2>Analytics storage</h2>
        <p>If accepted, Google Analytics may use identifiers such as <code>_ga</code>, <code>_ga_*</code>, <code>_gid</code> or related technologies to measure visits and interactions. Analytics storage is denied until the visitor grants analytics consent.</p>

        <h2>Advertising storage</h2>
        <p>If accepted, Google AdSense and authorized advertising vendors may use identifiers such as <code>__gads</code>, <code>__gpi</code>, <code>IDE</code>, <code>DSID</code> or similar technologies for ad delivery, frequency control, fraud prevention, measurement and personalization. Advertising storage and personalization signals are denied by default.</p>
        <p>The AdSense script can be present in a restricted Google Consent Mode state before a choice is made so that the site can be verified and consent signals can be communicated. This does not grant permission for advertising cookies or personalized advertising.</p>

        <h2>Your choices</h2>
        <p>The privacy panel provides “Reject all”, “Manage”, “Save choices” and “Accept all” controls. Rejecting optional categories does not block the troubleshooting guides.</p>
        <p><ConsentSettingsButton /></p>

        <h2>Retention and third parties</h2>
        <p>Cookie names and retention periods can change as Google services evolve or according to regional settings. Google Analytics and Google AdSense are governed by Google&apos;s own privacy and advertising terms.</p>

        <h2>More information</h2>
        <p>See the <Link href="/privacy">privacy policy</Link> for information about technical logs, service providers, contact rights and international processing.</p>
      </article>
    </>
  );
}
