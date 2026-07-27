import type { Problem } from "../problems";

const modelWarning =
  "Error-code meanings and safe procedures can vary by model, market, and production year. Match the complete model number to the official manual before opening covers, ordering parts, or using service procedures.";

export const boschWasherE36ErrorProblem: Problem = {
  slug: "bosch-washer-e36-error",
  title: "Bosch washing machine E36 error: check the drain hose, pump, and pump cap",
  shortTitle: "Bosch washer E36 error",
  summary:
    "Bosch E:36 -10 points to a drainage-path problem such as a blocked or kinked outlet hose, an incorrectly installed hose, a blocked drain pump, or a pump cap that is not fully seated. E:36 -25 or -26 specifically points to a blocked drain pump.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "Bosch",
  brandSlug: "bosch",
  device: "Washing machine",
  updated: "2026-07-27",
  readTime: 5,
  likelyCauses: [
    "The drain hose or household drain connection is blocked or kinked",
    "The drain hose is installed too high or uses an unsuitable extension",
    "The user-accessible drain pump or filter is obstructed",
    "The pump cap is not fully tightened or correctly seated",
    "Excess detergent has produced foam that interferes with draining",
  ],
  quickChecks: [
    {
      title: "Record the complete E36 suffix",
      detail: "Photograph whether the display shows E:36 -10, -25, or -26 because Bosch assigns more specific drainage guidance to the suffix.",
      level: "safe",
    },
    {
      title: "Inspect the visible drain hose",
      detail: "Disconnect power, straighten visible kinks, and confirm the hose is not crushed, extended incorrectly, or installed above the model limit.",
      level: "safe",
    },
    {
      title: "Clean only the user-accessible pump area",
      detail: "Follow the exact model manual, prepare for hot retained water, and confirm the pump cap is fully seated afterward.",
      level: "caution",
    },
    {
      title: "Stop if the pump cannot be cleared safely",
      detail: "Repeated E36 after the accessible hose and pump checks requires model-specific pump, wiring, or control diagnosis.",
      level: "stop",
    },
  ],
  decisionTitle: "Which E36 display and symptom do you have?",
  observations: [
    {
      label: "E:36 -10 with slow or no draining",
      advice: "Check the outlet hose, installation height, pump obstruction, pump cap, and detergent foam in that order.",
    },
    {
      label: "E:36 -25 or -26",
      advice: "Bosch identifies these suffixes as a blocked drain-pump condition. Use only the manual's user-accessible cleaning procedure.",
    },
    {
      label: "The washer drains but E36 returns",
      advice: "Photograph the exact suffix and arrange service; a partial blockage, pump fault, sensing issue, or control fault may remain.",
    },
    {
      label: "Water is hot or the door remains locked",
      advice: "Do not force the door or open the pump cap until the appliance is isolated and the manual's emergency-drain procedure is understood.",
    },
  ],
  whenToStop: [
    "Hot water cannot be drained without a scalding risk",
    "Water is leaking near the plug, outlet, motor, or control area",
    "The pump impeller is damaged, seized, or requires cabinet removal",
    "The code returns after the documented user-accessible checks",
  ],
  faq: [
    {
      question: "What does E36 -10 mean on a Bosch washing machine?",
      answer: "Bosch lists drainage-path causes including a blocked or kinked outlet hose, incorrect hose installation, a blocked pump, an incorrectly seated pump cap, and excessive detergent.",
    },
    {
      question: "What is the difference between Bosch E36 -10 and E36 -25 or -26?",
      answer: "E36 -10 has several possible drainage causes. Bosch identifies E36 -25 and E36 -26 more specifically as a blocked drain-pump condition.",
    },
    {
      question: "Can I clear Bosch E36 by unplugging the washer?",
      answer: "A power cycle can clear a one-time control state, but it will not remove a hose blockage, pump obstruction, installation problem, or incorrectly fitted pump cap.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "e36 -10 bosch",
    "bosch washer e36 error",
    "bosch washing machine e36 -10",
    "drain pump blocked",
    "washer not draining",
  ],
  errorCode: "E:36 -10 / E:36 -25 / E:36 -26",
  aliases: ["E36", "E:36 -10", "E36-10", "E:36 -25", "E:36 -26"],
  appliesTo: "Selected Bosch washing machine model families with five-character displays",
  modelNote: modelWarning,
  sources: [
    {
      label: "Bosch USA: washer error codes",
      url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
