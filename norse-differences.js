window.NORSE_DIFFERENCES = [
  {
    id: "norse-scope",
    modes: ["normal", "nonNormal"],
    stageLevel: true,
    stages: [/Operating Frame|QRH Operating Frame/i],
    title: "Norse source set",
    citation: "Norse FCOM Rev 9 PDF pp.169-243; Norse QRH Rev 9 PDF pp.35-654; Norse FCTM 787 Rev 19 PDF pp.71-83, 372-427",
    bullets: [
      "The Norse comparison uses the operator-specific FCOM, QRH, and FCTM supplied for this training aide.",
      "Norse differences are shown as overlays. They do not replace the base procedure text; use the Norse popup reference when flying the Norse profile.",
      "The first pass flags material procedure differences: operator EFB/OFP/loadsheet/ATL steps, added or split QRH checklists, memory-action changes, evacuation/tail-strike changes, and Norse stabilized-approach callouts."
    ]
  },
  {
    id: "norse-prelim-preflight",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Preliminary Preflight/i],
    itemPatterns: [/STATUS|oxygen|emergency equipment|parking brake|documents|EICAS|UTC/i],
    title: "Norse preliminary preflight additions",
    citation: "Norse FCOM Rev 9 PDF pp.179-180; FCOM NP.21.1-NP.21.2",
    bullets: [
      "Norse adds an EICAS display check and CANC/RCL clear after reviewing expected alert/memo messages.",
      "Norse adds a UTC TIME check on the AUX displays.",
      "After crew change or maintenance action, Norse specifically verifies CREW OXYGEN LOW is blank and MFD SYS page OXYGEN CREW PRESS is sufficient for dispatch.",
      "Norse expands equipment/document checks to ATL and aircraft documents, protective gloves, PBE, Portable EFB/Cabin iPad chargers, EMK green seals, and a flight deck door access system test as needed."
    ]
  },
  {
    id: "norse-cdu-efb",
    modes: ["normal"],
    stageLevel: true,
    stages: [/CDU\/EFB Preflight/i],
    itemPatterns: [/route|RTE|LEGS|OFP|EFB|PERF INIT|winds|flight number|takeoff ref|database/i],
    title: "Norse CDU/EFB preflight differences",
    citation: "Norse FCOM Rev 9 PDF pp.181-183; FCOM NP.21.3-NP.21.5",
    bullets: [
      "Norse warns that failure to enter enroute winds can cause flight-plan time and fuel burn errors.",
      "Norse says not to load an instrument approach before departure to prevent unwanted automatic LNAV arming/activation if TO/GA is pushed after takeoff.",
      "Norse uses Auto-Initialization and the MFD COMM COMPANY AUTO FLIGHT INIT REQUEST flow when ACARS is available.",
      "Norse requires the ICAO callsign from the OFP ATC field, Portable EFB setup, OFP preparation, FD Pro/OPT preparation, current WebManuals/FD Pro/OPT/QRH databases, and enroute/descent wind loading.",
      "Norse Performance Data preset uses OFP fields for ZFW, reserves, cruise altitude, cost index, fuel freeze temp limit, and step size."
    ]
  },
  {
    id: "norse-departure-prep",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Before Start|CDU\/EFB Preflight/i],
    itemPatterns: [/briefing|performance|fuel|gross weight|MCP|takeoff|loadsheets|ZFW|OPT/i],
    title: "Norse departure preparation split",
    citation: "Norse FCOM Rev 9 PDF pp.204-208; FCOM NP.21.26-NP.21.30",
    bullets: [
      "Norse inserts dedicated Departure Preparations, Route Check, and Performance Data Entry procedures before Before Start.",
      "Both pilots verify the cleared SID/departure routing in the CDU and the departure clearance stop altitude in the MCP altitude window.",
      "Norse requires both pilots to verify CDU fuel, final loadsheet/OFP fuel, fuel sufficiency, CDU gross weight, final loadsheet/OFP gross weight, and potable water quantity against the final loadsheet.",
      "Norse Route Check reads ORIGIN, DEST, FLT NO, airways/waypoints, destination distance-to-go, and fuel against the OFP, with extra oceanic/escape-route waypoint, track, and distance checks.",
      "Norse says no further CDU weight/performance/thrust/takeoff entries should be made after Performance Data Entry unless the procedure is repeated."
    ]
  },
  {
    id: "norse-before-start",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Before Start/i],
    itemPatterns: [/flight deck door|seat belt|EFB|hydraulic|start clearance|BEFORE START/i],
    title: "Norse before start additions",
    citation: "Norse FCOM Rev 9 PDF pp.209-211; FCOM NP.21.31-NP.21.33",
    bullets: [
      "Norse begins by requiring the Departure Preparations Procedure before completing Before Start.",
      "Norse sets FLIGHT DECK DOOR POWER ON and locks the flight deck door after papers/forms are handled and final passenger information is provided by the SCCM.",
      "Norse sets SEAT BELTS ON and places Portable EFBs, Cabin iPads, and PEDs in Flight Mode.",
      "Norse has the captain call 'BEFORE START PROCEDURE' before the hydraulic panel is set."
    ]
  },
  {
    id: "norse-takeoff",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Takeoff$/i],
    itemPatterns: [/TA\/RA|runway|thrust|80 KNOTS|V1|ROTATE|gear up|flap/i],
    title: "Norse takeoff flow and callouts",
    citation: "Norse FCOM Rev 9 PDF pp.216-218; FCOM NP.21.38-NP.21.40",
    bullets: [
      "Norse keeps the same takeoff architecture but uses operator callout wording and detailed pilot flying/pilot monitoring columns.",
      "Norse includes the automatic V1 aural verification and PM callout sequence in the FCOM procedure.",
      "Norse reinforces runway/entry verification before runway entry and heading verification after lining up."
    ]
  },
  {
    id: "norse-approach-stabilized",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Landing - ILS|Landing - Instrument Approach|Approach/i],
    itemPatterns: [/stabilized|minimums|500 ft|1000|autoland|LAND 2|LAND 3|NO AUTOLAND|CONTINUE|GO-AROUND/i],
    title: "Norse approach stabilization callouts",
    citation: "Norse FCOM Rev 9 PDF pp.222-234; FCOM NP.21.44-NP.21.56",
    bullets: [
      "Norse requires PM verification/callout of stabilized status at 1000 feet AAL: '1000 STABILIZED' or '1000 NOT STABILIZED.'",
      "If not stabilized at 1000 feet AAL in VMC, Norse allows continuation to 500 feet and requires '500 STABILIZED' or '500 NOT STABILIZED.'",
      "Norse uses 'CONTINUE' or 'GO-AROUND' at minimums.",
      "For autoland approaches, Norse includes LAND 2/LAND 3/ROLLOUT/FLARE armed and 500-foot autoland-status callouts."
    ]
  },
  {
    id: "norse-after-landing",
    modes: ["normal"],
    stageLevel: true,
    stages: [/After Landing/i],
    itemPatterns: [/cooldown|APU|taxi clearance|transponder|flaps|autobrake/i],
    title: "Norse after landing additions",
    citation: "Norse FCOM Rev 9 PDF p.237; FCOM NP.21.59",
    bullets: [
      "Norse engine cooldown is at least 5 minutes and starts after the reversers are stowed.",
      "Norse adds that taxi clearance is recorded to the CDU scratchpad.",
      "Norse notes APU start may be delayed if a long taxi time is expected."
    ]
  },
  {
    id: "norse-shutdown-secure",
    modes: ["normal"],
    stageLevel: true,
    stages: [/Shutdown|Secure/i],
    itemPatterns: [/parking brake|fuel control|EFB|status|IRS|battery|door|secure|chocks|Flight Mode/i],
    title: "Norse shutdown, doors, and secure flow",
    citation: "Norse FCOM Rev 9 PDF pp.238-243; FCOM NP.21.60-NP.21.64",
    bullets: [
      "Norse verifies engine cooldown timing of 5 minutes before fuel control switches are moved to CUTOFF.",
      "Norse sets Portable EFB Flight Mode Off during Shutdown.",
      "Norse adds a Passenger Doors Status Procedure after Shutdown and/or when passenger entry doors need to be opened: EICAS display DOORS MANUAL, then PA 'CABIN CREW, YOU MAY OPEN DOORS.'",
      "Norse Secure includes Portable EFB procedures: complete OFP, ATL and Journey Log entries, reset FD Pro, close EFB apps, switch off screens, and unplug chargers.",
      "Norse Secure turns BATTERY Off and uses FD DOOR POWER OFF wording before the remaining secure items."
    ]
  },
  {
    id: "norse-qrh-nnc1-index",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.1/i],
    title: "Norse NNC.1 index difference",
    citation: "Norse QRH Rev 9 PDF pp.43-52; QRH NNC.1",
    bullets: [
      "The Norse QRH NNC.1 index does not carry a separate DOOR FWD ACCESS checklist in the supplied Rev 9 QRH.",
      "Norse includes FD DOOR AUTO UNLOCK, FD DOOR LOCK FAIL, FD DOOR OPEN, and the same broad door/window family around PDF pp.45-52."
    ]
  },
  {
    id: "norse-qrh-nnc2-index",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.2/i],
    itemPatterns: [/CARGO HEAT|CABIN ALTITUDE AUTO|OUTFLOW/i],
    title: "Norse NNC.2 split cargo heat items",
    citation: "Norse QRH Rev 9 PDF pp.53-92; QRH NNC.2",
    bullets: [
      "Norse splits the older combined CARGO HEAT BULK, FWD item into separate CARGO HEAT BULK and CARGO HEAT FWD QRH entries.",
      "Norse retains CABIN ALTITUDE and CABIN ALTITUDE AUTO memory/action structure; the notable outflow-valve 12 o'clock wording appears in Tail Strike and Evacuation rather than CABIN ALTITUDE."
    ]
  },
  {
    id: "norse-overweight-landing",
    modes: ["nonNormal"],
    stageLevel: false,
    stages: [/QRH NNC\.0/i],
    itemPatterns: [/Overweight Landing|Landing Climb Limit|flaps 25|VREF 25/i],
    title: "Norse Overweight Landing changed",
    citation: "Norse QRH Rev 9 PDF pp.39-41; QRH NNC.0 Overweight Landing",
    bullets: [
      "Norse starts with a choice: one engine inoperative or at reduced thrust versus both engines running normally.",
      "For both engines running normally, Norse refers to the Approach or Landing Climb Limited Weight table or other approved source.",
      "Norse raises the stated approach speed cap for flaps 25 wind/gust additives to 185 knots."
    ]
  },
  {
    id: "norse-nnc6-additions",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.6/i],
    itemPatterns: [/BATTERY|ELEC/i],
    title: "Norse NNC.6 added battery checklist",
    citation: "Norse QRH Rev 9 PDF pp.127-147; QRH NNC.6",
    bullets: [
      "Norse adds APU BATTERY for APU battery failure, including battery venting notes and pack/ground-personnel considerations.",
      "Norse also carries MAIN BATTERY as a separate failed-battery condition, distinct from MAIN BATTERY DISCH and MAIN BATTERY LOW."
    ]
  },
  {
    id: "norse-eng-fail",
    modes: ["nonNormal"],
    stageLevel: false,
    stages: [/QRH NNC\.7/i],
    itemPatterns: [/ENG FAIL L, R|Engine speed is below idle|restart/i],
    title: "Norse ENG FAIL memory/action change",
    citation: "Norse QRH Rev 9 PDF pp.158-163; QRH NNC.7 ENG FAIL L, R",
    bullets: [
      "Norse adds early branches for airframe vibrations with abnormal engine indications and for engine separation, both directing to Eng Svr Damage/Sep L, R.",
      "The restart wording changes from 'may be attempted' to 'can be attempted' if there is no abnormal airframe vibration.",
      "Norse is arranged for the operator's engine configuration and removes the older GE/RR option split seen in the baseline source."
    ]
  },
  {
    id: "norse-fire-eng",
    modes: ["nonNormal"],
    stageLevel: false,
    stages: [/QRH NNC\.8/i],
    itemPatterns: [/FIRE ENG L, R|Fire is detected in the affected engine|Engine fire/i],
    title: "Norse FIRE ENG ground/in-flight branch",
    citation: "Norse QRH Rev 9 PDF pp.192-194; QRH NNC.8 FIRE ENG L, R",
    bullets: [
      "Norse begins with a choice: on the ground go to later checklist steps, in flight continue with the confirm/off/idle/cutoff/pull memory sequence.",
      "Norse keeps the second-bottle/30-second logic but renumbers the action sequence around the ground/in-flight branch."
    ]
  },
  {
    id: "norse-nnc7-additions",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.7/i],
    title: "Norse NNC.7 added/removed engine items",
    citation: "Norse QRH Rev 9 PDF pp.149-188; QRH NNC.7",
    bullets: [
      "Norse adds ENG TURB DAMAGE L, R for engine turbine damage.",
      "The earlier ENG TBV OPEN L, R checklist is not present as a separate checklist in the supplied Norse QRH Rev 9.",
      "Several engine reduced-thrust/landing branches now reference Performance Inflight-QRH tables or other approved source."
    ]
  },
  {
    id: "norse-airspeed-unreliable",
    modes: ["nonNormal"],
    stageLevel: false,
    stages: [/QRH NNC\.10/i],
    itemPatterns: [/AIRSPEED UNRELIABLE|AOA SPD|GPS ALT|pitch attitude|thrust/i],
    title: "Norse AIRSPEED UNRELIABLE memory actions changed",
    citation: "Norse QRH Rev 9 PDF pp.285-293; QRH NNC.10 AIRSPEED UNRELIABLE",
    bullets: [
      "Norse memory actions are explicit: push autopilot disconnect, set both A/T ARM switches OFF, set both F/D switches OFF.",
      "Norse sets gear-up pitch/thrust targets directly: flaps extended 10 degrees and 85% N1; flaps up 4 degrees and 70% N1.",
      "Norse then selects Captain's AIR DATA/ATT source selector ALTN and identifies reliable sources including ground speed, radio altitude, and the Flight With Unreliable Airspeed table."
    ]
  },
  {
    id: "norse-nnc10-additions",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.10/i],
    title: "Norse NNC.10 added display/navigation checklists",
    citation: "Norse QRH Rev 9 PDF pp.285-328; QRH NNC.10",
    bullets: [
      "Norse adds Altimeter Error, PFD UNRELIABLE CAPT/F/O, Radio Alt Unreliable, ADS-B OUT, and GPS Data Unreliable entries.",
      "Norse AIRSPEED UNRELIABLE is materially revised from the older baseline and should be trained from the Norse QRH page reference."
    ]
  },
  {
    id: "norse-nnc9-additions",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.9/i],
    title: "Norse NNC.9 added flap/slat checklists",
    citation: "Norse QRH Rev 9 PDF pp.231-282; QRH NNC.9",
    bullets: [
      "Norse adds Flap Lever Inoperative.",
      "Norse adds Flaps + Slats Fail, to be used only when directed by FLAPS DRIVE or SLATS DRIVE.",
      "Norse Flaps + Slats Fail says not to use alternate flaps and to set GPWS FLAP OVRD."
    ]
  },
  {
    id: "norse-nnc12-addition",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH NNC\.12/i],
    title: "Norse NNC.12 added fuel checklist",
    citation: "Norse QRH Rev 9 PDF pp.377-416; QRH NNC.12",
    bullets: [
      "Norse adds Fuel Center Transfer as a QRH entry.",
      "Use the Norse QRH reference when a fuel-center-transfer condition appears in the Norse ECL/QRH set."
    ]
  },
  {
    id: "norse-tail-strike",
    modes: ["nonNormal"],
    stageLevel: false,
    stages: [/QRH NNC\.15/i],
    itemPatterns: [/TAIL STRIKE|Tail Strike|tail hits|tail strike/i],
    title: "Norse Tail Strike depressurization wording changed",
    citation: "Norse QRH Rev 9 PDF pp.460-461; QRH NNC.15 TAIL STRIKE and Tail Strike",
    bullets: [
      "Norse caution wording is 'Continued pressurization of the airplane can cause further structural damage.'",
      "Norse adds/use wording to avoid large and rapid pressurization changes by momentary actuation of the outflow valve manual switches.",
      "Norse depressurization target is moving the outflow valve manual switches to OPEN until the indications show the 12 o'clock position, not fully open.",
      "Norse also has an unannunciated Tail Strike condition for suspected or confirmed tail strike."
    ]
  },
  {
    id: "norse-evacuation",
    modes: ["nonNormal"],
    stageLevel: true,
    stages: [/QRH Evacuation Checklist/i],
    itemPatterns: [/OUTFLOW|evacuate|tower|ATC|fire/i],
    title: "Norse Evacuation checklist changed",
    citation: "Norse QRH Rev 9 PDF p.654; QRH Evacuation",
    bullets: [
      "Norse moves the outflow valve manual switches to OPEN until the outflow valve indications show the 12 o'clock position to depressurize the airplane.",
      "Norse uses 'Advise ATC' instead of 'Advise the tower.'",
      "Norse step 9 applies if an engine or APU fire is observed or indicated, rather than only if a fire warning occurs."
    ]
  }
];
