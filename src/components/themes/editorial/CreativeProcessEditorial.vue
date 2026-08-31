<template>
  <section
    id="process"
    class="bg-[#F8FAFC] pt-16 pb-28 lg:pt-24 lg:pb-36 px-6 lg:px-12 xl:px-32 relative overflow-hidden -mb-1"
  >
    <!-- Top Right Accent Shape -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0 opacity-40"
    />
    <!-- Bottom Left Accent Shape -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute -bottom-1 left-0 w-32 md:w-52 lg:w-72 xl:w-200 pointer-events-none transform rotate-180 z-0 opacity-40"
    />

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 lg:mb-20 text-left">
        <span
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-xs lg:text-sm font-bold tracking-widest text-violet-600 font-mono uppercase block mb-3"
        >
          {{ lang === "ID" ? "PROSES KREATIF & TEKNIS" : "CREATIVE & TECHNICAL PROCESS" }}
        </span>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
          class="text-3xl lg:text-[44px] font-extrabold font-['Poppins'] text-[#1e293b] leading-tight mb-5"
        >
          {{
            lang === "ID"
              ? "Bagaimana Saya Mengubah Ide Menjadi Pengalaman Nyata"
              : "How I Turn Ideas Into Experiences"
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
              ? "Alur kerja terstruktur dari eksplorasi awal, perancangan visual, analisis struktur sistem, implementasi kode hingga optimasi akhir untuk menciptakan produk digital berkualitas tinggi."
              : "A structured, production-grade pipeline starting from initial exploration, visual design, structural system planning, interactive coding, to final performance optimization."
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
            <!-- Top Index & Category Header -->
            <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <span class="text-2xl font-mono font-bold text-violet-600">
                0{{ idx + 1 }}/
              </span>
              <span class="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                {{ lang === 'ID' ? stage.categoryID : stage.categoryEN }}
              </span>
            </div>

            <!-- Stage Title -->
            <h3 class="text-xl font-bold font-['Poppins'] text-slate-800 tracking-tight mb-2 group-hover:text-violet-600 transition-colors">
              {{ stage.title }}
            </h3>

            <!-- Stage Description -->
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mb-5 min-h-[40px]">
              {{ lang === 'ID' ? stage.descID : stage.descEN }}
            </p>

            <div class="h-px w-full bg-slate-100 mb-4"></div>

            <!-- Core Activities List (Clean Minimalist Bullets) -->
            <div class="space-y-2">
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-2 text-xs text-slate-600 font-['Roboto']">
                <li
                  v-for="(act, aIdx) in (lang === 'ID' ? stage.activitiesID : stage.activitiesEN)"
                  :key="aIdx"
                  class="flex items-start gap-2"
                >
                  <span class="text-violet-500 font-mono text-[10px] select-none mt-0.5">—</span>
                  <span class="leading-tight">{{ act }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Footer Accent Line -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[9px] font-mono font-bold text-slate-400 tracking-wider">PHASE 0{{ idx + 1 }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-violet-500 transition-colors"></span>
          </div>
        </div>
      </div>

      <!-- Bottom Editorial Summary Bar -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
        class="mt-12 p-5 bg-white border border-slate-200/90 rounded-xl shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-600"
      >
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-slate-800 font-bold uppercase tracking-wider">
            {{ lang === 'ID' ? 'STATUS ALUR KERJA: SIAP PRODUKSI' : 'PIPELINE STATUS: PRODUCTION READY' }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-6 text-[11px] text-slate-500 uppercase tracking-widest">
          <div>
            <span class="text-slate-700 font-bold">// METHOD:</span> HUMAN-CENTERED DESIGN
          </div>
          <div>
            <span class="text-slate-700 font-bold">// QA:</span> PIXEL-PERFECT & OPTIMIZED
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
    categoryEN: "BRIEF & RESEARCH",
    categoryID: "BRIEF & RISET",
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
    categoryEN: "UI & VISUAL DESIGN",
    categoryID: "UI & DESAIN VISUAL",
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
    categoryEN: "IA & SYSTEM FLOW",
    categoryID: "ARSITEKTUR SISTEM",
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
    categoryEN: "CODE & DEV",
    categoryID: "KODING & DEV",
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
    categoryEN: "QA & OPTIMIZATION",
    categoryID: "PENGUJIAN & POLIS",
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
