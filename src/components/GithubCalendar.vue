<template>
  <div 
    class="w-full relative transition-all duration-500 overflow-hidden"
    :class="
      isPixel 
        ? 'bg-transparent text-[#f0f6fc] font-mono' 
        : 'bg-[#18181b] backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/[0.08] shadow-xl relative'
    "
  >
    <div class="relative z-10">
      <!-- Header: Title and Total -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 
            class="font-semibold text-lg md:text-xl tracking-tight"
            :class="isPixel ? 'text-[#00ff66] font-silkscreen text-xs sm:text-sm uppercase tracking-wider' : 'text-white font-[\'Poppins\']'"
          >
            {{ selectedYearTotal.toLocaleString() }} Contributions in {{ selectedYear }}
          </h3>
        </div>
        
        <!-- Year Tabs -->
        <div v-if="availableYears.length > 0" class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <div :class="isPixel ? 'flex gap-2' : 'bg-black/40 border border-white/10 p-1 rounded-lg flex gap-1'">
            <button
              v-for="year in availableYears"
              :key="year.year"
              @click="selectYear(year.year)"
              class="px-3.5 py-1 transition-all duration-200 whitespace-nowrap text-xs font-semibold tracking-wide"
              :class="[
                isPixel ? 'font-silkscreen' : 'rounded-md',
                selectedYear === year.year
                  ? (isPixel 
                      ? 'bg-[#00ff66] text-black font-bold border-2 border-black shadow-[2px_2px_0px_#000000]' 
                      : 'bg-white text-black font-bold shadow-sm')
                  : (isPixel 
                      ? 'bg-[#0d1117] text-[#8b949e] border border-[#30363d] hover:text-[#00ff66] hover:border-[#00ff66]' 
                      : 'bg-transparent text-white/50 hover:text-white hover:bg-white/[0.06]')
              ]"
            >
              {{ year.year }}
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="w-full h-[180px] flex items-center justify-center">
        <div 
          class="w-8 h-8 border-2 rounded-full animate-spin"
          :class="isPixel ? 'border-[#00ff66]/20 border-t-[#00ff66]' : 'border-white/20 border-t-white'"
        ></div>
      </div>

      <!-- Calendar Grid Wrapper -->
      <div v-else-if="currentYearData.length > 0" class="flex flex-col gap-3">
        
        <!-- Calendar Scroll Area -->
        <div class="w-full overflow-x-auto scrollbar-hide pb-3 px-1 relative">
          <div class="min-w-[800px] flex gap-2">
            
            <!-- Day Labels -->
            <div 
              class="flex flex-col justify-between pt-[22px] pb-[4px] text-[10px] pr-2 shrink-0 h-[108px]"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-[\'Roboto\'] font-medium'"
            >
              <span class="h-[12px] leading-[12px]">Mon</span>
              <span class="h-[12px] leading-[12px]">Wed</span>
              <span class="h-[12px] leading-[12px]">Fri</span>
            </div>

            <!-- The Grid -->
            <div class="relative w-full">
              <!-- Month Labels -->
              <div 
                class="flex justify-between text-[10px] mb-2 px-1"
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
                  class="w-[12px] h-[12px] transition-all duration-200 cursor-pointer relative group rounded-[2.5px]"
                  :style="{ 
                    backgroundColor: getIntensityColor(day.intensity)
                  }"
                  @mouseenter="showTooltip($event, day)"
                  @mouseleave="hideTooltip"
                >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Tooltip -->
        <div 
          v-if="tooltipVisible"
          class="absolute z-50 bg-[#18181b] border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-md text-white pointer-events-none shadow-xl transition-all duration-75 flex flex-col gap-0.5"
          :style="{ left: `${tooltipX}px`, top: `${tooltipY}px` }"
        >
          <span class="font-semibold text-white text-[11px] font-['Roboto']">
            {{ tooltipCount === 0 ? 'No' : tooltipCount }} {{ tooltipCount === 1 ? 'contribution' : 'contributions' }}
          </span>
          <span class="text-white/40 text-[9px] font-['Roboto']">{{ tooltipDate }}</span>
        </div>

        <!-- Footer Row: Github Link on left, Legend on right -->
        <div class="flex justify-between items-center mt-2 w-full">
          <!-- Github Link Badge -->
          <div>
            <a 
              v-if="!isPixel"
              :href="`https://github.com/${username}`"
              target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-mono font-medium tracking-wider uppercase"
            >
              <i class="bi bi-github"></i>
              github.com/{{ username }}
            </a>
            <a 
              v-else 
              :href="`https://github.com/${username}`"
              target="_blank"
              class="text-[#8b949e] hover:text-[#00ff66] text-xs font-mono transition-colors"
            >
              github.com/{{ username }}
            </a>
          </div>

          <!-- Legend -->
          <div class="flex items-center gap-2">
            <span 
              class="text-[10px]"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-medium font-[\'Roboto\']'"
            >
              Less
            </span>
            <div class="flex gap-[4.5px]">
              <div class="w-[11px] h-[11px] rounded-[2.5px]" :class="isPixel ? 'rounded-none' : ''" :style="{ backgroundColor: getIntensityColor(0) }"></div>
              <div class="w-[11px] h-[11px] rounded-[2.5px]" :class="isPixel ? 'rounded-none' : ''" :style="{ backgroundColor: getIntensityColor(1) }"></div>
              <div class="w-[11px] h-[11px] rounded-[2.5px]" :class="isPixel ? 'rounded-none' : ''" :style="{ backgroundColor: getIntensityColor(2) }"></div>
              <div class="w-[11px] h-[11px] rounded-[2.5px]" :class="isPixel ? 'rounded-none' : ''" :style="{ backgroundColor: getIntensityColor(3) }"></div>
              <div class="w-[11px] h-[11px] rounded-[2.5px]" :class="isPixel ? 'rounded-none' : ''" :style="{ backgroundColor: getIntensityColor(4) }"></div>
            </div>
            <span 
              class="text-[10px]"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/40 font-medium font-[\'Roboto\']'"
            >
              More
            </span>
          </div>
        </div>

      </div>

      <!-- Error / Empty State Fallback -->
      <div 
        v-else 
        class="w-full h-[160px] flex flex-col items-center justify-center gap-2 text-xs"
        :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-white/50'"
      >
        <i class="bi bi-exclamation-triangle-fill text-amber-400 text-2xl"></i>
        <span>Gagal memuat data kontribusi GitHub (Network Timeout/CORS).</span>
        <button 
          @click="fetchGitHubData" 
          class="px-4 py-1.5 font-semibold text-xs transition-all duration-200 mt-2 flex items-center gap-2"
          :class="
            isPixel 
              ? 'bg-[#00ff66] hover:bg-[#00cc52] text-black font-silkscreen font-bold border border-black shadow-[2px_2px_0px_#000000]' 
              : 'bg-white text-black hover:bg-neutral-200 rounded-md font-medium'
          "
        >
          <i class="bi bi-arrow-clockwise"></i> Coba Lagi
        </button>
      </div>
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

// Tooltip States
const tooltipVisible = ref(false);
const tooltipCount = ref(0);
const tooltipDate = ref('');
const tooltipX = ref(0);
const tooltipY = ref(0);

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

const showTooltip = (event, day) => {
  tooltipCount.value = day.count;
  tooltipDate.value = formatDate(day.date);

  const cell = event.currentTarget;
  const container = cell.closest('.w-full.relative');
  if (!container) return;

  const cellRect = cell.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Position tooltip horizontally centered above the cell
  tooltipX.value = (cellRect.left - containerRect.left) - 50 + (cellRect.width / 2);
  tooltipY.value = (cellRect.top - containerRect.top) - 45;
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
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
      0: 'rgba(255, 255, 255, 0.04)',
      1: 'rgba(16, 185, 129, 0.3)', // Clean Emerald
      2: 'rgba(16, 185, 129, 0.55)',
      3: 'rgba(16, 185, 129, 0.8)',
      4: '#10b981'
    };
    return editorialIntensities[intensity] || editorialIntensities[0];
  }
};

const getIntensityGlow = (intensity) => {
  if (isPixel.value) {
    const pixelGlows = {
      3: 'rgba(0, 255, 102, 0.3)',
      4: 'rgba(0, 255, 102, 0.6)'
    };
    return pixelGlows[intensity] || 'transparent';
  } else {
    const editorialGlows = {
      3: 'rgba(139, 92, 246, 0.3)',
      4: 'rgba(139, 92, 246, 0.6)'
    };
    return editorialGlows[intensity] || 'transparent';
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
