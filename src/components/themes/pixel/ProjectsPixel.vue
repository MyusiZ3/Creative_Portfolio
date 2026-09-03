<template>
  <section
    id="projects"
    class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative"
  >
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, ease: 'easeOut' },
        }"
        class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <span
            class="text-xs font-bold text-[#00ff66] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#00ff66] shadow-[2px_2px_0px_#000] font-silkscreen"
          >
            ✦ MISSION SELECT • ALL PROJECTS
          </span>
          <h2
            class="text-2xl sm:text-4xl font-extrabold uppercase mt-2 font-pixel leading-tight"
          >
            ARCADE <span class="text-[#00ff66]">PROJECT SHOWCASE</span>
          </h2>
        </div>

        <!-- Filter Category Tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="setCategory(cat.id)"
            class="px-3 py-1.5 text-xs font-bold uppercase transition-all border-2 font-silkscreen"
            :class="[
              activeCategory === cat.id
                ? 'bg-[#00ff66] text-black border-black shadow-[3px_3px_0px_#000000]'
                : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white',
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid (Arcade Cartridges) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(proj, index) in paginatedProjects"
          :key="proj.id"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: (index % 3) * 120,
              ease: 'easeOut',
            },
          }"
          class="bg-[#161b22] border-4 border-black p-5 shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_#00ff66] transition-all flex flex-col justify-between group"
        >
          <div>
            <!-- Cartridge Header Badge -->
            <div
              class="flex items-center justify-between border-b-2 border-[#30363d] pb-3 mb-4 font-silkscreen"
            >
              <span
                class="text-[10px] font-bold text-[#ffd700] uppercase bg-[#0d1117] px-2 py-0.5 border border-[#ffd700]"
              >
                STAGE {{ getStageLabel(startIndex + index + 1) }}
              </span>
              <span
                class="text-[10px] font-bold text-[#00ff66] flex items-center gap-1"
              >
                <span>CLEAR</span>
                <span class="flex text-[#ffd700] gap-0.5 text-[10px]">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </span>
            </div>

            <!-- Project Image Preview (Swipeable / Slideable Gallery Box) -->
            <div
              class="relative overflow-hidden border-2 border-black bg-[#0d1117] aspect-video mb-4 group/slider select-none"
              @touchstart="onTouchStart($event)"
              @touchmove="onTouchMove($event)"
              @touchend="onTouchEnd(proj)"
            >
              <!-- Active Image -->
              <img
                :src="proj.images[activeSlides[proj.id] || 0]"
                :alt="proj.title"
                class="w-full h-full object-cover group-hover/slider:scale-105 transition-transform duration-500 cursor-pointer"
                @click="openModal(proj)"
              />

              <!-- Category Tag Overlay -->
              <div
                class="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] text-[#00f0ff] font-bold uppercase border border-[#00f0ff] font-silkscreen z-10 pointer-events-none"
              >
                {{ proj.category }}
              </div>

              <!-- Image Index Indicator -->
              <div
                class="absolute top-2 right-2 bg-black/80 px-2 py-0.5 text-[9px] text-[#ffd700] font-bold uppercase border border-[#ffd700] font-silkscreen z-10 pointer-events-none"
              >
                {{ (activeSlides[proj.id] || 0) + 1 }}/{{ proj.images.length }}
              </div>

              <!-- Prev/Next Slide Arrows -->
              <button
                v-if="proj.images.length > 1"
                @click.stop="prevSlide(proj)"
                class="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/80 border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66] hover:text-black flex items-center justify-center text-xs opacity-0 group-hover/slider:opacity-100 transition-opacity z-20 font-silkscreen"
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                v-if="proj.images.length > 1"
                @click.stop="nextSlide(proj)"
                class="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/80 border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66] hover:text-black flex items-center justify-center text-xs opacity-0 group-hover/slider:opacity-100 transition-opacity z-20 font-silkscreen"
                aria-label="Next Slide"
              >
                ›
              </button>

              <!-- Slide Dots Bar -->
              <div
                v-if="proj.images.length > 1"
                class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20 bg-black/70 px-2 py-0.5 rounded border border-white/20"
              >
                <button
                  v-for="(_, imgIdx) in proj.images"
                  :key="imgIdx"
                  @click.stop="goToSlide(proj, imgIdx)"
                  class="w-1.5 h-1.5 transition-all"
                  :class="[
                    (activeSlides[proj.id] || 0) === imgIdx
                      ? 'bg-[#00ff66] w-3'
                      : 'bg-white/40',
                  ]"
                ></button>
              </div>
            </div>

            <!-- Title & Short Description -->
            <h3
              @click="openModal(proj)"
              class="text-base font-bold text-[#f0f6fc] uppercase group-hover:text-[#00ff66] transition-colors font-silkscreen cursor-pointer"
            >
              {{ proj.title }}
            </h3>
            <p
              class="text-xs text-[#8b949e] line-clamp-2 mt-2 leading-relaxed font-mono"
            >
              {{ proj.shortDesc }}
            </p>
          </div>

          <!-- Bottom Meta Stack & Action Buttons -->
          <div
            class="mt-6 pt-4 border-t-2 border-[#30363d] flex flex-wrap items-center justify-between gap-2"
          >
            <!-- Tech Badges -->
            <div class="flex flex-wrap items-center gap-1">
              <span
                v-for="t in proj.techStack?.slice(0, 3)"
                :key="t"
                class="text-[9px] px-1.5 py-0.5 bg-[#0d1117] text-[#8b949e] border border-[#30363d] font-silkscreen"
              >
                {{ t }}
              </span>
            </div>

            <!-- Direct Navigation Buttons -->
            <div class="flex items-center gap-2">
              <a
                v-if="proj.demoUrl"
                :href="proj.demoUrl"
                target="_blank"
                @click.stop
                class="px-2.5 py-1 bg-[#00ff66] text-black font-extrabold text-[10px] uppercase border border-black shadow-[2px_2px_0px_#000000] hover:bg-[#00ff66]/80 transition-all font-silkscreen flex items-center gap-1"
                title="Launch Live Demo"
              >
                <span>DEMO</span>
                <i class="bi bi-box-arrow-up-right text-[10px]"></i>
              </a>

              <button
                @click="openModal(proj)"
                class="px-2.5 py-1 bg-[#161b22] text-[#00f0ff] font-extrabold text-[10px] uppercase border border-[#00f0ff] shadow-[2px_2px_0px_#000000] hover:bg-[#00f0ff]/20 transition-all font-silkscreen flex items-center gap-1"
              >
                <span>INFO</span>
                <i class="bi bi-caret-right-fill text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Bar -->
      <div
        v-if="filteredProjects.length > 0"
        class="mt-10 pt-6 border-t-4 border-black flex flex-col sm:flex-row items-center justify-between gap-4 font-silkscreen"
      >
        <!-- Item Range Counter -->
        <div class="text-xs text-[#8b949e]">
          SHOWING
          <span class="text-[#00ff66] font-bold"
            >{{ startIndex + 1 }}-{{ endIndex }}</span
          >
          OF
          <span class="text-[#ffd700] font-bold">{{
            filteredProjects.length
          }}</span>
          PROJECTS
        </div>

        <!-- Page Navigation Buttons -->
        <div class="flex items-center gap-3">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-1.5 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-1 font-silkscreen"
            :class="[
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]'
                : 'text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black active:translate-y-0.5',
            ]"
          >
            ‹ PREVIOUS
          </button>

          <span
            class="text-xs font-bold text-[#f0f6fc] bg-[#0d1117] px-3 py-1.5 border border-[#30363d]"
          >
            PAGE <span class="text-[#00ff66]">{{ currentPage }}</span> OF
            <span class="text-[#00ff66]">{{ totalPages }}</span>
          </span>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1.5 bg-[#161b22] text-xs font-bold uppercase border-2 border-black shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-1 font-silkscreen"
            :class="[
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed text-[#8b949e]'
                : 'text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black active:translate-y-0.5',
            ]"
          >
            NEXT ›
          </button>
        </div>
      </div>
    </div>

    <!-- Case Study Modal -->
    <PixelCaseStudyModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="isModalOpen = false"
    />
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import PixelCaseStudyModal from "./PixelCaseStudyModal.vue";

const activeCategory = ref("all");
const currentPage = ref(1);
const itemsPerPage = ref(6);
const isModalOpen = ref(false);
const selectedProject = ref(null);
const activeSlides = reactive({});

// Touch gestures
let touchStartX = 0;
let touchEndX = 0;

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const onTouchMove = (e) => {
  touchEndX = e.touches[0].clientX;
};

const onTouchEnd = (proj) => {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 40) {
    if (diff > 0) nextSlide(proj);
    else prevSlide(proj);
  }
  touchStartX = 0;
  touchEndX = 0;
};

const goToSlide = (proj, slideIdx) => {
  activeSlides[proj.id] = slideIdx;
};

const nextSlide = (proj) => {
  const current = activeSlides[proj.id] || 0;
  activeSlides[proj.id] = (current + 1) % proj.images.length;
};

const prevSlide = (proj) => {
  const current = activeSlides[proj.id] || 0;
  activeSlides[proj.id] =
    (current - 1 + proj.images.length) % proj.images.length;
};

const categories = [
  { id: "all", label: "ALL STAGES" },
  { id: "game", label: "GAMES & VR" },
  { id: "app", label: "MOBILE APPS" },
  { id: "web", label: "WEB PORTAL" },
];

const projects = [
  {
    id: "dynamic_ar",
    title: "Djaswita AR – Dynamic AR & CMS",
    category: "game",
    shortDesc:
      "Satu sistem terintegrasi aplikasi AR dinamis dan Web Admin Dashboard (Vite & Supabase) tanpa rebuild.",
    images: ["/images/projects/dynamic_ar_cms.png"],
    platform: "AR Mobile App & Web CMS",
    role: "Fullstack AR & Web Dev",
    timeline: "2025",
    techStack: ["Unity", "AR Foundation", "Supabase", "Vite", "JS"],
    githubUrl: "https://github.com/MyusiZ3/DjaswitaAR-Fix",
    challenge:
      "Menciptakan aplikasi AR yang konten 3D dan informasinya dapat di-CRUD via Web CMS tanpa perlu build ulang APK.",
    solution:
      "Membangun satu arsitektur terpadu antara Unity AR Foundation, Supabase DB remote storage, dan Web Admin Dashboard berbasis Vite.",
  },
  {
    id: "Mathmagic",
    title: "Mathmagic – HKI App",
    category: "game",
    shortDesc:
      "Aplikasi HKI pembelajaran matematika SD dengan Unity game & Web Admin Dashboard (analisis user & config).",
    images: ["/images/projects/Mathmagic/dashboard_mathmagic.webp"],
    platform: "Unity Game & Web Admin",
    role: "Main UI Designer & Lead Dev",
    timeline: "2024 – 2025",
    techStack: ["Unity 2D", "C#", "Figma", "Vite", "Supabase"],
    demoUrl: "https://drive.google.com/drive/folders/1rLr5_umd3LsMvZY_Q9ZyLjp5G-xHPOdv?usp=sharing",
    challenge:
      "Mendesain UI/UX gim anak yang ramah sekaligus menyediakan dashboard admin untuk konfigurasi parameter & analisis performa.",
    solution:
      "Merancang UI gim ceria di Figma, memprogram logika Unity C#, serta membangun Web Admin Dashboard terpusat.",
  },
  {
    id: "jaswita_djourney",
    title: "DJourney Jaswita Jabar",
    category: "web",
    shortDesc:
      "Fitur multi-language (i18n), optimasi responsif mobile, dan perbaikan bug filter pencarian portal pariwisata.",
    images: ["/images/projects/djourney_jaswita.png"],
    platform: "Web Application",
    role: "Frontend Dev & IT Intern",
    timeline: "Magang 2024",
    techStack: ["HTML", "CSS", "JavaScript", "i18n", "Responsive"],
    challenge:
      "Mengakomodasi wisatawan mancanegara serta memperbaiki kelemahan responsivitas mobile & filter pencarian.",
    solution:
      "Mengimplementasikan sistem i18n multi-bahasa, menyelaraskan CSS responsive mobile, dan merefaktor filter JS.",
  },
  {
    id: "luxion",
    title: "RideXP - Arcade Game",
    category: "game",
    shortDesc:
      "Gim balap arkade sepeda fisik terhubung via ESP32 & Unity dengan papan skor real-time.",
    images: [
      "/images/projects/LuxionRideXP/luxion_ridexp.webp",
      "/images/projects/luxion_ridexp_2.webp",
      "/images/projects/luxion_ridexp_3.webp",
    ],
    platform: "Arcade Desktop App",
    role: "Project Manager & Lead Dev",
    timeline: "Jan – Jun 2025",
    techStack: ["Unity", "C#", "ESP32 IoT", "Figma", "JSON"],
    demoUrl: "https://youtube.com/preview",
    githubUrl: "https://github.com/MyusiZ3/Creative_Portfolio",
    challenge:
      "Menciptakan kendali sepeda fisik real-time via IoT ESP32 tanpa latensi pada gim arkade Unity 3D.",
    solution:
      "Membangun komunikasi serial JSON berkecepatan tinggi dan algoritma waypoint NPC AI.",
  },
  {
    id: "mindescape",
    title: "MindEscape – VR Escape Room",
    category: "game",
    shortDesc:
      "Gim Virtual Reality teka-teki ruang eskapisme 3D imersif dengan interaksi objek fisik.",
    images: [
      "/images/projects/MindescapeVR/mindescape_vr.webp",
      "/images/projects/mindescape_vr_2.webp",
      "/images/projects/mindescape_vr_3.webp",
    ],
    platform: "Meta Quest / VR",
    role: "VR Developer & Environment",
    timeline: "Jan – Jun 2025",
    techStack: ["Unity VR", "Oculus SDK", "Blender 3D"],
    demoUrl: "https://youtube.com/preview",
    challenge:
      "Mengatasi mabuk gerak (motion sickness) saat mengeksplorasi ruang simulasi virtual.",
    solution:
      "Menerapkan tata letak imersif, pengoptimalan pencahayaan 90 FPS, dan interaksi tangan intuitif.",
  },
  {
    id: "mathrift",
    title: "MathRift – Educational Platformer",
    category: "game",
    shortDesc:
      "Gim 2D platformer edukasi matematika dengan mekanik boss battle & integrasi Firestore.",
    images: [
      "/images/projects/Mathrift/mathrift.webp",
      "/images/projects/mathrift_2.webp",
      "/images/projects/mathrift_3.webp",
    ],
    platform: "Desktop / WebGL Game",
    role: "Game Developer & UI/UX",
    timeline: "Aug – Dec 2024",
    techStack: ["Unity 2D", "C#", "Firebase", "Pixel Art"],
    demoUrl: "https://youtube.com/preview",
    githubUrl: "https://github.com/MyusiZ3/Creative_Portfolio",
    challenge:
      "Mendesain kurva kesulitan teka-teki matematika tanpa merusak ritme keseruan platformer.",
    solution:
      "Menggabungkan mekanika kartu jawaban dengan animasi spritework pixel-art yang responsif.",
  },
  {
    id: "stellar",
    title: "Stellar Adventures – AR Game",
    category: "game",
    shortDesc:
      "Gim Augmented Reality ruang angkasa yang memadukan dunia fisik dan obyek digital 3D.",
    images: [
      "/images/projects/StellarAdventures/stellar_adventures.webp",
      "/images/projects/stellar_adventures_2.webp",
      "/images/projects/stellar_adventures_3.webp",
    ],
    platform: "AR Mobile App",
    role: "AR Dev & Environment Designer",
    timeline: "Aug – Dec 2024",
    techStack: ["Unity", "AR Foundation", "Blender"],
    demoUrl: "https://youtube.com/preview",
    challenge:
      "Pelacakan bidang datar dan kestabilan objek 3D di area ruangan berorientasi acak.",
    solution:
      "Menggunakan algoritma AR plane detection dan optimasi model low-poly 3D.",
  },
  {
    id: "uasprak",
    title: "U-Asprak – Mobile App Design",
    category: "app",
    shortDesc:
      "Aplikasi manajemen jadwal & evaluasi asisten praktikum laboratorium akademis.",
    images: [
      "/images/projects/UAsprak/u_asprak.webp",
      "/images/projects/u_asprak_2.webp",
      "/images/projects/u_asprak_3.webp",
    ],
    platform: "Mobile App Design",
    role: "UI/UX Designer",
    timeline: "Jan – Jun 2024",
    techStack: ["Figma", "Antigravity IDE", "User Research"],
    demoUrl: "https://behance.net",
    challenge:
      "Menyusun alur manajemen jadwal & pelaporan bagi ratusan asisten praktikum.",
    solution:
      "Merancang antarmuka modular berpresisi tinggi dengan pengujian prototipe interaktif.",
  },
  {
    id: "empedu",
    title: "empEDU – Mobile App Design",
    category: "app",
    shortDesc:
      "Aplikasi edukasi interaktif untuk membantu siswa memantau progres belajar mandiri.",
    images: [
      "/images/projects/Empedu/empedu.webp",
      "/images/projects/empedu_2.webp",
      "/images/projects/empedu_3.webp",
    ],
    platform: "Mobile App Design",
    role: "UI/UX Designer",
    timeline: "Aug – Dec 2023",
    techStack: ["Figma", "Gamification UX"],
    githubUrl: "https://github.com/MyusiZ3/Creative_Portfolio",
    challenge:
      "Meningkatkan keterlibatan siswa dalam mempelajari materi yang kompleks.",
    solution:
      "Mengintegrasikan elemen gamifikasi dan alur pengguna yang intuitif.",
  },
  {
    id: "iudex",
    title: "IUDEX – Team Portfolio Web",
    category: "web",
    shortDesc:
      "Situs web portofolio tim dengan animasi bento grid dan tata letak modern.",
    images: [
      "/images/projects/Iudex/iudex.webp",
      "/images/projects/iudex_2.webp",
      "/images/projects/iudex_3.webp",
    ],
    platform: "Web Application",
    role: "Frontend Dev & UI Designer",
    timeline: "Jan – Jun 2024",
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    demoUrl: "https://iudex.vercel.app",
    githubUrl: "https://github.com/MyusiZ3/Creative_Portfolio",
    challenge:
      "Menampilkan karya kolektif tim secara profesional dan responsif di seluruh layar.",
    solution:
      "Mengimplementasikan tata letak bento grid modern dan transisi interaktif.",
  },
  {
    id: "arch",
    title: "Arch – Personal Portfolio",
    category: "web",
    shortDesc:
      "Rancangan portofolio web pribadi minimalis dengan tipografi tebal dan estetika bersih.",
    images: [
      "/images/projects/Arch/arch.webp",
      "/images/projects/arch_2.webp",
      "/images/projects/arch_3.webp",
    ],
    platform: "Web Application",
    role: "UI/UX Designer & Dev",
    timeline: "2024",
    techStack: ["Vue.js", "TailwindCSS", "Figma"],
    demoUrl: "https://arch.vercel.app",
    challenge:
      "Menciptakan ruang portofolio yang bersih tanpa kehilangan identitas teknis.",
    solution:
      "Pemanfaatan ruang negatif dan animasi halus yang mempermudah pembacaan.",
  },
  {
    id: "merch",
    title: "Merch – Event Merchandise Design",
    category: "web",
    shortDesc:
      "Rancangan branding dan aset grafis merchandise fisik untuk acara kreatif.",
    images: ["/images/projects/merch.webp"],
    platform: "Graphic & Merchandise Design",
    role: "Graphic Designer",
    timeline: "2024",
    techStack: ["Illustrator", "Photoshop", "Branding"],
    challenge:
      "Penerapan identitas acara ke pernak-pernik fisik dengan kualitas cetak tinggi.",
    solution: "Eksplorasi material cetak dan tipografi visual yang menonjol.",
  },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "all") return projects;
  return projects.filter((p) => p.category === activeCategory.value);
});

const totalPages = computed(
  () => Math.ceil(filteredProjects.value.length / itemsPerPage.value) || 1,
);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() =>
  Math.min(
    startIndex.value + itemsPerPage.value,
    filteredProjects.value.length,
  ),
);

const paginatedProjects = computed(() => {
  return filteredProjects.value.slice(startIndex.value, endIndex.value);
});

const setCategory = (catId) => {
  activeCategory.value = catId;
  currentPage.value = 1;
};

const getStageLabel = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToProjectsTop();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    scrollToProjectsTop();
  }
};

const scrollToProjectsTop = () => {
  const el = document.getElementById("projects");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const openModal = (proj) => {
  selectedProject.value = proj;
  isModalOpen.value = true;
};
</script>
