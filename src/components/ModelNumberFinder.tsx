"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { modelNumberGuides } from "@/data/modelNumberGuides";

export function ModelNumberFinder() {
  const [device, setDevice] = useState("");
  const router = useRouter();

  function openGuide() {
    if (!device) return;
    window.gtag?.("event", "model_number_guide_open", { device_type: device });
    router.push(`/model-number/${device}`);
  }

  return (
    <div className="model-finder" aria-label="Model number guide finder">
      <label htmlFor="model-device">What are you identifying?</label>
      <div>
        <select id="model-device" value={device} onChange={(event) => setDevice(event.target.value)}>
          <option value="">Choose a device</option>
          {modelNumberGuides.map((guide) => <option value={guide.slug} key={guide.slug}>{guide.name}</option>)}
        </select>
        <button type="button" onClick={openGuide} disabled={!device}>Show label locations</button>
      </div>
      <p>Use the complete model, suffix, and hardware revision before applying an error-code definition or downloading firmware.</p>
    </div>
  );
}
