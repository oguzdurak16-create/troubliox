import type { Problem } from "./problems";

const SAMSUNG_FLEXWASH_CODES_SOURCE = {
  label: "Samsung Support — FlexWash Combo error codes",
  url: "https://www.samsung.com/sg/support/home-appliances/what-are-the-error-codes-for-samsung-flexwash-combo/",
};

const SAMSUNG_WASHER_CODES_SOURCE = {
  label: "Samsung Support — washing machine error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
};

const SAMSUNG_HR_SOURCE = {
  label: "Samsung Support — Hr heater relay error",
  url: "https://support-cacyber.samsung.com/cacyber/popup/iframe/pop_troubleshooting_fr.jsp?idx=898825&lang=ca&modelcode=WF337AAR%2FXAA&modelname=",
};

const overrides: Record<string, Partial<Problem>> = {
  "samsung-washer-hc2-error": {
    title: "Samsung washer HC2 error: washer-dryer drying heater fault",
    shortTitle: "Samsung washer-dryer HC2 error",
    summary: "On supported Samsung FlexWash and washer-dryer combo families, HC2 points to the drying-heater system rather than the normal wash-water heater. Samsung's FlexWash guidance says to power-cycle once and seek service if HC2 returns.",
    likelyCauses: [
      "The drying heater is not operating within the expected temperature range",
      "Drying-air temperature sensing is abnormal",
      "The drying heater circuit, relay, wiring, or control has a fault",
      "The code is being read from a model family that uses HC2 differently, so the exact model manual must be checked",
    ],
    quickChecks: [
      { title: "Confirm the machine has a drying function", detail: "HC2 is documented by Samsung on supported washer-dryer/FlexWash families for the drying-heater side. If the appliance has no drying function, verify the exact code and model before using this guide.", level: "safe" },
      { title: "Note whether HC2 appears during drying", detail: "Record whether the wash portion completes and the code appears only when heated drying begins; that distinction separates HC2 from ordinary wash-heater faults.", level: "safe" },
      { title: "Power-cycle once", detail: "Follow Samsung's user-level guidance: power the appliance off for about 2–3 minutes, restore power, and retry once.", level: "safe" },
      { title: "Stop before drying-heater electrical tests", detail: "Heater resistance, relay, wiring, sensor, and live-voltage tests require qualified service. Do not remove panels for energized testing.", level: "stop" },
    ],
    decisionTitle: "Is HC2 tied specifically to the drying stage on a washer-dryer model?",
    observations: [
      { label: "Washing finishes but HC2 appears when drying starts", advice: "That pattern matches Samsung's washer-dryer HC2 context. Stop repeated retries if the code returns after one power reset and arrange model-specific service." },
      { label: "The appliance has no drying function", advice: "Do not assume this FlexWash definition applies. Recheck the display and exact model manual because Samsung code meanings vary by product family." },
      { label: "There is excessive heat, odor, smoke, or a breaker trip", advice: "Stop using the appliance and disconnect power if safe. Treat this as an electrical/heating safety issue rather than continuing reset attempts." },
    ],
    whenToStop: [
      "HC2 returns after the single Samsung power-cycle attempt",
      "Burning odor, smoke, unusual heat, or breaker trips occur",
      "Diagnosis would require access to the drying heater, sensor, relay, wiring, or control board",
    ],
    faq: [
      { question: "Is Samsung HC2 the same as Hr?", answer: "No. Samsung documents HC2 on supported FlexWash/washer-dryer families as a drying-heater fault, while Hr appears in washer heater/heater-relay guidance. Always confirm the exact model because Samsung reuses code families across products." },
      { question: "Can a normal washer without a dryer use this HC2 guide?", answer: "Not safely by assumption. This page is intentionally scoped to Samsung washer-dryer/FlexWash families where Samsung documents HC2 for the drying heater. Check the exact model manual if the machine has no drying function." },
      { question: "Should I replace the drying heater based only on HC2?", answer: "No. The code identifies a heating-system condition, not necessarily the failed part. Sensor, wiring, relay, control, or heater diagnosis must be model-specific." },
    ],
    appliesTo: "Selected Samsung FlexWash and washer-dryer combo model families with a drying function",
    modelNote: "HC2 is product-family sensitive. Samsung documents HC2 as a drying-heater error on supported FlexWash/washer-dryer combinations, while other Samsung products can use HC2 differently. Confirm the full model number before applying service procedures.",
    sources: [SAMSUNG_FLEXWASH_CODES_SOURCE, SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-hr-error": {
    title: "Samsung washer Hr error: heater or heater-relay fault",
    shortTitle: "Samsung washer Hr heater error",
    summary: "Samsung groups Hr with washing-machine heater errors, and older model-specific Samsung support describes Hr as a heater-relay operation fault. This is a wash-heating/control problem, not the washer-dryer HC2 drying-heater condition.",
    likelyCauses: [
      "The heater relay is not switching as the control expects on supported older models",
      "The wash-water heater circuit is not heating correctly",
      "A thermistor or temperature-feedback signal is abnormal",
      "The relay, PCB, wiring, or heater circuit needs model-specific electrical diagnosis",
    ],
    quickChecks: [
      { title: "Record when Hr appears", detail: "Note the cycle and whether the washer is trying to heat wash water. Hr is treated by Samsung as a washer heater/heater-relay error rather than a drying-stage HC2 condition.", level: "safe" },
      { title: "Power-cycle once", detail: "Switch the washer off for 2–3 minutes, restore power, and retry one normal cycle. Do not repeatedly reset a returning heater code.", level: "safe" },
      { title: "Check for overheating symptoms", detail: "If water is unusually hot, the cabinet smells electrical, or a breaker trips, stop use immediately.", level: "caution" },
      { title: "Leave relay and heater testing to service", detail: "PCB relay, thermistor, heater resistance, wiring, and live-voltage checks require qualified electrical diagnosis.", level: "stop" },
    ],
    decisionTitle: "Does Hr return when the washer enters a heated wash stage?",
    observations: [
      { label: "Hr returns during a heated wash", advice: "The heater, temperature feedback, relay, wiring, or control remains the relevant fault area. Arrange model-specific service after one reset attempt." },
      { label: "The washer completes cold cycles but fails on heated cycles", advice: "That pattern strengthens the case for a wash-heating circuit or temperature-feedback problem rather than a drain, balance, or drying-only fault." },
      { label: "Hr appears on a washer-dryer only during drying", advice: "Verify the exact display and model documentation; Samsung uses separate drying-heater codes such as HC2 on supported FlexWash/washer-dryer families." },
    ],
    whenToStop: [
      "The code returns after one power reset",
      "Water or the cabinet becomes excessively hot, there is smoke/odor, or a breaker trips",
      "The PCB relay, thermistor, heater, or wiring must be electrically tested",
    ],
    faq: [
      { question: "What does Hr mean on a Samsung washer?", answer: "Samsung's current washer code guide groups Hr with heater errors, and older model-specific Samsung support describes Hr as missing heater-relay operation. The exact circuit varies by model, so use the full model number before replacing parts." },
      { question: "Is Hr a drying-heater code?", answer: "Not in the Samsung washer guidance used for this page. Hr is treated as a washer heater/heater-relay fault; HC2 is separately documented on supported FlexWash/washer-dryer families for the drying heater." },
      { question: "Can I test the heater relay myself?", answer: "Not as a normal user-level check. Relay, thermistor, heater-resistance, and live-voltage testing involves internal electrical components and should be handled by qualified service." },
    ],
    appliesTo: "Selected Samsung washing machine model families that report Hr as a heater or heater-relay fault",
    modelNote: "Samsung washer code definitions vary by generation and market. Current Samsung guidance groups Hr under heater errors, while older model-specific support describes a heater-relay operation fault. Match the exact model before electrical diagnosis.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE, SAMSUNG_HR_SOURCE],
    updated: "2026-09-04",
  },
};

export function applySamsungProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
