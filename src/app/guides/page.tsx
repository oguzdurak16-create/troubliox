import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { problems } from "@/data/problems";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "All troubleshooting guides A–Z",
  description: "Browse every Troublio troubleshooting guide alphabetically, including device symptoms, error codes, network problems, apps, appliances, Windows, and printers.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const sorted = [...problems].sort((a, b) => a.title.localeCompare(b.title));
  const groups = Array.from(new Set(sorted.map((problem) => problem.title[0]?.toUpperCase() || "#"))).map((letter) => ({
    letter,
    guides: sorted.filter((problem) => (problem.title[0]?.toUpperCase() || "#") === letter),
  }));
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Troublio troubleshooting guides",
    numberOfItems: sorted.length,
    itemListElement: sorted.slice(0, 100).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${SITE_URL}/problems/${item.slug}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "All guides" }]} /></div>
      <section className="page-hero">
        <div className="container page-hero-narrow">
          <span className="eyebrow">{problems.length} published guides</span>
          <h1>All troubleshooting guides A–Z.</h1>
          <p>A crawlable directory of every current guide. Use Search for codes, aliases, brands, symptoms, and model wording.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container alphabet-nav" aria-label="Guide alphabet">
          {groups.map((group) => <a href={`#letter-${group.letter}`} key={group.letter}>{group.letter}</a>)}
        </div>
      </section>
      <section className="section-tight">
        <div className="container guide-directory">
          {groups.map((group) => (
            <section id={`letter-${group.letter}`} className="guide-directory-group" key={group.letter}>
              <h2>{group.letter}</h2>
              <div>
                {group.guides.map((guide) => (
                  <Link href={`/problems/${guide.slug}`} key={guide.slug}>
                    <strong>{guide.title}</strong>
                    <span>{guide.device}{guide.errorCode ? ` · ${guide.errorCode}` : ""}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
