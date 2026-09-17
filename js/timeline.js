(function (global) {
  let bound = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function spineHtml(spine) {
    if (!spine) return "";
    if (typeof spine === "string") return `<p class="tl-spine">${spine}</p>`;
    const parts = (spine.parts || []).map((p, i) => {
      const bit = `<strong>${esc(p.label)}</strong>${p.note ? ` (${esc(p.note)})` : ""}`;
      return i ? " → " + bit : bit;
    });
    const lead = spine.lead ? esc(spine.lead) + " " : "From ";
    return `<p class="tl-spine">${lead}${parts.join("")}${spine.tail ? esc(spine.tail) : ""}</p>`;
  }

  function field(label, inner) {
    if (!inner) return "";
    return `<div class="tl-field"><dt>${esc(label)}</dt><dd>${inner}</dd></div>`;
  }

  function beatsHtml(beats) {
    return `<ol class="timeline">
      ${(beats || [])
        .map((b) => {
          const schoolKey = b.school || "";
          const school = schoolKey
            ? `<span class="tl-school tl-school-${esc(schoolKey)}">${esc(b.schoolLabel || schoolKey)}</span>`
            : "";
          const who = `<strong>${esc(b.name)}</strong>${school}`;
          const def = b.defJob ? ` data-def="1"` : "";
          return `<li data-school="${esc(schoolKey)}"${def}>
            <span class="tl-node${schoolKey ? ` tl-node-${esc(schoolKey)}` : ""}" aria-hidden="true"></span>
            <article class="tl-card${schoolKey ? ` tl-card-${esc(schoolKey)}` : ""}">
              <dl class="tl-fields">
                ${field("Era / layer", `<span class="tl-year">${esc(b.year)}</span>`)}
                ${field("Who / name", who)}
                ${field("Where it lives", b.country ? `<span class="tl-where">${esc(b.country)}</span>` : "")}
                ${field("Landmark", b.work ? esc(b.work) : "")}
                ${field("What it is", esc(b.doctrine))}
                ${field("Why it matters", esc(b.shift))}
              </dl>
            </article>
          </li>`;
        })
        .join("")}
    </ol>`;
  }

  function defStripHtml(timeline) {
    if (!timeline.defInset) return spineHtml(timeline.spine);
    const d = timeline.defInset;
    return `<aside class="tl-def-strip">
      <p class="tl-def-kicker">${esc(d.kicker || "Compact map — not the full rail")}</p>
      ${spineHtml(timeline.spine)}
      <p class="tl-def-mnemo"><strong>${esc(d.name)}</strong> ${esc(d.hook)}</p>
    </aside>`;
  }

  function filterHtml(timeline) {
    const filters = timeline.filters;
    if (!filters || !filters.length) return "";
    const btns = [{ id: "all", label: "All" }, ...filters]
      .map(
        (f, i) =>
          `<button type="button" class="tl-filter${i === 0 ? " is-on" : ""}${f.school ? ` tl-school-${esc(f.school)}` : ""}" data-tl-filter="${esc(f.id)}"${f.school ? ` data-school="${esc(f.school)}"` : ""}>${esc(f.label)}</button>`
      )
      .join("");
    return `<div class="tl-filters" role="toolbar" aria-label="Filter timeline">${btns}</div>`;
  }

  function kernelsHtml(kernels) {
    if (!kernels || !kernels.length) return "";
    return `<footer class="tl-kernels">
      ${kernels
        .map(
          (k) =>
            `<p class="tl-kernel-line tl-kernel-${esc(k.school)}"><strong>${esc(k.scope || k.school)} — ${esc(k.name)}</strong> ${esc(k.hook)}</p>`
        )
        .join("")}
    </footer>`;
  }

  function applyFilter(section, key) {
    section.querySelectorAll("[data-tl-filter]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-tl-filter") === key);
    });
    section.querySelectorAll(".timeline > li").forEach((li) => {
      const match =
        key === "all" ||
        (key === "defs" && li.getAttribute("data-def") === "1") ||
        li.getAttribute("data-school") === key;
      li.hidden = !match;
    });
  }

  function bindFilters() {
    if (bound) return;
    if (typeof document === "undefined" || !document.addEventListener) return;
    bound = true;
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-tl-filter]");
      if (!btn) return;
      const section = btn.closest(".evo");
      if (!section) return;
      applyFilter(section, btn.getAttribute("data-tl-filter"));
    });
  }

  function allBeats(timeline) {
    if (timeline.beats) return timeline.beats;
    return (timeline.groups || []).flatMap((g) => g.beats || []);
  }

  function render(timeline) {
    if (!timeline) return "";
    const hook = timeline.hook ? `<p class="tl-hook">${esc(timeline.hook)}</p>` : "";
    const note = timeline.note ? `<p class="search-query">${esc(timeline.note)}</p>` : "";
    const rail = beatsHtml(allBeats(timeline));
    bindFilters();
    return `<section class="evo" id="sec-${esc(timeline.id)}" data-jump="${esc(timeline.id)}">
      <h2 class="section-title">${esc(timeline.title || "Teaching timeline")}</h2>
      ${timeline.lede ? `<p class="lede">${esc(timeline.lede)}</p>` : ""}
      ${hook}
      ${defStripHtml(timeline)}
      ${filterHtml(timeline)}
      ${rail}
      ${kernelsHtml(timeline.kernels)}
      ${note}
    </section>`;
  }

  function forTopic(topicId) {
    const map = (global.IKS && global.IKS.topicTimelines) || {};
    const catalog = (global.IKS && global.IKS.timelines) || {};
    return (map[topicId] || [])
      .map((ref) => {
        const id = typeof ref === "string" ? ref : ref.id;
        return catalog[id];
      })
      .filter(Boolean);
  }

  function renderForTopic(topicId) {
    return forTopic(topicId).map(render).join("");
  }

  function searchBlob(topicId) {
    return forTopic(topicId)
      .map((timeline) => {
        const beats = allBeats(timeline)
          .map((b) => [b.year, b.name, b.country, b.schoolLabel, b.work, b.doctrine].join(" "))
          .join(" ");
        return [timeline.title, timeline.hook, beats].join(" ");
      })
      .join(" ");
  }

  global.IKSTimeline = { render, renderForTopic, searchBlob, esc };
})(window);
