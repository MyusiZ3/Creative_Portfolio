<template>
  <Navbar
    @navigate="onNavigate"
    @toggle-lang="onToggleLang"
    @show-notification="showNotification = !showNotification"
    @toggle-theme="handleThemeSwitch"
  />

  <!-- Main Content Landmark -->
  <main id="main-content" tabindex="-1" class="focus:outline-none">
    <!-- Editorial Minimalist Theme (Theme 1) -->
    <template v-if="currentTheme === 'editorial'">
      <HeroEditorial />
      <ExperienceEditorial />
      <MySkillsEditorial />
      <CreativeProcessEditorial />
      <MyProjectsEditorial />
      <AchievementsEditorial />
      <ContactMeEditorial />
    </template>

    <!-- Pixelated Cyber-Arcade Theme (Theme 2) -->
    <template v-else>
      <HeroPixel />
      <ImpactBentoPixel />
      <ProjectsPixel />
      <SkillsPixel />
      <ExperiencePixel />
      <ContactPixel />
    </template>
  </main>

  <FloatingActionButton />
  <CTAPopup />
  <NotificationPopup
    :show="showNotification"
    @close="showNotification = false"
  />
  <CursorMultiFollow />

  <!-- Page Reveal Transition Curtain -->
  <PageReveal
    :active="revealActive"
    :label="revealLabel"
    @done="onRevealDone"
  />
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

// Editorial Theme Components (Loaded for initial theme)
import HeroEditorial from "@/components/themes/editorial/HeroEditorial.vue";
import ExperienceEditorial from "@/components/themes/editorial/ExperienceEditorial.vue";
import MySkillsEditorial from "@/components/themes/editorial/MySkillsEditorial.vue";
import CreativeProcessEditorial from "@/components/themes/editorial/CreativeProcessEditorial.vue";
import MyProjectsEditorial from "@/components/themes/editorial/MyProjectsEditorial.vue";
import AchievementsEditorial from "@/components/themes/editorial/AchievementsEditorial.vue";
import ContactMeEditorial from "@/components/themes/editorial/ContactMeEditorial.vue";

// Pixel Arcade Theme Components (Lazy Loaded on demand)
const HeroPixel = defineAsyncComponent(() => import("@/components/themes/pixel/HeroPixel.vue"));
const ImpactBentoPixel = defineAsyncComponent(() => import("@/components/themes/pixel/ImpactBentoPixel.vue"));
const ProjectsPixel = defineAsyncComponent(() => import("@/components/themes/pixel/ProjectsPixel.vue"));
const SkillsPixel = defineAsyncComponent(() => import("@/components/themes/pixel/SkillsPixel.vue"));
const ExperiencePixel = defineAsyncComponent(() => import("@/components/themes/pixel/ExperiencePixel.vue"));
const ContactPixel = defineAsyncComponent(() => import("@/components/themes/pixel/ContactPixel.vue"));

// Async UI Components & Modals
const PageReveal = defineAsyncComponent(() => import("@/components/PageReveal.vue"));
const FloatingActionButton = defineAsyncComponent(() => import("@/components/FloatingActionButton.vue"));
const CTAPopup = defineAsyncComponent(() => import("@/components/CTAPopup.vue"));
const NotificationPopup = defineAsyncComponent(() => import("@/components/NotificationPopup.vue"));
const CursorMultiFollow = defineAsyncComponent(() => import("@/components/CursorMultiFollow.vue"));

import { useLanguage } from "@/composables/useLanguage";
import { useTheme } from "@/composables/useTheme";

const { lang, toggleLanguage } = useLanguage();
const { currentTheme } = useTheme();

const revealActive = ref(false);
const revealLabel = ref("");
const showNotification = ref(false);
let pendingTarget = "";

const handleThemeSwitch = (nextTheme) => {
  revealLabel.value =
    nextTheme === "pixel" ? "ARCADE MODE" : "CREATIVE DESIGNER";
  revealActive.value = true;

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 550);
};

const onNavigate = ({ target, label }) => {
  showNotification.value = false;
  revealLabel.value = label;
  revealActive.value = true;
  pendingTarget = target;

  setTimeout(() => {
    if (pendingTarget) {
      const el = document.getElementById(pendingTarget);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, 550);
};

const onToggleLang = () => {
  showNotification.value = false;
  revealLabel.value = lang.value === "EN" ? "INDONESIA" : "ENGLISH";
  revealActive.value = true;
  pendingTarget = "";

  setTimeout(() => {
    toggleLanguage();
  }, 550);
};

const onRevealDone = () => {
  revealActive.value = false;
  revealLabel.value = "";
  pendingTarget = "";
};
</script>
