import Link from "next/link";
import type { Category } from "@/data/problems";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link className="category-card" href={`/categories/${category.slug}`}>
      <span className="category-icon" aria-hidden="true">{category.icon}</span>
      <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <span className="category-count">{count} guides</span>
      </div>
      <span className="category-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
