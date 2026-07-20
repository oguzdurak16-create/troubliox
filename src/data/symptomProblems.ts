import type { Problem } from "./problems";

// Hand-authored symptom guides that complement the model-dependent error-code library.
export const symptomProblems: Problem[] = [
  {
    "slug": "washing-machine-not-draining",
    "title": "Washing machine is not draining",
    "shortTitle": "Washing machine will not drain",
    "summary": "A blocked filter or hose, a jammed pump, an installation problem, or incorrect cycle behavior can leave water in a washing machine after the cycle ends.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "The pump hums but water does not move",
        "advice": "A blockage, trapped object, or restricted hose is more likely than a control problem."
      },
      {
        "label": "The pump is silent",
        "advice": "The pump, wiring, lid or door interlock, or control may need diagnosis."
      },
      {
        "label": "Water drains very slowly",
        "advice": "Check the filter, hose routing, standpipe height, and household drain connection."
      }
    ],
    "faq": [
      {
        "question": "Why is there still water after a completed cycle?",
        "answer": "A partial blockage can let some water out while leaving enough behind to prevent a normal finish."
      },
      {
        "question": "Can I force the door open?",
        "answer": "No. If the washer still detects water, use the emergency-drain procedure in the model manual rather than forcing the lock."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "not draining",
      "water left",
      "drain pump"
    ],
    "featured": true,
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The drain hose is kinked, blocked, or installed too deeply",
      "The user-accessible pump filter is blocked",
      "The drain pump is jammed or has failed",
      "The washer still detects water because of a level-sensing problem"
    ],
    "quickChecks": [
      {
        "title": "Run one drain or spin cycle",
        "detail": "Listen for the pump and watch whether any water leaves through the drain hose.",
        "level": "safe"
      },
      {
        "title": "Inspect the drain hose",
        "detail": "Straighten kinks and check the standpipe or sink connection for a blockage.",
        "level": "safe"
      },
      {
        "title": "Clean the user-accessible filter",
        "detail": "Disconnect power first and prepare towels or a shallow container for retained water. Follow the model manual.",
        "level": "caution"
      },
      {
        "title": "Stop before internal pump testing",
        "detail": "Pump, wiring, and control-board checks require qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What do you hear during the drain stage?",
    "whenToStop": [
      "Water reaches electrical parts",
      "The pump smells burned or becomes unusually hot",
      "Internal disassembly or live electrical testing is required"
    ]
  },
  {
    "slug": "washing-machine-not-spinning",
    "title": "Washing machine is not spinning",
    "shortTitle": "Washing machine will not spin",
    "summary": "An unbalanced load, retained water, an unlocked door, a selected no-spin option, or a drive-system fault can prevent the final spin.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "The drum turns slowly and stops",
        "advice": "Load balance or retained water is likely."
      },
      {
        "label": "The door never locks",
        "advice": "Inspect the latch area for clothing and use the model manual; a lock fault may need service."
      },
      {
        "label": "The washer drains but the drum never moves",
        "advice": "A drive, motor, sensor, or control fault becomes more likely."
      }
    ],
    "faq": [
      {
        "question": "Can one heavy item stop the spin?",
        "answer": "Yes. A single towel, mat, or blanket can remain on one side and trigger repeated balance attempts."
      },
      {
        "question": "Why does the washer spin empty but not with clothes?",
        "answer": "That can point to load balance, overloading, a slipping drive component, or a weak motor system."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "not spinning",
      "unbalanced load",
      "spin cycle"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The load is too small, too large, or unevenly distributed",
      "The washer cannot drain completely",
      "The door or lid is not locking",
      "The selected program limits or disables spin",
      "A belt, motor, sensor, or control fault is present"
    ],
    "quickChecks": [
      {
        "title": "Redistribute the load",
        "detail": "Pause the cycle, separate tangled items, and remove excess weight if the drum is packed.",
        "level": "safe"
      },
      {
        "title": "Confirm the washer has drained",
        "detail": "Standing water usually prevents spin. Resolve drainage first.",
        "level": "safe"
      },
      {
        "title": "Check the cycle and spin setting",
        "detail": "Some delicate, rinse-hold, or no-spin programs intentionally limit drum speed.",
        "level": "safe"
      },
      {
        "title": "Stop before drive-system access",
        "detail": "Belts, motors, capacitors, and wiring require safe isolation and qualified diagnosis.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens when spin should begin?",
    "whenToStop": [
      "The drum bangs violently",
      "There is a burning smell or repeated breaker trip",
      "The drum is visibly loose or scraping"
    ]
  },
  {
    "slug": "washing-machine-leaking-from-bottom",
    "title": "Washing machine is leaking from the bottom",
    "shortTitle": "Washing machine leaks underneath",
    "summary": "A loose hose connection, overflowing detergent, a blocked drain path, a damaged door seal, or an internal hose or pump leak can produce water under a washer.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "During filling",
        "advice": "Focus on supply hoses, inlet connections, the dispenser, and excess water pressure."
      },
      {
        "label": "During draining",
        "advice": "Check the drain hose, filter cap, pump area, and household drain connection."
      },
      {
        "label": "At the front door",
        "advice": "Clean and inspect the gasket and glass for trapped fabric or damage."
      },
      {
        "label": "Even when the washer is off",
        "advice": "Close the water valves; an inlet valve or supply connection may be leaking."
      }
    ],
    "faq": [
      {
        "question": "Can too much detergent cause a leak?",
        "answer": "Yes. Excess foam can escape through vents, the dispenser, or the door area and look like a water-system leak."
      },
      {
        "question": "Should I run another cycle to find the leak?",
        "answer": "Only if the area is electrically safe and the leak was minor. Stop immediately if water approaches wiring or the leak is substantial."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "leaking",
      "water under washer",
      "hose"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "An inlet or drain hose connection is loose",
      "Too much or incorrect detergent is causing foam overflow",
      "The pump filter cap or emergency hose is not sealed",
      "The door gasket is damaged or contains trapped debris",
      "An internal hose, tub, valve, or pump is leaking"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and disconnect power",
        "detail": "Turn off the water supplies if the leak continues.",
        "level": "safe"
      },
      {
        "title": "Dry the floor and identify timing",
        "detail": "Note whether the leak starts while filling, washing, draining, or only after the cycle.",
        "level": "safe"
      },
      {
        "title": "Inspect visible hoses and caps",
        "detail": "Check accessible connections, the filter cap, and the emergency drain hose plug.",
        "level": "safe"
      },
      {
        "title": "Do not tip or open the cabinet",
        "detail": "Internal leak tracing should be performed by qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "When does the water appear?",
    "whenToStop": [
      "Water is near an outlet or electrical connection",
      "The leak continues with power off",
      "The cabinet must be removed to locate the source"
    ]
  },
  {
    "slug": "washing-machine-wont-start",
    "title": "Washing machine will not start",
    "shortTitle": "Washing machine will not start",
    "summary": "A power issue, an open or unlocked door, control lock, delayed start, water-supply problem, or failed control component can keep a washer from beginning a cycle.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "The display is completely dark",
        "advice": "Focus on the outlet, plug, breaker, power filter, and control power path."
      },
      {
        "label": "The panel lights but Start does nothing",
        "advice": "Check the door lock, control lock, delayed start, and required press-and-hold behavior."
      },
      {
        "label": "The washer starts then immediately stops",
        "advice": "Water supply, door-lock feedback, overload, or a detected fault may be interrupting the cycle."
      }
    ],
    "faq": [
      {
        "question": "Why must Start be held on some washers?",
        "answer": "Many controls require a two- or three-second press to prevent accidental starts."
      },
      {
        "question": "Can a closed door still fail the start check?",
        "answer": "Yes. The mechanical door may appear closed while the electrical lock or switch does not confirm it."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "wont start",
      "no power",
      "door lock"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The outlet, plug, or circuit is not supplying power",
      "The door or lid is not fully closed and locked",
      "Control lock or delay start is active",
      "The water supply is closed",
      "The control panel is frozen or a component has failed"
    ],
    "quickChecks": [
      {
        "title": "Confirm power at the outlet",
        "detail": "Test the outlet with another suitable device and reset a tripped breaker once.",
        "level": "safe"
      },
      {
        "title": "Close the door firmly",
        "detail": "Remove trapped clothing and listen for the latch or lock response.",
        "level": "safe"
      },
      {
        "title": "Cancel control lock and delay start",
        "detail": "Use the button sequence printed on the panel or in the model manual.",
        "level": "safe"
      },
      {
        "title": "Power reset once",
        "detail": "Disconnect power for two minutes, reconnect, and select a basic cycle.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What does the control panel do?",
    "whenToStop": [
      "The plug, outlet, or cord is hot or damaged",
      "The breaker trips again after one reset",
      "There is a burning smell or visible arcing"
    ]
  },
  {
    "slug": "washing-machine-door-wont-open",
    "title": "Washing machine door will not open",
    "shortTitle": "Washing machine door is locked",
    "summary": "A washer door normally remains locked while water is present, the drum is moving, the machine is hot, or the control has not completed its release sequence.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "Water is still inside",
        "advice": "Resolve drainage first. The lock is likely preventing a spill."
      },
      {
        "label": "No water, but the cycle just ended",
        "advice": "Wait for the safety delay and listen for the lock to release."
      },
      {
        "label": "The handle feels loose or cracked",
        "advice": "Stop pulling. The handle or latch may be damaged and forcing it can worsen the repair."
      }
    ],
    "faq": [
      {
        "question": "How long can a washer stay locked after a cycle?",
        "answer": "A normal delay is often a few minutes, but heat, retained water, or a fault can extend it."
      },
      {
        "question": "Can I pry the door open?",
        "answer": "No. This can break the handle, latch, seal, or glass and may release hot water."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "door locked",
      "door wont open",
      "retained water"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "Water remains in the drum",
      "The cycle has not fully ended or the drum is still moving",
      "The water or drum is still hot",
      "The door lock is mechanically or electrically stuck",
      "A control fault is keeping the lock energized"
    ],
    "quickChecks": [
      {
        "title": "Wait several minutes after the cycle",
        "detail": "Many locks release only after the drum stops and safety conditions are met.",
        "level": "safe"
      },
      {
        "title": "Run drain or cancel",
        "detail": "If water is visible, use the model-approved drain or cancel procedure.",
        "level": "safe"
      },
      {
        "title": "Disconnect power briefly",
        "detail": "After safe draining, unplug for two minutes and retry the normal release.",
        "level": "safe"
      },
      {
        "title": "Use only the documented emergency release",
        "detail": "Follow the exact model manual and prepare for retained water. Never force the door.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What is visible through the door?",
    "whenToStop": [
      "Water is above the bottom of the door",
      "The handle, glass, or hinge is damaged",
      "The emergency release is not described in the model manual"
    ]
  },
  {
    "slug": "washing-machine-shakes-during-spin",
    "title": "Washing machine shakes violently during spin",
    "shortTitle": "Washing machine shakes during spin",
    "summary": "An uneven load, incorrect leveling, transport bolts, a flexible floor, or worn suspension can cause excessive movement during high-speed spin.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "Only with certain loads",
        "advice": "Load balance and item type are the primary suspects."
      },
      {
        "label": "Even when empty",
        "advice": "Leveling, transport bolts, suspension, bearings, or drum support may be involved."
      },
      {
        "label": "The drum knocks by hand",
        "advice": "Stop using the washer and arrange mechanical inspection."
      }
    ],
    "faq": [
      {
        "question": "Can a perfectly level washer still shake?",
        "answer": "Yes. A severely uneven load or worn suspension can cause movement even when the feet are correct."
      },
      {
        "question": "Are anti-vibration pads always the answer?",
        "answer": "No. Pads cannot correct transport bolts, a loose drum, failed suspension, or serious floor movement."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "shaking",
      "vibration",
      "spin cycle"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The load is uneven or contains one heavy item",
      "The feet are not level and firmly locked",
      "Transport bolts or packing remain installed",
      "The floor flexes or the washer touches surrounding surfaces",
      "Suspension, bearings, or drum support is worn"
    ],
    "quickChecks": [
      {
        "title": "Stop and redistribute the load",
        "detail": "Separate tangled items and avoid spinning one heavy absorbent item by itself.",
        "level": "safe"
      },
      {
        "title": "Check all four feet",
        "detail": "The washer should not rock when pressed at opposite top corners.",
        "level": "safe"
      },
      {
        "title": "Confirm transport hardware was removed",
        "detail": "Use the installation guide for the exact model.",
        "level": "safe"
      },
      {
        "title": "Inspect clearance and floor stability",
        "detail": "Keep the cabinet from contacting walls, hoses, or furniture.",
        "level": "safe"
      }
    ],
    "decisionTitle": "When does the shaking occur?",
    "whenToStop": [
      "The washer walks across the floor",
      "The drum contacts the cabinet",
      "There is grinding, metal debris, or visible structural damage"
    ]
  },
  {
    "slug": "washing-machine-smells-bad",
    "title": "Washing machine smells bad",
    "shortTitle": "Washing machine has a bad smell",
    "summary": "Detergent residue, trapped moisture, low-temperature washing, a dirty gasket or filter, and a slow household drain can produce musty or sewage-like odors.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "Musty or sour",
        "advice": "Moisture, detergent film, and biofilm are likely."
      },
      {
        "label": "Sewage-like",
        "advice": "Check the household drain, standpipe seal, hose insertion depth, and stagnant water."
      },
      {
        "label": "Burning or electrical",
        "advice": "Stop using the washer and disconnect power."
      }
    ],
    "faq": [
      {
        "question": "Can vinegar and bleach be used together?",
        "answer": "No. Never mix bleach with vinegar, ammonia, acids, or other cleaners."
      },
      {
        "question": "Why does a front-load washer smell more easily?",
        "answer": "The sealed gasket and low-water design can retain moisture and residue if the drum is not aired and cleaned regularly."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "bad smell",
      "musty",
      "cleaning"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "Moisture and residue remain in the door gasket or tub",
      "Too much detergent or fabric softener is used",
      "The pump filter or drain hose contains stagnant water",
      "The household drain connection allows odor backflow",
      "Laundry is being left in the drum after cycles"
    ],
    "quickChecks": [
      {
        "title": "Remove laundry promptly",
        "detail": "Leave the door and dispenser slightly open when safe to let moisture escape.",
        "level": "safe"
      },
      {
        "title": "Clean user-accessible surfaces",
        "detail": "Wipe the gasket folds, door glass, and dispenser using manufacturer-approved methods.",
        "level": "safe"
      },
      {
        "title": "Run the official cleaning cycle",
        "detail": "Use only the cleaner and dosage allowed by the model manual. Never mix chemicals.",
        "level": "caution"
      },
      {
        "title": "Inspect the filter and drain connection",
        "detail": "Disconnect power before opening a user-serviceable filter and check hose installation.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What kind of odor is present?",
    "whenToStop": [
      "The odor is burning, chemical, or accompanied by smoke",
      "Cleaning requires mixing products",
      "There is contaminated water or a suspected sewer backup"
    ]
  },
  {
    "slug": "washing-machine-not-filling-with-water",
    "title": "Washing machine is not filling with water",
    "shortTitle": "Washing machine will not fill",
    "summary": "Closed valves, low pressure, kinked hoses, blocked inlet screens, a door-lock issue, or a failed inlet system can prevent a washer from filling.",
    "device": "Washing machine",
    "observations": [
      {
        "label": "No water and no valve sound",
        "advice": "Door-lock feedback, the inlet valve, wiring, or control may be involved."
      },
      {
        "label": "A valve hums but no water enters",
        "advice": "A closed valve, blocked hose, frozen line, or restricted screen is likely."
      },
      {
        "label": "Only hot or cold water is missing",
        "advice": "Focus on that supply valve, hose, screen, and inlet-valve channel."
      }
    ],
    "faq": [
      {
        "question": "Can low water pressure stop a washer?",
        "answer": "Yes. Many washers time the fill and report a fault if the expected level is not reached."
      },
      {
        "question": "Why does the washer add only a little water?",
        "answer": "High-efficiency machines may use less visible water, but clothes should still wet and the cycle should continue without a fill error."
      }
    ],
    "tags": [
      "washing machine",
      "washer",
      "not filling",
      "no water",
      "inlet valve"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "One or both water valves are closed",
      "An inlet hose is kinked, frozen, or blocked",
      "The inlet screens are restricted",
      "The door or lid is not locking",
      "The inlet valve, pressure sensor, or control has failed"
    ],
    "quickChecks": [
      {
        "title": "Open the supply valves fully",
        "detail": "Verify normal flow at a nearby tap.",
        "level": "safe"
      },
      {
        "title": "Inspect both inlet hoses",
        "detail": "Straighten kinks and confirm hot and cold connections match the installation guide.",
        "level": "safe"
      },
      {
        "title": "Check accessible inlet screens",
        "detail": "Turn off water and follow the exact model manual. Do not damage or remove screens permanently.",
        "level": "caution"
      },
      {
        "title": "Confirm the door locks",
        "detail": "Remove trapped fabric and listen for the lock response.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What happens after Start is pressed?",
    "whenToStop": [
      "A hose is swollen, cracked, or leaking",
      "Water continues entering when the washer is off",
      "Internal valve or live electrical testing is needed"
    ]
  },
  {
    "slug": "dishwasher-not-draining",
    "title": "Dishwasher is not draining",
    "shortTitle": "Dishwasher will not drain",
    "summary": "A blocked filter, drain hose, air gap, disposer connection, or pump can leave dirty water in the bottom of a dishwasher.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "The pump hums",
        "advice": "A blockage, jam, or restricted hose is likely."
      },
      {
        "label": "The pump is silent",
        "advice": "The pump, wiring, door switch, or control may need diagnosis."
      },
      {
        "label": "Water returns after draining",
        "advice": "The hose routing, air gap, sink drain, or check valve may allow backflow."
      }
    ],
    "faq": [
      {
        "question": "Is a small amount of water under the filter normal?",
        "answer": "Some models retain a small amount in the sump. Water covering a large part of the tub is not normal."
      },
      {
        "question": "Can a newly installed disposer cause drainage problems?",
        "answer": "Yes. The dishwasher inlet plug must be removed during installation where applicable."
      }
    ],
    "tags": [
      "dishwasher",
      "not draining",
      "water in bottom",
      "drain pump"
    ],
    "featured": true,
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The filter or sump is blocked with debris",
      "The drain hose is kinked or restricted",
      "The sink air gap or disposer connection is blocked",
      "The drain pump is jammed or not running",
      "The cycle was interrupted before the final drain"
    ],
    "quickChecks": [
      {
        "title": "Cancel and drain once",
        "detail": "Listen for the drain pump and observe whether water reaches the sink drain.",
        "level": "safe"
      },
      {
        "title": "Clean the removable filter",
        "detail": "Disconnect power and follow the model instructions for filter removal.",
        "level": "caution"
      },
      {
        "title": "Inspect the drain path",
        "detail": "Check the hose, air gap, high loop, and disposer inlet for a visible restriction.",
        "level": "safe"
      },
      {
        "title": "Stop before pump removal",
        "detail": "Internal pump and wiring access requires qualified service.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What happens during drain?",
    "whenToStop": [
      "Broken glass may be in the sump",
      "Water reaches wiring or the floor",
      "Internal pump access is required"
    ]
  },
  {
    "slug": "dishwasher-not-cleaning-dishes",
    "title": "Dishwasher is not cleaning dishes",
    "shortTitle": "Dishwasher does not clean well",
    "summary": "Blocked spray arms, incorrect loading, low water temperature, weak filling, poor detergent use, or a circulation problem can leave food and film on dishes.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "Food particles",
        "advice": "Focus on loading, filter condition, spray arms, fill, and circulation."
      },
      {
        "label": "White film",
        "advice": "Hard water, excessive detergent, or poor rinsing may be responsible."
      },
      {
        "label": "Greasy residue",
        "advice": "Check water temperature, detergent, cycle selection, and circulation performance."
      }
    ],
    "faq": [
      {
        "question": "Should dishes be fully rinsed first?",
        "answer": "Remove large food pieces, but many modern detergents work best when some normal soil remains."
      },
      {
        "question": "Why is only the top or bottom rack dirty?",
        "answer": "A blocked spray arm, loading obstruction, or diverter problem may affect one wash zone."
      }
    ],
    "tags": [
      "dishwasher",
      "not cleaning",
      "dirty dishes",
      "spray arm"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "Spray-arm holes are blocked or the arms cannot rotate",
      "Items block the detergent door or water paths",
      "Water temperature or fill level is too low",
      "Detergent is old, damp, or unsuitable",
      "The filter, circulation pump, or diverter is restricted"
    ],
    "quickChecks": [
      {
        "title": "Check loading and spray-arm movement",
        "detail": "Make sure tall items do not stop the arms and dishes face the spray zones.",
        "level": "safe"
      },
      {
        "title": "Clean the filter and spray-arm holes",
        "detail": "Use the model instructions and non-damaging tools.",
        "level": "caution"
      },
      {
        "title": "Run hot water at the sink first",
        "detail": "This reduces the amount of time the dishwasher starts with cold water.",
        "level": "safe"
      },
      {
        "title": "Use fresh approved detergent",
        "detail": "Follow the dosage guidance for water hardness and soil level.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What remains on the dishes?",
    "whenToStop": [
      "The machine makes a loud grinding sound",
      "There is burning odor or overheating",
      "Internal circulation-pump testing is needed"
    ]
  },
  {
    "slug": "dishwasher-leaking-from-bottom",
    "title": "Dishwasher is leaking from the bottom",
    "shortTitle": "Dishwasher leaks underneath",
    "summary": "A door-seal issue, loose hose, excess foam, overfilling, or an internal pump and sump leak can put water under a dishwasher.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "As soon as filling starts",
        "advice": "Focus on the supply connection, inlet path, float, and overfill condition."
      },
      {
        "label": "During washing",
        "advice": "Door sealing, foam, spray deflection, pump, or sump leaks are more likely."
      },
      {
        "label": "During draining",
        "advice": "Check the drain hose, sink connection, pump area, and backflow."
      },
      {
        "label": "Even while off",
        "advice": "Close the water valve; the supply line or inlet valve may be leaking."
      }
    ],
    "faq": [
      {
        "question": "Can the wrong soap make a dishwasher leak?",
        "answer": "Yes. Hand dishwashing liquid creates excessive foam that can escape through the door and vents."
      },
      {
        "question": "Is a wet door edge always a bad seal?",
        "answer": "Not necessarily. Loading, spray-arm obstruction, foam, or leveling can direct water toward an otherwise usable seal."
      }
    ],
    "tags": [
      "dishwasher",
      "leaking",
      "water underneath",
      "door seal"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The door seal or lower door area is dirty or damaged",
      "Hand dish soap or excess detergent is creating foam",
      "A supply or drain connection is loose",
      "The dishwasher is overfilling or not level",
      "A pump, sump, diverter, or internal hose is leaking"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and disconnect power",
        "detail": "Close the water supply if leakage continues.",
        "level": "safe"
      },
      {
        "title": "Remove foam safely",
        "detail": "If hand dish soap was used, stop the machine and follow manufacturer guidance. Do not add random chemicals.",
        "level": "caution"
      },
      {
        "title": "Inspect visible connections",
        "detail": "Check the supply line, drain hose, and door perimeter without removing panels.",
        "level": "safe"
      },
      {
        "title": "Confirm the appliance is level",
        "detail": "A forward tilt can direct water toward the door.",
        "level": "safe"
      }
    ],
    "decisionTitle": "When does the leak begin?",
    "whenToStop": [
      "Water is near an outlet or junction box",
      "The leak continues with power off",
      "Panel removal is required to locate the source"
    ]
  },
  {
    "slug": "dishwasher-wont-start",
    "title": "Dishwasher will not start",
    "shortTitle": "Dishwasher will not start",
    "summary": "A power problem, unlatched door, control lock, delayed start, interrupted cycle, or failed switch or control can prevent a dishwasher from running.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "No lights or sounds",
        "advice": "Focus on the breaker, switch, plug, junction connection, and control power."
      },
      {
        "label": "Lights work but Start does nothing",
        "advice": "Door-latch feedback, control lock, delay start, or a press-and-hold requirement is likely."
      },
      {
        "label": "It starts then stops",
        "advice": "Door movement, water supply, a detected leak, or another fault may interrupt operation."
      }
    ],
    "faq": [
      {
        "question": "Why does closing the door not start the cycle?",
        "answer": "Some models require Start to be pressed before closing; others require the door to latch within a short time after pressing Start."
      },
      {
        "question": "Can a dishwasher have a hidden power switch?",
        "answer": "Yes. Some installations use a nearby wall switch or a switch inside the sink cabinet."
      }
    ],
    "tags": [
      "dishwasher",
      "wont start",
      "no power",
      "door latch"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The circuit, plug, or local switch is off",
      "The door is not latched correctly",
      "Control lock or delay start is active",
      "The previous cycle needs to be cancelled or reset",
      "The latch switch, control, or power component has failed"
    ],
    "quickChecks": [
      {
        "title": "Confirm electrical supply",
        "detail": "Check the breaker, plug where accessible, and any wall or under-sink switch.",
        "level": "safe"
      },
      {
        "title": "Open and close the door firmly",
        "detail": "Remove racks or dishes that prevent full closure.",
        "level": "safe"
      },
      {
        "title": "Cancel control lock and delay",
        "detail": "Use the panel labels or model manual.",
        "level": "safe"
      },
      {
        "title": "Reset the cycle once",
        "detail": "Use Cancel/Drain or disconnect power briefly according to the manual.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What response do you get?",
    "whenToStop": [
      "The breaker trips again",
      "The junction box, cord, or outlet is hot",
      "There is burning odor, smoke, or arcing"
    ]
  },
  {
    "slug": "dishwasher-not-drying-dishes",
    "title": "Dishwasher is not drying dishes",
    "shortTitle": "Dishwasher does not dry dishes",
    "summary": "Cycle selection, rinse aid, loading, plastic items, low final-rinse temperature, or a heating and ventilation fault can leave dishes wet.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "Mostly plastic items",
        "advice": "This can be normal because plastics store less heat and water evaporates more slowly."
      },
      {
        "label": "Everything is cold and wet",
        "advice": "The final rinse may not be heating, or the selected cycle may not use heat."
      },
      {
        "label": "The tub is hot but droplets remain",
        "advice": "Rinse aid, loading, ventilation, and condensation behavior are likely factors."
      }
    ],
    "faq": [
      {
        "question": "Why are plastics wetter than glass?",
        "answer": "Plastic does not retain heat as well as glass or ceramic, so evaporation is slower."
      },
      {
        "question": "Does rinse aid actually help drying?",
        "answer": "Yes. It reduces surface tension so water sheets off instead of remaining as droplets."
      }
    ],
    "tags": [
      "dishwasher",
      "not drying",
      "wet dishes",
      "rinse aid"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The selected cycle reduces or disables heated drying",
      "Rinse aid is empty or incorrectly adjusted",
      "Items are nested and retain water",
      "Plastic items cool quickly and stay wet",
      "The heater, fan, vent, sensor, or control is faulty"
    ],
    "quickChecks": [
      {
        "title": "Select the intended drying option",
        "detail": "Eco and quick programs may reduce heat or shorten drying.",
        "level": "safe"
      },
      {
        "title": "Fill and adjust rinse aid",
        "detail": "Use the product approved for the machine and water conditions.",
        "level": "safe"
      },
      {
        "title": "Improve loading",
        "detail": "Angle cups and containers so water can drain and avoid nesting items.",
        "level": "safe"
      },
      {
        "title": "Open the door after the safe release",
        "detail": "If the manual recommends it, venting after the cycle can improve passive drying.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Which items remain wet?",
    "whenToStop": [
      "There is a burning smell or overheating",
      "The breaker trips during the heating stage",
      "Electrical heater or fan testing is required"
    ]
  },
  {
    "slug": "dishwasher-smells-bad",
    "title": "Dishwasher smells bad",
    "shortTitle": "Dishwasher has a bad smell",
    "summary": "Food debris, a dirty filter, standing water, poor drain-hose routing, or long periods with the door closed can cause musty, sour, or sewage-like odors.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "Food or sour odor",
        "advice": "Clean the filter, sump, seals, and spray areas and improve routine maintenance."
      },
      {
        "label": "Sewage-like odor",
        "advice": "Check drain-hose routing, air gap, disposer, and household drain backflow."
      },
      {
        "label": "Burning plastic or electrical odor",
        "advice": "Stop the cycle, disconnect power, and inspect for a fallen plastic item only after cooling."
      }
    ],
    "faq": [
      {
        "question": "Can bleach be used in every dishwasher?",
        "answer": "No. Bleach can damage stainless-steel interiors and must never be mixed with other cleaners. Follow the exact manual."
      },
      {
        "question": "Why does the smell return after cleaning?",
        "answer": "Incomplete drainage or backflow from the sink can reintroduce dirty water after the filter is cleaned."
      }
    ],
    "tags": [
      "dishwasher",
      "bad smell",
      "odor",
      "filter"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "Food remains in the filter or sump",
      "Water is not draining completely",
      "The drain hose allows sink water to flow back",
      "The door stays closed while the interior is damp",
      "A non-dishwasher-safe item is overheating"
    ],
    "quickChecks": [
      {
        "title": "Clean the filter and visible sump",
        "detail": "Disconnect power and follow the model instructions. Use gloves if broken glass may be present.",
        "level": "caution"
      },
      {
        "title": "Confirm complete drainage",
        "detail": "Run Cancel/Drain and check the hose, air gap, and sink connection.",
        "level": "safe"
      },
      {
        "title": "Run the approved cleaning cycle",
        "detail": "Use only dishwasher-approved products and never mix cleaners.",
        "level": "caution"
      },
      {
        "title": "Air the interior",
        "detail": "After unloading, leave the door slightly open when safe.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What does the odor resemble?",
    "whenToStop": [
      "The odor is burning or electrical",
      "There is sewage backup or contaminated water",
      "Cleaning would require mixing chemicals"
    ]
  },
  {
    "slug": "dishwasher-not-filling-with-water",
    "title": "Dishwasher is not filling with water",
    "shortTitle": "Dishwasher will not fill",
    "summary": "A closed supply valve, kinked hose, door-latch issue, stuck float, blocked inlet path, or failed inlet valve can prevent a dishwasher from filling.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "You hear a valve hum",
        "advice": "Check the supply valve, hose, pressure, screen, and inlet path."
      },
      {
        "label": "There is complete silence",
        "advice": "The latch, float switch, inlet valve, wiring, or control may need diagnosis."
      },
      {
        "label": "Only a small amount of water enters",
        "advice": "Low pressure, a restricted inlet, or an early level-sensing signal is possible."
      }
    ],
    "faq": [
      {
        "question": "Does a dishwasher fill all the way to the door?",
        "answer": "No. Modern machines use a relatively shallow amount of water below the door opening."
      },
      {
        "question": "Can a stuck float stop filling?",
        "answer": "Yes. If the overfill system indicates a high water level, the control may keep the inlet valve closed."
      }
    ],
    "tags": [
      "dishwasher",
      "not filling",
      "no water",
      "inlet valve"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "The water supply valve is closed",
      "The inlet hose is kinked or restricted",
      "The door latch is not confirming closure",
      "The overfill float is stuck in the raised position",
      "The inlet valve, wiring, or control has failed"
    ],
    "quickChecks": [
      {
        "title": "Open the supply valve fully",
        "detail": "Verify water is available at the sink.",
        "level": "safe"
      },
      {
        "title": "Inspect the inlet hose",
        "detail": "Check for kinks, crushing, freezing, or a leak-stop device that has activated.",
        "level": "safe"
      },
      {
        "title": "Check the door and float area",
        "detail": "Remove obstructions and confirm the user-accessible float moves as described in the manual.",
        "level": "safe"
      },
      {
        "title": "Listen during the fill stage",
        "detail": "A hum with no water suggests a supply or inlet restriction; silence may indicate a control or valve issue.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What happens after the drain stage?",
    "whenToStop": [
      "The inlet hose or valve leaks",
      "Water continues entering when power is off",
      "Internal valve or electrical testing is required"
    ]
  },
  {
    "slug": "dishwasher-making-grinding-noise",
    "title": "Dishwasher is making a grinding noise",
    "shortTitle": "Dishwasher makes a grinding noise",
    "summary": "Debris in the filter or pump area, a spray arm striking dishes, a dry pump, or a worn circulation or drain component can create grinding or rattling sounds.",
    "device": "Dishwasher",
    "observations": [
      {
        "label": "As soon as washing begins",
        "advice": "Check spray-arm contact, fill level, and circulation-pump obstruction."
      },
      {
        "label": "Only during draining",
        "advice": "Focus on the drain pump, filter area, hose, and debris."
      },
      {
        "label": "The sound occurs with the machine off when arms are moved",
        "advice": "A loose arm, rack, or physical obstruction is likely."
      }
    ],
    "faq": [
      {
        "question": "Can a seed or piece of glass cause grinding?",
        "answer": "Yes. Small hard objects can reach the filter or pump area and make intermittent noise."
      },
      {
        "question": "Is a brief grinding sound always a failure?",
        "answer": "Some pumps make a short change in sound during cycle transitions, but new, loud, or persistent grinding should be investigated."
      }
    ],
    "tags": [
      "dishwasher",
      "grinding noise",
      "pump",
      "spray arm"
    ],
    "category": "Home appliances",
    "categorySlug": "home-appliances",
    "updated": "2026-07-17",
    "readTime": 5,
    "contentKind": "symptom",
    "likelyCauses": [
      "A spray arm is hitting a utensil or tall item",
      "Hard debris or broken glass is near the filter or pump cover",
      "The drain or circulation pump is obstructed",
      "The machine is running with insufficient water",
      "A pump bearing or motor component is worn"
    ],
    "quickChecks": [
      {
        "title": "Stop the cycle and inspect loading",
        "detail": "Move utensils and tall items away from all spray-arm paths.",
        "level": "safe"
      },
      {
        "title": "Rotate the spray arms by hand",
        "detail": "With power off, confirm they move freely and are not cracked or loose.",
        "level": "safe"
      },
      {
        "title": "Inspect the removable filter area",
        "detail": "Disconnect power and use gloves; do not reach into an undocumented pump opening.",
        "level": "caution"
      },
      {
        "title": "Confirm the dishwasher fills",
        "detail": "A pump operating with too little water can sound unusually harsh.",
        "level": "safe"
      }
    ],
    "decisionTitle": "When is the sound loudest?",
    "whenToStop": [
      "Broken glass may be present",
      "The sound is accompanied by burning odor or leakage",
      "Pump access requires panel or sump disassembly"
    ]
  }
];
