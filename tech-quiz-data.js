window.TECH_QUIZ = {
  "title": "Tech Quiz",
  "citation": "QB 101 787 1.pdf parsed by manual-prep/question_bank.py; QB 101 validation pass 1; prior source-verified chat audits.",
  "questions": [
    {
      "id": "qb101-001",
      "number": 1,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is a correct statement about alternate pitch trim switches?",
      "options": {
        "A": "They are linked to the stabilizer trim control modules (STCM) via control cables and then mechanically to the stabilizer.",
        "B": "They are linked electrically to the horizontal stabilizer trim actuator and then mechanically to the stabilizer.",
        "C": "They do not disconnect the autopilot when the levers are moved with the autopilot engaged, but do move the horizontal stabilizer.",
        "D": "They should not be used with the autopilot engaged or during stall or overspeed protection manoeuvres."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Alternate pitch trim is electrically linked to the horizontal stabilizer trim actuator and mechanically moves the stabilizer.",
      "reference": "Generic FCOM p.1636; alternate pitch trim check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-002",
      "number": 2,
      "source": "QB 101 787 1",
      "prompt": "The EFIS control panel traffic (TFC) switch is on. What does the following square symbol (displayed in RED) indicate? [] -03 (with a downward arrow)",
      "options": {
        "A": "Traffic advisory (TA) traffic 200 feet above descending > 500fpm",
        "B": "Resolution advisory (RA) traffic 2000 feet above descending > 500fpm",
        "C": "Resolution advisory (RA) traffic 300 feet below climbing > 500fpm",
        "D": "Traffic advisory (TA) traffic 2000 feet above descending > 500fpm"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "source-issue",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.2426; QB 101 validation pass 1.",
      "auditNote": "Audit note: the answer depends on the TCAS vertical-motion arrow. FCOM confirms red square is RA traffic and -03 means 300 ft below; if the arrow is truly downward, the bank answer saying climbing is wrong and no option is fully correct."
    },
    {
      "id": "qb101-003",
      "number": 3,
      "source": "QB 101 787 1",
      "prompt": "With WX-T selected, the weather radar will detect turbulence within precipitation at all ND display ranges. Within what range of the aeroplane will it display such turbulence?",
      "options": {
        "A": "100 NM",
        "B": "60 NM",
        "C": "20 NM",
        "D": "40 NM"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "WX+T displays turbulence within precipitation within 40 NM.",
      "reference": "Generic FCOM p.2032; WX+T turbulence range check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-004",
      "number": 4,
      "source": "QB 101 787 1",
      "prompt": "What are the maximum Headwind, Tailwind and Crosswind component speeds when take-off weather minima are predicated on HUD take-off operations?",
      "options": {
        "A": "15, 15 and 20 knots respectively",
        "B": "20, 15 and 25 knots respectively",
        "C": "20, 20 and 25 knots respectively",
        "D": "25, 15 and 20 knots respectively"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "HUD takeoff weather minima wind components are 25 kt headwind, 15 kt tailwind, and 20 kt crosswind.",
      "reference": "Generic FCOM p.63; HUD takeoff wind limits check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-005",
      "number": 5,
      "source": "QB 101 787 1",
      "prompt": "The MENU key on the tuning control panel (TCP) shows that a SYS POWER selection key is available. Pressing this key shows a SYS POWER page for which system?",
      "options": {
        "A": "For the L, R and Centre TCPs",
        "B": "For the GPWS",
        "C": "For the Transponder and Weather Radars",
        "D": "For the L and R HF radios"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-006",
      "number": 6,
      "source": "QB 101 787 1",
      "prompt": "Before engine start, the right centre tank pump PRESS light is illuminated. What action could be taken to check if pump is being load-shed?",
      "options": {
        "A": "No action required, it is always load-shed prior to start",
        "B": "Observe the EICAS a message will be displayed after a short sensing delay",
        "C": "Switch the Pump OFF then back on to see if it clears",
        "D": "Check the fuel synoptic to see if it is labelled as LOAD SHED"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "A pump PRESS light before start may be load shedding; the fuel synoptic labels a load-shed pump as LOAD SHED.",
      "reference": "Generic FCOM p.2324; fuel pump LOAD SHED indication check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-007",
      "number": 7,
      "source": "QB 101 787 1",
      "prompt": "What is the function of the Nitrogen Generation system on board?",
      "options": {
        "A": "To overpressure the centre fuel tanks to empty first and also assist any fuel jettison rate",
        "B": "To slightly pressurize the main, surge and centre fuel tanks to add fuel feed",
        "C": "To displace fuel vapours and reduce flammability",
        "D": "To maintain stable fuel temperatures to avoid ice crystals forming or fuel overheating"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-008",
      "number": 8,
      "source": "QB 101 787 1",
      "prompt": "What is the primary source of power for the flight control electronics?",
      "options": {
        "A": "The Main 235v AC System",
        "B": "Three PMGs",
        "C": "Directly from the Mains Battery",
        "D": "28v DC distribution system"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-009",
      "number": 9,
      "source": "QB 101 787 1",
      "prompt": "Where is the list of aircraft systems which are affected by load shedding shown?",
      "options": {
        "A": "Individual \"Load Shed\" EICAS Message",
        "B": "The ECL non-normal CL",
        "C": "Individual equipment caution messages",
        "D": "The electric synoptic"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "The affected load-shed systems are listed on the electrical synoptic.",
      "reference": "Generic FCOM p.1514; electrical synoptic load-shedding check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-010",
      "number": 10,
      "source": "QB 101 787 1",
      "prompt": "During an external inspection a warning horn is heard from the nose wheel well area. What does this indicate?",
      "options": {
        "A": "The FIRE/OVERHEAT detection system is being tested internally",
        "B": "The IRS have been left on with the aeroplane unmanned for more than 30 minutes",
        "C": "The APU fire warning has been set off",
        "D": "It is a low battery aural warning for ground crew"
      },
      "bankAnswer": "D",
      "correctAnswer": "B",
      "status": "incorrect-key",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.2022; Norse FCOM Rev 9 p.1604; QB 101 validation pass 1.",
      "auditNote": "Audit note: the bank key appears wrong. The nose wheel well horn alerts ground crew that the IRS is on battery and depleting the battery; Q83 in the same bank marks this concept correctly."
    },
    {
      "id": "qb101-011",
      "number": 11,
      "source": "QB 101 787 1",
      "prompt": "Whilst on the ground during the take-off run an RTO is initiated. Above what groundspeed will the RTO auto-braking setting command maximum braking pressure? (IAGO exam.... p. 5)",
      "options": {
        "A": "85 Kts",
        "B": "75 Kts",
        "C": "80 Kts",
        "D": "90 Kts"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "RTO autobrake maximum pressure is commanded above 85 kt.",
      "reference": "Generic FCOM p.2368; RTO autobrake threshold check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-012",
      "number": 12,
      "source": "QB 101 787 1",
      "prompt": "Which of the following best describes the probe heats? (IAGO exam.... p. 5)",
      "options": {
        "A": "Wing mounted pitot probes are heated in flight to protect against ice accretion",
        "B": "Three TAT (Total Air Temperature) probes are electrically heated for ice protection",
        "C": "Three probes are electrically heated when either engine is operated",
        "D": "The angle of attack probe will operate once both engines have been started"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-013",
      "number": 13,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is a correct statement concerning weather radar operation? (IAGO exam.... p. 5)",
      "options": {
        "A": "The system self-tests only on initial start up",
        "B": "The system begins scanning for windshear below 2300 ft radio altitude",
        "C": "Weather radar returns on the ND and mini map will show out to 640 nm range",
        "D": "Turbulence due precipitation and clear air turbulence are both sensed by the weather radar"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-014",
      "number": 14,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is a characteristic of a momentary action switch? (IAGO exam.... p. 6)",
      "options": {
        "A": "A flow bar may be visible when ON",
        "B": "Bottom half of the switch may indicate systems state PRESS FAIL OFF",
        "C": "It is sprung-loaded to the extend position",
        "D": "When pushed in flush with the panel it is ON"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Momentary-action switches are spring-loaded to the extended position.",
      "reference": "Generic FCOM p.1124; momentary-action switch audit.",
      "auditNote": ""
    },
    {
      "id": "qb101-015",
      "number": 15,
      "source": "QB 101 787 1",
      "prompt": "The weather radar should not be operated in a hangar or within what distance of any fuel spill? (IAGO exam.... p. 6)",
      "options": {
        "A": "15.25 metres (50 feet)",
        "B": "100 metres",
        "C": "125 feet",
        "D": "75 feet"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-016",
      "number": 16,
      "source": "QB 101 787 1",
      "prompt": "On the PFD, what condition is indicated by an amber line through a FMA mode annunciator and a flight director bar removed? Is the Autopilot still engaged? (IAGO exam.... p. 7)",
      "options": {
        "A": "Applicable mode has disengaged, but the autopilot remains engaged.",
        "B": "The applicable mode is degraded but autopilot remains engaged in an altitude stabilising mode based on inertial data",
        "C": "The applicable mode has reverted to CWS and autopilot remains engaged",
        "D": "Autopilot disengages."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-017",
      "number": 17,
      "source": "QB 101 787 1",
      "prompt": "What does moving the control wheel pitch trim switch do in normal mode when airborne? (IAGO exam.... p. 7)",
      "options": {
        "A": "Resets the stabilizer to cruise speed",
        "B": "Directly move the stabilizer",
        "C": "Changes the trim reference airspeed",
        "D": "Resets the elevators to relieve any control loads"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-018",
      "number": 18,
      "source": "QB 101 787 1",
      "prompt": "Identify the limitations that applies to the use of VNA V and/ or LNA V? (IAGO exam.... p. 8)",
      "options": {
        "A": "Do not use VNAV / LNA V below transition altitude with QFE selected",
        "B": "When operating the autopilot in the polar region in LNA V the TRUE position on the heading reference switch must be used",
        "C": "LNA V will not sequence waypoints if more than 18nm off the active route and not on an offset route",
        "D": "VNA V use prohibited with MAG heading selected North or South of 70 degrees latitude"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-019",
      "number": 19,
      "source": "QB 101 787 1",
      "prompt": "What does the TAMS display on the PFD indicate? (IAGO exam.... p. 8)",
      "options": {
        "A": "The Thrust Asymmetry Monitoring System has failed (Red)",
        "B": "The Thrust Asymmetry Minimum Speed system is controlling thrust",
        "C": "The Auto Throttle has reverted to Thrust Alternate Mode due to asymmetry",
        "D": "The minimum control speed for operating with a large thrust asymmetry"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-020",
      "number": 20,
      "source": "QB 101 787 1",
      "prompt": "Which electrical mode (bus) if any, is energised when a single forward external power source illuminates an A V AIL light? (IAGO exam.... p. 8)",
      "options": {
        "A": "Towing Power",
        "B": "Ground Service",
        "C": "Standby Power",
        "D": "Ground Handling"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-021",
      "number": 21,
      "source": "QB 101 787 1",
      "prompt": "Which is the most applicable limitation that applies to the aircraft altimeters? (IAGO exam.... p. 9)",
      "options": {
        "A": "Altimeter are subject to position error",
        "B": "Captain and F/O's altimeter must agree within 50 feet with standard pressure set, at all stages of flight",
        "C": "The standby altimeter meets the accuracy requirement for RVSM",
        "D": "Prior to take off the maximum allowable difference between Captain or F/O's altitude displayed and field elevation is 75 feet"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-022",
      "number": 22,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is a true statement when the PFD is operating in Reversion Mode? (IAGO exam.... p. 9)",
      "options": {
        "A": "VNA V speed band and minimum manoeuvring speed indications fail",
        "B": "The PFD with mini map is cropped to fit within multi-function display window",
        "C": "Instrument approaches with FMC computed glide path paths are not displayed",
        "D": "The flight mode annunciators and navigation source references are inhibited"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-023",
      "number": 23,
      "source": "QB 101 787 1",
      "prompt": "What is the function of the Nitrogen Generation system on board? (IAGO exam.... p. 10)",
      "options": {
        "A": "To overpressure the centre fuel tanks to empty first and also assist any fuel jettison rate",
        "B": "To maintain stable fuel temperatures to avoid ice crystals forming or fuel overheating",
        "C": "To displace fuel vapours and reduce flammability",
        "D": "To slightly pressurize the main, surge and centre fuel tanks to add fuel feed"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-024",
      "number": 24,
      "source": "QB 101 787 1",
      "prompt": "How many attempts will the auto-start system make for an in-flight start? (IAGO exam.... p. 10)",
      "options": {
        "A": "Maximum allowed by the duty cycle",
        "B": "3 Attempts, 30 secs apart",
        "C": "Continuous start attempts",
        "D": "2 Full cycles"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-025",
      "number": 25,
      "source": "QB 101 787 1",
      "prompt": "The stabiliser take-off trim green band indicates the allowable take-off trim limits based on data from the FMC. What other source provides sets of validation limits to confirm that the computed green band is correct? (IAGO exam.... p. 11)",
      "options": {
        "A": "Main and nose gear pressure data",
        "B": "Information from main gear and nose gear oleo proximity switches",
        "C": "Information from two nose gear pressure transducers",
        "D": "Main gear truck tilt sensor data"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-026",
      "number": 26,
      "source": "QB 101 787 1",
      "prompt": "How can the status of the aircraft doors be illustrated? (IAGO exam.... p. 11)",
      "options": {
        "A": "Use the display select switch to transfer to the synoptic from lower display unit to either outboard display unit",
        "B": "Push the info display switch on the Display select panel and select the Door synoptic",
        "C": "Push the systems (SYS) display switch on the Display select panel and then select the Door synoptic key from the menu page",
        "D": "Push door synoptic display switch on the display select panel"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-027",
      "number": 27,
      "source": "QB 101 787 1",
      "prompt": "With WX-T selected, the weather radar will detect turbulence within precipitation at all ND display ranges. Within what range of the aeroplane will it display such turbulence? (IAGO exam.... p. 11)",
      "options": {
        "A": "60 NM",
        "B": "20 NM",
        "C": "100 NM",
        "D": "40 NM"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "WX+T displays turbulence within precipitation within 40 NM.",
      "reference": "Generic FCOM p.2032; WX+T turbulence range check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-028",
      "number": 28,
      "source": "QB 101 787 1",
      "prompt": "Anytime the passenger oxygen deploys, which one of the following actions also occurs automatically? (IAGO exam.... p. 12)",
      "options": {
        "A": "The non-smoking signs are illuminated regardless of switch position",
        "B": "The passenger seatbelt signs illuminate regardless of switch position",
        "C": "The aircraft transmits emergency squawk",
        "D": "The passenger seatbelts signs are armed regardless of switch position."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-029",
      "number": 29,
      "source": "QB 101 787 1",
      "prompt": "The density of the fuel being loaded must be between 0.7549 KG/L (6.3LB/GAL) and 0.8507 KG/L (7.1LB/GAL) why? (IAGO exam.... p. 12)",
      "options": {
        "A": "It will be outside the limits for the load sheet calculation",
        "B": "It could cause the fuel scavenge system to operate improperly",
        "C": "It affects the weight in the wings to relieve high wing loads",
        "D": "It affects the maximum permitted main tanks lateral fuel imbalance of 680KG (1500LB)"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "source-issue",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "QB 101 validation pass 1; source not located in generic Boeing FCOM/FCTM/QRH index.",
      "auditNote": "Audit note: this fuel-density reason was not located in the generic Boeing FCOM/FCTM/QRH index. Treat as operator/performance/load-control material unless a Boeing source page is supplied."
    },
    {
      "id": "qb101-030",
      "number": 30,
      "source": "QB 101 787 1",
      "prompt": "What is the nose wheel steering range (in either direction from neutral) when using the tiller? (IAGO exam.... p. 13)",
      "options": {
        "A": "80 degrees",
        "B": "40 degrees",
        "C": "90 degrees",
        "D": "70 degrees"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-031",
      "number": 31,
      "source": "QB 101 787 1",
      "prompt": "How can the status of the aircraft doors be illustrated? (IAGO exam.... p. 13)",
      "options": {
        "A": "Push the systems (SYS) display switch on the display select panel and the select the door synoptic key from the menu page",
        "B": "Push the info display switch on the display select panel and select the door synoptic",
        "C": "Use the display select switch to transfer to the synoptic from lower display unit to either outboard display unit",
        "D": "Push door synoptic display switch on the display select panel"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-032",
      "number": 32,
      "source": "QB 101 787 1",
      "prompt": "Icing idle is selected when engine anti-ice is ON. Why does the EEC select approach idle when flaps are commanded to 25 or greater, OR the landing gear is selected DOWN? (IAGO exam.... p. 14)",
      "options": {
        "A": "To prevent idle thrust asymmetry",
        "B": "To decrease acceleration time for go-around",
        "C": "So the engines will produce maximum anti-icing bleed air",
        "D": "To increase acceleration time for go-around"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-033",
      "number": 33,
      "source": "QB 101 787 1",
      "prompt": "Ground service personnel are unfamiliar with the aircraft and require the aeroplane to be powered to enable operation of the wing fuelling panel. Which minimum level electrical mode will be necessary? (IAGO exam.... p. 14)",
      "options": {
        "A": "Towing mode",
        "B": "On-ground battery only mode",
        "C": "Ground service mode",
        "D": "Ground handling mode"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-034",
      "number": 34,
      "source": "QB 101 787 1",
      "prompt": "Which statement about the wing anti-ice system is true? (IAGO exam.... p. 14)",
      "options": {
        "A": "Automatic wing anti-ice operation is available on the ground above 60knots and in flight",
        "B": "Wing anti-ice is inhibited when the aeroplane is on the ground by ground/air logic",
        "C": "If one wing anti-ice thermal fails, the wing anti-system automatically de-powers the opposite thermal mat to prevent asymmetrical wing icing",
        "D": "In flight, when the wing anti-ice selector is in auto the wing anti-ice system on each wing is powered any time TAT is below 10C"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-035",
      "number": 35,
      "source": "QB 101 787 1",
      "prompt": "How is the top-of-climb identified on the navigation display (ND)? (IAGO exam.... p. 15)",
      "options": {
        "A": "A green circle labelled T/C",
        "B": "Cyan (blue) Circle labelled TOC",
        "C": "Green circle labelled TOC",
        "D": "Cyan (blue) Circle labelled T/C"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-036",
      "number": 36,
      "source": "QB 101 787 1",
      "prompt": "On completion of a non-normal checklist, certain items have been removed to a later referenced normal checklist. How is this illustrated on the non-normal checklist? (IAGO exam.... p. 15)",
      "options": {
        "A": "CHECKLIST OVERRIDDEN",
        "B": "CHECKLIST COMPLETE EXCEPT FOR TRANSFERRED ITEMS",
        "C": "CHECKLIST ITEMS HA VE BEEN DEFERRED",
        "D": "CHECKLIST COMPLETE EXCEPT FOR DEFERRED ITEMS"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-037",
      "number": 37,
      "source": "QB 101 787 1",
      "prompt": "What is the correct indication of a properly entered emergency access code in the flight deck access keypad? (IAGO exam.... p. 15)",
      "options": {
        "A": "The entry produces an EICAS advisory message and illuminates a green light on the keypad",
        "B": "Entry initiates an EICAS warning message and illuminates the amber light on the keypad",
        "C": "Entry produces an EICAS caution message and illuminates a red light on keypad",
        "D": "Entry sounds a flight deck chime"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-038",
      "number": 38,
      "source": "QB 101 787 1",
      "prompt": "During take-off with VNA V armed, when will VNA V activate? (IAGO exam.... p. 16)",
      "options": {
        "A": "400 feet AGL",
        "B": "50 feet RA",
        "C": "200 feet AFE",
        "D": "At acceleration height"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "wording-issue",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.2076; QB 101 validation pass 1.",
      "auditNote": "Audit note: the bank answer concept is right, but the wording should be 400 ft RA, not 400 ft AGL."
    },
    {
      "id": "qb101-039",
      "number": 39,
      "source": "QB 101 787 1",
      "prompt": "The fuel balance system is used to correct a lateral fuel imbalance between main fuel tanks. Which of the following best describes its operation? (IAGO exam.... p. 16)",
      "options": {
        "A": "It makes use of the higher pressure generated by the centre tank fuel pump to transfer between the main tanks",
        "B": "It utilizes defuel/jettison valves and inboard refuel valves to transfer fuel between main tanks",
        "C": "It automatically operates the fuel crossfeed valve to transfer fuel between the main tanks",
        "D": "Operation is automatic and requires no pilot input"
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-040",
      "number": 40,
      "source": "QB 101 787 1",
      "prompt": "With the APU providing electrical power on the ground and both pack switches in Auto, how many Cabin Air Compressors (CACs) will be operating? (IAGO exam.... p. 17)",
      "options": {
        "A": "1",
        "B": "4",
        "C": "3",
        "D": "2"
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-041",
      "number": 41,
      "source": "QB 101 787 1",
      "prompt": "The Left and Right hydraulic systems are virtually identical. What does the Left system power? (IAGO exam.... p. 17)",
      "options": {
        "A": "Left Flight Controls, Left Thrust Reverser, Right Wing Spoiler",
        "B": "Flight Controls, Left Thrust Reverser, Left Wing Spoiler",
        "C": "Flight Controls, Left Thrust Reverser, Right and Left Wing Spoilers",
        "D": "Flight Controls, Left Thrust Reverser, Landing Gear Actuation."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-042",
      "number": 42,
      "source": "QB 101 787 1",
      "prompt": "What is the procedure for the use of the Flight Deck Overhead Door as an emergency exit? (IAGO exam.... p. 17)",
      "options": {
        "A": "Remove protective cover, rotated door handle, open door inwards, access and exit with descent device",
        "B": "Remove protective cover, pull vent handle down, open panel inwards, throw rope out",
        "C": "Remove cover, push vent handle up, push panel outwards, through descent device",
        "D": "Remove protective cover, rotate door handle, push door outwards, access and deploy descent device"
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-043",
      "number": 43,
      "source": "QB 101 787 1",
      "prompt": "MFD communications functions are used to control datalink features. Which of the following is an accurate statement regarding a datalink feature? (IAGO exam.... p. 18)",
      "options": {
        "A": "Datalink messages not used by the FMC can be displayed on the MFDs but not printed",
        "B": "The MFD L or R button on the Glareshield panel and the MCP controls the COMM display",
        "C": "Incoming ATC and FIS message traffic is annunciated by EICAS ATC",
        "D": "A digital departure ATIS request can be made by selecting MANAGER, confirm the Airport code, select DEPARTURE, then select SEND"
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Incoming ATC/FIS datalink traffic is annunciated by EICAS ATC; other options confuse print capability, display selection, or ATIS menu location.",
      "reference": "Norse FCOM Rev 9 pp.979-982, 986, 1000, 1054-1058, 1068-1071; prior datalink/COMM audit.",
      "auditNote": ""
    },
    {
      "id": "qb101-044",
      "number": 44,
      "source": "QB 101 787 1",
      "prompt": "Which of the following represents the aeroplane performance in a VNA V descent, after the top of descent? (IAGO exam.... p. 18)",
      "options": {
        "A": "The FMC creates the descent path with a deceleration at the speed transition altitude. VNA V plans speed target 10 knots below the transition speed to allow for unknown headwinds.",
        "B": "Above the deceleration point if the speed falls more than 15knots below target speed the FMC changes the pitch mode annunciation from VNA V SPD to VNA V PTH and the FMC message THRUST REQUIRED displays.",
        "C": "The pitch mode does not change with speed intervention and remains in VNA V PTH throughout the descent as long as the speed remains within the speed band on the PFD.",
        "D": "The pitch mode does not change with speed intervention and remains in VNA V SPD throughout the descent. The thrust controls speed in \"VNA V\"."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-045",
      "number": 45,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is correct concerning the landing gear and brakes?",
      "options": {
        "A": "The brake system is powered by four electrical brake supply units.",
        "B": "The aft axle of each main gear pivot in order to improve turning radius.",
        "C": "The alternate brake system is powered by the backup electrical power source.",
        "D": "The normal nose wheel hydraulic system is powered by the right hydraulic system."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-046",
      "number": 46,
      "source": "QB 101 787 1",
      "prompt": "What is the primary source of power for the Flight Control Electronics?",
      "options": {
        "A": "Directly from the mains battery.",
        "B": "Three PMGs.",
        "C": "28v DC distribution system.",
        "D": "The main 235v AC System."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-047",
      "number": 47,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is correct regarding the automatic ice detection system?",
      "options": {
        "A": "It consists of two electrically heated engine inlet mounted ice detectors.",
        "B": "It is never inhibited at any time.",
        "C": "It provides signals to engine, wing and pack inlet anti-ice systems.",
        "D": "It causes bleed air to be directed to the engine, wing and pack inlet anti-ice systems."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-048",
      "number": 48,
      "source": "QB 101 787 1",
      "prompt": "Name a method that uses beams under dense cargo in order to provide a larger effective cargo footprint?",
      "options": {
        "A": "Linear loading.",
        "B": "Shoring.",
        "C": "Palletising.",
        "D": "Load support and restrain."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "source-issue",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "QB 101 validation pass 1; source not located in generic Boeing FCOM/FCTM/QRH index.",
      "auditNote": "Audit note: shoring/dense cargo footprint wording was not located in the generic Boeing FCOM/FCTM/QRH index. Treat as cargo/loading or operator manual material unless source page is supplied."
    },
    {
      "id": "qb101-049",
      "number": 49,
      "source": "QB 101 787 1",
      "prompt": "What determines the pack outlet temperature?",
      "options": {
        "A": "The temperature zone requiring the warmest temperature.",
        "B": "The master cabin temperature controller.",
        "C": "The average demand of all temperature zones.",
        "D": "The temperature zone requiring the coolest temperature."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-050",
      "number": 50,
      "source": "QB 101 787 1",
      "prompt": "During an approach in VNA V with VNA V PATH annunciated and at command speed, when does the reference thrust limit change from CRZ to GA?",
      "options": {
        "A": "1500' RA.",
        "B": "Selecting flaps 20.",
        "C": "Extending the flaps from up to flaps 1.",
        "D": "Extending the landing gear."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-051",
      "number": 51,
      "source": "QB 101 787 1",
      "prompt": "On a 900 mile route, which page is displayed if the DEP/ARR key is pressed in flight at less than 400 miles from the origin airfield?",
      "options": {
        "A": "Arrivals for the destination airfield.",
        "B": "Departures for the origin airfield.",
        "C": "Arrivals for the origin airport.",
        "D": "DEP/ARR INDEX."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-052",
      "number": 52,
      "source": "QB 101 787 1",
      "prompt": "During take-off with VNA V armed, when will VNA V activate?",
      "options": {
        "A": "50 feet RA.",
        "B": "200 feet AFE.",
        "C": "400 feet AGL.",
        "D": "At acceleration height."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "wording-issue",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.2076; QB 101 validation pass 1.",
      "auditNote": "Audit note: same issue as Q38. The bank answer concept is right, but the wording should be 400 ft RA, not 400 ft AGL."
    },
    {
      "id": "qb101-053",
      "number": 53,
      "source": "QB 101 787 1",
      "prompt": "In case of a minor fuel imbalance, how may manual fuel cross-feed be initiated?",
      "options": {
        "A": "Open the cross-feed valve switch OFF the pumps on the high quantity side.",
        "B": "Switch OFF the pumps on the high quantity side and open the cross-feed valve.",
        "C": "Open the cross-feed valve and switch OFF the pumps on the low quantity side.",
        "D": "Switch OFF pumps on the low quantity side and open the both cross-valve."
      },
      "bankAnswer": "A",
      "correctAnswer": "C",
      "status": "incorrect-key",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.167; Norse FCOM Rev 9 p.290; QB 101 validation pass 1.",
      "auditNote": "Audit note: the bank key appears wrong. If left/right main tank quantity is low and balancing is desired with balance inhibited, open crossfeed and switch off pumps on the low quantity side."
    },
    {
      "id": "qb101-054",
      "number": 54,
      "source": "QB 101 787 1",
      "prompt": "What pressurises the centre hydraulic system?",
      "options": {
        "A": "Two air driven primary pumps and two electrically driven demand pumps.",
        "B": "Two electric motor-driven pumps (EMPs) C1 and C2.",
        "C": "Two electrically driven primary pumps and two air-driven demand pumps (AMPs).",
        "D": "Two engine driven primary pumps and two electrically driven demand pumps."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-055",
      "number": 55,
      "source": "QB 101 787 1",
      "prompt": "The ground handling mode is already active with the aeroplane parked. The ground service mode is then activated. What additional significant electrical loads become available?",
      "options": {
        "A": "Limited cabin systems and lighting.",
        "B": "Flight deck equipment, controls and indications.",
        "C": "CPECs (both loops)",
        "D": "Cargo heat and limited hydraulics."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-056",
      "number": 56,
      "source": "QB 101 787 1",
      "prompt": "What cools the large motor power distribution?",
      "options": {
        "A": "The Power Electronic Cooling System (PECS).",
        "B": "Conditioned air ducted from the passenger cabin.",
        "C": "The Integrated Cooling System (ICS).",
        "D": "The Miscellaneous Cooling System."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-057",
      "number": 57,
      "source": "QB 101 787 1",
      "prompt": "What are the maximum Headwind Tailwind and Crosswind component speeds when landing weather minima are predicated on autoland operations?",
      "options": {
        "A": "20, 20 and 25 knots respectively.",
        "B": "20, 15 and 20 knots respectively.",
        "C": "25, 15 and 25 knots respectively.",
        "D": "15, 15 and 25 knots respectively."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Autoland wind components are 25 kt headwind, 15 kt tailwind, and 25 kt crosswind.",
      "reference": "Generic FCOM p.63; autoland wind limits check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-058",
      "number": 58,
      "source": "QB 101 787 1",
      "prompt": "Which statement is correct concerning ATC route modification clearances received via datalink?",
      "options": {
        "A": "The FMC receives route modification clearances which can be transferred to the EFB for the confirmation and return to the FMC for acceptance.",
        "B": "When a clearance is of type that can be loaded into the FMC, LOAD FMC buttons appear on both the COMM display and the CDU help window.",
        "C": "Uplink messages which contain route modifications are loaded into the FMC using the LOAD FMC function on the MFD ATC page.",
        "D": "ATC datalink logon is automatic to participating ATC facilities, as is the transfer to adjacent ATC facilities."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-059",
      "number": 59,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is the correct answer regarding the EEC Alternate mode?",
      "options": {
        "A": "Thrust protection is not provided in the alternate mode and the maximum rated thrust is reached at thrust lever position less than full forward.",
        "B": "Automatic reversion or manual selection to the alternate mode is indicated by the EICAS advisory message ENG LIMIT U PROT (L, R)",
        "C": "The Auto throttles disconnect whenever the EEC automatically switches to the alternate mode.",
        "D": "The alternate mode schedule (N1 schedule) provides somewhat less thrust than the normal mode for the same thrust lever position."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-060",
      "number": 60,
      "source": "QB 101 787 1",
      "prompt": "When will the PITCH LIMIT INDICATION be displayed on the PFD?",
      "options": {
        "A": "Below 1500' RA and the gear is down.",
        "B": "Below 20,000'",
        "C": "When the flaps are not UP, or at slow airspeeds with flaps up.",
        "D": "Only when the gear is down."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-061",
      "number": 61,
      "source": "QB 101 787 1",
      "prompt": "There are a number of situations that will cause the speed brake lever to be automatically operated regardless of its initial position. Identify the one which is INCORRECTLY described:",
      "options": {
        "A": "Driven UP on landing when the main gear trucks untilt and both thrust levers are not in the take-off range.",
        "B": "Driven to the DOWN position when in the air when either thrust lever is beyond 90% full travel.",
        "C": "Driven to the DOWN position when on the ground and either thrust lever is moved to the take-off range.",
        "D": "Driven UP on take-off with ground speed above 60 kts when either thrust lever is retarded to idle."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "The incorrect speedbrake description is the takeoff case stated with 60 kt; the checked source supports the bank marking as the incorrect description.",
      "reference": "Generic FCOM p.1645; speedbrake automatic operation check from QB 101 validation pass 1.",
      "auditNote": ""
    },
    {
      "id": "qb101-062",
      "number": 62,
      "source": "QB 101 787 1",
      "prompt": "In normal mode, during high-speed flight which control surfaces provide roll control?",
      "options": {
        "A": "Flaperons and Ailerons.",
        "B": "Ailerons.",
        "C": "Some spoilers.",
        "D": "Flaperons and Spoilers."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "At high speed, ailerons are locked out; flaperons and spoilers provide roll control.",
      "reference": "Norse FCOM Rev 9 pp.1208 and 1222; prior high-speed roll-control audit.",
      "auditNote": ""
    },
    {
      "id": "qb101-063",
      "number": 63,
      "source": "QB 101 787 1",
      "prompt": "The ram air turbine (RAT), when deployed, provides hydraulic power to the primary fight controls connected to which of the hydraulic system(s)?",
      "options": {
        "A": "Left.",
        "B": "Right.",
        "C": "Left, centre and right.",
        "D": "Centre."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-064",
      "number": 64,
      "source": "QB 101 787 1",
      "prompt": "What flap settings can be used for automatic landings with one engine inoperative?",
      "options": {
        "A": "Flaps 20, 25 or 30.",
        "B": "Flaps 20 or 25 Only.",
        "C": "Flaps 15, 20 or 30.",
        "D": "Flaps 25 or 30 Only."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Automatic landings with one engine inoperative may use flaps 20, 25, or 30.",
      "reference": "Generic FCOM p.63; Norse FCOM Rev 9 p.165; autoland one-engine-inoperative flap setting check.",
      "auditNote": ""
    },
    {
      "id": "qb101-065",
      "number": 65,
      "source": "QB 101 787 1",
      "prompt": "The AFDS provides autopilot guidance using Integrated Approach Navigation (IAN) which statement about IAN procedures is true?",
      "options": {
        "A": "IAN supports automatic approaches and landings to CAT11 approach minimums for approaches with FMC generated glide path.",
        "B": "The LOC or the FAC mode cannot capture selected lateral flight path if the intercept angle exceeds 60 degrees.",
        "C": "IAN approaches can be used only in GP and LOC modes.",
        "D": "Pushing the LOC/FAC switch arms the AFDS to capture and maintain an approach lateral flight path to a runway using an ILS locator beam or a lateral path provided by the FMC."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-066",
      "number": 66,
      "source": "QB 101 787 1",
      "prompt": "What is the function of the Flight Deck Overhead Door Vent?",
      "options": {
        "A": "It is used for the emergency egress when the aircraft is on the ground.",
        "B": "It opens to protect the fuselage against an excessive positive differential.",
        "C": "It opens to protect the fuselage against excessive negative pressure differential.",
        "D": "It allows ventilation of the flight deck in non-normal conditions."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-067",
      "number": 67,
      "source": "QB 101 787 1",
      "prompt": "Which of the following is a FALSE statement regarding requirement for Route Mode to be automatically selected on the VSD whilst on the ground?",
      "options": {
        "A": "LNA V is armed.",
        "B": "An active flight plan has been entered.",
        "C": "A departure runway has been selected.",
        "D": "VNA V armed."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-068",
      "number": 68,
      "source": "QB 101 787 1",
      "prompt": "What is the minimum permitted oil temperature for engine start?",
      "options": {
        "A": "-10 degC.",
        "B": "-25 degC.",
        "C": "-30 degC.",
        "D": "-40 degC."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-069",
      "number": 69,
      "source": "QB 101 787 1",
      "prompt": "The VSD can display an FMC Approach Glidepath Angle Line for approaches that have a designated approach angle. Choose the relevant correct answer?",
      "options": {
        "A": "It has a solid magenta line that extends 10nm for situational awareness that is anchored to the runway threshold.",
        "B": "It indicates current flight path angle as a function of vertical speed and ground speed.",
        "C": "It has a 3 degree green reference during the final approach that extends to 15nm.",
        "D": "It has a dashed line that extends 10nm for situational awareness. It is anchored to the missed approach point."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-070",
      "number": 70,
      "source": "QB 101 787 1",
      "prompt": "Which statement about the APU fire extinguishing system is correct?",
      "options": {
        "A": "On the ground with both engines off an APU fire signal from either APU fire detector loop causes APU shutdown and extinguisher bottle discharge.",
        "B": "There are two APU fire extinguisher bottles. When APU fire switch is pulled rotating the switch in either direction discharges one of the bottles.",
        "C": "The only APU fire bottle discharge mechanism available for in flight and ground use is located on the cockpit overhead panel.",
        "D": "In normal operation on the ground with both engines off, an APU overheat signal from either APU detection loop causes an automatic APU shutdown."
      },
      "bankAnswer": "C",
      "correctAnswer": "A",
      "status": "incorrect-key",
      "explanation": "Answer retained from the parsed question bank; see audit note.",
      "reference": "Generic FCOM p.1596; Norse FCOM Rev 9 p.1178; QB 101 validation pass 1.",
      "auditNote": "Audit note: the bank key appears wrong. On the ground with both engines off, an APU fire signal from either loop causes APU shutdown and extinguisher bottle discharge."
    },
    {
      "id": "qb101-071",
      "number": 71,
      "source": "QB 101 787 1",
      "prompt": "Thrust control malfunction Accommodation is an EEC function that provides thrust asymmetry protection under what circumstances?",
      "options": {
        "A": "At any time a thrust asymmetry is detected by the EEC.",
        "B": "In the event of an engine failure on take-off below 1000 feet AGL.",
        "C": "During a go-around at light weights and aft centre of gravity.",
        "D": "Against idle thrust asymmetry condition on the ground."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-072",
      "number": 72,
      "source": "QB 101 787 1",
      "prompt": "Which statement is true about the VHF page display function?",
      "options": {
        "A": "New frequencies are entered into scratchpad, the decimal and or following zeros for this frequency are required.",
        "B": "For the selected radio, the frequency to become the active, transfer switch moves the pre-tuned, standby tuned frequency.",
        "C": "Scratchpad frequencies can only be entered into the standby windows. The previously active frequency is deleted from the page display.",
        "D": "VHF pages 2, 3 and 4 can contain up to 4 stored frequencies for each radio."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-073",
      "number": 73,
      "source": "QB 101 787 1",
      "prompt": "The engines can only be started by the auto-start system. Under what circumstance does load shed occur during engine start?",
      "options": {
        "A": "Load shed always occurs during start.",
        "B": "Load shed occurs with only two GPUs available for starting (Ground Power Units).",
        "C": "Load shed may occur with low output from the APU generator.",
        "D": "Load shed only occurs if the AC Packs are left on."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-074",
      "number": 74,
      "source": "QB 101 787 1",
      "prompt": "How many electric cabin air compressors (CACs) supply and regulate outside air to the aeroplane?",
      "options": {
        "A": "2.",
        "B": "4.",
        "C": "6.",
        "D": "8."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-075",
      "number": 75,
      "source": "QB 101 787 1",
      "prompt": "How many smoke detection zones exist in each cargo compartment and what level of smoke detection is required to initiate a fire warning on the flight deck?",
      "options": {
        "A": "3 detection zones, smoke in two or more zones will initiate a fire warning.",
        "B": "4 detection zones, smoke in two or more zones will initiate a fire warning.",
        "C": "3 detection zones, smoke in any zone will initiate a fire warning.",
        "D": "4 detection zones, smoke in any zone will initiate a fire warning."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-076",
      "number": 76,
      "source": "QB 101 787 1",
      "prompt": "How is the landing gear held in the UP position after retraction?",
      "options": {
        "A": "Uplocks.",
        "B": "Hydraulic pressure.",
        "C": "A locked door structure.",
        "D": "Over-centre struts."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-077",
      "number": 77,
      "source": "QB 101 787 1",
      "prompt": "Which of the following best describes the probe heats?",
      "options": {
        "A": "Three probes are electrically heated when either engine is operated.",
        "B": "The angle of attack probe will operate once both engines have been started.",
        "C": "Three TAT (Total Air Temperature) probes are electrically heated for ice protection.",
        "D": "Wing mounted pitot probes are heated in flight to protect against ice accretion."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-078",
      "number": 78,
      "source": "QB 101 787 1",
      "prompt": "How is the ground proximity warning system (GPWS) TOO LOW GEAR alert inhibited?",
      "options": {
        "A": "Press the GPWS switch on the TCP then toggle the gear override (GEAR OVRD) line select key to OVRD.",
        "B": "Press the gear override (GEAR OVRD) switch on the Alerting and Transponder Control Panel.",
        "C": "Press the system (SYS) display switch on the display select panel, then select the GPWS key from the menu, then select gear override (GEAR OVRD).",
        "D": "Press the gear override (GEAR OVRD) switch on the landing gear panel."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-079",
      "number": 79,
      "source": "QB 101 787 1",
      "prompt": "What is the correct indication of a properly entered emergency access code in the flight deck access keypad?",
      "options": {
        "A": "Entry initiates an EICAS warning message and illuminates the amber light on the keypad.",
        "B": "The entry produces an EICAS advisory message and illuminates a green light on the keypad.",
        "C": "Entry produces an EICAS caution message and illuminates a red light on keypad.",
        "D": "Entry sounds a flight deck chime."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-080",
      "number": 80,
      "source": "QB 101 787 1",
      "prompt": "With AC power available and the APU selector in the ON position, which fuel pump is commanded on regardless of flight deck switch position?",
      "options": {
        "A": "Left centre fuel pump.",
        "B": "Left forward fuel pump.",
        "C": "Left aft fuel pump.",
        "D": "Right aft fuel pump."
      },
      "bankAnswer": "C",
      "correctAnswer": "C",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-081",
      "number": 81,
      "source": "QB 101 787 1",
      "prompt": "When will the pitch limit indication be displayed on the PFD?",
      "options": {
        "A": "When the flaps are not up, or at slow airspeeds with flaps up.",
        "B": "Only when the gear is down.",
        "C": "Below 20,000'",
        "D": "Below 1500 RA and the gear is down."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-082",
      "number": 82,
      "source": "QB 101 787 1",
      "prompt": "Which of the following GPWS voice annunciations indicate an altitude loss with flaps and / or gear UP, after Take off or go around?",
      "options": {
        "A": "TOO LOW, FLAPS.",
        "B": "SINK RATE.",
        "C": "TOO LOW, GEAR.",
        "D": "DON'T SINK."
      },
      "bankAnswer": "D",
      "correctAnswer": "D",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    },
    {
      "id": "qb101-083",
      "number": 83,
      "source": "QB 101 787 1",
      "prompt": "During an external inspection a warning horn is heard from the nose wheel well area. What does this indicate?",
      "options": {
        "A": "It is a low battery aural warning for ground crew.",
        "B": "The IRS have been left ON with the aeroplane unmanned for more than 30 minutes.",
        "C": "The FIRE/OVERHEAT detection system is being tested internally.",
        "D": "The APU fire warning has been set off."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "The horn warns that the IRS has been left on and is depleting the battery.",
      "reference": "Generic FCOM p.2022; Norse FCOM Rev 9 p.1604; IRS battery-depletion horn duplicate check.",
      "auditNote": ""
    },
    {
      "id": "qb101-084",
      "number": 84,
      "source": "QB 101 787 1",
      "prompt": "What is the minimum height for engaging the autopilot after take-off?",
      "options": {
        "A": "200 feet AGL.",
        "B": "50 feet AGL.",
        "C": "100 feet AGL.",
        "D": "400 feet AGL."
      },
      "bankAnswer": "A",
      "correctAnswer": "A",
      "status": "confirmed",
      "explanation": "The autopilot must not be engaged below 200 ft AGL after takeoff.",
      "reference": "Generic FCOM p.62; autopilot minimum engage altitude limitation.",
      "auditNote": ""
    },
    {
      "id": "qb101-085",
      "number": 85,
      "source": "QB 101 787 1",
      "prompt": "The AFDS provides autopilot guidance using Integrated Approach Navigation (IAN) which statement about IAN procedures is true?",
      "options": {
        "A": "The LOC or the FAC mode cannot capture selected lateral flight path if the intercept angle exceeds 60 degrees.",
        "B": "Pushing the LOC/FAC switch arms the AFDS to capture and maintain an approach lateral flight path to a runway using an ILS locator beam or a lateral path provided by the FMC.",
        "C": "IAN approaches can be used only in GP and LOC modes.",
        "D": "IAN supports automatic approaches and landings to CAT11 approach minimums for approaches with FMC generated glide path."
      },
      "bankAnswer": "B",
      "correctAnswer": "B",
      "status": "confirmed",
      "explanation": "Correct answer from the parsed QB 101 bank. This item was confirmed as marked in validation pass 1.",
      "reference": "QB 101 validation pass 1: confirmed as marked against the generic Boeing manual set; exact per-question page reference was not retained in the validation note.",
      "auditNote": ""
    }
  ]
};
