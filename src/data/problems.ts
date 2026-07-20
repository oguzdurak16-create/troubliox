import { applianceProblems } from "./applianceProblems";
import { symptomProblems } from "./symptomProblems";
import { trafficProblems } from "./trafficProblems";
import { growthProblems } from "./growthProblems";
import { validateProblems } from "./validateProblems";
export type Step = {
  title: string;
  detail: string;
  level?: "safe" | "caution" | "stop";
};

export type Problem = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  category: string;
  categorySlug: string;
  brand?: string;
  brandSlug?: string;
  device: string;
  updated: string;
  readTime: number;
  likelyCauses: string[];
  quickChecks: Step[];
  decisionTitle: string;
  observations: { label: string; advice: string }[];
  whenToStop: string[];
  faq: { question: string; answer: string }[];
  tags: string[];
  featured?: boolean;
  errorCode?: string;
  aliases?: string[];
  appliesTo?: string;
  modelNote?: string;
  sources?: { label: string; url: string }[];
  contentKind?: "error-code" | "symptom" | "general";
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "phones-tablets",
    name: "Phones & tablets",
    description: "Charging, startup, network, account, and display problems.",
    icon: "▯",
  },
  {
    slug: "apps-accounts",
    name: "Apps & accounts",
    description: "Login, verification, sync, permissions, and missing features.",
    icon: "◎",
  },
  {
    slug: "internet-wifi",
    name: "Internet & Wi-Fi",
    description: "Router lights, weak signal, connection, and DNS problems.",
    icon: "⌁",
  },
  {
    slug: "computers-printers",
    name: "Computers & printers",
    description: "Windows, Bluetooth, printing, drivers, and peripheral issues.",
    icon: "⌨",
  },
  {
    slug: "home-appliances",
    name: "Home appliances",
    description: "Washers, dishwashers, refrigerators, dryers, and more.",
    icon: "▣",
  },
  {
    slug: "tv-entertainment",
    name: "TV & entertainment",
    description: "Smart TV, console, audio, remote, and streaming problems.",
    icon: "▷",
  },
  {
    slug: "cars",
    name: "Cars",
    description: "Warning lights, air conditioning, battery, and basic checks.",
    icon: "◇",
  },
  {
    slug: "everyday-fixes",
    name: "Everyday fixes",
    description: "Small household problems with safe, practical solutions.",
    icon: "✦",
  },
];

const baseProblems: Problem[] = [
  {
    slug: "iphone-charging-but-not-turning-on",
    title: "iPhone is charging but not turning on",
    shortTitle: "iPhone charges but will not turn on",
    summary:
      "A deeply discharged battery, a frozen system, a damaged display, or a charging-path problem can make an iPhone show signs of charging without starting.",
    category: "Phones & tablets",
    categorySlug: "phones-tablets",
    brand: "Apple",
    brandSlug: "apple",
    device: "iPhone",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: [
      "The battery is deeply discharged and needs more time",
      "iOS is frozen and requires a forced restart",
      "The screen is not displaying even though the phone is running",
      "The cable, adapter, port, or battery is failing",
    ],
    quickChecks: [
      {
        title: "Leave it connected for 30 minutes",
        detail: "Use a known-good cable and adapter connected directly to a wall outlet.",
        level: "safe",
      },
      {
        title: "Force restart the iPhone",
        detail: "Use the force-restart sequence for your model while it remains connected to power.",
        level: "safe",
      },
      {
        title: "Check for signs of life",
        detail: "Call the phone, connect it to a computer, and listen for sounds or vibration.",
        level: "safe",
      },
      {
        title: "Inspect the charging port",
        detail: "Look for visible lint or damage. Do not insert metal objects or liquids.",
        level: "caution",
      },
    ],
    decisionTitle: "What happens when you try to start it?",
    observations: [
      {
        label: "The Apple logo appears, then disappears",
        advice: "Keep it on power and try a force restart. Repeated looping can require recovery mode or service.",
      },
      {
        label: "It rings or vibrates but the screen stays black",
        advice: "The phone may be running with a failed display or backlight. Arrange display diagnosis.",
      },
      {
        label: "There is no response at all",
        advice: "Try another certified cable, adapter, and outlet. If still unresponsive after 30 minutes, service is likely needed.",
      },
    ],
    whenToStop: [
      "The phone is swollen, unusually hot, bent, or smells chemical",
      "The problem started after liquid exposure or a hard impact",
      "The charging port is visibly burned or damaged",
    ],
    faq: [
      {
        question: "How long should a fully drained iPhone take to show life?",
        answer: "A deeply discharged battery may need 15 to 30 minutes on a reliable charger before the screen responds.",
      },
      {
        question: "Can a black screen mean the phone is still on?",
        answer: "Yes. Calls, vibration, computer detection, or notification sounds can indicate a display problem rather than a dead phone.",
      },
    ],
    tags: ["iphone", "black screen", "charging", "startup"],
    featured: true,
  },
  {
    slug: "android-phone-wont-connect-to-wifi",
    title: "Android phone will not connect to Wi-Fi",
    shortTitle: "Android will not connect to Wi-Fi",
    summary:
      "A saved-password mismatch, router issue, private DNS setting, or network configuration problem is usually responsible.",
    category: "Phones & tablets",
    categorySlug: "phones-tablets",
    brand: "Android",
    brandSlug: "android",
    device: "Android phone",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: [
      "The saved Wi-Fi password is outdated",
      "The router has stopped assigning addresses",
      "Private DNS, VPN, or randomized MAC settings conflict with the network",
      "The phone network settings are corrupted",
    ],
    quickChecks: [
      { title: "Forget and rejoin the network", detail: "Remove the saved network, then enter the password again.", level: "safe" },
      { title: "Restart both devices", detail: "Restart the phone and power-cycle the router for 30 seconds.", level: "safe" },
      { title: "Disable VPN and private DNS temporarily", detail: "Test without traffic-filtering or custom DNS services.", level: "safe" },
      { title: "Try another Wi-Fi network", detail: "This separates a phone problem from a router or provider problem.", level: "safe" },
    ],
    decisionTitle: "Which message do you see?",
    observations: [
      { label: "Saved / Authentication problem", advice: "Forget the network, verify the password, and check whether the router uses a compatible security mode." },
      { label: "Connected without internet", advice: "The Wi-Fi link works, but the router or provider is not reaching the internet. Test another device on the same network." },
      { label: "The network does not appear", advice: "Move closer, restart the router, and verify that the router broadcasts a compatible 2.4 GHz or 5 GHz network." },
    ],
    whenToStop: ["The phone becomes unusually hot or restarts repeatedly", "The issue began after physical or liquid damage"],
    faq: [
      { question: "Will resetting network settings delete photos?", answer: "No. It normally removes saved Wi-Fi, Bluetooth, and mobile network settings, not personal files." },
      { question: "Why does Wi-Fi work on other devices?", answer: "That usually points to a saved setting, software conflict, or hardware problem on the phone." },
    ],
    tags: ["android", "wifi", "authentication", "internet"],
  },
  {
    slug: "whatsapp-verification-code-not-received",
    title: "WhatsApp verification code is not received",
    shortTitle: "WhatsApp code not received",
    summary:
      "Incorrect country formatting, blocked SMS or calls, too many attempts, or an inactive SIM can prevent the verification code from arriving.",
    category: "Apps & accounts",
    categorySlug: "apps-accounts",
    brand: "WhatsApp",
    brandSlug: "whatsapp",
    device: "WhatsApp account",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: [
      "The number or country code is entered incorrectly",
      "SMS or automated calls are blocked by the carrier or phone",
      "Repeated requests triggered a temporary wait period",
      "The SIM cannot receive messages or calls",
    ],
    quickChecks: [
      { title: "Verify the full international number", detail: "Select the correct country and enter the number without an extra leading zero where applicable.", level: "safe" },
      { title: "Confirm the SIM works", detail: "Ask someone to call and text the same number.", level: "safe" },
      { title: "Wait for the timer", detail: "Do not repeatedly request codes while the on-screen timer is active.", level: "safe" },
      { title: "Try the call option", detail: "Use the automated voice call only when WhatsApp offers it.", level: "safe" },
    ],
    decisionTitle: "Where is the verification failing?",
    observations: [
      { label: "SMS never arrives", advice: "Check number formatting, signal, blocked senders, spam filtering, and carrier restrictions." },
      { label: "The old phone receives prompts", advice: "Complete verification on the new phone using the code sent to the registered number; linked-device prompts are not a replacement for number verification." },
      { label: "Too many attempts message", advice: "Stop requesting codes and wait for the displayed period. Repeated attempts can extend the delay." },
    ],
    whenToStop: ["Someone asks you to share the verification code", "You did not initiate the verification request"],
    faq: [
      { question: "Can WhatsApp send the code by email?", answer: "Phone-number verification normally uses SMS or an automated call. Do not trust unofficial code-delivery offers." },
      { question: "Should I share the code with support?", answer: "No. Verification codes should never be shared with another person." },
    ],
    tags: ["whatsapp", "verification", "sms", "login"],
    featured: true,
  },
  {
    slug: "instagram-music-not-showing",
    title: "Instagram music is not showing in Stories or Reels",
    shortTitle: "Instagram music is missing",
    summary:
      "Account type, regional licensing, app version, or a temporary feature rollout can remove the music library.",
    category: "Apps & accounts",
    categorySlug: "apps-accounts",
    brand: "Instagram",
    brandSlug: "instagram",
    device: "Instagram app",
    updated: "2026-07-16",
    readTime: 3,
    likelyCauses: ["Music licensing is limited in the current region", "The account is set to a business category with restricted tracks", "The app cache or version is outdated", "The feature is temporarily unavailable"],
    quickChecks: [
      { title: "Update Instagram", detail: "Install the latest public version from the official app store.", level: "safe" },
      { title: "Test another account", detail: "This helps distinguish an account-level restriction from an app problem.", level: "safe" },
      { title: "Review account type", detail: "Some business categories have a smaller licensed music catalog than personal or creator accounts.", level: "safe" },
      { title: "Sign out and restart", detail: "Restart the phone before signing back in.", level: "safe" },
    ],
    decisionTitle: "What is missing?",
    observations: [
      { label: "The music sticker is missing entirely", advice: "Update the app, test another account, and check whether the feature is available in your region." },
      { label: "Only some popular songs are missing", advice: "This is often a licensing or business-account restriction rather than a fault." },
      { label: "Music appears on another account", advice: "The limitation is probably tied to the account type, category, age, or region settings." },
    ],
    whenToStop: ["A third-party app requests your Instagram password", "A website promises to unlock music access for payment"],
    faq: [
      { question: "Does switching to a creator account restore music?", answer: "It can expand the available catalog in some regions, but availability still depends on licensing and account eligibility." },
      { question: "Will reinstalling Instagram delete drafts?", answer: "Local drafts may be removed, so save important work before reinstalling." },
    ],
    tags: ["instagram", "music", "stories", "reels"],
  },
  {
    slug: "wifi-connected-no-internet",
    title: "Wi-Fi is connected but there is no internet",
    shortTitle: "Wi-Fi connected, no internet",
    summary:
      "Your device has joined the local Wi-Fi network, but the router, modem, DNS service, or internet provider is not completing the connection.",
    category: "Internet & Wi-Fi",
    categorySlug: "internet-wifi",
    device: "Wi-Fi network",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["The internet provider has an outage", "The modem has lost its external connection", "DNS resolution is failing", "Only one device has a stale network configuration"],
    quickChecks: [
      { title: "Test a second device", detail: "If every device fails, focus on the modem, router, or provider.", level: "safe" },
      { title: "Check modem status lights", detail: "Look for red, off, or flashing internet, WAN, DSL, or optical indicators.", level: "safe" },
      { title: "Power-cycle the network", detail: "Unplug modem and router for 30 seconds, reconnect the modem first, then the router.", level: "safe" },
      { title: "Disable VPN or custom DNS", detail: "Temporarily remove traffic-routing tools and test again.", level: "safe" },
    ],
    decisionTitle: "How many devices are affected?",
    observations: [
      { label: "Every device has no internet", advice: "Check modem lights and provider status. The issue is probably upstream of your individual device." },
      { label: "Only one device is affected", advice: "Forget and rejoin the network, restart the device, and reset its network settings if needed." },
      { label: "Some sites work but others do not", advice: "DNS, filtering, clock settings, or the affected service may be responsible." },
    ],
    whenToStop: ["The modem or power supply smells burned or is excessively hot", "Cables or wall sockets show heat or physical damage"],
    faq: [
      { question: "Why does the Wi-Fi icon still appear?", answer: "The icon only confirms a local wireless connection to the router, not a working connection from the router to the internet." },
      { question: "Does restarting the router erase settings?", answer: "A normal power restart does not. Holding the reset button can erase settings and should be avoided unless you intend to reconfigure it." },
    ],
    tags: ["wifi", "internet", "router", "dns"],
    featured: true,
  },
  {
    slug: "router-internet-light-red",
    title: "Router internet light is red",
    shortTitle: "Router internet light is red",
    summary:
      "A red internet indicator usually means the router cannot authenticate, cannot reach the provider, or has lost the incoming line signal.",
    category: "Internet & Wi-Fi",
    categorySlug: "internet-wifi",
    device: "Router",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["Provider outage", "Loose or damaged WAN, DSL, fiber, or coax cable", "Authentication failure", "Modem or optical terminal problem"],
    quickChecks: [
      { title: "Check the incoming cable", detail: "Confirm it is firmly connected and not sharply bent or damaged.", level: "safe" },
      { title: "Restart in the correct order", detail: "Power the modem or optical terminal first, wait for stable line lights, then start the router.", level: "safe" },
      { title: "Check provider status", detail: "Use mobile data or another connection to check for a regional outage.", level: "safe" },
      { title: "Avoid a factory reset", detail: "A reset can erase provider credentials and make recovery harder.", level: "caution" },
    ],
    decisionTitle: "Which other light is abnormal?",
    observations: [
      { label: "DSL or optical light is off", advice: "The incoming line is not established. Recheck the cable and contact the provider if it stays off." },
      { label: "Line light is normal but internet is red", advice: "Authentication or provider provisioning is the likely issue." },
      { label: "The red light started after moving cables", advice: "Reconnect the WAN and line cables to their original ports and restart the devices." },
    ],
    whenToStop: ["The fiber cable is damaged or sharply kinked", "The power adapter or router is hot, sparking, or smells burned"],
    faq: [
      { question: "Will a factory reset fix a red internet light?", answer: "Not usually. It can remove working credentials, so use it only with provider instructions and configuration details available." },
      { question: "Can the router be connected while the provider is down?", answer: "Yes. Local Wi-Fi can still appear even when the external internet service is unavailable." },
    ],
    tags: ["router", "red light", "wan", "dsl"],
  },
  {
    slug: "windows-11-bluetooth-missing",
    title: "Bluetooth is missing in Windows 11",
    shortTitle: "Bluetooth missing in Windows 11",
    summary:
      "A disabled adapter, stopped service, driver problem, or missing hardware detection can remove the Bluetooth toggle.",
    category: "Computers & printers",
    categorySlug: "computers-printers",
    brand: "Microsoft",
    brandSlug: "microsoft",
    device: "Windows 11 PC",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["Bluetooth is disabled in Device Manager or firmware", "The Bluetooth service stopped", "A driver update failed", "The PC does not include Bluetooth hardware"],
    quickChecks: [
      { title: "Restart the computer", detail: "A full restart can restore a temporarily missing adapter.", level: "safe" },
      { title: "Check Device Manager", detail: "Look under Bluetooth and Network adapters for disabled or warning-marked devices.", level: "safe" },
      { title: "Run Windows Update", detail: "Install optional driver updates from the official Windows settings interface.", level: "safe" },
      { title: "Check hardware support", detail: "Confirm the PC model actually includes Bluetooth or uses a connected USB adapter.", level: "safe" },
    ],
    decisionTitle: "What do you see in Device Manager?",
    observations: [
      { label: "Bluetooth appears with a down arrow", advice: "Enable the device, restart Windows, and test the toggle again." },
      { label: "Bluetooth has a warning symbol", advice: "Open device properties, note the error code, then reinstall the official driver for the PC or adapter model." },
      { label: "There is no Bluetooth section", advice: "Use View > Show hidden devices, check the PC specification, and confirm any USB adapter is detected." },
    ],
    whenToStop: ["A driver website asks for payment or unrelated software", "The USB adapter is physically damaged or overheats"],
    faq: [
      { question: "Can Windows 11 hide Bluetooth after an update?", answer: "Yes. A failed driver load or disabled service can remove the toggle until the driver or service is restored." },
      { question: "Do all Windows 11 computers have Bluetooth?", answer: "No. Desktop systems in particular may need a separate Bluetooth adapter." },
    ],
    tags: ["windows 11", "bluetooth", "driver", "device manager"],
    featured: true,
  },
  {
    slug: "printer-shows-offline",
    title: "Printer shows offline even though it is on",
    shortTitle: "Printer shows offline",
    summary:
      "The computer may be using the wrong queue or port, the printer may have changed IP address, or the print spooler may be stuck.",
    category: "Computers & printers",
    categorySlug: "computers-printers",
    device: "Printer",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["Wrong printer or duplicate queue selected", "Wi-Fi printer received a new IP address", "Use Printer Offline is enabled", "Print spooler or queued job is stuck"],
    quickChecks: [
      { title: "Confirm the selected printer", detail: "Choose the exact active queue, not an old copy or virtual printer.", level: "safe" },
      { title: "Clear paused and stuck jobs", detail: "Open the print queue, resume printing, and remove failed jobs.", level: "safe" },
      { title: "Restart printer and computer", detail: "Wait until the printer fully reconnects before testing.", level: "safe" },
      { title: "Print a network report", detail: "Compare the printer IP address with the port used by the computer.", level: "safe" },
    ],
    decisionTitle: "How is the printer connected?",
    observations: [
      { label: "USB cable", advice: "Try another USB port, check cable damage, and remove duplicate printer queues." },
      { label: "Wi-Fi or Ethernet", advice: "Confirm the printer is on the same network and its IP address has not changed." },
      { label: "It prints from another device", advice: "The printer is working; repair or recreate the queue on the affected computer." },
    ],
    whenToStop: ["The printer reports smoke, burning smell, or repeated electrical faults", "A paper jam cannot be removed without force"],
    faq: [
      { question: "Why does restarting temporarily fix an offline printer?", answer: "Restarting can refresh network discovery, clear the spooler, and renew the printer's address." },
      { question: "Should I reinstall the printer?", answer: "Reinstalling can help after you confirm the printer is reachable and remove old duplicate queues." },
    ],
    tags: ["printer", "offline", "windows", "wifi printer"],
  },
  {
    slug: "samsung-washer-4c-error",
    title: "Samsung washer 4C error",
    shortTitle: "Samsung washer 4C error",
    summary:
      "The 4C or 4E code indicates that the washer is not receiving enough water within the expected time.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Samsung",
    brandSlug: "samsung",
    device: "Washing machine",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["Water valves are not fully open", "Inlet hose is bent, frozen, or restricted", "Inlet mesh filters are clogged", "Household water pressure is too low"],
    quickChecks: [
      { title: "Open both supply valves fully", detail: "Confirm hot and cold valves are open where both are connected.", level: "safe" },
      { title: "Inspect inlet hoses", detail: "Straighten kinks and check for visible compression or freezing.", level: "safe" },
      { title: "Test household water flow", detail: "Run a nearby tap to confirm normal pressure.", level: "safe" },
      { title: "Clean inlet mesh filters", detail: "Unplug the washer and close water valves before removing hoses. Follow the model manual.", level: "caution" },
    ],
    decisionTitle: "What happens during filling?",
    observations: [
      { label: "No water enters", advice: "Check closed valves, disconnected supply, frozen lines, and inlet-valve failure." },
      { label: "Water enters very slowly", advice: "Focus on pressure, kinked hoses, and clogged inlet filters." },
      { label: "Water enters normally but 4C returns", advice: "A flow sensor, inlet valve, wiring, or control issue may require service." },
    ],
    whenToStop: ["A hose is swollen, cracked, or leaking", "Water reaches electrical parts", "The washer trips the breaker"],
    faq: [
      { question: "Can low water pressure cause 4C?", answer: "Yes. The washer must reach a target water level within a set time, and low pressure can trigger the code." },
      { question: "Is 4E the same as 4C?", answer: "On many Samsung washer ranges, both codes refer to a water-supply problem, but model-specific manuals should be checked." },
    ],
    tags: ["samsung", "washer", "4c", "4e", "water supply"],
    featured: true,
  },
  {
    slug: "lg-washer-oe-error",
    title: "LG washer OE error",
    shortTitle: "LG washer OE error",
    summary:
      "The OE code means the washer has not drained water within the allowed time.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "LG",
    brandSlug: "lg",
    device: "Washing machine",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["Drain hose is kinked or blocked", "Pump filter is clogged", "Drain pump is jammed or failing", "The drain path is frozen or installed too high"],
    quickChecks: [
      { title: "Pause and drain safely", detail: "Unplug the washer and prepare towels or a shallow tray before opening any drain access.", level: "caution" },
      { title: "Inspect the drain hose", detail: "Straighten kinks and verify the hose is not pushed too far into the standpipe.", level: "safe" },
      { title: "Clean the pump filter", detail: "Use the model's drain procedure because retained water may escape quickly.", level: "caution" },
      { title: "Run a drain-only cycle", detail: "Listen for pump operation after the filter and hose are checked.", level: "safe" },
    ],
    decisionTitle: "What do you hear during drain?",
    observations: [
      { label: "The pump hums but water stays", advice: "A blockage in the filter, hose, or pump inlet is likely." },
      { label: "There is no pump sound", advice: "The pump, wiring, or control may require service after basic checks." },
      { label: "Water drains very slowly", advice: "Look for a partial hose restriction, clogged filter, or installation issue." },
    ],
    whenToStop: ["Water is near electrical connections", "The pump smells burned or the breaker trips", "The washer must be tilted or dismantled"],
    faq: [
      { question: "Can too much detergent cause an OE error?", answer: "Excess foam can interfere with draining on some cycles, but hose, filter, and pump restrictions are more common." },
      { question: "Why is water released when I open the filter?", answer: "The filter sits low in the drain path, so retained tub water can flow out. Use the emergency drain procedure first where provided." },
    ],
    tags: ["lg", "washer", "oe", "not draining"],
  },
  {
    slug: "bosch-dishwasher-e15-error",
    title: "Bosch dishwasher E15 error",
    shortTitle: "Bosch dishwasher E15 error",
    summary:
      "E15 generally means the leak-protection system has detected water in the base area of the dishwasher.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    brand: "Bosch",
    brandSlug: "bosch",
    device: "Dishwasher",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["An internal leak activated the base float", "Excess foam or a spill reached the base", "A hose, pump, seal, or water path is leaking", "The machine was recently moved or tilted"],
    quickChecks: [
      { title: "Turn off power and water", detail: "Disconnect the dishwasher and close its water supply.", level: "safe" },
      { title: "Check for visible external leaks", detail: "Inspect around the door, hoses, and floor without removing panels.", level: "safe" },
      { title: "Review detergent use", detail: "Hand-dish soap or excess detergent can create foam and leakage symptoms.", level: "safe" },
      { title: "Arrange leak diagnosis", detail: "The base must be dry and the leak source corrected before normal use.", level: "stop" },
    ],
    decisionTitle: "What happened before E15 appeared?",
    observations: [
      { label: "Water is visible on the floor", advice: "Keep power and water off and arrange service. Do not run another cycle." },
      { label: "The wrong detergent was used", advice: "Stop the machine, remove foam safely, and allow professional inspection if E15 remains." },
      { label: "The machine was moved or tilted", advice: "Water may have shifted into the base, but a leak still needs to be ruled out before reuse." },
    ],
    whenToStop: ["Any water is near wiring or the outlet", "The dishwasher trips the breaker", "A panel must be removed to reach the base"],
    faq: [
      { question: "Can I clear E15 by tilting the dishwasher?", answer: "Tilting may move water away from the float without fixing the source. It can also spread water toward electrical parts, so it is not a safe repair method." },
      { question: "Will E15 reset after drying?", answer: "The code may clear after the base dries, but the dishwasher should not be used until the cause of the water is identified." },
    ],
    tags: ["bosch", "dishwasher", "e15", "leak"],
    featured: true,
  },
  {
    slug: "refrigerator-not-cooling-but-light-works",
    title: "Refrigerator is not cooling but the light works",
    shortTitle: "Refrigerator light works but it is not cooling",
    summary:
      "Power reaches the refrigerator, but airflow, temperature control, condenser cooling, defrost, or compressor operation may be failing.",
    category: "Home appliances",
    categorySlug: "home-appliances",
    device: "Refrigerator",
    updated: "2026-07-16",
    readTime: 5,
    likelyCauses: ["Temperature setting or demo mode is incorrect", "Air vents are blocked", "Condenser coils or fan cannot release heat", "Compressor, start device, defrost, or control system has failed"],
    quickChecks: [
      { title: "Confirm the temperature setting", detail: "Make sure cooling is enabled and the appliance is not in showroom or demo mode.", level: "safe" },
      { title: "Check internal airflow", detail: "Move food away from vents and confirm doors close fully.", level: "safe" },
      { title: "Listen for fans and compressor", detail: "Note clicking, humming, silence, or repeated starts without touching components.", level: "safe" },
      { title: "Clean accessible condenser areas", detail: "Unplug first and follow the manual; do not remove sealed-system parts.", level: "caution" },
    ],
    decisionTitle: "What else do you notice?",
    observations: [
      { label: "Freezer is cold but refrigerator is warm", advice: "Blocked airflow, an evaporator fan, damper, or defrost problem is likely." },
      { label: "Both sections are warm", advice: "Check settings, ventilation, condenser fan, and compressor operation. Move food to safe cold storage." },
      { label: "The unit clicks repeatedly", advice: "A start device, compressor, or power problem may require service." },
    ],
    whenToStop: ["Food has been above safe storage temperature for an uncertain period", "The compressor area is extremely hot or smells burned", "Refrigerant tubing is damaged"],
    faq: [
      { question: "How long should a refrigerator take to cool after restart?", answer: "It can take several hours to stabilize, but there should be signs of cooling and airflow earlier. Protect perishable food during testing." },
      { question: "Can a working light prove the refrigerator has full power?", answer: "No. The light uses little power and can work even when cooling components or controls have failed." },
    ],
    tags: ["refrigerator", "not cooling", "light works", "compressor"],
  },
  {
    slug: "smart-tv-sound-but-no-picture",
    title: "Smart TV has sound but no picture",
    shortTitle: "TV has sound but no picture",
    summary:
      "A wrong input, software freeze, backlight failure, loose source connection, or display hardware fault can leave audio working with a dark screen.",
    category: "TV & entertainment",
    categorySlug: "tv-entertainment",
    device: "Smart TV",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["The selected source is not providing video", "The TV software is frozen", "The panel backlight has failed", "A source cable, board, or panel has failed"],
    quickChecks: [
      { title: "Open the TV menu", detail: "If the menu appears, the panel works and the problem is likely the input or source.", level: "safe" },
      { title: "Power-cycle the TV", detail: "Unplug it for 60 seconds, then reconnect directly to a known-good outlet.", level: "safe" },
      { title: "Change input and cable", detail: "Test a built-in app, another HDMI port, or another source device.", level: "safe" },
      { title: "Perform a flashlight check", detail: "In a dark room, shine a flashlight at an angle. A faint image can indicate backlight failure.", level: "safe" },
    ],
    decisionTitle: "Can you see the TV menu?",
    observations: [
      { label: "The menu is visible", advice: "Focus on the connected source, HDMI cable, input selection, or app." },
      { label: "A faint image is visible with a flashlight", advice: "The backlight or its power circuit is likely failing and needs service." },
      { label: "No menu or faint image appears", advice: "A display, main board, power board, or panel fault may require diagnosis." },
    ],
    whenToStop: ["The TV clicks, sparks, smells burned, or repeatedly shuts down", "You would need to open the TV; internal power sections can retain dangerous voltage"],
    faq: [
      { question: "Why does sound continue when the backlight fails?", answer: "Audio and image processing can keep working even when the LEDs that illuminate the panel stop working." },
      { question: "Can an HDMI cable cause a black screen with sound?", answer: "Yes. Test the TV menu, a built-in app, another port, and another cable to isolate the source." },
    ],
    tags: ["tv", "black screen", "sound", "backlight"],
    featured: true,
  },
  {
    slug: "playstation-controller-wont-connect",
    title: "PlayStation controller will not connect",
    shortTitle: "PlayStation controller will not connect",
    summary:
      "The controller may be paired to another device, discharged, using a charge-only cable, or unable to complete Bluetooth pairing.",
    category: "TV & entertainment",
    categorySlug: "tv-entertainment",
    brand: "PlayStation",
    brandSlug: "playstation",
    device: "Game controller",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["Battery is too low", "USB cable does not carry data", "Controller is paired to another console, phone, or PC", "Bluetooth pairing data is stuck"],
    quickChecks: [
      { title: "Charge for 30 minutes", detail: "Use the console or a compatible charger and a known-good cable.", level: "safe" },
      { title: "Connect with a data cable", detail: "Some cables provide power only and cannot pair the controller.", level: "safe" },
      { title: "Restart the console", detail: "Fully shut down and restart before trying again.", level: "safe" },
      { title: "Reset the controller", detail: "Use the small reset button according to the controller model instructions.", level: "safe" },
    ],
    decisionTitle: "What does the controller light do?",
    observations: [
      { label: "No light", advice: "Charge with another cable and port. A battery or charging-port fault is possible if it remains dead." },
      { label: "Light flashes, then stops", advice: "Use a data-capable cable and clear pairing with other devices." },
      { label: "It connects by USB but not wirelessly", advice: "Bluetooth pairing, interference, or console wireless hardware is the likely focus." },
    ],
    whenToStop: ["The controller battery is swollen", "The charging port or cable becomes hot or smells burned"],
    faq: [
      { question: "Why does the controller charge but not pair by cable?", answer: "The cable may carry power but not data. Try a cable known to support file transfer or controller pairing." },
      { question: "Can pairing with a phone stop console connection?", answer: "Yes. The controller may reconnect to the most recent device until it is paired back to the console." },
    ],
    tags: ["playstation", "controller", "pairing", "bluetooth"],
  },
  {
    slug: "car-battery-light-on-while-driving",
    title: "Car battery light comes on while driving",
    shortTitle: "Battery light on while driving",
    summary:
      "The battery warning light usually means the charging system is not maintaining voltage, not simply that the battery is old.",
    category: "Cars",
    categorySlug: "cars",
    device: "Car charging system",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["Alternator is not charging", "Drive belt is loose or broken", "Battery or cable connection is failing", "Charging-system wiring or control has a fault"],
    quickChecks: [
      { title: "Reduce electrical load", detail: "Turn off nonessential accessories such as seat heaters and high-power audio.", level: "safe" },
      { title: "Move to a safe location", detail: "The engine may stop once battery power is depleted.", level: "caution" },
      { title: "Watch temperature and steering warnings", detail: "A shared broken belt can also affect coolant circulation or steering assistance on some vehicles.", level: "caution" },
      { title: "Arrange charging-system inspection", detail: "Avoid continued driving unless necessary to reach a safe stopping point.", level: "stop" },
    ],
    decisionTitle: "What else changed when the light appeared?",
    observations: [
      { label: "Steering became heavy or temperature rose", advice: "Stop as soon as safely possible. A belt problem may affect multiple systems." },
      { label: "Lights are dimming", advice: "System voltage is dropping. Reach a safe stop before the engine shuts down." },
      { label: "The light flickers over bumps", advice: "A loose cable, belt, connector, or alternator fault is possible and still needs prompt inspection." },
    ],
    whenToStop: ["Engine temperature rises", "You smell burning rubber or electrical odor", "Steering assistance changes", "Multiple warning lights appear and the engine runs poorly"],
    faq: [
      { question: "Does the battery light mean I only need a new battery?", answer: "No. It more often indicates a charging-system problem such as the alternator, belt, wiring, or connection." },
      { question: "How long can a car drive with the battery light on?", answer: "There is no reliable safe distance. The engine can stop when stored battery energy is exhausted." },
    ],
    tags: ["car", "battery light", "alternator", "charging system"],
    featured: true,
  },
  {
    slug: "car-ac-not-blowing-cold",
    title: "Car air conditioner is not blowing cold",
    shortTitle: "Car AC is not cold",
    summary:
      "Low refrigerant from a leak, compressor-control issues, condenser airflow, blend-door faults, or high ambient load can reduce cooling.",
    category: "Cars",
    categorySlug: "cars",
    device: "Car air conditioning",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["Refrigerant is low because of a leak", "Compressor is not engaging or being commanded", "Condenser airflow is poor", "A blend door or cabin filter is restricting cold airflow"],
    quickChecks: [
      { title: "Compare vents and settings", detail: "Use maximum cooling, recirculation, and medium fan speed. Check whether one side is colder.", level: "safe" },
      { title: "Check cabin airflow", detail: "Weak airflow can point to a clogged cabin filter or blower issue rather than refrigeration.", level: "safe" },
      { title: "Observe radiator fans", detail: "With the vehicle safely parked, note whether cooling fans operate when AC is requested. Keep clear of moving parts.", level: "caution" },
      { title: "Book leak and pressure testing", detail: "Refrigerant should not be repeatedly topped up without finding the leak.", level: "stop" },
    ],
    decisionTitle: "How does the cooling behave?",
    observations: [
      { label: "Cold while moving, warm when stopped", advice: "Condenser airflow or cooling-fan operation is a likely area to inspect." },
      { label: "One side is cold and the other is warm", advice: "A dual-zone setting, blend-door actuator, sensor, or refrigerant distribution issue may be involved." },
      { label: "Airflow is weak at every temperature", advice: "Check the cabin filter, blower, and air path before focusing on refrigerant." },
    ],
    whenToStop: ["A belt squeals or smoke appears", "You hear grinding from the compressor area", "You plan to vent or handle refrigerant without proper equipment"],
    faq: [
      { question: "Can I just add refrigerant?", answer: "Loss of refrigerant usually means a leak. Correct diagnosis includes leak testing and charging by specification." },
      { question: "Why is AC colder while driving?", answer: "Vehicle speed increases airflow through the condenser, which can mask a weak or nonworking cooling fan." },
    ],
    tags: ["car ac", "not cold", "compressor", "refrigerant"],
  },
  {
    slug: "zipper-stuck-and-wont-move",
    title: "Zipper is stuck and will not move",
    shortTitle: "Zipper is stuck",
    summary:
      "Fabric caught in the slider, misaligned teeth, dirt, or a bent slider can stop a zipper without requiring force.",
    category: "Everyday fixes",
    categorySlug: "everyday-fixes",
    device: "Zipper",
    updated: "2026-07-16",
    readTime: 3,
    likelyCauses: ["Fabric or thread is trapped", "Teeth are misaligned", "Dirt or corrosion increases friction", "The slider is bent or worn"],
    quickChecks: [
      { title: "Stop pulling", detail: "Force can tear fabric, split teeth, or deform the slider.", level: "safe" },
      { title: "Remove tension", detail: "Lay the item flat and gently move fabric away from the slider.", level: "safe" },
      { title: "Back the slider up slightly", detail: "Use small movements while easing trapped fabric out.", level: "safe" },
      { title: "Use a dry zipper-safe lubricant", detail: "A small amount of graphite or purpose-made zipper lubricant can help. Avoid products that stain the material.", level: "caution" },
    ],
    decisionTitle: "What is blocking the zipper?",
    observations: [
      { label: "Fabric is caught", advice: "Pull the fabric sideways away from the slider while moving the slider backward in tiny steps." },
      { label: "No fabric is visible", advice: "Inspect for bent teeth, dirt, or a narrowed slider. Clean before applying light lubrication." },
      { label: "The zipper closes and immediately separates", advice: "The slider may be worn and no longer pressing the teeth together; replacement is usually the durable fix." },
    ],
    whenToStop: ["The item is delicate, expensive, or easily stained", "Teeth are missing or the slider is cracked"],
    faq: [
      { question: "Should I use oil on a zipper?", answer: "Household oil can stain fabric and attract dirt. Use a material-safe zipper lubricant sparingly." },
      { question: "Why does the zipper split after closing?", answer: "A worn or widened slider often fails to mesh the teeth even though it still moves." },
    ],
    tags: ["zipper", "stuck", "fabric", "slider"],
  },
  {
    slug: "stripped-screw-wont-come-out",
    title: "Stripped screw will not come out",
    shortTitle: "Stripped screw will not come out",
    summary:
      "A worn screw head needs more grip, a better-fitting bit, or a controlled extraction method rather than more speed or force.",
    category: "Everyday fixes",
    categorySlug: "everyday-fixes",
    device: "Screw",
    updated: "2026-07-16",
    readTime: 4,
    likelyCauses: ["Wrong bit size or type was used", "Driver speed or pressure caused cam-out", "The screw is corroded or thread-locked", "The head is too damaged for normal engagement"],
    quickChecks: [
      { title: "Use the exact bit", detail: "Clean the head and test the correct Phillips, Pozidriv, Torx, hex, or other profile.", level: "safe" },
      { title: "Increase downward pressure", detail: "Turn slowly by hand where possible to avoid further damage.", level: "safe" },
      { title: "Add grip", detail: "A wide rubber band or abrasive material between bit and head may help on lightly damaged screws.", level: "safe" },
      { title: "Use an extractor only with control", detail: "Protect eyes, secure the workpiece, and avoid drilling near wiring, batteries, or pressurized parts.", level: "caution" },
    ],
    decisionTitle: "How exposed is the screw?",
    observations: [
      { label: "The head is raised", advice: "Locking pliers may turn the outer edge if the surrounding surface can be protected." },
      { label: "The head is flush", advice: "Try a fresh correct bit, manual impact driver where appropriate, or a screw extractor." },
      { label: "The screw is in electronics or near a battery", advice: "Avoid drilling and metal debris. Professional disassembly is safer." },
    ],
    whenToStop: ["The screw is near a battery, fuel, wiring, glass, or a pressurized component", "The workpiece cannot be secured", "Drilling could damage a critical part"],
    faq: [
      { question: "Does a rubber band always remove a stripped screw?", answer: "No. It can add grip only when the head is mildly damaged and the bit still has some engagement." },
      { question: "Why should driver speed be low?", answer: "High speed increases slipping, heat, and further wear. Slow controlled torque gives the bit a better chance to hold." },
    ],
    tags: ["screw", "stripped", "extractor", "repair"],
  },
];

const combinedProblems: Problem[] = [
  ...applianceProblems,
  ...symptomProblems,
  ...trafficProblems,
  ...growthProblems,
  ...baseProblems.filter(
    (base) =>
      !applianceProblems.some((generated) => generated.slug === base.slug) &&
      !symptomProblems.some((symptom) => symptom.slug === base.slug) &&
      !trafficProblems.some((traffic) => traffic.slug === base.slug) &&
      !growthProblems.some((growth) => growth.slug === base.slug),
  ),
];

export const problems: Problem[] = validateProblems(combinedProblems);

export const problemStats = {
  total: problems.length,
  errorCodes: problems.filter((problem) => problem.contentKind === "error-code").length,
  symptoms: problems.filter((problem) => problem.contentKind === "symptom").length,
  brands: new Set(problems.map((problem) => problem.brandSlug).filter(Boolean)).size,
};

export const brands = Array.from(
  new Map(
    problems
      .filter((problem) => problem.brand && problem.brandSlug)
      .map((problem) => [problem.brandSlug!, { slug: problem.brandSlug!, name: problem.brand! }]),
  ).values(),
).sort((a, b) => a.name.localeCompare(b.name));

export function getProblem(slug: string) {
  return problems.find((problem) => problem.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProblemsByCategory(slug: string) {
  return problems.filter((problem) => problem.categorySlug === slug);
}

export function getProblemsByBrand(slug: string) {
  return problems.filter((problem) => problem.brandSlug === slug);
}

export function searchProblems(query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return problems
    .map((problem) => {
      const haystack = [
        problem.title,
        problem.summary,
        problem.category,
        problem.brand || "",
        problem.device,
        problem.errorCode || "",
        (problem.aliases || []).join(" "),
        problem.tags.join(" "),
        problem.likelyCauses.join(" "),
        problem.observations.map((item) => `${item.label} ${item.advice}`).join(" "),
      ].join(" ").toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { problem, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.problem.title.localeCompare(b.problem.title))
    .map(({ problem }) => problem);
}
