# Project Context & Architecture: Muhamad Sidik — Creative Technologist Portfolio

> **Purpose**: Persistent codebase map & project knowledge base so the agent does not need to re-read the entire project on every prompt. Only read the specific target file(s) needed for a task.

---

## 1. Owner & Identity
- **Owner**: Muhamad Sidik (`@MyusiZ3` on GitHub, `@imyusi_` on Instagram, `muhamad-sidik-imy` on LinkedIn)
- **Role / Persona**: Creative Technologist (Full-Stack Web/Mobile Dev, Game/AR/VR Developer, UI/UX & Brand Designer, IT Support)
- **Education**:
  - Telkom University — D4 Applied Sciences in Multimedia Engineering Technology (2022–2026, GPA 3.83/4.00 Cum Laude, EPRT 483 / CEFR B1)
  - SMKN 1 Belitang III — Multimedia (2019–2022)
- **Location**: Bandung, Indonesia
- **Contact**: `muhamadsidik.work.id@gmail.com` | WhatsApp `(+62) 896 4634 7327`
- **Live URL**: `https://imycreative.vercel.app/`

---

## 2. Tech Stack & Tooling
- **Framework**: Vue 3 (`beta` with Vapor/Runtime overrides in `package.json`), Vue Router 5
- **Build & Styling**: Vite (`beta`), Tailwind CSS v4 (`@tailwindcss/vite`), `oxfmt` (`npm run format`)
- **Animations & Effects**: `@vueuse/motion` (`v-motion` directives), `gsap`, `animejs`, `vue-typewriter-effect`, Web Audio API 8-bit synthesizer
- **Icons & Fonts**: `bootstrap-icons`, Google Fonts (`Poppins`, `Roboto`, `Press Start 2P`, `Silkscreen`, `VT323`)
- **Analytics & Deployment**: `@vercel/analytics`, `@vercel/speed-insights`, `vercel.json` (SPA rewrites + security/caching headers), `netlify.toml`
- **Custom Breakpoints** (`src/main.css`): `sm: 640px`, `md: 768px`, `lg: 850px`, `xl: 1280px`, `2xl: 1536px`

---

## 3. Core Architecture & Dual-Theme System
Single-page application (`/` -> `src/views/index.vue`) supporting **2 complete themes** managed via `useTheme()` (`localStorage` key: `portfolio_theme`, default: `'editorial'`).

### A. Composables (`src/composables/`)
- `useTheme.js` — Reactive `currentTheme` (`'editorial'` | `'pixel'`), `setTheme()`, `toggleTheme()`. *(Note: `ThemeToggle` button in `Navbar.vue` is currently commented out, defaulting to Editorial).*
- `useLanguage.js` — Reactive bilingual state (`lang`: `'EN'` | `'ID'`), `toggleLanguage()`, `t(key)` dictionary for shared UI strings. Many components also compute inline `lang === 'ID'` strings for rich project/case-study data.
- `usePixelAudio.js` — Zero-dependency Web Audio API 8-bit sound synthesizer (`playCoinSfx`, `playBlipSfx`, `playFanfareSfx`, `playLaserSfx`, `playExplosionSfx`, `playPowerupSfx`).
- `useScrollAnimations.js` — Preset helpers (`fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleUp`, `pop`, `staggerDelay`) for `@vueuse/motion`.

### B. Active Theme 1: Editorial Minimalist (`src/components/themes/editorial/`)
Loaded eagerly in `src/views/index.vue` when `currentTheme === 'editorial'`. Aesthetic: `#171717` dark & `#ffffff` / `#F8FAFC` light contrast sections, `#8B5CF6` / `#A754FF` violet accents, `#FBDF3A` yellow highlights, chamfered tech modals (`clip-path: polygon(...)`).
1. `HeroEditorial.vue` — "Creative Technologist" stroke typography, hero photo (`hero_me.webp` with manual `heroImgConfig` x/y/scale adjustment) + floating badges (`visual.webp`, `branding.webp`, `ux_design.webp`, `hire_me.webp`), `#about` section (Typewriter intro, Education, Skills summary, `03+` yrs / `10+` projects stats, Language proficiency).
2. `ExperienceEditorial.vue` (`#experience`) — Light background section with decorative `accent_*.webp` corners. Expand/Collapse timeline for:
   - **Work & Org (5 items)**: `w1` IT Support & Web Dev Intern @ PT Jaswita Jabar (Aug 2025–Jul 2026), `w2` Lab Teaching Assistant @ Telkom Univ (Sep 2023–Jul 2025), `w3` Brand Designer @ MAPS 2023, plus collapsible earlier work (`w4`, `w5` at SMKN 1 Belitang III).
   - **Projects Experience**: Timeline of key project roles (`p8` AppliQ, `p7` Mathmagic, `p9` Djaswita AR, `p1` RideXP, etc.).
3. `MySkillsEditorial.vue` (`#skills`) — Dark section showcasing 9 core tools (Unity, Firebase, Supabase, Antigravity, GitHub, Illustrator, Photoshop, Figma, Canva) + embedded `<GithubCalendar />` (`@MyusiZ3` live contribution heatmap).
4. `CreativeProcessEditorial.vue` (`#process`) — Light `#F8FAFC` section with 4 chamfered Agile process cards (01 Discovery & Planning, 02 Design & Prototyping, 03 Agile Development, 04 Testing & Delivery).
5. `MyProjectsEditorial.vue` (`#my-projects`) — Primary project showcase:
   - **Top 5 Selected Projects (`selectedProjects`)**: Zig-zag 2-column layout with 4 rotating collage styles (`index % 4`: 3D overlapping stack, portrait/square stack, video/landscape diagonal collage, wide banner + corners), role/team info, tool icon tooltips, overview, bullet tasks, and expanding quick-action icon bar (`getProjectActions`: YouTube stream modal, Heyzine Flipbook modal, Google Drive APK, Live Demo, Web Portal, GitHub/Figma).
   - **Project Archive Table (`#project-archive-section`)**: Paginated Swiss-style directory (`archivePerPage = 5`) for projects index `5..12`, with cursor-following chamfered thumbnail preview (`hoverPreview`) on desktop and cards on mobile.
   - **Modals (Teleported to `body`)**: Fullscreen Image/Video Lightbox, on-demand YouTube `videoModal`, and Heyzine `flipbookModal`.
6. `AchievementsEditorial.vue` (`#achievements`) — 6 certificate/achievement cards (Mathmagic HKI `001400842`, Telkom Applied Science TA, BNSP Multimedia KKNI Level II, Internship Completion, LKS Graphic Design Finalist, Progate Web Dev) with Google Drive PDF links & image preview modal.
7. `ContactMeEditorial.vue` (`#contact`) — Contact info (WhatsApp/Phone & Email with copy-to-clipboard, Bandung address, GitHub/IG/LinkedIn/Share buttons, expandable Designer & Developer CV download buttons, Figma design badge, Abacus/localStorage view counter `258+` base), Web3Forms contact form (with 15s cooldown & `mailto:` fallback), and footer marquee.
8. *(Optional/Unused in `index.vue`)* `SomeProjectsEditorial.vue` — Filterable 3-column project grid with a split-view Case Study modal.

### C. Active Theme 2: Pixelated Cyber-Arcade (`src/components/themes/pixel/`)
Lazy-loaded via `defineAsyncComponent` in `src/views/index.vue` when `currentTheme === 'pixel'`. Aesthetic: `#0d1117` / `#161b22` dark CRT surfaces, `#00ff66` neon green, `#00f0ff` cyan, `#ffd700` gold, `#ff0055` magenta, hard pixel borders & shadows (`shadow-[8px_8px_0px_#000]`).
1. `HeroPixel.vue` (`#home`) — Player 1 status banner, `<VisitorCounter />`, interactive coin/score system (`localStorage`: `pixel_arcade_score`, `pixel_arcade_credits`, `pixel_arcade_hp`, `pixel_arcade_mp`), restorative HP/MP bars, **Konami Code Easter Egg** (`↑↑↓↓←→←→BA` or triple-click "SYSTEM ONLINE" -> unlocks LVL 999 God Mode), and button to launch `<BugCatcherMinigame />`.
2. `BugCatcherMinigame.vue` — Retro Arcade Hub modal with 4 playable 8-bit games: **Code Breakout**, **Bug Snake**, **Code Invaders** (HTML5 Canvas), and **Dev Memory Match** (Vue grid). Awards score to `HeroPixel`.
3. `ImpactBentoPixel.vue` — High-contrast bento stats (`10+` Projects, `3+YRS` Exp, `100+` Students Mentored) + interactive Q1–Q4 timeline tabs.
4. `ProjectsPixel.vue` (`#projects`) — Filterable (`all`, `game`, `app`, `web`) & paginated (`6` per page) arcade cartridge cards with swipeable image/video sliders; opens `<PixelCaseStudyModal />`.
5. `PixelCaseStudyModal.vue` — Retro window modal displaying project slides, YouTube stream, metrics, Challenge/Solution briefing, and action links.
6. `SkillsPixel.vue` (`#skills`) — RPG stats HUD (Hard/Soft skills, Academic Guild, Language Buffs), 9-slot Software Equipment Rack, and `<GithubCalendar />`.
7. `ExperiencePixel.vue` (`#experience`) — "Career Quest Log" with category filter (`all`, `work`, `project`) and independent pagination for Work Quests (`2`/page) and Project Quests (`4`/page).
8. `ContactPixel.vue` (`#contact`) — "High Score Entry / Send Transmission" Web3Forms form with terminal status log (live WIB clock), social links, and Design/Dev CV loot links.

### D. Shared / Global UI Components (`src/components/`)
- `Navbar.vue` — Sticky morphing navbar with desktop links, language switcher (`EN`/`ID`), notification bell, and teleported mobile slide-over drawer. Emits `navigate`, `toggle-lang`, `show-notification`, `toggle-theme` to `src/views/index.vue`.
- `PageReveal.vue` — Fullscreen curtain transition slab (`idle` -> `enter` -> `hold` -> `exit`) triggered on navbar navigation, language switch, or theme switch.
- `FloatingActionButton.vue` — Bottom-right particle FAB expanding into: Back to Top, Download CV (expands into CV Designer PDF & CV Developer Drive link), Email, LinkedIn, GitHub.
- `CTAPopup.vue` — Toast invite ("Have a project in mind?") appearing after 10 seconds.
- `NotificationPopup.vue` — Bell-triggered toast ("Work in Progress" + "Open for Collaboration: Freelance • Project • Part-time") with 15s auto-close.
- `CursorMultiFollow.vue` — Custom desktop (`pointer: fine`) cursor with 3 spring-physics trailing rings and click ripples.
- `GithubCalendar.vue` — Fetches contribution data for `MyusiZ3` from public GitHub contribution APIs with multi-endpoint fallback & year selector.
- `common/ProjectImage.vue` — Lazy-loaded image wrapper with loading spinner and fallback state.
- `common/VisitorCounter.vue` — Live visitor badge backed by `localStorage` + `counterapi.dev`.
- **Legacy Root Components** (`Hero.vue`, `Experience.vue`, `MySkills.vue`, `MyProjects.vue`, `SomeProjects.vue`, `Achievements.vue`, `ContactMe.vue`, `DesignShowcase.vue`, `IdentityCard.vue`): Older/standalone versions superseded by `src/components/themes/editorial/*` in `src/views/index.vue`. Always check `src/views/index.vue` first—edits to the active Editorial theme belong in `src/components/themes/editorial/`.

---

## 4. Catalog of Portfolio Projects (13–14 Items)
When updating project data, check both **`MyProjectsEditorial.vue`** (and `SomeProjectsEditorial.vue` if used) and **`ProjectsPixel.vue`**:
1. **Djaswita AR – Dynamic AR (2026, Thesis)** — Android AR (Unity + Vuforia) + Web CMS (Vite + Supabase) for PT Jaswita Jabar (BUMD). Zero-rebuild dynamic cloud markers.
2. **Mathmagic (2026, HKI No. 001400842)** — Unity 6 (C#) elementary math game + Firebase + Vite Web Admin Dashboard.
3. **AppliQ (2026)** — Flutter & Supabase job application tracker (Kanban, on-device ATS Resume/Cover Letter PDF builder, Google Calendar sync, RLS).
4. **RideXP / Luxion RideXP (2025)** — Unity 3D arcade cycling game connected to a physical stationary bike via ESP32 IoT.
5. **Stellar Adventures (2024–2025)** — Unity URP + Vuforia space AR mobile game (includes Google Drive APK, Heyzine Flipbook `46f2424104`, YouTube `beb_pedFmMg`).
6. *(Archive / Pixel)* **MyDuitGweh (2026)** — Flutter + Firebase smart finance tracker with Archen AI Advisor (Gemini & Groq), Google ML Kit OCR receipt scanner, shared collaborative wallets.
7. *(Archive / Pixel)* **DJourney Jaswita Jabar (2026, Internship)** — Tourism web portal (`djourney.id/web/`) i18n localization, mobile responsive fixes, search filter debugging.
8. *(Archive / Pixel)* **MindEscape: VR Chamber (2025)** — Unity + Oculus SDK/SteamVR 3D VR puzzle escape room (YouTube `DmFdkMLRTGc`).
9. *(Archive / Pixel)* **MathRift (2025)** — Unity 2D educational math platformer with Firebase.
10. *(Archive / Pixel)* **U-Asprak (2024)** — Figma UI/UX mobile app design for lab teaching assistant management.
11. *(Archive / Pixel)* **empEDU (2023)** — Figma gamified educational mobile app design (YouTube `4qN5RWZo9Nw`).
12. *(Archive / Pixel)* **IUDEX (2023–2024)** — Team portfolio web (`iudex-portfolio.vercel.app`).
13. *(Archive / Pixel)* **Arch (2024)** — Personal minimalist web portfolio (`Vue.js`, `TailwindCSS`).
14. *(Archive / Pixel)* **Merch (2024)** — Event merchandise & apparel graphic design (`Illustrator`, `Photoshop`).

---

## 5. Static Assets (`public/`)
- `public/doc/` — `CV_Muhamad Sidik_Graphic Designer_Intern_2025.pdf`, `CV_Muhamad Sidik_IT_Intern.pdf`, `Theme2 requirement/` (`Plan.md`, `PRD_Theme2_Pixel_Arcade.md`).
- `public/images/hero/` — `hero_me.webp`, `about_me.webp`, `branding.webp`, `visual.webp`, `ux_design.webp`, `hire_me.webp`, `og.png`.
- `public/images/accents/` — `accent_1.webp` .. `accent_5.webp`, `ceklis.webp`.
- `public/images/certificates/` — `certificate_hki.webp`, `certificate_telkom_ta.webp`, `certificate_bnsp.webp`, `certificate_internship.webp`, `certificate_progate.webp`, `lks1.webp`.
- `public/images/projects/` — Organized by project subfolders (`AppliQ/`, `Arch/`, `DjaswitaAR/`, `Empedu/`, `Iudex/`, `LuxionRideXP/`, `Mathmagic/`, `Mathrift/`, `MindescapeVR/`, `MyDuitGweh/`, `StellarAdventures/`, `UAsprak/`) + root project webp/png files.
- `public/images/tools/` — Custom SVGs (`vuforia.svg`, `urp.svg`, `google-drive.svg`, `adobe-illustrator.svg`).

