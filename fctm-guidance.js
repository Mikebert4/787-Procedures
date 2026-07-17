window.FCTM_GUIDANCE = [
  {
    id: "fctm-training-boundary",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Operating Frame|Non-Normal Scope/i],
    title: "FCTM use and authority",
    citation: "FCTM PDF p.7; FCTM Introduction",
    bullets: [
      "The FCTM provides recommended maneuvers, techniques, and crew coordination practices for training.",
      "If the FCTM conflicts with the FCOM, QRH, ECL, AFM, MMEL, MEL, or DDG, those controlling documents take precedence.",
      "Use the FCTM layer here as training guidance; the FCOM-derived checklist flow remains the procedure baseline."
    ]
  },
  {
    id: "callouts-general",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Takeoff|Approach|Landing|Go-Around|Callouts|Alert Recognition/i],
    itemPatterns: [/call|80 KNOTS|V1|ROTATE|positive rate|minimums|go around|glide|localizer|500 ft|1,000 ft|thrust set/i],
    title: "Recommended callout discipline",
    citation: "FCTM PDF pp.45-49; FCTM 1.15-1.19",
    bullets: [
      "The FCTM treats callouts as a crew crosscheck; a missing callout can indicate a system issue, missed indication, or pilot incapacitation.",
      "If an expected automatic callout is not heard, the PM makes the callout.",
      "PF should acknowledge GPWS voice callouts except approach altitude callouts below 500 feet AFE; minimums decisions are still explicit PF callouts.",
      "Use standard phraseology such as SET TAKEOFF THRUST, SET GO-AROUND THRUST, FLAPS settings, SET speed commands, and stabilized-approach altitude callouts."
    ],
    images: [
      {
        src: "assets/fctm-callouts-0046.png",
        alt: "FCTM recommended callouts table",
        caption: "Recommended climb and descent callouts. Source: FCTM PDF p.46; FCTM 1.16."
      }
    ]
  },
  {
    id: "fmc-route-verification",
    modes: ["normal"],
    stageLevel: true,
    stages: [/CDU\/EFB Preflight|Climb\/Cruise|Descent|Approach/i],
    itemPatterns: [/RTE\/LEGS|route|flight plan|LEGS|PROGRESS|approach RNP|active route|verify/i],
    title: "FMC route verification",
    citation: "FCTM PDF pp.56-57; FCTM 1.26-1.27",
    bullets: [
      "After route entry, compare the filed route with FMC ROUTE airway and waypoint entries.",
      "Compare flight-plan total distance and fuel remaining with FMC PROGRESS distance and predicted fuel remaining.",
      "For longer or oceanic sectors, crosscheck LEGS page waypoint sequence, tracks, and leg distances against the computer flight plan.",
      "When evaluating charted procedures against the database, focus on waypoint sequence, speed/altitude constraints, and unexpected discontinuities.",
      "FMC performance predictions assume normal clean configuration; in non-normal configurations, do not rely on FMC fuel or climb/descent path predictions."
    ]
  },
  {
    id: "weather-terrain-afds",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Preflight Procedure|Before Takeoff|Takeoff|Approach|Landing|First Response|Non-Normal/i],
    itemPatterns: [/weather|terrain|VSD|autopilot|autothrottle|flight director|AFDS|FMA|traffic/i],
    title: "Display, terrain, and AFDS technique",
    citation: "FCTM PDF p.63; FCTM 1.33",
    bullets: [
      "When adverse weather and terrain or obstacles may affect the intended path, one pilot should monitor weather radar while the other monitors terrain.",
      "Terrain display use is recommended at night or in IMC on departure and approach near terrain or obstacles, and in non-radar environments.",
      "Attempt autopilot engagement only when the airplane is in trim, the flight path is controlled, and flight director commands are essentially satisfied.",
      "The autopilot is not intended to recover the airplane from unusual attitudes, significant out-of-trim conditions, or abnormal flight conditions."
    ]
  },
  {
    id: "static-port-preflight",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Exterior Inspection|Preflight/i],
    itemPatterns: [/static ports|probes|ports|vents|sensors|freezing|contaminants|inspection/i],
    title: "Static ports and freezing contamination",
    citation: "FCTM PDF p.75; FCTM 2.1",
    bullets: [
      "The FCTM highlights obstructed static ports after ground icing as a cause of fluctuating or inaccurate airspeed and altimeter indications after takeoff.",
      "Probe heat does not heat the static ports and surrounding surfaces, so visual inspection and contaminant removal matter before flight.",
      "Pay extra attention after freezing precipitation or snow removal; clear ice may be difficult to see and maintenance assistance is appropriate when in doubt."
    ]
  },
  {
    id: "takeoff-briefing",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Before Start|Before Takeoff|Takeoff/i],
    itemPatterns: [/briefing|takeoff briefing|departure|noise|MEL|engine out|taxi\/takeoff briefings/i],
    title: "Takeoff briefing focus",
    citation: "FCTM PDF pp.75-76; FCTM 2.1-2.2",
    bullets: [
      "Brief the departure path as early as practical so it does not interfere with final takeoff preparation.",
      "The briefing emphasizes track and altitude restrictions; normal standard procedures do not need to be re-briefed.",
      "Add items when conditions differ from routine: adverse weather, adverse runway, unique noise abatement, MEL dispatch, special engine-out departure, or specific crew responsibilities."
    ]
  },
  {
    id: "pushback-taxi",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Pushback|Before Taxi|After Landing|Shutdown/i],
    itemPatterns: [/pushback|towing|taxi|ground|marshaller|clearance|airport map|parking brake|nose gear steering|tow bar/i],
    title: "Pushback, towing, and taxi awareness",
    citation: "FCTM PDF pp.76-78; FCTM 2.2-2.4",
    bullets: [
      "Pushback and towing depend on clear flight deck and ground-crew communication; the captain ensures checklists, doors, passengers, and equipment are ready before movement.",
      "The airplane should not taxi away from a gate or pushback position until the marshaller indicates it is clear.",
      "Before taxi, review NOTAMs, expected route, hold short points, closures, and airport chart details; write down and read back taxi clearance.",
      "During taxi, progressively verify position, stop if clearance is uncertain, avoid distractions, and use direct visual observation as the primary taxi reference.",
      "The airport map enhances situational awareness but does not replace outside visual references, charts, signs, markings, or traffic observation."
    ]
  },
  {
    id: "takeoff-roll-technique",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Takeoff/i],
    itemPatterns: [/stabilization|TO\/GA|takeoff thrust|80 knots|V1|thrust levers|HOLD|airspeed|abnormal/i],
    title: "Takeoff roll scan and thrust technique",
    citation: "FCTM PDF pp.95-97; FCTM 3.3-3.5",
    bullets: [
      "Autothrottle and flight director use is recommended for takeoff, but F/D commands are not followed until after liftoff.",
      "A rolling takeoff is recommended: stabilize engines momentarily at the initial setting, then promptly advance to takeoff thrust.",
      "Symmetric initial thrust is more important than an exact initial value; takeoff thrust should be set by 80 knots.",
      "The captain keeps a hand on the thrust levers until V1, then removes it after V1.",
      "PM monitors engine instruments and airspeed, calls abnormalities, and calls 80 knots so PF can verify airspeed agreement and reasonableness."
    ],
    images: [
      {
        src: "assets/fctm-takeoff-rotation-0098.png",
        alt: "FCTM takeoff rotation profile",
        caption: "Typical all-engine rotation profile. Source: FCTM PDF p.98; FCTM 3.6."
      },
      {
        src: "assets/fctm-tail-clearance-0099.png",
        alt: "FCTM takeoff tail clearance figure",
        caption: "Takeoff tail clearance discussion. Source: FCTM PDF p.99; FCTM 3.7."
      }
    ]
  },
  {
    id: "rotation-tail-clearance",
    modes: ["normal"],
    stages: [/Takeoff/i],
    itemPatterns: [/ROTATE|rotates|15 degrees|positive climb|gear up|liftoff/i],
    title: "Rotation and tail-clearance technique",
    citation: "FCTM PDF pp.98-100; FCTM 3.6-3.8",
    bullets: [
      "At VR, initiate a smooth continuous rotation toward about 15 degrees pitch attitude.",
      "Do not use stabilizer trim during rotation, and do not use flight director pitch command for rotation.",
      "A typical all-engine rotation rate is about 2 to 2.5 degrees per second, with liftoff attitude reached in about 3 to 4 seconds depending on weight and thrust.",
      "Early or rapid rotation can cause tail strike; late, slow, or under-rotation increases takeoff roll and degrades initial climb path.",
      "Retract landing gear after a positive rate of climb is shown on the altimeter."
    ],
    images: [
      {
        src: "assets/fctm-takeoff-rotation-0098.png",
        alt: "FCTM takeoff rotation profile",
        caption: "Typical all-engine rotation profile. Source: FCTM PDF p.98; FCTM 3.6."
      },
      {
        src: "assets/fctm-tail-clearance-0099.png",
        alt: "FCTM takeoff tail clearance figure",
        caption: "Takeoff tail clearance discussion. Source: FCTM PDF p.99; FCTM 3.7."
      }
    ]
  },
  {
    id: "rto-decision",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Takeoff|First Response|Required Callouts/i],
    itemPatterns: [/reject|RTO|V1|abnormal|engine fire|engine failure|takeoff configuration|80 knots/i],
    title: "Rejected takeoff decision margin",
    citation: "FCTM PDF pp.111-115; FCTM 3.19-3.23",
    bullets: [
      "At low speed, stop for events that make continued takeoff or flight undesirable; near V1, stopping effort approaches the airplane maximum stopping capability.",
      "The decision to stop must be made before V1; rejecting after V1 is not recommended unless the captain judges the airplane incapable of flight.",
      "If V-speeds are not displayed and there are no other fault indications, the FCTM says this alone does not meet published reject criteria; PM should call V1 and VR from recalled values if available.",
      "Successful RTO performance depends on timely captain decision-making and proper use of maximum stopping procedures."
    ],
    images: [
      {
        src: "assets/fctm-rto-margins-0115.png",
        alt: "FCTM RTO execution operational margins diagram",
        caption: "RTO execution operational margins. Source: FCTM PDF p.115; FCTM 3.23."
      }
    ]
  },
  {
    id: "descent-planning",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Descent|Climb\/Cruise/i],
    itemPatterns: [/descent|10,000|Approach REF|minimums|autobrake|briefing|transition|VREF|route|arrival/i],
    title: "Descent planning and workload",
    citation: "FCTM PDF pp.146-148; FCTM 4.18-4.20",
    bullets: [
      "FMC path descent is the most economical method when descent constraints support it.",
      "Set mandatory and at-or-above altitude restrictions in the MCP altitude window unless using an approved alternate technique.",
      "Flight deck workload increases in the terminal area; complete administrative and nonessential duties before descent or postpone until after landing.",
      "A practical planning crosscheck is about 3.5 NM per 1,000 feet of altitude loss in no-wind ECON descent.",
      "The FCTM suggests a useful crosscheck: 10,000 feet AGL, 30 miles from the airport, at 250 knots."
    ]
  },
  {
    id: "approach-briefing-stabilized",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Descent|Approach|Landing -|Go-Around|Non-Normal/i],
    itemPatterns: [/approach briefing|briefing|Landing Checklist|minimums|FAF|outer marker|500 ft|1,000 ft|suitable visual|go-around|go around|unstable|stabilized|landing distance/i],
    title: "Approach briefing and stabilized gate",
    citation: "FCTM PDF pp.158-161; FCTM 5.2-5.5",
    bullets: [
      "Before instrument approach, PF briefs intentions and both pilots review weather, NOTAMs, chart validity, frequencies, minima, vertical profile, speed restrictions, MAP, missed approach, landing distance, taxi routing, non-normal implications, and AFDS management.",
      "All approaches should be stabilized by 1,000 feet AFE in IMC and 500 feet AFE in VMC.",
      "Stabilized criteria include correct path, small heading/pitch corrections, approach speed trending within +10/-5 knots, landing configuration, sink rate normally not over 1,000 fpm, appropriate thrust, and completed briefings/checklists.",
      "An approach that becomes unstabilized below the gate requires an immediate go-around.",
      "At threshold crossing, the airplane should be on speed, on a normal path, and positioned for touchdown in the touchdown zone."
    ],
    images: [
      {
        src: "assets/fctm-stabilized-approach-0160.png",
        alt: "FCTM stabilized approach recommendations",
        caption: "Stabilized approach criteria. Source: FCTM PDF p.160; FCTM 5.4."
      }
    ]
  },
  {
    id: "landing-roll",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Landing Roll|After Landing|Non-Normal/i],
    itemPatterns: [/speedbrake|reverse|autobrake|braking|60 knots|thrust levers|taxi speed|touchdown|landing roll|runway/i],
    title: "Landing roll and stopping distance technique",
    citation: "FCTM PDF pp.246-248; FCTM 6.16-6.18",
    bullets: [
      "Avoid touchdown with thrust above idle because it can increase nose-up tendency and landing roll.",
      "After main gear touchdown, lower the nose wheels smoothly without delay; do not hold the nose off for aerodynamic braking.",
      "If speedbrakes do not extend automatically, move the speedbrake lever up without delay; initial braking effectiveness can be greatly reduced without spoilers.",
      "Use reverse thrust and braking promptly; reverse thrust and speedbrake drag are most effective during the high-speed part of the landing roll.",
      "Any delay in landing roll actions, excessive threshold height, extra speed, extended flare, or missing speedbrakes/reverse materially increases stopping distance."
    ],
    images: [
      {
        src: "assets/fctm-landing-distance-0248.png",
        alt: "FCTM factors affecting landing distance diagram",
        caption: "Factors affecting landing distance. Source: FCTM PDF p.248; FCTM 6.18."
      }
    ]
  },
  {
    id: "non-normal-guidelines",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/Non-Normal|First Response|ECL|Memory Steps/i],
    itemPatterns: [/recognize|alert|EICAS|QRH|ECL|checklist|memory|PF|PM|land|nearest|divert|troubleshooting/i],
    title: "Non-normal handling sequence",
    citation: "FCTM PDF pp.289-291; FCTM 8.1-8.3",
    bullets: [
      "Recognize the malfunction clearly and precisely.",
      "Maintain airplane control: PF flies, PM accomplishes the non-normal checklist, and maximum practical use of autoflight is recommended to reduce workload.",
      "Analyze before acting: positively identify the malfunctioning system and review EICAS messages before selecting the NNC.",
      "Commands should be clear, concise, and paced so the PM can acknowledge and execute before the next command.",
      "Avoid troubleshooting beyond checklist-directed actions unless the published checklist leaves an unacceptable situation."
    ]
  },
  {
    id: "non-normal-approach-landing",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/Non-Normal|First Response|Landing|Nearest|ECL/i],
    itemPatterns: [/land|nearest|approach|landing|autobrake|speedbrake|configuration|divert|taxi|evacuation|QRH/i],
    title: "Non-normal approach, landing, and diversion judgment",
    citation: "FCTM PDF pp.291-292; FCTM 8.3-8.4",
    bullets: [
      "A rushed approach can complicate a non-normal situation; unless immediate landing is required, complete corrective actions before final approach.",
      "Plan an extended straight-in approach when time is needed for lengthy NNC actions such as alternate flap or gear extension.",
      "Arm autobrakes and speedbrakes unless the NNC precludes it; fly a normal glide path and land in the normal touchdown zone.",
      "After landing, use available deceleration measures to stop on the runway; the captain decides whether to evacuate or taxi clear.",
      "When directed to land at the nearest suitable airport, the PIC selects the safe course considering facilities, weather, and time."
    ]
  },
  {
    id: "airspeed-unreliable",
    modes: ["nonNormal", "normal"],
    stageLevel: true,
    stages: [/Takeoff|First Response|Airspeed|Non-Normal|Approach|Landing/i],
    itemPatterns: [/airspeed|80 knots|standby|pitch|thrust|AIRSPEED|unreliable|ground speed/i],
    title: "Unreliable airspeed recognition",
    citation: "FCTM PDF pp.303-304; FCTM 8.15-8.16",
    bullets: [
      "Crews should be familiar with normal pitch attitude and thrust settings for each phase; significant attitude changes for a normal speed/Mach can indicate an airspeed problem.",
      "If abnormal airspeed is recognized, return immediately to the target pitch attitude and thrust setting for that phase of flight.",
      "Once control is established, accomplish the Airspeed Unreliable NNC.",
      "Groundspeed from FMC/instrument displays and ATC radar groundspeed can support crosschecks.",
      "For unreliable airspeed approach and landing, establish landing configuration early, control descent with thrust, land about 1,000 to 1,500 feet beyond the threshold, and do not float."
    ]
  },
  {
    id: "memory-step-discipline",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/Memory Steps|Memory Item|Non-Normal/i],
    itemPatterns: [/memory|memorized|limitation|#|checklist|NNC|flight path/i],
    title: "Memory steps after flight path control",
    citation: "FCTM PDF pp.318-319; FCTM 8.30-8.31",
    bullets: [
      "For unusual events, the first priority is to maintain or regain control and establish an acceptable flight path.",
      "After flight path control has been established, accomplish the memory steps of the appropriate NNC.",
      "The emphasis of memory steps is containment of the problem.",
      "Reference steps are initiated after flight path and configuration are properly established.",
      "Complete applicable NNCs before final approach when circumstances allow, using caution if multiple checklists have conflicting directions."
    ]
  },
  {
    id: "beyond-scope-events",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/Non-Normal Scope|First Response|ECL|Memory Steps/i],
    itemPatterns: [/scope|multiple|conflicting|damage|handling|flight control|flap|asymmetrical|control/i],
    title: "Events beyond checklist scope",
    citation: "FCTM PDF pp.316-319; FCTM 8.28-8.31",
    bullets: [
      "Rare events may require multiple NNCs, selected checklist elements, or judgment where no specific checklist covers the situation.",
      "Use aerodynamic and systems knowledge to protect flight path: rudder can help with roll if ailerons are affected, asymmetric thrust may help directional control, and stabilizer trim/bank/thrust may help pitch control.",
      "If maneuver capability is uncertain, limiting bank to about 15 degrees provides additional stall margin.",
      "If flap operation is doubtful, avoid changing flap position unless performance requires it; if an increasing roll moment occurs during flap transition, return the flap handle to the previous position.",
      "Handling issues in the air can continue into the landing roll, so differential braking or asymmetric reverse may be needed for directional control."
    ]
  }
];
