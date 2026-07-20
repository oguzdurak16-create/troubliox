import type { Problem } from "./problems";

// Curated model-dependent error-code reference. Readers are directed to official support and model manuals.
export const applianceProblems: Problem[] = [
  {
    "slug": "samsung-washer-4c-4e-error",
    "title": "Samsung washer 4C / 4E error: water is not entering correctly",
    "shortTitle": "Samsung washer 4C / 4E error",
    "summary": "The 4C / 4E display on many Samsung washing machines indicates that water is not entering correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 4C / 4E appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does 4C / 4E mean on a Samsung washer?",
        "answer": "On many model families, 4C / 4E indicates that water is not entering correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 4C / 4E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "4c / 4e",
      "water is not entering correctly",
      "inlet",
      "4c",
      "4e"
    ],
    "featured": true,
    "errorCode": "4C / 4E",
    "aliases": [
      "4C",
      "4E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-4c2-error",
    "title": "Samsung washer 4C2 error: the supplied water temperature is too high",
    "shortTitle": "Samsung washer 4C2 error",
    "summary": "The 4C2 display on many Samsung washing machines indicates that the supplied water temperature is too high. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 4C2 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does 4C2 mean on a Samsung washer?",
        "answer": "On many model families, 4C2 indicates that the supplied water temperature is too high. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 4C2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "4c2",
      "the supplied water temperature is too high",
      "temperature",
      "4c2"
    ],
    "featured": true,
    "errorCode": "4C2",
    "aliases": [
      "4C2"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-5c-5e-error",
    "title": "Samsung washer 5C / 5E error: the washer cannot drain in time",
    "shortTitle": "Samsung washer 5C / 5E error",
    "summary": "The 5C / 5E display on many Samsung washing machines indicates that the washer cannot drain in time. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 5C / 5E appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does 5C / 5E mean on a Samsung washer?",
        "answer": "On many model families, 5C / 5E indicates that the washer cannot drain in time. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 5C / 5E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "5c / 5e",
      "the washer cannot drain in time",
      "drain",
      "5c",
      "5e"
    ],
    "featured": true,
    "errorCode": "5C / 5E",
    "aliases": [
      "5C",
      "5E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-ue-ub-error",
    "title": "Samsung washer UE / Ub error: the load is unbalanced for spinning",
    "shortTitle": "Samsung washer UE / Ub error",
    "summary": "The UE / Ub display on many Samsung washing machines indicates that the load is unbalanced for spinning. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when UE / Ub appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does UE / Ub mean on a Samsung washer?",
        "answer": "On many model families, UE / Ub indicates that the load is unbalanced for spinning. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear UE / Ub by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "ue / ub",
      "the load is unbalanced for spinning",
      "balance",
      "ue",
      "ub"
    ],
    "featured": true,
    "errorCode": "UE / Ub",
    "aliases": [
      "UE",
      "Ub"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-dc-de-error",
    "title": "Samsung washer dC / dE error: the door is open or not locking",
    "shortTitle": "Samsung washer dC / dE error",
    "summary": "The dC / dE display on many Samsung washing machines indicates that the door is open or not locking. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dC / dE appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dC / dE mean on a Samsung washer?",
        "answer": "On many model families, dC / dE indicates that the door is open or not locking. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dC / dE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "dc / de",
      "the door is open or not locking",
      "door",
      "dc",
      "de"
    ],
    "featured": true,
    "errorCode": "dC / dE",
    "aliases": [
      "dC",
      "dE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-dc1-error",
    "title": "Samsung washer dC1 error: the main door lock signal is abnormal",
    "shortTitle": "Samsung washer dC1 error",
    "summary": "The dC1 display on many Samsung washing machines indicates that the main door lock signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dC1 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dC1 mean on a Samsung washer?",
        "answer": "On many model families, dC1 indicates that the main door lock signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dC1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "dc1",
      "the main door lock signal is abnormal",
      "door",
      "dc1"
    ],
    "featured": true,
    "errorCode": "dC1",
    "aliases": [
      "dC1"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-dc3-error",
    "title": "Samsung washer dC3 error: the AddWash door is not detected as closed",
    "shortTitle": "Samsung washer dC3 error",
    "summary": "The dC3 display on many Samsung washing machines indicates that the AddWash door is not detected as closed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dC3 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dC3 mean on a Samsung washer?",
        "answer": "On many model families, dC3 indicates that the AddWash door is not detected as closed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dC3 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "dc3",
      "the AddWash door is not detected as closed",
      "door",
      "dc3"
    ],
    "featured": true,
    "errorCode": "dC3",
    "aliases": [
      "dC3"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-lc-le-error",
    "title": "Samsung washer LC / LE error: a leak or unexpected water-level drop was detected",
    "shortTitle": "Samsung washer LC / LE error",
    "summary": "The LC / LE display on many Samsung washing machines indicates that a leak or unexpected water-level drop was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LC / LE appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does LC / LE mean on a Samsung washer?",
        "answer": "On many model families, LC / LE indicates that a leak or unexpected water-level drop was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LC / LE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "lc / le",
      "a leak or unexpected water-level drop was detected",
      "leak",
      "lc",
      "le"
    ],
    "featured": true,
    "errorCode": "LC / LE",
    "aliases": [
      "LC",
      "LE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-lc1-error",
    "title": "Samsung washer LC1 error: water was detected in the washer base",
    "shortTitle": "Samsung washer LC1 error",
    "summary": "The LC1 display on many Samsung washing machines indicates that water was detected in the washer base. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LC1 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does LC1 mean on a Samsung washer?",
        "answer": "On many model families, LC1 indicates that water was detected in the washer base. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LC1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "lc1",
      "water was detected in the washer base",
      "leak",
      "lc1"
    ],
    "featured": false,
    "errorCode": "LC1",
    "aliases": [
      "LC1"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-oc-oe-error",
    "title": "Samsung washer OC / OE error: the washer detected an overfill",
    "shortTitle": "Samsung washer OC / OE error",
    "summary": "The OC / OE display on many Samsung washing machines indicates that the washer detected an overfill. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when OC / OE appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does OC / OE mean on a Samsung washer?",
        "answer": "On many model families, OC / OE indicates that the washer detected an overfill. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear OC / OE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "oc / oe",
      "the washer detected an overfill",
      "overflow",
      "oc",
      "oe"
    ],
    "featured": false,
    "errorCode": "OC / OE",
    "aliases": [
      "OC",
      "OE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-sud-5d-error",
    "title": "Samsung washer Sud / 5d error: excess detergent suds were detected",
    "shortTitle": "Samsung washer Sud / 5d error",
    "summary": "The Sud / 5d display on many Samsung washing machines indicates that excess detergent suds were detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Sud / 5d appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does Sud / 5d mean on a Samsung washer?",
        "answer": "On many model families, Sud / 5d indicates that excess detergent suds were detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Sud / 5d by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "sud / 5d",
      "excess detergent suds were detected",
      "suds",
      "sud",
      "5d",
      "sd"
    ],
    "featured": false,
    "errorCode": "Sud / 5d",
    "aliases": [
      "Sud",
      "5d",
      "Sd"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-hc-he-error",
    "title": "Samsung washer HC / HE error: the water-heating system is abnormal",
    "shortTitle": "Samsung washer HC / HE error",
    "summary": "The HC / HE display on many Samsung washing machines indicates that the water-heating system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HC / HE appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HC / HE mean on a Samsung washer?",
        "answer": "On many model families, HC / HE indicates that the water-heating system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HC / HE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "hc / he",
      "the water-heating system is abnormal",
      "heater",
      "hc",
      "he"
    ],
    "featured": false,
    "errorCode": "HC / HE",
    "aliases": [
      "HC",
      "HE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-hc2-error",
    "title": "Samsung washer HC2 error: the drying heater temperature is abnormal",
    "shortTitle": "Samsung washer HC2 error",
    "summary": "The HC2 display on many Samsung washing machines indicates that the drying heater temperature is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HC2 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HC2 mean on a Samsung washer?",
        "answer": "On many model families, HC2 indicates that the drying heater temperature is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HC2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "hc2",
      "the drying heater temperature is abnormal",
      "heater",
      "hc2"
    ],
    "featured": false,
    "errorCode": "HC2",
    "aliases": [
      "HC2"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-3c-3e-error",
    "title": "Samsung washer 3C / 3E error: the motor or motor feedback is abnormal",
    "shortTitle": "Samsung washer 3C / 3E error",
    "summary": "The 3C / 3E display on many Samsung washing machines indicates that the motor or motor feedback is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 3C / 3E appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does 3C / 3E mean on a Samsung washer?",
        "answer": "On many model families, 3C / 3E indicates that the motor or motor feedback is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 3C / 3E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "3c / 3e",
      "the motor or motor feedback is abnormal",
      "motor",
      "3c",
      "3e"
    ],
    "featured": false,
    "errorCode": "3C / 3E",
    "aliases": [
      "3C",
      "3E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-8c-8e-error",
    "title": "Samsung washer 8C / 8E error: the vibration sensor signal is abnormal",
    "shortTitle": "Samsung washer 8C / 8E error",
    "summary": "The 8C / 8E display on many Samsung washing machines indicates that the vibration sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 8C / 8E appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does 8C / 8E mean on a Samsung washer?",
        "answer": "On many model families, 8C / 8E indicates that the vibration sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 8C / 8E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "8c / 8e",
      "the vibration sensor signal is abnormal",
      "sensor",
      "8c",
      "8e"
    ],
    "featured": false,
    "errorCode": "8C / 8E",
    "aliases": [
      "8C",
      "8E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-ac-ae-error",
    "title": "Samsung washer AC / AE error: the control boards are not communicating",
    "shortTitle": "Samsung washer AC / AE error",
    "summary": "The AC / AE display on many Samsung washing machines indicates that the control boards are not communicating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AC / AE appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does AC / AE mean on a Samsung washer?",
        "answer": "On many model families, AC / AE indicates that the control boards are not communicating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AC / AE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "ac / ae",
      "the control boards are not communicating",
      "control",
      "ac",
      "ae"
    ],
    "featured": false,
    "errorCode": "AC / AE",
    "aliases": [
      "AC",
      "AE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-ac6-error",
    "title": "Samsung washer AC6 error: communication with the inverter is interrupted",
    "shortTitle": "Samsung washer AC6 error",
    "summary": "The AC6 display on many Samsung washing machines indicates that communication with the inverter is interrupted. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AC6 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does AC6 mean on a Samsung washer?",
        "answer": "On many model families, AC6 indicates that communication with the inverter is interrupted. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AC6 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "ac6",
      "communication with the inverter is interrupted",
      "control",
      "ac6"
    ],
    "featured": false,
    "errorCode": "AC6",
    "aliases": [
      "AC6"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-tc-te-error",
    "title": "Samsung washer tC / tE error: the temperature sensor signal is abnormal",
    "shortTitle": "Samsung washer tC / tE error",
    "summary": "The tC / tE display on many Samsung washing machines indicates that the temperature sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when tC / tE appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does tC / tE mean on a Samsung washer?",
        "answer": "On many model families, tC / tE indicates that the temperature sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear tC / tE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "tc / te",
      "the temperature sensor signal is abnormal",
      "sensor",
      "tc",
      "te"
    ],
    "featured": false,
    "errorCode": "tC / tE",
    "aliases": [
      "tC",
      "tE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-1c-1e-error",
    "title": "Samsung washer 1C / 1E error: the water-level sensor signal is abnormal",
    "shortTitle": "Samsung washer 1C / 1E error",
    "summary": "The 1C / 1E display on many Samsung washing machines indicates that the water-level sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 1C / 1E appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does 1C / 1E mean on a Samsung washer?",
        "answer": "On many model families, 1C / 1E indicates that the water-level sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 1C / 1E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "1c / 1e",
      "the water-level sensor signal is abnormal",
      "level",
      "1c",
      "1e"
    ],
    "featured": false,
    "errorCode": "1C / 1E",
    "aliases": [
      "1C",
      "1E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-bc-be-error",
    "title": "Samsung washer bC / bE error: a control-panel button appears stuck",
    "shortTitle": "Samsung washer bC / bE error",
    "summary": "The bC / bE display on many Samsung washing machines indicates that a control-panel button appears stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when bC / bE appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does bC / bE mean on a Samsung washer?",
        "answer": "On many model families, bC / bE indicates that a control-panel button appears stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear bC / bE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "bc / be",
      "a control-panel button appears stuck",
      "button",
      "bc",
      "be"
    ],
    "featured": false,
    "errorCode": "bC / bE",
    "aliases": [
      "bC",
      "bE"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-9c1-error",
    "title": "Samsung washer 9C1 error: the incoming voltage is too high",
    "shortTitle": "Samsung washer 9C1 error",
    "summary": "The 9C1 display on many Samsung washing machines indicates that the incoming voltage is too high. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 9C1 appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does 9C1 mean on a Samsung washer?",
        "answer": "On many model families, 9C1 indicates that the incoming voltage is too high. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 9C1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "9c1",
      "the incoming voltage is too high",
      "power",
      "9c1"
    ],
    "featured": false,
    "errorCode": "9C1",
    "aliases": [
      "9C1"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-9c2-error",
    "title": "Samsung washer 9C2 error: the incoming voltage is too low",
    "shortTitle": "Samsung washer 9C2 error",
    "summary": "The 9C2 display on many Samsung washing machines indicates that the incoming voltage is too low. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 9C2 appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does 9C2 mean on a Samsung washer?",
        "answer": "On many model families, 9C2 indicates that the incoming voltage is too low. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 9C2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "9c2",
      "the incoming voltage is too low",
      "power",
      "9c2"
    ],
    "featured": false,
    "errorCode": "9C2",
    "aliases": [
      "9C2"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-uc-error",
    "title": "Samsung washer UC error: the power supply voltage is unstable",
    "shortTitle": "Samsung washer UC error",
    "summary": "The UC display on many Samsung washing machines indicates that the power supply voltage is unstable. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when UC appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does UC mean on a Samsung washer?",
        "answer": "On many model families, UC indicates that the power supply voltage is unstable. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear UC by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "uc",
      "the power supply voltage is unstable",
      "power",
      "uc"
    ],
    "featured": false,
    "errorCode": "UC",
    "aliases": [
      "UC"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-pc-error",
    "title": "Samsung washer PC error: the clutch or position signal is abnormal",
    "shortTitle": "Samsung washer PC error",
    "summary": "The PC display on many Samsung washing machines indicates that the clutch or position signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PC appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does PC mean on a Samsung washer?",
        "answer": "On many model families, PC indicates that the clutch or position signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PC by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "pc",
      "the clutch or position signal is abnormal",
      "position",
      "pc"
    ],
    "featured": false,
    "errorCode": "PC",
    "aliases": [
      "PC"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-pc1-error",
    "title": "Samsung washer PC1 error: the clutch position cannot be confirmed",
    "shortTitle": "Samsung washer PC1 error",
    "summary": "The PC1 display on many Samsung washing machines indicates that the clutch position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PC1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does PC1 mean on a Samsung washer?",
        "answer": "On many model families, PC1 indicates that the clutch position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PC1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "pc1",
      "the clutch position cannot be confirmed",
      "position",
      "pc1"
    ],
    "featured": false,
    "errorCode": "PC1",
    "aliases": [
      "PC1"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-ddc-error",
    "title": "Samsung washer ddC error: the AddWash door was opened without pausing",
    "shortTitle": "Samsung washer ddC error",
    "summary": "The ddC display on many Samsung washing machines indicates that the AddWash door was opened without pausing. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when ddC appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does ddC mean on a Samsung washer?",
        "answer": "On many model families, ddC indicates that the AddWash door was opened without pausing. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear ddC by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "ddc",
      "the AddWash door was opened without pausing",
      "door",
      "ddc"
    ],
    "featured": false,
    "errorCode": "ddC",
    "aliases": [
      "ddC"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-hot-error",
    "title": "Samsung washer Hot error: the drum is still too hot to unlock safely",
    "shortTitle": "Samsung washer Hot error",
    "summary": "The Hot display on many Samsung washing machines indicates that the drum is still too hot to unlock safely. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A normal cooling phase is running",
      "Temperature is above the unlock threshold",
      "Sensor has not confirmed a safe temperature",
      "Airflow is restricted"
    ],
    "quickChecks": [
      {
        "title": "Wait for cooling to finish",
        "detail": "Do not force the door.",
        "level": "safe"
      },
      {
        "title": "Keep external vents clear",
        "detail": "Do not cover the appliance.",
        "level": "safe"
      },
      {
        "title": "Check whether the message clears",
        "detail": "Normal status messages disappear after cooling.",
        "level": "safe"
      },
      {
        "title": "Use the model manual if persistent",
        "detail": "A sensor or airflow issue may need service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Hot appears?",
    "observations": [
      {
        "label": "Message clears after several minutes",
        "advice": "It was a normal cooling delay."
      },
      {
        "label": "Message remains when cold",
        "advice": "Sensor or control diagnosis may be needed."
      },
      {
        "label": "Appliance is unusually hot",
        "advice": "Disconnect power and arrange inspection."
      }
    ],
    "whenToStop": [
      "Cabinet is too hot to touch",
      "Burning smell or smoke",
      "Door is being forced"
    ],
    "faq": [
      {
        "question": "What does Hot mean on a Samsung washer?",
        "answer": "On many model families, Hot indicates that the drum is still too hot to unlock safely. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Hot by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "hot",
      "the drum is still too hot to unlock safely",
      "cooldown",
      "hot"
    ],
    "featured": false,
    "errorCode": "Hot",
    "aliases": [
      "Hot"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-a0-error",
    "title": "Samsung washer A0 error: the washer is in a test-related mode",
    "shortTitle": "Samsung washer A0 error",
    "summary": "The A0 display on many Samsung washing machines indicates that the washer is in a test-related mode. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A setup, delay, test, or interrupted state is active",
      "A button combination changed the operating mode",
      "Cycle or setup was not completed",
      "Control did not return to normal mode"
    ],
    "quickChecks": [
      {
        "title": "Read the display as a status first",
        "detail": "Not every code is a hardware failure.",
        "level": "safe"
      },
      {
        "title": "Use the documented cancel sequence",
        "detail": "Follow the model manual only.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly if allowed",
        "detail": "Confirm the normal home screen returns.",
        "level": "safe"
      },
      {
        "title": "Avoid undocumented service modes",
        "detail": "They can run heaters, pumps, or motors unexpectedly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when A0 appears?",
    "observations": [
      {
        "label": "Display returns to normal",
        "advice": "No further action is usually needed."
      },
      {
        "label": "State returns every startup",
        "advice": "A stuck button or control fault may be involved."
      },
      {
        "label": "Components run unexpectedly",
        "advice": "Disconnect power and arrange service."
      }
    ],
    "whenToStop": [
      "Motors or heaters run unexpectedly",
      "The appliance contains water or a load",
      "Undocumented settings would be changed"
    ],
    "faq": [
      {
        "question": "What does A0 mean on a Samsung washer?",
        "answer": "On many model families, A0 indicates that the washer is in a test-related mode. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear A0 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "a0",
      "the washer is in a test-related mode",
      "status",
      "a0"
    ],
    "featured": false,
    "errorCode": "A0",
    "aliases": [
      "A0"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-nf-error",
    "title": "Samsung washer nF error: the washer did not fill with water",
    "shortTitle": "Samsung washer nF error",
    "summary": "The nF display on many Samsung washing machines indicates that the washer did not fill with water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when nF appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does nF mean on a Samsung washer?",
        "answer": "On many model families, nF indicates that the washer did not fill with water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear nF by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "nf",
      "the washer did not fill with water",
      "inlet",
      "nf"
    ],
    "featured": false,
    "errorCode": "nF",
    "aliases": [
      "nF"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-nd-error",
    "title": "Samsung washer nd error: the washer did not drain",
    "shortTitle": "Samsung washer nd error",
    "summary": "The nd display on many Samsung washing machines indicates that the washer did not drain. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when nd appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does nd mean on a Samsung washer?",
        "answer": "On many model families, nd indicates that the washer did not drain. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear nd by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "nd",
      "the washer did not drain",
      "drain",
      "nd"
    ],
    "featured": false,
    "errorCode": "nd",
    "aliases": [
      "nd"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-fl-error",
    "title": "Samsung washer FL error: the door failed to lock",
    "shortTitle": "Samsung washer FL error",
    "summary": "The FL display on many Samsung washing machines indicates that the door failed to lock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FL appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does FL mean on a Samsung washer?",
        "answer": "On many model families, FL indicates that the door failed to lock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "fl",
      "the door failed to lock",
      "door",
      "fl"
    ],
    "featured": false,
    "errorCode": "FL",
    "aliases": [
      "FL"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-lo-error",
    "title": "Samsung washer LO error: the door failed to unlock",
    "shortTitle": "Samsung washer LO error",
    "summary": "The LO display on many Samsung washing machines indicates that the door failed to unlock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LO appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does LO mean on a Samsung washer?",
        "answer": "On many model families, LO indicates that the door failed to unlock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LO by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "lo",
      "the door failed to unlock",
      "door",
      "lo"
    ],
    "featured": false,
    "errorCode": "LO",
    "aliases": [
      "LO"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-e2-error",
    "title": "Samsung washer E2 error: a control-panel key is stuck",
    "shortTitle": "Samsung washer E2 error",
    "summary": "The E2 display on many Samsung washing machines indicates that a control-panel key is stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when E2 appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does E2 mean on a Samsung washer?",
        "answer": "On many model families, E2 indicates that a control-panel key is stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "e2",
      "a control-panel key is stuck",
      "button",
      "e2"
    ],
    "featured": false,
    "errorCode": "E2",
    "aliases": [
      "E2"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-2e-error",
    "title": "Samsung washer 2E error: the main control detected an internal fault",
    "shortTitle": "Samsung washer 2E error",
    "summary": "The 2E display on many Samsung washing machines indicates that the main control detected an internal fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 2E appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does 2E mean on a Samsung washer?",
        "answer": "On many model families, 2E indicates that the main control detected an internal fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 2E by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "2e",
      "the main control detected an internal fault",
      "control",
      "2e"
    ],
    "featured": false,
    "errorCode": "2E",
    "aliases": [
      "2E"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-sf-error",
    "title": "Samsung washer SF error: the main control board reported an error",
    "shortTitle": "Samsung washer SF error",
    "summary": "The SF display on many Samsung washing machines indicates that the main control board reported an error. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when SF appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does SF mean on a Samsung washer?",
        "answer": "On many model families, SF indicates that the main control board reported an error. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear SF by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "sf",
      "the main control board reported an error",
      "control",
      "sf"
    ],
    "featured": false,
    "errorCode": "SF",
    "aliases": [
      "SF"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-washer-hr-error",
    "title": "Samsung washer Hr error: the heater relay is abnormal",
    "shortTitle": "Samsung washer Hr error",
    "summary": "The Hr display on many Samsung washing machines indicates that the heater relay is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when Hr appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does Hr mean on a Samsung washer?",
        "answer": "On many model families, Hr indicates that the heater relay is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Hr by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "washing machine",
      "washer",
      "hr",
      "the heater relay is abnormal",
      "heater",
      "hr"
    ],
    "featured": false,
    "errorCode": "Hr",
    "aliases": [
      "Hr"
    ],
    "appliesTo": "Selected Samsung washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-4c-4e-error",
    "title": "Samsung dishwasher 4C / 4E error: the dishwasher is not receiving enough water",
    "shortTitle": "Samsung dishwasher 4C / 4E error",
    "summary": "The 4C / 4E display on many Samsung dishwashers indicates that the dishwasher is not receiving enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 4C / 4E appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does 4C / 4E mean on a Samsung dishwasher?",
        "answer": "On many model families, 4C / 4E indicates that the dishwasher is not receiving enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 4C / 4E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "4c / 4e",
      "the dishwasher is not receiving enough water",
      "inlet",
      "4c",
      "4e"
    ],
    "featured": false,
    "errorCode": "4C / 4E",
    "aliases": [
      "4C",
      "4E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-5c-5e-error",
    "title": "Samsung dishwasher 5C / 5E error: the dishwasher cannot drain correctly",
    "shortTitle": "Samsung dishwasher 5C / 5E error",
    "summary": "The 5C / 5E display on many Samsung dishwashers indicates that the dishwasher cannot drain correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 5C / 5E appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does 5C / 5E mean on a Samsung dishwasher?",
        "answer": "On many model families, 5C / 5E indicates that the dishwasher cannot drain correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 5C / 5E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "5c / 5e",
      "the dishwasher cannot drain correctly",
      "drain",
      "5c",
      "5e"
    ],
    "featured": false,
    "errorCode": "5C / 5E",
    "aliases": [
      "5C",
      "5E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-lc-le-error",
    "title": "Samsung dishwasher LC / LE error: the leak sensor detected water in the base",
    "shortTitle": "Samsung dishwasher LC / LE error",
    "summary": "The LC / LE display on many Samsung dishwashers indicates that the leak sensor detected water in the base. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LC / LE appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does LC / LE mean on a Samsung dishwasher?",
        "answer": "On many model families, LC / LE indicates that the leak sensor detected water in the base. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LC / LE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "lc / le",
      "the leak sensor detected water in the base",
      "leak",
      "lc",
      "le"
    ],
    "featured": false,
    "errorCode": "LC / LE",
    "aliases": [
      "LC",
      "LE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-oc-oe-error",
    "title": "Samsung dishwasher OC / OE error: the dishwasher detected too much water",
    "shortTitle": "Samsung dishwasher OC / OE error",
    "summary": "The OC / OE display on many Samsung dishwashers indicates that the dishwasher detected too much water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when OC / OE appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does OC / OE mean on a Samsung dishwasher?",
        "answer": "On many model families, OC / OE indicates that the dishwasher detected too much water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear OC / OE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "oc / oe",
      "the dishwasher detected too much water",
      "overflow",
      "oc",
      "oe"
    ],
    "featured": false,
    "errorCode": "OC / OE",
    "aliases": [
      "OC",
      "OE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-hc-he-error",
    "title": "Samsung dishwasher HC / HE error: the water temperature or heater is abnormal",
    "shortTitle": "Samsung dishwasher HC / HE error",
    "summary": "The HC / HE display on many Samsung dishwashers indicates that the water temperature or heater is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HC / HE appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HC / HE mean on a Samsung dishwasher?",
        "answer": "On many model families, HC / HE indicates that the water temperature or heater is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HC / HE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "hc / he",
      "the water temperature or heater is abnormal",
      "heater",
      "hc",
      "he"
    ],
    "featured": false,
    "errorCode": "HC / HE",
    "aliases": [
      "HC",
      "HE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-3c-error",
    "title": "Samsung dishwasher 3C error: the wash pump is not operating as expected",
    "shortTitle": "Samsung dishwasher 3C error",
    "summary": "The 3C display on many Samsung dishwashers indicates that the wash pump is not operating as expected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 3C appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does 3C mean on a Samsung dishwasher?",
        "answer": "On many model families, 3C indicates that the wash pump is not operating as expected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 3C by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "3c",
      "the wash pump is not operating as expected",
      "motor",
      "3c"
    ],
    "featured": false,
    "errorCode": "3C",
    "aliases": [
      "3C"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-pc-error",
    "title": "Samsung dishwasher PC error: the zone-wash diverter position is abnormal",
    "shortTitle": "Samsung dishwasher PC error",
    "summary": "The PC display on many Samsung dishwashers indicates that the zone-wash diverter position is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PC appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does PC mean on a Samsung dishwasher?",
        "answer": "On many model families, PC indicates that the zone-wash diverter position is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PC by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "pc",
      "the zone-wash diverter position is abnormal",
      "position",
      "pc"
    ],
    "featured": false,
    "errorCode": "PC",
    "aliases": [
      "PC"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-7e-error",
    "title": "Samsung dishwasher 7E error: the WaterWall reflector cannot move correctly",
    "shortTitle": "Samsung dishwasher 7E error",
    "summary": "The 7E display on many Samsung dishwashers indicates that the WaterWall reflector cannot move correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 7E appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does 7E mean on a Samsung dishwasher?",
        "answer": "On many model families, 7E indicates that the WaterWall reflector cannot move correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 7E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "7e",
      "the WaterWall reflector cannot move correctly",
      "position",
      "7e"
    ],
    "featured": false,
    "errorCode": "7E",
    "aliases": [
      "7E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-be-6e-error",
    "title": "Samsung dishwasher bE / 6E error: a control-panel button is held or stuck",
    "shortTitle": "Samsung dishwasher bE / 6E error",
    "summary": "The bE / 6E display on many Samsung dishwashers indicates that a control-panel button is held or stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when bE / 6E appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does bE / 6E mean on a Samsung dishwasher?",
        "answer": "On many model families, bE / 6E indicates that a control-panel button is held or stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear bE / 6E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "be / 6e",
      "a control-panel button is held or stuck",
      "button",
      "be",
      "6e"
    ],
    "featured": false,
    "errorCode": "bE / 6E",
    "aliases": [
      "bE",
      "6E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-ce-error",
    "title": "Samsung dishwasher CE error: the control modules are not communicating",
    "shortTitle": "Samsung dishwasher CE error",
    "summary": "The CE display on many Samsung dishwashers indicates that the control modules are not communicating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when CE appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does CE mean on a Samsung dishwasher?",
        "answer": "On many model families, CE indicates that the control modules are not communicating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear CE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "ce",
      "the control modules are not communicating",
      "control",
      "ce"
    ],
    "featured": false,
    "errorCode": "CE",
    "aliases": [
      "CE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-pe-error",
    "title": "Samsung dishwasher PE error: the half-load or zone-wash connection is abnormal",
    "shortTitle": "Samsung dishwasher PE error",
    "summary": "The PE display on many Samsung dishwashers indicates that the half-load or zone-wash connection is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PE appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does PE mean on a Samsung dishwasher?",
        "answer": "On many model families, PE indicates that the half-load or zone-wash connection is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "pe",
      "the half-load or zone-wash connection is abnormal",
      "position",
      "pe"
    ],
    "featured": false,
    "errorCode": "PE",
    "aliases": [
      "PE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-te-error",
    "title": "Samsung dishwasher tE error: the temperature sensor signal is abnormal",
    "shortTitle": "Samsung dishwasher tE error",
    "summary": "The tE display on many Samsung dishwashers indicates that the temperature sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when tE appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does tE mean on a Samsung dishwasher?",
        "answer": "On many model families, tE indicates that the temperature sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear tE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "te",
      "the temperature sensor signal is abnormal",
      "sensor",
      "te"
    ],
    "featured": false,
    "errorCode": "tE",
    "aliases": [
      "tE"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-9e-error",
    "title": "Samsung dishwasher 9E error: the dishwasher detected an insufficient water level",
    "shortTitle": "Samsung dishwasher 9E error",
    "summary": "The 9E display on many Samsung dishwashers indicates that the dishwasher detected an insufficient water level. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 9E appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does 9E mean on a Samsung dishwasher?",
        "answer": "On many model families, 9E indicates that the dishwasher detected an insufficient water level. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 9E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "9e",
      "the dishwasher detected an insufficient water level",
      "level",
      "9e"
    ],
    "featured": false,
    "errorCode": "9E",
    "aliases": [
      "9E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-1e-error",
    "title": "Samsung dishwasher 1E error: the filter or water-level path needs attention",
    "shortTitle": "Samsung dishwasher 1E error",
    "summary": "The 1E display on many Samsung dishwashers indicates that the filter or water-level path needs attention. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "User-cleanable filter is blocked",
      "Debris restricts water flow",
      "Filter is not seated correctly",
      "A pump or hose is also restricted"
    ],
    "quickChecks": [
      {
        "title": "Disconnect power",
        "detail": "Prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Clean filter and surrounding area",
        "detail": "Avoid sharp debris and do not force impellers.",
        "level": "safe"
      },
      {
        "title": "Refit the filter correctly",
        "detail": "Misalignment can reduce flow or cause leaks.",
        "level": "safe"
      },
      {
        "title": "Test a short cycle",
        "detail": "Stop if leakage, grinding, or the code returns.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when 1E appears?",
    "observations": [
      {
        "label": "Filter contains debris",
        "advice": "Clean it and inspect accessible flow paths."
      },
      {
        "label": "Filter is clean",
        "advice": "Hose, pump, sensor, or internal path may need service."
      },
      {
        "label": "Code returns",
        "advice": "Confirm filter seating and model-specific reset steps."
      }
    ],
    "whenToStop": [
      "Sharp glass cannot be removed safely",
      "Pump appears damaged",
      "Water leaks after refitting"
    ],
    "faq": [
      {
        "question": "What does 1E mean on a Samsung dishwasher?",
        "answer": "On many model families, 1E indicates that the filter or water-level path needs attention. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 1E by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "1e",
      "the filter or water-level path needs attention",
      "filter",
      "1e"
    ],
    "featured": false,
    "errorCode": "1E",
    "aliases": [
      "1E"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-hc2-error",
    "title": "Samsung dishwasher HC2 error: the drying heater temperature is abnormal",
    "shortTitle": "Samsung dishwasher HC2 error",
    "summary": "The HC2 display on many Samsung dishwashers indicates that the drying heater temperature is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HC2 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HC2 mean on a Samsung dishwasher?",
        "answer": "On many model families, HC2 indicates that the drying heater temperature is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HC2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "hc2",
      "the drying heater temperature is abnormal",
      "heater",
      "hc2"
    ],
    "featured": false,
    "errorCode": "HC2",
    "aliases": [
      "HC2"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-lc1-error",
    "title": "Samsung dishwasher LC1 error: water was detected in the dishwasher base",
    "shortTitle": "Samsung dishwasher LC1 error",
    "summary": "The LC1 display on many Samsung dishwashers indicates that water was detected in the dishwasher base. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LC1 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does LC1 mean on a Samsung dishwasher?",
        "answer": "On many model families, LC1 indicates that water was detected in the dishwasher base. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LC1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "lc1",
      "water was detected in the dishwasher base",
      "leak",
      "lc1"
    ],
    "featured": false,
    "errorCode": "LC1",
    "aliases": [
      "LC1"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-bc2-error",
    "title": "Samsung dishwasher bC2 error: a button has been pressed continuously",
    "shortTitle": "Samsung dishwasher bC2 error",
    "summary": "The bC2 display on many Samsung dishwashers indicates that a button has been pressed continuously. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when bC2 appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does bC2 mean on a Samsung dishwasher?",
        "answer": "On many model families, bC2 indicates that a button has been pressed continuously. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear bC2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "bc2",
      "a button has been pressed continuously",
      "button",
      "bc2"
    ],
    "featured": false,
    "errorCode": "bC2",
    "aliases": [
      "bC2"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-dc-error",
    "title": "Samsung dishwasher dC error: the dishwasher door is not latched",
    "shortTitle": "Samsung dishwasher dC error",
    "summary": "The dC display on many Samsung dishwashers indicates that the dishwasher door is not latched. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dC appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dC mean on a Samsung dishwasher?",
        "answer": "On many model families, dC indicates that the dishwasher door is not latched. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dC by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "dc",
      "the dishwasher door is not latched",
      "door",
      "dc"
    ],
    "featured": false,
    "errorCode": "dC",
    "aliases": [
      "dC"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-ap-error",
    "title": "Samsung dishwasher AP error: the dishwasher is in Wi-Fi setup mode",
    "shortTitle": "Samsung dishwasher AP error",
    "summary": "The AP display on many Samsung dishwashers indicates that the dishwasher is in Wi-Fi setup mode. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A setup, delay, test, or interrupted state is active",
      "A button combination changed the operating mode",
      "Cycle or setup was not completed",
      "Control did not return to normal mode"
    ],
    "quickChecks": [
      {
        "title": "Read the display as a status first",
        "detail": "Not every code is a hardware failure.",
        "level": "safe"
      },
      {
        "title": "Use the documented cancel sequence",
        "detail": "Follow the model manual only.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly if allowed",
        "detail": "Confirm the normal home screen returns.",
        "level": "safe"
      },
      {
        "title": "Avoid undocumented service modes",
        "detail": "They can run heaters, pumps, or motors unexpectedly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AP appears?",
    "observations": [
      {
        "label": "Display returns to normal",
        "advice": "No further action is usually needed."
      },
      {
        "label": "State returns every startup",
        "advice": "A stuck button or control fault may be involved."
      },
      {
        "label": "Components run unexpectedly",
        "advice": "Disconnect power and arrange service."
      }
    ],
    "whenToStop": [
      "Motors or heaters run unexpectedly",
      "The appliance contains water or a load",
      "Undocumented settings would be changed"
    ],
    "faq": [
      {
        "question": "What does AP mean on a Samsung dishwasher?",
        "answer": "On many model families, AP indicates that the dishwasher is in Wi-Fi setup mode. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AP by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "ap",
      "the dishwasher is in Wi-Fi setup mode",
      "status",
      "ap"
    ],
    "featured": false,
    "errorCode": "AP",
    "aliases": [
      "AP"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "samsung-dishwasher-pc1-error",
    "title": "Samsung dishwasher PC1 error: the diverter position cannot be confirmed",
    "shortTitle": "Samsung dishwasher PC1 error",
    "summary": "The PC1 display on many Samsung dishwashers indicates that the diverter position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Samsung",
    "brandSlug": "samsung",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PC1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does PC1 mean on a Samsung dishwasher?",
        "answer": "On many model families, PC1 indicates that the diverter position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PC1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "samsung",
      "dishwasher",
      "dishwasher",
      "pc1",
      "the diverter position cannot be confirmed",
      "position",
      "pc1"
    ],
    "featured": false,
    "errorCode": "PC1",
    "aliases": [
      "PC1"
    ],
    "appliesTo": "Selected Samsung dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Samsung Support",
        "url": "https://www.samsung.com/us/support/"
      },
      {
        "label": "Samsung manuals and downloads",
        "url": "https://www.samsung.com/us/support/downloads/"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-ie-error",
    "title": "LG washer IE error: the washer is not filling with enough water",
    "shortTitle": "LG washer IE error",
    "summary": "The IE display on many LG washing machines indicates that the washer is not filling with enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when IE appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does IE mean on a LG washer?",
        "answer": "On many model families, IE indicates that the washer is not filling with enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear IE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "ie",
      "the washer is not filling with enough water",
      "inlet",
      "ie",
      "1e"
    ],
    "featured": false,
    "errorCode": "IE",
    "aliases": [
      "IE",
      "1E"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-oe-error",
    "title": "LG washer OE error: the washer cannot drain in time",
    "shortTitle": "LG washer OE error",
    "summary": "The OE display on many LG washing machines indicates that the washer cannot drain in time. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when OE appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does OE mean on a LG washer?",
        "answer": "On many model families, OE indicates that the washer cannot drain in time. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear OE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "oe",
      "the washer cannot drain in time",
      "drain",
      "oe",
      "0e"
    ],
    "featured": false,
    "errorCode": "OE",
    "aliases": [
      "OE",
      "0E"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-ue-error",
    "title": "LG washer UE error: the load remains unbalanced",
    "shortTitle": "LG washer UE error",
    "summary": "The UE display on many LG washing machines indicates that the load remains unbalanced. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when UE appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does UE mean on a LG washer?",
        "answer": "On many model families, UE indicates that the load remains unbalanced. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear UE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "ue",
      "the load remains unbalanced",
      "balance",
      "ue"
    ],
    "featured": false,
    "errorCode": "UE",
    "aliases": [
      "UE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-de-error",
    "title": "LG washer dE error: the door is open or not locking",
    "shortTitle": "LG washer dE error",
    "summary": "The dE display on many LG washing machines indicates that the door is open or not locking. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dE appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dE mean on a LG washer?",
        "answer": "On many model families, dE indicates that the door is open or not locking. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "de",
      "the door is open or not locking",
      "door",
      "de"
    ],
    "featured": false,
    "errorCode": "dE",
    "aliases": [
      "dE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-de1-error",
    "title": "LG washer dE1 error: the door-lock switch signal is abnormal",
    "shortTitle": "LG washer dE1 error",
    "summary": "The dE1 display on many LG washing machines indicates that the door-lock switch signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dE1 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dE1 mean on a LG washer?",
        "answer": "On many model families, dE1 indicates that the door-lock switch signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dE1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "de1",
      "the door-lock switch signal is abnormal",
      "door",
      "de1"
    ],
    "featured": false,
    "errorCode": "dE1",
    "aliases": [
      "dE1"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-de2-error",
    "title": "LG washer dE2 error: the door could not lock or unlock",
    "shortTitle": "LG washer dE2 error",
    "summary": "The dE2 display on many LG washing machines indicates that the door could not lock or unlock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dE2 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dE2 mean on a LG washer?",
        "answer": "On many model families, dE2 indicates that the door could not lock or unlock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dE2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "de2",
      "the door could not lock or unlock",
      "door",
      "de2"
    ],
    "featured": false,
    "errorCode": "dE2",
    "aliases": [
      "dE2"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-cl-error",
    "title": "LG washer CL error: control lock is enabled",
    "shortTitle": "LG washer CL error",
    "summary": "The CL display on many LG washing machines indicates that control lock is enabled. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Control lock is enabled",
      "The lock control must be held for a set time",
      "Touch panel is not registering",
      "Control is stuck in a locked state"
    ],
    "quickChecks": [
      {
        "title": "Find the lock symbol",
        "detail": "Look for Control Lock, Child Lock, or a padlock.",
        "level": "safe"
      },
      {
        "title": "Hold the marked control",
        "detail": "Use the duration printed on the panel or manual.",
        "level": "safe"
      },
      {
        "title": "Dry and clean the panel",
        "detail": "Moisture can block touch input.",
        "level": "safe"
      },
      {
        "title": "Power-cycle only if documented",
        "detail": "A persistent lock may require service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when CL appears?",
    "observations": [
      {
        "label": "Padlock light is on",
        "advice": "This is usually a setting, not a hardware failure."
      },
      {
        "label": "Lock clears then returns",
        "advice": "A button may be held, wet, or failing."
      },
      {
        "label": "No controls respond",
        "advice": "Confirm power and model-specific lock instructions."
      }
    ],
    "whenToStop": [
      "Panel is cracked, wet inside, or hot",
      "A button remains stuck",
      "Internal control access is needed"
    ],
    "faq": [
      {
        "question": "What does CL mean on a LG washer?",
        "answer": "On many model families, CL indicates that control lock is enabled. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear CL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "cl",
      "control lock is enabled",
      "lock",
      "cl"
    ],
    "featured": false,
    "errorCode": "CL",
    "aliases": [
      "CL"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-le-error",
    "title": "LG washer LE error: the motor is locked or overloaded",
    "shortTitle": "LG washer LE error",
    "summary": "The LE display on many LG washing machines indicates that the motor is locked or overloaded. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LE appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does LE mean on a LG washer?",
        "answer": "On many model families, LE indicates that the motor is locked or overloaded. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "le",
      "the motor is locked or overloaded",
      "motor",
      "le"
    ],
    "featured": false,
    "errorCode": "LE",
    "aliases": [
      "LE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-ce-error",
    "title": "LG washer CE error: the motor circuit detected excessive current",
    "shortTitle": "LG washer CE error",
    "summary": "The CE display on many LG washing machines indicates that the motor circuit detected excessive current. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when CE appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does CE mean on a LG washer?",
        "answer": "On many model families, CE indicates that the motor circuit detected excessive current. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear CE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "ce",
      "the motor circuit detected excessive current",
      "motor",
      "ce"
    ],
    "featured": false,
    "errorCode": "CE",
    "aliases": [
      "CE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-fe-error",
    "title": "LG washer FE error: the washer detected an overfill",
    "shortTitle": "LG washer FE error",
    "summary": "The FE display on many LG washing machines indicates that the washer detected an overfill. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FE appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does FE mean on a LG washer?",
        "answer": "On many model families, FE indicates that the washer detected an overfill. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "fe",
      "the washer detected an overfill",
      "overflow",
      "fe"
    ],
    "featured": false,
    "errorCode": "FE",
    "aliases": [
      "FE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-pe-error",
    "title": "LG washer PE error: the water-level pressure sensor is abnormal",
    "shortTitle": "LG washer PE error",
    "summary": "The PE display on many LG washing machines indicates that the water-level pressure sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PE appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does PE mean on a LG washer?",
        "answer": "On many model families, PE indicates that the water-level pressure sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "pe",
      "the water-level pressure sensor is abnormal",
      "level",
      "pe"
    ],
    "featured": false,
    "errorCode": "PE",
    "aliases": [
      "PE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-te-error",
    "title": "LG washer tE error: the water-temperature sensor is abnormal",
    "shortTitle": "LG washer tE error",
    "summary": "The tE display on many LG washing machines indicates that the water-temperature sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when tE appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does tE mean on a LG washer?",
        "answer": "On many model families, tE indicates that the water-temperature sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear tE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "te",
      "the water-temperature sensor is abnormal",
      "sensor",
      "te"
    ],
    "featured": false,
    "errorCode": "tE",
    "aliases": [
      "tE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-pf-error",
    "title": "LG washer PF error: power was interrupted during the cycle",
    "shortTitle": "LG washer PF error",
    "summary": "The PF display on many LG washing machines indicates that power was interrupted during the cycle. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PF appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does PF mean on a LG washer?",
        "answer": "On many model families, PF indicates that power was interrupted during the cycle. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PF by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "pf",
      "power was interrupted during the cycle",
      "power",
      "pf"
    ],
    "featured": false,
    "errorCode": "PF",
    "aliases": [
      "PF"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-ae-error",
    "title": "LG washer AE error: water was detected where it should not be",
    "shortTitle": "LG washer AE error",
    "summary": "The AE display on many LG washing machines indicates that water was detected where it should not be. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AE appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does AE mean on a LG washer?",
        "answer": "On many model families, AE indicates that water was detected where it should not be. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "ae",
      "water was detected where it should not be",
      "leak",
      "ae"
    ],
    "featured": false,
    "errorCode": "AE",
    "aliases": [
      "AE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-e1-error",
    "title": "LG washer E1 error: a leak or water in the base was detected",
    "shortTitle": "LG washer E1 error",
    "summary": "The E1 display on many LG washing machines indicates that a leak or water in the base was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E1 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does E1 mean on a LG washer?",
        "answer": "On many model families, E1 indicates that a leak or water in the base was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "e1",
      "a leak or water in the base was detected",
      "leak",
      "e1"
    ],
    "featured": false,
    "errorCode": "E1",
    "aliases": [
      "E1"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-e6-error",
    "title": "LG washer E6 error: the clutch or motor is prevented from moving",
    "shortTitle": "LG washer E6 error",
    "summary": "The E6 display on many LG washing machines indicates that the clutch or motor is prevented from moving. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E6 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E6 mean on a LG washer?",
        "answer": "On many model families, E6 indicates that the clutch or motor is prevented from moving. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E6 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "e6",
      "the clutch or motor is prevented from moving",
      "motor",
      "e6"
    ],
    "featured": false,
    "errorCode": "E6",
    "aliases": [
      "E6"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-se-error",
    "title": "LG washer SE error: the motor speed sensor signal is abnormal",
    "shortTitle": "LG washer SE error",
    "summary": "The SE display on many LG washing machines indicates that the motor speed sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when SE appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does SE mean on a LG washer?",
        "answer": "On many model families, SE indicates that the motor speed sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear SE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "se",
      "the motor speed sensor signal is abnormal",
      "sensor",
      "se"
    ],
    "featured": false,
    "errorCode": "SE",
    "aliases": [
      "SE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-ff-error",
    "title": "LG washer FF error: water in the inlet or drain system may be frozen",
    "shortTitle": "LG washer FF error",
    "summary": "The FF display on many LG washing machines indicates that water in the inlet or drain system may be frozen. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water froze in a hose, pump, or valve",
      "Room or plumbing is below operating temperature",
      "Frozen restriction prevents flow",
      "Freeze expansion damaged a component"
    ],
    "quickChecks": [
      {
        "title": "Stop and close water valves",
        "detail": "Do not force pumps or valves.",
        "level": "caution"
      },
      {
        "title": "Warm the room gradually",
        "detail": "Allow natural thawing above freezing.",
        "level": "safe"
      },
      {
        "title": "Inspect for leaks after thawing",
        "detail": "Damage may appear when water returns.",
        "level": "caution"
      },
      {
        "title": "Do not use flame or concentrated heat",
        "detail": "Use model-approved guidance only.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FF appears?",
    "observations": [
      {
        "label": "Appliance is in an unheated area",
        "advice": "Temperature is the primary likely cause."
      },
      {
        "label": "Code clears after thawing",
        "advice": "Run a supervised test and check for leaks."
      },
      {
        "label": "Water leaks after thawing",
        "advice": "Close supply and repair before reuse."
      }
    ],
    "whenToStop": [
      "A hose or valve cracked",
      "Water is near wiring",
      "Open flame or heat gun would be used"
    ],
    "faq": [
      {
        "question": "What does FF mean on a LG washer?",
        "answer": "On many model families, FF indicates that water in the inlet or drain system may be frozen. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FF by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "ff",
      "water in the inlet or drain system may be frozen",
      "freeze",
      "ff"
    ],
    "featured": false,
    "errorCode": "FF",
    "aliases": [
      "FF"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-tcl-error",
    "title": "LG washer tcL error: the tub-clean reminder is active",
    "shortTitle": "LG washer tcL error",
    "summary": "The tcL display on many LG washing machines indicates that the tub-clean reminder is active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A cleaning reminder has been reached",
      "Residue accumulated from use",
      "Message is informational",
      "Cleaning cycle has not completed"
    ],
    "quickChecks": [
      {
        "title": "Run the specified cleaning cycle",
        "detail": "Use the appliance empty.",
        "level": "safe"
      },
      {
        "title": "Use only approved cleaner",
        "detail": "Never mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Clean accessible filters and seals",
        "detail": "Remove residue and dry recommended areas.",
        "level": "safe"
      },
      {
        "title": "Confirm reminder reset",
        "detail": "Some models clear only after the full cycle.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What happens when tcL appears?",
    "observations": [
      {
        "label": "Appliance works normally",
        "advice": "The message is likely a maintenance reminder."
      },
      {
        "label": "Odor or residue is present",
        "advice": "Complete cleaning and improve drying between uses."
      },
      {
        "label": "Message remains",
        "advice": "Use model-specific reset instructions."
      }
    ],
    "whenToStop": [
      "Chemicals were mixed",
      "Active leak or electrical odor",
      "Internal service is required"
    ],
    "faq": [
      {
        "question": "What does tcL mean on a LG washer?",
        "answer": "On many model families, tcL indicates that the tub-clean reminder is active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear tcL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "tcl",
      "the tub-clean reminder is active",
      "maintenance",
      "tcl"
    ],
    "featured": false,
    "errorCode": "tcL",
    "aliases": [
      "tcL"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-cd-error",
    "title": "LG washer Cd error: the washer-dryer is cooling the load",
    "shortTitle": "LG washer Cd error",
    "summary": "The Cd display on many LG washing machines indicates that the washer-dryer is cooling the load. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A normal cooling phase is running",
      "Temperature is above the unlock threshold",
      "Sensor has not confirmed a safe temperature",
      "Airflow is restricted"
    ],
    "quickChecks": [
      {
        "title": "Wait for cooling to finish",
        "detail": "Do not force the door.",
        "level": "safe"
      },
      {
        "title": "Keep external vents clear",
        "detail": "Do not cover the appliance.",
        "level": "safe"
      },
      {
        "title": "Check whether the message clears",
        "detail": "Normal status messages disappear after cooling.",
        "level": "safe"
      },
      {
        "title": "Use the model manual if persistent",
        "detail": "A sensor or airflow issue may need service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Cd appears?",
    "observations": [
      {
        "label": "Message clears after several minutes",
        "advice": "It was a normal cooling delay."
      },
      {
        "label": "Message remains when cold",
        "advice": "Sensor or control diagnosis may be needed."
      },
      {
        "label": "Appliance is unusually hot",
        "advice": "Disconnect power and arrange inspection."
      }
    ],
    "whenToStop": [
      "Cabinet is too hot to touch",
      "Burning smell or smoke",
      "Door is being forced"
    ],
    "faq": [
      {
        "question": "What does Cd mean on a LG washer?",
        "answer": "On many model families, Cd indicates that the washer-dryer is cooling the load. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Cd by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "cd",
      "the washer-dryer is cooling the load",
      "cooldown",
      "cd"
    ],
    "featured": false,
    "errorCode": "Cd",
    "aliases": [
      "Cd"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-sud-error",
    "title": "LG washer Sud error: excess detergent suds were detected",
    "shortTitle": "LG washer Sud error",
    "summary": "The Sud display on many LG washing machines indicates that excess detergent suds were detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Sud appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does Sud mean on a LG washer?",
        "answer": "On many model families, Sud indicates that excess detergent suds were detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Sud by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "sud",
      "excess detergent suds were detected",
      "suds",
      "sud",
      "sud"
    ],
    "featured": false,
    "errorCode": "Sud",
    "aliases": [
      "Sud",
      "SUD"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-dhe-error",
    "title": "LG washer dHE error: the drying-heater system is abnormal",
    "shortTitle": "LG washer dHE error",
    "summary": "The dHE display on many LG washing machines indicates that the drying-heater system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dHE appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does dHE mean on a LG washer?",
        "answer": "On many model families, dHE indicates that the drying-heater system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dHE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "dhe",
      "the drying-heater system is abnormal",
      "heater",
      "dhe"
    ],
    "featured": false,
    "errorCode": "dHE",
    "aliases": [
      "dHE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-he-error",
    "title": "LG washer HE error: the water-heating system is abnormal",
    "shortTitle": "LG washer HE error",
    "summary": "The HE display on many LG washing machines indicates that the water-heating system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HE appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HE mean on a LG washer?",
        "answer": "On many model families, HE indicates that the water-heating system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HE by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "he",
      "the water-heating system is abnormal",
      "heater",
      "he"
    ],
    "featured": false,
    "errorCode": "HE",
    "aliases": [
      "HE"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-dl-error",
    "title": "LG washer dL error: the door-lock mechanism is abnormal",
    "shortTitle": "LG washer dL error",
    "summary": "The dL display on many LG washing machines indicates that the door-lock mechanism is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dL appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dL mean on a LG washer?",
        "answer": "On many model families, dL indicates that the door-lock mechanism is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "dl",
      "the door-lock mechanism is abnormal",
      "door",
      "dl"
    ],
    "featured": false,
    "errorCode": "dL",
    "aliases": [
      "dL"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-eb-error",
    "title": "LG washer Eb error: the clutch or drive signal is abnormal",
    "shortTitle": "LG washer Eb error",
    "summary": "The Eb display on many LG washing machines indicates that the clutch or drive signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when Eb appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does Eb mean on a LG washer?",
        "answer": "On many model families, Eb indicates that the clutch or drive signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Eb by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "eb",
      "the clutch or drive signal is abnormal",
      "motor",
      "eb"
    ],
    "featured": false,
    "errorCode": "Eb",
    "aliases": [
      "Eb"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-vs-error",
    "title": "LG washer vS error: the vibration sensor signal is abnormal",
    "shortTitle": "LG washer vS error",
    "summary": "The vS display on many LG washing machines indicates that the vibration sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when vS appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does vS mean on a LG washer?",
        "answer": "On many model families, vS indicates that the vibration sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear vS by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "vs",
      "the vibration sensor signal is abnormal",
      "sensor",
      "vs"
    ],
    "featured": false,
    "errorCode": "vS",
    "aliases": [
      "vS"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-le1-error",
    "title": "LG washer LE1 error: the motor or drive system is overloaded",
    "shortTitle": "LG washer LE1 error",
    "summary": "The LE1 display on many LG washing machines indicates that the motor or drive system is overloaded. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LE1 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does LE1 mean on a LG washer?",
        "answer": "On many model families, LE1 indicates that the motor or drive system is overloaded. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LE1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "le1",
      "the motor or drive system is overloaded",
      "motor",
      "le1"
    ],
    "featured": false,
    "errorCode": "LE1",
    "aliases": [
      "LE1"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-washer-le2-error",
    "title": "LG washer LE2 error: the motor cannot complete rotation",
    "shortTitle": "LG washer LE2 error",
    "summary": "The LE2 display on many LG washing machines indicates that the motor cannot complete rotation. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LE2 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does LE2 mean on a LG washer?",
        "answer": "On many model families, LE2 indicates that the motor cannot complete rotation. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LE2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "washing machine",
      "washer",
      "le2",
      "the motor cannot complete rotation",
      "motor",
      "le2"
    ],
    "featured": false,
    "errorCode": "LE2",
    "aliases": [
      "LE2"
    ],
    "appliesTo": "Selected LG washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ie-error",
    "title": "LG dishwasher IE error: the dishwasher is not filling with enough water",
    "shortTitle": "LG dishwasher IE error",
    "summary": "The IE display on many LG dishwashers indicates that the dishwasher is not filling with enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when IE appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does IE mean on a LG dishwasher?",
        "answer": "On many model families, IE indicates that the dishwasher is not filling with enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear IE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ie",
      "the dishwasher is not filling with enough water",
      "inlet",
      "ie",
      "1e"
    ],
    "featured": false,
    "errorCode": "IE",
    "aliases": [
      "IE",
      "1E"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-oe-error",
    "title": "LG dishwasher OE error: the dishwasher cannot drain correctly",
    "shortTitle": "LG dishwasher OE error",
    "summary": "The OE display on many LG dishwashers indicates that the dishwasher cannot drain correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when OE appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does OE mean on a LG dishwasher?",
        "answer": "On many model families, OE indicates that the dishwasher cannot drain correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear OE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "oe",
      "the dishwasher cannot drain correctly",
      "drain",
      "oe"
    ],
    "featured": false,
    "errorCode": "OE",
    "aliases": [
      "OE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ae-error",
    "title": "LG dishwasher AE error: the leak sensor detected water in the base",
    "shortTitle": "LG dishwasher AE error",
    "summary": "The AE display on many LG dishwashers indicates that the leak sensor detected water in the base. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AE appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does AE mean on a LG dishwasher?",
        "answer": "On many model families, AE indicates that the leak sensor detected water in the base. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ae",
      "the leak sensor detected water in the base",
      "leak",
      "ae"
    ],
    "featured": false,
    "errorCode": "AE",
    "aliases": [
      "AE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-e1-error",
    "title": "LG dishwasher E1 error: water leakage or a drain installation issue was detected",
    "shortTitle": "LG dishwasher E1 error",
    "summary": "The E1 display on many LG dishwashers indicates that water leakage or a drain installation issue was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E1 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does E1 mean on a LG dishwasher?",
        "answer": "On many model families, E1 indicates that water leakage or a drain installation issue was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "e1",
      "water leakage or a drain installation issue was detected",
      "leak",
      "e1"
    ],
    "featured": false,
    "errorCode": "E1",
    "aliases": [
      "E1"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-le-error",
    "title": "LG dishwasher LE error: the wash motor is locked",
    "shortTitle": "LG dishwasher LE error",
    "summary": "The LE display on many LG dishwashers indicates that the wash motor is locked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LE appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does LE mean on a LG dishwasher?",
        "answer": "On many model families, LE indicates that the wash motor is locked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "le",
      "the wash motor is locked",
      "motor",
      "le"
    ],
    "featured": false,
    "errorCode": "LE",
    "aliases": [
      "LE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-he-error",
    "title": "LG dishwasher HE error: the heater circuit is abnormal",
    "shortTitle": "LG dishwasher HE error",
    "summary": "The HE display on many LG dishwashers indicates that the heater circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HE appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HE mean on a LG dishwasher?",
        "answer": "On many model families, HE indicates that the heater circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "he",
      "the heater circuit is abnormal",
      "heater",
      "he"
    ],
    "featured": false,
    "errorCode": "HE",
    "aliases": [
      "HE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-te-error",
    "title": "LG dishwasher tE error: the temperature sensor is abnormal",
    "shortTitle": "LG dishwasher tE error",
    "summary": "The tE display on many LG dishwashers indicates that the temperature sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when tE appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does tE mean on a LG dishwasher?",
        "answer": "On many model families, tE indicates that the temperature sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear tE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "te",
      "the temperature sensor is abnormal",
      "sensor",
      "te"
    ],
    "featured": false,
    "errorCode": "tE",
    "aliases": [
      "tE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-pf-error",
    "title": "LG dishwasher PF error: power was interrupted during operation",
    "shortTitle": "LG dishwasher PF error",
    "summary": "The PF display on many LG dishwashers indicates that power was interrupted during operation. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PF appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does PF mean on a LG dishwasher?",
        "answer": "On many model families, PF indicates that power was interrupted during operation. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PF by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "pf",
      "power was interrupted during operation",
      "power",
      "pf"
    ],
    "featured": false,
    "errorCode": "PF",
    "aliases": [
      "PF"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-cl-error",
    "title": "LG dishwasher CL error: control lock is enabled",
    "shortTitle": "LG dishwasher CL error",
    "summary": "The CL display on many LG dishwashers indicates that control lock is enabled. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Control lock is enabled",
      "The lock control must be held for a set time",
      "Touch panel is not registering",
      "Control is stuck in a locked state"
    ],
    "quickChecks": [
      {
        "title": "Find the lock symbol",
        "detail": "Look for Control Lock, Child Lock, or a padlock.",
        "level": "safe"
      },
      {
        "title": "Hold the marked control",
        "detail": "Use the duration printed on the panel or manual.",
        "level": "safe"
      },
      {
        "title": "Dry and clean the panel",
        "detail": "Moisture can block touch input.",
        "level": "safe"
      },
      {
        "title": "Power-cycle only if documented",
        "detail": "A persistent lock may require service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when CL appears?",
    "observations": [
      {
        "label": "Padlock light is on",
        "advice": "This is usually a setting, not a hardware failure."
      },
      {
        "label": "Lock clears then returns",
        "advice": "A button may be held, wet, or failing."
      },
      {
        "label": "No controls respond",
        "advice": "Confirm power and model-specific lock instructions."
      }
    ],
    "whenToStop": [
      "Panel is cracked, wet inside, or hot",
      "A button remains stuck",
      "Internal control access is needed"
    ],
    "faq": [
      {
        "question": "What does CL mean on a LG dishwasher?",
        "answer": "On many model families, CL indicates that control lock is enabled. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear CL by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "cl",
      "control lock is enabled",
      "lock",
      "cl"
    ],
    "featured": false,
    "errorCode": "CL",
    "aliases": [
      "CL"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-be-error",
    "title": "LG dishwasher bE error: the unit may be unlevel or over-sudsing",
    "shortTitle": "LG dishwasher bE error",
    "summary": "The bE display on many LG dishwashers indicates that the unit may be unlevel or over-sudsing. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when bE appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does bE mean on a LG dishwasher?",
        "answer": "On many model families, bE indicates that the unit may be unlevel or over-sudsing. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear bE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "be",
      "the unit may be unlevel or over-sudsing",
      "suds",
      "be"
    ],
    "featured": false,
    "errorCode": "bE",
    "aliases": [
      "bE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-fe-error",
    "title": "LG dishwasher FE error: the dishwasher detected too much water",
    "shortTitle": "LG dishwasher FE error",
    "summary": "The FE display on many LG dishwashers indicates that the dishwasher detected too much water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FE appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does FE mean on a LG dishwasher?",
        "answer": "On many model families, FE indicates that the dishwasher detected too much water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "fe",
      "the dishwasher detected too much water",
      "overflow",
      "fe"
    ],
    "featured": false,
    "errorCode": "FE",
    "aliases": [
      "FE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ne-error",
    "title": "LG dishwasher nE error: the diverter motor position is abnormal",
    "shortTitle": "LG dishwasher nE error",
    "summary": "The nE display on many LG dishwashers indicates that the diverter motor position is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when nE appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does nE mean on a LG dishwasher?",
        "answer": "On many model families, nE indicates that the diverter motor position is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear nE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ne",
      "the diverter motor position is abnormal",
      "position",
      "ne"
    ],
    "featured": false,
    "errorCode": "nE",
    "aliases": [
      "nE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ce-error",
    "title": "LG dishwasher CE error: the motor circuit detected excessive current",
    "shortTitle": "LG dishwasher CE error",
    "summary": "The CE display on many LG dishwashers indicates that the motor circuit detected excessive current. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when CE appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does CE mean on a LG dishwasher?",
        "answer": "On many model families, CE indicates that the motor circuit detected excessive current. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear CE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ce",
      "the motor circuit detected excessive current",
      "motor",
      "ce"
    ],
    "featured": false,
    "errorCode": "CE",
    "aliases": [
      "CE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-cd-error",
    "title": "LG dishwasher Cd error: the dishwasher is in a cool-dry phase",
    "shortTitle": "LG dishwasher Cd error",
    "summary": "The Cd display on many LG dishwashers indicates that the dishwasher is in a cool-dry phase. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A normal cooling phase is running",
      "Temperature is above the unlock threshold",
      "Sensor has not confirmed a safe temperature",
      "Airflow is restricted"
    ],
    "quickChecks": [
      {
        "title": "Wait for cooling to finish",
        "detail": "Do not force the door.",
        "level": "safe"
      },
      {
        "title": "Keep external vents clear",
        "detail": "Do not cover the appliance.",
        "level": "safe"
      },
      {
        "title": "Check whether the message clears",
        "detail": "Normal status messages disappear after cooling.",
        "level": "safe"
      },
      {
        "title": "Use the model manual if persistent",
        "detail": "A sensor or airflow issue may need service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Cd appears?",
    "observations": [
      {
        "label": "Message clears after several minutes",
        "advice": "It was a normal cooling delay."
      },
      {
        "label": "Message remains when cold",
        "advice": "Sensor or control diagnosis may be needed."
      },
      {
        "label": "Appliance is unusually hot",
        "advice": "Disconnect power and arrange inspection."
      }
    ],
    "whenToStop": [
      "Cabinet is too hot to touch",
      "Burning smell or smoke",
      "Door is being forced"
    ],
    "faq": [
      {
        "question": "What does Cd mean on a LG dishwasher?",
        "answer": "On many model families, Cd indicates that the dishwasher is in a cool-dry phase. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Cd by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "cd",
      "the dishwasher is in a cool-dry phase",
      "cooldown",
      "cd"
    ],
    "featured": false,
    "errorCode": "Cd",
    "aliases": [
      "Cd"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-cr-error",
    "title": "LG dishwasher Cr error: the dishwasher is running a test mode",
    "shortTitle": "LG dishwasher Cr error",
    "summary": "The Cr display on many LG dishwashers indicates that the dishwasher is running a test mode. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A setup, delay, test, or interrupted state is active",
      "A button combination changed the operating mode",
      "Cycle or setup was not completed",
      "Control did not return to normal mode"
    ],
    "quickChecks": [
      {
        "title": "Read the display as a status first",
        "detail": "Not every code is a hardware failure.",
        "level": "safe"
      },
      {
        "title": "Use the documented cancel sequence",
        "detail": "Follow the model manual only.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly if allowed",
        "detail": "Confirm the normal home screen returns.",
        "level": "safe"
      },
      {
        "title": "Avoid undocumented service modes",
        "detail": "They can run heaters, pumps, or motors unexpectedly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when Cr appears?",
    "observations": [
      {
        "label": "Display returns to normal",
        "advice": "No further action is usually needed."
      },
      {
        "label": "State returns every startup",
        "advice": "A stuck button or control fault may be involved."
      },
      {
        "label": "Components run unexpectedly",
        "advice": "Disconnect power and arrange service."
      }
    ],
    "whenToStop": [
      "Motors or heaters run unexpectedly",
      "The appliance contains water or a load",
      "Undocumented settings would be changed"
    ],
    "faq": [
      {
        "question": "What does Cr mean on a LG dishwasher?",
        "answer": "On many model families, Cr indicates that the dishwasher is running a test mode. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Cr by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "cr",
      "the dishwasher is running a test mode",
      "status",
      "cr"
    ],
    "featured": false,
    "errorCode": "Cr",
    "aliases": [
      "Cr"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-de-error",
    "title": "LG dishwasher dE error: the door is not fully latched",
    "shortTitle": "LG dishwasher dE error",
    "summary": "The dE display on many LG dishwashers indicates that the door is not fully latched. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dE appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dE mean on a LG dishwasher?",
        "answer": "On many model families, dE indicates that the door is not fully latched. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dE by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "de",
      "the door is not fully latched",
      "door",
      "de"
    ],
    "featured": false,
    "errorCode": "dE",
    "aliases": [
      "dE"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ne1-error",
    "title": "LG dishwasher nE1 error: the diverter motor cannot confirm position",
    "shortTitle": "LG dishwasher nE1 error",
    "summary": "The nE1 display on many LG dishwashers indicates that the diverter motor cannot confirm position. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when nE1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does nE1 mean on a LG dishwasher?",
        "answer": "On many model families, nE1 indicates that the diverter motor cannot confirm position. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear nE1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ne1",
      "the diverter motor cannot confirm position",
      "position",
      "ne1"
    ],
    "featured": false,
    "errorCode": "nE1",
    "aliases": [
      "nE1"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ne2-error",
    "title": "LG dishwasher nE2 error: the diverter feedback is abnormal",
    "shortTitle": "LG dishwasher nE2 error",
    "summary": "The nE2 display on many LG dishwashers indicates that the diverter feedback is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when nE2 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does nE2 mean on a LG dishwasher?",
        "answer": "On many model families, nE2 indicates that the diverter feedback is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear nE2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ne2",
      "the diverter feedback is abnormal",
      "position",
      "ne2"
    ],
    "featured": false,
    "errorCode": "nE2",
    "aliases": [
      "nE2"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-he1-error",
    "title": "LG dishwasher HE1 error: the heater temperature is outside range",
    "shortTitle": "LG dishwasher HE1 error",
    "summary": "The HE1 display on many LG dishwashers indicates that the heater temperature is outside range. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HE1 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does HE1 mean on a LG dishwasher?",
        "answer": "On many model families, HE1 indicates that the heater temperature is outside range. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HE1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "he1",
      "the heater temperature is outside range",
      "heater",
      "he1"
    ],
    "featured": false,
    "errorCode": "HE1",
    "aliases": [
      "HE1"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "lg-dishwasher-ae1-error",
    "title": "LG dishwasher AE1 error: the base leak sensor remains active",
    "shortTitle": "LG dishwasher AE1 error",
    "summary": "The AE1 display on many LG dishwashers indicates that the base leak sensor remains active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "LG",
    "brandSlug": "lg",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when AE1 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does AE1 mean on a LG dishwasher?",
        "answer": "On many model families, AE1 indicates that the base leak sensor remains active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear AE1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "lg",
      "dishwasher",
      "dishwasher",
      "ae1",
      "the base leak sensor remains active",
      "leak",
      "ae1"
    ],
    "featured": false,
    "errorCode": "AE1",
    "aliases": [
      "AE1"
    ],
    "appliesTo": "Selected LG dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "LG Support",
        "url": "https://www.lg.com/us/support"
      },
      {
        "label": "LG manuals and documents",
        "url": "https://www.lg.com/us/support/manuals-documents"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e01-error",
    "title": "Bosch dishwasher E01 error: the power module detected a fault",
    "shortTitle": "Bosch dishwasher E01 error",
    "summary": "The E01 display on many Bosch dishwashers indicates that the power module detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E01 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E01 mean on a Bosch dishwasher?",
        "answer": "On many model families, E01 indicates that the power module detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E01 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e01",
      "the power module detected a fault",
      "control",
      "e01"
    ],
    "featured": false,
    "errorCode": "E01",
    "aliases": [
      "E01"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e02-error",
    "title": "Bosch dishwasher E02 error: the control electronics detected a fault",
    "shortTitle": "Bosch dishwasher E02 error",
    "summary": "The E02 display on many Bosch dishwashers indicates that the control electronics detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E02 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E02 mean on a Bosch dishwasher?",
        "answer": "On many model families, E02 indicates that the control electronics detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E02 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e02",
      "the control electronics detected a fault",
      "control",
      "e02"
    ],
    "featured": false,
    "errorCode": "E02",
    "aliases": [
      "E02"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e03-error",
    "title": "Bosch dishwasher E03 error: an auxiliary control circuit is abnormal",
    "shortTitle": "Bosch dishwasher E03 error",
    "summary": "The E03 display on many Bosch dishwashers indicates that an auxiliary control circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E03 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E03 mean on a Bosch dishwasher?",
        "answer": "On many model families, E03 indicates that an auxiliary control circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E03 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e03",
      "an auxiliary control circuit is abnormal",
      "control",
      "e03"
    ],
    "featured": false,
    "errorCode": "E03",
    "aliases": [
      "E03"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e04-error",
    "title": "Bosch dishwasher E04 error: a heating-related control fault was detected",
    "shortTitle": "Bosch dishwasher E04 error",
    "summary": "The E04 display on many Bosch dishwashers indicates that a heating-related control fault was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E04 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E04 mean on a Bosch dishwasher?",
        "answer": "On many model families, E04 indicates that a heating-related control fault was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E04 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e04",
      "a heating-related control fault was detected",
      "control",
      "e04"
    ],
    "featured": false,
    "errorCode": "E04",
    "aliases": [
      "E04"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e05-error",
    "title": "Bosch dishwasher E05 error: an internal switching fault was detected",
    "shortTitle": "Bosch dishwasher E05 error",
    "summary": "The E05 display on many Bosch dishwashers indicates that an internal switching fault was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E05 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E05 mean on a Bosch dishwasher?",
        "answer": "On many model families, E05 indicates that an internal switching fault was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E05 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e05",
      "an internal switching fault was detected",
      "control",
      "e05"
    ],
    "featured": false,
    "errorCode": "E05",
    "aliases": [
      "E05"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e06-error",
    "title": "Bosch dishwasher E06 error: the door sensor is not reporting correctly",
    "shortTitle": "Bosch dishwasher E06 error",
    "summary": "The E06 display on many Bosch dishwashers indicates that the door sensor is not reporting correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E06 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E06 mean on a Bosch dishwasher?",
        "answer": "On many model families, E06 indicates that the door sensor is not reporting correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E06 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e06",
      "the door sensor is not reporting correctly",
      "door",
      "e06"
    ],
    "featured": false,
    "errorCode": "E06",
    "aliases": [
      "E06"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e07-error",
    "title": "Bosch dishwasher E07 error: the drying fan is not operating correctly",
    "shortTitle": "Bosch dishwasher E07 error",
    "summary": "The E07 display on many Bosch dishwashers indicates that the drying fan is not operating correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E07 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E07 mean on a Bosch dishwasher?",
        "answer": "On many model families, E07 indicates that the drying fan is not operating correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E07 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e07",
      "the drying fan is not operating correctly",
      "motor",
      "e07"
    ],
    "featured": false,
    "errorCode": "E07",
    "aliases": [
      "E07"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e08-error",
    "title": "Bosch dishwasher E08 error: the water level is too low for heating",
    "shortTitle": "Bosch dishwasher E08 error",
    "summary": "The E08 display on many Bosch dishwashers indicates that the water level is too low for heating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E08 appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does E08 mean on a Bosch dishwasher?",
        "answer": "On many model families, E08 indicates that the water level is too low for heating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E08 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e08",
      "the water level is too low for heating",
      "level",
      "e08"
    ],
    "featured": false,
    "errorCode": "E08",
    "aliases": [
      "E08"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e09-error",
    "title": "Bosch dishwasher E09 error: the heating element is not operating",
    "shortTitle": "Bosch dishwasher E09 error",
    "summary": "The E09 display on many Bosch dishwashers indicates that the heating element is not operating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E09 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E09 mean on a Bosch dishwasher?",
        "answer": "On many model families, E09 indicates that the heating element is not operating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E09 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e09",
      "the heating element is not operating",
      "heater",
      "e09"
    ],
    "featured": false,
    "errorCode": "E09",
    "aliases": [
      "E09"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e10-error",
    "title": "Bosch dishwasher E10 error: the heating or drying system may be scaled",
    "shortTitle": "Bosch dishwasher E10 error",
    "summary": "The E10 display on many Bosch dishwashers indicates that the heating or drying system may be scaled. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E10 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E10 mean on a Bosch dishwasher?",
        "answer": "On many model families, E10 indicates that the heating or drying system may be scaled. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E10 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e10",
      "the heating or drying system may be scaled",
      "heater",
      "e10"
    ],
    "featured": false,
    "errorCode": "E10",
    "aliases": [
      "E10"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e11-error",
    "title": "Bosch dishwasher E11 error: the temperature sensor is abnormal",
    "shortTitle": "Bosch dishwasher E11 error",
    "summary": "The E11 display on many Bosch dishwashers indicates that the temperature sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E11 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does E11 mean on a Bosch dishwasher?",
        "answer": "On many model families, E11 indicates that the temperature sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E11 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e11",
      "the temperature sensor is abnormal",
      "sensor",
      "e11"
    ],
    "featured": false,
    "errorCode": "E11",
    "aliases": [
      "E11"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e12-error",
    "title": "Bosch dishwasher E12 error: the heating system may be restricted by limescale",
    "shortTitle": "Bosch dishwasher E12 error",
    "summary": "The E12 display on many Bosch dishwashers indicates that the heating system may be restricted by limescale. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E12 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E12 mean on a Bosch dishwasher?",
        "answer": "On many model families, E12 indicates that the heating system may be restricted by limescale. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E12 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e12",
      "the heating system may be restricted by limescale",
      "heater",
      "e12"
    ],
    "featured": false,
    "errorCode": "E12",
    "aliases": [
      "E12"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e14-error",
    "title": "Bosch dishwasher E14 error: the flow meter signal is abnormal",
    "shortTitle": "Bosch dishwasher E14 error",
    "summary": "The E14 display on many Bosch dishwashers indicates that the flow meter signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E14 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does E14 mean on a Bosch dishwasher?",
        "answer": "On many model families, E14 indicates that the flow meter signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E14 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e14",
      "the flow meter signal is abnormal",
      "sensor",
      "e14"
    ],
    "featured": false,
    "errorCode": "E14",
    "aliases": [
      "E14"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e15-error",
    "title": "Bosch dishwasher E15 error: AquaStop or base leak protection is active",
    "shortTitle": "Bosch dishwasher E15 error",
    "summary": "The E15 display on many Bosch dishwashers indicates that AquaStop or base leak protection is active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E15 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does E15 mean on a Bosch dishwasher?",
        "answer": "On many model families, E15 indicates that AquaStop or base leak protection is active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E15 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e15",
      "AquaStop or base leak protection is active",
      "leak",
      "e15"
    ],
    "featured": false,
    "errorCode": "E15",
    "aliases": [
      "E15"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e16-error",
    "title": "Bosch dishwasher E16 error: uncontrolled water entry was detected",
    "shortTitle": "Bosch dishwasher E16 error",
    "summary": "The E16 display on many Bosch dishwashers indicates that uncontrolled water entry was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E16 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E16 mean on a Bosch dishwasher?",
        "answer": "On many model families, E16 indicates that uncontrolled water entry was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E16 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e16",
      "uncontrolled water entry was detected",
      "inlet",
      "e16"
    ],
    "featured": false,
    "errorCode": "E16",
    "aliases": [
      "E16"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e17-error",
    "title": "Bosch dishwasher E17 error: the incoming water flow is too high",
    "shortTitle": "Bosch dishwasher E17 error",
    "summary": "The E17 display on many Bosch dishwashers indicates that the incoming water flow is too high. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E17 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E17 mean on a Bosch dishwasher?",
        "answer": "On many model families, E17 indicates that the incoming water flow is too high. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E17 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e17",
      "the incoming water flow is too high",
      "inlet",
      "e17"
    ],
    "featured": false,
    "errorCode": "E17",
    "aliases": [
      "E17"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e18-error",
    "title": "Bosch dishwasher E18 error: the dishwasher is not receiving enough water",
    "shortTitle": "Bosch dishwasher E18 error",
    "summary": "The E18 display on many Bosch dishwashers indicates that the dishwasher is not receiving enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E18 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E18 mean on a Bosch dishwasher?",
        "answer": "On many model families, E18 indicates that the dishwasher is not receiving enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E18 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e18",
      "the dishwasher is not receiving enough water",
      "inlet",
      "e18"
    ],
    "featured": false,
    "errorCode": "E18",
    "aliases": [
      "E18"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e19-error",
    "title": "Bosch dishwasher E19 error: an internal valve circuit is abnormal",
    "shortTitle": "Bosch dishwasher E19 error",
    "summary": "The E19 display on many Bosch dishwashers indicates that an internal valve circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E19 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does E19 mean on a Bosch dishwasher?",
        "answer": "On many model families, E19 indicates that an internal valve circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E19 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e19",
      "an internal valve circuit is abnormal",
      "position",
      "e19"
    ],
    "featured": false,
    "errorCode": "E19",
    "aliases": [
      "E19"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e20-error",
    "title": "Bosch dishwasher E20 error: the circulation pump is abnormal",
    "shortTitle": "Bosch dishwasher E20 error",
    "summary": "The E20 display on many Bosch dishwashers indicates that the circulation pump is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E20 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E20 mean on a Bosch dishwasher?",
        "answer": "On many model families, E20 indicates that the circulation pump is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E20 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e20",
      "the circulation pump is abnormal",
      "motor",
      "e20"
    ],
    "featured": false,
    "errorCode": "E20",
    "aliases": [
      "E20"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e21-error",
    "title": "Bosch dishwasher E21 error: the circulation pump is blocked",
    "shortTitle": "Bosch dishwasher E21 error",
    "summary": "The E21 display on many Bosch dishwashers indicates that the circulation pump is blocked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E21 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E21 mean on a Bosch dishwasher?",
        "answer": "On many model families, E21 indicates that the circulation pump is blocked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E21 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e21",
      "the circulation pump is blocked",
      "motor",
      "e21"
    ],
    "featured": false,
    "errorCode": "E21",
    "aliases": [
      "E21"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e22-error",
    "title": "Bosch dishwasher E22 error: the filter area is blocked",
    "shortTitle": "Bosch dishwasher E22 error",
    "summary": "The E22 display on many Bosch dishwashers indicates that the filter area is blocked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "User-cleanable filter is blocked",
      "Debris restricts water flow",
      "Filter is not seated correctly",
      "A pump or hose is also restricted"
    ],
    "quickChecks": [
      {
        "title": "Disconnect power",
        "detail": "Prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Clean filter and surrounding area",
        "detail": "Avoid sharp debris and do not force impellers.",
        "level": "safe"
      },
      {
        "title": "Refit the filter correctly",
        "detail": "Misalignment can reduce flow or cause leaks.",
        "level": "safe"
      },
      {
        "title": "Test a short cycle",
        "detail": "Stop if leakage, grinding, or the code returns.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when E22 appears?",
    "observations": [
      {
        "label": "Filter contains debris",
        "advice": "Clean it and inspect accessible flow paths."
      },
      {
        "label": "Filter is clean",
        "advice": "Hose, pump, sensor, or internal path may need service."
      },
      {
        "label": "Code returns",
        "advice": "Confirm filter seating and model-specific reset steps."
      }
    ],
    "whenToStop": [
      "Sharp glass cannot be removed safely",
      "Pump appears damaged",
      "Water leaks after refitting"
    ],
    "faq": [
      {
        "question": "What does E22 mean on a Bosch dishwasher?",
        "answer": "On many model families, E22 indicates that the filter area is blocked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E22 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e22",
      "the filter area is blocked",
      "filter",
      "e22"
    ],
    "featured": false,
    "errorCode": "E22",
    "aliases": [
      "E22"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e23-error",
    "title": "Bosch dishwasher E23 error: the drain-pump circuit is abnormal",
    "shortTitle": "Bosch dishwasher E23 error",
    "summary": "The E23 display on many Bosch dishwashers indicates that the drain-pump circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E23 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E23 mean on a Bosch dishwasher?",
        "answer": "On many model families, E23 indicates that the drain-pump circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E23 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e23",
      "the drain-pump circuit is abnormal",
      "drain",
      "e23"
    ],
    "featured": false,
    "errorCode": "E23",
    "aliases": [
      "E23"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e24-error",
    "title": "Bosch dishwasher E24 error: the dishwasher cannot drain",
    "shortTitle": "Bosch dishwasher E24 error",
    "summary": "The E24 display on many Bosch dishwashers indicates that the dishwasher cannot drain. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E24 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E24 mean on a Bosch dishwasher?",
        "answer": "On many model families, E24 indicates that the dishwasher cannot drain. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E24 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e24",
      "the dishwasher cannot drain",
      "drain",
      "e24"
    ],
    "featured": false,
    "errorCode": "E24",
    "aliases": [
      "E24"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e25-error",
    "title": "Bosch dishwasher E25 error: the drain pump or cover is blocked",
    "shortTitle": "Bosch dishwasher E25 error",
    "summary": "The E25 display on many Bosch dishwashers indicates that the drain pump or cover is blocked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E25 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E25 mean on a Bosch dishwasher?",
        "answer": "On many model families, E25 indicates that the drain pump or cover is blocked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E25 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e25",
      "the drain pump or cover is blocked",
      "drain",
      "e25"
    ],
    "featured": false,
    "errorCode": "E25",
    "aliases": [
      "E25"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e26-error",
    "title": "Bosch dishwasher E26 error: the water switch or flow control is abnormal",
    "shortTitle": "Bosch dishwasher E26 error",
    "summary": "The E26 display on many Bosch dishwashers indicates that the water switch or flow control is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E26 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does E26 mean on a Bosch dishwasher?",
        "answer": "On many model families, E26 indicates that the water switch or flow control is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E26 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e26",
      "the water switch or flow control is abnormal",
      "position",
      "e26"
    ],
    "featured": false,
    "errorCode": "E26",
    "aliases": [
      "E26"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e27-error",
    "title": "Bosch dishwasher E27 error: the incoming voltage is too low",
    "shortTitle": "Bosch dishwasher E27 error",
    "summary": "The E27 display on many Bosch dishwashers indicates that the incoming voltage is too low. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E27 appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does E27 mean on a Bosch dishwasher?",
        "answer": "On many model families, E27 indicates that the incoming voltage is too low. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E27 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e27",
      "the incoming voltage is too low",
      "power",
      "e27"
    ],
    "featured": false,
    "errorCode": "E27",
    "aliases": [
      "E27"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e28-error",
    "title": "Bosch dishwasher E28 error: the turbidity sensor signal is abnormal",
    "shortTitle": "Bosch dishwasher E28 error",
    "summary": "The E28 display on many Bosch dishwashers indicates that the turbidity sensor signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E28 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does E28 mean on a Bosch dishwasher?",
        "answer": "On many model families, E28 indicates that the turbidity sensor signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E28 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e28",
      "the turbidity sensor signal is abnormal",
      "sensor",
      "e28"
    ],
    "featured": false,
    "errorCode": "E28",
    "aliases": [
      "E28"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e30-error",
    "title": "Bosch dishwasher E30 error: the leak-protection system is active",
    "shortTitle": "Bosch dishwasher E30 error",
    "summary": "The E30 display on many Bosch dishwashers indicates that the leak-protection system is active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E30 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does E30 mean on a Bosch dishwasher?",
        "answer": "On many model families, E30 indicates that the leak-protection system is active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E30 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e30",
      "the leak-protection system is active",
      "leak",
      "e30"
    ],
    "featured": false,
    "errorCode": "E30",
    "aliases": [
      "E30"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e31-error",
    "title": "Bosch dishwasher E31 error: the drying system is abnormal",
    "shortTitle": "Bosch dishwasher E31 error",
    "summary": "The E31 display on many Bosch dishwashers indicates that the drying system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E31 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E31 mean on a Bosch dishwasher?",
        "answer": "On many model families, E31 indicates that the drying system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E31 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e31",
      "the drying system is abnormal",
      "heater",
      "e31"
    ],
    "featured": false,
    "errorCode": "E31",
    "aliases": [
      "E31"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e32-error",
    "title": "Bosch dishwasher E32 error: the water-inlet control needs checking",
    "shortTitle": "Bosch dishwasher E32 error",
    "summary": "The E32 display on many Bosch dishwashers indicates that the water-inlet control needs checking. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E32 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E32 mean on a Bosch dishwasher?",
        "answer": "On many model families, E32 indicates that the water-inlet control needs checking. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E32 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e32",
      "the water-inlet control needs checking",
      "inlet",
      "e32"
    ],
    "featured": false,
    "errorCode": "E32",
    "aliases": [
      "E32"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e34-error",
    "title": "Bosch dishwasher E34 error: the water flow-control system is abnormal",
    "shortTitle": "Bosch dishwasher E34 error",
    "summary": "The E34 display on many Bosch dishwashers indicates that the water flow-control system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E34 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E34 mean on a Bosch dishwasher?",
        "answer": "On many model families, E34 indicates that the water flow-control system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E34 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e34",
      "the water flow-control system is abnormal",
      "inlet",
      "e34"
    ],
    "featured": false,
    "errorCode": "E34",
    "aliases": [
      "E34"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-dishwasher-e90-error",
    "title": "Bosch dishwasher E90 error: the main control electronics reported a fault",
    "shortTitle": "Bosch dishwasher E90 error",
    "summary": "The E90 display on many Bosch dishwashers indicates that the main control electronics reported a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E90 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E90 mean on a Bosch dishwasher?",
        "answer": "On many model families, E90 indicates that the main control electronics reported a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E90 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "dishwasher",
      "dishwasher",
      "e90",
      "the main control electronics reported a fault",
      "control",
      "e90"
    ],
    "featured": false,
    "errorCode": "E90",
    "aliases": [
      "E90"
    ],
    "appliesTo": "Selected Bosch dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e16-f16-error",
    "title": "Bosch washer E16 / F16 error: the door is not closed or locked",
    "shortTitle": "Bosch washer E16 / F16 error",
    "summary": "The E16 / F16 display on many Bosch washing machines indicates that the door is not closed or locked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E16 / F16 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E16 / F16 mean on a Bosch washer?",
        "answer": "On many model families, E16 / F16 indicates that the door is not closed or locked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E16 / F16 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e16 / f16",
      "the door is not closed or locked",
      "door",
      "e16",
      "f16"
    ],
    "featured": false,
    "errorCode": "E16 / F16",
    "aliases": [
      "E16",
      "F16"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e17-f17-error",
    "title": "Bosch washer E17 / F17 error: the washer is filling too slowly",
    "shortTitle": "Bosch washer E17 / F17 error",
    "summary": "The E17 / F17 display on many Bosch washing machines indicates that the washer is filling too slowly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E17 / F17 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E17 / F17 mean on a Bosch washer?",
        "answer": "On many model families, E17 / F17 indicates that the washer is filling too slowly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E17 / F17 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e17 / f17",
      "the washer is filling too slowly",
      "inlet",
      "e17",
      "f17"
    ],
    "featured": false,
    "errorCode": "E17 / F17",
    "aliases": [
      "E17",
      "F17"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e18-f18-error",
    "title": "Bosch washer E18 / F18 error: the washer cannot drain in time",
    "shortTitle": "Bosch washer E18 / F18 error",
    "summary": "The E18 / F18 display on many Bosch washing machines indicates that the washer cannot drain in time. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E18 / F18 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E18 / F18 mean on a Bosch washer?",
        "answer": "On many model families, E18 / F18 indicates that the washer cannot drain in time. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E18 / F18 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e18 / f18",
      "the washer cannot drain in time",
      "drain",
      "e18",
      "f18"
    ],
    "featured": false,
    "errorCode": "E18 / F18",
    "aliases": [
      "E18",
      "F18"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e19-f19-error",
    "title": "Bosch washer E19 / F19 error: the water is taking too long to heat",
    "shortTitle": "Bosch washer E19 / F19 error",
    "summary": "The E19 / F19 display on many Bosch washing machines indicates that the water is taking too long to heat. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E19 / F19 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E19 / F19 mean on a Bosch washer?",
        "answer": "On many model families, E19 / F19 indicates that the water is taking too long to heat. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E19 / F19 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e19 / f19",
      "the water is taking too long to heat",
      "heater",
      "e19",
      "f19"
    ],
    "featured": false,
    "errorCode": "E19 / F19",
    "aliases": [
      "E19",
      "F19"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e20-f20-error",
    "title": "Bosch washer E20 / F20 error: unexpected heating was detected",
    "shortTitle": "Bosch washer E20 / F20 error",
    "summary": "The E20 / F20 display on many Bosch washing machines indicates that unexpected heating was detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E20 / F20 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does E20 / F20 mean on a Bosch washer?",
        "answer": "On many model families, E20 / F20 indicates that unexpected heating was detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E20 / F20 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e20 / f20",
      "unexpected heating was detected",
      "heater",
      "e20",
      "f20"
    ],
    "featured": false,
    "errorCode": "E20 / F20",
    "aliases": [
      "E20",
      "F20"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e23-f23-error",
    "title": "Bosch washer E23 / F23 error: AquaStop or leak protection is active",
    "shortTitle": "Bosch washer E23 / F23 error",
    "summary": "The E23 / F23 display on many Bosch washing machines indicates that AquaStop or leak protection is active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Water reached the base or leak sensor",
      "A hose, seal, pump, or connection leaks",
      "Excess suds pushed water into the base",
      "Drain installation causes backflow"
    ],
    "quickChecks": [
      {
        "title": "Turn off power and water",
        "detail": "Do not continue while leak protection is active.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check hoses, door seal, and nearby plumbing without opening panels.",
        "level": "safe"
      },
      {
        "title": "Look for excess foam",
        "detail": "Incorrect detergent can trigger leak protection.",
        "level": "safe"
      },
      {
        "title": "Find the source before resetting",
        "detail": "Drying the base without fixing the leak is not a repair.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E23 / F23 appears?",
    "observations": [
      {
        "label": "Water is visible underneath",
        "advice": "Keep power and water off until the leak is repaired."
      },
      {
        "label": "No external water is visible",
        "advice": "Water may remain in the base or the sensor circuit may be active."
      },
      {
        "label": "It followed heavy foam",
        "advice": "Correct detergent use and inspect for base water."
      }
    ],
    "whenToStop": [
      "Water is near a plug or wiring",
      "Leak continues while off",
      "The appliance must be tilted or opened"
    ],
    "faq": [
      {
        "question": "What does E23 / F23 mean on a Bosch washer?",
        "answer": "On many model families, E23 / F23 indicates that AquaStop or leak protection is active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E23 / F23 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e23 / f23",
      "AquaStop or leak protection is active",
      "leak",
      "e23",
      "f23"
    ],
    "featured": false,
    "errorCode": "E23 / F23",
    "aliases": [
      "E23",
      "F23"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e25-f25-error",
    "title": "Bosch washer E25 / F25 error: the turbidity sensor is abnormal",
    "shortTitle": "Bosch washer E25 / F25 error",
    "summary": "The E25 / F25 display on many Bosch washing machines indicates that the turbidity sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E25 / F25 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does E25 / F25 mean on a Bosch washer?",
        "answer": "On many model families, E25 / F25 indicates that the turbidity sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E25 / F25 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e25 / f25",
      "the turbidity sensor is abnormal",
      "sensor",
      "e25",
      "f25"
    ],
    "featured": false,
    "errorCode": "E25 / F25",
    "aliases": [
      "E25",
      "F25"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e26-f26-error",
    "title": "Bosch washer E26 / F26 error: the pressure sensor is abnormal",
    "shortTitle": "Bosch washer E26 / F26 error",
    "summary": "The E26 / F26 display on many Bosch washing machines indicates that the pressure sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E26 / F26 appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does E26 / F26 mean on a Bosch washer?",
        "answer": "On many model families, E26 / F26 indicates that the pressure sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E26 / F26 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e26 / f26",
      "the pressure sensor is abnormal",
      "level",
      "e26",
      "f26"
    ],
    "featured": false,
    "errorCode": "E26 / F26",
    "aliases": [
      "E26",
      "F26"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e27-f27-error",
    "title": "Bosch washer E27 / F27 error: the door-lock signal is abnormal",
    "shortTitle": "Bosch washer E27 / F27 error",
    "summary": "The E27 / F27 display on many Bosch washing machines indicates that the door-lock signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E27 / F27 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E27 / F27 mean on a Bosch washer?",
        "answer": "On many model families, E27 / F27 indicates that the door-lock signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E27 / F27 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e27 / f27",
      "the door-lock signal is abnormal",
      "door",
      "e27",
      "f27"
    ],
    "featured": false,
    "errorCode": "E27 / F27",
    "aliases": [
      "E27",
      "F27"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e29-f29-error",
    "title": "Bosch washer E29 / F29 error: water is not entering correctly",
    "shortTitle": "Bosch washer E29 / F29 error",
    "summary": "The E29 / F29 display on many Bosch washing machines indicates that water is not entering correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E29 / F29 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E29 / F29 mean on a Bosch washer?",
        "answer": "On many model families, E29 / F29 indicates that water is not entering correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E29 / F29 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e29 / f29",
      "water is not entering correctly",
      "inlet",
      "e29",
      "f29"
    ],
    "featured": false,
    "errorCode": "E29 / F29",
    "aliases": [
      "E29",
      "F29"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e32-error",
    "title": "Bosch washer E32 error: the load is unbalanced",
    "shortTitle": "Bosch washer E32 error",
    "summary": "The E32 display on many Bosch washing machines indicates that the load is unbalanced. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when E32 appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does E32 mean on a Bosch washer?",
        "answer": "On many model families, E32 indicates that the load is unbalanced. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E32 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e32",
      "the load is unbalanced",
      "balance",
      "e32"
    ],
    "featured": false,
    "errorCode": "E32",
    "aliases": [
      "E32"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e36-error",
    "title": "Bosch washer E36 error: the drain path or pump is blocked",
    "shortTitle": "Bosch washer E36 error",
    "summary": "The E36 display on many Bosch washing machines indicates that the drain path or pump is blocked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E36 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E36 mean on a Bosch washer?",
        "answer": "On many model families, E36 indicates that the drain path or pump is blocked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E36 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e36",
      "the drain path or pump is blocked",
      "drain",
      "e36"
    ],
    "featured": false,
    "errorCode": "E36",
    "aliases": [
      "E36"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e57-f57-error",
    "title": "Bosch washer E57 / F57 error: the motor inverter is abnormal",
    "shortTitle": "Bosch washer E57 / F57 error",
    "summary": "The E57 / F57 display on many Bosch washing machines indicates that the motor inverter is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E57 / F57 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E57 / F57 mean on a Bosch washer?",
        "answer": "On many model families, E57 / F57 indicates that the motor inverter is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E57 / F57 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e57 / f57",
      "the motor inverter is abnormal",
      "motor",
      "e57",
      "f57"
    ],
    "featured": false,
    "errorCode": "E57 / F57",
    "aliases": [
      "E57",
      "F57"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e58-f58-error",
    "title": "Bosch washer E58 / F58 error: the motor is not rotating correctly",
    "shortTitle": "Bosch washer E58 / F58 error",
    "summary": "The E58 / F58 display on many Bosch washing machines indicates that the motor is not rotating correctly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E58 / F58 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E58 / F58 mean on a Bosch washer?",
        "answer": "On many model families, E58 / F58 indicates that the motor is not rotating correctly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E58 / F58 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e58 / f58",
      "the motor is not rotating correctly",
      "motor",
      "e58",
      "f58"
    ],
    "featured": false,
    "errorCode": "E58 / F58",
    "aliases": [
      "E58",
      "F58"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e67-f67-error",
    "title": "Bosch washer E67 / F67 error: the control module configuration is abnormal",
    "shortTitle": "Bosch washer E67 / F67 error",
    "summary": "The E67 / F67 display on many Bosch washing machines indicates that the control module configuration is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E67 / F67 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E67 / F67 mean on a Bosch washer?",
        "answer": "On many model families, E67 / F67 indicates that the control module configuration is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E67 / F67 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e67 / f67",
      "the control module configuration is abnormal",
      "control",
      "e67",
      "f67"
    ],
    "featured": false,
    "errorCode": "E67 / F67",
    "aliases": [
      "E67",
      "F67"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f21-error",
    "title": "Bosch washer F21 error: the motor cannot rotate",
    "shortTitle": "Bosch washer F21 error",
    "summary": "The F21 display on many Bosch washing machines indicates that the motor cannot rotate. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F21 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F21 mean on a Bosch washer?",
        "answer": "On many model families, F21 indicates that the motor cannot rotate. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F21 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f21",
      "the motor cannot rotate",
      "motor",
      "f21"
    ],
    "featured": false,
    "errorCode": "F21",
    "aliases": [
      "F21"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f43-error",
    "title": "Bosch washer F43 error: the motor is mechanically blocked",
    "shortTitle": "Bosch washer F43 error",
    "summary": "The F43 display on many Bosch washing machines indicates that the motor is mechanically blocked. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F43 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F43 mean on a Bosch washer?",
        "answer": "On many model families, F43 indicates that the motor is mechanically blocked. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F43 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f43",
      "the motor is mechanically blocked",
      "motor",
      "f43"
    ],
    "featured": false,
    "errorCode": "F43",
    "aliases": [
      "F43"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f44-error",
    "title": "Bosch washer F44 error: the motor direction control is abnormal",
    "shortTitle": "Bosch washer F44 error",
    "summary": "The F44 display on many Bosch washing machines indicates that the motor direction control is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F44 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F44 mean on a Bosch washer?",
        "answer": "On many model families, F44 indicates that the motor direction control is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F44 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f44",
      "the motor direction control is abnormal",
      "motor",
      "f44"
    ],
    "featured": false,
    "errorCode": "F44",
    "aliases": [
      "F44"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f59-error",
    "title": "Bosch washer F59 error: the imbalance sensor is abnormal",
    "shortTitle": "Bosch washer F59 error",
    "summary": "The F59 display on many Bosch washing machines indicates that the imbalance sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F59 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does F59 mean on a Bosch washer?",
        "answer": "On many model families, F59 indicates that the imbalance sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F59 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f59",
      "the imbalance sensor is abnormal",
      "sensor",
      "f59"
    ],
    "featured": false,
    "errorCode": "F59",
    "aliases": [
      "F59"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f60-error",
    "title": "Bosch washer F60 error: the water-flow sensor is abnormal",
    "shortTitle": "Bosch washer F60 error",
    "summary": "The F60 display on many Bosch washing machines indicates that the water-flow sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F60 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does F60 mean on a Bosch washer?",
        "answer": "On many model families, F60 indicates that the water-flow sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F60 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f60",
      "the water-flow sensor is abnormal",
      "sensor",
      "f60"
    ],
    "featured": false,
    "errorCode": "F60",
    "aliases": [
      "F60"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f61-error",
    "title": "Bosch washer F61 error: the door safety circuit is abnormal",
    "shortTitle": "Bosch washer F61 error",
    "summary": "The F61 display on many Bosch washing machines indicates that the door safety circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F61 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F61 mean on a Bosch washer?",
        "answer": "On many model families, F61 indicates that the door safety circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F61 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f61",
      "the door safety circuit is abnormal",
      "door",
      "f61"
    ],
    "featured": false,
    "errorCode": "F61",
    "aliases": [
      "F61"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-f63-error",
    "title": "Bosch washer F63 error: the control entered a protection state",
    "shortTitle": "Bosch washer F63 error",
    "summary": "The F63 display on many Bosch washing machines indicates that the control entered a protection state. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F63 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does F63 mean on a Bosch washer?",
        "answer": "On many model families, F63 indicates that the control entered a protection state. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F63 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "f63",
      "the control entered a protection state",
      "control",
      "f63"
    ],
    "featured": false,
    "errorCode": "F63",
    "aliases": [
      "F63"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e80-error",
    "title": "Bosch washer E80 error: the control electronics detected a fault",
    "shortTitle": "Bosch washer E80 error",
    "summary": "The E80 display on many Bosch washing machines indicates that the control electronics detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E80 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E80 mean on a Bosch washer?",
        "answer": "On many model families, E80 indicates that the control electronics detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E80 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e80",
      "the control electronics detected a fault",
      "control",
      "e80"
    ],
    "featured": false,
    "errorCode": "E80",
    "aliases": [
      "E80"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "bosch-washer-e90-error",
    "title": "Bosch washer E90 error: the internal modules are not communicating",
    "shortTitle": "Bosch washer E90 error",
    "summary": "The E90 display on many Bosch washing machines indicates that the internal modules are not communicating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Bosch",
    "brandSlug": "bosch",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E90 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does E90 mean on a Bosch washer?",
        "answer": "On many model families, E90 indicates that the internal modules are not communicating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E90 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "bosch",
      "washing machine",
      "washer",
      "e90",
      "the internal modules are not communicating",
      "control",
      "e90"
    ],
    "featured": false,
    "errorCode": "E90",
    "aliases": [
      "E90"
    ],
    "appliesTo": "Selected Bosch washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Bosch Owner Support",
        "url": "https://www.bosch-home.com/us/owner-support"
      },
      {
        "label": "Bosch owner manuals",
        "url": "https://www.bosch-home.com/us/owner-support/owner-manuals"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f5e2-error",
    "title": "Whirlpool washer F5E2 error: the door or lid cannot lock",
    "shortTitle": "Whirlpool washer F5E2 error",
    "summary": "The F5E2 display on many Whirlpool washing machines indicates that the door or lid cannot lock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E2 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F5E2 indicates that the door or lid cannot lock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f5e2",
      "the door or lid cannot lock",
      "door",
      "f5e2"
    ],
    "featured": false,
    "errorCode": "F5E2",
    "aliases": [
      "F5E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f5e3-error",
    "title": "Whirlpool washer F5E3 error: the door or lid cannot unlock",
    "shortTitle": "Whirlpool washer F5E3 error",
    "summary": "The F5E3 display on many Whirlpool washing machines indicates that the door or lid cannot unlock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E3 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E3 mean on a Whirlpool washer?",
        "answer": "On many model families, F5E3 indicates that the door or lid cannot unlock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E3 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f5e3",
      "the door or lid cannot unlock",
      "door",
      "f5e3"
    ],
    "featured": false,
    "errorCode": "F5E3",
    "aliases": [
      "F5E3"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f5e1-error",
    "title": "Whirlpool washer F5E1 error: the door or lid is open",
    "shortTitle": "Whirlpool washer F5E1 error",
    "summary": "The F5E1 display on many Whirlpool washing machines indicates that the door or lid is open. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E1 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F5E1 indicates that the door or lid is open. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f5e1",
      "the door or lid is open",
      "door",
      "f5e1"
    ],
    "featured": false,
    "errorCode": "F5E1",
    "aliases": [
      "F5E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f8e1-error",
    "title": "Whirlpool washer F8E1 error: the washer is not receiving enough water",
    "shortTitle": "Whirlpool washer F8E1 error",
    "summary": "The F8E1 display on many Whirlpool washing machines indicates that the washer is not receiving enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E1 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does F8E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F8E1 indicates that the washer is not receiving enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f8e1",
      "the washer is not receiving enough water",
      "inlet",
      "f8e1",
      "lo fl"
    ],
    "featured": false,
    "errorCode": "F8E1",
    "aliases": [
      "F8E1",
      "LO FL"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f9e1-error",
    "title": "Whirlpool washer F9E1 error: the washer is taking too long to drain",
    "shortTitle": "Whirlpool washer F9E1 error",
    "summary": "The F9E1 display on many Whirlpool washing machines indicates that the washer is taking too long to drain. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E1 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does F9E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F9E1 indicates that the washer is taking too long to drain. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f9e1",
      "the washer is taking too long to drain",
      "drain",
      "f9e1"
    ],
    "featured": false,
    "errorCode": "F9E1",
    "aliases": [
      "F9E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f0e1-error",
    "title": "Whirlpool washer F0E1 error: a load was detected during Clean Washer",
    "shortTitle": "Whirlpool washer F0E1 error",
    "summary": "The F0E1 display on many Whirlpool washing machines indicates that a load was detected during Clean Washer. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A load is present during a cleaning cycle",
      "The appliance detected weight or movement",
      "Items were left inside",
      "Sensor or control falsely detects a load"
    ],
    "quickChecks": [
      {
        "title": "Remove all items",
        "detail": "Cleaning cycles should be run empty.",
        "level": "safe"
      },
      {
        "title": "Restart the cleaning cycle",
        "detail": "Use the required cleaner and program.",
        "level": "safe"
      },
      {
        "title": "Check for trapped items",
        "detail": "Inspect the drum or rack area.",
        "level": "safe"
      },
      {
        "title": "Arrange service if empty and persistent",
        "detail": "Load sensing may need diagnosis.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F0E1 appears?",
    "observations": [
      {
        "label": "Items were present",
        "advice": "Remove them and restart."
      },
      {
        "label": "Appliance is empty",
        "advice": "A sensor or control may be falsely detecting a load."
      },
      {
        "label": "Code appears in normal cycles",
        "advice": "Confirm the exact model code in the manual."
      }
    ],
    "whenToStop": [
      "Unexpected movement occurs",
      "A burning smell develops",
      "Internal sensor diagnosis is required"
    ],
    "faq": [
      {
        "question": "What does F0E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F0E1 indicates that a load was detected during Clean Washer. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F0E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f0e1",
      "a load was detected during Clean Washer",
      "load",
      "f0e1"
    ],
    "featured": false,
    "errorCode": "F0E1",
    "aliases": [
      "F0E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f0e2-error",
    "title": "Whirlpool washer F0E2 error: excess suds were detected",
    "shortTitle": "Whirlpool washer F0E2 error",
    "summary": "The F0E2 display on many Whirlpool washing machines indicates that excess suds were detected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F0E2 appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does F0E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F0E2 indicates that excess suds were detected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F0E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f0e2",
      "excess suds were detected",
      "suds",
      "f0e2"
    ],
    "featured": false,
    "errorCode": "F0E2",
    "aliases": [
      "F0E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f0e3-error",
    "title": "Whirlpool washer F0E3 error: the load is too large",
    "shortTitle": "Whirlpool washer F0E3 error",
    "summary": "The F0E3 display on many Whirlpool washing machines indicates that the load is too large. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F0E3 appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does F0E3 mean on a Whirlpool washer?",
        "answer": "On many model families, F0E3 indicates that the load is too large. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F0E3 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f0e3",
      "the load is too large",
      "balance",
      "f0e3"
    ],
    "featured": false,
    "errorCode": "F0E3",
    "aliases": [
      "F0E3"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f1e1-error",
    "title": "Whirlpool washer F1E1 error: the main control detected a fault",
    "shortTitle": "Whirlpool washer F1E1 error",
    "summary": "The F1E1 display on many Whirlpool washing machines indicates that the main control detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F1E1 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does F1E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F1E1 indicates that the main control detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F1E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f1e1",
      "the main control detected a fault",
      "control",
      "f1e1"
    ],
    "featured": false,
    "errorCode": "F1E1",
    "aliases": [
      "F1E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f1e2-error",
    "title": "Whirlpool washer F1E2 error: the motor-control electronics detected a fault",
    "shortTitle": "Whirlpool washer F1E2 error",
    "summary": "The F1E2 display on many Whirlpool washing machines indicates that the motor-control electronics detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F1E2 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F1E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F1E2 indicates that the motor-control electronics detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F1E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f1e2",
      "the motor-control electronics detected a fault",
      "motor",
      "f1e2"
    ],
    "featured": false,
    "errorCode": "F1E2",
    "aliases": [
      "F1E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f2e1-error",
    "title": "Whirlpool washer F2E1 error: a control-panel key is stuck",
    "shortTitle": "Whirlpool washer F2E1 error",
    "summary": "The F2E1 display on many Whirlpool washing machines indicates that a control-panel key is stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F2E1 appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does F2E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F2E1 indicates that a control-panel key is stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F2E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f2e1",
      "a control-panel key is stuck",
      "button",
      "f2e1"
    ],
    "featured": false,
    "errorCode": "F2E1",
    "aliases": [
      "F2E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f3e1-error",
    "title": "Whirlpool washer F3E1 error: the pressure sensor is abnormal",
    "shortTitle": "Whirlpool washer F3E1 error",
    "summary": "The F3E1 display on many Whirlpool washing machines indicates that the pressure sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Pressure or water-level sensor is abnormal",
      "Pressure path may be blocked internally",
      "Foam affects level detection",
      "Inlet or drain changes level unexpectedly"
    ],
    "quickChecks": [
      {
        "title": "Check for visible overfill",
        "detail": "Close water if the level is rising abnormally.",
        "level": "caution"
      },
      {
        "title": "Run one drain attempt",
        "detail": "Retained water can keep the signal active.",
        "level": "safe"
      },
      {
        "title": "Eliminate excess detergent",
        "detail": "Foam can affect pressure readings.",
        "level": "safe"
      },
      {
        "title": "Do not bypass level protection",
        "detail": "Sensor diagnosis needs service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F3E1 appears?",
    "observations": [
      {
        "label": "Tub is visibly overfilled",
        "advice": "Close water and do not restart."
      },
      {
        "label": "Tub is empty but code remains",
        "advice": "Sensor, hose, wiring, or control may report incorrectly."
      },
      {
        "label": "Level changes unexpectedly",
        "advice": "Check siphoning, inlet leakage, and drain installation."
      }
    ],
    "whenToStop": [
      "Water is above normal level",
      "Appliance fills while off",
      "Internal sensor access is required"
    ],
    "faq": [
      {
        "question": "What does F3E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F3E1 indicates that the pressure sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F3E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f3e1",
      "the pressure sensor is abnormal",
      "level",
      "f3e1"
    ],
    "featured": false,
    "errorCode": "F3E1",
    "aliases": [
      "F3E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f3e2-error",
    "title": "Whirlpool washer F3E2 error: the water-temperature sensor is abnormal",
    "shortTitle": "Whirlpool washer F3E2 error",
    "summary": "The F3E2 display on many Whirlpool washing machines indicates that the water-temperature sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F3E2 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does F3E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F3E2 indicates that the water-temperature sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F3E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f3e2",
      "the water-temperature sensor is abnormal",
      "sensor",
      "f3e2"
    ],
    "featured": false,
    "errorCode": "F3E2",
    "aliases": [
      "F3E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f4e1-error",
    "title": "Whirlpool washer F4E1 error: the wash-water heater is abnormal",
    "shortTitle": "Whirlpool washer F4E1 error",
    "summary": "The F4E1 display on many Whirlpool washing machines indicates that the wash-water heater is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F4E1 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does F4E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F4E1 indicates that the wash-water heater is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F4E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f4e1",
      "the wash-water heater is abnormal",
      "heater",
      "f4e1"
    ],
    "featured": false,
    "errorCode": "F4E1",
    "aliases": [
      "F4E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f4e2-error",
    "title": "Whirlpool washer F4E2 error: the heater control circuit is abnormal",
    "shortTitle": "Whirlpool washer F4E2 error",
    "summary": "The F4E2 display on many Whirlpool washing machines indicates that the heater control circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F4E2 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does F4E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F4E2 indicates that the heater control circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F4E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f4e2",
      "the heater control circuit is abnormal",
      "heater",
      "f4e2"
    ],
    "featured": false,
    "errorCode": "F4E2",
    "aliases": [
      "F4E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f5e4-error",
    "title": "Whirlpool washer F5E4 error: the door was not opened between cycles",
    "shortTitle": "Whirlpool washer F5E4 error",
    "summary": "The F5E4 display on many Whirlpool washing machines indicates that the door was not opened between cycles. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E4 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E4 mean on a Whirlpool washer?",
        "answer": "On many model families, F5E4 indicates that the door was not opened between cycles. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E4 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f5e4",
      "the door was not opened between cycles",
      "door",
      "f5e4"
    ],
    "featured": false,
    "errorCode": "F5E4",
    "aliases": [
      "F5E4"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f6e1-error",
    "title": "Whirlpool washer F6E1 error: the main and motor controls are not communicating",
    "shortTitle": "Whirlpool washer F6E1 error",
    "summary": "The F6E1 display on many Whirlpool washing machines indicates that the main and motor controls are not communicating. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F6E1 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does F6E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F6E1 indicates that the main and motor controls are not communicating. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F6E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f6e1",
      "the main and motor controls are not communicating",
      "control",
      "f6e1"
    ],
    "featured": false,
    "errorCode": "F6E1",
    "aliases": [
      "F6E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f7e1-error",
    "title": "Whirlpool washer F7E1 error: the motor cannot reach expected speed",
    "shortTitle": "Whirlpool washer F7E1 error",
    "summary": "The F7E1 display on many Whirlpool washing machines indicates that the motor cannot reach expected speed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F7E1 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F7E1 mean on a Whirlpool washer?",
        "answer": "On many model families, F7E1 indicates that the motor cannot reach expected speed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F7E1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f7e1",
      "the motor cannot reach expected speed",
      "motor",
      "f7e1"
    ],
    "featured": false,
    "errorCode": "F7E1",
    "aliases": [
      "F7E1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f7e5-error",
    "title": "Whirlpool washer F7E5 error: the shifter position cannot be confirmed",
    "shortTitle": "Whirlpool washer F7E5 error",
    "summary": "The F7E5 display on many Whirlpool washing machines indicates that the shifter position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F7E5 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does F7E5 mean on a Whirlpool washer?",
        "answer": "On many model families, F7E5 indicates that the shifter position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F7E5 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f7e5",
      "the shifter position cannot be confirmed",
      "position",
      "f7e5"
    ],
    "featured": false,
    "errorCode": "F7E5",
    "aliases": [
      "F7E5"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f7e6-error",
    "title": "Whirlpool washer F7E6 error: the motor cannot drive the basket",
    "shortTitle": "Whirlpool washer F7E6 error",
    "summary": "The F7E6 display on many Whirlpool washing machines indicates that the motor cannot drive the basket. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F7E6 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F7E6 mean on a Whirlpool washer?",
        "answer": "On many model families, F7E6 indicates that the motor cannot drive the basket. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F7E6 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f7e6",
      "the motor cannot drive the basket",
      "motor",
      "f7e6"
    ],
    "featured": false,
    "errorCode": "F7E6",
    "aliases": [
      "F7E6"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f8e3-error",
    "title": "Whirlpool washer F8E3 error: the washer detected an overflow",
    "shortTitle": "Whirlpool washer F8E3 error",
    "summary": "The F8E3 display on many Whirlpool washing machines indicates that the washer detected an overflow. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E3 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does F8E3 mean on a Whirlpool washer?",
        "answer": "On many model families, F8E3 indicates that the washer detected an overflow. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E3 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f8e3",
      "the washer detected an overflow",
      "overflow",
      "f8e3"
    ],
    "featured": false,
    "errorCode": "F8E3",
    "aliases": [
      "F8E3"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f8e5-error",
    "title": "Whirlpool washer F8E5 error: the hot and cold hoses may be reversed",
    "shortTitle": "Whirlpool washer F8E5 error",
    "summary": "The F8E5 display on many Whirlpool washing machines indicates that the hot and cold hoses may be reversed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E5 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does F8E5 mean on a Whirlpool washer?",
        "answer": "On many model families, F8E5 indicates that the hot and cold hoses may be reversed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E5 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f8e5",
      "the hot and cold hoses may be reversed",
      "inlet",
      "f8e5"
    ],
    "featured": false,
    "errorCode": "F8E5",
    "aliases": [
      "F8E5"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f8e6-error",
    "title": "Whirlpool washer F8E6 error: water is entering in an unsafe cycle state",
    "shortTitle": "Whirlpool washer F8E6 error",
    "summary": "The F8E6 display on many Whirlpool washing machines indicates that water is entering in an unsafe cycle state. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E6 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does F8E6 mean on a Whirlpool washer?",
        "answer": "On many model families, F8E6 indicates that water is entering in an unsafe cycle state. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E6 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f8e6",
      "water is entering in an unsafe cycle state",
      "overflow",
      "f8e6"
    ],
    "featured": false,
    "errorCode": "F8E6",
    "aliases": [
      "F8E6"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f9e2-error",
    "title": "Whirlpool washer F9E2 error: the drain-pump drive is abnormal",
    "shortTitle": "Whirlpool washer F9E2 error",
    "summary": "The F9E2 display on many Whirlpool washing machines indicates that the drain-pump drive is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E2 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does F9E2 mean on a Whirlpool washer?",
        "answer": "On many model families, F9E2 indicates that the drain-pump drive is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E2 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f9e2",
      "the drain-pump drive is abnormal",
      "drain",
      "f9e2"
    ],
    "featured": false,
    "errorCode": "F9E2",
    "aliases": [
      "F9E2"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-f9e3-error",
    "title": "Whirlpool washer F9E3 error: the drain system is too slow",
    "shortTitle": "Whirlpool washer F9E3 error",
    "summary": "The F9E3 display on many Whirlpool washing machines indicates that the drain system is too slow. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E3 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does F9E3 mean on a Whirlpool washer?",
        "answer": "On many model families, F9E3 indicates that the drain system is too slow. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E3 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "f9e3",
      "the drain system is too slow",
      "drain",
      "f9e3"
    ],
    "featured": false,
    "errorCode": "F9E3",
    "aliases": [
      "F9E3"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-loc-error",
    "title": "Whirlpool washer LOC error: control lock is enabled",
    "shortTitle": "Whirlpool washer LOC error",
    "summary": "The LOC display on many Whirlpool washing machines indicates that control lock is enabled. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Control lock is enabled",
      "The lock control must be held for a set time",
      "Touch panel is not registering",
      "Control is stuck in a locked state"
    ],
    "quickChecks": [
      {
        "title": "Find the lock symbol",
        "detail": "Look for Control Lock, Child Lock, or a padlock.",
        "level": "safe"
      },
      {
        "title": "Hold the marked control",
        "detail": "Use the duration printed on the panel or manual.",
        "level": "safe"
      },
      {
        "title": "Dry and clean the panel",
        "detail": "Moisture can block touch input.",
        "level": "safe"
      },
      {
        "title": "Power-cycle only if documented",
        "detail": "A persistent lock may require service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when LOC appears?",
    "observations": [
      {
        "label": "Padlock light is on",
        "advice": "This is usually a setting, not a hardware failure."
      },
      {
        "label": "Lock clears then returns",
        "advice": "A button may be held, wet, or failing."
      },
      {
        "label": "No controls respond",
        "advice": "Confirm power and model-specific lock instructions."
      }
    ],
    "whenToStop": [
      "Panel is cracked, wet inside, or hot",
      "A button remains stuck",
      "Internal control access is needed"
    ],
    "faq": [
      {
        "question": "What does LOC mean on a Whirlpool washer?",
        "answer": "On many model families, LOC indicates that control lock is enabled. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LOC by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "loc",
      "control lock is enabled",
      "lock",
      "loc"
    ],
    "featured": false,
    "errorCode": "LOC",
    "aliases": [
      "LOC"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-int-error",
    "title": "Whirlpool washer Int error: the cycle was interrupted",
    "shortTitle": "Whirlpool washer Int error",
    "summary": "The Int display on many Whirlpool washing machines indicates that the cycle was interrupted. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A setup, delay, test, or interrupted state is active",
      "A button combination changed the operating mode",
      "Cycle or setup was not completed",
      "Control did not return to normal mode"
    ],
    "quickChecks": [
      {
        "title": "Read the display as a status first",
        "detail": "Not every code is a hardware failure.",
        "level": "safe"
      },
      {
        "title": "Use the documented cancel sequence",
        "detail": "Follow the model manual only.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly if allowed",
        "detail": "Confirm the normal home screen returns.",
        "level": "safe"
      },
      {
        "title": "Avoid undocumented service modes",
        "detail": "They can run heaters, pumps, or motors unexpectedly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when Int appears?",
    "observations": [
      {
        "label": "Display returns to normal",
        "advice": "No further action is usually needed."
      },
      {
        "label": "State returns every startup",
        "advice": "A stuck button or control fault may be involved."
      },
      {
        "label": "Components run unexpectedly",
        "advice": "Disconnect power and arrange service."
      }
    ],
    "whenToStop": [
      "Motors or heaters run unexpectedly",
      "The appliance contains water or a load",
      "Undocumented settings would be changed"
    ],
    "faq": [
      {
        "question": "What does Int mean on a Whirlpool washer?",
        "answer": "On many model families, Int indicates that the cycle was interrupted. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Int by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "int",
      "the cycle was interrupted",
      "status",
      "int"
    ],
    "featured": false,
    "errorCode": "Int",
    "aliases": [
      "Int"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-rl-error",
    "title": "Whirlpool washer rL error: a load was detected during cleaning",
    "shortTitle": "Whirlpool washer rL error",
    "summary": "The rL display on many Whirlpool washing machines indicates that a load was detected during cleaning. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A load is present during a cleaning cycle",
      "The appliance detected weight or movement",
      "Items were left inside",
      "Sensor or control falsely detects a load"
    ],
    "quickChecks": [
      {
        "title": "Remove all items",
        "detail": "Cleaning cycles should be run empty.",
        "level": "safe"
      },
      {
        "title": "Restart the cleaning cycle",
        "detail": "Use the required cleaner and program.",
        "level": "safe"
      },
      {
        "title": "Check for trapped items",
        "detail": "Inspect the drum or rack area.",
        "level": "safe"
      },
      {
        "title": "Arrange service if empty and persistent",
        "detail": "Load sensing may need diagnosis.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when rL appears?",
    "observations": [
      {
        "label": "Items were present",
        "advice": "Remove them and restart."
      },
      {
        "label": "Appliance is empty",
        "advice": "A sensor or control may be falsely detecting a load."
      },
      {
        "label": "Code appears in normal cycles",
        "advice": "Confirm the exact model code in the manual."
      }
    ],
    "whenToStop": [
      "Unexpected movement occurs",
      "A burning smell develops",
      "Internal sensor diagnosis is required"
    ],
    "faq": [
      {
        "question": "What does rL mean on a Whirlpool washer?",
        "answer": "On many model families, rL indicates that a load was detected during cleaning. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear rL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "rl",
      "a load was detected during cleaning",
      "load",
      "rl"
    ],
    "featured": false,
    "errorCode": "rL",
    "aliases": [
      "rL"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-sd-sud-error",
    "title": "Whirlpool washer Sd / SUD error: excess suds are slowing operation",
    "shortTitle": "Whirlpool washer Sd / SUD error",
    "summary": "The Sd / SUD display on many Whirlpool washing machines indicates that excess suds are slowing operation. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when Sd / SUD appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does Sd / SUD mean on a Whirlpool washer?",
        "answer": "On many model families, Sd / SUD indicates that excess suds are slowing operation. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Sd / SUD by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "sd / sud",
      "excess suds are slowing operation",
      "suds",
      "sd",
      "sud"
    ],
    "featured": false,
    "errorCode": "Sd / SUD",
    "aliases": [
      "Sd",
      "SUD"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-hc-error",
    "title": "Whirlpool washer HC error: the hot and cold hoses may be reversed",
    "shortTitle": "Whirlpool washer HC error",
    "summary": "The HC display on many Whirlpool washing machines indicates that the hot and cold hoses may be reversed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when HC appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does HC mean on a Whirlpool washer?",
        "answer": "On many model families, HC indicates that the hot and cold hoses may be reversed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear HC by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "hc",
      "the hot and cold hoses may be reversed",
      "inlet",
      "hc"
    ],
    "featured": false,
    "errorCode": "HC",
    "aliases": [
      "HC"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-lf-error",
    "title": "Whirlpool washer LF error: the washer is taking too long to fill",
    "shortTitle": "Whirlpool washer LF error",
    "summary": "The LF display on many Whirlpool washing machines indicates that the washer is taking too long to fill. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when LF appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does LF mean on a Whirlpool washer?",
        "answer": "On many model families, LF indicates that the washer is taking too long to fill. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LF by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "lf",
      "the washer is taking too long to fill",
      "inlet",
      "lf"
    ],
    "featured": false,
    "errorCode": "LF",
    "aliases": [
      "LF"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-ld-error",
    "title": "Whirlpool washer Ld error: the washer is taking too long to drain",
    "shortTitle": "Whirlpool washer Ld error",
    "summary": "The Ld display on many Whirlpool washing machines indicates that the washer is taking too long to drain. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when Ld appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does Ld mean on a Whirlpool washer?",
        "answer": "On many model families, Ld indicates that the washer is taking too long to drain. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear Ld by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "ld",
      "the washer is taking too long to drain",
      "drain",
      "ld",
      "ld"
    ],
    "featured": false,
    "errorCode": "Ld",
    "aliases": [
      "Ld",
      "LD"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-ol-error",
    "title": "Whirlpool washer oL error: the washer is overloaded",
    "shortTitle": "Whirlpool washer oL error",
    "summary": "The oL display on many Whirlpool washing machines indicates that the washer is overloaded. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when oL appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does oL mean on a Whirlpool washer?",
        "answer": "On many model families, oL indicates that the washer is overloaded. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear oL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "ol",
      "the washer is overloaded",
      "balance",
      "ol",
      "ol"
    ],
    "featured": false,
    "errorCode": "oL",
    "aliases": [
      "oL",
      "OL"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-ul-error",
    "title": "Whirlpool washer uL error: the load is unbalanced",
    "shortTitle": "Whirlpool washer uL error",
    "summary": "The uL display on many Whirlpool washing machines indicates that the load is unbalanced. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Load is concentrated on one side",
      "A single bulky item cannot balance",
      "Appliance is not level",
      "Suspension or vibration sensing is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Separate tangled items and spread them evenly.",
        "level": "safe"
      },
      {
        "title": "Adjust the load size",
        "detail": "Avoid spinning one heavy item by itself.",
        "level": "safe"
      },
      {
        "title": "Check appliance stability",
        "detail": "Confirm every foot contacts the floor.",
        "level": "safe"
      },
      {
        "title": "Stop if the cabinet is struck",
        "detail": "Violent movement needs suspension or bearing inspection.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when uL appears?",
    "observations": [
      {
        "label": "Code clears after redistribution",
        "advice": "The load balance caused the interruption."
      },
      {
        "label": "It happens every cycle",
        "advice": "Check leveling, shipping hardware, suspension, and sensors."
      },
      {
        "label": "Drum bangs or sags",
        "advice": "Stop using the appliance and arrange inspection."
      }
    ],
    "whenToStop": [
      "The appliance walks or strikes objects",
      "The drum hits the cabinet",
      "A suspension part appears broken"
    ],
    "faq": [
      {
        "question": "What does uL mean on a Whirlpool washer?",
        "answer": "On many model families, uL indicates that the load is unbalanced. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear uL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "ul",
      "the load is unbalanced",
      "balance",
      "ul",
      "ul"
    ],
    "featured": false,
    "errorCode": "uL",
    "aliases": [
      "uL",
      "UL"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-dl-error",
    "title": "Whirlpool washer dL error: the door or lid cannot lock",
    "shortTitle": "Whirlpool washer dL error",
    "summary": "The dL display on many Whirlpool washing machines indicates that the door or lid cannot lock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dL appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dL mean on a Whirlpool washer?",
        "answer": "On many model families, dL indicates that the door or lid cannot lock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dL by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "dl",
      "the door or lid cannot lock",
      "door",
      "dl"
    ],
    "featured": false,
    "errorCode": "dL",
    "aliases": [
      "dL"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-du-error",
    "title": "Whirlpool washer dU error: the door or lid cannot unlock",
    "shortTitle": "Whirlpool washer dU error",
    "summary": "The dU display on many Whirlpool washing machines indicates that the door or lid cannot unlock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when dU appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does dU mean on a Whirlpool washer?",
        "answer": "On many model families, dU indicates that the door or lid cannot unlock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear dU by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "du",
      "the door or lid cannot unlock",
      "door",
      "du"
    ],
    "featured": false,
    "errorCode": "dU",
    "aliases": [
      "dU"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-washer-c1-error",
    "title": "Whirlpool washer C1 error: water flow is too low",
    "shortTitle": "Whirlpool washer C1 error",
    "summary": "The C1 display on many Whirlpool washing machines indicates that water flow is too low. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C1 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does C1 mean on a Whirlpool washer?",
        "answer": "On many model families, C1 indicates that water flow is too low. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C1 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "washing machine",
      "washer",
      "c1",
      "water flow is too low",
      "inlet",
      "c1"
    ],
    "featured": false,
    "errorCode": "C1",
    "aliases": [
      "C1"
    ],
    "appliesTo": "Selected Whirlpool washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f1e1-error",
    "title": "Whirlpool dishwasher F1E1 error: the main control detected a fault",
    "shortTitle": "Whirlpool dishwasher F1E1 error",
    "summary": "The F1E1 display on many Whirlpool dishwashers indicates that the main control detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F1E1 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does F1E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F1E1 indicates that the main control detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F1E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f1e1",
      "the main control detected a fault",
      "control",
      "f1e1"
    ],
    "featured": false,
    "errorCode": "F1E1",
    "aliases": [
      "F1E1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f1e2-error",
    "title": "Whirlpool dishwasher F1E2 error: the control memory is abnormal",
    "shortTitle": "Whirlpool dishwasher F1E2 error",
    "summary": "The F1E2 display on many Whirlpool dishwashers indicates that the control memory is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F1E2 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does F1E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F1E2 indicates that the control memory is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F1E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f1e2",
      "the control memory is abnormal",
      "control",
      "f1e2"
    ],
    "featured": false,
    "errorCode": "F1E2",
    "aliases": [
      "F1E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f2e1-error",
    "title": "Whirlpool dishwasher F2E1 error: a control-panel key is stuck",
    "shortTitle": "Whirlpool dishwasher F2E1 error",
    "summary": "The F2E1 display on many Whirlpool dishwashers indicates that a control-panel key is stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F2E1 appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does F2E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F2E1 indicates that a control-panel key is stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F2E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f2e1",
      "a control-panel key is stuck",
      "button",
      "f2e1",
      "2-1"
    ],
    "featured": false,
    "errorCode": "F2E1",
    "aliases": [
      "F2E1",
      "2-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f3e1-error",
    "title": "Whirlpool dishwasher F3E1 error: the temperature sensor is abnormal",
    "shortTitle": "Whirlpool dishwasher F3E1 error",
    "summary": "The F3E1 display on many Whirlpool dishwashers indicates that the temperature sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F3E1 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does F3E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F3E1 indicates that the temperature sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F3E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f3e1",
      "the temperature sensor is abnormal",
      "sensor",
      "f3e1"
    ],
    "featured": false,
    "errorCode": "F3E1",
    "aliases": [
      "F3E1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f3e2-error",
    "title": "Whirlpool dishwasher F3E2 error: the soil sensor is abnormal",
    "shortTitle": "Whirlpool dishwasher F3E2 error",
    "summary": "The F3E2 display on many Whirlpool dishwashers indicates that the soil sensor is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F3E2 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does F3E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F3E2 indicates that the soil sensor is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F3E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f3e2",
      "the soil sensor is abnormal",
      "sensor",
      "f3e2"
    ],
    "featured": false,
    "errorCode": "F3E2",
    "aliases": [
      "F3E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f4e1-error",
    "title": "Whirlpool dishwasher F4E1 error: the wash-motor circuit is abnormal",
    "shortTitle": "Whirlpool dishwasher F4E1 error",
    "summary": "The F4E1 display on many Whirlpool dishwashers indicates that the wash-motor circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F4E1 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F4E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F4E1 indicates that the wash-motor circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F4E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f4e1",
      "the wash-motor circuit is abnormal",
      "motor",
      "f4e1"
    ],
    "featured": false,
    "errorCode": "F4E1",
    "aliases": [
      "F4E1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f4e3-error",
    "title": "Whirlpool dishwasher F4E3 error: the wash motor is not running",
    "shortTitle": "Whirlpool dishwasher F4E3 error",
    "summary": "The F4E3 display on many Whirlpool dishwashers indicates that the wash motor is not running. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F4E3 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does F4E3 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F4E3 indicates that the wash motor is not running. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F4E3 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f4e3",
      "the wash motor is not running",
      "motor",
      "f4e3",
      "4-3"
    ],
    "featured": false,
    "errorCode": "F4E3",
    "aliases": [
      "F4E3",
      "4-3"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f5e1-error",
    "title": "Whirlpool dishwasher F5E1 error: the door is not latching",
    "shortTitle": "Whirlpool dishwasher F5E1 error",
    "summary": "The F5E1 display on many Whirlpool dishwashers indicates that the door is not latching. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E1 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F5E1 indicates that the door is not latching. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f5e1",
      "the door is not latching",
      "door",
      "f5e1"
    ],
    "featured": false,
    "errorCode": "F5E1",
    "aliases": [
      "F5E1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f5e2-error",
    "title": "Whirlpool dishwasher F5E2 error: the door switch remains closed",
    "shortTitle": "Whirlpool dishwasher F5E2 error",
    "summary": "The F5E2 display on many Whirlpool dishwashers indicates that the door switch remains closed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F5E2 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does F5E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F5E2 indicates that the door switch remains closed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F5E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f5e2",
      "the door switch remains closed",
      "door",
      "f5e2"
    ],
    "featured": false,
    "errorCode": "F5E2",
    "aliases": [
      "F5E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f6e1-error",
    "title": "Whirlpool dishwasher F6E1 error: the dishwasher is not detecting water",
    "shortTitle": "Whirlpool dishwasher F6E1 error",
    "summary": "The F6E1 display on many Whirlpool dishwashers indicates that the dishwasher is not detecting water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F6E1 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does F6E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F6E1 indicates that the dishwasher is not detecting water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F6E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f6e1",
      "the dishwasher is not detecting water",
      "inlet",
      "f6e1",
      "6-1"
    ],
    "featured": false,
    "errorCode": "F6E1",
    "aliases": [
      "F6E1",
      "6-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f6e2-error",
    "title": "Whirlpool dishwasher F6E2 error: the inlet-valve circuit is abnormal",
    "shortTitle": "Whirlpool dishwasher F6E2 error",
    "summary": "The F6E2 display on many Whirlpool dishwashers indicates that the inlet-valve circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F6E2 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does F6E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F6E2 indicates that the inlet-valve circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F6E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f6e2",
      "the inlet-valve circuit is abnormal",
      "inlet",
      "f6e2"
    ],
    "featured": false,
    "errorCode": "F6E2",
    "aliases": [
      "F6E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f6e3-error",
    "title": "Whirlpool dishwasher F6E3 error: suds or air affect water-level sensing",
    "shortTitle": "Whirlpool dishwasher F6E3 error",
    "summary": "The F6E3 display on many Whirlpool dishwashers indicates that suds or air affect water-level sensing. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Too much detergent was used",
      "Detergent is not suitable for high-efficiency machines",
      "Soft water requires a lower dose",
      "Slow draining retains foam"
    ],
    "quickChecks": [
      {
        "title": "Allow foam to settle",
        "detail": "Do not add more chemicals.",
        "level": "safe"
      },
      {
        "title": "Run a rinse or drain cycle",
        "detail": "Use no additional detergent.",
        "level": "safe"
      },
      {
        "title": "Correct detergent type and dose",
        "detail": "Use the manufacturer-required detergent and amount.",
        "level": "safe"
      },
      {
        "title": "Check draining if it returns",
        "detail": "A restriction can retain detergent.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when F6E3 appears?",
    "observations": [
      {
        "label": "Foam is visible",
        "advice": "Detergent type or dose is the first issue."
      },
      {
        "label": "Little foam is visible",
        "advice": "Residue, draining, or pressure sensing may still be involved."
      },
      {
        "label": "Cycle becomes very long",
        "advice": "The appliance may be pausing to remove foam."
      }
    ],
    "whenToStop": [
      "Foam or water leaks out",
      "Pump sounds strained",
      "Code returns during an empty rinse"
    ],
    "faq": [
      {
        "question": "What does F6E3 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F6E3 indicates that suds or air affect water-level sensing. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F6E3 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f6e3",
      "suds or air affect water-level sensing",
      "suds",
      "f6e3"
    ],
    "featured": false,
    "errorCode": "F6E3",
    "aliases": [
      "F6E3"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f6e4-error",
    "title": "Whirlpool dishwasher F6E4 error: the overfill float is raised",
    "shortTitle": "Whirlpool dishwasher F6E4 error",
    "summary": "The F6E4 display on many Whirlpool dishwashers indicates that the overfill float is raised. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F6E4 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does F6E4 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F6E4 indicates that the overfill float is raised. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F6E4 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f6e4",
      "the overfill float is raised",
      "overflow",
      "f6e4",
      "6-4"
    ],
    "featured": false,
    "errorCode": "F6E4",
    "aliases": [
      "F6E4",
      "6-4"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f7e1-error",
    "title": "Whirlpool dishwasher F7E1 error: the water did not heat as expected",
    "shortTitle": "Whirlpool dishwasher F7E1 error",
    "summary": "The F7E1 display on many Whirlpool dishwashers indicates that the water did not heat as expected. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F7E1 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does F7E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F7E1 indicates that the water did not heat as expected. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F7E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f7e1",
      "the water did not heat as expected",
      "heater",
      "f7e1",
      "7-1"
    ],
    "featured": false,
    "errorCode": "F7E1",
    "aliases": [
      "F7E1",
      "7-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f7e2-error",
    "title": "Whirlpool dishwasher F7E2 error: the heater appears to remain on",
    "shortTitle": "Whirlpool dishwasher F7E2 error",
    "summary": "The F7E2 display on many Whirlpool dishwashers indicates that the heater appears to remain on. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F7E2 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does F7E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F7E2 indicates that the heater appears to remain on. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F7E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f7e2",
      "the heater appears to remain on",
      "heater",
      "f7e2"
    ],
    "featured": false,
    "errorCode": "F7E2",
    "aliases": [
      "F7E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f8e1-error",
    "title": "Whirlpool dishwasher F8E1 error: the dishwasher is draining too slowly",
    "shortTitle": "Whirlpool dishwasher F8E1 error",
    "summary": "The F8E1 display on many Whirlpool dishwashers indicates that the dishwasher is draining too slowly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E1 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does F8E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F8E1 indicates that the dishwasher is draining too slowly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f8e1",
      "the dishwasher is draining too slowly",
      "drain",
      "f8e1",
      "8-1"
    ],
    "featured": false,
    "errorCode": "F8E1",
    "aliases": [
      "F8E1",
      "8-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f8e2-error",
    "title": "Whirlpool dishwasher F8E2 error: the drain-pump circuit is abnormal",
    "shortTitle": "Whirlpool dishwasher F8E2 error",
    "summary": "The F8E2 display on many Whirlpool dishwashers indicates that the drain-pump circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F8E2 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does F8E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F8E2 indicates that the drain-pump circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F8E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f8e2",
      "the drain-pump circuit is abnormal",
      "drain",
      "f8e2"
    ],
    "featured": false,
    "errorCode": "F8E2",
    "aliases": [
      "F8E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f9e1-error",
    "title": "Whirlpool dishwasher F9E1 error: the diverter cannot find position",
    "shortTitle": "Whirlpool dishwasher F9E1 error",
    "summary": "The F9E1 display on many Whirlpool dishwashers indicates that the diverter cannot find position. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does F9E1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F9E1 indicates that the diverter cannot find position. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f9e1",
      "the diverter cannot find position",
      "position",
      "f9e1",
      "9-1"
    ],
    "featured": false,
    "errorCode": "F9E1",
    "aliases": [
      "F9E1",
      "9-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f9e2-error",
    "title": "Whirlpool dishwasher F9E2 error: the diverter motor is stuck",
    "shortTitle": "Whirlpool dishwasher F9E2 error",
    "summary": "The F9E2 display on many Whirlpool dishwashers indicates that the diverter motor is stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E2 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does F9E2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F9E2 indicates that the diverter motor is stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f9e2",
      "the diverter motor is stuck",
      "position",
      "f9e2"
    ],
    "featured": false,
    "errorCode": "F9E2",
    "aliases": [
      "F9E2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-f9e3-error",
    "title": "Whirlpool dishwasher F9E3 error: the diverter feedback is missing",
    "shortTitle": "Whirlpool dishwasher F9E3 error",
    "summary": "The F9E3 display on many Whirlpool dishwashers indicates that the diverter feedback is missing. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when F9E3 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does F9E3 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, F9E3 indicates that the diverter feedback is missing. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear F9E3 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "f9e3",
      "the diverter feedback is missing",
      "position",
      "f9e3"
    ],
    "featured": false,
    "errorCode": "F9E3",
    "aliases": [
      "F9E3"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-fae1-error",
    "title": "Whirlpool dishwasher FAE1 error: the detergent dispenser is abnormal",
    "shortTitle": "Whirlpool dishwasher FAE1 error",
    "summary": "The FAE1 display on many Whirlpool dishwashers indicates that the detergent dispenser is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FAE1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does FAE1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, FAE1 indicates that the detergent dispenser is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FAE1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "fae1",
      "the detergent dispenser is abnormal",
      "position",
      "fae1"
    ],
    "featured": false,
    "errorCode": "FAE1",
    "aliases": [
      "FAE1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-fae2-error",
    "title": "Whirlpool dishwasher FAE2 error: the vent actuator is abnormal",
    "shortTitle": "Whirlpool dishwasher FAE2 error",
    "summary": "The FAE2 display on many Whirlpool dishwashers indicates that the vent actuator is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FAE2 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does FAE2 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, FAE2 indicates that the vent actuator is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FAE2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "fae2",
      "the vent actuator is abnormal",
      "position",
      "fae2"
    ],
    "featured": false,
    "errorCode": "FAE2",
    "aliases": [
      "FAE2"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-h2o-error",
    "title": "Whirlpool dishwasher H2O error: the dishwasher is not receiving enough water",
    "shortTitle": "Whirlpool dishwasher H2O error",
    "summary": "The H2O display on many Whirlpool dishwashers indicates that the dishwasher is not receiving enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when H2O appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does H2O mean on a Whirlpool dishwasher?",
        "answer": "On many model families, H2O indicates that the dishwasher is not receiving enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear H2O by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "h2o",
      "the dishwasher is not receiving enough water",
      "inlet",
      "h2o"
    ],
    "featured": false,
    "errorCode": "H2O",
    "aliases": [
      "H2O"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-2-1-error",
    "title": "Whirlpool dishwasher 2-1 error: a keypad button is stuck",
    "shortTitle": "Whirlpool dishwasher 2-1 error",
    "summary": "The 2-1 display on many Whirlpool dishwashers indicates that a keypad button is stuck. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A button is physically stuck",
      "Moisture affects the keypad",
      "An object presses the panel",
      "User-interface electronics are faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove objects from the panel",
        "detail": "Make sure nothing presses the controls.",
        "level": "safe"
      },
      {
        "title": "Gently press and release each key",
        "detail": "Do not use tools or sprays.",
        "level": "safe"
      },
      {
        "title": "Dry the surface",
        "detail": "Use a dry cloth and allow moisture to evaporate.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "A returning code may need panel service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when 2-1 appears?",
    "observations": [
      {
        "label": "One key feels different",
        "advice": "That key or panel may be stuck."
      },
      {
        "label": "Panel was recently wet",
        "advice": "Allow it to dry fully without heat."
      },
      {
        "label": "Code appears with no contact",
        "advice": "The interface electronics may be faulty."
      }
    ],
    "whenToStop": [
      "Liquid entered the panel",
      "Panel is cracked or hot",
      "Internal replacement is required"
    ],
    "faq": [
      {
        "question": "What does 2-1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 2-1 indicates that a keypad button is stuck. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 2-1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "2-1",
      "a keypad button is stuck",
      "button",
      "2-1"
    ],
    "featured": false,
    "errorCode": "2-1",
    "aliases": [
      "2-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-4-3-error",
    "title": "Whirlpool dishwasher 4-3 error: the wash motor is not running",
    "shortTitle": "Whirlpool dishwasher 4-3 error",
    "summary": "The 4-3 display on many Whirlpool dishwashers indicates that the wash motor is not running. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 4-3 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does 4-3 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 4-3 indicates that the wash motor is not running. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 4-3 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "4-3",
      "the wash motor is not running",
      "motor",
      "4-3"
    ],
    "featured": false,
    "errorCode": "4-3",
    "aliases": [
      "4-3"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-6-1-error",
    "title": "Whirlpool dishwasher 6-1 error: the dishwasher is not detecting water",
    "shortTitle": "Whirlpool dishwasher 6-1 error",
    "summary": "The 6-1 display on many Whirlpool dishwashers indicates that the dishwasher is not detecting water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 6-1 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does 6-1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 6-1 indicates that the dishwasher is not detecting water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 6-1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "6-1",
      "the dishwasher is not detecting water",
      "inlet",
      "6-1"
    ],
    "featured": false,
    "errorCode": "6-1",
    "aliases": [
      "6-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-6-4-error",
    "title": "Whirlpool dishwasher 6-4 error: the overfill float is raised",
    "shortTitle": "Whirlpool dishwasher 6-4 error",
    "summary": "The 6-4 display on many Whirlpool dishwashers indicates that the overfill float is raised. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 6-4 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does 6-4 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 6-4 indicates that the overfill float is raised. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 6-4 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "6-4",
      "the overfill float is raised",
      "overflow",
      "6-4"
    ],
    "featured": false,
    "errorCode": "6-4",
    "aliases": [
      "6-4"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-7-1-error",
    "title": "Whirlpool dishwasher 7-1 error: the water did not heat",
    "shortTitle": "Whirlpool dishwasher 7-1 error",
    "summary": "The 7-1 display on many Whirlpool dishwashers indicates that the water did not heat. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 7-1 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does 7-1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 7-1 indicates that the water did not heat. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 7-1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "7-1",
      "the water did not heat",
      "heater",
      "7-1"
    ],
    "featured": false,
    "errorCode": "7-1",
    "aliases": [
      "7-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-8-1-error",
    "title": "Whirlpool dishwasher 8-1 error: the dishwasher is draining too slowly",
    "shortTitle": "Whirlpool dishwasher 8-1 error",
    "summary": "The 8-1 display on many Whirlpool dishwashers indicates that the dishwasher is draining too slowly. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 8-1 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does 8-1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 8-1 indicates that the dishwasher is draining too slowly. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 8-1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "8-1",
      "the dishwasher is draining too slowly",
      "drain",
      "8-1"
    ],
    "featured": false,
    "errorCode": "8-1",
    "aliases": [
      "8-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "whirlpool-dishwasher-9-1-error",
    "title": "Whirlpool dishwasher 9-1 error: the diverter position cannot be confirmed",
    "shortTitle": "Whirlpool dishwasher 9-1 error",
    "summary": "The 9-1 display on many Whirlpool dishwashers indicates that the diverter position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "Whirlpool",
    "brandSlug": "whirlpool",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 9-1 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does 9-1 mean on a Whirlpool dishwasher?",
        "answer": "On many model families, 9-1 indicates that the diverter position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 9-1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "whirlpool",
      "dishwasher",
      "dishwasher",
      "9-1",
      "the diverter position cannot be confirmed",
      "position",
      "9-1"
    ],
    "featured": false,
    "errorCode": "9-1",
    "aliases": [
      "9-1"
    ],
    "appliesTo": "Selected Whirlpool dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "Whirlpool Product Help",
        "url": "https://producthelp.whirlpool.com/"
      },
      {
        "label": "Whirlpool manuals",
        "url": "https://www.whirlpool.com/services/manuals.html"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c1-error",
    "title": "GE Appliances dishwasher C1 error: the drain time exceeded the limit",
    "shortTitle": "GE Appliances dishwasher C1 error",
    "summary": "The C1 display on many GE Appliances dishwashers indicates that the drain time exceeded the limit. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C1 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does C1 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C1 indicates that the drain time exceeded the limit. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C1 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c1",
      "the drain time exceeded the limit",
      "drain",
      "c1"
    ],
    "featured": false,
    "errorCode": "C1",
    "aliases": [
      "C1"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c2-error",
    "title": "GE Appliances dishwasher C2 error: the drain cycle is taking too long",
    "shortTitle": "GE Appliances dishwasher C2 error",
    "summary": "The C2 display on many GE Appliances dishwashers indicates that the drain cycle is taking too long. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C2 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does C2 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C2 indicates that the drain cycle is taking too long. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C2 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c2",
      "the drain cycle is taking too long",
      "drain",
      "c2"
    ],
    "featured": false,
    "errorCode": "C2",
    "aliases": [
      "C2"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c3-error",
    "title": "GE Appliances dishwasher C3 error: the dishwasher is not draining",
    "shortTitle": "GE Appliances dishwasher C3 error",
    "summary": "The C3 display on many GE Appliances dishwashers indicates that the dishwasher is not draining. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C3 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does C3 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C3 indicates that the dishwasher is not draining. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C3 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c3",
      "the dishwasher is not draining",
      "drain",
      "c3"
    ],
    "featured": false,
    "errorCode": "C3",
    "aliases": [
      "C3"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c4-error",
    "title": "GE Appliances dishwasher C4 error: the dishwasher detected an overfill",
    "shortTitle": "GE Appliances dishwasher C4 error",
    "summary": "The C4 display on many GE Appliances dishwashers indicates that the dishwasher detected an overfill. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C4 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does C4 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C4 indicates that the dishwasher detected an overfill. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C4 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c4",
      "the dishwasher detected an overfill",
      "overflow",
      "c4"
    ],
    "featured": false,
    "errorCode": "C4",
    "aliases": [
      "C4"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c5-error",
    "title": "GE Appliances dishwasher C5 error: the dishwasher did not receive enough water",
    "shortTitle": "GE Appliances dishwasher C5 error",
    "summary": "The C5 display on many GE Appliances dishwashers indicates that the dishwasher did not receive enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C5 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does C5 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C5 indicates that the dishwasher did not receive enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C5 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c5",
      "the dishwasher did not receive enough water",
      "inlet",
      "c5"
    ],
    "featured": false,
    "errorCode": "C5",
    "aliases": [
      "C5"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c6-error",
    "title": "GE Appliances dishwasher C6 error: the water temperature is too low",
    "shortTitle": "GE Appliances dishwasher C6 error",
    "summary": "The C6 display on many GE Appliances dishwashers indicates that the water temperature is too low. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Heater is not reaching expected temperature",
      "Temperature sensor is inaccurate",
      "Scale or poor water flow affects heating",
      "Heater relay, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Record the cycle stage",
        "detail": "Note whether the code appears during washing or drying.",
        "level": "safe"
      },
      {
        "title": "Check supply temperature",
        "detail": "Confirm installation meets the manual.",
        "level": "safe"
      },
      {
        "title": "Use approved descaling only",
        "detail": "Do not mix cleaning chemicals.",
        "level": "caution"
      },
      {
        "title": "Stop before electrical heater tests",
        "detail": "Resistance and voltage tests need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C6 appears?",
    "observations": [
      {
        "label": "Water stays cold",
        "advice": "Heater, sensor, relay, or power path may be faulty."
      },
      {
        "label": "Appliance overheats",
        "advice": "Disconnect power and stop using it."
      },
      {
        "label": "Only drying is affected",
        "advice": "Focus on drying heat, airflow, fan, or temperature sensing."
      }
    ],
    "whenToStop": [
      "Burning smell, smoke, or excessive heat",
      "Breaker trips repeatedly",
      "Heater wiring must be tested"
    ],
    "faq": [
      {
        "question": "What does C6 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C6 indicates that the water temperature is too low. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C6 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c6",
      "the water temperature is too low",
      "heater",
      "c6"
    ],
    "featured": false,
    "errorCode": "C6",
    "aliases": [
      "C6"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c7-error",
    "title": "GE Appliances dishwasher C7 error: the temperature sensor or heater is abnormal",
    "shortTitle": "GE Appliances dishwasher C7 error",
    "summary": "The C7 display on many GE Appliances dishwashers indicates that the temperature sensor or heater is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Sensor signal is outside range",
      "Connector or wiring is intermittent",
      "The measured condition is genuinely abnormal",
      "Control cannot interpret the signal"
    ],
    "quickChecks": [
      {
        "title": "Record exact conditions",
        "detail": "Note cycle stage, load, and whether the code is intermittent.",
        "level": "safe"
      },
      {
        "title": "Power-cycle once",
        "detail": "Disconnect power briefly and test one normal cycle.",
        "level": "safe"
      },
      {
        "title": "Check only accessible causes",
        "detail": "Clean filters, level the unit, and correct installation.",
        "level": "caution"
      },
      {
        "title": "Use model-specific service",
        "detail": "Sensor and wiring tests require qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C7 appears?",
    "observations": [
      {
        "label": "Code appears at startup",
        "advice": "An open, shorted, or disconnected sensor is possible."
      },
      {
        "label": "Code appears under one condition",
        "advice": "The measured condition may actually be abnormal."
      },
      {
        "label": "Code is intermittent",
        "advice": "Vibration, moisture, connector, or sensor wear may be involved."
      }
    ],
    "whenToStop": [
      "The code involves heat or leakage",
      "Internal wiring must be accessed",
      "Appliance behaves unpredictably"
    ],
    "faq": [
      {
        "question": "What does C7 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C7 indicates that the temperature sensor or heater is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C7 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c7",
      "the temperature sensor or heater is abnormal",
      "sensor",
      "c7"
    ],
    "featured": false,
    "errorCode": "C7",
    "aliases": [
      "C7"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-c8-error",
    "title": "GE Appliances dishwasher C8 error: the detergent dispenser did not open",
    "shortTitle": "GE Appliances dishwasher C8 error",
    "summary": "The C8 display on many GE Appliances dishwashers indicates that the detergent dispenser did not open. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when C8 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does C8 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, C8 indicates that the detergent dispenser did not open. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear C8 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "c8",
      "the detergent dispenser did not open",
      "position",
      "c8"
    ],
    "featured": false,
    "errorCode": "C8",
    "aliases": [
      "C8"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-h2o-error",
    "title": "GE Appliances dishwasher H2O error: the dishwasher is not receiving water",
    "shortTitle": "GE Appliances dishwasher H2O error",
    "summary": "The H2O display on many GE Appliances dishwashers indicates that the dishwasher is not receiving water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when H2O appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does H2O mean on a GE Appliances dishwasher?",
        "answer": "On many model families, H2O indicates that the dishwasher is not receiving water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear H2O by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "h2o",
      "the dishwasher is not receiving water",
      "inlet",
      "h2o"
    ],
    "featured": false,
    "errorCode": "H2O",
    "aliases": [
      "H2O"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-pf-error",
    "title": "GE Appliances dishwasher PF error: power was interrupted",
    "shortTitle": "GE Appliances dishwasher PF error",
    "summary": "The PF display on many GE Appliances dishwashers indicates that power was interrupted. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Power was interrupted or unstable",
      "Outlet, breaker, or plug is loose",
      "Control did not restart cleanly",
      "Supply voltage is outside specification"
    ],
    "quickChecks": [
      {
        "title": "Check breaker and outlet",
        "detail": "Use the required dedicated supply and no extension cord.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "Wait several minutes before reconnecting once.",
        "level": "safe"
      },
      {
        "title": "Look for outage signs",
        "detail": "Check clocks and nearby appliances.",
        "level": "safe"
      },
      {
        "title": "Arrange supply testing if repeated",
        "detail": "A qualified electrician should test voltage and connections.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when PF appears?",
    "observations": [
      {
        "label": "Code followed an outage",
        "advice": "Restart only after stable power returns."
      },
      {
        "label": "Only one outlet causes it",
        "advice": "The branch circuit or outlet may need inspection."
      },
      {
        "label": "Appliance repeatedly resets",
        "advice": "Stop until supply and controls are checked."
      }
    ],
    "whenToStop": [
      "Plug, outlet, or cord is hot",
      "Breaker trips repeatedly",
      "Live voltage testing is required"
    ],
    "faq": [
      {
        "question": "What does PF mean on a GE Appliances dishwasher?",
        "answer": "On many model families, PF indicates that power was interrupted. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear PF by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "pf",
      "power was interrupted",
      "power",
      "pf"
    ],
    "featured": false,
    "errorCode": "PF",
    "aliases": [
      "PF"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-1h-error",
    "title": "GE Appliances dishwasher 1H error: a delay-start period is active",
    "shortTitle": "GE Appliances dishwasher 1H error",
    "summary": "The 1H display on many GE Appliances dishwashers indicates that a delay-start period is active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "A setup, delay, test, or interrupted state is active",
      "A button combination changed the operating mode",
      "Cycle or setup was not completed",
      "Control did not return to normal mode"
    ],
    "quickChecks": [
      {
        "title": "Read the display as a status first",
        "detail": "Not every code is a hardware failure.",
        "level": "safe"
      },
      {
        "title": "Use the documented cancel sequence",
        "detail": "Follow the model manual only.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly if allowed",
        "detail": "Confirm the normal home screen returns.",
        "level": "safe"
      },
      {
        "title": "Avoid undocumented service modes",
        "detail": "They can run heaters, pumps, or motors unexpectedly.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 1H appears?",
    "observations": [
      {
        "label": "Display returns to normal",
        "advice": "No further action is usually needed."
      },
      {
        "label": "State returns every startup",
        "advice": "A stuck button or control fault may be involved."
      },
      {
        "label": "Components run unexpectedly",
        "advice": "Disconnect power and arrange service."
      }
    ],
    "whenToStop": [
      "Motors or heaters run unexpectedly",
      "The appliance contains water or a load",
      "Undocumented settings would be changed"
    ],
    "faq": [
      {
        "question": "What does 1H mean on a GE Appliances dishwasher?",
        "answer": "On many model families, 1H indicates that a delay-start period is active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 1H by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "1h",
      "a delay-start period is active",
      "status",
      "1h"
    ],
    "featured": false,
    "errorCode": "1H",
    "aliases": [
      "1H"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-999-error",
    "title": "GE Appliances dishwasher 999 error: the control needs a reset or service check",
    "shortTitle": "GE Appliances dishwasher 999 error",
    "summary": "The 999 display on many GE Appliances dishwashers indicates that the control needs a reset or service check. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when 999 appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does 999 mean on a GE Appliances dishwasher?",
        "answer": "On many model families, 999 indicates that the control needs a reset or service check. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear 999 by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "999",
      "the control needs a reset or service check",
      "control",
      "999"
    ],
    "featured": false,
    "errorCode": "999",
    "aliases": [
      "999"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-ftd-error",
    "title": "GE Appliances dishwasher FTD error: the dishwasher failed to drain in time",
    "shortTitle": "GE Appliances dishwasher FTD error",
    "summary": "The FTD display on many GE Appliances dishwashers indicates that the dishwasher failed to drain in time. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FTD appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does FTD mean on a GE Appliances dishwasher?",
        "answer": "On many model families, FTD indicates that the dishwasher failed to drain in time. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FTD by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "ftd",
      "the dishwasher failed to drain in time",
      "drain",
      "ftd"
    ],
    "featured": false,
    "errorCode": "FTD",
    "aliases": [
      "FTD"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-fq-error",
    "title": "GE Appliances dishwasher FQ error: the control detected an internal fault",
    "shortTitle": "GE Appliances dishwasher FQ error",
    "summary": "The FQ display on many GE Appliances dishwashers indicates that the control detected an internal fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Internal modules lost communication",
      "Connector or wiring is damaged",
      "Power interruption affected startup",
      "A control board or inverter failed"
    ],
    "quickChecks": [
      {
        "title": "Power down completely",
        "detail": "Disconnect power for several minutes, then restore once.",
        "level": "safe"
      },
      {
        "title": "Note recent outages",
        "detail": "Surges or unstable power can trigger control faults.",
        "level": "safe"
      },
      {
        "title": "Check only external connections",
        "detail": "Do not open control panels.",
        "level": "caution"
      },
      {
        "title": "Arrange service if it returns",
        "detail": "Repeated control faults require model-specific diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when FQ appears?",
    "observations": [
      {
        "label": "Code clears after one restart",
        "advice": "Monitor and check power stability."
      },
      {
        "label": "Code returns immediately",
        "advice": "A module, harness, or power supply may be faulty."
      },
      {
        "label": "Controls flicker or reset",
        "advice": "Power quality or control supply may be involved."
      }
    ],
    "whenToStop": [
      "Visible electrical damage",
      "Repeated resets or breaker trips",
      "Control-board access is required"
    ],
    "faq": [
      {
        "question": "What does FQ mean on a GE Appliances dishwasher?",
        "answer": "On many model families, FQ indicates that the control detected an internal fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear FQ by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "fq",
      "the control detected an internal fault",
      "control",
      "fq"
    ],
    "featured": false,
    "errorCode": "FQ",
    "aliases": [
      "FQ"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-dishwasher-loc-error",
    "title": "GE Appliances dishwasher LOC error: control lock is enabled",
    "shortTitle": "GE Appliances dishwasher LOC error",
    "summary": "The LOC display on many GE Appliances dishwashers indicates that control lock is enabled. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Dishwasher",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Control lock is enabled",
      "The lock control must be held for a set time",
      "Touch panel is not registering",
      "Control is stuck in a locked state"
    ],
    "quickChecks": [
      {
        "title": "Find the lock symbol",
        "detail": "Look for Control Lock, Child Lock, or a padlock.",
        "level": "safe"
      },
      {
        "title": "Hold the marked control",
        "detail": "Use the duration printed on the panel or manual.",
        "level": "safe"
      },
      {
        "title": "Dry and clean the panel",
        "detail": "Moisture can block touch input.",
        "level": "safe"
      },
      {
        "title": "Power-cycle only if documented",
        "detail": "A persistent lock may require service.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What happens when LOC appears?",
    "observations": [
      {
        "label": "Padlock light is on",
        "advice": "This is usually a setting, not a hardware failure."
      },
      {
        "label": "Lock clears then returns",
        "advice": "A button may be held, wet, or failing."
      },
      {
        "label": "No controls respond",
        "advice": "Confirm power and model-specific lock instructions."
      }
    ],
    "whenToStop": [
      "Panel is cracked, wet inside, or hot",
      "A button remains stuck",
      "Internal control access is needed"
    ],
    "faq": [
      {
        "question": "What does LOC mean on a GE Appliances dishwasher?",
        "answer": "On many model families, LOC indicates that control lock is enabled. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear LOC by unplugging the dishwasher?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "dishwasher",
      "dishwasher",
      "loc",
      "control lock is enabled",
      "lock",
      "loc"
    ],
    "featured": false,
    "errorCode": "LOC",
    "aliases": [
      "LOC"
    ],
    "appliesTo": "Selected GE Appliances dishwasher model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-h2o-supply-error",
    "title": "GE Appliances washer H2O Supply error: the washer is not receiving enough water",
    "shortTitle": "GE Appliances washer H2O Supply error",
    "summary": "The H2O Supply display on many GE Appliances washing machines indicates that the washer is not receiving enough water. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when H2O Supply appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does H2O Supply mean on a GE Appliances washer?",
        "answer": "On many model families, H2O Supply indicates that the washer is not receiving enough water. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear H2O Supply by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "h2o supply",
      "the washer is not receiving enough water",
      "inlet",
      "h2o supply",
      "h2o"
    ],
    "featured": false,
    "errorCode": "H2O Supply",
    "aliases": [
      "H2O Supply",
      "H2O"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e22-error",
    "title": "GE Appliances washer E22 error: the washer did not fill in time",
    "shortTitle": "GE Appliances washer E22 error",
    "summary": "The E22 display on many GE Appliances washing machines indicates that the washer did not fill in time. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Supply valve is closed or partly open",
      "Inlet hose is kinked, frozen, or restricted",
      "Inlet screen is blocked",
      "Water pressure or inlet valve is abnormal"
    ],
    "quickChecks": [
      {
        "title": "Confirm household water flow",
        "detail": "Open the supply valve fully and verify a nearby tap has normal flow.",
        "level": "safe"
      },
      {
        "title": "Inspect inlet hoses",
        "detail": "Straighten kinks and check for freezing, crushing, or reversed connections.",
        "level": "safe"
      },
      {
        "title": "Check user-accessible inlet screens",
        "detail": "Turn off water first and follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before valve or wiring work",
        "detail": "Internal inlet-valve and electrical diagnosis requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E22 appears?",
    "observations": [
      {
        "label": "No water enters",
        "advice": "Focus on the supply, hose, screen, pressure, and inlet valve."
      },
      {
        "label": "Water enters slowly",
        "advice": "A partly closed valve, kink, low pressure, or restricted screen is likely."
      },
      {
        "label": "Water enters normally",
        "advice": "A flow, pressure, sensor, or control fault may need service."
      }
    ],
    "whenToStop": [
      "Water leaks at a hose or valve",
      "Water continues entering with power off",
      "Internal electrical testing is required"
    ],
    "faq": [
      {
        "question": "What does E22 mean on a GE Appliances washer?",
        "answer": "On many model families, E22 indicates that the washer did not fill in time. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E22 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e22",
      "the washer did not fill in time",
      "inlet",
      "e22"
    ],
    "featured": false,
    "errorCode": "E22",
    "aliases": [
      "E22"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e23-error",
    "title": "GE Appliances washer E23 error: the flood-protection system activated",
    "shortTitle": "GE Appliances washer E23 error",
    "summary": "The E23 display on many GE Appliances washing machines indicates that the flood-protection system activated. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Inlet valve is not closing",
      "Water-level sensor is abnormal",
      "Drain path is restricted",
      "Excess suds affect level sensing"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and close water",
        "detail": "Prevent additional filling.",
        "level": "caution"
      },
      {
        "title": "Check whether filling stops when off",
        "detail": "If it continues, keep the supply closed.",
        "level": "caution"
      },
      {
        "title": "Check for suds and slow draining",
        "detail": "Both can appear as an overfill.",
        "level": "safe"
      },
      {
        "title": "Do not bypass protection",
        "detail": "Float and level circuits require proper diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E23 appears?",
    "observations": [
      {
        "label": "Water continues entering unplugged",
        "advice": "The inlet valve may be mechanically stuck."
      },
      {
        "label": "Water level looks normal",
        "advice": "A float, pressure sensor, hose, or control may be wrong."
      },
      {
        "label": "The tub is full of foam",
        "advice": "Allow foam to settle and correct detergent use."
      }
    ],
    "whenToStop": [
      "Water is rising or overflowing",
      "Filling continues with power disconnected",
      "Water reached electrical parts"
    ],
    "faq": [
      {
        "question": "What does E23 mean on a GE Appliances washer?",
        "answer": "On many model families, E23 indicates that the flood-protection system activated. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E23 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e23",
      "the flood-protection system activated",
      "overflow",
      "e23"
    ],
    "featured": false,
    "errorCode": "E23",
    "aliases": [
      "E23"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e30-error",
    "title": "GE Appliances washer E30 error: the washer cannot drain",
    "shortTitle": "GE Appliances washer E30 error",
    "summary": "The E30 display on many GE Appliances washing machines indicates that the washer cannot drain. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E30 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E30 mean on a GE Appliances washer?",
        "answer": "On many model families, E30 indicates that the washer cannot drain. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E30 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e30",
      "the washer cannot drain",
      "drain",
      "e30"
    ],
    "featured": false,
    "errorCode": "E30",
    "aliases": [
      "E30"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e31-error",
    "title": "GE Appliances washer E31 error: the drain time exceeded the limit",
    "shortTitle": "GE Appliances washer E31 error",
    "summary": "The E31 display on many GE Appliances washing machines indicates that the drain time exceeded the limit. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Drain hose is kinked or blocked",
      "Filter or sump contains debris",
      "Drain pump is jammed or not running",
      "Level sensing still detects retained water"
    ],
    "quickChecks": [
      {
        "title": "Run one drain attempt",
        "detail": "Listen for the pump and note whether any water moves.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the sink or standpipe connection.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power and prepare for retained water.",
        "level": "caution"
      },
      {
        "title": "Stop before pump or wiring work",
        "detail": "Internal pump and control diagnosis requires service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E31 appears?",
    "observations": [
      {
        "label": "Pump hums but water does not move",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "Pump is silent",
        "advice": "The pump, wiring, control, or interlock may need diagnosis."
      },
      {
        "label": "Draining is slow",
        "advice": "Check the filter, hose, sink connection, and installation height."
      }
    ],
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned",
      "Internal disassembly is needed"
    ],
    "faq": [
      {
        "question": "What does E31 mean on a GE Appliances washer?",
        "answer": "On many model families, E31 indicates that the drain time exceeded the limit. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E31 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e31",
      "the drain time exceeded the limit",
      "drain",
      "e31"
    ],
    "featured": false,
    "errorCode": "E31",
    "aliases": [
      "E31"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e38-error",
    "title": "GE Appliances washer E38 error: the dispenser system is abnormal",
    "shortTitle": "GE Appliances washer E38 error",
    "summary": "The E38 display on many GE Appliances washing machines indicates that the dispenser system is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E38 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does E38 mean on a GE Appliances washer?",
        "answer": "On many model families, E38 indicates that the dispenser system is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E38 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e38",
      "the dispenser system is abnormal",
      "position",
      "e38"
    ],
    "featured": false,
    "errorCode": "E38",
    "aliases": [
      "E38"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e39-error",
    "title": "GE Appliances washer E39 error: the dispenser position cannot be confirmed",
    "shortTitle": "GE Appliances washer E39 error",
    "summary": "The E39 display on many GE Appliances washing machines indicates that the dispenser position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Actuator cannot reach its expected position",
      "Foreign object or jam prevents movement",
      "Position feedback is abnormal",
      "Actuator or control needs service"
    ],
    "quickChecks": [
      {
        "title": "Cancel and restart once",
        "detail": "A clean restart may let the mechanism re-home.",
        "level": "safe"
      },
      {
        "title": "Remove only accessible debris",
        "detail": "Do not force internal mechanisms.",
        "level": "caution"
      },
      {
        "title": "Listen for clicking or humming",
        "detail": "Repeated attempts may indicate a jam.",
        "level": "safe"
      },
      {
        "title": "Arrange model-specific service",
        "detail": "Internal actuators and sensors require access.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E39 appears?",
    "observations": [
      {
        "label": "Repeated clicking",
        "advice": "The mechanism may be jammed."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, or feedback is likely."
      },
      {
        "label": "Cycle works intermittently",
        "advice": "Wear, alignment, or a weak actuator may be involved."
      }
    ],
    "whenToStop": [
      "Mechanism would need forcing",
      "Grinding or overheating occurs",
      "Internal access is required"
    ],
    "faq": [
      {
        "question": "What does E39 mean on a GE Appliances washer?",
        "answer": "On many model families, E39 indicates that the dispenser position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E39 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e39",
      "the dispenser position cannot be confirmed",
      "position",
      "e39"
    ],
    "featured": false,
    "errorCode": "E39",
    "aliases": [
      "E39"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e42-error",
    "title": "GE Appliances washer E42 error: the door-lock circuit cannot confirm a lock",
    "shortTitle": "GE Appliances washer E42 error",
    "summary": "The E42 display on many GE Appliances washing machines indicates that the door-lock circuit cannot confirm a lock. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E42 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E42 mean on a GE Appliances washer?",
        "answer": "On many model families, E42 indicates that the door-lock circuit cannot confirm a lock. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E42 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e42",
      "the door-lock circuit cannot confirm a lock",
      "door",
      "e42"
    ],
    "featured": false,
    "errorCode": "E42",
    "aliases": [
      "E42"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e43-error",
    "title": "GE Appliances washer E43 error: the control cannot unlock the door",
    "shortTitle": "GE Appliances washer E43 error",
    "summary": "The E43 display on many GE Appliances washing machines indicates that the control cannot unlock the door. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E43 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E43 mean on a GE Appliances washer?",
        "answer": "On many model families, E43 indicates that the control cannot unlock the door. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E43 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e43",
      "the control cannot unlock the door",
      "door",
      "e43"
    ],
    "featured": false,
    "errorCode": "E43",
    "aliases": [
      "E43"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e45-error",
    "title": "GE Appliances washer E45 error: the door-switch signal is abnormal",
    "shortTitle": "GE Appliances washer E45 error",
    "summary": "The E45 display on many GE Appliances washing machines indicates that the door-switch signal is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E45 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E45 mean on a GE Appliances washer?",
        "answer": "On many model families, E45 indicates that the door-switch signal is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E45 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e45",
      "the door-switch signal is abnormal",
      "door",
      "e45"
    ],
    "featured": false,
    "errorCode": "E45",
    "aliases": [
      "E45"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e46-error",
    "title": "GE Appliances washer E46 error: the door-lock feedback is inconsistent",
    "shortTitle": "GE Appliances washer E46 error",
    "summary": "The E46 display on many GE Appliances washing machines indicates that the door-lock feedback is inconsistent. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E46 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E46 mean on a GE Appliances washer?",
        "answer": "On many model families, E46 indicates that the door-lock feedback is inconsistent. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E46 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e46",
      "the door-lock feedback is inconsistent",
      "door",
      "e46"
    ],
    "featured": false,
    "errorCode": "E46",
    "aliases": [
      "E46"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e47-error",
    "title": "GE Appliances washer E47 error: the door-lock circuit is abnormal",
    "shortTitle": "GE Appliances washer E47 error",
    "summary": "The E47 display on many GE Appliances washing machines indicates that the door-lock circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E47 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E47 mean on a GE Appliances washer?",
        "answer": "On many model families, E47 indicates that the door-lock circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E47 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e47",
      "the door-lock circuit is abnormal",
      "door",
      "e47"
    ],
    "featured": false,
    "errorCode": "E47",
    "aliases": [
      "E47"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e48-error",
    "title": "GE Appliances washer E48 error: the door-lock position cannot be confirmed",
    "shortTitle": "GE Appliances washer E48 error",
    "summary": "The E48 display on many GE Appliances washing machines indicates that the door-lock position cannot be confirmed. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E48 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E48 mean on a GE Appliances washer?",
        "answer": "On many model families, E48 indicates that the door-lock position cannot be confirmed. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E48 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e48",
      "the door-lock position cannot be confirmed",
      "door",
      "e48"
    ],
    "featured": false,
    "errorCode": "E48",
    "aliases": [
      "E48"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e49-error",
    "title": "GE Appliances washer E49 error: the door-lock circuit remains active",
    "shortTitle": "GE Appliances washer E49 error",
    "summary": "The E49 display on many GE Appliances washing machines indicates that the door-lock circuit remains active. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E49 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E49 mean on a GE Appliances washer?",
        "answer": "On many model families, E49 indicates that the door-lock circuit remains active. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E49 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e49",
      "the door-lock circuit remains active",
      "door",
      "e49"
    ],
    "featured": false,
    "errorCode": "E49",
    "aliases": [
      "E49"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e52-error",
    "title": "GE Appliances washer E52 error: the motor failed to rotate",
    "shortTitle": "GE Appliances washer E52 error",
    "summary": "The E52 display on many GE Appliances washing machines indicates that the motor failed to rotate. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E52 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E52 mean on a GE Appliances washer?",
        "answer": "On many model families, E52 indicates that the motor failed to rotate. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E52 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e52",
      "the motor failed to rotate",
      "motor",
      "e52"
    ],
    "featured": false,
    "errorCode": "E52",
    "aliases": [
      "E52"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e53-error",
    "title": "GE Appliances washer E53 error: the motor-control circuit is abnormal",
    "shortTitle": "GE Appliances washer E53 error",
    "summary": "The E53 display on many GE Appliances washing machines indicates that the motor-control circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E53 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E53 mean on a GE Appliances washer?",
        "answer": "On many model families, E53 indicates that the motor-control circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E53 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e53",
      "the motor-control circuit is abnormal",
      "motor",
      "e53"
    ],
    "featured": false,
    "errorCode": "E53",
    "aliases": [
      "E53"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e54-error",
    "title": "GE Appliances washer E54 error: the motor current is abnormal",
    "shortTitle": "GE Appliances washer E54 error",
    "summary": "The E54 display on many GE Appliances washing machines indicates that the motor current is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E54 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E54 mean on a GE Appliances washer?",
        "answer": "On many model families, E54 indicates that the motor current is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E54 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e54",
      "the motor current is abnormal",
      "motor",
      "e54"
    ],
    "featured": false,
    "errorCode": "E54",
    "aliases": [
      "E54"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e57-error",
    "title": "GE Appliances washer E57 error: the inverter detected a fault",
    "shortTitle": "GE Appliances washer E57 error",
    "summary": "The E57 display on many GE Appliances washing machines indicates that the inverter detected a fault. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E57 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E57 mean on a GE Appliances washer?",
        "answer": "On many model families, E57 indicates that the inverter detected a fault. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E57 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e57",
      "the inverter detected a fault",
      "motor",
      "e57"
    ],
    "featured": false,
    "errorCode": "E57",
    "aliases": [
      "E57"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e58-error",
    "title": "GE Appliances washer E58 error: the motor current is too high",
    "shortTitle": "GE Appliances washer E58 error",
    "summary": "The E58 display on many GE Appliances washing machines indicates that the motor current is too high. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Motor or pump is overloaded or blocked",
      "Foreign object prevents movement",
      "Speed or position feedback is missing",
      "Inverter, wiring, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Remove excess load or accessible debris",
        "detail": "Do not force moving parts.",
        "level": "safe"
      },
      {
        "title": "Listen during one short test",
        "detail": "Note humming, clicking, grinding, or silence.",
        "level": "safe"
      },
      {
        "title": "Allow a brief cool-down",
        "detail": "An overloaded motor may reset after cooling.",
        "level": "safe"
      },
      {
        "title": "Stop before motor or inverter work",
        "detail": "Internal drive components need qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E58 appears?",
    "observations": [
      {
        "label": "Motor hums without movement",
        "advice": "A jam, overload, or failed drive is possible."
      },
      {
        "label": "Works empty but not loaded",
        "advice": "Load, friction, suspension, or weak drive may be involved."
      },
      {
        "label": "Code appears immediately",
        "advice": "Sensor, wiring, inverter, or control is more likely."
      }
    ],
    "whenToStop": [
      "Burning electrical smell",
      "Motor or wiring becomes hot",
      "Breaker trips or movement is seized"
    ],
    "faq": [
      {
        "question": "What does E58 mean on a GE Appliances washer?",
        "answer": "On many model families, E58 indicates that the motor current is too high. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E58 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e58",
      "the motor current is too high",
      "motor",
      "e58"
    ],
    "featured": false,
    "errorCode": "E58",
    "aliases": [
      "E58"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  },
  {
    "slug": "ge-appliances-washer-e60-error",
    "title": "GE Appliances washer E60 error: the door-lock or control circuit is abnormal",
    "shortTitle": "GE Appliances washer E60 error",
    "summary": "The E60 display on many GE Appliances washing machines indicates that the door-lock or control circuit is abnormal. Codes can vary by model, so match the full model number to the official manual before ordering parts.",
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "brand": "GE Appliances",
    "brandSlug": "ge-appliances",
    "device": "Washing machine",
    "updated": "2026-07-16",
    "readTime": 4,
    "likelyCauses": [
      "Door or lid is not fully closed",
      "Laundry or debris is trapped at the latch",
      "Hinge or latch alignment is off",
      "Lock switch or control cannot confirm closure"
    ],
    "quickChecks": [
      {
        "title": "Open and close firmly",
        "detail": "Remove trapped fabric and close without slamming.",
        "level": "safe"
      },
      {
        "title": "Clean accessible latch surfaces",
        "detail": "Remove detergent residue and debris.",
        "level": "safe"
      },
      {
        "title": "Wait for safety unlock",
        "detail": "Allow water level and temperature to fall before retrying.",
        "level": "safe"
      },
      {
        "title": "Do not force the lock",
        "detail": "Broken handles, locks, and internal circuits need service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when E60 appears?",
    "observations": [
      {
        "label": "Door closes but cycle will not start",
        "advice": "The latch may not reach or confirm the locked position."
      },
      {
        "label": "Door is physically jammed",
        "advice": "Water, heat, or a failed lock may prevent release."
      },
      {
        "label": "Code is intermittent",
        "advice": "Check alignment, hinge movement, vibration, and debris."
      }
    ],
    "whenToStop": [
      "Door or latch is cracked",
      "Water is above the opening",
      "The lock smells hot or is visibly damaged"
    ],
    "faq": [
      {
        "question": "What does E60 mean on a GE Appliances washer?",
        "answer": "On many model families, E60 indicates that the door-lock or control circuit is abnormal. Confirm the exact model and region because the same display can be used differently."
      },
      {
        "question": "Can I clear E60 by unplugging the washer?",
        "answer": "A short power reset may clear a temporary state, but it will not fix a blocked hose, leak, failed sensor, motor, heater, or wiring fault. Stop if the code returns."
      },
      {
        "question": "Should I replace a part based only on the code?",
        "answer": "No. A code identifies a system or condition, not always the failed component. Complete safe external checks and use the model-specific manual or qualified service."
      }
    ],
    "tags": [
      "ge appliances",
      "washing machine",
      "washer",
      "e60",
      "the door-lock or control circuit is abnormal",
      "door",
      "e60"
    ],
    "featured": false,
    "errorCode": "E60",
    "aliases": [
      "E60"
    ],
    "appliesTo": "Selected GE Appliances washing machine model families",
    "modelNote": "Error codes can differ by model, market, and production year. Match the full model number to the official manual before using service procedures.",
    "sources": [
      {
        "label": "GE Appliances Support",
        "url": "https://www.geappliances.com/ge/service-and-support/"
      },
      {
        "label": "GE Appliances manuals",
        "url": "https://www.geappliances.com/ge/service-and-support/literature.htm"
      }
    ],
    "contentKind": "error-code"
  }
];
