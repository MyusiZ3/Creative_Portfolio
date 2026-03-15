<script setup>
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
const navReady = ref(false);

const emit = defineEmits(["navigate", "toggle-lang", "show-notification"]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleNav = (target, label, event) => {
  event.preventDefault();
  isMenuOpen.value = false;
  emit("navigate", { target, label });
};

const handleToggleLang = () => {
  isMenuOpen.value = false;
  emit("toggle-lang");
};

const handleMobileNotification = () => {
  isMenuOpen.value = false;
  emit("show-notification");
};

import { useLanguage } from "@/composables/useLanguage";

const { lang, toggleLanguage, t } = useLanguage();

onMounted(() => {
  // Small delay to trigger the morph entrance
  requestAnimationFrame(() => {
    navReady.value = true;
  });
});
</script>

<template>
  <nav
    class="navbar-morph sticky top-0 z-50"
    :class="{ 'nav-entered': navReady }"
  >
    <!-- Morph background layer -->
    <div class="navbar-bg"></div>

    <!-- Right-side Custom Slant Accent -->
    <div class="navbar-accent-shape hidden lg:block overflow-hidden">
      <!-- Background pattern -->
      <img src="/images/accent_3.png" alt="" class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale blur-[1px]" />
      
      <!-- Purple subtle edge glow or border if needed, skipping to keep clean -->
    </div>

    <!-- Content layer -->
    <div
      class="navbar-content container mx-auto flex justify-between items-center gap-2 px-6 lg:px-12 xl:px-38 py-3 relative z-10"
    >
      <!-- Logo -->
      <div
        class="flex items-center gap-2 relative z-50 nav-item"
        style="--delay: 0"
      >
        <img src="/images/logo.png" alt="logo" class="w-10 lg:w-11 xl:w-14 aspect-square object-contain" />
        <a
          href="#"
          @click="handleNav('', 'Home', $event)"
          class="text-white font-semibold text-[11px] lg:text-[12px] xl:text-[15px] font-['Poppins']"
          >Muhamad<br />Sidik</a
        >
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center lg:gap-4 xl:gap-14 uppercase">
        <a
          href="#"
          @click="handleNav('', t('nav_home'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] hover:text-violet-500 transition-colors"
          style="--delay: 1"
          >{{ t('nav_home') }}</a
        >
        <a
          href="#about"
          @click="handleNav('about', t('nav_about'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] hover:text-violet-500 transition-colors"
          style="--delay: 2"
          >{{ t('nav_about') }}</a
        >
        <a
          href="#skills"
          @click="handleNav('skills', t('nav_skills'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] hover:text-violet-500 transition-colors"
          style="--delay: 4"
          >{{ t('nav_skills') }}</a
        >
        <a
          href="#projects"
          @click="handleNav('projects', t('nav_projects'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] hover:text-violet-500 transition-colors"
          style="--delay: 5"
          >{{ t('nav_projects') }}</a
        >
        <a
          href="#contact"
          @click="handleNav('contact', t('nav_contact'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] hover:text-violet-500 transition-colors"
          style="--delay: 7"
          >{{ t('nav_contact') }}</a
        >
        <div class="flex items-center lg:gap-2 xl:gap-3">
          <button
            @click="handleToggleLang"
            class="nav-item w-8 h-8 flex items-center justify-center bg-violet-500 text-white rounded-xl hover:bg-violet-600 transition font-bold text-[11px] lg:text-[12px] xl:text-[15px] font-['Roboto'] shadow-lg shadow-violet-500/30"
            style="--delay: 7"
          >
            {{ lang === 'EN' ? 'EN' : 'ID' }}
          </button>
          
          <button
            @click="$emit('show-notification')"
            class="nav-item w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-violet-500 hover:text-white hover:border-violet-500 transition relative shadow-lg"
            style="--delay: 8"
          >
            <i class="bi bi-bell-fill text-sm"></i>
            <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-[#171717]"></span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-white text-3xl hover:text-violet-500 transition relative z-50 nav-item"
        style="--delay: 1"
      >
        <i :class="isMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="lg:hidden fixed inset-x-0 top-[60px] bg-[#171717]/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out shadow-2xl z-40"
      :class="isMenuOpen ? 'max-h-screen py-6 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible'"
    >
      <div class="flex flex-col items-center gap-6 uppercase overflow-hidden">
        <a
          href="#"
          @click="handleNav('', t('nav_home'), $event)"
          class="text-white font-bold text-[14px] font-['Roboto'] hover:text-violet-500 transition"
          >{{ t('nav_home') }}</a
        >
        <a
          href="#about"
          @click="handleNav('about', t('nav_about'), $event)"
          class="text-white font-bold text-[14px] font-['Roboto'] hover:text-violet-500 transition"
          >{{ t('nav_about') }}</a
        >
        <a
          href="#skills"
          @click="handleNav('skills', t('nav_skills'), $event)"
          class="text-white font-bold text-[14px] font-['Roboto'] hover:text-violet-500 transition"
          >{{ t('nav_skills') }}</a
        >
        <a
          href="#projects"
          @click="handleNav('projects', t('nav_projects'), $event)"
          class="text-white font-bold text-[14px] font-['Roboto'] hover:text-violet-500 transition"
          >{{ t('nav_projects') }}</a
        >
        <a
          href="#contact"
          @click="handleNav('contact', t('nav_contact'), $event)"
          class="text-white font-bold text-[14px] font-['Roboto'] hover:text-violet-500 transition"
          >{{ t('nav_contact') }}</a
        >
        <div class="flex gap-4 mt-2">
          <button
            @click="handleToggleLang"
            class="w-10 h-10 flex items-center justify-center bg-violet-500 text-white rounded-xl hover:bg-violet-600 transition font-bold text-[14px] font-['Roboto'] shadow-lg shadow-violet-500/30"
          >
            {{ lang === 'EN' ? 'EN' : 'ID' }}
          </button>
          <button
            @click="handleMobileNotification"
            class="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-violet-500 hover:text-white hover:border-violet-500 transition relative shadow-lg pointer-events-auto"
          >
            <i class="bi bi-bell-fill text-base"></i>
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-[#171717]"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* === Morph Navbar Background === */
.navbar-morph {
  position: sticky;
  top: 0;
  z-index: 50;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25));
}

.navbar-bg {
  position: absolute;
  inset: 0;
  background: #171717;
  clip-path: inset(0 50% 0 50%);
  transition: clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1);
}

.nav-entered .navbar-bg {
  clip-path: inset(0 0 0 0);
}

/* === NavBar Right Accent Shape === */
/* Adjust these variables directly to visually tweak the placement & slant curve! */
.navbar-accent-shape {
  --shape-width: 420px;
  --shape-height: 90px;
  --shape-right: 0px; 
  --shape-top-offset: 1%; /* Connect seamlessly to the bottom of the nav */
  --slant-start-point: 25%; /* Left starting point of the bottom slant (25% = steep curve rightwards) */
  /* --shape-width: 820px;
  --shape-height: 200px;
  --shape-right: 0px; 
  --shape-top-offset: -140%; 
  --slant-start-point: 25%;  */

  position: absolute;
  right: var(--shape-right);
  top: var(--shape-top-offset); 
  width: var(--shape-width);
  height: var(--shape-height);
  background: #171717;
  z-index: -1;

  /* Polygon structure: top-left (0,0), top-right (100%,0), bot-right (100%,100%), bot-left (starts at start-point) */
  clip-path: polygon(0 0, 100% 0, 100% 0, var(--slant-start-point) 0);
  transition: clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1);
  transition-delay: 0.1s; 
}

.nav-entered .navbar-accent-shape {
  clip-path: polygon(0 0, 100% 0, 100% 100%, var(--slant-start-point) 100%);
}

/* === Nav items morph in === */
.nav-item {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(-8px) scale(0.92);
  transition:
    opacity 0.5s cubic-bezier(0.33, 1, 0.68, 1),
    filter 0.5s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  transition-delay: calc(var(--delay, 0) * 0.07s + 0.35s);
}

.nav-entered .nav-item {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0) scale(1);
}

/* === Nav link hover morph effect === */
.nav-link {
  position: relative;
  display: inline-block;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #7c3aed, #a78bfa);
  border-radius: 999px;
  transition:
    width 0.35s cubic-bezier(0.33, 1, 0.68, 1),
    left 0.35s cubic-bezier(0.33, 1, 0.68, 1);
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}
</style>
