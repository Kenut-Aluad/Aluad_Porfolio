/* ======================================================
   DESKTOP / PHONE INTERACTIONS
   Load AFTER index.js:
   - Desktop: hover and fine-pointer effects
   - Phones: brief ripple on touch
   - Motion effects are skipped when "reduce motion" is on
   ====================================================== */
(() => {
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine) {
    if (!matchMedia("(max-width: 767px) and (pointer: coarse)").matches || reduce) return;

    const css = document.createElement("style");
    css.textContent = `
      .tap-ripple {
        position: fixed;
        z-index: 9999;
        width: 24px;
        height: 24px;
        border: 2px solid #D2465A;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: tap-ripple .55s ease-out forwards;
      }
      @keyframes tap-ripple {
        to { opacity: 0; transform: translate(-50%, -50%) scale(2.2); }
      }
    `;
    document.head.append(css);

    document.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch") return;
      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.setAttribute("aria-hidden", "true");
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.append(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    }, { passive: true });
    return;
  }

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const make = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    document.body.append(e);
    return e;
  };

  /* ---------- Styles ---------- */
  const css = document.createElement("style");
  css.textContent = `
    /* tilt cards + glare */
    .fx-tilt { position: relative; transform-style: preserve-3d; will-change: transform; }
    .fx-tilt::after { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; transition: opacity .25s;
      background: radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgba(210,70,90,.14), transparent 45%); }
    html.dark .fx-tilt::after { background: radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,.10), transparent 45%); }
    .fx-tilt:hover::after { opacity: 1; }

    /* scroll reveal */
    .fx-reveal { opacity: 0; translate: 0 32px; }
    .fx-reveal.fx-in { opacity: 1; translate: 0 0; }

    /* drag-to-scroll certificates */
    #certTrack { cursor: grab; }
    #certTrack.dragging { cursor: grabbing; user-select: none; }
    #certTrack img { -webkit-user-drag: none; }

    /* side dot navigation */
    .fx-dots { position: fixed; right: 18px; top: 50%; z-index: 60; display: none; flex-direction: column; gap: 6px;
      transform: translateY(-50%); padding: 10px 8px; border-radius: 999px;
      background: rgba(11,11,12,.6); backdrop-filter: blur(8px); border: 1px solid rgba(243,233,216,.14); }
    @media (min-width: 1100px) { .fx-dots { display: flex; } }
    .fx-dot-link { position: relative; display: block; width: 22px; height: 18px; }
    .fx-dot-link::before { content: ""; position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; translate: -50% -50%;
      border-radius: 50%; border: 1.5px solid #E8D5A8; transition: background .2s, scale .2s; }
    .fx-dot-link:hover::before { scale: 1.3; }
    .fx-dot-link[aria-current="true"]::before { background: #D2465A; border-color: #D2465A; scale: 1.25; }
    .fx-dot-link span { position: absolute; right: 150%; top: 50%; translate: 6px -50%; opacity: 0; pointer-events: none; white-space: nowrap;
      padding: .25rem .65rem; border-radius: 999px; background: #1B1114; color: #F3E9D8; font-size: .8rem; transition: opacity .2s, translate .2s; }
    .fx-dot-link:hover span { opacity: 1; translate: 0 -50%; }

    /* shortcuts hint + panel */
    .fx-hint { position: fixed; left: 18px; bottom: 18px; z-index: 60; padding: .45rem .9rem; border-radius: 999px;
      background: rgba(11,11,12,.8); color: #F3E9D8; font-size: .8rem; border: 1px solid rgba(243,233,216,.18);
      transition: opacity .5s; pointer-events: none; }
    .fx-hint kbd, .fx-help kbd { padding: .1rem .45rem; border-radius: 6px; border: 1px solid rgba(243,233,216,.35); background: rgba(255,255,255,.08); font: inherit; font-weight: 700; }
    .fx-help { position: fixed; left: 50%; top: 50%; z-index: 9998; translate: -50% -50%; width: min(92vw, 380px); padding: 1.5rem;
      border-radius: 18px; background: #1B1114; color: #F3E9D8; border: 1px solid rgba(210,70,90,.4);
      box-shadow: 0 24px 70px rgba(0,0,0,.55); display: none; }
    .fx-help.open { display: block; }
    .fx-help h3 { margin: 0 0 .8rem; font: 700 1.2rem "Bricolage Grotesque", sans-serif; }
    .fx-help ul { margin: 0; padding: 0; list-style: none; display: grid; gap: .55rem; font-size: .95rem; }
    .fx-help li { display: flex; justify-content: space-between; gap: 1rem; color: #CBBFA8; }
  `;
  document.head.append(css);

  /* ---------- Magnetic buttons ---------- */
  const magnets = reduce ? [] : $$(".hero-actions a, #theme, #formBtn, #copyBtn, .contact-icon").map((el) => {
    const m = { el, tx: 0, ty: 0, x: 0, y: 0 };
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      m.tx = (e.clientX - (r.left + r.width / 2)) * 0.28;
      m.ty = (e.clientY - (r.top + r.height / 2)) * 0.28;
    });
    el.addEventListener("mouseleave", () => { m.tx = m.ty = 0; });
    return m;
  });

  /* ---------- Hero parallax ---------- */
  const about = $("#about");
  const heroImg = $(".hero-photo img");
  const heroText = $(".hero-text");
  const par = { tx: 0, ty: 0, x: 0, y: 0 };
  if (about && !reduce) {
    about.addEventListener("mousemove", (e) => {
      const r = about.getBoundingClientRect();
      par.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      par.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
    about.addEventListener("mouseleave", () => { par.tx = par.ty = 0; });
  }

  /* ---------- Animation loop ---------- */
  (function loop() {
    magnets.forEach((m) => {
      m.x += (m.tx - m.x) * 0.18;
      m.y += (m.ty - m.y) * 0.18;
      if (Math.abs(m.x) > 0.05 || Math.abs(m.y) > 0.05 || m.tx || m.ty) {
        m.el.style.translate = `${m.x.toFixed(2)}px ${m.y.toFixed(2)}px`;
      } else {
        m.el.style.translate = "";
      }
    });

    if (heroImg) {
      par.x += (par.tx - par.x) * 0.08;
      par.y += (par.ty - par.y) * 0.08;
      heroImg.style.transform = `translate(${(-par.x * 16).toFixed(2)}px, ${(-par.y * 10).toFixed(2)}px)`;
      if (heroText) heroText.style.translate = `${(par.x * 6).toFixed(2)}px ${(par.y * 4).toFixed(2)}px`;
    }
    requestAnimationFrame(loop);
  })();

  /* ---------- 3D tilt cards ---------- */
  if (!reduce) {
    const tiltSel = "#projects article, #certTrack article, .skill-group-card";
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(tiltSel);
      if (!card) return;
      if (!card.classList.contains("fx-tilt")) card.classList.add("fx-tilt");
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.transition = "transform .12s ease-out";
      card.style.transform =
        `perspective(900px) rotateX(${((0.5 - py) * 7).toFixed(2)}deg) rotateY(${((px - 0.5) * 9).toFixed(2)}deg) translateY(-6px)`;
      card.style.setProperty("--gx", px * 100 + "%");
      card.style.setProperty("--gy", py * 100 + "%");
    });
    document.addEventListener("mouseout", (e) => {
      const card = e.target.closest(tiltSel);
      if (!card || card.contains(e.relatedTarget)) return;
      card.style.transition = "transform .45s ease";
      card.style.transform = "";
      setTimeout(() => { card.style.transition = ""; }, 460);
    });
  }

  /* ---------- Scroll reveal ---------- */
  if (!reduce) {
    const targets = $$(".skill-group-card, #projects article, #certTrack article, #contact h2, #contact form, section > div > h2");
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        reveal.unobserve(el);
        const siblings = [...(el.parentElement?.children || [])];
        const delay = Math.min(siblings.indexOf(el), 5) * 90;
        el.style.transition = `opacity .7s ease ${delay}ms, translate .7s ease ${delay}ms`;
        el.classList.add("fx-in");
        setTimeout(() => { el.style.transition = ""; }, 800 + delay);
      });
    }, { threshold: 0.12 });
    targets.forEach((el) => { el.classList.add("fx-reveal"); reveal.observe(el); });
  }

  /* ---------- Drag-to-scroll certificates ---------- */
  const track = $("#certTrack");
  if (track) {
    let down = false, moved = false, startX = 0, startLeft = 0;
    track.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      down = true; moved = false;
      startX = e.clientX; startLeft = track.scrollLeft;
    });
    addEventListener("mousemove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        track.classList.add("dragging");
        track.style.scrollSnapType = "none";
      }
      if (moved) track.scrollLeft = startLeft - dx;
    });
    addEventListener("mouseup", () => {
      if (!down) return;
      down = false;
      track.classList.remove("dragging");
      track.style.scrollSnapType = "x mandatory";
    });
    // a drag should not open the lightbox
    track.addEventListener("click", (e) => {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  }

  /* ---------- Side dot navigation ---------- */
  const sections = [
    ["about", "About"], ["skills", "Skills"], ["experience", "Experience"],
    ["certificates", "Certificates"], ["contact", "Contact"]
  ];
  const nav = make("nav", "fx-dots");
  nav.setAttribute("aria-label", "Section navigation");
  nav.innerHTML = sections.map(([id, label]) =>
    `<a class="fx-dot-link" href="#${id}" aria-label="${label}"><span>${label}</span></a>`).join("");
  const dotLinks = $$(".fx-dot-link", nav);

  const dotSpy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dotLinks.forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(([id]) => { const s = document.getElementById(id); if (s) dotSpy.observe(s); });

  /* ---------- Keyboard shortcuts ---------- */
  const help = make("div", "fx-help",
    `<h3>Keyboard shortcuts</h3>
     <ul>
       <li><span>Jump to About</span><kbd>1</kbd></li>
       <li><span>Jump to Skills</span><kbd>2</kbd></li>
       <li><span>Jump to Projects</span><kbd>3</kbd></li>
       <li><span>Jump to Certificates</span><kbd>4</kbd></li>
       <li><span>Jump to Contact</span><kbd>5</kbd></li>
       <li><span>Switch theme</span><kbd>T</kbd></li>
       <li><span>Show / hide this panel</span><kbd>?</kbd></li>
     </ul>`);
  help.setAttribute("role", "dialog");
  help.setAttribute("aria-label", "Keyboard shortcuts");

  const hint = make("div", "fx-hint", "Press <kbd>?</kbd> for shortcuts");
  setTimeout(() => { hint.style.opacity = "0"; }, 6000);

  addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;

    if (e.key === "Escape") { help.classList.remove("open"); return; }
    if (document.querySelector("dialog[open]")) return;

    if (e.key === "?") { help.classList.toggle("open"); hint.style.opacity = "0"; return; }
    if (e.key.toLowerCase() === "t") { $("#theme")?.click(); return; }

    const i = Number(e.key) - 1;
    if (i >= 0 && i < sections.length) {
      document.getElementById(sections[i][0])?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  });
  document.addEventListener("click", (e) => {
    if (help.classList.contains("open") && !help.contains(e.target)) help.classList.remove("open");
  });
})();