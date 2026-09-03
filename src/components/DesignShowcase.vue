<template>
  <div class="mt-24 lg:mt-36">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
    >
      <!-- Left Column: Editorial Info & Balanced Grid -->
      <div class="lg:col-span-5 text-left flex flex-col justify-center">
        <div class="inline-block w-max bg-violet-500/10 text-violet-400 font-['Poppins'] font-bold text-[11px] lg:text-[12px] px-4 py-1.5 rounded-full mb-6 border border-violet-500/20">
          {{ t('ds_badge') }}
        </div>
        <h3 class="text-3xl lg:text-[44px] font-bold font-['Poppins'] text-white leading-tight mb-6">
          {{ t('ds_title') }}
        </h3>
        <p class="text-[#8E949F] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed mb-8">
          {{ t('ds_desc') }}
        </p>

        <!-- Design Explorations Index (Extremely clean, authentic & interactive) -->
        <div class="border-t border-white/10 pt-8 space-y-3">
          <p class="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">
            {{ lang === 'ID' ? 'Daftar Eksplorasi' : 'Exploration Index' }}
          </p>
          <div 
            v-for="(design, index) in designs" 
            :key="'index-' + design.id"
            @click="goToCard(index)"
            class="flex items-center justify-between py-2.5 border-b border-white/5 cursor-pointer group/item transition-all duration-300"
            :class="index === activeIndex ? 'text-violet-400 border-violet-500/20' : 'text-gray-400 hover:text-white border-white/5'"
          >
            <div class="flex items-center gap-3">
              <span 
                class="font-mono text-xs transition-colors duration-300"
                :class="index === activeIndex ? 'text-violet-400' : 'text-gray-600 group-hover/item:text-violet-400'"
              >
                0{{ index + 1 }}
              </span>
              <span 
                class="text-xs lg:text-[13px] font-medium font-['Poppins'] transition-all duration-300"
                :class="index === activeIndex ? 'translate-x-1 font-semibold' : 'group-hover/item:translate-x-1'"
              >
                {{ design.title }}
              </span>
            </div>
            <span 
              class="font-mono text-[10px] transition-colors duration-300"
              :class="index === activeIndex ? 'text-violet-400/80' : 'text-gray-600 group-hover/item:text-gray-400'"
            >
              {{ design.date }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: iOS Stacked Cards -->
      <div class="lg:col-span-7 flex flex-col items-center select-none overflow-visible">
        <!-- Deck Wrapper with hover listener -->
        <div 
          class="card-stack-container"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <!-- Stacked Cards Loop -->
          <div
            v-for="(design, index) in designs"
            :key="design.id"
            class="stacked-card group"
            :style="getCardStyle(index)"
            @click="handleCardClick(index)"
          >
            <!-- Elegant Glass Header Inside Card (iOS-style window controls) -->
            <div class="p-3 bg-zinc-900 border-b border-white/5 flex justify-between items-center z-20">
              <div class="flex items-center gap-1.5">
                <div class="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                <div class="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-2 h-2 rounded-full bg-[#27c93f]"></div>
              </div>
              <span class="text-[8px] font-mono text-white/30 tracking-widest uppercase font-semibold">PREVIEW MOCKUP</span>
            </div>

            <!-- Card Content / Image -->
            <div class="relative flex-1 overflow-hidden bg-black/40">
              <ProjectImage 
                :src="design.image" 
                :alt="design.title"
                cssClass="transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            <!-- Premium Solid Card Footer (Replaces AI Gradient Fade) -->
            <div class="bg-zinc-950 p-5 border-t border-white/5 text-left z-10">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-violet-400 text-[10px] font-mono font-bold tracking-widest uppercase">{{ design.category }}</span>
                <span class="text-gray-500 text-[9px] font-mono font-semibold">{{ design.date }}</span>
              </div>
              <h4 class="text-white text-base lg:text-lg font-bold font-['Poppins'] mb-1.5">{{ design.title }}</h4>
              <p class="text-gray-400 text-xs font-['Roboto'] line-clamp-2 leading-relaxed font-light">{{ design.description }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation & Pagination Indicators Below Stack -->
        <div class="flex items-center gap-6 mt-12 z-30">
          <!-- Prev Button -->
          <button 
            @click="prevCard"
            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
            title="Previous"
          >
            <i class="bi bi-chevron-left text-sm"></i>
          </button>

          <!-- Dynamic Dots (iOS Style Page Indicator) -->
          <div class="flex items-center gap-2.5">
            <button 
              v-for="(design, index) in designs" 
              :key="'dot-' + design.id"
              @click="goToCard(index)"
              class="h-1.5 rounded-full transition-all duration-500 cursor-pointer"
              :class="index === activeIndex 
                ? 'w-6 bg-violet-600' 
                : 'w-1.5 bg-white/20 hover:bg-white/40'"
            ></button>
          </div>

          <!-- Next Button -->
          <button 
            @click="nextCard"
            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
            title="Next"
          >
            <i class="bi bi-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Expansion Modal (App Store Style) -->
    <Teleport to="body">
      <transition name="app-store-expand">
        <div 
          v-if="selectedDesign" 
          class="fixed inset-0 z-10000 flex items-center justify-center p-4 lg:p-10"
        >
          <!-- Backdrop -->
          <div 
            class="absolute inset-0 bg-black/80 backdrop-blur-lg"
            @click="closeDesign"
          ></div>

          <!-- Content Card Minimalist -->
          <div 
            class="relative w-full max-w-4xl max-h-[90vh] bg-[#171717] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-violet-500/10"
          >
            <!-- Close Button -->
            <button 
              @click="closeDesign"
              class="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 w-10 h-10 rounded-full bg-black/40 lg:bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <i class="bi bi-x-lg text-lg"></i>
            </button>

            <!-- Image Section -->
            <div class="w-full lg:w-3/5 h-[300px] lg:h-[600px] bg-[#111] overflow-hidden relative flex items-center justify-center">
              <ProjectImage 
                :src="selectedDesign.image" 
                :alt="selectedDesign.title"
                cssClass="p-4 lg:p-8 !object-contain"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent lg:hidden"></div>
            </div>

            <!-- Text Section -->
            <div class="w-full lg:w-2/5 p-6 lg:p-10 overflow-y-auto custom-scrollbar flex flex-col justify-center bg-zinc-900/40">
              <span class="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-md mb-4 w-max">
                {{ selectedDesign.category }}
              </span>
              <h4 class="text-2xl lg:text-3xl font-bold text-white mb-4 font-['Poppins']">
                {{ selectedDesign.title }}
              </h4>
              <p class="text-[#a0a5b0] text-sm lg:text-[15px] leading-relaxed mb-8 font-['Roboto'] font-light">
                {{ selectedDesign.description }}
              </p>
              
              <div class="space-y-5 mb-8">
                <div>
                  <p class="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">{{ t('ds_tools') }}</p>
                  <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.tools }}</p>
                </div>
                <div>
                  <p class="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">{{ t('ds_date') }}</p>
                  <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import ProjectImage from './common/ProjectImage.vue';

const { t, lang } = useLanguage();

const selectedDesign = ref(null);
const activeIndex = ref(0);
const isHovered = ref(false);

const nextCard = () => {
  activeIndex.value = (activeIndex.value + 1) % designs.value.length;
};

const prevCard = () => {
  activeIndex.value = (activeIndex.value - 1 + designs.value.length) % designs.value.length;
};

const goToCard = (index) => {
  activeIndex.value = index;
};

const handleCardClick = (index) => {
  const total = designs.value.length;
  let diff = index - activeIndex.value;
  if (diff < 0) diff += total;

  if (diff === 0) {
    openDesign(designs.value[index]);
  } else {
    activeIndex.value = index;
  }
};

const getCardStyle = (index) => {
  const total = designs.value.length;
  let diff = index - activeIndex.value;
  
  if (diff < 0) {
    diff += total;
  }
  
  // We only show the top 3 cards in the visible stack
  if (diff >= 3) {
    return {
      opacity: 0,
      transform: 'scale(0.8) translateY(30px) rotate(0deg)',
      pointerEvents: 'none',
      zIndex: 0,
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    };
  }

  // iOS Stack parameters
  let scale = 1 - diff * 0.05;
  let translateY = diff * 15; // Shift down
  let rotate = diff === 1 ? 2 : diff === 2 ? -2.5 : 0; // Natural slightly messy stack look
  let opacity = 1 - diff * 0.35;
  let zIndex = 30 - diff;

  // On hover, fan out slightly for extra premium tactile feedback
  if (isHovered.value) {
    if (diff === 1) {
      translateY = 32;
      rotate = 4;
      scale = 0.96;
    } else if (diff === 2) {
      translateY = 64;
      rotate = -5;
      scale = 0.92;
    }
  }

  return {
    transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
    opacity: opacity,
    zIndex: zIndex,
    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    pointerEvents: diff === 0 || isHovered.value ? 'auto' : 'none',
  };
};

const designs = computed(() => {
  const isId = lang.value === 'ID';
  return [
    {
      id: 1,
      title: 'iOS Weather App Concept',
      category: isId ? 'Desain UI/UX' : 'UI/UX Design',
      image: '/images/projects/UAsprak/u_asprak.webp',
      description: isId 
        ? 'Rancangan aplikasi cuaca minimalis ala iOS dengan tipografi kontras tinggi, visualisasi data berbasis bento-grid yang bersih, dan efek glassmorphism modern untuk kemudahan navigasi.'
        : 'A minimalist iOS weather application design featuring high-contrast typography, clean bento-grid-based data visualization, and modern glassmorphic panels for seamless navigation.',
      tools: 'Figma, Sketch',
      date: isId ? 'Maret 2025' : 'March 2025'
    },
    {
      id: 2,
      title: 'Productivity Bento Dashboard',
      category: isId ? 'Desain Web' : 'Web Design',
      image: '/images/projects/Iudex/iudex.webp',
      description: isId 
        ? 'Eksplorasi bento grid untuk dasbor produktivitas pribadi. Menyajikan widget modular, visualisasi grafik interaktif, dan palet warna monokromatik yang menenangkan mata saat bekerja.'
        : 'A bento grid layout exploration for a personal productivity dashboard. Features modular widgets, interactive chart visualizations, and a dark monochromatic color palette designed for high-focus sessions.',
      tools: 'Figma, Illustrator',
      date: isId ? 'Januari 2025' : 'January 2025'
    },
    {
      id: 3,
      title: 'Apple Music Player Redesign',
      category: isId ? 'Desain UI/UX' : 'UI/UX Design',
      image: '/images/projects/Empedu/empedu.webp',
      description: isId 
        ? 'Redesain konseptual pemutar musik Apple dengan fokus pada kemudahan aksesibilitas satu tangan, transisi mikro yang mulus, dan tipografi judul yang tebal serta ekspresif.'
        : 'A conceptual redesign of the Apple Music player focused on one-handed reachability, smooth micro-interactions, and bold, expressive editorial title layouts.',
      tools: 'Figma, After Effects',
      date: isId ? 'Desember 2024' : 'December 2024'
    },
    {
      id: 4,
      title: 'Minimal Travel Planner App',
      category: isId ? 'Desain Mobile' : 'Mobile Design',
      image: '/images/projects/Mathrift/mathrift.webp',
      description: isId 
        ? 'Aplikasi perencana perjalanan minimalis yang menggunakan kartu frosted glass, navigasi berbasis gestur gesek yang intuitif, serta kurasi fotografi kota yang bernilai estetika tinggi.'
        : 'A minimalist travel planner app featuring frosted glass cards, intuitive swipe-gesture-based navigation, and highly aesthetic urban photography curation.',
      tools: 'Figma, Photoshop',
      date: isId ? 'Oktober 2024' : 'October 2024'
    },
    {
      id: 5,
      title: 'Smart Home Control Hub',
      category: isId ? 'Desain Smart UI' : 'Smart UI Design',
      image: '/images/projects/Arch/arch.webp',
      description: isId 
        ? 'Pusat kendali rumah pintar berbasis grid modular dengan kendali cepat, persentase daya baterai terintegrasi, dan ikon kustom yang rapi guna memaksimalkan aksesibilitas pengguna.'
        : 'A modular grid-based smart home control center featuring rapid toggles, integrated battery life percentages, and clean custom icons to maximize user accessibility.',
      tools: 'Figma, Blender',
      date: isId ? 'September 2024' : 'September 2024'
    }
  ];
});

const openDesign = (design) => {
  selectedDesign.value = design;
  document.body.style.overflow = 'hidden';
};

const closeDesign = () => {
  selectedDesign.value = null;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.card-stack-container {
  position: relative;
  width: 100%;
  max-width: 440px;
  height: 420px;
  margin: 0 auto;
  perspective: 1000px;
}

@media (max-width: 480px) {
  .card-stack-container {
    max-width: 320px;
    height: 380px;
  }
}

.stacked-card {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 24px;
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transform-origin: center bottom;
  will-change: transform, opacity;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.3);
  border-radius: 10px;
}

/* App Store Style Expansion Transition */
.app-store-expand-enter-active,
.app-store-expand-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.app-store-expand-enter-from,
.app-store-expand-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.app-store-expand-enter-to,
.app-store-expand-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
