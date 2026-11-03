'use client';
import { useState } from 'react';
import { compareRepairCost } from '@/lib/repair-cost';
import styles from './RepairCalculator.module.css';
const fields = [
  { key: 'repair', label: 'Complete repair quote', value: '350', unit: 'currency' },
  { key: 'purchase', label: 'Replacement purchase price', value: '800', unit: 'currency' },
  { key: 'installation', label: 'Delivery, installation and disposal', value: '75', unit: 'currency' },
  { key: 'credit', label: 'Trade-in or resale credit', value: '25', unit: 'currency' },
  { key: 'repairYears', label: 'Expected extra life after repair', value: '3', unit: 'years' },
  { key: 'newYears', label: 'Expected replacement life', value: '10', unit: 'years' },
] as const;
export function RepairCalculator() {
  const [values, setValues] = useState<Record<string, string>>(Object.fromEntries(fields.map(f => [f.key, f.value])));
  const [currency, setCurrency] = useState('USD');
  const [answer, setAnswer] = useState<ReturnType<typeof compareRepairCost> | null>(null);
  const [error, setError] = useState('');
  const money = (value: number) => new Intl.NumberFormat('en', { style: 'currency', currency }).format(value);
  return <div className={styles.card}>
    <form onSubmit={e => { e.preventDefault(); try { setAnswer(compareRepairCost(...fields.map(f => Number(values[f.key])) as [number, number, number, number, number, number])); setError(''); } catch(err) { setAnswer(null); setError(err instanceof Error ? err.message : 'Check your inputs.'); } }}>
      <label className={styles.currency}>Currency<select value={currency} onChange={e => setCurrency(e.target.value)}>{['USD','EUR','GBP','CAD','AUD'].map(c => <option key={c}>{c}</option>)}</select></label>
      <div className={styles.fields}>{fields.map(f => <label key={f.key}>{f.label} ({f.unit === 'currency' ? currency : 'years'})<input name={f.key} type="number" min={f.unit === 'years' ? 0.1 : 0} max={f.unit === 'years' ? 50 : 1000000000} step="any" required value={values[f.key]} onChange={e => { setValues(v => ({ ...v, [f.key]: e.target.value })); setAnswer(null); setError(''); }} /></label>)}</div>
      <button type="submit">Compare costs</button>
    </form>
    {error && <p role="alert">{error}</p>}
    {answer && <div className={styles.answer} role="status"><h2>Estimated cost comparison</h2><dl><div><dt>Repair cost per extra year</dt><dd data-repair-annual>{money(answer.repairAnnual)}</dd></div><div><dt>Replacement cost per year</dt><dd data-replacement-annual>{money(answer.replacementAnnual)}</dd></div><div><dt>Net replacement cost</dt><dd>{money(answer.replacement)}</dd></div><div><dt>Replacement upfront difference</dt><dd>{money(answer.extraUpfront)}</dd></div></dl><p>{Math.abs(answer.repairAnnual - answer.replacementAnnual) < 0.005 ? 'Both options have the same estimated cost per year.' : (answer.repairAnnual < answer.replacementAnnual ? 'Repair' : 'Replacement') + ' has the lower estimated cost per year in this scenario.'}</p><p>{answer.ratio === null ? 'Net replacement cost is zero, so no repair percentage is shown.' : `The repair quote is ${answer.ratio.toFixed(1)}% of the net replacement cost. This is a comparison, not a universal repair threshold.`}</p></div>}
    <p className={styles.note}>Entries stay in this page. Useful life is your estimate, not a Troublio prediction. Energy, maintenance, financing, reliability and the value of your time are not included.</p>
  </div>;
}
