import type { Problem } from "../problems";

const modelWarning =
  "Whirlpool error-code wording varies by model and market. Match the complete model number to the official manual before using service procedures or ordering parts.";

export const whirlpoolWasherRlCodeProblem: Problem = {
  slug: "whirlpool-washer-rl-code",
  title: "Whirlpool washer rL code: remove the load from the Clean Washer cycle",
  shortTitle: "Whirlpool washer rL code",
  summary:
    "Whirlpool rL, F34, or F0E1 on supported front-load washers means the machine detected items in the drum while Clean Washer was selected. Remove every item, restart the empty cleaning cycle, and use one power reset only if rL returns with a confirmed empty drum.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "Whirlpool",
  brandSlug: "whirlpool",
  device: "Washing machine",
  updated: "2026-08-24",
  readTime: 3,
  likelyCauses: [
    "Clothing, a cleaning cloth, or another item remains in the drum or door-seal folds",
    "Clean Washer was selected instead of a normal laundry cycle",
    "The washer still detects a load after the drum has been emptied",
  ],
  quickChecks: [
    {
      title: "Empty the drum completely",
      detail: "Remove all clothing and loose items, check the door-seal folds, then restart Clean Washer with no laundry inside.",
      level: "safe",
    },
    {
      title: "Confirm the selected cycle",
      detail: "Use a normal wash cycle for clothing. Whirlpool's Clean Washer cycle must run empty.",
      level: "safe",
    },
    {
      title: "Power-reset once if the drum is empty",
      detail: "Whirlpool advises disconnecting power for 5 minutes, reconnecting, and retrying once when rL remains with an empty drum.",
      level: "caution",
    },
    {
      title: "Arrange service if rL keeps returning",
      detail: "A repeated load-detected message with a confirmed empty drum needs model-specific diagnosis rather than repeated resets.",
      level: "stop",
    },
  ],
  decisionTitle: "When does the Whirlpool rL code appear?",
  observations: [
    {
      label: "rL appears only during Clean Washer",
      advice: "Remove every item and restart the empty cleaning cycle. This is the normal meaning on supported models.",
    },
    {
      label: "The drum is empty but rL returns",
      advice: "Power-reset once, verify the complete model number, and use Whirlpool support if the code returns again.",
    },
    {
      label: "rL appears during a normal wash",
      advice: "Recheck the display and model because the code may be misread or defined differently on that washer.",
    },
  ],
  whenToStop: [
    "The washer starts unexpectedly while the door area is being checked",
    "The code returns with an empty drum after one power reset",
    "Internal controls, wiring, or the drive system would need to be opened",
  ],
  faq: [
    {
      question: "What does rL mean on a Whirlpool washer?",
      answer: "On supported Whirlpool front-load washers, rL means the machine detected a load while the Clean Washer cycle was selected.",
    },
    {
      question: "How do I clear the Whirlpool washer rL code?",
      answer: "Remove every item from the drum and restart Clean Washer. If the drum is definitely empty and rL remains, disconnect power for 5 minutes and retry once.",
    },
    {
      question: "Are rL, F34, and F0E1 related on Whirlpool washers?",
      answer: "Whirlpool documentation uses rL with F34 and, on selected models, F0E1 for a load detected during the Clean Washer cycle. Check the exact model manual.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "whirlpool washer rl code",
    "whirlpool washer rl error",
    "what does rl mean on whirlpool washer",
    "whirlpool f34",
    "whirlpool f0e1",
    "clean washer load detected",
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
  featured: true,
};
