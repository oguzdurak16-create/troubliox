import type { Problem } from "../problems";

export const airpodsConnectedButNoSoundProblem: Problem = {
  slug: "airpods-connected-but-no-sound",
  title: "AirPods Connected but No Sound",
  shortTitle: "AirPods connected but no sound",
  summary:
    "AirPods connected but no sound? First select AirPods as the active audio output and raise the device volume. Then confirm both earbuds are charging, test each side, and re-pair or reset only if those basic checks fail.",
  category: "TV & entertainment",
  categorySlug: "tv-entertainment",
  brand: "Apple",
  brandSlug: "apple",
  device: "AirPods",
  updated: "2026-08-14",
  readTime: 5,
  likelyCauses: [
    "Audio is still routed to the phone, computer speakers, car, TV, or another Bluetooth device",
    "One or both AirPods are discharged or not making contact in the charging case",
    "The pairing state is stale even though the device reports Connected",
    "Speaker mesh debris or left-right balance settings reduce or remove sound from one side",
    "The AirPods or connected device require software, firmware, or hardware service",
  ],
  quickChecks: [
    {
      title: "Select AirPods as the active output",
      detail: "Open the device's audio-output or AirPlay menu, choose the AirPods explicitly, and confirm the media volume is raised.",
      level: "safe",
    },
    {
      title: "Check charge for both AirPods",
      detail: "Place both earbuds in the charged case for 30 seconds, open it near the device, and verify that each AirPod reports a charge level.",
      level: "safe",
    },
    {
      title: "Test each AirPod separately",
      detail: "Keep the other AirPod in the case and play audio to identify whether the failure affects one side or the complete pair.",
      level: "safe",
    },
    {
      title: "Re-pair before resetting",
      detail: "Close the lid for 15 seconds, reopen it, reconnect, and use Apple's model-specific reset procedure only if normal pairing still fails.",
      level: "caution",
    },
  ],
  decisionTitle: "Which AirPods audio symptom matches?",
  observations: [
    {
      label: "Both AirPods are silent but show Connected",
      advice: "Select them in the audio-output menu and check whether another paired device has taken the media stream.",
    },
    {
      label: "Only one AirPod is silent",
      advice: "Verify individual charge, test that side alone, inspect the speaker mesh, and confirm the accessibility balance is centered.",
    },
    {
      label: "Calls work but music is silent",
      advice: "The device may be using a call profile while media is routed elsewhere; reselect AirPods as the media output.",
    },
    {
      label: "AirPods disappear or repeatedly reconnect",
      advice: "Update the connected Apple device, re-pair the AirPods, then follow Apple's model-specific reset flow.",
    },
  ],
  whenToStop: [
    "An AirPod or the case is swollen, unusually hot, cracked, wet, or smells chemical",
    "Cleaning would require liquid or a sharp object inside the speaker or charging contacts",
    "One side remains silent after charging, re-pairing, balance checks, and the official reset",
  ],
  faq: [
    {
      question: "Why are my AirPods connected but not playing sound?",
      answer: "The most common first check is audio routing: select AirPods in the output menu and ensure the device volume is up. Charge, pairing, and one-sided hardware issues come next.",
    },
    {
      question: "Why does only one AirPod have sound?",
      answer: "Apple recommends confirming both earbuds charge, testing the silent AirPod by itself, inspecting the speaker mesh, and checking that left-right balance is centered.",
    },
    {
      question: "Do I need to reset AirPods immediately?",
      answer: "No. First select the correct output, check volume and charge, test each side, and re-pair. Reset only with Apple's instructions if those checks fail.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "airpods connected but no sound",
    "airpod no sound but connected",
    "airpods connected but not playing audio",
    "airpods 4 connected but no sound",
    "airpods no audio",
    "audio output",
    "one airpod not working",
  ],
  appliesTo: "AirPods and AirPods Pro paired with supported Apple devices; menu names vary on other platforms",
  modelNote:
    "Pairing and reset steps differ for AirPods 4, AirPods Pro generations, AirPods Max, and earlier charging cases. Use Apple's instructions for the exact model.",
  sources: [
    {
      label: "Apple Support: If AirPods or AirPods Pro will not connect",
      url: "https://support.apple.com/en-us/118576",
    },
    {
      label: "Apple Support: If the left or right AirPod is not working",
      url: "https://support.apple.com/en-us/100494",
    },
  ],
  contentKind: "symptom",
  featured: true,
};
