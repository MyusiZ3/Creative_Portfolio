<template>
  <button
    @click="handleToggle"
    class="relative inline-flex items-center w-11 h-6 rounded-full transition-all duration-300 p-0.5 cursor-pointer select-none"
    :class="[
      currentTheme === 'editorial'
        ? 'bg-zinc-800 border border-white/20 hover:border-violet-400'
        : 'bg-[#121c16] border-2 border-[#00ff66] shadow-[0_0_8px_rgba(0,255,102,0.3)]'
    ]"
    :title="currentTheme === 'editorial' ? 'Switch to Pixel Arcade Theme' : 'Switch to Editorial Theme'"
    aria-label="Toggle Theme"
  >
    <!-- Thumb Circle -->
    <span
      class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-transform duration-300 font-bold shadow-md"
      :class="[
        currentTheme === 'editorial'
          ? 'translate-x-0 bg-violet-500 text-white'
          : 'translate-x-5 bg-[#00ff66] text-black'
      ]"
    >
      <template v-if="currentTheme === 'editorial'">✦</template>
      <template v-else>⚡</template>
    </span>
  </button>
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
