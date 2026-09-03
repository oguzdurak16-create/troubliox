import type { Problem } from "./problems";

const BOSCH_DISHWASHER_ERROR_CODES_SOURCE = {
  label: "Bosch Support — dishwasher error codes",
  url: "https://www.bosch-home.com/us/owner-support/error-codes/dishwashers",
};

const overrides: Record<string, Partial<Problem>> = {
  "bosch-dishwasher-e01-error": {
    title: "Bosch dishwasher E01: heat-pump motor circuit fault at the control board",
    shortTitle: "Bosch dishwasher E01",
    summary: "Bosch defines dishwasher E01 as a heat-pump motor circuit fault at the main control board. It is not the same as E02: Bosch assigns E02 to a main-control-board relay fault.",
    likelyCauses: [
      "The main control board is not driving or sensing the heat-pump motor circuit correctly",
      "A connection between the control and heat-pump motor circuit is abnormal",
      "The heat-pump motor circuit presents an electrical condition the control identifies as E01",
      "A transient control fault remains after a power interruption and needs one controlled reset attempt",
    ],
    quickChecks: [
      { title: "Record E01 exactly", detail: "Do not merge E01 with E02 or a generic pump code. Bosch specifically identifies E01 as the heat-pump motor circuit at the main control board.", level: "safe" },
      { title: "Reset the breaker for 30 seconds", detail: "Use Bosch's published user-level step: remove power at the breaker for about 30 seconds, restore it, and retry once.", level: "safe" },
      { title: "Listen for the circulation stage", detail: "Without opening the appliance, note whether the code returns as the dishwasher attempts circulation. This observation can help service identify the affected circuit.", level: "safe" },
      { title: "Stop before control-board or motor-circuit testing", detail: "E01 concerns internal powered components. Do not probe the heat-pump motor circuit, control outputs, or energized wiring unless qualified.", level: "stop" },
    ],
    decisionTitle: "Does E01 return when the dishwasher attempts to run the heat-pump motor circuit?",
    observations: [
      { label: "E01 clears after the 30-second breaker reset", advice: "Run one normal cycle and monitor. If it returns, document the cycle stage and arrange model-specific service." },
      { label: "E01 returns when circulation should begin", advice: "That timing is consistent with Bosch's heat-pump motor circuit definition. Further diagnosis belongs at the motor circuit/control-board interface." },
      { label: "The breaker trips or there is electrical odor", advice: "Stop use immediately and disconnect power if safe. Do not repeat resets on an electrical fault with these symptoms." },
    ],
    whenToStop: [
      "E01 returns after the single Bosch 30-second reset",
      "A breaker trips, wiring smells hot, or electrical damage is visible",
      "Diagnosis requires access to the heat-pump motor circuit or main control board",
    ],
    faq: [
      { question: "What does Bosch dishwasher E01 mean?", answer: "Bosch states that E01 is a heat-pump motor circuit fault at the main control board." },
      { question: "Is Bosch E01 the same as E02?", answer: "No. Bosch lists E01 for the heat-pump motor circuit at the control board and E02 for a main control board relay fault/error." },
      { question: "Should I replace the heat pump because of E01?", answer: "Not from the code alone. Bosch's wording points to the motor circuit at the main control board, so the exact model's motor, wiring, connections, and control interface need diagnosis before parts replacement." },
    ],
    modelNote: "Bosch identifies E01 at the main-control-board/heat-pump-motor circuit level. Confirm the exact E-number and model generation before replacing the pump, wiring, or control board.",
    sources: [BOSCH_DISHWASHER_ERROR_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "bosch-dishwasher-e02-error": {
    title: "Bosch dishwasher E02: main control board relay fault",
    shortTitle: "Bosch dishwasher E02",
    summary: "Bosch defines dishwasher E02 as a main control board relay fault/error. Unlike E01, Bosch does not identify E02 as the heat-pump motor circuit; the fault domain is the board's relay/control switching.",
    likelyCauses: [
      "A relay on the main control board is not switching or reporting as expected",
      "The control electronics detect an abnormal relay state during self-monitoring",
      "A load or connection associated with the affected relay is causing the board to report a relay fault",
      "The control board needs model-specific diagnosis after a one-time power reset fails",
    ],
    quickChecks: [
      { title: "Keep E02 separate from E01", detail: "Bosch's published table assigns E02 to a main-control-board relay fault. Do not diagnose it as the E01 heat-pump motor circuit code.", level: "safe" },
      { title: "Reset power for 30 seconds", detail: "Switch the dishwasher off at the breaker for about 30 seconds, restore power, and retry once as Bosch instructs.", level: "safe" },
      { title: "Note which function was starting", detail: "Record whether the error appears at startup, heating, circulation, draining, or another transition. That context can help qualified service narrow which board-controlled load is involved.", level: "safe" },
      { title: "Do not bypass or test relays while energized", detail: "Relay and PCB diagnosis involves mains-voltage control electronics. Do not jumper contacts, remove board covers, or probe energized terminals as a user-level check.", level: "stop" },
    ],
    decisionTitle: "Does E02 return after the Bosch 30-second reset during the same control transition?",
    observations: [
      { label: "E02 disappears after the reset", advice: "Monitor a complete cycle. If E02 returns, record the stage rather than repeatedly resetting the control." },
      { label: "E02 returns at the same cycle transition", advice: "A persistent relay/control switching fault needs model-specific board and connected-load diagnosis." },
      { label: "There are clicking relays with no corresponding function", advice: "Stop repeated cycling. Qualified diagnosis should determine whether the board relay, connected load, wiring, or feedback is responsible." },
    ],
    whenToStop: [
      "E02 returns after one breaker reset",
      "The control board area smells hot, shows discoloration, or a breaker trips",
      "Further troubleshooting requires relay, PCB, mains-voltage, or internal wiring tests",
    ],
    faq: [
      { question: "What does Bosch dishwasher E02 mean?", answer: "Bosch lists E02 as a main control board relay fault/error." },
      { question: "Does E02 prove the entire control board must be replaced?", answer: "No. The code identifies a control-relay fault domain, but the exact model's connected load, wiring, feedback, and board still need diagnosis before replacement." },
      { question: "Why is E02 different from E01?", answer: "Bosch specifically assigns E01 to the heat-pump motor circuit at the main control board, while E02 is a broader main-control-board relay fault." },
    ],
    modelNote: "E02 is a control-board relay fault definition in Bosch's dishwasher error-code table. Confirm the exact appliance E-number because the affected relay/load and service procedure are model-specific.",
    sources: [BOSCH_DISHWASHER_ERROR_CODES_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyBoschControlProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
