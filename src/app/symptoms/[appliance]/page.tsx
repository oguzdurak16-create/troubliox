import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProblemCard } from "@/components/ProblemCard";
import { problems } from "@/data/problems";

type Props = { params: Promise<{ appliance: string }> };

const applianceMap = {
  "washing-machines": { device: "Washing machine", title: "Washing-machine symptom guides", description: "Troubleshooting paths for draining, spinning, filling, door, leak, vibration, odor, and startup problems." },
  dishwashers: { device: "Dishwasher", title: "Dishwasher symptom guides", description: "Troubleshooting paths for drainage, cleaning, filling, leak, drying, odor, noise, and startup problems." },
} as const;

export function generateStaticParams() {
  return Object.keys(applianceMap).map((appliance) => ({ appliance }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appliance } = await params;
  const item = applianceMap[appliance as keyof typeof applianceMap];
  return item ? { title: item.title, description: item.description, alternates: { canonical: `/symptoms/${appliance}` } } : {};
}

export default async function ApplianceSymptomsPage({ params }: Props) {
  const { appliance } = await params;
  const item = applianceMap[appliance as keyof typeof applianceMap];
  if (!item) notFound();
  const guides = problems.filter((problem) => problem.contentKind === "symptom" && problem.device === item.device);

  return (
    <>
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Symptoms", href: "/symptoms" }, { label: item.title }]} /></div>
      <section className="page-hero"><div className="container page-hero-narrow"><span className="eyebrow">{guides.length} symptom guides</span><h1>{item.title}.</h1><p>{item.description} Begin with safe external checks and stop before internal electrical or mechanical work.</p></div></section>
      <section className="section-tight"><div className="container"><div className="problem-grid">{guides.map((problem) => <ProblemCard key={problem.slug} problem={problem} />)}</div></div></section>
    </>
  );
}
