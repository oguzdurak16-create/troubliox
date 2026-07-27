import type { Problem } from "../problems";

const modelWarning =
  "Error-code meanings and safe procedures can vary by model, market, and production year. Match the complete model number to the official manual before opening covers, ordering parts, or using service procedures.";

export const samsungWasherLcLeErrorProblem: Problem = {
  slug: "samsung-washer-lc-le-error",
  title: "Samsung washing machine LC or LE error: check for leaks, hose routing, and excess suds",
  shortTitle: "Samsung washer LC or LE error",
  summary:
    "Samsung uses LC, LC1, LE, LE1, and related displays for a water-level or leakage condition on supported washers. Look for moisture first, inspect visible supply and drain hoses, and run an empty no-additive test to identify excess detergent foam.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "Samsung",
  brandSlug: "samsung",
  device: "Washing machine",
  updated: "2026-07-27",
  readTime: 5,
  likelyCauses: [
    "Water is leaking from a supply hose, drain hose, dispenser, door seal, filter cap, or internal component",
    "The drain hose is kinked, routed too low, or installed incorrectly",
    "Too much detergent or non-HE detergent creates foam that triggers a false water-level condition",
    "The water-level or leakage sensor and its wiring require diagnosis",
  ],
  quickChecks: [
    {
      title: "Stop and look for moisture",
      detail: "Turn the washer off, protect the electrical area, and inspect the floor, hoses, dispenser, door seal, and accessible filter cap.",
      level: "safe",
    },
    {
      title: "Check visible hose routing",
      detail: "Confirm the supply and drain hoses are not kinked and that the drain hose remains secured in the manufacturer's routing position.",
      level: "safe",
    },
    {
      title: "Run one empty cycle with no additives",
      detail: "If suds appear without adding detergent or softener, continue empty rinses until the residue clears and reduce future HE detergent.",
      level: "caution",
    },
    {
      title: "Request service if the code returns dry",
      detail: "A repeated LC or LE with no visible leak or suds requires model-specific leak-sensor, level-sensor, hose, wiring, or tub diagnosis.",
      level: "stop",
    },
  ],
  decisionTitle: "What do you observe with LC or LE?",
  observations: [
    {
      label: "Water is visible under or behind the washer",
      advice: "Close the water taps, disconnect power when safe, and correct the leak before running another cycle.",
    },
    {
      label: "No leak is visible but an empty cycle makes suds",
      advice: "Detergent residue or non-HE detergent is the likely trigger. Run empty cycles without additives until the foam clears.",
    },
    {
      label: "The drain hose is low, loose, or kinked",
      advice: "Restore the documented routing and holder position; incorrect installation can create siphoning or water-level errors.",
    },
    {
      label: "The washer is dry and the code returns",
      advice: "Record the exact code and full model number, then arrange sensor, hose, wiring, or internal leak diagnosis.",
    },
  ],
  whenToStop: [
    "Water is near the outlet, plug, motor, control panel, or internal wiring",
    "A supply hose, tub, pump, or internal connection is visibly leaking",
    "The code returns after one dry, detergent-free verification cycle",
  ],
  faq: [
    {
      question: "What does LC or LE mean on a Samsung washing machine?",
      answer: "On supported Samsung washers, these displays indicate a water-level or leakage condition. The exact wording and code family vary by model.",
    },
    {
      question: "Can too much detergent cause Samsung LC or LE?",
      answer: "Yes. Samsung instructs users to run an empty cycle with no additives; suds appearing during that test indicate detergent residue or incorrect detergent use.",
    },
    {
      question: "Should I keep resetting the washer?",
      answer: "No. A reset does not repair a leak, hose problem, foam condition, or failed sensor, and repeated resets can erase useful error history.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "lc error in samsung washing machine",
    "samsung washer le error",
    "samsung washer lc1",
    "water leak",
    "low water level",
  ],
  errorCode: "LC / LC1 / LE / LE1 / 1E / 1C",
  aliases: ["LC", "LC1", "LE", "LE1", "1E", "1C", "1 LC", "1 1C"],
  appliesTo: "Selected Samsung front-load and top-load washing machine model families",
  modelNote: modelWarning,
  sources: [
    {
      label: "Samsung USA: washing machine information and error codes",
      url: "https://www.samsung.com/us/support/troubleshoot/TSG10000997/",
    },
    {
      label: "Samsung USA: how to reset a washing machine",
      url: "https://www.samsung.com/us/support/answer/ANS10004807/",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
