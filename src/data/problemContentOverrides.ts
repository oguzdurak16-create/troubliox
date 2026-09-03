import type { Problem } from "./problems";

const overrides: Record<string, Partial<Problem>> = {
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
