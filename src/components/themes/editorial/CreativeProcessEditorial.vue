<template>
  <section
    id="process"
    class="bg-[#F8FAFC] pt-16 pb-16 lg:pt-24 lg:pb-36 xl:pb-48 px-6 lg:px-10 xl:px-12 2xl:px-20 relative overflow-hidden -mb-1"
  >
    <!-- Top Right Accent Shape -->
    <img
      src="/images/accents/accent_3.webp"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0"
    />
    <!-- Bottom Left Accent Shape -->
    <img
      src="/images/accents/accent_3.webp"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute -bottom-1 left-0 w-32 md:w-52 lg:w-72 xl:w-200 pointer-events-none transform rotate-180 z-0"
    />

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 lg:mb-20 text-left">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
          class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-[#1e293b] leading-tight mb-5"
        >
          <template v-if="lang === 'ID'"> Dari Konsep<br />Hingga Hasil Akhir </template>
          <template v-else> How I Bring<br />Concepts to Life </template>
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
          class="text-[#475569] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed max-w-2xl"
        >
          {{
            lang === 'ID'
              ? 'Setiap proyek dirancang dengan alur yang terarah, mulai dari riset ide, desain visual, arsitektur sistem, penulisan kode yang rapi, hingga sentuhan akhir yang responsif.'
              : 'Every project follows a thoughtful path, from initial ideas and visual design to structured architecture, clean code, and fine-tuned details.'
          }}
        </p>
      </div>

      <!-- 5-Stage Process Cards Deck (Responsive: 1-col mobile, 2-col sm, 3-col lg, 5-col overlapping deck on xl) -->
      <div
        class="flex flex-wrap xl:flex-nowrap justify-center items-stretch gap-6 xl:gap-0 xl:-space-x-3 max-w-[1550px] mx-auto pt-2 pb-4 lg:pt-6 lg:pb-8 relative z-10 px-1 sm:px-0 mb-2 lg:mb-4"
      >
        <div
          v-for="(stage, idx) in stages"
          :key="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 35, scale: 0.96 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 600, delay: 90 * (idx + 1) },
          }"
          class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-1/5 group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:z-[100] hover:rotate-0 hover:scale-105 hover:shadow-[0_28px_56px_rgba(0,0,0,0.18)] hover:border-slate-300 cursor-pointer overflow-hidden min-h-[330px] xl:min-h-[380px]"
          :class="stage.stackClass"
        >
          <!-- Card Header & Body -->
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <!-- Top Row: Icon + Title & Phase Number Tag -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2.5 min-w-0">
                  <span
                    class="w-8 h-8 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 text-sm"
                  >
                    <i :class="['bi', stage.icon]"></i>
                  </span>
                  <span
                    class="text-[13px] sm:text-[14px] font-bold font-['Poppins'] text-[#18181b] tracking-wider uppercase truncate"
                  >
                    {{ lang === 'ID' ? stage.titleID : stage.titleEN }}
                  </span>
                </div>
                <span
                  class="text-xs shrink-0 ml-2 font-bold font-mono text-zinc-400 bg-zinc-100/90 px-2 py-0.5 rounded-full group-hover:text-zinc-900 group-hover:bg-zinc-200/80 transition-colors"
                >
                  0{{ idx + 1 }}
                </span>
              </div>

              <!-- Description -->
              <p
                class="text-[12.5px] text-slate-600 font-['Roboto'] leading-relaxed mb-4 min-h-[42px]"
              >
                {{ lang === 'ID' ? stage.descID : stage.descEN }}
              </p>

              <!-- Activity Badges -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span
                  v-for="(act, aIdx) in lang === 'ID' ? stage.activitiesID : stage.activitiesEN"
                  :key="aIdx"
                  class="inline-flex items-center whitespace-nowrap text-[10.5px] sm:text-[11px] font-medium font-['Roboto'] px-2.5 py-1 rounded-lg border border-slate-200/80 text-slate-700 bg-slate-50/90 group-hover:bg-white group-hover:border-slate-300 transition-colors"
                >
                  {{ act }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Footer Bar (Sleek Satin Off-Black with Live Pulse Dot) -->
          <div
            class="px-5 py-3 bg-[#18181b] flex items-center justify-between select-none transition-colors border-t border-zinc-800"
          >
            <span
              class="text-[9.5px] font-bold font-['Poppins'] tracking-widest uppercase text-zinc-300"
            >
              {{ lang === 'ID' ? stage.footerID : stage.footerEN }}
            </span>
            <span
              class="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-emerald-400 transition-colors duration-300"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { lang } = useLanguage()

const stages = [
  {
    id: 'explore',
    icon: 'bi-compass',
    titleEN: 'EXPLORE',
    titleID: 'EKSPLORASI',
    descEN: 'Deconstructing project scope, understanding goals, and researching domain context.',
    descID: 'Membedah cakupan proyek, memahami tujuan utama, dan riset konteks domain.',
    footerEN: 'PHASE 01 • DISCOVERY',
    footerID: 'FASE 01 • DISCOVERY',
    stackClass: 'xl:rotate-[-1.5deg] xl:translate-y-1 z-10',
    activitiesEN: [
      'Requirement Analysis',
      'User Research',
      'Concept Exploration',
      'Feasibility Check',
    ],
    activitiesID: ['Analisis Kebutuhan', 'Riset Pengguna', 'Eksplorasi Konsep', 'Cek Kelayakan'],
  },
  {
    id: 'visualize',
    icon: 'bi-palette',
    titleEN: 'VISUALIZE',
    titleID: 'VISUALISASI',
    descEN:
      'Translating abstract ideas into high-fidelity visual layouts, typography, and moodboards.',
    descID: 'Menerjemahkan ide ke tata letak visual, tipografi, dan moodboard berkualitas tinggi.',
    footerEN: 'PHASE 02 • UI DESIGN',
    footerID: 'FASE 02 • DESAIN UI',
    stackClass: 'xl:rotate-[1deg] xl:-translate-y-1.5 z-20',
    activitiesEN: ['Moodboard Direction', 'Wireframe & Grids', 'Figma UI Design', 'Design System'],
    activitiesID: ['Arah Moodboard', 'Wireframe & Grid', 'Desain Figma UI', 'Sistem Desain'],
  },
  {
    id: 'structure',
    icon: 'bi-diagram-3',
    titleEN: 'STRUCTURE',
    titleID: 'STRUKTUR',
    descEN: 'Mapping user journeys, information architecture, and structured data relationships.',
    descID: 'Pemetaan alur pengguna, arsitektur informasi, dan relasi data terstruktur.',
    footerEN: 'PHASE 03 • ARCHITECTURE',
    footerID: 'FASE 03 • ARSITEKTUR',
    stackClass: 'xl:rotate-[-1deg] xl:translate-y-2 z-30',
    activitiesEN: ['Info Architecture', 'User Journey Map', 'Data Flow Diagrams', 'Feature Specs'],
    activitiesID: [
      'Arsitektur Informasi',
      'Alur Navigasi',
      'Diagram Alur Data',
      'Spesifikasi Fitur',
    ],
  },
  {
    id: 'build',
    icon: 'bi-code-slash',
    titleEN: 'BUILD',
    titleID: 'PENGEMBANGAN',
    descEN: 'Writing clean, component-driven code across Vue 3, Tailwind, Unity, or backend APIs.',
    descID: 'Menulis kode bersih berbasis komponen di Vue 3, Tailwind, Unity, maupun API.',
    footerEN: 'PHASE 04 • DEVELOPMENT',
    footerID: 'FASE 04 • DOKUMEN KODE',
    stackClass: 'xl:rotate-[1.5deg] xl:-translate-y-1 z-40',
    activitiesEN: [
      'Vue 3 / Component',
      'Interactive Proto',
      'Unity Development',
      'API Integration',
    ],
    activitiesID: ['Komponen Vue 3', 'Prototipe Interaktif', 'Pengembangan Unity', 'Integrasi API'],
  },
  {
    id: 'refine',
    icon: 'bi-patch-check',
    titleEN: 'REFINE',
    titleID: 'POLESAN AKHIR',
    descEN: 'Rigorous testing, micro-animation tuning, performance audits, and final delivery.',
    descID: 'Pengujian menyeluruh, penyetelan animasi mikro, audit performa, & finalisasi.',
    footerEN: 'PHASE 05 • QUALITY & POLISH',
    footerID: 'FASE 05 • FINISHING & LAUNCH',
    stackClass: 'xl:rotate-[-1deg] xl:translate-y-1.5 z-50',
    activitiesEN: [
      'Cross-Device Test',
      'Bug Fixing & Polish',
      'Asset Optimization',
      'Final Quality Check',
    ],
    activitiesID: [
      'Pengujian Lintas Alat',
      'Polesan & Fix Bug',
      'Optimasi Aset',
      'Inspeksi Kualitas',
    ],
  },
]
</script>

<style scoped></style>
