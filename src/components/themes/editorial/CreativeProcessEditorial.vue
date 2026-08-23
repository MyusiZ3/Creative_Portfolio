<template>
  <section
    id="process"
    class="bg-[#F8FAFC] pt-16 pb-36 lg:pt-24 lg:pb-48 px-6 lg:px-12 xl:px-32 relative overflow-hidden -mb-1"
  >
    <!-- Top Right Accent Shape (accent_3.png) -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0 opacity-40"
    />
    <!-- Bottom Left Accent Shape (accent_3.png) -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute -bottom-1 left-0 w-32 md:w-52 lg:w-72 xl:w-200 pointer-events-none transform rotate-180 z-0 opacity-40"
    />

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-20 text-left">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 100 },
          }"
          class="text-3xl lg:text-[44px] font-extrabold font-['Poppins'] text-[#1e293b] leading-tight mb-5"
        >
          {{
            lang === "ID"
              ? "Dari Ide Abstrak hingga Realitas Interaktif"
              : "From Concept Sketches to Interactive Realities"
          }}
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 200 },
          }"
          class="text-[#475569] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed max-w-2xl"
        >
          {{
            lang === "ID"
              ? "Alur kerja terstruktur yang memadukan estetika desain UI/UX, teknologi interaktif AR/Game, serta rekayasa perangkat lunak full-stack yang andal."
              : "A structured workflow bridging UI/UX design craftsmanship, real-time AR/Game engines, and production-grade full-stack engineering."
          }}
        </p>
      </div>

      <!-- Node Graph Layout Container -->
      <div class="w-full overflow-x-auto pb-6 scrollbar-thin">
        <div class="min-w-[1000px] lg:min-w-0 flex lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-0 items-stretch">
          
          <!-- LANE 1: DESIGN & SPEC -->
          <div class="flex-1 bg-slate-50/40 rounded-[24px] p-5 border border-slate-200/50 flex flex-col gap-6">
            <div class="flex items-center gap-2 px-2 py-1 mb-2">
              <i class="bi bi-bezier2 text-violet-500 text-sm"></i>
              <span class="text-[11px] font-extrabold tracking-wider font-['Poppins'] text-slate-500 uppercase">
                {{ lang === 'ID' ? '01. SPESIFIKASI & RISET' : '01. SPEC & RESEARCH' }}
              </span>
            </div>

            <!-- Card 1 -->
            <div 
              class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
              @mouseenter="hoveredLink = 'link1'"
              @mouseleave="hoveredLink = null"
            >
              <!-- Absolute top tag -->
              <span class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-sky-50 text-sky-600 border border-sky-100 shadow-2xs">
                {{ lang === 'ID' ? 'Riset' : 'Research' }}
              </span>
              <div class="flex justify-between items-start mt-1">
                <div>
                  <h4 class="font-bold text-slate-800 text-sm font-['Poppins']">
                    {{ lang === 'ID' ? 'Wireframe & Alur UX' : 'UX Wireframe & Flows' }}
                  </h4>
                  <p class="text-[10px] font-mono text-slate-400">ux.figma.layout_01</p>
                </div>
                <i class="bi bi-chevron-down text-slate-400 text-xs"></i>
              </div>

              <!-- Metadata Table -->
              <div class="space-y-1.5 text-[11px] font-mono text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <div class="flex justify-between">
                  <span class="text-slate-400">Status</span>
                  <span class="font-bold text-emerald-600">{{ lang === 'ID' ? 'Selesai' : 'Done' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Method</span>
                  <span class="text-slate-700">User Interviews</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Output</span>
                  <span class="text-slate-700">Journey Map</span>
                </div>
              </div>

              <!-- Mini Progress Bar Visual -->
              <div class="mt-4 p-2 bg-slate-50 rounded-lg border border-slate-100/80">
                <div class="space-y-2">
                  <div>
                    <div class="flex justify-between text-[9px] font-mono text-slate-400 mb-0.5">
                      <span>User Flow</span>
                      <span>85%</span>
                    </div>
                    <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-sky-500 rounded-full" style="width: 85%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-[9px] font-mono text-slate-400 mb-0.5">
                      <span>Persona Mapping</span>
                      <span>90%</span>
                    </div>
                    <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-sky-400 rounded-full" style="width: 90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div 
              class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
              @mouseenter="hoveredLink = 'link1'"
              @mouseleave="hoveredLink = null"
            >
              <span class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-100 shadow-2xs">
                UI Design
              </span>
              <div class="flex justify-between items-start mt-1">
                <div>
                  <h4 class="font-bold text-slate-800 text-sm font-['Poppins']">
                    {{ lang === 'ID' ? 'Spesifikasi Sistem Visual' : 'Visual System Specs' }}
                  </h4>
                  <p class="text-[10px] font-mono text-slate-400">ui.design_system.spec</p>
                </div>
                <i class="bi bi-chevron-up text-slate-400 text-xs"></i>
              </div>

              <div class="space-y-1.5 text-[11px] font-mono text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <div class="flex justify-between">
                  <span class="text-slate-400">Status</span>
                  <span class="font-bold text-emerald-600">{{ lang === 'ID' ? 'Selesai' : 'Done' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Typography</span>
                  <span class="text-slate-700">Poppins & Roboto</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Colors</span>
                  <span class="text-slate-700">Minimalist HSL</span>
                </div>
              </div>

              <!-- SVG Line Chart Visual -->
              <div class="mt-4">
                <span class="text-[9px] font-mono text-slate-400 block mb-1">Consistency Index</span>
                <svg class="w-full h-10 bg-slate-50 rounded-lg p-1 border border-slate-100" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
                      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,25 Q15,5 35,18 T75,8 T100,15" fill="none" stroke="#f59e0b" stroke-width="1.5" />
                  <path d="M0,25 Q15,5 35,18 T75,8 T100,15 L100,30 L0,30 Z" fill="url(#chart-grad)" />
                </svg>
              </div>
            </div>
          </div>

          <!-- CONNECTOR 1 -->
          <div class="w-16 flex items-center justify-center relative">
            <svg 
              class="absolute inset-0 w-full h-full transition-colors duration-300" 
              :class="hoveredLink === 'link1' ? 'text-violet-500' : 'text-slate-200'"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <!-- Branching merge connector from lane 1 (two outputs) to lane 2 (one input) -->
              <path d="M 0 25 C 50 25, 50 50, 100 50" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="M 0 75 C 50 75, 50 50, 100 50" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <div 
              class="absolute z-20 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs transition-colors duration-300 uppercase tracking-tighter"
              :class="hoveredLink === 'link1' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-white/90'"
            >
              Link 1
            </div>
          </div>

          <!-- LANE 2: INTERACTIVE DEV -->
          <div class="flex-1 bg-slate-50/40 rounded-[24px] p-5 border border-slate-200/50 flex flex-col justify-center gap-6">
            <div class="flex items-center gap-2 px-2 py-1 mb-2">
              <i class="bi bi-controller text-violet-500 text-sm"></i>
              <span class="text-[11px] font-extrabold tracking-wider font-['Poppins'] text-slate-500 uppercase">
                {{ lang === 'ID' ? '02. INTERAKSI & AR' : '02. INTERACTION & AR' }}
              </span>
            </div>

            <!-- Card 3 -->
            <div 
              class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
              @mouseenter="hoveredLink = 'link2'"
              @mouseleave="hoveredLink = null"
            >
              <span class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-violet-50 text-violet-600 border border-violet-100 shadow-2xs">
                Unity Engine
              </span>
              <div class="flex justify-between items-start mt-1">
                <div>
                  <h4 class="font-bold text-slate-800 text-sm font-['Poppins']">
                    {{ lang === 'ID' ? 'Prototipe AR & Game' : 'AR & Engine Prototype' }}
                  </h4>
                  <p class="text-[10px] font-mono text-slate-400">dev.unity.gameplay_v2</p>
                </div>
                <i class="bi bi-chevron-down text-slate-400 text-xs"></i>
              </div>

              <div class="space-y-1.5 text-[11px] font-mono text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <div class="flex justify-between">
                  <span class="text-slate-400">Status</span>
                  <span class="font-bold text-amber-600">{{ lang === 'ID' ? 'Aktif' : 'Active' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Language</span>
                  <span class="text-slate-700">C# Scripting</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">AR target</span>
                  <span class="text-slate-700">Vuforia Image Target</span>
                </div>
              </div>

              <!-- Framerate Curve Visual -->
              <div class="mt-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-[9px] font-mono text-slate-400">FPS Stability</span>
                  <span class="text-[9px] font-mono text-emerald-600 font-bold">60.0 FPS</span>
                </div>
                <svg class="w-full h-10 bg-slate-50 rounded-lg p-1 border border-slate-100" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="unity-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.2"/>
                      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,15 L20,15 L40,12 L60,18 L80,10 L100,10" fill="none" stroke="#8B5CF6" stroke-width="1.5" />
                  <path d="M0,15 L20,15 L40,12 L60,18 L80,10 L100,10 L100,30 L0,30 Z" fill="url(#unity-grad)" />
                </svg>
              </div>
            </div>
          </div>

          <!-- CONNECTOR 2 -->
          <div class="w-16 flex items-center justify-center relative">
            <svg 
              class="absolute inset-0 w-full h-full transition-colors duration-300" 
              :class="hoveredLink === 'link2' ? 'text-violet-500' : 'text-slate-200'"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <!-- Straight line connector -->
              <path d="M 0 50 L 100 50" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <div 
              class="absolute z-20 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs transition-colors duration-300 uppercase tracking-tighter"
              :class="hoveredLink === 'link2' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-white/90'"
            >
              Link 2
            </div>
          </div>

          <!-- LANE 3: FULLSTACK PIPELINE -->
          <div class="flex-1 bg-slate-50/40 rounded-[24px] p-5 border border-slate-200/50 flex flex-col justify-center gap-6">
            <div class="flex items-center gap-2 px-2 py-1 mb-2">
              <i class="bi bi-globe text-violet-500 text-sm"></i>
              <span class="text-[11px] font-extrabold tracking-wider font-['Poppins'] text-slate-500 uppercase">
                {{ lang === 'ID' ? '03. PIPELINE FULLSTACK' : '03. FULLSTACK PIPELINE' }}
              </span>
            </div>

            <!-- Card 4 -->
            <div 
              class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
              @mouseenter="hoveredLink = 'link4'"
              @mouseleave="hoveredLink = null"
            >
              <span class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs">
                Vue / Supabase
              </span>
              <div class="flex justify-between items-start mt-1">
                <div>
                  <h4 class="font-bold text-slate-800 text-sm font-['Poppins']">
                    {{ lang === 'ID' ? 'Aplikasi Vue 3 & CMS Web' : 'Vue 3 App & Web CMS' }}
                  </h4>
                  <p class="text-[10px] font-mono text-slate-400">web.application.core</p>
                </div>
                <i class="bi bi-chevron-down text-slate-400 text-xs"></i>
              </div>

              <div class="space-y-1.5 text-[11px] font-mono text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <div class="flex justify-between">
                  <span class="text-slate-400">Status</span>
                  <span class="font-bold text-emerald-600">{{ lang === 'ID' ? 'Sukses' : 'Success' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Bundler</span>
                  <span class="text-slate-700">Vite + Vanilla CSS</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Database</span>
                  <span class="text-slate-700">Supabase API</span>
                </div>
              </div>

              <!-- Database Response Metrics (Progress bars) -->
              <div class="mt-4 p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between gap-2 text-[9px] font-mono text-slate-500">
                    <span class="w-12 truncate">Query Time</span>
                    <div class="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-500" style="width: 25%"></div>
                    </div>
                    <span>42ms</span>
                  </div>
                  <div class="flex items-center justify-between gap-2 text-[9px] font-mono text-slate-500">
                    <span class="w-12 truncate">Auth Load</span>
                    <div class="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-400" style="width: 15%"></div>
                    </div>
                    <span>18ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CONNECTOR 3 -->
          <div class="w-16 flex items-center justify-center relative">
            <svg 
              class="absolute inset-0 w-full h-full transition-colors duration-300" 
              :class="hoveredLink === 'link4' ? 'text-violet-500' : 'text-slate-200'"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path d="M 0 50 L 100 50" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            <div 
              class="absolute z-20 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs transition-colors duration-300 uppercase tracking-tighter"
              :class="hoveredLink === 'link4' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-white/90'"
            >
              Link 4
            </div>
          </div>

          <!-- LANE 4: QUALITY & COMPLIANCE -->
          <div class="flex-1 bg-slate-50/40 rounded-[24px] p-5 border border-slate-200/50 flex flex-col justify-center gap-6">
            <div class="flex items-center gap-2 px-2 py-1 mb-2">
              <i class="bi bi-patch-check text-violet-500 text-sm"></i>
              <span class="text-[11px] font-extrabold tracking-wider font-['Poppins'] text-slate-500 uppercase">
                {{ lang === 'ID' ? '04. RILIS & KUALITAS' : '04. RELEASE & QUALITY' }}
              </span>
            </div>

            <!-- Card 5 -->
            <div 
              class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-violet-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group cursor-pointer"
              @mouseenter="hoveredLink = 'link4'"
              @mouseleave="hoveredLink = null"
            >
              <span class="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-100 shadow-2xs">
                Launch
              </span>
              <div class="flex justify-between items-start mt-1">
                <div>
                  <h4 class="font-bold text-slate-800 text-sm font-['Poppins']">
                    {{ lang === 'ID' ? 'Optimasi & Lisensi HKI' : 'Optimization & HKI License' }}
                  </h4>
                  <p class="text-[10px] font-mono text-slate-400">build.production.hki</p>
                </div>
                <i class="bi bi-chevron-down text-slate-400 text-xs"></i>
              </div>

              <div class="space-y-1.5 text-[11px] font-mono text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <div class="flex justify-between">
                  <span class="text-slate-400">Status</span>
                  <span class="font-bold text-emerald-600">{{ lang === 'ID' ? 'Terverifikasi' : 'Verified' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Optimization</span>
                  <span class="text-slate-700">Vite Code Splitting</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">License</span>
                  <span class="text-slate-700">HKI Registered</span>
                </div>
              </div>

              <!-- HKI Optimization Curve -->
              <div class="mt-4">
                <span class="text-[9px] font-mono text-slate-400 block mb-1">Bundle Size Reduction</span>
                <svg class="w-full h-10 bg-slate-50 rounded-lg p-1 border border-slate-100" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="rose-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.2"/>
                      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,5 L30,10 L60,18 L100,25" fill="none" stroke="#f43f5e" stroke-width="1.5" />
                  <path d="M0,5 L30,10 L60,18 L100,25 L100,30 L0,30 Z" fill="url(#rose-grad)" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { lang } = useLanguage();
const hoveredLink = ref(null);
</script>

<style scoped>
/* Custom tiny scrollbar for node layout */
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 9999px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
