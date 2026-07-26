<template>
  <div 
    class="w-full relative transition-all duration-300"
    :class="
      isPixel 
        ? 'bg-transparent text-[#f0f6fc] font-mono' 
        : 'bg-[#1D1D1D]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl'
    "
  >
    
    <!-- Header: Title and Total -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div class="flex items-center gap-3">
        <i class="bi bi-github text-xl" :class="isPixel ? 'text-[#00ff66]' : 'text-white'"></i>
        <h3 
          class="font-medium text-lg"
          :class="isPixel ? 'text-[#00ff66] font-silkscreen text-xs sm:text-sm uppercase tracking-wider' : 'text-white font-[\'Poppins\']'"
        >
          {{ selectedYearTotal.toLocaleString() }} Contributions in {{ selectedYear }}
        </h3>
      </div>
      
      <!-- Year Tabs -->
      <div v-if="availableYears.length > 0" class="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
        <button
          v-for="year in availableYears"
          :key="year.year"
          @click="selectYear(year.year)"
          class="px-4 py-1.5 transition-all duration-300 whitespace-nowrap text-xs font-medium"
          :class="[
            isPixel ? 'font-silkscreen' : 'font-[\'Roboto\'] rounded-full',
            selectedYear === year.year
              ? (isPixel 
                  ? 'bg-[#00ff66] text-black font-bold border-2 border-black shadow-[2px_2px_0px_#000000]' 
                  : 'bg-violet-500 text-white shadow-lg shadow-violet-500/30')
              : (isPixel 
                  ? 'bg-[#0d1117] text-[#8b949e] border border-[#30363d] hover:text-[#00ff66] hover:border-[#00ff66]' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white')
          ]"
        >
          {{ year.year }}
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="w-full h-[150px] flex items-center justify-center">
      <div 
        class="w-8 h-8 border-2 rounded-full animate-spin"
        :class="isPixel ? 'border-[#00ff66]/20 border-t-[#00ff66]' : 'border-violet-500/20 border-t-violet-500'"
      ></div>
    </div>

    <!-- Calendar Grid -->
    <div v-else-if="currentYearData.length > 0" class="w-full overflow-x-auto scrollbar-hide pb-2 px-1">
      <div class="min-w-[800px] flex gap-2">
        
        <!-- Day Labels -->
        <div 
          class="flex flex-col gap-[4px] pt-[20px] text-[10px] pr-2 shrink-0"
          :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-[\'Roboto\'] font-medium'"
        >
          <span class="h-[12px] leading-[12px]"></span>
          <span class="h-[12px] leading-[12px]">Mon</span>
          <span class="h-[12px] leading-[12px]"></span>
          <span class="h-[12px] leading-[12px]">Wed</span>
          <span class="h-[12px] leading-[12px]"></span>
          <span class="h-[12px] leading-[12px]">Fri</span>
          <span class="h-[12px] leading-[12px]"></span>
        </div>

        <!-- The Grid -->
        <div class="relative w-full">
          <!-- Month Labels -->
          <div 
            class="absolute -top-5 left-0 right-0 flex justify-between text-[10px] mb-1 px-1"
            :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-[\'Roboto\'] font-medium'"
          >
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>

          <!-- Heatmap -->
          <div class="grid grid-flow-col grid-rows-7 gap-[4px] w-max">
            <!-- Padded empty days for start of year -->
            <div
              v-for="n in paddingDays"
              :key="'pad-' + n"
              class="w-[12px] h-[12px]"
            ></div>

            <!-- Actual days -->
            <div
              v-for="day in currentYearData"
              :key="day.date"
              class="w-[12px] h-[12px] transition-all duration-300 cursor-default relative group"
              :class="isPixel ? 'rounded-none' : 'rounded-[2px]'"
              :style="{ backgroundColor: getIntensityColor(day.intensity) }"
              :title="`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`"
            >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error / Empty State Fallback -->
    <div 
      v-else 
      class="w-full h-[140px] flex flex-col items-center justify-center gap-2 text-xs"
      :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/50'"
    >
      <i class="bi bi-exclamation-triangle-fill text-amber-400 text-2xl"></i>
      <span>Gagal memuat data kontribusi GitHub (Network Timeout/CORS).</span>
      <button 
        @click="fetchGitHubData" 
        class="px-4 py-1.5 font-medium text-xs transition-all duration-200 mt-2 flex items-center gap-2"
        :class="
          isPixel 
            ? 'bg-[#00ff66] hover:bg-[#00cc52] text-black font-silkscreen font-bold border border-black shadow-[2px_2px_0px_#000000]' 
            : 'bg-violet-600 hover:bg-violet-500 text-white rounded-lg'
        "
      >
        <i class="bi bi-arrow-clockwise"></i> Coba Lagi
      </button>
    </div>

    <!-- Legend -->
    <div 
      v-if="!loading && currentYearData.length > 0" 
      class="mt-4 flex justify-end items-center gap-2 text-[11px]"
      :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-[\'Roboto\'] font-medium'"
    >
      <span>Less</span>
      <div class="flex gap-[4px]">
        <div class="w-[12px] h-[12px]" :class="isPixel ? 'rounded-none' : 'rounded-[2px]'" :style="{ backgroundColor: getIntensityColor(0) }"></div>
        <div class="w-[12px] h-[12px]" :class="isPixel ? 'rounded-none' : 'rounded-[2px]'" :style="{ backgroundColor: getIntensityColor(1) }"></div>
        <div class="w-[12px] h-[12px]" :class="isPixel ? 'rounded-none' : 'rounded-[2px]'" :style="{ backgroundColor: getIntensityColor(2) }"></div>
        <div class="w-[12px] h-[12px]" :class="isPixel ? 'rounded-none' : 'rounded-[2px]'" :style="{ backgroundColor: getIntensityColor(3) }"></div>
        <div class="w-[12px] h-[12px]" :class="isPixel ? 'rounded-none' : 'rounded-[2px]'" :style="{ backgroundColor: getIntensityColor(4) }"></div>
      </div>
      <span>More</span>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
});

const { currentTheme } = useTheme();

const activeTheme = computed(() => props.theme || currentTheme.value || 'editorial');
const isPixel = computed(() => activeTheme.value === 'pixel');

const username = "MyusiZ3";
const loading = ref(true);
const githubData = ref({ years: [], contributions: [] });
const selectedYear = ref(new Date().getFullYear().toString());

const parseResponse = (data) => {
  let normalizedYears = [];
  let normalizedContribs = [];

  if (data.total && typeof data.total === 'object') {
    const yearsList = Object.keys(data.total).sort((a, b) => b - a);
    normalizedYears = yearsList.map(y => ({
      year: y.toString(),
      total: data.total[y]
    }));
    normalizedContribs = (data.contributions || []).map(c => ({
      date: c.date,
      count: c.count || 0,
      intensity: c.level !== undefined ? c.level : (c.intensity || 0)
    }));
  } else if (data.years && Array.isArray(data.years)) {
    normalizedYears = data.years.map(y => ({
      year: y.year.toString(),
      total: y.total
    }));
    normalizedContribs = (data.contributions || []).map(c => ({
      date: c.date,
      count: c.count || 0,
      intensity: c.intensity !== undefined ? c.intensity : (c.level || 0)
    }));
  }

  return { years: normalizedYears, contributions: normalizedContribs };
};

const fetchGitHubData = async () => {
  loading.value = true;
  const endpoints = [
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    `https://github-contributions.vercel.app/api/v1/${username}`,
    `https://api.codetabs.com/v1/proxy?quest=https://github-contributions.vercel.app/api/v1/${username}`
  ];

  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) continue;
      const data = await res.json();
      const normalized = parseResponse(data);

      if (normalized.years.length > 0) {
        githubData.value = normalized;
        selectedYear.value = normalized.years[0].year;
        loading.value = false;
        return;
      }
    } catch {
      // Continue to next endpoint if failed or timed out
    }
  }

  loading.value = false;
};

onMounted(() => {
  fetchGitHubData();
});

const availableYears = computed(() => {
  return githubData.value.years ? [...githubData.value.years].slice(0, 5).reverse() : [];
});

const selectedYearTotal = computed(() => {
  const yearObj = githubData.value.years?.find(y => y.year.toString() === selectedYear.value);
  return yearObj ? yearObj.total : 0;
});

const currentYearData = computed(() => {
  if (!githubData.value.contributions) return [];
  return githubData.value.contributions
    .filter(c => c.date.startsWith(selectedYear.value))
    .sort((a, b) => a.date.localeCompare(b.date));
});

const paddingDays = computed(() => {
  if (currentYearData.value.length === 0) return 0;
  return new Date(currentYearData.value[0].date).getDay();
});

const selectYear = (year) => {
  selectedYear.value = year.toString();
};

const getIntensityColor = (intensity) => {
  if (isPixel.value) {
    const pixelIntensities = {
      0: 'rgba(255, 255, 255, 0.05)',
      1: 'rgba(0, 255, 102, 0.25)',
      2: 'rgba(0, 255, 102, 0.50)',
      3: 'rgba(0, 255, 102, 0.75)',
      4: '#00ff66'
    };
    return pixelIntensities[intensity] || pixelIntensities[0];
  } else {
    const editorialIntensities = {
      0: 'rgba(255, 255, 255, 0.03)',
      1: 'rgba(124, 58, 237, 0.3)',
      2: 'rgba(124, 58, 237, 0.55)',
      3: 'rgba(124, 58, 237, 0.8)',
      4: 'rgba(124, 58, 237, 1)'
    };
    return editorialIntensities[intensity] || editorialIntensities[0];
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
