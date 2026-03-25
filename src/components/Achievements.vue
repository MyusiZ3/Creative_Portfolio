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

      <!-- Achievements List (Minimalist Version) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-10 mb-[5rem]">
        <div
          v-for="(item, index) in achievements"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 100 } }"
          class="group relative flex items-start gap-6 border-b border-gray-200 pb-8 hover:border-violet-500 transition-colors duration-500"
        >
          <!-- Small Thumbnail -->
          <div class="w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded-xl overflow-hidden cursor-zoom-in relative grayscale group-hover:grayscale-0 transition-all duration-500 border border-gray-200 shadow-sm" @click="selectedImg = item.image">
            <ProjectImage 
              :src="item.image" 
              :alt="item.title"
              cssClass="transform group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <!-- Minimal Text Content -->
          <div class="flex-1 space-y-2">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
              <h3 class="text-gray-900 text-lg font-bold font-['Poppins'] leading-tight group-hover:text-violet-600 transition-colors duration-300 pr-4">
                {{ item.title }}
              </h3>
              <p class="text-gray-500 text-sm font-['Roboto'] shrink-0 font-medium tracking-wide">
                {{ item.year }}
              </p>
            </div>
            
            <p class="text-sm font-['Roboto'] text-gray-600 leading-snug line-clamp-2">
              {{ item.description }}
            </p>

            <button v-if="item.linkText" class="mt-3 text-violet-600 hover:text-violet-800 font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 group/btn">
              {{ item.linkText }}
              <i class="bi bi-arrow-right transition-transform group-hover/btn:translate-x-1"></i>
            </button>
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
        linkText: 'Selengkapnya'
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
        linkText: 'LIHAT'
      }
    ]
  }

  return [
    {
      title: 'Teaching Assistant (Asisten Praktikum)',
      year: '2023-2025',
      image: '/images/certificates/certificate_telkom_ta_1773251189179.png',
      description: 'Appointed as a Teaching Assistant for 5 different multimedia courses across 4 semesters.',
      linkText: 'More'
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
      linkText: 'VIEW'
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
