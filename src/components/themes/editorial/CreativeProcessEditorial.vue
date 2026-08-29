<template>
  <section
    id="process"
    class="bg-[#F8FAFC] pt-16 pb-36 lg:pt-24 lg:pb-48 px-6 lg:px-12 xl:px-32 relative overflow-hidden -mb-1"
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
      <div class="max-w-3xl mb-16 lg:mb-24 text-left">
        <span
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-xs lg:text-sm font-bold tracking-widest text-[#6366f1] font-mono uppercase block mb-3"
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

      <!-- Professional Workflow Container -->
      <div class="relative w-full">
        <!-- Desktop Connecting Dotted Line -->
        <div class="hidden lg:block absolute top-[148px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-300/60 z-0"></div>

        <!-- Stages Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
          
          <!-- STAGE 1: EXPLORE -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="flex flex-col bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:border-sky-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <!-- Badge & Stage Step -->
            <div class="flex justify-between items-center mb-6">
              <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-sky-50 text-sky-600 border border-sky-100 shadow-3xs font-mono">
                {{ lang === 'ID' ? 'Brief & Riset' : 'Brief & Research' }}
              </span>
              <span class="text-xs font-mono font-bold text-sky-500">01 / 05</span>
            </div>

            <!-- Big title -->
            <h3 class="text-xl font-bold text-slate-800 font-['Poppins'] tracking-tight group-hover:text-sky-600 transition-colors">
              EXPLORE
            </h3>
            
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mt-2 min-h-[48px]">
              {{ lang === 'ID' ? 'Memahami ide, konteks, dan berbagai kemungkinan solusi.' : 'Understanding the idea, context, and possibilities.' }}
            </p>

            <div class="h-px bg-slate-100 my-4"></div>

            <!-- Activities -->
            <div class="space-y-2 flex-grow">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-[#334155] font-['Roboto']">
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-sky-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Memahami Brief Klien' : 'Understanding Client Brief' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-sky-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Eksplorasi Kemungkinan' : 'Idea Exploration' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-sky-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Sesi Brainstorming' : 'Brainstorming Sessions' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-sky-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Analisis Solusi' : 'Analyzing Solutions' }}</span>
                </li>
              </ul>
            </div>

            <!-- Visualizer -->
            <div class="mt-6 p-3 bg-slate-50 rounded-xl border border-slate-100/80">
              <div class="space-y-2">
                <div>
                  <div class="flex justify-between text-[9px] font-mono text-slate-400 mb-0.5">
                    <span>{{ lang === 'ID' ? 'Kesesuaian Ide' : 'Concept Viability' }}</span>
                    <span class="font-bold text-sky-600">95%</span>
                  </div>
                  <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-sky-500 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-[9px] font-mono text-slate-400 mb-0.5">
                    <span>{{ lang === 'ID' ? 'Riset Pasar' : 'Market Fit' }}</span>
                    <span class="font-bold text-sky-600">85%</span>
                  </div>
                  <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-sky-400 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- STAGE 2: VISUALIZE -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="flex flex-col bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:border-amber-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <!-- Badge & Stage Step -->
            <div class="flex justify-between items-center mb-6">
              <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-100 shadow-3xs font-mono">
                {{ lang === 'ID' ? 'UI & Desain Grafis' : 'UI & Graphic Design' }}
              </span>
              <span class="text-xs font-mono font-bold text-amber-500">02 / 05</span>
            </div>

            <!-- Big title -->
            <h3 class="text-xl font-bold text-slate-800 font-['Poppins'] tracking-tight group-hover:text-amber-600 transition-colors">
              VISUALIZE
            </h3>
            
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mt-2 min-h-[48px]">
              {{ lang === 'ID' ? 'Menerjemahkan ide ke bentuk visual dan estetika awal.' : 'Giving abstract ideas an initial visual and aesthetic form.' }}
            </p>

            <div class="h-px bg-slate-100 my-4"></div>

            <!-- Activities -->
            <div class="space-y-2 flex-grow">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-[#334155] font-['Roboto']">
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-amber-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Mood & Arah Visual' : 'Mood & Visual Direction' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-amber-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Membuat Sketsa' : 'Sketching Layouts' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-amber-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Konsep UI' : 'UI Concepts' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-amber-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Tata Letak & Grid' : 'Layout & Grids' }}</span>
                </li>
              </ul>
            </div>

            <!-- Visualizer -->
            <div class="mt-6">
              <span class="text-[9px] font-mono text-slate-400 block mb-1">{{ lang === 'ID' ? 'Indeks Estetika' : 'Consistency Index' }}</span>
              <svg class="w-full h-10 bg-slate-50 rounded-xl p-1.5 border border-slate-100" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vis-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,25 Q15,5 35,18 T75,8 T100,12" fill="none" stroke="#f59e0b" stroke-width="1.5" />
                <path d="M0,25 Q15,5 35,18 T75,8 T100,12 L100,30 L0,30 Z" fill="url(#vis-grad)" />
              </svg>
            </div>
          </div>

          <!-- STAGE 3: STRUCTURE -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="flex flex-col bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <!-- Badge & Stage Step -->
            <div class="flex justify-between items-center mb-6">
              <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-violet-50 text-violet-600 border border-violet-100 shadow-3xs font-mono">
                {{ lang === 'ID' ? 'Arsitektur & Alur' : 'IA & App Flow' }}
              </span>
              <span class="text-xs font-mono font-bold text-violet-500">03 / 05</span>
            </div>

            <!-- Big title -->
            <h3 class="text-xl font-bold text-slate-800 font-['Poppins'] tracking-tight group-hover:text-violet-600 transition-colors">
              STRUCTURE
            </h3>
            
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mt-2 min-h-[48px]">
              {{ lang === 'ID' ? 'Mengubah konsep menjadi alur aplikasi dan sistem yang terhubung.' : 'Turning concepts into connected systems and flows.' }}
            </p>

            <div class="h-px bg-slate-100 my-4"></div>

            <!-- Activities -->
            <div class="space-y-2 flex-grow">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-[#334155] font-['Roboto']">
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-violet-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Arsitektur Informasi' : 'Information Architecture' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-violet-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Alur Pengguna & App' : 'User / Application Flow' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-violet-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Diagram Alur' : 'Flowcharts & Systems' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-violet-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Perencanaan Fitur' : 'Feature Planning' }}</span>
                </li>
              </ul>
            </div>

            <!-- Visualizer -->
            <div class="mt-6 p-2 bg-slate-50 rounded-xl border border-slate-100/80 flex items-center justify-center h-10">
              <!-- Node visual representation -->
              <div class="flex items-center gap-3">
                <div class="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse shadow-xs"></div>
                <div class="h-0.5 w-6 bg-slate-300"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-xs"></div>
                <div class="h-0.5 w-6 bg-slate-300"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-xs"></div>
              </div>
            </div>
          </div>

          <!-- STAGE 4: BUILD -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
            class="flex flex-col bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:border-emerald-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <!-- Badge & Stage Step -->
            <div class="flex justify-between items-center mb-6">
              <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-3xs font-mono">
                {{ lang === 'ID' ? 'Koding & Dev' : 'Coding & Dev' }}
              </span>
              <span class="text-xs font-mono font-bold text-emerald-500">04 / 05</span>
            </div>

            <!-- Big title -->
            <h3 class="text-xl font-bold text-slate-800 font-['Poppins'] tracking-tight group-hover:text-emerald-600 transition-colors">
              BUILD
            </h3>
            
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mt-2 min-h-[48px]">
              {{ lang === 'ID' ? 'Merealisasikan ide menjadi produk fungsional interaktif.' : 'Bringing ideas into a functional experience.' }}
            </p>

            <div class="h-px bg-slate-100 my-4"></div>

            <!-- Activities -->
            <div class="space-y-2 flex-grow">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-[#334155] font-['Roboto']">
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-emerald-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Pembuatan Prototipe' : 'Prototyping Solutions' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-emerald-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Pengembangan Web' : 'Web Development (Vue)' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-emerald-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Unity & Game Engine' : 'Unity Development' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-emerald-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Integrasi Database' : 'Database/API integration' }}</span>
                </li>
              </ul>
            </div>

            <!-- Visualizer -->
            <div class="mt-6 p-2 bg-slate-900 text-emerald-400 font-mono text-[9px] rounded-xl border border-slate-800 shadow-2xs">
              <div class="flex justify-between">
                <span>GET /db/supa</span>
                <span class="text-emerald-500">200 OK</span>
              </div>
              <div class="flex justify-between text-slate-500 text-[8px] mt-0.5">
                <span>Latency: 32ms</span>
                <span>Supabase API</span>
              </div>
            </div>
          </div>

          <!-- STAGE 5: REFINE -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
            class="flex flex-col bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-xs hover:border-rose-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <!-- Badge & Stage Step -->
            <div class="flex justify-between items-center mb-6">
              <span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-100 shadow-3xs font-mono">
                {{ lang === 'ID' ? 'Optimasi & Poles' : 'Optimize & Polish' }}
              </span>
              <span class="text-xs font-mono font-bold text-rose-500">05 / 05</span>
            </div>

            <!-- Big title -->
            <h3 class="text-xl font-bold text-slate-800 font-['Poppins'] tracking-tight group-hover:text-rose-600 transition-colors">
              REFINE
            </h3>
            
            <p class="text-xs text-slate-500 font-['Roboto'] leading-relaxed mt-2 min-h-[48px]">
              {{ lang === 'ID' ? 'Menguji, meningkatkan, dan memoles kualitas akhir produk.' : 'Testing, improving, and polishing the experience.' }}
            </p>

            <div class="h-px bg-slate-100 my-4"></div>

            <!-- Activities -->
            <div class="space-y-2 flex-grow">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {{ lang === 'ID' ? 'Fokus Utama:' : 'Core Activities:' }}
              </span>
              <ul class="space-y-1.5 text-xs text-[#334155] font-['Roboto']">
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-rose-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Pengujian Black Box' : 'Black Box Testing' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-rose-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Perbaikan Bug' : 'Bug Fixing & Squashing' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-rose-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Optimasi Performa' : 'Performance Tuning' }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <i class="bi bi-check-circle-fill text-rose-500 text-[10px]"></i>
                  <span>{{ lang === 'ID' ? 'Polesan Visual & Detail' : 'Visual Polish & Details' }}</span>
                </li>
              </ul>
            </div>

            <!-- Visualizer -->
            <div class="mt-6">
              <div class="flex justify-between items-center text-[9px] font-mono text-slate-400 mb-1">
                <span>Bundle Reduction</span>
                <span class="font-bold text-rose-600">-64% KB</span>
              </div>
              <svg class="w-full h-10 bg-slate-50 rounded-xl p-1.5 border border-slate-100" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="refine-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,5 L30,8 L60,20 L100,28" fill="none" stroke="#f43f5e" stroke-width="1.5" />
                <path d="M0,5 L30,8 L60,20 L100,28 L100,30 L0,30 Z" fill="url(#refine-grad)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from "@/composables/useLanguage";

const { lang } = useLanguage();
</script>

<style scoped>
/* Webkit transitions and styles */
</style>
