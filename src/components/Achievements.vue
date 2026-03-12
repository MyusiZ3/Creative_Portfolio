<template>
  <section id="achievements" class="bg-white py-20 px-6 lg:px-40 relative overflow-hidden">
    <!-- Top Accent (Matching the screenshot style) -->
      <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        loading="lazy"
        decoding="async"
        class="absolute top-0 right-0 w-32 lg:w-180 pointer-events-none transform  z-0"
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
          <span class="text-violet-600">Achievements</span> &<br />Certificates
        </h2>
        <p class="text-gray-600 font-['Roboto'] text-sm lg:text-base max-w-2xl leading-relaxed">
          Achievements and certifications that reflect my creative journey — this section highlights a few selected milestones that shaped my skills in multimedia and digital design.
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
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
          <img :src="selectedImg" class="max-w-full max-h-full rounded-lg shadow-2xl" />
          <button class="absolute top-6 right-6 text-white text-3xl hover:text-violet-400">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </transition>
    </Teleport>
    <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        class=" absolute bottom-0 left-0 w-32 lg:w-180 pointer-events-none transform rotate-180 z-0"
      />
  </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedImg = ref(null);

const achievements = [
  {
    title: 'Teaching Assistant (Asisten Praktikum)',
    year: '2023-2025',
    image: '/images/certificates/certificate_telkom_ta_1773251189179.png',
    description: 'Appointed as a Teaching Assistant for 5 different multimedia courses across 4 semesters.',
    points: [
      'Supported lecturers in preparing materials, demos, and final project assessments',
      'Reviewed student projects and provided feedback'
    ],
    linkText: 'More'
  },
  {
    title: 'BNSP Multimedia – Certified (KKNI Level II)',
    year: '2022',
    image: '/images/certificates/certificate_bnsp_multimedia_1773251217060.png',
    description: "National certification by BNSP (Indonesia's Professional Certification Authority) validating proficiency in:",
    points: [
      'Graphic Design / 2D Animation',
      'Print Graphic Design / Audio-Video Editing'
    ],
    footer: 'Total: 14 verified skill units'
  },
  {
    title: 'Vocational School Internship Completion',
    year: '2021',
    image: '/images/certificates/certificate_internship_production_1773251239968.png',
    description: 'Completed a 6-month internship as Team Leader and Designer in Multimedia Production Unit.',
    points: [
      'Designed and produced printed merchandise',
      'Final evaluation: "Sangat Baik" (Excellent)'
    ]
  },
  {
    title: 'Finalist – Graphic Design Technology',
    year: '2021',
    image: '/images/projects/mathrift.webp', // Using existing as placeholder for 4th if no gen
    description: 'Represented OKU Timur in the provincial-level vocational student competition.',
    points: [
      'Completed modules in manual/digital logo design, digital packaging mockup, and creative ideation.',
      'Achieved a final score of 80.13 out of 100'
    ]
  },
  {
    title: 'Web Development Path – Progate',
    year: '2021',
    image: '/images/projects/iudex.webp', // Using existing as placeholder for 5th
    description: 'Completed 4 study sections and 3 exercises covering HTML & CSS fundamentals.',
    linkText: 'VIEW'
  }
];
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
