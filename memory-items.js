window.MEMORY_ITEMS = [
  {
    id: "cabin-altitude",
    title: "CABIN ALTITUDE",
    condition: "Cabin altitude warning or rapid/uncontrollable cabin altitude condition.",
    citation: "Norse QRH Rev 9, NNC.2 Air Systems, p. 2.1.",
    actions: [
      "Don the oxygen masks.",
      "Establish crew communications.",
      "Check the cabin altitude and rate.",
      "If the cabin altitude is uncontrollable: PASS OXYGEN switch - Push to ON and hold for 1 second.",
      "Without delay, descend to the lowest safe altitude or 10,000 feet, whichever is higher."
    ],
    afterMemory: [
      "After the memory actions, continue with the CABIN ALTITUDE checklist."
    ]
  },
  {
    id: "airspeed-unreliable",
    title: "AIRSPEED UNRELIABLE",
    condition: "Airspeed is unreliable.",
    citation: "Norse QRH Rev 9, NNC.10 Flight Instruments, Displays, p. 10.1.",
    actions: [
      "Autopilot disconnect switch - Push.",
      "A/T ARM switches (both) - OFF.",
      "F/D switches (both) - OFF.",
      "Set the following gear-up pitch attitude and thrust: flaps extended - 10 degrees and 85% N1; flaps up - 4 degrees and 70% N1."
    ],
    afterMemory: [
      "After the memory actions, continue with the AIRSPEED UNRELIABLE checklist."
    ]
  },
  {
    id: "fire-eng",
    title: "FIRE ENG L, R",
    condition: "Fire is detected in the affected engine.",
    citation: "Norse QRH Rev 9, NNC.8 Fire Protection, p. 8.2.",
    actions: [
      "If in flight: A/T ARM switch (affected side) - Confirm OFF.",
      "Thrust lever (affected side) - Confirm Idle.",
      "FUEL CONTROL switch (affected side) - Confirm CUTOFF.",
      "Engine fire switch (affected side) - Confirm Pull.",
      "If the FIRE ENG message stays shown: Engine fire switch (affected side) - Rotate to the stop and hold for 1 second."
    ],
    afterMemory: [
      "If on the ground, the QRH branches to the ground fire actions.",
      "After the memory actions, continue with the FIRE ENG L, R checklist."
    ]
  },
  {
    id: "stabilizer",
    title: "STABILIZER",
    condition: "A stabilizer non-normal is indicated.",
    citation: "Norse QRH Rev 9, NNC.9 Flight Controls, p. 9.1.",
    actions: [
      "STAB cutout switches (both) - CUTOUT.",
      "Do not exceed the current airspeed."
    ],
    afterMemory: [
      "After the memory actions, continue with the STABILIZER checklist."
    ]
  },
  {
    id: "aborted-engine-start",
    title: "Aborted Engine Start L, R",
    condition: "An engine start is to be aborted.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.1.",
    actions: [
      "FUEL CONTROL switch (affected side) - CUTOFF."
    ],
    afterMemory: [
      "After the memory action, continue with the Aborted Engine Start L, R checklist."
    ]
  },
  {
    id: "dual-engine-fail-stall",
    title: "Dual Eng Fail/Stall",
    condition: "Thrust is lost on both engines, or both engines fail/stall.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.2.",
    actions: [
      "FUEL CONTROL switches (both) - CUTOFF, then RUN.",
      "RAM AIR TURBINE switch - Push and hold for 1 second."
    ],
    afterMemory: [
      "After the memory actions, continue with the Dual Eng Fail/Stall checklist."
    ]
  },
  {
    id: "eng-autostart",
    title: "ENG AUTOSTART L, R",
    condition: "An engine autostart condition occurs.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.3.",
    actions: [
      "FUEL CONTROL switch (affected side) - Confirm CUTOFF."
    ],
    afterMemory: [
      "After the memory action, continue with the ENG AUTOSTART L, R checklist."
    ]
  },
  {
    id: "eng-limit-exceed",
    title: "ENG LIMIT EXCEED L, R",
    condition: "An engine limit exceedance is indicated.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.4.",
    actions: [
      "A/T ARM switch (affected side) - Confirm OFF.",
      "Thrust lever (affected side) - Confirm retard until ENG LIMIT EXCEED message blanks or the thrust lever is at idle."
    ],
    afterMemory: [
      "After the memory actions, continue with the ENG LIMIT EXCEED L, R checklist."
    ]
  },
  {
    id: "eng-surge",
    title: "ENG SURGE L, R",
    condition: "An engine surge is indicated.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.8.",
    actions: [
      "A/T ARM switch (affected side) - Confirm OFF.",
      "Thrust lever (affected side) - Confirm retard until the ENG SURGE message blanks or the thrust lever is at idle."
    ],
    afterMemory: [
      "After the memory actions, continue with the ENG SURGE L, R checklist."
    ]
  },
  {
    id: "eng-severe-damage-separation",
    title: "Eng Svr Damage/Sep L, R",
    condition: "Severe engine damage or engine separation is suspected or indicated.",
    citation: "Norse QRH Rev 9, NNC.7 Engines, APU, p. 7.11.",
    actions: [
      "A/T ARM switch (affected side) - Confirm OFF.",
      "Thrust lever (affected side) - Confirm Idle.",
      "FUEL CONTROL switch (affected side) - Confirm CUTOFF.",
      "Engine fire switch (affected side) - Confirm Pull."
    ],
    afterMemory: [
      "After the memory actions, continue with the Eng Svr Damage/Sep L, R checklist."
    ]
  }
];
