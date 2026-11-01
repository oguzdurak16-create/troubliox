import type { Problem } from "./problems";

const overrides: Record<string, Partial<Problem>> = {
  "lg-dishwasher-ne-error": {
    "title": "LG dishwasher nE: check load interference before service",
    "summary": "LG’s general dishwasher support guide associates nE with abnormal impeller operation and advises rearranging dishes that may obstruct movement. If the display persists, LG calls for service. The message alone does not prove that a diverter motor or its position sensor must be replaced.",
    "likelyCauses": [
      "A dish or utensil interferes with a rotating wash component",
      "The loaded arrangement prevents normal movement during washing",
      "The impeller or model-specific wash mechanism needs service after loading interference is ruled out"
    ],
    "quickChecks": [
      {
        "title": "Record nE and the full model number",
        "detail": "Check the exact characters before choosing this procedure. A suffix such as nE1 or nE2 requires its own model-manual check.",
        "level": "safe"
      },
      {
        "title": "Rearrange the load",
        "detail": "Stop the cycle and follow the manual’s opening instructions. Reposition protruding dishes or utensils without reaching into a powered pump or forcing an internal mechanism.",
        "level": "caution"
      },
      {
        "title": "Retry only after the load is clear",
        "detail": "If the manual permits a normal restart, observe whether the same nE display returns. A quieter cycle is not proof that an internal component has been repaired.",
        "level": "safe"
      },
      {
        "title": "Use service for a persistent nE",
        "detail": "LG’s next step after loading checks is service. Do not dismantle an actuator, bypass feedback or order a motor from the display alone.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does nE return after obstructing dishes are repositioned?",
    "observations": [
      {
        "label": "A protruding item was touching a rotating wash part",
        "advice": "Correct the loading and observe one manual-permitted retry."
      },
      {
        "label": "The load is clear but nE returns",
        "advice": "Arrange model-specific inspection instead of repeating resets."
      },
      {
        "label": "The display contains extra characters after nE",
        "advice": "Record the whole message and confirm the suffix in the exact manual."
      }
    ],
    "faq": [
      {
        "question": "Does LG nE establish a failed diverter motor?",
        "answer": "No. The reviewed LG guide describes impeller operation and load interference. The exact assembly and failed component require the model documentation and diagnosis."
      },
      {
        "question": "Can I use this guide for nE1 or nE2?",
        "answer": "Do not assume those suffixes have the same definition. LG’s general article documents nE, so a suffixed display needs the exact model manual."
      }
    ],
    "modelNote": "This page follows LG’s general nE loading/impeller guidance. “Impeller” wording in a general article must not be treated as permission to access an internal pump. Assembly names and codes can differ by model and market.",
    "updated": "2026-11-01",
    "sources": [
      {
        "label": "LG USA Support — Dishwasher guide to error codes (nE section)",
        "url": "https://www.lg.com/us/support/help-library/lg-dishwasher-guide-to-error-codes--20154823515108"
      },
      {
        "label": "LG — Find the exact owner manual",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "whenToStop": [
      "The appliance leaks, trips a breaker or smells electrically hot",
      "A procedure requires internal access, forcing moving parts or bypassing protection",
      "The exact display cannot be matched to the model documentation"
    ],
    "appliesTo": "LG dishwashers; exact display and model manual must be matched",
    "tags": [
      "dishwasher",
      "ne",
      "LG",
      "check load interference before service"
    ]
  },
  "lg-dishwasher-ne1-error": {
    "title": "LG dishwasher nE1: confirm the model-specific code",
    "summary": "The reviewed LG general dishwasher article documents nE, but it does not establish a separate nE1 definition. Record the complete display and full model number before assuming a diverter-position or motor-feedback fault. The exact model manual is required to choose a repair path.",
    "likelyCauses": [
      "The displayed message has been transcribed incompletely or without its cycle context",
      "The appliance uses a model-specific code or suffix that differs from a general chart",
      "A wash mechanism fault may need service if the exact manual identifies that system"
    ],
    "quickChecks": [
      {
        "title": "Photograph the complete nE1 display",
        "detail": "Include nearby symbols and note whether the message alternates with another display. Do not discard a character merely to match a code chart.",
        "level": "safe"
      },
      {
        "title": "Read the rating label",
        "detail": "Use the complete model designation and local market when locating LG’s manual. A similar-looking front panel does not establish the same error table.",
        "level": "safe"
      },
      {
        "title": "Confirm whether the manual lists the exact suffix",
        "detail": "The linked general nE article is context, not proof of a distinct nE1 component diagnosis. If the manual gives another instruction, that model-specific instruction controls.",
        "level": "safe"
      },
      {
        "title": "Send the recorded display to LG support if undocumented",
        "detail": "Do not force a diverter, enter service mode or buy an actuator on the basis of an unverified suffix. Use model-specific support.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does the exact model manual define nE1?",
    "observations": [
      {
        "label": "The model manual lists nE1",
        "advice": "Follow that definition and its permitted owner checks; do not replace it with a general nE description."
      },
      {
        "label": "The manual lists nE but not the displayed suffix",
        "advice": "Have LG confirm the full message before selecting a repair."
      },
      {
        "label": "The display is accompanied by leaking or an electrical smell",
        "advice": "Stop operation and arrange service rather than trying to clear the code."
      }
    ],
    "faq": [
      {
        "question": "Does nE1 definitely mean diverter feedback failure?",
        "answer": "That separate definition is not established by the LG general article reviewed here. Verify it against the full model manual before diagnosing or ordering parts."
      },
      {
        "question": "Is nE1 interchangeable with nE?",
        "answer": "No equivalence should be assumed. The general article supports nE guidance, while an additional character needs model-specific confirmation."
      }
    ],
    "modelNote": "Exact-code definition awaiting model-manual confirmation. This page does not present nE1 as a verified synonym of nE or as a confirmed part failure. The linked general support article documents the base nE code.",
    "updated": "2026-11-01",
    "sources": [
      {
        "label": "LG USA Support — Dishwasher guide to error codes (nE section)",
        "url": "https://www.lg.com/us/support/help-library/lg-dishwasher-guide-to-error-codes--20154823515108"
      },
      {
        "label": "LG — Find the exact owner manual",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "whenToStop": [
      "The appliance leaks, trips a breaker or smells electrically hot",
      "A procedure requires internal access, forcing moving parts or bypassing protection",
      "The exact display cannot be matched to the model documentation"
    ],
    "appliesTo": "LG dishwashers; exact display and model manual must be matched",
    "tags": [
      "dishwasher",
      "ne1",
      "LG",
      "exact model manual",
      "code confirmation"
    ]
  },
  "lg-dishwasher-ne2-error": {
    "title": "LG dishwasher nE2: confirm the model-specific code",
    "summary": "The reviewed LG general dishwasher article documents nE, but it does not establish a separate nE2 definition. Record the complete display and full model number before assuming a diverter-position or motor-feedback fault. The exact model manual is required to choose a repair path.",
    "likelyCauses": [
      "The displayed message has been transcribed incompletely or without its cycle context",
      "The appliance uses a model-specific code or suffix that differs from a general chart",
      "A wash mechanism fault may need service if the exact manual identifies that system"
    ],
    "quickChecks": [
      {
        "title": "Photograph the complete nE2 display",
        "detail": "Include nearby symbols and note whether the message alternates with another display. Do not discard a character merely to match a code chart.",
        "level": "safe"
      },
      {
        "title": "Read the rating label",
        "detail": "Use the complete model designation and local market when locating LG’s manual. A similar-looking front panel does not establish the same error table.",
        "level": "safe"
      },
      {
        "title": "Confirm whether the manual lists the exact suffix",
        "detail": "The linked general nE article is context, not proof of a distinct nE2 component diagnosis. If the manual gives another instruction, that model-specific instruction controls.",
        "level": "safe"
      },
      {
        "title": "Send the recorded display to LG support if undocumented",
        "detail": "Do not force a diverter, enter service mode or buy an actuator on the basis of an unverified suffix. Use model-specific support.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does the exact model manual define nE2?",
    "observations": [
      {
        "label": "The model manual lists nE2",
        "advice": "Follow that definition and its permitted owner checks; do not replace it with a general nE description."
      },
      {
        "label": "The manual lists nE but not the displayed suffix",
        "advice": "Have LG confirm the full message before selecting a repair."
      },
      {
        "label": "The display is accompanied by leaking or an electrical smell",
        "advice": "Stop operation and arrange service rather than trying to clear the code."
      }
    ],
    "faq": [
      {
        "question": "Does nE2 definitely mean diverter feedback failure?",
        "answer": "That separate definition is not established by the LG general article reviewed here. Verify it against the full model manual before diagnosing or ordering parts."
      },
      {
        "question": "Is nE2 interchangeable with nE?",
        "answer": "No equivalence should be assumed. The general article supports nE guidance, while an additional character needs model-specific confirmation."
      }
    ],
    "modelNote": "Exact-code definition awaiting model-manual confirmation. This page does not present nE2 as a verified synonym of nE or as a confirmed part failure. The linked general support article documents the base nE code.",
    "updated": "2026-11-01",
    "sources": [
      {
        "label": "LG USA Support — Dishwasher guide to error codes (nE section)",
        "url": "https://www.lg.com/us/support/help-library/lg-dishwasher-guide-to-error-codes--20154823515108"
      },
      {
        "label": "LG — Find the exact owner manual",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "whenToStop": [
      "The appliance leaks, trips a breaker or smells electrically hot",
      "A procedure requires internal access, forcing moving parts or bypassing protection",
      "The exact display cannot be matched to the model documentation"
    ],
    "appliesTo": "LG dishwashers; exact display and model manual must be matched",
    "tags": [
      "dishwasher",
      "ne2",
      "LG",
      "exact model manual",
      "code confirmation"
    ]
  },
  "whirlpool-washer-f5e1-error": {
    summary: "Whirlpool F5E1 is a door-switch or lid-switch state fault on supported washer families: the control is not seeing the expected closed-door signal even though the door may appear shut.",
    likelyCauses: [
      "The door or lid is not fully closed",
      "Clothing, packing material, or debris is blocking the switch area",
      "The door or lid switch is not changing state reliably",
      "The control did not reset after a temporary switch-state fault",
    ],
    quickChecks: [
      { title: "Open and firmly reclose the door or lid", detail: "Make sure it reaches the fully closed position without forcing it.", level: "safe" },
      { title: "Clear the switch area", detail: "Remove clothing, shipping material, detergent buildup, or other items that can keep the switch from being actuated.", level: "safe" },
      { title: "Power-cycle the washer", detail: "Disconnect power for about five minutes, restore power, and retry a short cycle.", level: "safe" },
      { title: "Stop if F5E1 returns", detail: "A recurring switch-state fault can require model-specific door-switch, wiring, or control diagnosis.", level: "stop" },
    ],
    decisionTitle: "Does the control detect the door or lid as closed?",
    observations: [
      { label: "The door looks closed but the cycle will not begin", advice: "Reopen it, check the switch/latch area for an obstruction, and close it firmly before resetting power." },
      { label: "The code returns immediately after a reset", advice: "The switch signal, its wiring, or the model-specific control input needs diagnosis rather than repeated resets." },
      { label: "The code appeared after moving or installing the washer", advice: "Check for shipping material or an item interfering with the door/lid switch area." },
    ],
    faq: [
      { question: "What is the difference between Whirlpool F5E1 and F5E2?", answer: "Whirlpool documents F5E1 as a door-switch state issue on supported washer families, while F5E2 is associated with the door or lid lock not engaging properly. Exact wording varies by model." },
      { question: "Can I keep restarting a washer with F5E1?", answer: "One power reset is a reasonable safe check. If the code returns, verify the model manual and arrange diagnosis instead of repeatedly cycling power." },
    ],
    modelNote: "Whirlpool code definitions vary by washer platform. Confirm F5E1 in the manual for the exact model before replacing a door switch, latch, wiring, or control component.",
    sources: [
      { label: "Whirlpool Product Help — F5E1 door switch", url: "https://producthelp.whirlpool.com/Laundry/Washers/Top_Load_Washer/Error_Codes_or_Flashing_Lights/%22F%22_Codes/F5E1_-_Error_Code" },
    ],
    updated: "2026-09-03",
  },
  "whirlpool-washer-f5e2-error": {
    summary: "Whirlpool F5E2 indicates that the washer cannot confirm the door or lid lock has engaged on supported models, often because the latch area is obstructed or the lock mechanism is not completing its movement.",
    likelyCauses: [
      "The door or lid is not completely closed",
      "Clothing or debris is obstructing the latch or lid-lock area",
      "The door/lid lock cannot engage or report the locked state",
      "A temporary control-state fault remains after an interrupted cycle",
    ],
    quickChecks: [
      { title: "Remove anything from the latch area", detail: "Check for clothing, debris, or packing material between the door/lid and the lock.", level: "safe" },
      { title: "Close the door or lid completely", detail: "Do not slam or force the lock; make sure the opening is clear and close it normally.", level: "safe" },
      { title: "Reset the washer control", detail: "Disconnect the washer from power for about five minutes, reconnect it, and retry.", level: "safe" },
      { title: "Arrange service if the lock will not engage", detail: "Repeated F5E2 can require model-specific latch, lock, wiring, or control testing.", level: "stop" },
    ],
    decisionTitle: "Can the door or lid physically lock?",
    observations: [
      { label: "The door closes but never locks", advice: "Check the latch area for an obstruction. If clear, the lock mechanism or its feedback circuit needs model-specific diagnosis." },
      { label: "The door is blocked by laundry", advice: "Move the item fully inside the drum, close the door normally, and retry after clearing the code." },
      { label: "The lock clicks repeatedly", advice: "Do not keep forcing cycles. Repeated attempts can point to a latch, alignment, wiring, or control problem." },
    ],
    faq: [
      { question: "What does Whirlpool F5E2 mean?", answer: "On supported Whirlpool washer families, F5E2 means the door or lid is not locking properly or the control cannot confirm the locked state." },
      { question: "Is F5E2 always a failed lock assembly?", answer: "No. Whirlpool first recommends checking that the door/lid is fully closed and that nothing is obstructing the lock area, then resetting power. Persistent faults need model-specific diagnosis." },
    ],
    modelNote: "Whirlpool uses F5E2 across multiple washer platforms. Confirm the exact model manual because front-load and top-load lock systems differ.",
    sources: [
      { label: "Whirlpool Product Help — F5E2 door lock", url: "https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Error_Codes/%22F%22_Error_Codes/F5_E2_-_Error_Code" },
    ],
    updated: "2026-09-03",
  },
  "whirlpool-washer-f5e3-error": {
    summary: "Whirlpool F5E3 is a door/lid lock-state fault whose exact meaning depends on washer platform; some Whirlpool guidance treats it as a door-lock problem, while top-load guidance can describe a lid that will not unlock.",
    likelyCauses: [
      "The door or lid lock is stuck in the wrong state",
      "An item is preventing the latch from moving freely",
      "The lock feedback signal does not match the commanded state",
      "The washer platform uses F5E3 for an unlock-related lock fault",
    ],
    quickChecks: [
      { title: "Do not force the locked door or lid", detail: "Wait for the lock indicator and mechanism to release before trying to open it.", level: "safe" },
      { title: "Check the latch path", detail: "Look for clothing or debris around the latch without disassembling the lock mechanism.", level: "safe" },
      { title: "Power-cycle the control", detail: "Disconnect power for about five minutes, reconnect it, and let the washer initialize before retrying.", level: "safe" },
      { title: "Use the exact model guidance if it stays locked", detail: "Persistent F5E3 can require model-specific lock, wiring, or control service. Do not pry the door or lid open.", level: "stop" },
    ],
    decisionTitle: "Is the lock failing to engage, release, or report its state?",
    observations: [
      { label: "The door or lid remains locked after the cycle stops", advice: "Do not force it. Reset power and use the model manual's unlock procedure if one is provided." },
      { label: "The door closes but F5E3 appears before the cycle starts", advice: "Check the latch area and confirm the model-specific code definition; some platforms use F5E3 for a door-lock state fault." },
      { label: "The code returns after a five-minute reset", advice: "The lock mechanism, state feedback, wiring, or control should be diagnosed for that exact washer model." },
    ],
    faq: [
      { question: "Does Whirlpool F5E3 mean the same thing on every washer?", answer: "No. Whirlpool support material varies by platform: front-load guidance identifies a door-lock fault, while top-load guidance may focus on a lid that will not unlock. Check the exact model manual." },
      { question: "Should I pull harder if the lid or door is stuck with F5E3?", answer: "No. Forcing a locked lid or door can damage the latch and surrounding parts. Reset power and follow model-specific release guidance or arrange service." },
    ],
    modelNote: "F5E3 is platform-sensitive. Confirm whether the exact Whirlpool model defines it as a lock, unlock, or lock-state fault before testing or replacing parts.",
    sources: [
      { label: "Whirlpool Product Help — F5E3 front-load door lock", url: "https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Error_Codes/%22F%22_Error_Codes/F5_E3_-_Front_Load_Washer" },
      { label: "Whirlpool Product Help — F5E3 top-load lid unlock", url: "https://producthelp.whirlpool.com/Laundry/Washers/Product_Info/Washer_Videos/VIDEO%3A_F5_E3_Error_Code_for_Top_Load_Washer" },
    ],
    updated: "2026-09-03",
  },
};

export function applyProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
