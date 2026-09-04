import type { Problem } from "./problems";

const WHIRLPOOL_DISHWASHER_F9E1_SOURCE = {
  label: "Whirlpool Product Help — dishwasher F9E1 long drain",
  url: "https://producthelp.whirlpool.com/Dishwashers/Dishwasher/Error_Code_or_Flashing_Lights/Error_Codes/F9E1_-_Dishwasher",
};

const WHIRLPOOL_DISHWASHER_F9E2_SOURCE = {
  label: "Whirlpool Product Help — dishwasher F9E2 drain motor error",
  url: "https://producthelp.whirlpool.com/Dishwashers/Dishwasher/Error_Code_or_Flashing_Lights/Error_Codes/F9E2_-_Dishwasher",
};

const overrides: Record<string, Partial<Problem>> = {
  "whirlpool-dishwasher-f9e1-error": {
    title: "Whirlpool dishwasher F9E1 error: long drain or no-drain condition",
    shortTitle: "Whirlpool dishwasher F9E1 long drain",
    summary: "Whirlpool defines dishwasher F9E1 as a Long Drain condition: the machine is not removing water within the expected time. Whirlpool's user-level checks focus first on the filter, drain hose, disposer connection, air gap, installation, and excessive suds rather than assuming the drain motor itself has failed.",
    likelyCauses: [
      "The dishwasher filter is dirty or obstructed",
      "The drain hose is kinked, pinched, clogged, or installed incorrectly",
      "The sink disposer, disposer knockout plug, or air gap is blocking the drain path",
      "Excessive suds or another restriction is slowing drainage enough to trigger the long-drain condition",
    ],
    quickChecks: [
      { title: "Clean the dishwasher filter", detail: "Whirlpool lists the filter as a first F9E1 check. Remove and clean it according to the model instructions, then reinstall it correctly.", level: "safe" },
      { title: "Inspect the full drain-hose route", detail: "Check the hose from the dishwasher to the sink for kinks, pinching, clogs, or routing that does not match the installation instructions.", level: "safe" },
      { title: "Check disposer and air-gap restrictions", detail: "If connected to a disposer, make sure it is clear and that the knockout plug was removed on a new installation. If an air gap is fitted, check it for blockage.", level: "safe" },
      { title: "Escalate if the external drain path is clear", detail: "If F9E1 returns with a clean filter and correctly installed, unrestricted drain path, further pump/control diagnosis should be model-specific service work.", level: "stop" },
    ],
    decisionTitle: "Is anything outside the drain motor slowing the dishwasher's water path?",
    observations: [
      { label: "Water remains and the drain hose or filter is restricted", advice: "Correct the restriction, then power-cycle and retry. That pattern matches Whirlpool's long-drain troubleshooting path." },
      { label: "The code appeared after a new disposer installation", advice: "Verify the disposer knockout plug was removed before treating the dishwasher as defective." },
      { label: "Filter, hose, disposer and air gap are clear but F9E1 returns", advice: "The user-accessible drain path has been ruled out. Arrange model-specific service rather than repeatedly resetting the machine." },
    ],
    whenToStop: [
      "F9E1 returns after the filter and external drain path are confirmed clear",
      "Water is leaking from the dishwasher or drain connections",
      "Internal pump, wiring, or control diagnosis would be required",
    ],
    faq: [
      { question: "What does Whirlpool dishwasher F9E1 mean?", answer: "Whirlpool defines F9E1 as Long Drain: the dishwasher is not draining within the expected time." },
      { question: "Is F9E1 the same as F9E2?", answer: "No. Whirlpool labels F9E1 Long Drain, while F9E2 is specifically a Drain Motor Error. Their safe first checks overlap, but the diagnostic emphasis is different." },
      { question: "Can a new garbage disposer cause F9E1?", answer: "Yes. Whirlpool specifically tells users to verify that the disposer knockout plug has been removed and that the disposer/drain path is clear." },
    ],
    modelNote: "Whirlpool dishwasher code sets vary by platform. This guide follows Whirlpool's current F9E1 Product Help article for supported dishwasher families; confirm the exact model before internal service procedures.",
    sources: [WHIRLPOOL_DISHWASHER_F9E1_SOURCE],
    updated: "2026-09-04",
  },
  "whirlpool-dishwasher-f9e2-error": {
    title: "Whirlpool dishwasher F9E2 error: drain motor fault",
    shortTitle: "Whirlpool dishwasher F9E2 drain motor error",
    summary: "Whirlpool defines dishwasher F9E2 as a Drain Motor Error. External restrictions still need to be ruled out first, but unlike the F9E1 long-drain code, a returning F9E2 specifically points the diagnostic path toward the drain-motor system after the disposer, hose, and installation checks are cleared.",
    likelyCauses: [
      "The drain motor is not operating as the control expects",
      "A clog in the disposer or drain path is preventing normal drain-motor operation",
      "The drain hose is kinked or installed in a way that creates excessive resistance",
      "The drain-motor wiring, connection, or control circuit needs model-specific diagnosis",
    ],
    quickChecks: [
      { title: "Rule out a blocked external drain", detail: "Whirlpool still advises checking the disposer and drain for clogs before condemning the drain motor.", level: "safe" },
      { title: "Straighten and verify the drain hose", detail: "Make sure the hose is not kinked and is routed on the correct side and inside the frame as required by the installation instructions.", level: "safe" },
      { title: "Confirm the disposer knockout plug", detail: "On a new disposer connection, verify that the knockout plug was removed so the drain motor has an open discharge path.", level: "safe" },
      { title: "Stop before drain-motor electrical testing", detail: "If F9E2 returns after the external drain path is clear, Whirlpool directs the user to service. Motor, wiring, and control measurements require qualified diagnosis.", level: "stop" },
    ],
    decisionTitle: "Does F9E2 return after all external restrictions have been eliminated?",
    observations: [
      { label: "A kink or disposer blockage is found", advice: "Correct the restriction and retry after a power cycle. The drain motor may have been unable to move water against the blocked path." },
      { label: "The drain path is clear but the motor is silent", advice: "A returning F9E2 with no normal drain-motor operation needs service diagnosis of the motor, connection, and control path." },
      { label: "The drain motor runs but F9E2 returns", advice: "Do not assume that sound alone proves normal operation. Arrange model-specific service because the motor system or feedback/control path may still be abnormal." },
    ],
    whenToStop: [
      "F9E2 returns after the hose, disposer, and drain path are clear",
      "The dishwasher trips power, smells electrical, or the drain motor area becomes abnormally hot",
      "Internal drain-motor, harness, or control testing would be required",
    ],
    faq: [
      { question: "What does Whirlpool dishwasher F9E2 mean?", answer: "Whirlpool's Product Help page labels F9E2 as a Drain Motor Error." },
      { question: "How is F9E2 different from F9E1?", answer: "F9E1 is Whirlpool's Long Drain code and starts with restrictions that slow water removal. F9E2 specifically identifies a drain-motor error after the basic drain-path checks are considered." },
      { question: "Should I replace the drain motor immediately?", answer: "No. Whirlpool first tells users to check the disposer, drain, drain hose, and installation. Replace or electrically test internal parts only after model-specific diagnosis." },
    ],
    modelNote: "Whirlpool identifies F9E2 as a drain-motor error on supported dishwasher families. Drain assemblies and diagnostic procedures vary by model, so confirm the full model number before replacing a motor or control component.",
    sources: [WHIRLPOOL_DISHWASHER_F9E2_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyWhirlpoolDrainProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
