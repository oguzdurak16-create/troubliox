# Troublio content review checklist

Before adding or updating a guide:

1. Use the exact product, device, symptom, display wording, or complete error code.
2. Put a direct answer in the summary; do not hide the meaning below a long introduction.
3. Add at least three plausible causes without claiming that one component has definitely failed.
4. Order checks from safe external observation to professional diagnosis.
5. Include at least two visible observation branches that meaningfully change the next step.
6. Include clear stop conditions for water, heat, electricity, gas, pressure, chemicals, batteries, glass, or moving parts.
7. For error codes, add an official manufacturer/platform source and a model-, region-, firmware-, or service-specific warning where applicable.
8. Use an ISO review date in `YYYY-MM-DD` format and update it only after a material review.
9. Avoid duplicate slugs, duplicate titles, doorway pages, and pages that differ only by one keyword.
10. Link to the nearest device hub, issue hub, brand, category, and genuinely related guides.
11. Do not create pages for search volume alone when the available evidence cannot support a useful diagnosis.
12. Run `pnpm validate:content`, `pnpm typecheck`, and `pnpm build` before deployment.

The build-time validator in `scripts/validate-content.mjs` and runtime data guard in `src/data/validateProblems.ts` block incomplete or duplicate content.
