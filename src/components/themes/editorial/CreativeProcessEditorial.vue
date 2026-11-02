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

    <div class="container mx-auto relative z-10 max-w-[1550px]">
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 lg:mb-16 text-left">
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
              ? 'Setiap proyek dirancang dengan alur kerja terarah dan pendekatan Agile. Mengutamakan riset kebutuhan, pembuatan prototipe cepat untuk memvalidasi ide, pengembangan bertahap, hingga pengujian menyeluruh agar hasil akhir siap pakai.'
              : 'Every project follows a thoughtful path and an adaptive Agile approach—prioritizing requirement research, rapid prototyping to validate ideas early, iterative development, and thorough testing for production-ready quality.'
          }}
        </p>
      </div>

      <!-- 4-Stage Chamfered Process Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 relative z-10">
        <div
          v-for="(stage, idx) in stages"
          :key="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 550, delay: 90 * (idx + 1) },
          }"
          class="group relative p-[1.5px] transition-all duration-300 hover:-translate-y-1.5"
          style="clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));"
        >
          <!-- Outer Chamfer Border Gradient (Slate to Violet Accent on Hover) -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 group-hover:from-violet-500 group-hover:via-slate-800 group-hover:to-slate-600 transition-colors duration-400"
          ></div>

          <!-- Inner Chassis Panel -->
          <div
            class="relative w-full h-full bg-white p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            style="clip-path: polygon(0 0, calc(100% - 23px) 0, 100% 23px, 100% 100%, 23px 100%, 0 calc(100% - 23px));"
          >
            <!-- Top Content -->
            <div>
              <!-- Index & Phase Label -->
              <div class="flex items-baseline justify-between mb-5 pb-4 border-b border-slate-100">
                <span
                  class="text-3xl lg:text-4xl font-bold font-['Poppins'] text-slate-300 group-hover:text-violet-600 transition-colors"
                >
                  0{{ idx + 1 }}
                </span>
                <span class="text-xs font-bold font-['Poppins'] tracking-wider uppercase text-slate-400">
                  {{ lang === 'ID' ? stage.phaseID : stage.phaseEN }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-lg lg:text-xl font-bold font-['Poppins'] text-[#1e293b] mb-3 leading-snug">
                {{ lang === 'ID' ? stage.titleID : stage.titleEN }}
              </h3>

              <!-- Description -->
              <p class="text-[13.5px] text-[#475569] font-['Roboto'] leading-relaxed mb-6">
                {{ lang === 'ID' ? stage.descID : stage.descEN }}
              </p>
            </div>

            <!-- Bottom: Key Outputs (Clean Text List, Consistent with Portfolio Theme) -->
            <div class="pt-5 border-t border-slate-100">
              <h4 class="text-[11px] font-bold font-['Poppins'] uppercase tracking-wider text-slate-400 mb-3">
                {{ lang === 'ID' ? 'Fokus & Hasil Utama' : 'Key Outputs & Focus' }}
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(item, iIdx) in (lang === 'ID' ? stage.outputsID : stage.outputsEN)"
                  :key="iIdx"
                  class="text-[13px] text-[#334155] font-['Roboto'] flex items-start gap-2"
                >
                  <span class="text-violet-500 select-none font-bold mt-0.5">•</span>
                  <span class="leading-snug">{{ item }}</span>
                </li>
              </ul>
            </div>
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
    id: 'discovery-planning',
    phaseEN: 'Phase 01',
    phaseID: 'Fase 01',
    titleEN: 'Discovery & Planning',
    titleID: 'Eksplorasi & Perencanaan',
    descEN:
      'Understanding the project scope, breaking down requirements into manageable tasks, and mapping user journeys to ensure a clear direction before building.',
    descID:
      'Memahami tujuan dan cakupan proyek, memecah kebutuhan fitur menjadi tugas-tugas terarah, serta memetakan alur interaksi sebelum mulai produksi.',
    outputsEN: [
      'Scope & Requirement Analysis',
      'User Journey & Flow Mapping',
      'Sprint Backlog & Task Breakdown',
    ],
    outputsID: [
      'Analisis Kebutuhan & Cakupan Proyek',
      'Pemetaan Alur Interaksi Pengguna',
      'Perencanaan Backlog & Milestone',
    ],
  },
  {
    id: 'design-prototyping',
    phaseEN: 'Phase 02',
    phaseID: 'Fase 02',
    titleEN: 'Design & Prototyping',
    titleID: 'Desain & Prototipe',
    descEN:
      'Translating concepts into visual layouts, design systems, and interactive Figma prototypes to validate the user experience with the team early.',
    descID:
      'Menerjemahkan ide ke tata letak visual, sistem desain, dan prototipe interaktif di Figma untuk menguji pengalaman pengguna bersama tim lebih awal.',
    outputsEN: [
      'Wireframes & Visual Direction',
      'Interactive Figma Prototypes',
      'UI Assets & Design Tokens',
    ],
    outputsID: [
      'Wireframe & Eksplorasi Visual',
      'Prototipe Interaktif Figma',
      'Sistem Desain & Aset UI',
    ],
  },
  {
    id: 'agile-development',
    phaseEN: 'Phase 03',
    phaseID: 'Fase 03',
    titleEN: 'Agile Development',
    titleID: 'Pengembangan Bertahap',
    descEN:
      'Building features iteratively in focused sprint cycles. Writing clean, component-driven code across web frameworks or game engines, with regular progress demos.',
    descID:
      'Mengembangkan fitur secara bertahap dalam siklus sprint teratur. Menulis kode modular berbasis komponen di web maupun engine game, lengkap dengan evaluasi berkala.',
    outputsEN: [
      'Modular Component-Driven Code',
      'Feature Integration & Logic',
      'Regular Milestone Demos',
    ],
    outputsID: [
      'Kode Modular Berbasis Komponen',
      'Integrasi Logika & Fitur Utama',
      'Demo Progres Fitur Terjadwal',
    ],
  },
  {
    id: 'testing-delivery',
    phaseEN: 'Phase 04',
    phaseID: 'Fase 04',
    titleEN: 'Testing & Delivery',
    titleID: 'Pengujian & Rilis Akhir',
    descEN:
      'Conducting thorough testing across devices and browsers, fixing bugs, fine-tuning responsiveness and performance, and ensuring the final build is ready for launch.',
    descID:
      'Melakukan pengujian menyeluruh di berbagai perangkat dan browser, memperbaiki kendala teknis, mengoptimasi performa dan responsivitas, hingga proyek siap dirilis.',
    outputsEN: [
      'Cross-Device & Browser Testing',
      'Bug Fixing & Performance Tuning',
      'Final Production Polish & Launch',
    ],
    outputsID: [
      'Pengujian Lintas Alat & Browser',
      'Perbaikan Bug & Optimasi Performa',
      'Polesan Akhir Siap Rilis',
    ],
  },
]
</script>

<style scoped></style>
