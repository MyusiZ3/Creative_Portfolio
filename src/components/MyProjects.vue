<template>
  <section
    id="my-projects"
    class="bg-[#171717] py-20 px-6 lg:px-16 xl:px-40 relative overflow-x-clip"
  >
    <div class="container mx-auto relative z-10">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.3, y: -20 }"
        :visible="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 12,
            mass: 0.8,
          },
        }"
        class="text-center"
      >
        <span
          class="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
          {{ t('my_proj_badge') }}
        </span>
      </div>

      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 60, scale: 0.9 }"
        :visible="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 150,
            damping: 18,
            delay: 150,
          },
        }"
        class="text-3xl md:text-4xl lg:text-[48px] font-bold font-['Poppins'] text-white mb-4 tracking-wider text-center"
      >
        {{ t('my_proj_title') }}
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 350, ease: 'easeOut' },
        }"
        class="text-[#8E949F] font-['Roboto'] font-medium text-[13px] lg:text-[15px] max-w-2xl mx-auto text-center leading-relaxed mb-12"
      >
        {{ t('my_proj_desc') }}
      </p>

      <!-- Divider -->
      <div
        v-motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :visible="{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 1000, delay: 450, ease: 'easeOut' },
        }"
        class="divider-line h-px w-full bg-gray-700 mb-14 lg:mb-20"
      ></div>

      <!-- Project Items -->
      <div class="space-y-10 lg:space-y-14">
        <div
          v-for="(project, index) in visibleProjects"
          :key="project.name"
          :id="'my-project-' + index"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 18, mass: 1 },
          }"
          class="project-card bg-[#171717] border border-white/10 rounded-3xl p-6 lg:p-9 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-violet-500/30"
        >
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            <!-- Project Image Carousel (Visual Column) -->
            <div class="w-full lg:w-[48%] shrink-0 flex flex-col justify-center">
              <div
                class="project-image-wrapper group relative rounded-2xl overflow-hidden aspect-4/3 border border-white/10 bg-[#121214]"
              >
                <!-- Carousel Images -->
                <div
                  class="relative w-full h-full cursor-pointer flex items-center justify-center"
                  @click="openLightbox(index, activeSlides[index] || 0)"
                >
                  <transition :name="getTransitionName(project._dir)" mode="out-in">
                    <img
                      :key="project.images[activeSlides[index] || 0]"
                      :src="project.images[activeSlides[index] || 0]"
                      :alt="`${project.name} - ${(activeSlides[index] || 0) + 1}`"
                      class="absolute inset-0 w-full h-full object-cover"
                    />
                  </transition>
                  <!-- Zoom hint icon -->
                  <div
                    class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                  >
                    <i class="bi bi-arrows-fullscreen text-xs"></i>
                  </div>
                </div>

                <!-- Carousel Dots -->
                <div
                  v-if="project.images.length > 1"
                  class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
                >
                  <button
                    v-for="(img, imgIdx) in project.images"
                    :key="imgIdx"
                    @click="goToSlide(index, imgIdx)"
                    class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    :class="
                      (activeSlides[index] || 0) === imgIdx
                        ? 'bg-violet-400 w-4'
                        : 'bg-white/40 hover:bg-white/70'
                    "
                    :aria-label="`Slide ${imgIdx + 1}`"
                  ></button>
                </div>

                <!-- Carousel Arrows -->
                <button
                  v-if="project.images.length > 1"
                  @click="prevSlide(index, project.images.length)"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-600/80 z-20"
                  aria-label="Previous slide"
                >
                  <i class="bi bi-chevron-left text-xs"></i>
                </button>
                <button
                  v-if="project.images.length > 1"
                  @click="nextSlide(index, project.images.length)"
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-600/80 z-20"
                  aria-label="Next slide"
                >
                  <i class="bi bi-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <!-- Project Details (Info Column) -->
            <div class="flex-1 flex flex-col justify-between text-left">
              <div>
                <!-- App Icon & Title Header -->
                <div class="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5">
                  <div
                    class="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-lg shadow-inner shrink-0"
                  >
                    <i :class="project.icon || 'bi bi-app'"></i>
                  </div>

                  <div class="flex-1 min-w-0">
                    <h3
                      class="text-xl lg:text-2xl font-bold font-['Poppins'] text-white leading-snug"
                    >
                      {{ project.name }}
                    </h3>
                    <p
                      class="text-xs text-zinc-400 font-mono mt-0.5 flex flex-wrap items-center gap-2"
                    >
                      <span class="text-violet-400 font-semibold">{{ project.platform }}</span>
                      <span class="text-zinc-600">•</span>
                      <span>{{ project.teamInfo }}</span>
                    </p>
                  </div>
                </div>

                <!-- Editorial Metadata Specs Grid -->
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <div>
                    <span
                      class="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-1 font-semibold"
                      >{{ t('my_proj_role') }}</span
                    >
                    <span
                      class="text-zinc-200 text-xs font-medium font-['Poppins'] leading-relaxed block"
                      >{{ project.role }}</span
                    >
                  </div>
                  <div>
                    <span
                      class="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-1 font-semibold"
                      >{{ t('my_proj_tools') }}</span
                    >
                    <span
                      class="text-zinc-200 text-xs font-medium font-['Poppins'] leading-relaxed block"
                      >{{ project.tools }}</span
                    >
                  </div>
                </div>

                <!-- Editorial Content Split Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <!-- Project Overview Column -->
                  <div>
                    <h4
                      class="text-xs lg:text-sm text-violet-400 font-mono font-bold tracking-wider uppercase mb-2 flex items-center gap-2"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                      {{ t('my_proj_overview') }}
                    </h4>
                    <p
                      class="text-zinc-300 text-xs lg:text-[13px] font-['Roboto'] leading-relaxed font-normal"
                    >
                      {{ project.overview }}
                    </p>
                  </div>

                  <!-- What I Did / Key Contributions Column -->
                  <div>
                    <h4
                      class="text-xs lg:text-sm text-violet-400 font-mono font-bold tracking-wider uppercase mb-2.5 flex items-center gap-2"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                      {{ t('my_proj_whatidid') }}
                    </h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(item, i) in project.tasks"
                        :key="i"
                        class="flex items-start gap-2.5"
                      >
                        <span class="text-violet-400 mt-1 text-[10px] shrink-0">✦</span>
                        <span
                          class="text-zinc-300 font-['Roboto'] text-xs lg:text-[13px] leading-relaxed font-normal"
                        >
                          {{ item }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Action Button -->
              <div class="border-t border-white/5 pt-4 flex flex-wrap items-center justify-end gap-3">
                <a
                  v-if="project.flipbookUrl"
                  :href="project.flipbookUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 border border-violet-400/50 text-violet-300 hover:bg-violet-600 hover:text-white font-['Poppins'] font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-violet-600/20 cursor-pointer"
                  :title="lang === 'ID' ? 'Buka E-Book / Flipbook Interaktif' : 'Open AR Flipbook E-Book'"
                >
                  <i class="bi bi-book-half text-sm"></i>
                  <span>{{ lang === 'ID' ? 'E-Book (Flipbook)' : 'Flipbook E-Book' }}</span>
                  <i class="bi bi-arrow-up-right text-[10px]"></i>
                </a>

                <a
                  v-if="project.appUrl"
                  :href="project.appUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 font-['Poppins'] font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-white/10 cursor-pointer"
                  :title="lang === 'ID' ? 'Unduh Aplikasi di Google Drive' : 'Download Application on Google Drive'"
                >
                  <i class="bi bi-google text-xs text-emerald-600"></i>
                  <span>{{ lang === 'ID' ? 'Unduh App (Drive)' : 'Get App (Drive)' }}</span>
                  <i class="bi bi-arrow-up-right text-[10px]"></i>
                </a>

                <a
                  v-else-if="project.link && project.link !== '#'"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-['Poppins'] font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-300 tracking-wider shadow-md shadow-violet-600/20 cursor-pointer"
                >
                  <span>{{ t('my_proj_view_work') }}</span>
                  <i class="bi bi-arrow-right text-xs"></i>
                </a>

                <button
                  v-else-if="project.link === '#'"
                  @click="openLightbox(index, 0)"
                  class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-['Poppins'] font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-300 tracking-wider shadow-md shadow-violet-600/20 cursor-pointer"
                >
                  <span>{{ t('my_proj_view_work') }}</span>
                  <i class="bi bi-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div
        v-if="projects.length > 4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="mt-16 lg:mt-20 text-center"
      >
        <button
          @click="showAll = !showAll"
          class="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-violet-500/30 rounded-full text-white font-['Poppins'] font-semibold text-sm tracking-widest hover:border-violet-500 transition-all duration-500 overflow-hidden"
        >
          <!-- Background Glow Effect -->
          <div
            class="absolute inset-0 bg-violet-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          ></div>

          <span class="relative z-10">{{
            showAll ? t('my_proj_show_less') : t('my_proj_view_all')
          }}</span>

          <div
            class="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 group-hover:bg-violet-500 transition-colors duration-500"
          >
            <i
              class="bi transition-transform duration-500"
              :class="[showAll ? 'bi-chevron-up' : 'bi-chevron-down', 'group-hover:scale-110']"
            ></i>
          </div>
        </button>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <transition name="lightbox-fade">
      <div
        v-if="lightbox.open"
        class="fixed inset-0 z-9999 flex items-center justify-center"
        @keydown.esc="closeLightbox"
        @keydown.left="lightboxPrev"
        @keydown.right="lightboxNext"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="closeLightbox"></div>

        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
        >
          <i class="bi bi-x-lg text-lg"></i>
        </button>

        <!-- Counter -->
        <div
          class="absolute top-6 left-1/2 -translate-x-1/2 z-50 text-white/60 font-['Roboto'] text-sm"
        >
          {{ lightbox.slideIdx + 1 }} / {{ lightboxImages.length }}
        </div>

        <!-- Image Container -->
        <div
          class="relative z-40 w-full max-w-5xl mx-4 lg:mx-auto select-none"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <transition
            :name="lightbox.dir === 'prev' ? 'lb-slide-prev' : 'lb-slide-next'"
            mode="out-in"
          >
            <img
              :key="lightboxImages[lightbox.slideIdx]"
              :src="lightboxImages[lightbox.slideIdx]"
              :alt="`Lightbox image ${lightbox.slideIdx + 1}`"
              loading="lazy"
              decoding="async"
              class="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl mx-auto block shadow-2xl"
              draggable="false"
            />
          </transition>
        </div>

        <!-- Prev Arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxPrev"
          class="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-violet-500/50 transition-all duration-200"
        >
          <i class="bi bi-chevron-left text-lg"></i>
        </button>

        <!-- Next Arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxNext"
          class="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-violet-500/50 transition-all duration-200"
        >
          <i class="bi bi-chevron-right text-lg"></i>
        </button>

        <!-- Dots -->
        <div
          v-if="lightboxImages.length > 1"
          class="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2"
        >
          <button
            v-for="(img, i) in lightboxImages"
            :key="i"
            @click="lightboxGoTo(i)"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300"
            :class="lightbox.slideIdx === i ? 'bg-violet-400 w-6' : 'bg-white/30 hover:bg-white/60'"
          ></button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, lang } = useLanguage()

// Track active slide per project
const activeSlides = reactive({})

const showAll = ref(false)
const visibleProjects = computed(() =>
  showAll.value ? projects.value : projects.value.slice(0, 4),
)
// Track direction for each project for transition

// === Lightbox state ===
const lightbox = reactive({
  open: false,
  projectIdx: 0,
  slideIdx: 0,
  dir: 'next',
})

const lightboxImages = computed(() => {
  if (lightbox.projectIdx >= 0 && lightbox.projectIdx < projects.value.length) {
    return projects.value[lightbox.projectIdx].images
  }
  return []
})

const openLightbox = (projectIdx, slideIdx) => {
  lightbox.projectIdx = projectIdx
  lightbox.slideIdx = slideIdx
  lightbox.dir = 'next'
  lightbox.open = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    window.addEventListener('keydown', handleLightboxKey)
  })
}

const closeLightbox = () => {
  lightbox.open = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleLightboxKey)
}

const lightboxNext = () => {
  lightbox.dir = 'next'
  lightbox.slideIdx = (lightbox.slideIdx + 1) % lightboxImages.value.length
}

const lightboxPrev = () => {
  lightbox.dir = 'prev'
  lightbox.slideIdx =
    (lightbox.slideIdx - 1 + lightboxImages.value.length) % lightboxImages.value.length
}

const lightboxGoTo = (i) => {
  lightbox.dir = i > lightbox.slideIdx ? 'next' : 'prev'
  lightbox.slideIdx = i
}

const handleLightboxKey = (e) => {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') lightboxNext()
  if (e.key === 'ArrowLeft') lightboxPrev()
}

// Touch / swipe support
let touchStartX = 0
let touchEndX = 0

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  touchEndX = e.touches[0].clientX
}

const onTouchEnd = () => {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) {
    if (diff > 0) lightboxNext()
    else lightboxPrev()
  }
  touchStartX = 0
  touchEndX = 0
}
const slideDirections = reactive({})

const getTransitionName = (dir) => {
  return dir === 'prev' ? 'slide-prev' : 'slide-next'
}

const goToSlide = (projectIdx, slideIdx) => {
  const current = activeSlides[projectIdx] || 0
  slideDirections[projectIdx] = slideIdx > current ? 'next' : 'prev'
  // Assign _dir to the project reactively
  projects.value[projectIdx]._dir = slideDirections[projectIdx]
  activeSlides[projectIdx] = slideIdx
}

const nextSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0
  slideDirections[projectIdx] = 'next'
  projects.value[projectIdx]._dir = 'next'
  activeSlides[projectIdx] = (current + 1) % total
}

const prevSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0
  slideDirections[projectIdx] = 'prev'
  projects.value[projectIdx]._dir = 'prev'
  activeSlides[projectIdx] = (current - 1 + total) % total
}

// Auto-play carousel
let autoPlayInterval = null

const handleScrollToProject = (e) => {
  const idx = e.detail
  if (idx >= 4 && !showAll.value) {
    showAll.value = true
  }
  nextTick(() => {
    const el = document.getElementById('my-project-' + idx)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  })
}

onMounted(() => {
  window.addEventListener('scrollToProject', handleScrollToProject)
  autoPlayInterval = setInterval(() => {
    projects.value.forEach((project, idx) => {
      if (project.images.length > 1) {
        const current = activeSlides[idx] || 0
        projects.value[idx]._dir = 'next'
        activeSlides[idx] = (current + 1) % project.images.length
      }
    })
  }, 4000)
})

onUnmounted(() => {
  window.removeEventListener('scrollToProject', handleScrollToProject)
  if (autoPlayInterval) clearInterval(autoPlayInterval)
})

const projects = computed(() => {
  const isId = lang.value === 'ID'
  return [
    {
      name: isId ? 'Djaswita AR – Dynamic AR (Tugas Akhir)' : 'Djaswita AR – Dynamic AR',
      icon: 'bi-box-seam',
      role: isId ? 'Fullstack AR & Web Developer (Tugas Akhir)' : 'Fullstack AR & Web Developer (Thesis)',
      teamInfo: isId
        ? 'Tugas Akhir untuk PT Jaswita Jabar (BUMD) | Mei – Jun 2026'
        : 'Final Thesis for PT Jaswita Jabar (BUMD) | May – Jun 2026',
      tools: 'Unity, Vuforia Engine, Supabase, Vite, JavaScript, C#',
      overview: isId
        ? 'Platform media promosi interaktif yang dirancang khusus untuk PT Jaswita Jabar (BUMD) guna memodernisasi materi pameran. Menggantikan brosur cetak statis yang sulit diperbarui, platform ini menggabungkan aplikasi Augmented Reality (Android) dan Web Admin Dashboard (Vite & Supabase). Seluruh materi promosi multi-unit bisnis seperti teks, visual, video, model 3D, serta penambahan image marker baru dapat dikelola langsung dari web secara real-time tanpa perlu rebuild aplikasi.'
        : 'An interactive promotional platform developed for PT Jaswita Jabar (BUMD) to modernize their exhibition showcase. Replacing rigid printed brochures, this unified platform pairs an Android Augmented Reality app with a Vite & Supabase Web Admin Dashboard. Multi-unit business marketing content (copy, media, 3D assets, and new image markers) can be managed dynamically in real time without application rebuilds.',
      tasks: isId
        ? [
            'Merancang arsitektur AR berbasis Unity & Vuforia yang memuat target marker dan konten promosi secara dinamis dari cloud',
            'Membangun Web Admin Dashboard (CMS) menggunakan Vite & Supabase untuk manajemen konten mandiri dan penambahan marker baru',
            'Mengeliminasi keharusan rebuild file APK saat terjadi pergantian materi promosi di tiap kegiatan pameran',
            'Mencapai tingkat kelulusan 100% pada 44 skenario uji black-box serta skor SUS 86,50 (Aplikasi AR) dan 83,17 (Web Admin)',
          ]
        : [
            'Architected a dynamic AR client in Unity & Vuforia capable of fetching image markers and rich promotional media dynamically from the cloud',
            'Developed a responsive Web Admin CMS with Vite & Supabase for self-service content management and instant marker provisioning',
            'Eliminated the need to rebuild application binaries whenever marketing materials change across different exhibitions',
            'Achieved a 100% pass rate across 44 black-box test cases and strong usability validation with SUS scores of 86.50 (AR) and 83.17 (CMS)',
          ],
      platform: isId
        ? 'Platform Terpadu: AR Android & Web CMS'
        : 'Unified Platform: Android AR & Web CMS',
      bg: '#7c3aed',
      images: [
        '/images/projects/DjaswitaAR/dashboard_laptop_mockup.webp',
        '/images/projects/DjaswitaAR/djaswitamobile.webp',
        '/images/projects/DjaswitaAR/djaswitaflowchart.webp',
      ],
      link: 'https://github.com/MyusiZ3/DjaswitaAR-Fix',
      _dir: 'next',
    },
    {
      name: isId ? 'Mathmagic – App Edukasi Matematika (HKI)' : 'Mathmagic – Educational App',
      icon: 'bi-award',
      role: isId
        ? 'Project Creator, Lead Developer & Main UI Designer'
        : 'Project Creator, Lead Developer & Main UI Designer',
      teamInfo: isId
        ? 'Hak Kekayaan Intelektual Resmi No. 001400842 | Mei – Jul 2026'
        : 'Official Copyright (HKI) No. 001400842 | May – Jul 2026',
      tools: 'Unity 6 (LTS), C#, Firebase (Firestore & Auth), Vite, JavaScript ES6, Figma',
      overview: isId
        ? 'Game edukasi matematika interaktif berbasis Unity 6 yang terintegrasi dengan Firebase dan Web Admin Dashboard (Vite). Menggabungkan mekanika kuis interaktif dengan sinkronisasi cloud real-time untuk pemantauan progres belajar siswa.'
        : 'An interactive educational math game built with Unity 6, integrated with Firebase and a Vite Web Admin Dashboard. Combines engaging quiz mechanics with real-time cloud sync for student progress tracking.',
      tasks: isId
        ? [
            'Mengembangkan klien game mobile Unity 6 (C#) dengan kuis interaktif, sistem HP, dan timer dinamis',
            'Merancang antarmuka UI/UX ramah anak di Figma serta implementasi animasi responsif di Unity',
            'Membangun Web Admin Dashboard (Vite) untuk pemantauan telemetri belajar siswa dan leaderboard real-time',
            'Mengintegrasikan Firebase Firestore & Authentication untuk sinkronisasi cloud dua arah dan offline caching',
          ]
        : [
            'Developed Unity 6 (C#) mobile game client featuring interactive quiz mechanics, HP, and dynamic timers',
            'Designed child-friendly UI/UX in Figma and implemented responsive in-game animations in Unity',
            'Built Vite Web Admin Dashboard for student learning telemetry and real-time leaderboards',
            'Integrated Firebase Firestore & Authentication for bi-directional cloud sync and offline caching',
          ],
      platform: isId
        ? 'Gim Edukasi Unity 6 & Web Admin Dashboard'
        : 'Unity 6 Game & Web Admin Dashboard',
      bg: '#059669',
      images: [
        '/images/projects/Mathmagic/mathmagic_appscreen_mockup.webp',
        '/images/projects/Mathmagic/mathmagic_phone_mockup.webp',
        '/images/projects/Mathmagic/mathmagic_web_mockup.webp',
      ],
      link: 'https://shorturl.at/cb55f',
      _dir: 'next',
    },
    {
      name: isId ? 'AppliQ – Job Application Tracker' : 'AppliQ – Job Application Tracker',
      icon: 'bi-kanban',
      role: isId ? 'Pengembang Mobile & Desainer UI/UX' : 'Mobile Developer & UI/UX Designer',
      teamInfo: isId ? 'Proyek Pribadi | Sep – Okt 2026' : 'Personal Project | Sep – Oct 2026',
      tools: 'Flutter, Dart, Supabase (PostgreSQL), Google OAuth, PDF Engine',
      overview: isId
        ? 'Aplikasi mobile pelacak lamaran kerja dan manajemen karier berbasis Flutter & Supabase. Membantu pelamar mengelola alur rekrutmen via drag-and-drop Kanban pipeline, pembuat ATS Resume/CV otomatis ke format PDF, generator cover letter dengan tanda tangan digital, sinkronisasi jadwal wawancara ke Google Calendar, serta analitik konversi karier.'
        : 'A Flutter & Supabase mobile application designed to systematically manage job recruitment pipelines and career records. Features interactive drag-and-drop Kanban tracking, an instant ATS-compliant CV/resume PDF builder, dynamic cover letter generation with digital signatures, calendar interview sync with local push alerts, and visual career analytics.',
      tasks: isId
        ? [
            'Merancang arsitektur aplikasi mobile modular dengan Flutter & Supabase backend',
            'Membangun sistem Kanban pipeline interaktif (Applied, Interview, Offering, Accepted, Rejected) dengan drag-and-drop',
            'Mengimplementasikan modul ATS Resume & Cover Letter PDF builder yang di-render langsung di perangkat',
            'Mengintegrasikan Google OAuth 2.0, sinkronisasi Google Calendar, dan notifikasi pengingat wawancara lokal',
            'Menerapkan Row-Level Security (RLS) PostgreSQL untuk isolasi data pengguna serta sistem multi-bahasa (ID, EN, JA, KO)',
          ]
        : [
            'Architected modular Flutter mobile application backed by Supabase PostgreSQL',
            'Built interactive drag-and-drop Kanban recruitment pipeline tracking all stages with duration metrics',
            'Implemented native on-device ATS Resume/CV and customizable Cover Letter PDF rendering engines',
            'Integrated Google OAuth 2.0, Google Calendar schedule sync, and local push notification reminders',
            'Enforced PostgreSQL Row-Level Security (RLS) policies for complete user data isolation and multi-language support (ID, EN, JA, KO)',
          ],
      platform: isId ? 'Aplikasi Mobile (Flutter)' : 'Mobile Application (Flutter)',
      bg: '#0284c7',
      images: [
        '/images/projects/AppliQ/appliq_element.png',
        '/images/projects/AppliQ/appliq_logo.png',
      ],
      link: 'https://myusiz3.github.io/AppliQ/',
      _dir: 'next',
    },
    {
      name: isId
        ? 'MyDuitGweh – Smart Financial Tracker with AI & Collaboration'
        : 'MyDuitGweh – Smart Financial Tracker with AI & Collaboration',
      icon: 'bi-wallet2',
      role: isId
        ? 'Pengembang Mobile & Arsitek Sistem Cloud'
        : 'Mobile Developer & Cloud System Architect',
      teamInfo: isId ? 'Proyek Pribadi | Mar – Sep 2026' : 'Personal Project | Mar – Sep 2026',
      tools: 'Flutter, Dart, Firebase (Auth/Firestore), Google ML Kit, Gemini & Groq API',
      overview: isId
        ? 'Aplikasi manajemen keuangan pribadi berbasis Flutter & Firebase dengan estetika Apple/iOS Design Language (glassmorphism & Bento layout). Menghadirkan Archen AI Financial Advisor (didukung Gemini & Groq API dengan 5 mode kepribadian), dompet kolaborasi bersama dengan in-app chat, pemindai struk otomatis berbasis OCR Google ML Kit, serta in-app APK updater terintegrasi.'
        : 'A personal finance tracker mobile application built with Flutter & Firebase featuring Apple/iOS design language aesthetics (glassmorphism & Bento layouts). Highlights include Archen AI Financial Advisor (Gemini & Groq API with 5 personality tones), multi-wallet collaboration with real-time chat, automated receipt scanning via Google ML Kit OCR, and seamless in-app APK updates.',
      tasks: isId
        ? [
            'Merancang UI/UX mobile berbasis Apple design guidelines dengan Bento layout, glassmorphism, dan responsivitas halus',
            'Mengintegrasikan Archen AI Financial Advisor menggunakan Gemini & Groq API dengan 5 kepribadian dinamis dan sistem multi-session chat',
            'Membangun kamera custom pemindai struk belanja dengan OCR Google ML Kit untuk ekstraksi nominal dan tanggal otomatis',
            'Mengembangkan arsitektur multi-wallet dengan dompet kolaborasi real-time (shared wallet & in-app chat room)',
            'Menerapkan sistem keamanan biometrik (Fingerprint/Face ID), Firestore security rules, dan in-app direct APK updater',
          ]
        : [
            'Crafted mobile UI/UX inspired by Apple design guidelines using Bento Grid layouts, glassmorphism, and smooth micro-interactions',
            'Integrated Archen AI Financial Advisor powered by Gemini & Groq APIs with 5 distinct personality tones and multi-session chat',
            'Engineered custom camera receipt scanner with Google ML Kit OCR to automatically extract merchant, date, and amounts',
            'Developed multi-wallet architecture featuring shared collaborative wallets with real-time in-wallet chat rooms',
            'Implemented biometric security (Fingerprint/Face ID), role-based Firestore rules, and automated in-app direct APK updates',
          ],
      platform: isId ? 'Aplikasi Mobile Android (Flutter)' : 'Android Mobile App (Flutter)',
      bg: '#10b981',
      images: ['/images/projects/MyDuitGweh/logo_app.png'],
      link: 'https://myduitgweh.firebaseapp.com/',
      _dir: 'next',
    },
    {
      name: isId ? 'DJourney Jaswita Jabar – Tourism Web' : 'DJourney Jaswita Jabar – Tourism Web',
      icon: 'bi-globe-americas',
      role: isId ? 'Pengembang Frontend Web & Translator Intern' : 'Frontend Web Developer & Translator Intern',
      teamInfo: isId
        ? 'Magang | PT. Jasa & Kepariwisataan Jabar (2026)'
        : 'Internship | PT. Jasa & Kepariwisataan Jabar (2026)',
      tools: 'HTML, CSS, JavaScript, i18n, Responsive Web Design',
      overview: isId
        ? 'Pengembangan antarmuka platform pariwisata DJourney milik PT. Jasa & Kepariwisataan Jabar (Perseroda). Berfokus sebagai penerjemah sistem multi-bahasa (i18n), perbaikan tampilan responsif mobile (responsif fix), dan penyelesaian bug fungsionalitas filter pencarian serta antarmuka web.'
        : 'Development of DJourney tourism web platform for PT. Jasa & Kepariwisataan Jabar. Focused on multi-language localization (translator / i18n), mobile layout optimization (responsive fixes), and resolving destination search filter and UI layout bugs.',
      tasks: isId
        ? [
            'Mengimplementasikan fitur multi-language (i18n / translator) untuk wisatawan domestik & mancanegara',
            'Merancang dan memperbaiki tata letak responsif mobile (responsif fix) lintas berbagai resolusi perangkat',
            'Menangani pengujian serta bug fixing menyeluruh pada sistem filter pencarian destinasi',
            'Memperbaiki inkonsistensi tata letak visual antarmuka dan interaktivitas komponen web',
          ]
        : [
            'Implemented multi-language localization (i18n / translator) for domestic & international travelers',
            'Designed and engineered mobile responsive fixes across diverse viewport resolutions',
            'Conducted thorough debugging and fixes on destination search and category filters',
            'Resolved visual layout bugs, alignment inconsistencies, and interactive component glitches',
          ],
      platform: 'Web Application',
      bg: '#2563eb',
      images: ['/images/projects/djourney_jaswita.png'],
      link: 'https://djourney.id/web/',
      _dir: 'next',
    },
    {
      name: 'RideXP - Arcade Game Project',
      icon: 'bi-bicycle',
      role: isId
        ? 'Manajer Proyek, Pengembang Game, Desainer UI/UX'
        : 'Project Manager, Game Developer, UI/UX Designer',
      teamInfo: isId ? 'Proyek Tim | Jan – Jun 2025' : 'Team Project | Jan – Jun 2025',
      tools: 'Unity, Figma, ESP32, JSON',
      overview: isId
        ? 'RideXP adalah game balap arkade di mana pemain mengendalikan sepeda dalam game dengan mengayuh sepeda statis fisik yang terhubung via ESP32. Dibangun di Unity, game ini menggabungkan IoT, pengembangan game, dan desain UI/UX.'
        : 'RideXP is an arcade-style cycling game where players control their in-game bike by pedaling a physical stationary bike connected via ESP32. Built in Unity, the game combines IoT, game development, and UI/UX design.',
      tasks: isId
        ? [
            'Memimpin koordinasi tim dan perencanaan fitur',
            'Merancang alur UI/UX (menu, HUD, layar hasil) menggunakan Figma',
            'Membangun sistem papan peringkat lokal menggunakan JSON',
            'Mengimplementasikan NPC AI berbasis navigasi waypoint',
            'Merancang lingkungan game, aset visual, serta efek visual (VFX)',
            'Membuat identitas karya serta materi presentasi untuk pameran',
          ]
        : [
            'Led team coordination and feature planning',
            'Designed full UI/UX flow (menu, HUD, result screen) using Figma',
            'Built local leaderboard system using JSON',
            'Implemented AI NPC with waypoint-based navigation',
            'Designed game environments, composited visual assets, and created VFX logic',
            'Created branding assets & presentation deck for public exhibition',
          ],
      platform: isId ? 'Aplikasi Desktop Arkade' : 'Arcade Desktop App',
      bg: '#C0392B',
      images: [
        '/images/projects/LuxionRideXP/luxion_ridexp.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_1.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_2.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_3.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_4.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_5.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_6.webp',
      ],
      link: '#',
      _dir: 'next',
    },
    {
      name: 'MindEscape – VR Escape Room Game',
      icon: 'bi-headset',
      role: isId ? 'Pengembang VR, Desainer Lingkungan' : 'VR Developer, Environment Designer',
      teamInfo: isId ? 'Proyek Tim | Feb – Mar 2025' : 'Team Project | Feb – Mar 2025',
      tools: 'Unity, Oculus SDK',
      overview: isId
        ? 'MindEscape adalah permaianan VR ruang lolos yang berfokus pada eksplorasi dan interaksi lingkungan. Dibuat menggunakan Unity, proyek ini mensimulasikan pengalaman puzzle penuh menggunakan headset VR.'
        : 'MindEscape is a virtual reality escape room game focused on exploration and environmental interaction. Built using Unity, the project simulates a full puzzle escape experience using a VR headset.',
      tasks: isId
        ? [
            'Merancang tata letak lingkungan 3D dan penempatan objek',
            'Menangani sistem kamera VR dan transisi adegan',
            'Menerapkan mekanisme interaksi alat (mengambil objek, pemicu teka-teki)',
            'Mengoptimalkan pencahayaan dan performa untuk kelancaran',
          ]
        : [
            'Designed 3D environment layout and object placement',
            'Handled VR camera systems and scene transitions',
            'Implemented user interaction mechanics (grabbing, puzzle triggers)',
            'Optimized lighting and performance for smooth VR experience',
          ],
      platform: isId ? 'Aplikasi Desktop VR' : 'VR Desktop App',
      bg: '#4A1D8E',
      images: [
        '/images/projects/MindescapeVR/mindescape_vr.webp',
        '/images/projects/MindescapeVR/mindescape_vr_1.webp',
        '/images/projects/MindescapeVR/mindescape_vr_2.webp',
        '/images/projects/MindescapeVR/mindescape_vr_3.webp',
        '/images/projects/MindescapeVR/mindescape_vr_4.webp',
        '/images/projects/MindescapeVR/mindescape_vr_5.webp',
      ],
      link: 'https://youtu.be/DmFdkMLRTGc?si=EKjq0QPhMt2LOcCU',
      videoEmbedId: 'DmFdkMLRTGc',
      _dir: 'next',
    },
    {
      name: 'MathRift – Educational 2D Platformer',
      icon: 'bi-calculator',
      role: isId ? 'Pengembang Game, Desainer UI/UX' : 'Game Developer, UI/UX Designer',
      teamInfo: isId ? 'Proyek Tim | Jan – Jun 2025' : 'Team Project | Jan – Jun 2025',
      tools: 'Unity, Figma',
      overview: isId
        ? 'MathRift adalah game platform 2D edukasi yang dirancang agar belajar matematika jadi menyenangkan lewat gameplay interaktif, teka teki, dan level yang menantang secara bertahap.'
        : 'MathRift is a 2D educational platformer game designed to make learning math fun through interactive gameplay, puzzles, and progressive difficulty levels.',
      tasks: isId
        ? [
            'Mengembangkan mekanisme inti dan pengontrol pemain',
            'Merancang wireframe UI/UX hingga hasil akhir dalam Figma',
            'Mengintegrasikan progres level dan sistem penilaian',
            'Membuat aset permainan dan animasi sprite',
          ]
        : [
            'Developed core game mechanics and player controller',
            'Designed UI/UX wireframes and final screens in Figma',
            'Implemented level progression and scoring system',
            'Created game assets and sprite animations',
          ],
      platform: 'Desktop Game',
      bg: '#1a3a4a',
      images: [
        '/images/projects/Mathrift/mathrift.webp',
        '/images/projects/mathrift_2.webp',
        '/images/projects/mathrift_3.webp',
      ],
      link: '#',
      _dir: 'next',
    },
    {
      name: 'Stellar Adventures – AR Game Project',
      icon: 'bi-stars',
      role: 'AR Developer, Environment Designer',
      teamInfo: isId ? 'Proyek Tim | Sep 2024 – Feb 2025' : 'Team Project | Sep 2024 – Feb 2025',
      tools: 'Unity (URP), Vuforia Engine, Adobe Illustrator',
      overview: isId
        ? 'Stellar Adventures adalah game AR yang menggabungkan dunia maya dan nyata, memungkinkan pemain menavigasi ruang bertema luar angkasa melalui kamera.'
        : 'Stellar Adventures is an augmented reality game that blends the physical and digital world, allowing players to explore space-themed environments through their device camera.',
      tasks: isId
        ? [
            'Mengembangkan pendeteksi bidang datar dan kemunculan objek',
            'Merancang tekstur dan model lingkungan 3D',
            'Menerapkan mekanika permainan langsung di ruang AR',
            'Mengoptimalkan AR untuk perangkat mobile',
          ]
        : [
            'Developed AR plane detection and object placement',
            'Designed 3D environment models and textures',
            'Implemented interactive game mechanics in AR space',
            'Optimized performance for mobile AR devices',
          ],
      platform: isId ? 'Aplikasi AR Mobile' : 'AR Mobile App',
      bg: '#1a2a3a',
      images: [
        '/images/projects/StellarAdventures/stellar_adventures.webp',
        '/images/projects/StellarAdventures/mckup_cover.webp',
        '/images/projects/StellarAdventures/mckup_page.webp',
        '/images/projects/StellarAdventures/mckup_card.webp',
        '/images/projects/StellarAdventures/prev1.webp',
        '/images/projects/StellarAdventures/prev2.webp',
      ],
      link: 'https://drive.google.com/drive/folders/1E5aDwwwQ6N-_4L24yXOicgDLIbja2S4L?usp=drive_link',
      appUrl: 'https://drive.google.com/drive/folders/1E5aDwwwQ6N-_4L24yXOicgDLIbja2S4L?usp=drive_link',
      flipbookUrl: 'https://heyzine.com/flip-book/46f2424104.html',
      videoEmbedId: 'beb_pedFmMg',
      _dir: 'next',
    },
    {
      name: 'U-Asprak – Mobile App Design',
      icon: 'bi-people',
      role: 'UI/UX Designer',
      teamInfo: isId ? 'Studi Kasus Tim | Jan – Jun 2024' : 'Team Project | Jan – Jun 2024',
      tools: 'Figma, Antigravity',
      overview: isId
        ? 'U-Asprak merupakan desain aplikasi seluler untuk memperbaiki proses manajemen asisten praktikum, mencakup penjadwalan, nilai, serta media komunikasi.'
        : 'U-Asprak is a mobile application designed to streamline the teaching assistant management process, including scheduling, grading, and communication between lecturers and assistants.',
      tasks: isId
        ? [
            'Melakukan riset terhadap pengguna',
            'Merancang alur wireframe ber-resolusi tinggi',
            'Membangun protipe interaktif untuk dipakai dalam user testing',
            'Mendefinisikan bahasa desain dan library komponen',
          ]
        : [
            'Conducted user research and created user personas',
            'Designed wireframes and high-fidelity prototypes',
            'Built interactive prototype for usability testing',
            'Created design system and component library',
          ],
      platform: isId ? 'Desain Aplikasi Mobile' : 'Mobile App Design',
      bg: '#5b6abf',
      images: [
        '/images/projects/UAsprak/u_asprak.webp',
        '/images/projects/UAsprak/uasprak_showcase.webp',
        '/images/projects/UAsprak/uasprak_ux.webp',
      ],
      link: '#',
      _dir: 'next',
    },
    {
      name: 'empEDU – Mobile App Design',
      icon: 'bi-book',
      role: 'UI/UX Designer',
      teamInfo: isId ? 'Proyek Tim | Agt – Des 2023' : 'Team Project | Aug – Dec 2023',
      tools: 'Figma',
      overview: isId
        ? 'empEDU merupakan desain aplikasi edukasi yang diciptakan agar siswa lebih leluasa belajar dan memeriksa kemajuan akademik dengan peranti yang interaktif.'
        : 'empEDU is an educational mobile app designed to empower students with accessible learning materials, progress tracking, and interactive study tools.',
      tasks: isId
        ? [
            'Merancang alur pengguna dari awal hingga akhir',
            'Merancang mockup resolusi tinggi di semua antarmuka layar',
            'Mengembangkan prototipe untuk pengujian interaksi',
            'Revisi hasil riset dan percobaan',
          ]
        : [
            'Designed end-to-end user flow and information architecture',
            'Created high-fidelity UI mockups for all screens',
            'Developed interactive prototypes for user testing',
            'Iterated designs based on usability feedback',
          ],
      platform: isId ? 'Desain Aplikasi Mobile' : 'Mobile App Design',
      bg: '#2a4a3a',
      images: [
        '/images/projects/Empedu/empedu.webp',
        '/images/projects/empedu_2.webp',
        '/images/projects/empedu_3.webp',
      ],
      link: 'https://youtu.be/4qN5RWZo9Nw?si=mdo5mKqoznMrGAgz',
      videoEmbedId: '4qN5RWZo9Nw',
      _dir: 'next',
    },
    {
      name: 'IUDEX – Team Portfolio Web Design',
      icon: 'bi-display',
      role: isId ? 'Desainer UI/UX, Pengembang Frontend' : 'UI/UX Designer, Frontend Developer',
      teamInfo: isId ? 'Proyek Tim | Sep 2023 – Feb 2024' : 'Team Project | Sep 2023 – Feb 2024',
      tools: 'Figma, HTML, CSS, JavaScript',
      overview: isId
        ? 'IUDEX adalah situs web portofolio tim yang menampilkan kapabilitas, identitas visual sebuah tim pada desain tata letak kekinian bercorak profesional.'
        : 'IUDEX is a team portfolio website designed to showcase the collective works and capabilities of a creative team, featuring a modern and professional layout.',
      tasks: isId
        ? [
            'Merancang prototipe tata letak lewat Figma yang disesuaikan dalam web',
            'Mengimplementasikan frontend menggunakan susunan HTML, CSS, JavaScript',
            'Memberikan pemanis tampilan transisi scrolling interaktif yang nyaman',
            'Menguji fungsional dan tingkat ketanggapsegeraannya',
          ]
        : [
            'Designed responsive web layout using Figma',
            'Developed frontend with HTML, CSS, and JavaScript',
            'Implemented smooth scroll animations and transitions',
            'Ensured cross-browser compatibility and responsiveness',
          ],
      platform: 'Web Application',
      bg: '#6a5acd',
      images: [
        '/images/projects/Iudex/iudex.webp',
        '/images/projects/iudex_2.webp',
        '/images/projects/iudex_3.webp',
      ],
      link: 'https://iudex-portfolio.vercel.app/',
      _dir: 'next',
    },
    {
      name: 'Arch – Personal Portfolio Web Design',
      icon: 'bi-laptop',
      role: isId ? 'Desainer UI/UX, Pengembang Frontend' : 'UI/UX Designer, Frontend Developer',
      teamInfo: isId ? 'Proyek Pribadi | 2024' : 'Personal Project | 2024',
      tools: 'Figma, Vue.js, TailwindCSS',
      overview: isId
        ? 'Arch adalah nama portofolio pengutamaan desain nan apik, dan ditunjang portofolio perupa berbasis laman untuk disajikan memperindah desain serta kebolehan penulisan.'
        : 'Arch is a personal portfolio web design project focused on creating a visually stunning and interactive personal website to showcase design and development work.',
      tasks: isId
        ? [
            'Merancang seluruh tata letak web dan identitas merek portofolionya',
            'Menulis koding dan menyesuaikan fronted website responsif',
            'Memasukkan seluruh gaya animatif mikro interaksi nan halus',
            'Mengoptimalkan kemudahan temu sistem cari (SEO)',
          ]
        : [
            'Designed complete portfolio layout and visual identity',
            'Built responsive frontend with modern web technologies',
            'Integrated smooth animations and micro-interactions',
            'Optimized for performance and SEO',
          ],
      platform: 'Web Application',
      bg: '#7c3aed',
      images: [
        '/images/projects/Arch/arch.webp',
        '/images/projects/arch_2.webp',
        '/images/projects/arch_3.webp',
      ],
      link: '#',
      _dir: 'next',
    },
    {
      name: 'Merch – Merch Design for Event',
      icon: 'bi-gift',
      role: isId ? 'Desainer Grafis' : 'Graphic Designer',
      teamInfo: isId ? 'Pengerjaan Bebas | 2024' : 'Freelance Project | 2024',
      tools: 'Adobe Illustrator, Adobe Photoshop',
      overview: isId
        ? 'Merch merupakan hasil komoditas rancangan pada barang berupa kaos sablon, kemasan, atau stiker acara dan materi promosi guna pemanfaatan tertentu pemasaran yang menarik.'
        : 'Merch is a merchandise design project creating branded apparel and accessories for an event, including t-shirts, tote bags, and promotional materials.',
      tasks: isId
        ? [
            'Berkreasi membuat susunan ilustrasi grafis',
            'Merilis format sesuai patokan industri pencetakan massal',
            'Mengembangkan kemewahan branding dari keseluruhan barang',
            'Bergabung berkongsi dalam hal kerja dan standar produksinya',
          ]
        : [
            'Created original merchandise designs and illustrations',
            'Prepared print-ready artwork with proper specifications',
            'Developed cohesive visual branding across all merchandise',
            'Collaborated with manufacturing for production quality',
          ],
      platform: 'Graphic Design',
      bg: '#8b5cf6',
      images: [
        '/images/projects/merch.webp',
        '/images/projects/merch_2.webp',
        '/images/projects/merch_3.webp',
      ],
      link: '#',
      _dir: 'next',
    },
  ]
})
</script>

<style scoped>
/* === Title glow pulse === */
.title-glow {
  text-shadow: 0 0 40px rgba(139, 92, 246, 0.15);
}

/* === Divider shimmer === */
.divider-line {
  background: linear-gradient(
    90deg,
    transparent 0%,
    #374151 20%,
    #7c3aed 50%,
    #374151 80%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%,
  100% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
}

/* === Project Image === */
.project-image-wrapper {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.5s ease;
}

.project-image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(124, 58, 237, 0.12);
}

/* === Project item separator === */
.project-item {
  position: relative;
  padding-bottom: 2rem;
}

.project-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
}

.project-item:last-child::after {
  display: none;
}

/* === Task item hover === */
.task-item {
  transition:
    transform 0.25s ease,
    padding-left 0.25s ease;
}

.task-item:hover {
  transform: translateX(6px);
  padding-left: 4px;
}

/* === View Work Button glow === */
.view-work-btn {
  position: relative;
  overflow: hidden;
}

.view-work-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.view-work-btn:hover::before {
  transform: translateX(100%);
}

/* === Slide Next Transition (going forward) === */
.slide-next-enter-active,
.slide-next-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    filter 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-next-enter-from {
  transform: translateX(40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

.slide-next-leave-to {
  transform: translateX(-40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

/* === Slide Prev Transition (going backward) === */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1),
    filter 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-prev-enter-from {
  transform: translateX(-40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}

.slide-prev-leave-to {
  transform: translateX(40%) scale(0.92);
  opacity: 0;
  filter: blur(6px);
}
</style>

<!-- Non-scoped styles for Teleported lightbox -->
<style>
/* === Lightbox Fade === */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.35s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* === Lightbox Slide Next === */
.lb-slide-next-enter-active,
.lb-slide-next-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lb-slide-next-enter-from {
  transform: translateX(60px) scale(0.96);
  opacity: 0;
}

.lb-slide-next-leave-to {
  transform: translateX(-60px) scale(0.96);
  opacity: 0;
}

/* === Lightbox Slide Prev === */
.lb-slide-prev-enter-active,
.lb-slide-prev-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lb-slide-prev-enter-from {
  transform: translateX(-60px) scale(0.96);
  opacity: 0;
}

.lb-slide-prev-leave-to {
  transform: translateX(60px) scale(0.96);
  opacity: 0;
}
</style>
