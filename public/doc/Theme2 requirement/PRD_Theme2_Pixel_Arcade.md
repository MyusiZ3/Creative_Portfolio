# PRD & SRS: Theme 2 — Pixelated Cyber-Arcade Design System

## 1. Executive Summary & Objective
This document serves as the official Product Requirements Document (PRD) and System Requirements Specification (SRS) for **Theme 2: Pixelated Cyber-Arcade**. 

The primary architecture goal is **Strict Component Isolation**. Each theme (`editorial` vs `pixel`) lives in its own independent directory and components. Changing styles, colors, layouts, or text in Theme 2 will **NEVER** affect Theme 1 (Editorial).

---

## 2. Component Isolation & Directory Structure

To ensure complete decoupling between Theme 1 and Theme 2:

```text
src/
├── composables/
│   ├── useTheme.js                     <-- Global theme switcher state
│   └── useLanguage.js
│
├── components/
│   ├── common/                         <-- Shared utilities (Navbar, Reveal)
│   │   ├── Navbar.vue
│   │   ├── ThemeToggle.vue             <-- Floating Switcher Button
│   │   ├── PageReveal.vue
│   │   └── CursorMultiFollow.vue
│   │
│   └── themes/
│       ├── editorial/                  <-- THEME 1 (EDITORIAL DARK) - ISOLATED
│       │   ├── HeroEditorial.vue
│       │   ├── ExperienceEditorial.vue
│       │   ├── MySkillsEditorial.vue
│       │   ├── SomeProjectsEditorial.vue
│       │   ├── MyProjectsEditorial.vue
│       │   ├── AchievementsEditorial.vue
│       │   └── ContactMeEditorial.vue
│       │
│       └── pixel/                      <-- THEME 2 (PIXEL ARCADE) - ISOLATED
│           ├── HeroPixel.vue
│           ├── ImpactBentoPixel.vue    <-- Metrics (500K/20%/1M+) & Quarter Timeline
│           ├── ProjectsPixel.vue       <-- Stage Select Cartridges & Pixel Modal
│           ├── SkillsPixel.vue         <-- RPG Inventory Rack
│           ├── ExperiencePixel.vue     <-- Quest Log
│           └── ContactPixel.vue        <-- High Score Transmission Form
```

---

## 3. Design Tokens (Theme 2 Specification)

### 3.1 Color Palette
| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `bg-dark` | `#0D1117` | CRT Monitor Background Canvas |
| `surface` | `#161B22` | Card & Modal Container Surface |
| `green` | `#00FF66` | Primary Actions, XP Bars, Completed Status |
| `cyan` | `#00F0FF` | Tech Tags, Secondary Buttons, Borders |
| `pink` | `#FF0055` | Danger, Close `[X]` Buttons, Warnings |
| `yellow` | `#FFD700` | High Score Badges, Star Ratings |
| `text-main` | `#F0F6FC` | Headings & Primary Labels |
| `text-muted` | `#8B949E` | Monospaced Subtitles & Descriptions |

### 3.2 Typography Rules
- **Headings & Badges**: `'Pixelify Sans'`, `cursive`, `monospace` (Pixelated 8-bit vibe).
- **Body Text**: `'Space Mono'`, `'JetBrains Mono'`, `monospace` (Clean, highly legible text for reading).

### 3.3 Stepped Pixel Borders & Hard Shadows
- **Border**: `3px solid #00F0FF` or `3px solid #00FF66`.
- **Shadow**: Hard 90-degree offset shadow `box-shadow: 4px 4px 0px #000000`.
- **Active Click State**: `translate(2px, 2px)` with shadow reduced to `2px 2px 0px #000`.

---

## 4. UI Consistency Rules (Theme 2)

### 4.1 Buttons
1. **Primary Button (`.btn-pixel-primary`)**:
   - Green Fill (`#00FF66`), Black text, 3px solid border, 4px hard shadow.
2. **Secondary Button (`.btn-pixel-secondary`)**:
   - Dark Surface Fill (`#161B22`), Cyber Cyan text & border (`#00F0FF`).
3. **Danger / Close Button (`.btn-pixel-danger`)**:
   - Arcade Pink Fill (`#FF0055`), White text.

### 4.2 Popups & Modals
- Top Title Bar: Arcade Window header with `[X]` pixel button.
- Backdrop: Darkened CRT scanlines (`rgba(0,0,0,0.85)`).

---

## 5. Maintenance Principle
- **Editing Theme 1 (Editorial)**: Edit ONLY files inside `src/components/themes/editorial/`.
- **Editing Theme 2 (Pixel Arcade)**: Edit ONLY files inside `src/components/themes/pixel/`.
- **Switching Themes**: Handled seamlessly by `src/views/index.vue` using Vue conditional rendering (`v-if="currentTheme === 'editorial'"` vs `v-if="currentTheme === 'pixel'"`).
