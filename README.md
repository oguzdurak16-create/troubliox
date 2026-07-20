# Troublio v1.4.0

Global troubleshooting search and diagnosis library built with Next.js App Router and TypeScript.

## Included

- 373 unique troubleshooting guides
- 286 exact error-code guides and 73 symptom guides
- 331 source-backed pages using 25 distinct reference domains
- 26 brands, 8 categories, 10 device hubs, and 13 issue hubs
- Browser, DNS, HTTP, streaming, TV, HDMI, console, and audio problem clusters
- Compact client search index served from `/api/search-index`
- Search autocomplete, exact-code ranking, keyboard navigation, and zero-result analytics
- Guided diagnosis, interactive checks, save/share/history, and worked/did-not-work feedback
- Dynamic guide social images through `/og/[slug]`
- RSS, JSON Feed, OpenSearch, XML sitemap, and text sitemap discovery endpoints
- Recently reviewed guide log
- Source and editorial trust panel on guide pages
- TechArticle, ItemList, Organization, and breadcrumb structured data
- IndexNow key and batch submission utility
- Content validation in local build checks and CI
- Search Console verification, GA4 consent management, GitHub, and Vercel configuration

## Local development

```bash
corepack enable
corepack prepare pnpm@10.13.1 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Verify before deployment

```bash
pnpm validate:content
pnpm typecheck
pnpm build
```

## Deploy

The production repository is:

```text
https://github.com/oguzdurak16-create/troubliox
```

Connect the GitHub repository to Vercel and deploy the `main` branch automatically.

## Environment

```text
NEXT_PUBLIC_SITE_URL=https://www.troublio.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@troublio.com
NEXT_PUBLIC_GA_ID=G-VGX2TJ3J31
NEXT_PUBLIC_ADSENSE_CLIENT=
```

GA4 defaults to `G-VGX2TJ3J31` when the environment variable is omitted. Analytics loads only after consent.

## Discovery endpoints

```text
https://www.troublio.com/sitemap.xml
https://www.troublio.com/sitemap.txt
https://www.troublio.com/feed.xml
https://www.troublio.com/feed.json
https://www.troublio.com/opensearch.xml
https://www.troublio.com/recent
```

## Content maintenance

- Curated appliance references: `src/data/applianceProblems.ts`
- Hand-authored appliance symptom guides: `src/data/symptomProblems.ts`
- Windows, printer, Wi-Fi, mobile, and app clusters: `src/data/trafficProblems.ts`
- Browser, web, streaming, and entertainment clusters: `src/data/growthProblems.ts`
- Device and issue hubs: `src/data/hubs.ts`
- Shared data model and search helpers: `src/data/problems.ts`
- Build-time validator: `scripts/validate-content.mjs`

Error codes can vary by model, region, firmware, service, and production year. Verify exact codes against the complete model manual or official platform documentation before materially expanding a page. Never add live electrical, gas, refrigerant, battery, pressurized-system, or unsafe bypass procedures.

## Search Console

Verification file:

```text
public/googlebe83404e57cafffd.html
```
