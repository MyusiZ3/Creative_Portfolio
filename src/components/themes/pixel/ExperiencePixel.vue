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
            @click="setCategory('all')"
            class="px-3 py-1.5 text-xs font-bold uppercase transition border-2 shadow-[2px_2px_0px_#000]"
            :class="activeCategory === 'all' ? 'bg-[#ffd700] text-black border-black' : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'"
          >
            ALL ({{ workQuests.length + projectQuests.length }})
          </button>
          <button
            @click="setCategory('work')"
            class="px-3 py-1.5 text-xs font-bold uppercase transition border-2 shadow-[2px_2px_0px_#000]"
            :class="activeCategory === 'work' ? 'bg-[#00f0ff] text-black border-black' : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'"
          >
            WORK & ORG ({{ workQuests.length }})
          </button>
          <button
            @click="setCategory('project')"
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
                  WORK 0{{ (workPage - 1) * workPerPage + idx + 1 }}
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

        <!-- Pagination for Work Quests -->
        <div v-if="totalWorkPages > 1" class="mt-8 flex items-center justify-center gap-3 font-silkscreen">
          <button
            @click="workPage > 1 && workPage--"
            :disabled="workPage === 1"
            class="px-4 py-2 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-2"
            :class="[
              workPage === 1 
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]' 
                : 'text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black active:translate-y-0.5'
            ]"
          >
            <span v-if="workPage > 1" class="w-2 h-2 bg-[#00ff66] inline-block shadow-[0_0_5px_#00ff66]"></span>
            <span>PREVIOUS</span>
          </button>

          <div class="text-xs font-bold text-[#f0f6fc] bg-[#161b22] px-4 py-2 border-2 border-[#30363d] shadow-[3px_3px_0px_#000000]">
            PAGE <span class="text-[#00ff66]">{{ workPage }}</span> OF <span class="text-[#00ff66]">{{ totalWorkPages }}</span>
          </div>

          <button
            @click="workPage < totalWorkPages && workPage++"
            :disabled="workPage === totalWorkPages"
            class="px-4 py-2 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-2"
            :class="[
              workPage === totalWorkPages 
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]' 
                : 'text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black active:translate-y-0.5'
            ]"
          >
            <span>NEXT ›</span>
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
                    PROJ 0{{ (projectPage - 1) * projectPerPage + idx + 1 }}
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

        <!-- Pagination for Project Quests -->
        <div v-if="totalProjectPages > 1" class="mt-8 flex items-center justify-center gap-3 font-silkscreen">
          <button
            @click="projectPage > 1 && projectPage--"
            :disabled="projectPage === 1"
            class="px-4 py-2 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-2"
            :class="[
              projectPage === 1 
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]' 
                : 'text-[#00ff66] hover:bg-[#00ff66] hover:text-black active:translate-y-0.5'
            ]"
          >
            <span v-if="projectPage > 1" class="w-2 h-2 bg-[#00ff66] inline-block shadow-[0_0_5px_#00ff66]"></span>
            <span>PREVIOUS</span>
          </button>

          <div class="text-xs font-bold text-[#f0f6fc] bg-[#161b22] px-4 py-2 border-2 border-[#30363d] shadow-[3px_3px_0px_#000000]">
            PAGE <span class="text-[#00ff66]">{{ projectPage }}</span> OF <span class="text-[#00ff66]">{{ totalProjectPages }}</span>
          </div>

          <button
            @click="projectPage < totalProjectPages && projectPage++"
            :disabled="projectPage === totalProjectPages"
            class="px-4 py-2 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-2"
            :class="[
              projectPage === totalProjectPages 
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]' 
                : 'text-[#00ff66] hover:bg-[#00ff66] hover:text-black active:translate-y-0.5'
            ]"
          >
            <span>NEXT ›</span>
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

const workPage = ref(1);
const workPerPage = ref(3);

const projectPage = ref(1);
const projectPerPage = ref(4);

const setCategory = (cat) => {
  activeCategory.value = cat;
  workPage.value = 1;
  projectPage.value = 1;
};

const workQuests = computed(() => [
  {
    id: 'w1',
    title: t('exp_w1_title'),
    sub: t('exp_w1_sub'),
    period: "AUG 2025 - JUL 2026",
    status: "QUEST CLEARED",
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

const totalWorkPages = computed(() => Math.ceil(workQuests.value.length / workPerPage.value) || 1);
const totalProjectPages = computed(() => Math.ceil(projectQuests.value.length / projectPerPage.value) || 1);

const displayedWorkQuests = computed(() => {
  const start = (workPage.value - 1) * workPerPage.value;
  return workQuests.value.slice(start, start + workPerPage.value);
});

const displayedProjectQuests = computed(() => {
  const start = (projectPage.value - 1) * projectPerPage.value;
  return projectQuests.value.slice(start, start + projectPerPage.value);
});
</script>
