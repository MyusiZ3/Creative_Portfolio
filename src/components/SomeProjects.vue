<template>
  <section
    id="projects"
    class="bg-white py-20 lg:py-32 xl:pb-64 px-6 lg:px-16 xl:px-40 relative overflow-hidden"
  >
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0"
    />
    <div class="container mx-auto relative z-10">
      <!-- Title & Filters -->
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
      >
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="text-left"
        >
          <div
            class="inline-flex items-center gap-2 text-violet-600 font-mono text-xs uppercase tracking-widest font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
            {{ t("project_tag") }}
          </div>
          <h2
            class="text-3xl lg:text-[40px] xl:text-[48px] font-extrabold font-['Poppins'] text-[#1a1a2e] leading-tight mb-4"
          >
            {{ t("some_proj_title_1") }}<br class="hidden sm:block" />
            {{ t("some_proj_title_2") }}
          </h2>
          <p
            class="text-[#555] font-['Roboto'] text-[13px] lg:text-[15px] max-w-xl leading-relaxed"
          >
            {{ t("some_proj_desc") }}
          </p>
        </div>

        <!-- Filter Categories -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 200 },
          }"
          class="flex flex-wrap items-center gap-2 lg:gap-2.5"
        >
          <button
            v-for="cat in filterCategories"
            :key="cat.id"
            @click="activeFilter = cat.id"
            class="px-4 py-2 rounded-xl text-xs font-semibold font-['Poppins'] transition-all duration-300 uppercase tracking-wider"
            :class="
              activeFilter === cat.id
                ? 'bg-[#1a1a2e] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
            "
          >
            {{ lang === "ID" ? cat.nameId : cat.nameEn }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
      >
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.name"
          v-motion
          :initial="{ opacity: 0, y: 40, scale: 0.97 }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              delay: index * 50,
              ease: 'easeOut',
            },
          }"
          class="project-card group cursor-pointer"
          @click="openCaseStudy(project)"
        >
          <!-- Image Container -->
          <div
            class="relative rounded-2xl overflow-hidden aspect-4/3 mb-4 border border-gray-200/80 bg-[#121214] shadow-sm group-hover:shadow-xl transition-all duration-500"
          >
            <!-- Project Image Component -->
            <ProjectImage
              :src="project.image"
              :alt="project.name"
              cssClass="transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <!-- Interaction Overlay -->
            <div
              class="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="flex items-center gap-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
              >
                <button
                  class="px-4 py-2 bg-white text-black rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-md"
                >
                  <i class="bi bi-eye"></i>
                  {{ lang === "ID" ? "Lihat Detail" : "Case Study" }}
                </button>
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  @click.stop
                  class="w-9 h-9 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl flex items-center justify-center hover:bg-white/20 transition-all shadow-md"
                >
                  <i class="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="px-1 text-left">
            <p
              class="text-violet-600 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1 flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-violet-600 inline-block"
              ></span>
              {{ project.category }}
            </p>
            <h3
              class="text-[#1a1a2e] font-['Poppins'] font-semibold text-base lg:text-lg leading-snug group-hover:text-violet-600 transition-colors duration-300"
            >
              {{ project.name }}
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
      class="absolute bottom-[-0.2rem] left-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform rotate-180 z-0"
    />

    <!-- Project Detail Modal (Case Study) -->
    <Teleport to="body">
      <transition name="case-study-fade">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[9995] flex items-center justify-center p-4 lg:p-6"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/80 backdrop-blur-md"
            @click="closeCaseStudy"
          ></div>

          <!-- Modal Content -->
          <div
            class="relative w-full max-w-4xl max-h-[85vh] bg-[#171717] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <!-- Close Button -->
            <button
              @click="closeCaseStudy"
              class="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
            >
              <i class="bi bi-x-lg text-xs"></i>
            </button>

            <!-- Left side: Visual -->
            <div
              class="w-full lg:w-1/2 min-h-[240px] lg:min-h-full bg-[#121214] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group"
            >
              <div
                class="relative z-10 w-full h-full flex items-center justify-center"
              >
                <ProjectImage
                  :src="selectedProject.image"
                  :alt="selectedProject.name"
                  cssClass="max-h-[320px] object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="absolute bottom-4 left-4 z-20">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-violet-400 font-mono text-[10px] uppercase font-semibold"
                >
                  ✦ {{ selectedProject.category }}
                </span>
              </div>
            </div>

            <!-- Right side: Content -->
            <div
              class="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto custom-scrollbar text-left flex flex-col justify-between"
            >
              <div class="space-y-6">
                <!-- Header -->
                <div class="pb-4 border-b border-white/5 pr-8">
                  <h3
                    class="text-white text-xl lg:text-2xl font-bold font-['Poppins']"
                  >
                    {{ selectedProject.name }}
                  </h3>
                </div>

                <!-- Section: Challenge -->
                <div>
                  <h4
                    class="text-[11px] text-zinc-400 font-mono font-semibold tracking-wider uppercase mb-2 flex items-center gap-2"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    {{ lang === "ID" ? "TANTANGAN" : "THE CHALLENGE" }}
                  </h4>
                  <p
                    class="text-zinc-300 font-['Roboto'] text-xs lg:text-[13px] leading-relaxed"
                  >
                    {{ selectedProject.caseStudy.challenge }}
                  </p>
                </div>

                <!-- Section: Solution -->
                <div>
                  <h4
                    class="text-[11px] text-zinc-400 font-mono font-semibold tracking-wider uppercase mb-2 flex items-center gap-2"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    {{ lang === "ID" ? "SOLUSI" : "THE SOLUTION" }}
                  </h4>
                  <p
                    class="text-zinc-300 font-['Roboto'] text-xs lg:text-[13px] leading-relaxed"
                  >
                    {{ selectedProject.caseStudy.solution }}
                  </p>
                </div>

                <!-- Results/Tech Specs Bar -->
                <div
                  class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
                >
                  <div>
                    <span
                      class="text-zinc-500 text-[10px] uppercase tracking-wider block font-semibold"
                      >STATUS</span
                    >
                    <span
                      class="text-emerald-400 text-xs font-medium flex items-center gap-1.5 mt-0.5"
                    >
                      <span
                        class="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      ></span>
                      COMPLETED
                    </span>
                  </div>
                  <div>
                    <span
                      class="text-zinc-500 text-[10px] uppercase tracking-wider block font-semibold"
                      >DURATION</span
                    >
                    <span class="text-zinc-200 text-xs font-medium mt-0.5 block"
                      >5 - 8 MONTHS</span
                    >
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div
                class="flex items-center gap-3 pt-6 mt-6 border-t border-white/5"
              >
                <a
                  v-if="selectedProject.liveLink"
                  :href="selectedProject.liveLink"
                  target="_blank"
                  class="flex-1 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-['Poppins'] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-violet-500 transition-all shadow-md shadow-violet-600/20"
                >
                  <span>{{
                    lang === "ID" ? "Lihat Live Demo" : "Live Demo"
                  }}</span>
                  <i class="bi bi-arrow-right text-xs"></i>
                </a>
                <a
                  v-if="selectedProject.githubLink"
                  :href="selectedProject.githubLink"
                  target="_blank"
                  class="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs"
                  aria-label="GitHub Repository"
                >
                  <i class="bi bi-github text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";
import ProjectImage from "./common/ProjectImage.vue";

const { t, lang } = useLanguage();

const selectedProject = ref(null);
const activeFilter = ref("all");

const filterCategories = [
  { id: "all", nameId: "Semua", nameEn: "All" },
  { id: "game", nameId: "Game", nameEn: "Game" },
  { id: "app", nameId: "Desain App", nameEn: "App Design" },
  { id: "web", nameId: "Web & Portofolio", nameEn: "Web & Portfolio" },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects.value;
  return projects.value.filter((p) => p.filterType === activeFilter.value);
});

const openCaseStudy = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeCaseStudy = () => {
  selectedProject.value = null;
  document.body.style.overflow = "";
};

const projects = computed(() => {
  const isId = lang.value === "ID";
  return [
    {
      name: isId ? "Djaswita AR (Tugas Akhir)" : "Djaswita AR (Thesis)",
      category: isId
        ? "Aplikasi AR & Web CMS (Unified)"
        : "Unified AR & Web CMS App",
      bg: "#7c3aed",
      image: "/images/projects/dynamic_ar_cms.png",
      filterType: "game",
      githubLink: "https://github.com/MyusiZ3/DjaswitaAR-Fix",
      caseStudy: {
        challenge: isId
          ? "Aplikasi AR konvensional mengharuskan build ulang APK setiap kali terjadi perubahan konten 3D atau informasi."
          : "Conventional AR apps require complete binary rebuilds whenever 3D assets or information are updated.",
        solution: isId
          ? "Membangun satu sistem terintegrasi antara aplikasi AR dinamis dan Web Admin Dashboard (Vite + Supabase) untuk manajemen CRUD konten real-time."
          : "Built a unified system combining dynamic AR app and a Vite & Supabase Web Admin Dashboard for real-time remote CRUD content management.",
      },
    },
    {
      name: "Mathmagic (HKI)",
      category: isId
        ? "Gim Edukasi & Web Admin"
        : "Educational Game & Web Admin",
      bg: "#059669",
      image: "/images/projects/Mathmagic_hki.png",
      filterType: "game",
      caseStudy: {
        challenge: isId
          ? "Menyediakan gim pembelajaran matematika SD kelas 4 yang fleksibel parameternya serta memuat analitik siswa bagi guru."
          : "Providing a 4th grade elementary math game with configurable game rules and comprehensive student learning analytics for teachers.",
        solution: isId
          ? "Merancang UI gim ceria Unity, memprogram sistem HP/Timer, serta membangun Web Admin Dashboard terpusat (HKI Certified)."
          : "Designed colorful Unity UI, programmed HP/timer mechanics, and built a centralized Web Admin Dashboard (HKI Certified).",
      },
    },
    {
      name: "DJourney Jaswita Jabar",
      category: isId ? "Portal Web Pariwisata" : "Tourism Web Portal",
      bg: "#2563eb",
      image: "/images/projects/djourney_jaswita.png",
      filterType: "web",
      caseStudy: {
        challenge: isId
          ? "Meningkatkan jangkauan wisatawan mancanegara serta memperbaiki masalah responsivitas mobile dan bug filter pencarian."
          : "Expanding international tourist reach while resolving mobile responsiveness issues and search filter bugs on the DJourney platform.",
        solution: isId
          ? "Mengimplementasikan lokalisasi multi-bahasa (i18n), menyelaraskan CSS responsive layout, dan merefaktor logika filter JS."
          : "Implemented multi-language (i18n) localization, aligned responsive mobile CSS rules, and refactored JavaScript filter logic.",
      },
    },
    {
      name: "Luxion RideXP",
      category: isId ? "Proyek Game Arkade" : "Arcade Game Project",
      bg: "#C0392B",
      image: "/images/projects/luxion_ridexp.webp",
      filterType: "game",
      liveLink: "https://youtube.com/preview",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId
          ? "Menciptakan pengalaman gim arkade yang memacu andrenalin sekaligus ramah bagi segala usia."
          : "Creating an adrenaline-pumping arcade gaming experience that remains accessible to all ages.",
        solution: isId
          ? "Menggunakan sistem kendali responsif dan ragam level yang meningkat secara bertahap."
          : "Implemented responsive control systems and progressive difficulty levels to maintain engagement.",
      },
    },
    {
      name: "MindEscape: VR Chamber",
      category: isId ? "Proyek Game VR" : "VR Game Project",
      bg: "#7c3aed",
      image: "/images/projects/mindescape_vr.webp",
      filterType: "game",
      liveLink: "https://youtube.com/preview",
      caseStudy: {
        challenge: isId
          ? "Mengatasi mabuk gerak (motion sickness) pada dunia realitas virtual tingkat imersif tinggi."
          : "Overcoming motion sickness in high-immersion VR environments during exploration.",
        solution: isId
          ? "Optimasi frame rate dan sinkronisasi gerakan fisik serta visual dalam lingkungan XR."
          : "Optimized frame rates and implemented hybrid locomotion systems to ensure comfort.",
      },
    },
    {
      name: "MathRift",
      category: isId
        ? "Game Edukasi Platformer 2D"
        : "Educational 2D Platformer Game",
      bg: "#1a3a4a",
      image: "/images/projects/mathrift.webp",
      filterType: "game",
      liveLink: "https://youtube.com/preview",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId
          ? "Bagaimana membuat matematika terasa menyenangkan melalui mekanisme mekanika gim 2D."
          : "How to make mathematics feel fun and engaging through 2D platforming mechanics.",
        solution: isId
          ? "Integrasi soal matematika ke dalam teka-teki lingkungan dan kepingan artefak gim."
          : "Integrated equations into environmental puzzles and progression tokens effectively.",
      },
    },
    {
      name: "Stellar Adventures",
      category: isId ? "Proyek Game AR" : "AR Game Project",
      bg: "#1a2a3a",
      image: "/images/projects/stellar_adventures.webp",
      filterType: "game",
      liveLink: "https://youtube.com/preview",
      caseStudy: {
        challenge: isId
          ? "Pelacakan obyek 3D secara presisi pada lingkungan ruangan yang berpencahayaan rendah."
          : "Ensuring precision 3D object tracking in low-light indoor environments for AR apps.",
        solution: isId
          ? "Penerapan algoritma ARCore/ARKit yang dioptimasi dengan penanda fidusia dinamis."
          : "Leveraged ARCore/ARKit with custom anchor-point optimizations for stability.",
      },
    },
    {
      name: "U-Asprak",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#5b6abf",
      image: "/images/projects/u_asprak.webp",
      filterType: "app",
      liveLink: "https://behance.net",
      caseStudy: {
        challenge: isId
          ? "Membangun efisiensi komunikasi antara asisten praktikum dengan jumlah mahasiswa yang besar."
          : "Building communication efficiency between lab assistants and massive student groups.",
        solution: isId
          ? "Rancangan antarmuka yang memusatkan penjadwalan serta sistem pelaporan terintegrasi."
          : "Designed a centralized hub for scheduling and automated reporting systems.",
      },
    },
    {
      name: "empEDU",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#2a4a3a",
      image: "/images/projects/empedu.webp",
      filterType: "app",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId
          ? "Meningkatkan daya pikat materi pembelajaran melalui ragam rancangan aplikasi interaktif."
          : "Boosting engagement for educational content through interactive mobile designs.",
        solution: isId
          ? "Penggunaan prinsip gamifikasi dan tata letak yang ramah bagi pengguna awam."
          : "Applied gamification principles and UX patterns tailored for accessible learning.",
      },
    },
    {
      name: "IUDEX",
      category: isId
        ? "Desain Web Portofolio Tim"
        : "Team Portfolio Web Design",
      bg: "#6a5acd",
      image: "/images/projects/iudex.webp",
      filterType: "web",
      liveLink: "https://iudex.vercel.app",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId
          ? "Menampilkan identitas tim yang solid dalam satu wadah portofolio digital yang dinamis."
          : "Showcasing a cohesive team identity within a single, dynamic digital portfolio.",
        solution: isId
          ? "Sistem grid modern dengan balutan animasi guna menghantarkan informasi secara estetik."
          : "Implemented a modern bento-grid system with animejs for flow and elegance.",
      },
    },
    {
      name: "Arch",
      category: isId
        ? "Desain Web Portofolio Pribadi"
        : "Personal Portfolio Web Design",
      bg: "#7c3aed",
      image: "/images/projects/arch.webp",
      filterType: "web",
      liveLink: "https://arch.vercel.app",
      caseStudy: {
        challenge: isId
          ? "Rancangan tata letak minimalis namun mampu mewakili ragam keahlian teknis secara utuh."
          : "Designing a minimalist layout that adequately Represents a wide technical skill set.",
        solution: isId
          ? "Eksperimen tipografi tebal dan pemanfaatan ruang kosong (white space) yang seimbang."
          : "Experimented with bold typography and strategic white space utilization.",
      },
    },
    {
      name: "Merch",
      category: isId
        ? "Desain Merchandise untuk Acara"
        : "Merch design for Event",
      bg: "#8b5cf6",
      image: "/images/projects/merch.webp",
      filterType: "web",
      caseStudy: {
        challenge: isId
          ? "Penyesuaian identitas acara ke dalam obyek fisik tanpa menghilangkan kesan modernitas."
          : "Translating event branding into physical objects while maintaining a modern vibe.",
        solution: isId
          ? "Eksplorasi material dan teknik cetak guna menonjolkan aset grafis berkualitas tinggi."
          : "Explored materials and printing techniques to emphasize high-quality graphic assets.",
      },
    },
  ];
});
</script>

<style scoped>
.project-card {
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.case-study-fade-enter-active,
.case-study-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.case-study-fade-enter-from,
.case-study-fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
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
</style>
