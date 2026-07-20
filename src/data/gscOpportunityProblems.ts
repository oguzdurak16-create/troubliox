import type { Problem } from "./problems";

const modelWarning =
  "Error-code meanings can vary by model, market, and production year. Match the complete model number to the official manual before using service procedures or ordering parts.";

export const gscOpportunityProblems: Problem[] = [
  {
    slug: "whirlpool-washer-rl-code",
    title: "What does rL mean on a Whirlpool washer? Load detected during Clean Washer",
    shortTitle: "Whirlpool washer rL code",
    summary:
      "The rL code on supported Whirlpool front-load washers means the machine detected clothing or another item in the drum after the Clean Washer cycle was selected. Empty the drum completely and restart that cleaning cycle.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    device: "Washing machine",
    updated: "2026-07-20",
    readTime: 3,
    likelyCauses: [
      "Clothing, a cleaning cloth, or another item remains inside the drum",
      "The Clean Washer cycle was selected instead of a normal wash cycle",
      "The control still detects a load after the drum has been emptied",
    ],
    quickChecks: [
      {
        title: "Remove every item from the drum",
        detail: "Check the drum, door seal, and folds carefully, then restart the Clean Washer cycle with no laundry inside.",
        level: "safe",
      },
      {
        title: "Confirm the selected cycle",
        detail: "Use a normal wash cycle when washing clothing; Clean Washer must run empty.",
        level: "safe",
      },
      {
        title: "Reset the control once",
        detail: "If rL remains with an empty drum, disconnect power for 5 minutes, reconnect, and retry once.",
        level: "caution",
      },
      {
        title: "Arrange service if the empty drum is still detected",
        detail: "Repeated rL with a confirmed empty drum can require model-specific control or sensing diagnosis.",
        level: "stop",
      },
    ],
    decisionTitle: "When does rL appear?",
    observations: [
      {
        label: "rL appears only on Clean Washer",
        advice: "Remove all items and restart the empty cleaning cycle. This is the normal meaning on supported models.",
      },
      {
        label: "The drum is empty but rL returns",
        advice: "Power-reset once, verify the complete model, and use Whirlpool support if the code returns.",
      },
      {
        label: "rL appears during a normal wash",
        advice: "Confirm the display and model number because the code may be misread or used differently on that model.",
      },
    ],
    whenToStop: [
      "The washer starts unexpectedly while the door area is being checked",
      "The code returns with an empty drum after one power reset",
      "The door, drum, wiring, or internal controls would need to be opened",
    ],
    faq: [
      {
        question: "What does rL mean on a Whirlpool washer?",
        answer: "On supported Whirlpool front-load washers, rL means a load was detected while the Clean Washer cycle was selected.",
      },
      {
        question: "Is Whirlpool rL the same as F34 or F0E1?",
        answer: "Whirlpool documentation groups rL with load-detected Clean Washer messages on selected models, including F34 or F0E1 variants. Check the exact manual for your model.",
      },
      {
        question: "Does rL mean a part has failed?",
        answer: "Usually no. First remove everything from the drum. Service becomes relevant only when an empty washer repeatedly reports the same condition.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "what does rl mean on whirlpool washer",
      "whirlpool washer rl code",
      "whirlpool rl",
      "clean washer",
      "load detected",
    ],
    errorCode: "rL / F34 / F0E1",
    aliases: ["rL", "RL", "F34", "F0E1", "F0 E1"],
    appliesTo: "Selected Whirlpool front-load washing machine model families",
    modelNote: modelWarning,
    sources: [
      {
        label: "Whirlpool Product Help: rL error code",
        url: "https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Error_Codes/Other_Error_Codes/rL_-_Error_Code",
      },
      {
        label: "Whirlpool Product Help: F0 E1 or rL",
        url: "https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Error_Codes/%22F%22_Error_Codes/F0_E1_or_rL_-_Front_Load_Washer",
      },
    ],
    contentKind: "error-code",
  },
  {
    slug: "bosch-washer-f29-error",
    title: "Bosch washing machine F29 error: low water pressure or blocked inlet filters",
    shortTitle: "Bosch washer F29 error",
    summary:
      "Bosch groups F29 with E17 and F17 on supported washers. It indicates that the water-supply filters or AquaStop hose may be restricted, or that household water pressure is too low for the washer to fill correctly.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Bosch",
    brandSlug: "bosch",
    device: "Washing machine",
    updated: "2026-07-20",
    readTime: 4,
    likelyCauses: [
      "The water tap is not fully open or household pressure is too low",
      "The inlet-hose filter is blocked by scale or debris",
      "The AquaStop or water inlet hose is kinked, restricted, or installed incorrectly",
      "A model-specific inlet valve, flow, or control fault prevents filling",
    ],
    quickChecks: [
      {
        title: "Open the water tap fully",
        detail: "Confirm a nearby tap has normal flow and that the washer supply valve is fully open.",
        level: "safe",
      },
      {
        title: "Inspect the inlet hose",
        detail: "Straighten visible kinks and confirm the hose is not crushed behind the washer.",
        level: "safe",
      },
      {
        title: "Clean only the user-accessible inlet filter",
        detail: "Turn off the tap first and follow the model manual. Never immerse the AquaStop safety valve in water.",
        level: "caution",
      },
      {
        title: "Stop before valve or electrical diagnosis",
        detail: "If normal pressure and clean filters do not clear F29, qualified service should test the inlet system.",
        level: "stop",
      },
    ],
    decisionTitle: "What happens when F29 appears?",
    observations: [
      {
        label: "No water enters",
        advice: "Focus on the tap, household pressure, hose, inlet filters, and AquaStop path.",
      },
      {
        label: "Water enters very slowly",
        advice: "A partly closed tap, low pressure, kink, or restricted filter is the most likely external cause.",
      },
      {
        label: "Water flow looks normal but F29 returns",
        advice: "Verify the model manual and arrange inlet-valve, flow-sensing, wiring, or control diagnosis.",
      },
    ],
    whenToStop: [
      "A hose, tap, or connection is leaking",
      "The AquaStop housing or electrical valve would need to be opened or immersed",
      "The washer fills when powered off or internal testing is required",
    ],
    faq: [
      {
        question: "What does F29 mean on a Bosch washing machine?",
        answer: "Bosch lists F29 with E17 and F17 for low water pressure or blocked filters in the water connection or AquaStop hose on supported models.",
      },
      {
        question: "How much water flow does Bosch recommend checking?",
        answer: "Bosch's US guidance says a fully opened tap should provide about 10 liters, or 2.5 gallons, per minute. A plumber should correct genuinely low household pressure.",
      },
      {
        question: "Can unplugging clear Bosch F29?",
        answer: "It may clear a one-time control state, but it cannot correct low pressure, a blocked filter, a kinked hose, or a failed inlet component.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "f29 bosch washing machine",
      "bosch washer f29",
      "bosch washing machine f29 error",
      "low water pressure",
      "inlet filter",
    ],
    errorCode: "E17 / F17 / F29",
    aliases: ["E17", "F17", "F29"],
    appliesTo: "Selected Bosch washing machine model families",
    modelNote: modelWarning,
    sources: [
      {
        label: "Bosch Washer Error Codes",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
      },
    ],
    contentKind: "error-code",
  },
  {
    slug: "bosch-washer-e32-error",
    title: "Bosch washing machine E32 error: the load is unbalanced for spinning",
    shortTitle: "Bosch washer E32 error",
    summary:
      "Bosch E32 or F32 means the washer detected a load imbalance. The machine may slow or skip the spin cycle and make several distribution attempts, which can extend the program without indicating a failed part.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Bosch",
    brandSlug: "bosch",
    device: "Washing machine",
    updated: "2026-07-20",
    readTime: 3,
    likelyCauses: [
      "One heavy item or a small load is concentrated on one side of the drum",
      "Large items have tangled or trapped smaller items",
      "The washer is not level or moves excessively during spin",
      "A repeated imbalance on balanced loads points to suspension or sensing problems",
    ],
    quickChecks: [
      {
        title: "Pause and redistribute the laundry",
        detail: "Separate tangled items and spread the load around the drum before restarting spin.",
        level: "safe",
      },
      {
        title: "Mix large and small items",
        detail: "Avoid spinning one absorbent item alone; combine compatible items of different sizes.",
        level: "safe",
      },
      {
        title: "Check that the washer is stable",
        detail: "Confirm all feet contact the floor and the cabinet does not rock.",
        level: "caution",
      },
      {
        title: "Stop repeated high-impact spinning",
        detail: "Service is appropriate when balanced test loads still cause violent movement or repeated E32/F32.",
        level: "stop",
      },
    ],
    decisionTitle: "When does E32 appear?",
    observations: [
      {
        label: "It happens with one blanket or heavy item",
        advice: "Redistribute the item or add compatible smaller items so the load can balance.",
      },
      {
        label: "Spin is slower or skipped",
        advice: "That is a protective response to imbalance; the washer may attempt redistribution several times.",
      },
      {
        label: "Every balanced load triggers E32",
        advice: "Check leveling, then arrange suspension, drive, or imbalance-sensing diagnosis if it continues.",
      },
    ],
    whenToStop: [
      "The washer strikes cabinets, walks, or moves violently",
      "The drum appears loose, tilted, or makes metal impact sounds",
      "The machine cannot be leveled safely or internal suspension access is required",
    ],
    faq: [
      {
        question: "What does E32 mean on a Bosch washing machine?",
        answer: "E32 or F32 means the washer detected an imbalance and reduced or stopped spinning to protect the appliance.",
      },
      {
        question: "Is Bosch E32 a motor fault?",
        answer: "Not normally. Start by redistributing the load and checking stability. Repeated E32 with balanced loads can justify service.",
      },
      {
        question: "Why does the cycle take longer with E32?",
        answer: "The washer may make several attempts to redistribute the laundry before reducing or canceling the spin.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "bosch washing machine e32 error",
      "bosch washer e32",
      "e32 washing machine",
      "unbalanced load",
      "spin problem",
    ],
    errorCode: "E32 / F32",
    aliases: ["E32", "F32"],
    appliesTo: "Selected Bosch washing machine model families",
    modelNote: modelWarning,
    sources: [
      {
        label: "Bosch Washer Error Codes",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
      },
    ],
    contentKind: "error-code",
  },
  {
    slug: "bosch-dishwasher-e90-error",
    title: "Bosch dishwasher E90 error: verify the model because E90 is not a standard listed dishwasher code",
    shortTitle: "Bosch dishwasher E90 error",
    summary:
      "E90 is not included in Bosch's standard US dishwasher error-code list. Do not copy the meaning from a Bosch dryer or another appliance. Record the complete dishwasher E-Nr, confirm the display, and use the model-specific manual or Bosch support.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Bosch",
    brandSlug: "bosch",
    device: "Dishwasher",
    updated: "2026-07-20",
    readTime: 4,
    likelyCauses: [
      "The display has been misread, photographed at an angle, or confused with another code",
      "The code is specific to a regional or model family not covered by the general list",
      "A temporary control or power condition produced a nonstandard display",
      "An electronics or configuration fault requires model-specific service information",
    ],
    quickChecks: [
      {
        title: "Photograph the exact display",
        detail: "Record every letter, number, separator, and flashing icon before resetting the dishwasher.",
        level: "safe",
      },
      {
        title: "Find the complete E-Nr",
        detail: "Open the door and check the top or side edge for the full model number and suffix.",
        level: "safe",
      },
      {
        title: "Power-cycle once if there is no leak or electrical symptom",
        detail: "Switch the dishwasher off at its identified supply for 30 seconds, then restore power once.",
        level: "caution",
      },
      {
        title: "Use Bosch support for a returning E90 display",
        detail: "Do not order a board or transfer a dryer-code definition to the dishwasher without model-specific confirmation.",
        level: "stop",
      },
    ],
    decisionTitle: "What should be confirmed before treating E90 as a fault?",
    observations: [
      {
        label: "The code disappears after one restart",
        advice: "Monitor the dishwasher. If it returns, keep the photo and complete E-Nr for support.",
      },
      {
        label: "E90 returns immediately",
        advice: "Use the model-specific manual or Bosch support because the general dishwasher list does not define E90.",
      },
      {
        label: "There is a leak, burnt smell, or tripped breaker",
        advice: "Keep power and water off and arrange qualified service rather than resetting again.",
      },
    ],
    whenToStop: [
      "Water is present near wiring, the plug, or the base of the dishwasher",
      "A breaker trips, the control smells burned, or the display repeatedly resets",
      "Internal control-board, wiring, or live-voltage testing would be required",
    ],
    faq: [
      {
        question: "What does E90 mean on a Bosch dishwasher?",
        answer: "Bosch's standard US dishwasher code list does not define E90. Confirm the full model and contact Bosch support rather than borrowing a meaning from another appliance category.",
      },
      {
        question: "Does Bosch E90 always mean an electronics fault?",
        answer: "Bosch lists E90 as an electronics fault on selected dryers, but that dryer definition should not be applied automatically to a dishwasher.",
      },
      {
        question: "Can I reset a Bosch dishwasher showing E90?",
        answer: "One 30-second power cycle is reasonable only when there is no leak, heat, smell, damaged wiring, or tripped breaker. A returning code needs model-specific support.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "bosch dishwasher e90 error",
      "bosch e90 dishwasher",
      "e90 error",
      "model specific code",
      "electronics",
    ],
    errorCode: "E90",
    aliases: ["E90"],
    appliesTo: "Bosch dishwashers displaying E90; exact meaning requires model and market confirmation",
    modelNote: modelWarning,
    sources: [
      {
        label: "Bosch Dishwasher Error Codes",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/dishwashers",
      },
      {
        label: "Bosch Dryer Error Codes: E90 context for dryers only",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/dryers/",
      },
    ],
    contentKind: "error-code",
  },
  {
    slug: "lg-washer-ff-error",
    title: "LG washing machine FF error: Freeze Failure from frozen water paths",
    shortTitle: "LG washer FF error",
    summary:
      "LG defines FF as Freeze Failure or freeze detection. Prolonged cold can freeze water in the washer, inlet hose, drain hose, faucet, tub, or pump path, preventing the machine from filling, draining, or starting.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "LG",
    brandSlug: "lg",
    device: "Washing machine",
    updated: "2026-07-20",
    readTime: 5,
    likelyCauses: [
      "The drain hose or pump path is frozen",
      "The inlet hose, faucet, or supply path is frozen",
      "The washer's internal temperature is below its operating threshold",
      "Ice remains after only the visible hose has thawed",
    ],
    quickChecks: [
      {
        title: "Move the washer into safe above-freezing conditions",
        detail: "Allow natural thawing when possible and do not operate the washer while water paths remain frozen.",
        level: "safe",
      },
      {
        title: "Remove laundry and retained water safely",
        detail: "Follow the model instructions and prepare for water before opening any user-accessible drain point.",
        level: "caution",
      },
      {
        title: "Use warm water, not boiling water or flame",
        detail: "LG guidance for supported models uses approximately 50–60°C warm water to thaw the tub and warm towels around frozen hoses.",
        level: "caution",
      },
      {
        title: "Stop if hoses are split or water reaches electrical areas",
        detail: "Freezing can damage hoses and fittings; leaks must be repaired before the washer is powered again.",
        level: "stop",
      },
    ],
    decisionTitle: "What happens after the washer warms?",
    observations: [
      {
        label: "FF clears after thawing and water moves normally",
        advice: "Run a supervised rinse or spin test and inspect every visible hose connection for leaks.",
      },
      {
        label: "OE appears after thawing",
        advice: "The drain hose or pump path may still be frozen or restricted.",
      },
      {
        label: "IE appears after thawing",
        advice: "The faucet, inlet hose, or water-supply path may still be frozen.",
      },
      {
        label: "FF remains in a warm room",
        advice: "Verify the complete model and arrange temperature-sensing or control diagnosis.",
      },
    ],
    whenToStop: [
      "A hose, fitting, tub, or pump area leaks after thawing",
      "The washer is outdoors or in a wet electrical environment",
      "An open flame, heat gun, boiling water, or internal panel removal would be required",
    ],
    faq: [
      {
        question: "What does FF mean on an LG washing machine?",
        answer: "FF means Freeze Failure or freeze detection on supported LG washers. Water in the inlet or drain path may be frozen.",
      },
      {
        question: "Can I use boiling water to clear LG FF?",
        answer: "No. LG guidance uses warm water around 50–60°C for supported procedures. Boiling water, flame, or uncontrolled heat can damage parts and create injury risks.",
      },
      {
        question: "Why does LG FF change to OE or IE?",
        answer: "OE points toward a remaining frozen or restricted drain path, while IE points toward the faucet or inlet-supply path.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "ff error in lg washing machine",
      "lg washer ff error",
      "lg freeze failure",
      "frozen washer",
      "frozen drain hose",
    ],
    errorCode: "FF",
    aliases: ["FF", "Freeze Failure", "freeze detection"],
    appliesTo: "Selected LG front-load, top-load, mini-washer, and WashTower model families",
    modelNote: modelWarning,
    sources: [
      {
        label: "LG USA: FF error code is displayed",
        url: "https://www.lg.com/us/support/help-library/lg-top-load-washing-ff-error-code-is-displayed-CT00000305-20153081587935",
      },
      {
        label: "LG USA: Front-load washer error-code list",
        url: "https://www.lg.com/us/support/help-library/lg-front-load-washer-error-code-list-CT10000010-20155069413456",
      },
    ],
    contentKind: "error-code",
  },
  {
    slug: "samsung-washer-5d-error",
    title: "Samsung washing machine 5D error: excessive suds, not a drain-code 5E",
    shortTitle: "Samsung washer 5D error",
    summary:
      "Samsung 5d is a display variant of Sd or SUd on supported washers and means excessive suds were detected. The washer normally pauses and extends rinsing so the foam can dissipate, then continues automatically.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Samsung",
    brandSlug: "samsung",
    device: "Washing machine",
    updated: "2026-07-20",
    readTime: 4,
    likelyCauses: [
      "Too much detergent was used for the load and water conditions",
      "Non-HE detergent was used in a high-efficiency washer",
      "Concentrated detergent was dosed as if it were a standard formula",
      "Detergent residue or a restricted drain path keeps foam in the washer",
    ],
    quickChecks: [
      {
        title: "Let the washer manage the suds",
        detail: "Do not immediately cancel the cycle. Supported Samsung washers pause and add rinsing time so the foam can break down.",
        level: "safe",
      },
      {
        title: "Use the correct HE detergent amount next time",
        detail: "Use less detergent for small or lightly soiled loads and follow the concentration instructions.",
        level: "safe",
      },
      {
        title: "Run an empty rinse if residue remains",
        detail: "After the current cycle finishes, run an empty cycle without detergent and repeat only if visible suds remain.",
        level: "safe",
      },
      {
        title: "Check drainage if suds never clear",
        detail: "A blocked filter or slow drain can prolong foam. Follow the model manual before opening a user-accessible filter.",
        level: "caution",
      },
    ],
    decisionTitle: "Is the display 5d, Sd, SUd, or 5E?",
    observations: [
      {
        label: "The washer pauses and later resumes",
        advice: "That is normal suds-management behavior. Reduce detergent on future loads.",
      },
      {
        label: "Heavy foam is visible",
        advice: "Do not add more products. Let the machine rinse and run an empty cycle afterward if residue remains.",
      },
      {
        label: "The display is actually 5E or 5C",
        advice: "That is a drainage code, not the 5d/Sd excessive-suds message. Check the exact characters before troubleshooting.",
      },
      {
        label: "5d returns with no detergent or foam",
        advice: "Verify drainage and the model manual, then arrange service if the message persists.",
      },
    ],
    whenToStop: [
      "Foam or water leaks onto electrical connections or the floor",
      "The pump smells burned or the washer cannot drain",
      "The message returns on detergent-free tests after drainage checks",
    ],
    faq: [
      {
        question: "What does 5D mean on a Samsung washing machine?",
        answer: "5d is a display variant of Sd or SUd and means the washer detected excessive suds on supported Samsung models.",
      },
      {
        question: "Is Samsung 5D the same as 5E?",
        answer: "No. 5d/Sd is excessive suds. 5E or 5C is a drainage issue. Seven-segment displays can make the characters easy to confuse.",
      },
      {
        question: "Should I turn the washer off when 5D appears?",
        answer: "Usually no. Samsung says the washer pauses so suds can dissipate and then continues. Stop only for a leak, electrical risk, or persistent draining failure.",
      },
    ],
    tags: [
      "gsc-opportunity",
      "samsung washing machine 5d error",
      "5d error in samsung washing machine",
      "samsung washer 5d",
      "sd sud error",
      "excessive suds",
    ],
    errorCode: "SUd / 5UD / Sd / 5d / SUdS / 5Ud5",
    aliases: ["SUd", "5UD", "Sd", "5d", "SUdS", "5Ud5"],
    appliesTo: "Selected Samsung washing machine model families",
    modelNote: modelWarning,
    sources: [
      {
        label: "Samsung USA: washing machine information and error codes",
        url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
      },
      {
        label: "Samsung Support: excessive suds and 5d variants",
        url: "https://www.samsung.com/sg/support/home-appliances/when-washing-machine-has-excessive-suds/",
      },
    ],
    contentKind: "error-code",
  },
];

function normalizeCode(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function codesFor(problem: Problem) {
  return [problem.errorCode || "", ...(problem.aliases || [])]
    .map(normalizeCode)
    .filter(Boolean);
}

function isSameCodeTarget(existing: Problem, curated: Problem) {
  if (existing.brandSlug !== curated.brandSlug || existing.device !== curated.device) return false;
  const existingCodes = new Set(codesFor(existing));
  return codesFor(curated).some((code) => existingCodes.has(code));
}

export function mergeGscOpportunityProblems(items: Problem[]) {
  const merged = [...items];

  for (const curated of gscOpportunityProblems) {
    const slugIndex = merged.findIndex((problem) => problem.slug === curated.slug);
    if (slugIndex >= 0) {
      merged[slugIndex] = curated;
      continue;
    }

    const codeIndex = merged.findIndex((problem) => isSameCodeTarget(problem, curated));
    if (codeIndex >= 0) {
      merged[codeIndex] = { ...curated, slug: merged[codeIndex].slug };
      continue;
    }

    merged.push(curated);
  }

  return merged;
}
