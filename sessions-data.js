window.STUDY_SESSIONS = {
  improvements: [
    {
      title: "Scenario briefing cards",
      detail: "Use the ATO programme as the map: one compact page per FPT, FFS, LST, and optional ZFTT session, with the route, key training emphasis, and planning figures visible before you start.",
      source: "ATO APP R B787 TR Issue 01.4; CBT study-plan thread."
    },
    {
      title: "Weak-area drill packs",
      detail: "Add focused drills for the recurring CBT weak areas: electrical/hydraulic/air architecture, APU and fuel support logic, AFDS/FMS/ND/HUD, and cockpit interface traps.",
      source: "CBT study-plan thread."
    },
    {
      title: "Session-linked procedure prep",
      detail: "For each simulator session, link directly to the relevant Normal, Non-Normal, Memory Items, Callouts, Limitations, and Scan Flows pages.",
      source: "Current site structure plus ATO session flow."
    },
    {
      title: "Confidence marking",
      detail: "Let each topic be marked cold, warm, or ready, separate from checklist completion, so study time goes to weak systems rather than already-comfortable flows.",
      source: "CBT study-plan thread."
    },
    {
      title: "Chair-flying mode",
      detail: "Add a condensed run mode for verbal callouts, scan prompts, and memory items, with fewer references visible until a popup is opened.",
      source: "Current site usage pattern."
    },
    {
      title: "Error log and question bank",
      detail: "Turn missed practice-test topics into a reusable log with the rule, the cockpit indication, the common trap, and the source page.",
      source: "CBT study-plan thread; local manual-prep workspace."
    }
  ],
  sessions: [
    {
      id: "fpt-efb",
      category: "FPT",
      title: "FPT EFB",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.29-30; section 2.1.",
      summary: "Introduction to the FPT with emphasis on scans, flows, checklists, EFB functions, and pre/post-flight procedures. No flight is planned for this detail.",
      emphasis: ["FPT familiarity", "Scans and flows", "Checklists", "EFB functions", "Pre/post-flight procedures"],
      route: [
        ["Departure", "EGCC RW 05R - ASMIM 1S"],
        ["Route", "Nil"],
        ["Flight number", "Instructor decision"]
      ],
      planning: [
        ["GR WT", "190500kg"],
        ["FUEL", "28000kg"],
        ["ZFW", "162400kg"],
        ["CRZ ALT", "FL 160"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Normal", "Scan Flows", "Callouts"]
    },
    {
      id: "fpt-1t-1s",
      category: "FPT",
      title: "FPT 1T/1S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.33-43; section 2.2.",
      summary: "Real-time normal-procedures flight focused on autopilot pitch/roll modes, CDU route programming, clearance changes, scan flows, and CRM.",
      emphasis: ["Normal procedures", "EFIS/DSP displays", "Basic autoflight", "FMC operation", "HUD monitored takeoff", "ILS/autoland"],
      route: [
        ["Origin", "EGKK - London Gatwick"],
        ["Departure", "RW 26L BOGNA 1X"],
        ["Route", "BOGNA, L612 XAMAB, DPE"],
        ["Destination", "EGKK - London Gatwick"],
        ["Alternate", "EGLL - London Heathrow"]
      ],
      planning: [
        ["GR WT", "190500kg"],
        ["FUEL", "28000kg"],
        ["ZFW", "162400kg"],
        ["CRZ ALT", "FL 160"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Normal", "Scan Flows", "Callouts", "Limitations"]
    },
    {
      id: "fpt-2t",
      category: "FPT",
      title: "FPT 2T",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.44-59; section 2.3.",
      summary: "London Heathrow to Glasgow profile using LNAV/VNAV, planned and unplanned holding, and introduction to go-around procedures.",
      emphasis: ["CDU/EFB preflight", "LNAV", "VNAV", "FMC support pages", "Holding", "Go-around"],
      route: [
        ["Origin", "EGLL"],
        ["Departure", "RW 27L UMLAT 1F"],
        ["Route", "UMLAT, WELIN, LESTA, UN601, RIBEL, LANAK"],
        ["Destination", "EGPF"],
        ["Alternate", "EGPK - Prestwick"]
      ],
      planning: [
        ["GR WT", "190500kg"],
        ["FUEL", "28000kg"],
        ["ZFW", "162400kg"],
        ["CRZ ALT", "FL 160"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Normal", "Callouts", "Scan Flows"]
    },
    {
      id: "fpt-3t-2s",
      category: "FPT",
      title: "FPT 3T/2S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.60-71; section 2.4.",
      summary: "London Gatwick to Frankfurt in wintry weather, including contaminated runway performance, RNP/ANP, navigation performance scales, and non-precision 2D approaches using FPA/VS.",
      emphasis: ["Contaminated runway performance", "RNP/ANP", "Navigation performance scales", "FPA/VS", "Normal procedures", "CRM"],
      route: [
        ["Origin", "EGKK - London Gatwick"],
        ["Departure", "RWY26L WIZAD 1X"],
        ["Route", "DVR, UL9, KONAN, UL607 MATUG, ROLIS"],
        ["Destination", "EDDF - Frankfurt"],
        ["Flight number", "Instructor decision"]
      ],
      planning: [
        ["GR WT", "207500kg"],
        ["FUEL", "28500kg"],
        ["ZFW", "179400kg"],
        ["CRZ ALT", "FL 330"],
        ["RUNWAY", "6 mm wet SN"]
      ],
      prep: ["Normal", "Limitations", "Callouts"]
    },
    {
      id: "fpt-4t-3s",
      category: "FPT",
      title: "FPT 4T/3S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.72-81; section 2.5.",
      summary: "London Heathrow to Zurich with diversion to Stuttgart, completing FMC/EFB/AFDS functions, diversion procedures, and IAN before the non-normal course section.",
      emphasis: ["FMC", "EFB", "AFDS", "Diversion", "IAN", "Wet runway"],
      route: [
        ["Origin", "EGLL - London Heathrow"],
        ["Departure", "RWY27L DET_2F"],
        ["Route", "ING UL15 BEGAR, TRA, KLO"],
        ["Destination", "LSZH - Zurich"],
        ["Alternate", "EDDS - Stuttgart"]
      ],
      planning: [
        ["GR WT", "190500kg"],
        ["FUEL", "28500kg"],
        ["ZFW", "162400kg"],
        ["CRZ ALT", "FL 330"],
        ["RUNWAY", "Wet"]
      ],
      prep: ["Normal", "Limitations", "Callouts"]
    },
    {
      id: "fpt-eicas-ecl",
      category: "FPT",
      title: "FPT EICAS and ECL",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.82-93; section 2.6.",
      summary: "Briefing and practice detail for EICAS/ECL technical knowledge, EICAS-ECL integration, non-normal management, and common EICAS/ECL usage errors.",
      emphasis: ["EICAS", "ECL", "Non-normal management", "Checklist display management", "Crew error traps"],
      route: [
        ["Origin", "EGKK - London Gatwick"],
        ["Departure", "RW 26L BOGNA 1X"],
        ["Route", "BOGNA DPE CRL"],
        ["Destination", "LFPG - Paris Charles De Gaulle"],
        ["Alternate", "NA"]
      ],
      planning: [
        ["GR WT", "190500kg"],
        ["FUEL", "28500kg"],
        ["ZFW", "162400kg"],
        ["CRZ ALT", "FL 330"],
        ["RUNWAY", "Wet"]
      ],
      prep: ["Non-Normal", "Memory items", "Callouts"]
    },
    {
      id: "fpt-5t-4s",
      category: "FPT",
      title: "FPT 5T/4S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.94-105; section 2.7.",
      summary: "Icing-condition flight from London Gatwick toward Keflavik with diversion to Manchester, MEL item, engine-start malfunctions, runway change, anti-ice/de-icing, engine/hydraulic items, speed protection, and IAN.",
      emphasis: ["MEL", "Engine start malfunctions", "Runway change", "Anti-ice/de-icing", "Engine/hydraulic non-normals", "IAN", "Diversion"],
      route: [
        ["Part 1", "EGKK - BIKF, alternate EGCC"],
        ["Part 1 route", "LAM, N57 SAPCO, Y53 WAL, N864, DCS, GOW, L602TIR, KFV"],
        ["Part 2", "EGCC - EGKK"],
        ["Part 2 route", "HON, UL15, BIG, MAY"]
      ],
      planning: [
        ["GR WT", "191000kg"],
        ["FUEL", "28500kg"],
        ["ZFW", "162500kg"],
        ["CRZ ALT", "FL 380 (1) / FL 240 (2)"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Non-Normal", "Memory items", "Limitations", "Callouts"]
    },
    {
      id: "fpt-6t",
      category: "FPT",
      title: "FPT 6T",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.106-116; section 2.8.",
      summary: "Geneva to Athens with diversion to Milan Linate, followed by Linate to Geneva. Includes MEL/APU-inoperative ground power start, advanced non-normals, speed protection, ILS, circling, and go-arounds.",
      emphasis: ["APU inoperative", "Ground power start", "Engine fire", "Hydraulics", "Electrical", "Liquid cooling", "ILS", "Circling", "Go-around"],
      route: [
        ["Part 1", "LSGG - LGAV, alternate LIML"],
        ["Part 1 route", "MEDAM, LURAG, T293 LOGDI, Y663 EKDIR, LOMED, M730 ANC, L612 VIE, L612 BRD, M603 PINDO, L607 ATV"],
        ["Part 2", "LIML - LSGG"],
        ["Part 2 route", "WIL BENOT SPR"]
      ],
      planning: [
        ["GR WT", "190000kg"],
        ["FUEL", "40500kg"],
        ["ZFW", "149500kg"],
        ["CRZ ALT", "FL 390 (1) / FL240 (2)"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Non-Normal", "Memory items", "Limitations", "Normal"]
    },
    {
      id: "fpt-7t-5s",
      category: "FPT",
      title: "FPT 7T/5S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.117-123; section 2.9.",
      summary: "London Heathrow to Helsinki with diversion to London Stansted, then Stansted to Heathrow. Includes enroute non-normals, diversion, windshear on approach, and raw data ILS using the HUD.",
      emphasis: ["Systems management", "Diversion", "Windshear", "Raw data ILS", "HUD", "Single PACK MEL"],
      route: [
        ["Part 1", "EGLL - EFHK, alternate EGSS"],
        ["Part 1 route", "CLN, LEDBO, M604 ROKAN, LONAM, N54E005, N55E008, BAVTA, N607 LURAR, PELUP, Z226 NILUG, L734 NEBSI, ALAMI, N746 ABSER, HEL"],
        ["Part 2", "EGSS - EGLL"],
        ["Part 2 route", "DET, TIGER, BIG"]
      ],
      planning: [
        ["GR WT", "190000kg"],
        ["FUEL", "405000kg (as printed)"],
        ["ZFW", "157500kg"],
        ["CRZ ALT", "FL 370 (1) / FL150 (2)"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Non-Normal", "Memory items", "Limitations", "Callouts"]
    },
    {
      id: "fpt-8t-6s",
      category: "FPT",
      title: "FPT 8T/6S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.124-133; section 2.10.",
      summary: "Geneva to Athens with diversion to Milan Linate, then Milan Linate to Geneva with return to Milan. Includes full preflight, enroute non-normals, advanced ECL operation, diversion, and raw data ILS using the HUD.",
      emphasis: ["Advanced non-normals", "ECL operation", "Diversion", "Raw data ILS", "HUD", "Single PACK MEL"],
      route: [
        ["Part 1", "LSGG - LGAV, alternate LIML"],
        ["Part 1 route", "MEDAM, LURAG, T293 LOGDI, Y663 EKDIR, LOMED, M730 ANC, L612, BRD, M603 PINDO, L607 ATV"],
        ["Part 2", "LIML - LSGG"],
        ["Part 2 route", "SRN, WIL, BENOT, SPR"]
      ],
      planning: [
        ["GR WT", "190000kg"],
        ["FUEL", "40500kg"],
        ["ZFW", "157500kg"],
        ["CRZ ALT", "FL 390 (1) / FL240 (2)"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Non-Normal", "Memory items", "Limitations", "Callouts"]
    },
    {
      id: "ffs-1t-1s",
      category: "FFS",
      title: "FFS 1T/1S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.135-145; section 3.1.",
      summary: "London Gatwick to London Heathrow session for preflight, normal procedures, manual flight characteristics, ground handling, UPRT, envelope protection, ILS approaches, landing practice, and all-engine missed approach.",
      emphasis: ["Normal procedures", "Manual handling", "Ground handling", "UPRT", "Envelope protection", "HUD", "ILS", "Landings"],
      route: [
        ["Origin", "London Gatwick (EGKK) Gate 21"],
        ["Departure", "RWY26L ADMAG __ X"],
        ["Route", "ADMAG DVR LAM"],
        ["Destination", "EGLL - London Heathrow"],
        ["Flight number", "By instructor"]
      ],
      planning: [
        ["GR WT", "192400kg"],
        ["FUEL", "4000kg"],
        ["ZFW", "152400kg"],
        ["CRZ ALT", "FL 150 / FL150"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Normal", "Callouts", "Limitations", "Scan Flows"]
    },
    {
      id: "ffs-2t",
      category: "FFS",
      title: "FFS 2T",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.146-153; section 3.2.",
      summary: "Long-haul Amsterdam to San Francisco and return-to-Schiphol profile with normal/non-normal practice, rejected takeoffs, TCAS, non-ILS approaches using VNAV/FPA, icing, crosswind, and raw data ILS.",
      emphasis: ["RTO", "Crosswind takeoff", "TCAS", "VOR/raw data", "VNAV/FPA", "Circling", "Rejected landing"],
      route: [
        ["Origin", "Amsterdam Schiphol (EHAM) Gate C-18"],
        ["Departure", "RWY27 BERGI, UL602 MIMVA, L602 TIR Oceanic"],
        ["Route", "BERGI __P"],
        ["Destination", "San Francisco KSFO"],
        ["Alternate", "London Gatwick EGKK"]
      ],
      planning: [
        ["GR WT", "250200kg"],
        ["FUEL", "77000kg"],
        ["ZFW", "173200kg"],
        ["COST INDEX", "100"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Non-Normal", "Limitations", "Callouts", "Memory items"]
    },
    {
      id: "ffs-3t-2s",
      category: "FFS",
      title: "FFS 3T/2S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.154-161; section 3.3.",
      summary: "Local London Gatwick session emphasizing one-engine-inoperative performance and characteristics, EFATO familiarization/practice, windshear handling, and stall recovery after takeoff.",
      emphasis: ["Engine inoperative", "EFATO", "Windshear recovery", "Stall after takeoff", "Flaps 15 takeoff", "Crosswind"],
      route: [
        ["Origin", "London Gatwick (EGKK) Gate 21"],
        ["Runway", "RWY26L for departure and landing"],
        ["Departure", "SFD __X, radar vectors ILS RWY26L"],
        ["Route", "SFD __X"],
        ["Destination", "London Gatwick (EGKK)"]
      ],
      planning: [
        ["GR WT", "192700kg"],
        ["FUEL", "40000kg"],
        ["ZFW", "152400kg"],
        ["CRZ ALT", "4000ft"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Memory items", "Non-Normal", "Callouts", "Limitations"]
    },
    {
      id: "ffs-4t",
      category: "FFS",
      title: "FFS 4T",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.162-166; section 3.4.",
      summary: "London Heathrow to Helsinki profile with rapid start, engine fire on takeoff, additional EFATO, flight-control malfunctions, and non-ILS approaches.",
      emphasis: ["Rapid start", "Engine fire on takeoff", "EFATO", "Flight-control malfunctions", "Flaps drive failure", "Non-ILS approaches"],
      route: [
        ["Origin", "London Heathrow (EGLL)"],
        ["Departure", "RWY27L BPK __G"],
        ["Route", "BPK CLN L620 TULIP UZ 700 NIKIL Direct HEL"],
        ["Destination", "Helsinki (EFHK)"],
        ["Alternate", "London Stansted (EGSS)"]
      ],
      planning: [
        ["GR WT", "206500g"],
        ["FUEL", "44000kg"],
        ["ZFW", "162500kg"],
        ["CRZ ALT", "FL310"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Memory items", "Non-Normal", "Callouts", "Scan Flows"]
    },
    {
      id: "ffs-5t-3s",
      category: "FFS",
      title: "FFS 5T/3S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.167-170; section 3.5.",
      summary: "Stansted-origin scenario with electrical non-normals, dual engine failure/stall, one engine restart, diversion, fuel jettison, RNAV, windshear go-around, circling, engine oil pressure, TCAS, cargo fire, and landing.",
      emphasis: ["Dual engine failure", "Fuel jettison", "Windshear", "Circling", "Engine oil pressure", "TCAS", "Cargo fire"],
      route: [
        ["Origin", "Stansted EGSS"],
        ["Departure", "RNAV LISTO"],
        ["Route", "OVERHEAD TNT - MCT"],
        ["Destination", "Stockholm Arlanda ESSA"],
        ["Alternates", "Glasgow EGPF / Prestwick EGPK"]
      ],
      planning: [
        ["GR WT", "206500kg"],
        ["FUEL", "44000kg"],
        ["ZFW", "162500kg"],
        ["CRZ ALT", "FL 310"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Memory items", "Non-Normal", "Limitations", "Callouts"]
    },
    {
      id: "ffs-6t-4s",
      category: "FFS",
      title: "FFS 6T/4S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.171-177; section 3.6.",
      summary: "Night cruise scenario with cabin altitude warning, rapid descent and diversion, terrain avoidance, unreliable airspeed profiles, raw data ILS, heavyweight EFATO, fuel jettison, and ILS return.",
      emphasis: ["Rapid descent", "Cabin altitude", "Terrain avoidance", "Airspeed unreliable", "Raw data ILS", "Heavyweight EFATO", "Fuel jettison"],
      route: [
        ["Origin", "Manchester EGCC"],
        ["Route", "Overhead HON, cleared direct to LAM"],
        ["Destination", "Tenerife South (GCTS)"],
        ["Alternates", "London Gatwick (EGKK) / Malaga (LEMG)"],
        ["Flight number", "By instructor"]
      ],
      planning: [
        ["GR WT", "192700kg"],
        ["FUEL", "34000kg"],
        ["ZFW", "158700kg"],
        ["CRZ ALT", "FL300"],
        ["RUNWAY", "Dry"]
      ],
      prep: ["Memory items", "Non-Normal", "Limitations", "Callouts"]
    },
    {
      id: "ffs-7t-5s",
      category: "FFS",
      title: "FFS 7T/5S",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.178-183; section 3.7.",
      summary: "LOFT-style preparation for the LST from Paris to Manchester with diversion to Gatwick, full pushback/start, selected non-normals, smoke/fumes, TCAS, RTO, crew incapacitation, and diversion decisions.",
      emphasis: ["LOFT", "Smoke and fumes", "Smoke removal", "TCAS", "RTO", "Crew incapacitation", "Diversion decision"],
      route: [
        ["Origin", "Paris Charles de Gaulle (LFPG) Gate C10"],
        ["Departure", "RWY08L OPALE __H"],
        ["Route", "OPALE, T421 BIG, T420 TNT, MCT"],
        ["Destination", "Manchester (EGCC)"],
        ["Alternates", "Gatwick (EGKK)"]
      ],
      planning: [
        ["GR WT", "180500kg"],
        ["FUEL", "31800kg"],
        ["ZFW", "148700kg"],
        ["CRZ ALT", "FL300"],
        ["RUNWAY", "Wet"]
      ],
      prep: ["Memory items", "Non-Normal", "Callouts", "Limitations"]
    },
    {
      id: "ffs-8t-6s-lst",
      category: "FFS",
      title: "FFS 8T/6S - LST",
      citation: "ATO APP R B787 TR Issue 01.4, PDF p.184; section 3.8.",
      summary: "Licence Skills Test page. The ATO source leaves route and performance fields blank for completion as required.",
      emphasis: ["LST", "Instructor or examiner detail", "Route and performance to be supplied"],
      route: [
        ["Origin", "Blank in source"],
        ["Departure", "Blank in source"],
        ["Route", "Blank in source"],
        ["Destination", "Blank in source"],
        ["Alternates", "Blank in source"]
      ],
      planning: [
        ["GR WT", "Blank in source"],
        ["FUEL", "Blank in source"],
        ["ZFW", "Blank in source"],
        ["CRZ ALT", "Blank in source"],
        ["RUNWAY", "Blank in source"]
      ],
      prep: ["Normal", "Non-Normal", "Memory items", "Callouts", "Limitations"]
    },
    {
      id: "ffs-zftt-optional",
      category: "FFS",
      title: "FFS - ZFTT Optional",
      citation: "ATO APP R B787 TR Issue 01.4, PDF pp.185-187; section 3.9.",
      summary: "Optional ZFTT detail after LST completion. Each trainee must complete a minimum of six takeoffs and landings, with three unassisted.",
      emphasis: ["Takeoffs and landings", "Normal weights", "Crosswind", "Variable flap settings", "Weather variation"],
      route: [
        ["Route", "Instructor's choice"],
        ["Origin", "Blank in source"],
        ["Departure", "Blank in source"],
        ["Destination", "Blank in source"],
        ["Alternates", "Blank in source"]
      ],
      planning: [
        ["GR WT", "Blank in source"],
        ["FUEL", "Blank in source"],
        ["ZFW", "Blank in source"],
        ["CRZ ALT", "Blank in source"],
        ["RUNWAY", "Blank in source"]
      ],
      prep: ["Normal", "Callouts", "Limitations", "Scan Flows"]
    }
  ]
};
