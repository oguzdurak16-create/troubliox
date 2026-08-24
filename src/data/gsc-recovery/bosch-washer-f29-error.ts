import type { Problem } from "../problems";

const modelWarning =
  "Bosch washer codes vary by model, market, and production year. Confirm the exact display and complete E-Nr before using service procedures or ordering parts.";

export const boschWasherF29ErrorProblem: Problem = {
  slug: "bosch-washer-f29-error",
  title: "Bosch washing machine E29 or F29? Check the display, water pressure, and inlet path",
  shortTitle: "Bosch washer F29 / 29 error",
  summary:
    "Bosch documentation for supported washers groups F29 with F17/E17 water-inlet faults: the tap may be partly closed, pressure may be too low, or the inlet filter/hose may be restricted. If your display truly reads E29, verify the complete model manual before assuming it has the same meaning.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "Bosch",
  brandSlug: "bosch",
  device: "Washing machine",
  updated: "2026-08-24",
  readTime: 4,
  likelyCauses: [
    "The water tap is not fully open or household water pressure is too low",
    "The inlet-hose filter is restricted by scale or debris",
    "The AquaStop or inlet hose is kinked, crushed, or installed incorrectly",
    "The display has been read as E29 when the model documentation uses F29 or 29",
    "A model-specific inlet valve, flow, wiring, or control fault prevents filling",
  ],
  quickChecks: [
    {
      title: "Confirm the exact code and E-Nr",
      detail: "Photograph the display and compare it with the model-specific manual before treating E29 and F29 as identical.",
      level: "safe",
    },
    {
      title: "Open the water tap fully",
      detail: "Confirm a nearby tap has normal flow and that the washer supply valve is fully open.",
      level: "safe",
    },
    {
      title: "Inspect the inlet hose and user filter",
      detail: "Straighten visible kinks. If the manual allows filter cleaning, turn off the tap first and never immerse an AquaStop safety valve.",
      level: "caution",
    },
    {
      title: "Stop before valve or electrical diagnosis",
      detail: "If normal pressure and a clear inlet path do not solve the fault, qualified service should test the inlet system.",
      level: "stop",
    },
  ],
  decisionTitle: "What happens when the 29-series code appears?",
  observations: [
    {
      label: "No water enters",
      advice: "Focus first on the tap, household pressure, hose, inlet filter, and AquaStop path.",
    },
    {
      label: "Water enters very slowly",
      advice: "A partly closed tap, low pressure, kink, or restricted filter is the strongest external suspect.",
    },
    {
      label: "The display clearly says E29",
      advice: "Verify the exact E-Nr and manual. Bosch documentation commonly lists F29/29 for inlet problems, so do not assume every E29 display is equivalent.",
    },
    {
      label: "Water flow looks normal but the code returns",
      advice: "Arrange model-specific inlet-valve, flow-sensing, wiring, or control diagnosis.",
    },
  ],
  whenToStop: [
    "A hose, tap, or connection is leaking",
    "The AquaStop housing or electrical valve would need to be opened or immersed",
    "The washer fills while powered off or internal electrical testing is required",
  ],
  faq: [
    {
      question: "What does F29 mean on a Bosch washing machine?",
      answer: "On supported Bosch washers, F29 is grouped with F17/E17 water-inlet faults such as low water pressure, a restricted inlet filter, or a kinked supply hose.",
    },
    {
      question: "What does E29 mean on a Bosch washing machine?",
      answer: "Do not assume E29 automatically equals F29. Photograph the display and check the exact E-Nr manual because Bosch code formats vary by model and market.",
    },
    {
      question: "Can low water pressure cause Bosch F29?",
      answer: "Yes. Bosch guidance for supported models lists low water pressure and restricted water-supply filters or hoses among the main causes.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "e29 error bosch washing machine",
    "bosch washing machine e29 error",
    "bosch washing machine f29 error",
    "bosch washer f29",
    "bosch error 29",
    "low water pressure",
    "inlet filter",
  ],
  errorCode: "F29 / F17 / E17",
  aliases: ["F29", "29", "F17", "E17", "E29"],
  appliesTo: "Selected Bosch washing machine model families; exact E29 meaning requires model confirmation",
  modelNote: modelWarning,
  sources: [
    {
      label: "Bosch Washer Error Codes",
      url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
