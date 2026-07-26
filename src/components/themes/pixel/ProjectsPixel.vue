<template>
  <section id="projects" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-[#00ff66] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#00ff66] shadow-[2px_2px_0px_#000]">
            ✦ MISSION SELECT
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold uppercase mt-2">
            ARCADE <span class="text-[#00ff66]">PROJECTS</span>
          </h2>
        </div>

        <!-- Filter Category Tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-3 py-1.5 text-xs font-bold uppercase transition-all border-2"
            :class="[
              activeCategory === cat.id
                ? 'bg-[#00ff66] text-black border-black shadow-[3px_3px_0px_#000000]'
                : 'bg-[#161b22] text-[#8b949e] border-black hover:text-white'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid (Arcade Cartridges) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(proj, index) in filteredProjects"
          :key="proj.id"
          class="bg-[#161b22] border-4 border-black p-5 shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_#00ff66] transition-all flex flex-col justify-between group cursor-pointer"
          @click="openModal(proj)"
        >
          <div>
            <!-- Cartridge Header Badge -->
            <div class="flex items-center justify-between border-b-2 border-[#30363d] pb-3 mb-4">
              <span class="text-[10px] font-bold text-[#ffd700] uppercase bg-[#0d1117] px-2 py-0.5 border border-[#ffd700]">
                STAGE 0{{ index + 1 }}
              </span>
              <span class="text-[10px] font-bold text-[#00ff66] flex items-center gap-1">
                <span>CLEAR</span> ⭐⭐⭐
              </span>
            </div>

            <!-- Project Image Preview -->
            <div class="relative overflow-hidden border-2 border-black bg-[#0d1117] aspect-video mb-4">
              <img
                :src="proj.image"
                :alt="proj.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] text-[#00f0ff] font-bold uppercase border border-[#00f0ff]">
                {{ proj.category }}
              </div>
            </div>

            <!-- Title & Short Description -->
            <h3 class="text-lg font-bold text-[#f0f6fc] uppercase group-hover:text-[#00ff66] transition-colors">
              {{ proj.title }}
            </h3>
            <p class="text-xs text-[#8b949e] line-clamp-2 mt-1 leading-relaxed">
              {{ proj.shortDesc }}
            </p>
          </div>

          <!-- Bottom Meta Stack & Action -->
          <div class="mt-6 pt-4 border-t-2 border-[#30363d] flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span
                v-for="t in proj.techStack?.slice(0, 3)"
                :key="t"
                class="text-[9px] px-1.5 py-0.5 bg-[#0d1117] text-[#8b949e] border border-[#30363d]"
              >
                {{ t }}
              </span>
            </div>

            <button class="text-xs font-bold text-[#00ff66] uppercase group-hover:translate-x-1 transition-transform flex items-center gap-1">
              <span>VIEW</span>
              <span>►</span>
            </button>
          </div>

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
import { ref, computed } from 'vue';
import PixelCaseStudyModal from './PixelCaseStudyModal.vue';

const activeCategory = ref('all');
const isModalOpen = ref(false);
const selectedProject = ref(null);

const categories = [
  { id: 'all', label: 'ALL STAGES' },
  { id: 'game', label: 'GAMES & VR' },
  { id: 'app', label: 'MOBILE APPS' },
  { id: 'web', label: 'WEB PORTAL' }
];

const projects = [
  {
    id: 'mathrift',
    title: 'MathRift 2D Platformer',
    category: 'game',
    shortDesc: 'Gim platformer edukasi matematika dengan mekanik boss battle & integrasi Firestore real-time.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
    platform: 'Unity 2D / PC',
    role: 'Lead Game Dev',
    timeline: '4 Months',
    techStack: ['Unity 2D', 'C#', 'Firebase', 'Pixel Art'],
    challenge: 'Mendesain kurva kesulitan gim matematika tanpa mengurangi keseruan permainan platformer retro.',
    solution: 'Mengimplementasikan sistem kartu kekuatan matematika dan animasi spritework yang mulus.'
  },
  {
    id: 'mindescape',
    title: 'MindEscape VR Chamber',
    category: 'game',
    shortDesc: 'Pengalaman Virtual Reality teka-teki ruang eskapisme 3D dengan interaksi lokomosi fisik.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800',
    platform: 'Meta Quest / VR',
    role: 'VR Developer',
    timeline: '5 Months',
    techStack: ['Unity VR', 'XR Interaction', 'Blender 3D'],
    challenge: 'Mengatasi motion sickness pada pengguna VR pemula saat menavigasi rintangan spasial.',
    solution: 'Mengembangkan sistem teleporasi berbasis titik jangkar dan fisika tangan yang intuitif.'
  },
  {
    id: 'uasprak',
    title: 'U-Asprak Lab Portal',
    category: 'app',
    shortDesc: 'Aplikasi manajemen jadwal & evaluasi asisten praktikum laboratorium akademis.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    platform: 'Flutter Mobile',
    role: 'Fullstack Mobile',
    timeline: '3 Months',
    techStack: ['Flutter', 'Dart', 'Firebase Auth'],
    challenge: 'Sinkronisasi data multi-user bersamaan tanpa adanya bentrokan jadwal asisten.',
    solution: 'Menggunakan pembaruan Firestore real-time listener dan otentikasi peran pengguna.'
  },
  {
    id: 'luxion',
    title: 'Luxion RideXP Arcade',
    category: 'game',
    shortDesc: 'Simulasi balap arkade dengan gaya cyberpunk neon dan papan skor global.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800',
    platform: 'WebGL / Web',
    role: 'Game Designer',
    timeline: '2 Months',
    techStack: ['Unity WebGL', 'Three.js', 'Shader Graph'],
    challenge: 'Mengabaikan beban aset 3D besar pada browser tanpa mengorbankan framerate 60 FPS.',
    solution: 'Optimasi tekstur low-poly, occlusion culling, dan shader pixelated kustom.'
  }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(p => p.category === activeCategory.value);
});

const openModal = (proj) => {
  selectedProject.value = proj;
  isModalOpen.value = true;
};
</script>
