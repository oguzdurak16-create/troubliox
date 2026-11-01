import type { Problem } from "./problems";

// Code meanings are scoped to the cited legacy platform, not all GE models.
export const geWasherRevisions: Record<string, Partial<Problem>> = {
  "ge-appliances-washer-e22-error": {
    "title": "GE washer E22: fill timeout / slow fill (legacy front-load models)",
    "shortTitle": "GE washer E22 — fill timeout / slow fill",
    "summary": "The legacy WBVH6240-family table uses E22 when filling has not completed within the allowed time. Check whether water is available before assuming a failed inlet valve. This is a fill condition, not a drain or door-lock code.",
    "likelyCauses": [
      "A household supply valve is closed",
      "An accessible inlet hose is bent or household flow is weak",
      "The model’s inlet or level-sensing system cannot complete filling"
    ],
    "quickChecks": [
      {
        "title": "Establish whether water enters",
        "detail": "Observe the normal cycle without removing covers. No incoming water and water that enters then immediately disappears are different observations.",
        "level": "safe"
      },
      {
        "title": "Check the external supply",
        "detail": "Confirm the required valves are open and visible hoses are not crushed. Compare flow at a nearby fixture.",
        "level": "safe"
      },
      {
        "title": "Record possible siphoning",
        "detail": "If incoming water appears to leave continuously, have the drain installation checked against the exact installation guide. Do not invent a universal hose height.",
        "level": "caution"
      },
      {
        "title": "Escalate normal supply with a repeated fill timeout",
        "detail": "Valve, screen and level-sensing diagnosis must follow the actual model’s instructions. Do not energize a valve directly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E22 appears on this model?",
    "observations": [
      {
        "label": "No water is available at nearby fixtures",
        "advice": "Resolve the household supply interruption first."
      },
      {
        "label": "Water enters but the level never builds",
        "advice": "Ask the installer or technician to check routing and level behavior."
      },
      {
        "label": "Supply looks normal but E22 returns",
        "advice": "Use model-specific inlet and sensing diagnosis."
      }
    ],
    "faq": [
      {
        "question": "Is E22 a universal eight-minute timer on every GE washer?",
        "answer": "No. The cited legacy table includes an eight-minute fill limit, but newer platforms can use different codes or timing. Match the exact model."
      },
      {
        "question": "Should I replace a valve from E22 alone?",
        "answer": "No. Establish supply, routing and the model’s fill behavior before parts are selected."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E22",
      "fill timeout / slow fill",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e23-error": {
    "title": "GE washer E23: flood-protect / unexpected level signal (legacy front-load models)",
    "shortTitle": "GE washer E23 — flood-protect / unexpected level signal",
    "summary": "On the cited legacy GE platform, E23 is a flood-protection drain condition associated with an unexpected foam/level-switch state. An empty tub and an actually overfilled tub need different responses. Do not assume the display proves there is water leaking onto the floor.",
    "likelyCauses": [
      "The washer is overfilled or receives an unexpected water-level signal",
      "Suds or an abnormal level-switch state affects protection",
      "A supply shutoff or level-sensing fault needs service"
    ],
    "quickChecks": [
      {
        "title": "Observe water level from outside",
        "detail": "Record whether the tub is visibly overfull, apparently empty or heavily sudsy; do not open a door against retained water.",
        "level": "safe"
      },
      {
        "title": "Stop operation if water continues rising",
        "detail": "Use an accessible household water shutoff if safe. A code reset is not a remedy for uncontrolled filling.",
        "level": "stop"
      },
      {
        "title": "Note detergent and recent vibration",
        "detail": "Report excessive foam or severe shaking. These are observations for diagnosis, not proof of a particular sensor failure.",
        "level": "safe"
      },
      {
        "title": "Have repeated protection events investigated",
        "detail": "Do not bypass a level switch or keep starting new cycles when a flood-protect response recurs.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E23 appears on this model?",
    "observations": [
      {
        "label": "Water is visibly rising or escaping",
        "advice": "Stop the supply safely and request urgent appliance help."
      },
      {
        "label": "The tub appears empty",
        "advice": "The level/foam signal still needs verification; do not infer a real flood from the code alone."
      },
      {
        "label": "There are large amounts of suds",
        "advice": "Record detergent type and dose for the technician."
      }
    ],
    "faq": [
      {
        "question": "Does E23 always mean a floor leak?",
        "answer": "No. The legacy table describes a protection/level-switch condition; visible water and sensing behavior must be checked separately."
      },
      {
        "question": "Can I disable protection to finish washing?",
        "answer": "No. Leave the protective system intact and correct the cause."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E23",
      "flood-protect / unexpected level signal",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e30-error": {
    "title": "GE washer E30: drain-pump electrical feedback missing (legacy front-load models)",
    "shortTitle": "GE washer E30 — drain-pump electrical feedback missing",
    "summary": "The cited GE service table labels E30 as the drain pump not being detected and describes missing electrical feedback. That is more specific than simply seeing retained water. Use the exact model table before treating E30 as an ordinary blocked filter.",
    "likelyCauses": [
      "The pump or its circuit does not provide the expected feedback",
      "An internal connection is interrupted",
      "The model-specific pump or control path requires diagnosis"
    ],
    "quickChecks": [
      {
        "title": "Confirm E30 rather than E31",
        "detail": "Record the full display. The table distinguishes missing pump feedback from a drain timeout.",
        "level": "safe"
      },
      {
        "title": "Note sound and retained water",
        "detail": "After stopping normally, record whether the pump ran, hummed or stayed silent. None of those sounds alone proves a wiring or motor fault.",
        "level": "safe"
      },
      {
        "title": "Follow only the model’s retained-water procedure",
        "detail": "Unplug and allow hot water to cool before any owner-accessible emergency drain procedure; never force the door.",
        "level": "caution"
      },
      {
        "title": "Leave circuit confirmation to service",
        "detail": "Pump connections, live supply and winding tests in a service manual are technician procedures.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E30 appears on this model?",
    "observations": [
      {
        "label": "The pump stays silent and water remains",
        "advice": "Report both facts with E30 so the circuit can be tested."
      },
      {
        "label": "The pump can be heard but E30 returns",
        "advice": "Sound does not establish valid feedback; model-specific diagnosis is still needed."
      },
      {
        "label": "The display is actually E31",
        "advice": "Use the drain-timeout guide instead of this feedback definition."
      }
    ],
    "faq": [
      {
        "question": "Is E30 the same as E31?",
        "answer": "Not in the cited table. E30 concerns pump detection/feedback; E31 concerns draining that does not finish in time."
      },
      {
        "question": "Does E30 establish that a clogged filter is the cause?",
        "answer": "No. A restriction is not an explanation for every electrical-feedback warning."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E30",
      "drain-pump electrical feedback missing",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e31-error": {
    "title": "GE washer E31: drain timeout (legacy front-load models)",
    "shortTitle": "GE washer E31 — drain timeout",
    "summary": "E31 is the drain-timeout entry in GE’s cited WBVH6240-family table. The appliance is not confirming water removal in time. Start with the accessible discharge route and distinguish a restriction from the pump-detection condition documented as E30.",
    "likelyCauses": [
      "A hose, permitted owner filter or outlet restricts water removal",
      "The drain installation does not match the model requirements",
      "The pump or level-confirmation system cannot complete draining"
    ],
    "quickChecks": [
      {
        "title": "Check the drain route that is visible",
        "detail": "Look for a crushed hose or backed-up outlet without pulling the washer against its water and electrical connections.",
        "level": "safe"
      },
      {
        "title": "Use the exact manual for filter access",
        "detail": "Some models provide a large-item filter or emergency drain. Cool and contain water before following that procedure.",
        "level": "caution"
      },
      {
        "title": "Compare recent installation changes",
        "detail": "Record hose extensions or a relocated outlet; ask the installer to check the model’s permitted arrangement.",
        "level": "safe"
      },
      {
        "title": "Stop repeated full-cycle retries",
        "detail": "If the route is clear but E31 recurs, the pump and level behavior need professional inspection.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E31 appears on this model?",
    "observations": [
      {
        "label": "The external outlet also backs up",
        "advice": "Correct the plumbing restriction first."
      },
      {
        "label": "Draining is weak or very slow",
        "advice": "Record the flow and accessible route condition for diagnosis."
      },
      {
        "label": "Water leaves normally but the timeout returns",
        "advice": "Level confirmation and the model-specific control need checking."
      }
    ],
    "faq": [
      {
        "question": "Does E31 prove a failed pump?",
        "answer": "No. A restricted route or a level-confirmation problem can also prevent a completed drain."
      },
      {
        "question": "Can I use one hose height for every GE washer?",
        "answer": "No. Use the installation requirements for the full model number."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E31",
      "drain timeout",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e38-error": {
    "title": "GE washer E38: dispenser reservoir-selection error (legacy front-load models)",
    "shortTitle": "GE washer E38 — dispenser reservoir-selection error",
    "summary": "The reviewed legacy table associates E38 with a dispenser that cannot identify the selected reservoir. This is not the same system as the drain pump or door lock. Owner observations should focus on the drawer area and when the selection attempt occurs.",
    "likelyCauses": [
      "The dispenser selection mechanism cannot reach or identify its target",
      "An internal linkage or position input is abnormal",
      "The dispenser drive/control requires model-specific service"
    ],
    "quickChecks": [
      {
        "title": "Record when the dispenser tries to select",
        "detail": "Note repeated shifting around detergent selection, rather than assuming every noise is the drain pump.",
        "level": "safe"
      },
      {
        "title": "Check drawer seating without forcing it",
        "detail": "With the cycle stopped, inspect only owner-accessible drawer placement and visible residue according to the user manual.",
        "level": "safe"
      },
      {
        "title": "Keep hands out of internal selector mechanisms",
        "detail": "Do not remove the top or disconnect a dispenser motor merely to clear the display.",
        "level": "caution"
      },
      {
        "title": "Request service for repeated selection attempts",
        "detail": "Give the technician the cycle stage and full model, so position and drive behavior can be checked.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E38 appears on this model?",
    "observations": [
      {
        "label": "The drawer was not seated correctly",
        "advice": "Correct its normal fit without forcing a selector."
      },
      {
        "label": "Repeated shifting continues with the drawer seated",
        "advice": "The internal dispenser mechanism needs inspection."
      },
      {
        "label": "The code appears during reservoir selection",
        "advice": "Report that timing; it distinguishes this from a drain problem."
      }
    ],
    "faq": [
      {
        "question": "Does E38 identify a blocked drain?",
        "answer": "No. In the cited legacy table it is a dispenser-selection condition."
      },
      {
        "question": "Should I disconnect the dispenser motor to reset it?",
        "answer": "No. That is internal service work and is not an owner reset procedure."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E38",
      "dispenser reservoir-selection error",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e39-error": {
    "title": "GE washer E39: dispenser position-selection timeout (legacy front-load models)",
    "shortTitle": "GE washer E39 — dispenser position-selection timeout",
    "summary": "GE’s reviewed legacy table describes E39 as a dispenser-selection timeout. Position information is not arriving as expected while a reservoir is being selected. Keep it distinct from the related E38 selection entry rather than diagnosing a door switch.",
    "likelyCauses": [
      "The dispenser mechanism cannot complete its selection",
      "Position-switch information is missing or inconsistent",
      "An internal dispenser linkage, drive or connection needs testing"
    ],
    "quickChecks": [
      {
        "title": "Match the complete E39 display",
        "detail": "Photograph the message and note the selected programme and detergent stage.",
        "level": "safe"
      },
      {
        "title": "Inspect only normal drawer access",
        "detail": "After stopping the cycle, check the user drawer for an obvious seating problem. Do not force rotating or sliding internal parts.",
        "level": "safe"
      },
      {
        "title": "Record delayed or repeated movement",
        "detail": "A mechanism searching repeatedly and a completely silent selector give different observations for service.",
        "level": "safe"
      },
      {
        "title": "Leave position-switch testing to a technician",
        "detail": "Do not bridge a dispenser switch or assume that a replacement motor is the only possible repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E39 appears on this model?",
    "observations": [
      {
        "label": "The selector repeatedly searches for a position",
        "advice": "Report repeated movement and the cycle stage."
      },
      {
        "label": "The mechanism is silent when selection should occur",
        "advice": "Report that condition; electrical and mechanical checks are model-specific."
      },
      {
        "label": "The drawer cannot seat normally",
        "advice": "Stop forcing it and use the user manual or service."
      }
    ],
    "faq": [
      {
        "question": "Are E38 and E39 interchangeable?",
        "answer": "They are related dispenser entries in the cited table, but E39 describes a timeout/position-selection condition. Preserve the exact code."
      },
      {
        "question": "Can the code alone identify which dispenser part failed?",
        "answer": "No. Position, linkage, drive and connections require diagnosis."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E39",
      "dispenser position-selection timeout",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 53 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=53"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e42-error": {
    "title": "GE washer E42: instantaneous drive-motor current warning (legacy front-load models)",
    "shortTitle": "GE washer E42 — instantaneous drive-motor current warning",
    "summary": "In the cited WBVH6240-family guide, E42 concerns instantaneous drive-motor current. The earlier door-lock interpretation does not apply to this table. Reduce a clearly excessive load only when the washer can be opened normally, then use service if the warning returns.",
    "likelyCauses": [
      "An excessive load demands high motor current",
      "Mechanical resistance loads the drive system",
      "The motor or inverter circuit needs professional testing"
    ],
    "quickChecks": [
      {
        "title": "Match the legacy platform before applying the definition",
        "detail": "Use the full model number. E42 must not be interpreted from a different brand’s or platform’s chart.",
        "level": "safe"
      },
      {
        "title": "Stop and assess a clearly overfilled drum",
        "detail": "Allow normal unlock and remove some items if the load exceeds the model’s capacity. Do not force a locked door.",
        "level": "caution"
      },
      {
        "title": "Record resistance or abnormal movement",
        "detail": "Report a stalled basket, severe noise or a warning that occurs even with a small load. Do not dismantle the tub.",
        "level": "safe"
      },
      {
        "title": "Use service if the current warning repeats",
        "detail": "Internal motor, bearing and inverter tests belong with a qualified technician.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E42 appears on this model?",
    "observations": [
      {
        "label": "The drum is packed beyond the manual’s capacity",
        "advice": "Correct the load and follow the model’s permitted restart."
      },
      {
        "label": "The warning occurs with a small ordinary load",
        "advice": "A load adjustment alone does not explain it; request diagnosis."
      },
      {
        "label": "The basket is jammed or grinding",
        "advice": "Stop operation rather than forcing it to turn."
      }
    ],
    "faq": [
      {
        "question": "Is E42 a door-lock code?",
        "answer": "Not in this GE legacy table: it is an instantaneous motor-current warning. Model scope is essential."
      },
      {
        "question": "Does high current establish a failed inverter?",
        "answer": "No. Load, mechanical resistance and the drive circuit need to be distinguished."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E42",
      "instantaneous drive-motor current warning",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e43-error": {
    "title": "GE washer E43: inverter DC fault (legacy front-load models)",
    "shortTitle": "GE washer E43 — inverter DC fault",
    "summary": "The reviewed GE legacy table identifies E43 as an inverter DC fault. It is not the door-unlock condition previously associated with this page. A recorded inverter fault needs the exact platform’s service diagnosis; an owner should not open the drive electronics.",
    "likelyCauses": [
      "The inverter reports an internal DC fault",
      "A drive-electronics condition prevents normal operation",
      "The exact control and inverter system requires professional confirmation"
    ],
    "quickChecks": [
      {
        "title": "Save the full code before another attempt",
        "detail": "Record the message and whether the cycle had started moving the drum.",
        "level": "safe"
      },
      {
        "title": "Stop treating the latch as the indicated system",
        "detail": "A locked door can be a consequence of an interrupted cycle, but this table’s E43 definition concerns the inverter.",
        "level": "safe"
      },
      {
        "title": "Leave inverter covers and connectors alone",
        "detail": "The technical guide is written for service personnel; do not probe electronics or attempt a board-level reset.",
        "level": "caution"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Supply the full model number and code so the drive-electronics fault can be confirmed.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E43 appears on this model?",
    "observations": [
      {
        "label": "The cycle stops before the motor runs",
        "advice": "Report the startup timing with E43."
      },
      {
        "label": "The door remains locked after the interrupted cycle",
        "advice": "Use the normal safety-unlock guidance; do not force it."
      },
      {
        "label": "There is an electrical smell or breaker trip",
        "advice": "Leave the washer off and seek qualified help."
      }
    ],
    "faq": [
      {
        "question": "Does E43 mean that the door cannot unlock?",
        "answer": "That is not its definition in the cited WBVH6240-family table, which lists an inverter DC fault."
      },
      {
        "question": "Can repeated power resets repair inverter electronics?",
        "answer": "A reset does not establish or repair the underlying electronics fault. Follow the exact manual and service advice."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E43",
      "inverter DC fault",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e45-error": {
    "title": "GE washer E45: drive-motor overload-current condition (legacy front-load models)",
    "shortTitle": "GE washer E45 — drive-motor overload-current condition",
    "summary": "GE’s cited legacy table labels E45 as drive-motor overload current and associates it with a load that is too heavy. It differs from a door-switch warning. Do not use the code alone to decide whether the load, mechanical drive or electronics caused the excess demand.",
    "likelyCauses": [
      "The laundry load is too heavy for the selected operation",
      "The basket or drive meets abnormal mechanical resistance",
      "The motor/inverter path cannot handle the required current"
    ],
    "quickChecks": [
      {
        "title": "Review the load against the rated programme",
        "detail": "A capacity figure for one wash cycle is not automatically the capacity for every fabric or spin programme.",
        "level": "safe"
      },
      {
        "title": "Reduce a clearly excessive load after normal unlock",
        "detail": "Remove items only once the door releases safely; do not bypass an interlock.",
        "level": "caution"
      },
      {
        "title": "Report binding or repeated stalling",
        "detail": "Describe what the basket attempted to do. Do not remove panels to test belts or bearings.",
        "level": "safe"
      },
      {
        "title": "Seek service if ordinary loads still trigger E45",
        "detail": "Persistent overload-current behavior requires mechanical and electrical diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E45 appears on this model?",
    "observations": [
      {
        "label": "A large absorbent load preceded the warning",
        "advice": "Correct the load using the manual’s programme limits."
      },
      {
        "label": "E45 appears with modest loads too",
        "advice": "The heavy-load explanation is insufficient; ask for drive-system inspection."
      },
      {
        "label": "The basket catches or makes severe noises",
        "advice": "Stop use rather than trying a higher-speed spin."
      }
    ],
    "faq": [
      {
        "question": "Is E45 a door-switch fault on this platform?",
        "answer": "No. The reviewed legacy GE table labels it as motor overload current."
      },
      {
        "question": "Are E42 and E45 always identical?",
        "answer": "The legacy service table distinguishes instantaneous current (E42) from overload current (E45). Keep the actual code when requesting service."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E45",
      "drive-motor overload-current condition",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e46-error": {
    "title": "GE washer E46: drive-motor over-temperature entry (legacy front-load models)",
    "shortTitle": "GE washer E46 — drive-motor over-temperature entry",
    "summary": "E46 is the drive-motor over-temperature entry in the cited legacy GE table. This is a thermal drive-system warning, not a door-lock feedback definition. Stop operation and have a repeated warning investigated instead of forcing another high-load cycle.",
    "likelyCauses": [
      "The drive system reaches an abnormal thermal state",
      "High mechanical demand contributes to motor heating",
      "The model’s motor, sensing or inverter system needs testing"
    ],
    "quickChecks": [
      {
        "title": "Record the exact thermal warning",
        "detail": "Distinguish E46 from E47, which the same table labels at the heat sink.",
        "level": "safe"
      },
      {
        "title": "Let the stopped appliance cool naturally",
        "detail": "Do not touch internal components, apply water or repeatedly demand another spin.",
        "level": "safe"
      },
      {
        "title": "Note the preceding load and operating history",
        "detail": "Report whether the warning followed a heavy load or appeared early in an ordinary cycle.",
        "level": "safe"
      },
      {
        "title": "Request service for a returning thermal code",
        "detail": "A cool exterior does not verify internal temperature or prove that a motor repair is unnecessary.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E46 appears on this model?",
    "observations": [
      {
        "label": "The warning followed a demanding load",
        "advice": "Report the load and programme; do not assume that removing items has repaired the drive."
      },
      {
        "label": "It returns early in light use",
        "advice": "Professional thermal/drive diagnosis is required."
      },
      {
        "label": "There is smoke, odor or abnormal heat",
        "advice": "Leave the washer off and arrange qualified help."
      }
    ],
    "faq": [
      {
        "question": "Is E46 inconsistent door-lock feedback?",
        "answer": "Not in the cited legacy table; its description is drive-motor over temperature."
      },
      {
        "question": "Can I cool internal parts with water or a spray?",
        "answer": "No. Leave internal electronics and mechanical parts untouched and follow service guidance."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E46",
      "drive-motor over-temperature entry",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e47-error": {
    "title": "GE washer E47: inverter heat-sink over-temperature entry (legacy front-load models)",
    "shortTitle": "GE washer E47 — inverter heat-sink over-temperature entry",
    "summary": "The cited GE legacy table labels E47 as heat-sink over temperature in the inverter system. A door-lock diagnosis is not supported by that entry. Allow a stopped washer to cool and report a recurring thermal warning for model-specific service.",
    "likelyCauses": [
      "The inverter heat sink reaches an abnormal temperature",
      "Drive loading or a motor condition contributes to inverter heating",
      "A thermal or drive-electronics fault needs professional diagnosis"
    ],
    "quickChecks": [
      {
        "title": "Keep E47 distinct from E46",
        "detail": "The manual gives different thermal labels; record the actual code rather than combining them into one guessed part failure.",
        "level": "safe"
      },
      {
        "title": "Stop high-load retries",
        "detail": "Repeated spin attempts can add demand while a thermal warning remains.",
        "level": "safe"
      },
      {
        "title": "Record when heat-related stopping occurs",
        "detail": "Note the programme, load and time into the cycle from outside the appliance.",
        "level": "safe"
      },
      {
        "title": "Leave heat-sink and inverter checks to service",
        "detail": "Do not access a board or infer its temperature from the cabinet surface.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E47 appears on this model?",
    "observations": [
      {
        "label": "E47 returns after a normal cooldown",
        "advice": "The cause remains and requires diagnosis."
      },
      {
        "label": "Only heavy operation precedes the warning",
        "advice": "Report the operating pattern without assuming it is harmless."
      },
      {
        "label": "An electrical smell or breaker trip accompanies it",
        "advice": "Do not reconnect for another experiment."
      }
    ],
    "faq": [
      {
        "question": "Is E47 a door-lock circuit fault?",
        "answer": "That description is not supported by the cited legacy GE table; it identifies inverter heat-sink temperature."
      },
      {
        "question": "Does E47 prove the inverter board alone must be replaced?",
        "answer": "No. The drive system and the reason for heating must be investigated."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E47",
      "inverter heat-sink over-temperature entry",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e48-error": {
    "title": "GE washer E48: open drive-motor phase (legacy front-load models)",
    "shortTitle": "GE washer E48 — open drive-motor phase",
    "summary": "E48 is the open drive-motor phase entry in the reviewed legacy GE table. An interrupted winding or connection is a service-level electrical issue. This is different from merely failing to confirm a locked door and cannot be diagnosed by forcing the basket to spin.",
    "likelyCauses": [
      "A motor phase or winding circuit is open",
      "An internal connection interrupts the motor circuit",
      "The inverter-to-motor path needs professional confirmation"
    ],
    "quickChecks": [
      {
        "title": "Record whether the basket attempted to move",
        "detail": "A silent start and a brief movement are useful observations, but neither proves electrical continuity.",
        "level": "safe"
      },
      {
        "title": "Avoid force and repeated starts",
        "detail": "Do not use a jammed basket as a way to test an open-phase message.",
        "level": "safe"
      },
      {
        "title": "Do not perform winding checks as an owner procedure",
        "detail": "A service table’s resistance and connector tests require safe internal access and model documentation.",
        "level": "caution"
      },
      {
        "title": "Arrange motor-circuit diagnosis",
        "detail": "Provide the full model number; replacement decisions should follow actual electrical tests.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E48 appears on this model?",
    "observations": [
      {
        "label": "The basket does not start normally",
        "advice": "Report that behavior with E48."
      },
      {
        "label": "The warning is intermittent",
        "advice": "Record timing; do not assume the circuit is sound because one cycle worked."
      },
      {
        "label": "The display is E42 or E45 instead",
        "advice": "Those are current/overload entries in this table, not this open-phase definition."
      }
    ],
    "faq": [
      {
        "question": "Does E48 mean the lock position is unknown?",
        "answer": "Not in this legacy GE table; it refers to an open motor phase."
      },
      {
        "question": "Can the code distinguish a winding from a connector fault by itself?",
        "answer": "No. The circuit needs model-specific testing."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E48",
      "open drive-motor phase",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e49-error": {
    "title": "GE washer E49: drive-motor overload-power condition (legacy front-load models)",
    "shortTitle": "GE washer E49 — drive-motor overload-power condition",
    "summary": "The reviewed GE legacy table describes E49 as a drive-motor overload-power condition. A heavy load or abnormal mechanical resistance can be relevant, but the display is not a door-lock-circuit warning. Persistent occurrences need drive-system diagnosis.",
    "likelyCauses": [
      "The laundry load puts excessive demand on the drive",
      "The basket, belt or bearing system creates abnormal resistance",
      "The motor or inverter path cannot deliver normal operation"
    ],
    "quickChecks": [
      {
        "title": "Record load, cycle and movement",
        "detail": "Note whether the washer stalls under a heavy load or also fails in ordinary use.",
        "level": "safe"
      },
      {
        "title": "Correct an obvious overload safely",
        "detail": "Wait for normal unlock and follow the rated programme capacity before any permitted retry.",
        "level": "caution"
      },
      {
        "title": "Stop if movement is rough or blocked",
        "detail": "Do not dismantle a tub or force a basket to complete the cycle.",
        "level": "safe"
      },
      {
        "title": "Request service for repeated overload power",
        "detail": "A technician must separate mechanical binding from motor/inverter problems.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E49 appears on this model?",
    "observations": [
      {
        "label": "A clearly excessive load is present",
        "advice": "Reduce it using the owner manual’s limits."
      },
      {
        "label": "A normal load also produces the warning",
        "advice": "Do not keep blaming load size; arrange inspection."
      },
      {
        "label": "There is scraping, grinding or binding",
        "advice": "Stop operation and report the mechanical symptom."
      }
    ],
    "faq": [
      {
        "question": "Is E49 a lock that remains active?",
        "answer": "No. The reviewed legacy entry concerns motor overload power."
      },
      {
        "question": "Why preserve E45 versus E49 when reporting the fault?",
        "answer": "The service table labels current and power overload entries separately. The exact message helps the technician choose the correct tests."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E49",
      "drive-motor overload-power condition",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 54 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=54"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e52-error": {
    "title": "GE washer E52: main-control wake-up / drive communication error (legacy front-load models)",
    "shortTitle": "GE washer E52 — main-control wake-up / drive communication error",
    "summary": "The cited legacy table lists E52 as a main-control wake-up error and describes lost communication with the drive after initial success. It is not simply a motor that never rotated. Preserve the startup sequence when reporting the fault.",
    "likelyCauses": [
      "Communication is lost after the drive initially responds",
      "A connection between the main control and inverter is abnormal",
      "The model’s drive/control electronics need diagnosis"
    ],
    "quickChecks": [
      {
        "title": "Record whether operation initially began",
        "detail": "Note any normal startup or brief drum movement before E52.",
        "level": "safe"
      },
      {
        "title": "Distinguish a dead appliance from an error message",
        "detail": "An illuminated control displaying E52 is not equivalent to a washer with no power.",
        "level": "safe"
      },
      {
        "title": "Avoid reconnecting internal communication cables",
        "detail": "Those connections are behind service covers and should not be disturbed as an owner reset.",
        "level": "caution"
      },
      {
        "title": "Provide the sequence to service",
        "detail": "The initial-response versus later-loss distinction is useful for model-specific communication tests.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E52 appears on this model?",
    "observations": [
      {
        "label": "The drive briefly responds before stopping",
        "advice": "Report the initial success and later E52."
      },
      {
        "label": "No display or lights exist at all",
        "advice": "Start with the model’s power guidance rather than treating an absent display as E52."
      },
      {
        "label": "The message repeats after a permitted normal restart",
        "advice": "Request control-to-drive diagnosis."
      }
    ],
    "faq": [
      {
        "question": "Is E52 simply failure of the motor to rotate?",
        "answer": "The reviewed legacy table is more specific: a wake-up/communication condition with the drive after initial success."
      },
      {
        "question": "Should I buy a motor from E52 alone?",
        "answer": "No. Connections, inverter and control behavior require diagnosis."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E52",
      "main-control wake-up / drive communication error",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e53-error": {
    "title": "GE washer E53: internal software buffer error (legacy front-load models)",
    "shortTitle": "GE washer E53 — internal software buffer error",
    "summary": "E53 is an internal buffer-error entry in the reviewed GE legacy table. It does not establish a failed motor winding or an unusual load current. Record the event and use the exact model’s service guidance instead of downloading unofficial firmware.",
    "likelyCauses": [
      "The drive/control system reports an internal buffer state fault",
      "An electronics/software condition interrupts the normal sequence",
      "The exact inverter/control implementation needs service confirmation"
    ],
    "quickChecks": [
      {
        "title": "Record the event before resetting anything",
        "detail": "Save the full model, programme and the point at which E53 appeared.",
        "level": "safe"
      },
      {
        "title": "Keep a buffer error separate from motor-current codes",
        "detail": "Do not substitute E42, E45 or a different manufacturer’s E53 definition.",
        "level": "safe"
      },
      {
        "title": "Avoid unofficial software or diagnostic tools",
        "detail": "A public error chart does not authorize firmware flashing or service-mode changes.",
        "level": "caution"
      },
      {
        "title": "Arrange model-specific electronics support",
        "detail": "A repeated internal buffer warning needs diagnosis of the correct platform.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E53 appears on this model?",
    "observations": [
      {
        "label": "It appeared after normal operation had begun",
        "advice": "Include the cycle stage in the service report."
      },
      {
        "label": "It returns immediately on a permitted start",
        "advice": "Do not continue trying arbitrary reset combinations."
      },
      {
        "label": "A suggested fix requires an unknown firmware download",
        "advice": "Stop and use manufacturer-approved service."
      }
    ],
    "faq": [
      {
        "question": "Does E53 prove a motor-control circuit has burned out?",
        "answer": "No. The reviewed legacy label is an internal software buffer error, which is not a physical damage diagnosis."
      },
      {
        "question": "Can a website’s generic firmware file clear it?",
        "answer": "Do not use unofficial firmware. Use the exact model’s approved service route."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E53",
      "internal software buffer error",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e54-error": {
    "title": "GE washer E54: no motor response / control-to-drive communication loss (legacy front-load models)",
    "shortTitle": "GE washer E54 — no motor response / control-to-drive communication loss",
    "summary": "GE’s cited legacy table lists E54 as no motor response and describes communication loss between the control and drive. The code is not a measurement proving that motor current is high. Diagnosis must distinguish a communication path from a mechanically loaded motor.",
    "likelyCauses": [
      "The control does not receive the expected drive response",
      "An internal control-to-drive connection is interrupted",
      "The drive electronics or control system needs professional testing"
    ],
    "quickChecks": [
      {
        "title": "Record what response was absent",
        "detail": "Note the requested operation and whether the basket attempted any movement.",
        "level": "safe"
      },
      {
        "title": "Preserve the distinction from an overcurrent code",
        "detail": "Do not treat E54 as E42 or E45 merely because the drum stopped.",
        "level": "safe"
      },
      {
        "title": "Do not open control or inverter covers",
        "detail": "Cable and board checks require the correct service procedure.",
        "level": "caution"
      },
      {
        "title": "Use a technician for repeated no-response events",
        "detail": "The code alone does not choose a motor, inverter or main control replacement.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E54 appears on this model?",
    "observations": [
      {
        "label": "The panel works but no drive movement occurs",
        "advice": "Report the active control and missing response."
      },
      {
        "label": "The basket briefly moves then communication fails",
        "advice": "Report that sequence rather than assuming a complete motor open circuit."
      },
      {
        "label": "Another code is also stored or displayed",
        "advice": "Record both messages without clearing evidence unnecessarily."
      }
    ],
    "faq": [
      {
        "question": "Is E54 motor current being too high?",
        "answer": "That is not the reviewed legacy definition; it describes missing motor response/communication."
      },
      {
        "question": "Can I identify the failed board without tests?",
        "answer": "No. The response path must be checked on the exact platform."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E54",
      "no motor response / control-to-drive communication loss",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e57-error": {
    "title": "GE washer E57: main-control software checksum failure (legacy front-load models)",
    "shortTitle": "GE washer E57 — main-control software checksum failure",
    "summary": "The reviewed legacy GE table identifies E57 as a software checksum failure associated with the main control. This is different from a generic inverter fault. Preserve the message and arrange model-specific electronics diagnosis instead of replacing unrelated drive parts.",
    "likelyCauses": [
      "The control reports an integrity/checksum error",
      "The main control cannot validate its stored software state",
      "A board-level fault needs manufacturer-approved service"
    ],
    "quickChecks": [
      {
        "title": "Record E57 exactly",
        "detail": "Keep a photograph and the full model designation for the service request.",
        "level": "safe"
      },
      {
        "title": "Do not treat checksum failure as a laundry problem",
        "detail": "Changing detergent, cleaning a drain hose or adjusting a door does not explain a software-integrity message.",
        "level": "safe"
      },
      {
        "title": "Avoid unofficial reprogramming",
        "detail": "Do not install files or enter a diagnostic programming sequence from a generic internet guide.",
        "level": "caution"
      },
      {
        "title": "Arrange main-control diagnosis",
        "detail": "The service decision must follow the actual platform rather than a universal replacement instruction.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E57 appears on this model?",
    "observations": [
      {
        "label": "The same checksum message returns",
        "advice": "Report recurrence; repeated power cycling is not software validation."
      },
      {
        "label": "The suggested repair concerns only a drain filter",
        "advice": "Recheck that the advice applies to E57 on this model."
      },
      {
        "label": "A different GE platform uses another definition",
        "advice": "Follow its own manual; the cited legacy table is not universal."
      }
    ],
    "faq": [
      {
        "question": "Is E57 simply an inverter-detected fault?",
        "answer": "The cited legacy table is more specific: a main-control software checksum failure."
      },
      {
        "question": "Is E57 the same as E58?",
        "answer": "The same service table labels E57 as checksum failure and E58 as communication failure. They should not be silently combined."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E57",
      "main-control software checksum failure",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e58-error": {
    "title": "GE washer E58: main-control communication failure (legacy front-load models)",
    "shortTitle": "GE washer E58 — main-control communication failure",
    "summary": "E58 is a communication-failure entry associated with the main control in GE’s reviewed legacy table. It is not a high-motor-current definition. Record the complete model and operating state so the correct control interface can be diagnosed.",
    "likelyCauses": [
      "The control system reports a communication fault",
      "An internal connection or control interface is abnormal",
      "The model’s main electronics need professional diagnosis"
    ],
    "quickChecks": [
      {
        "title": "Preserve the full E58 message",
        "detail": "Record when it appears and whether the panel still responds normally.",
        "level": "safe"
      },
      {
        "title": "Do not infer high motor current",
        "detail": "A stopped drum does not convert a communication message into an overload measurement.",
        "level": "safe"
      },
      {
        "title": "Leave internal interfaces connected",
        "detail": "Do not unplug board cables or bridge contacts as a trial fix.",
        "level": "caution"
      },
      {
        "title": "Use model-specific electronics service",
        "detail": "Report communication behavior and any accompanying codes before parts are selected.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E58 appears on this model?",
    "observations": [
      {
        "label": "The controls respond but the cycle cannot continue",
        "advice": "Record which functions still work."
      },
      {
        "label": "The fault appears at startup",
        "advice": "Include that timing in the service request."
      },
      {
        "label": "An online chart assigns E58 to motor current",
        "advice": "Check its manufacturer and model scope before applying it."
      }
    ],
    "faq": [
      {
        "question": "Does E58 mean motor current is too high?",
        "answer": "Not in the reviewed legacy GE table, which lists a communication failure."
      },
      {
        "question": "Does a communication error prove a loose cable?",
        "answer": "No. A connection is one diagnostic possibility; the exact control system needs testing."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E58",
      "main-control communication failure",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  },
  "ge-appliances-washer-e60-error": {
    "title": "GE washer E60: door-lock switch failure during locking (legacy front-load models)",
    "shortTitle": "GE washer E60 — door-lock switch failure during locking",
    "summary": "The cited legacy GE table associates E60 with a door-lock switch failing during the locking sequence. This is a lock-state problem on that platform, unlike the E42–E49 drive-system entries. Owner checks must stop before bypassing or forcing the lock.",
    "likelyCauses": [
      "Laundry prevents the door from closing normally",
      "The latch or lock mechanism cannot confirm its state",
      "The door-switch connection or main control needs testing"
    ],
    "quickChecks": [
      {
        "title": "Check ordinary door closure",
        "detail": "After any normal unlock, clear trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Wait for safe release after an interrupted cycle",
        "detail": "Retained water or heat may keep the door locked. Do not force the handle.",
        "level": "caution"
      },
      {
        "title": "Record whether locking is attempted",
        "detail": "Report a click, repeated attempts or no visible lock indication without opening covers.",
        "level": "safe"
      },
      {
        "title": "Leave switch and solenoid testing to service",
        "detail": "Do not bridge an interlock to finish a cycle.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E60 appears on this model?",
    "observations": [
      {
        "label": "Fabric blocks the latch path",
        "advice": "Remove the obstruction only after safe normal access."
      },
      {
        "label": "The door closes but lock confirmation never occurs",
        "advice": "Arrange lock-state diagnosis."
      },
      {
        "label": "The door is stuck with water inside",
        "advice": "Follow only the exact manual’s retained-water and release guidance."
      }
    ],
    "faq": [
      {
        "question": "Is every GE E-series error a door-lock fault?",
        "answer": "No. The reviewed table contains separate fill, drain, dispenser, drive and control entries. E60 is the lock-switch entry here."
      },
      {
        "question": "Can I bypass the door switch to test it?",
        "answer": "No. The interlock is a protective system and internal testing belongs with qualified service."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips or an electrical smell appears",
      "The next step requires removing service covers, live measurements or bypassing protection",
      "The fault returns after the exact manual’s permitted owner checks"
    ],
    "modelNote": "Scope: the GE WBVH6240-family technical service table, also identified for WCVH6260 and WHDVH626 in this archive. This is not a definition for every GE front-loader, top-loader or newer platform. The GE-authored technical document is hosted by ManualsLib; use GE’s own model lookup to match the appliance. Service test modes and internal measurements are not owner procedures.",
    "appliesTo": "Legacy GE WBVH6240 / WCVH6260 / WHDVH626 front-load family, subject to exact model documentation",
    "updated": "2026-11-01",
    "tags": [
      "GE Appliances",
      "washing machine",
      "E60",
      "door-lock switch failure during locking",
      "legacy front-load platform"
    ],
    "sources": [
      {
        "label": "GE technical service guide — WBVH6240 family, p. 55 (ManualsLib archive)",
        "url": "https://www.manualslib.com/manual/739668/Ge-Wbvh6240.html?page=55"
      },
      {
        "label": "GE Appliances — official owner-manual and model lookup",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ]
  }
};
