# Troublio v1.7.2

Troublio is a global troubleshooting search and diagnosis library built with Next.js App Router, React, TypeScript, and pnpm.

Production repository:

```text
https://github.com/oguzdurak16-create/troubliox
```

## Current capabilities

- Exact error-code decoder with brand and device filters
- Guided diagnosis by symptom, device, brand, and visible behavior
- Reset assistant that separates restart, power cycle, network reset, settings reset, and factory reset
- Model-number finder with device-specific label locations
- Source-backed appliance, Windows, printer, Wi-Fi, phone, app, browser, TV, and everyday troubleshooting guides
- Search Console opportunity pages for exact queries already receiving Google impressions
- Safe external checks, clear stop conditions, model warnings, and official support links
- Compact client search index served from `/api/search-index`
- Search autocomplete, exact-code ranking, keyboard navigation, local saves, recent history, sharing, and feedback
- Dynamic social images through `/og/[slug]`
- XML sitemap, text sitemap, RSS, JSON Feed, OpenSearch, robots, and IndexNow support
- GA4 consent management and optional AdSense loading
- Automated repository, content, TypeScript, and production-build checks

## Deployment workflow

Vercel deploys the GitHub `main` branch automatically.

All development follows this sequence:

```text
dev/** branch → pull request → GitHub Actions checks → squash merge to main → one production deployment
```

Do not develop directly on `main` and do not use force push. A release can change many files while still producing one production deployment.

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
pnpm audit:repo
pnpm validate:content
pnpm typecheck
pnpm build
```

Windows users can run `BUILD_KONTROL.bat`.

The repository audit checks required files, imports, App Router routes, sitemap entries, internal links, public assets, package-manager consistency, Google verification, IndexNow verification, temporary files, and obsolete deployment artifacts.

## Environment

```text
NEXT_PUBLIC_SITE_URL=https://www.troublio.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@troublio.com
NEXT_PUBLIC_GA_ID=G-VGX2TJ3J31
NEXT_PUBLIC_ADSENSE_CLIENT=
SITE_URL=https://www.troublio.com
INDEXNOW_KEY=
INDEXNOW_ENDPOINT=
```

GA4 defaults to `G-VGX2TJ3J31` when `NEXT_PUBLIC_GA_ID` is omitted. Analytics and advertising scripts load only after consent.

## Discovery endpoints

```text
https://www.troublio.com/sitemap.xml
https://www.troublio.com/sitemap.txt
https://www.troublio.com/robots.txt
https://www.troublio.com/feed.xml
https://www.troublio.com/feed.json
https://www.troublio.com/opensearch.xml
https://www.troublio.com/recent
```

After a substantial production content update, run `INDEXNOW_GONDER.bat` once. Do not submit IndexNow again for cosmetic-only changes.

## Content architecture

- Curated appliance codes: `src/data/applianceProblems.ts`
- Appliance symptom guides: `src/data/symptomProblems.ts`
- Windows, printer, Wi-Fi, mobile, and app clusters: `src/data/trafficProblems.ts`
- Browser, web, streaming, and entertainment clusters: `src/data/growthProblems.ts`
- Search Console opportunity guides: `src/data/gscOpportunityProblems.ts`
- Reset assistant content: `src/data/resetGuides.ts`
- Model-number location guides: `src/data/modelNumberGuides.ts`
- Device and issue hubs: `src/data/hubs.ts`
- Shared problem model and search helpers: `src/data/problems.ts`
- Content validator: `scripts/validate-content.mjs`
- Repository validator: `scripts/audit-repository.mjs`

## Verification files

Google Search Console:

```text
public/googlebe83404e57cafffd.html
```

IndexNow uses the key declared in `scripts/submit-indexnow.mjs` and requires a matching root text file in `public/`.

## Safety and editorial rule

Error codes can vary by model, region, firmware, service, and production year. Verify exact codes against the complete model manual or official platform documentation before materially expanding a page. Never add live electrical, gas, refrigerant, battery, pressurized-system, unsafe bypass, or undocumented service-menu procedures.
