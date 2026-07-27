<template>
  <div 
    class="visitor-counter-container inline-flex items-center gap-2.5 transition-all"
    :class="[
      theme === 'pixel' 
        ? 'bg-[#161b22] text-[#00ff66] border-2 border-black p-2 sm:p-2.5 shadow-[3px_3px_0px_#000000] font-silkscreen text-[11px] sm:text-xs'
        : 'bg-white/5 backdrop-blur-md text-gray-200 border border-white/10 px-3.5 py-2 rounded-xl text-xs shadow-lg font-[\'Roboto\']'
    ]"
  >
    <!-- Live Status Dot -->
    <div class="relative flex h-2.5 w-2.5 shrink-0">
      <span 
        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        :class="theme === 'pixel' ? 'bg-[#00ff66]' : 'bg-emerald-400'"
      ></span>
      <span 
        class="relative inline-flex h-2.5 w-2.5 rounded-full"
        :class="theme === 'pixel' ? 'bg-[#00ff66] border border-black' : 'bg-emerald-500'"
      ></span>
    </div>

    <!-- Content Label -->
    <div class="flex items-center gap-1.5 uppercase font-bold tracking-wider">
      <span :class="theme === 'pixel' ? 'text-[#8b949e]' : 'text-gray-400'">
        {{ theme === 'pixel' ? (isId ? 'PENGUNJUNG:' : 'PLAYER:') : (isId ? 'Pengunjung:' : 'Visitors:') }}
      </span>
      <span 
        class="font-extrabold"
        :class="theme === 'pixel' ? 'text-[#ffd700] font-pixel text-sm tracking-widest' : 'text-violet-400 font-mono text-sm'"
      >
        #{{ formattedCount }}
      </span>
    </div>

    <!-- Retro Tag in Pixel mode -->
    <span 
      v-if="theme === 'pixel'" 
      class="hidden sm:inline-block ml-1 px-1.5 py-0.5 bg-black text-[#00f0ff] text-[9px] border border-[#00f0ff]"
    >
      READY
    </span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { useTheme } from '@/composables/useTheme';

const props = defineProps({
  themeOverride: {
    type: String,
    default: ''
  }
});

const { lang } = useLanguage();
const { currentTheme } = useTheme();

const theme = computed(() => props.themeOverride || currentTheme.value);
const isId = computed(() => lang.value === 'ID');

const baseCount = ref(1280);
const rawCount = ref(1280);

const formattedCount = computed(() => {
  return String(rawCount.value).padStart(6, '0');
});

const fetchOrUpdateVisitorCount = async () => {
  const STORAGE_KEY = 'porto_visitor_id_count_v2';
  const lastVisit = localStorage.getItem('porto_last_visit_timestamp');
  const now = Date.now();
  const ONE_HOUR = 3600 * 1000;

  let localVal = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
  if (!localVal) {
    localVal = baseCount.value + Math.floor(Math.random() * 45);
  }

  // Increment if first time or visited > 1 hour ago
  if (!lastVisit || now - parseInt(lastVisit, 10) > ONE_HOUR) {
    localVal += 1;
    localStorage.setItem(STORAGE_KEY, localVal.toString());
    localStorage.setItem('porto_last_visit_timestamp', now.toString());
  }

  rawCount.value = localVal;

  // Try external counter API as secondary enhancement
  try {
    const res = await fetch('https://api.counterapi.dev/v1/muhamadsidik_porto_visitor/visits/up');
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.count === 'number' && data.count > 0) {
        rawCount.value = Math.max(localVal, data.count + baseCount.value);
      }
    }
  } catch (err) {
    // Graceful fallback to local count
  }
};

onMounted(() => {
  fetchOrUpdateVisitorCount();
});
</script>
