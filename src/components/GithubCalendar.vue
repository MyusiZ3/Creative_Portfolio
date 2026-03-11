<template>
  <div class="w-full bg-[#1D1D1D]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl">
    
    <!-- Header: Title and Total -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div class="flex items-center gap-3">
        <i class="bi bi-github text-white text-xl"></i>
        <h3 class="text-white font-['Poppins'] font-bold text-lg">
          {{ selectedYearTotal }} Contributions in {{ selectedYear }}
        </h3>
      </div>
      
      <!-- Year Tabs (Scrollable on small screens) -->
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
    <div v-else class="w-full overflow-x-auto scrollbar-hide pb-2">
      <div class="min-w-[800px] flex gap-2">
        
        <!-- Day Labels -->
        <div class="flex flex-col gap-[4px] pt-[20px] text-[10px] text-white/40 font-['Roboto'] font-medium pr-2">
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
          <!-- Month Labels (Simplified) -->
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

          <!-- Heatmap -->
          <div class="grid grid-flow-col grid-rows-7 gap-[4px]">
            <!-- Padded empty days -->
            <div
              v-for="n in paddingDays"
              :key="'pad-' + n"
              class="w-[12px] h-[12px]"
            ></div>

            <div
              v-for="(day, index) in currentYearData"
              :key="day.date"
              class="w-[12px] h-[12px] rounded-[2px] transition-all duration-300 hover:scale-125 hover:z-50 cursor-pointer relative group"
              :style="{ backgroundColor: getIntensityColor(day.intensity) }"
            >
              <!-- Tooltip -->
              <div 
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#1a1a2e] text-white text-[11px] font-['Roboto'] rounded-md font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl border border-white/10"
              >
                {{ day.count }} contributions on {{ formatDate(day.date) }}
                <!-- Tooltip Arrow -->
                <div class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#1a1a2e]"></div>
              </div>
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
    // We use api.codetabs.com as a CORS proxy since the vercel app doesn't send CORS headers
    const res = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://github-contributions.vercel.app/api/v1/${username}`);
    if (!res.ok) throw new Error("Failed to fetch Github data");
    
    const data = await res.json();
    githubData.value = data;
    
    // Default to the most recent year that has data, or current year
    if (data.years && data.years.length > 0) {
      selectedYear.value = data.years[0].year;
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
  // Only show the last 5 years, older years on the left to newer years on the right
  return githubData.value.years.slice(0, 5).reverse() || [];
});

const selectedYearTotal = computed(() => {
  const yearObj = availableYears.value.find(y => y.year === selectedYear.value);
  return yearObj ? yearObj.total : 0;
});

const currentYearData = computed(() => {
  if (!githubData.value.contributions) return [];
  // Filter contributions to only those in the selected year
  return githubData.value.contributions
    .filter(c => c.date.startsWith(selectedYear.value))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
});

const paddingDays = computed(() => {
  if (currentYearData.value.length === 0) return 0;
  // Get the day of the week for Jan 1st of the selected year (0 = Sunday, 1 = Monday...)
  const firstDate = new Date(currentYearData.value[0].date);
  return firstDate.getDay();
});

const selectYear = (year) => {
  selectedYear.value = year;
};

// Map GitHub's intensity (0-4) to theme-matched violet colors
const getIntensityColor = (intensity) => {
  const intensities = {
    0: 'rgba(255, 255, 255, 0.03)', // Empty / base
    1: 'rgba(124, 58, 237, 0.3)',   // Light
    2: 'rgba(124, 58, 237, 0.55)',  // Medium
    3: 'rgba(124, 58, 237, 0.8)',   // Dark
    4: 'rgba(124, 58, 237, 1)'      // Very Dark
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
/* Hide scrollbar for clean horizontal scrolling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
