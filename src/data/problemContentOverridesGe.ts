import type { Problem } from "./problems";

const GE_H2O_SOURCE = {
  label: "GE Appliances — Front Load Washer H2O Supply Error",
  url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=000060308",
};

const overrides: Record<string, Partial<Problem>> = {
  "ge-appliances-washer-h2o-supply-error": {
    title: "GE front-load washer H2O Supply: water supply or pressure-sensor fault",
    shortTitle: "GE washer H2O Supply",
    summary: "GE Appliances says the H2O Supply message on supported front-load washers appears when the machine cannot establish the expected water level. The official guidance specifically points to closed water valves or a pressure-sensor problem, with extremely low household water pressure as a less common cause.",
    likelyCauses: [
      "One or both household water-supply valves are turned off or not fully open",
      "The washer's pressure-sensing system is not reporting the expected water level",
      "Household water pressure is extremely low",
      "A model-specific inlet, hose, or sensing fault remains after the external supply is verified",
    ],
    quickChecks: [
      { title: "Check that the water supply is actually on", detail: "GE's first user-level instruction is to make sure the water supply to the front-load washer is turned on. Fully open the supply valves before retrying.", level: "safe" },
      { title: "Expect a temporary drain-pump lockout", detail: "GE says the washer normally runs the drain pump for about four minutes after H2O Supply appears. This is a protective response intended to reduce overfill risk if pressure sensing is abnormal; do not mistake that drain period for a separate drain fault.", level: "safe" },
      { title: "Check for unusually weak household flow", detail: "If the supply valves are open, compare flow at a nearby fixture. GE notes that extremely low water pressure can rarely produce this message.", level: "safe" },
      { title: "Stop at the pressure-sensor diagnosis boundary", detail: "If water is definitely on and the H2O Supply message returns, GE recommends service. Do not open the washer to bypass or electrically test the pressure-sensing system as a user-level step.", level: "stop" },
    ],
    decisionTitle: "Are the front-load washer's water supplies fully open when H2O Supply appears?",
    observations: [
      { label: "A supply valve was closed", advice: "Open the required supply valve fully, allow the protective drain period to finish, and retry one cycle." },
      { label: "Both supplies are open but household flow is extremely weak", advice: "Correct the household water-pressure/supply problem before treating the washer as defective." },
      { label: "Normal water supply is confirmed and H2O Supply returns", advice: "GE's published guidance moves to service at this point because the pressure-sensing or inlet system requires model-specific diagnosis." },
      { label: "The drain pump runs for roughly four minutes after the message", advice: "That behavior is documented by GE as a protective response to H2O Supply and does not by itself prove a failed drain pump." },
    ],
    whenToStop: [
      "H2O Supply returns after the water valves and household flow are confirmed",
      "Water is leaking, rising unexpectedly, or continues entering when the washer should be off",
      "Diagnosis would require pressure-sensor, inlet-valve, wiring, or control-board access",
    ],
    faq: [
      { question: "What does H2O Supply mean on a GE front-load washer?", answer: "GE says the message can be caused by the water supply valves being off or by a pressure-sensor problem. Extremely low water pressure is a less common possibility." },
      { question: "Why does the GE washer drain for four minutes after H2O Supply?", answer: "GE documents that behavior as an overfill-protection response in case the pressure-sensing system is the cause of the error." },
      { question: "Is H2O Supply the same as every GE E-series fill code?", answer: "No assumption should be made from the symptom alone. This page follows GE's published H2O Supply guidance for supported front-load washers; E-series service codes can be model-family specific." },
      { question: "Should I replace the inlet valve when H2O Supply appears?", answer: "Not from the message alone. First confirm the household water supply. If the message persists with normal supply, GE recommends service because the pressure-sensing or inlet system needs model-specific diagnosis." },
    ],
    appliesTo: "Supported GE Appliances front-load washers that display the H2O Supply message",
    modelNote: "GE's H2O Supply article is specifically written for front-load washers. Do not transfer this exact meaning to unrelated GE platforms or service-mode E-codes without the exact model documentation.",
    sources: [GE_H2O_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyGeProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
