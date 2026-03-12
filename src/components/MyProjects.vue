<template>
  <section id="my-projects" class="bg-[#171717] py-20 px-6 lg:px-40 relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.3, y: -20 }"
        :visible="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 12, mass: 0.8 } }"
        class="text-center"
      >
        <span
          class="inline-block bg-violet-500 text-white font-['Poppins'] font-bold text-[14px] lg:text-[16px] px-6 py-2 rounded-full mb-6"
        >
          {{ t('my_proj_badge') }}
        </span>
      </div>

      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 60, scale: 0.9 }"
        :visible="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 18, delay: 150 } }"
        class="text-3xl lg:text-[48px] font-bold font-['Poppins'] text-white mb-4 text-center title-glow"
      >
        {{ t('my_proj_title') }}
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 350, ease: 'easeOut' } }"
        class="text-[#8E949F] font-['Roboto'] font-medium text-[13px] lg:text-[15px] max-w-2xl mx-auto text-center leading-relaxed mb-12"
      >
        {{ t('my_proj_desc') }}
      </p>

      <!-- Divider -->
      <div
        v-motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 450, ease: 'easeOut' } }"
        class="divider-line h-px w-full bg-gray-700 mb-14 lg:mb-20"
      ></div>

      <!-- Project Items -->
      <div class="space-y-16 lg:space-y-24">
        <div
          v-for="(project, index) in visibleProjects"
          :key="project.name"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }"
          :visible="{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1.2 },
          }"
          class="project-item flex flex-col gap-8 lg:gap-14 items-start"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Project Image Carousel -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.85, rotate: index % 2 === 0 ? -3 : 3 }"
            :visible="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 16, delay: 200 } }"
            class="w-full lg:w-5/12 shrink-0"
          >
            <div
              class="project-image-wrapper group relative rounded-2xl overflow-hidden aspect-4/3"
              :style="{ backgroundColor: project.bg }"
            >
              <!-- Carousel Images -->
              <div class="relative w-full h-full cursor-pointer" @click="openLightbox(index, activeSlides[index] || 0)">
                <transition :name="getTransitionName(project._dir)" mode="out-in">
                  <img
                    :key="project.images[activeSlides[index] || 0]"
                    :src="project.images[activeSlides[index] || 0]"
                    :alt="`${project.name} - ${(activeSlides[index] || 0) + 1}`"
                    class="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </transition>
                <!-- Zoom hint icon -->
                <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <i class="bi bi-arrows-fullscreen text-xs"></i>
                </div>
              </div>

              <!-- Carousel Dots -->
              <div
                v-if="project.images.length > 1"
                class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20"
              >
                <button
                  v-for="(img, imgIdx) in project.images"
                  :key="imgIdx"
                  @click="goToSlide(index, imgIdx)"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="
                    (activeSlides[index] || 0) === imgIdx
                      ? 'bg-violet-400 w-5'
                      : 'bg-white/40 hover:bg-white/70'
                  "
                ></button>
              </div>

              <!-- Carousel Arrows -->
              <button
                v-if="project.images.length > 1"
                @click="prevSlide(index, project.images.length)"
                class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-500/70 z-20"
              >
                <i class="bi bi-chevron-left text-sm"></i>
              </button>
              <button
                v-if="project.images.length > 1"
                @click="nextSlide(index, project.images.length)"
                class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-500/70 z-20"
              >
                <i class="bi bi-chevron-right text-sm"></i>
              </button>

              <!-- Subtle glow on hover -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style="box-shadow: inset 0 0 60px rgba(124, 58, 237, 0.15)"
              ></div>
            </div>
          </div>

          <!-- Project Details -->
          <div class="w-full lg:w-7/12 project-details">
            <!-- Project Name -->
            <h3
              v-motion
              :initial="{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }"
              :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 18, delay: 300 } }"
              class="text-xl lg:text-[26px] font-bold font-['Poppins'] text-white mb-2 leading-tight"
            >
              {{ project.name }}
            </h3>

            <!-- Role -->
            <p
              v-motion
              :initial="{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400, ease: 'easeOut' } }"
              class="text-[#8E949F] font-['Roboto'] text-[13px] lg:text-[14px] mb-5"
            >
              {{ t('my_proj_role') }} {{ project.role }}
            </p>

            <!-- Meta Info -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }"
              class="space-y-1 mb-5"
            >
              <p
                class="text-[#8E949F] font-['Roboto'] text-[12px] lg:text-[13px]"
              >
                {{ project.teamInfo }}
              </p>
              <p
                class="text-[#8E949F] font-['Roboto'] text-[12px] lg:text-[13px]"
              >
                {{ t('my_proj_tools') }} {{ project.tools }}
              </p>
            </div>

            <!-- Project Overview -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550, ease: 'easeOut' } }"
              class="mb-5"
            >
              <p
                class="text-violet-400 font-['Roboto'] font-semibold text-[13px] lg:text-[14px] mb-2"
              >
                {{ t('my_proj_overview') }}
              </p>
              <p
                class="text-[#b0b5bf] font-['Roboto'] text-[12px] lg:text-[14px] leading-relaxed"
              >
                {{ project.overview }}
              </p>
            </div>

            <!-- What I Did -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 650, ease: 'easeOut' } }"
              class="mb-6"
            >
              <p
                class="text-violet-400 font-['Roboto'] font-semibold text-[13px] lg:text-[14px] mb-3"
              >
                {{ t('my_proj_whatidid') }}
              </p>
              <ul class="space-y-2">
                <li
                  v-for="(item, i) in project.tasks"
                  :key="i"
                  v-motion
                  :initial="{ opacity: 0, x: -20 }"
                  :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20, delay: 700 + i * 80 } }"
                  class="flex items-start gap-2 task-item"
                >
                  <span class="text-violet-400 mt-1 text-[8px]">
                    <i class="bi bi-circle-fill"></i>
                  </span>
                  <span
                    class="text-[#b0b5bf] font-['Roboto'] text-[12px] lg:text-[13px] leading-relaxed"
                  >
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- Platform Tag -->
            <p
              v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: { duration: 500, delay: 800, ease: 'easeOut' } }"
              class="text-[#8E949F] font-['Roboto'] text-[12px] lg:text-[13px] mb-4"
            >
              {{ project.platform }}
            </p>

            <!-- View Work Button -->
            <a
              v-motion
              :initial="{ opacity: 0, scale: 0.8, y: 10 }"
              :visible="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 900 } }"
              :href="project.link || '#'"
              class="view-work-btn inline-flex items-center gap-2 border border-gray-600 text-white font-['Roboto'] font-medium text-[13px] lg:text-[14px] px-5 py-2.5 rounded-full hover:border-violet-500 hover:text-violet-400 transition-all duration-300 group/btn"
            >
              {{ t('my_proj_view_work') }}
              <i
                class="bi bi-chevron-right text-[11px] transition-transform duration-300 group-hover/btn:translate-x-1"
              ></i>
            </a>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div
        v-if="projects.length > 4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="mt-16 lg:mt-20 text-center"
      >
        <button
          @click="showAll = !showAll"
          class="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-violet-500/30 rounded-full text-white font-['Poppins'] font-semibold text-sm tracking-widest hover:border-violet-500 transition-all duration-500 overflow-hidden"
        >
          <!-- Background Glow Effect -->
          <div class="absolute inset-0 bg-violet-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

          <span class="relative z-10">{{ showAll ? t('my_proj_show_less') : t('my_proj_view_all') }}</span>

          <div class="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 group-hover:bg-violet-500 transition-colors duration-500">
            <i
              class="bi transition-transform duration-500"
              :class="[
                showAll ? 'bi-chevron-up' : 'bi-chevron-down',
                'group-hover:scale-110'
              ]"
            ></i>
          </div>
        </button>
      </div>

      <!-- Design Showcase Section -->
      <DesignShowcase />
    </div>
  </section>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <transition name="lightbox-fade">
      <div
        v-if="lightbox.open"
        class="fixed inset-0 z-9999 flex items-center justify-center"
        @keydown.esc="closeLightbox"
        @keydown.left="lightboxPrev"
        @keydown.right="lightboxNext"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/90 backdrop-blur-md"
          @click="closeLightbox"
        ></div>

        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
        >
          <i class="bi bi-x-lg text-lg"></i>
        </button>

        <!-- Counter -->
        <div
          class="absolute top-6 left-1/2 -translate-x-1/2 z-50 text-white/60 font-['Roboto'] text-sm"
        >
          {{ lightbox.slideIdx + 1 }} / {{ lightboxImages.length }}
        </div>

        <!-- Image Container -->
        <div
          class="relative z-40 w-full max-w-5xl mx-4 lg:mx-auto select-none"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <transition :name="lightbox.dir === 'prev' ? 'lb-slide-prev' : 'lb-slide-next'" mode="out-in">
            <img
              :key="lightboxImages[lightbox.slideIdx]"
              :src="lightboxImages[lightbox.slideIdx]"
              :alt="`Lightbox image ${lightbox.slideIdx + 1}`"
              class="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto block"
              draggable="false"
            />
          </transition>
        </div>

        <!-- Prev Arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxPrev"
          class="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-violet-500/50 transition-all duration-200"
        >
          <i class="bi bi-chevron-left text-lg"></i>
        </button>

        <!-- Next Arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxNext"
          class="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-violet-500/50 transition-all duration-200"
        >
          <i class="bi bi-chevron-right text-lg"></i>
        </button>

        <!-- Dots -->
        <div
          v-if="lightboxImages.length > 1"
          class="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2"
        >
          <button
            v-for="(img, i) in lightboxImages"
            :key="i"
            @click="lightboxGoTo(i)"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300"
            :class="lightbox.slideIdx === i ? 'bg-violet-400 w-6' : 'bg-white/30 hover:bg-white/60'"
          ></button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import DesignShowcase from "./DesignShowcase.vue";
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

// Track active slide per project
const activeSlides = reactive({});

const showAll = ref(false);
const visibleProjects = computed(() => showAll.value ? projects.value : projects.value.slice(0, 4));
// Track direction for each project for transition

// === Lightbox state ===
const lightbox = reactive({
  open: false,
  projectIdx: 0,
  slideIdx: 0,
  dir: "next",
});

const lightboxImages = computed(() => {
  if (lightbox.projectIdx >= 0 && lightbox.projectIdx < projects.value.length) {
    return projects.value[lightbox.projectIdx].images;
  }
  return [];
});

const openLightbox = (projectIdx, slideIdx) => {
  lightbox.projectIdx = projectIdx;
  lightbox.slideIdx = slideIdx;
  lightbox.dir = "next";
  lightbox.open = true;
  document.body.style.overflow = "hidden";
  nextTick(() => {
    window.addEventListener("keydown", handleLightboxKey);
  });
};

const closeLightbox = () => {
  lightbox.open = false;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleLightboxKey);
};

const lightboxNext = () => {
  lightbox.dir = "next";
  lightbox.slideIdx = (lightbox.slideIdx + 1) % lightboxImages.value.length;
};

const lightboxPrev = () => {
  lightbox.dir = "prev";
  lightbox.slideIdx = (lightbox.slideIdx - 1 + lightboxImages.value.length) % lightboxImages.value.length;
};

const lightboxGoTo = (i) => {
  lightbox.dir = i > lightbox.slideIdx ? "next" : "prev";
  lightbox.slideIdx = i;
};

const handleLightboxKey = (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
};

// Touch / swipe support
let touchStartX = 0;
let touchEndX = 0;

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const onTouchMove = (e) => {
  touchEndX = e.touches[0].clientX;
};

const onTouchEnd = () => {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) lightboxNext();
    else lightboxPrev();
  }
  touchStartX = 0;
  touchEndX = 0;
};
const slideDirections = reactive({});

const getTransitionName = (dir) => {
  return dir === "prev" ? "slide-prev" : "slide-next";
};

const goToSlide = (projectIdx, slideIdx) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = slideIdx > current ? "next" : "prev";
  // Assign _dir to the project reactively
  projects.value[projectIdx]._dir = slideDirections[projectIdx];
  activeSlides[projectIdx] = slideIdx;
};

const nextSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = "next";
  projects.value[projectIdx]._dir = "next";
  activeSlides[projectIdx] = (current + 1) % total;
};

const prevSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = "prev";
  projects.value[projectIdx]._dir = "prev";
  activeSlides[projectIdx] = (current - 1 + total) % total;
};

// Auto-play carousel
let autoPlayInterval = null;
onMounted(() => {
  autoPlayInterval = setInterval(() => {
    projects.value.forEach((project, idx) => {
      if (project.images.length > 1) {
        const current = activeSlides[idx] || 0;
        projects.value[idx]._dir = "next";
        activeSlides[idx] = (current + 1) % project.images.length;
      }
    });
  }, 4000);
});

onUnmounted(() => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
});

const projects = computed(() => {
  const isId = lang.value === 'ID';
  return [
    {
      name: "RideXP - Arcade Game Project",
      role: isId ? "Manajer Proyek, Pengembang Game, Desainer UI/UX" : "Project Manager, Game Developer, UI/UX Designer",
      teamInfo: isId ? "Proyek Tim | Jan – Jun 2025" : "Team Project | Jan – Jun 2025",
      tools: "Unity, Figma, ESP32, JSON",
      overview: isId 
        ? "RideXP adalah game balap arkade di mana pemain mengendalikan sepeda dalam game dengan mengayuh sepeda statis fisik yang terhubung via ESP32. Dibangun di Unity, game ini menggabungkan IoT, pengembangan game, dan desain UI/UX."
        : "RideXP is an arcade-style cycling game where players control their in-game bike by pedaling a physical stationary bike connected via ESP32. Built in Unity, the game combines IoT, game development, and UI/UX design.",
      tasks: isId ? [
        "Memimpin koordinasi tim dan perencanaan fitur",
        "Merancang alur UI/UX (menu, HUD, layar hasil) menggunakan Figma",
        "Membangun sistem papan peringkat lokal menggunakan JSON",
        "Mengimplementasikan NPC AI berbasis navigasi waypoint",
        "Merancang lingkungan game, aset visual, serta efek visual (VFX)",
        "Membuat identitas karya serta materi presentasi untuk pameran",
      ] : [
        "Led team coordination and feature planning",
        "Designed full UI/UX flow (menu, HUD, result screen) using Figma",
        "Built local leaderboard system using JSON",
        "Implemented AI NPC with waypoint-based navigation",
        "Designed game environments, composited visual assets, and created VFX logic",
        "Created branding assets & presentation deck for public exhibition",
      ],
      platform: isId ? "Aplikasi Desktop Arkade" : "Arcade Desktop App",
      bg: "#C0392B",
      images: [
        "/images/projects/luxion_ridexp.png",
        "/images/projects/luxion_ridexp_2.png",
        "/images/projects/luxion_ridexp_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "MindEscape – VR Escape Room Game",
      role: isId ? "Pengembang VR, Desainer Lingkungan" : "VR Developer, Environment Designer",
      teamInfo: isId ? "Proyek Tim | Jan – Jun 2025" : "Team Project | Jan – Jun 2025",
      tools: "Unity, Oculus SDK",
      overview: isId
        ? "MindEscape adalah permaianan VR ruang lolos yang berfokus pada eksplorasi dan interaksi lingkungan. Dibuat menggunakan Unity, proyek ini mensimulasikan pengalaman puzzle penuh menggunakan headset VR."
        : "MindEscape is a virtual reality escape room game focused on exploration and environmental interaction. Built using Unity, the project simulates a full puzzle escape experience using a VR headset.",
      tasks: isId ? [
        "Merancang tata letak lingkungan 3D dan penempatan objek",
        "Menangani sistem kamera VR dan transisi adegan",
        "Menerapkan mekanisme interaksi alat (mengambil objek, pemicu teka-teki)",
        "Mengoptimalkan pencahayaan dan performa untuk kelancaran",
      ] : [
        "Designed 3D environment layout and object placement",
        "Handled VR camera systems and scene transitions",
        "Implemented user interaction mechanics (grabbing, puzzle triggers)",
        "Optimized lighting and performance for smooth VR experience",
      ],
      platform: isId ? "Aplikasi Desktop VR" : "VR Desktop App",
      bg: "#4A1D8E",
      images: [
        "/images/projects/mindescape_vr.png",
        "/images/projects/mindescape_vr_2.png",
        "/images/projects/mindescape_vr_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "MathRift – Educational 2D Platformer",
      role: isId ? "Pengembang Game, Desainer UI/UX" : "Game Developer, UI/UX Designer",
      teamInfo: isId ? "Proyek Tim | Agt – Des 2024" : "Team Project | Aug – Dec 2024",
      tools: "Unity, Figma",
      overview: isId
        ? "MathRift adalah game platform 2D edukasi yang dirancang agar belajar matematika jadi menyenangkan lewat gameplay interaktif, teka teki, dan level yang menantang secara bertahap."
        : "MathRift is a 2D educational platformer game designed to make learning math fun through interactive gameplay, puzzles, and progressive difficulty levels.",
      tasks: isId ? [
        "Mengembangkan mekanisme inti dan pengontrol pemain",
        "Merancang wireframe UI/UX hingga hasil akhir dalam Figma",
        "Mengintegrasikan progres level dan sistem penilaian",
        "Membuat aset permainan dan animasi sprite",
      ] : [
        "Developed core game mechanics and player controller",
        "Designed UI/UX wireframes and final screens in Figma",
        "Implemented level progression and scoring system",
        "Created game assets and sprite animations",
      ],
      platform: "Desktop Game",
      bg: "#1a3a4a",
      images: [
        "/images/projects/mathrift.png",
        "/images/projects/mathrift_2.png",
        "/images/projects/mathrift_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Stellar Adventures – AR Game Project",
      role: isId ? "Pengembang AR, Desainer Lingkungan" : "AR Developer, Environment Designer",
      teamInfo: isId ? "Proyek Tim | Agt – Des 2024" : "Team Project | Aug – Dec 2024",
      tools: "Unity, AR Foundation, Blender",
      overview: isId
        ? "Stellar Adventures adalah game AR yang menggabungkan dunia maya dan nyata, memungkinkan pemain menavigasi ruang bertema luar angkasa melalui kamera."
        : "Stellar Adventures is an augmented reality game that blends the physical and digital world, allowing players to explore space-themed environments through their device camera.",
      tasks: isId ? [
        "Mengembangkan pendeteksi bidang datar dan kemunculan objek",
        "Merancang tekstur dan model lingkungan 3D",
        "Menerapkan mekanika permainan langsung di ruang AR",
        "Mengoptimalkan AR untuk perangkat mobile",
      ] : [
        "Developed AR plane detection and object placement",
        "Designed 3D environment models and textures",
        "Implemented interactive game mechanics in AR space",
        "Optimized performance for mobile AR devices",
      ],
      platform: isId ? "Aplikasi AR Mobile" : "AR Mobile App",
      bg: "#1a2a3a",
      images: [
        "/images/projects/stellar_adventures.png",
        "/images/projects/stellar_adventures_2.png",
        "/images/projects/stellar_adventures_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "U-Asprak – Mobile App Design",
      role: "UI/UX Designer",
      teamInfo: isId ? "Studi Kasus Tim | Jan – Jun 2024" : "Team Project | Jan – Jun 2024",
      tools: "Figma, Adobe XD",
      overview: isId
        ? "U-Asprak merupakan desain aplikasi seluler untuk memperbaiki proses manajemen asisten praktikum, mencakup penjadwalan, nilai, serta media komunikasi."
        : "U-Asprak is a mobile application designed to streamline the teaching assistant management process, including scheduling, grading, and communication between lecturers and assistants.",
      tasks: isId ? [
        "Melakukan riset terhadap pengguna",
        "Merancang alur wireframe ber-resolusi tinggi",
        "Membangun protipe interaktif untuk dipakai dalam user testing",
        "Mendefinisikan bahasa desain dan library komponen",
      ] : [
        "Conducted user research and created user personas",
        "Designed wireframes and high-fidelity prototypes",
        "Built interactive prototype for usability testing",
        "Created design system and component library",
      ],
      platform: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#5b6abf",
      images: [
        "/images/projects/u_asprak.png",
        "/images/projects/u_asprak_2.png",
        "/images/projects/u_asprak_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "empEDU – Mobile App Design",
      role: "UI/UX Designer",
      teamInfo: isId ? "Proyek Tim | Agt – Des 2023" : "Team Project | Aug – Dec 2023",
      tools: "Figma",
      overview: isId
        ? "empEDU merupakan desain aplikasi edukasi yang diciptakan agar siswa lebih leluasa belajar dan memeriksa kemajuan akademik dengan peranti yang interaktif."
        : "empEDU is an educational mobile app designed to empower students with accessible learning materials, progress tracking, and interactive study tools.",
      tasks: isId ? [
        "Merancang alur pengguna dari awal hingga akhir",
        "Merancang mockup resolusi tinggi di semua antarmuka layar",
        "Mengembangkan prototipe untuk pengujian interaksi",
        "Revisi hasil riset dan percobaan",
      ] : [
        "Designed end-to-end user flow and information architecture",
        "Created high-fidelity UI mockups for all screens",
        "Developed interactive prototypes for user testing",
        "Iterated designs based on usability feedback",
      ],
      platform: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#2a4a3a",
      images: [
        "/images/projects/empedu.png",
        "/images/projects/empedu_2.png",
        "/images/projects/empedu_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "IUDEX – Team Portfolio Web Design",
      role: isId ? "Desainer UI/UX, Pengembang Frontend" : "UI/UX Designer, Frontend Developer",
      teamInfo: isId ? "Proyek Tim | Jan – Jun 2024" : "Team Project | Jan – Jun 2024",
      tools: "Figma, HTML, CSS, JavaScript",
      overview: isId
        ? "IUDEX adalah situs web portofolio tim yang menampilkan kapabilitas, identitas visual sebuah tim pada desain tata letak kekinian bercorak profesional."
        : "IUDEX is a team portfolio website designed to showcase the collective works and capabilities of a creative team, featuring a modern and professional layout.",
      tasks: isId ? [
        "Merancang prototipe tata letak lewat Figma yang disesuaikan dalam web",
        "Mengimplementasikan frontend menggunakan susunan HTML, CSS, JavaScript",
        "Memberikan pemanis tampilan transisi scrolling interaktif yang nyaman",
        "Menguji fungsional dan tingkat ketanggapsegeraannya",
      ] : [
        "Designed responsive web layout using Figma",
        "Developed frontend with HTML, CSS, and JavaScript",
        "Implemented smooth scroll animations and transitions",
        "Ensured cross-browser compatibility and responsiveness",
      ],
      platform: "Web Application",
      bg: "#6a5acd",
      images: [
        "/images/projects/iudex.png",
        "/images/projects/iudex_2.png",
        "/images/projects/iudex_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Arch – Personal Portfolio Web Design",
      role: isId ? "Desainer UI/UX, Pengembang Frontend" : "UI/UX Designer, Frontend Developer",
      teamInfo: isId ? "Proyek Pribadi | 2024" : "Personal Project | 2024",
      tools: "Figma, Vue.js, TailwindCSS",
      overview: isId
        ? "Arch adalah nama portofolio pengutamaan desain nan apik, dan ditunjang portofolio perupa berbasis laman untuk disajikan memperindah desain serta kebolehan penulisan."
        : "Arch is a personal portfolio web design project focused on creating a visually stunning and interactive personal website to showcase design and development work.",
      tasks: isId ? [
        "Merancang seluruh tata letak web dan identitas merek portofolionya",
        "Menulis koding dan menyesuaikan fronted website responsif",
        "Memasukkan seluruh gaya animatif mikro interaksi nan halus",
        "Mengoptimalkan kemudahan temu sistem cari (SEO)",
      ] : [
        "Designed complete portfolio layout and visual identity",
        "Built responsive frontend with modern web technologies",
        "Integrated smooth animations and micro-interactions",
        "Optimized for performance and SEO",
      ],
      platform: "Web Application",
      bg: "#7c3aed",
      images: [
        "/images/projects/arch.png",
        "/images/projects/arch_2.png",
        "/images/projects/arch_3.png",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Merch – Merch Design for Event",
      role: isId ? "Desainer Grafis" : "Graphic Designer",
      teamInfo: isId ? "Pengerjaan Bebas | 2024" : "Freelance Project | 2024",
      tools: "Adobe Illustrator, Adobe Photoshop",
      overview: isId
        ? "Merch merupakan hasil komoditas rancangan pada barang berupa kaos sablon, kemasan, atau stiker acara dan materi promosi guna pemanfaatan tertentu pemasaran yang menarik."
        : "Merch is a merchandise design project creating branded apparel and accessories for an event, including t-shirts, tote bags, and promotional materials.",
      tasks: isId ? [
        "Berkreasi membuat susunan ilustrasi grafis",
        "Merilis format sesuai patokan industri pencetakan massal",
        "Mengembangkan kemewahan branding dari keseluruhan barang",
        "Bergabung berkongsi dalam hal kerja dan standar produksinya",
      ] : [
        "Created original merchandise designs and illustrations",
        "Prepared print-ready artwork with proper specifications",
        "Developed cohesive visual branding across all merchandise",
        "Collaborated with manufacturing for production quality",
      ],
      platform: "Graphic Design",
      bg: "#8b5cf6",
      images: [
        "/images/projects/merch.png",
        "/images/projects/merch_2.png",
        "/images/projects/merch_3.png",
      ],
      link: "#",
      _dir: "next",
    },
  ];
});
</script>

<style scoped>
/* === Title glow pulse === */
.title-glow {
  text-shadow: 0 0 40px rgba(139, 92, 246, 0.15);
}

/* === Divider shimmer === */
.divider-line {
  background: linear-gradient(
    90deg,
    transparent 0%,
    #374151 20%,
    #7c3aed 50%,
    #374151 80%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
}

/* === Project Image === */
.project-image-wrapper {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.5s ease;
}

.project-image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(124, 58, 237, 0.12);
}

/* === Project item separator === */
.project-item {
  position: relative;
  padding-bottom: 2rem;
}

.project-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
}

.project-item:last-child::after {
  display: none;
}

/* === Task item hover === */
.task-item {
  transition: transform 0.25s ease, padding-left 0.25s ease;
}

.task-item:hover {
  transform: translateX(6px);
  padding-left: 4px;
}

/* === View Work Button glow === */
.view-work-btn {
  position: relative;
  overflow: hidden;
}

.view-work-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.view-work-btn:hover::before {
  transform: translateX(100%);
}

/* === Slide Next Transition (going forward) === */
.slide-next-enter-active,
.slide-next-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    filter 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-next-enter-from {
  transform: translateX(40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

.slide-next-leave-to {
  transform: translateX(-40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

/* === Slide Prev Transition (going backward) === */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    filter 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-prev-enter-from {
  transform: translateX(-40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

.slide-prev-leave-to {
  transform: translateX(40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}
</style>

<!-- Non-scoped styles for Teleported lightbox -->
<style>
/* === Lightbox Fade === */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.35s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* === Lightbox Slide Next === */
.lb-slide-next-enter-active,
.lb-slide-next-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lb-slide-next-enter-from {
  transform: translateX(60px) scale(0.96);
  opacity: 0;
}

.lb-slide-next-leave-to {
  transform: translateX(-60px) scale(0.96);
  opacity: 0;
}

/* === Lightbox Slide Prev === */
.lb-slide-prev-enter-active,
.lb-slide-prev-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lb-slide-prev-enter-from {
  transform: translateX(-60px) scale(0.96);
  opacity: 0;
}

.lb-slide-prev-leave-to {
  transform: translateX(60px) scale(0.96);
  opacity: 0;
}
</style>
