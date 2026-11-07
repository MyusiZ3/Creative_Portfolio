<template>
  <section id="achievements" class="bg-white py-20 px-6 lg:px-16 xl:px-40 relative overflow-hidden">
    <!-- Top Accent -->
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
        class="mb-12 text-left"
      >
        <h2
          class="text-4xl lg:text-[56px] font-bold font-['Poppins'] text-[#0f172a] leading-tight mb-5"
        >
          <span>{{ t('ach_title_1') }}<br /></span>
          {{ t('ach_title_2') }}
        </h2>
        <p
          class="text-[#334155] font-['Roboto'] text-sm lg:text-base max-w-2xl leading-relaxed"
        >
          {{ t('ach_desc') }}
        </p>
        <div class="h-px w-full bg-slate-200 mt-8"></div>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 mb-12">
        <article
          v-for="(item, index) in achievements"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 90 },
          }"
          class="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-slate-900/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left h-full"
          @click="openImageModal(item)"
        >
          <div>
            <!-- Certificate Thumbnail Container -->
            <div
              class="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70"
            >
              <span
                class="absolute top-3 left-3 bg-white/95 text-[#0f172a] text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-md shadow-xs z-20 border border-slate-200/90"
              >
                {{ item.year }}
              </span>

              <span
                v-if="item.gallery && item.gallery.length > 1"
                class="absolute top-3 right-3 bg-slate-900/85 text-white text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-md z-20 backdrop-blur-xs border border-white/15"
              >
                {{ item.gallery.length }} {{ lang === 'ID' ? 'Halaman' : 'Pages' }}
              </span>

              <ProjectImage
                :src="getCardImage(item)"
                :alt="item.title"
                cssClass="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center"
              >
                <span
                  class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0f172a] font-['Poppins'] text-xs font-semibold shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-250"
                >
                  <i class="bi bi-arrows-fullscreen text-[11px]"></i>
                  <span>{{ lang === 'ID' ? 'Perbesar Sertifikat' : 'Preview Certificate' }}</span>
                </span>
              </div>
            </div>

            <div class="text-[11px] font-mono font-semibold uppercase tracking-wider text-violet-700 mb-1.5">
              {{ item.issuer }}
            </div>

            <h3
              class="text-[#0f172a] font-['Poppins'] font-bold text-base lg:text-[17px] leading-snug mb-2 group-hover:text-violet-700 transition-colors"
            >
              {{ item.title }}
            </h3>

            <p class="text-[#334155] font-['Roboto'] text-[13px] leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div class="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              @click.stop="openImageModal(item)"
              class="inline-flex items-center gap-1.5 text-xs font-['Poppins'] font-medium text-[#475569] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              <i class="bi bi-eye text-xs"></i>
              <span>{{ lang === 'ID' ? 'Pratinjau' : 'Preview' }}</span>
            </button>

            <a
              v-if="item.pdfUrl"
              :href="item.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-violet-600 text-white text-xs font-['Poppins'] font-medium tracking-wide transition-colors"
            >
              <span>{{ lang === 'ID' ? 'Dokumen Resmi' : 'Verify Document' }}</span>
              <i class="bi bi-arrow-up-right text-[10px]"></i>
            </a>
          </div>
        </article>
      </div>
    </div>

    <!-- Certificate Lightbox Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="selectedItem"
          class="fixed inset-0 z-10000 flex items-center justify-center pt-16 pb-28 sm:pt-20 sm:pb-32 px-4 bg-black/90 backdrop-blur-md"
          @click="closeImageModal"
        >
          <div
            class="absolute top-4 left-4 sm:top-5 sm:left-1/2 sm:-translate-x-1/2 z-50 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-white/10 text-zinc-300 font-['Roboto'] text-xs sm:text-sm max-w-[calc(100vw-5.5rem)]"
            @click.stop
          >
            <span class="font-mono text-white/90 shrink-0">
              {{ activeIndex + 1 }} / {{ selectedImages.length }}
            </span>
            <span class="w-px h-3.5 bg-white/15 shrink-0"></span>
            <span class="truncate text-zinc-300 font-['Poppins'] text-xs">
              {{ selectedItem.title }}
            </span>
          </div>

          <button
            type="button"
            @click="closeImageModal"
            class="absolute top-4 right-4 sm:top-5 sm:right-6 z-50 w-10 h-10 rounded-full bg-zinc-900/85 border border-white/10 text-zinc-200 flex items-center justify-center hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
            :aria-label="lang === 'ID' ? 'Tutup pratinjau' : 'Close preview'"
          >
            <i class="bi bi-x-lg text-base"></i>
          </button>

          <div
            class="relative max-w-4xl w-full flex flex-col items-center justify-center"
            @click.stop
          >
            <ProjectImage
              :src="selectedImages[activeIndex]"
              :alt="selectedItem.title"
              cssClass="max-w-full max-h-[65vh] sm:max-h-[70vh] rounded-xl shadow-2xl !object-contain mx-auto"
            />
          </div>

          <div
            class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-max max-w-[94vw]"
            @click.stop
          >
            <div v-if="selectedImages.length > 1" class="flex items-center gap-2.5">
              <button
                v-for="(img, idx) in selectedImages"
                :key="idx"
                type="button"
                @click="activeIndex = idx"
                class="w-14 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer"
                :class="
                  activeIndex === idx
                    ? 'border-violet-400 scale-105 shadow-md'
                    : 'border-white/25 opacity-60 hover:opacity-100'
                "
              >
                <img :src="img" :alt="`Page ${idx + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>

            <div
              v-if="selectedItem.pdfUrl"
              class="flex items-center p-1 rounded-full bg-zinc-900/90 border border-white/15 shadow-2xl"
            >
              <a
                :href="selectedItem.pdfUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-zinc-200 hover:text-white hover:bg-white/10 font-['Poppins'] text-xs font-medium tracking-wide transition-colors whitespace-nowrap"
              >
                <i class="bi bi-file-earmark-pdf text-violet-400 text-xs"></i>
                <span>{{
                  lang === 'ID' ? 'Buka Dokumen Resmi (Google Drive)' : 'Open Official Document (PDF)'
                }}</span>
                <i class="bi bi-arrow-up-right text-[10px] text-zinc-400"></i>
              </a>
            </div>
          </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import ProjectImage from './common/ProjectImage.vue'

const { t, lang } = useLanguage()
const selectedItem = ref(null)
const selectedImages = ref([])
const activeIndex = ref(0)

function openImageModal(item) {
  selectedItem.value = item
  if (item.gallery && item.gallery.length) {
    selectedImages.value = item.gallery
  } else if (item.image) {
    selectedImages.value = [item.image]
  }
  activeIndex.value = 0
  document.body.style.overflow = 'hidden'
}

function closeImageModal() {
  selectedItem.value = null
  selectedImages.value = []
  activeIndex.value = 0
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (!selectedItem.value) return
  if (e.key === 'Escape') closeImageModal()
  if (e.key === 'ArrowRight' && selectedImages.value.length > 1) {
    activeIndex.value = (activeIndex.value + 1) % selectedImages.value.length
  }
  if (e.key === 'ArrowLeft' && selectedImages.value.length > 1) {
    activeIndex.value =
      (activeIndex.value - 1 + selectedImages.value.length) % selectedImages.value.length
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

function getCardImage(item) {
  if (item.image) {
    return item.image
  }
  if (item.pdfUrl && item.pdfUrl.includes('drive.google.com')) {
    const match = item.pdfUrl.match(/\/file\/d\/([^/]+)/) || item.pdfUrl.match(/id=([^&]+)/)
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}=w1000`
    }
  }
  return item.image
}

const achievements = computed(() => {
  if (lang.value === 'ID') {
    return [
      {
        title: 'Hak Cipta (HKI) – Gim Edukasi "Mathmagic"',
        issuer: 'Kemenkumham RI & Universitas Telkom',
        year: '2026',
        image: '/images/certificates/certificate_hki.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1qhppNZZRIu5ufrB9FIvlQjuEYeheZvmN/view?usp=sharing',
        description:
          'Surat Pencatatan Ciptaan resmi Kementerian Hukum dan HAM RI (No. 001400842) untuk kategori Permainan Video "Mathmagic".',
      },
      {
        title: 'Asisten Praktikum Laboratorium (Ilmu Terapan)',
        issuer: 'Fakultas Ilmu Terapan • Universitas Telkom',
        year: '2023–2025',
        image: '/images/certificates/certificate_telkom_ta.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1KPtTa73CcjSppfzw9CGU4QYEHluBX1Gt/view?usp=sharing',
        description:
          'Penugasan resmi sebagai Asisten Praktikum Laboratorium pada 5 mata kuliah rekayasa multimedia dan sistem komputer selama 4 semester.',
      },
      {
        title: 'Sertifikasi Kompetensi BNSP Multimedia (KKNI Level II)',
        issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        year: '2022',
        image: '/images/certificates/certificate_bnsp.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1H0RUzyO8S__J4xcyQ35aM2SetkyWetvm/view?usp=sharing',
        description:
          'Sertifikasi kompetensi kerja nasional yang memvalidasi keahlian Desain Grafis, Animasi 2D, serta Pengolahan Audio-Video.',
      },
      {
        title: 'Sertifikat Penyelesaian Praktik Kerja Lapangan (PKL)',
        issuer: 'Unit Produksi Multimedia • SMKN 1 Belitang III',
        year: '2021',
        image: '/images/certificates/certificate_internship.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1FHECuOyo58-LqVRiP2OXt47oyuUYb7px/view?usp=sharing',
        description:
          'Menyelesaikan program magang 6 bulan sebagai Ketua Tim dan Desainer Grafis di Unit Produksi Multimedia dengan predikat akhir "Sangat Baik".',
      },
      {
        title: 'Finalis Provinsi – LKS Graphic Design Technology',
        issuer: 'Dinas Pendidikan Provinsi Sumatera Selatan',
        year: '2021',
        image: '/images/certificates/lks1.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1ZHKvrPSkePnvM0zBQbmupq2gLDsX1FwL/view?usp=sharing',
        gallery: ['/images/certificates/lks1.webp', '/images/certificates/lks2.webp'],
        description:
          'Mewakili Kabupaten OKU Timur pada Lomba Kompetensi Siswa (LKS) tingkat Provinsi Sumatera Selatan bidang Graphic Design Technology dengan skor 80,13.',
      },
      {
        title: 'Web Development Path (HTML & CSS)',
        issuer: 'Progate',
        year: '2021',
        image: '/images/certificates/certificate_progate.webp',
        pdfUrl:
          'https://drive.google.com/file/d/1rvKU6meo4iJOdGnqZb3m1pHCMnaTXtVQ/view?usp=sharing',
        description:
          'Penyelesaian kurikulum fundamental pengembangan web mencakup struktur semantik HTML dan tata letak responsif CSS.',
      },
    ]
  }

  return [
    {
      title: 'Copyright Registration (HKI) – "Mathmagic" Game',
      issuer: 'Ministry of Law & Human Rights RI • Telkom University',
      year: '2026',
      image: '/images/certificates/certificate_hki.webp',
      pdfUrl: 'https://drive.google.com/file/d/1qhppNZZRIu5ufrB9FIvlQjuEYeheZvmN/view?usp=sharing',
      description:
        'Official intellectual property registration (No. 001400842) granted by Kemenkumham RI for the educational video game "Mathmagic".',
    },
    {
      title: 'Laboratory Teaching Assistant (Applied Science)',
      issuer: 'Faculty of Applied Sciences • Telkom University',
      year: '2023–2025',
      image: '/images/certificates/certificate_telkom_ta.webp',
      pdfUrl: 'https://drive.google.com/file/d/1KPtTa73CcjSppfzw9CGU4QYEHluBX1Gt/view?usp=sharing',
      description:
        'Appointed as Laboratory Teaching Assistant across 5 multimedia engineering and computer systems courses over 4 academic semesters.',
    },
    {
      title: 'BNSP National Competency – Multimedia (KKNI Level II)',
      issuer: 'Indonesian Professional Certification Authority (BNSP)',
      year: '2022',
      image: '/images/certificates/certificate_bnsp.webp',
      pdfUrl: 'https://drive.google.com/file/d/1H0RUzyO8S__J4xcyQ35aM2SetkyWetvm/view?usp=sharing',
      description:
        'National competency certification validating technical proficiency in Graphic Design, 2D Animation, and Audio-Video Production.',
    },
    {
      title: 'Vocational Internship Completion Certificate',
      issuer: 'Multimedia Production Unit • SMKN 1 Belitang III',
      year: '2021',
      image: '/images/certificates/certificate_internship.webp',
      pdfUrl: 'https://drive.google.com/file/d/1FHECuOyo58-LqVRiP2OXt47oyuUYb7px/view?usp=sharing',
      description:
        'Completed a 6-month vocational internship as Project Team Leader and Graphic Designer, graduating with an "Excellent" performance evaluation.',
    },
    {
      title: 'Provincial Finalist – LKS Graphic Design Technology',
      issuer: 'South Sumatra Provincial Department of Education',
      year: '2021',
      image: '/images/certificates/lks1.webp',
      pdfUrl: 'https://drive.google.com/file/d/1ZHKvrPSkePnvM0zBQbmupq2gLDsX1FwL/view?usp=sharing',
      gallery: ['/images/certificates/lks1.webp', '/images/certificates/lks2.webp'],
      description:
        'Represented OKU Timur Regency at the South Sumatra Provincial LKS Competition in Graphic Design Technology, achieving a final score of 80.13.',
    },
    {
      title: 'Web Development Path (HTML & CSS)',
      issuer: 'Progate',
      year: '2021',
      image: '/images/certificates/certificate_progate.webp',
      pdfUrl: 'https://drive.google.com/file/d/1rvKU6meo4iJOdGnqZb3m1pHCMnaTXtVQ/view?usp=sharing',
      description:
        'Completed foundational web development coursework covering semantic HTML structure and responsive CSS layout styling.',
    },
  ]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
