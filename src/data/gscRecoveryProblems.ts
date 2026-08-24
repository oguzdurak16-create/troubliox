import type { Problem } from "./problems";
import { boschWasherE36ErrorProblem } from "./gsc-recovery/bosch-washer-e36-error";
import { boschWasherF29ErrorProblem } from "./gsc-recovery/bosch-washer-f29-error";
import { netflixBlackScreenWithSoundProblem } from "./gsc-recovery/netflix-black-screen-with-sound";
import { samsungWasher5dErrorProblem } from "./gsc-recovery/samsung-washer-5d-error";
import { samsungWasherLcLeErrorProblem } from "./gsc-recovery/samsung-washer-lc-le-error";
import { whirlpoolWasherRlCodeProblem } from "./gsc-recovery/whirlpool-washer-rl-code";
import { airpodsConnectedButNoSoundProblem } from "./gsc-recovery/airpods-connected-but-no-sound";
import { lgWasherCdErrorProblem } from "./gsc-recovery/lg-washer-cd-error";
import { lgWasherDheErrorProblem } from "./gsc-recovery/lg-washer-dhe-error";
import { androidBluetoothConnectedNoSoundProblem } from "./gsc-recovery/android-bluetooth-connected-no-sound";

export const gscRecoveryProblems: Problem[] = [
  boschWasherE36ErrorProblem,
  boschWasherF29ErrorProblem,
  netflixBlackScreenWithSoundProblem,
  samsungWasher5dErrorProblem,
  samsungWasherLcLeErrorProblem,
  whirlpoolWasherRlCodeProblem,
  airpodsConnectedButNoSoundProblem,
  lgWasherCdErrorProblem,
  lgWasherDheErrorProblem,
  androidBluetoothConnectedNoSoundProblem,
];

export function mergeGscRecoveryProblems(items: Problem[]) {
  const replacements = new Map(gscRecoveryProblems.map((problem) => [problem.slug, problem]));
  const merged = items.map((problem) => replacements.get(problem.slug) || problem);

  for (const curated of gscRecoveryProblems) {
    if (!merged.some((problem) => problem.slug === curated.slug)) merged.push(curated);
  }

  return merged;
}
