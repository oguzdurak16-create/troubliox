import type { Problem } from "./problems";
import { problems } from "./problems";

export type ContentHub = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  match: (problem: Problem) => boolean;
};

const textFor = (problem: Problem) => [
  problem.title,
  problem.shortTitle,
  problem.summary,
  problem.device,
  problem.category,
  problem.errorCode || "",
  problem.tags.join(" "),
].join(" ").toLowerCase();

const containsAny = (problem: Problem, terms: string[]) => {
  const text = textFor(problem);
  return terms.some((term) => text.includes(term));
};

export const deviceHubs: ContentHub[] = [
  {
    slug: "washing-machines",
    name: "Washing machines",
    title: "Washing machine troubleshooting",
    description: "Washing machine error codes and symptom guides for filling, draining, spinning, leaks, doors, motors, heaters, and controls.",
    intro: "Start with the exact display or visible symptom. Match the full model number before ordering parts because code meanings vary across product families.",
    match: (problem) => problem.device === "Washing machine",
  },
  {
    slug: "dishwashers",
    name: "Dishwashers",
    title: "Dishwasher troubleshooting",
    description: "Dishwasher error codes and symptom guides for filling, draining, cleaning, drying, leaks, pumps, sensors, and controls.",
    intro: "Use the exact code, cycle stage, water movement, and sound to narrow the fault without guessing the failed component.",
    match: (problem) => problem.device === "Dishwasher",
  },
  {
    slug: "printers",
    name: "Printers",
    title: "Printer troubleshooting",
    description: "Fix offline printers, stuck queues, paper-jam warnings, blank pages, print-quality problems, Wi-Fi discovery, and common printer codes.",
    intro: "First separate a printer hardware problem from a Windows, network, driver, or document problem by printing an internal test page.",
    match: (problem) => problem.categorySlug === "computers-printers" && containsAny(problem, ["printer", "printing", "spooler"]),
  },
  {
    slug: "windows-pcs",
    name: "Windows PCs",
    title: "Windows troubleshooting",
    description: "Windows Update codes, blue screens, Wi-Fi, Bluetooth, network sharing, application startup, and printing problems.",
    intro: "Record the complete error code and the exact action that triggered it. Similar-looking Windows codes can require very different repairs.",
    match: (problem) => problem.brandSlug === "microsoft" || containsAny(problem, ["windows 11", "windows update", "blue screen"]),
  },
  {
    slug: "routers-wifi",
    name: "Routers & Wi-Fi",
    title: "Router and Wi-Fi troubleshooting",
    description: "Diagnose no-internet connections, warning lights, weak rooms, disconnects, mesh nodes, DSL, fiber LOS, and router login problems.",
    intro: "Separate the local Wi-Fi link from the upstream internet connection. Signal bars alone do not prove that the router can reach the internet.",
    match: (problem) => problem.categorySlug === "internet-wifi",
  },
  {
    slug: "iphones",
    name: "iPhone",
    title: "iPhone troubleshooting",
    description: "iPhone startup, charging, Wi-Fi, texts, Bluetooth audio, microphone, camera, and heat problems.",
    intro: "Compare what works in Apple apps, third-party apps, Wi-Fi, mobile data, and external accessories before resetting the phone.",
    match: (problem) => containsAny(problem, ["iphone", "airpods"]),
  },
  {
    slug: "android-phones",
    name: "Android phones",
    title: "Android troubleshooting",
    description: "Android Wi-Fi, Play Store, SIM, battery, Bluetooth, camera, mobile-data, and startup problems.",
    intro: "Android menus differ by brand, but the diagnostic order remains the same: compare networks, permissions, account state, and hardware signs.",
    match: (problem) => problem.brandSlug === "android" || containsAny(problem, ["android phone", "play store"]),
  },
  {
    slug: "web-browsers",
    name: "Web browsers",
    title: "Browser and website troubleshooting",
    description: "Chrome connection errors, certificate warnings, redirect loops, crashes, loading problems, and HTTP status guides.",
    intro: "Compare the same address across browsers and networks before clearing data or resetting the whole device. Exact error text matters.",
    match: (problem) => containsAny(problem, ["chrome", "browser", "http 403", "http 429", "http 502", "http 503", "http 504", "redirect"]),
  },
  {
    slug: "streaming-tv",
    name: "Streaming & TV",
    title: "Streaming and TV troubleshooting",
    description: "Netflix, YouTube, Roku, Fire TV, Chromecast, HDMI, console video, and connected-audio problems.",
    intro: "Separate the display, playback app, source device, HDMI path, account, and network before resetting or replacing hardware.",
    match: (problem) => problem.categorySlug === "tv-entertainment",
  },
  {
    slug: "apps-accounts",
    name: "Apps & accounts",
    title: "App and account troubleshooting",
    description: "Login codes, verification, uploads, backups, connection loops, permissions, and missing app features.",
    intro: "Protect account access and backups before reinstalling an app or clearing its data. Never share verification codes.",
    match: (problem) => problem.categorySlug === "apps-accounts",
  },
];

export const issueHubs: ContentHub[] = [
  {
    slug: "website-errors",
    name: "Website errors",
    title: "Browser and website error messages",
    description: "Connection resets, DNS failures, certificate warnings, redirect loops, and HTTP 4xx or 5xx status pages.",
    intro: "First identify whether the failure follows one website, one browser, one device, or one network. That comparison prevents unnecessary resets.",
    match: (problem) => containsAny(problem, ["err_connection", "dns_probe", "certificate", "redirect", "403 forbidden", "429 too many", "502 bad", "503 service", "504 gateway"]),
  },
  {
    slug: "not-connecting",
    name: "Not connecting",
    title: "Problems that will not connect",
    description: "Troubleshoot devices, apps, Wi-Fi, Bluetooth, printers, routers, and accounts that will not connect.",
    intro: "Identify which link fails: device to accessory, device to router, router to provider, app to server, or account to verification service.",
    match: (problem) => containsAny(problem, ["not connect", "not connecting", "connected no internet", "offline", "not found", "stuck on connecting", "network path"]),
  },
  {
    slug: "not-starting",
    name: "Not starting",
    title: "Devices and apps that will not start",
    description: "Startup problems for phones, appliances, Windows, applications, printers, vehicles, and electronics.",
    intro: "Check power, locks, safety interlocks, recent changes, and signs of life before assuming a major component has failed.",
    match: (problem) => containsAny(problem, ["not turning on", "will not start", "won't start", "not starting", "could not start correctly", "startup"]),
  },
  {
    slug: "not-draining",
    name: "Not draining",
    title: "Appliances that will not drain",
    description: "Washing machine and dishwasher drain errors, retained water, blocked hoses, filters, pumps, and installation problems.",
    intro: "Listen for the drain pump and identify whether water moves slowly, not at all, or returns through the household drain.",
    match: (problem) => containsAny(problem, ["not draining", "cannot drain", "drain in time", "drain correctly", "retained water"]),
  },
  {
    slug: "leaking",
    name: "Leaking",
    title: "Leak and water-detection problems",
    description: "Leaks, base-water sensors, overflowing appliances, hose failures, and safe shutoff guidance.",
    intro: "Disconnect power and water when leakage reaches electrical areas. Identify whether the leak begins during filling, circulation, or draining.",
    match: (problem) => containsAny(problem, ["leak", "water in the base", "water under"]),
  },
  {
    slug: "not-printing",
    name: "Not printing",
    title: "Printer problems that stop printing",
    description: "Offline printers, stuck queues, blank pages, missing black ink, Wi-Fi discovery, spooler failures, and printer codes.",
    intro: "Print an internal test page first. If it works, focus on the computer, driver, queue, network, app, or document.",
    match: (problem) => containsAny(problem, ["printer", "printing", "print job", "spooler"]),
  },
  {
    slug: "blue-screen",
    name: "Blue screens",
    title: "Windows blue-screen stop codes",
    description: "Windows stop codes involving drivers, storage, boot access, critical processes, power state, and unstable hardware.",
    intro: "Record the stop code and the name shown after “What failed.” Protect important data before repeated disk or repair operations.",
    match: (problem) => containsAny(problem, ["blue screen", "critical_process_died", "inaccessible_boot_device", "driver_power_state_failure"]),
  },
  {
    slug: "update-errors",
    name: "Update errors",
    title: "Windows update and installation errors",
    description: "Access-denied, missing-file, disabled-service, repair-source, and installation-failure codes in Windows Update.",
    intro: "Use the exact error code and failed KB or package name. A general installation code does not identify one universal failed part.",
    match: (problem) => containsAny(problem, ["windows update", "0x800", "0x800f"]),
  },
  {
    slug: "no-sound",
    name: "No sound",
    title: "Connected but no sound",
    description: "Bluetooth, AirPods, phone, TV, and app audio-routing problems where the connection exists but sound goes elsewhere.",
    intro: "A connected status does not guarantee that the device is the active media output. Compare call and media profiles separately.",
    match: (problem) => containsAny(problem, ["no sound", "no audio", "audio output"]),
  },
  {
    slug: "black-screen",
    name: "Black screen",
    title: "Black-screen problems",
    description: "Phones, apps, video playback, cameras, televisions, and displays that remain black while other functions may continue.",
    intro: "Check for sound, vibration, computer detection, output routing, and whether only one app or camera module is affected.",
    match: (problem) => containsAny(problem, ["black screen", "screen stays black", "camera shows a black"]),
  },
  {
    slug: "overheating",
    name: "Overheating",
    title: "Devices that are hot or overheating",
    description: "Charging heat, appliance heater faults, routers restarting from heat, and warning signs that require immediate shutdown.",
    intro: "Normal warmth and dangerous battery or electrical heat are not the same. Stop for swelling, smoke, chemical smell, or repeated temperature warnings.",
    match: (problem) => containsAny(problem, ["overheat", "hot while", "temperature warning", "burning smell", "excessive heat"]),
  },
  {
    slug: "slow-performance",
    name: "Slow performance",
    title: "Slow network, device, and appliance problems",
    description: "Slow Wi-Fi, printing, filling, draining, startup, and performance problems organized by observable bottleneck.",
    intro: "Compare the same task in a different room, network, app, device, or cycle stage to identify where speed is being lost.",
    match: (problem) => containsAny(problem, ["slow", "slowly", "takes too long"]),
  },
  {
    slug: "disconnecting",
    name: "Disconnecting",
    title: "Connections that keep dropping",
    description: "Wi-Fi, Bluetooth, internet, mesh, app, and device connections that repeatedly disconnect or reconnect.",
    intro: "Note whether the radio link disappears, the connection stays but internet stops, or the router itself restarts.",
    match: (problem) => containsAny(problem, ["disconnect", "keeps dropping", "drops repeatedly", "offline"]),
  },
];

export function getDeviceHub(slug: string) {
  return deviceHubs.find((hub) => hub.slug === slug);
}

export function getIssueHub(slug: string) {
  return issueHubs.find((hub) => hub.slug === slug);
}

export function getHubProblems(hub: ContentHub) {
  return problems.filter(hub.match).sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.title.localeCompare(b.title);
  });
}
