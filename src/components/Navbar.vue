<script setup>
import { ref, onMounted } from "vue";

import ThemeToggle from "@/components/ThemeToggle.vue";
import { useLanguage } from "@/composables/useLanguage";
import { useTheme } from "@/composables/useTheme";

const isMenuOpen = ref(false);
const navReady = ref(false);

const emit = defineEmits(["navigate", "toggle-lang", "show-notification", "toggle-theme"]);

const { lang, toggleLanguage, t } = useLanguage();
const { currentTheme } = useTheme();

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

const handleToggleTheme = (newTheme) => {
  emit("toggle-theme", newTheme);
};

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
    :class="{ 'nav-entered': navReady, 'pixel-theme': currentTheme === 'pixel' }"
  >
    <!-- Morph background layer -->
    <div class="navbar-bg"></div>

    <!-- Pixel theme bottom border (scanline effect) -->
    <div v-if="currentTheme === 'pixel'" class="pixel-bottom-border"></div>

    <!-- Right-side Custom Slant Accent -->
    <div class="navbar-accent-shape hidden lg:block overflow-hidden" :class="{ 'opacity-0': currentTheme === 'pixel' }">
      <!-- Background pattern -->
      <img src="/images/accents/accent_3.webp" alt="" class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale blur-[1px]" />
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
        <img src="/images/logo.webp" alt="logo" class="w-10 lg:w-11 xl:w-14 aspect-square object-contain" />
        <a
          href="#"
          @click="handleNav('', 'Home', $event)"
          class="font-semibold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'font-silkscreen text-[#00ff66] hover:text-[#33ff88] tracking-wide' : 'font-[\'Poppins\'] text-white'"
          >{{ currentTheme === 'pixel' ? 'M.SIDIK' : 'Muhamad' }}<br />{{ currentTheme === 'pixel' ? '&lt;DEV/&gt;' : 'Sidik' }}</a
        >
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center lg:gap-4 xl:gap-14 uppercase">
        <a
          href="#"
          @click="handleNav('', t('nav_home'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          style="--delay: 1"
          >{{ t('nav_home') }}</a
        >
        <a
          href="#about"
          @click="handleNav('about', t('nav_about'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          style="--delay: 2"
          >{{ t('nav_about') }}</a
        >
        <a
          href="#experience"
          @click="handleNav('experience', t('nav_experience'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          style="--delay: 4"
          >{{ t('nav_experience') }}</a
        >
        <a
          :href="currentTheme === 'pixel' ? '#projects' : '#my-projects'"
          @click="handleNav(currentTheme === 'pixel' ? 'projects' : 'my-projects', t('nav_projects'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          style="--delay: 5"
          >{{ t('nav_projects') }}</a
        >
        <a
          href="#contact"
          @click="handleNav('contact', t('nav_contact'), $event)"
          class="nav-item nav-link text-white font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition-colors"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          style="--delay: 7"
          >{{ t('nav_contact') }}</a
        >
        <div class="flex items-center lg:gap-2 xl:gap-3">
          <ThemeToggle
            @toggle-theme="handleToggleTheme"
            class="nav-item"
            style="--delay: 7"
          />

          <button
            @click="handleToggleLang"
            class="nav-item w-8 h-8 flex items-center justify-center font-bold text-[11px] lg:text-[12px] xl:text-[15px] transition"
            :class="
              currentTheme === 'pixel'
                ? 'bg-[#00ff66] text-black font-mono border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#33ff88] rounded-none'
                : 'bg-violet-500 text-white rounded-xl hover:bg-violet-600 font-[\'Roboto\'] shadow-lg shadow-violet-500/30'
            "
            style="--delay: 8"
          >
            {{ lang === 'EN' ? 'EN' : 'ID' }}
          </button>
          
          <button
            @click="$emit('show-notification')"
            class="nav-item w-8 h-8 flex items-center justify-center transition relative"
            :class="
              currentTheme === 'pixel'
                ? 'bg-[#0a120d] border-2 border-[#00ff66]/50 text-[#00ff66] hover:bg-[#00ff66] hover:text-black rounded-none shadow-[2px_2px_0px_#000]'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-violet-500 hover:text-white hover:border-violet-500 rounded-xl shadow-lg'
            "
            style="--delay: 9"
          >
            <i class="bi bi-bell-fill text-sm"></i>
            <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full opacity-75" :class="currentTheme === 'pixel' ? 'bg-[#00ff66]' : 'rounded-full bg-red-400'"></span>
              <span class="relative inline-flex h-2.5 w-2.5" :class="currentTheme === 'pixel' ? 'bg-[#00ff66] border border-black shadow-[1px_1px_0px_#000]' : 'rounded-full bg-red-500 border border-[#171717]'"></span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-white text-3xl transition relative z-50 nav-item"
        :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66]' : 'hover:text-violet-500'"
        style="--delay: 1"
      >
        <i :class="isMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="lg:hidden fixed inset-x-0 top-[60px] backdrop-blur-md transition-all duration-300 ease-in-out shadow-2xl z-40"
      :class="[
        isMenuOpen ? 'max-h-screen py-6 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible',
        currentTheme === 'pixel' ? 'bg-[#0d1117]/98 border-b-2 border-[#00ff66]/60' : 'bg-[#171717]/95 border-t border-gray-800'
      ]"
    >
      <div class="flex flex-col items-center gap-6 uppercase overflow-hidden">
        <a
          href="#"
          @click="handleNav('', t('nav_home'), $event)"
          class="text-white font-bold text-[14px] transition"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          >{{ t('nav_home') }}</a
        >
        <a
          href="#about"
          @click="handleNav('about', t('nav_about'), $event)"
          class="text-white font-bold text-[14px] transition"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          >{{ t('nav_about') }}</a
        >
        <a
          href="#experience"
          @click="handleNav('experience', t('nav_experience'), $event)"
          class="text-white font-bold text-[14px] transition"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          >{{ t('nav_experience') }}</a
        >
        <a
          :href="currentTheme === 'pixel' ? '#projects' : '#my-projects'"
          @click="handleNav(currentTheme === 'pixel' ? 'projects' : 'my-projects', t('nav_projects'), $event)"
          class="text-white font-bold text-[14px] transition"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          >{{ t('nav_projects') }}</a
        >
        <a
          href="#contact"
          @click="handleNav('contact', t('nav_contact'), $event)"
          class="text-white font-bold text-[14px] transition"
          :class="currentTheme === 'pixel' ? 'hover:text-[#00ff66] font-silkscreen' : 'hover:text-violet-500 font-[\'Roboto\']'"
          >{{ t('nav_contact') }}</a
        >
        <div class="flex items-center gap-4 mt-2">
          <ThemeToggle @toggle-theme="handleToggleTheme" />
          <button
            @click="handleToggleLang"
            class="w-10 h-10 flex items-center justify-center font-bold text-[14px] transition"
            :class="
              currentTheme === 'pixel'
                ? 'bg-[#00ff66] text-black font-mono border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#33ff88] rounded-none'
                : 'bg-violet-500 text-white rounded-xl hover:bg-violet-600 font-[\'Roboto\'] shadow-lg shadow-violet-500/30'
            "
          >
            {{ lang === 'EN' ? 'EN' : 'ID' }}
          </button>
          <button
            @click="handleMobileNotification"
            class="w-10 h-10 flex items-center justify-center transition relative pointer-events-auto"
            :class="
              currentTheme === 'pixel'
                ? 'bg-[#0a120d] border-2 border-[#00ff66]/50 text-[#00ff66] hover:bg-[#00ff66] hover:text-black rounded-none shadow-[2px_2px_0px_#000]'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-violet-500 hover:text-white hover:border-violet-500 rounded-xl shadow-lg'
            "
          >
            <i class="bi bi-bell-fill text-base"></i>
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full opacity-75" :class="currentTheme === 'pixel' ? 'bg-[#00ff66]' : 'rounded-full bg-red-400'"></span>
              <span class="relative inline-flex h-3 w-3" :class="currentTheme === 'pixel' ? 'bg-[#00ff66] border border-black shadow-[1px_1px_0px_#000]' : 'rounded-full bg-red-500 border border-[#171717]'"></span>
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
  transition:
    clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1),
    background 0.3s ease;
}

.nav-entered .navbar-bg {
  clip-path: inset(0 0 0 0);
}

/* Pixel theme overrides the navbar bg color */
.pixel-theme .navbar-bg {
  background: #0d1117;
}

/* Pixel theme bottom scanline border */
.pixel-bottom-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff66, #00f0ff, #00ff66, transparent);
  box-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
  z-index: 1;
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
  transition: background 0.3s ease;
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

.pixel-theme .nav-link::after {
  background: #00ff66;
  border-radius: 0px;
  box-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
  height: 2px;
}

/* Pixel theme accent shape color sync */
.pixel-theme .navbar-accent-shape {
  background: #0d1117;
}
</style>
