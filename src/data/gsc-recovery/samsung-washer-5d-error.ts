import type { Problem } from "../problems";

const modelWarning =
  "Samsung display characters and error-code wording vary by model and region. Confirm the complete model and the exact characters shown before using service procedures.";

export const samsungWasher5dErrorProblem: Problem = {
  slug: "samsung-washer-5d-error",
  title: "Samsung washer 5D error: too many suds, not the 5E drain code",
  shortTitle: "Samsung washer 5D error",
  summary:
    "Samsung 5d is a display variant of Sd or SUd on supported washers and means excessive suds were detected. The washer normally pauses and extends rinsing until foam falls, then continues automatically; 5E or 5C is a different drainage fault.",
  category: "Home appliances",
  categorySlug: "home-appliances",
  brand: "Samsung",
  brandSlug: "samsung",
  device: "Washing machine",
  updated: "2026-08-24",
  readTime: 4,
  likelyCauses: [
    "Too much detergent was used for the load size or water conditions",
    "Non-HE detergent was used in a high-efficiency washer",
    "Concentrated detergent was dosed like a standard formula",
    "Detergent residue or slow drainage keeps foam in the washer",
  ],
  quickChecks: [
    {
      title: "Let the washer finish its suds routine",
      detail: "Do not immediately cancel the cycle. Samsung says supported washers pause so suds can dissipate and then continue automatically.",
      level: "safe",
    },
    {
      title: "Reduce detergent on the next load",
      detail: "Use HE detergent when required and follow the concentration markings rather than filling the dispenser by habit.",
      level: "safe",
    },
    {
      title: "Run an empty rinse if residue remains",
      detail: "After the cycle finishes, run an empty rinse without detergent if visible foam or detergent residue remains.",
      level: "safe",
    },
    {
      title: "Check drainage only if suds never clear",
      detail: "A restricted user-accessible drain filter can prolong foam. Follow the exact model manual before opening any drain point.",
      level: "caution",
    },
  ],
  decisionTitle: "Does the display say 5d/Sd or 5E/5C?",
  observations: [
    {
      label: "The washer pauses and later resumes",
      advice: "That matches Samsung's normal excessive-suds routine. Reduce detergent on future loads.",
    },
    {
      label: "Heavy foam is visible",
      advice: "Do not add any more products. Let the washer rinse the suds away and run an empty rinse afterward if needed.",
    },
    {
      label: "The display is actually 5E or 5C",
      advice: "Treat it as a drainage code, not the 5d/Sd excessive-suds message.",
    },
    {
      label: "5d returns with no detergent or foam",
      advice: "Verify drainage and the exact model manual, then arrange service if the message persists.",
    },
  ],
  whenToStop: [
    "Foam or water leaks onto the floor or electrical areas",
    "The washer cannot drain or the pump smells burned",
    "The message returns on detergent-free tests after safe drainage checks",
  ],
  faq: [
    {
      question: "What does 5D mean on a Samsung washing machine?",
      answer: "On supported Samsung washers, 5d is a display variant of Sd or SUd and means the machine detected excessive suds.",
    },
    {
      question: "How do I clear Samsung washer 5D?",
      answer: "Usually let the washer complete its automatic suds-reduction routine. Then reduce detergent on future loads and run an empty rinse if residue remains.",
    },
    {
      question: "Is Samsung 5D the same as 5E?",
      answer: "No. 5d/Sd/SUd indicates excessive suds; 5E or 5C indicates a drainage problem. Seven-segment displays can make them easy to confuse.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "5d error in samsung washing machine",
    "samsung washing machine 5d error",
    "samsung washer 5d",
    "samsung sd error",
    "samsung sud error",
    "5d vs 5e",
    "excessive suds",
  ],
  errorCode: "SUd / 5UD / Sd / 5d / SUdS / 5Ud5",
  aliases: ["SUd", "5UD", "Sd", "5d", "SUdS", "5Ud5"],
  appliesTo: "Selected Samsung washing machine model families",
  modelNote: modelWarning,
  sources: [
    {
      label: "Samsung: Washing machine information and error codes",
      url: "https://www.samsung.com/latin_en/support/home-appliances/samsung-washing-machine-error-codes-and-information/",
    },
    {
      label: "Samsung: Excessive suds and 5d variants",
      url: "https://www.samsung.com/sg/support/home-appliances/when-washing-machine-has-excessive-suds/",
    },
  ],
  contentKind: "error-code",
  featured: true,
};
