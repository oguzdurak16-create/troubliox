import type { Problem } from "./problems";

// Curated high-intent troubleshooting guides added in v1.3.
export const trafficProblems: Problem[] = [
  {
    "slug": "windows-11-wifi-connected-no-internet",
    "title": "Windows 11 Wi-Fi is connected but there is no internet",
    "shortTitle": "Windows 11 connected with no internet",
    "summary": "The PC has joined the local Wi-Fi network, but the router, DNS path, VPN, adapter configuration, or internet service is not passing traffic.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows 11 PC",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router or internet service is offline",
      "A VPN, proxy, or custom DNS setting is blocking traffic",
      "The Wi-Fi adapter has an invalid address or driver state",
      "Only one website or app is failing"
    ],
    "quickChecks": [
      {
        "title": "Test another device on the same Wi-Fi",
        "detail": "If every device is offline, focus on the router or internet provider.",
        "level": "safe"
      },
      {
        "title": "Turn off VPN and proxy temporarily",
        "detail": "Retest one normal website after disabling traffic-filtering tools.",
        "level": "safe"
      },
      {
        "title": "Forget and reconnect to the network",
        "detail": "Re-enter the Wi-Fi password and allow Windows to obtain fresh network settings.",
        "level": "safe"
      },
      {
        "title": "Run Network and Internet troubleshooting",
        "detail": "Use Windows Get Help or Settings before resetting the entire network.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What still works on the connection?",
    "observations": [
      {
        "label": "Other devices also have no internet",
        "advice": "Restart the modem or router and check the provider status."
      },
      {
        "label": "Only this PC is affected",
        "advice": "Focus on the adapter, VPN, DNS, driver, and saved network profile."
      },
      {
        "label": "Some websites work",
        "advice": "A DNS, filtering, date/time, or specific service issue is more likely."
      }
    ],
    "whenToStop": [
      "The router or power adapter is hot, damaged, or smells burned",
      "A work or school network requires administrator changes"
    ],
    "faq": [
      {
        "question": "Why does Windows say connected when the internet is down?",
        "answer": "Connected describes the link to the router, not the router’s connection to the wider internet."
      },
      {
        "question": "Should I use Network reset first?",
        "answer": "No. Try the smaller checks first because Network reset removes saved adapters and network configuration."
      }
    ],
    "tags": [
      "windows 11",
      "wifi",
      "connected no internet",
      "network"
    ],
    "contentKind": "symptom",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "featured": true,
    "sources": [
      {
        "label": "Microsoft: Fix Wi-Fi connection issues",
        "url": "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
      }
    ]
  },
  {
    "slug": "windows-11-bluetooth-not-finding-devices",
    "title": "Windows 11 Bluetooth is not finding devices",
    "shortTitle": "Windows 11 cannot find Bluetooth devices",
    "summary": "Discovery mode, distance, an existing connection, radio state, driver trouble, or unsupported Bluetooth profiles can prevent a device from appearing.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows 11 PC",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The accessory is not in pairing mode",
      "The accessory is already connected to another phone or PC",
      "Bluetooth is disabled or stuck on the Windows PC",
      "The adapter driver or required profile is unavailable"
    ],
    "quickChecks": [
      {
        "title": "Put the accessory in pairing mode again",
        "detail": "Use the accessory manual and keep it close to the PC.",
        "level": "safe"
      },
      {
        "title": "Disconnect it from other devices",
        "detail": "Temporarily turn off Bluetooth on phones or computers that may reconnect automatically.",
        "level": "safe"
      },
      {
        "title": "Toggle Bluetooth and restart both devices",
        "detail": "A fresh radio session often restores discovery.",
        "level": "safe"
      },
      {
        "title": "Check Windows Update and the PC maker driver",
        "detail": "Use the hardware manufacturer driver when Windows cannot identify the adapter correctly.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Does Windows see any Bluetooth devices?",
    "observations": [
      {
        "label": "No devices appear at all",
        "advice": "Check the Bluetooth toggle, airplane mode, adapter driver, and Device Manager."
      },
      {
        "label": "Other devices appear",
        "advice": "The missing accessory is likely not discoverable, is already connected, or uses an unsupported profile."
      },
      {
        "label": "The device appears but pairing fails",
        "advice": "Remove the old pairing record on both devices and try again with the correct PIN flow."
      }
    ],
    "whenToStop": [
      "The PC is managed by an organization that disables Bluetooth",
      "The accessory battery is swollen or damaged"
    ],
    "faq": [
      {
        "question": "Why can my phone see the device but Windows cannot?",
        "answer": "The accessory may support only certain Bluetooth profiles, or it may already be connected to the phone."
      },
      {
        "question": "Will removing a paired device delete files?",
        "answer": "No. It removes the Bluetooth relationship, not personal files."
      }
    ],
    "tags": [
      "windows 11",
      "bluetooth",
      "device not found",
      "pairing"
    ],
    "contentKind": "symptom",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ]
  },
  {
    "slug": "windows-update-error-0x80070005",
    "title": "Windows Update error 0x80070005: access denied",
    "shortTitle": "Windows Update 0x80070005",
    "summary": "Error 0x80070005 usually means the update process cannot access a required file, folder, registry entry, or Windows component because permission was denied.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows Update",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "Windows Update lacks permission to a required resource",
      "Security software or policy is blocking the update",
      "Windows component-store or update cache permissions are damaged",
      "The signed-in account does not have required administrative access"
    ],
    "quickChecks": [
      {
        "title": "Restart Windows and retry once",
        "detail": "A pending service or file lock can clear after a normal restart.",
        "level": "safe"
      },
      {
        "title": "Run the Windows Update troubleshooter",
        "detail": "Use Settings or Get Help to repair common service and cache conditions.",
        "level": "safe"
      },
      {
        "title": "Temporarily review third-party security controls",
        "detail": "Do not disable managed security without administrator approval.",
        "level": "caution"
      },
      {
        "title": "Use Microsoft’s code-specific repair guidance",
        "detail": "Avoid random registry permission changes from unverified guides.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Where does 0x80070005 appear?",
    "observations": [
      {
        "label": "During Windows Update",
        "advice": "Focus on update services, component permissions, and the update cache."
      },
      {
        "label": "While opening an app or file",
        "advice": "The same code can indicate access denial outside Windows Update; check the affected path and account."
      },
      {
        "label": "On a managed PC",
        "advice": "Organization policy or endpoint security may require the administrator."
      }
    ],
    "whenToStop": [
      "The PC is managed and you do not control security policy",
      "A guide asks you to grant broad permissions to the entire Windows folder"
    ],
    "faq": [
      {
        "question": "What does 0x80070005 mean?",
        "answer": "It maps to access denied. The important task is identifying which Windows resource or policy is denying access."
      },
      {
        "question": "Should I change registry permissions manually?",
        "answer": "Not as a first step. Broad permission changes can reduce security or damage Windows servicing."
      }
    ],
    "tags": [
      "windows update",
      "0x80070005",
      "access denied",
      "update error"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x80070005",
    "aliases": [
      "E_ACCESSDENIED"
    ],
    "appliesTo": "Supported Windows client versions",
    "sources": [
      {
        "label": "Microsoft Learn: Update error 0x80070005",
        "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-client/installing-updates-features-roles/troubleshoot-windows-update-error-0x80070005"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-update-error-0x80070002",
    "title": "Windows Update error 0x80070002: required update files are missing",
    "shortTitle": "Windows Update 0x80070002",
    "summary": "Error 0x80070002 commonly appears when Windows Update cannot find files it expects in the update cache or servicing process.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows Update",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The update cache contains incomplete or mismatched files",
      "A download or servicing operation was interrupted",
      "System date, storage, or component health is preventing completion",
      "The update itself has been superseded or replaced"
    ],
    "quickChecks": [
      {
        "title": "Restart and check free storage",
        "detail": "Complete pending restarts and leave adequate space for servicing.",
        "level": "safe"
      },
      {
        "title": "Run Windows Update troubleshooting",
        "detail": "Allow Windows to inspect services and cached update data.",
        "level": "safe"
      },
      {
        "title": "Retry after checking date and time",
        "detail": "Incorrect time can disrupt secure update communication.",
        "level": "safe"
      },
      {
        "title": "Use DISM or component repair only from official guidance",
        "detail": "Run elevated repair commands carefully and keep the PC on power.",
        "level": "caution"
      }
    ],
    "decisionTitle": "When does the code return?",
    "observations": [
      {
        "label": "Immediately when checking for updates",
        "advice": "Update services or cached metadata may be inconsistent."
      },
      {
        "label": "Near the end of installation",
        "advice": "A servicing or component-store issue is more likely."
      },
      {
        "label": "Only for one named update",
        "advice": "The package may have changed; check Windows Update history and retry later."
      }
    ],
    "whenToStop": [
      "The drive reports errors or repeatedly disappears",
      "The PC loses power during servicing"
    ],
    "faq": [
      {
        "question": "Will deleting the update cache remove personal files?",
        "answer": "No, but manual cache repair should follow Microsoft guidance because update services must be handled correctly."
      },
      {
        "question": "Can the error disappear on its own?",
        "answer": "A replaced update package or Microsoft-side correction can resolve a single-update failure, but repeated errors need local checks."
      }
    ],
    "tags": [
      "windows update",
      "0x80070002",
      "missing files",
      "update cache"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x80070002",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-update-error-0x80070643",
    "title": "Windows Update error 0x80070643: installation failed",
    "shortTitle": "Windows Update 0x80070643",
    "summary": "Error 0x80070643 is a general installation failure that can involve a specific update package, Windows servicing, Microsoft Defender definitions, or an application installer.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows Update",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A package or installer ended with a fatal error",
      "Windows servicing components are damaged or pending restart",
      "Security definition or recovery-environment requirements are not met",
      "The failing item is an application update rather than Windows itself"
    ],
    "quickChecks": [
      {
        "title": "Identify the exact failed update",
        "detail": "Open Update history and record the KB number or product name.",
        "level": "safe"
      },
      {
        "title": "Restart and retry the single item",
        "detail": "Do not repeatedly install every optional update at once.",
        "level": "safe"
      },
      {
        "title": "Run the relevant Microsoft troubleshooter",
        "detail": "Use Windows Update or the affected product’s repair path.",
        "level": "safe"
      },
      {
        "title": "Check the KB support page",
        "detail": "Some 0x80070643 failures have update-specific requirements.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Which item reports 0x80070643?",
    "observations": [
      {
        "label": "A Windows KB update",
        "advice": "Use the KB number to find package-specific requirements."
      },
      {
        "label": "Microsoft Defender intelligence",
        "advice": "Retry definitions and verify security services are running."
      },
      {
        "label": "A desktop application installer",
        "advice": "Repair or reinstall that application rather than resetting all of Windows."
      }
    ],
    "whenToStop": [
      "The update involves firmware and the PC is not on stable power",
      "Repeated failures are accompanied by disk or file-system errors"
    ],
    "faq": [
      {
        "question": "Is 0x80070643 one specific fault?",
        "answer": "No. It is an installation failure code; the failed package name is essential."
      },
      {
        "question": "Should I download random repair tools?",
        "answer": "No. Use the update’s publisher and Microsoft support paths."
      }
    ],
    "tags": [
      "windows update",
      "0x80070643",
      "installation failed",
      "update error"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x80070643",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-update-error-0x80070422",
    "title": "Windows Update error 0x80070422: a required service is disabled",
    "shortTitle": "Windows Update 0x80070422",
    "summary": "Error 0x80070422 often appears when Windows Update or a dependent service cannot start because it is disabled, blocked by policy, or damaged.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows Update",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Windows Update or a dependency is disabled",
      "A privacy or tuning utility changed service configuration",
      "Organization policy controls update services",
      "System servicing or security software is interfering"
    ],
    "quickChecks": [
      {
        "title": "Restart Windows",
        "detail": "Confirm the service was not only temporarily stopped.",
        "level": "safe"
      },
      {
        "title": "Run Windows Update troubleshooting",
        "detail": "Let Windows inspect the update service chain.",
        "level": "safe"
      },
      {
        "title": "Review recent tuning or privacy changes",
        "detail": "Reverse only settings you recognize and documented.",
        "level": "safe"
      },
      {
        "title": "Ask the administrator on managed PCs",
        "detail": "Do not override organization policy.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Is this a personal or managed PC?",
    "observations": [
      {
        "label": "Personal PC",
        "advice": "Check whether a utility or manual service change disabled Windows Update."
      },
      {
        "label": "Work or school PC",
        "advice": "Update services may be centrally controlled."
      },
      {
        "label": "The code appears in Microsoft Store",
        "advice": "The same disabled-service condition can affect Store downloads and related services."
      }
    ],
    "whenToStop": [
      "You do not understand a proposed service or registry change",
      "The PC is managed by an organization"
    ],
    "faq": [
      {
        "question": "What does 0x80070422 mean?",
        "answer": "It generally indicates that a required service cannot start because it is disabled or unavailable."
      },
      {
        "question": "Should Windows Update be set to Disabled?",
        "answer": "On normal personal systems, disabling core update services can break updating and Microsoft Store behavior."
      }
    ],
    "tags": [
      "windows update",
      "0x80070422",
      "service disabled",
      "microsoft store"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x80070422",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-update-error-0x800f081f",
    "title": "Windows Update error 0x800F081F: source files could not be found",
    "shortTitle": "Windows Update 0x800F081F",
    "summary": "Error 0x800F081F usually means Windows servicing could not find compatible source files needed to repair or enable a component.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows servicing",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The component store needs repair files that are unavailable",
      "The repair source does not match the installed Windows version",
      "Update policy prevents downloading repair content",
      "A language, edition, or build mismatch exists"
    ],
    "quickChecks": [
      {
        "title": "Confirm Windows edition and build",
        "detail": "Record the exact version before using installation media as a source.",
        "level": "safe"
      },
      {
        "title": "Install pending updates and restart",
        "detail": "A newer cumulative update may restore the required component files.",
        "level": "safe"
      },
      {
        "title": "Run the official DISM repair flow",
        "detail": "Use Microsoft syntax and a matching source when required.",
        "level": "caution"
      },
      {
        "title": "Do not use mismatched ISO files",
        "detail": "Wrong edition or build sources can fail or complicate repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What action triggered 0x800F081F?",
    "observations": [
      {
        "label": "DISM RestoreHealth",
        "advice": "Windows could not obtain a valid repair source."
      },
      {
        "label": "Enabling .NET Framework 3.5",
        "advice": "The optional feature source may be blocked or unavailable."
      },
      {
        "label": "Installing a cumulative update",
        "advice": "Component-store health or package compatibility needs attention."
      }
    ],
    "whenToStop": [
      "You cannot confirm that installation media matches the installed build",
      "The PC uses organization-managed update sources"
    ],
    "faq": [
      {
        "question": "Does 0x800F081F mean Windows must be reinstalled?",
        "answer": "Not usually. It often requires a valid repair source or servicing repair."
      },
      {
        "question": "Can any Windows ISO be used as a source?",
        "answer": "No. Edition, language, architecture, and build compatibility matter."
      }
    ],
    "tags": [
      "windows update",
      "0x800f081f",
      "source files not found",
      "dism"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x800F081F",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-blue-screen-critical-process-died",
    "title": "Windows blue screen: CRITICAL_PROCESS_DIED",
    "shortTitle": "CRITICAL_PROCESS_DIED blue screen",
    "summary": "This stop code means a Windows process essential to system operation ended unexpectedly, often because of corrupted system files, storage trouble, drivers, or unstable hardware.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows PC",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "A critical Windows process or system file is corrupted",
      "Storage errors interrupted access to system data",
      "A driver or security tool destabilized Windows",
      "Memory, firmware, or hardware is unstable"
    ],
    "quickChecks": [
      {
        "title": "Record the stop code and recent changes",
        "detail": "Note new drivers, hardware, updates, or security software.",
        "level": "safe"
      },
      {
        "title": "Disconnect recently added nonessential hardware",
        "detail": "Keep only display, keyboard, and mouse for the next boot.",
        "level": "safe"
      },
      {
        "title": "Use Safe Mode or Windows Recovery if needed",
        "detail": "Remove a recent driver or update only when the timing clearly matches.",
        "level": "caution"
      },
      {
        "title": "Back up data before repeated repair attempts",
        "detail": "Recurring crashes can indicate storage failure.",
        "level": "stop"
      }
    ],
    "decisionTitle": "When does the blue screen occur?",
    "observations": [
      {
        "label": "During every startup",
        "advice": "Recovery options, storage health, and recent boot-critical changes are priorities."
      },
      {
        "label": "Only under load",
        "advice": "Memory, heat, power, storage, or driver instability becomes more likely."
      },
      {
        "label": "After a new driver or update",
        "advice": "Roll back or remove the specific recent change from Safe Mode or Recovery."
      }
    ],
    "whenToStop": [
      "The drive clicks, disappears, or reports SMART warnings",
      "The PC cannot remain stable long enough to back up important data"
    ],
    "faq": [
      {
        "question": "Is CRITICAL_PROCESS_DIED always a hardware problem?",
        "answer": "No. Drivers and corrupted system files can cause it, but repeated crashes require storage and memory checks."
      },
      {
        "question": "Should I keep forcing restarts?",
        "answer": "Repeated forced shutdowns can worsen file-system damage. Use Recovery and protect data."
      }
    ],
    "tags": [
      "windows",
      "blue screen",
      "critical_process_died",
      "bsod"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "CRITICAL_PROCESS_DIED",
    "sources": [
      {
        "label": "Microsoft: Resolving Blue Screen errors",
        "url": "https://support.microsoft.com/en-us/windows/resolving-blue-screen-errors-in-windows-60b01860-58f2-be66-7516-5c45a66ae3c6"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-blue-screen-inaccessible-boot-device",
    "title": "Windows blue screen: INACCESSIBLE_BOOT_DEVICE",
    "shortTitle": "INACCESSIBLE_BOOT_DEVICE blue screen",
    "summary": "Windows lost access to the system drive during startup, which can follow storage-controller changes, failed updates, disk trouble, cloning, or firmware configuration changes.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows PC",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "Storage controller mode or driver changed",
      "A Windows update or disk clone altered boot access",
      "The system drive or connection is failing",
      "Boot or file-system data is damaged"
    ],
    "quickChecks": [
      {
        "title": "Undo recent BIOS or hardware changes",
        "detail": "Return storage settings to the documented previous state.",
        "level": "safe"
      },
      {
        "title": "Disconnect extra storage devices",
        "detail": "Leave the Windows system drive connected and retry.",
        "level": "safe"
      },
      {
        "title": "Open Windows Recovery",
        "detail": "Use Startup Repair or uninstall the specific recent update when appropriate.",
        "level": "caution"
      },
      {
        "title": "Protect data before disk-intensive repairs",
        "detail": "A failing drive should be imaged or serviced before repeated scans.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What changed before the stop code?",
    "observations": [
      {
        "label": "BIOS or storage mode changed",
        "advice": "Restore the former AHCI, RAID, or controller setting rather than guessing."
      },
      {
        "label": "The drive was cloned or replaced",
        "advice": "Boot records, partition layout, or controller compatibility may be wrong."
      },
      {
        "label": "No known change",
        "advice": "Treat drive health, cabling, and storage-controller failure as possibilities."
      }
    ],
    "whenToStop": [
      "The system drive is not detected consistently in firmware",
      "The drive makes unusual mechanical sounds or contains irreplaceable data"
    ],
    "faq": [
      {
        "question": "Can INACCESSIBLE_BOOT_DEVICE be fixed without reinstalling?",
        "answer": "Often, yes, when the cause is a controller setting, update, or boot repair. Drive failure changes the priority to data protection."
      },
      {
        "question": "Should I switch random BIOS storage modes?",
        "answer": "No. Changing modes without knowing the original configuration can make the system less bootable."
      }
    ],
    "tags": [
      "windows",
      "blue screen",
      "inaccessible_boot_device",
      "boot drive"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "INACCESSIBLE_BOOT_DEVICE",
    "sources": [
      {
        "label": "Microsoft: Resolving Blue Screen errors",
        "url": "https://support.microsoft.com/en-us/windows/resolving-blue-screen-errors-in-windows-60b01860-58f2-be66-7516-5c45a66ae3c6"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-blue-screen-driver-power-state-failure",
    "title": "Windows blue screen: DRIVER_POWER_STATE_FAILURE",
    "shortTitle": "DRIVER_POWER_STATE_FAILURE blue screen",
    "summary": "This stop code usually appears when a driver does not complete a required power-state change during sleep, wake, shutdown, or device power management.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows PC",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A device driver hangs during sleep or wake",
      "USB, Wi-Fi, Bluetooth, graphics, or storage hardware is not responding",
      "A recent driver or firmware update is unstable",
      "Power-management settings expose a device compatibility problem"
    ],
    "quickChecks": [
      {
        "title": "Note whether it follows sleep, wake, or shutdown",
        "detail": "The timing helps identify the device class involved.",
        "level": "safe"
      },
      {
        "title": "Disconnect nonessential USB devices",
        "detail": "Test sleep and wake with a minimal hardware set.",
        "level": "safe"
      },
      {
        "title": "Update or roll back the likely device driver",
        "detail": "Prefer the PC or device manufacturer package.",
        "level": "caution"
      },
      {
        "title": "Update firmware only on stable power",
        "detail": "Do not interrupt BIOS or device firmware updates.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Which transition triggers the crash?",
    "observations": [
      {
        "label": "Waking from sleep",
        "advice": "Focus on graphics, network, USB, dock, and storage drivers."
      },
      {
        "label": "Shutting down",
        "advice": "A service or device may not be releasing its power request."
      },
      {
        "label": "Only with a dock or accessory",
        "advice": "Test without the accessory and update its driver or firmware."
      }
    ],
    "whenToStop": [
      "The crash started during a failed firmware update",
      "The PC battery or power connection is unstable"
    ],
    "faq": [
      {
        "question": "Is DRIVER_POWER_STATE_FAILURE caused by the battery?",
        "answer": "Usually it points to a driver or device power-transition problem, not simply a worn battery."
      },
      {
        "question": "Can disabling sleep hide the issue?",
        "answer": "It may avoid the trigger but does not identify the faulty driver or device."
      }
    ],
    "tags": [
      "windows",
      "blue screen",
      "driver_power_state_failure",
      "sleep"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "DRIVER_POWER_STATE_FAILURE",
    "sources": [
      {
        "label": "Microsoft: Resolving Blue Screen errors",
        "url": "https://support.microsoft.com/en-us/windows/resolving-blue-screen-errors-in-windows-60b01860-58f2-be66-7516-5c45a66ae3c6"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-app-error-0xc0000142",
    "title": "Windows application error 0xC0000142: the app could not start correctly",
    "shortTitle": "Application error 0xC0000142",
    "summary": "Error 0xC0000142 means an application failed during initialization, commonly because of damaged program files, incompatible modules, runtime components, or security interference.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows application",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The application or one of its DLL modules is damaged",
      "A runtime component or dependency is missing",
      "Compatibility, overlay, or security software blocks initialization",
      "The program version is not compatible with the current Windows build"
    ],
    "quickChecks": [
      {
        "title": "Restart and launch the app directly",
        "detail": "Avoid old shortcuts and test the main executable once.",
        "level": "safe"
      },
      {
        "title": "Repair or reinstall the affected application",
        "detail": "Use the publisher’s installer and preserve license or project data.",
        "level": "safe"
      },
      {
        "title": "Disable nonessential overlays for one test",
        "detail": "Game, recording, shell, or security hooks can interfere.",
        "level": "caution"
      },
      {
        "title": "Check the app publisher support page",
        "detail": "Do not download replacement DLL files from random websites.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Is one app or every app affected?",
    "observations": [
      {
        "label": "Only one app",
        "advice": "Repair that program and its documented dependencies."
      },
      {
        "label": "Several unrelated apps",
        "advice": "Windows components, security hooks, or system-file health may be involved."
      },
      {
        "label": "The issue began after an update",
        "advice": "Check app compatibility and the specific update or driver change."
      }
    ],
    "whenToStop": [
      "A website tells you to download individual DLL files from an unknown source",
      "The application contains important unsynchronized data"
    ],
    "faq": [
      {
        "question": "What does 0xC0000142 mean?",
        "answer": "The application initialization process failed; the code does not identify one universal missing file."
      },
      {
        "question": "Will compatibility mode fix it?",
        "answer": "Sometimes for older software, but use the software publisher’s supported settings first."
      }
    ],
    "tags": [
      "windows",
      "0xc0000142",
      "application unable to start",
      "dll"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0xC0000142",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-network-path-not-found-0x80070035",
    "title": "Windows error 0x80070035: network path was not found",
    "shortTitle": "Network path not found 0x80070035",
    "summary": "Windows cannot reach the requested shared computer, server name, or folder path. The name, network profile, sharing service, firewall, or host availability may be wrong.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows network share",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The computer name or share path is incorrect",
      "The host is offline or on another network",
      "Network discovery, file sharing, or firewall rules block access",
      "Name resolution fails even though the host IP is reachable"
    ],
    "quickChecks": [
      {
        "title": "Confirm the exact share path",
        "detail": "Use the format \\ComputerName\\ShareName and verify spelling.",
        "level": "safe"
      },
      {
        "title": "Test whether the host is online",
        "detail": "Check that both devices are on the intended network.",
        "level": "safe"
      },
      {
        "title": "Try the host IP for diagnosis",
        "detail": "If IP works but name does not, focus on name resolution.",
        "level": "caution"
      },
      {
        "title": "Review sharing and firewall settings on the host",
        "detail": "Change only the correct private network profile or approved organization policy.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Can the host be reached another way?",
    "observations": [
      {
        "label": "IP address works, computer name fails",
        "advice": "DNS, NetBIOS, or local name resolution is the likely area."
      },
      {
        "label": "Neither IP nor name works",
        "advice": "Connectivity, firewall, VLAN, or host power is more likely."
      },
      {
        "label": "The host opens but the share does not",
        "advice": "The share name or permissions are the next checks."
      }
    ],
    "whenToStop": [
      "The share contains sensitive work data and permissions are unclear",
      "The network is public or untrusted"
    ],
    "faq": [
      {
        "question": "What does 0x80070035 mean?",
        "answer": "Windows could not find or reach the requested network path."
      },
      {
        "question": "Does turning off the firewall prove the cause?",
        "answer": "It can create risk and is not a good first test. Verify the correct sharing rules and network profile instead."
      }
    ],
    "tags": [
      "windows",
      "0x80070035",
      "network path not found",
      "shared folder"
    ],
    "contentKind": "error-code",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "errorCode": "0x80070035",
    "sources": [
      {
        "label": "Microsoft Windows support",
        "url": "https://support.microsoft.com/en-us/windows"
      }
    ],
    "modelNote": "The same Windows code can appear in different operations. Match the code to the failed update, app, boot stage, or action before applying repairs."
  },
  {
    "slug": "windows-dns-server-not-responding",
    "title": "Windows says the DNS server is not responding",
    "shortTitle": "DNS server not responding in Windows",
    "summary": "The PC can reach the local network but cannot reliably translate website names into IP addresses because of router, provider, VPN, adapter, or DNS configuration trouble.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows PC",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router or provider DNS service is unavailable",
      "A VPN, security filter, or custom DNS setting is failing",
      "The adapter has stale network information",
      "Only one browser or application is affected"
    ],
    "quickChecks": [
      {
        "title": "Test another device and website",
        "detail": "Separate a network-wide outage from one-PC trouble.",
        "level": "safe"
      },
      {
        "title": "Restart the router and PC",
        "detail": "Allow both devices to rebuild their network state.",
        "level": "safe"
      },
      {
        "title": "Disable VPN or custom DNS for one test",
        "detail": "Return settings afterward if they are required.",
        "level": "safe"
      },
      {
        "title": "Use Windows network troubleshooting",
        "detail": "Avoid copying unknown command scripts into an elevated terminal.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What can the PC still reach?",
    "observations": [
      {
        "label": "IP addresses work but names do not",
        "advice": "The symptom strongly points to DNS resolution."
      },
      {
        "label": "Nothing on the internet works",
        "advice": "The issue may be broader than DNS."
      },
      {
        "label": "Only one browser fails",
        "advice": "Check that browser’s proxy, secure DNS, extensions, and cache."
      }
    ],
    "whenToStop": [
      "The network belongs to an employer, school, hotel, or public venue",
      "Security software reports interception or certificate warnings"
    ],
    "faq": [
      {
        "question": "Can changing DNS fix this?",
        "answer": "It can help if the configured DNS service is unavailable, but it will not fix a dead internet connection."
      },
      {
        "question": "Why does the problem affect only one device?",
        "answer": "That device may have a custom DNS, VPN, stale adapter state, or security-filter issue."
      }
    ],
    "tags": [
      "windows",
      "dns server not responding",
      "internet",
      "network"
    ],
    "contentKind": "symptom",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "sources": [
      {
        "label": "Microsoft: Fix Wi-Fi connection issues",
        "url": "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
      }
    ]
  },
  {
    "slug": "windows-print-job-stuck-in-queue",
    "title": "Windows print job is stuck in the queue",
    "shortTitle": "Print job stuck in Windows",
    "summary": "A paused printer, offline connection, damaged job, spooler state, driver problem, or inaccessible printer can leave documents waiting indefinitely.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The printer is offline, paused, or unavailable",
      "One damaged document is blocking later jobs",
      "The Windows print spooler is stuck",
      "The selected driver or printer port is incorrect"
    ],
    "quickChecks": [
      {
        "title": "Check the physical printer first",
        "detail": "Resolve paper, ink, cover, cable, and network warnings.",
        "level": "safe"
      },
      {
        "title": "Cancel the oldest job",
        "detail": "Wait briefly and close the app that created it.",
        "level": "safe"
      },
      {
        "title": "Restart the printer and Windows",
        "detail": "This clears many temporary queue and connection states.",
        "level": "safe"
      },
      {
        "title": "Use Microsoft’s spooler repair steps",
        "detail": "Stop the service before clearing spool files and restart it afterward.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What does the queue status show?",
    "observations": [
      {
        "label": "Deleting",
        "advice": "Close the source app and restart the spooler if the job never clears."
      },
      {
        "label": "Error - printing",
        "advice": "Check the printer connection, physical state, port, and driver."
      },
      {
        "label": "Paused or offline",
        "advice": "Resume the printer and confirm the correct device is selected."
      }
    ],
    "whenToStop": [
      "The queue is on a managed print server",
      "The printer displays a mechanical or overheating warning"
    ],
    "faq": [
      {
        "question": "Why does one stuck job block everything?",
        "answer": "The spooler processes queued jobs in order, so a damaged or unreachable first job can hold later jobs."
      },
      {
        "question": "Will clearing the queue delete the original document?",
        "answer": "No. It removes the pending print copy, not the saved source file."
      }
    ],
    "tags": [
      "windows",
      "printer queue",
      "print job stuck",
      "spooler"
    ],
    "contentKind": "symptom",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "windows-print-spooler-keeps-stopping",
    "title": "Windows Print Spooler keeps stopping",
    "shortTitle": "Print Spooler keeps stopping",
    "summary": "A damaged print job, incompatible driver, monitor component, security restriction, or corrupted spooler files can repeatedly stop the Windows printing service.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Windows Print Spooler",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A queued job crashes the spooler",
      "A printer driver or port monitor is incompatible",
      "Spool files or print configuration are damaged",
      "Security policy or endpoint protection blocks the service"
    ],
    "quickChecks": [
      {
        "title": "Disconnect printers and restart Windows",
        "detail": "Test the spooler without immediately resending the same job.",
        "level": "safe"
      },
      {
        "title": "Clear the queue using the official sequence",
        "detail": "Stop the spooler before removing pending spool files.",
        "level": "safe"
      },
      {
        "title": "Remove the most recently added printer or driver",
        "detail": "Use Printers & scanners and the manufacturer driver package.",
        "level": "caution"
      },
      {
        "title": "Escalate managed print systems",
        "detail": "Server queues and organization drivers need administrator control.",
        "level": "stop"
      }
    ],
    "decisionTitle": "When does the spooler stop?",
    "observations": [
      {
        "label": "As soon as one document is sent",
        "advice": "The document, application, or selected driver may trigger the crash."
      },
      {
        "label": "Immediately after the service starts",
        "advice": "A driver, port monitor, or existing spool file is likely loading at startup."
      },
      {
        "label": "Only with one printer",
        "advice": "Remove and reinstall that printer with the correct driver."
      }
    ],
    "whenToStop": [
      "The PC uses a company print server",
      "Removing drivers would affect production or specialized equipment"
    ],
    "faq": [
      {
        "question": "Can I leave the Print Spooler disabled?",
        "answer": "Printing will not work, and some print-related features may fail. Identify the driver or job causing the stop."
      },
      {
        "question": "Why does it restart and stop again?",
        "answer": "The same faulty job or driver component may be loaded each time the service starts."
      }
    ],
    "tags": [
      "windows",
      "print spooler",
      "service stops",
      "printer"
    ],
    "contentKind": "symptom",
    "brand": "Microsoft",
    "brandSlug": "microsoft",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "printer-offline-but-connected",
    "title": "Printer says offline even though it is connected",
    "shortTitle": "Printer is connected but offline",
    "summary": "The computer may be using an old printer instance, wrong port, stale network address, paused queue, or a connection that exists physically but is not responding.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The wrong printer copy or port is selected",
      "The printer obtained a new network address",
      "The print queue is paused or Windows is using offline mode",
      "The driver or connection session is stuck"
    ],
    "quickChecks": [
      {
        "title": "Check the printer display and connection",
        "detail": "Confirm it is ready and connected to the same network as the computer.",
        "level": "safe"
      },
      {
        "title": "Select the correct printer instance",
        "detail": "Remove duplicates only after identifying the active device.",
        "level": "safe"
      },
      {
        "title": "Restart printer, router, and computer",
        "detail": "Allow the network printer to obtain a fresh address.",
        "level": "safe"
      },
      {
        "title": "Remove and reinstall using the maker’s method",
        "detail": "Use the manufacturer app or Windows printer setup.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How is the printer connected?",
    "observations": [
      {
        "label": "USB",
        "advice": "Try a different USB port and inspect the cable without using an unpowered hub."
      },
      {
        "label": "Wi-Fi",
        "advice": "Confirm the printer and computer are on the same SSID and subnet."
      },
      {
        "label": "Ethernet",
        "advice": "Check the link light and whether the printer has a valid network address."
      }
    ],
    "whenToStop": [
      "The printer reports smoke, overheating, or electrical damage",
      "The device is managed by an organization"
    ],
    "faq": [
      {
        "question": "Why can I see the printer but it is offline?",
        "answer": "The saved printer object can remain visible even when its current port or network address no longer responds."
      },
      {
        "question": "Should I disable “Use Printer Offline”?",
        "answer": "Only if the printer is actually reachable; otherwise the jobs will simply fail."
      }
    ],
    "tags": [
      "printer",
      "offline",
      "connected",
      "not printing"
    ],
    "contentKind": "symptom",
    "featured": true,
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "printer-not-printing-black-ink",
    "title": "Printer is not printing black ink",
    "shortTitle": "Printer will not print black",
    "summary": "An empty or vent-blocked cartridge, dried nozzles, air in the ink path, incorrect media settings, or a printhead fault can leave black text blank or faint.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Inkjet printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Black ink is empty, expired, blocked, or not recognized",
      "The black printhead nozzles are dried or clogged",
      "The cartridge vent or protective seal is blocked",
      "The driver is using an unexpected color or media mode"
    ],
    "quickChecks": [
      {
        "title": "Print the built-in quality or nozzle test",
        "detail": "Use the printer control panel, not a document from the computer.",
        "level": "safe"
      },
      {
        "title": "Check cartridge level, vent, and seating",
        "detail": "Remove only as directed by the model manual.",
        "level": "safe"
      },
      {
        "title": "Run one normal cleaning cycle",
        "detail": "Excessive repeated cleaning wastes ink and can overheat some heads.",
        "level": "caution"
      },
      {
        "title": "Stop before solvents or manual printhead power tests",
        "detail": "Use only manufacturer-approved cleaning procedures.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What does the test pattern show?",
    "observations": [
      {
        "label": "Black is completely absent",
        "advice": "Focus on the black cartridge, vent, ink path, and black nozzle section."
      },
      {
        "label": "Black has gaps or stripes",
        "advice": "A controlled nozzle cleaning and alignment may help."
      },
      {
        "label": "The test is good but documents fail",
        "advice": "Check the app, driver, grayscale, paper type, and selected printer."
      }
    ],
    "whenToStop": [
      "Ink is leaking inside the printer",
      "The printhead becomes unusually hot or the printer reports a hardware code"
    ],
    "faq": [
      {
        "question": "Should I run cleaning ten times?",
        "answer": "No. Run the manual’s recommended sequence and allow rest periods; repeated cleaning consumes ink and may not clear a failed head."
      },
      {
        "question": "Can a full cartridge still fail?",
        "answer": "Yes. The vent, chip, ink outlet, or printhead path can be blocked even when the level appears full."
      }
    ],
    "tags": [
      "printer",
      "black ink not printing",
      "blank black",
      "printhead"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "HP Customer Support",
        "url": "https://support.hp.com/"
      },
      {
        "label": "Canon Support",
        "url": "https://www.usa.canon.com/support"
      },
      {
        "label": "Epson Support",
        "url": "https://epson.com/Support/sl/s"
      },
      {
        "label": "Brother Support",
        "url": "https://support.brother.com/"
      }
    ]
  },
  {
    "slug": "printer-printing-blank-pages",
    "title": "Printer is printing blank pages",
    "shortTitle": "Printer prints blank pages",
    "summary": "Blank pages can result from empty or sealed supplies, blocked nozzles, an incorrect paper path, driver output trouble, or a document that contains hidden or white content.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Ink or toner is empty, sealed, or not reaching the page",
      "Printhead nozzles are blocked",
      "The wrong driver or page language is sending unusable output",
      "The document or application is producing blank pages"
    ],
    "quickChecks": [
      {
        "title": "Print the printer’s internal test page",
        "detail": "This separates printer hardware from the computer and document.",
        "level": "safe"
      },
      {
        "title": "Check supplies and shipping seals",
        "detail": "Confirm cartridges are seated and all protective tape was removed.",
        "level": "safe"
      },
      {
        "title": "Run the approved quality check",
        "detail": "Use nozzle check, cleaning, or calibration from the model menu.",
        "level": "safe"
      },
      {
        "title": "Test from another app or device",
        "detail": "If internal pages print, focus on the driver or source document.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Are internal test pages also blank?",
    "observations": [
      {
        "label": "Yes, internal pages are blank",
        "advice": "The issue is inside the printer: supplies, ink path, printhead, imaging, or transfer system."
      },
      {
        "label": "No, internal pages print correctly",
        "advice": "The computer, driver, app, or document is the likely source."
      },
      {
        "label": "Only every second page is blank",
        "advice": "Check document section breaks, duplex settings, and inserted blank pages."
      }
    ],
    "whenToStop": [
      "Toner or ink is spilling",
      "The printer requires internal laser or high-voltage access"
    ],
    "faq": [
      {
        "question": "Can a driver cause blank pages?",
        "answer": "Yes, especially when the wrong printer language or generic driver is used."
      },
      {
        "question": "Why does the printer sound normal?",
        "answer": "Paper movement can complete even when no ink, toner, or usable page data reaches the sheet."
      }
    ],
    "tags": [
      "printer",
      "blank pages",
      "no ink",
      "not printing"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "printer-paper-jam-but-no-paper-visible",
    "title": "Printer reports a paper jam but no paper is visible",
    "shortTitle": "Paper jam with no paper visible",
    "summary": "A small torn scrap, dirty or stuck sensor flag, obstructed carriage path, incorrect paper loading, or a feed mechanism that did not return home can keep the jam warning active.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A small paper fragment remains in the path",
      "A paper or carriage sensor is blocked or stuck",
      "The paper guides or tray are loaded incorrectly",
      "The pickup or feed mechanism did not complete its movement"
    ],
    "quickChecks": [
      {
        "title": "Power off and unplug the printer",
        "detail": "Wait for moving parts to stop before opening access doors.",
        "level": "safe"
      },
      {
        "title": "Inspect every approved paper path",
        "detail": "Use a flashlight and turn removable rollers only as the manual allows.",
        "level": "safe"
      },
      {
        "title": "Remove and reload the paper stack",
        "detail": "Square the paper and set guides without bending the sheets.",
        "level": "safe"
      },
      {
        "title": "Do not pull against resistance",
        "detail": "Torn paper and damaged sensor flags make the fault harder to clear.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Where does the printer stop?",
    "observations": [
      {
        "label": "Before paper enters",
        "advice": "Focus on tray loading, pickup rollers, guides, and the entry sensor."
      },
      {
        "label": "Paper stops halfway",
        "advice": "Inspect the duplex path, rear door, and fuser or output path as the manual permits."
      },
      {
        "label": "The carriage cannot move",
        "advice": "Look for labels, scraps, or objects in the carriage path without forcing it."
      }
    ],
    "whenToStop": [
      "The printer is a laser model with hot internal parts",
      "A sensor lever or carriage component appears broken"
    ],
    "faq": [
      {
        "question": "Can a tiny scrap keep the jam warning on?",
        "answer": "Yes. A small piece can hold a paper-path sensor in the wrong position."
      },
      {
        "question": "Should I use compressed air?",
        "answer": "Not inside toner or ink mechanisms unless the manufacturer specifically instructs it; debris can be driven deeper."
      }
    ],
    "tags": [
      "printer",
      "paper jam",
      "no paper",
      "jam sensor"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "printer-not-found-on-wifi",
    "title": "Wireless printer is not found on Wi-Fi",
    "shortTitle": "Wi-Fi printer not found",
    "summary": "The printer may be on a different network, not in setup mode, connected only to 2.4 GHz, using an old address, or blocked by guest-network isolation.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Wireless printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Printer and computer are on different SSIDs or subnets",
      "The printer is not connected to Wi-Fi or is in setup mode",
      "Guest isolation prevents local device discovery",
      "The printer or router uses incompatible band or security settings"
    ],
    "quickChecks": [
      {
        "title": "Print or view the printer network status",
        "detail": "Confirm its SSID, IP address, and connection state.",
        "level": "safe"
      },
      {
        "title": "Put both devices on the same main network",
        "detail": "Avoid guest networks during setup.",
        "level": "safe"
      },
      {
        "title": "Restart the printer and router",
        "detail": "Wait for the printer to reconnect before searching again.",
        "level": "safe"
      },
      {
        "title": "Use the printer maker setup app or manual IP add",
        "detail": "Follow the model instructions rather than guessing WPS sequences.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Does the printer have a network address?",
    "observations": [
      {
        "label": "No address or 0.0.0.0",
        "advice": "Reconnect the printer to Wi-Fi."
      },
      {
        "label": "Valid address, but computer cannot find it",
        "advice": "Discovery, firewall, subnet, or driver setup is likely."
      },
      {
        "label": "Printer appears on phones only",
        "advice": "The PC firewall, network profile, or driver may be blocking discovery."
      }
    ],
    "whenToStop": [
      "The network is managed by a company or school",
      "The router requires security changes you do not understand"
    ],
    "faq": [
      {
        "question": "Why does the printer connect to 2.4 GHz only?",
        "answer": "Many printers use 2.4 GHz for range and compatibility. The computer can still be on 5 GHz if both bands share the same local network."
      },
      {
        "question": "Does WPS always work?",
        "answer": "No. Some routers disable WPS, and timing or security modes can prevent pairing."
      }
    ],
    "tags": [
      "printer",
      "wifi printer not found",
      "wireless printer",
      "network"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "printer-printing-streaks-or-lines",
    "title": "Printer is printing streaks, bands, or lines",
    "shortTitle": "Printer prints streaks or lines",
    "summary": "Dirty or blocked nozzles, low supplies, damaged imaging parts, alignment trouble, unsuitable paper, or debris in the paper path can create repeated lines.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Inkjet nozzles are blocked or misaligned",
      "Toner, drum, transfer, or fuser components are worn or dirty",
      "Paper is damp, coated incorrectly, or set to the wrong media type",
      "Debris or ink is marking the paper path"
    ],
    "quickChecks": [
      {
        "title": "Print an internal quality test",
        "detail": "The pattern direction and color help identify the subsystem.",
        "level": "safe"
      },
      {
        "title": "Check supply level and media setting",
        "detail": "Use dry supported paper and the matching media type.",
        "level": "safe"
      },
      {
        "title": "Run one cleaning or calibration procedure",
        "detail": "Follow the model menu and allow completion.",
        "level": "caution"
      },
      {
        "title": "Do not touch drums, belts, or printhead surfaces",
        "detail": "Fingerprints and scratches can permanently damage imaging parts.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What pattern do the lines follow?",
    "observations": [
      {
        "label": "Same place on every page",
        "advice": "A roller, drum, belt, or fixed nozzle area is likely."
      },
      {
        "label": "Only one color is affected",
        "advice": "Focus on that cartridge, channel, or printhead color."
      },
      {
        "label": "Lines appear only from one app",
        "advice": "Check scaling, driver, and the source document."
      }
    ],
    "whenToStop": [
      "Toner spills or internal parts are hot",
      "A drum, transfer belt, or printhead surface is visibly damaged"
    ],
    "faq": [
      {
        "question": "Will alignment fix missing lines?",
        "answer": "Alignment corrects placement; it does not usually restore blocked nozzles or damaged imaging parts."
      },
      {
        "question": "Why do marks repeat at equal distances?",
        "answer": "A rotating roller or drum defect often repeats once per circumference."
      }
    ],
    "tags": [
      "printer",
      "streaks",
      "lines",
      "print quality"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Microsoft: Fix printer connection and printing problems",
        "url": "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows"
      }
    ]
  },
  {
    "slug": "hp-printer-e4-error",
    "title": "HP printer E4 error: paper jam condition",
    "shortTitle": "HP printer E4 error",
    "summary": "On many HP DeskJet families, E4 indicates a paper-jam condition or paper-path obstruction. The exact display can differ by model, so use the full model number.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "HP printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Paper is jammed or torn in the path",
      "The carriage or pickup mechanism is obstructed",
      "A paper sensor remains triggered",
      "Paper guides or the stack are loaded incorrectly"
    ],
    "quickChecks": [
      {
        "title": "Turn off and unplug the printer",
        "detail": "Wait for the carriage and rollers to stop.",
        "level": "safe"
      },
      {
        "title": "Inspect all model-approved access points",
        "detail": "Remove paper in the direction of travel where possible.",
        "level": "safe"
      },
      {
        "title": "Check the carriage path and reload paper",
        "detail": "Do not force the carriage or overload the tray.",
        "level": "safe"
      },
      {
        "title": "Use the exact HP model jam procedure",
        "detail": "Access doors and reset sequences vary.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where is the paper or obstruction?",
    "observations": [
      {
        "label": "At the input tray",
        "advice": "Remove the stack, inspect pickup rollers, and reload correctly."
      },
      {
        "label": "Under the carriage",
        "advice": "Remove loose scraps without touching the encoder strip."
      },
      {
        "label": "No paper is visible",
        "advice": "A sensor, torn fragment, carriage obstruction, or feed fault may remain."
      }
    ],
    "whenToStop": [
      "The carriage is locked and requires force",
      "Ink, smoke, or damaged wiring is visible"
    ],
    "faq": [
      {
        "question": "What does E4 mean on an HP printer?",
        "answer": "On many DeskJet models it indicates a paper jam, but confirm the model because displays vary."
      },
      {
        "question": "Why does E4 remain after removing paper?",
        "answer": "A torn fragment, stuck sensor, obstructed carriage, or incomplete reset can keep the condition active."
      }
    ],
    "tags": [
      "hp",
      "printer",
      "e4",
      "paper jam"
    ],
    "contentKind": "error-code",
    "brand": "HP",
    "brandSlug": "hp",
    "errorCode": "E4",
    "modelNote": "HP display codes vary by printer family. Match the complete model number to HP support before opening access areas.",
    "sources": [
      {
        "label": "HP Customer Support",
        "url": "https://support.hp.com/"
      }
    ]
  },
  {
    "slug": "canon-printer-b200-error",
    "title": "Canon printer B200 error: printhead temperature or electrical fault",
    "shortTitle": "Canon printer B200 error",
    "summary": "B200 on many Canon inkjet models points to a serious printhead or printhead-control condition, often involving abnormal temperature or electrical detection.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Canon inkjet printer",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The printhead overheated or developed an electrical fault",
      "Ink flow or a cartridge condition contributed to overheating",
      "The printhead contacts or carriage electronics are abnormal",
      "The main control board cannot drive or read the printhead correctly"
    ],
    "quickChecks": [
      {
        "title": "Turn the printer off and unplug it",
        "detail": "Allow the printhead area to cool before any approved check.",
        "level": "safe"
      },
      {
        "title": "Check cartridges and visible ink condition",
        "detail": "Use only the model manual and avoid touching electrical contacts.",
        "level": "safe"
      },
      {
        "title": "Perform only the official reseat procedure",
        "detail": "Not every Canon model has a user-removable printhead.",
        "level": "caution"
      },
      {
        "title": "Stop before board or printhead electrical testing",
        "detail": "B200 often requires qualified service or replacement evaluation.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does B200 return immediately?",
    "observations": [
      {
        "label": "Immediately at power-on",
        "advice": "A persistent printhead or control fault is likely."
      },
      {
        "label": "After printing begins",
        "advice": "Heat, ink flow, or an intermittent printhead condition may be involved."
      },
      {
        "label": "After a cartridge change",
        "advice": "Verify compatible cartridges and correct seating, then stop if the code remains."
      }
    ],
    "whenToStop": [
      "There is a burning smell or visible ink leak",
      "The manual does not identify the printhead as user-removable"
    ],
    "faq": [
      {
        "question": "Can B200 be cleared by a hidden button sequence?",
        "answer": "Temporary reset claims do not repair an overheating or electrical printhead fault. Use Canon’s model-specific guidance."
      },
      {
        "question": "Does B200 always mean the whole printer is finished?",
        "answer": "Not always, but printhead and board costs can make replacement the practical outcome on some models."
      }
    ],
    "tags": [
      "canon",
      "printer",
      "b200",
      "printhead"
    ],
    "contentKind": "error-code",
    "brand": "Canon",
    "brandSlug": "canon",
    "errorCode": "B200",
    "modelNote": "Canon code definitions and user-removable parts differ by model.",
    "sources": [
      {
        "label": "Canon Support",
        "url": "https://www.usa.canon.com/support"
      }
    ]
  },
  {
    "slug": "canon-printer-5100-error",
    "title": "Canon printer 5100 error: carriage movement is obstructed",
    "shortTitle": "Canon printer 5100 error",
    "summary": "Error 5100 on many Canon inkjet printers indicates that the carriage cannot move or be positioned normally because of an obstruction, paper scrap, packing material, or carriage mechanism fault.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Canon inkjet printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Paper, label material, or packing tape blocks the carriage",
      "The cartridge or printhead is not seated correctly",
      "The encoder strip is dirty, displaced, or damaged",
      "The carriage motor or mechanism is failing"
    ],
    "quickChecks": [
      {
        "title": "Power off and unplug the printer",
        "detail": "Wait until movement stops.",
        "level": "safe"
      },
      {
        "title": "Inspect the paper and carriage paths",
        "detail": "Remove visible scraps and any shipping material.",
        "level": "safe"
      },
      {
        "title": "Check cartridge seating as the manual allows",
        "detail": "Do not touch or wipe the transparent encoder strip casually.",
        "level": "caution"
      },
      {
        "title": "Stop if the carriage binds or the strip is damaged",
        "detail": "Forcing the carriage can damage gears and sensors.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when the printer starts?",
    "observations": [
      {
        "label": "The carriage moves and hits an object",
        "advice": "Remove the obstruction without forcing the mechanism."
      },
      {
        "label": "The carriage does not move",
        "advice": "A lock, motor, belt, sensor, or control fault may need service."
      },
      {
        "label": "The error began after moving the printer",
        "advice": "Check for shipping tape, displaced parts, and loose cartridges."
      }
    ],
    "whenToStop": [
      "The carriage requires force to move",
      "The encoder strip is detached, scratched, or heavily contaminated"
    ],
    "faq": [
      {
        "question": "What does Canon 5100 mean?",
        "answer": "On many models it indicates abnormal carriage movement or positioning."
      },
      {
        "question": "Should I oil the carriage rail?",
        "answer": "Not unless Canon’s service information for the exact model specifies a compatible lubricant."
      }
    ],
    "tags": [
      "canon",
      "printer",
      "5100",
      "carriage"
    ],
    "contentKind": "error-code",
    "brand": "Canon",
    "brandSlug": "canon",
    "errorCode": "5100",
    "modelNote": "Confirm the exact Canon model before moving cartridges or the carriage.",
    "sources": [
      {
        "label": "Canon Support",
        "url": "https://www.usa.canon.com/support"
      }
    ]
  },
  {
    "slug": "epson-printer-0x97-error",
    "title": "Epson printer 0x97 error: internal hardware fault detected",
    "shortTitle": "Epson printer 0x97 error",
    "summary": "Error 0x97 on affected Epson inkjet models generally indicates an internal hardware or printhead-control fault that can appear during startup or printing.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Epson inkjet printer",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The printhead or its control circuit is abnormal",
      "An internal cable, sensor, or board connection is failing",
      "Ink contamination or a carriage condition affects operation",
      "The main board detects an unrecoverable internal fault"
    ],
    "quickChecks": [
      {
        "title": "Cancel printing and power the printer off",
        "detail": "Disconnect power for the model-recommended interval.",
        "level": "safe"
      },
      {
        "title": "Check only accessible paper and cartridge areas",
        "detail": "Remove obvious jams without opening the cabinet.",
        "level": "safe"
      },
      {
        "title": "Install official firmware or utility updates if available",
        "detail": "Use Epson support for the exact model.",
        "level": "caution"
      },
      {
        "title": "Stop before internal cable or board access",
        "detail": "0x97 commonly requires service diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "When does 0x97 appear?",
    "observations": [
      {
        "label": "Immediately at startup",
        "advice": "A persistent internal hardware fault is likely."
      },
      {
        "label": "When the carriage moves",
        "advice": "Carriage, printhead, cable, or obstruction issues become more likely."
      },
      {
        "label": "Only during long print jobs",
        "advice": "Heat or an intermittent electronics condition may be involved."
      }
    ],
    "whenToStop": [
      "Ink has leaked into electronics",
      "The printer repeatedly resets, smokes, or becomes hot"
    ],
    "faq": [
      {
        "question": "Can unplugging fix Epson 0x97?",
        "answer": "It may clear a temporary state, but a code that returns usually needs model-specific service."
      },
      {
        "question": "Should I clean the printhead with household fluid?",
        "answer": "No. Liquids can damage electronics and seals; follow Epson’s supported maintenance only."
      }
    ],
    "tags": [
      "epson",
      "printer",
      "0x97",
      "hardware fault"
    ],
    "contentKind": "error-code",
    "brand": "Epson",
    "brandSlug": "epson",
    "errorCode": "0x97",
    "modelNote": "Epson error behavior differs by model and region.",
    "sources": [
      {
        "label": "Epson Support",
        "url": "https://epson.com/Support/sl/s"
      }
    ]
  },
  {
    "slug": "brother-printer-unable-to-print-46",
    "title": "Brother “Unable to Print 46”: ink absorber or purge counter condition",
    "shortTitle": "Brother Unable to Print 46",
    "summary": "On many Brother inkjet models, “Unable to Print 46” is associated with the internal ink absorber or purge system reaching its service limit.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Brother inkjet printer",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The waste-ink absorber or maintenance box has reached its limit",
      "The purge counter indicates service is required",
      "Ink has accumulated in the internal maintenance area",
      "A service reset is needed only after the physical maintenance is completed"
    ],
    "quickChecks": [
      {
        "title": "Stop repeated cleaning cycles",
        "detail": "Additional purging sends more ink to the absorber.",
        "level": "safe"
      },
      {
        "title": "Check whether the model has a replaceable maintenance box",
        "detail": "Some models expose a user-replaceable part; others require service.",
        "level": "safe"
      },
      {
        "title": "Use Brother support for the exact model",
        "detail": "The physical absorber and counter procedure differ.",
        "level": "caution"
      },
      {
        "title": "Do not reset the counter without servicing the ink path",
        "detail": "An unserviced absorber can overflow inside the printer.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does the model have a maintenance box?",
    "observations": [
      {
        "label": "User-replaceable box is listed",
        "advice": "Replace it using the model instructions and confirm the message clears."
      },
      {
        "label": "No user-replaceable part is listed",
        "advice": "The printer likely requires service for absorber replacement or cleaning."
      },
      {
        "label": "Ink is visible under the printer",
        "advice": "Disconnect power and prevent further use until the leak is addressed."
      }
    ],
    "whenToStop": [
      "Ink is leaking from the cabinet",
      "A guide suggests only resetting a hidden counter without physical maintenance"
    ],
    "faq": [
      {
        "question": "What does Unable to Print 46 mean?",
        "answer": "On many Brother inkjet models it indicates that the waste-ink or purge system has reached a service condition."
      },
      {
        "question": "Can I only reset the purge counter?",
        "answer": "Not safely if the absorber is actually saturated. The physical waste-ink capacity must be addressed."
      }
    ],
    "tags": [
      "brother",
      "printer",
      "unable to print 46",
      "ink absorber"
    ],
    "contentKind": "error-code",
    "brand": "Brother",
    "brandSlug": "brother",
    "errorCode": "Unable to Print 46",
    "aliases": [
      "Print Unable 46",
      "Machine Error 46"
    ],
    "modelNote": "Brother messages and maintenance parts differ by model.",
    "sources": [
      {
        "label": "Brother Support",
        "url": "https://support.brother.com/"
      }
    ]
  },
  {
    "slug": "wifi-connected-no-internet",
    "title": "Wi-Fi is connected but there is no internet",
    "shortTitle": "Wi-Fi connected with no internet",
    "summary": "The device has joined the router, but the router, modem, DNS path, captive portal, or internet provider is not delivering usable access.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Wi-Fi network",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The modem or internet service is offline",
      "The router has lost its WAN connection",
      "A captive portal, DNS, VPN, or date/time problem blocks access",
      "Only the affected device has stale network settings"
    ],
    "quickChecks": [
      {
        "title": "Test two devices and two websites",
        "detail": "This separates a network outage from one app or device.",
        "level": "safe"
      },
      {
        "title": "Check modem and router status lights",
        "detail": "Compare them with the equipment manual.",
        "level": "safe"
      },
      {
        "title": "Restart network equipment in order",
        "detail": "Power the modem first, then the router after the modem is ready.",
        "level": "safe"
      },
      {
        "title": "Forget and reconnect on one affected device",
        "detail": "Avoid factory-resetting the router before smaller checks.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How many devices are affected?",
    "observations": [
      {
        "label": "Every device",
        "advice": "Focus on the modem, router WAN link, provider outage, or account status."
      },
      {
        "label": "Only one device",
        "advice": "Focus on that device’s VPN, DNS, saved network, and adapter."
      },
      {
        "label": "A sign-in page should appear",
        "advice": "Open a normal HTTP site or the network sign-in notification to complete the captive portal."
      }
    ],
    "whenToStop": [
      "The modem or router is damaged, wet, or overheating",
      "The connection is controlled by a workplace, school, hotel, or landlord"
    ],
    "faq": [
      {
        "question": "Why does Wi-Fi show full bars without internet?",
        "answer": "Bars measure the radio link to the router, not the router’s connection to the provider."
      },
      {
        "question": "Should I factory reset the router?",
        "answer": "Not first. A reset deletes provider, Wi-Fi, and custom settings and may leave the network unusable."
      }
    ],
    "tags": [
      "wifi",
      "connected no internet",
      "router",
      "internet"
    ],
    "contentKind": "symptom",
    "featured": true,
    "sources": [
      {
        "label": "Wi-Fi Alliance knowledge center",
        "url": "https://www.wi-fi.org/knowledge-center"
      },
      {
        "label": "Microsoft: Fix Wi-Fi connection issues",
        "url": "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
      }
    ]
  },
  {
    "slug": "router-internet-light-red",
    "title": "Router internet light is red",
    "shortTitle": "Red internet light on router",
    "summary": "A red internet or WAN light usually means the router cannot establish a usable upstream connection to the modem or provider, but exact LED meanings vary by model.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Router",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The modem or provider link is down",
      "The WAN cable or port is disconnected or faulty",
      "The router lacks valid provider authentication or address information",
      "A firmware, account, or provisioning issue prevents connection"
    ],
    "quickChecks": [
      {
        "title": "Read the LED legend for the exact model",
        "detail": "Red can mean different conditions across brands.",
        "level": "safe"
      },
      {
        "title": "Check the WAN cable and modem status",
        "detail": "Reseat cables without moving fiber connectors.",
        "level": "safe"
      },
      {
        "title": "Power-cycle modem, then router",
        "detail": "Wait for the modem to fully synchronize before starting the router.",
        "level": "safe"
      },
      {
        "title": "Contact the provider before factory reset",
        "detail": "Provider provisioning or credentials may be required.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What does the modem show?",
    "observations": [
      {
        "label": "The modem also shows a fault",
        "advice": "The provider line or modem is the priority."
      },
      {
        "label": "The modem is normal, router is red",
        "advice": "Focus on the WAN cable, router port, credentials, or router state."
      },
      {
        "label": "Internet works when connected directly to the modem",
        "advice": "The router or its configuration is the likely problem."
      }
    ],
    "whenToStop": [
      "A fiber connector or live coax line would need disassembly",
      "The power supply or router smells burned"
    ],
    "faq": [
      {
        "question": "Does a red light always mean the router is broken?",
        "answer": "No. It often means the upstream internet connection is unavailable."
      },
      {
        "question": "Will a factory reset fix it?",
        "answer": "Only if bad configuration is the cause; it can also erase provider settings."
      }
    ],
    "tags": [
      "router",
      "red internet light",
      "wan",
      "no internet"
    ],
    "contentKind": "symptom",
    "modelNote": "LED colors and labels vary. Use the exact router or gateway manual.",
    "sources": [
      {
        "label": "Wi-Fi Alliance knowledge center",
        "url": "https://www.wi-fi.org/knowledge-center"
      }
    ]
  },
  {
    "slug": "router-dsl-light-keeps-blinking",
    "title": "Router DSL light keeps blinking and will not stay solid",
    "shortTitle": "DSL light blinking",
    "summary": "A continuously blinking DSL light means the modem is trying to synchronize with the telephone-line service but has not established a stable DSL link.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "DSL modem-router",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The DSL line or provider service is down",
      "A phone filter, splitter, cable, or wall socket is faulty",
      "Noise or an extension device disrupts the line",
      "The modem is not compatible or provisioned correctly"
    ],
    "quickChecks": [
      {
        "title": "Connect the modem directly to the main socket",
        "detail": "Temporarily remove extensions, splitters, and phones where safe.",
        "level": "safe"
      },
      {
        "title": "Check the DSL cable and filter arrangement",
        "detail": "Use the short cable and filter layout specified by the provider.",
        "level": "safe"
      },
      {
        "title": "Restart the modem once",
        "detail": "Wait several minutes for synchronization.",
        "level": "safe"
      },
      {
        "title": "Report a persistent no-sync condition to the provider",
        "detail": "Line testing requires the network operator.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does the DSL light ever become solid?",
    "observations": [
      {
        "label": "Never becomes solid",
        "advice": "A line, socket, filter, cable, provisioning, or modem fault is likely."
      },
      {
        "label": "Solid, then drops repeatedly",
        "advice": "Interference, line noise, or marginal signal quality is likely."
      },
      {
        "label": "Solid but internet light stays off",
        "advice": "DSL synchronization works; authentication or provider session is the next area."
      }
    ],
    "whenToStop": [
      "Telephone wiring would need to be opened",
      "There is lightning damage or a burned socket"
    ],
    "faq": [
      {
        "question": "What is the difference between DSL and internet lights?",
        "answer": "DSL indicates physical line synchronization; internet indicates the provider session and routed access."
      },
      {
        "question": "Can Wi-Fi settings cause a blinking DSL light?",
        "answer": "No. DSL synchronization happens upstream of the local Wi-Fi network."
      }
    ],
    "tags": [
      "dsl",
      "blinking light",
      "router",
      "no sync"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "fiber-router-los-light-red",
    "title": "Fiber modem LOS light is red",
    "shortTitle": "Red LOS light on fiber modem",
    "summary": "A red LOS light means loss of optical signal on many fiber ONTs or gateways. The fiber path, connector, provider network, or optical terminal is not receiving usable light.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Fiber ONT or gateway",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The provider fiber signal is absent",
      "The fiber cable is sharply bent, disconnected, or damaged",
      "A connector is contaminated or disturbed",
      "The ONT or provider equipment has failed"
    ],
    "quickChecks": [
      {
        "title": "Do not look into or touch the fiber end",
        "detail": "Fiber light can be invisible and connectors are easily contaminated.",
        "level": "safe"
      },
      {
        "title": "Check only visible cable routing",
        "detail": "Look for a loose external connector or sharp bend without unplugging it.",
        "level": "safe"
      },
      {
        "title": "Restart the ONT only if the provider permits",
        "detail": "Wait for the full optical registration sequence.",
        "level": "safe"
      },
      {
        "title": "Contact the fiber provider",
        "detail": "Optical power and line faults require provider testing.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Which optical lights are on?",
    "observations": [
      {
        "label": "LOS red and PON off",
        "advice": "The ONT is not receiving or registering optical service."
      },
      {
        "label": "LOS flashes intermittently",
        "advice": "The signal may be marginal or the fiber path unstable."
      },
      {
        "label": "PON is normal but internet is down",
        "advice": "The optical link may be fine; router, account, or service routing is next."
      }
    ],
    "whenToStop": [
      "The fiber connector would need to be unplugged or cleaned",
      "The cable is crushed, cut, or sharply kinked"
    ],
    "faq": [
      {
        "question": "What does LOS stand for?",
        "answer": "It commonly means Loss Of Signal."
      },
      {
        "question": "Can rebooting fix red LOS?",
        "answer": "It may recover a temporary ONT state, but it cannot repair a missing or weak optical signal."
      }
    ],
    "tags": [
      "fiber",
      "los red",
      "ont",
      "no internet"
    ],
    "contentKind": "symptom",
    "modelNote": "Indicator names differ by provider equipment. Follow the ONT label and provider guide."
  },
  {
    "slug": "wifi-keeps-disconnecting",
    "title": "Wi-Fi keeps disconnecting",
    "shortTitle": "Wi-Fi disconnects repeatedly",
    "summary": "Weak signal, interference, roaming between access points, power saving, router instability, or a driver problem can repeatedly break the connection.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Wi-Fi network",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Signal or interference changes at the device location",
      "The router or mesh system is restarting or steering clients poorly",
      "The device adapter enters a power-saving or driver fault state",
      "VPN, security, or DHCP renewal disrupts traffic"
    ],
    "quickChecks": [
      {
        "title": "Compare another device in the same place",
        "detail": "This separates router coverage from one-device trouble.",
        "level": "safe"
      },
      {
        "title": "Move close to the main router for one test",
        "detail": "A stable nearby connection points to coverage or interference.",
        "level": "safe"
      },
      {
        "title": "Restart the affected device and router",
        "detail": "Note the exact time if drops continue.",
        "level": "safe"
      },
      {
        "title": "Update router firmware and device driver carefully",
        "detail": "Use vendor packages and stable power.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What changes when the connection drops?",
    "observations": [
      {
        "label": "Wi-Fi icon disappears",
        "advice": "The radio link is dropping."
      },
      {
        "label": "Wi-Fi stays connected but internet stops",
        "advice": "The router WAN, DNS, VPN, or provider path is dropping."
      },
      {
        "label": "Only while moving through the building",
        "advice": "Roaming, band steering, mesh handoff, or weak overlap is likely."
      }
    ],
    "whenToStop": [
      "The router reboots, overheats, or loses power",
      "Firmware update power is unstable"
    ],
    "faq": [
      {
        "question": "Can too many nearby networks cause drops?",
        "answer": "Heavy interference can reduce reliability, especially on crowded 2.4 GHz channels."
      },
      {
        "question": "Why does only one laptop disconnect?",
        "answer": "Its driver, antenna, power saving, or saved network profile may differ from other devices."
      }
    ],
    "tags": [
      "wifi",
      "disconnecting",
      "drops",
      "router"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Wi-Fi Alliance knowledge center",
        "url": "https://www.wi-fi.org/knowledge-center"
      },
      {
        "label": "Microsoft: Fix Wi-Fi connection issues",
        "url": "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
      }
    ]
  },
  {
    "slug": "wifi-network-not-showing",
    "title": "Wi-Fi network is not showing up",
    "shortTitle": "Wi-Fi network not visible",
    "summary": "The router may not be broadcasting the expected band or name, the device may not support that band or channel, or the wireless adapter may be disabled or too far away.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Wi-Fi network",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The SSID broadcast is disabled or changed",
      "The device does not support the selected band or channel",
      "The adapter or Wi-Fi radio is disabled",
      "The signal is too weak at the current location"
    ],
    "quickChecks": [
      {
        "title": "Check whether other devices can see the network",
        "detail": "This separates router broadcast from one-device detection.",
        "level": "safe"
      },
      {
        "title": "Move next to the router",
        "detail": "Retest before changing settings.",
        "level": "safe"
      },
      {
        "title": "Restart Wi-Fi on the device and router",
        "detail": "Allow the network list to refresh.",
        "level": "safe"
      },
      {
        "title": "Check 2.4 GHz, 5 GHz, and channel compatibility",
        "detail": "Do not change regulatory region settings.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Who can see the network?",
    "observations": [
      {
        "label": "No device sees it",
        "advice": "The router SSID, radio, power, or configuration is likely."
      },
      {
        "label": "Only newer devices see it",
        "advice": "The router may use a band, channel, or security mode unsupported by older hardware."
      },
      {
        "label": "The network appears only nearby",
        "advice": "Coverage, antenna placement, or interference is limiting reach."
      }
    ],
    "whenToStop": [
      "The router is managed by an organization or provider",
      "A firmware or regulatory setting would be changed without documentation"
    ],
    "faq": [
      {
        "question": "Can a hidden network still be joined?",
        "answer": "Yes, with the exact SSID and security details, but hiding the name is not strong security."
      },
      {
        "question": "Why does 5 GHz disappear sooner?",
        "answer": "Higher-frequency Wi-Fi commonly has less range through walls than 2.4 GHz."
      }
    ],
    "tags": [
      "wifi",
      "network not showing",
      "ssid",
      "wireless"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Wi-Fi Alliance knowledge center",
        "url": "https://www.wi-fi.org/knowledge-center"
      }
    ]
  },
  {
    "slug": "wifi-slow-in-one-room",
    "title": "Wi-Fi is slow in one room",
    "shortTitle": "Slow Wi-Fi in one room",
    "summary": "Distance, walls, metal, appliances, interference, and poor access-point placement can make one room much slower even when the internet plan is fast.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Home Wi-Fi",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The room has weak signal or obstructed line of sight",
      "The device is connected to a distant access point or band",
      "Local interference affects the selected channel",
      "The client device has a weaker adapter or antenna"
    ],
    "quickChecks": [
      {
        "title": "Run the same test near the router and in the room",
        "detail": "Use the same device and test method.",
        "level": "safe"
      },
      {
        "title": "Check which access point and band are used",
        "detail": "A device can remain attached to a distant mesh node.",
        "level": "safe"
      },
      {
        "title": "Move the router into the open and higher",
        "detail": "Avoid cabinets, floors, TVs, and metal objects.",
        "level": "safe"
      },
      {
        "title": "Consider a wired access point or properly placed mesh node",
        "detail": "Do not place a repeater where the original signal is already unusable.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How does performance change by location?",
    "observations": [
      {
        "label": "Fast near router, slow in room",
        "advice": "Coverage or interference is the main issue."
      },
      {
        "label": "Slow everywhere",
        "advice": "The internet service, router load, or main equipment may be limiting speed."
      },
      {
        "label": "Only one device is slow",
        "advice": "Check its band, adapter, power saving, and background activity."
      }
    ],
    "whenToStop": [
      "Running cable would require unsafe drilling or electrical work",
      "Powerline adapters would cross unknown electrical systems"
    ],
    "faq": [
      {
        "question": "Will a faster internet plan fix one dead room?",
        "answer": "No. The bottleneck is the local Wi-Fi path, not necessarily the provider speed."
      },
      {
        "question": "Where should a mesh node go?",
        "answer": "Place it where it still receives a strong link from the main router, not inside the dead zone."
      }
    ],
    "tags": [
      "wifi",
      "slow one room",
      "weak signal",
      "mesh"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "wifi-24ghz-works-but-5ghz-not-showing",
    "title": "2.4 GHz Wi-Fi works but 5 GHz is not showing",
    "shortTitle": "5 GHz Wi-Fi not showing",
    "summary": "The 5 GHz radio may be disabled, using an unsupported channel, sharing one hidden band-steered name, or out of range for the device.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Dual-band Wi-Fi",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router combines both bands under one SSID",
      "The 5 GHz radio or guest network is disabled",
      "The device does not support the selected channel or 5 GHz at all",
      "The device is beyond practical 5 GHz range"
    ],
    "quickChecks": [
      {
        "title": "Check the router’s band settings and SSID mode",
        "detail": "A single name may hide which band is active.",
        "level": "safe"
      },
      {
        "title": "Test close to the router",
        "detail": "5 GHz range falls faster through walls.",
        "level": "safe"
      },
      {
        "title": "Confirm device band support",
        "detail": "Older or low-cost devices may be 2.4 GHz only.",
        "level": "safe"
      },
      {
        "title": "Use a widely supported legal channel",
        "detail": "Do not change country or regulatory settings.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Does any device see 5 GHz?",
    "observations": [
      {
        "label": "No device sees it",
        "advice": "The router radio, configuration, or hardware is likely."
      },
      {
        "label": "Only newer devices see it",
        "advice": "Channel or hardware support is likely."
      },
      {
        "label": "The same SSID appears once",
        "advice": "Band steering may choose 2.4 or 5 GHz automatically."
      }
    ],
    "whenToStop": [
      "Changing regulatory domain or transmit power beyond legal settings",
      "The router is provider-managed"
    ],
    "faq": [
      {
        "question": "Why is there only one Wi-Fi name?",
        "answer": "Many routers combine 2.4 and 5 GHz under one SSID and steer devices automatically."
      },
      {
        "question": "Is 5 GHz always faster?",
        "answer": "It often offers more capacity nearby, but 2.4 GHz may be more reliable at distance."
      }
    ],
    "tags": [
      "wifi",
      "5ghz not showing",
      "2.4ghz",
      "dual band"
    ],
    "contentKind": "symptom",
    "sources": [
      {
        "label": "Wi-Fi Alliance knowledge center",
        "url": "https://www.wi-fi.org/knowledge-center"
      }
    ]
  },
  {
    "slug": "ethernet-connected-no-internet",
    "title": "Ethernet is connected but there is no internet",
    "shortTitle": "Ethernet connected with no internet",
    "summary": "The cable link is active, but the router, DHCP, DNS, VLAN, authentication, or internet service is not providing usable access.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Ethernet connection",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router or provider is offline",
      "The device did not receive a valid network address",
      "The Ethernet port, cable, VLAN, or dock is misconfigured",
      "DNS, proxy, or VPN settings block traffic"
    ],
    "quickChecks": [
      {
        "title": "Test another cable or router port",
        "detail": "Use a known-good cable and avoid an unpowered adapter chain.",
        "level": "safe"
      },
      {
        "title": "Check the assigned IP address",
        "detail": "A self-assigned address indicates DHCP trouble.",
        "level": "safe"
      },
      {
        "title": "Disable VPN and proxy for one test",
        "detail": "Restore required settings afterward.",
        "level": "safe"
      },
      {
        "title": "Restart the adapter, router, and device",
        "detail": "On managed networks, contact the administrator before changing VLAN or authentication.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What address and link state are shown?",
    "observations": [
      {
        "label": "Link light is off",
        "advice": "Focus on cable, port, dock, adapter, and speed negotiation."
      },
      {
        "label": "Link is on but address is 169.254.x.x",
        "advice": "The device is not receiving DHCP configuration."
      },
      {
        "label": "Local devices work, internet does not",
        "advice": "The gateway, DNS, WAN, or provider is the next area."
      }
    ],
    "whenToStop": [
      "The Ethernet port is physically damaged or hot",
      "The network uses enterprise authentication or managed VLANs"
    ],
    "faq": [
      {
        "question": "Why can Ethernet show connected without internet?",
        "answer": "Connected confirms the local cable link, not the router’s upstream internet path."
      },
      {
        "question": "Can a bad cable still show a link?",
        "answer": "Yes. Some wire pairs or speeds may negotiate while traffic remains unreliable."
      }
    ],
    "tags": [
      "ethernet",
      "connected no internet",
      "lan",
      "network"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "router-keeps-restarting",
    "title": "Router keeps restarting by itself",
    "shortTitle": "Router restarts repeatedly",
    "summary": "Unstable power, overheating, firmware crashes, failing hardware, a loop, or heavy load can make a router reboot without warning.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Router",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The power adapter or outlet is unstable",
      "The router is overheating",
      "Firmware is crashing or corrupted",
      "A failing component or network loop triggers resets"
    ],
    "quickChecks": [
      {
        "title": "Observe the full light sequence",
        "detail": "Confirm it is truly rebooting rather than only losing internet.",
        "level": "safe"
      },
      {
        "title": "Use the original rated power adapter",
        "detail": "Do not substitute voltage or polarity.",
        "level": "safe"
      },
      {
        "title": "Improve ventilation and disconnect extra devices",
        "detail": "Test with minimal Ethernet and USB connections.",
        "level": "safe"
      },
      {
        "title": "Update firmware or replace failing hardware",
        "detail": "Use stable power and the exact model file.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens during the outage?",
    "observations": [
      {
        "label": "All lights go out and restart",
        "advice": "Power or a full device reboot is likely."
      },
      {
        "label": "Wi-Fi stays on but internet light changes",
        "advice": "The router may not be rebooting; the WAN link is dropping."
      },
      {
        "label": "Restarts under heavy traffic",
        "advice": "Heat, power, firmware, or hardware load is likely."
      }
    ],
    "whenToStop": [
      "The power adapter is hot, swollen, cracked, or smells burned",
      "Firmware update power is unstable"
    ],
    "faq": [
      {
        "question": "Can too many devices reboot a router?",
        "answer": "Load can expose weak hardware or firmware, but a healthy router should not repeatedly power-cycle."
      },
      {
        "question": "Should I use another adapter?",
        "answer": "Only one with the exact voltage, polarity, connector, and adequate current specified by the manufacturer."
      }
    ],
    "tags": [
      "router",
      "restarting",
      "reboot loop",
      "power"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "cannot-open-router-192-168-1-1",
    "title": "Cannot open 192.168.1.1 router page",
    "shortTitle": "192.168.1.1 not opening",
    "summary": "The router may use another gateway address, the device may not be connected locally, HTTPS may be required, or a VPN, browser, or management restriction may block the page.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Router administration",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router gateway is not 192.168.1.1",
      "The device is on guest Wi-Fi or mobile data",
      "The router uses HTTPS or an app-only management flow",
      "VPN, proxy, browser cache, or access restrictions interfere"
    ],
    "quickChecks": [
      {
        "title": "Check the device’s default gateway address",
        "detail": "Use the actual gateway instead of assuming 192.168.1.1.",
        "level": "safe"
      },
      {
        "title": "Connect to the router’s main local network",
        "detail": "Turn off mobile data and avoid guest isolation for the test.",
        "level": "safe"
      },
      {
        "title": "Try the full http and https address",
        "detail": "Accept only expected local certificate behavior.",
        "level": "safe"
      },
      {
        "title": "Use the router manual or provider app",
        "detail": "Do not reset the router merely because one address does not open.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What response appears?",
    "observations": [
      {
        "label": "Page cannot be reached",
        "advice": "The address, connection, or management service is unavailable."
      },
      {
        "label": "Login page opens but password fails",
        "advice": "Use the configured admin password, not necessarily the Wi-Fi password."
      },
      {
        "label": "Provider page or another device opens",
        "advice": "You may be reaching a modem, mesh node, or upstream gateway instead."
      }
    ],
    "whenToStop": [
      "A warning page redirects to an unknown public website",
      "You do not know the provider credentials required after a reset"
    ],
    "faq": [
      {
        "question": "Is every router at 192.168.1.1?",
        "answer": "No. Common alternatives include 192.168.0.1, 10.0.0.1, and provider-specific hostnames."
      },
      {
        "question": "Is the router password the same as Wi-Fi?",
        "answer": "Not always. The administrator login can be separate."
      }
    ],
    "tags": [
      "192.168.1.1",
      "router login",
      "admin page",
      "gateway"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "only-some-websites-load",
    "title": "Only some websites load on Wi-Fi",
    "shortTitle": "Some websites load, others do not",
    "summary": "DNS, IPv6, MTU, filtering, date/time, browser security, or a partial provider routing issue can make selected sites fail while others work.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Internet connection",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A DNS resolver returns incomplete or blocked results",
      "IPv6 or routing is broken on part of the path",
      "VPN, parental control, security filter, or browser extension blocks selected domains",
      "Incorrect date and time causes certificate failures"
    ],
    "quickChecks": [
      {
        "title": "Try the same sites on another device and network",
        "detail": "Compare Wi-Fi with mobile data.",
        "level": "safe"
      },
      {
        "title": "Check the exact browser error",
        "detail": "DNS, timeout, certificate, and blocked messages point to different causes.",
        "level": "safe"
      },
      {
        "title": "Disable VPN or filtering for one controlled test",
        "detail": "Do not bypass organization or parental policy without authorization.",
        "level": "safe"
      },
      {
        "title": "Restart router and verify date and time",
        "detail": "Avoid random MTU or registry changes before evidence.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Which pattern matches the failures?",
    "observations": [
      {
        "label": "Same sites fail on every device",
        "advice": "Router DNS, filtering, provider routing, or the sites themselves are likely."
      },
      {
        "label": "Only one browser fails",
        "advice": "Extensions, secure DNS, proxy, cache, or security settings are likely."
      },
      {
        "label": "Sites work on mobile data",
        "advice": "The home router, DNS, provider, or local filtering path is likely."
      }
    ],
    "whenToStop": [
      "Certificate warnings appear for many trusted sites",
      "The network is managed and filtering is intentional"
    ],
    "faq": [
      {
        "question": "Can DNS affect only some websites?",
        "answer": "Yes. Failed or filtered name resolution can affect selected domains while cached or reachable sites still work."
      },
      {
        "question": "Why do apps work when websites fail?",
        "answer": "Apps may use different servers, DNS behavior, protocols, or cached sessions."
      }
    ],
    "tags": [
      "some websites not loading",
      "dns",
      "ipv6",
      "internet"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "mesh-wifi-node-offline",
    "title": "Mesh Wi-Fi node is offline",
    "shortTitle": "Mesh node offline",
    "summary": "A mesh node may lose power, backhaul signal, Ethernet link, firmware coordination, or account association with the main router.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Mesh Wi-Fi system",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The node has lost power or network backhaul",
      "The node is too far from the main router or another node",
      "Ethernet backhaul is connected to the wrong port or VLAN",
      "Firmware or app account state is inconsistent"
    ],
    "quickChecks": [
      {
        "title": "Check power and the node LED legend",
        "detail": "Use the exact mesh system guide.",
        "level": "safe"
      },
      {
        "title": "Move the node close to the main unit",
        "detail": "Confirm it can reconnect before returning it to position.",
        "level": "safe"
      },
      {
        "title": "Restart the node and main router in the recommended order",
        "detail": "Wait for the main unit to become fully ready.",
        "level": "safe"
      },
      {
        "title": "Remove and re-add only as a last setup step",
        "detail": "A reset can erase topology and custom settings.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How is the node connected?",
    "observations": [
      {
        "label": "Wireless backhaul",
        "advice": "Placement and signal overlap are priorities."
      },
      {
        "label": "Ethernet backhaul",
        "advice": "Check cable, switch, port, loop prevention, and network mode."
      },
      {
        "label": "The app sees the node but says offline",
        "advice": "Cloud account state can lag behind local connectivity; test a nearby client."
      }
    ],
    "whenToStop": [
      "The node or adapter overheats",
      "Resetting would remove a complex working network configuration"
    ],
    "faq": [
      {
        "question": "Should a mesh node be placed in the dead zone?",
        "answer": "No. It needs a strong backhaul link, so place it between the main router and the weak area."
      },
      {
        "question": "Can an Ethernet switch break mesh backhaul?",
        "answer": "Managed VLANs, loops, or incompatible topology can interfere, while a simple correct switch normally works."
      }
    ],
    "tags": [
      "mesh wifi",
      "node offline",
      "satellite",
      "backhaul"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "wifi-says-incorrect-password-but-password-is-correct",
    "title": "Wi-Fi says incorrect password even though it is correct",
    "shortTitle": "Wi-Fi rejects correct password",
    "summary": "A stale saved profile, keyboard or character issue, changed router security mode, band-steering mismatch, or device compatibility problem can make a valid password fail.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Wi-Fi network",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The device is using an old saved password",
      "The password contains a mistyped or visually similar character",
      "The router security mode is unsupported by the device",
      "The device is joining a different network with the same name"
    ],
    "quickChecks": [
      {
        "title": "Forget the network and enter the password again",
        "detail": "Type it manually and check capitalization and spaces.",
        "level": "safe"
      },
      {
        "title": "Verify the SSID and password in the router app or label",
        "detail": "Do not share the password publicly.",
        "level": "safe"
      },
      {
        "title": "Test another device",
        "detail": "If all devices fail, the router password or security configuration changed.",
        "level": "safe"
      },
      {
        "title": "Review WPA2, WPA3, and mixed-mode compatibility",
        "detail": "Change security only with the router manual and reconnect every device.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Who is rejected by the network?",
    "observations": [
      {
        "label": "Only one older device",
        "advice": "WPA3, band, or driver compatibility is likely."
      },
      {
        "label": "Every device",
        "advice": "The stored router password, security mode, or router state is likely."
      },
      {
        "label": "A duplicate network name appears",
        "advice": "The device may be joining a repeater, guest network, or neighbor SSID with the same name."
      }
    ],
    "whenToStop": [
      "The router is managed by someone else",
      "A guide suggests disabling wireless security entirely"
    ],
    "faq": [
      {
        "question": "Can the password be correct but still fail?",
        "answer": "Yes. Security-mode compatibility and stale profiles can produce the same message."
      },
      {
        "question": "Should I set Wi-Fi to open with no password?",
        "answer": "No. Use a supported secure mode such as WPA2 or WPA3 according to device compatibility."
      }
    ],
    "tags": [
      "wifi",
      "incorrect password",
      "authentication problem",
      "wpa"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "iphone-wifi-connected-no-internet",
    "title": "iPhone is connected to Wi-Fi but has no internet",
    "shortTitle": "iPhone Wi-Fi connected, no internet",
    "summary": "The iPhone has joined the router, but the network, captive portal, VPN, Private Relay, DNS, or saved configuration is not passing internet traffic.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "iPhone",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The Wi-Fi network itself has no internet",
      "A captive portal has not been completed",
      "VPN, Private Relay, or DNS configuration interferes",
      "The saved network lease or settings are stale"
    ],
    "quickChecks": [
      {
        "title": "Test another device on the same Wi-Fi",
        "detail": "If all devices fail, focus on the router or provider.",
        "level": "safe"
      },
      {
        "title": "Open Settings and inspect the Wi-Fi warning",
        "detail": "Look for No Internet Connection or a sign-in prompt.",
        "level": "safe"
      },
      {
        "title": "Temporarily disable VPN for one test",
        "detail": "Restore required privacy or work settings afterward.",
        "level": "safe"
      },
      {
        "title": "Forget and rejoin the network",
        "detail": "Use Reset Network Settings only after smaller checks.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What works on the iPhone?",
    "observations": [
      {
        "label": "Mobile data works",
        "advice": "The issue is limited to the Wi-Fi path."
      },
      {
        "label": "Other devices work on Wi-Fi",
        "advice": "Focus on the iPhone profile, VPN, DNS, Private Relay, and address lease."
      },
      {
        "label": "A hotel or public network is affected",
        "advice": "Complete the captive portal and ask the venue if device registration is required."
      }
    ],
    "whenToStop": [
      "The network presents unexpected certificate or security warnings",
      "The iPhone is managed by an employer or school"
    ],
    "faq": [
      {
        "question": "Why does the Wi-Fi icon stay visible?",
        "answer": "It shows the connection to the access point, not guaranteed internet access."
      },
      {
        "question": "Will Reset Network Settings delete photos?",
        "answer": "No, but it removes saved Wi-Fi, VPN, and other network settings."
      }
    ],
    "tags": [
      "iphone",
      "wifi connected no internet",
      "ios",
      "network"
    ],
    "contentKind": "symptom",
    "brand": "Apple",
    "brandSlug": "apple",
    "featured": true,
    "sources": [
      {
        "label": "Apple Support",
        "url": "https://support.apple.com/iphone"
      }
    ]
  },
  {
    "slug": "iphone-not-receiving-text-messages",
    "title": "iPhone is not receiving text messages",
    "shortTitle": "iPhone not receiving texts",
    "summary": "Carrier service, blocked contacts, iMessage routing, Focus filtering, SIM or eSIM state, storage, or message settings can prevent SMS or iMessage from arriving.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "iPhone",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The sender is blocked or filtered",
      "iMessage or SMS routing is not active for the correct number",
      "Carrier, SIM, or eSIM service is unavailable",
      "Focus, unknown-sender filtering, or storage obscures messages"
    ],
    "quickChecks": [
      {
        "title": "Ask whether calls and messages from other people arrive",
        "detail": "This identifies one-sender versus all-message trouble.",
        "level": "safe"
      },
      {
        "title": "Check signal, airplane mode, and the active line",
        "detail": "Dual-SIM devices can use different numbers.",
        "level": "safe"
      },
      {
        "title": "Review blocked contacts and message filtering",
        "detail": "Check Unknown Senders and recently deleted messages.",
        "level": "safe"
      },
      {
        "title": "Contact the carrier for SMS failure",
        "detail": "Apple cannot repair a carrier-side SMS routing problem.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Which messages are missing?",
    "observations": [
      {
        "label": "Only one person",
        "advice": "Check blocking, their number format, and whether the thread uses iMessage or SMS."
      },
      {
        "label": "SMS missing but iMessage works",
        "advice": "Carrier, SIM, line, or SMS provisioning is likely."
      },
      {
        "label": "iMessage missing but SMS works",
        "advice": "Check Apple ID, Send & Receive addresses, data access, and iMessage activation."
      }
    ],
    "whenToStop": [
      "Emergency or account-security messages are not arriving",
      "The SIM or eSIM shows No Service or SOS for a prolonged period"
    ],
    "faq": [
      {
        "question": "Can Focus mode hide messages?",
        "answer": "It can silence notifications, but messages should still appear in the Messages app unless filtering or another issue is involved."
      },
      {
        "question": "Why do texts go to an old iPhone?",
        "answer": "iMessage may still be registered to the same Apple ID or number on another device."
      }
    ],
    "tags": [
      "iphone",
      "not receiving texts",
      "sms",
      "imessage"
    ],
    "contentKind": "symptom",
    "brand": "Apple",
    "brandSlug": "apple",
    "sources": [
      {
        "label": "Apple Support",
        "url": "https://support.apple.com/iphone"
      }
    ]
  },
  {
    "slug": "iphone-bluetooth-connected-no-sound",
    "title": "iPhone Bluetooth is connected but there is no sound",
    "shortTitle": "iPhone Bluetooth connected, no audio",
    "summary": "Audio may still be routed to the iPhone, another device, a call profile, or a muted output even though the Bluetooth accessory shows connected.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "iPhone Bluetooth audio",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The active audio output is not the Bluetooth device",
      "The accessory is connected for calls but not media",
      "Another device reclaimed the accessory connection",
      "Volume, app, or accessory state is muted or stuck"
    ],
    "quickChecks": [
      {
        "title": "Open Control Center audio output",
        "detail": "Select the intended Bluetooth device explicitly.",
        "level": "safe"
      },
      {
        "title": "Raise volume on both devices",
        "detail": "Some accessories maintain a separate hardware volume.",
        "level": "safe"
      },
      {
        "title": "Disconnect the accessory from other devices",
        "detail": "Multipoint behavior can move audio unexpectedly.",
        "level": "safe"
      },
      {
        "title": "Forget and pair the device again",
        "detail": "Use the accessory manual for full reset only if needed.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does audio play?",
    "observations": [
      {
        "label": "From the iPhone speaker",
        "advice": "The output route was not switched."
      },
      {
        "label": "Calls work, media does not",
        "advice": "The media profile or app output is the likely issue."
      },
      {
        "label": "No audio from any source",
        "advice": "Test the accessory with another device to separate accessory failure."
      }
    ],
    "whenToStop": [
      "The accessory battery is swollen or overheats",
      "Hearing devices require medical or manufacturer support settings"
    ],
    "faq": [
      {
        "question": "Why does Bluetooth say connected without audio?",
        "answer": "Connected can include control or call profiles while the active media output remains elsewhere."
      },
      {
        "question": "Will forgetting the device erase files?",
        "answer": "No. It removes the pairing relationship."
      }
    ],
    "tags": [
      "iphone",
      "bluetooth",
      "connected no sound",
      "audio"
    ],
    "contentKind": "symptom",
    "brand": "Apple",
    "brandSlug": "apple",
    "sources": [
      {
        "label": "Apple Support",
        "url": "https://support.apple.com/iphone"
      }
    ]
  },
  {
    "slug": "iphone-microphone-not-working",
    "title": "iPhone microphone is not working",
    "shortTitle": "iPhone microphone not working",
    "summary": "Blocked microphone openings, Bluetooth routing, app permissions, a case, software state, liquid, or hardware damage can make calls or recordings silent or muffled.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "iPhone microphone",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A case, debris, or screen protector blocks an opening",
      "Audio is routed through a Bluetooth accessory",
      "The affected app lacks microphone permission",
      "One microphone module is damaged by liquid or impact"
    ],
    "quickChecks": [
      {
        "title": "Remove the case and disconnect Bluetooth",
        "detail": "Retest with the phone uncovered.",
        "level": "safe"
      },
      {
        "title": "Make short recordings in multiple Apple apps",
        "detail": "Compare Voice Memos, rear video, and front video.",
        "level": "safe"
      },
      {
        "title": "Check microphone permission for the affected app",
        "detail": "Use Settings > Privacy & Security > Microphone.",
        "level": "safe"
      },
      {
        "title": "Stop before inserting tools or liquids",
        "detail": "Microphone meshes are delicate.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Which recording fails?",
    "observations": [
      {
        "label": "Voice Memos only",
        "advice": "The lower microphone path or opening may be affected."
      },
      {
        "label": "Front or rear video only",
        "advice": "A different microphone module or opening may be affected."
      },
      {
        "label": "Only one third-party app",
        "advice": "Permission, app settings, or app software is likely."
      }
    ],
    "whenToStop": [
      "The problem followed liquid exposure or a hard impact",
      "The phone is swollen or unusually hot"
    ],
    "faq": [
      {
        "question": "Does iPhone use more than one microphone?",
        "answer": "Yes. Different apps and camera directions can use different microphone locations."
      },
      {
        "question": "Should I clean the mesh with a pin?",
        "answer": "No. Sharp tools can damage the mesh or microphone."
      }
    ],
    "tags": [
      "iphone",
      "microphone not working",
      "calls",
      "voice memos"
    ],
    "contentKind": "symptom",
    "brand": "Apple",
    "brandSlug": "apple",
    "sources": [
      {
        "label": "Apple Support",
        "url": "https://support.apple.com/iphone"
      }
    ]
  },
  {
    "slug": "android-play-store-apps-not-downloading",
    "title": "Google Play Store apps are not downloading",
    "shortTitle": "Play Store apps not downloading",
    "summary": "A stuck queue, weak connection, low storage, account state, Play Store services, date/time, or device policy can leave downloads pending or failing.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "Google Play Store",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Another download or update is blocking the queue",
      "Storage or network access is insufficient",
      "Google Play Store or Play services cache is stuck",
      "Account, parental control, certification, or device policy blocks installation"
    ],
    "quickChecks": [
      {
        "title": "Check the download queue and storage",
        "detail": "Pause other large downloads and free safe space.",
        "level": "safe"
      },
      {
        "title": "Switch between trusted Wi-Fi and mobile data",
        "detail": "Confirm data restrictions and download preference.",
        "level": "safe"
      },
      {
        "title": "Restart the Android device",
        "detail": "Retry one small app after restart.",
        "level": "safe"
      },
      {
        "title": "Use Google’s Play Store repair sequence",
        "detail": "Clear only the documented app cache or data in the correct order.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What status is shown?",
    "observations": [
      {
        "label": "Pending",
        "advice": "A queue, network preference, storage, or account synchronization issue is likely."
      },
      {
        "label": "Download reaches a percentage then fails",
        "advice": "Storage, network stability, package verification, or device compatibility is likely."
      },
      {
        "label": "Only one app fails",
        "advice": "Check that app’s compatibility, region, age, and device requirements."
      }
    ],
    "whenToStop": [
      "The device is managed by work, school, or Family Link",
      "A site offers APK files from an untrusted source"
    ],
    "faq": [
      {
        "question": "Will clearing Play Store data delete installed apps?",
        "answer": "It normally resets Play Store settings and local state, not the installed apps themselves."
      },
      {
        "question": "Why can one app be unavailable?",
        "answer": "The developer can limit devices, Android versions, countries, accounts, or age groups."
      }
    ],
    "tags": [
      "android",
      "play store",
      "apps not downloading",
      "pending"
    ],
    "contentKind": "symptom",
    "brand": "Google",
    "brandSlug": "google",
    "featured": true,
    "sources": [
      {
        "label": "Google Play Help",
        "url": "https://support.google.com/googleplay/"
      }
    ]
  },
  {
    "slug": "android-sim-card-not-detected",
    "title": "Android phone says no SIM card or SIM not detected",
    "shortTitle": "Android SIM not detected",
    "summary": "The SIM or eSIM may be disabled, poorly seated, damaged, unprovisioned, carrier-locked, or affected by a phone radio or software problem.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Android phone",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Physical SIM is misaligned, dirty, or damaged",
      "The active SIM or eSIM line is disabled",
      "Carrier provisioning or network lock is incomplete",
      "The tray, reader, modem firmware, or phone hardware is faulty"
    ],
    "quickChecks": [
      {
        "title": "Restart and toggle airplane mode once",
        "detail": "Allow the phone to reinitialize the mobile radio.",
        "level": "safe"
      },
      {
        "title": "Check SIM settings and active line",
        "detail": "Dual-SIM phones can disable one slot.",
        "level": "safe"
      },
      {
        "title": "Reseat the physical SIM with power off",
        "detail": "Use the correct tray tool and orientation.",
        "level": "safe"
      },
      {
        "title": "Test the SIM in another compatible phone or contact the carrier",
        "detail": "Do not cut or sand the SIM.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What does the status bar show?",
    "observations": [
      {
        "label": "No SIM",
        "advice": "The phone is not detecting the card or active eSIM profile."
      },
      {
        "label": "Emergency calls only",
        "advice": "The SIM is detected but not registered normally on the network."
      },
      {
        "label": "Invalid SIM or network locked",
        "advice": "Carrier compatibility, activation, or lock status is likely."
      }
    ],
    "whenToStop": [
      "The tray is bent or stuck",
      "The phone has liquid or impact damage"
    ],
    "faq": [
      {
        "question": "Can a software update cause SIM detection trouble?",
        "answer": "A modem or configuration issue can appear after an update, but physical SIM and carrier checks still matter."
      },
      {
        "question": "Will a factory reset activate a SIM?",
        "answer": "No. Carrier activation and hardware faults are not normally fixed by erasing the phone."
      }
    ],
    "tags": [
      "android",
      "sim not detected",
      "no sim",
      "mobile network"
    ],
    "contentKind": "symptom",
    "brand": "Android",
    "brandSlug": "android",
    "sources": [
      {
        "label": "Android Help",
        "url": "https://support.google.com/android/"
      }
    ]
  },
  {
    "slug": "android-battery-draining-fast",
    "title": "Android phone battery is draining fast",
    "shortTitle": "Android battery drains quickly",
    "summary": "High screen use, poor signal, background apps, location, heat, a recent update, or an aging battery can increase power use.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Android phone battery",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Screen brightness or active time increased",
      "Poor mobile signal keeps the radio working harder",
      "A background app, sync, location, or hotspot is active",
      "The battery is aged, hot, swollen, or damaged"
    ],
    "quickChecks": [
      {
        "title": "Open Battery usage and compare apps",
        "detail": "Look for a recent change rather than guessing.",
        "level": "safe"
      },
      {
        "title": "Check signal and device temperature",
        "detail": "Drain during weak signal or heat can be much higher.",
        "level": "safe"
      },
      {
        "title": "Restart and update apps from trusted stores",
        "detail": "Observe one normal day after changes.",
        "level": "safe"
      },
      {
        "title": "Stop using a swollen or very hot phone",
        "detail": "Battery damage requires safe service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "When is the drain fastest?",
    "observations": [
      {
        "label": "While idle overnight",
        "advice": "Background activity, signal, sync, or battery health is likely."
      },
      {
        "label": "During screen use",
        "advice": "Brightness, refresh rate, games, video, navigation, or camera use may explain it."
      },
      {
        "label": "After a recent app or system update",
        "advice": "Indexing or optimization may be temporary, but persistent drain needs app-level comparison."
      }
    ],
    "whenToStop": [
      "The phone is swollen, separating, or smells chemical",
      "Temperature warning appears repeatedly"
    ],
    "faq": [
      {
        "question": "Is one day after an update enough to judge battery life?",
        "answer": "Not always. Optimization and indexing can temporarily increase use, but severe heat or rapid drain still deserves attention."
      },
      {
        "question": "Does closing every app save battery?",
        "answer": "Not necessarily. Repeatedly reopening apps can use more power; identify abnormal background use instead."
      }
    ],
    "tags": [
      "android",
      "battery draining fast",
      "battery usage",
      "overheating"
    ],
    "contentKind": "symptom",
    "brand": "Android",
    "brandSlug": "android",
    "sources": [
      {
        "label": "Android Help",
        "url": "https://support.google.com/android/"
      }
    ]
  },
  {
    "slug": "android-bluetooth-connected-no-sound",
    "title": "Android Bluetooth is connected but there is no sound",
    "shortTitle": "Android Bluetooth connected, no audio",
    "summary": "Media audio may be disabled for the device, output may be routed elsewhere, another device may hold the connection, or the Bluetooth profile may be stuck.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Android Bluetooth audio",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Media audio is disabled for the paired device",
      "The phone output selector is using another speaker",
      "The accessory is connected to another device through multipoint",
      "The pairing record or Bluetooth service is stuck"
    ],
    "quickChecks": [
      {
        "title": "Open the media output selector",
        "detail": "Choose the intended Bluetooth device.",
        "level": "safe"
      },
      {
        "title": "Check the paired device options",
        "detail": "Confirm Media audio is enabled, not only Phone calls.",
        "level": "safe"
      },
      {
        "title": "Disconnect other phones or computers",
        "detail": "Prevent automatic multipoint switching.",
        "level": "safe"
      },
      {
        "title": "Forget and pair again",
        "detail": "Reset the accessory only with its manual.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Which audio path works?",
    "observations": [
      {
        "label": "Calls work, music does not",
        "advice": "Enable or repair the media audio profile."
      },
      {
        "label": "Music works, calls do not",
        "advice": "Check call audio profile, permissions, and phone app routing."
      },
      {
        "label": "Nothing works on another phone either",
        "advice": "The accessory is likely the problem."
      }
    ],
    "whenToStop": [
      "The accessory overheats or battery is damaged",
      "The device is a hearing aid with specialized setup requirements"
    ],
    "faq": [
      {
        "question": "What is Media audio?",
        "answer": "It is the Bluetooth profile used for music, video, and most app sound."
      },
      {
        "question": "Why does audio switch to another device?",
        "answer": "Multipoint accessories can automatically connect to the last active phone or computer."
      }
    ],
    "tags": [
      "android",
      "bluetooth",
      "connected no sound",
      "media audio"
    ],
    "contentKind": "symptom",
    "brand": "Android",
    "brandSlug": "android",
    "sources": [
      {
        "label": "Android Help",
        "url": "https://support.google.com/android/"
      }
    ]
  },
  {
    "slug": "whatsapp-stuck-on-connecting",
    "title": "WhatsApp is stuck on “Connecting”",
    "shortTitle": "WhatsApp stuck connecting",
    "summary": "WhatsApp cannot maintain a usable data connection because of internet trouble, VPN or filtering, background restrictions, date/time, an outage, or app state.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "WhatsApp",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The phone has no reliable internet path",
      "VPN, proxy, firewall, or network filtering blocks WhatsApp",
      "Background data or battery restrictions stop the app",
      "WhatsApp or the phone network stack is temporarily stuck"
    ],
    "quickChecks": [
      {
        "title": "Open a website and test another app",
        "detail": "Confirm internet access beyond the Wi-Fi icon.",
        "level": "safe"
      },
      {
        "title": "Switch between Wi-Fi and mobile data",
        "detail": "This identifies one-network blocking or routing trouble.",
        "level": "safe"
      },
      {
        "title": "Disable VPN for one test and verify date/time",
        "detail": "Restore required settings afterward.",
        "level": "safe"
      },
      {
        "title": "Restart and update WhatsApp from the official store",
        "detail": "Do not reinstall before confirming backup status.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does WhatsApp connect?",
    "observations": [
      {
        "label": "Works on mobile data only",
        "advice": "The Wi-Fi network, DNS, VPN, or firewall is likely."
      },
      {
        "label": "Works on Wi-Fi only",
        "advice": "Mobile data permission, carrier data, or APN is likely."
      },
      {
        "label": "No network works",
        "advice": "Check outage status, app state, account, date/time, and phone connectivity."
      }
    ],
    "whenToStop": [
      "You do not have a verified backup and plan to uninstall",
      "A network asks you to install an unknown certificate"
    ],
    "faq": [
      {
        "question": "Will reinstalling WhatsApp fix connecting?",
        "answer": "It may reset app files but can risk chat history if backup is unavailable; test network and update first."
      },
      {
        "question": "Why do messages arrive only when I open the app?",
        "answer": "Background data or battery optimization may be restricting WhatsApp."
      }
    ],
    "tags": [
      "whatsapp",
      "connecting",
      "no internet",
      "messages"
    ],
    "contentKind": "symptom",
    "brand": "WhatsApp",
    "brandSlug": "whatsapp",
    "featured": true,
    "sources": [
      {
        "label": "WhatsApp Help Center",
        "url": "https://faq.whatsapp.com/"
      }
    ]
  },
  {
    "slug": "whatsapp-backup-stuck",
    "title": "WhatsApp backup is stuck",
    "shortTitle": "WhatsApp backup stuck",
    "summary": "A large media set, insufficient cloud or device storage, weak connection, battery restrictions, account mismatch, or corrupted media can stop backup progress.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "WhatsApp backup",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "Cloud storage or phone storage is insufficient",
      "The network is unstable or restricted",
      "The Google or Apple cloud account is not the expected account",
      "A large or problematic media file stalls the backup"
    ],
    "quickChecks": [
      {
        "title": "Check cloud and device free space",
        "detail": "Leave more room than the displayed chat size.",
        "level": "safe"
      },
      {
        "title": "Use stable Wi-Fi and power",
        "detail": "Keep WhatsApp open if the platform requires foreground progress.",
        "level": "safe"
      },
      {
        "title": "Confirm the correct cloud account",
        "detail": "Verify Google Drive or iCloud account and permissions.",
        "level": "safe"
      },
      {
        "title": "Exclude videos for one diagnostic backup",
        "detail": "Do not delete chats or app data without a verified backup.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does progress stop?",
    "observations": [
      {
        "label": "Preparing backup",
        "advice": "Local chat database, media scan, storage, or app state may be involved."
      },
      {
        "label": "Uploading at one percentage",
        "advice": "Network stability, cloud space, or a specific large file is likely."
      },
      {
        "label": "Backup completes but is not found later",
        "advice": "Account, phone number, encryption password, or platform mismatch is likely."
      }
    ],
    "whenToStop": [
      "You do not know the encrypted backup password or key",
      "The only chat copy would be erased by clearing data or uninstalling"
    ],
    "faq": [
      {
        "question": "Why does backup need more free space than chat size?",
        "answer": "Temporary local files and cloud processing can require additional headroom."
      },
      {
        "question": "Can an Android backup restore to iPhone directly?",
        "answer": "Cross-platform transfer uses specific WhatsApp migration procedures, not a normal cloud restore."
      }
    ],
    "tags": [
      "whatsapp",
      "backup stuck",
      "google drive",
      "icloud"
    ],
    "contentKind": "symptom",
    "brand": "WhatsApp",
    "brandSlug": "whatsapp",
    "sources": [
      {
        "label": "WhatsApp Help Center",
        "url": "https://faq.whatsapp.com/"
      }
    ]
  },
  {
    "slug": "instagram-login-code-not-received",
    "title": "Instagram login code is not received",
    "shortTitle": "Instagram code not received",
    "summary": "The code may be sent to an old contact method, filtered as spam, delayed by the carrier or email provider, blocked by repeated requests, or intercepted by an account-security issue.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "Instagram account",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The account uses an old phone number or email",
      "SMS or email is delayed or filtered",
      "Repeated requests triggered a temporary limit",
      "The login attempt is not legitimate or the account was changed"
    ],
    "quickChecks": [
      {
        "title": "Check the masked destination carefully",
        "detail": "Confirm where Instagram says the code was sent.",
        "level": "safe"
      },
      {
        "title": "Check spam, blocked senders, and SMS service",
        "detail": "Test whether normal messages arrive.",
        "level": "safe"
      },
      {
        "title": "Stop repeated code requests and wait",
        "detail": "Repeated attempts can extend rate limits.",
        "level": "safe"
      },
      {
        "title": "Use Instagram’s official account recovery flow",
        "detail": "Never share a login code with another person.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Which recovery option is available?",
    "observations": [
      {
        "label": "Email is accessible",
        "advice": "Search all folders and confirm the sender domain carefully."
      },
      {
        "label": "Phone number is accessible",
        "advice": "Check signal, blocked short codes, and carrier filtering."
      },
      {
        "label": "Neither contact method is accessible",
        "advice": "Use official identity and account recovery options."
      }
    ],
    "whenToStop": [
      "Someone asks you to forward the code",
      "The recovery page is not on Instagram or Meta’s official domain"
    ],
    "faq": [
      {
        "question": "Why does requesting more codes make it worse?",
        "answer": "Security systems can rate-limit repeated attempts."
      },
      {
        "question": "Can Instagram support tell me the code?",
        "answer": "No. Use the official automated recovery path and protect codes from other people."
      }
    ],
    "tags": [
      "instagram",
      "login code not received",
      "2fa",
      "account recovery"
    ],
    "contentKind": "symptom",
    "brand": "Instagram",
    "brandSlug": "instagram",
    "sources": [
      {
        "label": "Instagram Help Center",
        "url": "https://help.instagram.com/"
      }
    ]
  },
  {
    "slug": "instagram-story-not-uploading",
    "title": "Instagram Story is not uploading",
    "shortTitle": "Instagram Story upload stuck",
    "summary": "Network instability, a large or unsupported media file, missing permissions, low storage, app cache, or an Instagram service issue can leave a Story processing or retrying.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "Instagram Stories",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The upload connection is unstable",
      "The video format, size, duration, or file is problematic",
      "Instagram lacks photo, video, microphone, or background permission",
      "The app cache or service is temporarily failing"
    ],
    "quickChecks": [
      {
        "title": "Save the media outside Instagram first",
        "detail": "Protect the only copy before clearing drafts or app data.",
        "level": "safe"
      },
      {
        "title": "Switch between trusted Wi-Fi and mobile data",
        "detail": "Retry one smaller photo or short video.",
        "level": "safe"
      },
      {
        "title": "Check storage and permissions",
        "detail": "Allow the required media access for the app.",
        "level": "safe"
      },
      {
        "title": "Update and restart the app",
        "detail": "Do not uninstall if unsaved drafts matter.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What type of Story fails?",
    "observations": [
      {
        "label": "Every photo and video",
        "advice": "Network, app, account, or service state is likely."
      },
      {
        "label": "Only one video",
        "advice": "The file encoding, size, corruption, or edit effect is likely."
      },
      {
        "label": "Uploads on another network",
        "advice": "The first network or its filtering is the likely cause."
      }
    ],
    "whenToStop": [
      "The media exists only as an unsaved draft",
      "The phone is critically low on storage or overheating"
    ],
    "faq": [
      {
        "question": "Can clearing app data delete drafts?",
        "answer": "Yes. Protect important media before clearing storage or reinstalling."
      },
      {
        "question": "Why does a shorter video upload?",
        "answer": "Shorter media needs less processing, memory, and upload time and may avoid a bad segment in the original file."
      }
    ],
    "tags": [
      "instagram",
      "story not uploading",
      "upload stuck",
      "video"
    ],
    "contentKind": "symptom",
    "brand": "Instagram",
    "brandSlug": "instagram",
    "sources": [
      {
        "label": "Instagram Help Center",
        "url": "https://help.instagram.com/"
      }
    ]
  },
  {
    "slug": "youtube-app-black-screen",
    "title": "YouTube app shows a black screen",
    "shortTitle": "YouTube black screen",
    "summary": "Video can remain black because of connection trouble, an app or browser rendering fault, DRM, an extension, hardware acceleration, casting state, or an unavailable video.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "YouTube",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The stream is not loading despite the interface appearing",
      "The app or browser video renderer is stuck",
      "Ad blocking, extensions, VPN, or DRM interferes",
      "Casting or external display output is active"
    ],
    "quickChecks": [
      {
        "title": "Try another video and check audio",
        "detail": "This separates one unavailable video from rendering trouble.",
        "level": "safe"
      },
      {
        "title": "Restart the app and device",
        "detail": "Clear temporary playback state.",
        "level": "safe"
      },
      {
        "title": "Disable VPN, extensions, or casting for one test",
        "detail": "Restore required settings afterward.",
        "level": "safe"
      },
      {
        "title": "Update the app, browser, graphics driver, or TV firmware",
        "detail": "Use official update channels.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What remains visible?",
    "observations": [
      {
        "label": "Audio plays with black video",
        "advice": "Rendering, hardware acceleration, DRM, cable, or display output is likely."
      },
      {
        "label": "Spinner appears with no audio",
        "advice": "Connection, service, or blocked requests are more likely."
      },
      {
        "label": "Only one video fails",
        "advice": "The upload, region, age, or rights availability may be the cause."
      }
    ],
    "whenToStop": [
      "The display or device overheats",
      "A third-party site requests account credentials or a codec download"
    ],
    "faq": [
      {
        "question": "Why does YouTube audio work with a black screen?",
        "answer": "The audio stream can continue while video decoding or display output fails."
      },
      {
        "question": "Will clearing cache delete subscriptions?",
        "answer": "App cache normally does not delete account subscriptions, but signing out or clearing full app data can remove local settings and downloads."
      }
    ],
    "tags": [
      "youtube",
      "black screen",
      "video not playing",
      "audio"
    ],
    "contentKind": "symptom",
    "brand": "YouTube",
    "brandSlug": "youtube",
    "sources": [
      {
        "label": "YouTube Help",
        "url": "https://support.google.com/youtube/"
      }
    ]
  },
  {
    "slug": "google-maps-location-is-wrong",
    "title": "Google Maps location is wrong",
    "shortTitle": "Google Maps shows wrong location",
    "summary": "Weak GPS visibility, Wi-Fi or cellular positioning, disabled precise location, sensor calibration, VPN, cached maps, or account timeline confusion can place the device incorrectly.",
    "category": "Apps & accounts",
    "categorySlug": "apps-accounts",
    "device": "Google Maps",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Precise location or location services are disabled",
      "GPS signal is blocked indoors or between tall buildings",
      "Compass or motion sensors need calibration",
      "VPN, Wi-Fi positioning, or cached location is misleading"
    ],
    "quickChecks": [
      {
        "title": "Move outdoors with a clear view of the sky",
        "detail": "Wait briefly for GPS accuracy to improve.",
        "level": "safe"
      },
      {
        "title": "Check Precise Location permission",
        "detail": "Allow the level required for navigation.",
        "level": "safe"
      },
      {
        "title": "Calibrate the compass in Maps if offered",
        "detail": "Remove magnetic cases or mounts for the test.",
        "level": "safe"
      },
      {
        "title": "Restart location services and the app",
        "detail": "Do not rely on a wrong location for emergency or safety-critical navigation.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How wrong is the position?",
    "observations": [
      {
        "label": "Large blue circle around correct area",
        "advice": "Accuracy is low; the app is showing an estimated region."
      },
      {
        "label": "Position jumps while moving",
        "advice": "GPS visibility, sensors, or network positioning is unstable."
      },
      {
        "label": "Location appears in another city or country",
        "advice": "VPN, account activity, IP-based location, or stale cached position may be involved."
      }
    ],
    "whenToStop": [
      "The wrong location creates immediate personal safety risk",
      "The device is used for emergency, aviation, marine, or professional navigation"
    ],
    "faq": [
      {
        "question": "Why is location worse indoors?",
        "answer": "Buildings block satellite signals, so the phone relies more on Wi-Fi, cellular, and sensors."
      },
      {
        "question": "Does VPN change GPS?",
        "answer": "A VPN changes internet IP location, not the GPS sensor, but apps may combine multiple location signals."
      }
    ],
    "tags": [
      "google maps",
      "wrong location",
      "gps",
      "location accuracy"
    ],
    "contentKind": "symptom",
    "brand": "Google",
    "brandSlug": "google",
    "sources": [
      {
        "label": "Google Maps Help",
        "url": "https://support.google.com/maps/"
      }
    ]
  },
  {
    "slug": "airpods-connected-but-no-sound",
    "title": "AirPods are connected but there is no sound",
    "shortTitle": "AirPods connected, no audio",
    "summary": "Audio output may be routed elsewhere, one AirPod may not be detected or charged, automatic switching may move the connection, or the pairing state may be stuck.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "AirPods",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The active audio output is not the AirPods",
      "One or both AirPods are not charged or detected",
      "Automatic device switching moved the audio route",
      "The pairing or ear-detection state is stuck"
    ],
    "quickChecks": [
      {
        "title": "Select AirPods in the audio output menu",
        "detail": "Confirm the device shown as connected is the intended pair.",
        "level": "safe"
      },
      {
        "title": "Check battery for both AirPods and case",
        "detail": "Clean charging contacts only with Apple-approved dry methods.",
        "level": "safe"
      },
      {
        "title": "Place both AirPods in the case and reconnect",
        "detail": "Allow a short charge before testing.",
        "level": "safe"
      },
      {
        "title": "Forget and reset only if normal reconnect fails",
        "detail": "Follow the exact AirPods model procedure.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Which side or source works?",
    "observations": [
      {
        "label": "Only one AirPod works",
        "advice": "Check battery, charging contact, balance setting, debris, and detection for that side."
      },
      {
        "label": "Calls work but music does not",
        "advice": "The output route or app playback path is likely."
      },
      {
        "label": "Audio jumps to another Apple device",
        "advice": "Automatic switching is moving the connection."
      }
    ],
    "whenToStop": [
      "The battery or case is swollen, hot, or damaged",
      "Cleaning would require liquid or sharp tools in the speaker mesh"
    ],
    "faq": [
      {
        "question": "Why do AirPods say connected while sound plays on iPhone?",
        "answer": "The Bluetooth relationship can remain connected while the active output route is the phone speaker."
      },
      {
        "question": "Can audio balance mute one AirPod?",
        "answer": "Yes. Accessibility balance shifted fully left or right can make one side silent."
      }
    ],
    "tags": [
      "airpods",
      "connected no sound",
      "bluetooth",
      "one airpod"
    ],
    "contentKind": "symptom",
    "brand": "Apple",
    "brandSlug": "apple",
    "sources": [
      {
        "label": "Apple Support",
        "url": "https://support.apple.com/iphone"
      }
    ]
  },
  {
    "slug": "phone-hot-while-charging",
    "title": "Phone gets hot while charging",
    "shortTitle": "Phone hot during charging",
    "summary": "Fast charging, high ambient temperature, heavy use, a poor charger or cable, wireless charging losses, a damaged battery, or a stuck app can raise phone temperature.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Smartphone",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Fast or wireless charging produces normal heat",
      "The phone is being used heavily while charging",
      "The case or environment traps heat",
      "The charger, port, cable, or battery is damaged"
    ],
    "quickChecks": [
      {
        "title": "Stop games, camera, hotspot, and navigation",
        "detail": "Let the screen turn off while charging.",
        "level": "safe"
      },
      {
        "title": "Remove the case and move to a cooler dry place",
        "detail": "Do not put the phone in a refrigerator or freezer.",
        "level": "safe"
      },
      {
        "title": "Use a certified compatible charger and cable",
        "detail": "Inspect for heat, looseness, discoloration, or damage.",
        "level": "safe"
      },
      {
        "title": "Disconnect if there is a temperature warning or swelling",
        "detail": "Damaged lithium batteries require safe service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "How hot does the phone become?",
    "observations": [
      {
        "label": "Warm but no warning",
        "advice": "Some warmth can be normal during fast or wireless charging."
      },
      {
        "label": "Charging pauses with a temperature message",
        "advice": "Let the phone cool naturally and investigate load, environment, charger, and battery."
      },
      {
        "label": "Very hot, swollen, or smells chemical",
        "advice": "Disconnect if safe, move away from flammables, and stop using it."
      }
    ],
    "whenToStop": [
      "Battery swelling, smoke, chemical smell, or hissing",
      "The charging port or connector is burned or melted"
    ],
    "faq": [
      {
        "question": "Is wireless charging hotter?",
        "answer": "It can generate more heat because alignment and conversion losses reduce efficiency."
      },
      {
        "question": "Should I cool the phone with ice?",
        "answer": "No. Rapid cooling and condensation can damage the device and battery."
      }
    ],
    "tags": [
      "phone",
      "hot while charging",
      "overheating",
      "battery"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "phone-camera-black-screen",
    "title": "Phone camera shows a black screen",
    "shortTitle": "Phone camera black screen",
    "summary": "The camera may be held by another app, blocked by permissions or privacy controls, frozen in software, covered physically, or damaged after impact or liquid exposure.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Smartphone camera",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Another app is using the camera",
      "The camera app or phone software is stuck",
      "Permission or privacy settings block the camera",
      "A camera module, connector, or lens assembly is damaged"
    ],
    "quickChecks": [
      {
        "title": "Close all camera-using apps",
        "detail": "End video calls, QR scanners, social apps, and flashlight tools.",
        "level": "safe"
      },
      {
        "title": "Switch between front and rear cameras",
        "detail": "This identifies one module versus the whole camera service.",
        "level": "safe"
      },
      {
        "title": "Restart the phone and check permissions",
        "detail": "Test the built-in camera app before third-party apps.",
        "level": "safe"
      },
      {
        "title": "Stop if the phone was dropped, wet, or is overheating",
        "detail": "Hardware diagnosis may be needed.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Which camera is black?",
    "observations": [
      {
        "label": "Only front camera",
        "advice": "The front module, permission path, or app selection may be affected."
      },
      {
        "label": "Only rear camera",
        "advice": "One rear module, stabilization system, or connector may be faulty."
      },
      {
        "label": "Every app and camera",
        "advice": "A system camera service, privacy control, or hardware power issue is more likely."
      }
    ],
    "whenToStop": [
      "The problem followed liquid exposure or impact",
      "The camera area clicks, shakes, or becomes hot"
    ],
    "faq": [
      {
        "question": "Can another app block the camera?",
        "answer": "Yes. An app using the camera can prevent another app from opening it correctly."
      },
      {
        "question": "Will clearing camera cache delete photos?",
        "answer": "Normally it resets app state, not photos, but back up important media before deeper resets."
      }
    ],
    "tags": [
      "phone",
      "camera black screen",
      "camera not working",
      "front camera"
    ],
    "contentKind": "symptom"
  },
  {
    "slug": "mobile-data-not-working-with-full-signal",
    "title": "Mobile data is not working even with full signal",
    "shortTitle": "Full signal but no mobile data",
    "summary": "Signal bars can show radio coverage while mobile data is blocked by the plan, SIM provisioning, APN, roaming, data limit, outage, or phone network settings.",
    "category": "Phones & tablets",
    "categorySlug": "phones-tablets",
    "device": "Mobile data",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The carrier has an outage, account restriction, or exhausted allowance",
      "Mobile data is disabled for the active SIM or app",
      "APN, roaming, or network-mode settings are wrong",
      "The phone is registered for calls but not a working data session"
    ],
    "quickChecks": [
      {
        "title": "Turn Wi-Fi off and test one normal website",
        "detail": "Confirm the failure is truly mobile data.",
        "level": "safe"
      },
      {
        "title": "Check mobile data, active SIM, roaming, and data limit",
        "detail": "Dual-SIM phones may use a different line for data.",
        "level": "safe"
      },
      {
        "title": "Toggle airplane mode and restart once",
        "detail": "Allow the phone to re-register.",
        "level": "safe"
      },
      {
        "title": "Contact the carrier before changing APN manually",
        "detail": "Use only carrier-provided APN values.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What services still work?",
    "observations": [
      {
        "label": "Calls and SMS work",
        "advice": "Coverage exists, but the data plan, APN, provisioning, or outage may affect data only."
      },
      {
        "label": "Emergency calls only",
        "advice": "The phone is not normally registered on the carrier network."
      },
      {
        "label": "Data works in another location",
        "advice": "A local cell, congestion, or coverage issue is likely."
      }
    ],
    "whenToStop": [
      "Emergency communication is required",
      "The SIM account is suspended or identity verification is requested"
    ],
    "faq": [
      {
        "question": "Why do full bars not guarantee internet?",
        "answer": "Bars indicate radio signal strength, not account authorization or a working data path."
      },
      {
        "question": "Should I copy an APN from a random website?",
        "answer": "No. Use values supplied by the carrier for the exact plan and region."
      }
    ],
    "tags": [
      "mobile data",
      "full signal no internet",
      "apn",
      "cellular"
    ],
    "contentKind": "symptom"
  }
];
