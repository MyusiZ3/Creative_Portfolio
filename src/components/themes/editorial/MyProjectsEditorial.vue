<template>
  <section
    id="my-projects"
    class="bg-[#171717] py-24 px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-x-hidden font-['Roboto']"
  >
    <div class="max-w-[1600px] mx-auto relative z-10">
      <!-- Minimalist Editorial Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16 lg:mb-24"
      >
        <div class="flex justify-center mb-4">
          <span
            class="inline-block bg-[#8B5CF6] text-white font-['Poppins'] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-2 rounded-full shadow-lg shadow-violet-500/20"
          >
            Projects
          </span>
        </div>
        <h2
          class="text-3xl md:text-4xl lg:text-[48px] font-bold font-['Poppins'] text-white tracking-wider mb-4"
        >
          {{ t("my_proj_title") }}
        </h2>
        <p
          class="text-zinc-400 font-['Roboto'] text-sm lg:text-base max-w-2xl mx-auto leading-relaxed"
        >
          {{ t("my_proj_desc") }}
        </p>

        <!-- Hairline Divider -->
        <div class="w-full h-px bg-white/10 mt-12 mb-4"></div>
      </div>

      <!-- Project Editorial Spreads Loop -->
      <div class="space-y-28 lg:space-y-40">
        <article
          v-for="(project, index) in visibleProjects"
          :key="project.name"
          :id="'my-project-' + index"
          v-motion
          :initial="{ opacity: 0, y: 60 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 100 },
          }"
          class="project-spread"
        >
          <!-- Side-by-Side Grid Layout (Zig-Zag Left/Right) -->
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <!-- Media Column (Left when index is even, Right when index is odd) -->
            <div
              class="lg:col-span-6 w-full"
              :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
            >
              <div class="project-media-showcase relative py-4">
                <!-- LAYOUT 1 (Index % 4 === 0): SunMonster 3D Overlapping Stack Collage -->
                <div
                  v-if="index % 4 === 0"
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center select-none"
                >
                  <!-- Main Hero Central Card -->
                  <div
                    class="relative z-20 w-[82%] sm:w-[72%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-all duration-500 hover:scale-[1.03] hover:z-40 cursor-pointer group/hero"
                    @click="openLightbox(index, 0)"
                  >
                    <img
                      :src="project.images[0]"
                      :alt="`${project.name} main view`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/10 group-hover/hero:bg-transparent transition-colors"
                    ></div>
                    <div
                      class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/hero:opacity-100 transition-opacity"
                    >
                      <i class="bi bi-arrows-fullscreen text-xs"></i>
                    </div>
                  </div>

                  <!-- Top-Right Angled Card -->
                  <div
                    class="absolute top-[2%] right-[0%] z-30 w-[46%] sm:w-[40%] aspect-4/5 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 transform rotate-[6deg] hover:rotate-0 hover:scale-108 hover:z-50 cursor-pointer group/card2 bg-[#18181c]"
                    @click="
                      openLightbox(index, project.images.length > 1 ? 1 : 0)
                    "
                  >
                    <img
                      :src="project.images[1] || project.images[0]"
                      :alt="`${project.name} stack 2`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/card2:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/card2:bg-transparent transition-colors"
                    ></div>
                  </div>

                  <!-- Bottom-Left Angled Card -->
                  <div
                    class="absolute bottom-[0%] left-[0%] z-30 w-[42%] sm:w-[36%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 transform -rotate-[7deg] hover:rotate-0 hover:scale-108 hover:z-50 cursor-pointer group/card3 bg-[#1a1a22]"
                    @click="
                      openLightbox(
                        index,
                        project.images.length > 2
                          ? 2
                          : project.images.length > 1
                            ? 1
                            : 0,
                      )
                    "
                  >
                    <img
                      :src="
                        project.images[2] ||
                        project.images[project.images.length - 1]
                      "
                      :alt="`${project.name} stack 3`"
                      class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/card3:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/card3:bg-transparent transition-colors rounded-xl"
                    ></div>
                  </div>
                </div>

                <!-- LAYOUT 2 (Index % 4 === 1): Overlapping Horizontal Landscape Stack (2-3 Cards) -->
                <div
                  v-else-if="index % 4 === 1"
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center select-none"
                >
                  <!-- Main Hero Central Card (Landscape 16:10) -->
                  <div
                    class="relative z-20 w-[84%] sm:w-[78%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-all duration-500 hover:scale-[1.03] hover:z-40 cursor-pointer group/hero"
                    @click="openLightbox(index, 0)"
                  >
                    <img
                      :src="project.images[0]"
                      :alt="`${project.name} main view`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/10 group-hover/hero:bg-transparent transition-colors"
                    ></div>
                    <div
                      class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/hero:opacity-100 transition-opacity"
                    >
                      <i class="bi bi-arrows-fullscreen text-xs"></i>
                    </div>
                  </div>

                  <!-- Top Right Overlapping Card (Landscape 16:9) -->
                  <div
                    class="absolute top-[2%] right-[0%] z-30 w-[48%] sm:w-[42%] aspect-16/9 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 transform rotate-[4deg] hover:rotate-0 hover:scale-108 hover:z-50 cursor-pointer group/card2 bg-[#18181c]"
                    @click="
                      openLightbox(index, project.images.length > 1 ? 1 : 0)
                    "
                  >
                    <img
                      :src="project.images[1] || project.images[0]"
                      :alt="`${project.name} stack 2`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/card2:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/card2:bg-transparent transition-colors"
                    ></div>
                  </div>

                  <!-- Bottom Left Overlapping Card (Landscape 16:9) -->
                  <div
                    v-if="project.images.length > 2"
                    class="absolute bottom-[0%] left-[0%] z-30 w-[44%] sm:w-[38%] aspect-16/9 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 transform -rotate-[5deg] hover:rotate-0 hover:scale-108 hover:z-50 cursor-pointer group/card3 bg-[#1a1a22]"
                    @click="openLightbox(index, 2)"
                  >
                    <img
                      :src="project.images[2]"
                      :alt="`${project.name} stack 3`"
                      class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/card3:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/card3:bg-transparent transition-colors rounded-xl"
                    ></div>
                  </div>
                </div>

                <!-- LAYOUT 3 (Index % 4 === 2): Multi-Column Fashion Grid -->
                <div
                  v-else-if="index % 4 === 2"
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] grid grid-cols-12 gap-3 items-center select-none"
                >
                  <!-- Column 1: Left Portrait Card -->
                  <div
                    class="col-span-5 relative aspect-9/16 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 transition-all duration-500 hover:scale-[1.04] hover:z-40 cursor-pointer group/c1"
                    @click="openLightbox(index, 0)"
                  >
                    <img
                      :src="project.images[0]"
                      :alt="`${project.name} column 1`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/c1:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/15 group-hover/c1:bg-transparent transition-colors"
                    ></div>
                  </div>

                  <!-- Column 2: Right Stack (2 Cards) -->
                  <div class="col-span-7 flex flex-col gap-3">
                    <div
                      class="relative aspect-16/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 transition-all duration-500 hover:scale-[1.04] hover:z-40 cursor-pointer group/c2a"
                      @click="
                        openLightbox(index, project.images.length > 1 ? 1 : 0)
                      "
                    >
                      <img
                        :src="project.images[1] || project.images[0]"
                        :alt="`${project.name} column 2 top`"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover/c2a:scale-105"
                      />
                      <div
                        class="absolute inset-0 bg-black/15 group-hover/c2a:bg-transparent transition-colors"
                      ></div>
                    </div>

                    <div
                      class="relative aspect-16/9 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 transition-all duration-500 hover:scale-[1.04] hover:z-40 cursor-pointer group/c2b"
                      @click="
                        openLightbox(index, project.images.length > 2 ? 2 : 0)
                      "
                    >
                      <img
                        :src="project.images[2] || project.images[0]"
                        :alt="`${project.name} column 2 bottom`"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover/c2b:scale-105"
                      />
                      <div
                        class="absolute inset-0 bg-black/15 group-hover/c2b:bg-transparent transition-colors"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- LAYOUT 4 (Index % 4 === 3): Wide Banner + Corner Overlap -->
                <div
                  v-else
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center select-none"
                >
                  <!-- Center Hero Wide Banner -->
                  <div
                    class="relative z-10 w-[88%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-all duration-500 hover:scale-[1.02] hover:z-30 cursor-pointer group/banner"
                    @click="openLightbox(index, 0)"
                  >
                    <img
                      :src="project.images[0]"
                      :alt="`${project.name} wide banner`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/10 group-hover/banner:bg-transparent transition-colors"
                    ></div>
                  </div>

                  <!-- Bottom-Right Corner Card -->
                  <div
                    class="absolute right-[0%] bottom-[0%] z-20 w-[42%] aspect-4/3 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/25 transition-all duration-500 hover:scale-108 hover:z-40 cursor-pointer group/corner2 bg-[#18181d]"
                    @click="
                      openLightbox(index, project.images.length > 1 ? 1 : 0)
                    "
                  >
                    <img
                      :src="project.images[1] || project.images[0]"
                      :alt="`${project.name} right overlay`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/corner2:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/corner2:bg-transparent transition-colors"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Details Column (Right when index is even, Left when index is odd) -->
            <div
              class="lg:col-span-6 w-full space-y-6 text-left"
              :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
            >
              <!-- Project Title & Subtitle Info -->
              <div class="space-y-2">
                <h3
                  class="text-2xl lg:text-3xl xl:text-4xl font-bold font-['Poppins'] text-white tracking-tight leading-snug cursor-pointer hover:text-violet-300 transition-colors"
                  @click="openLightbox(index, 0)"
                >
                  {{ project.name }}
                </h3>
                <p class="text-xs text-zinc-400 font-['Roboto'] font-normal">
                  Role: <span class="text-zinc-200">{{ project.role }}</span>
                </p>
              </div>

              <!-- Metadata Specs (Team/Duration, Tools) -->
              <div class="space-y-1.5 text-xs text-zinc-400 font-['Roboto']">
                <p v-if="project.teamInfo">
                  <span class="text-zinc-500">Tim Proyek |</span>
                  {{ project.teamInfo }}
                </p>
                <p v-if="project.tools">
                  <span class="text-zinc-500">Tools:</span> {{ project.tools }}
                </p>
              </div>

              <!-- Overview Description -->
              <div class="space-y-1">
                <p
                  class="text-zinc-400 text-xs uppercase tracking-wider font-semibold"
                >
                  Deskripsi Singkat:
                </p>
                <p
                  class="text-zinc-300 text-xs lg:text-sm font-['Roboto'] leading-relaxed"
                >
                  {{ project.overview }}
                </p>
              </div>

              <!-- What I Did Bullet Points -->
              <div class="space-y-2 pt-2">
                <h4
                  class="text-xs font-bold text-white uppercase tracking-wider"
                >
                  What I Did:
                </h4>
                <ul class="space-y-1.5 pl-1">
                  <li
                    v-for="(task, tIdx) in project.tasks"
                    :key="tIdx"
                    class="flex items-start gap-2 text-zinc-300 text-xs lg:text-sm leading-relaxed"
                  >
                    <span
                      class="text-zinc-400 text-base leading-none select-none"
                      >•</span
                    >
                    <span>{{ task }}</span>
                  </li>
                </ul>
              </div>

              <!-- Platform tag & Action Button -->
              <div class="pt-4 flex flex-col gap-4 items-start">
                <p class="text-xs text-zinc-400 font-['Roboto']">
                  {{ project.platform }}
                </p>

                <a
                  :href="project.link || '#'"
                  @click="project.link === '#' ? openLightbox(index, 0) : null"
                  class="inline-flex items-center justify-between gap-3 px-6 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black font-['Poppins'] font-medium text-xs tracking-wider uppercase transition-all duration-300 group cursor-pointer"
                >
                  <span>{{ t("my_proj_view_work") }}</span>
                  <i
                    class="bi bi-chevron-right text-xs group-hover:translate-x-1 transition-transform"
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Divider between spreads -->
          <div
            v-if="index < visibleProjects.length - 1"
            class="pt-20 lg:pt-28 flex items-center justify-center gap-4 text-zinc-600 font-mono text-xs tracking-widest select-none"
          >
            <span class="w-16 h-px bg-white/10"></span>
            <span>— 0{{ index + 1 }} / 0{{ visibleProjects.length }} —</span>
            <span class="w-16 h-px bg-white/10"></span>
          </div>
        </article>
      </div>

      <!-- View All Projects Toggle Button -->
      <div
        v-if="projects.length > 4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="mt-24 text-center"
      >
        <button
          @click="showAll = !showAll"
          class="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-transparent border border-white/20 hover:border-violet-500 text-white rounded-full transition-all duration-300 hover:bg-violet-500/10 cursor-pointer"
        >
          [ {{ showAll ? t("my_proj_show_less") : t("my_proj_view_all") }} ]
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
        <div
          class="absolute inset-0 bg-black/90 backdrop-blur-md"
          @click="closeLightbox"
        ></div>

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
              class="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto block"
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
            :class="
              lightbox.slideIdx === i
                ? 'bg-violet-400 w-6'
                : 'bg-white/30 hover:bg-white/60'
            "
          ></button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
} from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { t, lang } = useLanguage();

// Track active slide per project
const activeSlides = reactive({});

const showAll = ref(false);
const visibleProjects = computed(() =>
  showAll.value ? projects.value : projects.value.slice(0, 4),
);
// Track direction for each project for transition

// === Lightbox state ===
const lightbox = reactive({
  open: false,
  projectIdx: 0,
  slideIdx: 0,
  dir: "next",
});

const lightboxImages = computed(() => {
  if (lightbox.projectIdx >= 0 && lightbox.projectIdx < projects.value.length) {
    return projects.value[lightbox.projectIdx].images;
  }
  return [];
});

const openLightbox = (projectIdx, slideIdx) => {
  lightbox.projectIdx = projectIdx;
  lightbox.slideIdx = slideIdx;
  lightbox.dir = "next";
  lightbox.open = true;
  document.body.style.overflow = "hidden";
  nextTick(() => {
    window.addEventListener("keydown", handleLightboxKey);
  });
};

const closeLightbox = () => {
  lightbox.open = false;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleLightboxKey);
};

const lightboxNext = () => {
  lightbox.dir = "next";
  lightbox.slideIdx = (lightbox.slideIdx + 1) % lightboxImages.value.length;
};

const lightboxPrev = () => {
  lightbox.dir = "prev";
  lightbox.slideIdx =
    (lightbox.slideIdx - 1 + lightboxImages.value.length) %
    lightboxImages.value.length;
};

const lightboxGoTo = (i) => {
  lightbox.dir = i > lightbox.slideIdx ? "next" : "prev";
  lightbox.slideIdx = i;
};

const handleLightboxKey = (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
};

// Touch / swipe support
let touchStartX = 0;
let touchEndX = 0;

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const onTouchMove = (e) => {
  touchEndX = e.touches[0].clientX;
};

const onTouchEnd = () => {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) lightboxNext();
    else lightboxPrev();
  }
  touchStartX = 0;
  touchEndX = 0;
};
const slideDirections = reactive({});

const getTransitionName = (dir) => {
  return dir === "prev" ? "slide-prev" : "slide-next";
};

const goToSlide = (projectIdx, slideIdx) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = slideIdx > current ? "next" : "prev";
  // Assign _dir to the project reactively
  projects.value[projectIdx]._dir = slideDirections[projectIdx];
  activeSlides[projectIdx] = slideIdx;
};

const nextSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = "next";
  projects.value[projectIdx]._dir = "next";
  activeSlides[projectIdx] = (current + 1) % total;
};

const prevSlide = (projectIdx, total) => {
  const current = activeSlides[projectIdx] || 0;
  slideDirections[projectIdx] = "prev";
  projects.value[projectIdx]._dir = "prev";
  activeSlides[projectIdx] = (current - 1 + total) % total;
};

// Auto-play carousel
let autoPlayInterval = null;

const handleScrollToProject = (e) => {
  const idx = e.detail;
  if (idx >= 4 && !showAll.value) {
    showAll.value = true;
  }
  nextTick(() => {
    const el = document.getElementById("my-project-" + idx);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
};

onMounted(() => {
  window.addEventListener("scrollToProject", handleScrollToProject);
  autoPlayInterval = setInterval(() => {
    projects.value.forEach((project, idx) => {
      if (project.images.length > 1) {
        const current = activeSlides[idx] || 0;
        projects.value[idx]._dir = "next";
        activeSlides[idx] = (current + 1) % project.images.length;
      }
    });
  }, 4000);
});

onUnmounted(() => {
  window.removeEventListener("scrollToProject", handleScrollToProject);
  if (autoPlayInterval) clearInterval(autoPlayInterval);
});

const projects = computed(() => {
  const isId = lang.value === "ID";
  return [
    {
      name: isId
        ? "Djaswita AR – Dynamic AR & Web CMS (Tugas Akhir)"
        : "Djaswita AR – Dynamic AR & Web CMS (Thesis)",
      icon: "bi-box-seam",
      role: isId
        ? "Pengembang AR & Web Fullstack (Tugas Akhir)"
        : "Fullstack AR & Web Developer (Thesis)",
      teamInfo: isId
        ? "Proyek Tugas Akhir Kelulusan | 2025"
        : "Final Thesis Graduation Project | 2025",
      tools: "Unity, AR Foundation, Supabase DB, Vite, JavaScript",
      overview: isId
        ? "Satu sistem terintegrasi yang menggabungkan aplikasi Dynamic Augmented Reality (AR) dan Web Admin Dashboard (CMS) berbasis Vite & Supabase DB sebagai topik Tugas Akhir kelulusan. Konten 3D dan informasi dalam aplikasi AR dapat di-CRUD secara real-time melalui web admin tanpa perlu rebuild aplikasi."
        : "A unified system combining a dynamic Augmented Reality (AR) app and a Vite & Supabase DB Web Admin Dashboard (CMS) built for Final Graduation Thesis. Enables real-time remote 3D content CRUD operations directly from the web admin without rebuilding application binaries.",
      tasks: isId
        ? [
            "Membangun arsitektur AR dinamis yang memuat aset 3D & data dari Supabase DB",
            "Mengembangkan Web Admin Dashboard (CMS) menggunakan Vite untuk manajemen CRUD konten AR",
            "Mengeliminasi kebutuhan rebuild aplikasi AR saat ada perubahan atau penambahan materi 3D",
            "Mengintegrasikan autentikasi database, manajemen storage, dan endpoint API real-time",
          ]
        : [
            "Architected dynamic AR remote asset loading pipeline connected to Supabase DB",
            "Developed Web Admin Dashboard (CMS) using Vite for full AR content CRUD management",
            "Eliminated application binary rebuilds when 3D models or informational content are modified",
            "Integrated database authentication, cloud storage management, and real-time APIs",
          ],
      platform: isId
        ? "Aplikasi AR Mobile & Web CMS (Satu Sistem)"
        : "Unified AR App & Web CMS System",
      bg: "#7c3aed",
      images: [
        "/images/projects/arch.png",
        "/images/projects/arch_2.webp",
        "/images/projects/arch_3.webp",
      ],
      link: "https://github.com/MyusiZ3/DjaswitaAR-Fix",
      _dir: "next",
    },
    {
      name: isId
        ? "Mathmagic – App Edukasi Matematika (HKI)"
        : "Mathmagic – Math Educational App (HKI)",
      icon: "bi-award",
      role: isId
        ? "Desainer UI Utama, Pengembang Unity & Web"
        : "Main UI Designer, Lead Unity & Web Developer",
      teamInfo: isId
        ? "Hak Kekayaan Intelektual | SD Lab Univ Pattimura"
        : "Intellectual Property (HKI) | SD Lab Pattimura Univ",
      tools: "Unity 2D, C#, Figma, Vite, Database Analytics",
      overview: isId
        ? "Aplikasi pembelajaran matematika interaktif berlisensi HKI untuk siswa kelas 4 SD Laboratorium Universitas Pattimura. Dilengkapi Web Admin Dashboard untuk mengelola pengguna, mengonfigurasi parameter gim (global time, HP, skor), dan menganalisis performa belajar."
        : "Intellectual Property (HKI) certified educational math application for 4th Grade SD Laboratorium Universitas Pattimura. Features Unity gameplay backed by a Web Admin Dashboard for user management, game config tuning (global time, HP, score), and user analytics.",
      tasks: isId
        ? [
            "Merancang seluruh antarmuka (Main UI Designer) dan alur UX gim anak di Figma",
            "Mengembangkan logika permainan (Unity C#) mencakup kuis, HP, dan timer",
            "Membangun Web Admin Dashboard untuk manajemen akun pengguna, siswa & guru",
            "Membuat sistem konfigurasi gim dinamis (global time, HP, score) & panel analisis user",
            "Pendaftaran Hak Kekayaan Intelektual (HKI) resmi aplikasi",
          ]
        : [
            "Designed full user interface and child-friendly UX flow in Figma as Main UI Designer",
            "Programmed interactive math game mechanics in Unity C# (quiz, HP, timer)",
            "Built Web Admin Dashboard for user, student, and teacher account management",
            "Created dynamic game configuration panel (global time, HP, score) & user analytics",
            "Registered and secured official Intellectual Property Rights (HKI) certification",
          ],
      platform: isId
        ? "Gim Edukasi Unity & Web Admin"
        : "Unity Game & Web Admin Dashboard",
      bg: "#059669",
      images: [
        "/images/projects/mathrift.png",
        "/images/projects/mathrift_2.webp",
        "/images/projects/mathrift_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: isId
        ? "DJourney Jaswita Jabar – Tourism Web"
        : "DJourney Jaswita Jabar – Tourism Web",
      icon: "bi-globe-americas",
      role: isId
        ? "Pengembang Frontend Web & IT Intern"
        : "Frontend Web Developer & IT Intern",
      teamInfo: isId
        ? "Magang | PT. Jasa & Kepariwisataan Jabar"
        : "Internship | PT. Jasa & Kepariwisataan Jabar",
      tools: "HTML, CSS, JavaScript, i18n, Responsive Web Design",
      overview: isId
        ? "Pengembangan platform pariwisata DJourney milik PT. Jasa & Kepariwisataan Jabar (Perseroda). Berfokus pada implementasi sistem multi-language (i18n), optimasi tampilan responsif mobile, serta bug fix pada filter pencarian dan tata letak antarmuka."
        : "Development of DJourney tourism website for PT. Jasa & Kepariwisataan Jabar. Focused on building multi-language (i18n) localization, mobile responsive layouts, and bug fixes for destination search filters and UI display issues.",
      tasks: isId
        ? [
            "Mengimplementasikan fitur multi-language (i18n) untuk wisatawan domestik & mancanegara",
            "Merancang & mengoptimalkan tampilan responsif mobile untuk aksesibilitas lintas perangkat",
            "Melakukan pengujian & bug fixing pada fitur filter pencarian destinasi pariwisata",
            "Memperbaiki bug inkonsistensi tata letak visual dan responsivitas antarmuka web",
          ]
        : [
            "Implemented multi-language (i18n) localization for domestic & international tourists",
            "Designed and optimized mobile-responsive layouts for cross-device compatibility",
            "Fixed and refactored destination search filter features and logic",
            "Resolved visual display inconsistencies and responsive UI layout bugs",
          ],
      platform: "Web Application",
      bg: "#2563eb",
      images: [
        "/images/projects/iudex.png",
        "/images/projects/iudex_2.webp",
        "/images/projects/iudex_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "RideXP - Arcade Game Project",
      icon: "bi-bicycle",
      role: isId
        ? "Manajer Proyek, Pengembang Game, Desainer UI/UX"
        : "Project Manager, Game Developer, UI/UX Designer",
      teamInfo: isId
        ? "Proyek Tim | Jan – Jun 2025"
        : "Team Project | Jan – Jun 2025",
      tools: "Unity, Figma, ESP32, JSON",
      overview: isId
        ? "RideXP adalah game balap arkade di mana pemain mengendalikan sepeda dalam game dengan mengayuh sepeda statis fisik yang terhubung via ESP32. Dibangun di Unity, game ini menggabungkan IoT, pengembangan game, dan desain UI/UX."
        : "RideXP is an arcade-style cycling game where players control their in-game bike by pedaling a physical stationary bike connected via ESP32. Built in Unity, the game combines IoT, game development, and UI/UX design.",
      tasks: isId
        ? [
            "Memimpin koordinasi tim dan perencanaan fitur",
            "Merancang alur UI/UX (menu, HUD, layar hasil) menggunakan Figma",
            "Membangun sistem papan peringkat lokal menggunakan JSON",
            "Mengimplementasikan NPC AI berbasis navigasi waypoint",
            "Merancang lingkungan game, aset visual, serta efek visual (VFX)",
            "Membuat identitas karya serta materi presentasi untuk pameran",
          ]
        : [
            "Led team coordination and feature planning",
            "Designed full UI/UX flow (menu, HUD, result screen) using Figma",
            "Built local leaderboard system using JSON",
            "Implemented AI NPC with waypoint-based navigation",
            "Designed game environments, composited visual assets, and created VFX logic",
            "Created branding assets & presentation deck for public exhibition",
          ],
      platform: isId ? "Aplikasi Desktop Arkade" : "Arcade Desktop App",
      bg: "#C0392B",
      images: [
        "/images/projects/luxion_ridexp.webp",
        "/images/projects/luxion_ridexp_2.webp",
        "/images/projects/luxion_ridexp_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "MindEscape – VR Escape Room Game",
      icon: "bi-headset",
      role: isId
        ? "Pengembang VR, Desainer Lingkungan"
        : "VR Developer, Environment Designer",
      teamInfo: isId
        ? "Proyek Tim | Jan – Jun 2025"
        : "Team Project | Jan – Jun 2025",
      tools: "Unity, Oculus SDK",
      overview: isId
        ? "MindEscape adalah permaianan VR ruang lolos yang berfokus pada eksplorasi dan interaksi lingkungan. Dibuat menggunakan Unity, proyek ini mensimulasikan pengalaman puzzle penuh menggunakan headset VR."
        : "MindEscape is a virtual reality escape room game focused on exploration and environmental interaction. Built using Unity, the project simulates a full puzzle escape experience using a VR headset.",
      tasks: isId
        ? [
            "Merancang tata letak lingkungan 3D dan penempatan objek",
            "Menangani sistem kamera VR dan transisi adegan",
            "Menerapkan mekanisme interaksi alat (mengambil objek, pemicu teka-teki)",
            "Mengoptimalkan pencahayaan dan performa untuk kelancaran",
          ]
        : [
            "Designed 3D environment layout and object placement",
            "Handled VR camera systems and scene transitions",
            "Implemented user interaction mechanics (grabbing, puzzle triggers)",
            "Optimized lighting and performance for smooth VR experience",
          ],
      platform: isId ? "Aplikasi Desktop VR" : "VR Desktop App",
      bg: "#4A1D8E",
      images: [
        "/images/projects/mindescape_vr.webp",
        "/images/projects/mindescape_vr_2.webp",
        "/images/projects/mindescape_vr_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "MathRift – Educational 2D Platformer",
      icon: "bi-calculator",
      role: isId
        ? "Pengembang Game, Desainer UI/UX"
        : "Game Developer, UI/UX Designer",
      teamInfo: isId
        ? "Proyek Tim | Agt – Des 2024"
        : "Team Project | Aug – Dec 2024",
      tools: "Unity, Figma",
      overview: isId
        ? "MathRift adalah game platform 2D edukasi yang dirancang agar belajar matematika jadi menyenangkan lewat gameplay interaktif, teka teki, dan level yang menantang secara bertahap."
        : "MathRift is a 2D educational platformer game designed to make learning math fun through interactive gameplay, puzzles, and progressive difficulty levels.",
      tasks: isId
        ? [
            "Mengembangkan mekanisme inti dan pengontrol pemain",
            "Merancang wireframe UI/UX hingga hasil akhir dalam Figma",
            "Mengintegrasikan progres level dan sistem penilaian",
            "Membuat aset permainan dan animasi sprite",
          ]
        : [
            "Developed core game mechanics and player controller",
            "Designed UI/UX wireframes and final screens in Figma",
            "Implemented level progression and scoring system",
            "Created game assets and sprite animations",
          ],
      platform: "Desktop Game",
      bg: "#1a3a4a",
      images: [
        "/images/projects/mathrift.webp",
        "/images/projects/mathrift_2.webp",
        "/images/projects/mathrift_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Stellar Adventures – AR Game Project",
      icon: "bi-stars",
      role: isId
        ? "Pengembang AR, Desainer Lingkungan"
        : "AR Developer, Environment Designer",
      teamInfo: isId
        ? "Proyek Tim | Agt – Des 2024"
        : "Team Project | Aug – Dec 2024",
      tools: "Unity, AR Foundation, Blender",
      overview: isId
        ? "Stellar Adventures adalah game AR yang menggabungkan dunia maya dan nyata, memungkinkan pemain menavigasi ruang bertema luar angkasa melalui kamera."
        : "Stellar Adventures is an augmented reality game that blends the physical and digital world, allowing players to explore space-themed environments through their device camera.",
      tasks: isId
        ? [
            "Mengembangkan pendeteksi bidang datar dan kemunculan objek",
            "Merancang tekstur dan model lingkungan 3D",
            "Menerapkan mekanika permainan langsung di ruang AR",
            "Mengoptimalkan AR untuk perangkat mobile",
          ]
        : [
            "Developed AR plane detection and object placement",
            "Designed 3D environment models and textures",
            "Implemented interactive game mechanics in AR space",
            "Optimized performance for mobile AR devices",
          ],
      platform: isId ? "Aplikasi AR Mobile" : "AR Mobile App",
      bg: "#1a2a3a",
      images: [
        "/images/projects/stellar_adventures.webp",
        "/images/projects/stellar_adventures_2.webp",
        "/images/projects/stellar_adventures_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "U-Asprak – Mobile App Design",
      icon: "bi-people",
      role: "UI/UX Designer",
      teamInfo: isId
        ? "Studi Kasus Tim | Jan – Jun 2024"
        : "Team Project | Jan – Jun 2024",
      tools: "Figma, Adobe XD",
      overview: isId
        ? "U-Asprak merupakan desain aplikasi seluler untuk memperbaiki proses manajemen asisten praktikum, mencakup penjadwalan, nilai, serta media komunikasi."
        : "U-Asprak is a mobile application designed to streamline the teaching assistant management process, including scheduling, grading, and communication between lecturers and assistants.",
      tasks: isId
        ? [
            "Melakukan riset terhadap pengguna",
            "Merancang alur wireframe ber-resolusi tinggi",
            "Membangun protipe interaktif untuk dipakai dalam user testing",
            "Mendefinisikan bahasa desain dan library komponen",
          ]
        : [
            "Conducted user research and created user personas",
            "Designed wireframes and high-fidelity prototypes",
            "Built interactive prototype for usability testing",
            "Created design system and component library",
          ],
      platform: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#5b6abf",
      images: [
        "/images/projects/u_asprak.webp",
        "/images/projects/u_asprak_2.webp",
        "/images/projects/u_asprak_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "empEDU – Mobile App Design",
      icon: "bi-book",
      role: "UI/UX Designer",
      teamInfo: isId
        ? "Proyek Tim | Agt – Des 2023"
        : "Team Project | Aug – Dec 2023",
      tools: "Figma",
      overview: isId
        ? "empEDU merupakan desain aplikasi edukasi yang diciptakan agar siswa lebih leluasa belajar dan memeriksa kemajuan akademik dengan peranti yang interaktif."
        : "empEDU is an educational mobile app designed to empower students with accessible learning materials, progress tracking, and interactive study tools.",
      tasks: isId
        ? [
            "Merancang alur pengguna dari awal hingga akhir",
            "Merancang mockup resolusi tinggi di semua antarmuka layar",
            "Mengembangkan prototipe untuk pengujian interaksi",
            "Revisi hasil riset dan percobaan",
          ]
        : [
            "Designed end-to-end user flow and information architecture",
            "Created high-fidelity UI mockups for all screens",
            "Developed interactive prototypes for user testing",
            "Iterated designs based on usability feedback",
          ],
      platform: isId ? "Desain Aplikasi Mobile" : "Mobile App Design",
      bg: "#2a4a3a",
      images: [
        "/images/projects/empedu.webp",
        "/images/projects/empedu_2.webp",
        "/images/projects/empedu_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "IUDEX – Team Portfolio Web Design",
      icon: "bi-display",
      role: isId
        ? "Desainer UI/UX, Pengembang Frontend"
        : "UI/UX Designer, Frontend Developer",
      teamInfo: isId
        ? "Proyek Tim | Jan – Jun 2024"
        : "Team Project | Jan – Jun 2024",
      tools: "Figma, HTML, CSS, JavaScript",
      overview: isId
        ? "IUDEX adalah situs web portofolio tim yang menampilkan kapabilitas, identitas visual sebuah tim pada desain tata letak kekinian bercorak profesional."
        : "IUDEX is a team portfolio website designed to showcase the collective works and capabilities of a creative team, featuring a modern and professional layout.",
      tasks: isId
        ? [
            "Merancang prototipe tata letak lewat Figma yang disesuaikan dalam web",
            "Mengimplementasikan frontend menggunakan susunan HTML, CSS, JavaScript",
            "Memberikan pemanis tampilan transisi scrolling interaktif yang nyaman",
            "Menguji fungsional dan tingkat ketanggapsegeraannya",
          ]
        : [
            "Designed responsive web layout using Figma",
            "Developed frontend with HTML, CSS, and JavaScript",
            "Implemented smooth scroll animations and transitions",
            "Ensured cross-browser compatibility and responsiveness",
          ],
      platform: "Web Application",
      bg: "#6a5acd",
      images: [
        "/images/projects/iudex.webp",
        "/images/projects/iudex_2.webp",
        "/images/projects/iudex_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Arch – Personal Portfolio Web Design",
      icon: "bi-laptop",
      role: isId
        ? "Desainer UI/UX, Pengembang Frontend"
        : "UI/UX Designer, Frontend Developer",
      teamInfo: isId ? "Proyek Pribadi | 2024" : "Personal Project | 2024",
      tools: "Figma, Vue.js, TailwindCSS",
      overview: isId
        ? "Arch adalah nama portofolio pengutamaan desain nan apik, dan ditunjang portofolio perupa berbasis laman untuk disajikan memperindah desain serta kebolehan penulisan."
        : "Arch is a personal portfolio web design project focused on creating a visually stunning and interactive personal website to showcase design and development work.",
      tasks: isId
        ? [
            "Merancang seluruh tata letak web dan identitas merek portofolionya",
            "Menulis koding dan menyesuaikan fronted website responsif",
            "Memasukkan seluruh gaya animatif mikro interaksi nan halus",
            "Mengoptimalkan kemudahan temu sistem cari (SEO)",
          ]
        : [
            "Designed complete portfolio layout and visual identity",
            "Built responsive frontend with modern web technologies",
            "Integrated smooth animations and micro-interactions",
            "Optimized for performance and SEO",
          ],
      platform: "Web Application",
      bg: "#7c3aed",
      images: [
        "/images/projects/arch.webp",
        "/images/projects/arch_2.webp",
        "/images/projects/arch_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
    {
      name: "Merch – Merch Design for Event",
      icon: "bi-gift",
      role: isId ? "Desainer Grafis" : "Graphic Designer",
      teamInfo: isId ? "Pengerjaan Bebas | 2024" : "Freelance Project | 2024",
      tools: "Adobe Illustrator, Adobe Photoshop",
      overview: isId
        ? "Merch merupakan hasil komoditas rancangan pada barang berupa kaos sablon, kemasan, atau stiker acara dan materi promosi guna pemanfaatan tertentu pemasaran yang menarik."
        : "Merch is a merchandise design project creating branded apparel and accessories for an event, including t-shirts, tote bags, and promotional materials.",
      tasks: isId
        ? [
            "Berkreasi membuat susunan ilustrasi grafis",
            "Merilis format sesuai patokan industri pencetakan massal",
            "Mengembangkan kemewahan branding dari keseluruhan barang",
            "Bergabung berkongsi dalam hal kerja dan standar produksinya",
          ]
        : [
            "Created original merchandise designs and illustrations",
            "Prepared print-ready artwork with proper specifications",
            "Developed cohesive visual branding across all merchandise",
            "Collaborated with manufacturing for production quality",
          ],
      platform: "Graphic Design",
      bg: "#8b5cf6",
      images: [
        "/images/projects/merch.webp",
        "/images/projects/merch_2.webp",
        "/images/projects/merch_3.webp",
      ],
      link: "#",
      _dir: "next",
    },
  ];
});
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
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 58, 237, 0.2),
    transparent
  );
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
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 58, 237, 0.1),
    transparent
  );
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
