(function (global) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function flow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : "";
      return node + arrow;
    });
    return `<div class="flow">${parts.join("")}</div>`;
  }

  function vflow(steps) {
    const parts = (steps || []).map((step, i) => {
      const node = `<div class="node">${esc(step)}</div>`;
      const arrow = i < steps.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : "";
      return node + arrow;
    });
    return `<div class="vflow">${parts.join("")}</div>`;
  }

  function compare(headers, rows) {
    const th = (headers || []).map((h) => `<th>${esc(h)}</th>`).join("");
    const body = (rows || [])
      .map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="map-wrap"><table class="compare"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function tree(root, branches) {
    const kids = (branches || [])
      .map((b) => `<div class="node">${typeof b === "string" ? esc(b) : b}</div>`)
      .join("");
    return `<div class="tree"><div class="node">${esc(root)}</div><div class="row">${kids}</div></div>`;
  }

  function decision(title, yes, no) {
    return `<div class="tree">
      <div class="node">${esc(title)}</div>
      <div class="row">
        <div class="node">Yes → ${esc(yes)}</div>
        <div class="node">No → ${esc(no)}</div>
      </div>
    </div>`;
  }

  function svgStack(layers) {
    const h = 28 + layers.length * 48;
    const rects = layers
      .map((layer, i) => {
        const y = 16 + i * 48;
        const colors = ["#e07a2f", "#3fa796", "#8b86d8", "#c45c4a", "#f0b36a"];
        const c = colors[i % colors.length];
        return `<rect x="20" y="${y}" width="360" height="40" rx="8" fill="${c}" fill-opacity="0.18" stroke="${c}"/>
          <text x="200" y="${y + 26}" text-anchor="middle" fill="currentColor" font-size="13" font-family="Figtree, sans-serif">${esc(layer)}</text>`;
      })
      .join("");
    return `<svg viewBox="0 0 400 ${h}" width="100%" role="img">${rects}</svg>`;
  }

  function render(diagram) {
    if (!diagram) return "";
    if (typeof diagram === "string") return `<div class="diagram">${diagram}</div>`;
    const inner = (() => {
      switch (diagram.type) {
        case "flow":
          return flow(diagram.steps);
        case "vflow":
          return vflow(diagram.steps);
        case "compare":
          return compare(diagram.headers, diagram.rows);
        case "tree":
          return tree(diagram.root, diagram.branches);
        case "decision":
          return decision(diagram.q, diagram.yes, diagram.no);
        case "stack":
          return svgStack(diagram.layers);
        case "html":
          return diagram.html;
        default:
          return "";
      }
    })();
    const cap = diagram.title ? `<p class="search-query">${esc(diagram.title)}</p>` : "";
    return `<div class="diagram">${cap}${inner}</div>`;
  }

  global.IKSDiagrams = { render, flow, vflow, compare, tree, esc };
})(window);
