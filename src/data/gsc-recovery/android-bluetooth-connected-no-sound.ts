import type { Problem } from "../problems";

export const androidBluetoothConnectedNoSoundProblem: Problem = {
  slug: "android-bluetooth-connected-no-sound",
  title: "Bluetooth connected but no sound on Android: enable Media audio and select the output",
  shortTitle: "Android Bluetooth connected, no sound",
  summary:
    "When Android says a Bluetooth speaker, headset, or car is connected but music is silent, confirm volume on both devices, select the accessory as the media output, and enable Media audio in the saved-device settings before removing the pairing or resetting networks.",
  category: "Phones & tablets",
  categorySlug: "phones-tablets",
  brand: "Android",
  brandSlug: "android",
  device: "Android phone",
  updated: "2026-07-27",
  readTime: 5,
  likelyCauses: [
    "Media audio is disabled for the paired accessory even though calls can connect",
    "Audio is routed to the phone speaker or another paired Bluetooth device",
    "The phone, car, speaker, or headset volume is muted or independently low",
    "The accessory supports calls but not Bluetooth music playback",
    "The pairing profile or manufacturer firmware is stuck or incompatible",
  ],
  quickChecks: [
    {
      title: "Raise volume on both devices",
      detail: "Check the phone's media volume and the independent volume control on the car, speaker, or headset.",
      level: "safe",
    },
    {
      title: "Enable Media audio",
      detail: "Open Connected devices, select the accessory settings, and turn on Media audio. Menu names vary by Android manufacturer.",
      level: "safe",
    },
    {
      title: "Select the Bluetooth output explicitly",
      detail: "Use the media-output picker and confirm another paired device is not receiving the stream.",
      level: "safe",
    },
    {
      title: "Restart and re-pair only if needed",
      detail: "Restart both devices, then forget and pair the accessory again before considering a broader network-settings reset.",
      level: "caution",
    },
  ],
  decisionTitle: "Which Bluetooth audio behavior do you see?",
  observations: [
    {
      label: "Calls work but music does not",
      advice: "The phone-call profile is active while Media audio may be disabled or unsupported. Check the accessory settings.",
    },
    {
      label: "The player moves but sound comes from the phone",
      advice: "Select the connected accessory in the media-output picker and disconnect competing audio devices.",
    },
    {
      label: "No paired accessory plays media",
      advice: "Restart the phone, install system updates, and contact the phone manufacturer if re-pairing several known-good devices fails.",
    },
    {
      label: "Only one car or accessory is affected",
      advice: "Check that device's manual for Bluetooth music support, input selection, pairing limits, and firmware updates.",
    },
  ],
  whenToStop: [
    "The phone or accessory becomes hot, swollen, wet, damaged, or smells burned",
    "The device is managed by work, school, or vehicle policy",
    "Every known-good accessory fails after official Android checks and re-pairing",
  ],
  faq: [
    {
      question: "Why is Bluetooth connected but there is no music on Android?",
      answer: "Google's Android guidance says to check volume, make sure another paired device is not playing the audio, and enable Media audio for the saved accessory.",
    },
    {
      question: "Why do Bluetooth calls work but music does not?",
      answer: "Calls and media use different Bluetooth profiles. Phone audio may be enabled while Media audio is disabled or unsupported.",
    },
    {
      question: "Should I factory-reset my Android phone for Bluetooth audio?",
      answer: "No. Start with output selection, Media audio, volume, restart, and re-pairing. A factory reset is disproportionate and may not fix accessory or hardware incompatibility.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "bluetooth connected but no sound android",
    "android bluetooth no audio",
    "media audio",
    "car bluetooth no music",
    "speaker connected no sound",
  ],
  appliesTo: "Android phones and tablets; settings labels vary by manufacturer and Android version",
  modelNote:
    "Android manufacturers customize Bluetooth menus and firmware. Use the device maker's support instructions when Google's generic menu path does not match.",
  sources: [
    {
      label: "Google Android Help: Fix Bluetooth problems",
      url: "https://support.google.com/android/answer/9769184?hl=en",
    },
    {
      label: "Google Android Help: Find and set up Bluetooth devices",
      url: "https://support.google.com/android/answer/9417604?hl=en",
    },
  ],
  contentKind: "symptom",
  featured: true,
};
