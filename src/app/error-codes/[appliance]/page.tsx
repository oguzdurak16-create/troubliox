import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { problems } from "@/data/problems";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ appliance: string }> };

const sectionMap = {
  "washing-machines": {
    title: "Washing machine error codes",
    description: "Model-dependent washer error codes for water supply, draining, balancing, door locks, motors, heaters, sensors, and controls.",
    match: (device: string, brandSlug?: string, categorySlug?: string) => device === "Washing machine",
  },
  dishwashers: {
    title: "Dishwasher error codes",
    description: "Model-dependent dishwasher error codes for filling, draining, leaks, wash pumps, heating, sensors, and controls.",
    match: (device: string, brandSlug?: string, categorySlug?: string) => device === "Dishwasher",
  },
  windows: {
    title: "Windows error codes",
    description: "Windows Update, installation, application, network, boot, and blue-screen codes with direct explanations and safer next steps.",
    match: (device: string, brandSlug?: string) => brandSlug === "microsoft",
  },
  "browser-web": {
    title: "Browser and website error codes",
    description: "Chrome connection errors, DNS failures, certificate warnings, redirect loops, and HTTP 4xx or 5xx status codes.",
    match: (device: string, brandSlug?: string) => brandSlug === "google-chrome" || brandSlug === "web",
  },
  printers: {
    title: "Printer error codes",
    description: "HP, Canon, Epson, and Brother printer codes for paper paths, printheads, carriage movement, internal hardware, and maintenance systems.",
    match: (device: string, brandSlug?: string, categorySlug?: string) => categorySlug === "computers-printers" && brandSlug !== "microsoft" && device.toLowerCase().includes("printer"),
  },
} as const;

export function generateStaticParams() {
  return Object.keys(sectionMap).map((appliance) => ({ appliance }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appliance } = await params;
  const item = sectionMap[appliance as keyof typeof sectionMap];
  return item ? { title: item.title, description: item.description, alternates: { canonical: `/error-codes/${appliance}` } } : {};
}

export default async function CodeSectionPage({ params }: Props) {
  const { appliance } = await params;
  const item = sectionMap[appliance as keyof typeof sectionMap];
  if (!item) notFound();
  const codes = problems.filter((problem) => problem.contentKind === "error-code" && item.match(problem.device, problem.brandSlug, problem.categorySlug));
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: item.title,
    numberOfItems: codes.length,
    itemListElement: codes.map((problem, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: problem.title,
      url: `${SITE_URL}/problems/${problem.slug}`,
    })),
  };
  const grouped = Array.from(new Set(codes.map((problem) => problem.brandSlug).filter(Boolean))).map((brandSlug) => ({
    brandSlug: brandSlug!,
    brand: codes.find((problem) => problem.brandSlug === brandSlug)?.brand || brandSlug,
    problems: codes.filter((problem) => problem.brandSlug === brandSlug),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Error codes", href: "/error-codes" }, { label: item.title }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">{codes.length} guides</span><h1>{item.title}.</h1><p>{item.description} Use the exact code and context before applying a repair.</p></div></section>
      {grouped.map((group) => (
        <section className="section-tight" key={group.brandSlug}>
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">{group.problems.length} codes</span><h2>{group.brand}</h2></div></div>
            <div className="problem-grid">{group.problems.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div>
          </div>
        </section>
      ))}
    </>
  );
}
