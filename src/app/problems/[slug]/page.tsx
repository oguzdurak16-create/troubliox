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
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

type OpportunitySeoOverride = {
  title: string;
  description: string;
  quickAnswer: string;
  priorityLinks: { href: string; label: string }[];
};

const SEO_OPPORTUNITY_OVERRIDES: Record<string, OpportunitySeoOverride> = {
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
  "bosch-washer-e29-f29-error": {
    title: "Bosch Washer E29 / F29 Error: Meaning and Safe Checks",
    description:
      "Bosch washer E29 or F29? Check the model-specific manual, water supply, hoses, filters and drain path before service. Follow safe checks and stop conditions.",
    quickAnswer:
      "Bosch E29 / F29 handling varies by model family, so confirm the full E-Nr first. Start with safe external checks: fully open the water tap, inspect inlet and drain hoses for kinks, check accessible filters, and stop if there is leakage or the code returns.",
    priorityLinks: [
      { href: "/problems/bosch-washer-e17-f17-error", label: "Bosch E17 / F17 water error" },
      { href: "/problems/bosch-washer-e18-f18-error", label: "Bosch E18 / F18 drain error" },
      { href: "/problems/bosch-washer-e23-f23-error", label: "Bosch E23 / F23 leak error" },
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
};

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
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
  const problem = getProblem(slug);
  if (!problem) notFound();

  const opportunitySeo = SEO_OPPORTUNITY_OVERRIDES[problem.slug];
  const related = problems
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
    datePublished: problem.updated,
    mainEntityOfPage: `${SITE_URL}/problems/${problem.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
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
            <section id="observations"><h2>{problem.decisionTitle}</h2><div className="observation-list">{problem.observations.map((item) => <div className="observation" key={item.label}><strong>{item.label}</strong><p>{item.advice}</p></div>)}</section>
            <section id="stop"><h2>Stop and get qualified help when</h2><div className="stop-box"><strong>Do not continue troubleshooting if any of these apply:</strong><ul>{problem.whenToStop.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
            {problem.sources?.length ? <section id="sources"><h2>Official support and model manuals</h2><p className="source-intro">Use the full model number from the rating label. The manufacturer manual is the deciding reference when codes differ by region or product family.</p><div className="source-list">{problem.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer"><span>{source.label}</span><span aria-hidden="true">↗</span></a>)}</div></section> : null}
            <section id="faq"><h2>Frequently asked questions</h2><div className="faq-list">{problem.faq.map((item) => <article className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>
            <FeedbackWidget slug={problem.slug} title={problem.title} />
          </article>
          <aside className="article-nav"><strong>In this guide</strong><a href="#guided-check">Guided check</a><a href="#causes">Likely causes</a><a href="#checks">Quick checks</a><a href="#observations">Compare observations</a><a href="#stop">When to stop</a>{problem.sources?.length ? <a href="#sources">Official sources</a> : null}<a href="#faq">Questions</a></aside>
        </div>
      </section>

      {(opportunitySeo?.priorityLinks.length || errorCodeCluster || matchingDeviceHubs.length || matchingIssueHubs.length) ? <section className="section-tight topic-links-section"><div className="container topic-links-card"><div><span className="eyebrow">Explore the problem space</span><h2>Browse related code, device, and symptom hubs.</h2></div><div className="topic-link-pills">{opportunitySeo?.priorityLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}{errorCodeCluster ? <Link href={`/error-codes/brands/${errorCodeCluster.slug}`}>All {errorCodeCluster.brand} {errorCodeCluster.device.toLowerCase()} codes</Link> : null}{matchingDeviceHubs.map((hub) => <Link href={`/devices/${hub.slug}`} key={`device-${hub.slug}`}>{hub.name}</Link>)}{matchingIssueHubs.map((hub) => <Link href={`/issues/${hub.slug}`} key={`issue-${hub.slug}`}>{hub.name}</Link>)}</div></div></section> : null}

      {related.length ? <section className="section-tight"><div className="container"><div className="section-heading"><div><span className="eyebrow">Keep diagnosing</span><h2>Related troubleshooting guides</h2></div><Link className="text-link" href={problem.brandSlug ? `/brands/${problem.brandSlug}` : `/categories/${problem.categorySlug}`}>View more →</Link></div><div className="problem-grid">{related.map((item) => <ProblemCard key={item.slug} problem={item} />)}</div></div></section> : null}
    </>
  );
}
