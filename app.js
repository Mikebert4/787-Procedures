const sourceFile = "source.md";
const authHash = "deab6998d935ac474061318ed55c1056fff07557ac0d25eaa57627a779ef9b05";
const authStorageKey = "b787-procedures:auth-ok";

const visualLibrary = [
  {
    matcher: /Weather and Speed|Severe Turbulent|Turbulence/i,
    images: [
      {
        src: "assets/norse-fcom-limitations-0163.png",
        alt: "Norse FCOM limitations page for severe turbulent air penetration speed and weight limits",
        caption: "Severe turbulent air penetration speed and weight limitations. Source: Norse FCOM Rev 9 PDF p.163; L.10.3."
      }
    ]
  },
  {
    matcher: /Wind Limits|Landing and Autoland|Takeoff and Landing Wind|Low Visibility HUD|Autoland Wind|Ground Wind/i,
    images: [
      {
        src: "assets/norse-fcom-limitations-0162.png",
        alt: "Norse FCOM limitations page for wind, tailwind, crosswind, runway slope and altitude",
        caption: "Wind, runway slope, tailwind, crosswind and altitude limitations. Source: Norse FCOM Rev 9 PDF p.162; L.10.2."
      },
      {
        src: "assets/norse-fcom-limitations-0164.png",
        alt: "Norse FCOM limitations page for autoflight and autoland wind limits",
        caption: "Autoflight, HUD takeoff and autoland wind limitations. Source: Norse FCOM Rev 9 PDF p.164; L.10.4."
      },
      {
        src: "assets/norse-fcom-limitations-0165.png",
        alt: "Norse FCOM limitations page for autoland capability and ground wind engine operating envelope",
        caption: "Autoland capability and ground wind engine operating envelope. Source: Norse FCOM Rev 9 PDF p.165; L.10.5."
      }
    ]
  },
  {
    matcher: /Landing Weight|Landing Distance|Tire Speed/i,
    images: [
      {
        src: "assets/norse-fcom-limitations-0163.png",
        alt: "Norse FCOM limitations page for weight limitations",
        caption: "Weight limitations including maximum landing weight. Source: Norse FCOM Rev 9 PDF p.163; L.10.3."
      },
      {
        src: "assets/norse-qrh-landing-distance-492.png",
        alt: "Norse QRH normal configuration landing distance table with wind adjustment column",
        caption: "Landing distance table format including wind, slope and speed adjustments. Source: Norse QRH Rev 9 PDF p.492; PI-QRH.11.2."
      }
    ]
  },
  {
    matcher: /Crosswind Landing Guidance|Non-TALPA|TALPA|Technique Notes/i,
    images: [
      {
        src: "assets/norse-fctm-crosswind-landing-338.png",
        alt: "Norse FCTM crosswind landing non-TALPA guidelines",
        caption: "Crosswind landing guidelines, non-TALPA. Source: Norse FCTM Rev 19 PDF p.338; FCTM 6.40."
      },
      {
        src: "assets/norse-fctm-crosswind-landing-340.png",
        alt: "Norse FCTM crosswind landing TALPA guidelines",
        caption: "Crosswind landing guidelines, TALPA. Source: Norse FCTM Rev 19 PDF p.340; FCTM 6.42."
      },
      {
        src: "assets/norse-fctm-crosswind-landing-339.png",
        alt: "Norse FCTM crosswind landing guidance continuation",
        caption: "Crosswind landing guidance continuation. Source: Norse FCTM Rev 19 PDF p.339; FCTM 6.41."
      }
    ]
  },
  {
    matcher: /Operating Frame|Preflight Procedure - First Officer|Preflight Procedure - Captain/i,
    images: [
      {
        src: "assets/fcom-scan-0073.png",
        alt: "FCOM preflight and postflight scan flow diagram",
        caption: "Preflight and postflight scan flow. Source: PDF p.73; FCOM NP.11.5."
      },
      {
        src: "assets/fcom-scan-0074.png",
        alt: "Captain as pilot flying or taxiing area of responsibility diagram",
        caption: "Captain as PF/taxiing areas of responsibility. Source: PDF p.74; FCOM NP.11.6."
      },
      {
        src: "assets/fcom-scan-0075.png",
        alt: "First Officer as pilot flying or taxiing area of responsibility diagram",
        caption: "First Officer as PF/taxiing areas of responsibility. Source: PDF p.75; FCOM NP.11.7."
      }
    ]
  },
  {
    matcher: /Exterior Inspection/i,
    images: [
      {
        src: "assets/fcom-exterior-0081.png",
        alt: "FCOM exterior inspection route diagram",
        caption: "Exterior inspection route. Source: PDF p.81; FCOM NP.21.5."
      }
    ]
  },
  {
    matcher: /EICAS|First Response|Non-Normal ECL Access|Non-Normal Scope/i,
    images: [
      {
        src: "assets/fcom-eicas-2377.png",
        alt: "FCOM EICAS message display diagram",
        caption: "EICAS message display and alert levels. Source: PDF p.2377; FCOM 15.10.1."
      },
      {
        src: "assets/fcom-nn-ecl-1847.png",
        alt: "FCOM non-normal checklist queue diagram",
        caption: "Non-normal checklist queue. Source: PDF p.1847; FCOM 10.50.3."
      },
      {
        src: "assets/fcom-nn-ecl-1848.png",
        alt: "FCOM non-normal checklist page diagram",
        caption: "Non-normal checklist page layout. Source: PDF p.1848; FCOM 10.50.4."
      }
    ]
  },
  {
    matcher: /Callouts|Alert Recognition/i,
    images: [
      {
        src: "assets/fcom-alerts-2412.png",
        alt: "FCOM aurals and master warning/caution table",
        caption: "Aurals and master warning/caution table. Source: PDF p.2412; FCOM 15.20.4."
      },
      {
        src: "assets/fcom-alerts-more-2420.png",
        alt: "FCOM windshear alert table",
        caption: "Windshear and V1 aural callouts. Source: PDF p.2420; FCOM 15.20.12."
      }
    ]
  },
  {
    matcher: /Deferred|Inhibits|Overrides|Resets|Memory Steps/i,
    images: [
      {
        src: "assets/fcom-nn-deferred-1857.png",
        alt: "FCOM deferred line items on non-normal checklist",
        caption: "Deferred line items from a non-normal checklist. Source: PDF p.1857; FCOM 10.50.13."
      },
      {
        src: "assets/fcom-nn-deferred-1858.png",
        alt: "FCOM deferred line items in normal checklist",
        caption: "Deferred items targeted to a normal checklist. Source: PDF p.1858; FCOM 10.50.14."
      }
    ]
  }
];

const state = {
  profiles: {},
  activeMode: "norseProcs",
  stages: [],
  current: 0,
  returnRoute: null,
  navCollapsed: localStorage.getItem("b787-procedures:nav-collapsed") === "1"
};

const fctmGuidance = window.FCTM_GUIDANCE || [];
const norseDifferences = window.NORSE_DIFFERENCES || [];
const sessionReferenceDetails = window.SESSION_REFERENCE_DETAILS || {};
const sessionReferences = window.SESSION_REFERENCES || {};
const techQuizData = window.TECH_QUIZ || {};
const norseProcs = window.NORSE_PROCS || [];
const appShellEl = document.querySelector(".app-shell");
const tabsEl = document.getElementById("tabs");
const titleEl = document.getElementById("stage-title");
const labelEl = document.getElementById("stage-label");
const citationEl = document.getElementById("stage-citation");
const fctmStageLinksEl = document.getElementById("fctm-stage-links");
const contentEl = document.getElementById("stage-content");
const visualsEl = document.getElementById("visuals");
const counterEl = document.getElementById("stage-counter");
const progressEl = document.getElementById("stage-progress");
const prevButton = document.getElementById("prev-stage");
const nextButton = document.getElementById("next-stage");
const resetAllButton = document.getElementById("reset-all");
const navToggleButton = document.getElementById("nav-toggle");
const fctmDialog = document.getElementById("fctm-dialog");
const fctmDialogSourceEl = document.getElementById("fctm-dialog-source");
const fctmDialogTitleEl = document.getElementById("fctm-dialog-title");
const fctmDialogContentEl = document.getElementById("fctm-dialog-content");
const fctmCloseButton = document.getElementById("fctm-close");
const imageDialog = document.getElementById("image-dialog");
const imageDialogTitleEl = document.getElementById("image-dialog-title");
const imageDialogImgEl = document.getElementById("image-dialog-img");
const imageDialogCaptionEl = document.getElementById("image-dialog-caption");
const imageCloseButton = document.getElementById("image-close");
const authGateEl = document.getElementById("auth-gate");
const authFormEl = document.getElementById("auth-form");
const authPasswordEl = document.getElementById("auth-password");
const authErrorEl = document.getElementById("auth-error");
const modeButtons = {
  normal: document.getElementById("mode-normal"),
  nonNormal: document.getElementById("mode-non-normal"),
  memory: document.getElementById("mode-memory"),
  limitations: document.getElementById("mode-limitations"),
  callouts: document.getElementById("mode-callouts"),
  scanFlows: document.getElementById("mode-scan-flows"),
  norseProcs: document.getElementById("mode-norse-procs"),
  sessions: document.getElementById("mode-sessions"),
  techQuiz: document.getElementById("mode-tech-quiz")
};

init();

async function init() {
  try {
    const authenticated = await requireAuthentication();
    if (!authenticated) return;
    const markdown = window.PROFILE_MARKDOWN || await loadMarkdown();
    state.profiles.normal = parseMarkdown(markdown, "normal");
    state.profiles.nonNormal = parseMarkdown(window.NON_NORMAL_MARKDOWN || "", "nonNormal");
    state.profiles.memory = parseMemoryItems(window.MEMORY_ITEMS || []);
    state.profiles.limitations = parseMarkdown(window.LIMITATIONS_MARKDOWN || "", "limitations");
    state.profiles.callouts = parseCalloutItems(window.CALLOUTS || []);
    state.profiles.scanFlows = parseScanFlowItems(window.SCAN_FLOWS || []);
    state.profiles.norseProcs = parseNorseProcsItems(norseProcs);
    state.profiles.sessions = parseSessionItems(window.STUDY_SESSIONS || {});
    state.profiles.techQuiz = parseTechQuizItems(techQuizData);
    renderInitialProcedureView();
    bindControls();
  } catch (error) {
    contentEl.innerHTML = "";
    const message = document.createElement("p");
    message.className = "notice";
    message.textContent = "The procedure source could not be loaded from the local server.";
    contentEl.append(message);
  }
}

async function requireAuthentication() {
  if (sessionStorage.getItem(authStorageKey) === "1") {
    unlockApp();
    return true;
  }

  authPasswordEl?.focus();
  authFormEl?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const candidateHash = await sha256(authPasswordEl.value);
    if (candidateHash === authHash) {
      sessionStorage.setItem(authStorageKey, "1");
      authPasswordEl.value = "";
      unlockApp();
      await startAppAfterUnlock();
      return;
    }

    authErrorEl.textContent = "Password incorrect.";
    authPasswordEl.select();
  });

  return false;
}

async function startAppAfterUnlock() {
  const markdown = window.PROFILE_MARKDOWN || await loadMarkdown();
  state.profiles.normal = parseMarkdown(markdown, "normal");
  state.profiles.nonNormal = parseMarkdown(window.NON_NORMAL_MARKDOWN || "", "nonNormal");
  state.profiles.memory = parseMemoryItems(window.MEMORY_ITEMS || []);
  state.profiles.limitations = parseMarkdown(window.LIMITATIONS_MARKDOWN || "", "limitations");
  state.profiles.callouts = parseCalloutItems(window.CALLOUTS || []);
  state.profiles.scanFlows = parseScanFlowItems(window.SCAN_FLOWS || []);
  state.profiles.norseProcs = parseNorseProcsItems(norseProcs);
  state.profiles.sessions = parseSessionItems(window.STUDY_SESSIONS || {});
  state.profiles.techQuiz = parseTechQuizItems(techQuizData);
  renderInitialProcedureView();
  bindControls();
}

function renderInitialProcedureView() {
  const route = parseProcedureRouteHash();
  const routeIndex = route ? findProcedureStageIndex(route.mode, route.stageId) : -1;

  if (routeIndex >= 0) {
    state.activeMode = route.mode;
    state.stages = state.profiles[route.mode];
  } else {
    state.stages = state.profiles[state.activeMode];
  }

  updateModeButtonState();
  applyNavState();
  renderTabs();
  selectStage(routeIndex >= 0 ? routeIndex : 0);
}

function unlockApp() {
  document.body.classList.remove("auth-locked");
  authGateEl?.setAttribute("hidden", "");
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function loadMarkdown() {
  const response = await fetch(sourceFile);
  if (!response.ok) throw new Error(`Unable to load ${sourceFile}`);
  return response.text();
}

function parseMarkdown(markdown, mode) {
  const operatingFrame = extractBetween(markdown, "## Operating Frame", "## End-to-End Normal Procedures Flow");
  const stageMatches = [...markdown.matchAll(/^###\s+(.+)$/gm)];
  const stages = [];

  if (operatingFrame) {
    stages.push({
      id: "operating-frame",
      mode,
      rawTitle: "Operating Frame",
      title: "Operating Frame",
      citation: "PDF pp.69-72; FCOM NP.11.1-NP.11.4",
      body: operatingFrame.trim()
    });
  }

  for (let index = 0; index < stageMatches.length; index += 1) {
    const match = stageMatches[index];
    const next = stageMatches[index + 1];
    const rawTitle = match[1].trim();
    const sourceMapIndex = markdown.indexOf("## Quick Source Map");
    const end = next ? next.index : sourceMapIndex > match.index ? sourceMapIndex : markdown.length;
    const body = markdown.slice(match.index + match[0].length, end).trim();
    const citation = extractCitation(body);
    stages.push({
      id: slugify(rawTitle),
      mode,
      rawTitle,
      title: stripStageNumber(rawTitle),
      citation,
      body
    });
  }

  return stages;
}

function extractBetween(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  const end = text.indexOf(endMarker);
  if (start < 0 || end < 0 || end <= start) return "";
  return text.slice(start + startMarker.length, end);
}

function extractCitation(body) {
  const match = body.match(/^References?:\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function stripStageNumber(title) {
  return title.replace(/^\d+[A-C]?\.\s+/, "");
}

function stageNumber(index) {
  return state.stages[0]?.id === "operating-frame" ? index : index + 1;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function bindControls() {
  prevButton.addEventListener("click", navigatePreviousStage);
  nextButton.addEventListener("click", () => selectStage(Math.min(state.stages.length - 1, state.current + 1)));
  resetAllButton.addEventListener("click", resetAllProgress);
  navToggleButton.addEventListener("click", toggleNav);
  fctmCloseButton.addEventListener("click", closeFctmDialog);
  fctmDialog.addEventListener("click", (event) => {
    if (event.target === fctmDialog) closeFctmDialog();
  });
  imageCloseButton.addEventListener("click", closeImageDialog);
  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) closeImageDialog();
  });
  modeButtons.normal.addEventListener("click", () => setMode("normal", 0, { clearReturn: true }));
  modeButtons.nonNormal.addEventListener("click", () => setMode("nonNormal", 0, { clearReturn: true }));
  modeButtons.memory.addEventListener("click", () => setMode("memory", 0, { clearReturn: true }));
  modeButtons.limitations.addEventListener("click", () => setMode("limitations", 0, { clearReturn: true }));
  modeButtons.callouts.addEventListener("click", () => setMode("callouts", 0, { clearReturn: true }));
  modeButtons.scanFlows.addEventListener("click", () => setMode("scanFlows", 0, { clearReturn: true }));
  modeButtons.norseProcs.addEventListener("click", () => setMode("norseProcs", 0, { clearReturn: true }));
  modeButtons.sessions.addEventListener("click", () => setMode("sessions", 0, { clearReturn: true }));
  modeButtons.techQuiz.addEventListener("click", () => setMode("techQuiz", 0, { clearReturn: true }));
  window.addEventListener("popstate", restoreProcedureHistory);
}

function setMode(mode, targetIndex = 0, options = {}) {
  if (state.activeMode === mode) {
    if (options.clearReturn) {
      state.returnRoute = null;
      updateNavState();
    }
    if (options.forceStage) selectStage(targetIndex, options);
    return;
  }

  state.activeMode = mode;
  state.stages = state.profiles[mode];
  updateModeButtonState();
  renderTabs();
  selectStage(targetIndex, options);
}

function updateModeButtonState() {
  Object.entries(modeButtons).forEach(([key, button]) => {
    button.setAttribute("aria-pressed", key === state.activeMode ? "true" : "false");
  });
}

function navigatePreviousStage() {
  if (state.returnRoute) {
    window.history.back();
    return;
  }

  selectStage(Math.max(0, state.current - 1));
}

function openRelatedProcedure(link) {
  const targetIndex = findProcedureStageIndex(link.mode, link.stageId);
  const origin = currentProcedureRoute();
  if (targetIndex < 0 || !origin) return;

  state.returnRoute = origin;
  writeProcedureHistory(origin, { replace: true });
  setMode(link.mode, targetIndex, { preserveReturn: true, forceStage: true });
  writeProcedureHistory(currentProcedureRoute(), { returnRoute: origin });
}

function restoreProcedureHistory(event) {
  const route = event.state?.b787ProcedureRoute;
  const targetIndex = route ? findProcedureStageIndex(route.mode, route.stageId) : -1;
  if (targetIndex < 0) return;

  state.returnRoute = event.state.returnRoute || null;
  setMode(route.mode, targetIndex, { preserveReturn: true, forceStage: true });
}

function currentProcedureRoute() {
  const stage = state.stages[state.current];
  return stage ? { mode: state.activeMode, stageId: stage.id } : null;
}

function getProcedureStage(mode, stageId) {
  return state.profiles[mode]?.find((stage) => stage.id === stageId) || null;
}

function findProcedureStageIndex(mode, stageId) {
  return state.profiles[mode]?.findIndex((stage) => stage.id === stageId) ?? -1;
}

function procedureRouteHash(route) {
  return `#${encodeURIComponent(route.mode)}/${encodeURIComponent(route.stageId)}`;
}

function parseProcedureRouteHash() {
  const match = window.location.hash.match(/^#(normal|scanFlows|norseProcs)\/([^/]+)$/);
  if (!match) return null;
  return { mode: match[1], stageId: decodeURIComponent(match[2]) };
}

function writeProcedureHistory(route, { replace = false, returnRoute = null } = {}) {
  if (!route) return;
  const entry = { b787ProcedureRoute: route, returnRoute };
  if (replace) {
    window.history.replaceState(entry, "", procedureRouteHash(route));
  } else {
    window.history.pushState(entry, "", procedureRouteHash(route));
  }
}

function renderTabs() {
  tabsEl.innerHTML = "";
  state.stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
    if (!showsCompletionBadge(stage)) button.classList.add("no-completion");
    button.id = `tab-${stage.id}`;
    button.role = "tab";
    button.setAttribute("aria-controls", "stage-content");
    button.addEventListener("click", () => selectStage(index));

    const number = document.createElement("span");
    number.className = "tab-number";
    number.textContent = stage.id === "operating-frame" ? "i" : String(stageNumber(index));

    const title = document.createElement("span");
    title.className = "tab-title";
    title.textContent = stage.title;

    button.append(number, title);
    if (showsCompletionBadge(stage)) {
      const complete = document.createElement("span");
      complete.className = "tab-complete";
      complete.dataset.state = stageCompletion(stage).complete ? "done" : "open";
      complete.textContent = stageCompletion(stage).complete ? "Done" : "-";
      button.append(complete);
    }
    tabsEl.append(button);
  });
}

function showsCompletionBadge(stage) {
  if (stage.type === "memoryIntro") return false;
  return !["limitations", "callouts", "scanFlows", "norseProcs", "sessions", "techQuiz"].includes(stage.mode);
}

function selectStage(index, options = {}) {
  if (!options.preserveReturn) state.returnRoute = null;
  state.current = index;
  const stage = state.stages[index];
  updateTabSelection();
  labelEl.textContent = stageLabel(stage, index);
  titleEl.textContent = stage.title;
  citationEl.textContent = stage.citation || "Source citations are shown in the procedure text.";
  renderStageGuidanceLinks(stage);
  contentEl.innerHTML = "";
  renderStageBody(stage);
  renderVisuals(stage);
  updateNavState();
  updateProgress();
}

function updateTabSelection() {
  [...tabsEl.children].forEach((tab, index) => {
    tab.setAttribute("aria-selected", index === state.current ? "true" : "false");
  });
}

function renderStageBody(stage) {
  if (stage.type === "memoryIntro") {
    renderMemoryIntroStage(stage);
    return;
  }
  if (stage.type === "memory") {
    renderMemoryStage(stage);
    return;
  }
  if (stage.mode === "limitations") {
    renderLimitationsStage(stage);
    return;
  }
  if (stage.mode === "callouts") {
    renderCalloutsStage(stage);
    return;
  }
  if (stage.mode === "scanFlows") {
    renderScanFlowStage(stage);
    return;
  }
  if (stage.mode === "norseProcs") {
    renderNorseProcsStage(stage);
    return;
  }
  if (stage.mode === "sessions") {
    renderSessionStage(stage);
    return;
  }
  if (stage.mode === "techQuiz") {
    renderTechQuizStage(stage);
    return;
  }

  const lines = stage.body.split(/\r?\n/);
  let group = createGroup("Procedure");
  let list = null;
  let itemIndex = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || /^References?:/.test(line)) continue;

    if (/^####\s+/.test(line)) {
      if (groupHasContent(group)) contentEl.append(group);
      group = createGroup(line.replace(/^####\s+/, ""));
      list = null;
      continue;
    }

    if (/^[A-Z][A-Za-z0-9 /()-]+:$/.test(line) || /^(Flow|Timing|Prerequisite|Notes|Callouts|Aural\/voice items to drill|Memory action|Inspection route|General inspection standard|Flap retraction schedule|Climb\/cruise flow):$/.test(line)) {
      if (groupHasContent(group)) contentEl.append(group);
      group = createGroup(line.replace(/:$/, ""));
      list = null;
      continue;
    }

    if (/^\s*-\s+/.test(rawLine)) {
      if (!list) {
        list = document.createElement("ul");
        list.className = "check-list";
        group.append(list);
      }
      const text = line.replace(/^-\s+/, "");
      const item = createCheckItem(stage, itemIndex, text);
      list.append(item);
      itemIndex += 1;
      continue;
    }

    list = null;
    const paragraph = document.createElement("p");
    paragraph.className = line.toLowerCase().includes("do not use for flight") ? "notice" : "procedure-text";
    if (/^QRH reference:/.test(line)) paragraph.className = "citation";
    if (/^(Caution!|Warning!)/.test(line)) paragraph.className = "notice";
    paragraph.textContent = line;
    group.append(paragraph);
  }

  if (groupHasContent(group)) contentEl.append(group);
}

function renderLimitationsStage(stage) {
  const sections = parseLimitationSections(stage.body);
  const panel = document.createElement("section");
  panel.className = "limitations-panel";

  const note = document.createElement("p");
  note.className = stage.title.includes("Not a Limit") ? "limitations-guidance-note" : "limitations-priority-note";
  note.textContent = stage.title.includes("Not a Limit")
    ? "Guidance values are shown for training context and are not aircraft limitations."
    : "Limitations are shown as reference tables. Use the cited manual source for the controlling text.";
  panel.append(note);

  sections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "limitations-table-block";

    const heading = document.createElement("h3");
    heading.textContent = section.title;
    wrapper.append(heading);

    if (section.notes.length) {
      section.notes.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.className = "procedure-text";
        paragraph.textContent = text;
        wrapper.append(paragraph);
      });
    }

    if (section.rows.length) {
      const table = document.createElement("table");
      table.className = "limitations-table";
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      ["Item", "Limit / Value", "Source"].forEach((label) => {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = label;
        headerRow.append(th);
      });
      thead.append(headerRow);
      table.append(thead);

      const tbody = document.createElement("tbody");
      section.rows.forEach((row) => {
        const tr = document.createElement("tr");
        if (row.guidance) tr.className = "is-guidance";
        [row.item, row.value, row.source].forEach((value) => {
          const cell = document.createElement("td");
          cell.textContent = value;
          tr.append(cell);
        });
        tbody.append(tr);
      });
      table.append(tbody);
      wrapper.append(table);
    }

    panel.append(wrapper);
  });

  contentEl.append(panel);
}

function parseLimitationSections(body) {
  const sections = [];
  let current = { title: "Limitations", rows: [], notes: [] };

  body.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || /^References?:/.test(line)) return;

    if (/^####\s+/.test(line)) {
      if (current.rows.length || current.notes.length) sections.push(current);
      current = { title: line.replace(/^####\s+/, ""), rows: [], notes: [] };
      return;
    }

    if (/^\s*-\s+/.test(rawLine)) {
      current.rows.push(parseLimitationRow(line.replace(/^-\s+/, ""), current.title));
      return;
    }

    current.notes.push(line);
  });

  if (current.rows.length || current.notes.length) sections.push(current);
  return sections;
}

function parseLimitationRow(text, sectionTitle) {
  const sourceMatch = text.match(/\s*(\[[^\]]+\])$/);
  const source = sourceMatch ? sourceMatch[1].replace(/^\[|\]$/g, "") : "";
  const main = sourceMatch ? text.slice(0, sourceMatch.index).trim() : text.trim();
  const colonIndex = main.indexOf(":");
  const guidance = /guidance|recommended|advisory|not limitations|not a limitation/i.test(`${sectionTitle} ${main}`);

  if (colonIndex > 0) {
    return {
      item: main.slice(0, colonIndex).trim(),
      value: main.slice(colonIndex + 1).trim(),
      source,
      guidance
    };
  }

  return {
    item: main,
    value: guidance ? "Guidance" : "Limitation",
    source,
    guidance
  };
}

function parseMemoryItems(items) {
  return items.map((item, index) => ({
    ...item,
    type: item.type || "memory",
    mode: "memory",
    rawTitle: item.title,
    title: item.title,
    body: (item.actions || []).map((action) => `- ${action}`).join("\n"),
    order: index + 1
  }));
}

function parseCalloutItems(items) {
  return items.map((item, index) => ({
    ...item,
    type: "callouts",
    mode: "callouts",
    rawTitle: item.title,
    title: item.title,
    citation: item.citation || "",
    body: "",
    order: index + 1
  }));
}

function parseScanFlowItems(items) {
  return items.map((item, index) => ({
    ...item,
    type: "scanFlow",
    mode: "scanFlows",
    rawTitle: item.title,
    title: item.title,
    citation: item.citation || "",
    body: "",
    order: index + 1
  }));
}

function parseNorseProcsItems(items) {
  return items.map((item, index) => ({
    ...item,
    relatedLinks: window.NORSE_PROCS_RELATED_LINKS?.[item.id] || [],
    type: "norseProcs",
    mode: "norseProcs",
    rawTitle: item.title,
    title: item.title,
    body: "",
    order: index + 1
  }));
}

function parseSessionItems(data) {
  const improvements = data.improvements || [];
  const sessions = data.sessions || [];
  const stages = [];

  stages.push({
    id: "study-focus",
    type: "studyFocus",
    mode: "sessions",
    rawTitle: "Study Focus",
    title: "Study Focus",
    citation: "Current 787 training aide; ATO APP R B787 TR Issue 01.4; CBT study-plan thread.",
    improvements,
    body: ""
  });

  sessions.forEach((session, index) => {
    stages.push({
      ...session,
      type: "session",
      mode: "sessions",
      rawTitle: session.title,
      title: session.title,
      body: "",
      order: index + 1
    });
  });

  return stages;
}

function parseTechQuizItems(data) {
  const questions = data.questions || [];
  if (!questions.length) {
    return [{
      id: "tech-quiz-empty",
      type: "techQuiz",
      mode: "techQuiz",
      rawTitle: "Question Bank",
      title: "Question Bank",
      citation: data.citation || "QB 101 787 1; source-checked audit notes.",
      questions,
      body: ""
    }];
  }

  return questions.map((question, index) => ({
    id: question.id,
    type: "techQuiz",
    mode: "techQuiz",
    rawTitle: `Question ${question.number}`,
    title: quizPromptTitle(question.prompt),
    citation: data.citation || "QB 101 787 1; source-checked audit notes.",
    question,
    questions,
    body: "",
    order: index + 1
  }));
}

function quizPromptTitle(prompt) {
  const clean = String(prompt || "").replace(/\s+/g, " ").trim();
  return clean.length > 54 ? `${clean.slice(0, 51)}...` : clean;
}

function stageLabel(stage, index) {
  if (state.activeMode === "memory" && stage.type === "memoryIntro") return "Memory items - Terminology";
  if (state.activeMode === "memory") return `Memory items - Item ${index + 1}`;
  if (state.activeMode === "limitations") return `Limitations - Section ${index + 1}`;
  if (state.activeMode === "callouts") return `Callouts - Phase ${index + 1}`;
  if (state.activeMode === "scanFlows") return `Scan Flows - Page ${stage.sourcePage || index + 1}`;
  if (state.activeMode === "norseProcs") return `Norse Procs - PDF p.${stage.sourcePages?.join("-") || index + 1}`;
  if (state.activeMode === "sessions") return index === 0 ? "Sessions - Study Plan" : `Sessions - ${stage.category || "Session"} ${index}`;
  if (state.activeMode === "techQuiz") return `Tech Quiz - Question ${index + 1} of ${state.stages.length}`;
  return `${state.activeMode === "normal" ? "Normal" : "Non-Normal"} - ${stage.id === "operating-frame" ? "Profile" : `Stage ${stageNumber(index)}`}`;
}

function renderSessionStage(stage) {
  if (stage.type === "studyFocus") {
    renderStudyFocusStage(stage);
    return;
  }

  const panel = document.createElement("section");
  panel.className = "session-panel";

  const summary = document.createElement("p");
  summary.className = "session-summary";
  summary.textContent = stage.summary;
  panel.append(summary);

  if (stage.emphasis?.length) {
    const tags = document.createElement("div");
    tags.className = "session-tags";
    stage.emphasis.forEach((text) => {
      const tag = document.createElement("span");
      tag.textContent = text;
      tags.append(tag);
    });
    panel.append(tags);
  }

  const grid = document.createElement("div");
  grid.className = "session-grid";
  grid.append(createSessionTable("Route", ["Item", "Details"], stage.route || []));
  grid.append(createSessionPlanningTable(stage));
  panel.append(grid);

  if (stage.prep?.length) {
    const prep = document.createElement("section");
    prep.className = "session-prep";
    const heading = document.createElement("h3");
    heading.textContent = "Suggested Prep";
    prep.append(heading);
    const list = document.createElement("ul");
    stage.prep.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });
    prep.append(list);
    panel.append(prep);
  }

  const source = document.createElement("p");
  source.className = "citation";
  source.textContent = `Source: ${stage.citation}`;
  panel.append(source);

  contentEl.append(panel);
}

function renderTechQuizStage(stage) {
  const panel = document.createElement("section");
  panel.className = "tech-quiz-panel";
  const questions = getTechQuizQuestions(stage);
  const question = stage.question || questions[0];

  const intro = document.createElement("div");
  intro.className = "tech-quiz-intro";
  const introText = document.createElement("p");
  introText.textContent = `Single question bank. Question ${state.current + 1} of ${state.stages.length}. Choose an answer to mark it and reveal the explanation, manual/source reference, and any audit note.`;
  intro.append(introText);

  const controls = document.createElement("div");
  controls.className = "tech-quiz-controls";
  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "ghost-button";
  reset.textContent = "Reset quiz";
  reset.addEventListener("click", () => {
    questions.forEach((question) => localStorage.removeItem(quizAnswerKey(question)));
    contentEl.innerHTML = "";
    renderStageBody(stage);
    updateProgress();
  });
  controls.append(reset);
  intro.append(controls);
  panel.append(intro);

  const score = document.createElement("div");
  score.className = "tech-quiz-score";
  score.id = "tech-quiz-score";
  panel.append(score);

  if (question) {
    const list = document.createElement("ol");
    list.className = "tech-quiz-list";
    list.append(createQuizQuestionCard(question));
    panel.append(list);
  } else {
    const empty = document.createElement("p");
    empty.className = "empty-note";
    empty.textContent = "No quiz questions are available.";
    panel.append(empty);
  }

  panel.append(createTechQuizNav());

  contentEl.append(panel);
  updateTechQuizScore(stage);
}

function createTechQuizNav() {
  const nav = document.createElement("div");
  nav.className = "tech-quiz-question-nav";

  const previous = document.createElement("button");
  previous.type = "button";
  previous.className = "icon-button";
  previous.textContent = "Previous question";
  previous.disabled = state.current === 0;
  previous.addEventListener("click", () => selectStage(Math.max(0, state.current - 1)));

  const next = document.createElement("button");
  next.type = "button";
  next.className = "icon-button primary";
  next.textContent = "Next question";
  next.disabled = state.current === state.stages.length - 1;
  next.addEventListener("click", () => selectStage(Math.min(state.stages.length - 1, state.current + 1)));

  nav.append(previous, next);
  return nav;
}

function createQuizQuestionCard(question) {
  const selected = localStorage.getItem(quizAnswerKey(question));
  const correct = selected && selected === question.correctAnswer;
  const card = document.createElement("li");
  card.className = "tech-quiz-card";
  card.dataset.status = selected ? (correct ? "correct" : "incorrect") : "open";
  card.id = question.id;

  const header = document.createElement("div");
  header.className = "tech-quiz-card-header";
  const meta = document.createElement("span");
  meta.className = "tech-quiz-meta";
  meta.textContent = `${question.source} Q${question.number}`;
  const flags = document.createElement("div");
  flags.className = "tech-quiz-flags";
  if (question.status && question.status !== "confirmed") {
    const flag = document.createElement("span");
    flag.className = `tech-quiz-flag ${question.status}`;
    flag.textContent = statusLabel(question.status);
    flags.append(flag);
  }
  if (question.bankAnswer !== question.correctAnswer && question.status !== "incorrect-key") {
    const flag = document.createElement("span");
    flag.className = "tech-quiz-flag incorrect-key";
    flag.textContent = "Bank key corrected";
    flags.append(flag);
  }
  header.append(meta, flags);

  const prompt = document.createElement("p");
  prompt.className = "tech-quiz-prompt";
  prompt.textContent = question.prompt;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "tech-quiz-options";
  const legend = document.createElement("legend");
  legend.textContent = `Answer question ${question.number}`;
  fieldset.append(legend);

  Object.entries(question.options).forEach(([letter, text]) => {
    const option = document.createElement("label");
    option.className = "tech-quiz-option";
    option.dataset.option = letter;
    if (selected) {
      if (letter === question.correctAnswer) option.dataset.result = "correct";
      if (letter === selected && selected !== question.correctAnswer) option.dataset.result = "chosen-incorrect";
    }

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `quiz-${question.id}`;
    input.value = letter;
    input.checked = selected === letter;
    input.addEventListener("change", () => {
      localStorage.setItem(quizAnswerKey(question), letter);
      const updated = createQuizQuestionCard(question);
      card.replaceWith(updated);
      updateTechQuizScore(state.stages[state.current]);
      updateProgress();
    });

    const optionText = document.createElement("span");
    optionText.textContent = `${letter}. ${text}`;
    option.append(input, optionText);
    fieldset.append(option);
  });

  card.append(header, prompt, fieldset);

  if (selected) {
    card.append(createQuizFeedback(question, selected, correct));
  }

  return card;
}

function createQuizFeedback(question, selected, correct) {
  const feedback = document.createElement("section");
  feedback.className = "tech-quiz-feedback";

  const result = document.createElement("p");
  result.className = correct ? "quiz-result correct" : "quiz-result incorrect";
  result.textContent = correct ? "Correct." : "Incorrect.";
  feedback.append(result);

  const answers = document.createElement("p");
  answers.className = "tech-quiz-answer-line";
  const bankText = question.bankAnswer === question.correctAnswer
    ? `Bank answer: ${question.bankAnswer}.`
    : `Original bank answer: ${question.bankAnswer}; corrected answer used here: ${question.correctAnswer}.`;
  answers.textContent = `You chose ${selected}. ${bankText}`;
  feedback.append(answers);

  const explanation = document.createElement("p");
  explanation.textContent = question.explanation;
  feedback.append(explanation);

  if (question.auditNote) {
    const audit = document.createElement("p");
    audit.className = "tech-quiz-audit-note";
    audit.textContent = question.auditNote;
    feedback.append(audit);
  }

  const reference = document.createElement("p");
  reference.className = "citation";
  reference.textContent = `Reference: ${question.reference}`;
  feedback.append(reference);

  return feedback;
}

function updateTechQuizScore(stage) {
  const score = document.getElementById("tech-quiz-score");
  const questions = getTechQuizQuestions(stage);
  if (!score || !questions.length) return;
  const total = questions.length;
  let attempted = 0;
  let correct = 0;
  questions.forEach((question) => {
    const selected = localStorage.getItem(quizAnswerKey(question));
    if (!selected) return;
    attempted += 1;
    if (selected === question.correctAnswer) correct += 1;
  });
  const percent = attempted ? Math.round((correct / attempted) * 100) : 0;
  const auditFlags = questions.filter((question) => question.status && question.status !== "confirmed").length;
  const correctedKeys = questions.filter((question) => question.bankAnswer !== question.correctAnswer).length;
  score.innerHTML = "";
  [
    ["Attempted", `${attempted}/${total}`],
    ["Correct", String(correct)],
    ["Score", `${percent}%`],
    ["Audit flags", String(auditFlags)],
    ["Corrected keys", String(correctedKeys)]
  ].forEach(([label, value]) => {
    const metric = document.createElement("span");
    metric.className = "tech-quiz-metric";
    const strong = document.createElement("strong");
    strong.textContent = value;
    const small = document.createElement("span");
    small.textContent = label;
    metric.append(strong, small);
    score.append(metric);
  });
}

function getTechQuizQuestions(stage) {
  if (stage?.questions?.length) return stage.questions;
  if (state.profiles.techQuiz?.length) {
    return state.profiles.techQuiz.map((item) => item.question).filter(Boolean);
  }
  return stage?.question ? [stage.question] : [];
}

function quizAnswerKey(question) {
  return `b787-procedures:tech-quiz:${question.id}`;
}

function statusLabel(status) {
  return {
    "incorrect-key": "Incorrect bank key",
    "source-issue": "Source issue",
    "wording-issue": "Wording issue"
  }[status] || "Audit note";
}

function renderStudyFocusStage(stage) {
  const panel = document.createElement("section");
  panel.className = "study-focus-panel";

  const note = document.createElement("p");
  note.className = "session-summary";
  note.textContent = "Use this page as the upgrade queue for the training aide. The session pages that follow are condensed from the ATO course detail; the other items reflect weak areas and workflows already identified while building the site.";
  panel.append(note);

  const grid = document.createElement("div");
  grid.className = "study-focus-grid";
  stage.improvements.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "study-focus-card";
    const heading = document.createElement("h3");
    heading.textContent = entry.title;
    const detail = document.createElement("p");
    detail.textContent = entry.detail;
    const source = document.createElement("p");
    source.className = "citation";
    source.textContent = entry.source;
    card.append(heading, detail, source);
    grid.append(card);
  });
  panel.append(grid);
  contentEl.append(panel);
}

function createSessionTable(title, headers, rows) {
  const wrapper = document.createElement("section");
  wrapper.className = "session-table-block";
  const heading = document.createElement("h3");
  heading.textContent = title;
  wrapper.append(heading);

  const table = document.createElement("table");
  table.className = "session-table";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headers.forEach((label) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = label;
    tr.append(th);
  });
  thead.append(tr);
  table.append(thead);

  const tbody = document.createElement("tbody");
  rows.forEach((row) => {
    const bodyRow = document.createElement("tr");
    row.forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value || "";
      bodyRow.append(td);
    });
    tbody.append(bodyRow);
  });
  table.append(tbody);
  wrapper.append(table);
  return wrapper;
}

function createSessionPlanningTable(stage) {
  const title = stage.category === "FFS" ? "Flight Plan and Performance - 787-9" : "787-9 Planning Figures";
  return createSessionTable(title, ["Item", "787-9"], stage.planning || []);
}

function renderScanFlowStage(stage) {
  const panel = document.createElement("section");
  panel.className = "scan-flow-panel";

  if (stage.note) {
    const note = document.createElement("p");
    note.className = "scan-flow-note";
    note.textContent = stage.note;
    panel.append(note);
  }

  const grid = document.createElement("div");
  grid.className = "scan-flow-grid";

  stage.sections.forEach((section) => {
    const card = document.createElement("section");
    card.className = "scan-flow-role";

    const heading = document.createElement("h3");
    heading.textContent = section.role;
    card.append(heading);

    const list = document.createElement("ol");
    list.className = "scan-flow-list";
    section.items.forEach((item) => {
      const row = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scan-flow-item";
      button.textContent = item.text;
      button.addEventListener("click", () => openScanFlowDetail(stage, section, item));
      row.append(button);
      list.append(row);
    });
    card.append(list);

    if (section.notes?.length) {
      const notes = document.createElement("ul");
      notes.className = "scan-flow-notes";
      section.notes.forEach((text) => {
        const note = document.createElement("li");
        note.textContent = text;
        notes.append(note);
      });
      card.append(notes);
    }

    grid.append(card);
  });

  panel.append(grid);

  const source = document.createElement("p");
  source.className = "citation";
  source.textContent = `Verbatim scan-flow source: ${stage.citation}`;
  panel.append(source);

  contentEl.append(panel);
}

function renderNorseProcsStage(stage) {
  const panel = document.createElement("section");
  panel.className = "norse-procs-panel";
  const relatedLinks = createRelatedProcedureLinks(stage);
  if (relatedLinks) panel.append(relatedLinks);
  let section = createNorseProcsSection();

  const appendSection = () => {
    if (section.children.length) panel.append(section);
  };

  stage.blocks.forEach((block) => {
    if (block.type === "heading") {
      appendSection();
      section = createNorseProcsSection(block.text);
      return;
    }

    if (block.type === "paragraph") {
      const paragraph = document.createElement("p");
      paragraph.className = "norse-procs-text";
      paragraph.textContent = block.text;
      section.append(paragraph);
      return;
    }

    if (block.type === "bullets" || block.type === "numbered") {
      const list = document.createElement(block.type === "numbered" ? "ol" : "ul");
      list.className = `norse-procs-list ${block.type === "numbered" ? "is-numbered" : ""}`.trim();
      block.items.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.append(item);
      });
      section.append(list);
      return;
    }

    if (block.type === "mnemonic") {
      section.append(createNorseMnemonic(block));
      return;
    }

    if (block.type === "table") {
      section.append(createNorseProcsTable(block));
    }
  });

  appendSection();
  contentEl.append(panel);
}

function createNorseProcsSection(headingText = "") {
  const section = document.createElement("section");
  section.className = "norse-procs-section";
  if (headingText) {
    const heading = document.createElement("h3");
    heading.textContent = headingText;
    section.append(heading);
  }
  return section;
}

function createNorseProcsTable(block) {
  const wrapper = document.createElement("div");
  wrapper.className = "norse-procs-table-wrap";
  const table = document.createElement("table");
  table.className = "norse-procs-table";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  block.headers.forEach((header) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = header;
    headerRow.append(cell);
  });
  thead.append(headerRow);
  table.append(thead);

  const tbody = document.createElement("tbody");
  block.rows.forEach((row) => {
    const bodyRow = document.createElement("tr");
    row.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value || "";
      bodyRow.append(cell);
    });
    tbody.append(bodyRow);
  });
  table.append(tbody);
  wrapper.append(table);
  return wrapper;
}

function createNorseMnemonic(block) {
  const wrapper = document.createElement("section");
  wrapper.className = "norse-mnemonic";

  const intro = document.createElement("p");
  intro.className = "norse-mnemonic-intro";
  intro.textContent = block.intro;
  wrapper.append(intro);

  const list = document.createElement("ul");
  list.className = "norse-mnemonic-list";
  block.steps.forEach((step) => {
    const item = document.createElement("li");
    item.className = `norse-mnemonic-step ${step.letter ? "is-mnemonic" : "is-additional"}`;

    const marker = document.createElement(step.letter ? "strong" : "span");
    marker.className = "norse-mnemonic-marker";
    marker.textContent = step.letter || step.label;

    const text = document.createElement("span");
    text.className = "norse-mnemonic-text";
    text.textContent = step.text;

    item.append(marker, text);
    list.append(item);
  });
  wrapper.append(list);

  return wrapper;
}

function createRelatedProcedureLinks(stage) {
  const groups = [
    { mode: "normal", title: "Normal Procedures" },
    { mode: "scanFlows", title: "Scan Flows" }
  ];
  const related = document.createElement("section");
  related.className = "related-procedure-links";

  const heading = document.createElement("h3");
  heading.textContent = "Related Procedures";
  related.append(heading);

  const groupGrid = document.createElement("div");
  groupGrid.className = "related-procedure-link-groups";

  groups.forEach((group) => {
    const targets = (stage.relatedLinks || [])
      .filter((link) => link.mode === group.mode)
      .map((link) => ({ link, target: getProcedureStage(link.mode, link.stageId) }))
      .filter(({ target }) => target);

    if (!targets.length) return;

    const groupEl = document.createElement("section");
    groupEl.className = "related-procedure-link-group";

    const title = document.createElement("h4");
    title.textContent = group.title;
    groupEl.append(title);

    const list = document.createElement("ul");
    list.className = "related-procedure-link-list";
    targets.forEach(({ link, target }) => {
      const item = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.className = "related-procedure-link";
      anchor.href = procedureRouteHash({ mode: link.mode, stageId: link.stageId });
      anchor.textContent = target.title;
      anchor.setAttribute("aria-label", `Open ${group.title}: ${target.title}`);
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        openRelatedProcedure(link);
      });
      item.append(anchor);
      list.append(item);
    });
    groupEl.append(list);
    groupGrid.append(groupEl);
  });

  if (!groupGrid.children.length) return null;
  related.append(groupGrid);
  return related;
}

function openScanFlowDetail(stage, section, item) {
  const detail = getScanFlowDetail(item.detail);
  openReferenceDialog([{
    title: `${section.role}: ${item.text}`,
    citation: detail.citation,
    bullets: [
      `Scan flow source: ${stage.citation}`,
      ...detail.bullets
    ],
    images: detail.images || []
  }], `${stage.title} - ${item.text}`, "FCOM / FCTM Expansion");
}

function getScanFlowDetail(key) {
  const fallback = window.SCAN_FLOW_DETAILS?.default || {
    citation: "Norse Scan Flows v1.2; Norse FCOM/FCTM references not mapped.",
    bullets: ["No expanded source mapping has been added for this item yet."]
  };
  return window.SCAN_FLOW_DETAILS?.[key] || fallback;
}

function renderCalloutsStage(stage) {
  const panel = document.createElement("section");
  panel.className = "callouts-panel";

  if (stage.note) {
    const note = document.createElement("p");
    note.className = "callouts-note";
    note.textContent = stage.note;
    panel.append(note);
  }

  if (stage.rows?.length) {
    const table = document.createElement("table");
    table.className = "callouts-table";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Condition / Location", "Callout", "Speaker", "Source"].forEach((label) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = label;
      headerRow.append(th);
    });
    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement("tbody");
    stage.rows.forEach((row) => {
      const tr = document.createElement("tr");
      [row.condition, row.callout, row.speaker, row.source].forEach((value, index) => {
        const cell = document.createElement("td");
        if (index === 1) cell.className = "callout-phrase";
        cell.textContent = value || "";
        tr.append(cell);
      });
      tbody.append(tr);
    });
    table.append(tbody);
    panel.append(table);
  }

  if (stage.footer) {
    const footer = document.createElement("p");
    footer.className = "citation";
    footer.textContent = stage.footer;
    panel.append(footer);
  }

  contentEl.append(panel);
}

function renderMemoryIntroStage(stage) {
  const panel = document.createElement("section");
  panel.className = "memory-panel memory-intro";

  const notice = document.createElement("p");
  notice.className = "memory-alert";
  notice.textContent = stage.notice;
  panel.append(notice);

  const source = document.createElement("p");
  source.className = "citation memory-source";
  source.textContent = `Source: ${stage.citation}`;
  panel.append(source);

  contentEl.append(panel);
}

function renderMemoryStage(stage) {
  const panel = document.createElement("section");
  panel.className = "memory-panel";

  const alert = document.createElement("p");
  alert.className = "memory-alert";
  alert.textContent = "Perform these memory actions before using the QRH or EICAS checklist.";
  panel.append(alert);

  if (stage.condition) {
    const condition = document.createElement("p");
    condition.className = "memory-condition";
    condition.textContent = `Condition: ${stage.condition}`;
    panel.append(condition);
  }

  const list = document.createElement("ol");
  list.className = "memory-actions";
  stage.actions.forEach((action, index) => {
    const item = document.createElement("li");
    item.className = "memory-action";

    const key = storageKey(stage, index);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = key;
    input.checked = localStorage.getItem(key) === "1";
    input.addEventListener("change", () => {
      localStorage.setItem(key, input.checked ? "1" : "0");
      refreshCompletionBadges();
      updateProgress();
    });

    const label = document.createElement("label");
    label.htmlFor = key;
    label.textContent = action;

    item.append(input, label);
    list.append(item);
  });
  panel.append(list);

  if (stage.afterMemory?.length) {
    const followUp = document.createElement("section");
    followUp.className = "memory-follow-up";
    const heading = document.createElement("h3");
    heading.textContent = "After Memory Actions";
    followUp.append(heading);
    stage.afterMemory.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      followUp.append(paragraph);
    });
    panel.append(followUp);
  }

  const source = document.createElement("p");
  source.className = "citation memory-source";
  source.textContent = `Source: ${stage.citation}`;
  panel.append(source);

  contentEl.append(panel);
}

function createGroup(title) {
  const section = document.createElement("section");
  section.className = "procedure-group";
  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading);
  return section;
}

function groupHasContent(group) {
  return group.children.length > 1;
}

function createCheckItem(stage, index, text) {
  const key = storageKey(stage, index);
  const guidance = getItemGuidance(stage, text);
  const norse = getItemNorseDifferences(stage, text);
  const li = document.createElement("li");
  li.className = "check-item";
  if (guidance.length || norse.length) li.classList.add("has-chips");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = key;
  input.checked = localStorage.getItem(key) === "1";
  input.addEventListener("change", () => {
    localStorage.setItem(key, input.checked ? "1" : "0");
    refreshCompletionBadges();
    updateProgress();
  });

  const label = document.createElement("label");
  label.htmlFor = key;
  label.textContent = text;

  li.append(input, label);
  if (guidance.length) {
    li.append(createReferenceChip({
      className: "fctm-chip",
      label: "FCTM",
      title: "Open FCTM guidance for this item",
      ariaLabel: `Open FCTM guidance for ${text}`,
      onClick: () => openReferenceDialog(guidance, "Item guidance", "FCTM Guidance")
    }));
  }
  if (norse.length) {
    li.append(createReferenceChip({
      className: "norse-chip",
      label: "Norse",
      title: "Open Norse procedure difference for this item",
      ariaLabel: `Open Norse procedure difference for ${text}`,
      onClick: () => openReferenceDialog(norse, "Norse difference", "Norse Difference")
    }));
  }
  return li;
}

function createReferenceChip({ className, label, title, ariaLabel, onClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.title = title;
  button.setAttribute("aria-label", ariaLabel);
  button.addEventListener("click", onClick);
  return button;
}

function renderVisuals(stage) {
  visualsEl.innerHTML = "";
  if (stage.type === "memory") {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "Memory actions are shown in the main panel. Use the cited QRH checklist after the memory actions are complete.";
    visualsEl.append(note);
    return;
  }
  if (stage.mode === "sessions") {
    renderSessionReferencePanel(stage);
    return;
  }
  if (stage.mode === "techQuiz") {
    renderTechQuizReferencePanel(stage);
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "visuals-grid";
  const matches = visualLibrary.filter((entry) => entry.matcher.test(stage.rawTitle) || entry.matcher.test(stage.title));
  const fctmImages = getStageGuidance(stage, { includeItemMatches: true }).flatMap((entry) => entry.images || []);
  const images = uniqueImages([...(stage.images || []), ...matches.flatMap((entry) => entry.images), ...fctmImages]);

  if (!images.length) {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "No extracted FCOM/FCTM diagram is linked to this stage.";
    visualsEl.append(note);
    return;
  }

  images.forEach((image) => {
    const figure = document.createElement("figure");
    figure.className = "visual-card";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "visual-open";
    button.setAttribute("aria-label", `Open larger view of ${image.alt}`);
    button.addEventListener("click", () => openImageDialog(image));
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    button.append(img);
    const caption = document.createElement("figcaption");
    caption.textContent = image.caption;
    figure.append(button, caption);
    wrapper.append(figure);
  });
  visualsEl.append(wrapper);
}

function renderSessionReferencePanel(stage) {
  const panel = document.createElement("section");
  panel.className = "session-reference-panel";

  const heading = document.createElement("h3");
  heading.textContent = "Quick References";
  panel.append(heading);

  if (stage.type === "studyFocus") {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "Open an FFS session to see its mapped manual-reference pages.";
    panel.append(note);
    visualsEl.append(panel);
    return;
  }

  const references = getSessionReferences(stage);
  if (!references.length) {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "No session-specific manual references are mapped yet.";
    panel.append(note);
    visualsEl.append(panel);
    return;
  }

  const list = document.createElement("div");
  list.className = "session-reference-list";
  references.forEach((reference) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "session-reference-link";
    button.addEventListener("click", () => openReferenceDialog([reference], reference.title, reference.sourceLabel || "Manual Reference"));

    const title = document.createElement("span");
    title.className = "session-reference-title";
    title.textContent = reference.title;

    const source = document.createElement("span");
    source.className = "session-reference-source";
    source.textContent = reference.sourceLabel || "Manual Reference";

    button.append(title, source);
    list.append(button);
  });
  panel.append(list);
  visualsEl.append(panel);
}

function renderTechQuizReferencePanel(stage) {
  const panel = document.createElement("section");
  panel.className = "session-reference-panel";

  const heading = document.createElement("h3");
  heading.textContent = "Question Bank";
  panel.append(heading);

  const total = stage.questions?.length || 0;
  const corrected = stage.questions?.filter((question) => question.bankAnswer !== question.correctAnswer).length || 0;
  const flagged = stage.questions?.filter((question) => question.status && question.status !== "confirmed").length || 0;
  [
    `${total} questions from the parsed QB 101 787 1 bank.`,
    `${corrected} original bank answers are corrected from the audit.`,
    `${flagged} questions carry wording/source/audit notes.`,
    "Question references appear after an answer is selected."
  ].forEach((text) => {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = text;
    panel.append(note);
  });

  visualsEl.append(panel);
}

function getSessionReferences(stage) {
  const keys = sessionReferences[stage.id] || [];
  return keys.map((key) => sessionReferenceDetails[key]).filter(Boolean);
}

function toggleNav() {
  state.navCollapsed = !state.navCollapsed;
  localStorage.setItem("b787-procedures:nav-collapsed", state.navCollapsed ? "1" : "0");
  applyNavState();
}

function applyNavState() {
  appShellEl.classList.toggle("nav-collapsed", state.navCollapsed);
  navToggleButton.textContent = state.navCollapsed ? "Expand" : "Collapse";
  navToggleButton.setAttribute("aria-expanded", state.navCollapsed ? "false" : "true");
  navToggleButton.setAttribute("aria-label", state.navCollapsed ? "Expand stage menu" : "Collapse stage menu");
}

function renderStageGuidanceLinks(stage) {
  fctmStageLinksEl.innerHTML = "";
  const guidanceEntries = getStageGuidance(stage);
  const norseEntries = getStageNorseDifferences(stage);

  if (guidanceEntries.length) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "fctm-stage-button";
    button.textContent = guidanceEntries.length === 1 ? "FCTM note" : `FCTM notes (${guidanceEntries.length})`;
    button.addEventListener("click", () => openReferenceDialog(guidanceEntries, `${stage.title} guidance`, "FCTM Guidance"));
    fctmStageLinksEl.append(button);
  }

  if (norseEntries.length) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "norse-stage-button";
    button.textContent = norseEntries.length === 1 ? "Norse difference" : `Norse differences (${norseEntries.length})`;
    button.addEventListener("click", () => openReferenceDialog(norseEntries, `${stage.title} Norse differences`, "Norse Difference"));
    fctmStageLinksEl.append(button);
  }
}

function getStageGuidance(stage, options = {}) {
  return fctmGuidance.filter((entry) => {
    if (!entry.stageLevel && !options.includeItemMatches) return false;
    return matchesMode(entry, stage) && matchesStage(entry, stage);
  });
}

function getItemGuidance(stage, text) {
  return fctmGuidance.filter((entry) => {
    if (!entry.itemPatterns?.length) return false;
    return matchesMode(entry, stage) && matchesStage(entry, stage) && entry.itemPatterns.some((pattern) => patternMatches(pattern, text));
  });
}

function getStageNorseDifferences(stage, options = {}) {
  return norseDifferences.filter((entry) => {
    if (!entry.stageLevel && !options.includeItemMatches) return false;
    return matchesMode(entry, stage) && matchesStage(entry, stage);
  });
}

function getItemNorseDifferences(stage, text) {
  return norseDifferences.filter((entry) => {
    if (!entry.itemPatterns?.length) return false;
    return matchesMode(entry, stage) && matchesStage(entry, stage) && entry.itemPatterns.some((pattern) => patternMatches(pattern, text));
  });
}

function matchesMode(entry, stage) {
  return !entry.modes?.length || entry.modes.includes(stage.mode);
}

function matchesStage(entry, stage) {
  if (!entry.stages?.length) return true;
  const value = `${stage.rawTitle} ${stage.title} ${stage.id}`;
  return entry.stages.some((pattern) => patternMatches(pattern, value));
}

function patternMatches(pattern, value) {
  if (pattern instanceof RegExp) return pattern.test(value);
  return value.toLowerCase().includes(String(pattern).toLowerCase());
}

function uniqueImages(images) {
  const seen = new Set();
  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

function openReferenceDialog(entries, title, sourceLabel) {
  fctmDialogSourceEl.textContent = sourceLabel;
  fctmDialogTitleEl.textContent = title;
  fctmDialogContentEl.innerHTML = "";

  entries.forEach((entry) => {
    const section = document.createElement("section");
    section.className = "fctm-note";

    const heading = document.createElement("h3");
    heading.textContent = entry.title;
    section.append(heading);

    const citation = document.createElement("p");
    citation.className = "citation";
    citation.textContent = entry.citation;
    section.append(citation);

    if (entry.images?.length) {
      const imageGrid = document.createElement("div");
      imageGrid.className = "fctm-note-images";
      uniqueImages(entry.images).forEach((image) => {
        const figure = document.createElement("figure");
        figure.className = "visual-card";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "visual-open";
        button.setAttribute("aria-label", `Open larger view of ${image.alt}`);
        button.addEventListener("click", () => openImageDialog(image));
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        button.append(img);
        const caption = document.createElement("figcaption");
        caption.textContent = image.caption;
        figure.append(button, caption);
        imageGrid.append(figure);
      });
      section.append(imageGrid);
    }

    if (entry.bullets?.length) {
      const list = document.createElement("ul");
      entry.bullets.forEach((bullet) => {
        const item = document.createElement("li");
        item.textContent = bullet;
        list.append(item);
      });
      section.append(list);
    }

    fctmDialogContentEl.append(section);
  });

  if (typeof fctmDialog.showModal === "function") {
    fctmDialog.showModal();
  } else {
    fctmDialog.setAttribute("open", "");
  }
}

function closeFctmDialog() {
  if (typeof fctmDialog.close === "function") {
    fctmDialog.close();
  } else {
    fctmDialog.removeAttribute("open");
  }
}

function openFctmDialog(entries, title) {
  openReferenceDialog(entries, title, "FCTM Guidance");
}

function openImageDialog(image) {
  imageDialogTitleEl.textContent = image.alt;
  imageDialogImgEl.src = image.src;
  imageDialogImgEl.alt = image.alt;
  imageDialogCaptionEl.textContent = image.caption;

  if (typeof imageDialog.showModal === "function") {
    imageDialog.showModal();
  } else {
    imageDialog.setAttribute("open", "");
  }
}

function closeImageDialog() {
  if (typeof imageDialog.close === "function") {
    imageDialog.close();
  } else {
    imageDialog.removeAttribute("open");
  }
}

function updateNavState() {
  const returnStage = state.returnRoute && getProcedureStage(state.returnRoute.mode, state.returnRoute.stageId);
  const returnLabel = returnStage ? `Back to ${returnStage.title}` : "Previous stage";
  prevButton.disabled = !returnStage && state.current === 0;
  prevButton.textContent = returnStage ? "Back" : "Prev";
  prevButton.setAttribute("aria-label", returnLabel);
  prevButton.title = returnLabel;
  nextButton.disabled = state.current === state.stages.length - 1;
  counterEl.textContent = `Stage ${state.current + 1} of ${state.stages.length}`;
}

function updateProgress() {
  const stage = state.stages[state.current];
  const completion = stageCompletion(stage);
  progressEl.textContent = `${completion.percent}%`;
}

function refreshCompletionBadges() {
  [...tabsEl.children].forEach((tab, index) => {
    const completion = stageCompletion(state.stages[index]);
    const badge = tab.querySelector(".tab-complete");
    if (!badge) return;
    badge.dataset.state = completion.complete ? "done" : "open";
    badge.textContent = completion.complete ? "Done" : "-";
  });
}

function stageCompletion(stage) {
  if (stage.mode === "scanFlows") return { total: 0, checked: 0, percent: 100, complete: true };
  if (stage.mode === "callouts") return { total: 0, checked: 0, percent: 100, complete: true };
  if (stage.mode === "limitations") return { total: 0, checked: 0, percent: 100, complete: true };
  if (stage.mode === "sessions") return { total: 0, checked: 0, percent: 100, complete: true };
  if (stage.mode === "techQuiz") {
    const total = stage.questions?.length || 0;
    const checked = stage.questions?.filter((question) => localStorage.getItem(quizAnswerKey(question))).length || 0;
    return {
      total,
      checked,
      percent: total ? Math.round((checked / total) * 100) : 100,
      complete: total > 0 && checked === total
    };
  }
  const total = countChecklistItems(stage.body);
  if (!total) return { total, checked: 0, percent: 100, complete: true };
  let checked = 0;
  for (let index = 0; index < total; index += 1) {
    if (localStorage.getItem(storageKey(stage, index)) === "1") checked += 1;
  }
  return {
    total,
    checked,
    percent: Math.round((checked / total) * 100),
    complete: checked === total
  };
}

function countChecklistItems(body) {
  return body.split(/\r?\n/).filter((line) => /^\s*-\s+/.test(line)).length;
}

function storageKey(stage, index) {
  return `b787-procedures:${stage.mode}:${stage.id}:${index}`;
}

function resetAllProgress() {
  if (state.activeMode === "techQuiz") {
    getTechQuizQuestions(state.stages[state.current]).forEach((question) => localStorage.removeItem(quizAnswerKey(question)));
    selectStage(state.current);
    refreshCompletionBadges();
    return;
  }

  state.stages.forEach((stage) => {
    const total = countChecklistItems(stage.body);
    for (let index = 0; index < total; index += 1) {
      localStorage.removeItem(storageKey(stage, index));
    }
  });
  selectStage(state.current);
  refreshCompletionBadges();
}
