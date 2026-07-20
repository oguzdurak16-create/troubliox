# Changelog

## 1.7.0 — 2026-07-20

- Added six exact-query appliance guides based on early Google Search Console impressions.
- Added official-source coverage for Whirlpool washer rL, Bosch washer F29 and E32, Bosch dishwasher E90, LG washer FF, and Samsung washer 5D.
- Added search-language aliases and direct answers for the wording users entered in Google.
- Added safeguards for easily confused displays such as Samsung 5d versus 5E and Bosch dishwasher E90 versus dryer E90.
- Added a homepage search-demand section and updated hero links to strengthen internal discovery.
- Added semantic code-target merging so stronger curated content replaces an existing equivalent page without creating duplicate URLs.

## 1.6.0 — 2026-07-20

- Added a reset assistant that chooses between restart, power cycle, network reset, settings reset, and factory reset.
- Added six detailed reset guides for routers, printers, smart TVs and streaming devices, phones and tablets, Windows PCs, and appliance controls.
- Added explicit data-loss boundaries, backup preparation, stop conditions, and post-reset verification steps.
- Added reset pages to homepage tools, desktop/mobile navigation, footer navigation, and sitemap discovery.
- Added analytics events for reset decisions without collecting serial numbers or private setup values.
- Expanded content validation to cover model-number guides, reset-guide slugs, reset levels, and required reset data.
- Updated GitHub Actions to validate development branches before the production branch is moved.

## 1.5.0 — 2026-07-20

- Added an exact error-code decoder with brand and device filters.
- Added a model-number finder and six device-specific label-location guides.
- Added decoder and model-number pages to navigation and sitemap discovery.
- Added GitHub Actions content validation, TypeScript checking, and production-build verification.
- Migrated the production repository to GitHub and connected Vercel to the `main` branch.

## 1.4.0 — 2026-07-17

- Expanded the library to 373 guides, including 286 exact error-code guides and 73 symptom guides.
- Added 23 curated browser, DNS, HTTP, streaming, TV, HDMI, console, and audio troubleshooting guides.
- Added Web browsers and Streaming & TV device hubs plus a Website errors issue hub.
- Added a dedicated browser and website error-code library.
- Replaced full guide payloads in client search tools with a compact cached search-index endpoint.
- Added autocomplete, keyboard navigation, exact-code ranking, and reusable client-side search caching.
- Added dynamic guide-specific Open Graph images without pre-generating hundreds of image files.
- Added RSS, JSON Feed, OpenSearch, text sitemap, and a recently reviewed guide page.
- Added source-backed trust panels and stronger TechArticle citation data.
- Added ItemList structured data to code, category, brand, device, and issue collections.
- Added IndexNow verification key, batch submission script, and Windows helper.
- Added build-time content statistics and validation to `BUILD_KONTROL.bat` and GitLab CI.
- Removed the noindex problem-submission utility from XML and text sitemaps.
- Expanded discovery to approximately 452 indexable sitemap URLs.
- Added HSTS, DNS prefetch, and stricter response headers.

## 1.3.0 — 2026-07-17

- Added 58 curated high-intent guides for Windows, printers, Wi-Fi, phones, apps, and TV problems.
- Expanded the library to 350 unique guides and 277 error-code pages.
- Added device hubs for washing machines, dishwashers, printers, Windows PCs, routers, iPhones, Android phones, and apps.
- Added issue hubs for connection, startup, drainage, leaking, printing, blue screens, updates, sound, black screens, overheating, slow performance, and disconnecting.
- Added a crawlable A-Z guide directory.
- Added dedicated Windows and printer error-code hubs.
- Added quick-answer capsules and stronger contextual internal links on guide pages.
- Added analytics tracking for zero-result searches.
- Removed deprecated FAQ, HowTo, and sitelinks search-box structured data while keeping user-visible help content.
- Expanded sitemap and navigation for the new search clusters.
- Fixed canonical inheritance so indexable pages identify their own canonical URL.
- Kept noindex utility pages crawlable so robots metadata can be read.

## 1.2.0 — 2026-07-17

- Added 16 hand-authored washing-machine and dishwasher symptom guides.
- Added guided diagnosis finder with category and brand filtering.
- Added interactive observation and safe-check workflow to every guide.
- Added save, share, and recent-history tools stored locally in the browser.
- Added saved-guides page and symptom-library hubs.
- Added search filters for area, brand, and guide type.
- Added optional analytics consent before GA4 or advertising scripts load.
- Added content validation for duplicate or incomplete problem pages.
- Expanded sitemap, navigation, privacy disclosures, and GA4 events.
