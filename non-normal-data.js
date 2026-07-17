window.NON_NORMAL_MARKDOWN = `# Boeing 787 FCOM Non-Normal Training Flow

Source: \`B787 PKL Flight Crew Operations Manual (FCOM).pdf\`, using FCOM content for the training flow. FCTM guidance from \`B787 Flight Crew Training Manual rev 04.pdf\` appears as supplemental popups and reference images. The FCOM states that the QRH contains all normal and non-normal checklists. This section therefore trains FCOM non-normal philosophy, EICAS/ECL handling, alert/callout recognition, and FCOM-marked memory items. It is not a substitute for the QRH.

## Non-Normal Training Flow

### 1. Non-Normal Scope and QRH Boundary

References: [PDF pp.8-9; FCOM Preface 0.2.2-0.2.3], [PDF p.2410; FCOM 15.20.2]

Flow:
- Recognize the FCOM boundary: the FCOM says the QRH contains normal checklists, non-normal checklists, inflight performance data for expedited use, and maneuvers.
- Use this app's Non-Normal section as a training aide for FCOM concepts only: EICAS alerting, ECL operation, callout recognition, checklist access logic, and memory items.
- For a real or simulated non-normal checklist line item sequence, use the QRH or installed ECL database required by your training program.
- Treat EICAS alert messages, from after engine start until engine shutdown, as the primary means of alerting the crew to non-normal conditions.
- For each EICAS alert message, expect a corresponding QRH/ECL checklist procedure unless the FCOM/ECL indicates no checklist procedure exists.

### 2. First Response to Alerts

References: [PDF p.70; FCOM NP.11.2], [PDF pp.2409-2412; FCOM 15.20.1-15.20.4]

Flow:
- Before engine start, review EICAS alert messages and the status display; unexpected messages require dispatch/maintenance consideration.
- During or after engine start, do the respective non-normal checklist for an alert message; on the ground, also check the DDG or operator equivalent.
- After engine start, use EICAS alert messages as the primary indication of non-normal conditions or incorrect configuration.
- Prioritize alerts by EICAS level: warnings first, then cautions, then advisories.
- Warnings require immediate crew awareness and corrective action; cautions require immediate awareness and may require corrective action; advisories require routine awareness and may require corrective action.
- Red EICAS warning messages remain displayed and cannot be canceled with CANC/RCL.
- Amber caution and advisory messages can be canceled and recalled with CANC/RCL.
- Use CANC/RCL to page through caution/advisory pages, cancel them on the last page, or recall them when no caution/advisory messages are displayed.

### 3. Required Callouts and Alert Recognition

References: [PDF pp.2412-2420; FCOM 15.20.4-15.20.12], [PDF pp.2377-2378; FCOM 15.10.1-15.10.2]

Callouts:
- Call the displayed EICAS warning/caution/advisory title and alert level during training so both pilots share the same problem statement before checklist selection.
- For master warning or master caution events, identify the aural/light cue, then confirm the associated EICAS/PFD/HUD/ND indication.
- Treat voice annunciations as explicit callouts to recognize and respond to: TCAS RA commands, GPWS alerts, windshear alerts, speedbrake, engine fail, airspeed, and V1 callout if installed.
- For takeoff configuration warnings, recognize the siren, master warning lights, and applicable CONFIG EICAS warning; the FCOM notes the siren is not silenced by reset while thrust remains in takeoff range below V1.
- For landing configuration gear warning, recognize when reset can silence the siren and when it cannot: flap-in-landing-position cases remain until gear down/locked or GEAR OVRD selected.

Aural/voice items to drill:
- TCAS RA: ADJUST VERTICAL SPEED / LEVEL OFF / CLIMB / DESCEND / INCREASE CLIMB / INCREASE DESCENT / MONITOR VERTICAL SPEED / CLEAR OF CONFLICT.
- Terrain/GPWS: CAUTION TERRAIN, CAUTION OBSTACLE, DON’T SINK, GLIDESLOPE, OBSTACLE PULL UP, PULL UP, SINK RATE, TERRAIN, TERRAIN PULL UP, TOO LOW FLAPS, TOO LOW GEAR, TOO LOW TERRAIN.
- Windshear: MONITOR RADAR DISPLAY, WINDSHEAR AHEAD GO AROUND WINDSHEAR AHEAD, WINDSHEAR WINDSHEAR WINDSHEAR.
- Aircraft/airspeed/configuration: AIRSPEED AIRSPEED, ENGINE FAIL, SPEEDBRAKE SPEEDBRAKE, VEE ONE if installed.

### 4. Non-Normal ECL Access and Queue

References: [PDF pp.1847-1849; FCOM 10.50.3-10.50.5], [PDF pp.1871-1874; FCOM 10.60.7-10.60.10]

Flow:
- Access annunciated non-normal checklists by pushing the checklist display switch.
- Use the NON-NORMAL menu for any non-normal checklist, including unannunciated checklists.
- When one EICAS message exists, the corresponding non-normal checklist is displayed.
- When multiple EICAS messages exist, the checklist display switch shows the non-normal checklist queue.
- Queue order follows EICAS priority: warning, caution, advisory, then unannunciated.
- If a displayed alert message has a white empty checklist icon, its checklist has not been accessed or still has incomplete steps.
- If the icon is absent, all checklist steps are complete, there is no procedure for the message, or another checklist inhibits it.
- After completing a checklist, press NON-NORMAL to return to the queue if additional non-normal checklists remain.

### 5. Memory Steps Before ECL

References: [PDF pp.1873-1874; FCOM 10.60.9-10.60.10], [PDF p.59; FCOM L.10.1]

Flow:
- Non-normal checklists are read-and-do.
- If a non-normal checklist has memory steps, accomplish those memory steps before accessing the checklist.
- After memory steps, select ECL and complete the associated checklist; memory actions may remove the original EICAS message while a hidden checklist remains in the queue.
- If CHKL NON-NORMAL appears, select ECL and complete the hidden checklist.
- FCOM operating limitations that must be memorized are marked with the # symbol.
- The FCOM says exact wording of a limitation need not be memorized, but compliance must be assured.

### 6. Notes, Deferred Items, Inhibits, Overrides, and Resets

References: [PDF pp.1851-1860; FCOM 10.50.7-10.50.16], [PDF pp.1874-1877; FCOM 10.60.10-10.60.13]

Flow:
- Read operational notes that display ongoing consequences of the non-normal condition.
- Use additional information as supporting data; the FCOM states viewing it is not required for checklist completion.
- Complete deferred line items during the referenced normal checklist.
- Respect inhibited checklist line items: the inhibited checklist's EICAS icon and queue entry are removed, and its notes/deferred items are not collected separately.
- Read precautionary text before the associated line item.
- Use timers as displayed; timers continue running in the background and turn amber at 00:00.
- Use item override only when a line item will not be accomplished or has been accomplished but sensing is not functioning correctly.
- Use checklist override only when a checklist in the non-normal queue will not be accomplished or after browsing a checklist you do not intend to complete.
- Avoid RESET NON-NORMAL and RESET ALL in flight; the FCOM says their use in flight is not recommended.

### 7. ECL Inoperative

References: [PDF p.1877; FCOM 10.60.13]

Flow:
- If the checklist display switch is pushed and ECL is inoperative, expect CHECKLIST NOT AVAILABLE on the MFD.
- If ECL is disabled by maintenance, expect CHECKLIST DISABLED on the MFD.
- When ECL is inoperative or disabled, checklist icons are not displayed on EICAS for any messages.
- Use the QRH or operator-approved backup checklist method for actual checklist accomplishment.

### 8. Memory Item - Maximum Takeoff and Landing Tailwind

References: [PDF p.60; FCOM L.10.2]

Memory action:
- Maximum takeoff and landing tailwind component: 15 knots.

### 9. Memory Item - Severe Turbulence Speed

References: [PDF p.61; FCOM L.10.3]

Memory action:
- Turbulent air penetration speed in severe turbulence: 290 KIAS below 25,000 feet.
- Turbulent air penetration speed in severe turbulence: 310 KIAS / Mach .84, whichever is lower, at and above 25,000 feet.

### 10. Memory Item - Weather Radar Exclusion

References: [PDF p.61; FCOM L.10.3]

Memory action:
- Do not operate weather radar in a hangar.
- Do not operate weather radar within 50 feet / 15.25 meters of any fuel spill.
- The FCOM note says the hangar restriction does not apply to weather radar test mode.

### 11. Memory Item - Autopilot Minimum Engage Altitude

References: [PDF p.62; FCOM L.10.4]

Memory action:
- The autopilot must not be engaged below a minimum engage altitude of 200 feet AGL after takeoff.

### 12. Memory Item - Autopilot Disconnect Without LAND 2/3

References: [PDF p.62; FCOM L.10.4]

Memory action:
- Without LAND 2 or LAND 3 annunciated, the autopilot must be disengaged below 100 feet AGL.
- If the glidepath angle for an ILS, GLS, or IAN approach is greater than 3.77 degrees, the autopilot must be disengaged no later than 50 feet below DH/MDA.

### 13. Memory Item - HUD Takeoff Wind Limits

References: [PDF p.63; FCOM L.10.5]

Memory action:
- When takeoff weather minima are predicated on HUD takeoff operations: maximum headwind component 25 knots.
- When takeoff weather minima are predicated on HUD takeoff operations: maximum tailwind component 15 knots.
- When takeoff weather minima are predicated on HUD takeoff operations: maximum crosswind component 20 knots.

### 14. Memory Item - Autoland Wind Limits

References: [PDF p.63; FCOM L.10.5]

Memory action:
- When landing weather minima are predicated on autoland operations: maximum headwind component 25 knots.
- When landing weather minima are predicated on autoland operations: maximum tailwind component 15 knots.
- When landing weather minima are predicated on autoland operations: maximum crosswind component 25 knots.

### 15. Memory Item - Autoland Glidepath and Status

References: [PDF p.63; FCOM L.10.5]

Memory action:
- Maximum autoland glidepath angle: 3.25 degrees.
- Minimum autoland glidepath angle: 2.5 degrees.
- Autoland capability may be used with flaps 20, 25, or 30, with both engines operative or with one engine inoperative.
- AFDS autoland status annunciation must have LAND 2 or LAND 3 displayed.

### 16. Memory Item - HF Radios During Refueling

References: [PDF p.64; FCOM L.10.6]

Memory action:
- Do not operate HF radios when refueling.

### 17. Memory Item - Engine Oil Temperature for Start

References: [PDF p.64; FCOM L.10.6]

Memory action:
- Oil temperature must be greater than -40 degrees C for engine start.

### 18. Memory Item - Reverse Thrust In Flight

References: [PDF p.64; FCOM L.10.6]

Memory action:
- Intentional selection of reverse thrust in flight is prohibited.

### 19. Memory Item - Reverse Thrust Backing

References: [PDF p.64; FCOM L.10.6]

Memory action:
- Backing the airplane with use of reverse thrust is prohibited.

### 20. Memory Item - Rapid Alternating Control Inputs

References: [PDF p.65; FCOM L.10.7]

Memory action:
- Avoid rapid and large alternating control inputs, especially combined with large pitch, roll, or yaw changes, because they may result in structural failure at any speed, including below VA.
`;
