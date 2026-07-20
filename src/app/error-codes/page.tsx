import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { brands, problems } from "@/data/problems";

export const metadata: Metadata = {
  title: "Error code lookup",
  description: "Look up appliance, Windows, printer, browser, DNS, certificate, and HTTP error codes with direct meanings, safer checks, and official references.",
  alternates: { canonical: "/error-codes" },
};

export default function ErrorCodesPage() {
  const codes = problems.filter((problem) => problem.contentKind === "error-code");
  const washers = codes.filter((problem) => problem.device === "Washing machine");
  const dishwashers = codes.filter((problem) => problem.device === "Dishwasher");
  const windows = codes.filter((problem) => problem.brandSlug === "microsoft");
  const printers = codes.filter((problem) => problem.categorySlug === "computers-printers" && problem.brandSlug !== "microsoft" && problem.brandSlug !== "google-chrome" && problem.brandSlug !== "web");
  const browserWeb = codes.filter((problem) => problem.brandSlug === "google-chrome" || problem.brandSlug === "web");
  const supportedBrands = brands.filter((brand) => codes.some((problem) => problem.brandSlug === brand.slug));
  const featuredCodes = [
    "chrome-err-connection-reset",
    "windows-update-error-0x80070005",
    "windows-blue-screen-critical-process-died",
    "canon-printer-b200-error",
    "bosch-dishwasher-e15-error",
    "lg-washer-oe-error",
    "samsung-washer-4c-4e-error",
  ].map((slug) => codes.find((problem) => problem.slug === slug)).filter(Boolean);

  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Error codes" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{codes.length} code-specific guides</span>
          <h1>Error code lookup.</h1>
          <p>Search the complete code exactly as shown. Match the device, model, Windows action, or printer family before applying a repair.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container error-hub-grid error-hub-grid-five">
          <Link className="error-hub-card" href="/error-codes/washing-machines"><span className="error-hub-count">{washers.length}</span><h2>Washing machine codes</h2><p>Fill, drain, balance, door, motor, heater, sensor, and control messages.</p><strong>Browse washer codes →</strong></Link>
          <Link className="error-hub-card" href="/error-codes/dishwashers"><span className="error-hub-count">{dishwashers.length}</span><h2>Dishwasher codes</h2><p>Water supply, draining, leak protection, circulation, heating, and drying faults.</p><strong>Browse dishwasher codes →</strong></Link>
          <Link className="error-hub-card" href="/error-codes/windows"><span className="error-hub-count">{windows.length}</span><h2>Windows error codes</h2><p>Windows Update, installation, app startup, network paths, boot, and blue screens.</p><strong>Browse Windows codes →</strong></Link>
          <Link className="error-hub-card" href="/error-codes/printers"><span className="error-hub-count">{printers.length}</span><h2>Printer error codes</h2><p>HP, Canon, Epson, and Brother paper path, printhead, carriage, and maintenance codes.</p><strong>Browse printer codes →</strong></Link>
          <Link className="error-hub-card" href="/error-codes/browser-web"><span className="error-hub-count">{browserWeb.length}</span><h2>Browser & web codes</h2><p>Chrome connection, DNS, certificate, redirect, and HTTP status messages.</p><strong>Browse web codes →</strong></Link>
        </div>
      </section>
      <section className="section-tight">
        <div className="container cross-library-card">
          <div><span className="eyebrow">No error display?</span><h2>Diagnose the visible symptom instead.</h2><p>Use sound, timing, connection state, water movement, startup behavior, leaks, heat, and other observations.</p></div>
          <Link className="button button-primary" href="/issues">Browse issue hubs</Link>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Supported brands</span><h2>Browse code guides by maker or platform.</h2></div></div>
          <div className="brand-grid">
            {supportedBrands.map((brand) => {
              const count = codes.filter((problem) => problem.brandSlug === brand.slug).length;
              return <Link className="brand-card" href={`/brands/${brand.slug}`} key={brand.slug}><strong>{brand.name}</strong><span>{count} error-code guides</span></Link>;
            })}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Start here</span><h2>High-intent code searches.</h2></div></div>
          <div className="problem-grid">{featuredCodes.map((problem) => problem ? <ProblemCard key={problem.slug} problem={problem} /> : null)}</div>
        </div>
      </section>
    </>
  );
}
