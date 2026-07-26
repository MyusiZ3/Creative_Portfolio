<template>
  <section id="home" class="relative pt-24 pb-12 sm:pb-16 bg-[#0d1117] text-[#f0f6fc] font-mono selection:bg-[#00ff66] selection:text-black overflow-hidden">
    <!-- Subtle CRT Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      
      <!-- Arcade Banner Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="mb-8 border-4 border-[#00f0ff] bg-[#161b22] p-4 shadow-[6px_6px_0px_#000000] flex flex-wrap items-center justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 bg-[#00ff66] animate-ping inline-block"></span>
          <span class="text-xs sm:text-sm font-bold text-[#00ff66] tracking-widest uppercase font-silkscreen">
            SYSTEM ONLINE • PLAYER 1 READY
          </span>
        </div>
        <div class="flex items-center gap-2 text-xs text-[#8b949e] font-silkscreen">
          <span class="px-2 py-1 bg-[#0d1117] border border-[#30363d] text-[#00f0ff] font-bold">MODE: 16-BIT ARCADE</span>
          <span class="px-2 py-1 bg-[#0d1117] border border-[#30363d] text-[#ffd700] font-bold">FPS: 60</span>
        </div>
      </div>

      <!-- Main Character Grid (Bento Layout) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <!-- Left Pane: Player Portrait & Title -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
          class="lg:col-span-7 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between relative group"
        >
          <div class="space-y-4">
            <!-- Level & Class Tag -->
            <div class="flex flex-wrap items-center gap-2 font-silkscreen">
              <span class="px-3 py-1 bg-[#ffd700] text-black font-bold text-xs uppercase shadow-[2px_2px_0px_#000000]">
                LVL 99 DESIGNER
              </span>
              <span class="px-3 py-1 bg-[#00ff66] text-black font-bold text-xs uppercase shadow-[2px_2px_0px_#000000]">
                GAME DEV & XR
              </span>
              <span class="px-3 py-1 bg-[#ff0055] text-white font-bold text-xs uppercase shadow-[2px_2px_0px_#000000]">
                UI/UX SPECIALIST
              </span>
            </div>

            <!-- Big Pixel Title -->
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f6fc] tracking-tight leading-tight uppercase font-pixel py-2">
              MUHAMAD <span class="text-[#00ff66]">SIDIK</span>
            </h1>

            <p class="text-sm sm:text-base text-[#8b949e] leading-relaxed pt-2 font-mono">
              {{ isId 
                ? "Creative Multimedia Designer & Game Developer yang berfokus menciptakan pengalaman interaktif imersif (Arcade, VR/AR, dan UI/UX modern)."
                : "Creative Multimedia Designer & Game Developer crafting immersive interactive experiences spanning Arcade Games, VR/AR, and modern UI/UX."
              }}
            </p>
          </div>

          <!-- Player Stat Bars -->
          <div class="mt-8 pt-6 border-t-2 border-[#30363d] space-y-3">
            <!-- HP Bar -->
            <div>
              <div class="flex justify-between text-xs font-bold mb-1 font-silkscreen">
                <span class="text-[#00ff66]">CREATIVE STAMINA (HP)</span>
                <span class="text-[#00ff66]">100 / 100</span>
              </div>
              <div class="h-3 w-full bg-[#0d1117] border-2 border-black p-0.5">
                <div class="h-full bg-[#00ff66] w-full transition-all duration-500"></div>
              </div>
            </div>

            <!-- MP Bar -->
            <div>
              <div class="flex justify-between text-xs font-bold mb-1 font-silkscreen">
                <span class="text-[#00f0ff]">TECH & XR MANA (MP)</span>
                <span class="text-[#00f0ff]">95 / 100</span>
              </div>
              <div class="h-3 w-full bg-[#0d1117] border-2 border-black p-0.5">
                <div class="h-full bg-[#00f0ff] w-[95%] transition-all duration-500"></div>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="mt-8 flex flex-row items-center gap-2 sm:gap-4 font-silkscreen">
            <a
              href="#projects"
              class="flex-1 justify-center px-2 sm:px-6 py-2.5 sm:py-3 bg-[#00ff66] text-black font-extrabold text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000000] sm:shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-1 sm:gap-2 text-center whitespace-nowrap"
            >
              <i class="bi bi-controller text-xs sm:text-base shrink-0"></i>
              <span class="whitespace-nowrap">{{ isId ? "MAIN KAN PROYEK" : "START PLAYING" }}</span>
            </a>

            <a
              href="#contact"
              class="flex-1 justify-center px-2 sm:px-6 py-2.5 sm:py-3 bg-[#161b22] text-[#00f0ff] font-extrabold text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase border-2 border-[#00f0ff] shadow-[3px_3px_0px_#000000] sm:shadow-[4px_4px_0px_#000000] hover:bg-[#00f0ff]/10 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all flex items-center gap-1 sm:gap-2 text-center whitespace-nowrap"
            >
              <i class="bi bi-send-fill text-xs sm:text-base shrink-0"></i>
              <span class="whitespace-nowrap">{{ isId ? "KIRIM HIGH SCORE" : "SEND TRANSMISSION" }}</span>
            </a>
          </div>
        </div>

        <!-- Right Pane: Skill Attributes Grid -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 300, ease: 'easeOut' } }"
          class="lg:col-span-5 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between border-b-2 border-[#30363d] pb-3 mb-4 font-silkscreen">
              <h3 class="text-xs font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2">
                <i class="bi bi-shield-lock-fill text-sm"></i>
                <span>ATTRIBUTES & STATS</span>
              </h3>
              <span class="text-[10px] text-[#8b949e]">EQUIPPED</span>
            </div>

            <div class="space-y-3">
              <div v-for="stat in stats" :key="stat.name" class="p-3 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00f0ff] transition-colors">
                <div class="flex items-center gap-3">
                  <span class="text-xl flex items-center justify-center w-8 h-8 bg-[#161b22] border border-black">
                    <i :class="stat.icon"></i>
                  </span>
                  <div>
                    <div class="text-xs font-bold text-[#f0f6fc] font-mono">{{ stat.name }}</div>
                    <div class="text-[10px] text-[#8b949e] font-mono">{{ stat.desc }}</div>
                  </div>
                </div>
                <div class="text-right font-silkscreen">
                  <div class="text-xs font-bold text-[#00ff66]">+{{ stat.val }}</div>
                  <div class="text-[9px] text-[#ffd700] uppercase">{{ stat.tier }}</div>
                </div>
              </div>
            </div>

            <!-- Education & Language Hero Highlights -->
            <div class="mt-4 pt-4 border-t-2 border-[#30363d] space-y-2.5 font-mono">
              <!-- Education Highlight -->
              <div class="p-2.5 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#ffd700] transition-colors">
                <div class="flex items-center gap-2.5">
                  <span class="text-base text-[#ffd700] flex items-center justify-center w-7 h-7 bg-[#161b22] border border-black shrink-0">
                    <i class="bi bi-mortarboard-fill"></i>
                  </span>
                  <div>
                    <div class="text-[11px] font-bold text-[#f0f6fc] font-silkscreen">TELKOM UNIVERSITY</div>
                    <div class="text-[9px] text-[#8b949e]">{{ t('edu_1_desc') }}</div>
                  </div>
                </div>
                <div class="text-right font-silkscreen shrink-0">
                  <div class="text-[10px] font-bold text-[#ffd700]">GPA 3.81</div>
                  <div class="text-[8px] text-[#00ff66] uppercase">{{ isId ? "2022 - SEKARANG" : "2022 - PRESENT" }}</div>
                </div>
              </div>

              <!-- Language Highlight -->
              <div class="p-2.5 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00f0ff] transition-colors">
                <div class="flex items-center gap-2.5">
                  <span class="text-base text-[#00f0ff] flex items-center justify-center w-7 h-7 bg-[#161b22] border border-black shrink-0">
                    <i class="bi bi-translate"></i>
                  </span>
                  <div>
                    <div class="text-[11px] font-bold text-[#f0f6fc] font-silkscreen">{{ isId ? "KEMAMPUAN BAHASA" : "LANGUAGE SKILLS" }}</div>
                    <div class="text-[9px] text-[#8b949e]">
                      {{ isId ? "ID: Asli (Native) • EN: Menengah (B1 - EPRT 483)" : "ID: Native • EN: Intermediate (B1 - EPRT 483)" }}
                    </div>
                  </div>
                </div>
                <div class="text-right font-silkscreen shrink-0">
                  <div class="text-[10px] font-bold text-[#00f0ff]">B1 READY</div>
                  <div class="text-[8px] text-[#00ff66] uppercase">{{ isId ? "DWIBAHASA" : "BILINGUAL" }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Insert Coin Footer Prompt -->
          <div class="mt-6 pt-4 border-t-2 border-[#30363d] text-center font-pixel">
            <div class="text-[10px] sm:text-xs text-[#ff0055] animate-pulse tracking-widest uppercase">
              ▲ INSERT COIN TO EXPLORE PORTFOLIO ▲
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();
const isId = computed(() => lang.value === 'ID');

const stats = computed(() => [
  { icon: 'bi bi-controller text-[#00ff66]', name: 'GAME DEVELOPMENT', desc: 'Unity 3D / C# / 2D Platformer', val: 95, tier: 'MASTER' },
  { icon: 'bi bi-headset text-[#00f0ff]', name: 'VR / AR EXPERIENCE', desc: 'XR Locomotion & Spatial Design', val: 92, tier: 'EXPERT' },
  { icon: 'bi bi-palette-fill text-[#ff0055]', name: 'UI / UX DESIGN', desc: 'Figma & Design Systems', val: 94, tier: 'EXPERT' },
  { icon: 'bi bi-code-slash text-[#ffd700]', name: 'FRONTEND CODE', desc: 'Vue.js & Web Interactive', val: 90, tier: 'ADVANCED' }
]);
</script>
