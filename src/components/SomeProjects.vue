<template>
  <section id="projects" class="bg-white py-20 lg:pt-40 lg:pb-64 px-6 lg:px-40 relative overflow-hidden ">
    <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        loading="lazy"
        decoding="async"
        class="absolute top-0 right-0 w-32 lg:w-180 pointer-events-none transform  z-0"
      />
    <div class="container mx-auto relative z-10">
       
      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
        class="text-3xl lg:text-[48px] font-extrabold font-['Poppins'] text-[#1a1a2e] leading-tight mb-4"
      >
        {{ t('some_proj_title_1') }}<br />
        {{ t('some_proj_title_2') }}
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
        class="text-[#555] font-['Roboto'] text-[13px] lg:text-[15px] max-w-xl leading-relaxed mb-12 lg:mb-16"
      >
        {{ t('some_proj_desc') }}
      </p>

      <!-- Projects Grid -->
      <div class="grid grid-cols-3 gap-3 lg:gap-7">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          :ref="(el) => { if (el) cardRefs[index] = el }"
          v-motion
          :initial="{ opacity: 0, y: 40, scale: 0.97 }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              delay: index * 80,
              ease: 'easeOut',
            },
          }"
          class="project-card group cursor-pointer"
          @click="scrollToDetailedProject(index)"
        >
          <!-- Image Container -->
          <div
            class="relative rounded-2xl overflow-hidden aspect-4/3 mb-4 shadow-sm group-hover:shadow-xl group-hover:shadow-violet-900/10 transition-all duration-500"
            :style="{ backgroundColor: project.bg }"
          >
            <!-- Project Image (lazy loaded) -->
            <img
              v-if="visibleCards[index]"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              decoding="async"
              :fetchpriority="index < 3 ? 'high' : 'low'"
              class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
              :class="loadedCards[index] ? 'opacity-100' : 'opacity-0 scale-105 blur-sm'"
              @load="onImageLoaded(index)"
            />

            <!-- Loading spinner placeholder -->
            <div
              v-if="visibleCards[index] && !loadedCards[index]"
              class="absolute inset-0 flex items-center justify-center"
            >
              <div class="w-7 h-7 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
            </div>

            <!-- Elegant gradient overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/70 via-[#1a1a2e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Glassmorphic View Icon -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
              <div class="w-10 h-10 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                <i class="bi bi-arrow-up-right text-lg lg:text-xl"></i>
              </div>
            </div>
          </div>

          <div class="px-1 transform transition-transform duration-500 group-hover:translate-x-1 lg:group-hover:translate-x-1.5 overflow-hidden">
            <p
              class="text-violet-500 font-['Roboto'] text-[9px] lg:text-[11px] font-bold uppercase tracking-widest mb-1 lg:mb-1.5 flex items-center gap-1.5 lg:gap-2 whitespace-nowrap overflow-hidden"
            >
              <span class="shrink-0 w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
              <span class="category-text">{{ project.category }}</span>
            </p>
            <h3
              class="text-[#1a1a2e] font-['Poppins'] font-semibold text-[11px] lg:text-[17px] leading-snug group-hover:text-violet-600 transition-colors duration-300 whitespace-nowrap overflow-hidden relative"
            >
              <span class="title-text inline-block">{{ project.name }}</span>
            </h3>
          </div>
        </div>
      </div>

      
    </div>
    <!-- Bottom accent -->
        <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        loading="lazy"
        decoding="async"
        class="absolute bottom-[-0.2rem] left-0 w-32 lg:w-180 pointer-events-none transform rotate-180 z-0"
      />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, computed } from "vue";
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

const scrollToDetailedProject = (index) => {
  window.dispatchEvent(new CustomEvent('scrollToProject', { detail: index }));
};

// Track which cards are visible in viewport (for lazy loading)
const visibleCards = reactive({});
// Track which images have finished loading (for blur-up effect)
const loadedCards = reactive({});
// Refs for each card element
const cardRefs = reactive({});

let observer = null;

const onImageLoaded = (index) => {
  loadedCards[index] = true;
};

onMounted(() => {
  nextTick(() => {
    // IntersectionObserver to lazy-load images when cards approach viewport
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            if (!isNaN(idx)) {
              visibleCards[idx] = true;
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0,
      }
    );

    // Observe all cards
    Object.keys(cardRefs).forEach((key) => {
      const el = cardRefs[key];
      if (el) {
        el.dataset.index = key;
        observer.observe(el);
      }
    });
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const projects = computed(() => {
  const isId = lang.value === 'ID';
  return [
    {
      name: "Luxion RideXP",
      category: isId ? "Proyek Game Arkade" : "Arcade Game Project",
      bg: "#C0392B",
      image: "/images/projects/luxion_ridexp.webp",
    },
    {
      name: "MindEscape: VR Chamber",
      category: isId ? "Proyek Game VR" : "VR Game Project",
      bg: "#7c3aed",
      image: "/images/projects/mindescape_vr.webp",
    },
    {
      name: "MathRift",
      category: isId ? "Game Edukasi Platformer 2D" : "Educational 2D Platformer Game",
      bg: "#1a3a4a",
      image: "/images/projects/mathrift.webp",
    },
    {
      name: "Stellar Adventures",
      category: isId ? "Proyek Game AR" : "AR Game Project",
      bg: "#1a2a3a",
      image: "/images/projects/stellar_adventures.webp",
    },
    {
      name: "U-Asprak",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#5b6abf",
      image: "/images/projects/u_asprak.webp",
    },
    {
      name: "empEDU",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#2a4a3a",
      image: "/images/projects/empedu.webp",
    },
    {
      name: "IUDEX",
      category: isId ? "Desain Web Portofolio Tim" : "Team Portfolio Web Design",
      bg: "#6a5acd",
      image: "/images/projects/iudex.webp",
    },
    {
      name: "Arch",
      category: isId ? "Desain Web Portofolio Pribadi" : "Personal Portfolio Web Design",
      bg: "#7c3aed",
      image: "/images/projects/arch.webp",
    },
    {
      name: "Merch",
      category: isId ? "Desain Merchandise untuk Acara" : "Merch design for Event",
      bg: "#8b5cf6",
      image: "/images/projects/merch.webp",
    },
  ];
});
</script>

<style scoped>
.project-card {
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  content-visibility: auto;
  contain-intrinsic-size: auto 300px;
}

.project-card:hover {
  transform: translateY(-6px);
}

/* Marquee/Trail Effect for Mobile */
@media (max-width: 1023px) {
  .title-text {
    display: inline-block;
    padding-right: 2rem;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover .title-text {
    animation: marquee 8s linear infinite;
  }
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  /* Add a mask to fade the text at edges */
  h3.whitespace-nowrap {
    mask-image: linear-gradient(to right, black calc(100% - 20px), transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black calc(100% - 20px), transparent 100%);
  }
}
</style>
