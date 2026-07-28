'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

const PUBLISHER_ID = 'ca-pub-4491868887846507';
type AdWindow = Window & { adsbygoogle?: Array<Record<string, unknown>> };

type Props = {
  slot?: string;
  label?: string;
  afterSelector?: string;
};

export function AdSlot({ slot, label = 'Advertisement', afterSelector }: Props) {
  const normalizedSlot = slot?.trim();
  const pathname = usePathname();
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!normalizedSlot || !afterSelector) return undefined;
    const anchor = document.querySelector(afterSelector);
    if (!anchor) return undefined;

    const host = document.createElement('div');
    host.dataset.adsensePlacement = 'content';
    anchor.insertAdjacentElement('afterend', host);
    setTarget(host);

    return () => {
      setTarget(null);
      host.remove();
    };
  }, [afterSelector, normalizedSlot, pathname]);

  useEffect(() => {
    if (!normalizedSlot || (afterSelector && !target)) return;
    try {
      const adWindow = window as AdWindow;
      (adWindow.adsbygoogle = adWindow.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and delayed consent can prevent initialization safely.
    }
  }, [afterSelector, normalizedSlot, pathname, target]);

  if (!normalizedSlot) return null;

  const content = (
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

  if (afterSelector) return target ? createPortal(content, target) : null;
  return content;
}
