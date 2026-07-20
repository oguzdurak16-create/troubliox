import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getModelNumberGuide, modelNumberGuides } from "@/data/modelNumberGuides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return modelNumberGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getModelNumberGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/model-number/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, url: `/model-number/${guide.slug}` },
  };
}

export default async function ModelNumberGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getModelNumberGuide(slug);
  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}/model-number/${guide.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Model numbers", href: "/model-number" }, { label: guide.name }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{guide.name} identification</span>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <div className="model-examples"><strong>Example formats</strong>{guide.examples.map((example) => <code key={example}>{example}</code>)}</div>
        </div>
      </section>
      <section className="guide-content">
        <div className="container content-grid">
          <article className="article-flow model-article">
            <section id="locations">
              <h2>Check these locations</h2>
              <div className="location-grid">{guide.locations.map((location, index) => <article key={location.title}><span>{index + 1}</span><div><h3>{location.title}</h3><p>{location.detail}</p></div></article>)}</div>
            </section>
            <section>
              <h2>Before you look</h2>
              <div className="stop-box model-safety"><ul>{guide.beforeYouLook.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </section>
            <section>
              <h2>Which number do you need?</h2>
              <div className="label-meaning-grid">{guide.labels.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.meaning}</p></article>)}</div>
            </section>
            <section>
              <h2>Search the problem with the exact model</h2>
              <p>Combine the full model number with the visible code or symptom. Keep spaces and suffixes for the first search, then try the same code without punctuation if needed.</p>
              <Link className="button button-primary" href={`/search?q=${encodeURIComponent(guide.nextSearch)}`}>Search {guide.name.toLowerCase()} guides</Link>
            </section>
          </article>
          <aside className="article-nav">
            <strong>In this guide</strong>
            <a href="#locations">Label locations</a>
            <Link href="/decoder">Decode an error code</Link>
            <Link href="/diagnose">Start diagnosis</Link>
            <Link href="/model-number">Other devices</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
