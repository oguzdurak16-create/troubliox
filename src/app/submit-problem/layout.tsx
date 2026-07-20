import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a problem",
  description: "Suggest a troubleshooting problem for the Troublio editorial queue.",
  alternates: { canonical: "/submit-problem" },
  robots: { index: false, follow: true },
};

export default function SubmitProblemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
