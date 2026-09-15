export type ExperienceIssue = {
  label: string;
  reports: number;
};

export type ExperienceProduct = {
  slug: string;
  brand: string;
  model: string;
  category: string;
  ownershipCount: number;
  medianMonths: number;
  issueRate: number;
  wouldBuyAgain: number;
  commonIssues: ExperienceIssue[];
  demo: boolean;
};

// UI-only seed data for the private pilot. The /experience route stays noindex
// until the shared database is connected and these values are replaced by
// real, aggregated user submissions.
export const experienceSeed: ExperienceProduct[] = [
  {
    slug: "philips-xc7057-01",
    brand: "Philips",
    model: "XC7057/01",
    category: "Cordless vacuum",
    ownershipCount: 126,
    medianMonths: 24,
    issueRate: 18,
    wouldBuyAgain: 81,
    commonIssues: [
      { label: "Battery runtime dropped", reports: 14 },
      { label: "Filter airflow warning", reports: 8 },
      { label: "Brush head stopped spinning", reports: 5 },
    ],
    demo: true,
  },
  {
    slug: "bosch-wan28281gb",
    brand: "Bosch",
    model: "WAN28281GB",
    category: "Washing machine",
    ownershipCount: 214,
    medianMonths: 39,
    issueRate: 16,
    wouldBuyAgain: 86,
    commonIssues: [
      { label: "Drain or pump issue", reports: 17 },
      { label: "Door lock issue", reports: 9 },
      { label: "Excess vibration", reports: 7 },
    ],
    demo: true,
  },
  {
    slug: "samsung-ww90t534daw",
    brand: "Samsung",
    model: "WW90T534DAW",
    category: "Washing machine",
    ownershipCount: 173,
    medianMonths: 31,
    issueRate: 21,
    wouldBuyAgain: 78,
    commonIssues: [
      { label: "Drain error", reports: 15 },
      { label: "Auto-dose issue", reports: 11 },
      { label: "Door or latch warning", reports: 6 },
    ],
    demo: true,
  },
  {
    slug: "airpods-pro-2",
    brand: "Apple",
    model: "AirPods Pro (2nd generation)",
    category: "Wireless earbuds",
    ownershipCount: 301,
    medianMonths: 22,
    issueRate: 23,
    wouldBuyAgain: 84,
    commonIssues: [
      { label: "Battery life degraded", reports: 31 },
      { label: "One side stopped charging", reports: 19 },
      { label: "Intermittent connection", reports: 13 },
    ],
    demo: true,
  },
];
