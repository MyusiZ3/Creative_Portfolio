<template>
  <section id="projects" class="bg-white pt-[10rem] pb-[16rem] px-6 lg:px-40 relative overflow-hidden ">
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
        Some Projects I've Designed &amp;<br />
        Developed
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
        class="text-[#555] font-['Roboto'] text-[13px] lg:text-[15px] max-w-xl leading-relaxed mb-12 lg:mb-16"
      >
        A selection of works spanning UI/UX design, game development, AR/VR,
        and web-based platforms — built during academic and collaborative
        projects.
      </p>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          :ref="(el) => { if (el) cardRefs[index] = el }"
          v-motion
          :initial="{ opacity: 0, y: 40, scale: 0.95 }"
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
          class="project-card group relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-4/3 cursor-pointer"
          :style="{ background: project.bg }"
        >
          <!-- Blur placeholder background -->
          <div
            class="absolute inset-0 z-0"
            :style="{ backgroundColor: project.bg }"
          ></div>

          <!-- Project Image (lazy loaded) -->
          <img
            v-if="visibleCards[index]"
            :src="project.image"
            :alt="project.name"
            loading="lazy"
            decoding="async"
            :fetchpriority="index < 3 ? 'high' : 'low'"
            class="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            :class="loadedCards[index] ? 'opacity-100' : 'opacity-0 scale-105 blur-sm'"
            @load="onImageLoaded(index)"
          />

          <!-- Loading spinner placeholder -->
          <div
            v-if="visibleCards[index] && !loadedCards[index]"
            class="absolute inset-0 flex items-center justify-center z-5"
          >
            <div class="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          </div>

          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"
          ></div>

          <!-- Text overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-20">
            <h3
              class="text-white font-['Poppins'] font-bold text-base lg:text-xl leading-tight mb-1 drop-shadow-lg"
            >
              {{ project.name }}
            </h3>
            <p
              class="text-white/80 font-['Roboto'] text-xs lg:text-sm font-medium drop-shadow-md"
            >
              {{ project.category }}
            </p>
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
        class="absolute bottom-0 left-0 w-32 lg:w-180 pointer-events-none transform rotate-180 z-0"
      />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";

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
        rootMargin: "200px 0px", // Start loading 200px before entering viewport
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

const projects = [
  {
    name: "Luxion RideXP",
    category: "Arcade Game Project",
    bg: "#C0392B",
    image: "/images/projects/luxion_ridexp.webp",
  },
  {
    name: "MindEscape: VR Chamber",
    category: "VR Game Project",
    bg: "#7c3aed",
    image: "/images/projects/mindescape_vr.webp",
  },
  {
    name: "MathRift",
    category: "Educational 2D Platformer Game",
    bg: "#1a3a4a",
    image: "/images/projects/mathrift.webp",
  },
  {
    name: "Stellar Adventures",
    category: "AR Game Project",
    bg: "#1a2a3a",
    image: "/images/projects/stellar_adventures.webp",
  },
  {
    name: "U-Asprak",
    category: "Mobile App Design",
    bg: "#5b6abf",
    image: "/images/projects/u_asprak.webp",
  },
  {
    name: "empEDU",
    category: "Mobile App Design",
    bg: "#2a4a3a",
    image: "/images/projects/empedu.webp",
  },
  {
    name: "IUDEX",
    category: "Team Portfolio Web Design",
    bg: "#6a5acd",
    image: "/images/projects/iudex.webp",
  },
  {
    name: "Arch",
    category: "Personal Portfolio Web Design",
    bg: "#7c3aed",
    image: "/images/projects/arch.webp",
  },
  {
    name: "Merch",
    category: "Merch design for Event",
    bg: "#8b5cf6",
    image: "/images/projects/merch.webp",
  },
];
</script>

<style scoped>
.project-card {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  content-visibility: auto;
  contain-intrinsic-size: auto 300px;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}
</style>
