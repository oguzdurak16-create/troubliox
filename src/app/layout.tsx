import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ConsentManager } from "@/components/ConsentManager";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Find what’s wrong`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["troubleshooting", "error codes", "problem solving", "device help", "repair guide"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Find what’s wrong. Know what to do.`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Troublio troubleshooting engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Find what’s wrong`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
  icons: { icon: "/icon.svg" },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
      "application/feed+json": `${SITE_URL}/feed.json`,
    },
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f4eb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-VGX2TJ3J31";
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    contactPoint: { "@type": "ContactPoint", contactType: "editorial", email: "hello@troublio.com" },
  };

  return (
    <html lang="en">
      <head>
        <link rel="search" type="application/opensearchdescription+xml" title="Search Troublio" href="/opensearch.xml" />
        <link rel="alternate" type="application/rss+xml" title="Troublio updates" href="/feed.xml" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <ConsentManager gaId={gaId} adsenseClient={adsenseClient} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
