import type { Problem } from "../problems";

const modelWarning =
  "Error-code meanings and safe procedures can vary by model, market, and production year. Match the complete model number to the official manual before opening covers, ordering parts, or using service procedures.";

export const lgWasherCdErrorProblem: Problem = {
  slug: "lg-washer-cd-error",
  title: "LG washer Cd display: cool-down mode, not a product error",
  shortTitle: "LG washer Cd display",
  summary:
    "LG states that Cd is not a failure code on supported washer-dryer combo units. It means the appliance is in cool-down mode after drying and may tumble the load without heat to reduce wrinkles until you press a permitted button or the routine ends.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "LG",
  brandSlug: "lg",
  device: "Washing machine",
  updated: "2026-07-27",
  readTime: 3,
  likelyCauses: [
    "The washer-dryer combo has entered its normal post-dry cool-down routine",
    "The load has not been removed after the drying cycle",
    "The user is reading Cd as an error code rather than a status message",
    "A different display is being mistaken for Cd on a model without this function",
  ],
  quickChecks: [
    {
      title: "Confirm the display is Cd",
      detail: "Check the letter shapes and full model manual before treating the message as a fault.",
      level: "safe",
    },
    {
      title: "Press a permitted button once",
      detail: "LG says pressing any button except a cycle-selection button can clear Cd; the door may open about two minutes later.",
      level: "safe",
    },
    {
      title: "Remove the load when the door releases",
      detail: "The cool-down routine periodically tumbles without heat to rearrange clothing and reduce wrinkles.",
      level: "safe",
    },
    {
      title: "Request help if Cd never clears",
      detail: "If the exact model's normal cool-down behavior ends but the message and locked door remain, use LG support.",
      level: "stop",
    },
  ],
  decisionTitle: "When does Cd appear?",
  observations: [
    {
      label: "Cd appears during or after drying",
      advice: "This matches LG's normal cool-down status on supported combo units.",
    },
    {
      label: "The drum turns occasionally with no heat",
      advice: "That is the wrinkle-reduction cool-down routine and can continue for up to four hours.",
    },
    {
      label: "Cd appears on a washer without a drying function",
      advice: "Verify the display and model manual because the characters may be misread or defined differently.",
    },
  ],
  whenToStop: [
    "The appliance smells burned, overheats, or trips the circuit",
    "The door remains locked after the documented cool-down and release time",
    "The display is not actually Cd or the model manual assigns a different meaning",
  ],
  faq: [
    {
      question: "What does Cd mean on an LG washing machine?",
      answer: "On supported LG washer-dryer combo units, Cd means cool-down mode. LG says it is not a product failure or error.",
    },
    {
      question: "How long can LG Cd stay on the display?",
      answer: "LG says the unit can tumble periodically without heat for up to four hours unless a permitted button is pressed and the clothes are removed.",
    },
    {
      question: "Why will the door not open immediately after Cd?",
      answer: "After clearing Cd, the door can take about two minutes to release while the appliance completes its safety sequence.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "what does cd mean on lg washer dryer",
    "lg washer cd",
    "cd message lg washing machine",
    "cool down mode",
    "washer dryer combo",
  ],
  errorCode: "Cd",
  aliases: ["Cd", "CD", "cD"],
  appliesTo: "Selected LG washer-dryer combo models with a drying cool-down routine",
  modelNote: modelWarning,
  sources: [
    {
      label: "LG USA: troubleshooting a Cd display message",
      url: "https://www.lg.com/us/support/help-library/lg-washer-troubleshooting-an-cd-display-message--1337695311691",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
