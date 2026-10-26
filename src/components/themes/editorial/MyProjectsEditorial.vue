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
            {{ lang === 'ID' ? 'Karya Pilihan' : 'Selected Works' }}
          </span>
        </div>
        <h2
          class="text-3xl md:text-4xl lg:text-[48px] font-bold font-['Poppins'] text-white tracking-wider mb-4"
        >
          {{ lang === 'ID' ? 'Proyek & Rekayasa Pilihan' : 'Selected Projects' }}
        </h2>
        <p
          class="text-zinc-400 font-['Roboto'] text-sm lg:text-base max-w-2xl mx-auto leading-relaxed"
        >
          {{
            lang === 'ID'
              ? 'Kurasi sistem interaktif, arsitektur cloud, dan komputasi fisik dengan kedalaman teknis tinggi.'
              : 'A curated selection of technical ecosystems, hardware integrations, and production applications.'
          }}
        </p>

        <!-- Hairline Divider -->
        <div class="w-full h-px bg-white/10 mt-12 mb-4"></div>
      </div>

      <!-- Project Editorial Spreads Loop (4 Selected Works) -->
      <div class="space-y-28 lg:space-y-40">
        <article
          v-for="(project, index) in selectedProjects"
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
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
                      width="800"
                      height="500"
                      loading="lazy"
                      decoding="async"
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
                    @click="openLightbox(index, project.images.length > 1 ? 1 : 0)"
                  >
                    <img
                      :src="project.images[1] || project.images[0]"
                      :alt="`${project.name} stack 2`"
                      width="600"
                      height="750"
                      loading="lazy"
                      decoding="async"
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
                        project.images.length > 2 ? 2 : project.images.length > 1 ? 1 : 0,
                      )
                    "
                  >
                    <img
                      :src="project.images[2] || project.images[project.images.length - 1]"
                      :alt="`${project.name} stack 3`"
                      width="500"
                      height="500"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/card3:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/card3:bg-transparent transition-colors rounded-xl"
                    ></div>
                  </div>
                </div>

                <!-- LAYOUT 2 (Index % 4 === 1): Overlapping Editorial Collage (Varied Portrait & Square Stack) -->
                <div
                  v-else-if="index % 4 === 1"
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center select-none"
                >
                  <!-- Main Hero Central Card (Landscape 16:10) -->
                  <div
                    class="relative z-20 w-[82%] sm:w-[74%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-all duration-500 hover:scale-[1.03] hover:z-40 cursor-pointer group/hero"
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

                  <!-- Top Right Overlapping Card (Compact Small Floating Badge/Phone Preview) -->
                  <div
                    class="absolute top-[0%] right-[1%] z-30 w-[36%] sm:w-[30%] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-500 transform rotate-[8deg] hover:rotate-0 hover:scale-110 hover:z-50 cursor-pointer group/card2 bg-[#18181c]"
                    @click="openLightbox(index, project.images.length > 1 ? 1 : 0)"
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

                  <!-- Bottom Left Overlapping Card (Big Prominent Wide Laptop Dashboard - Inverted Weight) -->
                  <div
                    v-if="project.images.length > 2"
                    class="absolute bottom-[-2%] left-[-2%] z-30 w-[54%] sm:w-[48%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.92)] border border-white/25 transition-all duration-500 transform -rotate-[4deg] hover:rotate-0 hover:scale-105 hover:z-50 cursor-pointer group/card3 bg-[#1a1a22]"
                    @click="openLightbox(index, 2)"
                  >
                    <img
                      :src="project.images[2]"
                      :alt="`${project.name} stack 3`"
                      class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/card3:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-black/15 group-hover/card3:bg-transparent transition-colors rounded-xl"
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
                      @click="openLightbox(index, project.images.length > 1 ? 1 : 0)"
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
                      @click="openLightbox(index, project.images.length > 2 ? 2 : 0)"
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

                <!-- LAYOUT 4 (Index % 4 === 3): Wide Banner + Corner Overlap Multi-Card Collage -->
                <div
                  v-else
                  class="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[440px] flex items-center justify-center select-none"
                >
                  <!-- Center Hero Wide Banner -->
                  <div
                    class="relative z-10 w-[84%] sm:w-[78%] aspect-16/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-all duration-500 hover:scale-[1.02] hover:z-30 cursor-pointer group/banner"
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
                    <div
                      class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/banner:opacity-100 transition-opacity"
                    >
                      <i class="bi bi-arrows-fullscreen text-xs"></i>
                    </div>
                  </div>

                  <!-- Top-Left Floating Angled Card (if images > 2) -->
                  <div
                    v-if="project.images.length > 2"
                    class="absolute left-[-1%] top-[-2%] z-20 w-[42%] sm:w-[36%] aspect-4/3 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.92)] border border-white/25 transition-all duration-500 transform -rotate-[5deg] hover:rotate-0 hover:scale-108 hover:z-40 cursor-pointer group/corner1 bg-[#18181d]"
                    @click="openLightbox(index, 2)"
                  >
                    <img
                      :src="project.images[2]"
                      :alt="`${project.name} left overlay`"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover/corner1:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover/corner1:bg-transparent transition-colors"
                    ></div>
                  </div>

                  <!-- Bottom-Right Corner Card -->
                  <div
                    class="absolute right-[-1%] bottom-[-2%] z-25 w-[44%] sm:w-[38%] aspect-4/3 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/25 transition-all duration-500 transform rotate-[4deg] hover:rotate-0 hover:scale-108 hover:z-40 cursor-pointer group/corner2 bg-[#18181d]"
                    @click="openLightbox(index, project.images.length > 1 ? 1 : 0)"
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

                  <!-- More Photos Badge (if images > 3) -->
                  <div
                    v-if="project.images.length > 3"
                    @click="openLightbox(index, 3)"
                    class="absolute bottom-1 left-2 z-30 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer hover:bg-violet-600 transition-colors shadow-lg"
                  >
                    <i class="bi bi-images text-xs"></i>
                    <span>+{{ project.images.length - 3 }} {{ lang === 'ID' ? 'Foto' : 'More' }}</span>
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
                  class="text-2xl lg:text-3xl xl:text-4xl font-bold font-['Poppins'] text-white tracking-tight leading-snug cursor-pointer hover:text-zinc-300 transition-colors"
                  @click="openLightbox(index, 0)"
                >
                  {{ project.name }}
                </h3>
                <p class="text-xs text-zinc-400 font-['Roboto'] font-normal">
                  {{ t('my_proj_role') }}:
                  <span class="text-zinc-200">{{ project.role }}</span>
                </p>
              </div>

              <!-- Metadata Specs (Team/Duration, Tools) -->
              <div class="space-y-1.5 text-xs text-zinc-300 font-['Roboto']">
                <p v-if="project.teamInfo" class="text-zinc-400">
                  {{ project.teamInfo }}
                </p>
                <!-- Tech Stack Badges (Clean Dashboard Icons with Tooltip) -->
                <div
                  v-if="project.toolIcons && project.toolIcons.length"
                  class="flex items-center gap-2.5 flex-wrap pt-1"
                >
                  <span class="text-xs text-zinc-400">{{ t('my_proj_tools') }}:</span>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <div
                      v-for="tool in project.toolIcons"
                      :key="tool.name"
                      class="relative group/tool flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-violet-500/50 hover:bg-white/[0.08] transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                    >
                      <img
                        :src="tool.icon"
                        :alt="tool.name"
                        class="w-4 h-4 object-contain transition-transform"
                        :class="tool.invert ? 'brightness-0 invert opacity-90' : ''"
                        loading="lazy"
                      />
                      <!-- Tooltip on hover -->
                      <div
                        class="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tool:opacity-100 -translate-y-1 group-hover/tool:translate-y-0 transition-all duration-150 py-0.5 px-2 rounded-md bg-zinc-900/95 border border-white/20 text-[10px] font-medium text-zinc-200 whitespace-nowrap z-50 shadow-xl backdrop-blur-sm"
                      >
                        {{ tool.name }}
                        <div
                          class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900/95"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p v-else-if="project.tools">
                  <span class="text-zinc-400">{{ t('my_proj_tools') }}:</span>
                  {{ project.tools }}
                </p>
              </div>

              <!-- Overview Description -->
              <div class="space-y-1">
                <p class="text-sm lg:text-base uppercase tracking-wider font-bold text-violet-400">
                  {{ t('my_proj_overview') }}:
                </p>
                <p class="text-zinc-300 text-xs lg:text-sm font-['Roboto'] leading-relaxed">
                  {{ project.overview }}
                </p>
              </div>

              <!-- What I Did Bullet Points -->
              <div class="space-y-2 pt-2">
                <h4 class="text-sm lg:text-base uppercase tracking-wider font-bold text-violet-400">
                  {{ t('my_proj_whatidid') }}:
                </h4>
                <ul class="space-y-1.5 pl-1">
                  <li
                    v-for="(task, tIdx) in project.tasks"
                    :key="tIdx"
                    class="flex items-start gap-2 text-zinc-300 text-xs lg:text-sm leading-relaxed"
                  >
                    <span class="text-zinc-400 text-base leading-none select-none">•</span>
                    <span>{{ task }}</span>
                  </li>
                </ul>
              </div>

              <!-- Platform tag & Action Button -->
              <div class="pt-4 flex flex-col gap-4 items-start">
                <p class="text-xs text-zinc-400 font-['Roboto']">
                  {{ project.platform }}
                </p>

                <!-- Action Button Row with Horizontal Quick Icons Expansion -->
                <div class="flex items-center gap-2.5 flex-wrap project-action-popover-container">
                  <!-- Single Clean "VIEW PROJECT" Button -->
                  <button
                    type="button"
                    @click.stop="handlePrimaryClick(project, index)"
                    class="inline-flex items-center justify-between gap-3 px-6 py-2.5 rounded-full border font-['Poppins'] font-medium text-xs tracking-wider uppercase transition-all duration-300 group cursor-pointer shadow-sm select-none"
                    :class="
                      activeDropdown === index && getProjectActions(project, index).length > 1
                        ? 'bg-white !text-zinc-950 border-white shadow-lg shadow-white/10'
                        : 'border-white/30 text-white hover:bg-white hover:!text-zinc-950 hover:border-white'
                    "
                    :title="
                      getProjectActions(project, index).length > 1
                        ? (lang === 'ID' ? 'Tampilkan opsi media' : 'Show media options')
                        : t('my_proj_view_work')
                    "
                  >
                    <span :class="activeDropdown === index && getProjectActions(project, index).length > 1 ? 'text-zinc-950 font-semibold' : ''">
                      {{ t('my_proj_view_work') }}
                    </span>
                    <!-- Icon: Close 'X' if open, or Right Chevron if multiple, or External Arrow if single -->
                    <i
                      class="bi text-xs transition-transform duration-200"
                      :class="[
                        activeDropdown === index && getProjectActions(project, index).length > 1
                          ? 'bi-x-lg text-zinc-950'
                          : getProjectActions(project, index).length > 1
                          ? 'bi-chevron-right group-hover:translate-x-1'
                          : 'bi-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      ]"
                    ></i>
                  </button>

                  <!-- Horizontal Quick Action Icons (Pops up to the right) -->
                  <transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-x-3 scale-90"
                    enter-to-class="opacity-100 translate-x-0 scale-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="opacity-100 translate-x-0 scale-100"
                    leave-to-class="opacity-0 -translate-x-3 scale-90"
                  >
                    <div
                      v-if="activeDropdown === index && getProjectActions(project, index).length > 1"
                      class="flex items-center gap-2"
                    >
                      <template
                        v-for="action in getProjectActions(project, index)"
                        :key="action.id"
                      >
                        <!-- Video / Flipbook Modal Action Button -->
                        <button
                          v-if="action.handler"
                          type="button"
                          @click="action.handler"
                          class="relative group/icon w-10 h-10 rounded-full bg-zinc-900/90 border border-white/20 hover:border-white hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                          :aria-label="action.label"
                        >
                          <img
                            v-if="action.svg"
                            :src="action.svg"
                            :alt="action.label"
                            class="w-4 h-4 object-contain transition-transform"
                          />
                          <i v-else :class="['bi', action.icon, action.brandColor, 'text-base transition-colors']"></i>

                          <!-- Floating Tooltip on Hover -->
                          <div
                            class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-all duration-150 py-1 px-2.5 rounded-lg bg-zinc-900/95 border border-white/20 text-[11px] font-['Poppins'] font-medium text-zinc-100 whitespace-nowrap z-50 shadow-xl backdrop-blur-sm -translate-y-1 group-hover/icon:translate-y-0"
                          >
                            {{ action.label }}
                            <div
                              class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900/95"
                            ></div>
                          </div>
                        </button>

                        <!-- External URL Action Link -->
                        <a
                          v-else
                          :href="action.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="relative group/icon w-10 h-10 rounded-full bg-zinc-900/90 border border-white/20 hover:border-white hover:bg-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                          :aria-label="action.label"
                        >
                          <img
                            v-if="action.svg"
                            :src="action.svg"
                            :alt="action.label"
                            class="w-4 h-4 object-contain transition-transform"
                          />
                          <i v-else :class="['bi', action.icon, action.brandColor, 'text-base transition-colors']"></i>

                          <!-- Floating Tooltip on Hover -->
                          <div
                            class="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-all duration-150 py-1 px-2.5 rounded-lg bg-zinc-900/95 border border-white/20 text-[11px] font-['Poppins'] font-medium text-zinc-100 whitespace-nowrap z-50 shadow-xl backdrop-blur-sm -translate-y-1 group-hover/icon:translate-y-0"
                          >
                            {{ action.label }}
                            <div
                              class="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900/95"
                            ></div>
                          </div>
                        </a>
                      </template>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider between spreads -->
          <div
            v-if="index < selectedProjects.length - 1"
            class="pt-20 lg:pt-28 flex items-center justify-center gap-4 text-zinc-400 font-mono text-xs tracking-widest select-none"
          >
            <span class="w-16 h-px bg-white/10"></span>
            <span>— 0{{ index + 1 }} / 0{{ selectedProjects.length }} —</span>
            <span class="w-16 h-px bg-white/10"></span>
          </div>
        </article>
      </div>

      <!-- PROJECT ARCHIVE DIRECTORY (Option A: Minimalist Swiss Table) -->
      <div
        id="project-archive-section"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="mt-32 lg:mt-40 pt-16 border-t border-white/10"
      >
        <!-- Archive Header -->
        <div class="mb-10">
          <h3 class="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white tracking-tight">
            {{ lang === 'ID' ? 'Arsip Proyek' : 'Project Archive' }}
          </h3>
          <p
            class="text-xs sm:text-sm text-zinc-400 font-['Roboto'] mt-1.5 max-w-xl leading-relaxed"
          >
            {{
              lang === 'ID'
                ? 'Daftar dokumentasi karya terdahulu, eksplorasi teknis, dan prototipe aplikasi (2023–2025).'
                : 'A catalog of earlier applications, client works, and technical explorations (2023–2025).'
            }}
          </p>
        </div>

        <!-- Desktop Archive Table -->
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full text-left border-collapse table-fixed">
            <thead>
              <tr
                class="border-b border-white/15 text-xs font-['Poppins'] font-semibold text-zinc-400"
              >
                <th class="py-3 px-3 w-[10%] min-w-[80px]">{{ lang === 'ID' ? 'Tahun' : 'Year' }}</th>
                <th class="py-3 px-3 w-[32%] min-w-[200px]">
                  {{ lang === 'ID' ? 'Proyek & Peran' : 'Project & Role' }}
                </th>
                <th class="py-3 px-3 w-[20%] min-w-[150px]">{{ lang === 'ID' ? 'Kategori' : 'Category' }}</th>
                <th class="py-3 px-3 w-[24%] min-w-[160px]">{{ lang === 'ID' ? 'Teknologi' : 'Tech Stack' }}</th>
                <th class="py-3 px-3 w-[14%] min-w-[140px] text-right">
                  {{ lang === 'ID' ? 'Tautan' : 'Link' }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5 text-xs font-['Roboto']">
              <tr
                v-for="(item, aIdx) in paginatedArchivedProjects"
                :key="item.name"
                class="group hover:bg-white/[0.03] transition-colors cursor-pointer"
                @click="openLightbox(getArchiveGlobalIndex(aIdx), 0)"
              >
                <!-- Year -->
                <td class="py-3.5 px-3 text-zinc-400">
                  {{ item.year }}
                </td>

                <!-- Project & Role -->
                <td class="py-3.5 px-3">
                  <div
                    class="font-['Poppins'] font-semibold text-white group-hover:text-violet-400 transition-colors"
                  >
                    {{ item.name.split(' – ')[0].split(' - ')[0] }}
                  </div>
                  <div class="text-[11px] text-zinc-400 font-normal line-clamp-1 mt-0.5">
                    {{ item.role }}
                  </div>
                </td>

                <!-- Category -->
                <td class="py-3.5 px-3 text-zinc-300">
                  {{ item.platform }}
                </td>

                <!-- Core Stack -->
                <td class="py-3.5 px-3 text-zinc-400">
                  <span class="line-clamp-1">
                    {{ item.tools }}
                  </span>
                </td>

                <!-- Action / Link -->
                <td class="py-3.5 px-3 text-right">
                  <div class="inline-flex items-center justify-end gap-2 w-full whitespace-nowrap">
                    <button
                      v-if="item.videoEmbedId"
                      @click.stop="openVideoModal(item.videoEmbedId, item.name)"
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/15 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 hover:border-red-500 text-[11px] font-['Poppins'] font-medium transition-all group/stream cursor-pointer shadow-sm hover:shadow-red-500/25 shrink-0"
                      :title="lang === 'ID' ? 'Putar Video Langsung di Web' : 'Stream Video on Web'"
                    >
                      <i
                        class="bi bi-play-circle-fill text-xs text-red-400 group-hover/stream:text-white transition-colors"
                      ></i>
                      <span>Stream</span>
                    </button>

                    <a
                      v-if="item.link && item.link !== '#'"
                      :href="item.link"
                      target="_blank"
                      @click.stop
                      class="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors group/link shrink-0"
                      :title="lang === 'ID' ? 'Buka Tautan Eksternal' : 'Open External Link'"
                    >
                      <span>{{ lang === 'ID' ? 'Buka' : 'Visit' }}</span>
                      <i
                        class="bi bi-arrow-up-right text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      ></i>
                    </a>
                    <button
                      v-else
                      @click.stop="openLightbox(getArchiveGlobalIndex(aIdx), 0)"
                      class="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer shrink-0"
                    >
                      <span>{{ lang === 'ID' ? 'Lihat' : 'View' }}</span>
                      <i class="bi bi-eye text-[11px]"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Archive List -->
        <div class="md:hidden space-y-3">
          <div
            v-for="(item, aIdx) in paginatedArchivedProjects"
            :key="'mob-' + item.name"
            class="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5 cursor-pointer hover:border-violet-500/30 transition-all"
            @click="openLightbox(getArchiveGlobalIndex(aIdx), 0)"
          >
            <div class="flex items-center justify-between text-xs text-zinc-400">
              <span>{{ item.year }} • {{ item.platform }}</span>
              <div class="flex items-center gap-2">
                <button
                  v-if="item.videoEmbedId"
                  @click.stop="openVideoModal(item.videoEmbedId, item.name)"
                  class="text-red-400 hover:text-white hover:bg-red-500 text-[11px] inline-flex items-center gap-1 bg-red-500/15 px-2.5 py-0.5 rounded-full border border-red-500/30 font-medium transition-all cursor-pointer"
                >
                  <i class="bi bi-play-circle-fill text-[11px]"></i>
                  <span>Stream</span>
                </button>
                <a
                  v-if="item.link && item.link !== '#'"
                  :href="item.link"
                  target="_blank"
                  @click.stop
                  class="text-violet-400 text-xs inline-flex items-center gap-1 hover:underline"
                >
                  <span>{{ lang === 'ID' ? 'Buka' : 'Visit' }}</span>
                  <i class="bi bi-arrow-up-right text-[10px]"></i>
                </a>
              </div>
            </div>
            <div class="font-['Poppins'] font-semibold text-white text-sm">
              {{ item.name.split(' – ')[0].split(' - ')[0] }}
            </div>
            <div class="text-xs text-zinc-400 font-['Roboto']">
              {{ item.role }}
            </div>
            <div class="text-xs text-zinc-400 pt-1.5 border-t border-white/5">
              {{ item.tools }}
            </div>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div
          v-if="totalArchivePages > 1"
          class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6"
        >
          <!-- Count summary -->
          <div class="text-xs text-zinc-400 font-['Roboto']">
            <span>
              {{
                lang === 'ID'
                  ? `Menampilkan ${(archivePage - 1) * archivePerPage + 1}–${Math.min(archivePage * archivePerPage, allArchivedProjects.length)} dari ${allArchivedProjects.length} proyek arsip`
                  : `Showing ${(archivePage - 1) * archivePerPage + 1}–${Math.min(archivePage * archivePerPage, allArchivedProjects.length)} of ${allArchivedProjects.length} archived projects`
              }}
            </span>
          </div>

          <!-- Pagination buttons -->
          <div class="flex items-center gap-1.5 select-none">
            <!-- Prev -->
            <button
              @click="setArchivePage(archivePage - 1)"
              :disabled="archivePage === 1"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all"
              :class="
                archivePage === 1
                  ? 'opacity-30 cursor-not-allowed text-zinc-600 border-white/5'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 border-white/10 hover:border-white/20 cursor-pointer'
              "
              aria-label="Previous Page"
            >
              <i class="bi bi-chevron-left text-[11px]"></i>
              <span>{{ lang === 'ID' ? 'Sebelumnya' : 'Prev' }}</span>
            </button>

            <!-- Numbers -->
            <div class="flex items-center gap-1">
              <button
                v-for="p in totalArchivePages"
                :key="p"
                @click="setArchivePage(p)"
                class="w-8 h-8 rounded-lg text-xs font-semibold font-mono transition-all flex items-center justify-center cursor-pointer"
                :class="
                  archivePage === p
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                "
                :aria-label="`Page ${p}`"
              >
                {{ p }}
              </button>
            </div>

            <!-- Next -->
            <button
              @click="setArchivePage(archivePage + 1)"
              :disabled="archivePage === totalArchivePages"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all"
              :class="
                archivePage === totalArchivePages
                  ? 'opacity-30 cursor-not-allowed text-zinc-600 border-white/5'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 border-white/10 hover:border-white/20 cursor-pointer'
              "
              aria-label="Next Page"
            >
              <span>{{ lang === 'ID' ? 'Berikutnya' : 'Next' }}</span>
              <i class="bi bi-chevron-right text-[11px]"></i>
            </button>
          </div>
        </div>
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

        <!-- Counter & Action Buttons -->
        <div
          class="absolute top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 text-white/60 font-['Roboto'] text-sm"
        >
          <span class="mr-1">{{ lightbox.slideIdx + 1 }} / {{ lightboxImages.length }}</span>
          <button
            v-if="currentLightboxProject && currentLightboxProject.videoEmbedId"
            @click="openVideoModal(currentLightboxProject.videoEmbedId, currentLightboxProject.name)"
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white font-['Poppins'] text-xs font-semibold tracking-wide transition-all shadow-md shadow-red-600/30 cursor-pointer hover:scale-105"
            :title="lang === 'ID' ? 'Putar Video Demo Langsung' : 'Stream Video Demo'"
          >
            <i class="bi bi-play-circle-fill text-xs"></i>
            <span>{{ lang === 'ID' ? 'Stream Demo' : 'Stream Demo' }}</span>
          </button>
          <button
            v-if="currentLightboxProject && currentLightboxProject.flipbookUrl"
            @click="openFlipbookModal(currentLightboxProject.flipbookUrl, currentLightboxProject.name)"
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/90 hover:bg-violet-600 text-white font-['Poppins'] text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105"
            :title="lang === 'ID' ? 'Buka E-Book / Flipbook Interaktif' : 'Open Interactive Flipbook'"
          >
            <i class="bi bi-book-half text-xs"></i>
            <span>Flipbook</span>
          </button>
          <a
            v-if="currentLightboxProject && currentLightboxProject.appUrl"
            :href="currentLightboxProject.appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-zinc-200 text-zinc-900 font-['Poppins'] text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105"
            :title="lang === 'ID' ? 'Unduh File Aplikasi di Google Drive' : 'Download Application on Google Drive'"
          >
            <img src="/images/tools/google-drive.svg" alt="Google Drive" class="w-3.5 h-3.5 object-contain" />
            <span>Drive App</span>
          </a>
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

  <!-- Video Stream Modal (Zero initial load overhead: iframe mounts strictly on-demand when clicked) -->
  <Teleport to="body">
    <transition name="video-modal-fade">
      <div
        v-if="videoModal.open"
        class="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-6 lg:p-10 select-none"
        @keydown.esc="closeVideoModal"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
          @click="closeVideoModal"
        ></div>

        <!-- Tech Chamfered Dialog Box (Image 2 Silhouette) -->
        <div
          class="relative z-10 w-full max-w-4xl p-[1px] bg-gradient-to-br from-white/25 via-white/10 to-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
          style="clip-path: polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px));"
          @click.stop
        >
          <!-- Inner Chassis -->
          <div
            class="w-full bg-[#0d0d10] flex flex-col overflow-hidden"
            style="clip-path: polygon(0 0, 100% 0, 100% 100%, 35px 100%, 0 calc(100% - 35px));"
          >
            <!-- Top Bar -->
            <div
              class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#121215]"
            >
              <div class="flex items-center gap-2.5 min-w-0 pr-4">
                <h4
                  class="font-['Poppins'] font-medium text-sm text-zinc-100 truncate"
                >
                  {{ getCleanTitle(videoModal.title) || 'MindEscape' }}
                </h4>
                <span class="text-zinc-600 text-xs select-none hidden sm:inline">/</span>
                <span class="text-zinc-400 font-['Roboto'] text-xs font-normal hidden sm:inline">
                  {{ lang === 'ID' ? 'Demo Video' : 'Video Demo' }}
                </span>
              </div>

              <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <a
                  v-if="videoModal.videoId"
                  :href="`https://youtu.be/${videoModal.videoId}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-['Poppins'] text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-150 cursor-pointer"
                  :title="lang === 'ID' ? 'Tonton di YouTube' : 'Watch on YouTube'"
                >
                  <span>YouTube</span>
                  <i class="bi bi-arrow-up-right text-[11px] text-zinc-500"></i>
                </a>

                <span v-if="videoModal.videoId" class="h-3.5 w-px bg-white/10 hidden sm:block"></span>

                <button
                  @click="closeVideoModal"
                  class="w-7 h-7 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                  :aria-label="lang === 'ID' ? 'Tutup dialog' : 'Close modal'"
                >
                  <i class="bi bi-x-lg text-xs"></i>
                </button>
              </div>
            </div>

            <!-- Video Player Iframe (Mounted only when videoModal.videoId is set) -->
            <div class="relative w-full aspect-video bg-black">
              <iframe
                v-if="videoModal.videoId"
                :src="`https://www.youtube-nocookie.com/embed/${videoModal.videoId}?autoplay=1&rel=0&modestbranding=1`"
                title="YouTube Video Player"
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>

  <!-- Interactive Flipbook Embed Modal Teleport -->
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="flipbookModal.open"
        class="fixed inset-0 z-99999 flex items-center justify-center p-3 sm:p-6 lg:p-8 select-none"
        @keydown.esc="closeFlipbookModal"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
          @click="closeFlipbookModal"
        ></div>

        <!-- Tech Chamfered Dialog Box -->
        <div
          class="relative z-10 w-full max-w-5xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)]"
          style="clip-path: polygon(0 0, 100% 0, 100% 100%, 36px 100%, 0 calc(100% - 36px));"
          @click.stop
        >
          <!-- Inner Chassis -->
          <div
            class="w-full bg-[#0d0d10] flex flex-col overflow-hidden"
            style="clip-path: polygon(0 0, 100% 0, 100% 100%, 35px 100%, 0 calc(100% - 35px));"
          >
            <!-- Top Bar -->
            <div
              class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#121215]"
            >
              <div class="flex items-center gap-2.5 min-w-0 pr-4">
                <h4
                  class="font-['Poppins'] font-medium text-sm text-zinc-100 truncate"
                >
                  {{ getCleanTitle(flipbookModal.title) || 'Stellar Adventures' }}
                </h4>
                <span class="text-zinc-600 text-xs select-none hidden sm:inline">/</span>
                <span class="text-zinc-400 font-['Roboto'] text-xs font-normal hidden sm:inline">
                  {{ lang === 'ID' ? 'Flipbook Interaktif' : 'Interactive Flipbook' }}
                </span>
              </div>

              <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <a
                  v-if="flipbookModal.url"
                  :href="flipbookModal.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-['Poppins'] text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-150 cursor-pointer"
                  :title="lang === 'ID' ? 'Buka versi penuh di Heyzine' : 'Open full view on Heyzine'"
                >
                  <span>{{ lang === 'ID' ? 'Buka Penuh' : 'Open Full' }}</span>
                  <i class="bi bi-arrow-up-right text-[11px] text-zinc-500"></i>
                </a>

                <span v-if="flipbookModal.url" class="h-3.5 w-px bg-white/10 hidden sm:block"></span>

                <button
                  @click="closeFlipbookModal"
                  class="w-7 h-7 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                  :aria-label="lang === 'ID' ? 'Tutup dialog' : 'Close modal'"
                >
                  <i class="bi bi-x-lg text-xs"></i>
                </button>
              </div>
            </div>

            <!-- Flipbook Embedded Iframe -->
            <div class="relative w-full bg-[#09090b] flex items-center justify-center">
              <iframe
                v-if="flipbookModal.url"
                :src="flipbookModal.url"
                class="w-full h-[460px] sm:h-[540px] lg:h-[600px] border-0"
                allow="autoplay; fullscreen; clipboard-write"
                allowfullscreen
                scrolling="no"
              ></iframe>
            </div>
          </div>
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

const selectedProjects = computed(() => projects.value.slice(0, 5))

// === Project Archive Pagination (Max 5 per page) ===
const archivePage = ref(1)
const archivePerPage = 5

const allArchivedProjects = computed(() => projects.value.slice(5))
const totalArchivePages = computed(() =>
  Math.ceil(allArchivedProjects.value.length / archivePerPage),
)

const paginatedArchivedProjects = computed(() => {
  const start = (archivePage.value - 1) * archivePerPage
  return allArchivedProjects.value.slice(start, start + archivePerPage)
})

const getArchiveGlobalIndex = (localIdx) => {
  return 5 + (archivePage.value - 1) * archivePerPage + localIdx
}

const setArchivePage = (p) => {
  if (p < 1 || p > totalArchivePages.value) return
  archivePage.value = p
}

const getCleanTitle = (rawTitle) => {
  if (!rawTitle) return ''
  const parts = rawTitle.split(/\s*[-–—·]\s*/)
  return parts[0].trim()
}
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

const currentLightboxProject = computed(() => {
  if (lightbox.projectIdx >= 0 && lightbox.projectIdx < projects.value.length) {
    return projects.value[lightbox.projectIdx]
  }
  return null
})

// === Video Modal state (On-demand streaming without initial load) ===
const videoModal = reactive({
  open: false,
  videoId: '',
  title: '',
})

const openVideoModal = (videoId, title = '') => {
  videoModal.videoId = videoId
  videoModal.title = title
  videoModal.open = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleVideoKey)
}

const closeVideoModal = () => {
  videoModal.open = false
  videoModal.videoId = ''
  videoModal.title = ''
  if (!lightbox.open && !flipbookModal.open) {
    document.body.style.overflow = ''
  }
  window.removeEventListener('keydown', handleVideoKey)
}

const handleVideoKey = (e) => {
  if (e.key === 'Escape') {
    closeVideoModal()
  }
}

// === Flipbook Modal state (Interactive embedded digital book) ===
const flipbookModal = reactive({
  open: false,
  url: '',
  title: '',
})

const openFlipbookModal = (url, title = '') => {
  flipbookModal.url = url
  flipbookModal.title = title
  flipbookModal.open = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleFlipbookKey)
}

const closeFlipbookModal = () => {
  flipbookModal.open = false
  flipbookModal.url = ''
  flipbookModal.title = ''
  if (!lightbox.open && !videoModal.open) {
    document.body.style.overflow = ''
  }
  window.removeEventListener('keydown', handleFlipbookKey)
}

const handleFlipbookKey = (e) => {
  if (e.key === 'Escape') {
    closeFlipbookModal()
  }
}

// === Action Popover Dropdown state (Option A) ===
const activeDropdown = ref(null)

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const getProjectActions = (project, index) => {
  const actions = []
  const isId = lang.value === 'ID'

  // 1. Video demo (YouTube)
  if (project.videoEmbedId) {
    actions.push({
      id: 'video',
      type: 'video',
      icon: 'bi-youtube',
      iconColor: 'text-red-500',
      brandColor: 'text-red-500 group-hover/icon:text-red-600',
      label: isId ? 'Tonton Video Demo' : 'Watch Video Demo',
      sub: isId ? 'Tonton demo video interaktif' : 'Watch interactive video demo',
      badge: 'YouTube',
      badgeStyle: 'bg-red-500/10 text-red-400 border-red-500/20',
      handler: () => {
        closeDropdown()
        openVideoModal(project.videoEmbedId, project.name)
      },
    })
  }

  // 2. Interactive E-Book / Flipbook (Embedded Modal)
  if (project.flipbookUrl) {
    actions.push({
      id: 'flipbook',
      type: 'flipbook',
      icon: 'bi-book-half',
      iconColor: 'text-violet-400',
      brandColor: 'text-violet-400 group-hover/icon:text-violet-700',
      label: isId ? 'Buka Flipbook E-Book' : 'Flipbook E-Book',
      sub: isId ? 'Versi digital interaktif' : 'Interactive digital version',
      badge: 'Heyzine',
      badgeStyle: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      handler: () => {
        closeDropdown()
        openFlipbookModal(project.flipbookUrl, project.name)
      },
    })
  }

  // 3. Download App / Files (Google Drive)
  if (project.appUrl) {
    actions.push({
      id: 'app',
      type: 'app',
      svg: '/images/tools/google-drive.svg',
      icon: 'bi-google',
      iconColor: 'text-emerald-400',
      brandColor: 'text-emerald-400 group-hover/icon:text-emerald-600',
      label: isId ? 'Unduh dari Google Drive' : 'Google Drive (APK & Assets)',
      sub: isId ? 'File APK & panduan lengkap' : 'APK files & documentation',
      badge: 'Drive',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      url: project.appUrl,
    })
  }

  // 4. Live interactive web demo
  if (project.demoUrl) {
    actions.push({
      id: 'demo',
      type: 'demo',
      icon: 'bi-box-arrow-up-right',
      iconColor: 'text-amber-400',
      brandColor: 'text-amber-400 group-hover/icon:text-amber-600',
      label: isId ? 'Buka Live Web Demo' : 'Live Interactive Demo',
      sub: isId ? 'Uji coba aplikasi langsung' : 'Try live demo in browser',
      badge: 'Live',
      badgeStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      url: project.demoUrl,
    })
  }

  // 5. GitHub or Figma or External project link
  if (
    project.link &&
    project.link !== '#' &&
    project.link !== project.appUrl &&
    project.link !== project.flipbookUrl &&
    project.link !== project.demoUrl
  ) {
    const isGithub = project.link.includes('github.com')
    const isFigma = project.link.includes('figma.com')
    actions.push({
      id: 'link',
      type: 'link',
      icon: isGithub ? 'bi-github' : isFigma ? 'bi-figma' : 'bi-arrow-up-right',
      iconColor: isGithub ? 'text-zinc-200' : isFigma ? 'text-pink-400' : 'text-sky-400',
      brandColor: isGithub
        ? 'text-zinc-200 group-hover/icon:text-zinc-950'
        : isFigma
        ? 'text-pink-400 group-hover/icon:text-purple-600'
        : 'text-sky-400 group-hover/icon:text-sky-600',
      label: isGithub
        ? (isId ? 'Lihat Repositori GitHub' : 'GitHub Repository')
        : isFigma
        ? (isId ? 'Lihat Prototipe Figma' : 'Figma Prototype')
        : (isId ? 'Buka Tautan Proyek' : 'Visit Project Link'),
      sub: isGithub
        ? (isId ? 'Lihat kode sumber' : 'View source code')
        : isFigma
        ? (isId ? 'Lihat alur desain UI' : 'View design flow')
        : (isId ? 'Buka tautan eksternal' : 'Open external link'),
      badge: isGithub ? 'GitHub' : isFigma ? 'Figma' : 'Link',
      badgeStyle: 'bg-white/5 text-zinc-300 border-white/10',
      url: project.link,
    })
  }

  return actions
}

const handlePrimaryClick = (project, index) => {
  const actions = getProjectActions(project, index)
  if (actions.length > 1) {
    toggleDropdown(index)
  } else if (actions.length === 1) {
    const act = actions[0]
    if (act.handler) {
      act.handler()
    } else if (act.url) {
      window.open(act.url, '_blank', 'noopener,noreferrer')
    }
  } else {
    // If no action link at all or link is '#', open lightbox
    openLightbox(index, 0)
  }
}

const handleGlobalClick = (e) => {
  if (!e.target.closest('.project-action-popover-container')) {
    activeDropdown.value = null
  }
}

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
  if (!videoModal.open && !flipbookModal.open) {
    document.body.style.overflow = ''
  }
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
  if (videoModal.open) return
  if (activeDropdown.value !== null && e.key === 'Escape') {
    closeDropdown()
    return
  }
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
  if (idx >= 4) {
    const targetPage = Math.floor((idx - 4) / archivePerPage) + 1
    archivePage.value = targetPage
  }
  nextTick(() => {
    let el = document.getElementById('my-project-' + idx)
    if (!el && idx >= 4) {
      el = document.getElementById('project-archive-section')
    }
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  })
}

onMounted(() => {
  window.addEventListener('scrollToProject', handleScrollToProject)
  window.addEventListener('click', handleGlobalClick)
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
  window.removeEventListener('click', handleGlobalClick)
  window.removeEventListener('keydown', handleVideoKey)
  window.removeEventListener('keydown', handleLightboxKey)
  if (autoPlayInterval) clearInterval(autoPlayInterval)
})

const projects = computed(() => {
  const isId = lang.value === 'ID'
  return [
    {
      year: '2026',
      name: isId ? 'Djaswita AR – Dynamic AR (Tugas Akhir)' : 'Djaswita AR – Dynamic AR',
      icon: 'bi-box-seam',
      role: isId ? 'Fullstack AR & Web Developer (Tugas Akhir)' : 'Fullstack AR & Web Developer (Thesis)',
      teamInfo: isId
        ? 'Tugas Akhir untuk PT Jaswita Jabar (BUMD) | Mei – Jun 2026'
        : 'Final Thesis for PT Jaswita Jabar (BUMD) | May – Jun 2026',
      tools: 'Unity, Vuforia Engine, Supabase, Vite, JavaScript, C#',
      toolIcons: [
        {
          name: 'Unity',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/unity.svg',
          invert: true,
        },
        { name: 'Vuforia Engine', icon: '/images/tools/vuforia.svg' },
        {
          name: 'Supabase',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/supabase.svg',
        },
        {
          name: 'Vite',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vite.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/javascript.svg',
        },
      ],
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
      year: '2026',
      name: isId ? 'Mathmagic – App Edukasi Matematika (HKI)' : 'Mathmagic – Educational App',
      icon: 'bi-award',
      role: isId
        ? 'Project Creator, Lead Developer & Main UI Designer'
        : 'Project Creator, Lead Developer & Main UI Designer',
      teamInfo: isId
        ? 'Hak Kekayaan Intelektual Resmi No. 001400842 | Mei – Jul 2026'
        : 'Official Copyright (HKI) No. 001400842 | May – Jul 2026',
      tools: 'Unity 6 (LTS), C#, Firebase (Firestore & Auth), Vite, JavaScript ES6, Figma',
      toolIcons: [
        {
          name: 'Unity 6',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/unity.svg',
          invert: true,
        },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/csharp.svg',
        },
        {
          name: 'Firebase',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/firebase.svg',
        },
        {
          name: 'Vite',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vite.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/javascript.svg',
        },
        {
          name: 'Figma',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/figma.svg',
        },
      ],
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
      year: '2026',
      name: isId ? 'AppliQ – Job Application Tracker' : 'AppliQ – Job Application Tracker',
      icon: 'bi-kanban',
      role: 'Mobile Developer & UI/UX Designer',
      teamInfo: isId ? 'Proyek Pribadi | Sep – Okt 2026' : 'Personal Project | Sep – Oct 2026',
      tools: 'Flutter, Dart, Supabase (PostgreSQL), Google OAuth, PDF Engine',
      toolIcons: [
        {
          name: 'Flutter',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/flutter.svg',
        },
        {
          name: 'Dart',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/dart.svg',
        },
        {
          name: 'Supabase',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/supabase.svg',
        },
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/postgresql.svg',
        },
        {
          name: 'Google OAuth',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google.svg',
        },
        {
          name: 'Figma',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/figma.svg',
        },
      ],
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
      year: '2025',
      name: 'RideXP - Arcade Game Project',
      icon: 'bi-bicycle',
      role: 'Project Manager, Game Developer, UI/UX Designer',
      teamInfo: isId ? 'Proyek Tim | Jan – Jun 2025' : 'Team Project | Jan – Jun 2025',
      tools: 'Unity, Figma, ESP32, JSON',
      toolIcons: [
        {
          name: 'Unity',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/unity.svg',
          invert: true,
        },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/csharp.svg',
        },
        {
          name: 'ESP32 (IoT)',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/espressif.svg',
        },
        {
          name: 'Figma',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/figma.svg',
        },
      ],
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
        '/images/projects/LuxionRideXP/luxion_ridexp_7.webp',
        '/images/projects/LuxionRideXP/luxion_ridexp_8.webp',
      ],
      link: '#',
      _dir: 'next',
    },
    {
      year: '2024 - 2025',
      name: isId ? 'Stellar Adventures – AR Game Project' : 'Stellar Adventures – AR Game Project',
      icon: 'bi-stars',
      role: 'AR Developer, Environment Designer',
      teamInfo: isId ? 'Proyek Tim | Sep 2024 – Feb 2025' : 'Team Project | Sep 2024 – Feb 2025',
      tools: 'Unity (URP), Vuforia Engine, Adobe Illustrator',
      toolIcons: [
        {
          name: 'Unity',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/unity.svg',
          invert: true,
        },
        { name: 'Vuforia Engine', icon: '/images/tools/vuforia.svg' },
        {
          name: 'Adobe Illustrator',
          icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/adobe-illustrator.svg',
        },
        {
          name: 'Universal Render Pipeline (URP)',
          icon: '/images/tools/urp.svg',
        },
      ],
      overview: isId
        ? 'Stellar Adventures adalah game AR yang menggabungkan dunia maya dan nyata, memungkinkan pemain menavigasi ruang bertema luar angkasa melalui kamera perangkat mobile.'
        : 'Stellar Adventures is an augmented reality game that blends the physical and digital world, allowing players to explore space-themed environments through their mobile device camera.',
      tasks: isId
        ? [
            'Mengembangkan pendeteksi bidang datar (plane detection) dan kemunculan objek 3D luar angkasa',
            'Merancang aset visual, tekstur vektor, dan ilustrasi UI menggunakan Adobe Illustrator',
            'Menerapkan mekanika interaksi dan gameplay langsung di ruang AR dengan Vuforia Engine',
            'Mengoptimalkan performa rendering grafis dan pencahayaan mobile AR dengan Universal Render Pipeline (URP)',
          ]
        : [
            'Developed AR plane detection and space 3D object instantiation pipeline',
            'Designed 2D visual assets, vector textures, and UI illustrations using Adobe Illustrator',
            'Implemented interactive game mechanics in AR space using Vuforia Engine',
            'Optimized mobile AR graphics rendering and lighting pipeline with Universal Render Pipeline (URP)',
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
      year: '2026',
      name: isId
        ? 'MyDuitGweh – Smart Financial Tracker with AI & Collaboration'
        : 'MyDuitGweh – Smart Financial Tracker with AI & Collaboration',
      icon: 'bi-wallet2',
      role: 'Mobile Developer & Cloud System Architect',
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
      year: '2026',
      name: isId ? 'DJourney Jaswita Jabar – Tourism Web' : 'DJourney Jaswita Jabar – Tourism Web',
      icon: 'bi-globe-americas',
      role: isId ? 'Frontend Web Developer & Translator Intern' : 'Frontend Web Developer & Translator Intern',
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
      images: [
        '/images/projects/djourney_jaswita.png',
      ],
      link: 'https://djourney.id/web/',
      _dir: 'next',
    },
    {
      year: '2025',
      name: 'MindEscape – VR Escape Room Game',
      icon: 'bi-headset',
      role: 'VR Developer, Environment Designer',
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
      year: '2025',
      name: 'MathRift – Educational 2D Platformer',
      icon: 'bi-calculator',
      role: 'Game Developer, UI/UX Designer',
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
        '/images/projects/Mathrift/mathrift_1.webp',
        '/images/projects/Mathrift/mathrift_2.webp',
      ],
      link: '#',
      _dir: 'next',
    },

    {
      year: '2024',
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
      year: '2023',
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
      year: '2023 - 2024',
      name: 'IUDEX – Team Portfolio Web Design',
      icon: 'bi-display',
      role: 'UI/UX Designer, Frontend Developer',
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
      year: '2024',
      name: 'Arch – Personal Portfolio Web Design',
      icon: 'bi-laptop',
      role: 'UI/UX Designer, Frontend Developer',
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
      year: '2024',
      name: 'Merch – Merch Design for Event',
      icon: 'bi-gift',
      role: 'Graphic Designer',
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

/* === Video Modal Fade === */
.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}
</style>
