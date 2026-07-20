import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { DiagnosticWizard } from "@/components/DiagnosticWizard";
import { GuideActions } from "@/components/GuideActions";
import { SourceTrustPanel } from "@/components/SourceTrustPanel";
import { ProblemCard } from "@/components/ProblemCard";
import { getProblem, problems } from "@/data/problems";
import { deviceHubs, issueHubs } from "@/data/hubs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return {};

  return {
    title: problem.title,
    description: problem.summary,
    alternates: { canonical: `/problems/${problem.slug}` },
    openGraph: {
      type: "article",
      title: problem.title,
      description: problem.summary,
      url: `/problems/${problem.slug}`,
      modifiedTime: problem.updated,
      images: [{ url: `/og/${problem.slug}`, width: 1200, height: 630, alt: problem.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: problem.title,
      description: problem.summary,
      images: [`/og/${problem.slug}`],
    },
  };
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

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
    .slice(0, 3)
    .map(({ item }) => item);

  const matchingDeviceHubs = deviceHubs.filter((hub) => hub.match(problem)).slice(0, 2);
  const matchingIssueHubs = issueHubs.filter((hub) => hub.match(problem)).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: problem.title,
    description: problem.summary,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <p>{problem.summary}</p>
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
            <DiagnosticWizard
              slug={problem.slug}
              title={problem.title}
              steps={problem.quickChecks}
              observations={problem.observations}
              stopConditions={problem.whenToStop}
            />
            <section id="causes">
              <h2>Likely causes</h2>
              <ul className="cause-list">{problem.likelyCauses.map((cause) => <li key={cause}>{cause}</li>)}</ul>
            </section>
            <section id="checks">
              <h2>Quick checks, in order</h2>
              <div className="step-list">
                {problem.quickChecks.map((step) => (
                  <article className="step-card" key={step.title}>
                    <div><h3>{step.title}</h3><p>{step.detail}</p></div>
                    <span className={`level level-${step.level || "safe"}`}>{step.level === "stop" ? "Professional" : step.level || "safe"}</span>
                  </article>
                ))}
              </div>
            </section>
            <section id="observations">
              <h2>{problem.decisionTitle}</h2>
              <div className="observation-list">{problem.observations.map((item) => <div className="observation" key={item.label}><strong>{item.label}</strong><p>{item.advice}</p></div>)}</div>
            </section>
            <section id="stop">
              <h2>Stop and get qualified help when</h2>
              <div className="stop-box"><strong>Do not continue troubleshooting if any of these apply:</strong><ul>{problem.whenToStop.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </section>
            {problem.sources?.length ? (
              <section id="sources">
                <h2>Official support and model manuals</h2>
                <p className="source-intro">Use the full model number from the rating label. The manufacturer manual is the deciding reference when codes differ by region or product family.</p>
                <div className="source-list">
                  {problem.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer"><span>{source.label}</span><span aria-hidden="true">↗</span></a>)}
                </div>
              </section>
            ) : null}
            <section id="faq">
              <h2>Frequently asked questions</h2>
              <div className="faq-list">{problem.faq.map((item) => <article className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
            </section>
            <FeedbackWidget slug={problem.slug} title={problem.title} />
          </article>
          <aside className="article-nav">
            <strong>In this guide</strong>
            <a href="#guided-check">Guided check</a>
            <a href="#causes">Likely causes</a>
            <a href="#checks">Quick checks</a>
            <a href="#observations">Compare observations</a>
            <a href="#stop">When to stop</a>
            {problem.sources?.length ? <a href="#sources">Official sources</a> : null}
            <a href="#faq">Questions</a>
          </aside>
        </div>
      </section>


      {(matchingDeviceHubs.length || matchingIssueHubs.length) ? (
        <section className="section-tight topic-links-section">
          <div className="container topic-links-card">
            <div><span className="eyebrow">Explore the problem space</span><h2>Browse related device and symptom hubs.</h2></div>
            <div className="topic-link-pills">
              {matchingDeviceHubs.map((hub) => <Link href={`/devices/${hub.slug}`} key={`device-${hub.slug}`}>{hub.name}</Link>)}
              {matchingIssueHubs.map((hub) => <Link href={`/issues/${hub.slug}`} key={`issue-${hub.slug}`}>{hub.name}</Link>)}
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section-tight">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">Keep diagnosing</span><h2>Related troubleshooting guides</h2></div><Link className="text-link" href={problem.brandSlug ? `/brands/${problem.brandSlug}` : `/categories/${problem.categorySlug}`}>View more →</Link></div>
            <div className="problem-grid">{related.map((item) => <ProblemCard key={item.slug} problem={item} />)}</div>
          </div>
        </section>
      ) : null}
    </>
  );
}
