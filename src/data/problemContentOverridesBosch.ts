import type { Problem } from "./problems";

const BOSCH_DISHWASHER_ERROR_CODES_SOURCE = {
  label: "Bosch Support — dishwasher error codes",
  url: "https://www.bosch-home.com/us/owner-support/dishwashers/error-codes",
};

const BOSCH_WASHER_E16_SOURCE = {
  label: "Bosch Support — washer E16 / F16",
  url: "https://www.bosch-home.com/us/owner-support/get-support/support-selfhelp-washing-error-e16-or-f16-washing-machine",
};

const BOSCH_WASHER_E27_SOURCE = {
  label: "Bosch Support — washer E27 / F27",
  url: "https://www.bosch-home.com/sa/en/service/get-support/error-f27-washing-machine",
};

const overrides: Record<string, Partial<Problem>> = {
  "bosch-washer-e16-f16-error": {
    summary: "Bosch washer E16 / F16 means the door is open or the control cannot confirm that it is properly closed. Bosch's user-level guidance is to close the door correctly and contact service if the code remains.",
    likelyCauses: [
      "The washer door is not fully closed",
      "Laundry or a small item is trapped between the door and seal",
      "The latch is not reaching the closed position",
      "The door-closed signal is not being confirmed after the door is physically shut",
    ],
    quickChecks: [
      { title: "Open and close the door again", detail: "Check the opening, move laundry fully inside the drum, and close the door normally until it seats. Do not slam or force the latch.", level: "safe" },
      { title: "Inspect for trapped fabric", detail: "Look around the visible door seal and latch area for clothing, cords, or debris that can prevent full closure.", level: "safe" },
      { title: "Retry only after the door is fully closed", detail: "Bosch identifies E16 / F16 as a door-open condition. If the display remains after correct closure, stop repeated attempts.", level: "safe" },
      { title: "Leave latch-switch testing to service", detail: "Internal door-lock, switch, wiring, and control diagnosis requires model-specific service procedures.", level: "stop" },
    ],
    decisionTitle: "Can the washer positively confirm the door is closed?",
    observations: [
      { label: "The code clears after reclosing the door", advice: "The door was not fully seated. Check that laundry is not pushing against the door before the next cycle." },
      { label: "The door looks closed but E16 / F16 remains", advice: "The latch position or door-closed feedback may not be confirming correctly. Arrange model-specific service rather than forcing the door." },
      { label: "The latch or handle is visibly damaged", advice: "Do not continue cycling the washer. A damaged safety interlock should be inspected before use." },
    ],
    whenToStop: [
      "E16 / F16 remains after the door is correctly closed",
      "The latch, handle, or door alignment is visibly damaged",
      "Internal door-lock or wiring testing would be required",
    ],
    faq: [
      { question: "What does Bosch washer E16 / F16 mean?", answer: "Bosch defines E16 / F16 as a door-open condition. Close the door correctly; if the code remains, use Bosch service guidance for the exact model." },
      { question: "Should I force the door harder to clear E16 / F16?", answer: "No. Remove any obstruction and close it normally. Forcing a misaligned or damaged latch can make the fault worse." },
    ],
    modelNote: "Bosch identifies E16 / F16 as a door-open fault on supported washer families. Door-lock hardware differs by model, so confirm the E-number before replacing any latch or switch component.",
    sources: [BOSCH_WASHER_E16_SOURCE],
    updated: "2026-09-04",
  },
  "bosch-washer-e27-f27-error": {
    summary: "Bosch washer E27 / F27 indicates a pressure-sensor fault on supported models. Bosch states that this fault is not a normal user repair and recommends arranging service.",
    likelyCauses: [
      "The pressure sensor is not reporting the expected water-level signal",
      "The pressure-sensing path or its connection is abnormal",
      "Sensor wiring or the control input cannot read the pressure signal correctly",
      "The washer continues to detect the pressure-sensor fault after restart",
    ],
    quickChecks: [
      { title: "Record the exact E27 / F27 display", detail: "Confirm the code and full Bosch E-number before applying service information because error-code sets can vary by platform.", level: "safe" },
      { title: "Stop the cycle if water level looks abnormal", detail: "If the machine is overfilling, underfilling, or behaving unpredictably, do not keep restarting cycles.", level: "caution" },
      { title: "Do not open pressure-system components", detail: "Bosch says the E27 / F27 pressure-sensor fault cannot be rectified as a normal user-level repair.", level: "stop" },
      { title: "Arrange Bosch service", detail: "Persistent E27 / F27 needs model-specific diagnosis of the pressure sensor, sensing path, wiring, and control input.", level: "stop" },
    ],
    decisionTitle: "Is the washer reporting a pressure-sensor fault rather than a door or drain condition?",
    observations: [
      { label: "Water level appears wrong when the code occurs", advice: "Stop the cycle and arrange service; incorrect pressure feedback can affect fill-level control." },
      { label: "The code returns immediately after restart", advice: "Do not keep power-cycling. Bosch directs E27 / F27 faults to service rather than repeated user resets." },
      { label: "There is leakage or uncontrolled filling", advice: "Shut off the water supply if safe and stop using the washer until it is inspected." },
    ],
    whenToStop: [
      "Water level is abnormal or the machine overfills",
      "E27 / F27 returns after restart",
      "Pressure sensor, hose, wiring, or control diagnosis is required",
    ],
    faq: [
      { question: "What does Bosch washer E27 / F27 mean?", answer: "Bosch identifies E27 / F27 as a faulty pressure-sensor condition on supported washing machines." },
      { question: "Can I fix Bosch E27 / F27 by cleaning the drain filter?", answer: "Bosch does not describe E27 / F27 as a drain-filter code. It points to pressure sensing and is directed to service if present." },
    ],
    modelNote: "Bosch documents E27 / F27 as a pressure-sensor fault. Confirm the exact E-number before service because sensor layout and diagnostic procedures vary between washer generations.",
    sources: [BOSCH_WASHER_E27_SOURCE],
    updated: "2026-09-04",
  },
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
