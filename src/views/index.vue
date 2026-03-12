<template>
  <Navbar @navigate="onNavigate" @toggle-lang="onToggleLang" />
  <Hero />
  <Experience />
  <MySkills />
  <SomeProjects />
  <MyProjects />
  <Achievements />
  <ContactMe />
  <FloatingActionButton />
  <CTAPopup />
  <CursorMultiFollow />

  <!-- Page Reveal Transition -->
  <PageReveal
    :active="revealActive"
    :label="revealLabel"
    @done="onRevealDone"
  />
</template>

<script setup>
import { ref, nextTick } from "vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Experience from "@/components/Experience.vue";
import MySkills from "@/components/MySkills.vue";
import SomeProjects from "@/components/SomeProjects.vue";
import MyProjects from "@/components/MyProjects.vue";
import Achievements from "@/components/Achievements.vue";
import ContactMe from "@/components/ContactMe.vue";
import PageReveal from "@/components/PageReveal.vue";
import FloatingActionButton from "@/components/FloatingActionButton.vue";
import CTAPopup from "@/components/CTAPopup.vue";
import CursorMultiFollow from "@/components/CursorMultiFollow.vue";
import { useLanguage } from "@/composables/useLanguage";

const { lang, toggleLanguage } = useLanguage();

const revealActive = ref(false);
const revealLabel = ref("");
let pendingTarget = "";

const onNavigate = ({ target, label }) => {
  revealLabel.value = label;
  revealActive.value = true;
  pendingTarget = target;

  // Scroll to target during the "hold" phase (when screen is fully covered)
  setTimeout(() => {
    if (pendingTarget) {
      const el = document.getElementById(pendingTarget);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    } else {
      // Home — scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, 550);
};

const onToggleLang = () => {
  revealLabel.value = lang.value === 'EN' ? 'INDONESIA' : 'ENGLISH';
  revealActive.value = true;
  pendingTarget = "";

  // Wait for the curtain to cover the screen before swapping language
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
