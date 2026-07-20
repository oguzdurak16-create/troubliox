export type ResetLevel = "restart" | "power-cycle" | "network-reset" | "settings-reset" | "factory-reset";

export type ResetGuide = {
  slug: string;
  name: string;
  device: string;
  summary: string;
  searchTerms: string[];
  symptoms: string[];
  startWith: ResetLevel;
  levels: {
    level: ResetLevel;
    title: string;
    whenToUse: string;
    keeps: string[];
    removes: string[];
    steps: string[];
    stopIf?: string[];
  }[];
  beforeFactoryReset: string[];
  afterReset: string[];
  relatedSearch: string;
};

export const resetLevelLabels: Record<ResetLevel, string> = {
  restart: "Restart",
  "power-cycle": "Power cycle",
  "network-reset": "Network reset",
  "settings-reset": "Settings reset",
  "factory-reset": "Factory reset",
};

export const resetGuides: ResetGuide[] = [
  {
    slug: "wifi-router",
    name: "Wi-Fi router reset",
    device: "Wi-Fi router or gateway",
    summary: "Restore a frozen connection without erasing the ISP configuration, Wi-Fi name, or password unless a factory reset is truly required.",
    searchTerms: ["router reset", "wifi router restart", "internet router factory reset"],
    symptoms: ["No internet on every device", "Router admin page is frozen", "Wi-Fi network disappeared", "Configuration changes caused the issue"],
    startWith: "power-cycle",
    levels: [
      {
        level: "power-cycle",
        title: "Power-cycle the router first",
        whenToUse: "Use this for a temporary outage, frozen admin page, or missing Wi-Fi network.",
        keeps: ["Wi-Fi name and password", "ISP configuration", "Port forwarding and parental controls"],
        removes: ["Temporary connection state", "Stalled sessions"],
        steps: ["Check whether the ISP modem, fiber terminal, or gateway has a separate power supply.", "Unplug the router power cable. Do not press the recessed Reset button.", "Wait 60 seconds so the power supply and network sessions fully clear.", "Reconnect power and allow up to 10 minutes for internet and Wi-Fi indicators to stabilize.", "Test one device near the router before changing any settings."],
        stopIf: ["A power adapter is hot, damaged, or buzzing.", "A fiber cable would need to be bent or disconnected.", "The router repeatedly reboots or smells overheated."],
      },
      {
        level: "network-reset",
        title: "Reconnect one device before resetting the router",
        whenToUse: "Use this when the internet works elsewhere but one phone, laptop, or TV will not reconnect.",
        keeps: ["Router configuration", "Other connected devices"],
        removes: ["Saved network details on the affected device"],
        steps: ["Forget the Wi-Fi network on the affected device.", "Restart that device.", "Reconnect using the current Wi-Fi password.", "Check automatic date and time settings if sign-in pages or certificates fail."],
      },
      {
        level: "factory-reset",
        title: "Factory-reset only with setup details ready",
        whenToUse: "Use this after a locked-out configuration, unknown admin password, or persistent setup failure that survives a power cycle.",
        keeps: ["Device firmware in most cases"],
        removes: ["Wi-Fi name and password", "ISP login or VLAN settings on some connections", "Parental controls, port forwarding, reservations, and custom DNS"],
        steps: ["Photograph the label while hiding passwords, QR codes, MAC addresses, and serial numbers from public view.", "Record ISP login, VLAN, phone, mesh, and bridge-mode settings where applicable.", "Keep the router powered on and press the recessed Reset button only for the duration stated by the manufacturer.", "Wait for the router to restart, then use the official setup app or local admin page.", "Restore the Wi-Fi name and password only after the internet connection works."],
        stopIf: ["The router belongs to the ISP and remote provisioning is unclear.", "The connection uses business, static-IP, VoIP, bridge, or managed mesh settings.", "You do not have the current setup credentials."],
      },
    ],
    beforeFactoryReset: ["Save the current Wi-Fi name and password.", "Record ISP credentials and any custom network settings.", "Confirm whether the router is owned or managed by the ISP.", "Make sure at least one device can complete setup afterward."],
    afterReset: ["Test internet by cable before changing advanced settings.", "Install current firmware from the official admin interface.", "Use a new administrator password.", "Reconnect smart-home devices gradually so a failing client is easier to identify."],
    relatedSearch: "wifi router no internet",
  },
  {
    slug: "printer",
    name: "Printer reset",
    device: "Printer or multifunction device",
    summary: "Clear a stalled print system while preserving network, fax, address-book, and calibration settings whenever possible.",
    searchTerms: ["printer reset", "printer factory reset", "printer offline reset"],
    symptoms: ["Printer is offline", "Jobs are stuck", "Control panel is frozen", "Wrong network settings"],
    startWith: "restart",
    levels: [
      {
        level: "restart",
        title: "Restart the printer and clear the queue",
        whenToUse: "Use this for stuck jobs, an unresponsive panel, or a printer that appears offline.",
        keeps: ["Wi-Fi and Ethernet settings", "Fax and address-book data", "Paper and quality presets"],
        removes: ["Active print jobs after the queue is cleared", "Temporary error state"],
        steps: ["Cancel visible jobs from the printer panel if it responds.", "Clear the print queue on the computer or phone.", "Turn the printer off with its power button.", "Wait 30 seconds, then turn it on and allow startup to finish.", "Print an internal status or configuration page before reinstalling drivers."],
        stopIf: ["Paper is trapped around a hot fuser area.", "Ink, toner, or melted material is leaking.", "The printer makes repeated mechanical grinding sounds."],
      },
      {
        level: "network-reset",
        title: "Reset only network settings",
        whenToUse: "Use this when USB printing works but Wi-Fi, Ethernet, AirPrint, Mopria, or network discovery fails.",
        keeps: ["Most print-quality settings", "Page count", "Firmware"],
        removes: ["Saved Wi-Fi networks", "Static IP and DNS settings", "Some web-service connections"],
        steps: ["Print or photograph the current network configuration page.", "Open Network, Wireless, Connectivity, or Restore Network Defaults on the control panel.", "Confirm a network-only reset rather than a full factory reset.", "Reconnect the printer to the intended network.", "Remove and add the printer again on one test device."],
      },
      {
        level: "factory-reset",
        title: "Use a full reset only after exporting needed data",
        whenToUse: "Use this for an unknown administrator password, corrupted configuration, or persistent control-panel issue after firmware and network checks.",
        keeps: ["Installed firmware in most cases", "Hardware page count on many models"],
        removes: ["Network settings", "Address books and scan destinations on some models", "Fax, security, and administrator settings", "Custom paper and workflow presets"],
        steps: ["Export address books, scan destinations, certificates, and configuration backups when the interface allows it.", "Record the exact model and regional product number.", "Use Restore Factory Defaults from the official control panel or administrator interface.", "Complete language, region, paper, network, and security setup.", "Install only the required driver or official app on one device before expanding."],
        stopIf: ["The device is managed by a workplace or print provider.", "A maintenance contract controls firmware or configuration.", "The reset menu requests a service password you do not have."],
      },
    ],
    beforeFactoryReset: ["Export address books and scan destinations.", "Record static IP, DNS, email, folder, fax, and administrator settings.", "Confirm replacement ink or toner is not the real issue.", "Check whether the printer is organization-managed."],
    afterReset: ["Set the correct region, time, and paper size.", "Reconnect networking before adding multiple computers.", "Print an internal test page.", "Re-enable scan destinations and security settings one at a time."],
    relatedSearch: "printer offline connected",
  },
  {
    slug: "smart-tv-streaming-device",
    name: "Smart TV reset",
    device: "Smart TV or streaming device",
    summary: "Separate an app restart, device power cycle, network reset, and factory reset so accounts, channels, picture settings, and accessibility options are not erased unnecessarily.",
    searchTerms: ["smart tv reset", "tv factory reset", "streaming device restart"],
    symptoms: ["Streaming app is frozen", "TV has sound but no picture", "Wi-Fi will not reconnect", "Menus are slow or crash"],
    startWith: "restart",
    levels: [
      {
        level: "restart",
        title: "Restart the app or operating system",
        whenToUse: "Use this when one app freezes, buffers, or fails while other apps work.",
        keeps: ["Signed-in accounts in most cases", "Picture and sound settings", "Wi-Fi configuration"],
        removes: ["Temporary app state"],
        steps: ["Exit the affected app completely rather than returning to its home screen.", "Open another app to confirm whether the problem is app-specific.", "Use Restart in Settings when available.", "Reopen the app and test a different title or stream."],
      },
      {
        level: "power-cycle",
        title: "Perform a real power cycle",
        whenToUse: "Use this for blank screens, frozen menus, HDMI handshake issues, or a remote that wakes the device but cannot control it.",
        keeps: ["Apps and accounts", "Network and picture settings"],
        removes: ["Temporary HDMI, memory, and operating-system state"],
        steps: ["Turn the device off.", "Unplug the TV or streaming device from power for 60 seconds.", "Disconnect external HDMI devices only when access is safe.", "Reconnect power and start with one source.", "Test the home screen before reconnecting extra devices."],
        stopIf: ["The TV is wall-mounted and cables cannot be reached safely.", "There is a burnt smell, clicking power supply, cracked panel, or liquid exposure."],
      },
      {
        level: "network-reset",
        title: "Reset networking without erasing the TV",
        whenToUse: "Use this when apps cannot connect but menus, HDMI, and offline features still work.",
        keeps: ["Installed apps", "Picture and sound settings", "Most accounts"],
        removes: ["Saved Wi-Fi details", "Manual IP and DNS settings"],
        steps: ["Test the same service on another device using the same network.", "Forget the current Wi-Fi network or choose Reset Network.", "Restart the router only if multiple devices are affected.", "Reconnect using the correct Wi-Fi band and password.", "Check automatic date and time."],
      },
      {
        level: "factory-reset",
        title: "Factory-reset after documenting settings",
        whenToUse: "Use this for persistent operating-system corruption, repeated app crashes across services, or ownership transfer.",
        keeps: ["Current firmware on most devices"],
        removes: ["Accounts and installed apps", "Wi-Fi details", "Picture, sound, channel, accessibility, and privacy settings"],
        steps: ["Photograph picture, sound, accessibility, antenna, and input-label settings.", "Confirm account passwords and two-factor access.", "Open System, General, Device Preferences, or Support and choose the full reset option.", "Complete initial setup and test built-in apps before reconnecting HDMI equipment.", "Restore custom settings gradually."],
      },
    ],
    beforeFactoryReset: ["Confirm account passwords and two-factor access.", "Photograph calibrated picture and sound settings.", "Record antenna channels, accessibility options, and custom input names.", "Remove personal profiles before transferring ownership."],
    afterReset: ["Install system updates before many apps.", "Test built-in streaming on one network.", "Reconnect HDMI sources one at a time.", "Re-enable motion, HDR, sound, and accessibility preferences only after basic operation is stable."],
    relatedSearch: "smart tv not working",
  },
  {
    slug: "phone-tablet",
    name: "Phone or tablet reset",
    device: "iPhone, iPad, or Android device",
    summary: "Fix a frozen phone, network problem, or broken preference without deleting photos, messages, authentication apps, and account access too early.",
    searchTerms: ["phone reset", "android factory reset", "iphone reset settings"],
    symptoms: ["Phone is frozen", "Wi-Fi or Bluetooth fails", "Apps crash after a setting change", "Preparing the device for transfer"],
    startWith: "restart",
    levels: [
      {
        level: "restart",
        title: "Restart or force-restart without erasing data",
        whenToUse: "Use this for a frozen screen, unresponsive app, temporary battery drain, or connectivity issue.",
        keeps: ["Photos, apps, accounts, and settings"],
        removes: ["Temporary memory and stalled processes"],
        steps: ["Try the normal power menu first.", "Use the model-specific force-restart button sequence only when the screen does not respond.", "Allow the device to boot fully before reopening the failing app.", "Check free storage and install pending operating-system and app updates."],
        stopIf: ["The battery is swollen, the device is unusually hot, or the screen is lifting.", "The device has liquid exposure and is connected to power."],
      },
      {
        level: "network-reset",
        title: "Reset network settings only",
        whenToUse: "Use this after persistent Wi-Fi, Bluetooth, VPN, hotspot, or cellular configuration issues.",
        keeps: ["Photos, apps, messages, and most account data"],
        removes: ["Saved Wi-Fi networks", "Bluetooth pairings", "VPN and some cellular network preferences"],
        steps: ["Record Wi-Fi passwords and required VPN settings.", "Open the operating system reset or transfer menu.", "Choose Reset Network Settings, not Erase All Content or Factory Data Reset.", "Reconnect Wi-Fi and one Bluetooth accessory.", "Test without reinstalling third-party VPN or security profiles first."],
      },
      {
        level: "settings-reset",
        title: "Reset settings while keeping personal files",
        whenToUse: "Use this after broad preference corruption, notification problems, keyboard issues, or accessibility settings that cannot be located.",
        keeps: ["Personal files and installed apps on supported reset options"],
        removes: ["System preferences", "Permissions, keyboard, privacy, display, or home-screen settings depending on the option"],
        steps: ["Back up the device even when the option claims to keep data.", "Read the confirmation text carefully.", "Choose Reset All Settings or Reset App Preferences only when it explicitly says personal data remains.", "Restart and test before changing many preferences again."],
      },
      {
        level: "factory-reset",
        title: "Erase the device only after a verified backup",
        whenToUse: "Use this for ownership transfer, severe software corruption, or a clean rebuild after other resets fail.",
        keeps: ["Nothing stored only on the device unless restored from backup"],
        removes: ["Accounts, apps, photos, messages, authentication tokens, eSIMs depending on the choice, and local files"],
        steps: ["Verify cloud or computer backup contents rather than assuming sync is complete.", "Transfer authentication apps, recovery codes, eSIM details, and messaging backups.", "Sign out or disable theft-protection features as required for ownership transfer.", "Use the official erase or factory-reset menu while the battery is adequately charged.", "Restore from backup, then verify calls, messages, authentication, and photos."],
        stopIf: ["You cannot access the primary account or activation credentials.", "Two-factor recovery depends only on this device.", "A workplace management profile controls the phone."],
      },
    ],
    beforeFactoryReset: ["Open several photos and files from the backup destination.", "Transfer authenticator accounts and save recovery codes.", "Confirm the primary account password and activation access.", "Decide whether to keep or erase eSIMs.", "Back up encrypted messaging apps separately when required."],
    afterReset: ["Install operating-system updates first.", "Restore core accounts and authentication before optional apps.", "Verify calls, messages, camera, photos, and backups.", "Reinstall VPN, security, and device-management profiles last."],
    relatedSearch: "phone app not working",
  },
  {
    slug: "windows-pc",
    name: "Windows reset",
    device: "Windows 10 or Windows 11 PC",
    summary: "Choose between restarting, repairing networking, resetting one app, restoring system settings, and reinstalling Windows with clear data-loss boundaries.",
    searchTerms: ["windows reset", "reset this pc", "windows network reset"],
    symptoms: ["PC is frozen", "Internet fails on this PC", "One app is broken", "Windows remains unstable after repair"],
    startWith: "restart",
    levels: [
      {
        level: "restart",
        title: "Restart before using recovery tools",
        whenToUse: "Use this after an update, driver change, frozen app, missing device, or temporary performance problem.",
        keeps: ["Files, apps, accounts, and settings"],
        removes: ["Temporary memory and stalled processes"],
        steps: ["Save open work when possible.", "Choose Restart rather than Shut down when testing update or driver problems.", "Allow Windows Update to finish if it is actively configuring changes.", "After sign-in, test the original problem before opening many startup apps."],
      },
      {
        level: "network-reset",
        title: "Use Network reset for system-wide adapter problems",
        whenToUse: "Use this when multiple networks fail only on this PC after driver, VPN, firewall, or adapter changes.",
        keeps: ["Personal files and installed desktop apps"],
        removes: ["Network adapters and their settings before reinstall", "Saved custom adapter settings", "Some VPN and virtual-switch configuration"],
        steps: ["Record static IP, DNS, VPN, proxy, Hyper-V, virtual switch, and work-network settings.", "Test the Windows network troubleshooter and adapter disable/enable first.", "Open Settings, Network and internet, Advanced network settings, then Network reset.", "Restart when prompted.", "Reconnect Wi-Fi and reinstall required VPN or virtual-network software."],
        stopIf: ["The PC uses managed corporate networking.", "Remote access is the only way to administer the machine.", "Static-IP, industrial, laboratory, or virtual-machine networking is not documented."],
      },
      {
        level: "settings-reset",
        title: "Repair or reset one app before Windows",
        whenToUse: "Use this when one Store app or built-in Windows component fails but the operating system is otherwise stable.",
        keeps: ["Other apps and personal files"],
        removes: ["The selected app data and sign-in when Reset is chosen"],
        steps: ["Open Settings, Apps, Installed apps, and the app advanced options.", "Try Repair first when available.", "Use Reset only after noting app sign-in and offline data.", "Reopen the app and install updates from its official source."],
      },
      {
        level: "factory-reset",
        title: "Use Reset this PC after backup and recovery preparation",
        whenToUse: "Use this when Windows remains unusable after malware cleanup, system repair, update removal, driver rollback, and targeted app fixes.",
        keeps: ["Personal files only when Keep my files is selected and completes successfully"],
        removes: ["Installed applications", "Many settings and drivers", "All personal data when Remove everything is selected"],
        steps: ["Back up personal files to a separate destination and open samples from that backup.", "Save BitLocker recovery keys, application licenses, browser recovery data, and account passwords.", "Choose Keep my files or Remove everything based on the recovery goal.", "Prefer cloud download when local recovery files may be damaged and the connection is reliable.", "After setup, install Windows Update, device drivers, security software, and applications in stages."],
        stopIf: ["BitLocker recovery information is unavailable.", "The PC contains business data without a verified backup.", "Storage hardware is failing or disappearing from firmware."],
      },
    ],
    beforeFactoryReset: ["Verify backups on another device.", "Save BitLocker recovery keys.", "Export browser bookmarks and password-vault recovery information.", "List installed paid applications and licenses.", "Record VPN, printer, network-drive, and work-account settings."],
    afterReset: ["Complete Windows Update before judging performance.", "Install manufacturer drivers only when Windows lacks required hardware support.", "Restore files before reinstalling every optional app.", "Create a restore point after the system becomes stable."],
    relatedSearch: "windows error",
  },
  {
    slug: "appliance-controls",
    name: "Appliance control reset",
    device: "Washing machine, dishwasher, dryer, oven, or refrigerator controls",
    summary: "Clear a temporary control fault without entering service mode, bypassing safety devices, or assuming a factory reset can repair a failed component.",
    searchTerms: ["appliance reset", "washing machine reset", "dishwasher reset"],
    symptoms: ["Control panel is frozen", "Cycle will not start", "Code appeared after a power interruption", "Settings changed unexpectedly"],
    startWith: "power-cycle",
    levels: [
      {
        level: "power-cycle",
        title: "Use a safe power cycle",
        whenToUse: "Use this after a power interruption, frozen control panel, canceled cycle, or temporary communication code.",
        keeps: ["Most cycle and calibration data", "Model configuration", "Stored service history on many appliances"],
        removes: ["Temporary control state", "Some clock or user preferences"],
        steps: ["Stop the cycle and allow moving, hot, or water-filled systems to become safe.", "Use the normal power button first.", "Disconnect power at the plug or breaker only when it is accessible and clearly identified.", "Wait 5 minutes.", "Restore power and run the shortest empty test allowed by the user manual."],
        stopIf: ["There is leaking water, smoke, a burnt smell, sparking, gas odor, overheating, or a tripped breaker.", "The appliance is hard-wired and the correct isolator cannot be identified.", "A door is locked with hot water, steam, or moving parts inside."],
      },
      {
        level: "settings-reset",
        title: "Reset user settings, not service calibration",
        whenToUse: "Use this when language, sound, favorites, Wi-Fi, clock, child lock, or cycle preferences are wrong.",
        keeps: ["Safety configuration and model programming when using a user-menu reset"],
        removes: ["User preferences", "Wi-Fi pairing and app connection on connected models"],
        steps: ["Find the complete model number.", "Use the user manual to identify Reset settings, Restore defaults, or Wi-Fi reset.", "Do not enter undocumented service, diagnostic, engineering, or calibration menus.", "Restore clock, language, water-hardness, rinse-aid, or network preferences as applicable.", "Run a normal empty test."],
      },
      {
        level: "factory-reset",
        title: "Treat factory reset as model-specific",
        whenToUse: "Use this only when the official manual provides a user-accessible factory-default procedure for the exact model.",
        keeps: ["Nothing can be assumed across appliance families"],
        removes: ["User settings and connected-app pairing", "Potential calibration or regional settings on some products"],
        steps: ["Confirm the full model, suffix, and region.", "Read the complete official reset section before pressing a button combination.", "Photograph current settings.", "Use only the documented consumer procedure.", "Reconfigure required water-hardness, clock, language, network, or cycle settings."],
        stopIf: ["The procedure comes from an unrelated model or unofficial service menu.", "The code immediately returns after a safe power cycle.", "The appliance has a leak, heating, motor, gas, pressure, refrigerant, or electrical fault."],
      },
    ],
    beforeFactoryReset: ["Find the complete model and regional suffix.", "Use the official consumer manual.", "Photograph water-hardness, rinse-aid, clock, language, network, and favorite-cycle settings.", "Do not use service-menu combinations from a different model."],
    afterReset: ["Restore required regional and water-related settings.", "Run an empty supervised test.", "Stop if the original code or unsafe symptom returns.", "Use qualified service for component, wiring, gas, heating, pressure, or refrigerant faults."],
    relatedSearch: "appliance error code",
  },
];

export function getResetGuide(slug: string) {
  return resetGuides.find((guide) => guide.slug === slug);
}
