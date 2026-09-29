import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { DiagnosticWizard } from "@/components/DiagnosticWizard";
import { GuideActions } from "@/components/GuideActions";
import { SourceTrustPanel } from "@/components/SourceTrustPanel";
import { ProblemCard } from "@/components/ProblemCard";
import { getErrorCodeClusterForProblem } from "@/data/errorCodeClusters";
import { getProblem, problems } from "@/data/problems";
import { deviceHubs, issueHubs } from "@/data/hubs";
import { getPublishedDemandProblem, listPublishedDemandProblems, mergePublishedProblems } from "@/lib/publishedDemandProblems";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

type OpportunitySeoOverride = {
  title: string;
  description: string;
  quickAnswer: string;
  priorityLinks: { href: string; label: string }[];
};

const SEO_OPPORTUNITY_OVERRIDES: Record<string, OpportunitySeoOverride> = {
  "windows-printer-ipp-post-random-pages": {
    title: "Printer Prints POST /ipp/print or Keep-Alive Pages: Windows Fix",
    description:
      "Printer randomly prints POST /ipp/print HTTP/1.1, Keep-Alive or Windows Internet Print Provider text? Microsoft documented and fixed this Windows USB/IPP issue.",
    quickAnswer:
      "If the unwanted page begins with POST /ipp/print HTTP/1.1, Connection: Keep-Alive, Content-Type: application/ipp, Windows Internet Print Provider, or Host: localhost, it matches a Windows USB/IPP symptom Microsoft documented. Install current Windows updates first; the known issue was resolved in later servicing updates. If a fully updated PC still does it, then check the queue, port and driver rather than assuming the historical bug remains.",
    priorityLinks: [
      { href: "/devices/printers", label: "All printer troubleshooting guides" },
      { href: "/issues/not-printing", label: "Printer not printing" },
      { href: "/problems/windows-printer-error-0x00000214", label: "Windows printer error 0x00000214" },
    ],
  },
  "windows-printer-error-0x00000214": {
    title: "Windows Printer Error 0x00000214: Cannot Connect to Shared Printer",
    description:
      "Windows shows printer error 0x00000214? Check the shared printer path, host reachability and correct driver before using registry or security-policy workarounds.",
    quickAnswer:
      "When 0x00000214 appears while connecting to a shared Windows printer, first confirm the printer works on the host PC, verify the \\\\computer_name\\printer_name share path, and install the correct current driver. On managed networks, stop before registry or Point and Print policy bypasses and involve the administrator.",
    priorityLinks: [
      { href: "/devices/printers", label: "All printer troubleshooting guides" },
      { href: "/issues/not-printing", label: "Printer not printing" },
      { href: "/devices/windows-pcs", label: "Windows troubleshooting" },
    ],
  },
  "whirlpool-washer-rl-error": {
    title: "Whirlpool Washer rL Error: Clothes Detected in Clean Cycle",
    description:
      "Whirlpool washer showing rL or F34? Items were detected during the Clean Washer cycle. Remove the load, restart the cycle, and use these safe checks if it returns.",
    quickAnswer:
      "On supported Whirlpool models, rL or F34 means the washer detected clothing or another item while the Clean Washer cycle was running. Empty the drum and restart the cleaning cycle; if the code returns with an empty drum, stop and check the model manual or arrange service.",
    priorityLinks: [
      { href: "/problems/whirlpool-washer-f9e1-error", label: "Whirlpool F9E1 drain error" },
      { href: "/problems/whirlpool-washer-f1e1-error", label: "Whirlpool F1E1 control error" },
      { href: "/error-codes/washing-machines", label: "All washing machine error codes" },
    ],
  },
  "bosch-washer-f29-error": {
    title: "Bosch Washer F29 / E29 Error: Meaning and Safe Checks",
    description:
      "Bosch washer showing F29, 29 or E29? Check the exact model, water supply, inlet hose and filter first. See safe checks and when to call service.",
    quickAnswer:
      "On supported Bosch washers, F29 / 29 is associated with the water-inlet path and may be grouped with F17/E17. If the display truly reads E29, confirm the full E-Nr before assuming the same meaning. Start with the tap, household water pressure, inlet hose and accessible inlet filter.",
    priorityLinks: [
      { href: "/problems/bosch-washer-e18-f18-error", label: "Bosch E18 / F18 drain error" },
      { href: "/problems/bosch-washer-e23-f23-error", label: "Bosch E23 / F23 leak error" },
      { href: "/error-codes/brands/bosch-washing-machine", label: "All Bosch washer error codes" },
    ],
  },
  "samsung-washer-5c-5e-error": {
    title: "Samsung Washer 5E / 5C Error: Not Draining — Hose & Filter Checks",
    description:
      "Samsung washer showing 5E or 5C? It is a drainage error. Check the drain hose, installation and model-specific debris filter safely, including top-loader differences.",
    quickAnswer:
      "Samsung 5E / 5C means the washer is not draining correctly on supported models. Start with the drain hose and its installation, then clean only the debris or pump filter your exact model makes user-accessible. Top-load models can use the same code but may not share front-loader filter access.",
    priorityLinks: [
      { href: "/problems/samsung-washer-5d-error", label: "Samsung 5D / Sd suds error" },
      { href: "/problems/samsung-washer-4c-4e-error", label: "Samsung 4C / 4E water error" },
      { href: "/error-codes/brands/samsung-washing-machine", label: "All Samsung washer error codes" },
    ],
  },
  "samsung-washer-dc-de-error": {
    title: "Samsung Washer dE / dC Error: Door or Lid Not Closed",
    description:
      "Samsung washer showing dE or dC? Remove trapped laundry, reduce overloading and close the door or lid securely. Do not bypass the safety lock if the code returns.",
    quickAnswer:
      "Samsung dE / dC means the washer detects the door or lid as open or not securely closed on supported models. Remove trapped laundry, reduce an overloaded drum and close it normally. If the code returns with normal closure, stop before lock or wiring work.",
    priorityLinks: [
      { href: "/problems/samsung-washer-5c-5e-error", label: "Samsung 5C / 5E drain error" },
      { href: "/problems/samsung-washer-4c-4e-error", label: "Samsung 4C / 4E water error" },
      { href: "/error-codes/brands/samsung-washing-machine", label: "All Samsung washer error codes" },
    ],
  },
  "samsung-washer-4c2-error": {
    title: "Samsung Washer 4C2 Error: Check Hot/Cold Hoses First",
    description:
      "Samsung washer showing 4C2? Samsung treats this as a hot/cold supply error. Check for swapped inlet hoses and verify the cold line is actually cold before considering service.",
    quickAnswer:
      "Samsung groups 4C2 with hot/cold supply errors. The first check is whether the hot and cold hoses are connected to the correct washer inlets; Samsung notes that this condition normally does not require service when the supply connections are the cause.",
    priorityLinks: [
      { href: "/problems/samsung-washer-4c-4e-error", label: "Samsung 4C / 4E water error" },
      { href: "/problems/samsung-washer-5c-5e-error", label: "Samsung 5C / 5E drain error" },
      { href: "/error-codes/brands/samsung-washing-machine", label: "All Samsung washer error codes" },
    ],
  },
  "fiber-router-los-light-red": {
    title: "Red LOS Light on Fiber Modem / ONT: What It Means",
    description:
      "Red or blinking LOS on a fiber modem or ONT usually means loss of optical signal. Check visible cable routing safely, avoid touching the fiber end, and know when to call the provider.",
    quickAnswer:
      "A red or flashing LOS light usually means the ONT is not receiving a usable optical signal. Do not change Wi-Fi settings or unplug the fiber connector first. Check only the visible cable route, restart the ONT once if your provider permits it, and contact the provider if LOS remains red.",
    priorityLinks: [
      { href: "/devices/routers-wifi", label: "Router and Wi-Fi troubleshooting" },
      { href: "/issues/not-connecting", label: "Connection problems" },
      { href: "/problems/wifi-connected-no-internet", label: "Wi-Fi connected but no internet" },
    ],
  },
  "dishwasher-not-draining": {
    title: "Dishwasher Not Draining: Filter, Hose & Pump Checks",
    description:
      "Dishwasher has water left in the bottom? Check the drain cycle, removable filter, hose, air gap or disposer connection before assuming the drain pump has failed.",
    quickAnswer:
      "If a dishwasher will not drain, first run one cancel/drain attempt and listen for the pump. Then check the removable filter and visible drain path. A humming pump with no water movement points more toward a blockage or restriction; a silent pump after safe external checks may need service.",
    priorityLinks: [
      { href: "/issues/not-draining", label: "All not-draining guides" },
      { href: "/devices/dishwashers", label: "Dishwasher troubleshooting" },
      { href: "/error-codes/dishwashers", label: "Dishwasher error codes" },
    ],
  },
  "netflix-black-screen-with-sound": {
    title: "Netflix Black Screen With Sound: TV and HDMI Fixes",
    description:
      "Netflix has sound but no picture? Restart the device, check the HDMI or video connection, and follow safe fixes for TVs, streaming sticks, browsers and apps.",
    quickAnswer:
      "When Netflix plays sound but shows a black screen, the usual causes are the playback device, app state, display settings, or the video connection to the TV. Restart the device first, then check HDMI and try another input or cable before changing advanced settings.",
    priorityLinks: [
      { href: "/problems/netflix-not-working-on-smart-tv", label: "Netflix not working on Smart TV" },
      { href: "/problems/netflix-keeps-buffering", label: "Netflix keeps buffering" },
      { href: "/devices/streaming-tv", label: "Streaming and TV troubleshooting" },
    ],
  },
  "bosch-dishwasher-e90-error": {
    title: "Bosch Dishwasher E90 Error: Verify the Model Before Diagnosing",
    description:
      "Bosch dishwasher showing E90? Do not assume a universal meaning. Confirm the full E-Nr, exact display and model-specific Bosch documentation before resetting or ordering parts.",
    quickAnswer:
      "Do not assign a universal Bosch dishwasher meaning to E90 without the full E-Nr. Bosch error codes can vary by product family and region, and E90 is not consistently defined across dishwasher documentation. Record the full model/E-Nr, confirm the display really reads E90, try only a normal power restart, then use the model-specific manual or Bosch support if it returns.",
    priorityLinks: [
      { href: "/problems/bosch-dishwasher-e10-error", label: "Bosch dishwasher E10 error" },
      { href: "/problems/bosch-dishwasher-e26-error", label: "Bosch dishwasher E26 error" },
      { href: "/error-codes/brands/bosch-dishwasher", label: "All Bosch dishwasher error codes" },
    ],
  },
  "bosch-dishwasher-e31-error": {
    title: "Bosch Dishwasher E31 / F31 Error: Drying-System Fault",
    description:
      "Bosch dishwasher showing E31 or F31? Confirm the exact code and E-Nr. E31/F31 is a drying-system fault on supported models and is not the same as E31-00/E3100.",
    quickAnswer:
      "On supported Bosch dishwasher families, E31 / F31 belongs to the drying-system fault path. Photograph the complete display and record the E-Nr before service. Do not confuse E31 / F31 with E31-00 / E3100, which Bosch uses for a different water-protection condition.",
    priorityLinks: [
      { href: "/problems/bosch-dishwasher-e15-error", label: "Bosch dishwasher E15 leak-protection error" },
      { href: "/problems/bosch-dishwasher-e25-error", label: "Bosch dishwasher E25 drain-pump error" },
      { href: "/error-codes/brands/bosch-dishwasher", label: "All Bosch dishwasher error codes" },
    ],
  },
  "samsung-washer-5d-error": {
    title: "Samsung Washer 5D / Sd / SUD Error: Too Many Suds, Not 5E",
    description:
      "Samsung washer showing 5D, Sd or SUD? It usually means excessive suds, not the 5E/5C drain code. See safe detergent, rinse and drainage checks.",
    quickAnswer:
      "Samsung SUD / Sd / 5D usually means the washer detected excessive suds. Let the machine finish its suds-reduction routine, avoid adding more detergent, then check detergent type and dose. If the code keeps returning, inspect the user-accessible drain path and use the model manual before any internal work.",
    priorityLinks: [
      { href: "/problems/samsung-washer-5c-5e-error", label: "Samsung 5C / 5E drain error" },
      { href: "/problems/samsung-washer-4c-4e-error", label: "Samsung 4C / 4E water error" },
      { href: "/error-codes/brands/samsung-washing-machine", label: "All Samsung washer error codes" },
    ],
  },
};

export const revalidate = 300;

export async function generateStaticParams() {
  const published = await listPublishedDemandProblems();
  return mergePublishedProblems(problems, published).map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug) || await getPublishedDemandProblem(slug);
  if (!problem) return {};

  const opportunitySeo = SEO_OPPORTUNITY_OVERRIDES[problem.slug];
  const codeLabel = problem.errorCode ? `${problem.errorCode} Error` : problem.shortTitle;
  const defaultTitle = problem.contentKind === "error-code"
    ? `${problem.brand ? `${problem.brand} ` : ""}${problem.device} ${codeLabel}: Meaning, Causes & Fixes`
    : `${problem.title} | Causes & Safe Fixes`;
  const defaultDescription = problem.contentKind === "error-code"
    ? `See what ${codeLabel} means, the most likely causes, safe checks to try first, and when to stop and call service. ${problem.summary}`
    : problem.summary;
  const seoTitle = opportunitySeo?.title || defaultTitle;
  const description = opportunitySeo?.description || defaultDescription;

  return {
    title: seoTitle,
    description,
    alternates: { canonical: `/problems/${problem.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: seoTitle,
      description,
      url: `/problems/${problem.slug}`,
      modifiedTime: problem.updated,
      images: [{ url: `/og/${problem.slug}`, width: 1200, height: 630, alt: problem.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [`/og/${problem.slug}`],
    },
  };
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const staticProblem = getProblem(slug);
  const problem = staticProblem || await getPublishedDemandProblem(slug);
  if (!problem) notFound();

  const allProblems = staticProblem
    ? problems
    : mergePublishedProblems(problems, await listPublishedDemandProblems());
  const opportunitySeo = SEO_OPPORTUNITY_OVERRIDES[problem.slug];
  const related = allProblems
    .filter((item) => item.slug !== problem.slug)
    .map((item) => ({
      item,
      score:
        (item.brandSlug === problem.brandSlug ? 4 : 0) +
        (item.device === problem.device ? 3 : 0) +
        (item.categorySlug === problem.categorySlug ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ item }) => item);

  const matchingDeviceHubs = deviceHubs.filter((hub) => hub.match(problem)).slice(0, 2);
  const matchingIssueHubs = issueHubs.filter((hub) => hub.match(problem)).slice(0, 3);
  const errorCodeCluster = getErrorCodeClusterForProblem(problem);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: opportunitySeo?.title || problem.title,
    description: opportunitySeo?.description || problem.summary,
    dateModified: problem.updated,
    ...(problem.published ? { datePublished: problem.published } : {}),
    mainEntityOfPage: `${SITE_URL}/problems/${problem.slug}`,
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publishingPrinciples: `${SITE_URL}/editorial-policy`,
    about: problem.tags,
    inLanguage: "en",
    articleSection: problem.category,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    citation: (problem.sources || []).map((source) => source.url),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: problem.category, item: `${SITE_URL}/categories/${problem.categorySlug}` },
      { "@type": "ListItem", position: 3, name: problem.title, item: `${SITE_URL}/problems/${problem.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: problem.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: problem.category, href: `/categories/${problem.categorySlug}` }, { label: problem.shortTitle }]} /></div>
      <section className="guide-hero">
        <div className="container guide-grid">
          <div className="guide-main">
            <span className="eyebrow">{problem.contentKind === "error-code" ? "Error code guide" : `${problem.category} troubleshooting`}</span>
            {problem.errorCode ? <span className="guide-code">{problem.errorCode}</span> : null}
            <h1>{problem.title}</h1>
            <p className="guide-summary">{problem.summary}</p>
            {problem.modelNote ? <div className="model-note"><strong>Model check required.</strong> {problem.modelNote}</div> : null}
            <div className="guide-meta">
              <span>Reviewed {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(problem.updated))}</span>
              <span>{problem.readTime} minute guide</span>
              <span>{problem.device}</span>
              {problem.appliesTo ? <span>{problem.appliesTo}</span> : null}
            </div>
            <div className="answer-capsule">
              <span>Quick answer</span>
              <p>{opportunitySeo?.quickAnswer || problem.summary}</p>
              <strong>Start here: {problem.quickChecks[0]?.title}. {problem.quickChecks[0]?.detail}</strong>
            </div>
            <GuideActions slug={problem.slug} title={problem.title} />
            <SourceTrustPanel problem={problem} />
          </div>
          <aside className="diagnosis-card">
            <small>Most likely areas</small>
            <h2>Start with what can be observed safely.</h2>
            <ol>{problem.likelyCauses.slice(0, 4).map((cause) => <li key={cause}>{cause}</li>)}</ol>
          </aside>
        </div>
      </section>

      <section className="guide-content">
        <div className="container content-grid">
          <article className="article-flow">
            <DiagnosticWizard slug={problem.slug} title={problem.title} steps={problem.quickChecks} observations={problem.observations} stopConditions={problem.whenToStop} />
            <section id="causes"><h2>Likely causes</h2><ul className="cause-list">{problem.likelyCauses.map((cause) => <li key={cause}>{cause}</li>)}</ul></section>
            <section id="checks"><h2>Quick checks, in order</h2><div className="step-list">{problem.quickChecks.map((step) => <article className="step-card" key={step.title}><div><h3>{step.title}</h3><p>{step.detail}</p></div><span className={`level level-${step.level || "safe"}`}>{step.level === "stop" ? "Professional" : step.level || "safe"}</span></article>)}</div></section>
            <section id="observations"><h2>{problem.decisionTitle}</h2><div className="observation-list">{problem.observations.map((item) => <div className="observation" key={item.label}><strong>{item.label}</strong><p>{item.advice}</p></div>)}</div></section>
            <section id="stop"><h2>Stop and get qualified help when</h2><div className="stop-box"><strong>Do not continue troubleshooting if any of these apply:</strong><ul>{problem.whenToStop.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
            {problem.sources?.length ? <section id="sources"><h2>Official support and model manuals</h2><p className="source-intro">Use the full model number from the rating label. The manufacturer manual is the deciding reference when codes differ by region or product family.</p><div className="source-list">{problem.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer"><span>{source.label}</span><span aria-hidden="true">↗</span></a>)}</div></section> : null}
            <section id="faq"><h2>Frequently asked questions</h2><div className="faq-list">{problem.faq.map((item) => <article className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>
            <FeedbackWidget slug={problem.slug} title={problem.title} />
          </article>
          <aside className="article-nav"><strong>In this guide</strong><a href="#guided-check">Guided check</a><a href="#causes">Likely causes</a><a href="#checks">Quick checks</a><a href="#observations">Compare observations</a><a href="#stop">When to stop</a>{problem.sources?.length ? <a href="#sources">Official sources</a> : null}<a href="#faq">Questions</a></aside>
        </div>
      </section>

      {(opportunitySeo?.priorityLinks.length || errorCodeCluster || matchingDeviceHubs.length || matchingIssueHubs.length) ? <section className="section-tight topic-links-section"><div className="container topic-links-card"><div><span className="eyebrow">Explore the problem space</span><h2>Browse related code, device, and symptom hubs.</h2></div><div className="topic-link-pills">{opportunitySeo?.priorityLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}{errorCodeCluster ? <Link href={`/error-codes/brands/${errorCodeCluster.slug}`}>All {errorCodeCluster.brand} {errorCodeCluster.device.toLowerCase()} codes</Link> : null}{matchingDeviceHubs.map((hub) => <Link href={`/devices/${hub.slug}`} key={`device-${hub.slug}`}>{hub.name}</Link>)}{matchingIssueHubs.map((hub) => <Link href={`/issues/${hub.slug}`} key={`issue-${hub.slug}`}>{hub.name}</Link>)}</div></div></section> : null}

      {related.length ? <section className="section-tight"><div className="container"><div className="section-heading"><div><span className="eyebrow">Keep diagnosing</span><h2>Related troubleshooting guides</h2></div><Link className="text-link" href={staticProblem && problem.brandSlug ? `/brands/${problem.brandSlug}` : "/guides"}>View more →</Link></div><div className="problem-grid">{related.map((item) => <ProblemCard key={item.slug} problem={item} />)}</div></div></section> : null}
    </>
  );
}
