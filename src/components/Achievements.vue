<template>
  <section id="achievements" class="bg-white py-20 px-6 lg:px-16 xl:px-40 relative overflow-hidden">
    <!-- Top Accent (Matching the screenshot style) -->
      <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        loading="lazy"
        decoding="async"
        class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform  z-0"
      />
    <div class="container mx-auto relative z-10">
      <!-- Title Section -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="mb-12"
      >
        <h2 class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-gray-900 leading-tight mb-6">
          <span class="text-gray-900">{{ t('ach_title_1') }}<br></span> {{ t('ach_title_2') }}
        </h2>
        <p class="text-gray-600 font-['Roboto'] text-sm lg:text-base max-w-2xl leading-relaxed">
          {{ t('ach_desc') }}
        </p>
        <div class="h-px w-full bg-gray-200 mt-8"></div>
      </div>

      <!-- Achievements Grid (New Professional Layout) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 mb-[5rem]">
        <div
          v-for="(item, index) in achievements"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="group bg-gray-50/50 rounded-3xl p-5 border border-gray-100 hover:border-violet-500/30 hover:bg-white hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-500 cursor-pointer"
          @click="selectedImg = item.image"
        >
          <!-- Certificate Thumbnail -->
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm">
            <ProjectImage 
              :src="item.image" 
              :alt="item.title"
              cssClass="transform group-hover:scale-105 transition-transform duration-1000"
            />
            <!-- Overlay with Zoom Icon -->
            <div class="absolute inset-0 bg-violet-600/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <div class="w-12 h-12 rounded-full bg-white/20 border border-white/50 flex items-center justify-center text-white text-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                <i class="bi bi-zoom-in"></i>
              </div>
            </div>
            <!-- Year Badge -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
               <p class="text-gray-900 text-[10px] font-bold tracking-wider">{{ item.year }}</p>
            </div>
          </div>
          
          <!-- Content -->
          <div class="space-y-3 px-1">
            <h3 class="text-gray-900 text-lg font-bold font-['Poppins'] leading-tight group-hover:text-violet-600 transition-colors duration-300">
              {{ item.title }}
            </h3>
            <p class="text-[13px] font-['Roboto'] text-gray-500 leading-relaxed line-clamp-3">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="selectedImg" class="fixed inset-0 z-10000 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" @click="selectedImg = null">
          <ProjectImage :src="selectedImg" cssClass="max-w-full max-h-full rounded-lg shadow-2xl !object-contain" />
          <button class="absolute top-6 right-6 text-white text-3xl hover:text-violet-400">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </transition>
    </Teleport>
    <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        class=" absolute bottom-[-0.2rem] lg:bottom-[-0.2rem] py-[0.1rem] left-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform rotate-180 z-0"
      />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import ProjectImage from './common/ProjectImage.vue';

const { t, lang } = useLanguage();
const selectedImg = ref(null);

const achievements = computed(() => {
  if (lang.value === 'ID') {
    return [
      {
        title: 'Asisten Praktikum (Teaching Assistant)',
        year: '2023-2025',
        image: '/images/certificates/certificate_telkom_ta_1773251189179.png',
        description: 'Telah mengabdi sebagai Asisten Praktikum untuk 5 mata kuliah multimedia dalam 4 semester.',
      },
      {
        title: 'Sertifikasi BNSP Multimedia (KKNI Level II)',
        year: '2022',
        image: '/images/certificates/certificate_bnsp_multimedia_1773251217060.png',
        description: 'Sertifikasi kompetensi nasional BNSP dalam bidang Desain Grafis, Animasi 2D, dan Audio-Video.',
      },
      {
        title: 'Sertifikat Penyelesaian Magang/PKL',
        year: '2021',
        image: '/images/certificates/certificate_internship_production_1773251239968.png',
        description: 'Penyelesaian magang 6 bulan sebagai Ketua Tim dan Desainer di Unit Produksi Multimedia, dengan evaluasi akhir "Sangat Baik".',
      },
      {
        title: 'Finalis – LKS Desain Grafis Provinsi',
        year: '2021',
        image: '/images/projects/mathrift.webp', 
        description: 'Mewakili OKU Timur di lomba LKS SMK tingkat Provinsi Sumsel, menyelesaikan pembuatan logo, mockup kemasan, serta presentasi dengan nilai 80.13.',
      },
      {
        title: 'Web Development Path – Progate',
        year: '2021',
        image: '/images/projects/iudex.webp', 
        description: 'Penyelesaian kursus modul dari dasar HTML & CSS.',
      }
    ]
  }

  return [
    {
      title: 'Teaching Assistant (Asisten Praktikum)',
      year: '2023-2025',
      image: '/images/certificates/certificate_telkom_ta_1773251189179.png',
      description: 'Appointed as a Teaching Assistant for 5 different multimedia courses across 4 semesters.',
    },
    {
      title: 'BNSP Multimedia – Certified (KKNI Level II)',
      year: '2022',
      image: '/images/certificates/certificate_bnsp_multimedia_1773251217060.png',
      description: "National certification by BNSP validating proficiency in Graphic Design / 2D Animation and Audio-Video Editing.",
    },
    {
      title: 'Vocational School Internship Completion',
      year: '2021',
      image: '/images/certificates/certificate_internship_production_1773251239968.png',
      description: 'Completed a 6-month internship as Team Leader and Designer in Multimedia Production Unit with "Excellent" grade.',
    },
    {
      title: 'Finalist – Graphic Design Technology',
      year: '2021',
      image: '/images/projects/mathrift.webp', 
      description: 'Represented OKU Timur in the provincial-level vocational student competition, completed packaging and logo design with a score of 80.13.',
    },
    {
      title: 'Web Development Path – Progate',
      year: '2021',
      image: '/images/projects/iudex.webp', 
      description: 'Completed study sections and exercises covering HTML & CSS fundamentals.',
    }
  ];
});
</script>

<style scoped>
.clip-path-slant {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
