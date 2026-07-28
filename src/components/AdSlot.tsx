'use client';

import { useEffect } from 'react';

const PUBLISHER_ID = 'ca-pub-4491868887846507';
type AdWindow = Window & { adsbygoogle?: Array<Record<string, unknown>> };

type Props = {
  slot?: string;
  label?: string;
};

export function AdSlot({ slot, label = 'Advertisement' }: Props) {
  const normalizedSlot = slot?.trim();

  useEffect(() => {
    if (!normalizedSlot) return;
    try {
      const adWindow = window as AdWindow;
      (adWindow.adsbygoogle = adWindow.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and delayed consent can prevent initialization safely.
    }
  }, [normalizedSlot]);

  if (!normalizedSlot) return null;

  return (
    <aside aria-label={label} className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
      <div style={{ minHeight: 120, padding: 12, border: '1px solid rgba(34,34,34,.12)', borderRadius: 18, background: 'rgba(255,255,255,.5)', overflow: 'hidden' }}>
        <span style={{ display: 'block', marginBottom: 8, fontSize: 10, letterSpacing: '.12em', opacity: 0.58 }}>{label.toUpperCase()}</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: 90 }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot={normalizedSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
