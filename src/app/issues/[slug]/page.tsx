import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { getHubProblems, getIssueHub, issueHubs } from "@/data/hubs";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return issueHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getIssueHub(slug);
  if (!hub) return {};
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/issues/${hub.slug}` },
    openGraph: { title: hub.title, description: hub.description, url: `/issues/${hub.slug}` },
  };
}

export default async function IssueHubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getIssueHub(slug);
  if (!hub) notFound();
  const guides = getHubProblems(hub);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.title,
    numberOfItems: guides.length,
    itemListElement: guides.slice(0, 100).map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `${SITE_URL}/problems/${guide.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Issues", href: "/issues" }, { label: hub.name }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{guides.length} matching guides</span>
          <h1>{hub.title}.</h1>
          <p>{hub.intro}</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="problem-grid">{guides.map((guide) => <ProblemCard key={guide.slug} problem={guide} />)}</div>
        </div>
      </section>
    </>
  );
}
