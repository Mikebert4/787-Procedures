const sourceFile = "source.md";

const visualLibrary = [
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
  }
];

const state = {
  stages: [],
  current: 0
};

const tabsEl = document.getElementById("tabs");
const titleEl = document.getElementById("stage-title");
const labelEl = document.getElementById("stage-label");
const citationEl = document.getElementById("stage-citation");
const contentEl = document.getElementById("stage-content");
const visualsEl = document.getElementById("visuals");
const counterEl = document.getElementById("stage-counter");
const progressEl = document.getElementById("stage-progress");
const prevButton = document.getElementById("prev-stage");
const nextButton = document.getElementById("next-stage");
const resetAllButton = document.getElementById("reset-all");

init();

async function init() {
  try {
    const markdown = window.PROFILE_MARKDOWN || await loadMarkdown();
    state.stages = parseMarkdown(markdown);
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

function parseMarkdown(markdown) {
  const operatingFrame = extractBetween(markdown, "## Operating Frame", "## End-to-End Normal Procedures Flow");
  const stageMatches = [...markdown.matchAll(/^###\s+(.+)$/gm)];
  const stages = [];

  if (operatingFrame) {
    stages.push({
      id: "operating-frame",
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
    const body = markdown.slice(match.index + match[0].length, next ? next.index : markdown.indexOf("## Quick Source Map")).trim();
    const citation = extractCitation(body);
    stages.push({
      id: slugify(rawTitle),
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

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function bindControls() {
  prevButton.addEventListener("click", () => selectStage(Math.max(0, state.current - 1)));
  nextButton.addEventListener("click", () => selectStage(Math.min(state.stages.length - 1, state.current + 1)));
  resetAllButton.addEventListener("click", resetAllProgress);
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
    number.textContent = index === 0 ? "i" : String(index);

    const title = document.createElement("span");
    title.className = "tab-title";
    title.textContent = stage.title;

    const complete = document.createElement("span");
    complete.className = "tab-complete";
    complete.dataset.state = stageCompletion(stage).complete ? "done" : "open";
    complete.textContent = stageCompletion(stage).complete ? "✓" : "–";

    button.append(number, title, complete);
    tabsEl.append(button);
  });
}

function selectStage(index) {
  state.current = index;
  const stage = state.stages[index];
  updateTabSelection();
  labelEl.textContent = index === 0 ? "Profile" : `Stage ${index}`;
  titleEl.textContent = stage.title;
  citationEl.textContent = stage.citation || "Source citations are shown in the procedure text.";
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
  const lines = stage.body.split(/\r?\n/);
  let group = createGroup("Procedure");
  let list = null;
  let itemIndex = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || /^References?:/.test(line)) continue;

    if (/^[A-Z][A-Za-z0-9 /()-]+:$/.test(line) || /^(Flow|Timing|Prerequisite|Notes|Inspection route|General inspection standard|Flap retraction schedule|Climb\/cruise flow):$/.test(line)) {
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
    paragraph.textContent = line;
    group.append(paragraph);
  }

  if (groupHasContent(group)) contentEl.append(group);
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
  const li = document.createElement("li");
  li.className = "check-item";

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
  return li;
}

function renderVisuals(stage) {
  visualsEl.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "visuals-grid";
  const matches = visualLibrary.filter((entry) => entry.matcher.test(stage.rawTitle) || entry.matcher.test(stage.title));
  const images = matches.flatMap((entry) => entry.images);

  if (!images.length) {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "No extracted FCOM diagram is linked to this stage.";
    visualsEl.append(note);
    return;
  }

  images.forEach((image) => {
    const figure = document.createElement("figure");
    figure.className = "visual-card";
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    const caption = document.createElement("figcaption");
    caption.textContent = image.caption;
    figure.append(img, caption);
    wrapper.append(figure);
  });
  visualsEl.append(wrapper);
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
    badge.textContent = completion.complete ? "✓" : "–";
  });
}

function stageCompletion(stage) {
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
  return `b787-np:${stage.id}:${index}`;
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
