// ============================================================
// PONTE — vanilla JS app
// State machine + autosave to localStorage. No frameworks.
// ============================================================

(function () {
  const LS_KEY = "ponte:v1";
  const A = window.PONTE;

  // ---------- State ------------------------------------------
  const initialState = () => ({
    screen: "welcome",
    stageIdx: 0,       // 0/1/2 inside an exercise
    answers: {
      presente: {},    // areaId -> text
      futuro: {},
      ponte: {},
      pillars: {},     // pillarId -> text
      compromisso: ""
    }
  });

  // Allow ?screen=presente&stage=0 to deep-link (used by design canvas)
  const url = new URL(location.href);
  const qScreen = url.searchParams.get("screen");
  const qStage  = parseInt(url.searchParams.get("stage") || "0", 10);
  let state = (qScreen ? null : load()) || initialState();
  if (qScreen) {
    state.screen = qScreen;
    state.stageIdx = isNaN(qStage) ? 0 : qStage;
  }
  function load() {
    try { const raw = localStorage.getItem(LS_KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); flashSave(); }
    catch (e) {}
  }
  let saveTimer = null;
  function flashSave() {
    const bar = document.querySelector(".save-bar .saved");
    if (!bar) return;
    bar.textContent = "Guardado · " + new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  // ---------- Navigation -------------------------------------
  function go(screen, opts = {}) {
    state.screen = screen;
    if (opts.stageIdx !== undefined) state.stageIdx = opts.stageIdx;
    save();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Rendering helpers ------------------------------
  function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else if (k === "style" && typeof attrs[k] === "object") Object.assign(e.style, attrs[k]);
      else if (attrs[k] === false || attrs[k] === null || attrs[k] === undefined) {}
      else e.setAttribute(k, attrs[k]);
    }
    for (const c of children.flat()) {
      if (c === null || c === undefined || c === false) continue;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return e;
  }

  // ---------- Top bar + progress -----------------------------
  function topbar() {
    const inExercise = ["presente", "futuro", "ponte-prefacio", "ponte"].includes(state.screen);
    const dots = ["presente", "futuro", "ponte"].map((s, i) => {
      const on = (state.screen === s) ||
                 (s === "ponte" && state.screen === "ponte-prefacio") ||
                 (inExercise && ["presente","futuro","ponte"].indexOf(state.screen === "ponte-prefacio" ? "ponte" : state.screen) > i);
      return el("span", { class: "dot", "data-on": on || null });
    });
    return el("header", { class: "topbar" },
      el("a", { class: "brand", href: "#", onClick: e => { e.preventDefault(); go("welcome"); } },
        el("span", { class: "italic" }, "Elaine Narcizo"),
        el("span", { class: "sep" }),
        el("span", { class: "mark" }, "PONTE")
      ),
      inExercise
        ? el("div", { class: "progress" }, "Presente · Futuro · Ponte", ...dots)
        : null
    );
  }

  // ---------- Welcome ----------------------------------------
  function welcomeScreen() {
    const stage = A.stages[0];
    return el("section", { class: "screen welcome", "data-active": "true", "data-theme": "verde" },
      el("div", { class: "bg", style: { backgroundImage: `url('${stage.bg}')` } }),
      el("div", { class: "panel" },
        el("div", { class: "hello" }, A.welcome.salutation),
        el("h1", { class: "greeting" }, A.welcome.greeting),
        el("p", { class: "body" }, A.welcome.body),
        el("div", { class: "cta-row" },
          el("button", { class: "btn btn-primary", onClick: () => go("about") },
            A.welcome.cta, el("span", { class: "arrow" }, "→")),
          el("button", { class: "btn btn-ghost", onClick: () => {
            if (confirm("Recomeçar o percurso? Tudo que você escreveu será apagado.")) {
              state = initialState(); save(); render();
            }
          } }, "Recomeçar")
        )
      )
    );
  }

  // ---------- About ------------------------------------------
  function aboutScreen() {
    return el("section", { class: "screen", "data-active": "true", "data-theme": "verde" },
      topbar(),
      el("div", { class: "page" },
        el("div", { class: "eyebrow-row" },
          el("span", { class: "rule" }),
          A.about.eyebrow
        ),
        el("h1", { class: "page-title" }, A.about.title),
        el("p", { class: "lede" }, A.about.body),
        el("p", { class: "body" }, A.about.materials),
        el("div", { class: "stage-map" },
          ...A.stages.map((s, i) => el("a", {
            class: "stage-card", "data-theme": s.theme,
            href: "#", onClick: e => { e.preventDefault(); openStage(i); }
          },
            el("div", { class: "swatch", style: { backgroundImage: `url('${s.bg}')` } }),
            el("div", { class: "n" }, s.number),
            el("h3", { class: "t" }, s.title),
            el("p", { class: "tag" }, s.tagline)
          ))
        ),
        el("div", { class: "cta-row" },
          el("button", { class: "btn btn-primary", onClick: () => openStage(0) },
            A.about.cta, el("span", { class: "arrow" }, "→"))
        )
      )
    );
  }

  function openStage(i) {
    state.stageIdx = i;
    save();
    go("stage-cover");
  }

  // ---------- Stage cover ------------------------------------
  function stageCoverScreen() {
    const s = A.stages[state.stageIdx];
    return el("section", { class: "screen cover", "data-active": "true", "data-theme": s.theme },
      el("div", { class: "bg", style: { backgroundImage: `url('${s.bg}')` } }),
      topbar(),
      el("div", { class: "inner" },
        el("div", { class: "eyebrow" }, el("span", { class: "num" }, s.number), "exercício " + (state.stageIdx + 1)),
        el("h1", { class: "title" }, s.title),
        el("p", { class: "tagline" }, s.tagline),
        s.cue ? el("div", { class: "cue" }, "♪ ",
          s.cueLink
            ? el("a", { href: s.cueLink, target: "_blank", rel: "noopener" }, s.cue)
            : el("span", null, s.cue)
        ) : null,
        el("div", { class: "cta-row", style: { marginTop: "32px" } },
          el("button", { class: "btn btn-primary", onClick: () => {
            // Stage 3 (ponte) goes through pillars preface first
            if (s.id === "ponte") go("ponte-prefacio");
            else go(s.id);
          } }, "Começar", el("span", { class: "arrow" }, "→"))
        )
      )
    );
  }

  // ---------- Areas list (Exercise 1, 2, 3) ------------------
  function areasScreen(stageId) {
    const stage = A.stages.find(s => s.id === stageId);
    return el("section", { class: "screen", "data-active": "true", "data-theme": stage.theme },
      topbar(),
      el("div", { class: "page" },
        el("div", { class: "eyebrow-row" },
          el("span", { class: "num" }, stage.number),
          stage.title.toUpperCase(),
          el("span", { class: "rule" })
        ),
        el("h1", { class: "page-title", html: stagePromptTitle(stageId) }),
        el("p", { class: "lede" }, stage.prompt),
        el("div", { class: "areas" },
          ...A.areas.map(area => areaBlock(stageId, area))
        ),
        nextRow(stageId)
      ),
      saveBar(stageId)
    );
  }

  function stagePromptTitle(stageId) {
    if (stageId === "presente") return "Faça o inventário do que <em>já é</em>.";
    if (stageId === "futuro")   return "O que você <em>não deseja</em> para o futuro?";
    if (stageId === "ponte")    return "Que ações você <em>pode iniciar agora</em>?";
    return "";
  }

  function areaBlock(stageId, area) {
    const val = state.answers[stageId][area.id] || "";
    const filled = val.trim().length > 0;
    const input = el("textarea", {
      class: "area-input", rows: "2",
      placeholder: "Escreva, sem pressa…",
      onInput: e => {
        state.answers[stageId][area.id] = e.target.value;
        clearTimeout(saveTimer);
        saveTimer = setTimeout(save, 350);
        // update counter live
        const c = e.target.parentNode.querySelector(".area-counter");
        if (c) {
          const f = e.target.value.trim().length > 0;
          c.setAttribute("data-filled", f);
          c.textContent = f ? "guardado" : "em branco";
        }
      }
    });
    input.value = val;
    const promptText = area[stageId] || "";
    return el("div", { class: "area" },
      el("div", { class: "area-head" },
        el("h3", { class: "area-name" }, area.name.toLowerCase()),
        el("span", { class: "area-counter", "data-filled": filled }, filled ? "guardado" : "em branco")
      ),
      el("p", { class: "area-prompt" }, promptText),
      input,
      stageId === "ponte" && area.sugestoes && area.sugestoes.length
        ? el("div", { class: "area-sugg" },
            el("details", null,
              el("summary", null, "ver sugestões da Elaine (" + area.sugestoes.length + ")"),
              el("ul", null,
                ...area.sugestoes.map(s => el("li", {
                  onClick: () => {
                    const cur = input.value.trim();
                    input.value = cur ? (cur + "\n• " + s) : ("• " + s);
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                    input.focus();
                  }
                }, s))
              )
            )
          )
        : null
    );
  }

  function nextRow(stageId) {
    const order = ["presente", "futuro", "ponte"];
    const i = order.indexOf(stageId);
    const isLast = i === order.length - 1;
    return el("div", { class: "cta-row", style: { marginTop: "32px" } },
      el("button", { class: "btn btn-secondary", onClick: () => go("about") }, "← Voltar ao mapa"),
      el("button", { class: "btn btn-primary", onClick: () => {
        if (isLast) go("compromisso");
        else openStage(i + 1);
      } },
        isLast ? "Atravessar para o compromisso" : "Atravessar para o próximo exercício",
        el("span", { class: "arrow" }, "→"))
    );
  }

  function saveBar(stageId) {
    return el("div", { class: "save-bar", "data-show": "true" },
      el("span", { class: "indicator" }),
      el("span", { class: "saved" }, "Guardado automaticamente"),
      el("button", { class: "next", onClick: () => {
        const order = ["presente", "futuro", "ponte"];
        const i = order.indexOf(stageId);
        if (i === order.length - 1) go("compromisso");
        else openStage(i + 1);
      } }, "Continuar →")
    );
  }

  // ---------- Pillars preface (before Exercise 3) ------------
  function pillarsScreen() {
    return el("section", { class: "screen", "data-active": "true", "data-theme": "laranja" },
      topbar(),
      el("div", { class: "page page-wide" },
        el("div", { class: "eyebrow-row" },
          el("span", { class: "num" }, "03"),
          "ANTES DA PONTE — TRÊS FUNDAMENTOS",
          el("span", { class: "rule" })
        ),
        el("h1", { class: "page-title", html: "Antes das ações, três <em>fundamentos</em>." }),
        el("p", { class: "lede" },
          "A Ponte só fica de pé sobre relações cultivadas, presença em grupos, e uma certa beleza necessária. Antes de listar ações, dedique alguns minutos a cada um destes pilares."),
        el("div", { class: "pillars" },
          ...A.pillars.map(p => pillarBlock(p))
        ),
        el("div", { class: "cta-row", style: { marginTop: "32px" } },
          el("button", { class: "btn btn-secondary", onClick: () => openStage(2) }, "← Voltar à capa"),
          el("button", { class: "btn btn-primary", onClick: () => go("ponte") },
            "Atravessar para as ações da Ponte", el("span", { class: "arrow" }, "→"))
        )
      )
    );
  }

  function pillarBlock(p) {
    const val = state.answers.pillars[p.id] || "";
    const ta = el("textarea", {
      placeholder: "Liste, sem ordem, o que vier à mente…",
      onInput: e => {
        state.answers.pillars[p.id] = e.target.value;
        clearTimeout(saveTimer);
        saveTimer = setTimeout(save, 350);
      }
    });
    ta.value = val;
    return el("div", { class: "pillar" },
      el("div", { class: "left" },
        el("div", { class: "eyebrow" }, p.eyebrow)
      ),
      el("div", null,
        el("h3", null, p.title),
        el("p", null, p.body),
        el("ul", { class: "tasks" }, ...p.tasks.map(t => el("li", null, t))),
        ta
      )
    );
  }

  // ---------- Compromisso ------------------------------------
  function compromissoScreen() {
    const c = A.compromisso;
    const ta = el("textarea", {
      placeholder: c.placeholder,
      onInput: e => {
        state.answers.compromisso = e.target.value;
        clearTimeout(saveTimer);
        saveTimer = setTimeout(save, 350);
      }
    });
    ta.value = state.answers.compromisso || "";
    return el("section", { class: "screen", "data-active": "true", "data-theme": "laranja" },
      topbar(),
      el("div", { class: "page" },
        el("div", { class: "eyebrow-row" },
          el("span", { class: "rule" }),
          c.eyebrow,
          el("span", { class: "rule" })
        ),
        el("h1", { class: "page-title" }, c.title),
        el("p", { class: "lede" }, c.body),
        el("div", { class: "letter" },
          el("p", { class: "salut" }, "Eu, "),
          ta,
          el("div", { class: "sig" }, "— sua assinatura aqui"),
          el("p", { class: "close" }, c.closing,
            el("span", { style: { display: "block", marginTop: "16px" } }, c.signature))
        ),
        el("div", { class: "cta-row", style: { marginTop: "24px" } },
          el("button", { class: "btn btn-secondary", onClick: () => window.print() }, "Imprimir / salvar PDF"),
          el("button", { class: "btn btn-ghost", onClick: () => go("about") }, "← Revisitar o mapa"),
          el("button", { class: "btn btn-primary", onClick: () => alert("Envie esta declaração para alguém de confiança — pode ser por mensagem, e-mail, papel mesmo. Esse é o gesto mais importante deste percurso.") },
            "Enviar para alguém de confiança", el("span", { class: "arrow" }, "→"))
        )
      )
    );
  }

  // ---------- Master render ----------------------------------
  const root = document.getElementById("app");
  function render() {
    root.innerHTML = "";
    let node;
    switch (state.screen) {
      case "welcome":         node = welcomeScreen(); break;
      case "about":           node = aboutScreen(); break;
      case "stage-cover":     node = stageCoverScreen(); break;
      case "presente":        node = areasScreen("presente"); break;
      case "futuro":          node = areasScreen("futuro"); break;
      case "ponte-prefacio":  node = pillarsScreen(); break;
      case "ponte":           node = areasScreen("ponte"); break;
      case "compromisso":     node = compromissoScreen(); break;
      default:                node = welcomeScreen();
    }
    root.appendChild(node);
  }

  render();
  // expose for debugging
  window.__ponte = { state, go, reset: () => { state = initialState(); save(); render(); } };
})();
