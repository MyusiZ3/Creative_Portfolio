<template>
  <Navbar @navigate="onNavigate" @toggle-lang="onToggleLang" @show-notification="showNotification = true" />
  
  <!-- Editorial Minimalist Theme (Theme 1) -->
  <template v-if="currentTheme === 'editorial'">
    <HeroEditorial />
    <ExperienceEditorial />
    <MySkillsEditorial />
    <SomeProjectsEditorial />
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

  <!-- Floating Theme Toggle Control -->
  <ThemeToggle @toggle-theme="handleThemeSwitch" />

  <FloatingActionButton />
  <CTAPopup />
  <NotificationPopup :show="showNotification" @close="showNotification = false" />
  <CursorMultiFollow />

  <!-- Page Reveal Transition Curtain -->
  <PageReveal
    :active="revealActive"
    :label="revealLabel"
    @done="onRevealDone"
  />
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

// Editorial Theme Components
import HeroEditorial from "@/components/themes/editorial/HeroEditorial.vue";
import ExperienceEditorial from "@/components/themes/editorial/ExperienceEditorial.vue";
import MySkillsEditorial from "@/components/themes/editorial/MySkillsEditorial.vue";
import SomeProjectsEditorial from "@/components/themes/editorial/SomeProjectsEditorial.vue";
import MyProjectsEditorial from "@/components/themes/editorial/MyProjectsEditorial.vue";
import AchievementsEditorial from "@/components/themes/editorial/AchievementsEditorial.vue";
import ContactMeEditorial from "@/components/themes/editorial/ContactMeEditorial.vue";

// Pixel Arcade Theme Components
import HeroPixel from "@/components/themes/pixel/HeroPixel.vue";
import ImpactBentoPixel from "@/components/themes/pixel/ImpactBentoPixel.vue";
import ProjectsPixel from "@/components/themes/pixel/ProjectsPixel.vue";
import SkillsPixel from "@/components/themes/pixel/SkillsPixel.vue";
import ExperiencePixel from "@/components/themes/pixel/ExperiencePixel.vue";
import ContactPixel from "@/components/themes/pixel/ContactPixel.vue";

import PageReveal from "@/components/PageReveal.vue";
import FloatingActionButton from "@/components/FloatingActionButton.vue";
import CTAPopup from "@/components/CTAPopup.vue";
import NotificationPopup from "@/components/NotificationPopup.vue";
import CursorMultiFollow from "@/components/CursorMultiFollow.vue";
import { useLanguage } from "@/composables/useLanguage";
import { useTheme } from "@/composables/useTheme";

const { lang, toggleLanguage } = useLanguage();
const { currentTheme } = useTheme();

const revealActive = ref(false);
const revealLabel = ref("");
const showNotification = ref(false);
let pendingTarget = "";

const handleThemeSwitch = (nextTheme) => {
  revealLabel.value = nextTheme === 'pixel' ? 'LEVEL 2: PIXEL ARCADE' : 'EDITORIAL MINIMALIST';
  revealActive.value = true;
  
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
  revealLabel.value = lang.value === 'EN' ? 'INDONESIA' : 'ENGLISH';
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

