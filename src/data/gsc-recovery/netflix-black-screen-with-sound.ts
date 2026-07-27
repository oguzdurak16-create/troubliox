import type { Problem } from "../problems";

export const netflixBlackScreenWithSoundProblem: Problem = {
  slug: "netflix-black-screen-with-sound",
  title: "Netflix black screen with sound: isolate the device, app, browser, or HDMI path",
  shortTitle: "Netflix black screen with sound",
  summary:
    "When Netflix audio plays but video is black, Netflix says the fault usually sits in the playback device or video connection. Restart the device first, then separate an app or browser problem from an HDMI, display, driver, mirroring, or title-specific problem.",
  category: "TV & entertainment",
  categorySlug: "tv-entertainment",
  brand: "Netflix",
  brandSlug: "netflix",
  device: "Netflix playback device",
  updated: "2026-07-27",
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
      title: "Test another title and another app",
      detail: "If only one Netflix title fails, report that title. If every video app is black, focus on the device or display path.",
      level: "safe",
    },
    {
      title: "Fully restart the playback device",
      detail: "Turn it off completely or unplug it as Netflix instructs, then reconnect and test before changing settings.",
      level: "safe",
    },
    {
      title: "Bypass the video connection chain",
      detail: "For TV-connected devices, connect directly to the TV, try another HDMI port, reverse the cable ends, or test another cable.",
      level: "safe",
    },
    {
      title: "Update the correct software layer",
      detail: "Update the browser, device firmware, operating system, or supported graphics driver for the device that actually renders Netflix.",
      level: "caution",
    },
  ],
  decisionTitle: "Where does the black screen occur?",
  observations: [
    {
      label: "Sound works and all Netflix titles are black",
      advice: "Restart the device, then focus on the app, browser, graphics driver, firmware, or HDMI path.",
    },
    {
      label: "Only one title is affected",
      advice: "Use Netflix Viewing Activity to report the title instead of resetting the whole device.",
    },
    {
      label: "Netflix works on the built-in TV app but not an external player",
      advice: "The external device, receiver, HDMI cable, port, output format, or HDCP handshake is the likely difference.",
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
      question: "Why does Netflix have sound but no picture?",
      answer: "Netflix says this usually means the device or a video cable stopped Netflix from displaying video, although browser, driver, firmware, mirroring, and title-specific problems can produce the same symptom.",
    },
    {
      question: "Should I reinstall Netflix immediately?",
      answer: "No. First test another title, restart the device, and isolate the display or HDMI path. Reinstallation is device-specific and can remove downloads or sign-in data.",
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
    "netflix no picture audio works",
    "netflix black screen",
    "hdmi",
    "video driver",
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
