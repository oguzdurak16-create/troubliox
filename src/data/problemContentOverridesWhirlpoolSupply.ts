import type { Problem } from "./problems";

const WHIRLPOOL_F8E5_SOURCE = {
  label: "Whirlpool Product Help — Laundry Tower F8E5",
  url: "https://producthelp.whirlpool.com/Laundry/Stacked_Laundry_Center/Laundry_Tower/Error_Codes/Washer/F8E5_Error_Code",
};

const WHIRLPOOL_HC_SOURCE = {
  label: "Whirlpool Product Help — top-load washer HC",
  url: "https://producthelp.whirlpool.com/Laundry/Washers/Top_Load_Washer/Error_Codes_or_Flashing_Lights/Other_Error_Codes/HC_-_Error_Code",
};

const overrides: Record<string, Partial<Problem>> = {
  "whirlpool-washer-f8e5-error": {
    title: "Whirlpool Laundry Tower washer F8E5: water supplies reversed",
    shortTitle: "Whirlpool Laundry Tower F8E5",
    summary: "Whirlpool documents F8E5 on supported Laundry Tower washer sections as a reversed water-supply condition. The first checks are installation-specific: verify hot-to-hot and cold-to-cold connections, then reset the control for five minutes.",
    likelyCauses: [
      "The hot supply hose is connected to the cold inlet and the cold hose to the hot inlet",
      "The Laundry Tower was recently installed, moved, or reconnected with the inlet lines crossed",
      "The control still holds the installation fault after the hose connections are corrected",
      "The exact Laundry Tower model uses a different service definition and needs its model-specific documentation checked",
    ],
    quickChecks: [
      { title: "Treat F8E5 as an installation check first", detail: "On Whirlpool's supported Laundry Tower guidance, F8E5 is specifically listed as Water Supply Reversed. Do not begin by replacing the inlet valve or control board.", level: "safe" },
      { title: "Trace each supply line end to end", detail: "Turn off the faucets, then confirm the hot household line reaches the washer's hot inlet and the cold line reaches the cold inlet. Correct crossed lines before retrying.", level: "caution" },
      { title: "Reset the Laundry Tower control for five minutes", detail: "After correcting the water connections, disconnect the appliance from power for five minutes as Whirlpool instructs, then restore power.", level: "safe" },
      { title: "Schedule service if F8E5 returns", detail: "A persistent code after verified plumbing and the five-minute reset needs model-specific diagnosis rather than repeated hose changes or resets.", level: "stop" },
    ],
    decisionTitle: "Was F8E5 reported by a Whirlpool Laundry Tower after installation or reconnection?",
    observations: [
      { label: "The hoses are visibly crossed", advice: "Turn off both water supplies, correct the hot/cold connections, check for leaks after reopening the valves, then perform the five-minute power reset." },
      { label: "The code appeared immediately after installation or moving the unit", advice: "Prioritize tracing the supply lines. F8E5 is explicitly an installation-related reversed-supply code in Whirlpool's Laundry Tower guidance." },
      { label: "Connections are correct but F8E5 returns", advice: "Stop treating it as a simple installation correction. Verify the exact model documentation and arrange service for sensing/control diagnosis." },
    ],
    whenToStop: [
      "A hose, valve, fitting, or inlet begins leaking while correcting the installation",
      "The code returns after the supplies are verified and the five-minute reset is completed",
      "Diagnosis would require internal valve, sensor, wiring, or control-board testing",
    ],
    faq: [
      { question: "What does Whirlpool Laundry Tower F8E5 mean?", answer: "Whirlpool's current Laundry Tower washer guidance lists F8E5 as Water Supply Reversed and tells users to verify hot-to-hot and cold-to-cold connections, then cycle power." },
      { question: "Is F8E5 the same display as HC on every Whirlpool washer?", answer: "They can describe the same underlying crossed-hose installation problem on different Whirlpool product families, but they are different product-family code conventions. F8E5 is documented here for Laundry Tower washer sections; HC is documented on supported top-load washers." },
      { question: "How long should power be removed for Whirlpool F8E5?", answer: "Whirlpool's Laundry Tower F8E5 guidance specifies disconnecting the washer control from power for five minutes before retrying." },
    ],
    appliesTo: "Selected Whirlpool Laundry Tower / stacked laundry washer sections that use F8E5 for reversed water supply",
    modelNote: "This F8E5 definition is intentionally scoped to Whirlpool Laundry Tower guidance. Do not assume every Whirlpool appliance uses F8E5 for the same condition; confirm the complete model number before parts diagnosis.",
    sources: [WHIRLPOOL_F8E5_SOURCE],
    updated: "2026-09-04",
  },
  "whirlpool-washer-hc-error": {
    title: "Whirlpool top-load washer HC: hot and cold inlet hoses reversed",
    shortTitle: "Whirlpool top-load washer HC",
    summary: "On supported Whirlpool top-load washers, HC is an end-of-cycle installation warning that the hot and cold inlet hoses are reversed. Whirlpool tells users to shut off the water, swap the connections, and run another cycle to verify the correction.",
    likelyCauses: [
      "The hot and cold inlet hoses were connected to the opposite washer inlets",
      "The household lines were mislabeled or crossed during a recent installation or hose replacement",
      "The washer detects water-temperature behavior inconsistent with the selected inlet connections",
      "A model-specific issue remains even though the plumbing is correctly connected",
    ],
    quickChecks: [
      { title: "Notice when HC appears", detail: "Whirlpool says HC can appear at the end of the wash cycle as the washer reports reversed hot/cold connections; this timing is part of the top-load HC behavior.", level: "safe" },
      { title: "Shut off both water supplies before swapping hoses", detail: "Do not loosen pressurized fittings. Once water is off, connect the cold household line to the cold inlet and the hot line to the hot inlet.", level: "caution" },
      { title: "Reopen the valves and check every fitting for leaks", detail: "Before running the verification cycle, make sure the hose washers seat correctly and no connection drips under pressure.", level: "safe" },
      { title: "Run another cycle to verify the correction", detail: "Whirlpool's HC guidance calls for another cycle after the hoses are corrected. If HC returns with confirmed plumbing, use the exact model manual or service support.", level: "safe" },
    ],
    decisionTitle: "Does HC disappear after correcting the top-load washer's inlet hoses and running a verification cycle?",
    observations: [
      { label: "HC appears only at the end of a cycle", advice: "That matches Whirlpool's documented top-load behavior for reversed hot/cold hoses. Correct the connections and run another cycle." },
      { label: "The household hot/cold lines are hard to identify", advice: "Do not guess. Verify which faucet is actually hot and which is cold before reconnecting the washer." },
      { label: "HC returns with correctly traced hoses", advice: "Confirm the exact model's code definition and arrange diagnosis; a temperature-sensing or control issue may be mimicking the installation warning." },
    ],
    whenToStop: [
      "A supply fitting leaks or cannot be safely shut off",
      "The household hot/cold plumbing cannot be confidently identified",
      "HC persists after the connections are verified and a complete verification cycle is run",
    ],
    faq: [
      { question: "Why does Whirlpool HC appear at the end of the cycle?", answer: "Whirlpool's top-load guidance says the code is displayed at the end of the wash cycle to indicate the cold line is connected to the hot inlet and the hot line to the cold inlet." },
      { question: "What should I do after swapping the Whirlpool HC hoses?", answer: "Reopen the water, check the fittings for leaks, and run another cycle. Whirlpool specifically recommends another cycle to verify the hose installation is now correct." },
      { question: "Does HC automatically mean the inlet valve is bad?", answer: "No. Whirlpool's user guidance treats HC first as reversed inlet-hose installation. Internal diagnosis is appropriate only if the plumbing is verified and the warning persists." },
    ],
    appliesTo: "Selected Whirlpool top-load washing machines that display HC for reversed hot/cold inlet hoses",
    modelNote: "HC is documented here using Whirlpool top-load washer guidance. Other Whirlpool platforms can report reversed supply with different codes, including F8E5 on supported Laundry Tower models. Match the exact model before service work.",
    sources: [WHIRLPOOL_HC_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyWhirlpoolSupplyProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
