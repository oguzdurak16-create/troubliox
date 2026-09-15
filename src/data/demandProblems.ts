import type { Problem } from "./problems";
import demandProblemData from "./demandProblems.json";

// Approved, source-backed guides generated from repeated Troublio user demand.
// Keep this feed empty until a private candidate draft passes review.
export const demandProblems: Problem[] = demandProblemData as Problem[];
