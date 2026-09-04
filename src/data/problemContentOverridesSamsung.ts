import type { Problem } from "./problems";

const SAMSUNG_FLEXWASH_CODES_SOURCE = {
  label: "Samsung Support — FlexWash Combo error codes",
  url: "https://www.samsung.com/sg/support/home-appliances/what-are-the-error-codes-for-samsung-flexwash-combo/",
};

const SAMSUNG_WASHER_CODES_SOURCE = {
  label: "Samsung Support — washing machine error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
};

const SAMSUNG_ACTIVE_DUALWASH_CODES_SOURCE = {
  label: "Samsung Support — Active DualWash error codes",
  url: "https://www.samsung.com/sg/support/home-appliances/what-are-the-error-codes-for-samsung-active-dualwash/",
};

const SAMSUNG_HR_SOURCE = {
  label: "Samsung Support — Hr heater relay error",
  url: "https://support-cacyber.samsung.com/cacyber/popup/iframe/pop_troubleshooting_fr.jsp?idx=898825&lang=ca&modelcode=WF337AAR%2FXAA&modelname=",
};

const overrides: Record<string, Partial<Problem>> = {
  "samsung-washer-9c1-error": {
    title: "Samsung washer 9C1 error: over-voltage or irregular supply",
    shortTitle: "Samsung washer 9C1 voltage error",
    summary: "Samsung groups 9C1 with washer voltage errors. On supported Active DualWash models Samsung specifically describes 9C1 as an over-voltage/electronic-control condition, so the first checks are the incoming power supply and whether the washer is on a proper dedicated circuit.",
    likelyCauses: [
      "Incoming mains voltage is too high or unstable for the washer",
      "A surge, power-quality event, or unsuitable circuit caused the control to detect abnormal supply voltage",
      "An extension lead, overloaded outlet, or shared heavy-load circuit is contributing to unstable supply",
      "The washer's power-input or electronic-control circuit needs model-specific diagnosis if normal supply is confirmed",
    ],
    quickChecks: [
      { title: "Use a proper wall outlet", detail: "Connect the washer directly to its intended grounded wall outlet. Do not use an extension lead or multi-adapter for this test.", level: "safe" },
      { title: "Check for recent power disturbances", detail: "Note any surge, flickering lights, breaker trip, generator use, or other supply event that occurred when 9C1 appeared.", level: "safe" },
      { title: "Power-cycle once", detail: "Turn the washer off, disconnect power for a few minutes, reconnect it to a proper outlet, and retry once.", level: "safe" },
      { title: "Stop before live-voltage measurements", detail: "If 9C1 returns on a known-good supply, mains-voltage, PCB, harness, and power-input diagnosis should be handled by qualified service.", level: "stop" },
    ],
    decisionTitle: "Does 9C1 return on a stable, correctly supplied circuit?",
    observations: [
      { label: "9C1 followed a surge or breaker event", advice: "A temporary supply disturbance is plausible. Retry once only after the electrical supply is stable." },
      { label: "9C1 clears on a proper dedicated outlet", advice: "The original outlet, extension, adapter, or shared circuit was likely contributing to the voltage problem." },
      { label: "9C1 returns with normal household power", advice: "Stop repeated resets and arrange model-specific diagnosis of the washer's power-input and control electronics." },
    ],
    whenToStop: [
      "9C1 returns on a known-good dedicated supply",
      "The outlet, plug, or cord is hot, damaged, arcing, or smells burnt",
      "Diagnosis would require live mains-voltage or PCB testing",
    ],
    faq: [
      { question: "What is the difference between Samsung 9C1 and 9C2?", answer: "Samsung groups both as voltage errors, but model-specific Samsung guidance identifies 9C1 as an over-voltage/electronic-control condition and 9C2 as low voltage on supported models." },
      { question: "Can an extension cord cause 9C1?", answer: "An unsuitable extension or overloaded shared circuit can contribute to abnormal supply conditions. Samsung recommends a proper power supply; test the washer directly from its intended outlet." },
    ],
    modelNote: "Samsung voltage-code wording varies by model and market. Confirm the full model number; on supported Active DualWash models Samsung specifically identifies 9C1 as an over-voltage/electronic-control condition.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE, SAMSUNG_ACTIVE_DUALWASH_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-9c2-error": {
    title: "Samsung washer 9C2 error: low supply voltage",
    shortTitle: "Samsung washer 9C2 low-voltage error",
    summary: "Samsung identifies 9C2 as a washer voltage error and, on supported Active DualWash models, specifically as low voltage. The useful first checks are the plug, wall supply, and whether the washer is being fed through an unsuitable extension or overloaded circuit.",
    likelyCauses: [
      "Incoming mains voltage has dropped below the washer's expected range",
      "A brownout, weak circuit, loose supply connection, or overloaded branch circuit is causing voltage drop",
      "An extension lead or multi-adapter is adding resistance or sharing load with another high-power appliance",
      "The washer's power-input electronics need diagnosis if the household supply is normal",
    ],
    quickChecks: [
      { title: "Confirm the plug is fully seated", detail: "Check the washer power cord and wall plug for a firm connection without using an extension lead or multi-adapter.", level: "safe" },
      { title: "Remove other heavy loads from the circuit", detail: "If practical, avoid running heaters, dryers, or other large appliances on the same circuit while checking whether 9C2 returns.", level: "safe" },
      { title: "Retry after supply conditions stabilize", detail: "If there was a brownout or outage, wait until power is stable, then power-cycle the washer once and retry.", level: "safe" },
      { title: "Arrange electrical/service diagnosis if persistent", detail: "Persistent 9C2 on a proper supply needs safe verification of the building supply and then model-specific washer power-input diagnosis.", level: "stop" },
    ],
    decisionTitle: "Is the washer actually receiving stable line voltage when 9C2 appears?",
    observations: [
      { label: "Lights dim or other appliances struggle at the same time", advice: "The problem may be the building or utility supply rather than the washer. Stop repeated washer tests until the supply is stable." },
      { label: "9C2 appears only on an extension or shared outlet", advice: "Move the washer back to its intended direct wall connection and avoid the unsuitable shared setup." },
      { label: "9C2 persists on a stable dedicated circuit", advice: "The washer's input-power sensing or control electronics require model-specific service diagnosis." },
    ],
    whenToStop: [
      "9C2 keeps returning after power conditions normalize",
      "The outlet or cord is loose, damaged, hot, or discolored",
      "Live electrical measurements would be required",
    ],
    faq: [
      { question: "Does Samsung 9C2 mean low voltage?", answer: "Yes on supported Samsung washer families. Samsung's Active DualWash guidance specifically labels 9C2 as low voltage, while broader Samsung guidance groups it with supply-voltage errors." },
      { question: "Is 9C2 the same as 9C1?", answer: "They belong to the same voltage-error family, but Samsung model-specific guidance distinguishes 9C1 as over-voltage/electronic-control and 9C2 as low voltage." },
    ],
    modelNote: "Samsung code definitions vary by washer generation and region. Confirm the full model number, but supported Samsung documentation specifically identifies 9C2 as a low-voltage condition.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE, SAMSUNG_ACTIVE_DUALWASH_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-pc-error": {
    title: "Samsung washer PC error: clutch position cannot be detected",
    shortTitle: "Samsung washer PC clutch-position error",
    summary: "Samsung defines PC (also PE on some models) as a clutch-position error: the washer cannot determine the clutch's position. This is distinct from PC1, where a clutch position was detected but the Hall-sensor signal is then abnormal.",
    likelyCauses: [
      "The clutch mechanism is not reaching or reporting a recognizable position",
      "The clutch actuator or position-sensing path is not responding correctly",
      "A connector or harness in the clutch-position circuit is abnormal",
      "The control cannot interpret the clutch-position feedback and requires model-specific diagnosis",
    ],
    quickChecks: [
      { title: "Stop the cycle and record the code", detail: "Confirm the display is PC/PE rather than PC1/PE1 because Samsung assigns different meanings to the two conditions.", level: "safe" },
      { title: "Power-cycle once", detail: "Turn the washer off for a few minutes, restore power, and retry one cycle only if there are no abnormal mechanical noises.", level: "safe" },
      { title: "Listen for abnormal clutch movement", detail: "If the washer clicks, grinds, or repeatedly attempts to shift before PC appears, stop further retries.", level: "caution" },
      { title: "Use Samsung service for persistent PC", detail: "Samsung directs clutch-position faults to service; internal clutch, harness, sensor, and control testing is not a normal user repair.", level: "stop" },
    ],
    decisionTitle: "Can the washer detect any valid clutch position?",
    observations: [
      { label: "PC appears before agitation or spin begins", advice: "The control may be unable to establish the clutch position needed for the next motion state. Arrange service if one restart does not clear it." },
      { label: "There is grinding or repeated shifting", advice: "Stop using the washer rather than repeatedly forcing transitions; mechanical or actuator diagnosis may be needed." },
      { label: "The display is actually PC1 or PE1", advice: "Use the PC1 guide instead; Samsung describes that as abnormal clutch Hall feedback after position detection." },
    ],
    whenToStop: [
      "PC returns after one restart",
      "Grinding, repeated clutch movement, or abnormal mechanical noise occurs",
      "Clutch actuator, sensor, harness, or control testing is required",
    ],
    faq: [
      { question: "What does Samsung washer PC mean?", answer: "Samsung defines PC/PE as a clutch-position detection fault: the control cannot determine the clutch position." },
      { question: "Is PC the same as PC1?", answer: "No. PC means the clutch position cannot be detected, while PC1 means the position was detected but the clutch Hall-sensor signal is abnormal afterward." },
    ],
    modelNote: "PC/PE is used on Samsung washer families with a clutch-position system. Confirm the exact model because clutch hardware and service procedures vary.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-pc1-error": {
    title: "Samsung washer PC1 error: clutch Hall-sensor signal fault",
    shortTitle: "Samsung washer PC1 clutch Hall error",
    summary: "Samsung defines PC1 (also PE1 on some models) as an abnormal clutch Hall-sensor signal after the clutch position has already been detected. That makes PC1 a feedback-signal fault rather than the basic 'position cannot be detected' PC condition.",
    likelyCauses: [
      "The clutch Hall sensor is producing an abnormal signal",
      "The clutch reaches a position but feedback becomes implausible or disappears",
      "The Hall-sensor connector or wiring harness has an intermittent fault",
      "The clutch actuator or control circuit needs model-specific service diagnosis",
    ],
    quickChecks: [
      { title: "Confirm PC1 or PE1 on the display", detail: "Samsung separates PC1/PE1 from PC/PE. Record the exact code and full model number before service.", level: "safe" },
      { title: "Power-cycle once", detail: "Turn the washer off for a few minutes and retry once if there are no unusual noises, leaks, or electrical symptoms.", level: "safe" },
      { title: "Note whether the fault occurs during shifting", detail: "Record whether PC1 appears as the washer changes between wash/spin states; that timing is useful for model-specific clutch feedback diagnosis.", level: "safe" },
      { title: "Do not probe the Hall circuit as a user check", detail: "Hall-sensor, clutch-motor, harness, and control measurements require access to internal parts and should be handled by qualified service.", level: "stop" },
    ],
    decisionTitle: "Does clutch-position feedback fail after the position was detected?",
    observations: [
      { label: "PC1 returns at the same transition in every cycle", advice: "A repeatable clutch-feedback fault needs service diagnosis rather than repeated resets." },
      { label: "The washer shifts but then immediately reports PC1", advice: "That behavior fits Samsung's distinction: position is detected, then Hall-sensor feedback becomes abnormal." },
      { label: "The code is PC without the 1", advice: "Use the PC guide instead; Samsung defines that condition as the clutch position itself not being detected." },
    ],
    whenToStop: [
      "PC1 returns after one restart",
      "The clutch repeatedly shifts, clicks, or grinds",
      "Hall-sensor, wiring, actuator, or PCB diagnosis is required",
    ],
    faq: [
      { question: "What does Samsung washer PC1 mean?", answer: "Samsung defines PC1/PE1 as a clutch Hall-signal error after clutch position detection." },
      { question: "Does PC1 prove the Hall sensor itself is bad?", answer: "No. The code identifies the feedback problem area; the sensor, connector, harness, actuator behavior, or control input can all require model-specific diagnosis." },
    ],
    modelNote: "Samsung uses PC1/PE1 on supported clutch-equipped washer families. Confirm the exact model before replacing a Hall sensor, clutch motor, harness, or control component.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
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
