(() => {
  function image(src, alt, caption) {
    return { src, alt, caption };
  }

  function qrhImages(prefix, pages, title) {
    return pages.map((page) => image(
      `assets/${prefix}-${String(page).padStart(3, "0")}.png`,
      `Norse QRH exact page ${page} - ${title}`,
      `${title}. Exact page screenshot. Source: Norse QRH Rev 9, PDF p.${page}.`
    ));
  }

  function qrhManeuverImages(entries) {
    return entries.map(([src, page, title]) => image(
      `assets/${src}`,
      `Norse QRH exact page ${page} - ${title}`,
      `${title}. Exact page screenshot. Source: Norse QRH Rev 9, PDF p.${page}.`
    ));
  }

  function qrh(title, citation, images) {
    return {
      title,
      sourceLabel: "QRH Exact Page",
      citation,
      bullets: [],
      images
    };
  }

  window.SESSION_REFERENCE_DETAILS = {
    qrhTakeoffPattern: qrh(
      "Takeoff pattern",
      "Norse QRH Rev 9, PDF p.609; MAN.2.1.",
      qrhManeuverImages([["norse-qrh-pattern-takeoff-609.png", 609, "Takeoff"]])
    ),
    qrhRejectedTakeoff: qrh(
      "Rejected Takeoff",
      "Norse QRH Rev 9, PDF pp.596-598; MAN.1.2-MAN.1.4. Norse FCTM Rev 19, PDF p.169; FCTM 3.47.",
      [
        ...qrhManeuverImages([
          ["norse-qrh-maneuver-rto-596.png", 596, "Rejected Takeoff"],
          ["norse-qrh-maneuver-rto-597.png", 597, "Rejected Takeoff continued"],
          ["norse-qrh-maneuver-gpws-rto-598.png", 598, "Rejected Takeoff continued"]
        ]),
        image("assets/norse-fctm-rto-decision-169.png", "FCTM rejected takeoff decision diagram", "Rejected takeoff decision diagram. Source: Norse FCTM Rev 19, PDF p.169; FCTM 3.47.")
      ]
    ),
    qrhApproachToStall: qrh(
      "Approach to Stall or Stall Recovery",
      "Norse QRH Rev 9, PDF p.595; MAN.1.1. Norse FCTM Rev 19, PDF pp.354-357; FCTM 7.8-7.11.",
      [
        ...qrhManeuverImages([["norse-qrh-maneuver-stall-595.png", 595, "Approach to Stall or Stall Recovery"]]),
        image("assets/norse-fctm-stall-354.png", "FCTM stall recovery guidance", "Stall recovery guidance. Source: Norse FCTM Rev 19, PDF p.354; FCTM 7.8.")
      ]
    ),
    qrhUpsetRecovery: qrh(
      "Upset Recovery",
      "Norse QRH Rev 9, PDF pp.602-604; MAN.1.8-MAN.1.10. Norse FCTM Rev 19, PDF pp.360-362; FCTM 7.14-7.16.",
      [
        ...qrhManeuverImages([
          ["norse-qrh-maneuver-upset-602.png", 602, "Upset Recovery"],
          ["norse-qrh-maneuver-upset-603.png", 603, "Nose High Recovery"],
          ["norse-qrh-maneuver-upset-windshear-604.png", 604, "Nose Low Recovery"]
        ]),
        image("assets/norse-fctm-upset-361.png", "FCTM upset recovery maneuvers", "Upset Recovery Maneuvers. Source: Norse FCTM Rev 19, PDF p.361; FCTM 7.15.")
      ]
    ),
    qrhGpwsResponse: qrh(
      "GPWS Response",
      "Norse QRH Rev 9, PDF pp.598-600; MAN.1.4-MAN.1.6. Norse FCTM Rev 19, PDF p.358; FCTM 7.12.",
      [
        ...qrhManeuverImages([
          ["norse-qrh-maneuver-gpws-rto-598.png", 598, "GPWS Caution"],
          ["norse-qrh-maneuver-gpws-599.png", 599, "GPWS Warning"],
          ["norse-qrh-maneuver-tcas-gpws-600.png", 600, "GPWS Warning continued"]
        ]),
        image("assets/norse-fctm-terrain-tcas-358.png", "FCTM terrain avoidance guidance", "Terrain Avoidance guidance. Source: Norse FCTM Rev 19, PDF p.358; FCTM 7.12.")
      ]
    ),
    qrhTrafficAvoidance: qrh(
      "Traffic Avoidance / TCAS",
      "Norse QRH Rev 9, PDF pp.600-601; MAN.1.6-MAN.1.7. Norse FCTM Rev 19, PDF pp.358-360; FCTM 7.12-7.14.",
      [
        ...qrhManeuverImages([
          ["norse-qrh-maneuver-tcas-gpws-600.png", 600, "Traffic Avoidance"],
          ["norse-qrh-maneuver-tcas-601.png", 601, "Traffic Avoidance continued"]
        ]),
        image("assets/norse-fctm-terrain-tcas-358.png", "FCTM TCAS system guidance", "TCAS system guidance. Source: Norse FCTM Rev 19, PDF p.358; FCTM 7.12."),
        image("assets/norse-fctm-tcas-upset-360.png", "FCTM TCAS RA and HUD guidance", "TCAS RA and HUD guidance. Source: Norse FCTM Rev 19, PDF p.360; FCTM 7.14.")
      ]
    ),
    qrhWindshearEscape: qrh(
      "Windshear / Escape Maneuver",
      "Norse QRH Rev 9, PDF pp.604-607; MAN.1.10-MAN.1.13. Norse FCOM Rev 9, PDF p.313; SP.16.23.",
      qrhManeuverImages([
        ["norse-qrh-maneuver-upset-windshear-604.png", 604, "Windshear Warning"],
        ["norse-qrh-maneuver-windshear-605.png", 605, "Windshear encountered"],
        ["norse-qrh-maneuver-windshear-606.png", 606, "Windshear Escape Maneuver"],
        ["norse-qrh-maneuver-windshear-607.png", 607, "Windshear Escape Maneuver notes"]
      ])
    ),
    qrhIlsGlsApproach: qrh(
      "ILS or GLS Approach - Fail Operational",
      "Norse QRH Rev 9, PDF p.610; MAN.2.2.",
      qrhManeuverImages([["norse-qrh-pattern-ils-gls-610.png", 610, "ILS or GLS Approach - Fail Operational"]])
    ),
    qrhVnavApproach: qrh(
      "Instrument Approach Using VNAV",
      "Norse QRH Rev 9, PDF p.611; MAN.2.3.",
      qrhManeuverImages([["norse-qrh-pattern-vnav-611.png", 611, "Instrument Approach Using VNAV"]])
    ),
    qrhIanApproach: qrh(
      "Instrument Approach Using IAN",
      "Norse QRH Rev 9, PDF p.612; MAN.2.4.",
      qrhManeuverImages([["norse-qrh-pattern-ian-612.png", 612, "Instrument Approach Using IAN"]])
    ),
    qrhVsFpaApproach: qrh(
      "Instrument Approach Using V/S or FPA",
      "Norse QRH Rev 9, PDF p.613; MAN.2.5.",
      qrhManeuverImages([["norse-qrh-pattern-vs-fpa-613.png", 613, "Instrument Approach Using V/S or FPA"]])
    ),
    qrhRnpArApproach: qrh(
      "RNAV (RNP) AR Approach",
      "Norse QRH Rev 9, PDF p.614; MAN.2.6.",
      qrhManeuverImages([["norse-qrh-pattern-rnp-ar-614.png", 614, "Instrument Approach - RNAV (RNP) AR"]])
    ),
    fctmCirclingApproach: {
      title: "Circling Approach",
      sourceLabel: "FCTM / QRH",
      citation: "Norse FCTM Rev 19, PDF pp.279-283; FCTM 5.61-5.65. Norse QRH Rev 9, PDF p.615; MAN.2.7.",
      bullets: [
        "The circling approach should be flown with landing gear down, Flaps 20, and at Flaps 20 maneuver speed.",
        "Maintain MDA(H) using ALT HOLD or VNAV ALT mode.",
        "Do not descend below MDA(H) until intercepting the visual descent profile to the landing runway.",
        "If a circling approach is anticipated, maintain gear down, Flaps 20 and a minimum of VREF 20 plus wind additive while circling."
      ],
      images: [
        ...qrhManeuverImages([["norse-qrh-pattern-circling-615.png", 615, "Circling Approach"]]),
        image("assets/norse-fctm-circling-diagram-279.png", "FCTM circling approach diagram", "Circling Approach diagram. Source: Norse FCTM Rev 19, PDF p.279; FCTM 5.61."),
        image("assets/norse-fctm-circling-clearance-281.png", "FCTM circling obstruction clearance diagram", "Obstruction clearance areas. Source: Norse FCTM Rev 19, PDF p.281; FCTM 5.63."),
        image("assets/norse-fctm-circling-radius-282.png", "FCTM expanded circling maneuvering airspace radius table", "FAA expanded circling maneuvering airspace radius. Source: Norse FCTM Rev 19, PDF p.282; FCTM 5.64.")
      ]
    },
    qrhVisualTrafficPattern: qrh(
      "Visual Traffic Pattern",
      "Norse QRH Rev 9, PDF p.616; MAN.2.8.",
      qrhManeuverImages([["norse-qrh-pattern-visual-616.png", 616, "Visual Traffic Pattern"]])
    ),
    qrhGoAroundMissedApproach: qrh(
      "Go-Around and Missed Approach",
      "Norse QRH Rev 9, PDF p.617; MAN.2.9.",
      qrhManeuverImages([["norse-qrh-pattern-goaround-617.png", 617, "Go-Around and Missed Approach"]])
    ),
    fctmCrosswindLanding: {
      title: "Crosswind Landing Guidelines",
      sourceLabel: "FCTM Diagram",
      citation: "Norse FCTM Rev 19, PDF pp.338-340, 427; FCTM 6.40-6.42, A.2.11.",
      bullets: [
        "FCTM crosswind landing values are maximum recommended crosswinds, not limitations.",
        "Use gust component when gust values are reported to determine the maximum recommended crosswind.",
        "Sideslip-only zero-crab landings are not recommended with crosswind components above 25 knots."
      ],
      images: [
        image("assets/norse-fctm-crosswind-landing-338.png", "FCTM crosswind landing guidelines", "Crosswind landing guidelines. Source: Norse FCTM Rev 19, PDF p.338; FCTM 6.40."),
        image("assets/norse-fctm-crosswind-landing-339.png", "FCTM TALPA crosswind landing guidelines", "TALPA crosswind landing guidelines. Source: Norse FCTM Rev 19, PDF p.339; FCTM 6.41."),
        image("assets/norse-fctm-crosswind-landing-340.png", "FCTM crosswind landing techniques", "Crosswind landing techniques. Source: Norse FCTM Rev 19, PDF p.340; FCTM 6.42.")
      ]
    },
    fctmStabilizedApproach: {
      title: "Stabilized Approach Criteria",
      sourceLabel: "FCTM Diagram",
      citation: "Norse FCTM Rev 19, PDF p.223; FCTM 5.5.",
      bullets: [],
      images: [
        image("assets/norse-fctm-stabilized-approach-223.png", "FCTM stabilized approach criteria", "Stabilized approach criteria. Source: Norse FCTM Rev 19, PDF p.223; FCTM 5.5.")
      ]
    },
    qrhDualEngFailStall: qrh(
      "Dual Eng Fail/Stall",
      "Norse QRH Rev 9, PDF pp.144-145; NNC.7 Engines, APU, 7.2-7.3.",
      qrhImages("norse-qrh-dual-eng-fail-stall", [144, 145], "Dual Eng Fail/Stall")
    ),
    qrhFireEng: qrh(
      "FIRE ENG L, R",
      "Norse QRH Rev 9, PDF pp.192-195; NNC.8 Fire Protection, 8.2-8.5.",
      qrhImages("norse-qrh-fire-eng", [192, 193, 194, 195], "FIRE ENG L, R")
    ),
    qrhEngOilPress: qrh(
      "ENG OIL PRESS L, R",
      "Norse QRH Rev 9, PDF pp.168-170; NNC.7 Engines, APU, 7.26-7.28.",
      qrhImages("norse-qrh-eng-oil-press", [168, 169, 170], "ENG OIL PRESS L, R")
    ),
    qrhFuelJettison: qrh(
      "Fuel Jettison",
      "Norse QRH Rev 9, PDF pp.376-377; NNC.12 Fuel, 12.18-12.19. Norse FCOM Rev 9, PDF p.1927; 12.20.7.",
      qrhImages("norse-qrh-fuel-jettison", [376, 377], "Fuel Jettison")
    ),
    qrhFireCargoAft: qrh(
      "FIRE CARGO AFT",
      "Norse QRH Rev 9, PDF pp.205-206; NNC.8 Fire Protection, 8.15-8.16. Norse FCOM Rev 9, PDF pp.1179-1180; 8.20.5-8.20.6.",
      qrhImages("norse-qrh-fire-cargo-aft", [205, 206], "FIRE CARGO AFT")
    ),
    qrhSmokeFireFumes: qrh(
      "Smoke, Fire or Fumes",
      "Norse QRH Rev 9, PDF pp.198-202; NNC.8 Fire Protection, 8.8-8.12.",
      qrhImages("norse-qrh-smoke-fire-fumes", [198, 199, 200, 201, 202], "Smoke, Fire or Fumes")
    ),
    qrhSmokeFumesRemoval: qrh(
      "Smoke or Fumes Removal",
      "Norse QRH Rev 9, PDF pp.222-223; NNC.8 Fire Protection, 8.32-8.33.",
      qrhImages("norse-qrh-smoke-fumes-removal", [222, 223], "Smoke or Fumes Removal")
    ),
    qrhCabinAltitude: qrh(
      "CABIN ALTITUDE",
      "Norse QRH Rev 9, PDF pp.55-56; NNC.2 Air Systems, 2.1-2.2.",
      qrhImages("norse-qrh-cabin-altitude", [55, 56], "CABIN ALTITUDE")
    ),
    qrhAirspeedUnreliable: qrh(
      "AIRSPEED UNRELIABLE",
      "Norse QRH Rev 9, PDF pp.285-287; NNC.10 Flight Instruments, Displays, 10.1-10.3. Norse FCTM Rev 19, PDF pp.392-395; FCTM 8.22-8.25.",
      qrhImages("norse-qrh-airspeed-unreliable", [285, 286, 287], "AIRSPEED UNRELIABLE")
    )
  };

  window.SESSION_REFERENCES = {
    "fpt-6t": ["qrhFireEng", "qrhIlsGlsApproach", "fctmCirclingApproach", "qrhGoAroundMissedApproach"],
    "fpt-7t-5s": ["qrhWindshearEscape", "qrhAirspeedUnreliable", "qrhIlsGlsApproach"],
    "fpt-8t-6s": ["qrhAirspeedUnreliable", "qrhIlsGlsApproach", "qrhIanApproach"],
    "ffs-1t-1s": ["qrhTakeoffPattern", "qrhApproachToStall", "qrhUpsetRecovery", "qrhIlsGlsApproach", "qrhVisualTrafficPattern", "qrhGoAroundMissedApproach", "fctmStabilizedApproach", "fctmCrosswindLanding"],
    "ffs-2t": ["qrhRejectedTakeoff", "qrhTrafficAvoidance", "qrhVnavApproach", "qrhVsFpaApproach", "fctmCirclingApproach", "fctmCrosswindLanding", "qrhGoAroundMissedApproach"],
    "ffs-3t-2s": ["qrhTakeoffPattern", "qrhWindshearEscape", "qrhApproachToStall", "fctmCrosswindLanding", "qrhGoAroundMissedApproach"],
    "ffs-4t": ["qrhFireEng", "qrhTakeoffPattern", "qrhVnavApproach", "qrhVsFpaApproach", "qrhIanApproach", "qrhGoAroundMissedApproach"],
    "ffs-5t-3s": ["qrhDualEngFailStall", "qrhFuelJettison", "qrhWindshearEscape", "fctmCirclingApproach", "qrhEngOilPress", "qrhTrafficAvoidance", "qrhFireCargoAft", "qrhRnpArApproach"],
    "ffs-6t-4s": ["qrhCabinAltitude", "qrhAirspeedUnreliable", "qrhGpwsResponse", "qrhIlsGlsApproach", "qrhFuelJettison", "qrhTakeoffPattern"],
    "ffs-7t-5s": ["qrhSmokeFireFumes", "qrhSmokeFumesRemoval", "qrhTrafficAvoidance", "qrhRejectedTakeoff", "fctmStabilizedApproach"],
    "ffs-8t-6s-lst": ["qrhFireEng", "qrhCabinAltitude", "qrhAirspeedUnreliable", "qrhRejectedTakeoff", "qrhTrafficAvoidance", "qrhWindshearEscape", "qrhGpwsResponse", "fctmCirclingApproach"],
    "ffs-zftt-optional": ["qrhTakeoffPattern", "qrhVisualTrafficPattern", "qrhGoAroundMissedApproach", "fctmCrosswindLanding", "fctmStabilizedApproach"]
  };
})();
