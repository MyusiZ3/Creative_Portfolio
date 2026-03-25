<template>
  <section id="projects" class="bg-white py-20 lg:py-32 xl:pb-64 px-6 lg:px-16 xl:px-40 relative overflow-hidden">
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0"
    />
    <div class="container mx-auto relative z-10">
      
      <!-- Title & Filters -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="text-left"
        >
          <div class="inline-block bg-violet-500/10 text-violet-400 font-['Poppins'] font-bold text-[12px] lg:text-[14px] px-4 py-1.5 rounded-full mb-4 border border-violet-500/20">
            {{ t('project_tag') }}
          </div>
          <h2 class="text-3xl lg:text-[40px] xl:text-[48px] font-extrabold font-['Poppins'] text-[#1a1a2e] leading-tight mb-4">
            {{ t('some_proj_title_1') }}<br class="hidden sm:block" />
            {{ t('some_proj_title_2') }}
          </h2>
          <p class="text-[#555] font-['Roboto'] text-[13px] lg:text-[15px] max-w-xl leading-relaxed">
            {{ t('some_proj_desc') }}
          </p>
        </div>

        <!-- Filter Categories -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          class="flex flex-wrap items-center gap-2 lg:gap-3"
        >
          <button 
            v-for="cat in filterCategories" 
            :key="cat.id"
            @click="activeFilter = cat.id"
            class="px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-bold transition-all duration-300 border uppercase tracking-wider"
            :class="activeFilter === cat.id 
              ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-600/30' 
              : 'border-gray-200 text-gray-500 hover:border-violet-500 hover:text-white bg-white'"
          >
            {{ lang === 'ID' ? cat.nameId : cat.nameEn }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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
            class="relative rounded-3xl overflow-hidden aspect-4/3 mb-4 shadow-sm group-hover:shadow-2xl group-hover:shadow-violet-900/10 transition-all duration-500"
            :style="{ backgroundColor: project.bg }"
          >
            <img
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <!-- Interaction Overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <div class="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <button class="px-5 py-2.5 bg-white text-black rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-violet-600 hover:text-white transition-all shadow-xl">
                  <i class="bi bi-eye-fill"></i> {{ lang === 'ID' ? 'Lihat Detail' : 'Case Study' }}
                </button>
                <a v-if="project.liveLink" :href="project.liveLink" target="_blank" @click.stop class="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl flex items-center justify-center hover:bg-white/40 transition-all shadow-xl">
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="px-1 transform transition-transform duration-500 group-hover:translate-x-1 overflow-hidden">
            <p class="text-violet-500 font-['Roboto'] text-[10px] lg:text-[11px] font-bold uppercase tracking-widest mb-1 lg:mb-1.5 flex items-center gap-2">
              <span class="shrink-0 w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
              {{ project.category }}
            </p>
            <h3 class="text-[#1a1a2e] font-['Poppins'] font-semibold text-lg lg:text-xl leading-snug group-hover:text-violet-600 transition-colors duration-300">
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
        <div v-if="selectedProject" class="fixed inset-0 z-10000 flex items-center justify-center p-4 lg:p-8">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl" @click="closeCaseStudy"></div>
          
          <!-- Modal Content -->
          <div class="relative w-full max-w-5xl max-h-[90vh] bg-[#14141d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-violet-500/10">
            <!-- Close Button -->
            <button @click="closeCaseStudy" class="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all">
              <i class="bi bi-x-lg"></i>
            </button>

            <!-- Left side: Visual -->
            <div class="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden relative group">
              <img :src="selectedProject.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-linear-to-t from-[#14141d] to-transparent opacity-60"></div>
              <div class="absolute bottom-6 left-6 flex flex-col gap-1">
                <span class="text-violet-400 text-xs font-bold uppercase tracking-widest">{{ selectedProject.category }}</span>
                <h3 class="text-white text-2xl lg:text-3xl font-bold font-['Poppins']">{{ selectedProject.name }}</h3>
              </div>
            </div>

            <!-- Right side: Content -->
            <div class="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-linear-to-br from-white/5 to-transparent">
              <div class="space-y-10">
                <!-- Section: Challenge -->
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                      <i class="bi bi-puzzle-fill"></i>
                    </div>
                    <h4 class="text-white font-bold font-['Poppins'] uppercase tracking-wider text-sm">
                      {{ lang === 'ID' ? 'TANTANGAN' : 'THE CHALLENGE' }}
                    </h4>
                  </div>
                  <p class="text-gray-400 font-['Roboto'] text-sm lg:text-[15px] leading-relaxed">
                    {{ selectedProject.caseStudy.challenge }}
                  </p>
                </div>

                <!-- Section: Solution -->
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                      <i class="bi bi-lightbulb-fill"></i>
                    </div>
                    <h4 class="text-white font-bold font-['Poppins'] uppercase tracking-wider text-sm">
                      {{ lang === 'ID' ? 'SOLUSI' : 'THE SOLUTION' }}
                    </h4>
                  </div>
                  <p class="text-gray-400 font-['Roboto'] text-sm lg:text-[15px] leading-relaxed">
                    {{ selectedProject.caseStudy.solution }}
                  </p>
                </div>

                <!-- Results/Tech -->
                <div class="pt-6 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6">
                  <div>
                    <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">STATUS</p>
                    <span class="text-green-400 text-sm font-bold flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      COMPLETED
                    </span>
                  </div>
                   <div>
                    <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">DURATION</p>
                    <span class="text-white text-sm font-bold">5 - 8 MONTHS</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center gap-4 pt-4">
                  <a v-if="selectedProject.liveLink" :href="selectedProject.liveLink" target="_blank" class="px-6 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
                    <i class="bi bi-box-arrow-up-right"></i> {{ lang === 'ID' ? 'Lihat Live Demo' : 'Live Demo' }}
                  </a>
                  <a v-if="selectedProject.githubLink" :href="selectedProject.githubLink" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                    <i class="bi bi-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

const selectedProject = ref(null);
const activeFilter = ref('all');

const filterCategories = [
  { id: 'all', nameId: 'Semua', nameEn: 'All' },
  { id: 'game', nameId: 'Game', nameEn: 'Game' },
  { id: 'app', nameId: 'Desain App', nameEn: 'App Design' },
  { id: 'web', nameId: 'Web & Portofolio', nameEn: 'Web & Portfolio' }
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value;
  return projects.value.filter(p => p.filterType === activeFilter.value);
});

const openCaseStudy = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeCaseStudy = () => {
  selectedProject.value = null;
  document.body.style.overflow = '';
};

const projects = computed(() => {
  const isId = lang.value === 'ID';
  return [
    {
      name: "Luxion RideXP",
      category: isId ? "Proyek Game Arkade" : "Arcade Game Project",
      bg: "#C0392B",
      image: "/images/projects/luxion_ridexp.webp",
      filterType: 'game',
      liveLink: "https://youtube.com/preview",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId 
          ? "Menciptakan pengalaman gim arkade yang memacu andrenalin sekaligus ramah bagi segala usia."
          : "Creating an adrenaline-pumping arcade gaming experience that remains accessible to all ages.",
        solution: isId
          ? "Menggunakan sistem kendali responsif dan ragam level yang meningkat secara bertahap."
          : "Implemented responsive control systems and progressive difficulty levels to maintain engagement."
      }
    },
    {
      name: "MindEscape: VR Chamber",
      category: isId ? "Proyek Game VR" : "VR Game Project",
      bg: "#7c3aed",
      image: "/images/projects/mindescape_vr.webp",
      filterType: 'game',
      liveLink: "https://youtube.com/preview",
      caseStudy: {
        challenge: isId 
          ? "Mengatasi mabuk gerak (motion sickness) pada dunia realitas virtual tingkat imersif tinggi."
          : "Overcoming motion sickness in high-immersion VR environments during exploration.",
        solution: isId
          ? "Optimasi frame rate dan sinkronisasi gerakan fisik serta visual dalam lingkungan XR."
          : "Optimized frame rates and implemented hybrid locomotion systems to ensure comfort."
      }
    },
    {
      name: "MathRift",
      category: isId ? "Game Edukasi Platformer 2D" : "Educational 2D Platformer Game",
      bg: "#1a3a4a",
      image: "/images/projects/mathrift.webp",
      filterType: 'game',
      liveLink: "https://youtube.com/preview",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId 
          ? "Bagaimana membuat matematika terasa menyenangkan melalui mekanisme mekanika gim 2D."
          : "How to make mathematics feel fun and engaging through 2D platforming mechanics.",
        solution: isId
          ? "Integrasi soal matematika ke dalam teka-teki lingkungan dan kepingan artefak gim."
          : "Integrated equations into environmental puzzles and progression tokens effectively."
      }
    },
    {
      name: "Stellar Adventures",
      category: isId ? "Proyek Game AR" : "AR Game Project",
      bg: "#1a2a3a",
      image: "/images/projects/stellar_adventures.webp",
      filterType: 'game',
      liveLink: "https://youtube.com/preview",
      caseStudy: {
        challenge: isId 
          ? "Pelacakan obyek 3D secara presisi pada lingkungan ruangan yang berpencahayaan rendah."
          : "Ensuring precision 3D object tracking in low-light indoor environments for AR apps.",
        solution: isId
          ? "Penerapan algoritma ARCore/ARKit yang dioptimasi dengan penanda fidusia dinamis."
          : "Leveraged ARCore/ARKit with custom anchor-point optimizations for stability."
      }
    },
    {
      name: "U-Asprak",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#5b6abf",
      image: "/images/projects/u_asprak.webp",
      filterType: 'app',
      liveLink: "https://behance.net",
      caseStudy: {
        challenge: isId 
          ? "Membangun efisiensi komunikasi antara asisten praktikum dengan jumlah mahasiswa yang besar."
          : "Building communication efficiency between lab assistants and massive student groups.",
        solution: isId
          ? "Rancangan antarmuka yang memusatkan penjadwalan serta sistem pelaporan terintegrasi."
          : "Designed a centralized hub for scheduling and automated reporting systems."
      }
    },
    {
      name: "empEDU",
      category: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#2a4a3a",
      image: "/images/projects/empedu.webp",
      filterType: 'app',
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId 
          ? "Meningkatkan daya pikat materi pembelajaran melalui ragam rancangan aplikasi interaktif."
          : "Boosting engagement for educational content through interactive mobile designs.",
        solution: isId
          ? "Penggunaan prinsip gamifikasi dan tata letak yang ramah bagi pengguna awam."
          : "Applied gamification principles and UX patterns tailored for accessible learning."
      }
    },
    {
      name: "IUDEX",
      category: isId ? "Desain Web Portofolio Tim" : "Team Portfolio Web Design",
      bg: "#6a5acd",
      image: "/images/projects/iudex.webp",
      filterType: 'web',
      liveLink: "https://iudex.vercel.app",
      githubLink: "https://github.com/MyusiZ3/Creative_Portfolio",
      caseStudy: {
        challenge: isId 
          ? "Menampilkan identitas tim yang solid dalam satu wadah portofolio digital yang dinamis."
          : "Showcasing a cohesive team identity within a single, dynamic digital portfolio.",
        solution: isId
          ? "Sistem grid modern dengan balutan animasi guna menghantarkan informasi secara estetik."
          : "Implemented a modern bento-grid system with animejs for flow and elegance."
      }
    },
    {
      name: "Arch",
      category: isId ? "Desain Web Portofolio Pribadi" : "Personal Portfolio Web Design",
      bg: "#7c3aed",
      image: "/images/projects/arch.webp",
      filterType: 'web',
      liveLink: "https://arch.vercel.app",
      caseStudy: {
        challenge: isId 
          ? "Rancangan tata letak minimalis namun mampu mewakili ragam keahlian teknis secara utuh."
          : "Designing a minimalist layout that adequately Represents a wide technical skill set.",
        solution: isId
          ? "Eksperimen tipografi tebal dan pemanfaatan ruang kosong (white space) yang seimbang."
          : "Experimented with bold typography and strategic white space utilization."
      }
    },
    {
      name: "Merch",
      category: isId ? "Desain Merchandise untuk Acara" : "Merch design for Event",
      bg: "#8b5cf6",
      image: "/images/projects/merch.webp",
      filterType: 'web',
      caseStudy: {
        challenge: isId 
          ? "Penyesuaian identitas acara ke dalam obyek fisik tanpa menghilangkan kesan modernitas."
          : "Translating event branding into physical objects while maintaining a modern vibe.",
        solution: isId
          ? "Eksplorasi material dan teknik cetak guna menonjolkan aset grafis berkualitas tinggi."
          : "Explored materials and printing techniques to emphasize high-quality graphic assets."
      }
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
