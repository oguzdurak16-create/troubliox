export function compareRepairCost(repair: number, purchase: number, installation: number, credit: number, repairYears: number, replacementYears: number) {
  if (![repair, purchase, installation, credit, repairYears, replacementYears].every(Number.isFinite) || [repair, purchase, installation, credit].some(v => v < 0 || v > 1e9) || [repairYears, replacementYears].some(v => v <= 0 || v > 50)) throw new RangeError('Enter non-negative costs and an estimated useful life above 0 and no more than 50 years.');
  const replacement = purchase + installation - credit;
  if (replacement < 0) throw new RangeError('Trade-in credit cannot exceed purchase and installation costs in this model.');
  const repairAnnual = repair / repairYears, replacementAnnual = replacement / replacementYears;
  if (![replacement, repairAnnual, replacementAnnual].every(Number.isFinite)) throw new RangeError('The values exceed the calculation range.');
  return { replacement, repairAnnual, replacementAnnual, ratio: replacement > 0 ? repair / replacement * 100 : null, extraUpfront: replacement - repair };
}
