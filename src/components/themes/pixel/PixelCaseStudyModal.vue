<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-mono overflow-y-auto"
      @click.self="close"
    >
      <!-- Arcade Window Box -->
      <div class="relative w-full max-w-4xl bg-[#161b22] border-4 border-black shadow-[12px_12px_0px_#000000] my-8 overflow-hidden">
        
        <!-- Retro Title Bar -->
        <div class="bg-[#0d1117] border-b-4 border-black px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-[#ff0055] inline-block border border-black"></span>
            <span class="w-3 h-3 bg-[#ffd700] inline-block border border-black"></span>
            <span class="w-3 h-3 bg-[#00ff66] inline-block border border-black"></span>
            <span class="text-xs font-bold text-[#00f0ff] uppercase tracking-wider ml-2">
              MISSION BRIEFING • {{ project.title }}
            </span>
          </div>
          <button
            @click="close"
            class="px-2.5 py-0.5 bg-[#ff0055] text-white font-bold text-xs uppercase border border-black hover:bg-[#ff0055]/80 active:translate-y-0.5 transition-all"
          >
            [X] ESC
          </button>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          <!-- Top Hero Image Banner -->
          <div class="relative border-2 border-black bg-[#0d1117] overflow-hidden group">
            <img
              :src="project.image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200'"
              :alt="project.title"
              class="w-full h-64 sm:h-80 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute bottom-3 left-3 bg-black/80 px-3 py-1 border border-[#00ff66] text-[#00ff66] text-xs font-bold uppercase">
              {{ project.category }}
            </div>
          </div>

          <!-- Project Title & Subtitle -->
          <div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#f0f6fc] uppercase tracking-tight">
              {{ project.title }}
            </h3>
            <p class="text-xs sm:text-sm text-[#00f0ff] font-bold mt-1 uppercase">
              {{ project.subtitle || project.shortDesc }}
            </p>
          </div>

          <!-- Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0d1117] p-4 border-2 border-black">
            <div v-for="(metric, idx) in projectMetrics" :key="idx">
              <div class="text-[10px] text-[#8b949e] font-bold uppercase">{{ metric.label }}</div>
              <div class="text-sm font-extrabold text-[#ffd700] mt-0.5">{{ metric.value }}</div>
            </div>
          </div>

          <!-- Challenge & Solution Briefing -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- The Challenge -->
            <div class="bg-[#0d1117] p-5 border-2 border-black">
              <h4 class="text-xs font-bold text-[#ff0055] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>⚠️</span>
                <span>THE CHALLENGE</span>
              </h4>
              <p class="text-xs text-[#8b949e] leading-relaxed">
                {{ project.challenge || "Desain tantangan berfokus pada integrasi performa tinggi, kemudahan navigasi pengguna, dan estetika visual yang konsisten." }}
              </p>
            </div>

            <!-- The Solution -->
            <div class="bg-[#0d1117] p-5 border-2 border-black">
              <h4 class="text-xs font-bold text-[#00ff66] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>🛡️</span>
                <span>THE STRATEGY</span>
              </h4>
              <p class="text-xs text-[#8b949e] leading-relaxed">
                {{ project.solution || "Menerapkan pendekatan desain berbasis komponen terisolasi, pengujian real-time, dan pengoptimalan alur kerja antarmuka." }}
              </p>
            </div>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <h4 class="text-xs font-bold text-[#8b949e] uppercase mb-2">EQUIPPED WEAPONS (STACK):</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in (project.techStack || ['Unity', 'C#', 'Vue.js', 'Figma'])"
                :key="tech"
                class="px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#00f0ff] text-xs font-bold uppercase"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Action Footer Buttons -->
          <div class="pt-4 border-t-2 border-[#30363d] flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                class="px-5 py-2.5 bg-[#00ff66] text-black font-extrabold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                LAUNCH DEMO 🚀
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="px-5 py-2.5 bg-[#0d1117] text-[#00f0ff] font-extrabold text-xs uppercase border-2 border-[#00f0ff] shadow-[3px_3px_0px_#000000] hover:bg-[#00f0ff]/10 transition-all"
              >
                SOURCE CODE 💾
              </a>
            </div>

            <button
              @click="close"
              class="px-4 py-2 bg-[#161b22] text-[#8b949e] font-bold text-xs uppercase border border-[#30363d] hover:text-white"
            >
              CLOSE BRIEFING
            </button>
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  project: Object
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

const projectMetrics = computed(() => [
  { label: 'PLATFORM', value: props.project?.platform || 'Multi-Platform' },
  { label: 'ROLE', value: props.project?.role || 'Lead Designer' },
  { label: 'TIMELINE', value: props.project?.timeline || '3 Months' },
  { label: 'STATUS', value: 'STAGE CLEARED' }
]);
</script>
