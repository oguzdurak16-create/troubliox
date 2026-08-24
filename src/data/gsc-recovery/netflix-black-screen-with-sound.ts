import type { Problem } from "../problems";

export const netflixBlackScreenWithSoundProblem: Problem = {
  slug: "netflix-black-screen-with-sound",
  title: "Netflix black screen with sound: restart the device, then check HDMI or video output",
  shortTitle: "Netflix black screen with sound",
  summary:
    "If Netflix has sound but the screen is black, Netflix says the problem usually comes from the playback device or the video connection. Restart the device first; on TV-connected devices, test the HDMI cable, port, receiver path, and direct connection before reinstalling apps or resetting the whole device.",
  category: "TV & entertainment",
  categorySlug: "tv-entertainment",
  brand: "Netflix",
  brandSlug: "netflix",
  device: "Netflix playback device",
  updated: "2026-08-24",
  readTime: 5,
  likelyCauses: [
    "The streaming device or app has a temporary video-output state",
    "An HDMI cable, port, receiver, adapter, or display handshake is failing",
    "The browser, graphics driver, firmware, or operating system is outdated",
    "Unsupported screen mirroring or display-extension behavior is active",
    "Only one title has a Netflix-side video issue",
  ],
  quickChecks: [
    {
      title: "Restart the playback device completely",
      detail: "Netflix recommends unplugging TV-connected devices, pressing the power button once and waiting 1 minute, or leaving the device unplugged for 3 minutes before reconnecting.",
      level: "safe",
    },
    {
      title: "Test another Netflix title and another video app",
      detail: "If only one Netflix title fails, report that title. If every video app is black, focus on the device or display path.",
      level: "safe",
    },
    {
      title: "Bypass the HDMI connection chain",
      detail: "For TV-connected devices, connect directly to the TV, try another HDMI port, reverse the cable ends, or test another HDMI cable.",
      level: "safe",
    },
    {
      title: "Update the software layer that renders video",
      detail: "Update the device firmware, operating system, supported browser, or graphics driver only after the restart and connection tests.",
      level: "caution",
    },
  ],
  decisionTitle: "Where does the Netflix black screen occur?",
  observations: [
    {
      label: "Sound works and every Netflix title is black",
      advice: "Restart the device, then focus on the app, browser, graphics driver, firmware, or HDMI path.",
    },
    {
      label: "Only one title is affected",
      advice: "Report that title through Netflix rather than resetting the whole device.",
    },
    {
      label: "Netflix works on the built-in TV app but not an external player",
      advice: "The external device, receiver, HDMI cable, port, output format, or video handshake is the likely difference.",
    },
    {
      label: "The problem appears only while mirroring",
      advice: "Stop mirroring and use a supported Netflix app or direct connection; some mirroring methods are not supported.",
    },
  ],
  whenToStop: [
    "An HDMI port, adapter, cable, or power supply is hot, damaged, or smells burned",
    "Changing display or driver settings would affect a managed work or school computer",
    "The TV or device loses video outside Netflix as well",
  ],
  faq: [
    {
      question: "Why is Netflix showing a black screen with sound?",
      answer: "Netflix says sound with no picture usually points to the playback device or a video connection problem. Restart the device first, then isolate HDMI, display, app, browser, firmware, or driver issues.",
    },
    {
      question: "How do I fix Netflix black screen with sound on a TV?",
      answer: "Restart the TV or streaming device, then connect the player directly to the TV, try another HDMI port, reverse the cable ends, or test another HDMI cable. Netflix recommends those connection checks before broader resets.",
    },
    {
      question: "Should I reinstall Netflix immediately?",
      answer: "No. First restart the device, test another title, and isolate the display or HDMI path. Reinstallation is device-specific and can remove downloads or sign-in data.",
    },
    {
      question: "Why does Netflix work on another screen?",
      answer: "That points to the original display, HDMI port, cable, receiver, adapter, or video-output settings rather than the Netflix account.",
    },
  ],
  tags: [
    "gsc-opportunity",
    "priority-recovery",
    "netflix black screen with sound",
    "netflix black screen sound works",
    "netflix sound but no picture",
    "netflix no picture audio works",
    "netflix black screen on tv",
    "hdmi",
    "video output",
  ],
  appliesTo: "Netflix on TVs, streaming devices, phones, tablets, and supported computer browsers",
  modelNote:
    "Netflix provides different steps by device. Identify the exact TV, streaming device, phone, tablet, browser, or computer before resetting apps or changing video settings.",
  sources: [
    {
      label: "Netflix Help Center: Black screen with sound",
      url: "https://help.netflix.com/en/node/11634",
    },
    {
      label: "Netflix Help Center: Video issues with Netflix",
      url: "https://help.netflix.com/en/node/47922",
    },
  ],
  contentKind: "symptom",
  featured: true,
};
