import type { Problem } from "./problems";

const SAMSUNG_WASHER_CODES_SOURCE = {
  label: "Samsung Support — washing machine information and error codes",
  url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
};

const overrides: Record<string, Partial<Problem>> = {
  "samsung-washer-2e-error": {
    title: "Samsung washer 2E error: supply-voltage irregularity",
    shortTitle: "Samsung washer 2E voltage error",
    summary: "Samsung currently groups 2E with its washer voltage-error family. The code means the washer detected an irregularity in the electrical current or supply, so the useful first checks are the power source, dedicated circuit, extension-cord use, and whether a power interruption or breaker event occurred.",
    likelyCauses: [
      "The washer detected unstable or unsuitable incoming electrical supply",
      "A power outage, breaker trip, unplugging event, or other supply interruption occurred",
      "The washer is connected through an extension cord or unsuitable shared circuit",
      "The power-input or control electronics need model-specific service if the external supply is normal",
    ],
    quickChecks: [
      { title: "Use the washer's proper wall circuit", detail: "Samsung advises confirming the washer is on its own circuit and is not using an extension cord. Connect it directly to the intended wall outlet before retrying.", level: "safe" },
      { title: "Check for a recent power event", detail: "Note whether the code followed an outage, breaker trip, unplugging event, generator use, or visible light flicker elsewhere in the home.", level: "safe" },
      { title: "Power-cycle once after supply is stable", detail: "After confirming the supply is stable, switch the washer off for a few minutes, restore power, and retry a single cycle.", level: "safe" },
      { title: "Do not perform live mains testing", detail: "If 2E returns on a known-good supply, internal voltage sensing, power-input, harness, and control diagnosis should be handled by qualified service.", level: "stop" },
    ],
    decisionTitle: "Does 2E return when the washer is on a stable dedicated supply?",
    observations: [
      { label: "The code followed a power interruption or breaker trip", advice: "Treat the electrical event as relevant. Retry only after the household supply is stable and the washer is connected correctly." },
      { label: "The washer was using an extension or shared high-load circuit", advice: "Remove that setup and test only from the intended wall circuit; Samsung explicitly advises against extension-cord use for voltage errors." },
      { label: "2E returns with normal household power", advice: "Stop repeated resets and arrange model-specific diagnosis of the washer's power-input and control system." },
    ],
    whenToStop: [
      "2E returns on a stable dedicated circuit",
      "The outlet, plug, or cord is hot, loose, scorched, arcing, or smells burnt",
      "Diagnosis would require live-voltage or internal control-board testing",
    ],
    faq: [
      { question: "What does Samsung washer 2E mean?", answer: "Samsung's current washer support groups 2E with voltage errors, meaning the washer detected an irregularity in the electrical current or supply." },
      { question: "Is Samsung 2E the same as E2?", answer: "No. Samsung's current guide lists E2 in the jammed-button group, while 2E is listed in the voltage-error group. Record the exact characters shown on the display." },
      { question: "Should I replace the control board because of 2E?", answer: "No. First confirm the external supply and correct circuit. If the code persists with normal power, model-specific electrical diagnosis is needed before parts are replaced." },
    ],
    modelNote: "Samsung reuses similar-looking codes across generations. The current Samsung washer guide lists 2E in the voltage-error family and E2 in the jammed-button family, so confirm the exact display and full model number.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-sf-error": {
    title: "Samsung washer SF error: internal system error",
    shortTitle: "Samsung washer SF system error",
    summary: "Samsung lists SF, along with 5F and SF1/SF2/SF3 variants, as a washer system error. Unlike 2E, which Samsung places in the voltage-error family, SF does not have a normal external plumbing or load-balancing fix; Samsung's user-level path is a brief power reset followed by service if the error returns.",
    likelyCauses: [
      "The washer's electronics detected an internal system fault",
      "A control, sensor, communication, or other internal subsystem is reporting an invalid state",
      "A temporary electronic state may clear after a single controlled power reset",
      "A persistent SF code requires model-specific service diagnosis rather than repeated user resets",
    ],
    quickChecks: [
      { title: "Confirm the code is SF or 5F", detail: "Samsung groups SF, 5F, SF1, SF2, SF3 and related variants under System Error. Record the exact display and full model number.", level: "safe" },
      { title: "Power off for 2–3 minutes", detail: "Samsung's guidance for errors without specific user troubleshooting is to power the washer off for 2–3 minutes, restore power, and restart the cycle once.", level: "safe" },
      { title: "Do not chase unrelated drain or fill parts", detail: "SF is listed as a system error, not a no-drain, water-supply, unbalanced-load, or door-latch code in Samsung's current washer guide.", level: "safe" },
      { title: "Arrange service if SF returns", detail: "A recurring system error needs model-specific electronic diagnosis. Do not open the washer to probe energized control or sensor circuits as a user-level step.", level: "stop" },
    ],
    decisionTitle: "Does the SF system error return after Samsung's single reset attempt?",
    observations: [
      { label: "SF clears and the next cycle completes normally", advice: "Monitor the washer. If SF returns, record the cycle stage and model number for service diagnosis." },
      { label: "SF returns immediately after power-up", advice: "The fault is persistent rather than a one-time control state. Arrange service instead of continuing reset attempts." },
      { label: "The display is actually 2E", advice: "Use the 2E voltage-error guide instead; Samsung places 2E in a different error family." },
    ],
    whenToStop: [
      "SF returns after the 2–3 minute power reset",
      "The washer behaves unpredictably, repeatedly restarts, or shows electrical symptoms",
      "Internal electronics, sensors, harnesses, or control boards would need testing",
    ],
    faq: [
      { question: "What does SF mean on a Samsung washer?", answer: "Samsung's current support guide lists SF/5F and SF1/SF2/SF3 variants as System Error codes." },
      { question: "Can I fix SF by cleaning the drain filter?", answer: "Samsung does not classify SF as a drain error. A filter check may be routine maintenance, but it is not the code-specific remedy for SF." },
      { question: "How many times should I reset the washer?", answer: "Use the Samsung user-level reset once. If SF returns, service is the appropriate next step rather than repeated power cycling." },
    ],
    modelNote: "Samsung lists SF-family codes under System Error, but the failed internal subsystem can vary by model. Use the full model number for service diagnosis and do not infer a specific failed board or sensor from SF alone.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-dc3-error": {
    title: "Samsung washer dC3 error: Add Door is not closed and locked",
    shortTitle: "Samsung washer dC3 Add Door error",
    summary: "Samsung specifically defines dC3 (and ddC) as an Add Door error on washer models equipped with that small secondary door. The control cannot confirm that the Add Door is closed and locked, so troubleshooting should stay focused on the Add Door opening, latch, trapped items, and visible damage rather than the main washer door.",
    likelyCauses: [
      "The Add Door is not completely closed",
      "Laundry, debris, or another item is caught around the Add Door opening",
      "The Add Door latch is not engaging correctly",
      "The Add Door latch, switch, alignment, wiring, or related feedback circuit is damaged",
    ],
    quickChecks: [
      { title: "Check the Add Door, not only the main door", detail: "On supported Samsung models dC3/ddC refers specifically to the Add Door. Open it, clear the opening, and close it normally until it is securely seated.", level: "safe" },
      { title: "Remove trapped fabric or debris", detail: "Inspect the visible Add Door seal and latch area for fabric, threads, detergent residue, or debris that could prevent full closure.", level: "safe" },
      { title: "Inspect for visible latch damage", detail: "If the small door, hinge, latch, or surrounding trim is cracked, loose, or misaligned, do not force it closed.", level: "caution" },
      { title: "Use service if dC3 will not clear", detail: "Samsung directs unresolved Add Door/latch problems to service. Internal switch, wiring, and control testing is not a normal user repair.", level: "stop" },
    ],
    decisionTitle: "Can the washer positively confirm the Add Door is closed and locked?",
    observations: [
      { label: "dC3 clears after reseating the Add Door", advice: "The secondary door was not fully seated. Keep laundry clear of the Add Door opening before restarting the cycle." },
      { label: "The Add Door looks closed but dC3 remains", advice: "The latch alignment or closed/locked feedback may not be confirming correctly. Arrange model-specific service rather than forcing the door." },
      { label: "The washer has no Add Door", advice: "Recheck the display and exact model documentation. Samsung's dC3 definition applies to Add Door-equipped washer families." },
    ],
    whenToStop: [
      "dC3 remains after the Add Door is correctly closed",
      "The Add Door, hinge, latch, or trim is visibly damaged",
      "Internal latch-switch, wiring, or control diagnosis would be required",
    ],
    faq: [
      { question: "What does Samsung washer dC3 mean?", answer: "Samsung defines dC3/ddC as an Add Door error: the small secondary door is not detected as closed and locked." },
      { question: "Is dC3 the same as FL?", answer: "No. Samsung places FL in the general main-door error group, while dC3/ddC is specifically the Add Door error on equipped models." },
      { question: "Should I force the Add Door shut?", answer: "No. Clear trapped items and close it normally. Forcing a damaged or misaligned latch can worsen the problem." },
    ],
    appliesTo: "Samsung washer models equipped with an Add Door that report dC3 or ddC",
    modelNote: "dC3/ddC is specific to Samsung Add Door-equipped washer families. If the washer has no Add Door, verify the exact code and model before using this guide.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "samsung-washer-fl-error": {
    title: "Samsung washer FL error: main door is not detected as locked",
    shortTitle: "Samsung washer FL door-lock error",
    summary: "Samsung includes FL in its normal washer door-error group, meaning the main door is not detected as closed and locked. This differs from dC3/ddC, which Samsung reserves for the Add Door on models that have the smaller secondary opening.",
    likelyCauses: [
      "The main washer door is not fully closed",
      "Laundry or another item is trapped between the main door and seal",
      "The main-door latch is loose, damaged, or not reaching the locked position",
      "The door-lock switch, alignment, wiring, or control feedback needs model-specific diagnosis",
    ],
    quickChecks: [
      { title: "Clear the main door opening", detail: "Open the main washer door and move all laundry fully inside the drum. Check the visible seal and latch area for trapped material.", level: "safe" },
      { title: "Close the main door normally", detail: "Samsung advises checking that the latch is securely fixed and that the door is closed and secured correctly. Do not slam or force the latch.", level: "safe" },
      { title: "Inspect the latch and door for damage", detail: "Look for a loose handle, cracked latch, sagging door, or visible alignment problem before attempting another cycle.", level: "caution" },
      { title: "Arrange service if FL persists", detail: "If the main door is clearly closed and FL remains, the lock/feedback path needs model-specific diagnosis. Do not bypass the door interlock.", level: "stop" },
    ],
    decisionTitle: "Can the washer confirm the main door is closed and locked?",
    observations: [
      { label: "FL clears after removing trapped laundry", advice: "The main door was not seating completely. Keep garments away from the seal and latch area on future loads." },
      { label: "The main door is closed but FL remains", advice: "The latch, lock feedback, alignment, wiring, or control may need service diagnosis. Do not repeatedly force the handle." },
      { label: "The code is dC3 on an Add Door model", advice: "Use the dC3 guide instead; Samsung defines that code specifically for the secondary Add Door." },
    ],
    whenToStop: [
      "FL remains after the main door is correctly closed",
      "The main door, handle, hinge, latch, or seal is damaged",
      "The door interlock, wiring, or control circuit would need testing",
    ],
    faq: [
      { question: "What does FL mean on a Samsung washer?", answer: "Samsung lists FL with its main door errors: the door is not detected as closed and locked." },
      { question: "Is FL an Add Door code?", answer: "No. Samsung identifies dC3/ddC as the Add Door error. FL belongs to the general main-door error group." },
      { question: "Can I bypass the door lock to finish a cycle?", answer: "No. The door interlock is a safety device and should not be bypassed. Persistent FL requires model-specific service." },
    ],
    modelNote: "Samsung groups FL with main-door errors across supported washer families. Exact latch and lock hardware varies by model, so use the full model number before replacing parts.",
    sources: [SAMSUNG_WASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
};

export function applySamsungSystemDoorProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
