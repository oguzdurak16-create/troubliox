import type { Problem } from "../problems";

const modelWarning =
  "Error-code meanings and safe procedures can vary by model, market, and production year. Match the complete model number to the official manual before opening covers, ordering parts, or using service procedures.";

export const lgWasherDheErrorProblem: Problem = {
  slug: "lg-washer-dhe-error",
  title: "LG washer dHE error: a temporary drying-function fault on combo models",
  shortTitle: "LG washer dHE error",
  summary:
    "LG identifies dHE as a temporary dry-function error on supported washer-dryer combo units. Power the appliance off, isolate it at the plug or breaker for about ten seconds, restore power, and retry once; repeated dHE requires model-specific service.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "LG",
  brandSlug: "lg",
  device: "Washing machine",
  updated: "2026-07-27",
  readTime: 3,
  likelyCauses: [
    "The drying function has entered a temporary control fault state",
    "A brief power or communication interruption affected the dry cycle",
    "A fan, heater, temperature sensor, wiring, or control component requires diagnosis",
    "The display or appliance type has been misidentified",
  ],
  quickChecks: [
    {
      title: "Confirm the appliance has a drying function",
      detail: "dHE applies to supported LG washer-dryer combinations; verify the full model and exact display.",
      level: "safe",
    },
    {
      title: "Power the unit off completely",
      detail: "Turn it off, isolate power at the plug or circuit breaker for about ten seconds, then restore power.",
      level: "safe",
    },
    {
      title: "Retry one cycle",
      detail: "Start a normal cycle once after power is restored and watch whether dHE returns.",
      level: "safe",
    },
    {
      title: "Stop after one failed retry",
      detail: "Repeated dHE can require dry-system fan, heater, sensor, wiring, or control diagnosis by qualified service.",
      level: "stop",
    },
  ],
  decisionTitle: "What happens after the dHE power cycle?",
  observations: [
    {
      label: "The code clears and drying works normally",
      advice: "The fault may have been temporary. Monitor the next cycles for heat, airflow, odor, and repeat codes.",
    },
    {
      label: "dHE returns immediately",
      advice: "Record the model and code, stop repeated resets, and arrange service for the drying system.",
    },
    {
      label: "There is no heat or airflow",
      advice: "Do not open the cabinet; fan, heater, thermal protection, sensor, or control testing is required.",
    },
    {
      label: "The appliance overheats or smells burned",
      advice: "Disconnect power and do not run another drying cycle.",
    },
  ],
  whenToStop: [
    "There is a burning smell, smoke, unusual heat, or repeated breaker trip",
    "dHE returns after the single official power-cycle attempt",
    "The fan, heater, sensor, wiring, or cabinet would need to be accessed",
  ],
  faq: [
    {
      question: "What does dHE mean on an LG washer?",
      answer: "LG says dHE indicates a temporary dry-function error on supported washer-dryer combo units.",
    },
    {
      question: "How do I reset LG dHE?",
      answer: "LG instructs users to power the unit off, turn off the breaker or unplug it for about ten seconds, restore power, and restart once.",
    },
    {
      question: "What if LG dHE comes back?",
      answer: "Do not keep resetting it. Repeated dHE requires model-specific service for the drying system and its controls.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "dhe lg washing machine",
    "lg washer dhe error",
    "dhe error code lg washer",
    "dry function error",
    "washer dryer combo",
  ],
  errorCode: "dHE",
  aliases: ["dHE", "DHE", "dHe"],
  appliesTo: "Selected LG washer-dryer combo models",
  modelNote: modelWarning,
  sources: [
    {
      label: "LG USA: troubleshooting a dHE error code",
      url: "https://www.lg.com/us/support/help-library/lg-washer-troubleshooting-an-dhe-error-code--1337695211091",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
