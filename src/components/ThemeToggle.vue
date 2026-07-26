<template>
  <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
    <!-- Floating Theme Switcher Button -->
    <button
      @click="handleToggle"
      class="group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 select-none shadow-2xl cursor-pointer"
      :class="[
        currentTheme === 'editorial'
          ? 'bg-[#18181b] hover:bg-[#27272a] text-zinc-100 border border-white/15 hover:border-violet-500/50 shadow-violet-950/20'
          : 'bg-[#161b22] text-[#00ff66] border-2 border-[#00ff66] shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000000]'
      ]"
      title="Switch Theme Style"
    >
      <!-- Mode Icon -->
      <span class="text-sm font-semibold flex items-center justify-center">
        <template v-if="currentTheme === 'editorial'">
          <span class="text-violet-400 group-hover:rotate-12 transition-transform duration-300">✦</span>
        </template>
        <template v-else>
          <span class="text-[#00ff66] animate-pulse">⚡</span>
        </template>
      </span>

      <!-- Label text -->
      <div class="flex items-center gap-1.5 text-xs font-mono tracking-wider font-semibold">
        <span class="opacity-60 text-[10px] uppercase">THEME:</span>
        <span class="uppercase tracking-widest" :class="currentTheme === 'editorial' ? 'text-violet-300' : 'text-[#00f0ff]'">
          {{ currentTheme === 'editorial' ? 'EDITORIAL' : 'PIXEL ARCADE' }}
        </span>
      </div>

      <!-- Hover Indicator Badge -->
      <span
        class="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase transition-colors"
        :class="currentTheme === 'editorial' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40'"
      >
        TOGGLE
      </span>
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme';

const emit = defineEmits(['toggle-theme']);
const { currentTheme, toggleTheme } = useTheme();

const handleToggle = () => {
  toggleTheme();
  emit('toggle-theme', currentTheme.value);
};
</script>
