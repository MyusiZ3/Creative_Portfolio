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
          class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-[#0f172a] leading-tight mb-5"
        >
          <template v-if="lang === 'ID'"> Alur Kerja &amp;<br />Proses Pengembangan </template>
          <template v-else> Engineering &amp;<br />Design Workflow </template>
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
          class="text-[#334155] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed max-w-2xl"
        >
          {{
            lang === 'ID'
              ? 'Alur kerja terstruktur yang menggabungkan analisis kebutuhan sistem, pembuatan prototipe interaktif di Figma, pengembangan kode modular, hingga pengujian kualitas terukur sebelum rilis produksi.'
              : 'A structured workflow combining requirement analysis, interactive Figma prototyping, modular full-stack development, and systematic quality assurance before production release.'
          }}
        </p>
      </div>

      <!-- 4-Stage Editorial Architectural Process Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 relative z-10">
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
          class="group relative bg-white border border-slate-200/90 hover:border-violet-500/40 border-t-2 border-t-[#0f172a] hover:border-t-violet-600 p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
        >
          <!-- Top Content -->
          <div>
            <!-- Index & Domain Tag (High Contrast, Non-Redundant) -->
            <div class="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-200/80">
              <span
                class="text-2xl lg:text-3xl font-bold font-mono text-[#0f172a] group-hover:text-violet-600 transition-colors"
              >
                0{{ idx + 1 }}
              </span>
              <span
                class="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#475569] bg-slate-100 group-hover:bg-violet-50 group-hover:text-violet-700 px-2.5 py-1 rounded-xs transition-colors"
              >
                {{ lang === 'ID' ? stage.domainID : stage.domainEN }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg lg:text-xl font-bold font-['Poppins'] text-[#0f172a] mb-3 leading-snug">
              {{ lang === 'ID' ? stage.titleID : stage.titleEN }}
            </h3>

            <!-- Description -->
            <p class="text-[13.5px] text-[#334155] font-['Roboto'] leading-relaxed mb-6">
              {{ lang === 'ID' ? stage.descID : stage.descEN }}
            </p>
          </div>

          <!-- Bottom: Key Deliverables -->
          <div class="pt-5 border-t border-slate-200/80">
            <h4 class="text-[11px] font-bold font-mono uppercase tracking-wider text-[#475569] mb-3">
              {{ lang === 'ID' ? 'Fokus & Hasil Utama' : 'Deliverables & Focus' }}
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(item, iIdx) in lang === 'ID' ? stage.outputsID : stage.outputsEN"
                :key="iIdx"
                class="text-[13px] text-[#1e293b] font-['Roboto'] flex items-start gap-2"
              >
                <span class="text-violet-600 select-none font-bold mt-0.5">•</span>
                <span class="leading-snug">{{ item }}</span>
              </li>
            </ul>
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
    domainEN: 'Architecture & Scope',
    domainID: 'Arsitektur & Cakupan',
    titleEN: 'Discovery & System Design',
    titleID: 'Analisis & Perancangan Sistem',
    descEN:
      'Defining functional requirements, mapping user flows, and structuring relational or NoSQL database schemas (PostgreSQL, Firestore) before writing code.',
    descID:
      'Merumuskan spesifikasi kebutuhan fungsional, memetakan alur interaksi pengguna, serta merancang struktur skema basis data (PostgreSQL, Firestore) sebelum masuk ke tahap produksi.',
    outputsEN: [
      'System & Requirement Specification',
      'User Flow & Architecture Diagram',
      'Database Schema & Sprint Backlog',
    ],
    outputsID: [
      'Spesifikasi Kebutuhan & Ruang Lingkup',
      'Pemetaan Alur & Arsitektur Sistem',
      'Skema Basis Data & Rencana Sprint',
    ],
  },
  {
    id: 'design-prototyping',
    domainEN: 'UI/UX & Assets',
    domainID: 'UI/UX & Aset Visual',
    titleEN: 'Design & Interactive Prototyping',
    titleID: 'Desain & Prototipe Interaktif',
    descEN:
      'Translating system flows into responsive layouts, reusable component tokens, custom 2D/3D visual assets, and interactive high-fidelity Figma prototypes.',
    descID:
      'Menerjemahkan alur sistem ke tata letak responsif, komponen desain yang konsisten, aset visual 2D/3D kustom, serta prototipe interaktif high-fidelity di Figma.',
    outputsEN: [
      'Wireframes & Design System Tokens',
      'High-Fidelity Figma Prototypes',
      'Production-Ready 2D/3D & UI Assets',
    ],
    outputsID: [
      'Wireframe & Sistem Desain Komponen',
      'Prototipe Interaktif High-Fidelity',
      'Aset Visual 2D/3D & Antarmuka Siap Pakai',
    ],
  },
  {
    id: 'agile-development',
    domainEN: 'Full-Stack & 3D/AR',
    domainID: 'Pengembangan Sistem',
    titleEN: 'Modular Engineering & Integration',
    titleID: 'Implementasi & Integrasi Modular',
    descEN:
      'Developing maintainable applications across Vue.js, Vite, Flutter, and Unity (C#), integrated with cloud backends (Supabase, Firebase) or IoT hardware.',
    descID:
      'Membangun aplikasi secara modular menggunakan Vue.js, Vite, Flutter, dan Unity (C#), lengkap dengan integrasi layanan backend cloud (Supabase, Firebase) maupun sensor IoT.',
    outputsEN: [
      'Web, Mobile & 3D/AR Application Code',
      'Cloud Backend, Auth & RLS Integration',
      'Iterative Milestone Builds & Reviews',
    ],
    outputsID: [
      'Kode Aplikasi Web, Mobile & 3D/AR',
      'Integrasi Cloud Backend, Auth & RLS',
      'Evaluasi Build Bertahap per Milestone',
    ],
  },
  {
    id: 'testing-delivery',
    domainEN: 'QA & Deployment',
    domainID: 'Pengujian & Rilis',
    titleEN: 'Validation & Production Release',
    titleID: 'Pengujian Kualitas & Rilis',
    descEN:
      'Validating functional reliability through scenario-based Black-Box testing, measuring user experience via System Usability Scale (SUS) evaluations, and optimizing builds for release.',
    descID:
      'Memvalidasi keandalan fungsi melalui pengujian Black-Box berbasis skenario, mengukur kenyamanan pengguna dengan evaluasi System Usability Scale (SUS), serta mengoptimasi performa sebelum rilis.',
    outputsEN: [
      'Scenario-Based Black-Box Testing',
      'Usability Evaluation (SUS) & Profiling',
      'Cross-Device Optimization & Release',
    ],
    outputsID: [
      'Pengujian Fungsional Black-Box',
      'Evaluasi Usability (SUS) & Optimasi',
      'Deployment & Rilis Siap Produksi',
    ],
  },
]
</script>

<style scoped></style>
