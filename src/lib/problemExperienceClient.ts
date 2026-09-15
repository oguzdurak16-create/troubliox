const PROBLEM_EXPERIENCE_URL = "https://ivvzpzmojfhtlfapfrxf.supabase.co/functions/v1/troublio-problem-experience";
const PUBLISHABLE_KEY = "sb_publishable_SNvWSL7fDWJMWe1YoQUE6Q_pGJRVzhv";

export type ProblemExperienceResult = {
  ok?: boolean;
  created?: boolean;
  updated?: boolean;
  duplicate?: boolean;
  resolved?: boolean;
  error?: string;
};

export async function submitProblemExperience(payload: {
  slug: string;
  contributorId?: string;
  model: string;
  resolved: boolean;
  solutionLabel?: string;
}) {
  const response = await fetch(PROBLEM_EXPERIENCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as ProblemExperienceResult;
  return { response, result };
}
