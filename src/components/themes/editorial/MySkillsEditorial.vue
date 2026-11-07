<script setup>
import GithubCalendar from '@/components/GithubCalendar.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, lang } = useLanguage()

const row1Tools = [
  {
    name: 'Unity',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    invert: true,
    delay: 0,
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    delay: 60,
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    delay: 120,
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp',
    delay: 180,
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    delay: 240,
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    invert: true,
    delay: 300,
  },
]

const row2Tools = [
  {
    name: 'Google Antigravity',
    icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/webp/google-antigravity.webp',
    delay: 360,
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    delay: 420,
  },
  {
    name: 'Adobe Illustrator',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg',
    delay: 480,
  },
  {
    name: 'Adobe Photoshop',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    delay: 540,
  },
  {
    name: 'Canva',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
    delay: 600,
  },
]

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <!-- My Skills Section -->
  <section id="skills" class="bg-[#171717] py-20 px-6 md:px-16 lg:px-40 relative overflow-hidden">
    <!-- Decorative Side Tabs -->
    <img
      src="/images/accents/accent_5.webp"
      alt="Decorative Side Tab"
      class="absolute left-0 top-1/2 -translate-y-1/2 w-12 lg:w-20 pointer-events-none"
    />
    <img
      src="/images/accents/accent_5.webp"
      alt="Decorative Side Tab"
      class="absolute right-0 top-1/2 -translate-y-1/2 w-12 lg:w-20 pointer-events-none transform rotate-180"
    />

    <div class="container mx-auto relative z-10 text-center">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.85, y: -10 }"
        :visible-once="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500 } }"
        class="text-center"
      >
        <span
          class="inline-block bg-[#8B5CF6] text-white font-['Poppins'] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-2 rounded-full mb-4 shadow-lg shadow-violet-500/20"
        >
          {{ t('skills_badge') }}
        </span>
      </div>

      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 100 },
        }"
        class="text-3xl md:text-4xl lg:text-[48px] font-bold font-['Poppins'] text-white mb-6 uppercase tracking-wider text-center"
      >
        {{ t('skills_heading') }}
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 },
        }"
        class="text-[#8E949F] font-['Roboto'] font-medium text-[14px] lg:text-[16px] max-w-3xl mx-auto leading-relaxed mb-16 text-center"
      >
        {{ t('skills_sub') }}
      </p>

      <!-- Section Divider -->
      <div
        v-motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :visible-once="{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 800, delay: 300, ease: 'easeOut' },
        }"
        class="w-full max-w-4xl mx-auto mb-14"
      >
        <div class="h-px w-full bg-white/10"></div>
      </div>

      <!-- Icons Grid -->
      <div
        class="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-14 max-w-4xl mx-auto"
      >
        <!-- Row 1: Engineering & Cloud Stack (6 items) -->
        <div class="flex flex-nowrap justify-center gap-2 sm:gap-4 lg:gap-6">
          <div
            v-for="tool in row1Tools"
            :key="tool.name"
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: tool.delay,
                type: 'spring',
                stiffness: 250,
                damping: 15,
              },
            }"
            class="group relative w-[12.5vw] h-[12.5vw] max-w-16 max-h-16 min-w-10 min-h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#1D1D1D] border border-white/5 hover:border-violet-500/40 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-xl p-2 sm:p-3"
          >
            <img
              :src="tool.icon"
              :alt="tool.name"
              loading="lazy"
              decoding="async"
              class="w-6 sm:w-10 lg:w-13 h-6 sm:h-10 lg:h-13 object-contain"
              :class="tool.invert ? 'brightness-0 invert' : ''"
            />
            <!-- Tooltip on hover -->
            <div
              class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-150 py-1 px-2.5 rounded-lg bg-zinc-900/95 border border-white/15 text-[11px] font-['Poppins'] font-medium text-zinc-100 whitespace-nowrap z-50 shadow-xl backdrop-blur-sm"
            >
              {{ tool.name }}
              <div
                class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900/95"
              ></div>
            </div>
          </div>
        </div>

        <!-- Row 2: AI & Design Tooling (5 items) -->
        <div class="flex flex-nowrap justify-center gap-2 sm:gap-4 lg:gap-6">
          <div
            v-for="tool in row2Tools"
            :key="tool.name"
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: tool.delay,
                type: 'spring',
                stiffness: 250,
                damping: 15,
              },
            }"
            class="group relative w-[12.5vw] h-[12.5vw] max-w-16 max-h-16 min-w-10 min-h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#1D1D1D] border border-white/5 hover:border-violet-500/40 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-xl p-2 sm:p-3"
          >
            <img
              :src="tool.icon"
              :alt="tool.name"
              loading="lazy"
              decoding="async"
              class="w-6 sm:w-10 lg:w-13 h-6 sm:h-10 lg:h-13 object-contain"
              :class="tool.invert ? 'brightness-0 invert' : ''"
            />
            <!-- Tooltip on hover -->
            <div
              class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-150 py-1 px-2.5 rounded-lg bg-zinc-900/95 border border-white/15 text-[11px] font-['Poppins'] font-medium text-zinc-100 whitespace-nowrap z-50 shadow-xl backdrop-blur-sm"
            >
              {{ tool.name }}
              <div
                class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900/95"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Text Subtitle List -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 400, ease: 'easeOut' },
        }"
        class="pt-4 text-[11px] lg:text-[15px] text-zinc-200 font-['Roboto'] font-medium max-w-3xl mx-auto leading-loose lg:leading-loose text-balance"
      >
        Unity &bull; Flutter &bull; Vue.js &bull; Vite &bull; Supabase &bull; PostgreSQL &bull;
        Firebase &bull; GitHub
        <br class="hidden lg:block" />
        <span class="lg:hidden"> &bull; </span>Antigravity &bull; Figma &bull; Adobe Illustrator
        &bull; Adobe Photoshop &bull; Canva &bull;
        <span class="text-zinc-400">{{ lang === 'ID' ? 'dan lainnya' : 'and more' }}</span>
      </p>

      <!-- GitHub Contributions -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 500, ease: 'easeOut' },
        }"
        class="mt-12 mb-16 flex flex-col items-center w-full max-w-4xl mx-auto"
      >
        <GithubCalendar />
      </div>

      <!-- Scroll to Process Section -->
      <button
        type="button"
        @click="scrollToSection('process')"
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: 500, ease: 'easeOut' },
        }"
        class="inline-flex items-center justify-center p-2 pb-4 text-zinc-400 hover:text-white hover:translate-y-1 transition-all cursor-pointer"
        :aria-label="lang === 'ID' ? 'Gulir ke bagian Proses' : 'Scroll to Process section'"
      >
        <i class="bi bi-caret-down-fill text-2xl"></i>
      </button>
    </div>
  </section>
</template>
