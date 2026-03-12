<template>
  <div class="mt-24 lg:mt-32">
    <!-- Section Title -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="text-center mb-10"
    >
      <h3 class="text-2xl lg:text-[32px] font-bold font-['Poppins'] text-white mb-4">
        Design Showcase
      </h3>
      <p class="text-[#8E949F] font-['Roboto'] text-sm lg:text-base max-w-xl mx-auto">
        A collection of my creative works, ranging from infographics to brand identity and digital art.
      </p>
    </div>

    <!-- Showcase Container -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :visible="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 200 } }"
      class="bg-[#1e1e24] border border-white/5 shadow-2xl rounded-3xl lg:rounded-[2.5rem] p-4 lg:p-6 relative overflow-hidden group/container"
    >
      <!-- Navigation Arrows -->
      <button 
        @click.stop="scroll('left')"
        class="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/container:opacity-100 hover:bg-violet-500 hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <i class="bi bi-chevron-left text-lg"></i>
      </button>

      <button 
        @click.stop="scroll('right')"
        class="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/container:opacity-100 hover:bg-violet-500 hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <i class="bi bi-chevron-right text-lg"></i>
      </button>

      <!-- Horizontal Scroll Area -->
      <div 
        ref="scrollContainer"
        class="flex gap-4 lg:gap-5 overflow-x-auto pb-2 snap-x no-scrollbar mask-fade scroll-smooth relative z-10"
      >
        <div
          v-for="(design, index) in designs"
          :key="design.id"
          @click="openDesign(design)"
          class="flex-none w-[80%] md:w-[45%] lg:w-[calc((100%-2.5rem)/3)] aspect-16/10 rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer snap-start transition-transform duration-500 hover:scale-[1.02] shadow-xl relative group"
        >

          <img 
            :src="design.image" 
            :alt="design.title"
            class="w-full h-full object-cover"
          />
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
              View Project
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

          <!-- Content Card -->
          <div 
            class="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a24] border border-white/10 rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.15)] flex flex-col lg:flex-row"
          >
            <!-- Close Button -->
            <button 
              @click="closeDesign"
              class="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-violet-500 hover:scale-110 flex items-center justify-center transition-all duration-300"
            >
              <i class="bi bi-x-lg text-lg"></i>
            </button>

            <!-- Image Section -->
            <div class="w-full lg:w-3/5 h-[300px] lg:h-auto overflow-hidden relative">
              <img 
                :src="selectedDesign.image" 
                :alt="selectedDesign.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-linear-to-t from-[#1a1a24] to-transparent lg:hidden"></div>
              <div class="absolute inset-0 bg-linear-to-r from-[#1a1a24] to-transparent hidden lg:block" style="left: auto; right: 0; width: 30%; transform: rotate(180deg);"></div>
            </div>

            <!-- Text Section -->
            <div class="w-full lg:w-2/5 p-8 lg:p-12 overflow-y-auto custom-scrollbar">
              <span class="inline-block px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-400 text-xs font-bold rounded-full mb-4">
                {{ selectedDesign.category }}
              </span>
              <h4 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-['Poppins']">
                {{ selectedDesign.title }}
              </h4>
              <p class="text-[#a0a5b0] text-sm lg:text-base leading-relaxed mb-8 font-['Roboto']">
                {{ selectedDesign.description }}
              </p>
              
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
                    <i class="bi bi-tools"></i>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider">Tools Used</p>
                    <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.tools }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
                    <i class="bi bi-calendar-event"></i>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-wider">Date</p>
                    <p class="text-sm text-gray-200 font-medium">{{ selectedDesign.date }}</p>
                  </div>
                </div>
              </div>

              <button class="w-full mt-10 py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:-translate-y-1 transition-all duration-300">
                View Full Project
              </button>
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
