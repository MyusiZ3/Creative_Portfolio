<template>
  <section
    id="achievements"
    class="bg-white py-20 px-6 lg:px-16 xl:px-40 relative overflow-hidden"
  >
    <!-- Top Accent (Matching the screenshot style) -->
    <img
      src="/images/accents/accent_3.webp"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0"
    />
    <div class="container mx-auto relative z-10">
      <!-- Title Section -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        class="mb-12"
      >
        <h2
          class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-gray-900 leading-tight mb-6"
        >
          <span class="text-gray-900">{{ t("ach_title_1") }}<br /></span>
          {{ t("ach_title_2") }}
        </h2>
        <p
          class="text-gray-600 font-['Roboto'] text-sm lg:text-base max-w-2xl leading-relaxed mt-6"
        >
          {{ t("ach_desc") }}
        </p>
        <div class="h-px w-full bg-gray-200 mt-8"></div>
      </div>

      <!-- Achievements Grid (Reference Image 2 Inspired Clean Editorial Cards) -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 mb-12"
      >
        <div
          v-for="(item, index) in achievements"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
          class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-[#121212] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left h-full"
          @click="item.pdfUrl ? openPdf(item.pdfUrl) : openImageModal(item)"
        >
          <div>
            <!-- Certificate Thumbnail Container -->
            <div
              class="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-100"
            >
              <!-- Embedded Year Tag (White Glassmorphism) -->
              <span
                class="absolute top-3 left-3 bg-white/80 text-gray-900 text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm z-20 backdrop-blur-md border border-slate-200/80"
              >
                {{ item.year }}
              </span>

              <ProjectImage
                :src="getCardImage(item)"
                :alt="item.title"
                cssClass="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <!-- Overlay with Zoom / PDF Icon -->
              <div
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]"
              >
                <div
                  class="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
                >
                  <i :class="item.pdfUrl ? 'bi bi-file-earmark-pdf' : 'bi bi-zoom-in'"></i>
                </div>
              </div>
            </div>

            <!-- Content Header (Bold Uppercase Title matching Reference 2) -->
            <h3
              class="text-[#121212] font-['Poppins'] font-extrabold text-base lg:text-lg uppercase tracking-wide leading-snug mb-2 group-hover:text-violet-600 transition-colors"
            >
              {{ item.title }}
            </h3>

            <!-- Description (Max 2 lines, expand on Read More) -->
            <p
              class="text-slate-500 font-['Roboto'] text-xs leading-relaxed mb-2 transition-all duration-300"
              :class="expandedCards[index] ? '' : 'line-clamp-2'"
            >
              {{ item.description }}
            </p>
            <button
              v-if="item.description && item.description.length > 65"
              @click.stop="toggleExpand(index)"
              class="text-violet-600 hover:text-violet-700 text-xs font-semibold underline mb-4 inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{{ expandedCards[index] ? (lang === "ID" ? "Tampilkan Sedikit" : "Show Less") : (lang === "ID" ? "Baca Selengkapnya" : "Read More") }}</span>
              <i :class="expandedCards[index] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="text-[10px]"></i>
            </button>
            <div v-else class="mb-4"></div>
          </div>

          <!-- Bottom Full-Width Action Button (Reference Image 2 Style) -->
          <a
            v-if="item.pdfUrl"
            :href="item.pdfUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop
            class="w-full py-3.5 bg-[#121212] hover:bg-violet-600 group-hover:bg-violet-600 text-white text-xs font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto shadow-md"
          >
            <span>{{ lang === "ID" ? "CEK DOKUMEN" : "VIEW DOCUMENT" }}</span>
            <i class="bi bi-box-arrow-up-right text-xs"></i>
          </a>
          <button
            v-else
            class="w-full py-3.5 bg-[#121212] hover:bg-violet-600 group-hover:bg-violet-600 text-white text-xs font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto shadow-md"
          >
            <span>{{ lang === "ID" ? "LIHAT PRATINJAU" : "PREVIEW IMAGE" }}</span>
            <i class="bi bi-arrows-angle-expand text-xs"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="selectedImages.length"
          class="fixed inset-0 z-10000 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          @click="selectedImages = []"
        >
          <div class="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center" @click.stop>
            <ProjectImage
              :src="selectedImages[activeIndex]"
              cssClass="max-w-full max-h-[75vh] rounded-lg shadow-2xl !object-contain"
            />
            <!-- Multi-Image Thumbnails Bar -->
            <div v-if="selectedImages.length > 1" class="flex gap-3 mt-4">
              <button
                v-for="(img, idx) in selectedImages"
                :key="idx"
                @click="activeIndex = idx"
                class="w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer"
                :class="activeIndex === idx ? 'border-emerald-400 scale-105 shadow-md' : 'border-white/30 opacity-60 hover:opacity-100'"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
          <button
            @click="selectedImages = []"
            class="absolute top-6 right-6 text-white text-3xl hover:text-violet-400 cursor-pointer"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </transition>
    </Teleport>
    <img
      src="/images/accents/accent_3.webp"
      alt="Accent Shape"
      class="absolute bottom-[-0.2rem] lg:bottom-[-0.2rem] py-[0.1rem] left-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform rotate-180 z-0"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";
import ProjectImage from "@/components/common/ProjectImage.vue";

const { t, lang } = useLanguage();
const selectedImages = ref([]);
const activeIndex = ref(0);
const expandedCards = ref({});

function toggleExpand(idx) {
  expandedCards.value[idx] = !expandedCards.value[idx];
}

function openPdf(url) {
  if (url) {
    window.open(url, "_blank");
  }
}

function openImageModal(item) {
  if (item.gallery && item.gallery.length) {
    selectedImages.value = item.gallery;
  } else if (item.image) {
    selectedImages.value = [item.image];
  }
  activeIndex.value = 0;
}

function getCardImage(item) {
  if (item.image) {
    return item.image;
  }
  if (item.pdfUrl && item.pdfUrl.includes("drive.google.com")) {
    const match = item.pdfUrl.match(/\/file\/d\/([^\/]+)/) || item.pdfUrl.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}=w1000`;
    }
  }
  return item.image;
}

const achievements = computed(() => {
  if (lang.value === "ID") {
    return [
      {
        title: 'Hak Cipta (HKI) – Game "Mathmagic"',
        year: "2026",
        image: "/images/certificates/certificate_hki.webp",
        pdfUrl: "https://drive.google.com/file/d/1qhppNZZRIu5ufrB9FIvlQjuEYeheZvmN/view?usp=sharing",
        description:
          'Hak Cipta Resmi Kemenkumham RI (No. 001400842) untuk ciptaan Permainan Video "Mathmagic" bekerja sama dengan Universitas Telkom.',
      },
      {
        title: "Asisten Praktikum (Teaching Assistant)",
        year: "2023-2025",
        image: "/images/certificates/certificate_telkom_ta.webp",
        pdfUrl: "https://drive.google.com/file/d/1KPtTa73CcjSppfzw9CGU4QYEHluBX1Gt/view?usp=sharing",
        description:
          "Telah mengabdi sebagai Asisten Praktikum untuk 5 mata kuliah multimedia dalam 4 semester.",
      },
      {
        title: "Sertifikasi BNSP Multimedia (KKNI Level II)",
        year: "2022",
        image: "/images/certificates/certificate_bnsp.webp",
        pdfUrl: "https://drive.google.com/file/d/1H0RUzyO8S__J4xcyQ35aM2SetkyWetvm/view?usp=sharing",
        description:
          "Sertifikasi kompetensi nasional BNSP dalam bidang Desain Grafis, Animasi 2D, dan Audio-Video.",
      },
      {
        title: "Sertifikat Penyelesaian Magang/PKL",
        year: "2021",
        image: "/images/certificates/certificate_internship.webp",
        description:
          'Penyelesaian magang 6 bulan sebagai Ketua Tim dan Desainer di Unit Produksi Multimedia, dengan evaluasi akhir "Sangat Baik".',
      },
      {
        title: "Finalis – LKS Desain Grafis Provinsi",
        year: "2021",
        image: "/images/certificates/lks1.webp",
        pdfUrl: "https://drive.google.com/file/d/1ZHKvrPSkePnvM0zBQbmupq2gLDsX1FwL/view?usp=sharing",
        gallery: [
          "/images/certificates/lks1.webp",
          "/images/certificates/lks2.webp",
        ],
        description:
          "Mewakili OKU Timur (SMK Negeri 1 Belitang) di Lomba Kompetensi Siswa (LKS) SMK tingkat Provinsi Sumsel bidang Graphic Design Technology dengan nilai 80.13.",
      },
      {
        title: "Web Development Path – Progate",
        year: "2021",
        image: "/images/certificates/certificate_progate.webp",
        pdfUrl: "https://drive.google.com/file/d/1rvKU6meo4iJOdGnqZb3m1pHCMnaTXtVQ/view?usp=sharing",
        description: "Penyelesaian kursus modul dari dasar HTML & CSS.",
      },
    ];
  }

  return [
    {
      title: 'Copyright (HKI) – "Mathmagic" Game',
      year: "2026",
      image: "/images/certificates/certificate_hki.webp",
      pdfUrl: "https://drive.google.com/file/d/1qhppNZZRIu5ufrB9FIvlQjuEYeheZvmN/view?usp=sharing",
      description:
        'Official Copyright Registration (No. 001400842) from Kemenkumham RI for the video game "Mathmagic" in collaboration with Telkom University.',
    },
    {
      title: "Teaching Assistant (Asisten Praktikum)",
      year: "2023-2025",
      image: "/images/certificates/certificate_telkom_ta.webp",
      pdfUrl: "https://drive.google.com/file/d/1KPtTa73CcjSppfzw9CGU4QYEHluBX1Gt/view?usp=sharing",
      description:
        "Appointed as a Teaching Assistant for 5 different multimedia courses across 4 semesters.",
    },
    {
      title: "BNSP Multimedia – Certified (KKNI Level II)",
      year: "2022",
      image: "/images/certificates/certificate_bnsp.webp",
      pdfUrl: "https://drive.google.com/file/d/1H0RUzyO8S__J4xcyQ35aM2SetkyWetvm/view?usp=sharing",
      description:
        "National certification by BNSP validating proficiency in Graphic Design / 2D Animation and Audio-Video Editing.",
    },
    {
      title: "Vocational School Internship Completion",
      year: "2021",
      image: "/images/certificates/certificate_internship.webp",
      description:
        'Completed a 6-month internship as Team Leader and Designer in Multimedia Production Unit with "Excellent" grade.',
    },
    {
      title: "Finalist – Graphic Design Technology",
      year: "2021",
      image: "/images/certificates/lks1.webp",
      pdfUrl: "https://drive.google.com/file/d/1ZHKvrPSkePnvM0zBQbmupq2gLDsX1FwL/view?usp=sharing",
      gallery: [
        "/images/certificates/lks1.webp",
        "/images/certificates/lks2.webp",
      ],
      description:
        "Represented OKU Timur (SMKN 1 Belitang) in South Sumatra provincial LKS competition for Graphic Design Technology with a score of 80.13.",
    },
    {
      title: "Web Development Path – Progate",
      year: "2021",
      image: "/images/certificates/certificate_progate.webp",
      pdfUrl: "https://drive.google.com/file/d/1rvKU6meo4iJOdGnqZb3m1pHCMnaTXtVQ/view?usp=sharing",
      description:
        "Completed study sections and exercises covering HTML & CSS fundamentals.",
    },
  ];
});
</script>

<style scoped>
.clip-path-slant {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
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
