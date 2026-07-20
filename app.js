const sourceFile = "source.md";

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
  activeMode: "normal",
  stages: [],
  current: 0,
  navCollapsed: localStorage.getItem("b787-procedures:nav-collapsed") === "1"
};

const fctmGuidance = window.FCTM_GUIDANCE || [];
const norseDifferences = window.NORSE_DIFFERENCES || [];
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
const modeButtons = {
  normal: document.getElementById("mode-normal"),
  nonNormal: document.getElementById("mode-non-normal"),
  memory: document.getElementById("mode-memory"),
  limitations: document.getElementById("mode-limitations"),
  callouts: document.getElementById("mode-callouts")
};

init();

async function init() {
  try {
    const markdown = window.PROFILE_MARKDOWN || await loadMarkdown();
    state.profiles.normal = parseMarkdown(markdown, "normal");
    state.profiles.nonNormal = parseMarkdown(window.NON_NORMAL_MARKDOWN || "", "nonNormal");
    state.profiles.memory = parseMemoryItems(window.MEMORY_ITEMS || []);
    state.profiles.limitations = parseMarkdown(window.LIMITATIONS_MARKDOWN || "", "limitations");
    state.profiles.callouts = parseCalloutItems(window.CALLOUTS || []);
    state.stages = state.profiles[state.activeMode];
    applyNavState();
    renderTabs();
    selectStage(0);
    bindControls();
  } catch (error) {
    contentEl.innerHTML = "";
    const message = document.createElement("p");
    message.className = "notice";
    message.textContent = "The procedure source could not be loaded from the local server.";
    contentEl.append(message);
  }
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
  prevButton.addEventListener("click", () => selectStage(Math.max(0, state.current - 1)));
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
  modeButtons.normal.addEventListener("click", () => setMode("normal"));
  modeButtons.nonNormal.addEventListener("click", () => setMode("nonNormal"));
  modeButtons.memory.addEventListener("click", () => setMode("memory"));
  modeButtons.limitations.addEventListener("click", () => setMode("limitations"));
  modeButtons.callouts.addEventListener("click", () => setMode("callouts"));
}

function setMode(mode) {
  if (state.activeMode === mode) return;
  state.activeMode = mode;
  state.stages = state.profiles[mode];
  Object.entries(modeButtons).forEach(([key, button]) => {
    button.setAttribute("aria-pressed", key === mode ? "true" : "false");
  });
  renderTabs();
  selectStage(0);
}

function renderTabs() {
  tabsEl.innerHTML = "";
  state.stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
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

    const complete = document.createElement("span");
    complete.className = "tab-complete";
    complete.dataset.state = stageCompletion(stage).complete ? "done" : "open";
    complete.textContent = stageCompletion(stage).complete ? "Done" : "-";

    button.append(number, title, complete);
    tabsEl.append(button);
  });
}

function selectStage(index) {
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
    type: "memory",
    mode: "memory",
    rawTitle: item.title,
    title: item.title,
    body: item.actions.map((action) => `- ${action}`).join("\n"),
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

function stageLabel(stage, index) {
  if (state.activeMode === "memory") return `Memory items - Item ${index + 1}`;
  if (state.activeMode === "limitations") return `Limitations - Section ${index + 1}`;
  if (state.activeMode === "callouts") return `Callouts - Phase ${index + 1}`;
  return `${state.activeMode === "normal" ? "Normal" : "Non-Normal"} - ${stage.id === "operating-frame" ? "Profile" : `Stage ${stageNumber(index)}`}`;
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

    const list = document.createElement("ul");
    entry.bullets.forEach((bullet) => {
      const item = document.createElement("li");
      item.textContent = bullet;
      list.append(item);
    });
    section.append(list);

    if (entry.images?.length) {
      const imageGrid = document.createElement("div");
      imageGrid.className = "fctm-note-images";
      uniqueImages(entry.images).forEach((image) => {
        const figure = document.createElement("figure");
        figure.className = "visual-card";
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        const caption = document.createElement("figcaption");
        caption.textContent = image.caption;
        figure.append(img, caption);
        imageGrid.append(figure);
      });
      section.append(imageGrid);
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
  prevButton.disabled = state.current === 0;
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
    badge.dataset.state = completion.complete ? "done" : "open";
    badge.textContent = completion.complete ? "Done" : "-";
  });
}

function stageCompletion(stage) {
  if (stage.mode === "callouts") return { total: 0, checked: 0, percent: 100, complete: true };
  if (stage.mode === "limitations") return { total: 0, checked: 0, percent: 100, complete: true };
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
  state.stages.forEach((stage) => {
    const total = countChecklistItems(stage.body);
    for (let index = 0; index < total; index += 1) {
      localStorage.removeItem(storageKey(stage, index));
    }
  });
  selectStage(state.current);
  refreshCompletionBadges();
}
