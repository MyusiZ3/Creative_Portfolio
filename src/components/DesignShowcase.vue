<template>
  <div class="mt-24 lg:mt-32">
    <!-- Section Title -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-6"
    >
      <div class="max-w-2xl text-left">
        <div class="inline-block bg-violet-500/10 text-violet-400 font-['Poppins'] font-bold text-[12px] lg:text-[14px] px-4 py-1.5 rounded-full mb-4 border border-violet-500/20">
          Design Showcase
        </div>
        <h3 class="text-3xl lg:text-[40px] font-bold font-['Poppins'] text-white title-glow">
          Visual Explorations
        </h3>
        <p class="text-[#8E949F] font-['Roboto'] text-sm lg:text-[15px] mt-4 leading-relaxed">
          A curated collection of my creative works, ranging from digital illustration, UI/UX conceptualization, to brand identity.
        </p>
      </div>
      
      <!-- Optional static desktop arrows replacement or just simple text -->
      <div class="hidden md:flex items-center gap-2 text-[#8E949F] font-['Roboto'] text-sm">
        <span>Scroll</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>

    <!-- Showcase Container -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200 } }"
      class="relative w-full group/container"
    >
      <!-- Navigation Arrows -->
      <button 
        @click.stop="scroll('left')"
        class="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#171717] border border-white/10 text-white flex items-center justify-center opacity-0 md:group-hover/container:opacity-100 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 shadow-xl ring-4 ring-[#171717]"
      >
        <i class="bi bi-chevron-left text-lg"></i>
      </button>

      <button 
        @click.stop="scroll('right')"
        class="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#171717] border border-white/10 text-white flex items-center justify-center opacity-0 md:group-hover/container:opacity-100 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 shadow-xl ring-4 ring-[#171717]"
      >
        <i class="bi bi-chevron-right text-lg"></i>
      </button>

      <!-- Horizontal Scroll Area -->
      <div 
        ref="scrollContainer"
        class="flex gap-4 lg:gap-6 overflow-x-auto pb-6 pt-2 snap-x no-scrollbar mask-fade scroll-smooth relative z-10"
      >
        <div
          v-for="(design, index) in designs"
          :key="design.id"
          @click="openDesign(design)"
          class="flex-none w-[85%] md:w-[45%] lg:w-[calc(33.333%-1rem)] aspect-4/3 lg:aspect-video rounded-2xl overflow-hidden cursor-pointer snap-start transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)] shadow-xl relative group border border-white/5"
        >
          <img 
            :src="design.image" 
            :alt="design.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Minimalist Hover Overlay -->
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-violet-400 text-xs font-bold uppercase tracking-wider mb-1">{{ design.category }}</p>
              <h4 class="text-white text-lg font-['Poppins'] font-semibold">{{ design.title }}</h4>
            </div>
          </div>
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
            class="relative w-full max-w-4xl max-h-[90vh] bg-[#171717] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <!-- Close Button -->
            <button 
              @click="closeDesign"
              class="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 w-10 h-10 rounded-full bg-black/40 lg:bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            >
              <i class="bi bi-x-lg text-lg"></i>
            </button>

            <!-- Image Section -->
            <div class="w-full lg:w-3/5 h-[300px] lg:h-[600px] bg-[#111] overflow-hidden relative flex items-center justify-center">
              <img 
                :src="selectedDesign.image" 
                :alt="selectedDesign.title"
                class="w-full h-full object-contain p-4 lg:p-8"
              />
              <div class="absolute inset-0 bg-linear-to-t from-[#171717] to-transparent lg:hidden"></div>
            </div>

            <!-- Text Section -->
            <div class="w-full lg:w-2/5 p-6 lg:p-10 overflow-y-auto custom-scrollbar flex flex-col justify-center">
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
                  <p class="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">Tools</p>
                  <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.tools }}</p>
                </div>
                <div>
                  <p class="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">Date</p>
                  <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.date }}</p>
                </div>
              </div>

              <div class="mt-auto">
                <button @click="closeDesign" class="group relative flex items-center justify-center gap-2 w-full py-3.5 bg-white text-[#171717] font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-300">
                  <span>Close Detail</span>
                  <i class="bi bi-x text-lg transition-transform duration-300 group-hover:scale-110"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const selectedDesign = ref(null);
const scrollContainer = ref(null);

const scroll = (direction) => {
  if (scrollContainer.value) {
    const firstItem = scrollContainer.value.firstElementChild;
    const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : 300; // width + gap
    if (direction === 'left') {
      scrollContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};

const designs = [
  {
    id: 1,
    title: 'Perempuan & Ekonomi Berkelanjutan',
    category: 'Infographic Design',
    image: '/images/designs/design_women_empowerment_1773250246918.png',
    description: 'A detailed infographic design highlighting the importance of women in sustainable economic growth. This project involved deep research into economic data and translating complex statistics into visual storytelling.',
    tools: 'Adobe Illustrator, Figma',
    date: 'February 2024'
  },
  {
    id: 2,
    title: 'Mental Health is Health',
    category: 'Digital Illustration',
    image: '/images/designs/design_mental_health_1773250268763.png',
    description: 'A creative conceptual art piece focused on mental health awareness. The illustration represents the beauty and complexity of the human mind through vibrant colors and organic shapes.',
    tools: 'Procreate, Adobe Photoshop',
    date: 'January 2024'
  },
  {
    id: 3,
    title: 'Munchy Munch Branding',
    category: 'Brand Identity',
    image: '/images/designs/design_munchy_munch_1773250287724.png',
    description: 'Full branding project for a modern snacks company. This included logo design, color palette selection, and toy-like food illustrations to appeal to a younger audience.',
    tools: 'Figma, Illustrator',
    date: 'December 2023'
  },
  {
    id: 4,
    title: 'Creative Art Showcase',
    category: 'Digital Art',
    image: '/images/projects/iudex.webp',
    description: 'A collection of digital art experiments exploring lighting, texture, and composition.',
    tools: 'Photoshop, Blender',
    date: 'November 2023'
  },
  {
    id: 5,
    title: 'App UI Exploration',
    category: 'UI/UX Design',
    image: '/images/projects/empedu.webp',
    description: 'A modern, clean mobile application interface conceptualizing new ways to display interactive educational content with smooth micro-interactions.',
    tools: 'Figma, After Effects',
    date: 'October 2023'
  }
];

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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mask-fade {
  mask-image: linear-gradient(to right, black 85%, transparent 100%);
}

/* App Store Style Expansion Transition */
.app-store-expand-enter-active,
.app-store-expand-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.app-store-expand-enter-from,
.app-store-expand-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.app-store-expand-enter-to,
.app-store-expand-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
