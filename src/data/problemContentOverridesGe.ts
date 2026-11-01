import type { Problem } from "./problems";

const GE_H2O_SOURCE = {
  label: "GE Appliances — Front Load Washer H2O Supply Error",
  url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=000060308",
};

const overrides: Record<string, Partial<Problem>> = {
  "ge-appliances-dishwasher-c1-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      },
      {
        "label": "GE Appliances — Cleaning the air gap",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=17895"
      },
      {
        "label": "GE Appliances — Dishwasher not draining",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240"
      }
    ],
    "title": "GE dishwasher C1: drain pump-out exceeds two minutes",
    "summary": "GE defines C1 on supported dishwashers as a pump-out that exceeds two minutes. Begin with the external drain route, especially an installed air gap or sink/disposer connection. The time warning alone does not establish that the drain pump has failed.",
    "likelyCauses": [
      "A restricted air gap slows the discharge route",
      "The accessible hose is kinked or its outlet is obstructed",
      "The sink or disposer connection does not pass water freely",
      "The dishwasher still cannot drain after the external route is clear"
    ],
    "quickChecks": [
      {
        "title": "Confirm C1 and the model family",
        "detail": "Record the full display and model number. C2 uses a different total pump-out threshold, so do not substitute its definition.",
        "level": "safe"
      },
      {
        "title": "Inspect the air gap if one is installed",
        "detail": "An air gap is sink plumbing, not an internal dishwasher part. Follow the linked GE cleaning procedure for the accessible cap and trapped debris. Not every installation has one.",
        "level": "safe"
      },
      {
        "title": "Look along the accessible discharge route",
        "detail": "Check for a pinched hose or backed-up sink. A recently installed disposer needs its installation checked; never put a hand into its grinding chamber.",
        "level": "caution"
      },
      {
        "title": "Use service when the route is clear but C1 returns",
        "detail": "Repeated operation does not identify a failed part. Leave pump, wiring and internal valve access to a technician.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Is the drain path slow before water leaves the dishwasher?",
    "observations": [
      {
        "label": "The sink or air gap backs up",
        "advice": "Correct the plumbing restriction before assuming the dishwasher pump is defective."
      },
      {
        "label": "The hose is visibly pinched under the sink",
        "advice": "Have the routing corrected without pulling a built-in unit against its wiring or water connections."
      },
      {
        "label": "The external route appears open but C1 repeats",
        "advice": "Record the code timing and arrange model-specific drainage diagnosis."
      }
    ],
    "faq": [
      {
        "question": "Is GE C1 the same as C2?",
        "answer": "GE lists C1 at a pump-out exceeding two minutes and C2 at a total pump-out exceeding seven minutes. Use the code actually shown."
      },
      {
        "question": "Does C1 prove the pump must be replaced?",
        "answer": "No. An external restriction can delay water removal. Clear accessible plumbing problems before a technician tests internal components."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "c1",
      "GE Appliances",
      "drain pump-out exceeds two minutes"
    ]
  },
  "ge-appliances-dishwasher-c2-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      },
      {
        "label": "GE Appliances — Dishwasher not draining",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240"
      }
    ],
    "title": "GE dishwasher C2: total pump-out exceeds seven minutes",
    "summary": "GE lists C2 on supported dishwashers when the total pump-out exceeds seven minutes. Silencing its alert is separate from correcting drainage: record whether water remains, and compare the actual display with C1 before choosing the next check.",
    "likelyCauses": [
      "The discharge remains restricted through an extended pump-out",
      "The sink outlet or dishwasher hose cannot carry the required flow",
      "The machine does not confirm that draining has completed",
      "An internal drainage fault persists after accessible plumbing checks"
    ],
    "quickChecks": [
      {
        "title": "Distinguish a long total pump-out from a brief pause",
        "detail": "Record the full C2 display and the stage of the cycle. Avoid timing an unrelated wash pause as if it were pump-out.",
        "level": "safe"
      },
      {
        "title": "Separate the alarm reset from a repair",
        "detail": "GE lists RESET for stopping the beep. A silent panel does not establish that retained water has been removed.",
        "level": "safe"
      },
      {
        "title": "Check the visible water and plumbing condition",
        "detail": "With the cycle stopped and water cool, note whether excess water remains. Compare the sink outlet, accessible hose and any air gap with the installation instructions.",
        "level": "caution"
      },
      {
        "title": "Escalate a repeated extended pump-out",
        "detail": "If C2 returns or water cannot be removed normally, arrange service. Do not continue restarting full cycles to overcome the warning.",
        "level": "stop"
      }
    ],
    "decisionTitle": "What remains after the C2 alarm is acknowledged?",
    "observations": [
      {
        "label": "The beep stops but excess water remains",
        "advice": "The alarm has been acknowledged; drainage still needs correction."
      },
      {
        "label": "The sink also drains slowly",
        "advice": "Investigate the shared outlet/plumbing restriction."
      },
      {
        "label": "The tub drains but C2 repeatedly returns",
        "advice": "A technician must check completion sensing and the model-specific drain system."
      }
    ],
    "faq": [
      {
        "question": "What does the seven-minute threshold refer to?",
        "answer": "GE’s table describes total pump-out for C2. It is not a universal maximum wash-cycle duration."
      },
      {
        "question": "Does pressing RESET fix C2?",
        "answer": "It can acknowledge the beep. Confirm actual drainage; a repeating code still needs investigation."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "c2",
      "GE Appliances",
      "total pump-out exceeds seven minutes"
    ]
  },
  "ge-appliances-dishwasher-c3-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      },
      {
        "label": "GE Appliances — Dishwasher not draining",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240"
      }
    ],
    "title": "GE dishwasher C3: the dishwasher will not drain",
    "summary": "GE describes C3 as a no-drain condition on supported dishwasher controls. Its guidance includes one brief power reset; if the condition persists, service is required. First distinguish excess standing water from the small amount the model normally retains around its sump.",
    "likelyCauses": [
      "The drain outlet cannot pass water",
      "A hose or model-accessible filter is obstructed",
      "The dishwasher cannot complete a drain command",
      "An internal pump, control or sensing fault requires model-specific inspection"
    ],
    "quickChecks": [
      {
        "title": "Record whether the tub holds excess water",
        "detail": "Do not reach into hot or powered equipment. Compare the water level with the model manual instead of assuming every wet sump is a fault.",
        "level": "safe"
      },
      {
        "title": "Check the external outlet without dismantling the unit",
        "detail": "Look for a backed-up sink or kinked accessible hose. Do not add chemical drain cleaner to the dishwasher.",
        "level": "caution"
      },
      {
        "title": "Perform only the documented one-time reset",
        "detail": "For a supported C3 model and an otherwise safe installation, GE describes disconnecting power at the circuit breaker for about 30 seconds before resetting. Do not reset an appliance with leaks or electrical symptoms.",
        "level": "caution"
      },
      {
        "title": "Request service if C3 remains",
        "detail": "A recurring no-drain condition after the allowed reset needs diagnosis; do not bridge switches or repeatedly cycle power.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Does drainage resume after the permitted reset?",
    "observations": [
      {
        "label": "Normal draining resumes and the code stays clear",
        "advice": "Observe the next normal use; record any recurrence rather than replacing parts immediately."
      },
      {
        "label": "The machine hums but excess water remains",
        "advice": "Stop repeated attempts and have the discharge route and pump checked."
      },
      {
        "label": "Only a small sump area remains wet",
        "advice": "Check the manual’s normal retained-water description before diagnosing a blocked machine."
      }
    ],
    "faq": [
      {
        "question": "Does C3 specify a two-minute or seven-minute delay?",
        "answer": "GE’s C3 definition is no drainage. The explicit two- and seven-minute descriptions belong to C1 and C2 in the published table."
      },
      {
        "question": "Can a reset repair a physical blockage?",
        "answer": "No. A control restart does not remove an obstructed outlet or repair a damaged pump."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "c3",
      "GE Appliances",
      "the dishwasher will not drain"
    ]
  },
  "ge-appliances-dishwasher-ftd-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      },
      {
        "label": "GE Appliances — Dishwasher not draining",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240"
      },
      {
        "label": "GE Appliances — Cleaning the air gap",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=17895"
      }
    ],
    "title": "GE dishwasher FTD / F56: failure to drain",
    "summary": "GE groups FTD and F56 as failure-to-drain displays on supported dishwashers. Check excess retained water and the discharge installation, including recent disposer work. An FTD message does not by itself identify a pump failure or establish a C-series timing threshold.",
    "errorCode": "FTD / F56",
    "aliases": [
      "FTD",
      "F56",
      "failure to drain"
    ],
    "likelyCauses": [
      "The sink connection or disposer inlet is blocked",
      "An air gap or drain hose restricts discharge",
      "A recent installation left the disposer drain plug in place",
      "Incorrect routing or an internal drainage fault prevents normal water removal"
    ],
    "quickChecks": [
      {
        "title": "Check what changed before FTD began",
        "detail": "A new dishwasher, relocated hose or recently replaced disposer makes installation details relevant.",
        "level": "safe"
      },
      {
        "title": "Have a new disposer connection checked",
        "detail": "An installer should verify that the dishwasher inlet was opened according to the disposer instructions. Do not probe the disposer by hand.",
        "level": "caution"
      },
      {
        "title": "Compare hose routing with the exact installation guide",
        "detail": "A kink or an incorrect high-loop arrangement can affect drainage. Use the model’s stated height, rather than a number copied from another dishwasher.",
        "level": "caution"
      },
      {
        "title": "Use the correct filter or air-gap procedure if fitted",
        "detail": "Filter designs differ. Clean only parts the owner manual identifies as user-accessible.",
        "level": "safe"
      },
      {
        "title": "Arrange service if the route is correct but drainage fails",
        "detail": "Do not pull a built-in unit out to expose pump wiring or keep retrying an overheating pump.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Did FTD / F56 begin after installation or disposer replacement?",
    "observations": [
      {
        "label": "Yes, directly after the plumbing work",
        "advice": "Ask the installer to check the disposer inlet, hose routing and outlet before ordering dishwasher parts."
      },
      {
        "label": "No, and the sink or air gap backs up",
        "advice": "A discharge restriction deserves attention first."
      },
      {
        "label": "No external restriction is found and water remains",
        "advice": "The appliance’s drain system needs professional testing."
      }
    ],
    "faq": [
      {
        "question": "Are FTD and F56 equivalent in the GE support table?",
        "answer": "Yes. GE lists them together as failure to drain for supported models. Confirm that your model uses that table."
      },
      {
        "question": "Can a small wet sump trigger a mistaken diagnosis?",
        "answer": "Yes. Some retained water is normal for particular filter designs; compare the actual level with the model manual rather than treating every trace of water as a fault."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "FTD / F56",
      "GE Appliances",
      "failure to drain"
    ]
  },
  "ge-appliances-dishwasher-c5-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      }
    ],
    "title": "GE dishwasher C5: pump-out time is too short",
    "summary": "GE defines C5 as pump-out time being too short on supported controls. This differs from the long-drain descriptions for C1 and C2. Establish whether water was supplied and whether the model’s accessible float moves as intended before assuming a blocked drain.",
    "likelyCauses": [
      "The water supply valve is not open",
      "The appliance received too little water for its expected sequence",
      "A model-accessible float is stuck or not returning normally",
      "The short-pump-out condition persists despite normal supply"
    ],
    "quickChecks": [
      {
        "title": "Confirm that the model uses C5 for short pump-out",
        "detail": "Keep the timing direction clear: too short is different from a machine taking too long to empty.",
        "level": "safe"
      },
      {
        "title": "Check the household supply valve",
        "detail": "Verify the dishwasher supply is on. If supply is absent, correct that condition before retrying.",
        "level": "safe"
      },
      {
        "title": "Inspect the float only if the manual provides owner access",
        "detail": "Do not force, remove or bypass a float mechanism. Designs differ, and an internal sensor is not a user-serviceable float cover.",
        "level": "caution"
      },
      {
        "title": "Retry only after the identified condition is corrected",
        "detail": "If C5 returns with normal supply, record whether filling occurred and contact support. Repeated resets do not explain a persistent level condition.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Did the dishwasher actually receive water before C5?",
    "observations": [
      {
        "label": "The supply valve was closed",
        "advice": "Open the required valve and observe one normal fill attempt."
      },
      {
        "label": "Water is available but filling is weak or absent",
        "advice": "Follow the exact model’s fill guidance; do not replace the drain pump from C5 alone."
      },
      {
        "label": "The model-accessible float appears stuck",
        "advice": "Stop forcing it and use the model manual or service procedure."
      }
    ],
    "faq": [
      {
        "question": "Is C5 another long-drain code?",
        "answer": "No. GE describes it as a pump-out that is too short; C1 and C2 describe long pump-out conditions."
      },
      {
        "question": "Should I remove the float to clear C5?",
        "answer": "No. Do not disable water-level protection. Only use the owner-accessible check specified by the exact model."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "c5",
      "GE Appliances",
      "pump-out time is too short"
    ]
  },
  "ge-appliances-dishwasher-c7-error": {
    "updated": "2026-11-01",
    "appliesTo": "GE dishwasher model families whose own manual lists the displayed code",
    "modelNote": "GE states that not every code appears on every model. C-series drain timings and the FTD/F56 display belong to their documented model families; do not transfer a timing threshold or reset sequence to another platform. Use the full model number and its installation instructions.",
    "sources": [
      {
        "label": "GE Appliances — Dishwasher error, fault and function codes",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16673"
      }
    ],
    "title": "GE dishwasher C7: water-temperature sensor circuit fault",
    "summary": "GE lists C7 as an inoperative water-temperature sensor circuit on supported dishwashers. It differs from the low-incoming-water-temperature condition described by C6. A repeating C7 requires service rather than a hotter water setting or an assumed heater replacement.",
    "likelyCauses": [
      "The temperature-sensing circuit is not reporting normally",
      "A sensor connection or wiring path needs professional inspection",
      "The control receives an unusable temperature signal",
      "The circuit warning remains after an allowed control restart"
    ],
    "quickChecks": [
      {
        "title": "Photograph C7 before changing settings",
        "detail": "Check that the display is C7, rather than C6 or a different symbol. The distinction changes the next step.",
        "level": "safe"
      },
      {
        "title": "Avoid changing the household water-heater setting for this code",
        "detail": "A sensing-circuit fault is not a measurement showing that the incoming water is simply too cold.",
        "level": "safe"
      },
      {
        "title": "Use at most the model-approved power reset",
        "detail": "GE’s C7 entry describes about 30 seconds off at the breaker, followed by reset. Skip a restart if there is leaking, a tripped breaker or an electrical smell.",
        "level": "caution"
      },
      {
        "title": "Book service if C7 returns",
        "detail": "Record the full model number and when the code appears. Sensor resistance, internal connectors and powered measurements are technician work.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Is the display C7 or a low-temperature warning?",
    "observations": [
      {
        "label": "It is C6 rather than C7",
        "advice": "Use the model’s incoming-water guidance; this sensor-circuit page is not the right procedure."
      },
      {
        "label": "C7 returns immediately after the allowed restart",
        "advice": "Request temperature-sensing circuit diagnosis."
      },
      {
        "label": "There is an electrical smell or breaker trip",
        "advice": "Leave power off and arrange qualified help rather than testing another cycle."
      }
    ],
    "faq": [
      {
        "question": "Is C7 the same as C6?",
        "answer": "No. GE lists C6 for low water temperature and C7 for the temperature-sensor circuit. They should not share a generic “make the water hotter” fix."
      },
      {
        "question": "Does C7 establish that the heater has failed?",
        "answer": "No. A sensor-circuit warning does not by itself identify a failed heater; the exact circuit needs testing."
      }
    ],
    "whenToStop": [
      "Water is leaking, the breaker trips, or there is an electrical smell",
      "The next step requires opening panels, defeating a float or lock, or testing internal wiring",
      "The code returns after the permitted external checks"
    ],
    "tags": [
      "dishwasher",
      "c7",
      "GE Appliances",
      "water-temperature sensor circuit fault"
    ]
  },
  "ge-appliances-washer-h2o-supply-error": {
    title: "GE front-load washer H2O Supply: water supply or pressure-sensor fault",
    shortTitle: "GE washer H2O Supply",
    summary: "GE Appliances says the H2O Supply message on supported front-load washers appears when the machine cannot establish the expected water level. The official guidance specifically points to closed water valves or a pressure-sensor problem, with extremely low household water pressure as a less common cause.",
    likelyCauses: [
      "One or both household water-supply valves are turned off or not fully open",
      "The washer's pressure-sensing system is not reporting the expected water level",
      "Household water pressure is extremely low",
      "A model-specific inlet, hose, or sensing fault remains after the external supply is verified",
    ],
    quickChecks: [
      { title: "Check that the water supply is actually on", detail: "GE's first user-level instruction is to make sure the water supply to the front-load washer is turned on. Fully open the supply valves before retrying.", level: "safe" },
      { title: "Expect a temporary drain-pump lockout", detail: "GE says the washer normally runs the drain pump for about four minutes after H2O Supply appears. This is a protective response intended to reduce overfill risk if pressure sensing is abnormal; do not mistake that drain period for a separate drain fault.", level: "safe" },
      { title: "Check for unusually weak household flow", detail: "If the supply valves are open, compare flow at a nearby fixture. GE notes that extremely low water pressure can rarely produce this message.", level: "safe" },
      { title: "Stop at the pressure-sensor diagnosis boundary", detail: "If water is definitely on and the H2O Supply message returns, GE recommends service. Do not open the washer to bypass or electrically test the pressure-sensing system as a user-level step.", level: "stop" },
    ],
    decisionTitle: "Are the front-load washer's water supplies fully open when H2O Supply appears?",
    observations: [
      { label: "A supply valve was closed", advice: "Open the required supply valve fully, allow the protective drain period to finish, and retry one cycle." },
      { label: "Both supplies are open but household flow is extremely weak", advice: "Correct the household water-pressure/supply problem before treating the washer as defective." },
      { label: "Normal water supply is confirmed and H2O Supply returns", advice: "GE's published guidance moves to service at this point because the pressure-sensing or inlet system requires model-specific diagnosis." },
      { label: "The drain pump runs for roughly four minutes after the message", advice: "That behavior is documented by GE as a protective response to H2O Supply and does not by itself prove a failed drain pump." },
    ],
    whenToStop: [
      "H2O Supply returns after the water valves and household flow are confirmed",
      "Water is leaking, rising unexpectedly, or continues entering when the washer should be off",
      "Diagnosis would require pressure-sensor, inlet-valve, wiring, or control-board access",
    ],
    faq: [
      { question: "What does H2O Supply mean on a GE front-load washer?", answer: "GE says the message can be caused by the water supply valves being off or by a pressure-sensor problem. Extremely low water pressure is a less common possibility." },
      { question: "Why does the GE washer drain for four minutes after H2O Supply?", answer: "GE documents that behavior as an overfill-protection response in case the pressure-sensing system is the cause of the error." },
      { question: "Is H2O Supply the same as every GE E-series fill code?", answer: "No assumption should be made from the symptom alone. This page follows GE's published H2O Supply guidance for supported front-load washers; E-series service codes can be model-family specific." },
      { question: "Should I replace the inlet valve when H2O Supply appears?", answer: "Not from the message alone. First confirm the household water supply. If the message persists with normal supply, GE recommends service because the pressure-sensing or inlet system needs model-specific diagnosis." },
    ],
    appliesTo: "Supported GE Appliances front-load washers that display the H2O Supply message",
    modelNote: "GE's H2O Supply article is specifically written for front-load washers. Do not transfer this exact meaning to unrelated GE platforms or service-mode E-codes without the exact model documentation.",
    sources: [GE_H2O_SOURCE],
    updated: "2026-09-04",
  },
};

export function applyGeProblemContentOverrides(items: Problem[]): Problem[] {
  return items.map((problem) => {
    const override = overrides[problem.slug];
    return override ? { ...problem, ...override } : problem;
  });
}
