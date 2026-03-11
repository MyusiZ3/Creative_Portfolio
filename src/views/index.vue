<template>
  <Navbar @navigate="onNavigate" />
  <Hero />
  <Experience />
  <MySkills />
  <SomeProjects />
  <MyProjects />
  <FloatingActionButton />

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
import PageReveal from "@/components/PageReveal.vue";
import FloatingActionButton from "@/components/FloatingActionButton.vue";

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

const onRevealDone = () => {
  revealActive.value = false;
  revealLabel.value = "";
  pendingTarget = "";
};
</script>
