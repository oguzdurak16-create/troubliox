import type { Problem } from "./problems";

const BOSCH_DISHWASHER_ERROR_CODES_SOURCE = {
  label: "Bosch Support — dishwasher error codes",
  url: "https://www.bosch-home.com/us/owner-support/dishwashers/error-codes",
};

const overrides: Record<string, Partial<Problem>> = {
  "bosch-dishwasher-e20-error": {
    summary: "Bosch dishwasher E20 indicates an internal heater fault in the heat-pump assembly on supported models. Bosch recommends a brief power reset and service if the code returns.",
    likelyCauses: [
      "The heat pump's internal heater circuit has developed a fault",
      "The heat-pump assembly is not operating within the expected electrical range",
      "A wiring or connection problem is affecting the heat-pump heater circuit",
      "The control continues to detect the heater fault after a reset",
    ],
    quickChecks: [
      { title: "Reset power for 30 seconds", detail: "Switch the dishwasher off at the breaker for about 30 seconds, then restore power and retry once.", level: "safe" },
      { title: "Note whether E20 returns", detail: "If the code reappears, stop repeated resets. Bosch identifies E20 as an internal heat-pump heater fault rather than a user-cleanable filter condition.", level: "safe" },
      { title: "Do not open the heat-pump assembly", detail: "The heater and pump are internal electrical components. Do not remove panels or test energized parts unless qualified.", level: "caution" },
      { title: "Arrange Bosch service if persistent", detail: "A recurring E20 needs model-specific electrical diagnosis of the heat-pump heater circuit and related wiring/control components.", level: "stop" },
    ],
    decisionTitle: "Does E20 clear after the single Bosch power reset?",
    observations: [
      { label: "E20 clears and the cycle completes normally", advice: "Monitor the next cycle. If the code returns, treat it as an intermittent heat-pump heater fault and arrange service." },
      { label: "E20 returns immediately or during heating", advice: "The internal heater circuit remains the primary Bosch-defined fault area. Avoid repeated cycling and arrange model-specific diagnosis." },
      { label: "The dishwasher also trips a breaker or smells electrical", advice: "Stop using the appliance, disconnect power if safe, and arrange professional service before further operation." },
    ],
    faq: [
      { question: "What does Bosch dishwasher E20 mean?", answer: "Bosch identifies E20 as a heat-pump internal heater fault/error on supported dishwasher models." },
      { question: "Is Bosch E20 the same as E21?", answer: "No. Bosch lists E20 as an internal heat-pump heater fault, while E21 means the heat pump is blocked. Both may require service if a power reset does not clear the code." },
    ],
    modelNote: "Bosch error-code definitions can vary by market and model generation. Confirm E20 against the exact E-number documentation before replacing the heat pump, heater, wiring, or control parts.",
    sources: [BOSCH_DISHWASHER_ERROR_CODES_SOURCE],
    updated: "2026-09-03",
  },
  "bosch-dishwasher-e21-error": {
    summary: "Bosch dishwasher E21 means the heat pump is blocked on supported models. This is distinct from E20, which Bosch defines as an internal heat-pump heater fault.",
    likelyCauses: [
      "The heat pump is mechanically blocked",
      "Debris or an internal obstruction is preventing normal pump movement",
      "The heat-pump motor cannot rotate as expected",
      "The control continues to detect a blocked heat pump after a reset",
    ],
    quickChecks: [
      { title: "Reset power for 30 seconds", detail: "Follow Bosch's first step: switch power off at the breaker for about 30 seconds, restore it, and retry once.", level: "safe" },
      { title: "Do not confuse E21 with a filter-only code", detail: "Bosch specifically describes E21 as a blocked heat pump. E22 is the code Bosch associates with a blocked dishwasher filter.", level: "safe" },
      { title: "Avoid reaching into internal pump components", detail: "The heat pump is an internal assembly. Do not remove panels or attempt energized mechanical/electrical testing unless qualified.", level: "caution" },
      { title: "Arrange service if E21 returns", detail: "Persistent E21 requires model-specific diagnosis of the heat pump, obstruction, motor movement, wiring, or control feedback.", level: "stop" },
    ],
    decisionTitle: "Does the blocked-heat-pump code return after the Bosch reset?",
    observations: [
      { label: "E21 clears after the reset", advice: "Run one normal cycle and monitor. A recurring E21 still indicates an intermittent blockage or heat-pump movement problem." },
      { label: "E21 returns as soon as circulation should begin", advice: "The heat pump may still be unable to rotate or circulate normally. Stop repeated attempts and arrange service." },
      { label: "You hear unusual grinding or repeated starting attempts", advice: "Stop the cycle. Mechanical resistance around the heat-pump assembly needs professional inspection." },
    ],
    faq: [
      { question: "What does Bosch dishwasher E21 mean?", answer: "Bosch identifies E21 as a blocked heat pump on supported dishwasher models." },
      { question: "Should I clean the filter for Bosch E21?", answer: "A clean filter is good maintenance, but Bosch's code list specifically assigns blocked-filter guidance to E22. E21 points to the heat pump itself and should be serviced if the reset does not clear it." },
    ],
    modelNote: "Confirm E21 against the exact Bosch E-number documentation because components and service procedures vary by dishwasher platform. Do not assume a filter blockage when the model reports a heat-pump blockage.",
    sources: [BOSCH_DISHWASHER_ERROR_CODES_SOURCE],
    updated: "2026-09-03",
  },
};

export function applyBoschProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
