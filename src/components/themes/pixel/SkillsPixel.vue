<template>
  <section id="skills" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 relative z-10">
      
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <span class="text-xs font-bold text-[#00ff66] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#00ff66] shadow-[2px_2px_0px_#000] font-silkscreen inline-block">
            ✦ STAGE 03 // HERO SKILLSET & ARSENAL
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold uppercase mt-2 font-pixel leading-tight">
            SOME SOFTWARE <span class="text-[#00ff66]">THAT I USE</span>
          </h2>
          <p class="text-xs sm:text-sm text-[#8b949e] max-w-2xl mt-3 leading-relaxed">
            {{ t('skills_sub') }}
          </p>
        </div>

        <div class="text-xs text-[#8b949e] bg-[#161b22] px-3 py-2 border-2 border-black font-silkscreen shrink-0 shadow-[4px_4px_0px_#000]">
          EQUIPMENT LOADOUT: <span class="text-[#00ff66] font-bold">10/10 SLOTS MAXED</span>
        </div>
      </div>

      <!-- Hard & Soft Skills STATS HUD -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100, ease: 'easeOut' } }"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
      >
        <!-- Hard Skills Box -->
        <div class="bg-[#161b22] border-4 border-black p-5 shadow-[6px_6px_0px_#000000] relative group hover:border-[#00ff66] transition-colors">
          <div class="flex items-center justify-between border-b border-[#30363d] pb-2 mb-3">
            <div class="flex items-center gap-2 font-silkscreen text-[#00ff66] text-xs font-bold uppercase">
              <i class="bi bi-cpu-fill text-sm"></i>
              <span>[TECH ATTACK STATS // SKILLS]</span>
            </div>
            <span class="text-[9px] font-silkscreen text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 border border-[#00ff66]/30">SYS.BUFF: +99 ENGINE</span>
          </div>
          <div class="space-y-3 font-mono text-xs text-[#c9d1d9]">
            <div>
              <span class="text-[#00ff66] font-bold">► {{ t('skills_design_title') }}:</span>
              <p class="pl-3 mt-0.5 leading-relaxed">{{ t('skills_design_desc') }}</p>
            </div>
            <div>
              <span class="text-[#00ff66] font-bold">► {{ t('skills_tech_title') }}:</span>
              <p class="pl-3 mt-0.5 leading-relaxed">{{ t('skills_tech_desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Soft Skills Box / Process Box -->
        <div class="bg-[#161b22] border-4 border-black p-5 shadow-[6px_6px_0px_#000000] relative group hover:border-[#ff0055] transition-colors">
          <div class="flex items-center justify-between border-b border-[#30363d] pb-2 mb-3">
            <div class="flex items-center gap-2 font-silkscreen text-[#ff0055] text-xs font-bold uppercase">
              <i class="bi bi-controller text-sm"></i>
              <span>[PLAYSTYLE & STRATEGY // {{ t('skills_process_title') }}]</span>
            </div>
            <span class="text-[9px] font-silkscreen text-[#ff0055] bg-[#ff0055]/10 px-2 py-0.5 border border-[#ff0055]/30">PASSIVE: PARTY BUFF</span>
          </div>
          <div class="space-y-3 font-mono text-xs text-[#c9d1d9]">
            <div>
              <span class="text-[#ff0055] font-bold">► {{ t('skills_process_title') }}:</span>
              <p class="pl-3 mt-0.5 leading-relaxed">{{ t('skills_process_desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education & Language STATS HUD -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150, ease: 'easeOut' } }"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
      >
        <!-- Education Box -->
        <div class="bg-[#161b22] border-4 border-black p-5 shadow-[6px_6px_0px_#000000] relative group hover:border-[#ffd700] transition-colors flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-[#30363d] pb-2 mb-4">
              <div class="flex items-center gap-2 font-silkscreen text-[#ffd700] text-xs font-bold uppercase">
                <i class="bi bi-mortarboard-fill text-sm"></i>
                <span>[ACADEMIC GUILD // {{ t('education_title') }}]</span>
              </div>
              <span class="text-[9px] font-silkscreen text-[#ffd700] bg-[#ffd700]/10 px-2 py-0.5 border border-[#ffd700]/30">{{ isId ? "IPK: 3.83 / 4.00" : "GPA: 3.83 / 4.00" }}</span>
            </div>

            <div class="space-y-4 font-mono">
              <!-- Item 1: Telkom University -->
              <div class="border-l-2 border-[#ffd700] pl-3">
                <div class="flex flex-wrap items-center justify-between gap-1">
                  <h4 class="text-xs font-bold text-[#f0f6fc] font-silkscreen">TELKOM UNIVERSITY</h4>
                  <span class="text-[9px] text-[#8b949e] font-silkscreen">2022 - 2026</span>
                </div>
                <p class="text-xs text-[#c9d1d9] mt-1 leading-relaxed">
                  {{ t('edu_1_desc') }}
                </p>
                <div class="mt-1 text-[10px] text-[#ffd700] font-silkscreen flex items-center gap-1">
                  <i class="bi bi-star-fill text-[8px]"></i> [HONORS ROLL] {{ isId ? "IPK 3.83 / 4.00 (Cum Laude)" : "GPA 3.83 / 4.00 (Cum Laude)" }}
                </div>
              </div>

              <!-- Item 2: SMKN 1 Belitang III -->
              <div class="border-l-2 border-[#30363d] pl-3 group-hover:border-[#ffd700]/50 transition-colors">
                <div class="flex flex-wrap items-center justify-between gap-1">
                  <h4 class="text-xs font-bold text-[#f0f6fc] font-silkscreen">SMKN 1 BELITANG III</h4>
                  <span class="text-[9px] text-[#8b949e] font-silkscreen">2019 - 2022</span>
                </div>
                <p class="text-xs text-[#c9d1d9] mt-1">
                  {{ t('edu_2_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Language Box -->
        <div class="bg-[#161b22] border-4 border-black p-5 shadow-[6px_6px_0px_#000000] relative group hover:border-[#00f0ff] transition-colors flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-[#30363d] pb-2 mb-4">
              <div class="flex items-center gap-2 font-silkscreen text-[#00f0ff] text-xs font-bold uppercase">
                <i class="bi bi-translate text-sm"></i>
                <span>[COMMUNICATION BUFFS // {{ t('lang_title') }}]</span>
              </div>
              <span class="text-[9px] font-silkscreen text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 border border-[#00f0ff]/30">CEFR B1 READY</span>
            </div>

            <div class="space-y-4 font-mono">
              <!-- Item 1: Indonesian -->
              <div class="border-l-2 border-[#00f0ff] pl-3">
                <div class="flex flex-wrap items-center justify-between gap-1">
                  <h4 class="text-xs font-bold text-[#f0f6fc] font-silkscreen">{{ isId ? "BAHASA INDONESIA" : "INDONESIAN" }}</h4>
                  <span class="text-[9px] text-[#00ff66] font-silkscreen font-bold">[{{ isId ? "NATIVE / ASLI" : "NATIVE / MAX" }}]</span>
                </div>
                <p class="text-xs text-[#c9d1d9] mt-1">
                  {{ isId ? "Penutur Asli (Native Speaker)" : "Native Speaker" }}
                </p>
              </div>

              <!-- Item 2: English -->
              <div class="border-l-2 border-[#00f0ff] pl-3">
                <div class="flex flex-wrap items-center justify-between gap-1">
                  <h4 class="text-xs font-bold text-[#f0f6fc] font-silkscreen">{{ isId ? "BAHASA INGGRIS" : "ENGLISH" }}</h4>
                  <span class="text-[9px] text-[#00f0ff] font-silkscreen font-bold">[{{ isId ? "MENENGAH" : "INTERMEDIATE" }}]</span>
                </div>
                <p class="text-xs text-[#c9d1d9] mt-1">
                  {{ isId ? "Tingkat Menengah (CEFR B1)" : "Intermediate Level (CEFR B1)" }}
                </p>
                <div class="mt-1 text-[10px] text-[#00f0ff] font-silkscreen flex items-center gap-1">
                  <i class="bi bi-award-fill text-[9px]"></i> [OFFICIAL SCORE] EPRT: 483
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Software Equipment Inventory Grid (10 Items from MySkills.vue) -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200, ease: 'easeOut' } }"
        class="bg-[#161b22] border-4 border-black p-6 shadow-[8px_8px_0px_#000000] mb-12"
      >
        <!-- Rack Header -->
        <div class="flex flex-wrap items-center justify-between border-b-2 border-[#30363d] pb-3 mb-6 font-silkscreen gap-2">
          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-[#00f0ff]">
            <i class="bi bi-box-seam-fill"></i>
            <span>SOFTWARE EQUIPMENT RACK [GEAR TIER: S+]</span>
          </h3>
          <span class="text-[10px] text-[#00ff66] uppercase font-bold bg-[#00ff66]/10 px-2 py-1 border border-[#00ff66]/40">[STATUS: READY FOR BATTLE]</span>
        </div>

        <!-- 9 Software Icons Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <!-- Item 1: Unity -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 01</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity" class="w-9 h-9 brightness-0 invert" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">UNITY</div>
            <div class="text-[9px] text-[#00ff66] font-silkscreen mt-1">[LVL 95] GAME ENGINE</div>
          </div>

          <!-- Item 2: Firebase -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 02</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" class="w-9 h-9" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">FIREBASE</div>
            <div class="text-[9px] text-[#ffd700] font-silkscreen mt-1">[LVL 90] DB BACKEND</div>
          </div>

          <!-- Item 3: Supabase -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 03</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp" alt="Supabase" class="w-9 h-9 object-contain" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">SUPABASE</div>
            <div class="text-[9px] text-[#00ff66] font-silkscreen mt-1">[LVL 93] DB BACKEND</div>
          </div>

          <!-- Item 4: Antigravity IDE -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 04</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/webp/google-antigravity.webp" alt="Antigravity IDE" class="w-10 h-10 object-contain" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">ANTIGRAVITY IDE</div>
            <div class="text-[9px] text-[#00f0ff] font-silkscreen mt-1">[LVL 99] INTEL DEV</div>
          </div>

          <!-- Item 5: GitHub -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 05</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" class="w-9 h-9 brightness-0 invert" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">GITHUB</div>
            <div class="text-[9px] text-[#a78bfa] font-silkscreen mt-1">[LVL 92] REPO VAULT</div>
          </div>

          <!-- Item 6: Adobe Illustrator -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 06</span>
            <div class="w-14 h-14 bg-[#330000] text-[#FF9A00] rounded-lg border border-[#FF9A00]/40 flex items-center justify-center text-2xl font-bold font-mono mb-3 mt-2 group-hover:scale-110 transition-transform">
              Ai
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">ILLUSTRATOR</div>
            <div class="text-[9px] text-[#FF9A00] font-silkscreen mt-1">[LVL 90] VECTOR WEAPON</div>
          </div>

          <!-- Item 7: Adobe Photoshop -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 07</span>
            <div class="w-14 h-14 bg-[#001E36] text-[#31A8FF] rounded-lg border border-[#31A8FF]/40 flex items-center justify-center text-2xl font-bold font-mono mb-3 mt-2 group-hover:scale-110 transition-transform">
              Ps
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">PHOTOSHOP</div>
            <div class="text-[9px] text-[#31A8FF] font-silkscreen mt-1">[LVL 92] PIXEL GRAPHICS</div>
          </div>

          <!-- Item 8: Figma -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 08</span>
            <div class="w-14 h-14 bg-[#1D1D1D] rounded-lg border border-[#30363d] flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" class="w-9 h-9" />
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">FIGMA</div>
            <div class="text-[9px] text-[#ffd700] font-silkscreen mt-1">[LVL 96] PROTO WEAPON</div>
          </div>

          <!-- Item 9: Canva -->
          <div class="bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:-translate-y-1 transition-all group cursor-pointer flex flex-col items-center text-center relative">
            <span class="absolute top-1 right-2 text-[9px] font-silkscreen text-[#8b949e]">SLOT 09</span>
            <div class="w-14 h-14 bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] rounded-lg border border-white/20 flex items-center justify-center mb-3 mt-2 group-hover:scale-110 transition-transform">
              <span class="text-white font-bold italic text-sm font-mono">Canva</span>
            </div>
            <div class="text-xs font-bold text-[#f0f6fc] font-mono group-hover:text-[#00ff66] transition-colors">CANVA</div>
            <div class="text-[9px] text-[#00C4CC] font-silkscreen mt-1">[LVL 94] MEDIA LAYOUT</div>
          </div>
        </div>

        <!-- Software List Summary -->
        <p class="mt-6 pt-4 border-t border-[#30363d] text-center text-xs text-[#8b949e] font-silkscreen leading-relaxed">
          <span class="text-[#00f0ff] font-bold">[LOADED ARSENAL]</span> Unity ✦ Firebase ✦ Supabase ✦ Antigravity IDE ✦ GitHub ✦ Illustrator ✦ Photoshop ✦ Figma ✦ Canva ✦ READY FOR DEPLOYMENT
        </p>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
        class="bg-[#161b22] border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_#000000] mb-12"
      >
        <GithubCalendar />
      </div>

      <!-- Navigation Arrow to Projects -->
      <div
        @click="scrollToSection('projects')"
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 400, ease: 'easeOut' } }"
        class="flex flex-col items-center gap-2 cursor-pointer group pt-2 pb-4"
      >
        <span class="text-[10px] font-silkscreen text-[#8b949e] group-hover:text-[#00ff66] transition-colors uppercase flex items-center gap-1">
          <span class="text-[#00ff66]">► PRESS START ◄</span> NEXT STAGE: ARCADE PROJECTS
        </span>
        <i class="bi bi-caret-down-fill text-[#00ff66] text-2xl group-hover:translate-y-1 transition-transform"></i>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import GithubCalendar from "@/components/GithubCalendar.vue";

const { t, lang } = useLanguage();
const isId = computed(() => lang.value === 'ID');

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

