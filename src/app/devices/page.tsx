import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { deviceHubs, getHubProblems } from "@/data/hubs";

export const metadata: Metadata = {
  title: "Troubleshooting by device",
  description: "Browse troubleshooting guides by device: washing machines, dishwashers, printers, Windows PCs, routers, iPhone, Android, and apps.",
  alternates: { canonical: "/devices" },
};

export default function DevicesPage() {
  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Devices" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">Browse by device</span>
          <h1>What is not working?</h1>
          <p>Choose the device first, then compare the exact error code, symptom, timing, sound, lights, or connection state.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container hub-directory-grid">
          {deviceHubs.map((hub) => {
            const count = getHubProblems(hub).length;
            return (
              <Link className="hub-directory-card" href={`/devices/${hub.slug}`} key={hub.slug}>
                <span>{count} guides</span>
                <h2>{hub.name}</h2>
                <p>{hub.description}</p>
                <strong>Open device guides →</strong>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
