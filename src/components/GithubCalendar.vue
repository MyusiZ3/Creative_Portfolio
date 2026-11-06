<template>
  <div
    ref="cardRef"
    class="w-full relative transition-colors duration-300"
    :class="
      isPixel
        ? 'bg-transparent text-[#f0f6fc] font-mono'
        : 'max-w-[828px] mx-auto bg-transparent border-y border-white/12 py-6'
    "
  >
    <div class="relative z-10">
      <!-- Header: Title and Year Selector (Flush with Heatmap Edges) -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-5 gap-3"
        :class="isPixel ? 'pb-4 border-b border-[#30363d]' : ''"
      >
        <div class="flex items-baseline gap-3">
          <h3
            class="tracking-tight text-left"
            :class="
              isPixel
                ? 'text-[#00ff66] font-silkscreen text-xs sm:text-sm uppercase tracking-wider font-semibold'
                : 'text-zinc-100 font-[\'Poppins\'] text-sm sm:text-base font-semibold'
            "
          >
            <template v-if="lang === 'ID'">
              <span class="font-mono font-bold text-white">{{
                selectedYearTotal.toLocaleString('id-ID')
              }}</span>
              <span class="text-zinc-400 font-normal ml-1.5"
                >kontribusi pada {{ selectedYear }}</span
              >
            </template>
            <template v-else>
              <span class="font-mono font-bold text-white">{{
                selectedYearTotal.toLocaleString('en-US')
              }}</span>
              <span class="text-zinc-400 font-normal ml-1.5"
                >contributions in {{ selectedYear }}</span
              >
            </template>
          </h3>
        </div>

        <!-- Year Selector: Sharp Editorial Tabs (No Puffy Pill) -->
        <div
          v-if="availableYears.length > 0"
          class="flex overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-hide"
        >
          <div
            :class="
              isPixel
                ? 'flex gap-2'
                : 'flex items-center gap-1 border-b border-white/10'
            "
          >
            <button
              v-for="year in availableYears"
              :key="year.year"
              type="button"
              @click="selectYear(year.year)"
              class="transition-all duration-150 whitespace-nowrap text-xs tracking-wider cursor-pointer"
              :class="[
                isPixel
                  ? 'font-silkscreen px-3 py-1 font-medium'
                  : 'font-mono px-2.5 py-1.5 -mb-px border-b-2',
                selectedYear === year.year
                  ? isPixel
                    ? 'bg-[#00ff66] text-black font-bold border-2 border-black shadow-[2px_2px_0px_#000000]'
                    : 'border-violet-400 text-white font-bold'
                  : isPixel
                    ? 'bg-[#0d1117] text-[#8b949e] border border-[#30363d] hover:text-[#00ff66] hover:border-[#00ff66]'
                    : 'border-transparent text-zinc-500 hover:text-zinc-200',
              ]"
            >
              {{ year.year }}
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div
        v-if="loading"
        class="w-full h-36 flex flex-col items-center justify-center gap-2.5 text-xs"
        :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-400 font-[\'Roboto\']'"
      >
        <div
          class="w-6 h-6 border-2 rounded-full animate-spin"
          :class="
            isPixel
              ? 'border-[#00ff66]/20 border-t-[#00ff66]'
              : 'border-violet-400/20 border-t-violet-400'
          "
        ></div>
        <span>
          {{
            lang === 'ID'
              ? 'Memuat riwayat kontribusi GitHub...'
              : 'Loading GitHub contribution history...'
          }}
        </span>
      </div>

      <!-- Calendar Grid Wrapper -->
      <div v-else-if="currentYearData.length > 0" class="flex flex-col gap-4">
        <!-- Calendar Scroll Area -->
        <div class="w-full overflow-x-auto scrollbar-hide pb-1">
          <div class="inline-flex items-start gap-2.5 min-w-max">
            <!-- Day Labels -->
            <div
              class="flex flex-col justify-between pt-5.5 pb-0.5 text-[10px] w-7 shrink-0 h-31.5 select-none text-left font-mono"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-500'"
            >
              <span class="h-[12px] leading-[12px]">{{ lang === 'ID' ? 'Sen' : 'Mon' }}</span>
              <span class="h-[12px] leading-[12px]">{{ lang === 'ID' ? 'Rab' : 'Wed' }}</span>
              <span class="h-[12px] leading-[12px]">{{ lang === 'ID' ? 'Jum' : 'Fri' }}</span>
            </div>

            <!-- The Grid & Week-Aligned Month Labels -->
            <div class="relative">
              <!-- Month Labels Positioned by Week Column Index (12px cell + 3px gap = 15px/col) -->
              <div
                class="relative h-4 mb-1.5 select-none text-[10px] font-mono"
                :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-500'"
              >
                <span
                  v-for="m in monthMarkers"
                  :key="m.label"
                  class="absolute top-0 whitespace-nowrap"
                  :style="{ left: `${m.weekIndex * 15}px` }"
                >
                  {{ m.label }}
                </span>
              </div>

              <!-- Heatmap -->
              <div class="grid grid-flow-col grid-rows-7 gap-[3px] w-max">
                <!-- Padded empty days for start of year -->
                <div
                  v-for="n in paddingDays"
                  :key="'pad-' + n"
                  class="w-[12px] h-[12px] bg-transparent"
                ></div>

                <!-- Actual days -->
                <div
                  v-for="day in currentYearData"
                  :key="day.date"
                  class="w-[12px] h-[12px] transition-transform duration-150 hover:scale-125 cursor-pointer relative"
                  :class="isPixel ? 'rounded-none' : 'rounded-[1.5px]'"
                  :style="{
                    backgroundColor: getIntensityColor(day.intensity),
                  }"
                  @mouseenter="showTooltip($event, day)"
                  @mouseleave="hideTooltip"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Unclipped Tooltip -->
        <div
          v-if="tooltipVisible"
          class="absolute z-50 bg-zinc-950 border border-white/15 px-3 py-1.5 rounded-sm text-white pointer-events-none shadow-2xl transition-all duration-75 flex flex-col gap-0.5 whitespace-nowrap"
          :style="{ left: `${tooltipX}px`, top: `${tooltipY}px` }"
        >
          <span class="font-semibold text-zinc-100 text-[11px] font-mono">
            {{ formatTooltipCount(tooltipCount) }}
          </span>
          <span class="text-zinc-400 text-[10px] font-['Roboto']">{{ tooltipDate }}</span>
        </div>

        <!-- Footer Row: GitHub Profile Link on left, Legend on right -->
        <div
          class="flex flex-wrap justify-between items-center gap-3 pt-1 w-full"
          :class="isPixel ? 'pt-3 border-t border-[#30363d]' : ''"
        >
          <!-- GitHub Link -->
          <div>
            <a
              v-if="!isPixel"
              :href="`https://github.com/${username}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors font-mono group"
            >
              <i class="bi bi-github text-zinc-300 group-hover:text-white"></i>
              <span class="underline-offset-4 group-hover:underline">github.com/{{ username }}</span>
              <i
                class="bi bi-arrow-up-right text-[10px] text-zinc-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              ></i>
            </a>
            <a
              v-else
              :href="`https://github.com/${username}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#8b949e] hover:text-[#00ff66] text-xs font-mono transition-colors"
            >
              github.com/{{ username }}
            </a>
          </div>

          <!-- Legend -->
          <div class="flex items-center gap-2 select-none font-mono">
            <span
              class="text-[10px] uppercase tracking-wider"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-500'"
            >
              {{ lang === 'ID' ? 'Sedikit' : 'Less' }}
            </span>
            <div class="flex gap-[3px]">
              <div
                v-for="lvl in [0, 1, 2, 3, 4]"
                :key="lvl"
                class="w-[11px] h-[11px]"
                :class="isPixel ? 'rounded-none' : 'rounded-[1.5px]'"
                :style="{ backgroundColor: getIntensityColor(lvl) }"
              ></div>
            </div>
            <span
              class="text-[10px] uppercase tracking-wider"
              :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-500'"
            >
              {{ lang === 'ID' ? 'Banyak' : 'More' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Error / Empty State Fallback -->
      <div
        v-else
        class="w-full h-36 flex flex-col items-center justify-center gap-2 text-xs"
        :class="isPixel ? 'text-[#8b949e] font-silkscreen' : 'text-zinc-400 font-[\'Roboto\']'"
      >
        <i class="bi bi-exclamation-triangle text-amber-400 text-xl"></i>
        <span>
          {{
            lang === 'ID'
              ? 'Gagal memuat data kontribusi GitHub. Periksa koneksi lalu coba kembali.'
              : 'Unable to load GitHub contribution data. Check your connection and retry.'
          }}
        </span>
        <button
          type="button"
          @click="fetchGitHubData(true)"
          class="px-4 py-1.5 font-semibold text-xs transition-all duration-200 mt-1 flex items-center gap-2 cursor-pointer"
          :class="
            isPixel
              ? 'bg-[#00ff66] hover:bg-[#00cc52] text-black font-silkscreen font-bold border border-black shadow-[2px_2px_0px_#000000]'
              : 'border border-white/20 text-white hover:bg-white/10 font-mono'
          "
        >
          <i class="bi bi-arrow-clockwise"></i>
          <span>{{ lang === 'ID' ? 'Coba Lagi' : 'Retry' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
})

const { currentTheme } = useTheme()
const { lang } = useLanguage()

const activeTheme = computed(() => props.theme || currentTheme.value || 'editorial')
const isPixel = computed(() => activeTheme.value === 'pixel')

const username = 'MyusiZ3'
const CACHE_KEY = `gh_contribs_${username}_v2`
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes

const cardRef = ref(null)
const loading = ref(true)
const githubData = ref({ years: [], contributions: [] })
const selectedYear = ref(new Date().getFullYear().toString())

// Tooltip States
const tooltipVisible = ref(false)
const tooltipCount = ref(0)
const tooltipDate = ref('')
const tooltipX = ref(0)
const tooltipY = ref(0)

const parseLocalDate = (dateString) => {
  const parts = (dateString || '').split('-').map(Number)
  if (parts.length === 3 && !Number.isNaN(parts[0])) {
    return new Date(parts[0], parts[1] - 1, parts[2])
  }
  return new Date(dateString)
}

const parseResponse = (data) => {
  let normalizedYears = []
  let normalizedContribs = []

  if (data.total && typeof data.total === 'object') {
    const yearsList = Object.keys(data.total).sort((a, b) => Number(b) - Number(a))
    normalizedYears = yearsList.map((y) => ({
      year: y.toString(),
      total: data.total[y],
    }))
    normalizedContribs = (data.contributions || []).map((c) => ({
      date: c.date,
      count: c.count || 0,
      intensity: c.level !== undefined ? c.level : c.intensity || 0,
    }))
  } else if (data.years && Array.isArray(data.years)) {
    normalizedYears = [...data.years]
      .sort((a, b) => Number(b.year) - Number(a.year))
      .map((y) => ({
        year: y.year.toString(),
        total: y.total,
      }))
    normalizedContribs = (data.contributions || []).map((c) => ({
      date: c.date,
      count: c.count || 0,
      intensity: c.intensity !== undefined ? c.intensity : c.level || 0,
    }))
  }

  return { years: normalizedYears, contributions: normalizedContribs }
}

const applyNormalizedData = (normalized) => {
  githubData.value = normalized
  const latestWithActivity = normalized.years.find((y) => y.total > 0)
  selectedYear.value = (latestWithActivity || normalized.years[0]).year
}

const fetchGitHubData = async (forceRefresh = false) => {
  loading.value = true

  if (!forceRefresh) {
    try {
      const rawCache = sessionStorage.getItem(CACHE_KEY)
      if (rawCache) {
        const parsed = JSON.parse(rawCache)
        if (
          parsed &&
          parsed.timestamp &&
          Date.now() - parsed.timestamp < CACHE_TTL_MS &&
          parsed.data?.years?.length > 0
        ) {
          applyNormalizedData(parsed.data)
          loading.value = false
          return
        }
      }
    } catch {
      // Ignore storage access errors
    }
  }

  const endpoints = [
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    `https://github-contributions.vercel.app/api/v1/${username}`,
  ]

  for (const url of endpoints) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 4500)

      const res = await fetch(url, { signal: controller.signal })
      clearTimeout(timeoutId)

      if (!res.ok) continue
      const data = await res.json()
      const normalized = parseResponse(data)

      if (normalized.years.length > 0) {
        applyNormalizedData(normalized)
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: normalized }),
          )
        } catch {
          // Ignore quota errors
        }
        loading.value = false
        return
      }
    } catch {
      // Continue to next endpoint if failed or timed out
    }
  }

  loading.value = false
}

onMounted(() => {
  fetchGitHubData()
})

const availableYears = computed(() => {
  return githubData.value.years ? [...githubData.value.years].slice(0, 5) : []
})

const selectedYearTotal = computed(() => {
  const yearObj = githubData.value.years?.find((y) => y.year.toString() === selectedYear.value)
  return yearObj ? yearObj.total : 0
})

const currentYearData = computed(() => {
  if (!githubData.value.contributions) return []
  return githubData.value.contributions
    .filter((c) => c.date.startsWith(selectedYear.value))
    .sort((a, b) => a.date.localeCompare(b.date))
})

const paddingDays = computed(() => {
  if (currentYearData.value.length === 0) return 0
  return parseLocalDate(currentYearData.value[0].date).getDay()
})

const monthMarkers = computed(() => {
  const namesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const namesId = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  const names = lang.value === 'ID' ? namesId : namesEn

  const markers = []
  let lastMonth = -1
  let lastWeekIdx = -3

  currentYearData.value.forEach((day, idx) => {
    const d = parseLocalDate(day.date)
    const m = d.getMonth()
    if (m !== lastMonth) {
      const weekIndex = Math.floor((idx + paddingDays.value) / 7)
      if (weekIndex - lastWeekIdx >= 2) {
        markers.push({
          label: names[m],
          weekIndex,
        })
        lastWeekIdx = weekIndex
      }
      lastMonth = m
    }
  })

  return markers
})

const selectYear = (year) => {
  selectedYear.value = year.toString()
}

const formatTooltipCount = (count) => {
  if (lang.value === 'ID') {
    return count === 0 ? 'Tidak ada kontribusi' : `${count} kontribusi`
  }
  if (count === 0) return 'No contributions'
  return count === 1 ? '1 contribution' : `${count} contributions`
}

const showTooltip = (event, day) => {
  tooltipCount.value = day.count
  tooltipDate.value = formatDate(day.date)

  const cell = event.currentTarget
  const container = cardRef.value
  if (!container) return

  const cellRect = cell.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  const rawX = cellRect.left - containerRect.left - 60 + cellRect.width / 2
  const maxLeft = Math.max(4, containerRect.width - 155)
  tooltipX.value = Math.min(Math.max(4, rawX), maxLeft)
  tooltipY.value = Math.max(0, cellRect.top - containerRect.top - 46)
  tooltipVisible.value = true
}

const hideTooltip = () => {
  tooltipVisible.value = false
}

const getIntensityColor = (intensity) => {
  if (isPixel.value) {
    const pixelIntensities = {
      0: 'rgba(255, 255, 255, 0.05)',
      1: 'rgba(0, 255, 102, 0.25)',
      2: 'rgba(0, 255, 102, 0.50)',
      3: 'rgba(0, 255, 102, 0.75)',
      4: '#00ff66',
    }
    return pixelIntensities[intensity] || pixelIntensities[0]
  }
  const editorialIntensities = {
    0: 'rgba(255, 255, 255, 0.06)',
    1: 'rgba(139, 92, 246, 0.30)',
    2: 'rgba(139, 92, 246, 0.55)',
    3: 'rgba(139, 92, 246, 0.80)',
    4: '#a78bfa',
  }
  return editorialIntensities[intensity] || editorialIntensities[0]
}

const formatDate = (dateString) => {
  const dateObj = parseLocalDate(dateString)
  return dateObj.toLocaleDateString(lang.value === 'ID' ? 'id-ID' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
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
