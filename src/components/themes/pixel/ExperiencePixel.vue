<template>
  <section id="experience" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="mb-10 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <span class="text-xs font-bold text-[#ffd700] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#ffd700] shadow-[2px_2px_0px_#000] font-silkscreen">
            ✦ {{ t('exp_title') }}
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold uppercase mt-2 font-pixel leading-tight">
            CAREER <span class="text-[#ffd700]">QUEST LOG</span>
          </h2>
          <p class="text-xs text-[#8b949e] mt-2 max-w-2xl font-mono">
            {{ t('exp_desc') }}
          </p>
        </div>

        <!-- Quest Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2 font-silkscreen">
          <button
            @click="activeCategory = 'all'"
            class="px-3 py-1.5 text-xs font-bold uppercase transition border-2 shadow-[2px_2px_0px_#000]"
            :class="activeCategory === 'all' ? 'bg-[#ffd700] text-black border-black' : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'"
          >
            ALL ({{ workQuests.length + projectQuests.length }})
          </button>
          <button
            @click="activeCategory = 'work'"
            class="px-3 py-1.5 text-xs font-bold uppercase transition border-2 shadow-[2px_2px_0px_#000]"
            :class="activeCategory === 'work' ? 'bg-[#00f0ff] text-black border-black' : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'"
          >
            WORK & ORG ({{ workQuests.length }})
          </button>
          <button
            @click="activeCategory = 'project'"
            class="px-3 py-1.5 text-xs font-bold uppercase transition border-2 shadow-[2px_2px_0px_#000]"
            :class="activeCategory === 'project' ? 'bg-[#00ff66] text-black border-black' : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'"
          >
            PROJECTS ({{ projectQuests.length }})
          </button>
        </div>
      </div>

      <!-- WORK & ORGANIZATIONAL QUESTS -->
      <div v-if="activeCategory === 'all' || activeCategory === 'work'" class="mb-12">
        <h3 class="text-lg sm:text-xl font-extrabold uppercase mb-6 font-silkscreen text-[#00f0ff] flex items-center gap-2">
          <i class="bi bi-briefcase-fill text-[#ffd700]"></i>
          {{ t('exp_work_org') }}
        </h3>

        <div class="space-y-6">
          <div
            v-for="(quest, idx) in displayedWorkQuests"
            :key="quest.id"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: idx * 120, ease: 'easeOut' } }"
            class="bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] relative group hover:border-[#00f0ff] transition-colors"
          >
            <!-- Quest Header Line -->
            <div class="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#30363d] pb-4 mb-4 font-silkscreen">
              <div class="flex items-center gap-3">
                <span class="px-2.5 py-1 bg-[#00f0ff] text-black font-extrabold text-xs uppercase shadow-[2px_2px_0px_#000]">
                  WORK 0{{ idx + 1 }}
                </span>
                <span class="text-xs font-bold text-[#00ff66] uppercase border border-[#00ff66] px-2 py-0.5">
                  {{ quest.status }}
                </span>
              </div>

              <div class="flex items-center gap-3 text-xs text-[#8b949e]">
                <span class="flex items-center gap-1">
                  <i class="bi bi-calendar-event text-[#ffd700]"></i>
                  <span>{{ quest.period }}</span>
                </span>
                <span class="text-[#ffd700] font-bold">{{ quest.xp }}</span>
              </div>
            </div>

            <!-- Quest Content -->
            <div class="space-y-2">
              <h4 class="text-base sm:text-lg font-extrabold text-[#f0f6fc] uppercase group-hover:text-[#00f0ff] transition-colors font-silkscreen">
                {{ quest.title }} <span class="text-[#ffd700]">@ {{ quest.sub }}</span>
              </h4>
              <p class="text-xs sm:text-sm text-[#8b949e] leading-relaxed pt-1 font-mono">
                {{ quest.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Show More / Collapse Button for Work Quests -->
        <div v-if="workQuests.length > initialWorkLimit" class="mt-6 text-center">
          <button
            @click="isExpandedWork = !isExpandedWork"
            class="px-6 py-3 bg-[#161b22] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black border-2 border-black font-silkscreen text-xs font-bold uppercase shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <i :class="isExpandedWork ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="group-hover:scale-125 transition-transform"></i>
            <span>{{ isExpandedWork ? 'COLLAPSE WORK QUEST LOG' : `UNLOCK ALL WORK QUESTS (+${workQuests.length - initialWorkLimit} MORE)` }}</span>
          </button>
        </div>
      </div>

      <!-- PROJECT EXPERIENCE QUESTS -->
      <div v-if="activeCategory === 'all' || activeCategory === 'project'">
        <h3 class="text-lg sm:text-xl font-extrabold uppercase mb-6 font-silkscreen text-[#00ff66] flex items-center gap-2">
          <i class="bi bi-controller text-[#00ff66]"></i>
          {{ t('exp_proj_title') }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(quest, idx) in displayedProjectQuests"
            :key="quest.id"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: idx * 120, ease: 'easeOut' } }"
            class="bg-[#161b22] border-4 border-black p-6 shadow-[8px_8px_0px_#000000] relative group hover:border-[#00ff66] transition-colors flex flex-col justify-between"
          >
            <div>
              <!-- Quest Header Line -->
              <div class="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#30363d] pb-3 mb-4 font-silkscreen">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 bg-[#00ff66] text-black font-extrabold text-[10px] uppercase shadow-[2px_2px_0px_#000]">
                    PROJ 0{{ idx + 1 }}
                  </span>
                  <span class="text-[10px] font-bold text-[#ffd700] uppercase border border-[#ffd700] px-1.5 py-0.5">
                    CLEARED
                  </span>
                </div>
                <div class="text-[11px] text-[#8b949e]">
                  <i class="bi bi-calendar-event text-[#ffd700] mr-1"></i>
                  <span>{{ quest.period }}</span>
                </div>
              </div>

              <!-- Quest Content -->
              <h4 class="text-sm sm:text-base font-extrabold text-[#f0f6fc] uppercase group-hover:text-[#00ff66] transition-colors font-silkscreen mb-1">
                {{ quest.title }}
              </h4>
              <div class="text-xs text-[#00f0ff] font-bold font-silkscreen mb-3">
                {{ quest.sub }}
              </div>
              <p class="text-xs text-[#8b949e] leading-relaxed font-mono">
                {{ quest.desc }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-[#30363d] flex items-center justify-between font-silkscreen text-[11px]">
              <span class="text-[#8b949e]">QUEST REWARD:</span>
              <span class="text-[#ffd700] font-bold">{{ quest.xp }}</span>
            </div>
          </div>
        </div>

        <!-- Show More / Collapse Button for Project Quests -->
        <div v-if="projectQuests.length > initialProjectLimit" class="mt-6 text-center">
          <button
            @click="isExpandedProject = !isExpandedProject"
            class="px-6 py-3 bg-[#161b22] text-[#00ff66] hover:bg-[#00ff66] hover:text-black border-2 border-black font-silkscreen text-xs font-bold uppercase shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <i :class="isExpandedProject ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="group-hover:scale-125 transition-transform"></i>
            <span>{{ isExpandedProject ? 'COLLAPSE PROJECT QUEST LOG' : `UNLOCK ALL PROJECT QUESTS (+${projectQuests.length - initialProjectLimit} MORE)` }}</span>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
const activeCategory = ref('all');

const initialWorkLimit = 3;
const initialProjectLimit = 4;

const isExpandedWork = ref(false);
const isExpandedProject = ref(false);

const workQuests = computed(() => [
  {
    id: 'w1',
    title: t('exp_w1_title'),
    sub: t('exp_w1_sub'),
    period: "AUG 2025 - PRESENT",
    status: "ACTIVE QUEST",
    xp: "+10,000 XP",
    desc: t('exp_w1_desc')
  },
  {
    id: 'w2',
    title: t('exp_w2_title'),
    sub: t('exp_w2_sub'),
    period: "SEP 2023 - JUL 2025",
    status: "QUEST CLEARED",
    xp: "+8,500 XP",
    desc: t('exp_w2_desc')
  },
  {
    id: 'w3',
    title: t('exp_w3_title'),
    sub: t('exp_w3_sub'),
    period: "SEP 2023 - DEC 2023",
    status: "QUEST CLEARED",
    xp: "+6,000 XP",
    desc: t('exp_w3_desc')
  },
  {
    id: 'w4',
    title: t('exp_w4_title'),
    sub: t('exp_w4_sub'),
    period: "DEC 2019 - JUNE 2022",
    status: "QUEST CLEARED",
    xp: "+5,000 XP",
    desc: t('exp_w4_desc')
  },
  {
    id: 'w5',
    title: t('exp_w5_title'),
    sub: t('exp_w5_sub'),
    period: "JAN 2021 - JUNE 2021",
    status: "EXCELLENT RATING",
    xp: "+7,500 XP",
    desc: t('exp_w5_desc')
  }
]);

const projectQuests = computed(() => [
  {
    id: 'p1',
    title: t('exp_p1_title'),
    sub: t('exp_p1_sub'),
    period: "JAN 2025 - JUNE 2025",
    xp: "+9,000 XP",
    desc: t('exp_p1_desc')
  },
  {
    id: 'p2',
    title: t('exp_p2_title'),
    sub: t('exp_p2_sub'),
    period: "JAN 2025 - JUNE 2025",
    xp: "+8,500 XP",
    desc: t('exp_p2_desc')
  },
  {
    id: 'p3',
    title: t('exp_p3_title'),
    sub: t('exp_p3_sub'),
    period: "JAN 2025 - JUNE 2025",
    xp: "+8,000 XP",
    desc: t('exp_p3_desc')
  },
  {
    id: 'p4',
    title: t('exp_p4_title'),
    sub: t('exp_p4_sub'),
    period: "SEP 2024 - FEB 2025",
    xp: "+7,500 XP",
    desc: t('exp_p4_desc')
  },
  {
    id: 'p5',
    title: t('exp_p5_title'),
    sub: t('exp_p5_sub'),
    period: "JAN 2024 - JUNE 2024",
    xp: "+6,500 XP",
    desc: t('exp_p5_desc')
  },
  {
    id: 'p6',
    title: t('exp_p6_title'),
    sub: t('exp_p6_sub'),
    period: "SEP 2023 - FEB 2024",
    xp: "+6,000 XP",
    desc: t('exp_p6_desc')
  }
]);

const displayedWorkQuests = computed(() => {
  if (isExpandedWork.value) {
    return workQuests.value;
  }
  return workQuests.value.slice(0, initialWorkLimit);
});

const displayedProjectQuests = computed(() => {
  if (isExpandedProject.value) {
    return projectQuests.value;
  }
  return projectQuests.value.slice(0, initialProjectLimit);
});
</script>
