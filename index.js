// ===== Edit your content here =====
const EMAIL = "aluad.kentandrian@gmail.com";

// Put your pictures in the ./pictures folder and list them in `images`.
// Add as many as you like: visitors can swipe or use the arrows. A file that can't be found is skipped.
// period = the dates shown in the Experience section (projects are listed there too).
// Optional per project: fit: "contain" (show the whole picture), demo: "https://...", code: "https://github.com/..."
const projects = [
  { title: "PanayMonium", period: "Jul – Aug 2026", year: 2026, type: "Web Game", tags: "Godot, Blender",
    images: ["./pictures/Panay1.jpeg", "./pictures/Panay2.jpeg"],
    desc: "A sci-fi horror game inspired by Panay’s cultural heritage and folklore.",
    more: "Designed and co-developed with a team of three for DOST AI FEST (Jul – Aug 2026). Built in the Godot Engine, with the 3D models created in Blender." },
  { title: "Kissy Cafe", period: "Apr – May 2026", year: 2026, type: "Web App", tags: "JavaScript, Python,Tailwind CSS, HTML,Django, MySQL",
    images: ["./pictures/Kissycafe1.jpeg", "./pictures/Kissycafe2.jpeg"],
    desc: "A web-based inventory management system for a cafe.",
    more: "Tracks products, stock levels, categories, and inventory records. Co-developed in Apr – May 2026 with HTML, Python, Tailwind CSS, JavaScript, Django, and MySQL." },
  { title: "CRUD System - Users Gender", period: "May 2026", year: 2026, type: "Web App", tags: "HTML, Python, Tailwind CSS, JavaScript, Django, MySQL",
    images: ["./pictures/Gender1.png", "./pictures/Genders2.png"],
    desc: "A web-based CRUD system built as the final project for IT Elective 2.",
    more: "Co-developed in May 2026. The interface uses HTML, Python, and Tailwind CSS, with Django and MySQL handling the backend." },
  { title: "NEON SLITHER PRO", period: "Jan 2026", year: 2026, type: "Web Game", tags: "HTML, CSS, JavaScript",
    images: ["./pictures/neon1.png","./pictures/neon2.png"],
    desc: "A fast-paced neon snake game that runs right in the browser. Collect glowing orbs, grow longer, and avoid crashing.",
    more: "Built with HTML, CSS, and JavaScript, with no frameworks or libraries. You steer a glowing snake that grows with every orb it eats while the pace picks up, and your score tracks how long you survive. The neon look comes from glowing colors and effects on a dark background, and the game logic and controls are written in plain JavaScript." },
  { title: "KARS", period: "2025", year:2025, type: "Web App", tags: "HTML, Tailwind CSS, JavaScript",
    images: ["./pictures/kar1.jpeg","./pictures/kar2.jpeg","./pictures/kar3.jpeg","./pictures/kar4.jpeg"],
    desc: "A car resale website where users can browse, search, and view listings of used cars for sale.",
    more: "Built with HTML, Tailwind CSS, and JavaScript. KARS lets buyers explore available cars, filter listings, and view each car's details and photos, while the responsive layout keeps it easy to use on phones and desktops. The goal was to make buying and reselling cars feel simple and clear." },
  { title: "Personal Portfolio", period: "2025", year: 2025, type: "Website", tags: "HTML, CSS",
    images: ["./pictures/port1.png","./pictures/port2.png"],
    desc: "The portfolio website designed and hard-coded from scratch .",
    more: "Built at year 2025 with HTML and CSS only, with no templates or page builders. It showcases my projects, experience, and hobbies, and includes a working contact form so visitors can reach me directly." }

];

// Certificates & awards: add as many as you like. Put the pictures in ./pictures/certs/
// A missing picture just shows a plain placeholder card.
const certificates = [
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert1.png" },
  { title: "English for IT 1", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert2.png" },
  { title: "English for IT 2", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert3.png" },
  { title: "Ready, Set, Grow: Your Career Edge", issuer: "ASA Philippines · Agapay Aral Pag-ASA (Certificate of Participation)", date: "Aug 29, 2026", image: "./pictures/cert4.png" },
  { title: "Dean's Lister, 2nd Year: Information Technology", issuer: "Filamer Christian University", date: "A.Y. 2025– 2026", image: "./pictures/cert5.jpeg" },
];

const skills = {
  Languages: ["Python", "JavaScript", "SQL"],
  Frontend: ["HTML", "Tailwind CSS", "Accessibility"],
  Backend: ["Django", "MySQL", "PostgreSQL"],
  "Game & 3D": ["Godot", "Blender"],
  Networking: ["LAN cabling", "RJ45 crimping", "Network installation", "Router & switch setup"],
};

// ===== Code =====
const $ = (s) => document.querySelector(s);
const root = document.documentElement;
const chipBase = "rounded-full border border-[#E3DADB] bg-white px-4 py-1.5 hover:border-maroon dark:border-[#2B2427] dark:bg-[#171416]";

// Skill logos (Devicon CDN). Skills not listed here show no logo.
const ICON = (slug, file) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${file || slug + "-original"}.svg`;
const skillIcons = {
  "Python": ICON("python"),
  "JavaScript": ICON("javascript"),
  "HTML": ICON("html5"),
  "Tailwind CSS": ICON("tailwindcss"),
  "React" : ICON("react"),
  "Django": ICON("django", "django-plain"),
  "MySQL": ICON("mysql"),
  "PostgreSQL": ICON("postgresql"),
  "Godot": ICON("godot"),
  "Blender": ICON("blender"),
};
const networkSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/></svg>`;
const logo = (name, size = 18) => {
  if (skillIcons[name]) {
    return `<img src="${skillIcons[name]}" alt="" width="${size}" height="${size}" loading="lazy" ${name === "Django" ? 'class="dark:invert" ' : ""}onerror="this.remove()" style="width:${size}px;height:${size}px">`;
  }
  if (name === "Networking") return networkSvg;
  return "";
};

// Technical skills marquee in the hero
const techStack = ["Godot", "Blender", "HTML", "Tailwind CSS","React", "JavaScript", "Python", "Django", "MySQL", "PostgreSQL", "Networking"];
const marquee = $("#marquee");
if (marquee) {
  const chips = (hidden) => techStack.map((t) => `<span class="skill-chip" style="display:inline-flex;flex-direction:row;align-items:center;gap:8px;white-space:nowrap"${hidden ? ' aria-hidden="true"' : ""}>${logo(t)}<span>${t}</span></span>`).join("");
  marquee.innerHTML = `<div class="marquee-track">${chips(false)}${chips(true)}</div>`;
}

// Skills
const skillsEl = $("#skills");
if (skillsEl) skillsEl.innerHTML = Object.entries(skills).map(([group, items]) =>
  `<div><h3 class="mb-2 font-display font-bold">${group}</h3><div class="flex flex-wrap gap-2">${
    items.map((s) => `<span class="rounded-full border border-[#E3DADB] bg-white px-3 py-1 text-[15px] dark:border-[#2B2427] dark:bg-[#171416]" style="display:inline-flex;flex-direction:row;align-items:center;gap:8px">${logo(s, 16)}<span>${s}</span></span>`).join("")
  }</div></div>`).join("");

// Project filters
const filters = $("#filters");
const list = $("#projects");
["All", ...new Set(projects.map((p) => p.type))].forEach((type, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = type;
  b.setAttribute("aria-pressed", i === 0);
  b.className = chipBase + " aria-pressed:border-maroon aria-pressed:bg-maroon aria-pressed:text-white dark:aria-pressed:border-[#D2465A] dark:aria-pressed:bg-[#D2465A] dark:aria-pressed:text-ink";
  b.onclick = () => {
    filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    list.querySelectorAll("article").forEach((a) => a.classList.toggle("hidden", !(type === "All" || a.dataset.type === type)));
  };
  filters.append(b);
});

// Small stylesheet for the carousel and the lightbox
const extra = document.createElement("style");
extra.textContent = ".no-scrollbar{scrollbar-width:none}.no-scrollbar::-webkit-scrollbar{display:none}dialog.lightbox::backdrop{background:rgba(0,0,0,.85)}";
document.head.append(extra);
const scrollMode = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

// Lightbox: enlarge a picture, then go next / previous with the buttons, arrow keys, or a swipe
const BTN = "position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:0;background:rgba(11,11,12,.7);color:#fff;font-size:24px;line-height:1;cursor:pointer;";
const box = document.createElement("dialog");
box.className = "lightbox";
box.style.cssText = "margin:auto;padding:0;border:0;background:transparent;width:min(92vw,64rem);max-height:92vh;overflow:visible";
box.innerHTML = `
  <img alt="" style="display:block;max-width:100%;max-height:80vh;margin:0 auto;border-radius:12px;object-fit:contain">
  <button type="button" data-act="close" style="position:absolute;top:8px;right:8px;padding:4px 12px;border:0;border-radius:999px;background:rgba(11,11,12,.75);color:#fff;font-size:15px;cursor:pointer">Close</button>
  <button type="button" data-act="prev" aria-label="Previous picture" style="${BTN}left:8px">‹</button>
  <button type="button" data-act="next" aria-label="Next picture" style="${BTN}right:8px">›</button>
  <p style="margin:.6rem 0 0;text-align:center;color:#fff;font-size:15px"></p>`;
document.body.append(box);
const boxImg = box.querySelector("img"), boxCap = box.querySelector("p");
const boxPrev = box.querySelector('[data-act="prev"]'), boxNext = box.querySelector('[data-act="next"]');
let boxList = [], boxIdx = 0, boxTitle = "";
function showBox() {
  boxImg.src = boxList[boxIdx];
  boxImg.alt = boxTitle + " picture " + (boxIdx + 1);
  boxCap.textContent = boxTitle + (boxList.length > 1 ? " · " + (boxIdx + 1) + " / " + boxList.length : "");
  boxPrev.hidden = boxNext.hidden = boxList.length < 2;
}
function stepBox(d) { boxIdx = (boxIdx + d + boxList.length) % boxList.length; showBox(); }
function openBox(list, i, title) { boxList = list; boxIdx = i; boxTitle = title; showBox(); box.showModal(); }
box.onclick = (e) => {
  const act = e.target.dataset && e.target.dataset.act;
  if (e.target === box || act === "close") box.close();
  else if (act === "prev") stepBox(-1);
  else if (act === "next") stepBox(1);
};
box.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") stepBox(1); if (e.key === "ArrowLeft") stepBox(-1); });
let touchX = 0;
box.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
box.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50 && boxList.length > 1) stepBox(dx < 0 ? 1 : -1);
});

// Picture carousel for a project: swipe, arrows, dots, and tap to enlarge
function buildCarousel(p) {
  const srcs = p.images || (p.image ? [p.image] : []);
  const fit = p.fit === "contain" ? "contain" : "cover";
  const wrap = document.createElement("div");
  wrap.style.cssText = "position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:12px;background:linear-gradient(135deg,#0B0B0C,#4A0A12)";
  const ph = document.createElement("span");
  ph.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:800;color:rgba(255,255,255,.3)";
  ph.textContent = p.title.split(" ").map((w) => w[0]).join("").slice(0, 2);
  wrap.append(ph);
  if (!srcs.length) return wrap;

  const track = document.createElement("div");
  track.className = "no-scrollbar";
  track.style.cssText = "position:absolute;inset:0;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch";
  const prev = document.createElement("button");
  const next = document.createElement("button");
  [[prev, "‹", "Previous picture", "left"], [next, "›", "Next picture", "right"]].forEach(([b, t, label, side]) => {
    b.type = "button"; b.textContent = t; b.setAttribute("aria-label", label);
    b.style.cssText = BTN + side + ":8px;z-index:2";
  });
  const dots = document.createElement("div");
  dots.style.cssText = "position:absolute;bottom:8px;left:0;right:0;display:flex;justify-content:center;gap:6px;pointer-events:none;z-index:2";
  wrap.append(track, prev, next, dots);

  const slides = () => [...track.children];
  const index = () => Math.round(track.scrollLeft / (track.clientWidth || 1));
  let last = -1;
  function refresh() {
    const n = slides().length, c = Math.min(index(), Math.max(n - 1, 0));
    last = c;
    prev.hidden = next.hidden = dots.hidden = n < 2;
    dots.innerHTML = slides().map((_, i) => `<span style="width:7px;height:7px;border-radius:50%;background:${i === c ? "#fff" : "rgba(255,255,255,.45)"}"></span>`).join("");
  }
  function go(d) {
    const n = slides().length;
    track.scrollTo({ left: ((index() + d + n) % n) * track.clientWidth, behavior: scrollMode });
  }
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);
  track.addEventListener("scroll", () => { if (index() !== last) refresh(); }, { passive: true });

  srcs.forEach((src, n) => {
    const slide = document.createElement("button");
    slide.type = "button";
    slide.dataset.src = src;
    slide.setAttribute("aria-label", `Enlarge ${p.title} picture ${n + 1} of ${srcs.length}`);
    slide.style.cssText = "flex:0 0 100%;height:100%;padding:0;border:0;background:none;scroll-snap-align:center;cursor:zoom-in";
    const im = document.createElement("img");
    im.alt = `${p.title} screenshot ${n + 1}`;
    im.style.cssText = `display:block;width:100%;height:100%;object-fit:${fit}`;
    im.onload = () => { ph.style.display = "none"; };
    im.onerror = () => { slide.remove(); refresh(); };   // missing file: skip it
    im.src = src;
    slide.append(im);
    slide.onclick = () => openBox(slides().map((s) => s.dataset.src), slides().indexOf(slide), p.title);
    track.append(slide);
  });
  refresh();
  return wrap;
}

// Project cards: title, pictures, description, and expandable details
projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.dataset.type = p.type;
  card.className = "group flex flex-col overflow-hidden rounded-xl border border-[#E3DADB] bg-white transition hover:-translate-y-1 hover:border-maroon motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-[#2B2427] dark:bg-[#171416] dark:hover:border-[#D2465A]";
  const tags = p.tags.split(",").map((t) => `<span class="rounded-full bg-[#F5F2F2] px-2.5 py-0.5 text-[13px] font-medium text-maroon dark:bg-[#141214] dark:text-[#D2465A]">${t.trim()}</span>`).join("");
  const links = [p.demo && ["Live demo", p.demo], p.code && ["Source code", p.code]].filter(Boolean)
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-medium text-maroon underline underline-offset-4 dark:text-[#D2465A]">${label}</a>`).join("");
  card.innerHTML = `
    <div class="flex flex-1 flex-col gap-3 p-6">
      <div class="flex justify-between text-[15px] text-[#55494B] dark:text-[#B5A8AA]"><span>${p.type}</span><span>${p.period || p.year}</span></div>
      <h3 class="font-display text-2xl font-bold">${p.title}</h3>
      <div class="pic"></div>
      <p class="text-[#55494B] dark:text-[#B5A8AA]">${p.desc}</p>
      <div class="flex flex-wrap gap-2">${tags}</div>
      <div id="more${i}" class="hidden space-y-3 border-t border-[#E3DADB] pt-3 dark:border-[#2B2427]"><p>${p.more}</p>${links ? `<div class="flex gap-4">${links}</div>` : ""}</div>
      <button type="button" aria-expanded="false" aria-controls="more${i}" class="toggle mt-auto self-start font-medium text-maroon underline underline-offset-4 dark:text-[#D2465A]">View details</button>
    </div>`;
  card.querySelector(".pic").replaceWith(buildCarousel(p));

  const btn = card.querySelector(".toggle"), more = card.querySelector(`#more${i}`);
  btn.onclick = () => {
    const open = more.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Hide details" : "View details";
  };
  list.append(card);
});

// Certificates & awards: horizontal row with swipe, arrows, and tap-to-enlarge
const certTrack = $("#certTrack");
if (certTrack) {
  const certPrev = $("#certPrev"), certNext = $("#certNext");
  certTrack.style.cssText = "display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:4px";
  [[certPrev, "left"], [certNext, "right"]].forEach(([b, side]) => {
    if (b) b.style.cssText = BTN + side + ":-8px;z-index:2";
  });
  certTrack.innerHTML = certificates.map((c, i) => `
    <article role="listitem" class="flex flex-col overflow-hidden rounded-xl border border-[#E3DADB] bg-white dark:border-[#2B2427] dark:bg-[#171416]" style="flex:0 0 min(82%,330px);scroll-snap-align:start">
      <button type="button" data-cert="${i}" aria-label="Enlarge ${c.title}" class="block w-full" style="position:relative;aspect-ratio:4/3;padding:0;border:0;background:linear-gradient(135deg,#0B0B0C,#4A0A12);cursor:zoom-in">
        <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:12px;text-align:center;font-weight:700;color:rgba(255,255,255,.35)">${c.title}</span>
        <img src="${c.image}" alt="${c.title} certificate" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#fff" onload="this.dataset.ok=1" onerror="this.remove()">
      </button>
      <div style="padding:18px 20px 20px;text-align:left">
        <h3 class="font-display text-lg font-bold leading-snug">${c.title}</h3>
        <p class="text-[15px] text-[#55494B] dark:text-[#B5A8AA]">${c.issuer}</p>
        <p class="mt-1 text-[14px] font-medium text-maroon dark:text-[#D2465A]">${c.date}</p>
      </div>
    </article>`).join("");
  certTrack.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cert]");
    if (!b) return;
    const shown = [...certTrack.querySelectorAll("img[data-ok]")];
    const mine = b.querySelector("img[data-ok]");
    if (!mine) return;   // no picture yet: nothing to enlarge
    openBox(shown.map((im) => im.getAttribute("src")), shown.indexOf(mine), "Certificates & Awards");
  });
  const step = (d) => certTrack.scrollBy({ left: d * certTrack.clientWidth * 0.8, behavior: scrollMode });
  if (certPrev) certPrev.onclick = () => step(-1);
  if (certNext) certNext.onclick = () => step(1);
}

// Professional photo (saved in this browser)
const img = $("#photoImg"), empty = $("#photoEmpty"), input = $("#photoInput");
const photoBtn = $("#photoBtn");
if (img && empty && input && photoBtn) {
  function showPhoto(src) { img.src = src; img.classList.remove("hidden"); empty.classList.add("hidden"); }
  try { const saved = localStorage.getItem("portfolio-photo"); if (saved) showPhoto(saved); } catch (e) {}
  photoBtn.onclick = () => input.click();
  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const im = new Image();
      im.onload = () => {
        const k = Math.min(1, 800 / Math.max(im.width, im.height));
        const c = document.createElement("canvas");
        c.width = im.width * k; c.height = im.height * k;
        c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        const url = c.toDataURL("image/jpeg", 0.88);
        showPhoto(url);
        try { localStorage.setItem("portfolio-photo", url); } catch (e) {}
      };
      im.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
}

// Light / dark theme
$("#theme").onclick = () => {
  const dark = root.classList.toggle("dark");
  try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch (e) {}
};

// Count-up stats
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const counter = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  counter.unobserve(e.target);
  const el = e.target, n = +el.dataset.count, suffix = el.dataset.suffix || "";
  if (still) { el.textContent = n + suffix; return; }
  const t0 = performance.now();
  (function tick(t) {
    const k = Math.min(1, (t - t0) / 1200);
    el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + (k === 1 ? suffix : "");
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}), { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => counter.observe(el));

// Active nav link + scroll progress bar
const links = [...document.querySelectorAll(".nav-link")];
const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) links.forEach((l) => l.setAttribute("aria-current", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => spy.observe(s));
const bar = $("#progress");
addEventListener("scroll", () => {
  const h = root;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
}, { passive: true });

// Contact: copy email button
$("#copyBtn").onclick = async (e) => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText(EMAIL); b.textContent = "Copied"; } catch (x) { b.textContent = "Copy failed"; }
  setTimeout(() => (b.textContent = "Copy email"), 2000);
};

// Contact form: send to FormSubmit without leaving the page
const form = $("#form");
if (form) {
  const formBtn = $("#formBtn");
  const formStatus = $("#formStatus");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    formBtn.disabled = true;
    formBtn.textContent = "Sending...";
    formStatus.textContent = "";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (res.ok && String(data.success) === "true") {
        formStatus.textContent = "Thank you! Your message was sent.";
        formStatus.style.color = "#2e7d32";
        form.reset();
      } else {
        throw new Error(data.message || "Send failed");
      }
      } catch (err) {
      console.error(err);
      formStatus.textContent = "Error: " + err.message + " (or email me directly at " + EMAIL + ")";
      formStatus.style.color = "#c62828";
    }
    }
    formBtn.disabled = false;
    formBtn.textContent = "Send message";
  });
}
