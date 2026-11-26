// ======================================================
// PORTFOLIO CONTENT
// ======================================================

const EMAIL = "aluad.kentandrian@gmail.com";

// ======================================================
// PROJECTS
// Paste your links into the demo and code fields.
// If a field is empty, clicking its button shows a
// "no live server / no repository" pop-up.
// ======================================================

const projects = [
  {
    title: "PanayMonium",
    period: "Jul – Aug 2026",
    year: 2026,
    type: "Web Game",
    tags: "Godot, Blender",
    images: ["./pictures/Panay1.jpeg", "./pictures/Panay2.jpeg"],
    desc: "A first-person psychological horror mystery set in an abandoned museum in Capiz, built around Panay's cultural heritage.",
    more: "Designed and co-developed with a team of three for DOST AI FEST (Jul – Aug 2026). Built in the Godot Engine, with the 3D models created in Blender.",
    demo: "",
    code: ""
  },

  {
    title: "Kissy Cafe",
    period: "Apr – May 2026",
    year: 2026,
    type: "Web App",
    tags: "JavaScript, Python, Tailwind CSS, HTML, Django, MySQL",
    images: ["./pictures/Kissycafe1.jpeg", "./pictures/Kissycafe2.jpeg"],
    desc: "A web-based inventory management system for a cafe.",
    more: "Tracks products, stock levels, categories, and inventory records. Co-developed in Apr – May 2026 with HTML, Python, Tailwind CSS, JavaScript, Django, and MySQL.",
    demo: "",
    code: ""
  },

  {
    title: "CRUD System - Users Gender",
    period: "May 2026",
    year: 2026,
    type: "Web App",
    tags: "HTML, Python, Tailwind CSS, JavaScript, Django, MySQL",
    images: ["./pictures/Gender1.png", "./pictures/Genders2.png"],
    desc: "A web-based CRUD system built as the final project for IT Elective 2.",
    more: "Co-developed in May 2026. The interface uses HTML, Python, and Tailwind CSS, with Django and MySQL handling the backend.",
    demo: "",
    code: ""
  },

  {
    title: "NEON SLITHER PRO",
    period: "Jan 2026",
    year: 2026,
    type: "Web Game",
    tags: "HTML, CSS, JavaScript",
    images: ["./pictures/neon1.png", "./pictures/neon2.png"],
    desc: "A fast-paced neon snake game that runs right in the browser. Collect glowing orbs, grow longer, and avoid crashing.",
    more: "Built with HTML, CSS, and JavaScript, with no frameworks or libraries.",
    demo: "https://slither-neon-nkuv.vercel.app",
    code: ""
  },

  {
    title: "KARS",
    period: "2025",
    year: 2025,
    type: "Web App",
    tags: "HTML, Tailwind CSS, JavaScript",
    images: ["./pictures/kar1.jpeg", "./pictures/kar2.jpeg", "./pictures/kar3.jpeg", "./pictures/kar4.jpeg"],
    desc: "A car resale website where users can browse, search, and view listings of used cars for sale.",
    more: "Built with HTML, Tailwind CSS, and JavaScript.",
    demo: "",
    code: ""
  },

  {
    title: "Personal Portfolio",
    period: "2025",
    year: 2025,
    type: "Website",
    tags: "HTML, CSS",
    images: ["./pictures/port1.png", "./pictures/port2.png"],
    desc: "The portfolio website designed and hard-coded from scratch.",
    more: "Built at year 2025 with HTML and CSS only, with no templates or page builders.",
    demo: "",
    code: ""
  }
];


// ======================================================
// PROJECT CASE STUDIES
// ======================================================

const projectStudies = {

  "PanayMonium": {
    overview:
      "PanayMonium is a first-person psychological horror mystery set inside an abandoned museum in Capiz. Players take on the role of a student researcher exploring the museum with the help of an AI-powered companion capable of analyzing historical artifacts and reconstructing forgotten information. As players uncover hidden stories connected to Panay's cultural heritage, the museum begins to react in unsettling ways. Exhibits move, whispers echo through empty halls, and forgotten memories manifest throughout the building. By combining horror, exploration, and AI-assisted historical investigation, the game encourages players to engage with local history in a unique and immersive way.",

    problem:
      "Many local traditions, historical records, oral histories, and cultural artifacts become forgotten over time due to limited preservation efforts and declining public engagement. Younger generations often interact more with digital media than traditional historical resources, making it increasingly difficult to maintain interest in local heritage and historical education.",

    architecture:
      "The game was built in the Godot Engine, with gameplay logic written in GDScript and 3D models created in Blender. Godot provided the game environment, scene system, and scripting, while Blender was used to build the 3D assets that fill the museum.",

    architectureParts: [
      { name: "Game Engine", tech: "Godot Engine · GDScript", role: "Scenes, interactive gameplay, and character and environment functions." },
      { name: "3D Assets", tech: "Blender", role: "3D models for the museum environment." }
    ],

    features: [
      { name: "First-Person Horror Exploration", detail: "Explore an abandoned museum in Capiz as a student researcher." },
      { name: "AI-Powered Companion", detail: "A companion that analyzes artifacts and reconstructs forgotten information." },
      { name: "A Museum That Reacts", detail: "Exhibits move, whispers echo through empty halls, and forgotten memories appear." },
      { name: "Cultural Heritage Storytelling", detail: "Players uncover hidden stories connected to Panay's history and folklore." }
    ],

    contribution:
      "I designed and modeled the 3D environment assets inside the rooms, such as trees, plants, and other props, using Blender. I also contributed GDScript code for character and environment functions. The game was co-developed with a team of three for DOST AI FEST (Jul – Aug 2026)."
  },


  "Kissy Cafe": {
    overview:
      "Kissy Cafe is a full-stack inventory management system designed to streamline how a cafe keeps track of its stock. It was developed as a second-year, second-semester final project. The system provides a centralized interface for recording, updating, and monitoring products, categories, stock levels, and inventory records, backed by a Django application and a MySQL database hosted on Render so every team member could work against the same shared data.",

    problem:
      "Small cafes often track stock using notebooks or scattered spreadsheets, which leads to outdated counts, missed restocking, and records that are hard to update. Kissy Cafe brings products, categories, and stock levels into one organized web system so inventory can be checked and updated quickly.",

    architecture:
      "The interface is built with HTML, Tailwind CSS, and JavaScript. Python and Django handle the backend logic and requests, and MySQL stores the inventory data. The database is cloud-hosted on Render so the whole team could develop and test against the same data.",

    architectureParts: [
      { name: "Frontend", tech: "HTML · Tailwind CSS · JavaScript", role: "Interactive interface, styling, dark mode, and pop-up messages." },
      { name: "Backend", tech: "Python · Django", role: "Application logic and request handling." },
      { name: "Database", tech: "MySQL on Render", role: "Shared, cloud-hosted storage for products, categories, and stock." }
    ],

    features: [
      { name: "Product Management", detail: "Organizes cafe product information in one system." },
      { name: "Stock-Level Tracking", detail: "Monitors the recorded stock levels of products." },
      { name: "Product Categories", detail: "Groups products to make inventory easier to browse." },
      { name: "Edit and Delete", detail: "Update or remove records directly from the lists." },
      { name: "Pop-up Messages", detail: "Clear feedback messages after actions are performed." },
      { name: "Dark Mode", detail: "A theme switch for comfortable use in different lighting." }
    ],

    contribution:
      "I worked on the front end. I created the UI/UX design to make the website more interactive and easy to use. I also contributed to parts of the functionality, including the pop-up messages in JavaScript, the edit and delete actions in the lists, and the dark mode of the website."
  },


  "CRUD System - Users Gender": {
    overview:
      "A web-based CRUD system built as the final project for IT Elective 2. It lets users create, view, update, and delete user records that include gender information, using Django for the backend and MySQL for storage.",

    problem:
      "Managing records by hand is slow and error-prone. This project shows how a database-driven web system can store user records in an organized way and let them be added, viewed, edited, and removed through a simple interface.",

    architecture:
      "The interface uses HTML and Tailwind CSS, while Python and Django handle the application logic and CRUD requests. MySQL stores the records. Django was chosen as the course framework because it provides built-in tools for models, forms, and database operations.",

    architectureParts: [
      { name: "Frontend", tech: "HTML · Tailwind CSS", role: "User-facing pages and forms." },
      { name: "Backend", tech: "Python · Django", role: "CRUD logic and request handling." },
      { name: "Database", tech: "MySQL", role: "Storage for the user records." }
    ],

    features: [
      { name: "Create Records", detail: "Add new user records to the system." },
      { name: "View Records", detail: "Display the stored user information." },
      { name: "Update Records", detail: "Edit existing records." },
      { name: "Delete Records", detail: "Remove records that are no longer needed." }
    ],

    contribution:
      "I designed the UI/UX of the system and set up the Django framework and the MySQL database, learning both of them while building the project."
  },


  "NEON SLITHER PRO": {
    overview:
      "NEON SLITHER PRO is a fast-paced neon snake game that runs right in the browser. You steer a glowing snake that grows with every orb it eats while the pace keeps picking up, and your score reflects how long you survive. It is built with plain HTML, CSS, and JavaScript, with no frameworks or libraries.",

    problem:
      "Many games need downloads or installs before you can play. This project aims to give players a quick, accessible arcade experience that starts instantly in any browser, while also serving as a way to practice game logic and the game loop in plain JavaScript.",

    architecture:
      "The game uses no frameworks. HTML provides the page structure, CSS creates the glowing neon look on a dark background, and JavaScript runs the game loop, controls, collisions, and score. Keeping it dependency-free makes it lightweight and easy to host.",

    architectureParts: [
      { name: "Structure", tech: "HTML", role: "Game page and interface structure." },
      { name: "Visual Design", tech: "CSS", role: "Dark neon look, glow effects, and layout." },
      { name: "Game Logic", tech: "JavaScript", role: "Controls, orb collection, snake growth, speed, and score." }
    ],

    features: [
      { name: "Snake Controls", detail: "Steer the glowing snake around the play area." },
      { name: "Orb Collection", detail: "Eating glowing orbs makes the snake grow longer." },
      { name: "Rising Difficulty", detail: "The pace picks up as the game continues." },
      { name: "Score Tracking", detail: "Your score reflects how long you survive." },
      { name: "Neon Visuals", detail: "Glowing colors and effects on a dark background." }
    ],

    contribution:
      "I built this project entirely on my own: the game design, the snake movement and collision logic, orb spawning and growth, the increasing speed, score tracking, and the neon visual style, all written in plain HTML, CSS, and JavaScript. It is deployed on Vercel."
  },


  "KARS": {
    overview:
      "KARS is a car resale website where users can browse, search, and view listings of used cars for sale. Buyers can explore available cars, filter listings, and view each car's details and photos, while the responsive layout keeps it easy to use on both phones and desktops.",

    problem:
      "Buying a used car online can feel cluttered and confusing when listings are hard to search and details are scattered. KARS aims to make browsing and comparing cars simple and clear, from the listing grid down to each car's photos and information.",

    architecture:
      "KARS is a front-end project built with HTML, Tailwind CSS, and JavaScript. HTML structures the pages, Tailwind CSS provides a quick, responsive layout, and JavaScript handles searching, filtering, and showing each car's details.",

    architectureParts: [
      { name: "Page Structure", tech: "HTML", role: "Layout of the listing and detail pages." },
      { name: "Styling", tech: "Tailwind CSS", role: "Responsive design for phones and desktops." },
      { name: "Interactions", tech: "JavaScript", role: "Search, filtering, and car detail views." }
    ],

    features: [
      { name: "Car Listings", detail: "Browse the used cars available for sale." },
      { name: "Search and Filtering", detail: "Narrow listings down to what you are looking for." },
      { name: "Car Details and Photos", detail: "View information and images for each car." },
      { name: "Responsive Layout", detail: "Works comfortably on phones and desktop screens." }
    ],

    contribution:
      "I built this project on my own, from designing the layout and styling it with Tailwind CSS to writing the JavaScript for the listings, search, filtering, and car detail views."
  },


  "Personal Portfolio": {
    overview:
      "My personal portfolio, hard-coded from scratch while I was learning web development. It showcases my projects, experience, and interests in one place, and includes a working contact form so visitors can reach me directly. No templates or page builders were used.",

    problem:
      "As a student looking for opportunities, I needed one place where employers and collaborators could see who I am, what I have built, and how to contact me, instead of sending scattered files and links.",

    architecture:
      "The first version was written by hand in HTML and CSS, with no templates or builders. Writing everything manually was a deliberate choice, since it forced me to understand layout, spacing, responsiveness, and page structure rather than relying on a tool.",

    architectureParts: [
      { name: "Page Structure", tech: "HTML", role: "Sections and content of the portfolio." },
      { name: "Visual Presentation", tech: "CSS", role: "Layout, styling, and responsive design." }
    ],

    features: [
      { name: "Project Showcase", detail: "Presents selected projects with descriptions and screenshots." },
      { name: "Experience and Interests", detail: "Gives visitors background about me." },
      { name: "Contact Form", detail: "Lets visitors send me a message directly." },
      { name: "Hand-Coded Design", detail: "Every section was written from scratch as a learning exercise." }
    ],

    contribution:
      "I designed, wrote, and styled the whole portfolio myself, from planning the sections and layout to coding the pages and connecting the contact form, learning as I went."
  }
};


// ======================================================
// CERTIFICATES AND AWARDS
// ======================================================

const certificates = [
  { title: "Creating Compelling Reports", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert1.png" },
  { title: "English for IT 1", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert2.png" },
  { title: "English for IT 2", issuer: "Cisco Networking Academy", date: "16 Nov 2026", image: "./pictures/cert3.png" },
  { title: "Ready, Set, Grow: Your Career Edge", issuer: "ASA Philippines · Agapay Aral Pag-ASA (Certificate of Participation)", date: "Aug 29, 2026", image: "./pictures/cert4.png" },
  { title: "Dean's Lister, 2nd Year: Information Technology", issuer: "Filamer Christian University", date: "A.Y. 2025– 2026", image: "./pictures/cert5.jpeg" }
];


// ======================================================
// CURATED SKILLS MATRIX
// ======================================================

const skillGroups = [
  {
    category: "Languages",
    items: [
      { name: "Python", tier: "Comfortable" },
      { name: "JavaScript", tier: "Comfortable" },
      { name: "HTML", tier: "Comfortable" },
      { name: "CSS", tier: "Comfortable" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Django", tier: "Comfortable" },
      { name: "Tailwind CSS", tier: "Comfortable" },
      { name: "React", tier: "Familiar" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", tier: "Comfortable" },
      { name: "PostgreSQL", tier: "Familiar" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Godot", tier: "Working knowledge" },
      { name: "Blender", tier: "Working knowledge" },
      { name: "Figma", tier: "Familiar" },
      { name: "Networking", tier: "Familiar" }
    ]
  }
];


// ======================================================
// SOFT SKILLS
// ======================================================

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Creativity",
  "Attention to Detail"
];


// ======================================================
// GENERAL SETTINGS
// ======================================================

const $ = (s) => document.querySelector(s);
const root = document.documentElement;

const chipBase =
  "rounded-full border border-[#E3DADB] bg-white px-4 py-1.5 hover:border-maroon dark:border-[#2B2427] dark:bg-[#171416]";


// ======================================================
// SKILL ICONS
// ======================================================

const ICON = (slug, file) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${file || slug + "-original"}.svg`;

const skillIcons = {
  "Python": ICON("python"),
  "JavaScript": ICON("javascript"),
  "HTML": ICON("html5"),
  "CSS": ICON("css3"),
  "Tailwind CSS": ICON("tailwindcss"),
  "React": ICON("react"),
  "Django": ICON("django", "django-plain"),
  "MySQL": ICON("mysql"),
  "PostgreSQL": ICON("postgresql"),
  "Godot": ICON("godot"),
  "Blender": ICON("blender"),
  "Figma": ICON("figma")
};

const lineIcon = (paths, size = 18) => `
  <svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>
`;

const lineIcons = {
  "Networking":
    '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/>',
  "Teamwork":
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "Communication":
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  "Problem Solving":
    '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  "Adaptability":
    '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  "Time Management":
    '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  "Creativity":
    '<path d="M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z"/>',
  "Attention to Detail":
    '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "Eagerness to Learn":
    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
};

const logo = (name, size = 18) => {
  if (skillIcons[name]) {
    return `<img src="${skillIcons[name]}" alt="" width="${size}" height="${size}" loading="lazy"
      ${name === "Django" ? 'class="dark:invert" ' : ""}onerror="this.remove()"
      style="width:${size}px;height:${size}px">`;
  }
  if (lineIcons[name]) return lineIcon(lineIcons[name], size);
  return "";
};


// ======================================================
// RENDER SKILLS + SOFT SKILLS
// ======================================================

function renderSkillsMatrix() {
  const matrix = $("#skillsMatrix");
  if (!matrix) return;

  const tierClass = (tier) => ({
    "Comfortable": "tier-comfortable",
    "Working knowledge": "tier-working",
    "Familiar": "tier-familiar"
  }[tier] || "tier-familiar");

  matrix.innerHTML = skillGroups.map((group, index) => `
    <article class="skill-group-card">
      <div class="skill-group-heading">
        <span class="skill-group-number">0${index + 1}</span>
        <h3>${group.category}</h3>
      </div>
      <ul class="skill-items">
        ${group.items.map((skill) => `
          <li class="skill-item-row">
            <span class="skill-item-name">${logo(skill.name, 22)}<span>${skill.name}</span></span>
            <span class="skill-tier ${tierClass(skill.tier)}">${skill.tier}</span>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");
}

function renderSoftSkills() {
  const container = $("#softSkillsList");
  if (!container) return;

  const chip = (name, hidden) => `
    <span class="soft-skill-chip"${hidden ? ' aria-hidden="true"' : ""}>${logo(name, 18)}<span>${name}</span></span>
  `;

  // 4 copies so the loop never shows a gap, even on wide screens
  container.innerHTML = [0, 1, 2, 3]
    .map((copy) => softSkills.map((name) => chip(name, copy > 0)).join(""))
    .join("");
}

renderSkillsMatrix();
renderSoftSkills();


// ======================================================
// PROJECT FILTERS
// ======================================================

const filters = $("#filters");
const list = $("#projects");

["All", ...new Set(projects.map((p) => p.type))].forEach((type, i) => {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = type;
  button.setAttribute("aria-pressed", i === 0);
  button.className =
    chipBase +
    " aria-pressed:border-maroon aria-pressed:bg-maroon aria-pressed:text-white dark:aria-pressed:border-[#D2465A] dark:aria-pressed:bg-[#D2465A] dark:aria-pressed:text-ink";

  button.onclick = () => {
    filters.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", item === button);
    });
    list.querySelectorAll("article").forEach((article) => {
      article.classList.toggle("hidden", !(type === "All" || article.dataset.type === type));
    });
  };

  filters.append(button);
});


// ======================================================
// LIGHTBOX SETTINGS
// ======================================================

const extra = document.createElement("style");

extra.textContent = `
  .no-scrollbar { scrollbar-width: none; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  dialog.lightbox::backdrop { background: rgba(0,0,0,.85); }
`;

document.head.append(extra);

const scrollMode =
  matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

const BTN =
  "position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:0;background:rgba(11,11,12,.7);color:#fff;font-size:24px;line-height:1;cursor:pointer;";


// ======================================================
// IMAGE LIGHTBOX
// ======================================================

const box = document.createElement("dialog");

box.className = "lightbox";

box.style.cssText = `
  margin:auto;
  padding:0;
  border:0;
  background:transparent;
  width:min(92vw,64rem);
  max-height:92vh;
  overflow:visible;
`;

box.innerHTML = `
  <img alt="" style="display:block;max-width:100%;max-height:80vh;margin:0 auto;border-radius:12px;object-fit:contain;">

  <button type="button" data-act="close"
    style="position:absolute;top:8px;right:8px;padding:4px 12px;border:0;border-radius:999px;background:rgba(11,11,12,.75);color:#fff;font-size:15px;cursor:pointer;">
    Close
  </button>

  <button type="button" data-act="prev" aria-label="Previous picture" style="${BTN}left:8px">‹</button>
  <button type="button" data-act="next" aria-label="Next picture" style="${BTN}right:8px">›</button>

  <p style="margin:.6rem 0 0;text-align:center;color:#fff;font-size:15px;"></p>
`;

document.body.append(box);

const boxImg = box.querySelector("img");
const boxCap = box.querySelector("p");
const boxPrev = box.querySelector('[data-act="prev"]');
const boxNext = box.querySelector('[data-act="next"]');

let boxList = [];
let boxIdx = 0;
let boxTitle = "";

function showBox() {
  boxImg.src = boxList[boxIdx];
  boxImg.alt = boxTitle + " picture " + (boxIdx + 1);
  boxCap.textContent =
    boxTitle + (boxList.length > 1 ? " · " + (boxIdx + 1) + " / " + boxList.length : "");
  boxPrev.hidden = boxNext.hidden = boxList.length < 2;
}

function stepBox(direction) {
  boxIdx = (boxIdx + direction + boxList.length) % boxList.length;
  showBox();
}

function openBox(images, index, title) {
  boxList = images;
  boxIdx = index;
  boxTitle = title;
  showBox();
  box.showModal();
}

box.onclick = (event) => {
  const action = event.target.dataset && event.target.dataset.act;

  if (event.target === box || action === "close") box.close();
  else if (action === "prev") stepBox(-1);
  else if (action === "next") stepBox(1);
};

box.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") stepBox(1);
  if (event.key === "ArrowLeft") stepBox(-1);
});

let touchX = 0;

box.addEventListener("touchstart", (event) => {
  touchX = event.touches[0].clientX;
}, { passive: true });

box.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50 && boxList.length > 1) stepBox(dx < 0 ? 1 : -1);
});


// ======================================================
// PROJECT IMAGE CAROUSEL
// ======================================================

function buildCarousel(project) {
  const srcs = project.images || (project.image ? [project.image] : []);
  const fit = project.fit === "contain" ? "contain" : "cover";

  const wrap = document.createElement("div");

  wrap.style.cssText = `
    position:relative;
    aspect-ratio:16/9;
    overflow:hidden;
    border-radius:12px;
    background:linear-gradient(135deg,#0B0B0C,#4A0A12);
  `;

  const placeholder = document.createElement("span");

  placeholder.style.cssText = `
    position:absolute;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3rem;
    font-weight:800;
    color:rgba(255,255,255,.3);
  `;

  placeholder.textContent =
    project.title.split(" ").map((word) => word[0]).join("").slice(0, 2);

  wrap.append(placeholder);

  if (!srcs.length) return wrap;

  const track = document.createElement("div");

  track.className = "no-scrollbar";

  track.style.cssText = `
    position:absolute;
    inset:0;
    display:flex;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    -webkit-overflow-scrolling:touch;
  `;

  const prev = document.createElement("button");
  const next = document.createElement("button");

  [
    [prev, "‹", "Previous picture", "left"],
    [next, "›", "Next picture", "right"]
  ].forEach(([button, text, label, side]) => {
    button.type = "button";
    button.textContent = text;
    button.setAttribute("aria-label", label);
    button.style.cssText = BTN + side + ":8px;z-index:2";
  });

  const dots = document.createElement("div");

  dots.style.cssText = `
    position:absolute;
    bottom:8px;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    gap:6px;
    pointer-events:none;
    z-index:2;
  `;

  wrap.append(track, prev, next, dots);

  const slides = () => [...track.children];
  const index = () => Math.round(track.scrollLeft / (track.clientWidth || 1));

  let last = -1;

  function refresh() {
    const total = slides().length;
    const current = Math.min(index(), Math.max(total - 1, 0));

    last = current;

    prev.hidden = next.hidden = dots.hidden = total < 2;

    dots.innerHTML = slides().map((_, i) => `
      <span style="width:7px;height:7px;border-radius:50%;background:${i === current ? "#fff" : "rgba(255,255,255,.45)"};"></span>
    `).join("");
  }

  function go(direction) {
    const total = slides().length;

    track.scrollTo({
      left: ((index() + direction + total) % total) * track.clientWidth,
      behavior: scrollMode
    });
  }

  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  track.addEventListener("scroll", () => {
    if (index() !== last) refresh();
  }, { passive: true });

  srcs.forEach((src, imageIndex) => {
    const slide = document.createElement("button");

    slide.type = "button";
    slide.dataset.src = src;

    slide.setAttribute(
      "aria-label",
      `Enlarge ${project.title} picture ${imageIndex + 1} of ${srcs.length}`
    );

    slide.style.cssText = `
      flex:0 0 100%;
      height:100%;
      padding:0;
      border:0;
      background:none;
      scroll-snap-align:center;
      cursor:zoom-in;
    `;

    const image = document.createElement("img");

    image.alt = `${project.title} screenshot ${imageIndex + 1}`;

    image.style.cssText = `
      display:block;
      width:100%;
      height:100%;
      object-fit:${fit};
    `;

    image.onload = () => { placeholder.style.display = "none"; };

    image.onerror = () => {
      slide.remove();
      refresh();
    };

    image.src = src;

    slide.append(image);

    slide.onclick = () => {
      openBox(
        slides().map((item) => item.dataset.src),
        slides().indexOf(slide),
        project.title
      );
    };

    track.append(slide);
  });

  refresh();

  return wrap;
}


// ======================================================
// FULL-SCREEN PROJECT CASE STUDY MODAL
// ======================================================

const projectDialog = document.createElement("dialog");

projectDialog.className = "project-dialog";
projectDialog.setAttribute("aria-label", "Project case study");

projectDialog.innerHTML = `
  <div class="project-dialog-shell">

    <header class="project-dialog-header">
      <a class="project-dialog-brand" href="#experience" aria-label="Back to project experiences">
        K<span>.</span>A
      </a>

      <span class="project-dialog-header-label">PROJECT CASE STUDY</span>

      <button type="button" class="project-dialog-close" aria-label="Close project details" data-close-project>
        <span aria-hidden="true">×</span>
        <span class="close-text">Close</span>
      </button>
    </header>

    <div class="project-dialog-scroll">
      <div id="projectDialogContent"></div>
    </div>

  </div>
`;

document.body.append(projectDialog);

const projectDialogContent = projectDialog.querySelector("#projectDialogContent");


// ======================================================
// HTML ESCAPING
// ======================================================

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}


// ======================================================
// "NO LINK" POP-UP
// ======================================================

const noticeDialog = document.createElement("dialog");

noticeDialog.className = "notice-dialog";

noticeDialog.innerHTML = `
  <div class="notice-card">
    <h3 id="noticeTitle"></h3>
    <p id="noticeText"></p>
    <button type="button" data-close-notice>Got it</button>
  </div>
`;

document.body.append(noticeDialog);

function showNotice(title, text) {
  noticeDialog.querySelector("#noticeTitle").textContent = title;
  noticeDialog.querySelector("#noticeText").textContent = text;
  noticeDialog.showModal();
}

noticeDialog.addEventListener("click", (event) => {
  if (event.target === noticeDialog || event.target.closest("[data-close-notice]")) {
    noticeDialog.close();
  }
});

// Any button marked data-no-link shows the pop-up
document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-no-link]");
  if (!btn) return;

  const isDemo = btn.dataset.noLink === "demo";

  showNotice(
    isDemo ? "No live server yet" : "No repository yet",
    isDemo
      ? `"${btn.dataset.project}" doesn't have a live demo available right now.`
      : `"${btn.dataset.project}" doesn't have a public repository available right now.`
  );
});


// ======================================================
// PROJECT LINK BUTTONS
// ======================================================

function linkButton(url, kind, project, cls) {
  const label = kind === "demo" ? "Live Demo" : "Repository";
  const primary = kind === "demo" && cls === "case-link" ? " case-link-primary" : "";

  if (url) {
    return `
      <a class="${cls}${primary}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">
        ${label} <span aria-hidden="true">↗</span>
      </a>
    `;
  }

  return `
    <button type="button" class="${cls}${primary} is-empty"
      data-no-link="${kind}" data-project="${escapeHTML(project.title)}">
      ${label} <span aria-hidden="true">↗</span>
    </button>
  `;
}

function projectLinks(project) {
  return (
    linkButton(project.demo, "demo", project, "case-link") +
    linkButton(project.code, "code", project, "case-link")
  );
}


// ======================================================
// OPEN PROJECT CASE STUDY
// ======================================================

function openProjectStudy(project) {
  const study = projectStudies[project.title] || {};
  const images = project.images || (project.image ? [project.image] : []);
  const tags = (project.tags || "").split(",").map((t) => t.trim()).filter(Boolean);
  const architectureParts = study.architectureParts || [];
  const features = study.features || [];

  projectDialogContent.innerHTML = `

    <section class="case-hero">
      <div class="case-hero-copy">
        <p class="case-eyebrow">
          ${escapeHTML(project.type || "PROJECT")}
          <span>·</span>
          ${escapeHTML(project.period || project.year || "")}
        </p>
        <h1>${escapeHTML(project.title)}</h1>
        <p class="case-lead">${escapeHTML(project.desc || "")}</p>
        <div class="case-tags">
          ${tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}
        </div>
      </div>

      <div class="case-hero-image-wrap">
        ${
          images[0]
            ? `<button type="button" class="case-hero-image-button" data-gallery-index="0"
                 aria-label="Enlarge ${escapeHTML(project.title)} screenshot">
                 <img class="case-hero-image" src="${escapeHTML(images[0])}"
                   alt="${escapeHTML(project.title)} project screenshot">
               </button>`
            : `<div class="case-image-placeholder">${escapeHTML(project.title)}</div>`
        }
      </div>
    </section>

    <div class="case-body">

      <section class="case-section">
        <div class="case-section-heading"><h2>Project Overview</h2></div>
        <p>${escapeHTML(study.overview || project.more || project.desc || "")}</p>
      </section>

      <section class="case-section">
        <div class="case-section-heading"><h2>The Problem / Project Goal</h2></div>
        <p>${escapeHTML(study.problem || "")}</p>
      </section>

      <section class="case-section">
        <div class="case-section-heading"><h2>System Architecture &amp; Tech Stack</h2></div>
        <p>${escapeHTML(study.architecture || "")}</p>

        ${
          architectureParts.length
            ? `<div class="case-architecture">
                ${architectureParts.map((part) => `
                  <article class="architecture-card">
                    <h3>${escapeHTML(part.name)}</h3>
                    <strong>${escapeHTML(part.tech)}</strong>
                    <p>${escapeHTML(part.role)}</p>
                  </article>
                `).join("")}
              </div>`
            : ""
        }
      </section>

      <section class="case-section">
        <div class="case-section-heading"><h2>Key Features</h2></div>
        <div class="case-feature-grid">
          ${features.map((feature) => `
            <article class="case-feature-card">
              <h3>${escapeHTML(feature.name)}</h3>
              <p>${escapeHTML(feature.detail)}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="case-section">
        <div class="case-section-heading"><h2>My Individual Contributions</h2></div>
        <p>${escapeHTML(study.contribution || "")}</p>
      </section>

      <section class="case-section case-gallery-section">
        <div class="case-section-heading"><h2>Project Gallery</h2></div>
        <p class="case-gallery-hint">Select an image to view it larger.</p>
        <div class="case-gallery">
          ${images.map((src, index) => `
            <button type="button" class="case-gallery-item" data-gallery-index="${index}"
              aria-label="View ${escapeHTML(project.title)} screenshot ${index + 1}">
              <img src="${escapeHTML(src)}"
                alt="${escapeHTML(project.title)} screenshot ${index + 1}" loading="lazy">
              <span>View image ↗</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="case-links-section">
        <div>
          <p class="case-eyebrow">EXPLORE THE PROJECT</p>
          <h2>See it in action</h2>
          <p>Explore the deployed project or its source code.</p>
        </div>
        <div class="case-links">${projectLinks(project)}</div>
      </section>

    </div>

    <footer class="case-footer">
      <span>${escapeHTML(project.title)}</span>
      <button type="button" data-close-project>Close project details ↑</button>
    </footer>
  `;

  projectDialogContent.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      if (images.length) {
        openBox(images, Number(button.dataset.galleryIndex), project.title);
      }
    });
  });

  projectDialog.showModal();
  projectDialog.querySelector(".project-dialog-scroll").scrollTop = 0;
  document.body.classList.add("project-dialog-open");
}


// ======================================================
// CLOSE PROJECT MODAL
// ======================================================

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog || event.target.closest("[data-close-project]")) {
    projectDialog.close();
  }
});

projectDialog.addEventListener("close", () => {
  document.body.classList.remove("project-dialog-open");
});


// ======================================================
// PROJECT CARDS
// ======================================================

projects.forEach((project) => {
  const card = document.createElement("article");

  card.dataset.type = project.type;

  card.className = `
    group flex flex-col overflow-hidden rounded-xl
    border border-[#E3DADB] bg-white transition
    hover:-translate-y-1 hover:border-maroon
    motion-reduce:transition-none
    motion-reduce:hover:translate-y-0
    dark:border-[#2B2427]
    dark:bg-[#171416]
    dark:hover:border-[#D2465A]
  `;

  const tags = project.tags
    .split(",")
    .map((tag) => `
      <span class="rounded-full bg-[#F5F2F2] px-2.5 py-0.5 text-[13px] font-medium text-maroon dark:bg-[#141214] dark:text-[#D2465A]">
        ${escapeHTML(tag.trim())}
      </span>
    `)
    .join("");

  card.innerHTML = `
    <div class="flex flex-1 flex-col gap-3 p-6">

      <div class="flex justify-between gap-3 text-[15px] text-[#55494B] dark:text-[#B5A8AA]">
        <span>${escapeHTML(project.type)}</span>
        <span>${escapeHTML(project.period || project.year || "")}</span>
      </div>

      <h3 class="font-display text-2xl font-bold">${escapeHTML(project.title)}</h3>

      <div class="pic"></div>

      <p class="text-[#55494B] dark:text-[#B5A8AA]">${escapeHTML(project.desc)}</p>

      <div class="flex flex-wrap gap-2">${tags}</div>

        <div class="card-footer">
          <button type="button" class="project-open-button"
            aria-label="View more about ${escapeHTML(project.title)}">
            View More <span aria-hidden="true">→</span>
          </button>
        </div>

    </div>
  `;

  card.querySelector(".pic").replaceWith(buildCarousel(project));

  card.querySelector(".project-open-button").addEventListener("click", () => {
    openProjectStudy(project);
  });

  list.append(card);
});


// ======================================================
// CERTIFICATES AND AWARDS CAROUSEL
// ======================================================

const certTrack = $("#certTrack");

if (certTrack) {
  const certPrev = $("#certPrev");
  const certNext = $("#certNext");

  certTrack.style.cssText = `
    display:flex;
    gap:20px;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    -webkit-overflow-scrolling:touch;
    padding-bottom:4px;
  `;

  [[certPrev, "left"], [certNext, "right"]].forEach(([button, side]) => {
    if (button) button.style.cssText = BTN + side + ":-8px;z-index:2";
  });

  certTrack.innerHTML = certificates.map((cert, index) => `
    <article role="listitem"
      class="flex flex-col overflow-hidden rounded-xl border border-[#E3DADB] bg-white dark:border-[#2B2427] dark:bg-[#171416]"
      style="flex:0 0 min(82%,330px);scroll-snap-align:start;">

      <button type="button" data-cert="${index}" aria-label="Enlarge ${cert.title}" class="block w-full"
        style="position:relative;aspect-ratio:4/3;padding:0;border:0;background:linear-gradient(135deg,#0B0B0C,#4A0A12);cursor:zoom-in;">

        <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:12px;text-align:center;font-weight:700;color:rgba(255,255,255,.35);">
          ${escapeHTML(cert.title)}
        </span>

        <img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title)} certificate"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#fff;"
          onload="this.dataset.ok=1" onerror="this.remove()">
      </button>

      <div style="padding:18px 20px 20px;text-align:left">
        <h3 class="font-display text-lg font-bold leading-snug">${escapeHTML(cert.title)}</h3>
        <p class="text-[15px] text-[#55494B] dark:text-[#B5A8AA]">${escapeHTML(cert.issuer)}</p>
        <p class="mt-1 text-[14px] font-medium text-maroon dark:text-[#D2465A]">${escapeHTML(cert.date)}</p>
      </div>

    </article>
  `).join("");

  certTrack.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-cert]");
    if (!button) return;

    const shown = [...certTrack.querySelectorAll("img[data-ok]")];
    const mine = button.querySelector("img[data-ok]");

    if (!mine) return;

    openBox(
      shown.map((image) => image.getAttribute("src")),
      shown.indexOf(mine),
      "Certificates & Awards"
    );
  });

  const step = (direction) => {
    certTrack.scrollBy({
      left: direction * certTrack.clientWidth * 0.8,
      behavior: scrollMode
    });
  };

  if (certPrev) certPrev.onclick = () => step(-1);
  if (certNext) certNext.onclick = () => step(1);
}


// ======================================================
// PROFESSIONAL PHOTO UPLOAD
// ======================================================

const img = $("#photoImg");
const empty = $("#photoEmpty");
const input = $("#photoInput");
const photoBtn = $("#photoBtn");

if (img && empty && input && photoBtn) {

  function showPhoto(src) {
    img.src = src;
    img.classList.remove("hidden");
    empty.classList.add("hidden");
  }

  try {
    const saved = localStorage.getItem("portfolio-photo");
    if (saved) showPhoto(saved);
  } catch (error) {}

  photoBtn.onclick = () => input.click();

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const scale = Math.min(1, 800 / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");

        canvas.width = image.width * scale;
        canvas.height = image.height * scale;

        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);

        const url = canvas.toDataURL("image/jpeg", 0.88);

        showPhoto(url);

        try { localStorage.setItem("portfolio-photo", url); } catch (error) {}
      };

      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  };
}


// ======================================================
// LIGHT / DARK MODE
// ======================================================

$("#theme").onclick = () => {
  const dark = root.classList.toggle("dark");

  try {
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  } catch (error) {}
};


// ======================================================
// COUNT-UP STATISTICS
// ======================================================

const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

const counter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    counter.unobserve(entry.target);

    const element = entry.target;
    const number = +element.dataset.count;
    const suffix = element.dataset.suffix || "";

    if (still) {
      element.textContent = number + suffix;
      return;
    }

    const startTime = performance.now();

    (function tick(time) {
      const progress = Math.min(1, (time - startTime) / 1200);

      element.textContent =
        Math.round(number * (1 - Math.pow(1 - progress, 3))) +
        (progress === 1 ? suffix : "");

      if (progress < 1) requestAnimationFrame(tick);
    })(startTime);
  });
}, { threshold: 0.6 });

document.querySelectorAll("[data-count]").forEach((element) => {
  counter.observe(element);
});


// ======================================================
// ACTIVE NAVIGATION LINK
// ======================================================

const navLinks = [...document.querySelectorAll(".nav-link")];

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.setAttribute("aria-current", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });

document.querySelectorAll("main section").forEach((section) => {
  spy.observe(section);
});


// ======================================================
// SCROLL PROGRESS BAR
// ======================================================

const bar = $("#progress");

addEventListener("scroll", () => {
  const height = root;

  bar.style.width =
    (height.scrollTop / (height.scrollHeight - height.clientHeight || 1)) * 100 + "%";
}, { passive: true });


// ======================================================
// COPY EMAIL BUTTON
// ======================================================

$("#copyBtn").onclick = async (event) => {
  const button = event.currentTarget;

  try {
    await navigator.clipboard.writeText(EMAIL);
    button.textContent = "Copied";
  } catch (error) {
    button.textContent = "Copy failed";
  }

  setTimeout(() => {
    button.textContent = "Copy email";
  }, 2000);
};


// ======================================================
// CONTACT FORM
// ======================================================

const form = $("#form");

if (form) {
  const formBtn = $("#formBtn");
  const formStatus = $("#formStatus");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    formBtn.disabled = true;
    formBtn.textContent = "Sending...";
    formStatus.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: AbortSignal.timeout(20000)
      });

      const data = await response.json();

      if (response.ok && String(data.success) === "true") {
        formStatus.textContent = "Thank you! Your message was sent.";
        formStatus.style.color = "#2e7d32";
        form.reset();
      } else {
        throw new Error(data.message || "Send failed");
      }

    } catch (error) {
      console.error(error);

      if (error.name === "TimeoutError") {
        formStatus.textContent =
          "Taking longer than usual. Your message may have been sent. If you don't hear back, email me at " + EMAIL;
        formStatus.style.color = "#b26a00";
      } else {
        formStatus.textContent =
          "Error: " + error.message + " (or email me directly at " + EMAIL + ")";
        formStatus.style.color = "#c62828";
      }
    }

    formBtn.disabled = false;
    formBtn.textContent = "Send message";
  });
}
