window.SCAN_FLOW_DETAILS = {
  default: {
    citation: "Norse Scan Flows v1.2; Norse FCOM Rev 9; Norse FCTM Rev 19.",
    bullets: [
      "Use the scan-flow item as a panel-location prompt, then complete the applicable FCOM normal procedure or checklist item.",
      "FCTM callout and CRM guidance says the PM normally makes callouts from indications, FMAs, or observations, and the PF verifies or acknowledges."
    ]
  },
  battery: {
    citation: "Norse FCOM Rev 9, PDF pp.190, 242; FCOM NP.21.12, NP.21.64.",
    bullets: [
      "FCOM Preflight Procedure - First Officer sets the BATTERY switch ON and verifies the OFF light is extinguished.",
      "FCOM Secure Procedure later sets the BATTERY switch Off."
    ]
  },
  hydraulicPumps: {
    citation: "Norse FCOM Rev 9, PDF pp.191, 209-210, 240; FCOM NP.21.13, NP.21.31-NP.21.32, NP.21.62.",
    bullets: [
      "Preflight hydraulic panel setup includes engine primary pumps ON and center electric pumps OFF with expected fault indications before pressurization.",
      "Before Start sets the right electric demand pump, center 1 and center 2 electric pump selectors, and left electric demand pump to AUTO and verifies FAULT lights extinguish.",
      "Shutdown sets the left/center/right electric demand/center pump selectors OFF."
    ]
  },
  wipers: {
    citation: "Norse FCOM Rev 9, PDF pp.190, 195; FCOM NP.21.12, NP.21.17.",
    bullets: [
      "Preflight scan includes the left and right wiper selectors in the overhead/sidewall flow.",
      "FCOM Preflight Procedure verifies the right wiper selector OFF."
    ]
  },
  landingGearLever: {
    citation: "Norse FCOM Rev 9, PDF pp.202, 225, 229, 233; FCOM NP.21.24, NP.21.47, NP.21.51, NP.21.55.",
    bullets: [
      "Preflight captain scan includes the landing gear panel.",
      "Approach procedures call GEAR DOWN at glideslope/glidepath alive or approximately 2 NM before the FAF, as applicable."
    ]
  },
  alternateFlaps: {
    citation: "Norse FCOM Rev 9, PDF pp.190-203; FCOM NP.21.12-NP.21.25.",
    bullets: [
      "The scan-flow item is a panel-location reminder for the alternate flaps area during power-up/preflight.",
      "Use the FCOM preflight panel setup as the controlling normal-procedure source."
    ]
  },
  electricalPower: {
    citation: "Norse Scan Flows v1.2 PDF p.2; Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "The scan flow states: Electrical power - Establish (Ext PWR or APU).",
      "Before Start FCOM electrical power context includes setting electrical power and checking APU/external power as needed before shutdown; for power-up, use the applicable supplementary procedure."
    ]
  },
  irsSelectors: {
    citation: "Norse FCOM Rev 9, PDF pp.179, 242; FCOM NP.21.1, NP.21.64.",
    bullets: [
      "Preliminary Preflight sets IRS selectors OFF for 30 seconds, then ON, and verifies the ON BAT light is extinguished.",
      "Secure Procedure sets IRS selectors OFF."
    ]
  },
  statusDisplay: {
    citation: "Norse FCOM Rev 9, PDF pp.179, 197, 240; FCOM NP.21.1, NP.21.19, NP.21.62.",
    bullets: [
      "Preliminary Preflight checks the STATUS display and verifies only expected messages are shown.",
      "Preflight Procedure selects the status display, checks status messages, verifies airline database/reset items, and uses the checklist display.",
      "Shutdown checks status messages and notes PFC self-test timing after hydraulic shutdown."
    ]
  },
  sufficientForFlight: {
    citation: "Norse FCOM Rev 9, PDF p.179; FCOM NP.21.1.",
    bullets: [
      "Preliminary Preflight verifies crew oxygen pressure, hydraulic quantity, and engine oil quantity are sufficient for flight.",
      "After crew change or maintenance action, it verifies CREW OXYGEN LOW is blank and crew oxygen pressure is sufficient for dispatch."
    ]
  },
  eicasDisplay: {
    citation: "Norse FCOM Rev 9, PDF pp.179, 197, 210, 214; FCOM NP.21.1, NP.21.19, NP.21.32, NP.21.36.",
    bullets: [
      "Preliminary Preflight checks the EICAS display and verifies only expected alert and memo messages are shown.",
      "After message review, CANC/RCL is pushed to clear EICAS so new alert messages are detected promptly.",
      "Before Start and Before Taxi use CANCEL/RECALL or Recall checks to verify only expected messages are shown."
    ]
  },
  maintenanceDocuments: {
    citation: "Norse FCOM Rev 9, PDF pp.179-180; FCOM NP.21.1-NP.21.2.",
    bullets: [
      "Preliminary Preflight checks ATL and aircraft documents.",
      "It also checks portable EFBs, cabin iPads, associated chargers, and other needed equipment."
    ]
  },
  emergencyEquipment: {
    citation: "Norse FCOM Rev 9, PDF pp.179-180; FCOM NP.21.1-NP.21.2.",
    bullets: [
      "Preliminary Preflight checks emergency equipment including fire extinguisher, crash axe, protective gloves, emergency descent devices, and protective breathing equipment.",
      "The EMK is checked stowed with all four green seals intact."
    ]
  },
  parkingBrake: {
    citation: "Norse FCOM Rev 9, PDF pp.180, 202, 238-240; FCOM NP.21.2, NP.21.24, NP.21.60-NP.21.62.",
    bullets: [
      "Preliminary Preflight sets the parking brake as needed, including if brake wear indicators are to be checked during exterior inspection.",
      "Captain preflight includes the parking brake area.",
      "Shutdown sets the parking brake and verifies PARKING BRAKE SET, then releases it after wheel chocks are in place."
    ]
  },
  efisDspMcp: {
    citation: "Norse FCOM Rev 9, PDF pp.195, 200-201; FCOM NP.21.17, NP.21.22-NP.21.23. Norse FCTM Rev 19, PDF p.71; FCTM 1.19.",
    bullets: [
      "Captain Preflight sets EFIS controls, display selections, and the MCP including flight director, autothrottle arm, autopilot disengage bar, heading/track, bank limit, vertical speed/FPA, and altitude increment as needed.",
      "FCTM guidance says both pilots should regularly check flight instruments and FMAs to verify selections are correct for the phase of flight."
    ]
  },
  oxygenLeft: {
    citation: "Norse FCOM Rev 9, PDF pp.196, 201; FCOM NP.21.18, NP.21.23.",
    bullets: [
      "Preflight oxygen test includes mask stowed/doors closed, RESET/TEST push and hold, release, and selector set to 100%.",
      "The scan item directs the pilot to include the relevant sidewall area in the flow."
    ]
  },
  forwardPanelIsfd: {
    citation: "Norse FCOM Rev 9, PDF pp.196, 201-202; FCOM NP.21.18, NP.21.23-NP.21.24.",
    bullets: [
      "Preflight sets forward panel brightness controls and air data/attitude source/PFD-MFD selections.",
      "Captain preflight sets and checks the integrated standby flight display, including local altimeter setting and no flags/messages."
    ]
  },
  speedThrustFlap: {
    citation: "Norse FCOM Rev 9, PDF p.202; FCOM NP.21.24.",
    bullets: [
      "Captain Preflight verifies SPEEDBRAKE lever DOWN, reverse levers down, thrust levers closed, and flap lever set to agree with flap position.",
      "These items establish the baseline configuration before checklist completion."
    ]
  },
  stabFuelAlt: {
    citation: "Norse FCOM Rev 9, PDF pp.202-203; FCOM NP.21.24-NP.21.25.",
    bullets: [
      "Captain Preflight includes parking brake, stabilizer cutout guards closed, fuel control switches CUTOFF, and alternate flaps panel OFF/guarded as applicable.",
      "The preflight scan verifies key engine and flight-control guarded items before the Preflight Checklist."
    ]
  },
  acpTcp: {
    citation: "Norse FCOM Rev 9, PDF pp.197-198, 203; FCOM NP.21.19-NP.21.20, NP.21.25.",
    bullets: [
      "Preflight sets tuning/control panels, VHF/HF, weather radar, transponder, TCAS, and audio panels as needed.",
      "The F/O and captain each set their assigned audio and tuning/control panel areas."
    ]
  },
  seatRudder: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "Preflight adjusts seat for proper eye reference and rudder pedals for full rudder pedal and brake pedal movement.",
      "FCOM cautions to stow the rudder pedal adjust crank after use."
    ]
  },
  seatBeltsHarness: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 203; FCOM NP.21.21, NP.21.25.",
    bullets: [
      "Preflight adjusts the seat belt and shoulder harness.",
      "This scan-flow item keeps the restraint check in the seat/rudder setup sequence."
    ]
  },
  hudCombiner: {
    citation: "Norse FCOM Rev 9, PDF pp.199, 242; FCOM NP.21.21, NP.21.64.",
    bullets: [
      "Preflight sets the HUD combiner down and adjusts HUD brightness.",
      "Secure Procedure stows the HUD combiner and notes it must be fully raised and latched."
    ]
  },
  overheadPanel: {
    citation: "Norse FCOM Rev 9, PDF pp.190-195; FCOM NP.21.12-NP.21.17.",
    bullets: [
      "F/O Preflight overhead flow includes flight controls, electrical, flight deck door power, emergency lights, window heat, RAT indication, hydraulics, fire, engine, fuel, anti-ice, lights, cargo, air conditioning, and pressurization-related panels.",
      "The scan-flow item groups overhead panel setup into the F/O scan."
    ]
  },
  flightDirector: {
    citation: "Norse FCOM Rev 9, PDF pp.195, 201, 240; FCOM NP.21.17, NP.21.23, NP.21.62.",
    bullets: [
      "Preflight sets the flight director switch ON and verifies expected flight mode annunciations.",
      "Shutdown sets both flight director switches OFF."
    ]
  },
  landingGearPanel: {
    citation: "Norse FCOM Rev 9, PDF pp.202, 225, 229, 233; FCOM NP.21.24, NP.21.47, NP.21.51, NP.21.55.",
    bullets: [
      "Preflight includes the landing gear panel in the F/O forward-panel/gear-panel flow.",
      "Approach procedures direct the landing gear lever to DN when GEAR DOWN is called."
    ]
  },
  secondaryEngineIndications: {
    citation: "Norse FCOM Rev 9, PDF pp.213-214; FCOM NP.21.35-NP.21.36.",
    bullets: [
      "Engine Start Procedure selects secondary engine indications.",
      "Before Taxi Procedure sets Secondary Engine Indications Off."
    ]
  },
  checklistDisplay: {
    citation: "Norse FCOM Rev 9, PDF pp.197, 211, 214, 223, 240, 242; FCOM NP.21.19, NP.21.33, NP.21.36, NP.21.45, NP.21.62, NP.21.64.",
    bullets: [
      "Preflight pushes CHECKLIST display and verifies reset/database items.",
      "Normal procedures call for the applicable checklist at phase completion; F/O does the checklist where specified.",
      "FCTM callout discipline treats missing callouts or expected responses as an important crew crosscheck."
    ]
  },
  fdDoor: {
    citation: "Norse FCOM Rev 9, PDF pp.209, 242; FCOM NP.21.31, NP.21.64.",
    bullets: [
      "Before Start sets FLIGHT DECK DOOR POWER ON and verifies the flight deck door closed and locked.",
      "Secure Procedure sets FD DOOR POWER OFF."
    ]
  },
  cduDisplay: {
    citation: "Norse FCOM Rev 9, PDF pp.181-183, 208-209; FCOM NP.21.3-NP.21.5, NP.21.30-NP.21.31. Norse FCTM Rev 19, PDF pp.56-57; FCTM 1.26-1.27.",
    bullets: [
      "CDU/EFB Preflight requires initial, navigation, and performance data entries and verification by the other pilot.",
      "Before Start normally has PF select TAKEOFF REF and PM select LEGS.",
      "FCTM FMC route verification guidance emphasizes comparing route entries, waypoint sequence, distance, fuel, and performance predictions."
    ]
  },
  mcpBeforeStart: {
    citation: "Norse FCOM Rev 9, PDF pp.208-209; FCOM NP.21.30-NP.21.31.",
    bullets: [
      "Before Start sets MCP speed/V2, arms LNAV as needed and VNAV, and sets initial heading or track and initial altitude.",
      "The CDU/FMC preflight complete call and crosscheck support the MCP setup."
    ]
  },
  briefing: {
    citation: "Norse FCOM Rev 9, PDF pp.204, 221-222; FCOM NP.21.26, NP.21.43-NP.21.44. Norse FCTM Rev 19, PDF p.71; FCTM 1.19.",
    bullets: [
      "Departure Preparations require taxi and takeoff briefings by the takeoff pilot.",
      "Descent/Approach procedures update arrival and approach briefings as needed.",
      "FCTM guidance emphasizes continuous awareness of altitude, position, energy state, configuration, and phase-appropriate situational awareness."
    ]
  },
  exteriorDoors: {
    citation: "Norse FCOM Rev 9, PDF p.209; FCOM NP.21.31.",
    bullets: [
      "Before Start verifies exterior doors closed.",
      "The flight deck door is closed and locked after required papers/forms and passenger information are handled."
    ]
  },
  startClearance: {
    citation: "Norse FCOM Rev 9, PDF pp.209, 211; FCOM NP.21.31, NP.21.33.",
    bullets: [
      "Before Start obtains clearance to pressurize hydraulic systems.",
      "F/O obtains ATC clearance to start engines and pushback as needed before beacon and checklist."
    ]
  },
  noseGearSteering: {
    citation: "Norse FCOM Rev 9, PDF pp.209-212; FCOM NP.21.31-NP.21.34.",
    bullets: [
      "If pushback is needed, Before Start verifies nose gear steering locked out before hydraulic pressurization.",
      "Pushback/Towing verifies the tow bar is not connected and nose gear steering is not locked out when complete."
    ]
  },
  fuelPanel: {
    citation: "Norse FCOM Rev 9, PDF pp.192, 210, 240; FCOM NP.21.14, NP.21.32, NP.21.62.",
    bullets: [
      "Preflight fuel/jettison panel setup verifies jettison nozzles off, fuel to remain selector in, jettison arm off, and expected lights.",
      "Before Start sets left/right fuel pumps ON and center pumps ON if FUEL IN CENTER shows.",
      "Shutdown sets fuel pump switches OFF."
    ]
  },
  beacon: {
    citation: "Norse FCOM Rev 9, PDF pp.193, 211, 240; FCOM NP.21.15, NP.21.33, NP.21.62.",
    bullets: [
      "Preflight initially sets beacon OFF.",
      "Before Start sets beacon ON only after required ground/ATC clearances.",
      "Shutdown sets beacon OFF."
    ]
  },
  cancelRecall: {
    citation: "Norse FCOM Rev 9, PDF pp.179, 210, 214; FCOM NP.21.1, NP.21.32, NP.21.36.",
    bullets: [
      "EICAS messages are reviewed and then cleared with CANC/RCL to detect new alert messages promptly.",
      "Before Start and Before Taxi verify only expected alert and memo messages are shown."
    ]
  },
  trim: {
    citation: "Norse FCOM Rev 9, PDF pp.210-211; FCOM NP.21.32-NP.21.33.",
    bullets: [
      "Before Start sets stabilizer trim for takeoff and verifies trim is in the greenband.",
      "Rudder trim is set to 0 units."
    ]
  },
  apu: {
    citation: "Norse FCOM Rev 9, PDF pp.214, 237, 240; FCOM NP.21.36, NP.21.59, NP.21.62.",
    bullets: [
      "Before Taxi sets APU selector OFF after engine generators are online.",
      "After Landing sets APU selector START then ON as needed.",
      "Shutdown leaves APU selector as needed."
    ]
  },
  antiIce: {
    citation: "Norse FCOM Rev 9, PDF pp.193, 214, 237; FCOM NP.21.15, NP.21.36, NP.21.59.",
    bullets: [
      "Preflight sets wing and engine anti-ice selectors AUTO.",
      "Before Taxi and After Landing set engine anti-ice as needed."
    ]
  },
  groundEquipmentClear: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Before Taxi verifies ground personnel and equipment are clear.",
      "This is a joint captain/F/O awareness item before aircraft movement."
    ]
  },
  flightControls: {
    citation: "Norse FCOM Rev 9, PDF p.214; FCOM NP.21.36.",
    bullets: [
      "Before Taxi checks flight controls with slow, deliberate full-travel inputs.",
      "The rudder pedal disconnect switch is held down during the rudder check to prevent nose wheel movement."
    ]
  },
  flapLever: {
    citation: "Norse FCOM Rev 9, PDF pp.202, 214, 224-225, 229, 233, 237; FCOM NP.21.24, NP.21.36, NP.21.46-NP.21.47, NP.21.51, NP.21.55, NP.21.59.",
    bullets: [
      "Preflight sets the flap lever to agree with flap position.",
      "Before Taxi sets takeoff flaps after the captain calls FLAPS ___.",
      "Approach procedures use the flap extension schedule; After Landing sets flaps UP."
    ]
  },
  transponder: {
    citation: "Norse FCOM Rev 9, PDF pp.212, 214, 216, 237, 240; FCOM NP.21.34, NP.21.36, NP.21.38, NP.21.59, NP.21.62.",
    bullets: [
      "Pushback/Towing and Before Taxi set transponder as needed.",
      "Takeoff sets transponder mode TA/RA when entering the runway.",
      "After Landing and Shutdown set transponder as needed/STANDBY."
    ]
  },
  wxRadarTerrain: {
    citation: "Norse FCOM Rev 9, PDF pp.198, 215, 237; FCOM NP.21.20, NP.21.37, NP.21.59. Norse FCTM Rev 19, PDF p.63; FCTM 1.33.",
    bullets: [
      "Before Takeoff sets weather radar, VSD, and terrain display as needed.",
      "After Landing sets weather radar off.",
      "FCTM recommends one pilot monitor weather radar while the other monitors terrain when adverse weather and terrain/obstacles may affect the path."
    ]
  },
  vsd: {
    citation: "Norse FCOM Rev 9, PDF pp.215, 222; FCOM NP.21.37, NP.21.44. Norse FCTM Rev 19, PDF p.63; FCTM 1.33.",
    bullets: [
      "Before Takeoff and Approach set/select VSD as needed.",
      "FCTM display guidance links terrain/weather/vertical-situation monitoring to phase-appropriate situational awareness."
    ]
  },
  strobeLights: {
    citation: "Norse FCOM Rev 9, PDF pp.193, 216; FCOM NP.21.15, NP.21.38.",
    bullets: [
      "Preflight initially sets strobe OFF.",
      "Takeoff Procedure sets strobe ON when entering the departure runway."
    ]
  },
  landingLights: {
    citation: "Norse FCOM Rev 9, PDF pp.216, 217, 222, 237; FCOM NP.21.38-NP.21.39, NP.21.44, NP.21.59.",
    bullets: [
      "Takeoff Procedure sets landing lights ON when cleared for takeoff.",
      "Approach Procedure sets runway turnoff, taxi, and landing lights ON at 10,000 feet AAL.",
      "After Landing sets exterior lights as needed."
    ]
  },
  recallNotes: {
    citation: "Norse FCOM Rev 9, PDF pp.210, 214, 221; FCOM NP.21.32, NP.21.36, NP.21.43.",
    bullets: [
      "Descent reviews all alert and memo messages and operational notes.",
      "Before Start/Before Taxi recall checks verify only expected messages are shown."
    ]
  },
  landingPerformance: {
    citation: "Norse FCOM Rev 9, PDF pp.207, 221; FCOM NP.21.29, NP.21.43. Norse FCTM Rev 19, PDF p.217; FCTM 5.3.",
    bullets: [
      "Descent compares OPT landing performance calculations and sets landing data.",
      "FCTM approach preparation guidance links landing performance, briefing, and stabilized approach readiness."
    ]
  },
  minimums: {
    citation: "Norse FCOM Rev 9, PDF pp.200, 221, 223; FCOM NP.21.22, NP.21.43, NP.21.45. Norse FCTM Rev 19, PDF pp.72-74; FCTM 1.20-1.22.",
    bullets: [
      "Preflight/Descent/Approach set radio or baro minimums as required.",
      "FCTM callout guidance treats CONTINUE or GO-AROUND at minimums as an explicit PF callout, not merely an altitude callout."
    ]
  },
  vref: {
    citation: "Norse FCOM Rev 9, PDF p.221; FCOM NP.21.43.",
    bullets: [
      "Descent verifies VREF on APPROACH REF; PM enters VREF on APPROACH REF.",
      "Landing data supports approach speed and landing checklist setup."
    ]
  },
  navrad: {
    citation: "Norse FCOM Rev 9, PDF pp.183, 221, 225; FCOM NP.21.5, NP.21.43, NP.21.47.",
    bullets: [
      "CDU/EFB Preflight tunes NAV RADIO as needed.",
      "Descent includes NAVRAD setup.",
      "ILS/GLS approach verifies navigation radios tuned and identified with deviation pointers shown."
    ]
  },
  autobrake: {
    citation: "Norse FCOM Rev 9, PDF pp.221, 236-237; FCOM NP.21.43, NP.21.58-NP.21.59.",
    bullets: [
      "Descent sets the AUTOBRAKE selector.",
      "Landing Roll verifies correct autobrake operation.",
      "After Landing sets AUTOBRAKE selector OFF."
    ]
  },
  cabinLandingPa: {
    citation: "Norse FCOM Rev 9, PDF pp.222, 225, 229, 233; FCOM NP.21.44, NP.21.47, NP.21.51, NP.21.55.",
    bullets: [
      "Approach Procedure has PM announce CABIN CREW, PREPARE THE CABIN FOR LANDING approximately 30 minutes before landing or through FL300.",
      "Landing procedures announce CABIN CREW, BE SEATED FOR LANDING after verifying the cabin is secure."
    ]
  },
  rnp: {
    citation: "Norse FCOM Rev 9, PDF pp.182, 220, 222; FCOM NP.21.4, NP.21.42, NP.21.44. Norse FCTM Rev 19, PDF pp.56-57; FCTM 1.26-1.27.",
    bullets: [
      "CDU/EFB Preflight verifies correct departure RNP as needed.",
      "Climb/Cruise and Approach verify RNP as needed.",
      "FCTM FMC route verification emphasizes matching the route, constraints, and performance data against the flight plan."
    ]
  },
  altimeter: {
    citation: "Norse FCOM Rev 9, PDF pp.200, 220, 223; FCOM NP.21.22, NP.21.42, NP.21.45. Norse FCTM Rev 19, PDF p.72; FCTM 1.20.",
    bullets: [
      "Captain Preflight sets local altimeter references.",
      "Climb/Cruise and Approach set main altimeters to standard/QNH when cleared and conditions are met.",
      "FCTM recommended callouts include transition altitude/level and altimeter setting callouts."
    ]
  },
  seatbelts: {
    citation: "Norse FCOM Rev 9, PDF pp.209, 222, 240; FCOM NP.21.31, NP.21.44, NP.21.62.",
    bullets: [
      "Before Start sets SEAT BELTS selector ON.",
      "Approach Procedure sets seatbelt signs ON about 20 minutes before landing or through FL200/20,000 feet AAL.",
      "Shutdown sets SEAT BELTS selector OFF."
    ]
  },
  updateArrivalApproach: {
    citation: "Norse FCOM Rev 9, PDF pp.221-222; FCOM NP.21.43-NP.21.44. Norse FCTM Rev 19, PDF pp.56-57; FCTM 1.26-1.27.",
    bullets: [
      "Descent verifies CDU RTE LEGS pages are correctly set up for arrival.",
      "Approach updates the arrival and approach as needed and does not manually build or add waypoints to the selected FMC procedure.",
      "FCTM route verification focuses on waypoint sequence, constraints, discontinuities, and route correctness."
    ]
  },
  speedbrake: {
    citation: "Norse FCOM Rev 9, PDF pp.202, 226, 230, 236-237; FCOM NP.21.24, NP.21.48, NP.21.52, NP.21.58-NP.21.59. Norse FCTM Rev 19, PDF p.239; FCTM 6.41.",
    bullets: [
      "Preflight verifies SPEEDBRAKE lever DOWN.",
      "Approach arms the speedbrake before landing checklist.",
      "Landing Roll verifies SPEEDBRAKE lever UP and PM calls SPEEDBRAKES UP or SPEEDBRAKES NOT UP.",
      "After Landing captain positions or verifies SPEEDBRAKE lever DOWN."
    ]
  },
  exteriorLights: {
    citation: "Norse FCOM Rev 9, PDF pp.193, 216-217, 222, 237; FCOM NP.21.15, NP.21.38-NP.21.39, NP.21.44, NP.21.59.",
    bullets: [
      "Preflight initially sets exterior lights as needed/off.",
      "Runway entry/takeoff and approach set strobe/landing/runway/taxi lights by phase.",
      "After Landing sets exterior lights as needed."
    ]
  },
  fuelControl: {
    citation: "Norse FCOM Rev 9, PDF pp.202, 213, 238; FCOM NP.21.24, NP.21.35, NP.21.60.",
    bullets: [
      "Preflight verifies fuel control switches CUTOFF.",
      "Engine Start moves the called engine fuel control switch RUN.",
      "Shutdown sets fuel control switches CUTOFF."
    ]
  },
  efb: {
    citation: "Norse FCOM Rev 9, PDF pp.182, 209, 240, 242; FCOM NP.21.4, NP.21.31, NP.21.62, NP.21.64.",
    bullets: [
      "CDU/EFB Preflight establishes charging/internet connectivity and verifies WebManuals, FD Pro, OPT, and QRH applications and databases.",
      "Before Start verifies Portable EFBs, Cabin iPads, and PEDs are in Flight Mode.",
      "Shutdown sets Portable EFB Flight Mode Off; Secure completes EFB procedures, closes apps, switches screens off, and unplugs chargers."
    ]
  },
  doorsManual: {
    citation: "Norse FCOM Rev 9, PDF p.241; FCOM NP.21.63.",
    bullets: [
      "Passenger Doors Status Procedure uses EICAS display DOORS MANUAL after Shutdown Procedure and/or when passenger entry doors need to be opened.",
      "F/O announces CABIN CREW, YOU MAY OPEN DOORS."
    ]
  },
  packs: {
    citation: "Norse FCOM Rev 9, PDF pp.194, 242; FCOM NP.21.16, NP.21.64.",
    bullets: [
      "Preflight air conditioning panel setup includes packs and related air conditioning controls.",
      "Secure Procedure sets PACK switches OFF."
    ]
  }
};

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
