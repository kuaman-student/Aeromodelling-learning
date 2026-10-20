(() => {
  "use strict";

  const modules = window.CURRICULUM;
  const app = document.getElementById("app");
  const sidebar = document.getElementById("lesson-sidebar");
  const lessonList = document.getElementById("lesson-list");
  const searchInput = document.getElementById("site-search");
  const clearSearchButton = document.getElementById("clear-search");
  const toastRegion = document.getElementById("toast-region");
  const storageKey = "airframe-academy-v1";
  const themes = ["light", "dark", "sky", "sunset", "forest"];
  let searchTerm = "";
  let quizAnswers = {};
  let quizResultVisible = false;
  let quizFeedback = null;
  let crossQuiz = null;

  const initialState = {
    completed: [],
    bookmarks: [],
    quizBest: {},
    quizPoints: 0,
    points: 0,
    checks: {},
    theme: "light"
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (!saved || typeof saved !== "object") return { ...initialState };
      return {
        ...initialState,
        completed: Array.isArray(saved.completed) ? saved.completed.filter((id) => modules.some((module) => module.id === id)) : [],
        bookmarks: Array.isArray(saved.bookmarks) ? saved.bookmarks.filter((id) => modules.some((module) => module.id === id)) : [],
        quizBest: saved.quizBest && typeof saved.quizBest === "object" ? saved.quizBest : {},
        quizPoints: Number.isFinite(saved.quizPoints) ? saved.quizPoints : 0,
        points: Number.isFinite(saved.points) ? saved.points : 0,
        checks: saved.checks && typeof saved.checks === "object" ? saved.checks : {},
        theme: themes.includes(saved.theme) ? saved.theme : "light"
      };
    } catch (error) {
      console.warn("Learning progress could not be restored from local storage.", error);
      return { ...initialState };
    }
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.warn("Learning progress could not be saved to local storage.", error);
      notify("Progress could not be saved in this browser. Check its storage settings.");
    }
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function currentRoute() {
    const hash = decodeURIComponent(location.hash.slice(1) || "home");
    if (hash.startsWith("lesson/")) {
      const id = hash.slice("lesson/".length);
      return modules.some((module) => module.id === id) ? { view: "lesson", id } : { view: "home" };
    }
    return ["home", "quiz", "how-to-use", "design-lab", "field-guide", "sources"].includes(hash) ? { view: hash } : { view: "home" };
  }

  function moduleIndex(id) {
    return modules.findIndex((module) => module.id === id);
  }

  function getSections(module) {
    const additionalSections = window.DEEP_DIVES[module.id] || [];
    return [...module.sections, ...additionalSections];
  }

  function getQuiz(module) {
    const additionalQuestions = window.EXTRA_QUIZZES[module.id] || [];
    return [...module.quiz, ...additionalQuestions];
  }

  function getReadingDuration(module) {
    const sections = getSections(module);
    const lessonText = sections.flatMap((section) => [
      section.title,
      ...(section.paragraphs || []),
      ...(section.bullets || []),
      section.callout?.text || "",
      section.formula || ""
    ]).join(" ");
    const wordCount = lessonText.match(/\S+/g)?.length || 0;
    return Math.max(10, Math.ceil(wordCount / 180) + Math.ceil(getQuiz(module).length * 0.75));
  }

  function getCourseLessonSectionCount() {
    return modules.reduce((count, module) => count + getSections(module).length, 0);
  }

  function getCourseQuestionCount() {
    return modules.reduce((count, module) => count + getQuiz(module).length, 0);
  }

  function moduleMatches(module, query) {
    if (!query) return true;
    const sections = getSections(module);
    const haystack = [
      module.title, module.shortTitle, module.category, module.summary,
      ...module.outcomes,
      ...sections.flatMap((section) => [
        section.title, ...(section.paragraphs || []), ...(section.bullets || []),
        section.callout && section.callout.text, section.formula
      ].filter(Boolean))
    ].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  function updateProgressUI() {
    const count = state.completed.length;
    const percent = Math.round((count / modules.length) * 100);
    const bar = document.getElementById("progress-bar");
    const label = document.getElementById("progress-label");
    const progressTrack = document.querySelector(".progress-track");
    const points = state.points + state.quizPoints;
    const xpLabel = document.getElementById("xp-label");
    const levelLabel = document.getElementById("level-label");
    if (bar) bar.style.width = `${percent}%`;
    if (label) label.textContent = `${count} / ${modules.length}`;
    if (progressTrack) {
      progressTrack.setAttribute("aria-valuemax", String(modules.length));
      progressTrack.setAttribute("aria-valuenow", String(count));
    }
    if (xpLabel) xpLabel.textContent = `${points} flight points`;
    if (levelLabel) {
      levelLabel.textContent = points >= 500 ? "FLIGHT PRO" : points >= 180 ? "BUILDER" : points >= 60 ? "HANGAR CREW" : "ROOKIE";
    }
  }

  function renderSidebar() {
    const route = currentRoute();
    const visibleModules = modules.filter((module) => moduleMatches(module, searchTerm));
    if (!visibleModules.length) {
      lessonList.innerHTML = '<div class="empty-search">No lessons match that search. Try another term.</div>';
    } else {
      lessonList.innerHTML = visibleModules.map((module) => {
        const index = moduleIndex(module.id);
        const isCurrent = route.view === "lesson" && route.id === module.id;
        const isDone = state.completed.includes(module.id);
        return `<button class="lesson-nav-item${isCurrent ? " is-current" : ""}${isDone ? " is-done" : ""}" type="button" data-lesson="${escapeHTML(module.id)}" ${isCurrent ? 'aria-current="page"' : ""}>
          <span class="lesson-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="lesson-nav-copy"><span class="lesson-nav-category">${escapeHTML(module.category)}</span><span class="lesson-nav-title">${escapeHTML(module.shortTitle)}</span></span>
          <span class="lesson-status" aria-label="${isDone ? "Completed" : "Not completed"}">${isDone ? "✓" : "·"}</span>
        </button>`;
      }).join("");
    }
    clearSearchButton.hidden = !searchTerm;
    document.querySelectorAll(".top-link").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.view === route.view || (route.view === "lesson" && link.dataset.view === "home"));
    });
    updateProgressUI();
  }

  function notify(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
  }

  function renderHome() {
    const completedCount = state.completed.length;
    const nextModule = modules.find((module) => !state.completed.includes(module.id)) || modules[0];
    const visibleModules = modules.filter((module) => moduleMatches(module, searchTerm));
    const courseCards = visibleModules.map((module) => {
      const index = moduleIndex(module.id);
      const isDone = state.completed.includes(module.id);
      return `<article class="module-card${isDone ? " is-done" : ""}" role="link" tabindex="0" data-lesson="${escapeHTML(module.id)}" aria-label="Open ${escapeHTML(module.title)}">
        <div class="module-card-top"><span class="module-card-number">MODULE ${String(index + 1).padStart(2, "0")}</span><span class="module-card-status">${isDone ? "✓" : "↗"}</span></div>
        <span class="module-category">${escapeHTML(module.category)}</span>
        <h3>${escapeHTML(module.title)}</h3>
        <p>${escapeHTML(module.summary)}</p>
        <div class="module-card-bottom"><span>${getReadingDuration(module)} min learning</span><span>${isDone ? "Completed" : "Open lesson →"}</span></div>
      </article>`;
    }).join("");

    app.innerHTML = `<section class="home-hero">
      <div class="hero-copy">
        <div class="hero-kicker">A PRACTICAL FLIGHT SCHOOL</div>
        <h1>Understand the air.<br><span>Build to fly.</span></h1>
        <p>A complete, hands-on guide to model aircraft: from first principles and airframe design to radio setup, safe field practice and competition projects.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#lesson/${escapeHTML(nextModule.id)}">${completedCount ? "Continue learning" : "Start the course"} <span aria-hidden="true">→</span></a>
          <a class="button button-ghost" href="#design-lab">Open the design lab</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-sun"></div>
        <div class="plane-mark">✈</div>
        <div class="flight-path"></div>
        <div class="hero-spec">DESIGN · BUILD · TEST · LEARN</div>
      </div>
    </section>
    <section class="stats-row" aria-label="Course contents">
      <div class="stat-card"><span class="stat-icon">01</span><div class="stat-copy"><strong>${modules.length}</strong><span>full course chapters</span></div></div>
      <div class="stat-card"><span class="stat-icon">§</span><div class="stat-copy"><strong>${getCourseLessonSectionCount()}</strong><span>detailed lesson sections</span></div></div>
      <div class="stat-card"><span class="stat-icon">Q</span><div class="stat-copy"><strong>${getCourseQuestionCount()}</strong><span>review questions · 10 each</span></div></div>
    </section>
    <section class="content-section">
      <div class="section-heading-row">
        <div><div class="eyebrow">YOUR ROADMAP</div><h2>${searchTerm ? "Search the course" : "From first principles to the field"}</h2><p>${searchTerm ? `${visibleModules.length} matching module${visibleModules.length === 1 ? "" : "s"}` : "Follow the sequence, or jump to the topic you need today."}</p></div>
        <a class="subtle-link" href="#sources">Explore the source library ↗</a>
      </div>
      ${visibleModules.length ? `<div class="module-grid">${courseCards}</div>` : '<div class="search-empty">No lesson matched your search. Try a different keyword or clear the search box.</div>'}
    </section>
    <section class="home-bottom-grid">
      <article class="feature-panel">
        <div class="eyebrow">DESIGN LAB · QUICK REFERENCE</div>
        <h3>Start with wing loading</h3>
        <p>Compare aircraft mass with wing area before making a flight-speed assumption. Keep your units explicit and use the result as a design clue, not a guarantee.</p>
        <code class="formula-chip">wing loading = mass / wing area</code>
        <div style="margin-top:14px"><a class="button button-secondary button-small" href="#design-lab">Open calculators →</a></div>
      </article>
      <article class="feature-panel">
        <div class="eyebrow">SOURCE LIBRARY</div>
        <h3>Built from your references</h3>
        <p>Lessons synthesize the original 12-chapter site and your design, transmitter and full-size aircraft references.</p>
        <div class="source-mini-list">
          <div class="source-mini-item"><span>✓</span><span>RC design, geometry and stability</span></div>
          <div class="source-mini-item"><span>✓</span><span>Radio setup, operations and safety</span></div>
        </div>
      </article>
    </section>
    <p class="footer-note">Learning aid only. Use manufacturer instructions, current official rules and experienced supervision for real aircraft operation.</p>`;
  }

  function renderVisual(key) {
    const visuals = {
      "build-loop": {
        label: "Engineering learning cycle",
        svg: '<svg viewBox="0 0 720 190" role="img" aria-label="Plan, build, measure, review, then repeat"><defs><marker id="arrow-build" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8z" fill="currentColor"/></marker></defs><g fill="var(--paper-strong)" stroke="var(--blue)" stroke-width="3"><rect x="20" y="62" width="120" height="62" rx="16"/><rect x="168" y="62" width="120" height="62" rx="16"/><rect x="316" y="62" width="120" height="62" rx="16"/><rect x="464" y="62" width="120" height="62" rx="16"/><rect x="612" y="62" width="88" height="62" rx="16"/></g><g fill="var(--ink)" font-size="18" font-weight="700" text-anchor="middle"><text x="80" y="101">Plan</text><text x="228" y="101">Build</text><text x="376" y="101">Measure</text><text x="524" y="101">Review</text><text x="656" y="101">Repeat</text></g><g stroke="var(--orange)" stroke-width="3" marker-end="url(#arrow-build)"><path d="M142 93h19"/><path d="M290 93h19"/><path d="M438 93h19"/><path d="M586 93h19"/></g></svg>'
      },
      "wing-planform": {
        label: "Wing planform measurement diagram",
        svg: '<svg viewBox="0 0 520 250" role="img" aria-label="Plan view of a trapezoid wing, with span, root chord and tip chord marked"><path d="M105 46 415 46 350 204 170 204Z" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="4"/><path d="M105 28h310M105 20v16M415 20v16" stroke="var(--orange)" stroke-width="3"/><path d="M80 46v158M72 46h16M72 204h16" stroke="var(--green)" stroke-width="3"/><path d="M430 46v55M422 46h16M422 101h16" stroke="var(--green)" stroke-width="3"/><g fill="var(--ink)" font-size="17" font-weight="700"><text x="238" y="20">span b</text><text x="30" y="130">root chord cr</text><text x="435" y="82">tip ct</text></g></svg>'
      },
      "control-surfaces": {
        label: "Fixed-wing control-surface axes diagram",
        svg: '<svg viewBox="0 0 600 270" role="img" aria-label="Aircraft plan view showing ailerons on the wing, elevator on the tail and rudder on the fin"><path d="M286 38h28v120l116 40v24l-116-25v38h-28v-38l-116 25v-24l116-40Z" fill="var(--paper-soft)" stroke="var(--blue)" stroke-width="4"/><path d="M183 184h92v22l-92 16Zm142 0h92v38l-92-16Z" fill="var(--orange)" stroke="var(--ink)" stroke-width="2"/><path d="M263 224h74v20h-74Z" fill="var(--green)" stroke="var(--ink)" stroke-width="2"/><path d="M286 38h28v45h-28Z" fill="var(--orange)" stroke="var(--ink)" stroke-width="2"/><g fill="var(--ink)" font-size="16" font-weight="700"><text x="20" y="213">Ailerons</text><text x="235" y="266">Elevator</text><text x="358" y="68">Rudder</text></g></svg>'
      },
      "radio-chain": {
        label: "Radio command and electric power paths",
        svg: '<svg viewBox="0 0 650 245" role="img" aria-label="Separate command path from transmitter through receiver to servo, and power path from battery through ESC to motor"><g fill="var(--paper-strong)" stroke-width="3"><rect x="20" y="34" width="155" height="66" rx="14" stroke="var(--blue)"/><rect x="245" y="34" width="155" height="66" rx="14" stroke="var(--blue)"/><rect x="470" y="34" width="155" height="66" rx="14" stroke="var(--blue)"/><rect x="20" y="144" width="155" height="66" rx="14" stroke="var(--orange)"/><rect x="245" y="144" width="155" height="66" rx="14" stroke="var(--orange)"/><rect x="470" y="144" width="155" height="66" rx="14" stroke="var(--orange)"/></g><g fill="var(--ink)" font-size="18" font-weight="700" text-anchor="middle"><text x="97" y="75">Transmitter</text><text x="322" y="75">Receiver</text><text x="547" y="75">Servo</text><text x="97" y="185">Battery</text><text x="322" y="185">ESC</text><text x="547" y="185">Motor</text></g><g stroke="var(--blue)" stroke-width="3" marker-end="url(#arrow-build)"><path d="M178 67h61"/><path d="M403 67h61"/></g><g stroke="var(--orange)" stroke-width="3" marker-end="url(#arrow-build)"><path d="M178 177h61"/><path d="M403 177h61"/></g></svg>'
      },
      "field-layout": {
        label: "Example flight-area briefing diagram",
        svg: '<svg viewBox="0 0 600 250" role="img" aria-label="Field briefing sketch showing pilot line, flight area, landing direction and spectator exclusion area"><rect x="22" y="22" width="556" height="205" rx="18" fill="var(--green-soft)" stroke="var(--green)" stroke-width="3"/><rect x="42" y="42" width="148" height="165" rx="12" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="3"/><path d="M205 50h350v150H205Z" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="3"/><path d="M225 176h300" stroke="var(--orange)" stroke-width="4" stroke-dasharray="9 7"/><path d="M263 117h196" stroke="var(--blue)" stroke-width="4" marker-end="url(#arrow-build)"/><g fill="var(--ink)" font-size="17" font-weight="700"><text x="60" y="105">Spectators</text><text x="60" y="130">behind line</text><text x="307" y="86">Flight area</text><text x="315" y="202">Landing direction →</text><text x="60" y="185">Pilot / spotter</text></g></svg>'
      }
    };
    const visual = visuals[key];
    return visual ? `<figure class="lesson-visual"><div class="visual-frame">${visual.svg}</div><figcaption>${escapeHTML(visual.label)}</figcaption></figure>` : "";
  }

  function renderSection(section, index) {
    const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");
    const bullets = section.bullets ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHTML(bullet)}</li>`).join("")}</ul>` : "";
    const callout = section.callout ? `<aside class="callout"><strong>${escapeHTML(section.callout.label)}</strong><p>${escapeHTML(section.callout.text)}</p></aside>` : "";
    const formula = section.formula ? `<div class="formula-box"><span>FORMULA</span><code>${escapeHTML(section.formula)}</code></div>` : "";
    const image = section.image ? `<figure class="lesson-figure"><img src="${escapeHTML(section.image.src)}" alt="${escapeHTML(section.image.alt)}"><figcaption>${escapeHTML(section.image.caption)}</figcaption></figure>` : "";
    const visual = section.visual ? renderVisual(section.visual) : "";
    const links = section.links ? `<div class="section-links">${section.links.map((link) => `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`).join("")}</div>` : "";
    return `<section class="lesson-section" id="section-${index + 1}">
      <h2>${escapeHTML(section.title)}</h2>
      ${paragraphs}${bullets}${callout}${formula}${visual}${image}${links}
    </section>`;
  }

  function renderQuiz(module) {
    const questions = getQuiz(module);
    return `<section class="quiz-panel" aria-labelledby="quiz-title">
      <div class="quiz-kicker">FLIGHT CHECK · EARN KNOWLEDGE POINTS</div>
      <h2 id="quiz-title">Quick knowledge check</h2>
      <p class="quiz-intro">${questions.length} questions · Choose one answer for each question, then check your results. Your best score is saved on this device.</p>
      <div class="quiz-list">${questions.map((question, questionIndex) => {
        const selected = quizAnswers[questionIndex];
        const checked = quizFeedback !== null;
        const correct = checked && selected === question.answer;
        const wrong = checked && selected !== undefined && selected !== question.answer;
        const feedback = checked
          ? `<p class="quiz-question-feedback ${correct ? "is-correct" : "is-wrong"}">${correct ? "Correct. " : selected === undefined ? "Choose an answer next time. " : "Not quite. "}${escapeHTML(question.why)}</p>`
          : "";
        return `<div class="quiz-question">
          <h3>${questionIndex + 1}. ${escapeHTML(question.q)}</h3>
          <div class="quiz-option-list" role="group" aria-label="Question ${questionIndex + 1}">
            ${question.options.map((option, optionIndex) => {
              const optionCorrect = checked && optionIndex === question.answer;
              const optionWrong = checked && selected === optionIndex && optionIndex !== question.answer;
              return `<button class="quiz-option${selected === optionIndex ? " is-selected" : ""}${optionCorrect ? " is-correct" : ""}${optionWrong ? " is-wrong" : ""}" type="button" data-quiz-question="${questionIndex}" data-quiz-option="${optionIndex}" aria-pressed="${selected === optionIndex ? "true" : "false"}" ${checked ? "disabled" : ""}>${escapeHTML(option)}</button>`;
            }).join("")}
          </div>${feedback}
        </div>`;
      }).join("")}</div>
      <div class="quiz-actions">
        <button class="button button-primary button-small" type="button" data-action="check-quiz" ${quizFeedback !== null ? "disabled" : ""}>Check answers</button>
        ${quizFeedback !== null ? '<button class="button button-secondary button-small" type="button" data-action="retry-quiz">Try again</button>' : ""}
        <div class="quiz-result" id="quiz-result">${quizResultVisible && quizFeedback ? `<strong>${quizFeedback.score} / ${questions.length} correct</strong> · ${quizFeedback.pointsEarned} points earned` : ""}</div>
      </div>
    </section>`;
  }

  function renderLesson(module) {
    const index = moduleIndex(module.id);
    const previous = modules[index - 1];
    const next = modules[index + 1];
    const sections = getSections(module);
    const complete = state.completed.includes(module.id);
    const bookmarked = state.bookmarks.includes(module.id);
    const renderedSections = sections.map(renderSection).join("");
    const contents = sections.map((section, i) => `<a href="#section-${i + 1}">${String(i + 1).padStart(2, "0")} · ${escapeHTML(section.title)}</a>`).join("");
    const references = module.references.map((reference) => `<li>${escapeHTML(reference)}</li>`).join("");

    app.innerHTML = `<header class="lesson-header">
      <div class="breadcrumbs"><a href="#home">Course map</a><span>/</span><span>Module ${String(index + 1).padStart(2, "0")}</span></div>
      <div class="lesson-meta"><span class="tag tag-blue">${escapeHTML(module.category)}</span><span class="tag">${getReadingDuration(module)} min learning</span><span class="tag">${String(index + 1).padStart(2, "0")} / ${String(modules.length).padStart(2, "0")}</span></div>
      <h1>${escapeHTML(module.title)}</h1>
      <p class="lesson-summary">${escapeHTML(module.summary)}</p>
      <div class="lesson-actions">
        <button class="button ${complete ? "button-complete" : "button-primary"} button-small" type="button" data-action="toggle-complete" data-id="${escapeHTML(module.id)}">${complete ? "✓ Module completed" : "Mark module complete +40 XP"}</button>
        <button class="bookmark-button${bookmarked ? " is-saved" : ""}" type="button" data-action="toggle-bookmark" data-id="${escapeHTML(module.id)}" aria-pressed="${bookmarked}">${bookmarked ? "★ Saved for later" : "☆ Save for later"}</button>
      </div>
    </header>
    <section class="outcomes-panel" aria-label="Learning outcomes"><div class="outcomes-title">AFTER THIS LESSON</div><div class="outcome-list">${module.outcomes.map((outcome) => `<span class="outcome-item"><span>✓</span>${escapeHTML(outcome)}</span>`).join("")}</div></section>
    <div class="lesson-body">
      <div class="lesson-sections">${renderedSections}
        <section class="lesson-section" id="section-${sections.length + 1}">
          <h2>Source notes</h2>
          <ul>${references}</ul>
        </section>
        ${renderQuiz(module)}
        <nav class="lesson-footer-nav" aria-label="Lesson navigation">
          ${previous ? `<a class="button button-secondary button-small" href="#lesson/${escapeHTML(previous.id)}">← Previous: ${escapeHTML(previous.shortTitle)}</a>` : '<span class="next-copy">Beginning of course</span>'}
          ${next ? `<a class="button button-primary button-small" href="#lesson/${escapeHTML(next.id)}"><span class="next-copy">NEXT MODULE</span><span class="next-title">${escapeHTML(next.shortTitle)} →</span></a>` : '<a class="button button-primary button-small" href="#home">Course complete · Review roadmap →</a>'}
        </nav>
      </div>
      <aside class="lesson-toc"><div class="lesson-toc-title">IN THIS LESSON</div>${contents}<a href="#section-${sections.length + 1}">Source notes</a><a href="#quiz-title">10-question knowledge check</a></aside>
    </div>
    <p class="footer-note">Educational material, not an approved aircraft design or operating instruction. Verify all model-specific settings with the manufacturer and a qualified instructor.</p>`;
  }

  function calculatorCard({ id, title, eyebrow, description, fields, note }) {
    return `<section class="tool-card" data-calculator="${escapeHTML(id)}">
      <div class="eyebrow">${escapeHTML(eyebrow)}</div><h2>${escapeHTML(title)}</h2><p>${escapeHTML(description)}</p>
      <div class="tool-form">${fields.map((field) => `<div class="field"><label for="${id}-${field.id}">${escapeHTML(field.label)}</label><input id="${id}-${field.id}" name="${field.id}" type="number" min="${field.min ?? "0"}" ${field.max === undefined ? "" : `max="${field.max}"`} step="${field.step ?? "any"}" value="${field.value}" inputmode="decimal"></div>`).join("")}</div>
      <div class="calc-result" id="${id}-result" aria-live="polite">Enter values to estimate.</div>
      <p class="tool-note">${escapeHTML(note)}</p>
    </section>`;
  }

  function renderDesignLab() {
    app.innerHTML = `<header class="page-heading"><div class="eyebrow">INTERACTIVE WORKBENCH</div><h1>Design lab</h1><p>Use these first-pass calculators to explore relationships between mass, area, speed and battery capacity. They are learning aids, not certified design tools.</p></header>
      <div class="page-grid">
        ${calculatorCard({
          id: "wing-loading", eyebrow: "AIRFRAME · SIZING", title: "Wing loading",
          description: "Divide aircraft mass by wing planform area. Keep mass and area units consistent.",
          fields: [{ id: "mass", label: "Ready-to-fly mass (g)", value: 800, min: 1, step: 1 }, { id: "area", label: "Wing area (dm2)", value: 24, min: 0.1, step: 0.1 }],
          note: "Result is g/dm2 (mass loading). It is not a stall-speed guarantee; airfoil, planform and setup also matter."
        })}
        ${calculatorCard({
          id: "stall-speed", eyebrow: "AERODYNAMICS · ESTIMATE", title: "Stall-speed estimate",
          description: "A simplified level-flight estimate from mass, wing area, air density and assumed maximum lift coefficient.",
          fields: [{ id: "mass", label: "Ready-to-fly mass (kg)", value: 0.8, min: 0.01, step: 0.01 }, { id: "area", label: "Wing area (m2)", value: 0.24, min: 0.01, step: 0.01 }, { id: "clmax", label: "Assumed CLmax", value: 1.2, min: 0.1, step: 0.05 }, { id: "density", label: "Air density (kg/m3)", value: 1.225, min: 0.1, step: 0.001 }],
          note: "Vs = sqrt(2W / (rho S CLmax)). Low-Re effects and real aircraft setup can make this estimate inaccurate."
        })}
        ${calculatorCard({
          id: "battery-time", eyebrow: "ELECTRIC POWER · PLANNING", title: "Battery-time estimate",
          description: "Estimate duration from pack capacity, average current and the fraction of capacity you plan to use.",
          fields: [{ id: "capacity", label: "Battery capacity (mAh)", value: 2200, min: 1, step: 10 }, { id: "current", label: "Average current (A)", value: 12, min: 0.1, step: 0.1 }, { id: "usable", label: "Usable capacity (%)", value: 80, min: 1, max: 100, step: 1 }],
          note: "Actual current varies during flight. Use the battery maker's limits and land with a safe reserve; this is not a flight-time promise."
        })}
        ${calculatorCard({
          id: "aspect-ratio", eyebrow: "AIRFRAME · GEOMETRY", title: "Wing aspect ratio",
          description: "Compare span squared with wing planform area.",
          fields: [{ id: "span", label: "Wingspan (m)", value: 1.5, min: 0.01, step: 0.01 }, { id: "area", label: "Wing area (m2)", value: 0.35, min: 0.01, step: 0.01 }],
          note: "AR = span2 / area. Aspect ratio is one design variable, not a score for overall aircraft quality."
        })}
        ${calculatorCard({
          id: "reynolds", eyebrow: "AERODYNAMICS · SCALE EFFECTS", title: "Reynolds number",
          description: "Estimate Reynolds number from air density, speed, chord and dynamic viscosity.",
          fields: [{ id: "speed", label: "Air speed (m/s)", value: 10, min: 0.01, step: 0.1 }, { id: "chord", label: "Wing chord (m)", value: 0.2, min: 0.001, step: 0.001 }, { id: "density", label: "Air density (kg/m3)", value: 1.225, min: 0.1, step: 0.001 }, { id: "viscosity", label: "Dynamic viscosity (Pa.s)", value: 0.0000181, min: 0.0000001, step: 0.0000001 }],
          note: "Re = rho x V x c / mu. Compare airfoil data only within a relevant Reynolds-number range."
        })}
        ${calculatorCard({
          id: "glide-ratio", eyebrow: "FLIGHT SCIENCE · GLIDE", title: "Glide ratio",
          description: "Compare horizontal distance traveled with height lost in still air.",
          fields: [{ id: "distance", label: "Horizontal distance (m)", value: 100, min: 0.1, step: 1 }, { id: "height", label: "Height lost (m)", value: 20, min: 0.1, step: 0.1 }],
          note: "A ratio of 5:1 means about five units of horizontal distance per unit of height in the stated conditions."
        })}
        ${calculatorCard({
          id: "scale-size", eyebrow: "AIRFRAME · SCALE", title: "Scale model dimensions",
          description: "Estimate a model dimension from a known full-size dimension and scale denominator.",
          fields: [{ id: "fullspan", label: "Full-size wingspan (m)", value: 12, min: 0.01, step: 0.01 }, { id: "denominator", label: "Scale denominator (1:n)", value: 8, min: 1, step: 1 }],
          note: "This is a geometric estimate. Scale fidelity does not guarantee that the model has safe or stable flight characteristics."
        })}
        ${calculatorCard({
          id: "power-weight", eyebrow: "ELECTRIC POWER · SIZING", title: "Power-to-weight ratio",
          description: "Compare stated electrical input power with aircraft mass.",
          fields: [{ id: "power", label: "Input power (W)", value: 250, min: 0.1, step: 1 }, { id: "mass", label: "Ready-to-fly mass (kg)", value: 1.5, min: 0.01, step: 0.01 }],
          note: "Use measured, compatible system data. Input power is not equal to useful thrust or guaranteed climb performance."
        })}
        <section class="tool-card">
          <div class="eyebrow">DESIGN REVIEW · BEFORE YOU BUILD</div><h2>First-pass design checklist</h2>
          <p>Use these prompts to turn a rough idea into a testable brief.</p>
          <div class="checklist" id="design-checklist">
            ${["Write the mission and operating site constraints.", "Estimate complete ready-to-fly mass, including wiring and hardware.", "Choose a proven CG range and control setup from a validated design.", "Check structure, motor, ESC, battery and propeller compatibility.", "Plan bench checks, inspection and supervised flight tests."].map((item, index) => `<label class="check-item"><input type="checkbox" data-field-check="design-${index}" ${state.checks[`design-${index}`] ? "checked" : ""}><span>${escapeHTML(item)}</span></label>`).join("")}
          </div>
          <div class="checklist-progress" id="design-checklist-progress"></div>
        </section>
      </div>
      <aside class="safety-banner"><div aria-hidden="true">!</div><div><strong>Engineering estimates have limits</strong><p>Do not use a calculator result as proof that an aircraft is stable, structurally sound, legal or safe to fly. Validate your design against reliable plans, manufacturer data and qualified review.</p></div></aside>
      <p class="footer-note">Design relationships are simplified for learning. The RC design reference includes further material on wing loading, weight distribution, stability, propellers and specialized configurations.</p>`;
    updateCalculators();
    updateChecklistProgress("design-checklist", "design-checklist-progress", 5);
  }

  function finitePositive(input) {
    const value = Number(input.value);
    return Number.isFinite(value) && value > 0 ? value : null;
  }

  function writeResult(id, html) {
    const output = document.getElementById(`${id}-result`);
    if (output) output.innerHTML = html;
  }

  function updateCalculators() {
    const mass = document.getElementById("wing-loading-mass");
    const area = document.getElementById("wing-loading-area");
    if (mass && area) {
      const m = finitePositive(mass);
      const a = finitePositive(area);
      writeResult("wing-loading", m && a ? `<strong>${(m / a).toFixed(1)} g/dm2</strong><br>Mass loading for the values entered.` : "Enter positive mass and wing-area values.");
    }

    const stallIds = ["mass", "area", "clmax", "density"];
    const stallInputs = stallIds.map((id) => document.getElementById(`stall-speed-${id}`));
    if (stallInputs.every(Boolean)) {
      const values = stallInputs.map(finitePositive);
      if (values.every(Boolean)) {
        const [kg, squareMetres, clmax, density] = values;
        const speedMs = Math.sqrt((2 * kg * 9.80665) / (density * squareMetres * clmax));
        writeResult("stall-speed", `<strong>${(speedMs * 3.6).toFixed(1)} km/h</strong><br>About ${(speedMs * 1.94384).toFixed(1)} kt in this simplified estimate.`);
      } else {
        writeResult("stall-speed", "Enter positive values for all fields.");
      }
    }

    const capacity = document.getElementById("battery-time-capacity");
    const current = document.getElementById("battery-time-current");
    const usable = document.getElementById("battery-time-usable");
    if (capacity && current && usable) {
      const mah = finitePositive(capacity);
      const amps = finitePositive(current);
      const fraction = Number(usable.value) / 100;
      if (mah && amps && Number.isFinite(fraction) && fraction > 0 && fraction <= 1) {
        const minutes = (mah / 1000 * fraction / amps) * 60;
        writeResult("battery-time", `<strong>${minutes.toFixed(1)} min</strong><br>Nominal duration at the stated average current.`);
      } else {
        writeResult("battery-time", "Use positive capacity/current and a usable-capacity percentage from 1 to 100.");
      }
    }

    const aspectSpan = document.getElementById("aspect-ratio-span");
    const aspectArea = document.getElementById("aspect-ratio-area");
    if (aspectSpan && aspectArea) {
      const span = finitePositive(aspectSpan);
      const wingArea = finitePositive(aspectArea);
      writeResult("aspect-ratio", span && wingArea ? `<strong>${(span * span / wingArea).toFixed(2)}</strong><br>Geometric wing aspect ratio.` : "Enter positive span and wing area.");
    }

    const reynoldsValues = ["speed", "chord", "density", "viscosity"].map((id) => document.getElementById(`reynolds-${id}`));
    if (reynoldsValues.every(Boolean)) {
      const [speed, chord, airDensity, viscosity] = reynoldsValues.map(finitePositive);
      writeResult("reynolds", speed && chord && airDensity && viscosity
        ? `<strong>${Math.round(airDensity * speed * chord / viscosity).toLocaleString()}</strong><br>Estimated section Reynolds number.`
        : "Enter positive values for all fields.");
    }

    const glideDistance = document.getElementById("glide-ratio-distance");
    const glideHeight = document.getElementById("glide-ratio-height");
    if (glideDistance && glideHeight) {
      const distance = finitePositive(glideDistance);
      const height = finitePositive(glideHeight);
      writeResult("glide-ratio", distance && height ? `<strong>${(distance / height).toFixed(2)} : 1</strong><br>Horizontal distance per height lost.` : "Enter positive distance and height loss.");
    }

    const fullSpan = document.getElementById("scale-size-fullspan");
    const scaleDenominator = document.getElementById("scale-size-denominator");
    if (fullSpan && scaleDenominator) {
      const span = finitePositive(fullSpan);
      const denominator = finitePositive(scaleDenominator);
      writeResult("scale-size", span && denominator ? `<strong>${(span / denominator).toFixed(3)} m</strong><br>Estimated model wingspan at 1:${denominator}.` : "Enter positive full-size dimension and scale denominator.");
    }

    const powerInput = document.getElementById("power-weight-power");
    const massInput = document.getElementById("power-weight-mass");
    if (powerInput && massInput) {
      const power = finitePositive(powerInput);
      const aircraftMass = finitePositive(massInput);
      writeResult("power-weight", power && aircraftMass ? `<strong>${(power / aircraftMass).toFixed(1)} W/kg</strong><br>Electrical input power per unit mass.` : "Enter positive power and aircraft mass.");
    }
  }

  function updateChecklistProgress(containerId, outputId, total) {
    const container = document.getElementById(containerId);
    const output = document.getElementById(outputId);
    if (!container || !output) return;
    const checked = container.querySelectorAll('input[type="checkbox"]:checked').length;
    output.textContent = `${checked} of ${total} checked`;
  }

  function renderFieldGuide() {
    const checklist = [
      "I am at a permitted flying site and have checked current local rules and airspace.",
      "Weather, wind and visibility are within my skill, aircraft limits and site rules.",
      "Airframe, hinges, linkages, propeller, landing gear and fasteners are secure.",
      "The correct transmitter model is selected; controls, range and failsafe are verified.",
      "Battery is undamaged, correctly connected and securely restrained.",
      "Pilot, spotter, spectators, flight area and landing plan have been briefed.",
      "I will stop if anything is uncertain, damaged or outside the plan."
    ];
    app.innerHTML = `<header class="page-heading"><div class="eyebrow">RESPONSIBLE FLYING</div><h1>Field guide</h1><p>A ground routine for preparation and follow-up. Use your aircraft manual, club procedure and current local requirements as the authority.</p></header>
      <div class="page-grid">
        <section class="tool-card tool-wide">
          <div class="eyebrow">BEFORE EVERY FLIGHT</div><h2>Pre-flight go / no-go check</h2>
          <p>Check each item before connecting or arming the propulsion system. This list is a learning aid; adapt it with an experienced pilot and the manufacturer instructions.</p>
          <div class="checklist" id="field-checklist">${checklist.map((item, index) => `<label class="check-item"><input type="checkbox" data-field-check="field-${index}" ${state.checks[`field-${index}`] ? "checked" : ""}><span>${escapeHTML(item)}</span></label>`).join("")}</div>
          <div class="checklist-progress" id="field-checklist-progress"></div>
        </section>
        <section class="tool-card">
          <div class="eyebrow">STOP WORK · PROPULSION</div><h2>Propeller-safe setup</h2>
          <p>During radio, ESC and motor configuration, remove the propeller. Restrain the aircraft before any powered bench test. Keep people out of the propeller arc and never rely on a throttle hold or software setting as the only safeguard.</p>
        </section>
        <section class="tool-card">
          <div class="eyebrow">STOP WORK · BATTERIES</div><h2>LiPo condition check</h2>
          <p>Do not use a pack that is swollen, punctured, crushed, unusually hot, leaking or emitting an unusual odor. Use a compatible balance charger and follow its instructions. Stop charging if anything behaves abnormally.</p>
        </section>
        <section class="tool-card tool-wide">
          <div class="eyebrow">AFTER LANDING</div><h2>Secure, inspect, record</h2>
          <p>Disarm and disconnect propulsion before approaching the propeller. Check for damage, loose fasteners, hot components and battery changes. Log repairs and configuration changes. Do not fly a questionable aircraft.</p>
        </section>
      </div>
      <aside class="safety-banner"><div aria-hidden="true">!</div><div><strong>Regulations are location-specific and can change</strong><p>Verify current aviation, airspace, radio-frequency and site rules with official authorities. This learning site is not legal advice or a substitute for in-person instruction.</p><div class="section-links"><a href="https://digitalsky.dgca.gov.in/" target="_blank" rel="noopener noreferrer">DGCA Digital Sky ↗</a><a href="https://www.faa.gov/uas/recreational_flyers" target="_blank" rel="noopener noreferrer">FAA recreational flyers ↗</a><a href="https://www.caa.co.uk/drones/" target="_blank" rel="noopener noreferrer">UK CAA drones ↗</a><a href="https://www.easa.europa.eu/en/domains/civil-drones-rpas" target="_blank" rel="noopener noreferrer">EASA drones ↗</a></div></div></aside>
      <p class="footer-note">For injury, fire or chemical exposure, contact local emergency services and follow professional guidance. Never put a score, deadline or flight ahead of people and property.</p>`;
    updateChecklistProgress("field-checklist", "field-checklist-progress", checklist.length);
  }

  function renderSources() {
    const gloss = window.GLOSSARY.map(([term, definition]) => `<div class="glossary-item"><strong>${escapeHTML(term)}</strong><p>${escapeHTML(definition)}</p></div>`).join("");
    app.innerHTML = `<header class="page-heading"><div class="eyebrow">REFERENCE DESK</div><h1>Sources & glossary</h1><p>This course synthesizes the learning site and files available in the workspace. Long passages have been rewritten as original instruction; consult the source documents for device- or aircraft-specific details.</p></header>
      <div class="source-grid">
        <article class="source-card">
          <div class="source-tag">PROJECT REFERENCE · 136 PAGES</div><h2>Basics of RC Design.pdf</h2>
          <p>The primary technical design reference. Topics are paraphrased and expanded in the lessons rather than copied verbatim.</p>
          <ul><li>Airfoil selection, aerodynamic formulas and wing loading</li><li>Wing, CG, horizontal/vertical tail and roll-control design</li><li>Weight distribution, drag reduction, stressed skins and flaps</li><li>Landing gear, cowls, propellers, aerobatics and maneuverability</li><li>Canards, tandem/three-surface, tailless aircraft, floats and proportions</li></ul>
          <a href="Basics%20of%20RC%20Design.pdf">Open original PDF ↗</a>
        </article>
        <article class="source-card">
          <div class="source-tag">DEVICE MANUAL · 27 PAGES</div><h2>FS-i6+User+manual.pdf</h2>
          <p>Used for the radio-control lesson. The local PDF is image-scanned, so this site explains general transmitter/receiver concepts and links the original for exact menus and procedures.</p>
          <ul><li>Consult it for FS-i6-specific menus, binding and configuration</li><li>Verify receiver compatibility and firmware before following a setup</li><li>Check every direction, range and failsafe on the ground</li></ul>
          <a href="FS-i6%2BUser%2Bmanual.pdf">Open original PDF ↗</a>
        </article>
        <article class="source-card">
          <div class="source-tag">FULL-SIZE AIRCRAFT HANDBOOK · 63 PAGES</div><h2>Cessna-1971-Super-Skymaster-337-POH.pdf</h2>
          <p>A 1971 Cessna 337 full-size owner's handbook. It illustrates manual structure, operating checklists, systems, performance data, emergency procedures and servicing.</p>
          <ul><li>Use only as a reference for how a full-size aircraft handbook is organized</li><li>Weights, speeds, fuel figures and procedures are specific to that Cessna</li><li>Never use its full-size procedures or limits as RC model instructions</li></ul>
          <a href="Cessna-1971-Super-Skymaster-337-POH.pdf">Open original PDF ↗</a>
        </article>
        <article class="source-card">
          <div class="source-tag">PROJECT IMAGE</div><h2>s1223.png</h2>
          <p>Supplied S1223 airfoil profile drawing. It labels a 0.28 m chord and helps illustrate chord and camber as geometric ideas.</p>
          <ul><li>A profile drawing alone does not provide a complete lift/drag polar</li><li>Selection depends on Reynolds number, planform and design mission</li></ul>
          <a href="s1223.png">Open airfoil image ↗</a>
        </article>
        <article class="source-card">
          <div class="source-tag">ORIGINAL WEBSITE · 12 CHAPTERS</div><h2>Aeromodelling Learning</h2>
          <p>The original public course supplied the topic map for this English rebuild: introduction, aerodynamics, materials, aircraft types, design, building, electronics, radio, flight, advanced topics, competitions and safety.</p>
          <ul><li>Original language and structure were replaced with clear English and a new learning flow</li><li>Event calendars and regulatory thresholds were not treated as timeless facts</li></ul>
          <a href="https://kuaman-student.github.io/Aeromodelling-learning/" target="_blank" rel="noopener noreferrer">Visit the original website ↗</a>
        </article>
      </div>
      <section class="content-section">
        <div class="section-heading-row"><div><div class="eyebrow">CURATED STARTING POINTS</div><h2>Books, tools and communities</h2><p>These recommendations are carried over from the original resource page. Check current availability, version and suitability before relying on any tool.</p></div></div>
        <div class="page-grid">
          <article class="tool-card">
            <div class="eyebrow">BOOKS · AERODYNAMICS & DESIGN</div><h2>Recommended reading</h2>
            <ul class="resource-list">
              <li><em>Model Aircraft Aerodynamics</em></li>
              <li><em>Understanding Flight</em></li>
              <li><em>Model Airplane Design & Theory of Flight</em></li>
              <li><em>Basics of R/C Model Aircraft Design</em></li>
              <li><em>RCadvisor's Model Airplane Design Made Easy</em></li>
              <li><em>Introduction to Flight</em></li>
              <li><em>The Secrets of Radio Control Flying</em></li>
              <li><em>Theory of Wing Sections</em></li>
              <li><em>Building & Flying Electric-Powered Model Aircraft</em></li>
            </ul>
          </article>
          <article class="tool-card">
            <div class="eyebrow">ONLINE LEARNING & DATA</div><h2>Reference websites</h2>
            <ul class="resource-list">
              <li><a href="https://www.rcgroups.com/" target="_blank" rel="noopener noreferrer">RCGroups</a> — community discussions; cross-check technical advice.</li>
              <li><a href="https://www.flitetest.com/" target="_blank" rel="noopener noreferrer">Flite Test</a> — project ideas and build education.</li>
              <li><a href="https://airfoiltools.com/" target="_blank" rel="noopener noreferrer">Airfoil Tools</a> — airfoil profiles and comparisons.</li>
              <li><a href="https://m-selig.ae.illinois.edu/ads.html" target="_blank" rel="noopener noreferrer">UIUC Airfoil Coordinates Database</a> — airfoil coordinate data.</li>
              <li><a href="https://www.ecalc.ch/" target="_blank" rel="noopener noreferrer">eCalc</a> — propulsion-system estimation.</li>
              <li><a href="https://www.nasa.gov/aeronautics/" target="_blank" rel="noopener noreferrer">NASA Aeronautics</a> — aeronautics education and research.</li>
              <li><a href="https://openfoam.org/" target="_blank" rel="noopener noreferrer">OpenFOAM</a> — computational fluid dynamics software.</li>
              <li><a href="https://www.rcdesign.ru/english" target="_blank" rel="noopener noreferrer">RC Design Resources</a> — listed by the original site; verify current availability.</li>
            </ul>
          </article>
          <article class="tool-card">
            <div class="eyebrow">SOFTWARE · DESIGN & CONTROL</div><h2>Tools to explore</h2>
            <ul class="resource-list">
              <li>XFLR5 and Profili — airfoil and preliminary aircraft analysis.</li>
              <li><a href="https://openvsp.org/" target="_blank" rel="noopener noreferrer">OpenVSP</a> — parametric aircraft geometry.</li>
              <li><a href="https://www.freecad.org/" target="_blank" rel="noopener noreferrer">FreeCAD</a> or Fusion 360 — computer-aided design.</li>
              <li><a href="https://betaflight.com/" target="_blank" rel="noopener noreferrer">Betaflight</a> and iNav — supported flight-control firmware.</li>
              <li>Mission Planner and QGroundControl — ground-station software.</li>
              <li>eCalc, LithoCalc and WinFoil — planning and analysis tools named in the original resource page.</li>
            </ul>
          </article>
          <article class="tool-card">
            <div class="eyebrow">COMMUNITY · EVENTS</div><h2>Clubs and organizations</h2>
            <ul class="resource-list">
              <li><a href="https://www.fai.org/commission/ciam" target="_blank" rel="noopener noreferrer">FAI Aeromodelling Commission</a> — international aeromodelling sport.</li>
              <li><a href="https://www.saeindia.org/" target="_blank" rel="noopener noreferrer">SAE India</a> — engineering programs and competitions.</li>
              <li>Aero Club of India (AeCI), local aeromodelling clubs and supervised university teams.</li>
              <li>Competition examples in the original site include FAI classes, SAE Aero Design, Boeing National Aeromodelling, IIT Bombay Techfest and IIT Madras Shaastra.</li>
              <li>Schedules, categories, organizers and eligibility can change; use each event's current rulebook.</li>
            </ul>
          </article>
          <article class="tool-card">
            <div class="eyebrow">BUILD · SUPPLIERS</div><h2>Finding parts and help</h2>
            <p>The original India-oriented list names RC Bazaar, Robu, QuadKopters, HobbyKing, Banggood, Amazon India, local hobby shops, RCMumbai/RCDelta and 3D-printing services. These are examples from the source, not endorsements.</p>
            <p>Check stock, shipping, return terms, counterfeit risk, specifications and applicable import or battery-transport rules. A local club or hobby shop can help confirm compatibility before purchase.</p>
          </article>
          <article class="tool-card">
            <div class="eyebrow">FIRST PROJECTS · BUILD SKILLS GRADUALLY</div><h2>A sensible progression</h2>
            <ul class="resource-list">
              <li>Paper glider — observe balance, trim and glide.</li>
              <li>Rubber-powered model — learn mass and energy trade-offs.</li>
              <li>Simple foam glider — practice straight, symmetric construction.</li>
              <li>Proven beginner trainer — add radio control with an instructor.</li>
              <li>The original list suggests Flite Test Simple Scout and Tiny Trainer as examples; availability and plans may change.</li>
              <li>Only then develop a scratch-built design with measured requirements and supervised tests.</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="content-section">
        <div class="section-heading-row"><div><div class="eyebrow">FORMULA & UNIT DESK</div><h2>Common relationships and conversions</h2><p>Use these relationships with a consistent reference area, assumptions and units.</p></div></div>
        <div class="reference-map">
          <div class="reference-row"><strong>Lift</strong><span>L = 0.5 rho V^2 S CL. rho is air density, V speed, S reference area and CL lift coefficient.</span></div>
          <div class="reference-row"><strong>Drag</strong><span>D = 0.5 rho V^2 S CD. CD is the drag coefficient for the stated condition.</span></div>
          <div class="reference-row"><strong>Reynolds number</strong><span>Re = rho V c / mu. c is chord and mu is dynamic viscosity.</span></div>
          <div class="reference-row"><strong>Wing loading</strong><span>Mass loading = mass / area; force loading = weight / area. Do not mix grams and square metres without conversion.</span></div>
          <div class="reference-row"><strong>Aspect ratio</strong><span>AR = b^2 / S. b is wing span and S is planform area.</span></div>
          <div class="reference-row"><strong>Electrical power</strong><span>P = V x I. Measured input power does not equal useful thrust or climb performance.</span></div>
          <div class="reference-row"><strong>Flight-time estimate</strong><span>Minutes approx. = capacity (Ah) / average current (A) x usable fraction x 60; actual current varies in flight.</span></div>
          <div class="reference-row"><strong>Stall-speed estimate</strong><span>Vs = sqrt(2 W / (rho S CLmax)); W is force in newtons. Model-scale and setup effects can be significant.</span></div>
          <div class="reference-row"><strong>Length & area</strong><span>1 in = 25.4 mm; 1 ft = 0.3048 m; 1 in2 = 6.4516 cm2; 1 ft2 = 0.09290 m2.</span></div>
          <div class="reference-row"><strong>Mass & speed</strong><span>1 oz = 28.35 g; 1 lb = 453.6 g; 1 mph = 1.609 km/h; 1 m/s = 3.6 km/h.</span></div>
          <div class="reference-row"><strong>Wing loading & batteries</strong><span>1 oz/ft2 = 30.5 g/dm2; 1000 mAh = 1 Ah; LiPo nominal voltage is approximately 3.7 V per cell.</span></div>
          <div class="reference-row"><strong>Temperature & propellers</strong><span>F = (9/5 x C) + 32. Propellers are commonly labeled diameter x pitch in inches; verify the exact maker specification.</span></div>
        </div>
      </section>
      <section class="content-section">
        <div class="section-heading-row"><div><div class="eyebrow">TRACEABILITY</div><h2>Where the sources appear</h2><p>Find the source coverage by lesson.</p></div></div>
        <div class="reference-map">
          <div class="reference-row"><strong>Design reference</strong><span>Airfoils, formulas, weight and wing loading, CG, stability, tail sizing, controls, structure, drag, flaps, landing gear, propulsion, aerobatics, alternative layouts and floats.</span></div>
          <div class="reference-row"><strong>FS-i6 manual</strong><span>Transmitter/receiver roles, model memory, channels, binding, control checks, range testing, failsafe and troubleshooting; exact menu actions stay in the device manual.</span></div>
          <div class="reference-row"><strong>Cessna handbook</strong><span>Checklist and manual organization, full-size systems/performance context, emergency and servicing sections; never its aircraft-specific limits or procedures for RC use.</span></div>
          <div class="reference-row"><strong>Original 12 chapters</strong><span>Start here, aerodynamics, materials, airframe categories, design, construction, electronics, radio, flight, advanced systems, competitions and safety/regulations.</span></div>
          <div class="reference-row"><strong>Current rules</strong><span>Use the official aviation authority, airspace, radio and site sources for your country and operation. This site does not publish fixed legal thresholds.</span></div>
        </div>
      </section>
      <section class="content-section">
        <div class="section-heading-row"><div><div class="eyebrow">QUICK REFERENCE</div><h2>Flight-school glossary</h2><p>English definitions for the 202 terms in the original glossary.</p></div><span class="subtle-link" id="glossary-count">${window.GLOSSARY.length} terms</span></div>
        <label class="glossary-search-label" for="glossary-search">Filter glossary <input id="glossary-search" type="search" placeholder="Search a term or definition..." autocomplete="off"></label>
        <div class="glossary-grid" id="glossary-grid">${gloss}</div>
        <p class="search-empty-state" id="glossary-empty" hidden>No glossary entries match that search.</p>
      </section>
      <div class="source-disclaimer"><strong>Safety and source note:</strong> The PDFs and original site are references, not proof that any aircraft design is airworthy. Aircraft-specific data can be outdated or inapplicable; verify against current manufacturer documentation, qualified instruction and official local rules.</div>
      <p class="footer-note"><a class="external-resource" href="https://www.fai.org/commission/ciam" target="_blank" rel="noopener noreferrer">FAI Aeromodelling Commission ↗</a></p>`;
  }

  function shuffled(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function buildCrossQuiz(category, requestedCount) {
    const chosenModules = category === "all" ? modules : modules.filter((module) => module.id === category);
    const groups = chosenModules.map((module) => shuffled(getQuiz(module).map((question) => ({
      ...question,
      moduleId: module.id,
      moduleTitle: module.title
    }))));
    const availableCount = groups.reduce((count, group) => count + group.length, 0);
    const count = requestedCount === "all" ? availableCount : Math.min(Number(requestedCount), availableCount);
    const selected = [];
    if (category === "all" && count >= groups.length) {
      groups.forEach((group) => selected.push(group.shift()));
    }
    const remaining = shuffled(groups.flat());
    selected.push(...remaining.slice(0, count - selected.length));
    return shuffled(selected);
  }

  function renderCrossQuiz() {
    if (!crossQuiz) {
      const topicOptions = modules.map((module) => `<option value="${escapeHTML(module.id)}">${escapeHTML(module.title)}</option>`).join("");
      return `<section class="page-hero compact-hero">
        <div class="eyebrow">QUIZ CENTRE · REVIEW THE WHOLE COURSE</div>
        <h1>One question at a time.<br><span>Every chapter in reach.</span></h1>
        <p>Build a fresh mixed quiz from the course question bank. Choose a chapter for focused revision, or choose all chapters for a balanced cross-course check.</p>
      </section>
      <section class="content-section">
        <div class="quiz-setup-card">
          <div class="eyebrow">MAKE A QUIZ</div>
          <h2>Choose your practice set</h2>
          <div class="quiz-setup-grid">
            <label>Topics
              <select id="cross-quiz-topic"><option value="all">All course chapters</option>${topicOptions}</select>
            </label>
            <label>Question count
              <select id="cross-quiz-count"><option value="20" selected>20 questions · all chapters represented</option><option value="50">50 questions · extended practice</option><option value="all">Full selected question bank</option></select>
            </label>
          </div>
          <p class="quiz-setup-note">Question order is randomized. Answers and explanations appear in the review after you finish. Your best score for each quiz size is saved on this device.</p>
          <button class="button button-primary" type="button" data-action="start-cross-quiz">Start quiz →</button>
        </div>
        <div class="quiz-feature-grid">
          <article class="feature-panel"><div class="eyebrow">COURSE-WIDE COVERAGE</div><h3>${getCourseQuestionCount()} question bank</h3><p>A mixed 20-question run includes a question from every course chapter, then samples additional topics.</p></article>
          <article class="feature-panel"><div class="eyebrow">LEARN BY DOING</div><h3>Practice beyond recall</h3><p>The course includes workshop tasks, measured design exercises, simulator drills, field briefings and safety decisions.</p></article>
        </div>
        <p class="footer-note">This learning quiz is not an aircraft approval, operational checklist or substitute for current rules and instructor supervision.</p>
      </section>`;
    }

    if (crossQuiz.finished) {
      const score = crossQuiz.score;
      const percentage = Math.round((score / crossQuiz.questions.length) * 100);
      const moduleScores = modules.map((module) => {
        const questions = crossQuiz.questions.filter((question) => question.moduleId === module.id);
        if (!questions.length) return "";
        const correct = questions.filter((question) => crossQuiz.answers[crossQuiz.questions.indexOf(question)] === question.answer).length;
        return `<div class="cross-result-row"><span>${escapeHTML(module.shortTitle)}</span><strong>${correct} / ${questions.length}</strong></div>`;
      }).filter(Boolean).join("");
      const review = crossQuiz.questions.map((question, index) => {
        const selected = crossQuiz.answers[index];
        const correct = selected === question.answer;
        return `<article class="cross-review-item ${correct ? "is-correct" : "is-wrong"}">
          <div class="eyebrow">${escapeHTML(question.moduleTitle)} · QUESTION ${index + 1}</div>
          <h3>${escapeHTML(question.q)}</h3>
          <p><strong>Your answer:</strong> ${selected === undefined ? "Not answered" : escapeHTML(question.options[selected])}</p>
          <p><strong>Correct answer:</strong> ${escapeHTML(question.options[question.answer])}</p>
          <p class="quiz-question-feedback ${correct ? "is-correct" : "is-wrong"}">${escapeHTML(question.why)}</p>
        </article>`;
      }).join("");
      return `<section class="page-hero compact-hero"><div class="eyebrow">QUIZ COMPLETE · ${percentage}%</div><h1>${score} <span>/ ${crossQuiz.questions.length}</span></h1><p>${crossQuiz.pointsEarned ? `New best score · +${crossQuiz.pointsEarned} flight points.` : "Review the explanations and try again to beat your saved best score."}</p></section>
        <section class="content-section">
          <div class="cross-results-grid"><article class="quiz-setup-card"><div class="eyebrow">CHAPTER BREAKDOWN</div><h2>Review your coverage</h2><div class="cross-result-list">${moduleScores}</div></article>
          <article class="quiz-setup-card"><div class="eyebrow">NEXT STEP</div><h2>Turn misses into practice</h2><p>Revisit a chapter, try its lesson-end knowledge check, or run another randomized quiz.</p><a class="button button-secondary button-small" href="#how-to-use">How to study with this course →</a><div class="cross-next-actions"><button class="button button-primary button-small" type="button" data-action="new-cross-quiz">New quiz</button><a class="button button-ghost button-small" href="#home">Back to course</a></div></article></div>
          <div class="section-heading-row"><div><div class="eyebrow">ANSWER KEY</div><h2>Answers and explanations</h2><p>Use the explanation to understand the reasoning, not just memorize the choice.</p></div></div>
          <div class="cross-review-list">${review}</div>
        </section>`;
    }

    const question = crossQuiz.questions[crossQuiz.index];
    const selected = crossQuiz.answers[crossQuiz.index];
    const answeredCount = Object.keys(crossQuiz.answers).length;
    const visualSection = modules.find((module) => module.id === question.moduleId)?.sections.find((section) => section.visual);
    const questionNumbers = crossQuiz.questions.map((item, index) => `<button class="cross-question-number${index === crossQuiz.index ? " is-current" : ""}${crossQuiz.answers[index] !== undefined ? " is-answered" : ""}" type="button" data-action="cross-jump" data-index="${index}" aria-label="Go to question ${index + 1}${crossQuiz.answers[index] !== undefined ? ", answered" : ", unanswered"}" aria-current="${index === crossQuiz.index ? "step" : "false"}">${index + 1}</button>`).join("");
    const options = question.options.map((option, index) => `<button class="cross-option${selected === index ? " is-selected" : ""}" type="button" data-cross-option="${index}" aria-pressed="${selected === index ? "true" : "false"}">${escapeHTML(option)}</button>`).join("");
    return `<section class="page-hero compact-hero">
      <div class="eyebrow">MIXED COURSE QUIZ · ${escapeHTML(question.moduleTitle.toUpperCase())}</div>
      <h1>Question ${crossQuiz.index + 1} <span>of ${crossQuiz.questions.length}</span></h1>
      <div class="cross-progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${crossQuiz.questions.length}" aria-valuenow="${answeredCount}"><span style="width:${Math.round((answeredCount / crossQuiz.questions.length) * 100)}%"></span></div>
      <p>${answeredCount} of ${crossQuiz.questions.length} answered · Best score ${Number(state.quizBest[crossQuiz.bestKey]) || 0} / ${crossQuiz.questions.length}</p>
    </section>
    <section class="content-section cross-quiz-layout">
      <article class="cross-question-card">
        <div class="eyebrow">CHAPTER · ${escapeHTML(question.moduleTitle)}</div>
        <h2>${escapeHTML(question.q)}</h2>
        <div class="cross-options">${options}</div>
        ${visualSection ? renderVisual(visualSection.visual) : ""}
        <div class="cross-question-controls">
          <button class="button button-ghost button-small" type="button" data-action="cross-previous" ${crossQuiz.index === 0 ? "disabled" : ""}>← Previous</button>
          ${crossQuiz.index < crossQuiz.questions.length - 1
            ? `<button class="button button-primary button-small" type="button" data-action="cross-next">Next question →</button>`
            : `<button class="button button-primary button-small" type="button" data-action="finish-cross-quiz" ${answeredCount < crossQuiz.questions.length ? "disabled" : ""}>Finish and see results</button>`}
        </div>
        ${crossQuiz.index === crossQuiz.questions.length - 1 && answeredCount < crossQuiz.questions.length ? `<p class="quiz-setup-note">Answer all ${crossQuiz.questions.length} questions to finish. Use the numbered navigator to revisit any question.</p>` : ""}
      </article>
      <aside class="cross-navigator">
        <div class="eyebrow">QUESTION MAP</div>
        <p>Answered ${answeredCount} / ${crossQuiz.questions.length}</p>
        <div class="cross-question-grid">${questionNumbers}</div>
        <button class="text-button" type="button" data-action="new-cross-quiz">Exit this quiz</button>
      </aside>
    </section>`;
  }

  function renderHowToUse() {
    return `<section class="page-hero compact-hero">
      <div class="eyebrow">START HERE · A GUIDE TO THE LEARNING EXPERIENCE</div>
      <h1>Learn with a plan.<br><span>Practise with purpose.</span></h1>
      <p>A quick guide to navigating the course, using its practice tools and keeping real-world aeromodelling safe.</p>
    </section>
    <section class="content-section how-to-grid">
      <article class="how-to-card"><span class="how-to-step">01</span><div class="eyebrow">FOLLOW OR SEARCH</div><h2>Choose a learning route</h2><p>Start at the learning path and progress from fundamentals through design, construction, radio, flight practice and safety. Or use the lesson search to jump to a concept. Lessons can be opened in any order.</p><a class="subtle-link" href="#home">Open the learning path →</a></article>
      <article class="how-to-card"><span class="how-to-step">02</span><div class="eyebrow">READ · APPLY · REVIEW</div><h2>Work through a lesson</h2><p>Read the outcomes first, then study the detailed sections, diagrams, formulas and safety callouts. Use the lesson table of contents to revisit a section. Finish with the chapter knowledge check and read every explanation.</p></article>
      <article class="how-to-card"><span class="how-to-step">03</span><div class="eyebrow">PRACTISE ACROSS TOPICS</div><h2>Use the quiz centre</h2><p>Choose a chapter for focused revision or take a randomized mixed quiz. The 20-question mixed format represents every chapter; longer and full-bank runs sample more questions. Review the chapter breakdown and explanations when finished.</p><a class="subtle-link" href="#quiz">Open quiz centre →</a></article>
      <article class="how-to-card"><span class="how-to-step">04</span><div class="eyebrow">DESIGN TOOLS</div><h2>Check your working</h2><p>The design lab contains calculators and unit references. Enter realistic values and keep units consistent. These tools support learning and comparison; they do not replace a validated design, manufacturer data or flight testing.</p><a class="subtle-link" href="#design-lab">Open design lab →</a></article>
      <article class="how-to-card"><span class="how-to-step">05</span><div class="eyebrow">BUILD GOOD HABITS</div><h2>Keep a flight log</h2><p>Mark lessons complete, save lessons for later and use checklists as learning aids. The points and completion indicator reward revision; they are not a measure of pilot qualification. Progress and theme choice are stored locally in this browser.</p></article>
      <article class="how-to-card"><span class="how-to-step">06</span><div class="eyebrow">PRACTICAL LEARNING</div><h2>Run small, safe experiments</h2><p>Use the practical workshop for paper-glider tests, measurements, build-coupon comparisons, simulator drills and test-card planning. Change one variable at a time and record units, conditions and results.</p><a class="subtle-link" href="#lesson/practical-workshops">Open practical workshops →</a></article>
    </section>
    <section class="content-section how-to-lower">
      <article class="source-disclaimer"><strong>Real aircraft safety:</strong> This is educational material, not a flight authorization, certified design or replacement for the exact aircraft/component manuals. For powered setup, remove the propeller; use an authorized site, current local rules and experienced in-person supervision.</article>
      <article class="feature-panel"><div class="eyebrow">KEYBOARD & ACCESSIBILITY</div><h3>Move around efficiently</h3><p>Use Tab and Shift+Tab to move between controls, Enter or Space to activate them, and Ctrl+K (or Cmd+K) to focus lesson search. Visible focus outlines, labelled controls and reduced-motion support are built in.</p></article>
      <article class="feature-panel"><div class="eyebrow">YOUR DATA</div><h3>Stored on this device</h3><p>Course completion, bookmarks, checklist ticks, theme and best scores use this browser's local storage. Clearing site data removes them. This static site does not require an account or send progress to a server.</p></article>
    </section>`;
  }

  function render() {
    const route = currentRoute();
    renderSidebar();
    if (route.view === "lesson") {
      const module = modules.find((item) => item.id === route.id);
      renderLesson(module);
    } else if (route.view === "design-lab") {
      renderDesignLab();
    } else if (route.view === "field-guide") {
      renderFieldGuide();
    } else if (route.view === "sources") {
      renderSources();
    } else if (route.view === "quiz") {
      app.innerHTML = renderCrossQuiz();
    } else if (route.view === "how-to-use") {
      app.innerHTML = renderHowToUse();
    } else {
      renderHome();
    }
    sidebar.classList.remove("is-open");
    document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "false");
  }

  function toggleComplete(id) {
    const index = state.completed.indexOf(id);
    if (index >= 0) {
      state.completed.splice(index, 1);
      state.points = Math.max(0, state.points - 40);
      notify("Module marked incomplete.");
    } else {
      state.completed.push(id);
      state.points += 40;
      notify("Module complete. +40 flight points!");
    }
    saveState();
    render();
  }

  function toggleBookmark(id) {
    const index = state.bookmarks.indexOf(id);
    if (index >= 0) {
      state.bookmarks.splice(index, 1);
      notify("Removed from saved lessons.");
    } else {
      state.bookmarks.push(id);
      notify("Lesson saved for later.");
    }
    saveState();
    render();
  }

  function checkQuiz(module) {
    const questions = getQuiz(module);
    const correctCount = questions.reduce((count, question, index) => count + (quizAnswers[index] === question.answer ? 1 : 0), 0);
    const oldBest = Number(state.quizBest[module.id]) || 0;
    const newBest = Math.max(oldBest, correctCount);
    const extraPoints = Math.max(0, newBest - oldBest) * 10;
    state.quizBest[module.id] = newBest;
    state.quizPoints += extraPoints;
    quizFeedback = { score: correctCount, pointsEarned: extraPoints };
    quizResultVisible = true;
    saveState();
    render();
    if (extraPoints) notify(`Knowledge check complete. +${extraPoints} points!`);
  }

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const lessonTarget = target.closest("[data-lesson]");
    if (lessonTarget) {
      location.hash = `lesson/${lessonTarget.dataset.lesson}`;
      return;
    }

    const crossOption = target.closest("[data-cross-option]");
    if (crossOption && crossQuiz && !crossQuiz.finished) {
      crossQuiz.answers[crossQuiz.index] = Number(crossOption.dataset.crossOption);
      crossOption.closest(".cross-options").querySelectorAll("[data-cross-option]").forEach((answerButton) => {
        const isSelected = Number(answerButton.dataset.crossOption) === crossQuiz.answers[crossQuiz.index];
        answerButton.classList.toggle("is-selected", isSelected);
        answerButton.setAttribute("aria-pressed", String(isSelected));
      });
      const answeredCount = Object.keys(crossQuiz.answers).length;
      const progress = document.querySelector(".cross-progress-track");
      if (progress) {
        progress.setAttribute("aria-valuenow", String(answeredCount));
        progress.querySelector("span").style.width = `${Math.round((answeredCount / crossQuiz.questions.length) * 100)}%`;
      }
      const countLabel = document.querySelector(".cross-quiz-layout .cross-navigator p");
      if (countLabel) countLabel.textContent = `Answered ${answeredCount} / ${crossQuiz.questions.length}`;
      if (crossQuiz.index === crossQuiz.questions.length - 1) {
        const finishButton = document.querySelector('[data-action="finish-cross-quiz"]');
        if (finishButton) finishButton.disabled = answeredCount < crossQuiz.questions.length;
        const note = document.querySelector(".cross-question-controls + .quiz-setup-note");
        if (note && answeredCount === crossQuiz.questions.length) note.remove();
      }
      const numberButton = document.querySelector(`.cross-question-number[data-index="${crossQuiz.index}"]`);
      if (numberButton) {
        numberButton.classList.add("is-answered");
        numberButton.setAttribute("aria-label", `Go to question ${crossQuiz.index + 1}, answered`);
      }
      const questionHeader = document.querySelector(".cross-question-card > .eyebrow");
      if (questionHeader && !questionHeader.textContent.includes("ANSWERED")) questionHeader.textContent += " · ANSWERED";
      return;
    }

    const option = target.closest("[data-quiz-option]");
    if (option) {
      if (quizFeedback !== null) return;
      const questionIndex = Number(option.dataset.quizQuestion);
      const optionIndex = Number(option.dataset.quizOption);
      quizAnswers[questionIndex] = optionIndex;
      const question = option.closest(".quiz-question");
      question.querySelectorAll("[data-quiz-option]").forEach((answerButton) => {
        const isSelected = Number(answerButton.dataset.quizOption) === optionIndex;
        answerButton.classList.toggle("is-selected", isSelected);
        answerButton.setAttribute("aria-pressed", String(isSelected));
      });
      return;
    }

    const action = target.closest("[data-action]");
    if (action) {
      const id = action.dataset.id;
      if (action.dataset.action === "toggle-complete") toggleComplete(id);
      if (action.dataset.action === "toggle-bookmark") toggleBookmark(id);
      if (action.dataset.action === "start-cross-quiz") {
        const category = document.getElementById("cross-quiz-topic").value;
        const requestedCount = document.getElementById("cross-quiz-count").value;
        crossQuiz = {
          category,
          requestedCount,
          bestKey: `cross:${category}:${requestedCount}`,
          questions: buildCrossQuiz(category, requestedCount),
          answers: {},
          index: 0,
          finished: false,
          score: 0,
          pointsEarned: 0
        };
        render();
      }
      if (action.dataset.action === "cross-previous") {
        crossQuiz.index = Math.max(0, crossQuiz.index - 1);
        render();
      }
      if (action.dataset.action === "cross-next") {
        crossQuiz.index = Math.min(crossQuiz.questions.length - 1, crossQuiz.index + 1);
        render();
      }
      if (action.dataset.action === "cross-jump") {
        crossQuiz.index = Number(action.dataset.index);
        render();
      }
      if (action.dataset.action === "finish-cross-quiz" && Object.keys(crossQuiz.answers).length === crossQuiz.questions.length) {
        crossQuiz.score = crossQuiz.questions.reduce((score, question, index) => score + Number(crossQuiz.answers[index] === question.answer), 0);
        const oldBest = Number(state.quizBest[crossQuiz.bestKey]) || 0;
        const newBest = Math.max(oldBest, crossQuiz.score);
        crossQuiz.pointsEarned = (newBest - oldBest) * 10;
        state.quizBest[crossQuiz.bestKey] = newBest;
        state.quizPoints += crossQuiz.pointsEarned;
        crossQuiz.finished = true;
        saveState();
        render();
        if (crossQuiz.pointsEarned) notify(`New cross-course best. +${crossQuiz.pointsEarned} points!`);
      }
      if (action.dataset.action === "new-cross-quiz") {
        crossQuiz = null;
        render();
      }
      if (action.dataset.action === "check-quiz") {
        const route = currentRoute();
        const module = modules.find((item) => item.id === route.id);
        if (module) checkQuiz(module);
      }
      if (action.dataset.action === "retry-quiz") {
        quizAnswers = {};
        quizFeedback = null;
        quizResultVisible = false;
        render();
      }
      return;
    }

    if (target.id === "theme-toggle" || target.closest("#theme-toggle")) {
      state.theme = themes[(themes.indexOf(state.theme) + 1) % themes.length];
      document.body.dataset.theme = state.theme;
      const themeButton = document.getElementById("theme-toggle");
      themeButton.title = `Color theme: ${state.theme}. Activate to change theme.`;
      themeButton.setAttribute("aria-label", `Color theme: ${state.theme}. Activate to change theme.`);
      saveState();
      return;
    }

    if (target.id === "mobile-menu-button" || target.closest("#mobile-menu-button")) {
      const isOpen = sidebar.classList.toggle("is-open");
      target.closest("#mobile-menu-button").setAttribute("aria-expanded", String(isOpen));
      return;
    }

    if (target.id === "clear-search") {
      searchInput.value = "";
      searchTerm = "";
      render();
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.id === "glossary-search") {
      const query = target.value.trim().toLowerCase();
      const entries = [...document.querySelectorAll(".glossary-item")];
      const visibleCount = entries.reduce((count, entry) => {
        const visible = entry.textContent.toLowerCase().includes(query);
        entry.hidden = !visible;
        return count + Number(visible);
      }, 0);
      const countLabel = document.getElementById("glossary-count");
      const emptyMessage = document.getElementById("glossary-empty");
      countLabel.textContent = `${visibleCount} of ${window.GLOSSARY.length} terms`;
      emptyMessage.hidden = visibleCount !== 0;
      return;
    }
    if (target === searchInput) {
      searchTerm = target.value.trim();
      renderSidebar();
      if (currentRoute().view === "home") renderHome();
      return;
    }
    if (target instanceof HTMLInputElement && target.type === "number") {
      updateCalculators();
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.matches("[data-field-check]")) {
      state.checks[target.dataset.fieldCheck] = target.checked;
      saveState();
      updateChecklistProgress("field-checklist", "field-checklist-progress", 7);
      updateChecklistProgress("design-checklist", "design-checklist-progress", 5);
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape") {
      sidebar.classList.remove("is-open");
      document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "false");
      if (document.activeElement === searchInput) {
        searchInput.value = "";
        searchTerm = "";
        render();
      }
    }
    const target = event.target;
    if (target instanceof HTMLElement && target.matches(".module-card[role='link']") && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      location.hash = `lesson/${target.dataset.lesson}`;
    }
  });

  window.addEventListener("hashchange", () => {
    quizAnswers = {};
    quizFeedback = null;
    quizResultVisible = false;
    render();
    document.getElementById("main").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.dataset.theme = state.theme;
  render();
})();
