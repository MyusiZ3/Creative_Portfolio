# Step-by-Step Implementation Plan: Dual-Theme Architecture (Pixel Arcade Theme)

## User Goal

Build **Theme 2 (Pixelated Cyber-Arcade)** while maintaining a strict, isolated component structure (`src/components/themes/editorial/` vs `src/components/themes/pixel/`) so that edits to one theme never break the other.

---

## 🎯 Proposed Changes & Execution Steps

### Phase 1: Global Theme State & Toggle Button

- **File**: `src/composables/useTheme.js`
  - Manage reactive state `currentTheme` (`'editorial'` | `'pixel'`).
  - Persist state to `localStorage.setItem('portfolio_theme', mode)`.
- **File**: `src/components/common/ThemeToggle.vue`
  - Floating action button in the bottom right corner.
  - Visuals adapt to current theme:
    - Editorial Mode: Dark charcoal pill with `✦ EDITORIAL`.
    - Pixel Mode: High-contrast green/black pixel box with `⚡ PIXEL ARCADE`.

---

### Phase 2: Restructure & Isolate Theme 1 (Editorial)

- Create directory `src/components/themes/editorial/`.
- Duplicate/move existing section components into `src/components/themes/editorial/`:
  - `HeroEditorial.vue` (from `Hero.vue`)
  - `ExperienceEditorial.vue` (from `Experience.vue`)
  - `MySkillsEditorial.vue` (from `MySkills.vue`)
  - `SomeProjectsEditorial.vue` (from `SomeProjects.vue`)
  - `MyProjectsEditorial.vue` (from `MyProjects.vue`)
  - `AchievementsEditorial.vue` (from `Achievements.vue`)
  - `ContactMeEditorial.vue` (from `ContactMe.vue`)
- Update `src/views/index.vue` to conditionally render Editorial components when `currentTheme === 'editorial'`.

---

### Phase 3: Create Theme 2 (Pixelated Cyber-Arcade) Components

Create directory `src/components/themes/pixel/` and build 6 new isolated components:

1. **`HeroPixel.vue`**
   - Title: `MUHAMAD SIDIK [LVL 99 MULTIMEDIA DESIGNER]`
   - Player Select Stats Box (HP: 100/100, MP: VR/AR, Class: Game Dev & Designer).
   - Blinking `"INSERT COIN TO START"` text.

2. **`ImpactBentoPixel.vue`** (Based on User's Reference Image)
   - Top Row: 500K Products Sold (Yellow), 20% Customer Base Growth (Lavender), 1M+ Visitors (Salmon Pink).
   - Bottom Row: Quarter-by-Quarter Timeline (Q1-Q4) with interactive month pills and milestone cards.

3. **`ProjectsPixel.vue`**
   - Stage Select layout (`[STAGE 01: LUXION RIDEXP]`, `[STAGE 02: MINDESCAPE VR]`).
   - Cartridge-style project cards with hard drop shadows (`shadow-[6px_6px_0px_#000]`).
   - **`PixelCaseStudyModal.vue`**: Arcade window header, `[X]` close button, scanline backdrop overlay, `MISSION BRIEFING` & `STRATEGY` sections.

4. **`SkillsPixel.vue`**
   - Inventory Rack grid (`[SLOT 1: UNITY 3D]`, `[SLOT 2: VUE.JS]`, `[SLOT 3: FIGMA]`).

5. **`ExperiencePixel.vue`**
   - Quest Log layout (`⚔️ QUEST 01: Lab Assistant [COMPLETED]`).

6. **`ContactPixel.vue`**
   - Arcade High Score Transmission Form (`ENTER NAME`, `ENTER TRANSMISSION`, `[SUBMIT HIGH SCORE]`).

---

### Phase 4: Curtain Reveal Transition & Testing

- Connect `PageReveal.vue` curtain animation when switching themes.
  - Editorial -> Pixel: Curtain displays `"LOADING LEVEL 2: PIXEL ARCADE"`.
  - Pixel -> Editorial: Curtain displays `"SWITCHING TO EDITORIAL MODE"`.
- Test layout responsiveness on Desktop (1920x1080), Tablet, and Mobile (375px).

---

## Verification Plan

### Automated / Browser Verification

1. Run local dev server (`bun run dev`).
2. Toggle theme using `ThemeToggle.vue` button and verify localStorage persistence on page reload.
3. Check browser DOM & screenshots to ensure Theme 1 renders identically to the current design, and Theme 2 renders the Pixel Arcade components cleanly.
