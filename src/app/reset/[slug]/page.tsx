import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getResetGuide, resetGuides, resetLevelLabels } from "@/data/resetGuides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resetGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResetGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.name}: safest reset order and data-loss warning`,
    description: guide.summary,
    alternates: { canonical: `/reset/${guide.slug}` },
    openGraph: { title: guide.name, description: guide.summary, url: `/reset/${guide.slug}` },
  };
}

export default async function ResetGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getResetGuide(slug);
  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${guide.name}: safest reset order`,
    description: guide.summary,
    mainEntityOfPage: `${SITE_URL}/reset/${guide.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en",
    about: guide.searchTerms,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reset assistant", href: "/reset" }, { label: guide.name }]} /></div>
      <section className="page-hero reset-guide-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{guide.device}</span>
          <h1>{guide.name}: use the smallest reset that fits.</h1>
          <p>{guide.summary}</p>
          <div className="reset-symptom-chips">{guide.symptoms.map((symptom) => <span key={symptom}>{symptom}</span>)}</div>
        </div>
      </section>
      <section className="guide-content">
        <div className="container content-grid">
          <article className="article-flow reset-article">
            <section>
              <h2>Reset levels in the correct order</h2>
              <p>Start with the first level that matches the failure. Do not jump to factory reset because a restart did not fix a hardware, account, service, or connection problem.</p>
            </section>
            {guide.levels.map((level, index) => (
              <section className="reset-level-section" id={level.level} key={level.level}>
                <div className="reset-level-heading">
                  <span>{index + 1}</span>
                  <div><small>{resetLevelLabels[level.level]}</small><h2>{level.title}</h2></div>
                </div>
                <p>{level.whenToUse}</p>
                <div className="reset-impact-grid">
                  <div><strong>Usually keeps</strong><ul>{level.keeps.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><strong>May remove</strong><ul>{level.removes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <h3>Steps</h3>
                <ol className="reset-steps">{level.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                {level.stopIf?.length ? <div className="reset-stop"><strong>Stop instead of resetting when:</strong><ul>{level.stopIf.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
              </section>
            ))}
            <section>
              <h2>Before any factory reset</h2>
              <div className="reset-checklist">{guide.beforeFactoryReset.map((item) => <label key={item}><input type="checkbox" /> <span>{item}</span></label>)}</div>
            </section>
            <section>
              <h2>After the reset</h2>
              <ol className="reset-steps">{guide.afterReset.map((item) => <li key={item}>{item}</li>)}</ol>
            </section>
            <section className="reset-next-search">
              <div><span className="eyebrow">Still failing?</span><h2>Search the exact symptom or error code.</h2><p>A reset cannot repair a failed part, service outage, damaged cable, account lock, storage failure, leak, or power fault.</p></div>
              <div><Link className="button button-primary" href={`/search?q=${encodeURIComponent(guide.relatedSearch)}`}>Search related guides</Link><Link className="button button-secondary" href="/decoder">Decode a code</Link></div>
            </section>
          </article>
          <aside className="article-nav">
            <strong>Reset levels</strong>
            {guide.levels.map((level) => <a href={`#${level.level}`} key={level.level}>{resetLevelLabels[level.level]}</a>)}
            <Link href="/reset">Reset assistant</Link>
            <Link href="/model-number">Find model number</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
