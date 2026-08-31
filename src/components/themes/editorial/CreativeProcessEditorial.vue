<template>
  <section
    id="process"
    class="bg-[#171717] py-20 lg:py-32 px-6 lg:px-16 xl:px-32 relative overflow-hidden text-white border-t border-zinc-800/80"
  >
    <!-- Background subtle texture lines -->
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"></div>

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="max-w-4xl mb-16 lg:mb-20 text-left">
        <div
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="flex items-center gap-3 mb-4"
        >
          <span class="w-8 h-px bg-violet-500"></span>
          <span class="text-xs font-mono font-bold tracking-[0.25em] text-violet-400 uppercase">
            {{ lang === "ID" ? "// METODOLOGI KERJA" : "// WORKFLOW ARCHITECTURE" }}
          </span>
        </div>

        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins'] text-white leading-tight mb-6"
        >
          {{
            lang === "ID"
              ? "Bagaimana Saya Mengubah Ide Menjadi Pengalaman Digital"
              : "How Ideas Become Digital Experiences"
          }}
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
          class="text-zinc-400 font-['Roboto'] text-sm sm:text-base leading-relaxed max-w-3xl"
        >
          {{
            lang === "ID"
              ? "Alur kerja terstruktur yang menggabungkan riset mendalam, perancangan antarmuka visual, arsitektur sistem, dan pengembangan kode performa tinggi."
              : "A disciplined, human-centered pipeline bridging deep research, visual interface design, system architecture, and high-performance interactive development."
          }}
        </p>
      </div>

      <!-- 5-Stage Editorial Pipeline Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 relative">
        <div
          v-for="(stage, idx) in stages"
          :key="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 * (idx + 1) } }"
          class="bg-[#1c1c1c] border border-zinc-800 p-6 rounded-lg flex flex-col justify-between hover:border-violet-500/50 hover:bg-[#222222] transition-all duration-300 group relative"
        >
          <div>
            <!-- Top Index & Category Header -->
            <div class="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
              <span class="text-2xl font-mono font-light text-zinc-500 group-hover:text-violet-400 transition-colors">
                0{{ idx + 1 }}/
              </span>
              <span class="text-[10px] font-mono font-medium tracking-wider text-zinc-400 uppercase">
                {{ lang === 'ID' ? stage.categoryID : stage.categoryEN }}
              </span>
            </div>

            <!-- Stage Title -->
            <h3 class="text-xl font-bold font-['Poppins'] text-white tracking-wide mb-2 group-hover:text-violet-300 transition-colors">
              {{ stage.title }}
            </h3>

            <!-- Stage Description -->
            <p class="text-xs text-zinc-400 font-['Roboto'] leading-relaxed mb-6 min-h-[40px]">
              {{ lang === 'ID' ? stage.descID : stage.descEN }}
            </p>

            <div class="h-px w-full bg-zinc-800 mb-4"></div>

            <!-- Core Activities List -->
            <div class="space-y-2">
              <span class="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-2 text-xs text-zinc-300 font-['Roboto']">
                <li
                  v-for="(act, aIdx) in (lang === 'ID' ? stage.activitiesID : stage.activitiesEN)"
                  :key="aIdx"
                  class="flex items-start gap-2"
                >
                  <span class="text-violet-400 font-mono text-[10px] select-none mt-0.5">—</span>
                  <span class="leading-tight">{{ act }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Footer Accent Line -->
          <div class="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
            <span class="text-[9px] font-mono text-zinc-500 tracking-wider">PHASE 0{{ idx + 1 }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-violet-400 transition-colors"></span>
          </div>
        </div>
      </div>

      <!-- Bottom Editorial Manifesto / Specs Bar -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
        class="mt-12 p-6 bg-[#1a1a1a] border border-zinc-800 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-400"
      >
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-zinc-300 font-medium uppercase tracking-wider">
            {{ lang === 'ID' ? 'STATUS ALUR KERJA: SIAP PRODUKSI' : 'PIPELINE STATUS: PRODUCTION READY' }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-6 text-[11px] text-zinc-500 uppercase tracking-widest">
          <div>
            <span class="text-zinc-400 font-bold">// METHOD:</span> HUMAN-CENTERED DESIGN
          </div>
          <div>
            <span class="text-zinc-400 font-bold">// QA:</span> PIXEL-PERFECT & OPTIMIZED
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
