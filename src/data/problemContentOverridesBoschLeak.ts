import type { Problem } from "./problems";

const BOSCH_E15_SOURCE = {
  label: "Bosch Support — dishwasher E15",
  url: "https://www.bosch-home.com/us/owner-support/get-support/support-selfhelp-dishwasher-error-e15",
};

const BOSCH_E30_MANUAL_SOURCE = {
  label: "Bosch Information for Use — E:30-00 water protection",
  url: "https://media3.bosch-home.com/Documents/9001880543_C.pdf",
};

const overrides: Record<string, Partial<Problem>> = {
  "bosch-dishwasher-e15-error": {
    title: "Bosch dishwasher E15: water detected in the base, leak protection active",
    shortTitle: "Bosch dishwasher E15",
    summary: "Bosch's US support defines E15 as the safety switch detecting water in the dishwasher base, which activates the leakage-protection system. The correct user response is to stop the water inflow and contact Bosch support rather than repeatedly resetting or tilting the appliance.",
    likelyCauses: [
      "Water has reached the dishwasher base and triggered the safety switch",
      "An internal or external leak has activated the leakage-protection system",
      "Foam, overfill, or another water-management fault has allowed water into the base area",
      "The exact model has a leak source that requires inspection after the water supply is shut off",
    ],
    quickChecks: [
      { title: "Treat E15 as a leak-protection event", detail: "Bosch explicitly says E15 means the safety switch detected water in the base. Do not treat it as a normal drain-only or fill-only code.", level: "caution" },
      { title: "Turn off the dishwasher water inflow", detail: "Follow Bosch's published E15 guidance and close the dishwasher's water supply. If a shutoff valve cannot be operated safely, stop and arrange service.", level: "caution" },
      { title: "Look only for external evidence of leakage", detail: "Without tilting the machine or removing panels, check the floor, visible supply connection, drain connection, and door area for active water. Protect nearby flooring if needed.", level: "safe" },
      { title: "Do not tilt the dishwasher to clear E15", detail: "Tilting may move water away from the base sensor without fixing the leak and can move water toward electrical components. Bosch's official user guidance is to shut off water and contact support.", level: "stop" },
    ],
    decisionTitle: "Is E15 accompanied by visible water, recent overfoaming, or a recurring base-leak event?",
    observations: [
      { label: "Visible water is present around or under the dishwasher", advice: "Leave the water supply off. Avoid further cycles and arrange leak diagnosis before reuse." },
      { label: "No external leak is visible but E15 remains", advice: "Water can be trapped inside the base where it is not externally visible. The safety switch condition still needs model-specific inspection." },
      { label: "E15 followed excessive foam or wrong detergent", advice: "Overfoaming can contribute water to the base, but do not assume the problem is solved until the appliance is inspected and remains dry through a proper test." },
    ],
    whenToStop: [
      "Any active leak, pooled water, or electrical moisture risk is present",
      "E15 returns after the appliance has been professionally checked or safely dried",
      "Access to the base, safety switch, hoses, pump, sump, or electrical components is required",
    ],
    faq: [
      { question: "What does Bosch dishwasher E15 mean?", answer: "Bosch says E15 means the safety switch detected water in the base and the dishwasher's leakage-protection system has activated." },
      { question: "Should I tilt a Bosch dishwasher to clear E15?", answer: "No. That can move the water away from the sensor without correcting the leak and may move water toward electrical parts. Bosch tells users to turn off the water inflow and contact support." },
      { question: "Is Bosch E15 exactly the same display as E:30-00?", answer: "They both concern water/leak protection, but Bosch uses different code conventions across generations. E15 is documented on Bosch's US support page; newer manuals can show E:30-00 for an activated water-protection system. Match the exact display and model." },
    ],
    appliesTo: "Bosch dishwashers that use E15 for base-water/leakage protection",
    modelNote: "Bosch code formats vary by model generation. This page follows Bosch's E15 definition; newer platforms may instead display E:30-00 for an activated water-protection system.",
    sources: [BOSCH_E15_SOURCE],
    updated: "2026-09-04",
  },
  "bosch-dishwasher-e30-error": {
    title: "Bosch dishwasher E:30-00 / E30: water-protection system activated",
    shortTitle: "Bosch dishwasher E:30-00",
    summary: "Newer Bosch dishwasher manuals use the E:30-00 display when the water-protection system is activated. Bosch's model documentation instructs the user to turn off the water tap and call Customer Service. This page is scoped to that newer E:30-00 display rather than treating it as a duplicate spelling of E15.",
    likelyCauses: [
      "The newer-generation dishwasher has activated its water-protection system",
      "Water or a leak condition has reached the protection system's trigger state",
      "A hose, sump, seal, pump, or other water-carrying component may be leaking internally",
      "The appliance needs model-specific leak diagnosis after the water supply is isolated",
    ],
    quickChecks: [
      { title: "Confirm the full display is E:30-00", detail: "On newer Bosch manuals, the complete code can be shown as E:30-00. Record the full display and the appliance E-number so it is not confused with washer E:30 variants or older dishwasher E15 terminology.", level: "safe" },
      { title: "Turn off the water tap", detail: "Bosch's E:30-00 manual guidance is direct: close the water tap when the water-protection system has activated.", level: "caution" },
      { title: "Check externally for active leakage", detail: "Inspect only visible hose connections, the floor, cabinet area, and door perimeter without opening the appliance. Do not continue a cycle if water is present.", level: "safe" },
      { title: "Call service rather than repeatedly resetting", detail: "Bosch's manual tells users to contact Customer Service for E:30-00. Internal leak tracing and base access are not normal user-level checks.", level: "stop" },
    ],
    decisionTitle: "Does the appliance show the newer Bosch E:30-00 water-protection code?",
    observations: [
      { label: "The display is exactly E:30-00", advice: "Use the model-specific Bosch manual for that generation, leave the water tap off, and arrange service as the manual instructs." },
      { label: "The display is E15 instead", advice: "Use the E15 guidance for that model generation. The underlying safety purpose is similar, but the exact code convention and model documentation differ." },
      { label: "The code is E:31-00 or E:32-00", advice: "Do not use this page as a substitute. Bosch manuals list adjacent E:31/E:32 codes with different supply/protection details; verify the exact code." },
    ],
    whenToStop: [
      "The E:30-00 water-protection code is present after the water tap is shut",
      "There is visible leakage, pooled water, or any electrical moisture risk",
      "Troubleshooting would require removing panels or accessing the base/protection system",
    ],
    faq: [
      { question: "What does Bosch dishwasher E:30-00 mean?", answer: "Bosch's newer dishwasher manuals state that E:30-00 means the water-protection system is activated and instruct the user to turn off the water tap and call Customer Service." },
      { question: "Why does Troublio keep E15 and E:30-00 as separate pages?", answer: "Bosch uses different displays across model generations. Keeping the pages separate lets each search match the exact code and model convention while explaining that both belong to the leak/water-protection family." },
      { question: "Can I clear E:30-00 with a power reset?", answer: "Bosch's published E:30-00 manual guidance does not present repeated power resets as the remedy. It tells users to shut off the water and contact service because the protection system has activated." },
    ],
    appliesTo: "Newer Bosch dishwasher model families that display E:30-00 for activated water protection",
    modelNote: "Confirm the full code including suffixes. This page is for Bosch dishwasher E:30-00; Bosch washers and other dishwasher E:30 variants can use different meanings.",
    sources: [BOSCH_E30_MANUAL_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyBoschLeakProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
