window.SCAN_FLOW_DETAILS = {};

window.SCAN_FLOWS = [
  {
    id: "electrical-power-up",
    title: "ELECTRICAL POWER UP",
    sourcePage: 2,
    citation: "Norse Scan Flows v1.2, PDF p.2",
    images: [{ src: "assets/norse-scan-flow-02.png", alt: "Norse scan flow Electrical Power Up", caption: "Electrical Power Up. Source: Norse Scan Flows v1.2 PDF p.2." }],
    sections: [
      {
        role: "Captain or F/O",
        items: [
          { text: "1. Battery", detail: "battery" },
          { text: "2. C1 & C2 Elec pumps", detail: "hydraulicPumps" },
          { text: "3. Demand pumps", detail: "hydraulicPumps" },
          { text: "4. Wipers", detail: "wipers" },
          { text: "5. Landing Gear lever", detail: "landingGearLever" },
          { text: "6. Alternate flaps", detail: "alternateFlaps" }
        ],
        notes: ["Electrical power - Establish", "(Ext PWR or APU)"]
      }
    ]
  },
  {
    id: "preliminary-preflight-procedure",
    title: "PRELIMINARY PREFLIGHT PROCEDURE",
    sourcePage: 3,
    citation: "Norse Scan Flows v1.2, PDF p.3",
    images: [{ src: "assets/norse-scan-flow-03.png", alt: "Norse scan flow Preliminary Preflight Procedure", caption: "Preliminary Preflight Procedure. Source: Norse Scan Flows v1.2 PDF p.3." }],
    sections: [
      {
        role: "Captain or F/O",
        items: [
          { text: "1. IRS Selectors", detail: "irsSelectors" },
          { text: "2. STATUS Display", detail: "statusDisplay" },
          { text: "3. Verify sufficient for flight", detail: "sufficientForFlight" },
          { text: "4. EICAS Display", detail: "eicasDisplay" },
          { text: "5. Parking brake", detail: "parkingBrake" }
        ],
        notes: ["-Oxygen pressure", "-Hydraulic qty", "-Engine oil qty", "Maintenance documents", "Emergency equipment"]
      }
    ]
  },
  {
    id: "pre-flight-procedure",
    title: "Pre-flight Procedure",
    sourcePage: 4,
    citation: "Norse Scan Flows v1.2, PDF p.4",
    images: [{ src: "assets/norse-scan-flow-04.png", alt: "Norse scan flow Pre-flight Procedure", caption: "Pre-flight Procedure. Source: Norse Scan Flows v1.2 PDF p.4." }],
    sections: [
      {
        role: "Captain",
        items: [
          { text: "1. EFIS, DSP & MCP", detail: "efisDspMcp" },
          { text: "2. Oxygen & left sidewall", detail: "oxygenLeft" },
          { text: "3. Fwd panel & ISFD", detail: "forwardPanelIsfd" },
          { text: "4. Speed brake, Thrust levers, Flap lever", detail: "speedThrustFlap" },
          { text: "5. Parking brake, Stab cutout, Fuel control switches, Alt flaps reset", detail: "stabFuelAlt" },
          { text: "6. Left ACP", detail: "acpTcp" },
          { text: "7. HUD combiner down", detail: "hudCombiner" }
        ],
        notes: ["Seat & rudder pedals", "Seat belts & harness", "”PREFLIGHT CHECKLIST”"]
      },
      {
        role: "F/O",
        items: [
          { text: "1-4 Overhead panel", detail: "overheadPanel" },
          { text: "5. F/D, DSP & EFIS", detail: "flightDirector" },
          { text: "6. Oxygen & right sidewall", detail: "oxygenLeft" },
          { text: "7. Fwd panel & Ldg gear panel", detail: "landingGearPanel" },
          { text: "8. Secondary engine indications", detail: "secondaryEngineIndications" },
          { text: "9. Status messages & Checklist", detail: "checklistDisplay" },
          { text: "10. Left TCP", detail: "acpTcp" },
          { text: "11. Observer ACP, FD door access", detail: "fdDoor" },
          { text: "12. Engine fire panel, ATP, Center TCP, Printer", detail: "acpTcp" },
          { text: "13. Right TCP, Right ACP, Lights", detail: "acpTcp" },
          { text: "14. HUD combiner down", detail: "hudCombiner" }
        ],
        notes: ["Seat & rudder pedals", "Seat belts & harness", "Complete the PREFLIGHT CHECKLIST"]
      }
    ]
  },
  {
    id: "before-start-procedure",
    title: "Before Start Procedure",
    sourcePage: 5,
    citation: "Norse Scan Flows v1.2, PDF p.5",
    images: [{ src: "assets/norse-scan-flow-05.png", alt: "Norse scan flow Before Start Procedure", caption: "Before Start Procedure. Source: Norse Scan Flows v1.2 PDF p.5." }],
    sections: [
      {
        role: "Captain",
        items: [
          { text: "1. CDU Display", detail: "cduDisplay" },
          { text: "2. MCP (Speed selector, LNAV/VNAV, HDG/TRK, Altitude)", detail: "mcpBeforeStart" },
          { text: "3. Nose gear steering", detail: "noseGearSteering" },
          { text: "4. Trim", detail: "trim" }
        ],
        notes: ["Briefing completed", "Clearance to pressurize hydraulics", "”BEFORE START CHECKLIST”"]
      },
      {
        role: "F/O",
        items: [
          { text: "1. FD door", detail: "fdDoor" },
          { text: "2. CDU display", detail: "cduDisplay" },
          { text: "3. Exterior doors", detail: "exteriorDoors" },
          { text: "4. Hydraulic panel", detail: "hydraulicPumps" },
          { text: "5. Fuel panel", detail: "fuelPanel" },
          { text: "6. Beacon light", detail: "beacon" },
          { text: "7. CANCEL/RECALL switch", detail: "cancelRecall" }
        ],
        notes: ["Briefing completed", "Start clearance", "Complete the BEFORE START CHECKLIST"]
      }
    ]
  },
  {
    id: "before-taxi-procedure",
    title: "Before Taxi Procedure",
    sourcePage: 6,
    citation: "Norse Scan Flows v1.2, PDF p.6",
    images: [{ src: "assets/norse-scan-flow-06.png", alt: "Norse scan flow Before Taxi Procedure", caption: "Before Taxi Procedure. Source: Norse Scan Flows v1.2 PDF p.6." }],
    sections: [
      {
        role: "Captain",
        items: [
          { text: "1. Flight control check", detail: "flightControls" },
          { text: "2. RECALL check", detail: "cancelRecall" }
        ],
        notes: ["Ground equipment clear", "”BEFORE TAXI CHECKLIST”"]
      },
      {
        role: "F/O",
        items: [
          { text: "1. APU", detail: "apu" },
          { text: "2. Anti-ice", detail: "antiIce" },
          { text: "4. Flap lever", detail: "flapLever" },
          { text: "5. Transponder", detail: "transponder" },
          { text: "6. Secondary engine indications", detail: "secondaryEngineIndications" },
          { text: "7. RECALL check", detail: "cancelRecall" }
        ],
        notes: ["Ground equipment clear", "Complete the BEFORE TAXI CHECKLIST"]
      }
    ]
  },
  {
    id: "before-takeoff-takeoff-procedure",
    title: "Before Takeoff - Takeoff Procedure",
    sourcePage: 7,
    citation: "Norse Scan Flows v1.2, PDF p.7",
    images: [{ src: "assets/norse-scan-flow-07.png", alt: "Norse scan flow Before Takeoff - Takeoff Procedure", caption: "Before Takeoff - Takeoff Procedure. Source: Norse Scan Flows v1.2 PDF p.7." }],
    sections: [
      {
        role: "PF",
        items: [
          { text: "1. WX radar/Terrain display", detail: "wxRadarTerrain" },
          { text: "2. VSD", detail: "vsd" }
        ],
        notes: ["Update takeoff briefing", "Verify Runway & Runway entry point", "”BEFORE TAKEOFF CHECKLIST”"]
      },
      {
        role: "PM",
        items: [
          { text: "1. PA ”CABIN CREW BE SEATED FOR DEPARTURE”", detail: "cabinLandingPa" },
          { text: "2. Transponder TA/RA", detail: "transponder" },
          { text: "3. WX radar/Terrain display", detail: "wxRadarTerrain" },
          { text: "4. VSD", detail: "vsd" },
          { text: "5. Strobe lights", detail: "strobeLights" },
          { text: "6. Landing lights (with takeoff clearance)", detail: "landingLights" }
        ],
        notes: ["Verify Runway & Runway entry point", "Complete the BEFORE TAKEOFF CHECKLIST"]
      }
    ]
  },
  {
    id: "decent-procedure",
    title: "Decent Procedure",
    sourcePage: 8,
    citation: "Norse Scan Flows v1.2, PDF p.8",
    images: [{ src: "assets/norse-scan-flow-08.png", alt: "Norse scan flow Decent Procedure", caption: "Decent Procedure. Source: Norse Scan Flows v1.2 PDF p.8." }],
    sections: [
      {
        role: "PF",
        items: [
          { text: "1. RECALL & Notes check", detail: "recallNotes" },
          { text: "2. Landing performance", detail: "landingPerformance" },
          { text: "3. Baro/Radio Minimums", detail: "minimums" },
          { text: "4. Verify VREF", detail: "vref" }
        ],
        notes: ["Approach briefing", "”DESCENT CHECKLIST”"]
      },
      {
        role: "PM",
        items: [
          { text: "1. RNP check", detail: "rnp" },
          { text: "2. RECALL & Notes check", detail: "recallNotes" },
          { text: "3. Landing performance", detail: "landingPerformance" },
          { text: "4. Baro/Radio Minimums", detail: "minimums" },
          { text: "5. Enter VREF", detail: "vref" },
          { text: "6. NAVRAD", detail: "navrad" },
          { text: "7. AUTOBRAKE", detail: "autobrake" },
          { text: "8. PA -”CABIN CREW, PREPARE CABIN FOR LANDING” (25.000’)", detail: "cabinLandingPa" }
        ],
        notes: ["Complete the DESCENT CHECKLIST"]
      }
    ]
  },
  {
    id: "approach-procedure",
    title: "Approach Procedure",
    sourcePage: 9,
    citation: "Norse Scan Flows v1.2, PDF p.9",
    images: [{ src: "assets/norse-scan-flow-09.png", alt: "Norse scan flow Approach Procedure", caption: "Approach Procedure. Source: Norse Scan Flows v1.2 PDF p.9." }],
    sections: [
      {
        role: "PF",
        items: [
          { text: "1. Altimeter (transition)", detail: "altimeter" },
          { text: "2. VSD", detail: "vsd" },
          { text: "3. Update arrival & approach", detail: "updateArrivalApproach" }
        ],
        notes: ["Update briefing", "”APPROACH CHECKLIST”"]
      },
      {
        role: "PM",
        items: [
          { text: "1. RNP check", detail: "rnp" },
          { text: "2. Seatbelts (15.000’)", detail: "seatbelts" },
          { text: "3. Landing lights (10.000’)", detail: "landingLights" },
          { text: "4. Altimeter (transition)", detail: "altimeter" },
          { text: "5. VSD", detail: "vsd" },
          { text: "6. Update arrival & approach", detail: "updateArrivalApproach" }
        ],
        notes: ["Complete the APPROACH CHECKLIST"]
      }
    ]
  },
  {
    id: "after-landing-procedure",
    title: "After Landing Procedure",
    sourcePage: 10,
    citation: "Norse Scan Flows v1.2, PDF p.10",
    images: [{ src: "assets/norse-scan-flow-10.png", alt: "Norse scan flow After Landing Procedure", caption: "After Landing Procedure. Source: Norse Scan Flows v1.2 PDF p.10." }],
    sections: [
      {
        role: "PF",
        items: [
          { text: "1. Speedbrake (Verified by CPT)", detail: "speedbrake" },
          { text: "2. WX Radar", detail: "wxRadarTerrain" }
        ]
      },
      {
        role: "PM",
        items: [
          { text: "1. APU", detail: "apu" },
          { text: "2. Engine Anti-Ice", detail: "antiIce" },
          { text: "3. Exterior lights", detail: "exteriorLights" },
          { text: "4. WX radar", detail: "wxRadarTerrain" },
          { text: "5. Autobrake", detail: "autobrake" },
          { text: "6. Flap lever", detail: "flapLever" },
          { text: "7. Transponder", detail: "transponder" }
        ]
      }
    ]
  },
  {
    id: "shutdown-procedure",
    title: "Shutdown Procedure",
    sourcePage: 11,
    citation: "Norse Scan Flows v1.2, PDF p.11",
    images: [{ src: "assets/norse-scan-flow-11.png", alt: "Norse scan flow Shutdown Procedure", caption: "Shutdown Procedure. Source: Norse Scan Flows v1.2 PDF p.11." }],
    sections: [
      {
        role: "Captain",
        items: [
          { text: "1. Parking Brake", detail: "parkingBrake" },
          { text: "2. Verify 5 min cooldown", detail: "apu" },
          { text: "3. Fuel control switches", detail: "fuelControl" },
          { text: "4. Flight director", detail: "flightDirector" },
          { text: "5. EFB", detail: "efb" }
        ],
        notes: ["”SHUTDOWN CHECKLIST”"]
      },
      {
        role: "F/O",
        items: [
          { text: "1. Seat belt selector", detail: "seatbelts" },
          { text: "2. Hydraulic panel", detail: "hydraulicPumps" },
          { text: "3. Fuel pump switches", detail: "fuelPanel" },
          { text: "4. Beacon light", detail: "beacon" },
          { text: "5. Flight director", detail: "flightDirector" },
          { text: "6. Transponder", detail: "transponder" },
          { text: "7. EFB", detail: "efb" }
        ],
        notes: ["Complete the SHUTDOWN CHECKLIST", "Check EICAS memo ”DOORS MANUAL”", "PA ”CABIN CREW, YOU MAY OPEN DOORS”"]
      }
    ]
  },
  {
    id: "secure-procedure",
    title: "Secure Procedure",
    sourcePage: 12,
    citation: "Norse Scan Flows v1.2, PDF p.12",
    images: [{ src: "assets/norse-scan-flow-12.png", alt: "Norse scan flow Secure Procedure", caption: "Secure Procedure. Source: Norse Scan Flows v1.2 PDF p.12." }],
    sections: [
      {
        role: "Captain",
        items: [
          { text: "1. EFB power", detail: "efb" },
          { text: "2. HUD combiner", detail: "hudCombiner" }
        ],
        notes: ["”SECURE CHECKLIST”"]
      },
      {
        role: "F/O",
        items: [
          { text: "1. IRS selectors", detail: "irsSelectors" },
          { text: "2. Battery", detail: "battery" },
          { text: "3. Emergency lights", detail: "emergencyEquipment" },
          { text: "4. Flight deck door power", detail: "fdDoor" },
          { text: "5. Pack switches", detail: "packs" },
          { text: "6. EFB power", detail: "efb" },
          { text: "7. HUD combiner", detail: "hudCombiner" }
        ],
        notes: ["Complete the SECURE CHECKLIST"]
      }
    ]
  }
];

Object.assign(window.SCAN_FLOW_DETAILS, {
  preflightBattery: {
    citation: "Norse FCOM Rev 9, PDF p.190; FCOM NP.21.12.",
    bullets: [
      "ELECTRICAL panel ........................................................................... Set",
      "BATTERY switch .................................................................... ON",
      "Verify that the OFF light is extinguished."
    ]
  },
  secureBattery: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "BATTERY switch ............................................................ Off F/O"
    ]
  },
  preflightHydraulicPumps: {
    citation: "Norse FCOM Rev 9, PDF p.191; FCOM NP.21.13.",
    bullets: [
      "HYDRAULIC panel ............................................................................Set",
      "LEFT and RIGHT ENGINE PRIMARY pump switches .........ON",
      "Verify that the FAULT lights are illuminated.",
      "CENTER 1 and CENTER 2 ELECTRIC pump selectors ...... OFF"
    ]
  },
  beforeStartHydraulicPumps: {
    citation: "Norse FCOM Rev 9, PDF pp.209-210; FCOM NP.21.31-NP.21.32.",
    bullets: [
      "Call \"BEFORE START PROCEDURE.\" C",
      "If pushback is needed: Nose gear steering .......................... Verify locked out C",
      "HYDRAULIC panel ........................................................ Set F/O",
      "RIGHT ELECTRIC DEMAND pump selector ..................AUTO",
      "Verify that FAULT light is extinguished.",
      "CENTER 1 and CENTER 2 ELECTRIC pump selectors ..AUTO",
      "Verify that the FAULT lights are extinguished.",
      "LEFT ELECTRIC DEMAND pump selector ..................... AUTO",
      "Verify that the FAULT light is extinguished."
    ]
  },
  shutdownHydraulicPumps: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "HYDRAULIC panel........................................................ Set F/O",
      "LEFT ELECTRIC DEMAND pump selector .........................OFF",
      "CENTER 1 and CENTER 2 ELECTRIC pump selectors ......OFF",
      "RIGHT ELECTRIC DEMAND pump selector ......................OFF"
    ]
  },
  preflightWipers: {
    citation: "Norse FCOM Rev 9, PDF pp.190, 195; FCOM NP.21.12, NP.21.17.",
    bullets: [
      "L WIPER selector ............................................................................. OFF",
      "R WIPER selector ............................................................................. OFF"
    ]
  },
  preflightLandingGearLever: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "Landing gear panel .......................................................................... Set",
      "Landing gear lever .................................................................. DN",
      "ALTERNATE GEAR switch ........................................... Guard closed"
    ]
  },
  preflightAlternateFlaps: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "Alternate flaps panel ...................................................................... Set",
      "ALTERNATE FLAPS selector .............................................. OFF",
      "Verify that the guard is closed."
    ]
  },
  preliminaryIrsSelectors: {
    citation: "Norse FCOM Rev 9, PDF p.179; FCOM NP.21.1.",
    bullets: [
      "IRS selectors ................................................... OFF 30 seconds, then ON",
      "Verify that the ON BAT light is extinguished."
    ]
  },
  secureIrsSelectors: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "IRS selectors ................................................................. OFF F/O"
    ]
  },
  preliminaryStatusDisplay: {
    citation: "Norse FCOM Rev 9, PDF p.179; FCOM NP.21.1.",
    bullets: [
      "STATUS display ............................................................................ Check",
      "Verify that only expected messages are shown.",
      "Verify that the following are sufficient for flight:",
      "Crew oxygen pressure; Hydraulic quantity; Engine oil quantity."
    ]
  },
  preliminarySufficientForFlight: {
    citation: "Norse FCOM Rev 9, PDF p.179; FCOM NP.21.1.",
    bullets: [
      "Verify that the following are sufficient for flight:",
      "Crew oxygen pressure",
      "Hydraulic quantity",
      "Engine oil quantity",
      "Verify the CREW OXYGEN LOW alert message is blank and that MFD SYS page OXYGEN CREW PRESS is sufficient for dispatch."
    ]
  },
  preliminaryEicasDisplay: {
    citation: "Norse FCOM Rev 9, PDF p.179; FCOM NP.21.1.",
    bullets: [
      "EICAS display ............................................................................... Check",
      "Verify that only expected alert and memo messages are shown.",
      "After all messages have been reviewed, push CANC/RCL to clear the EICAS display.",
      "This ensures prompt detection of new alert messages."
    ]
  },
  preliminaryParkingBrake: {
    citation: "Norse FCOM Rev 9, PDF p.180; FCOM NP.21.2.",
    bullets: [
      "Parking brake ................................................................ As needed",
      "Set the parking brake if the brake wear indicators are to be checked during the exterior inspection."
    ]
  },
  shutdownParkingBrake: {
    citation: "Norse FCOM Rev 9, PDF pp.238-240; FCOM NP.21.60-NP.21.62.",
    bullets: [
      "Parking brake .................................................................. Set C or F/O",
      "Verify that the PARKING BRAKE SET message is shown.",
      "After wheel chocks are in place: Parking brake .................................................Release C"
    ]
  },
  preflightEfisDspMcp: {
    citation: "Norse FCOM Rev 9, PDF pp.200-201; FCOM NP.21.22-NP.21.23.",
    bullets: [
      "EFIS control panel .............................................................................. Set",
      "MINIMUMS reference selector ........................RADIO or BARO",
      "MINIMUMS selector ..... Set decision height or altitude reference",
      "BAROMETRIC selector ....................... Set local altimeter setting",
      "Mode control panel ..............................................................................Set",
      "FLIGHT DIRECTOR switch ...................................................ON",
      "AUTOTHROTTLE ARM switches...................................... ARM",
      "Autopilot DISENGAGE bar ..................................................... UP"
    ]
  },
  preflightOxygen: {
    citation: "Norse FCOM Rev 9, PDF pp.196, 201; FCOM NP.21.18, NP.21.23.",
    bullets: [
      "Oxygen .................................................................................. Test and set",
      "Oxygen mask ..........................................Stowed and doors closed",
      "RESET/TEST switch ...............................................Push and hold",
      "Verify that the yellow cross shows momentarily in the flow indicator.",
      "RESET/TEST switch ......................................................... Release",
      "Emergency/100%/Normal selector....................................... 100%"
    ]
  },
  preflightForwardPanelIsfd: {
    citation: "Norse FCOM Rev 9, PDF pp.196, 201-202; FCOM NP.21.18, NP.21.23-NP.21.24.",
    bullets: [
      "FORWARD PANEL brightness control ...............................Mid position",
      "AIR DATA/ATTITUDE source selector ....................................... AUTO",
      "PFD/MFD selector ....................................................................... NORM",
      "Integrated standby flight display ......................................................... Set",
      "Verify that the approach mode display is blank.",
      "Set local altimeter setting.",
      "Verify that the flight instrument indications are correct.",
      "Verify that no flags or messages are shown."
    ]
  },
  preflightSpeedThrustFlap: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "SPEEDBRAKE lever ...................................................................DOWN",
      "Reverse thrust levers ............................................................... Down",
      "Thrust levers .......................................................................... Closed",
      "Flap lever ................................................. Set to agree with flap position"
    ]
  },
  preflightStabFuelAlt: {
    citation: "Norse FCOM Rev 9, PDF pp.202-203; FCOM NP.21.24-NP.21.25.",
    bullets: [
      "Parking brake ............................................................................ Set",
      "STAB CUTOUT switches ................................................. Guards closed",
      "FUEL CONTROL switches ................................................... CUTOFF",
      "Alternate flaps panel ...................................................................... Set",
      "ALTERNATE FLAPS selector .............................................. OFF"
    ]
  },
  preflightAcpTcp: {
    citation: "Norse FCOM Rev 9, PDF pp.197-198, 203; FCOM NP.21.19-NP.21.20, NP.21.25.",
    bullets: [
      "Left tuning and control panel...............................................................Set",
      "Right tuning and control panel ............................................................ Set",
      "VHF/HF ................................................................................. Select/Set",
      "WEATHER RADAR ........................................................... Select",
      "TRANSPONDER ................................................................ Select",
      "Captain's/First officer's audio control panel ........................ As needed"
    ]
  },
  preflightSeatRudder: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "Seat ................................................................................................ Adjust",
      "Adjust the seat for optimum eye reference.",
      "Rudder pedals ................................................................................ Adjust",
      "Adjust the rudder pedals to allow full rudder pedal and brake pedal movement.",
      "Stow the rudder pedal adjust crank."
    ]
  },
  preflightSeatBeltsHarness: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "Seat belt and shoulder harness ....................................................... Adjust"
    ]
  },
  preflightHudCombiner: {
    citation: "Norse FCOM Rev 9, PDF p.199; FCOM NP.21.21.",
    bullets: [
      "HUD combiner ............................................................................... Down",
      "HUD BRIGHTNESS control ..............................................Adjust"
    ]
  },
  secureHudCombiner: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "HUD combiner ............................................................. Stow C, F/O",
      "Ensure the combiner is fully raised and securely latched in the stowed position."
    ]
  },
  preflightOverheadPanel: {
    citation: "Norse FCOM Rev 9, PDF pp.190-195; FCOM NP.21.12-NP.21.17.",
    bullets: [
      "FLIGHT CONTROL SURFACES panel ............................................ Set",
      "ELECTRICAL panel ........................................................................... Set",
      "WINDOW HEAT panel .......................................................................Set",
      "HYDRAULIC panel ............................................................................Set",
      "APU, CARGO FIRE, ENGINE, FUEL JETTISON, ANTI-ICE, lighting, cargo, and AIR CONDITIONING panels ................................ Set as applicable."
    ]
  },
  preflightFlightDirector: {
    citation: "Norse FCOM Rev 9, PDF pp.195, 201-202; FCOM NP.21.17, NP.21.23-NP.21.24.",
    bullets: [
      "FLIGHT DIRECTOR switch .............................................................. ON",
      "Verify that the flight mode annunciations are correct:",
      "Autothrottle mode is blank; Roll mode is TO/GA or HUD TO/GA; Pitch mode is TO/GA; AFDS status is FLT DIR."
    ]
  },
  shutdownFlightDirector: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "FLIGHT DIRECTOR switches ..................................... OFF C, F/O"
    ]
  },
  preflightLandingGearPanel: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "Landing gear panel .......................................................................... Set",
      "Landing gear lever .................................................................. DN",
      "ALTERNATE GEAR switch ........................................... Guard closed"
    ]
  },
  preflightSecondaryEngineIndications: {
    citation: "Norse FCOM Rev 9, PDF p.197; FCOM NP.21.19.",
    bullets: [
      "Engine indications ...................................................................... Check",
      "Verify that existing engine indications show.",
      "Verify that no exceedance is shown."
    ]
  },
  beforeTaxiSecondaryEngineIndications: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Secondary Engine Indications ......................................... Off F/O"
    ]
  },
  preflightStatusChecklist: {
    citation: "Norse FCOM Rev 9, PDF p.197; FCOM NP.21.19.",
    bullets: [
      "MFD .............................................................................................. Check",
      "Select the status display.",
      "Status messages ............................................................Check",
      "CHECKLIST display switch ..................................................Push",
      "RESETS ...............................................................................Select",
      "Verify that the AIRLINE DATABASE is correct.",
      "RESET ALL .........................................................................Select"
    ]
  },
  preflightFdDoorAccess: {
    citation: "Norse FCOM Rev 9, PDF p.197; FCOM NP.21.19.",
    bullets: [
      "FLIGHT DECK DOOR ACCESS selector ...................................AUTO"
    ]
  },
  beforeStartFdDoor: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "FLIGHT DECK DOOR POWER switch ....................... ON F/O",
      "Flight deck door .......................................Closed and locked F/O",
      "Lock the flight deck door after papers are on board, required forms/documents have been given to ground staff, and final passenger information has been provided by the SCCM."
    ]
  },
  secureFdDoor: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "FD DOOR POWER switch ........................................... OFF F/O"
    ]
  },
  beforeStartCduDisplay: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "CDU display .................................................................... Set C, F/O",
      "Normally the PF selects the TAKEOFF REF page.",
      "Normally the PM selects the LEGS page."
    ]
  },
  beforeStartMcp: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "MCP ................................................................................. Set C",
      "IAS/MACH selector ................................................................. Set",
      "Verify LNAV armed as needed.",
      "Verify VNAV armed.",
      "Initial heading or track ............................................................. Set",
      "Initial altitude ........................................................................... Set"
    ]
  },
  beforeStartNoseGearSteering: {
    citation: "Norse FCOM Rev 9, PDF pp.209-210; FCOM NP.21.31-NP.21.32.",
    bullets: [
      "If pushback is needed:",
      "Nose gear steering .......................... Verify locked out C",
      "If the tow bar is connected, do not pressurize hydraulic systems until nose gear steering is locked out."
    ]
  },
  beforeStartTrim: {
    citation: "Norse FCOM Rev 9, PDF pp.210-211; FCOM NP.21.32-NP.21.33.",
    bullets: [
      "Trim ................................................................................. Set C",
      "Stabilizer trim - ___ UNITS",
      "Set the trim for takeoff.",
      "Verify that the trim is in the greenband.",
      "Rudder trim .........................................................................0 units"
    ]
  },
  beforeStartExteriorDoors: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "Exterior doors ..................................................Verify closed F/O"
    ]
  },
  beforeStartFuelPanel: {
    citation: "Norse FCOM Rev 9, PDF p.210; FCOM NP.21.32.",
    bullets: [
      "Fuel panel ........................................................................ Set F/O",
      "LEFT and RIGHT FUEL PUMP switches ............................... ON",
      "If the FUEL IN CENTER message shows:",
      "CENTER FUEL PUMP switches .....................................ON"
    ]
  },
  shutdownFuelPumps: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "FUEL PUMP switches .................................................. OFF F/O"
    ]
  },
  beforeStartBeacon: {
    citation: "Norse FCOM Rev 9, PDF p.211; FCOM NP.21.33.",
    bullets: [
      "Start clearance............................................................ Obtain F/O",
      "BEACON light switch .................................................... ON F/O",
      "The aircraft beacon light must not be switched on prior to ground staff clearance to pressurize hydraulic systems and ATC clearance to start engines and/or pushback."
    ]
  },
  shutdownBeacon: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "BEACON light switch .................................................. OFF F/O"
    ]
  },
  beforeStartCancelRecall: {
    citation: "Norse FCOM Rev 9, PDF p.210; FCOM NP.21.32.",
    bullets: [
      "CANCEL/RECALL switch ...........................................Push F/O",
      "Verify that only the expected alert and memo messages are shown.",
      "CANCEL/RECALL switch ...........................................Push F/O",
      "Verify that the messages cancel."
    ]
  },
  beforeTaxiApu: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Verify that all engine generator OFF lights are extinguished.",
      "APU selector ................................................................. OFF F/O"
    ]
  },
  afterLandingApu: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the APU selector to START, then ON, as needed.",
      "APU start may be delayed if a long taxi time is expected."
    ]
  },
  shutdownCooldown: {
    citation: "Norse FCOM Rev 9, PDF p.238; FCOM NP.21.60.",
    bullets: [
      "Engine cooldown timing ............................Verify 5 minutes C",
      "Verify that at least five minutes have lapsed since the reversers were stowed."
    ]
  },
  beforeTaxiAntiIce: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "ENGINE ANTI-ICE selectors .............................As needed F/O"
    ]
  },
  afterLandingAntiIce: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the ENGINE ANTI-ICE selectors to ON, if needed."
    ]
  },
  beforeTaxiFlightControls: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Flight controls ............................................................ Check C",
      "Make slow and deliberate inputs, one direction at a time.",
      "Move the control wheel and the control column to full travel in both directions and verify freedom of movement and return to center.",
      "Hold the rudder pedal disconnect switch down during the rudder check to prevent nose wheel movement.",
      "Move the rudder pedals to full travel in both directions and verify freedom of movement and return to center."
    ]
  },
  beforeTaxiRecall: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Recall ......................................................................... Check C, F/O",
      "Verify that only expected alert and memo messages are shown."
    ]
  },
  beforeTaxiFlapLever: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Call \"FLAPS ___\" as needed for takeoff. C",
      "Flap lever .................................................... Set takeoff flaps F/O"
    ]
  },
  afterLandingFlapLever: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the flap lever to UP."
    ]
  },
  beforeTaxiTransponder: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Transponder .........................................................As needed. F/O"
    ]
  },
  takeoffTransponder: {
    citation: "Norse FCOM Rev 9, PDF p.216; FCOM NP.21.38.",
    bullets: [
      "When entering the departure runway, set the STROBE light switch to ON.",
      "Set the transponder mode selector to TA/RA."
    ]
  },
  afterLandingTransponder: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the transponder mode selector as needed."
    ]
  },
  shutdownTransponder: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "TRANSPONDER MODE selector .................... STANDBY F/O"
    ]
  },
  beforeTakeoffWxTerrain: {
    citation: "Norse FCOM Rev 9, PDF p.215; FCOM NP.21.37.",
    bullets: [
      "Set the weather radar display as needed.",
      "Select VSD on as needed.",
      "Set the terrain display as needed."
    ]
  },
  afterLandingWxRadar: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the weather radar to off."
    ]
  },
  beforeTakeoffVsd: {
    citation: "Norse FCOM Rev 9, PDF p.215; FCOM NP.21.37.",
    bullets: [
      "VSD .................................................................................. As needed"
    ]
  },
  approachVsd: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Select VSD on as needed."
    ]
  },
  departureCabinPa: {
    citation: "Norse FCOM Rev 9, PDF p.216; FCOM NP.21.38.",
    bullets: [
      "When cleared to enter the departure runway, announce on the PA \"CABIN CREW, BE SEATED FOR DEPARTURE\"."
    ]
  },
  descentCabinPa: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Approximately 30 minutes before landing or when the aircraft descends through FL300, announce on the PA: \"CABIN CREW, PREPARE THE CABIN FOR LANDING.\""
    ]
  },
  takeoffStrobeLights: {
    citation: "Norse FCOM Rev 9, PDF p.216; FCOM NP.21.38.",
    bullets: [
      "When entering the departure runway, set the STROBE light switch to ON.",
      "Use other lights as needed."
    ]
  },
  takeoffLandingLights: {
    citation: "Norse FCOM Rev 9, PDF p.217; FCOM NP.21.39.",
    bullets: [
      "When cleared for takeoff, set all LANDING light switches to ON."
    ]
  },
  approachLandingLights: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "At 10 000 feet AAL, RUNWAY TURNOFF, TAXI, and all LANDING light switches to ON."
    ]
  },
  descentRecallNotes: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Review all alert and memo messages.",
      "Recall and review all alert and memo messages.",
      "Review all operational notes.",
      "Recall and review all operational notes.",
      "Review NOTAM, Company NOTAM, relevant points from the Airport Briefing, and other notes, as needed.",
      "Review ATIS and other weather reports, as needed."
    ]
  },
  descentLandingPerformance: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Compare the OPT landing performance calculations.",
      "Set the AUTOBRAKE selector to the needed brake setting.",
      "Do the approach briefing."
    ]
  },
  descentMinimums: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Individually verify and set the RADIO/BARO minimums as needed for the approach."
    ]
  },
  descentVref: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Verify VREF on the APPROACH REF page.",
      "Enter VREF on the APPROACH REF page."
    ]
  },
  descentRnp: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Verify that the CDU RTE LEGS pages are correctly set up for arrival."
    ]
  },
  approachRnp: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "During arrival and approach, verify the RNP as needed."
    ]
  },
  descentNavrad: {
    citation: "Norse FCOM Rev 9, PDF pp.183, 221; FCOM NP.21.5, NP.21.43.",
    bullets: [
      "NAV RADIO page: Tune the navigation radios as needed.",
      "For HUD TAKEOFF operations, verify the navigation radios are autotuned and verify the correct frequency/course.",
      "Descent procedure includes NAVRAD setup."
    ]
  },
  descentAutobrake: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Set the AUTOBRAKE selector to the needed brake setting."
    ]
  },
  afterLandingAutobrake: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the AUTOBRAKE selector OFF."
    ]
  },
  approachAltimeter: {
    citation: "Norse FCOM Rev 9, PDF p.223; FCOM NP.21.45.",
    bullets: [
      "When cleared to descend below the transition level, and the aircraft is below all altitude constraints referenced to STD in the CDU LEGS page, set the main altimeters to QNH.",
      "Call \"SET ALTIMETERS\"",
      "Select QNH/altimeter barometric setting on the EFIS Control Panel.",
      "Call \"QNH/ALTIMETER ____ SET.\""
    ]
  },
  approachUpdateArrival: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Update the arrival and approach, as needed.",
      "Select VSD on as needed.",
      "Update the approach briefing as needed.",
      "Do not manually build the approach or add waypoints to the selected FMC procedure.",
      "Add cold temperature corrections to waypoint altitude constraints as appropriate."
    ]
  },
  approachSeatbelts: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Approximately 20 minutes before landing, or when the aircraft descends through FL200/20,000ft AAL, set the SEATBELTS sign switch to ON.",
      "If the seatbelt sign is already on due to turbulence, inform the cabin crew that 20 minutes remain until landing."
    ]
  },
  afterLandingSpeedbrake: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "The captain positions or verifies that the SPEEDBRAKE lever is DOWN.",
      "After the reversers are stowed, start timing to comply with the engine cooldown requirements."
    ]
  },
  afterLandingExteriorLights: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the exterior lights as needed."
    ]
  },
  shutdownFuelControl: {
    citation: "Norse FCOM Rev 9, PDF p.238; FCOM NP.21.60.",
    bullets: [
      "Call \"SHUTDOWN PROCEDURE.\" C",
      "FUEL CONTROL switches .................................. CUTOFF C"
    ]
  },
  shutdownEfb: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "Portable EFB .............................................. Flight Mode Off C, F/O"
    ]
  },
  secureEfb: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "Portable EFB Procedures ...................................... Complete C, F/O",
      "Complete the OFP.",
      "Complete the ATL and Journey Log entries.",
      "Reset the FD Pro application.",
      "Close all Portable EFB applications.",
      "Switch off all Portable EFB screens and unplug all chargers.",
      "EFB PWR switch ............................................................ Off C, F/O"
    ]
  },
  shutdownSeatbelts: {
    citation: "Norse FCOM Rev 9, PDF p.240; FCOM NP.21.62.",
    bullets: [
      "SEAT BELTS selector ................................................... OFF F/O"
    ]
  },
  secureEmergencyLights: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "EMERGENCY LIGHTS switch ................................... OFF F/O"
    ]
  },
  securePacks: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "PACK switches .............................................................. OFF F/O"
    ]
  }
});

(() => {
  const remap = {
    "electrical-power-up|Captain or F/O|1. Battery": "preflightBattery",
    "electrical-power-up|Captain or F/O|2. C1 & C2 Elec pumps": "preflightHydraulicPumps",
    "electrical-power-up|Captain or F/O|3. Demand pumps": "preflightHydraulicPumps",
    "electrical-power-up|Captain or F/O|4. Wipers": "preflightWipers",
    "electrical-power-up|Captain or F/O|5. Landing Gear lever": "preflightLandingGearLever",
    "electrical-power-up|Captain or F/O|6. Alternate flaps": "preflightAlternateFlaps",
    "preliminary-preflight-procedure|Captain or F/O|1. IRS Selectors": "preliminaryIrsSelectors",
    "preliminary-preflight-procedure|Captain or F/O|2. STATUS Display": "preliminaryStatusDisplay",
    "preliminary-preflight-procedure|Captain or F/O|3. Verify sufficient for flight": "preliminarySufficientForFlight",
    "preliminary-preflight-procedure|Captain or F/O|4. EICAS Display": "preliminaryEicasDisplay",
    "preliminary-preflight-procedure|Captain or F/O|5. Parking brake": "preliminaryParkingBrake",
    "pre-flight-procedure|Captain|1. EFIS, DSP & MCP": "preflightEfisDspMcp",
    "pre-flight-procedure|Captain|2. Oxygen & left sidewall": "preflightOxygen",
    "pre-flight-procedure|Captain|3. Fwd panel & ISFD": "preflightForwardPanelIsfd",
    "pre-flight-procedure|Captain|4. Speed brake, Thrust levers, Flap lever": "preflightSpeedThrustFlap",
    "pre-flight-procedure|Captain|5. Parking brake, Stab cutout, Fuel control switches, Alt flaps reset": "preflightStabFuelAlt",
    "pre-flight-procedure|Captain|6. Left ACP": "preflightAcpTcp",
    "pre-flight-procedure|Captain|7. HUD combiner down": "preflightHudCombiner",
    "pre-flight-procedure|F/O|1-4 Overhead panel": "preflightOverheadPanel",
    "pre-flight-procedure|F/O|5. F/D, DSP & EFIS": "preflightFlightDirector",
    "pre-flight-procedure|F/O|6. Oxygen & right sidewall": "preflightOxygen",
    "pre-flight-procedure|F/O|7. Fwd panel & Ldg gear panel": "preflightLandingGearPanel",
    "pre-flight-procedure|F/O|8. Secondary engine indications": "preflightSecondaryEngineIndications",
    "pre-flight-procedure|F/O|9. Status messages & Checklist": "preflightStatusChecklist",
    "pre-flight-procedure|F/O|10. Left TCP": "preflightAcpTcp",
    "pre-flight-procedure|F/O|11. Observer ACP, FD door access": "preflightFdDoorAccess",
    "pre-flight-procedure|F/O|12. Engine fire panel, ATP, Center TCP, Printer": "preflightAcpTcp",
    "pre-flight-procedure|F/O|13. Right TCP, Right ACP, Lights": "preflightAcpTcp",
    "pre-flight-procedure|F/O|14. HUD combiner down": "preflightHudCombiner",
    "before-start-procedure|Captain|1. CDU Display": "beforeStartCduDisplay",
    "before-start-procedure|Captain|2. MCP (Speed selector, LNAV/VNAV, HDG/TRK, Altitude)": "beforeStartMcp",
    "before-start-procedure|Captain|3. Nose gear steering": "beforeStartNoseGearSteering",
    "before-start-procedure|Captain|4. Trim": "beforeStartTrim",
    "before-start-procedure|F/O|1. FD door": "beforeStartFdDoor",
    "before-start-procedure|F/O|2. CDU display": "beforeStartCduDisplay",
    "before-start-procedure|F/O|3. Exterior doors": "beforeStartExteriorDoors",
    "before-start-procedure|F/O|4. Hydraulic panel": "beforeStartHydraulicPumps",
    "before-start-procedure|F/O|5. Fuel panel": "beforeStartFuelPanel",
    "before-start-procedure|F/O|6. Beacon light": "beforeStartBeacon",
    "before-start-procedure|F/O|7. CANCEL/RECALL switch": "beforeStartCancelRecall",
    "before-taxi-procedure|Captain|1. Flight control check": "beforeTaxiFlightControls",
    "before-taxi-procedure|Captain|2. RECALL check": "beforeTaxiRecall",
    "before-taxi-procedure|F/O|1. APU": "beforeTaxiApu",
    "before-taxi-procedure|F/O|2. Anti-ice": "beforeTaxiAntiIce",
    "before-taxi-procedure|F/O|4. Flap lever": "beforeTaxiFlapLever",
    "before-taxi-procedure|F/O|5. Transponder": "beforeTaxiTransponder",
    "before-taxi-procedure|F/O|6. Secondary engine indications": "beforeTaxiSecondaryEngineIndications",
    "before-taxi-procedure|F/O|7. RECALL check": "beforeTaxiRecall",
    "before-takeoff-takeoff-procedure|PF|1. WX radar/Terrain display": "beforeTakeoffWxTerrain",
    "before-takeoff-takeoff-procedure|PF|2. VSD": "beforeTakeoffVsd",
    "before-takeoff-takeoff-procedure|PM|1. PA \"CABIN CREW BE SEATED FOR DEPARTURE\"": "departureCabinPa",
    "before-takeoff-takeoff-procedure|PM|2. Transponder TA/RA": "takeoffTransponder",
    "before-takeoff-takeoff-procedure|PM|3. WX radar/Terrain display": "beforeTakeoffWxTerrain",
    "before-takeoff-takeoff-procedure|PM|4. VSD": "beforeTakeoffVsd",
    "before-takeoff-takeoff-procedure|PM|5. Strobe lights": "takeoffStrobeLights",
    "before-takeoff-takeoff-procedure|PM|6. Landing lights (with takeoff clearance)": "takeoffLandingLights",
    "decent-procedure|PF|1. RECALL & Notes check": "descentRecallNotes",
    "decent-procedure|PF|2. Landing performance": "descentLandingPerformance",
    "decent-procedure|PF|3. Baro/Radio Minimums": "descentMinimums",
    "decent-procedure|PF|4. Verify VREF": "descentVref",
    "decent-procedure|PM|1. RNP check": "descentRnp",
    "decent-procedure|PM|2. RECALL & Notes check": "descentRecallNotes",
    "decent-procedure|PM|3. Landing performance": "descentLandingPerformance",
    "decent-procedure|PM|4. Baro/Radio Minimums": "descentMinimums",
    "decent-procedure|PM|5. Enter VREF": "descentVref",
    "decent-procedure|PM|6. NAVRAD": "descentNavrad",
    "decent-procedure|PM|7. AUTOBRAKE": "descentAutobrake",
    "decent-procedure|PM|8. PA -\"CABIN CREW, PREPARE CABIN FOR LANDING\" (25.000')": "descentCabinPa",
    "approach-procedure|PF|1. Altimeter (transition)": "approachAltimeter",
    "approach-procedure|PF|2. VSD": "approachVsd",
    "approach-procedure|PF|3. Update arrival & approach": "approachUpdateArrival",
    "approach-procedure|PM|1. RNP check": "approachRnp",
    "approach-procedure|PM|2. Seatbelts (15.000')": "approachSeatbelts",
    "approach-procedure|PM|3. Landing lights (10.000')": "approachLandingLights",
    "approach-procedure|PM|4. Altimeter (transition)": "approachAltimeter",
    "approach-procedure|PM|5. VSD": "approachVsd",
    "approach-procedure|PM|6. Update arrival & approach": "approachUpdateArrival",
    "after-landing-procedure|PF|1. Speedbrake (Verified by CPT)": "afterLandingSpeedbrake",
    "after-landing-procedure|PF|2. WX Radar": "afterLandingWxRadar",
    "after-landing-procedure|PM|1. APU": "afterLandingApu",
    "after-landing-procedure|PM|2. Engine Anti-Ice": "afterLandingAntiIce",
    "after-landing-procedure|PM|3. Exterior lights": "afterLandingExteriorLights",
    "after-landing-procedure|PM|4. WX radar": "afterLandingWxRadar",
    "after-landing-procedure|PM|5. Autobrake": "afterLandingAutobrake",
    "after-landing-procedure|PM|6. Flap lever": "afterLandingFlapLever",
    "after-landing-procedure|PM|7. Transponder": "afterLandingTransponder",
    "shutdown-procedure|Captain|1. Parking Brake": "shutdownParkingBrake",
    "shutdown-procedure|Captain|2. Verify 5 min cooldown": "shutdownCooldown",
    "shutdown-procedure|Captain|3. Fuel control switches": "shutdownFuelControl",
    "shutdown-procedure|Captain|4. Flight director": "shutdownFlightDirector",
    "shutdown-procedure|Captain|5. EFB": "shutdownEfb",
    "shutdown-procedure|F/O|1. Seat belt selector": "shutdownSeatbelts",
    "shutdown-procedure|F/O|2. Hydraulic panel": "shutdownHydraulicPumps",
    "shutdown-procedure|F/O|3. Fuel pump switches": "shutdownFuelPumps",
    "shutdown-procedure|F/O|4. Beacon light": "shutdownBeacon",
    "shutdown-procedure|F/O|5. Flight director": "shutdownFlightDirector",
    "shutdown-procedure|F/O|6. Transponder": "shutdownTransponder",
    "shutdown-procedure|F/O|7. EFB": "shutdownEfb",
    "secure-procedure|Captain|1. EFB power": "secureEfb",
    "secure-procedure|Captain|2. HUD combiner": "secureHudCombiner",
    "secure-procedure|F/O|1. IRS selectors": "secureIrsSelectors",
    "secure-procedure|F/O|2. Battery": "secureBattery",
    "secure-procedure|F/O|3. Emergency lights": "secureEmergencyLights",
    "secure-procedure|F/O|4. Flight deck door power": "secureFdDoor",
    "secure-procedure|F/O|5. Pack switches": "securePacks",
    "secure-procedure|F/O|6. EFB power": "secureEfb",
    "secure-procedure|F/O|7. HUD combiner": "secureHudCombiner"
  };

  window.SCAN_FLOWS.forEach((flow) => {
    flow.sections.forEach((section) => {
      section.items.forEach((item) => {
        const key = `${flow.id}|${section.role}|${item.text}`;
        if (remap[key]) item.detail = remap[key];
      });
    });
  });
})();

Object.assign(window.SCAN_FLOW_DETAILS, {
  preflightOverheadPanel: {
    citation: "Norse FCOM Rev 9, PDF pp.190-195; FCOM NP.21.12-NP.21.17.",
    bullets: [
      "FLIGHT CONTROL SURFACES panel ............................................ Set",
      "ELECTRICAL panel ........................................................................... Set",
      "WINDOW HEAT panel .......................................................................Set",
      "HYDRAULIC panel ............................................................................Set",
      "APU fire panel..................................................................................... Set",
      "CARGO FIRE panel ........................................................................... Set",
      "ENGINE panel .................................................................................... Set",
      "FUEL JETTISON panel ...................................................................... Set",
      "FUEL panel ......................................................................................... Set",
      "ANTI-ICE panel..................................................................................Set",
      "Lighting panel ......................................................................................Set",
      "AIR CONDITIONING panel .............................................................. Set",
      "PRESSURIZATION panel .................................................................. Set"
    ]
  },
  preflightEfisDspMcp: {
    citation: "Norse FCOM Rev 9, PDF pp.200-201; FCOM NP.21.22-NP.21.23.",
    bullets: [
      "EFIS control panel .............................................................................. Set",
      "MINIMUMS reference selector ........................RADIO or BARO",
      "MINIMUMS selector ..... Set decision height or altitude reference",
      "BAROMETRIC reference selector ...............................IN or HPA",
      "BAROMETRIC selector ....................... Set local altimeter setting",
      "Display select panel............................................................................. Set",
      "Mode control panel ..............................................................................Set",
      "FLIGHT DIRECTOR switch ...................................................ON",
      "AUTOTHROTTLE ARM switches...................................... ARM",
      "Autopilot DISENGAGE bar ..................................................... UP"
    ]
  },
  preflightForwardPanelIsfd: {
    citation: "Norse FCOM Rev 9, PDF pp.201-202; FCOM NP.21.23-NP.21.24.",
    bullets: [
      "FORWARD PANEL brightness control ............................... Mid position",
      "AIR DATA/ATTITUDE source selector ........................................AUTO",
      "PFD/MFD selector ........................................................................NORM",
      "Flight instruments .......................................................................... Check",
      "Verify that the flight instrument indications are correct.",
      "Integrated standby flight display ......................................................... Set",
      "Verify that the approach mode display is blank.",
      "Set local altimeter setting.",
      "Verify that the flight instrument indications are correct.",
      "Verify that no flags or messages are shown."
    ]
  },
  preflightLandingGearLever: {
    citation: "Norse FCOM Rev 9, PDF p.196; FCOM NP.21.18.",
    bullets: [
      "Landing gear panel .............................................................................. Set",
      "Landing gear lever ................................................................... DN",
      "ALTERNATE GEAR switch ....................................Guard closed",
      "AUTOBRAKE selector ......................................................... RTO"
    ]
  },
  preflightLandingGearPanel: {
    citation: "Norse FCOM Rev 9, PDF p.196; FCOM NP.21.18.",
    bullets: [
      "Landing gear panel .............................................................................. Set",
      "Landing gear lever ................................................................... DN",
      "ALTERNATE GEAR switch ....................................Guard closed",
      "AUTOBRAKE selector ......................................................... RTO"
    ]
  },
  preflightAlternateFlaps: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "ALTERNATE FLAPS panel ............................................................... Set",
      "ALTERNATE FLAPS ARM switch ........................................ Off",
      "ALTERNATE FLAPS selector ...............................................OFF"
    ]
  },
  preflightSpeedThrustFlap: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "SPEEDBRAKE lever ...................................................................DOWN",
      "Reverse thrust levers ...................................................................... Down",
      "Forward thrust levers..................................................................... Closed",
      "Flap lever ............................................................................................. Set",
      "Set the flap lever to agree with the flap position."
    ]
  },
  preflightStabFuelAlt: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "Parking brake ...................................................................................... Set",
      "Verify that the PARKING BRAKE SET message is shown.",
      "STABILIZER cutout switches .......................................... Guards closed",
      "FUEL CONTROL switches ...................................................... CUTOFF",
      "FUEL CONTROL switch fire warning lights ...........Verify extinguished",
      "ALTERNATE FLAPS panel ............................................................... Set",
      "ALTERNATE FLAPS ARM switch ........................................ Off",
      "ALTERNATE FLAPS selector ...............................................OFF"
    ]
  },
  preflightAcpTcp: {
    citation: "Norse FCOM Rev 9, PDF pp.197-198, 203; FCOM NP.21.19-NP.21.20, NP.21.25.",
    bullets: [
      "Left tuning and control panel...............................................................Set",
      "WEATHER RADAR ............................................................Select",
      "GAIN and MODE ................................................ As Needed",
      "TRANSPONDER .................................................................Select",
      "CAPT TCAS Display ............................................ As needed",
      "TCAS ALT ............................................................ As needed",
      "VHF ......................................................................................Select",
      "Captain's audio control panel .................................................. As needed",
      "Right tuning and control panel ............................................................ Set",
      "Verify that the OFF light is extinguished.",
      "VHF ..................................................................................... Select",
      "R VHF ............................................................................... Set",
      "HF ........................................................................................ Select",
      "R HF ................................................................................. Set",
      "WEATHER RADAR ........................................................... Select",
      "GAIN and MODE ..................................................As needed",
      "TRANSPONDER ................................................................ Select",
      "F/O TCAS Display ................................................As needed",
      "TCAS ALT .............................................................As needed",
      "First officer's audio control panel ........................................... As needed"
    ]
  },
  preflightSeatRudder: {
    citation: "Norse FCOM Rev 9, PDF pp.198, 203; FCOM NP.21.20, NP.21.25.",
    bullets: [
      "Seat ................................................................................................ Adjust",
      "Adjust the seat for optimum eye reference.",
      "Rudder pedals ................................................................................ Adjust",
      "Adjust the rudder pedals to allow full rudder pedal and brake pedal movement.",
      "Stow the rudder pedal adjust crank."
    ]
  },
  preflightSeatBeltsHarness: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "Seat belt and shoulder harness ....................................................... Adjust"
    ]
  },
  preflightHudCombiner: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "HUD combiner ............................................................................... Down",
      "HUD BRIGHTNESS control ..............................................Adjust"
    ]
  },
  preflightFlightDirector: {
    citation: "Norse FCOM Rev 9, PDF pp.195, 201-202; FCOM NP.21.17, NP.21.23-NP.21.24.",
    bullets: [
      "FLIGHT DIRECTOR switch .............................................................. ON",
      "FLIGHT DIRECTOR switch ...................................................ON",
      "Verify that the flight mode annunciations are correct:",
      "Autothrottle mode is blank",
      "Roll mode is TO/GA or HUD TO/GA",
      "Pitch mode is TO/GA",
      "AFDS status is FLT DIR"
    ]
  },
  preflightSecondaryEngineIndications: {
    citation: "Norse FCOM Rev 9, PDF pp.196-197; FCOM NP.21.18-NP.21.19.",
    bullets: [
      "EICAS display ................................................................................ Check",
      "Secondary engine indications ........................................... Display",
      "Verify that the engine indications show existing conditions.",
      "Verify that no exceedance is shown."
    ]
  },
  preflightFdDoorAccess: {
    citation: "Norse FCOM Rev 9, PDF p.197; FCOM NP.21.19.",
    bullets: [
      "FLIGHT DECK DOOR ACCESS selector ...................................AUTO"
    ]
  },
  beforeStartFdDoor: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "FLIGHT DECK DOOR POWER switch ....................... ON F/O",
      "Flight deck door .......................................Closed and locked F/O",
      "Lock the flight deck door after papers are on board, any required forms and documents have been given to the ground staff, and the final passenger information has been provided by the SCCM."
    ]
  },
  beforeStartNoseGearSteering: {
    citation: "Norse FCOM Rev 9, PDF pp.209-210; FCOM NP.21.31-NP.21.32.",
    bullets: [
      "If pushback is needed:",
      "Nose gear steering .......................... Verify locked out C",
      "If the tow bar is connected, do not pressurize the hydraulic systems until the nose gear steering is locked out.",
      "Unwanted tow bar movement can occur."
    ]
  },
  beforeStartFuelPanel: {
    citation: "Norse FCOM Rev 9, PDF p.210; FCOM NP.21.32.",
    bullets: [
      "Fuel panel ........................................................................ Set F/O",
      "LEFT and RIGHT FUEL PUMP switches ............................... ON",
      "The PRESS lights are illuminated because of load shedding.",
      "If the APU is running, the left aft pump PRESS light is extinguished.",
      "If the FUEL IN CENTER message shows:",
      "CENTER FUEL PUMP switches .....................................ON",
      "Both PRESS lights illuminate until after engine start because of load shedding."
    ]
  },
  beforeStartBeacon: {
    citation: "Norse FCOM Rev 9, PDF p.211; FCOM NP.21.33.",
    bullets: [
      "Start clearance............................................................ Obtain F/O",
      "BEACON light switch .................................................... ON F/O",
      "The aircraft beacon light must not be switched on prior to ground staff clearance to pressurize the hydraulic systems, and ATC clearance to start the engines and/or pushback have been obtained."
    ]
  },
  beforeTaxiFlightControls: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Flight controls ............................................................ Check C",
      "Make slow and deliberate inputs, one direction at a time.",
      "Move the control wheel and the control column to full travel in both directions and verify:",
      "Freedom of movement",
      "That the controls return to center",
      "Hold the rudder pedal disconnect switch down during the rudder check to prevent nose wheel movement.",
      "Move the rudder pedals to full travel in both directions and verify:",
      "Freedom of movement",
      "That the rudder pedals return to center"
    ]
  },
  beforeTakeoffWxTerrain: {
    citation: "Norse FCOM Rev 9, PDF p.215; FCOM NP.21.37.",
    bullets: [
      "Set the weather radar display as needed.",
      "Select VSD on as needed.",
      "Set the terrain display as needed."
    ]
  },
  cabinLandingPa: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Approximately 30 minutes before landing or when the aircraft descends through FL300, announce on the PA:",
      "\"CABIN CREW, PREPARE THE CABIN FOR LANDING.\""
    ]
  },
  descentMinimums: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Individually verify and set the RADIO/BARO minimums as needed for the approach."
    ]
  },
  descentLandingPerformance: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Compare the OPT landing performance calculations.",
      "Do the approach briefing."
    ]
  },
  descentRnp: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "During the descent, verify the RNP as needed."
    ]
  },
  descentNavrad: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Verify/set the NAV RADIO page for the approach."
    ]
  },
  approachSeatbelts: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "Approximately 20 minutes before landing, or when the aircraft descends through FL200/20,000ft AAL, set the SEATBELTS sign switch to ON.",
      "If the seatbelt sign is already on due to turbulence, inform the cabin crew that 20 minutes remain until landing."
    ]
  },
  approachLandingLights: {
    citation: "Norse FCOM Rev 9, PDF p.222; FCOM NP.21.44.",
    bullets: [
      "At 10 000 feet AAL, RUNWAY TURNOFF, TAXI, and all LANDING light switches to ON."
    ]
  },
  afterLandingApu: {
    citation: "Norse FCOM Rev 9, PDF p.237; FCOM NP.21.59.",
    bullets: [
      "Set the APU selector to START, then ON, as needed.",
      "APU start may be delayed if a long taxi time is expected."
    ]
  },
  secureHudCombiner: {
    citation: "Norse FCOM Rev 9, PDF p.242; FCOM NP.21.64.",
    bullets: [
      "HUD combiner ............................................................. Stow C, F/O",
      "To prevent the possibility of injury, ensure the combiner is fully raised and securely latched in the stowed position."
    ]
  }
});

(() => {
  const remap = {
    "approach-procedure|PM|2. Seatbelts (15.000')": "approachSeatbelts",
    "approach-procedure|PM|2. Seatbelts (15.000\u2019)": "approachSeatbelts",
    "approach-procedure|PM|3. Landing lights (10.000')": "approachLandingLights",
    "approach-procedure|PM|3. Landing lights (10.000\u2019)": "approachLandingLights",
    "decent-procedure|PM|8. PA -\"CABIN CREW, PREPARE CABIN FOR LANDING\" (25.000')": "cabinLandingPa",
    "decent-procedure|PM|8. PA -\"CABIN CREW, PREPARE CABIN FOR LANDING\" (25.000\u2019)": "cabinLandingPa"
  };

  window.SCAN_FLOWS.forEach((flow) => {
    flow.sections.forEach((section) => {
      section.items.forEach((item) => {
        const key = `${flow.id}|${section.role}|${item.text}`;
        if (remap[key]) item.detail = remap[key];
      });
    });
  });
})();
