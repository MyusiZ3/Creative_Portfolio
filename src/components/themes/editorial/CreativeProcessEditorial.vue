<template>
  <section
    id="process"
    class="bg-[#F8FAFC] pt-16 pb-28 lg:pt-24 lg:pb-36 px-6 lg:px-12 xl:px-32 relative overflow-hidden -mb-1"
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
          class="text-3xl lg:text-[44px] font-extrabold font-['Poppins'] text-[#1e293b] leading-tight mb-5"
        >
          {{
            lang === "ID"
              ? "Dari Konsep Hingga Hasil Akhir"
              : "How I Bring Concepts to Life"
          }}
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
          class="text-[#475569] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed max-w-2xl"
        >
          {{
            lang === "ID"
              ? "Setiap proyek dirancang dengan alur yang terarah—mulai dari riset ide, desain visual, arsitektur sistem, penulisan kode yang rapi, hingga sentuhan akhir yang responsif."
              : "Every project follows a thoughtful path—from initial ideas and visual design to structured architecture, clean code, and fine-tuned details."
          }}
        </p>
      </div>

      <!-- 5-Stage Clean Editorial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 relative z-10">
        <div
          v-for="(stage, idx) in stages"
          :key="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 * (idx + 1) } }"
          class="bg-white border border-slate-200/90 shadow-xs hover:border-violet-400 hover:shadow-md transition-all duration-300 rounded-xl p-6 flex flex-col justify-between group relative"
        >
          <div>
            <!-- Clean Stage Index & Title -->
            <div class="border-b border-slate-100 pb-4 mb-4">
              <span class="text-2xl font-bold font-['Poppins'] text-violet-600 block mb-1">
                0{{ idx + 1 }}
              </span>
              <h3 class="text-lg font-bold font-['Poppins'] text-slate-800 tracking-tight group-hover:text-violet-600 transition-colors">
                {{ stage.title }}
              </h3>
            </div>

            <!-- Stage Description -->
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mb-5 min-h-[40px]">
              {{ lang === 'ID' ? stage.descID : stage.descEN }}
            </p>

            <div class="h-px w-full bg-slate-100 mb-4"></div>

            <!-- Core Activities List -->
            <div class="space-y-2">
              <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-['Poppins']">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-2 text-xs text-slate-600 font-['Roboto']">
                <li
                  v-for="(act, aIdx) in (lang === 'ID' ? stage.activitiesID : stage.activitiesEN)"
                  :key="aIdx"
                  class="flex items-start gap-2"
                >
                  <span class="text-violet-500 font-bold text-xs select-none">•</span>
                  <span class="leading-tight">{{ act }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Accent Line -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end">
            <span class="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-violet-500 transition-colors"></span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLanguage } from "@/composables/useLanguage";

const { lang } = useLanguage();

const stages = [
  {
    id: "explore",
    title: "EXPLORE",
    descEN: "Deconstructing project scope, understanding goals, and researching domain context.",
    descID: "Membedah cakupan proyek, memahami tujuan utama, dan melakukan riset konteks domain.",
    activitiesEN: [
      "Client Requirement Analysis",
      "Market & User Research",
      "Concept Exploration",
      "Technical Feasibility Check"
    ],
    activitiesID: [
      "Analisis Kebutuhan Klien",
      "Riset Pengguna & Pasar",
      "Eksplorasi Konsep",
      "Cek Kelayakan Teknis"
    ]
  },
  {
    id: "visualize",
    title: "VISUALIZE",
    descEN: "Translating abstract ideas into high-fidelity visual layouts, typography, and moodboards.",
    descID: "Menerjemahkan ide abstrak ke dalam tata letak visual, tipografi, dan moodboard berkualitas tinggi.",
    activitiesEN: [
      "Moodboard & Aesthetic Direction",
      "Wireframing & Layout Grids",
      "UI Component Design (Figma)",
      "Design System Foundations"
    ],
    activitiesID: [
      "Arah Estetika & Moodboard",
      "Wireframe & Grid Layout",
      "Desain Komponen UI (Figma)",
      "Fondasi Sistem Desain"
    ]
  },
  {
    id: "structure",
    title: "STRUCTURE",
    descEN: "Mapping user journeys, information architecture, and structured data relationships.",
    descID: "Pemetaan perjalanan pengguna, arsitektur informasi, dan relasi data terstruktur.",
    activitiesEN: [
      "Information Architecture",
      "User Journey & Navigation",
      "Data Flow Diagrams",
      "Feature Specification"
    ],
    activitiesID: [
      "Arsitektur Informasi",
      "Alur Navigasi Pengguna",
      "Diagram Alur Data",
      "Spesifikasi Fitur"
    ]
  },
  {
    id: "build",
    title: "BUILD",
    descEN: "Writing clean, component-driven code across Vue 3, Tailwind, Unity, or backend APIs.",
    descID: "Menulis kode bersih berbasis komponen di Vue 3, Tailwind, Unity, maupun integrasi API.",
    activitiesEN: [
      "Vue 3 / Component Setup",
      "Interactive Prototyping",
      "Unity Engine Development",
      "API & Database Integration"
    ],
    activitiesID: [
      "Setup Komponen Vue 3",
      "Prototipe Interaktif",
      "Pengembangan Unity Engine",
      "Integrasi API & Database"
    ]
  },
  {
    id: "refine",
    title: "REFINE",
    descEN: "Rigorous testing, micro-animation tuning, performance audits, and final delivery.",
    descID: "Pengujian menyeluruh, penyetelan animasi mikro, audit performa, dan finalisasi produk.",
    activitiesEN: [
      "Cross-Device Testing",
      "Bug Fixing & Code Polish",
      "Asset & Bundle Optimization",
      "Final Quality Inspection"
    ],
    activitiesID: [
      "Pengujian Lintas Perangkat",
      "Perbaikan Bug & Polesan Kode",
      "Optimasi Aset & Bundle",
      "Inspeksi Kualitas Akhir"
    ]
  }
];
</script>

<style scoped>
</style>
