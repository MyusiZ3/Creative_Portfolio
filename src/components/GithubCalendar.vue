<template>
  <div class="w-full bg-[#1D1D1D]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl relative">
    
    <!-- Header: Title and Total -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div class="flex items-center gap-3">
        <i class="bi bi-github text-white text-xl"></i>
        <h3 class="text-white font-['Poppins'] font-medium text-lg">
          {{ selectedYearTotal }} Contributions in {{ selectedYear }}
        </h3>
      </div>
      
      <!-- Year Tabs -->
      <div class="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
        <button
          v-for="year in availableYears"
          :key="year.year"
          @click="selectYear(year.year)"
          class="px-4 py-1.5 rounded-full text-xs font-['Roboto'] font-medium transition-all duration-300 whitespace-nowrap"
          :class="
            selectedYear === year.year
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          "
        >
          {{ year.year }}
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="w-full h-[150px] flex items-center justify-center">
      <div class="w-8 h-8 border-2 border-violet-500/20 border-t-violet-500 rounded-full animate-spin"></div>
    </div>

    <!-- Calendar Grid -->
    <div v-else class="w-full overflow-x-auto scrollbar-hide pb-2 px-1">
      <div class="min-w-[800px] flex gap-2">
        
        <!-- Day Labels -->
        <div class="flex flex-col gap-[4px] pt-[20px] text-[10px] text-white/40 font-['Roboto'] font-medium pr-2 shrink-0">
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
          <div class="absolute -top-5 left-0 right-0 flex justify-between text-[10px] text-white/40 font-['Roboto'] font-medium mb-1 px-1">
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

          <!-- Heatmap - One single grid for perfect z-index behavior -->
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
              class="w-[12px] h-[12px] rounded-[2px] transition-all duration-300 cursor-default relative"
              :style="{ backgroundColor: getIntensityColor(day.intensity) }"
            >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div v-if="!loading" class="mt-4 flex justify-end items-center gap-2 text-[11px] text-white/40 font-['Roboto'] font-medium">
      <span>Less</span>
      <div class="flex gap-[4px]">
        <div class="w-[12px] h-[12px] rounded-[2px]" :style="{ backgroundColor: getIntensityColor(0) }"></div>
        <div class="w-[12px] h-[12px] rounded-[2px]" :style="{ backgroundColor: getIntensityColor(1) }"></div>
        <div class="w-[12px] h-[12px] rounded-[2px]" :style="{ backgroundColor: getIntensityColor(2) }"></div>
        <div class="w-[12px] h-[12px] rounded-[2px]" :style="{ backgroundColor: getIntensityColor(3) }"></div>
        <div class="w-[12px] h-[12px] rounded-[2px]" :style="{ backgroundColor: getIntensityColor(4) }"></div>
      </div>
      <span>More</span>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const username = "MyusiZ3";
const loading = ref(true);
const githubData = ref({ years: [], contributions: [] });
const selectedYear = ref(new Date().getFullYear().toString());

const fetchGitHubData = async () => {
  try {
    // Reverting to the vercel API with proxy to get multiple years data
    const res = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://github-contributions.vercel.app/api/v1/${username}`);
    if (!res.ok) throw new Error("Failed to fetch Github data");
    
    const data = await res.json();
    githubData.value = data;
    
    // Set selected year to the latest available year
    if (data.years && data.years.length > 0) {
      selectedYear.value = data.years[0].year.toString();
    }
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchGitHubData();
});

const availableYears = computed(() => {
  // Return years in chronological order (oldest left, newest right)
  return githubData.value.years ? [...githubData.value.years].slice(0, 5).reverse() : [];
});

const selectedYearTotal = computed(() => {
  const yearObj = githubData.value.years?.find(y => y.year.toString() === selectedYear.value);
  return yearObj ? yearObj.total : 0;
});

const currentYearData = computed(() => {
  if (!githubData.value.contributions) return [];
  // Filter and sort contributions for the selected year only
  return githubData.value.contributions
    .filter(c => c.date.startsWith(selectedYear.value))
    .sort((a, b) => a.date.localeCompare(b.date));
});

const paddingDays = computed(() => {
  if (currentYearData.value.length === 0) return 0;
  // Calculate day of the week for the first contribution date in the selected year
  return new Date(currentYearData.value[0].date).getDay();
});

const selectYear = (year) => {
  selectedYear.value = year.toString();
};

const getIntensityColor = (intensity) => {
  const intensities = {
    0: 'rgba(255, 255, 255, 0.03)',
    1: 'rgba(124, 58, 237, 0.3)',
    2: 'rgba(124, 58, 237, 0.55)',
    3: 'rgba(124, 58, 237, 0.8)',
    4: 'rgba(124, 58, 237, 1)'
  };
  return intensities[intensity] || intensities[0];
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
