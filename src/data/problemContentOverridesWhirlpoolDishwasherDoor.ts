import type { Problem } from "./problems";

const WHIRLPOOL_DISHWASHER_TECH_SOURCE = {
  label: "Whirlpool Technical Manual — 24-inch dishwasher door-switch diagnostics",
  url: "https://www.whirlpool.com/content/dam/global/documents/202305/technical-manual-w11542838-reva.pdf",
};

const WHIRLPOOL_DISHWASHER_CODES_SOURCE = {
  label: "Whirlpool Product Help — reading dishwasher error codes",
  url: "https://producthelp.whirlpool.com/Dishwashers/Product_Info/Dishwasher_Product_Assistance/Dishwasher_Error_Codes_-_Reading",
};

const overrides: Record<string, Partial<Problem>> = {
  "whirlpool-dishwasher-f5e1-error": {
    title: "Whirlpool dishwasher F5E1: door-switch state problem",
    shortTitle: "Whirlpool dishwasher F5E1",
    summary: "Whirlpool service documentation associates dishwasher F5E1 with a door-switch problem. The important distinction from F5E2 is that F5E1 concerns the control not seeing the expected door-switch state during operation, while F5E2 is tied to the control expecting the door to have been opened between cycles.",
    likelyCauses: [
      "The dishwasher door is not fully latched even though it appears closed",
      "The door switch is not changing state reliably as the door opens and closes",
      "The latch, strike, hinge alignment, or surrounding load interferes with normal door-switch operation",
      "The control does not receive the expected door-switch signal and needs model-specific diagnosis",
    ],
    quickChecks: [
      { title: "Open and firmly relatch the door", detail: "Remove any rack, utensil, or dish interference, then close the door until the latch engages normally. Do not slam or force a misaligned door.", level: "safe" },
      { title: "Watch the Start/Resume behavior", detail: "Whirlpool's dishwasher diagnostics tie F5E1 to a door-switch problem when the dishwasher will not run and the Start/Resume indicator reflects an interrupted/open-door state. Record the light/display behavior for service.", level: "safe" },
      { title: "Inspect the visible latch and strike", detail: "With power off, look for debris, looseness, or obvious misalignment at the latch/strike area. Do not bypass the door switch or hold it closed by hand to run the dishwasher.", level: "caution" },
      { title: "Power-cycle once if the door is mechanically clear", detail: "Disconnect power for about 30 seconds and retry once. A returning F5E1 needs door-switch/latch/control diagnosis rather than repeated resets.", level: "safe" },
    ],
    decisionTitle: "Does F5E1 return even after the door is opened, cleared, and firmly relatched?",
    observations: [
      { label: "The door does not latch cleanly", advice: "Correct visible loading interference first. If the latch or strike is damaged or misaligned, stop forcing the door and arrange service." },
      { label: "The door latches but the control still behaves as if it is open", advice: "That pattern fits the F5E1 door-switch state domain. The switch, latch mechanism, wiring, or control input needs model-specific diagnosis." },
      { label: "The cycle resumes normally after relatching", advice: "Monitor the next complete cycle. Recurrent F5E1 still indicates an intermittent door-state problem worth diagnosing." },
    ],
    whenToStop: [
      "The latch, strike, or hinge is damaged or the door must be forced closed",
      "F5E1 returns after the door is cleared and one power reset is attempted",
      "Diagnosis requires bypassing the door switch or accessing internal wiring/control circuits",
    ],
    faq: [
      { question: "What does Whirlpool dishwasher F5E1 mean?", answer: "Whirlpool technical documentation links dishwasher F5E1 to a door-switch problem: the control is not seeing the expected door-switch state." },
      { question: "Is dishwasher F5E1 the same as F5E2?", answer: "No. They share the door-switch fault family, but Whirlpool's dishwasher diagnostics distinguish F5E1 from F5E2. F5E2 is associated with the control not seeing the expected door-open event between cycles or the switch remaining closed." },
      { question: "Is this the same F5E1 used on Whirlpool washers?", answer: "Do not assume so. Whirlpool reuses F/E formats across appliance families. This page is specifically scoped to Whirlpool dishwashers; use the exact appliance type and model when matching a code." },
    ],
    appliesTo: "Whirlpool and related 24-inch dishwasher platforms that use F5E1 for a door-switch state fault",
    modelNote: "F5E1 meanings differ across Whirlpool laundry and dishwasher products. This guide follows Whirlpool dishwasher technical documentation; confirm the model number and appliance family before service work.",
    sources: [WHIRLPOOL_DISHWASHER_TECH_SOURCE, WHIRLPOOL_DISHWASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
  "whirlpool-dishwasher-f5e2-error": {
    title: "Whirlpool dishwasher F5E2: door switch stayed closed between cycles",
    shortTitle: "Whirlpool dishwasher F5E2",
    summary: "Whirlpool dishwasher service documentation associates F5E2 with the control expecting a door-open event between cycles but not detecting one. Typical context includes starting a new cycle without the door having been opened since the previous cycle or a door-switch contact that remains stuck closed.",
    likelyCauses: [
      "The customer started another cycle without opening the dishwasher door since the previous cycle ended",
      "The door-switch contacts remain closed even when the door is opened",
      "The latch or switch mechanism is mechanically sticking",
      "The control input, switch wiring, or door-switch assembly needs model-specific diagnosis",
    ],
    quickChecks: [
      { title: "Open the door fully between cycles", detail: "Whirlpool's diagnostic context for F5E2 includes the control looking for the door to open between cycles. Open the door fully, wait briefly, then close and latch it before starting again.", level: "safe" },
      { title: "Confirm the control notices the door opening", detail: "Observe normal user-facing behavior such as interior/status light changes where equipped. If the appliance behaves as if the door remains closed even when physically open, stop repeated starts and arrange diagnosis.", level: "safe" },
      { title: "Inspect for a sticking latch", detail: "With power off, check the visible latch and strike for debris or mechanical sticking. Do not insert tools into the switch or defeat the interlock.", level: "caution" },
      { title: "Try one 30-second power reset", detail: "After physically opening and relatching the door, disconnect dishwasher power for about 30 seconds and retry once. A recurring F5E2 needs service-level door-switch testing.", level: "safe" },
    ],
    decisionTitle: "Does the dishwasher recognize that the door was opened between cycles?",
    observations: [
      { label: "F5E2 clears after opening and closing the door", advice: "The control may simply have required a valid door-open event between cycles. Monitor for recurrence before replacing any part." },
      { label: "The switch appears to stay logically closed with the door open", advice: "That is consistent with Whirlpool's F5E2 diagnostic context. A sticking switch/latch, wiring, or control input requires model-specific diagnosis." },
      { label: "The door mechanically sticks or will not open/close normally", advice: "Stop forcing the latch. Mechanical latch or alignment repair should be completed before further cycles." },
    ],
    whenToStop: [
      "The dishwasher does not appear to recognize an actual door-open event",
      "The latch/switch is mechanically stuck or damaged",
      "F5E2 returns after the door-open sequence and one power reset",
      "Further diagnosis requires switch continuity, wiring, or control-board testing",
    ],
    faq: [
      { question: "What does Whirlpool dishwasher F5E2 mean?", answer: "Whirlpool service documentation ties dishwasher F5E2 to the control not seeing the expected door-open event between cycles, including a door switch that can remain stuck closed." },
      { question: "Why can opening the door clear F5E2?", answer: "The dishwasher expects evidence that the door has been opened between cycles. If no valid door-open state is detected, the control can block the next start and report the door-switch fault family." },
      { question: "Is Whirlpool dishwasher F5E2 a washer lid-lock code?", answer: "No for this page. Whirlpool washers also use F5E2 on some platforms, but this guide is specifically for the dishwasher code and its door-open/switch-state logic." },
    ],
    appliesTo: "Whirlpool and related 24-inch dishwasher platforms that use F5E2 for a missing/stuck door-open switch state",
    modelNote: "Whirlpool reuses F5E2 across appliance families. This page follows dishwasher technical documentation and must not be substituted for washer or washer-dryer F5E2 guidance.",
    sources: [WHIRLPOOL_DISHWASHER_TECH_SOURCE, WHIRLPOOL_DISHWASHER_CODES_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyWhirlpoolDishwasherDoorProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
