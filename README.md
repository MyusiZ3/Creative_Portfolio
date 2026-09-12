# Muhamad Sidik — Creative Portfolio

A dual-themed interactive personal portfolio built with Vue 3, Vite, and Tailwind CSS. Designed to showcase work across UI/UX design, web engineering, game development, and interactive media through modern typography and retro arcade aesthetics.

Live Demo: [creative-portfolio-theta-rosy.vercel.app](https://creative-portfolio-theta-rosy.vercel.app)

---

## Architecture & Concept

This project features a custom dual-theme engine that allows visitors to switch seamlessly between two distinct design philosophies:

1. **Editorial Minimalist Mode**
   - Focused on typography, structured layouts, and refined micro-interactions.
   - Ideal for reviewing detailed case studies, project roles, and professional achievements.
   - Built with high-contrast color palettes and smooth section reveals.

2. **Cyber Arcade Pixel Mode**
   - Inspired by retro 8-bit arcade aesthetics, CRT scanlines, and neon HUD accents.
   - Features custom Web Audio API sound effects, Konami cheat codes, and an interactive Bug Catcher minigame.
   - Dynamically swaps component sets on demand via async component loading.

---

## Key Features

- **Dual-Theme Engine**: Switch between Editorial and Arcade styles instantly with curtain reveal page transitions.
- **Bilingual Support**: Instant language toggle between English (EN) and Indonesian (ID).
- **Interactive Minigames & Audio**: Built-in 8-bit sound synthesizer and playable arcade minigames using HTML5 Canvas.
- **Floating Action Hub**: Quick access floating action button (FAB) for CV downloads, direct email links, and top navigation.
- **Accessibility (WCAG 2.1 AA Compliant)**: Full keyboard navigation support, skip-to-content landmarks, and optimal text contrast ratios.
- **Performance & Analytics**: Integrated Vercel Analytics and Speed Insights for real-time Web Vitals monitoring.

---

## Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core Framework** | Vue 3 (Vapor/Beta), Vue Router |
| **Build & Tooling** | Vite, Oxfmt |
| **Styling** | Tailwind CSS v4, Bootstrap Icons |
| **Animations & Motion** | GSAP, Anime.js, @vueuse/motion |
| **Analytics** | @vercel/analytics, @vercel/speed-insights |
| **Package Manager** | npm / bun |

---

## Project Structure

```
Portfolio/
├── public/
│   ├── doc/                   # Downloadable CVs and certificates
│   └── images/                # Optimised WebP visual assets & accents
├── src/
│   ├── assets/                # Audio files and static styles
│   ├── components/
│   │   ├── common/            # Reusable UI primitives (ProjectImage, etc.)
│   │   ├── themes/
│   │   │   ├── editorial/     # Editorial theme section components
│   │   │   └── pixel/         # Pixel Arcade theme section components
│   │   ├── CTAPopup.vue
│   │   ├── CursorMultiFollow.vue
│   │   ├── FloatingActionButton.vue
│   │   ├── GithubCalendar.vue
│   │   ├── Navbar.vue
│   │   ├── NotificationPopup.vue
│   │   └── PageReveal.vue
│   ├── composables/           # Shared logic (useTheme, useLanguage, usePixelAudio)
│   ├── router/                # Vue Router configuration
│   ├── views/                 # Root view layouts
│   ├── App.vue                # Main application wrapper with analytics
│   └── main.js                # App initialization
├── package.json
└── vite.config.js
```

---

## Local Development

### Prerequisites

- Node.js 20.0.0 or higher
- npm or bun

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MyusiZ3/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview local production build:
   ```bash
   npm run preview
   ```

---

## Deployment

The application is optimized for deployment on Vercel and Netlify. Configuration files (`vercel.json` and `netlify.toml`) are included in the root directory.

---

## License & Copyright

Copyright © 2026 Muhamad Sidik. All rights reserved.

This repository and its contents are protected under standard copyright law. See the [LICENSE](LICENSE) file for full terms and conditions.
