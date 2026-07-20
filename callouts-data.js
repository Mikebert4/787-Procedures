window.CALLOUTS = [
  {
    id: "callout-discipline",
    title: "Callout Discipline",
    citation: "Norse FCTM Rev 19, PDF pp.71-72; FCTM 1.19-1.20",
    note: "Use this tab as a phase reference. FCTM recommended callouts may be modified by the operator; procedural callouts in the FCOM are required.",
    rows: [
      {
        condition: "All flight phases",
        callout: "PM makes callouts from indications, FMAs, and observations; PF verifies or acknowledges.",
        speaker: "PM unless noted",
        source: "Norse FCTM Rev 19, PDF p.71; FCTM 1.19"
      },
      {
        condition: "Unexpected FMA",
        callout: "Announce, evaluate, and address the unexpected FMA.",
        speaker: "Either pilot",
        source: "Norse FCTM Rev 19, PDF p.71; FCTM 1.19"
      },
      {
        condition: "Automatic electronic voice callout not heard",
        callout: "PM makes the callout.",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      },
      {
        condition: "Minimums",
        callout: "CONTINUE or GO-AROUND",
        speaker: "PF",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-072.png",
        alt: "Norse FCTM callout discipline and recommended callouts page",
        caption: "Callout discipline and recommended callouts. Source: Norse FCTM Rev 19 PDF p.72; FCTM 1.20."
      }
    ]
  },
  {
    id: "taxi-lineup",
    title: "Taxi, Runway Entry, and Lineup",
    citation: "Norse FCOM Rev 9, PDF p.216; FCOM NP.21.38",
    rows: [
      {
        condition: "Cleared to enter departure runway",
        callout: "CABIN CREW, BE SEATED FOR DEPARTURE",
        speaker: "PM, PA",
        source: "Norse FCOM Rev 9, PDF p.216; NP.21.38"
      },
      {
        condition: "Runway entry / lineup",
        callout: "LINING UP RUNWAY __, INTERSECTION __/FULL LENGTH",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.216; NP.21.38"
      },
      {
        condition: "Runway entry / lineup crosscheck",
        callout: "RUNWAY __, INTERSECTION __/FULL LENGTH, CHECKED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.216; NP.21.38"
      },
      {
        condition: "Final/runway clear verification",
        callout: "RUNWAY/FINAL CLEAR/___",
        speaker: "Both pilots",
        source: "Norse FCOM Rev 9, PDF p.216; NP.21.38"
      }
    ]
  },
  {
    id: "takeoff-roll",
    title: "Takeoff Roll and Initial Climb",
    citation: "Norse FCOM Rev 9, PDF pp.217-218; FCOM NP.21.39-NP.21.40",
    rows: [
      {
        condition: "After engine stabilization / TO/GA selection",
        callout: "SET TAKEOFF THRUST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "Takeoff thrust set",
        callout: "THRUST SET",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "80 knots",
        callout: "80 KNOTS",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "80 knots crosscheck",
        callout: "CHECK",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "V1",
        callout: "Verify automatic V1 callout or call V1",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "VR",
        callout: "ROTATE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "Positive rate of climb shown",
        callout: "POSITIVE RATE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "Positive rate verified",
        callout: "GEAR UP",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.217; NP.21.39"
      },
      {
        condition: "Above 400 feet radio altitude",
        callout: "Call for roll mode as needed",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.218; NP.21.40"
      },
      {
        condition: "Flap retraction schedule",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.218; NP.21.40"
      },
      {
        condition: "Autopilot engagement",
        callout: "AUTOPILOT",
        speaker: "PF and PM",
        source: "Norse FCOM Rev 9, PDF p.218; NP.21.40"
      },
      {
        condition: "After flap retraction complete",
        callout: "AFTER TAKEOFF CHECKLIST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.218; NP.21.40"
      }
    ]
  },
  {
    id: "climb-descent",
    title: "Climb and Descent",
    citation: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20. Norse FCOM Rev 9, PDF pp.222-223; FCOM NP.21.44-NP.21.45",
    rows: [
      {
        condition: "Approaching transition altitude",
        callout: "TRANSITION ALTITUDE, SET STANDARD",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      },
      {
        condition: "Approaching transition level",
        callout: "TRANSITION LEVEL, ALTIMETERS SET ______",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      },
      {
        condition: "1,000 feet above/below assigned altitude or flight level",
        callout: "1,000 FEET TO LEVEL OFF",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      },
      {
        condition: "10,000 feet MSL / FL100",
        callout: "10,000 FEET or FLIGHT LEVEL 100",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.72; FCTM 1.20"
      },
      {
        condition: "10,000 feet AAL on approach",
        callout: "10 000 FEET or FLIGHT LEVEL 100",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.222; NP.21.44"
      },
      {
        condition: "10,000 feet AAL crosscheck",
        callout: "CHECKED",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.222; NP.21.44"
      },
      {
        condition: "Cleared below transition level / altimeters to QNH",
        callout: "SET ALTIMETERS",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.223; NP.21.45"
      },
      {
        condition: "QNH / altimeter setting selected",
        callout: "QNH/ALTIMETER ____ SET",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.223; NP.21.45"
      },
      {
        condition: "Approach procedure complete",
        callout: "APPROACH CHECKLIST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.223; NP.21.45"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-072.png",
        alt: "Norse FCTM climb and descent recommended callouts table",
        caption: "Climb and descent recommended callouts. Source: Norse FCTM Rev 19 PDF p.72; FCTM 1.20."
      }
    ]
  },
  {
    id: "ils-gls-approach",
    title: "ILS or GLS Approach",
    citation: "Norse FCOM Rev 9, PDF pp.225-226; FCOM NP.21.47-NP.21.48. Norse FCTM Rev 19, PDF pp.72-73; FCTM 1.20-1.21",
    rows: [
      {
        condition: "Flap extension schedule",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "APP mode armed",
        callout: "LOCALIZER, GLIDESLOPE ARMED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "First inward motion of localizer pointer",
        callout: "LOCALIZER ALIVE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "Glideslope alive",
        callout: "GLIDESLOPE ALIVE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "At glideslope alive, or as required for speed control",
        callout: "GEAR DOWN; FLAPS 20",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "Cabin secure before landing",
        callout: "CABIN CREW, BE SEATED FOR LANDING",
        speaker: "PM, PA",
        source: "Norse FCOM Rev 9, PDF p.225; NP.21.47"
      },
      {
        condition: "Glideslope capture / approach speed control",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "Landing configuration complete",
        callout: "LANDING CHECKLIST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "Final approach fix",
        callout: "Verify and call final approach fix and crossing altitude",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "1500 feet RA autoland status",
        callout: "LAND 2/LAND 3, ROLLOUT, FLARE ARMED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "1000 feet AAL",
        callout: "1000 STABILIZED or 1000 NOT STABILIZED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "Stabilized approach response",
        callout: "CHECK or GO-AROUND",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "500 feet AAL, if continued in VMC after not stabilized at 1000 feet",
        callout: "500 STABILIZED or 500 NOT STABILIZED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "500 feet AAL autoland status",
        callout: "500 LAND 2/LAND 3/NO AUTOLAND",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "200 feet RA, CAT III fail-operational requirement only",
        callout: "ALERT HEIGHT",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      },
      {
        condition: "Minimums",
        callout: "CONTINUE or GO-AROUND",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.226; NP.21.48"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-072.png",
        alt: "Norse FCTM ILS or GLS recommended callouts first page",
        caption: "ILS or GLS recommended callouts. Source: Norse FCTM Rev 19 PDF p.72; FCTM 1.20."
      },
      {
        src: "assets/norse-fctm-callouts-073.png",
        alt: "Norse FCTM ILS or GLS and non-ILS recommended callouts continuation",
        caption: "ILS/GLS and non-ILS recommended callouts continuation. Source: Norse FCTM Rev 19 PDF p.73; FCTM 1.21."
      }
    ]
  },
  {
    id: "non-ils-approach",
    title: "IAN, VNAV, and Non-ILS / Non-GLS Approach",
    citation: "Norse FCOM Rev 9, PDF pp.228-234; FCOM NP.21.50-NP.21.56. Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22",
    rows: [
      {
        condition: "Flap extension schedule",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.228; NP.21.50"
      },
      {
        condition: "IAN APP mode armed",
        callout: "LOCALIZER/FINAL APPROACH COURSE, GLIDEPATH ARMED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.228; NP.21.50"
      },
      {
        condition: "Localizer/final approach course alive",
        callout: "LOCALIZER/FINAL APPROACH COURSE ALIVE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.229; NP.21.51"
      },
      {
        condition: "Approximately 2 NM before final approach fix on IAN",
        callout: "APPROACHING GLIDE PATH",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.229; NP.21.51"
      },
      {
        condition: "Approximately 2 NM before final approach fix on IAN",
        callout: "GEAR DOWN; FLAPS 20",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.229; NP.21.51"
      },
      {
        condition: "Approximately 2 NM before final approach fix on VNAV",
        callout: "APPROACHING GLIDE PATH",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.233; NP.21.55"
      },
      {
        condition: "Beginning final descent / approach speed control",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF pp.230, 233; NP.21.52, NP.21.55"
      },
      {
        condition: "Landing configuration complete",
        callout: "LANDING CHECKLIST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF pp.230, 233; NP.21.52, NP.21.55"
      },
      {
        condition: "Final approach fix",
        callout: "Verify and call final approach fix and crossing altitude",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF pp.230, 234; NP.21.52, NP.21.56"
      },
      {
        condition: "1000 feet AAL",
        callout: "1000 STABILIZED or 1000 NOT STABILIZED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF pp.230, 234; NP.21.52, NP.21.56"
      },
      {
        condition: "Stabilized approach response",
        callout: "CHECK or GO-AROUND",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF pp.230, 234; NP.21.52, NP.21.56"
      },
      {
        condition: "500 feet AAL, if continued in VMC after not stabilized at 1000 feet",
        callout: "500 STABILIZED or 500 NOT STABILIZED",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF pp.230, 234; NP.21.52, NP.21.56"
      },
      {
        condition: "Minimums",
        callout: "CONTINUE or GO-AROUND",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF pp.230, 234; NP.21.52, NP.21.56"
      },
      {
        condition: "FCTM non-ILS FAF inbound",
        callout: "VOR/NDB/FIX, ___FEET",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.73; FCTM 1.21"
      },
      {
        condition: "100 feet above DA(H) or MDA(H)",
        callout: "APPROACHING MINIMUMS",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF p.73; FCTM 1.21"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-073.png",
        alt: "Norse FCTM non-ILS recommended callouts first page",
        caption: "Non-ILS/non-GLS recommended callouts. Source: Norse FCTM Rev 19 PDF p.73; FCTM 1.21."
      },
      {
        src: "assets/norse-fctm-callouts-074.png",
        alt: "Norse FCTM non-ILS recommended callouts continuation",
        caption: "Non-ILS/non-GLS recommended callouts continuation. Source: Norse FCTM Rev 19 PDF p.74; FCTM 1.22."
      }
    ]
  },
  {
    id: "visual-minimums",
    title: "Minimums and Visual Reference",
    citation: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22",
    rows: [
      {
        condition: "Individual sequence flasher lights visible",
        callout: "STROBE LIGHTS",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF pp.72-73; FCTM 1.20-1.21"
      },
      {
        condition: "At DA(H) or MDA(H), approach light bars visible",
        callout: "MINIMUMS - APPROACH LIGHTS / RED BARS",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "At DA(H) or MDA(H), suitable visual reference established",
        callout: "CONTINUE",
        speaker: "PF",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "At DA(H) or MDA(H), suitable visual reference not established",
        callout: "GO AROUND",
        speaker: "PF",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "At minimums callout, no response from PF",
        callout: "I HAVE CONTROL______",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "Below DA(H) or MDA(H), suitable visual reference established",
        callout: "THRESHOLD/RUNWAY TOUCHDOWN ZONE",
        speaker: "PM",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "Below DA(H) or MDA(H), suitable visual reference established",
        callout: "LANDING",
        speaker: "PF",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      },
      {
        condition: "Below DA(H) or MDA(H), suitable visual reference not established",
        callout: "GO AROUND",
        speaker: "PF",
        source: "Norse FCTM Rev 19, PDF pp.73-74; FCTM 1.21-1.22"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-073.png",
        alt: "Norse FCTM visual reference callouts",
        caption: "Visual reference callouts around minimums. Source: Norse FCTM Rev 19 PDF p.73; FCTM 1.21."
      },
      {
        src: "assets/norse-fctm-callouts-074.png",
        alt: "Norse FCTM visual reference callouts continuation",
        caption: "Visual reference callouts continuation. Source: Norse FCTM Rev 19 PDF p.74; FCTM 1.22."
      }
    ]
  },
  {
    id: "go-around",
    title: "Go-Around and Missed Approach",
    citation: "Norse FCOM Rev 9, PDF p.235; FCOM NP.21.57",
    rows: [
      {
        condition: "Go-around initiated",
        callout: "GO-AROUND",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "TO/GA pushed",
        callout: "SET GO-AROUND THRUST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Go-around flap selection",
        callout: "FLAPS 20 or FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Thrust sufficient for go-around",
        callout: "THRUST SET",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Positive rate of climb shown",
        callout: "POSITIVE RATE",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Positive rate verified",
        callout: "GEAR UP",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Flap retraction schedule",
        callout: "FLAPS___",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      },
      {
        condition: "Missed approach climb established",
        callout: "AFTER TAKEOFF CHECKLIST",
        speaker: "PF",
        source: "Norse FCOM Rev 9, PDF p.235; NP.21.57"
      }
    ]
  },
  {
    id: "landing-roll",
    title: "Landing Roll",
    citation: "Norse FCOM Rev 9, PDF p.236; FCOM NP.21.58",
    rows: [
      {
        condition: "Touchdown / speedbrake verification",
        callout: "SPEEDBRAKES UP",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.236; NP.21.58"
      },
      {
        condition: "Speedbrake lever not UP",
        callout: "SPEEDBRAKES NOT UP",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.236; NP.21.58"
      },
      {
        condition: "Reverse indications normal",
        callout: "REVERSERS NORMAL",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.236; NP.21.58"
      },
      {
        condition: "No reverse indication or amber reverse indication",
        callout: "NO REVERSER LEFT ENGINE; NO REVERSER RIGHT ENGINE; or NO REVERSERS",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.236; NP.21.58"
      },
      {
        condition: "60 KIAS",
        callout: "60 KNOTS",
        speaker: "PM",
        source: "Norse FCOM Rev 9, PDF p.236; NP.21.58"
      }
    ]
  },
  {
    id: "standard-phraseology",
    title: "Standard Phraseology",
    citation: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23",
    rows: [
      {
        condition: "Thrust command",
        callout: "SET TAKEOFF THRUST",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Thrust command",
        callout: "SET GO-AROUND THRUST",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Thrust command",
        callout: "SET MAXIMUM CONTINUOUS THRUST",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Thrust command",
        callout: "SET CLIMB THRUST",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Thrust command",
        callout: "SET CRUISE THRUST",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Flap command",
        callout: "FLAPS UP / ONE / FIVE / FIFTEEN / TWENTY / TWENTY-FIVE / THIRTY",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Airspeed command",
        callout: "SET _____ KNOTS",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Airspeed command",
        callout: "SET VREF PLUS (additive)",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      },
      {
        condition: "Airspeed command",
        callout: "SET FLAPS _____ SPEED",
        speaker: "As procedure directs",
        source: "Norse FCTM Rev 19, PDF p.75; FCTM 1.23"
      }
    ],
    images: [
      {
        src: "assets/norse-fctm-callouts-075.png",
        alt: "Norse FCTM standard phraseology page",
        caption: "Standard phraseology. Source: Norse FCTM Rev 19 PDF p.75; FCTM 1.23."
      }
    ]
  }
];
