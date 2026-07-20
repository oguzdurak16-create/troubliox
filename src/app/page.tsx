import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { ProblemCard } from "@/components/ProblemCard";
import { SearchBox } from "@/components/SearchBox";
import { categories, problems, problemStats } from "@/data/problems";
import { deviceHubs, getHubProblems, issueHubs } from "@/data/hubs";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const featured = problems.filter((problem) => problem.featured).slice(0, 6);
  const errorCodes = problems.filter((problem) => problem.contentKind === "error-code");
  const washerCodes = errorCodes.filter((problem) => problem.device === "Washing machine").length;
  const dishwasherCodes = errorCodes.filter((problem) => problem.device === "Dishwasher").length;
  const expansionGuides = problems.filter((problem) => [
    "windows-11-wifi-connected-no-internet",
    "printer-offline-but-connected",
    "wifi-connected-no-internet",
    "android-play-store-apps-not-downloading",
    "whatsapp-stuck-on-connecting",
    "iphone-wifi-connected-no-internet",
    "chrome-dns-probe-finished-nxdomain",
    "netflix-not-working-on-smart-tv",
    "tv-hdmi-no-signal",
  ].includes(problem.slug));
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Troubleshooting without the runaround</span>
            <h1>Something&apos;s not working. <em>Start here.</em></h1>
            <p>Search the exact error code, symptom, appliance, device, or app. Troublio maps likely causes, safe checks, and the point where qualified service is the right next step.</p>
            <SearchBox />
            <div className="hero-actions"><Link className="button button-primary" href="/diagnose">Start guided diagnosis</Link><Link className="button button-secondary" href="/saved">Saved guides</Link></div>
            <div className="search-suggestions">
              <span>Try:</span>
              <Link href="/problems/windows-update-error-0x80070005">Windows 0x80070005</Link>
              <Link href="/problems/printer-offline-but-connected">Printer offline</Link>
              <Link href="/problems/wifi-connected-no-internet">Wi-Fi no internet</Link>
            </div>
          </div>
          <div className="diagnostic-visual" aria-hidden="true">
            <div className="visual-orbit" />
            <div className="float-note float-note-one">Safe checks first</div>
            <div className="float-note float-note-two">Model check required</div>
            <div className="diagnostic-panel">
              <div className="panel-top"><span className="panel-status">Diagnosis active</span><span className="panel-code">E15</span></div>
              <div className="signal-row"><span className="signal-icon">01</span><span className="signal-copy"><strong>Display identified</strong><span>Bosch dishwasher</span></span><span className="signal-score">100%</span></div>
              <div className="signal-row"><span className="signal-icon">02</span><span className="signal-copy"><strong>Likely condition</strong><span>Base leak protection</span></span><span className="signal-score">Likely</span></div>
              <div className="signal-row"><span className="signal-icon">03</span><span className="signal-copy"><strong>Safety state</strong><span>Power and water off</span></span><span className="signal-score">High</span></div>
              <div className="panel-result"><small>Next safe check</small><strong>Inspect visible hoses and stop before tilting the unit</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Troublio principles">
        <div className="container trust-grid">
          <div className="trust-item"><span>1</span><div><strong>Direct answer first</strong><small>No long introduction before the likely condition.</small></div></div>
          <div className="trust-item"><span>2</span><div><strong>Safe checks in order</strong><small>External observations before parts or service.</small></div></div>
          <div className="trust-item"><span>3</span><div><strong>Official manual links</strong><small>Model-specific documentation remains the deciding reference.</small></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Troubleshooting library</span><h2>{problemStats.total} guides across appliances, Windows, printers, Wi-Fi, phones, and apps.</h2></div>
            <p>Search exact error codes or start from a visible symptom. Every guide prioritizes a direct answer, safe checks, and clear stop conditions.</p>
          </div>
          <div className="error-hub-grid hub-grid-three">
            <Link className="error-hub-card" href="/error-codes/washing-machines"><span className="error-hub-count">{washerCodes}</span><h3>Washing machine codes</h3><p>Water, drain, load balance, doors, motors, heaters, sensors, and controls.</p><strong>Browse washer codes →</strong></Link>
            <Link className="error-hub-card" href="/error-codes/dishwashers"><span className="error-hub-count">{dishwasherCodes}</span><h3>Dishwasher codes</h3><p>Filling, draining, leaks, circulation, heating, drying, and control faults.</p><strong>Browse dishwasher codes →</strong></Link>
            <Link className="error-hub-card" href="/symptoms"><span className="error-hub-count">{problemStats.symptoms}</span><h3>Symptom guides</h3><p>No error display? Diagnose by sound, timing, water movement, startup, leaks, and visible behavior.</p><strong>Browse symptoms →</strong></Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">High-intent device hubs</span><h2>Start with the thing that is failing.</h2></div>
            <Link className="text-link" href="/devices">View all devices →</Link>
          </div>
          <div className="hub-directory-grid hub-directory-home">
            {deviceHubs.slice(0, 10).map((hub) => <Link className="hub-directory-card" href={`/devices/${hub.slug}`} key={hub.slug}><span>{getHubProblems(hub).length} guides</span><h3>{hub.name}</h3><p>{hub.description}</p><strong>Open hub →</strong></Link>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Browse by symptom</span><h2>When there is no useful error code.</h2></div>
            <Link className="text-link" href="/issues">View all issue hubs →</Link>
          </div>
          <div className="issue-chip-grid">
            {issueHubs.map((hub) => <Link href={`/issues/${hub.slug}`} key={hub.slug}><strong>{hub.name}</strong><span>{getHubProblems(hub).length} guides</span></Link>)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">New search clusters</span><h2>Fresh guides for the problems people type exactly as they happen.</h2></div><Link className="text-link text-link-light" href="/guides">All guides A–Z →</Link></div>
          <div className="problem-grid">{expansionGuides.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Browse by area</span><h2>Problems happen everywhere.</h2></div>
            <p>Each area is organized around symptoms, error codes, and observable behavior.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => <CategoryCard key={category.slug} category={category} count={problems.filter((problem) => problem.categorySlug === category.slug).length} />)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">How Troublio works</span><h2>From display or symptom to a useful next step.</h2></div></div>
          <div className="how-grid">
            <article className="how-card"><h3>Search the exact display</h3><p>Use the brand, appliance, full model number, and code exactly as shown.</p></article>
            <article className="how-card"><h3>Compare observations</h3><p>Choose what the appliance is actually doing, rather than guessing the failed part.</p></article>
            <article className="how-card"><h3>Follow the safe path</h3><p>Try external checks first, then use the official manual or qualified service.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Popular starting points</span><h2>Common codes, clearer paths.</h2></div><Link className="text-link" href="/error-codes">Browse all error codes →</Link></div>
          <div className="problem-grid">{featured.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container submit-card">
          <div className="submit-copy"><span className="eyebrow">Missing a problem?</span><h2>Tell Troublio what should be solved next.</h2><p>Send the exact wording, model, and symptom. It creates a clean content queue without opening public comments.</p><Link className="button button-primary" href="/submit-problem">Submit a problem</Link></div>
          <div className="diagnosis-card" style={{ position: "static" }}><small>Good submissions include</small><h2>What happened, where it happened, and what changed.</h2><ol><li>Exact product and full model</li><li>Error code or visible symptom</li><li>What was already tried</li><li>What happened immediately before the issue</li></ol></div>
        </div>
      </section>
    </>
  );
}
