import Link from "next/link";
import type { Problem } from "@/data/problems";

export type ProblemCardItem = Pick<
  Problem,
  "slug" | "shortTitle" | "summary" | "category" | "brand" | "device" | "errorCode" | "readTime"
>;

export function ProblemCard({ problem }: { problem: ProblemCardItem }) {
  return (
    <article className="problem-card">
      <div className="problem-card-top">
        <span className="eyebrow">{problem.category}</span>
        <span className="read-time">{problem.readTime} min</span>
      </div>
      {problem.errorCode ? <span className="code-pill">{problem.errorCode}</span> : null}
      <h3><Link href={`/problems/${problem.slug}`}>{problem.shortTitle}</Link></h3>
      <p>{problem.summary}</p>
      <div className="problem-card-bottom">
        <span>{problem.brand || problem.device}</span>
        <Link className="text-link" href={`/problems/${problem.slug}`}>Open guide <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
