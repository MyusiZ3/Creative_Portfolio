<template>
  <section id="achievements" class="bg-white py-20 px-6 lg:px-40 relative overflow-hidden">
    <!-- Top Accent (Matching the screenshot style) -->
    <div class="absolute top-0 right-0 w-1/3 h-24 bg-[#1a1a1e] clip-path-slant hidden lg:block"></div>

    <div class="container mx-auto relative z-10">
      <!-- Title Section -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="mb-12"
      >
        <h2 class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-[#1a1a2e] leading-tight mb-6">
          Achievements &<br />Certificates
        </h2>
        <p class="text-[#555] font-['Roboto'] text-sm lg:text-base max-w-2xl leading-relaxed">
          Achievements and certifications that reflect my creative journey — this section highlights a few selected milestones that shaped my skills in multimedia and digital design.
        </p>
        <div class="h-px w-full bg-gray-200 mt-8"></div>
      </div>

      <!-- Achievements List -->
      <div class="space-y-6">
        <div
          v-for="(item, index) in achievements"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="bg-[#141414] rounded-4xl p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 border border-white/5"
        >
          <!-- Text Info Left -->
          <div class="w-full lg:w-1/4 text-center lg:text-left">
            <h3 class="text-xl lg:text-2xl font-bold text-white mb-2 font-['Poppins'] group-hover:text-violet-400 transition-colors duration-300">
              {{ item.title }}
            </h3>
            <p class="text-violet-500 font-bold text-sm lg:text-base font-['Roboto']">
              {{ item.year }}
            </p>
          </div>

          <!-- Certificate Image Center -->
          <div class="w-full lg:w-2/5 relative">
            <div class="relative rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.03] transition-transform duration-500 cursor-zoom-in" @click="selectedImg = item.image">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-auto aspect-video object-cover"
              />
              <div class="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Description Right -->
          <div class="w-full lg:w-1/3">
            <div class="flex items-start gap-4 mb-4">
              <i class="bi bi-quote text-3xl text-violet-500 transform rotate-180"></i>
              <p class="text-[#b0b5bf] text-sm lg:text-base leading-relaxed font-['Roboto']">
                {{ item.description }}
              </p>
            </div>
            
            <ul v-if="item.points" class="space-y-2 ml-10">
              <li v-for="(point, pIdx) in item.points" :key="pIdx" class="text-[#8E949F] text-xs lg:text-sm flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500/60"></span>
                {{ point }}
              </li>
            </ul>

            <div v-if="item.linkText" class="mt-6 ml-10">
              <button class="text-white text-xs font-bold tracking-widest uppercase hover:text-violet-400 transition-colors flex items-center gap-2 group/btn">
                {{ item.linkText }}
                <i class="bi bi-arrow-right transition-transform group-hover/btn:translate-x-1"></i>
              </button>
            </div>
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
</style>
