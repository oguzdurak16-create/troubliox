import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SavedGuides } from "@/components/SavedGuides";

export const metadata: Metadata = {
  title: "Saved and recent guides",
  description: "View Troublio guides saved locally on this device and your recently opened troubleshooting paths.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/saved" },
};

export default function SavedPage() {
  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Saved guides" }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">Your device</span><h1>Saved and recent guides.</h1><p>These lists stay in this browser. Troublio does not require an account to remember a troubleshooting path.</p></div></section>
      <section className="section-tight"><div className="container"><SavedGuides /></div></section>
    </>
  );
}
