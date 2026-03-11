<script setup>
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>
<template>
  <!-- My Skills Section -->
  <section
    id="skills"
    class="bg-[#171717] py-20 px-6 lg:px-40 relative overflow-hidden"
  >
    <!-- Decorative Side Tabs -->
    <img
      src="/images/accent_5.png"
      alt="Decorative Side Tab"
      class="absolute left-0 top-1/2 -translate-y-1/2 w-12 lg:w-20 pointer-events-none"
    />
    <img
      src="/images/accent_5.png"
      alt="Decorative Side Tab"
      class="absolute right-0 top-1/2 -translate-y-1/2 w-12 lg:w-20 pointer-events-none transform rotate-180"
    />

    <div class="container mx-auto relative z-10 text-center">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.7 }"
        :visible="{ opacity: 1, scale: 1, transition: { duration: 500, type: 'spring', stiffness: 200, damping: 15 } }"
        class="inline-block bg-violet-500 text-white font-['Poppins'] font-bold text-[14px] lg:text-[16px] px-6 py-2 rounded-full mb-6 mt-10"
      >
        MY SKILLS
      </div>

      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100, ease: 'easeOut' } }"
        class="text-3xl lg:text-[48px] font-bold font-['Poppins'] text-white mb-6 uppercase tracking-wider"
      >
        Some Software That I Use
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: 'easeOut' } }"
        class="text-[#8E949F] font-['Roboto'] font-medium text-[14px] lg:text-[16px] max-w-3xl mx-auto leading-relaxed mb-16"
      >
        A versatile toolkit that supports my workflow across UI/UX, game
        development, and interactive media &mdash; from wireframes and design
        assets to real-time prototypes and immersive experiences.
      </p>

      <!-- Divider with Dot Matrices -->
      <div
        v-motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :visible="{ opacity: 1, scaleX: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
        class="relative w-full max-w-8xl mx-auto mb-16"
      >
        <!-- The horizontal line -->
        <div class="h-px w-full bg-gray-700"></div>

        <!-- Left Dot Matrix (4x3) -->
        <div
          class="absolute -top-4 lg:top-8 -left-2 lg:-left-6 grid grid-cols-4 gap-1 lg:gap-1.5 opacity-40"
        >
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
        </div>

        <!-- Right Dot Matrix (4x3) -->
        <div
          class="absolute -top-4 lg:top-12 -right-2 lg:-right-6 grid grid-cols-4 gap-1 lg:gap-1.5 opacity-40"
        >
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
          <div class="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      <!-- Icons Grid -->
      <div
        class="flex flex-col items-center gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-4xl mx-auto scale-110 md:scale-[1.15] lg:scale-[1.2] origin-top"
      >
        <!-- Row 1 -->
        <div class="flex flex-wrap justify-center gap-4 lg:gap-6">
          <!-- Unity -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
              alt="Unity"
              class="w-10 lg:w-12 h-10 lg:h-12 brightness-0 invert"
            />
          </div>
          <!-- Firebase -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 80, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              alt="Firebase"
              class="w-10 lg:w-12 h-10 lg:h-12"
            />
          </div>
          <!-- VS Code -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 160, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              alt="VS Code"
              class="w-10 lg:w-12 h-10 lg:h-12"
            />
          </div>
          <!-- GitHub -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 240, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
              class="w-10 lg:w-12 h-10 lg:h-12 brightness-0 invert"
            />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex flex-wrap justify-center gap-4 lg:gap-6 mt-2">
          <!-- Ai -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 100, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#330000] text-[#FF9A00] text-3xl lg:text-[40px] font-bold font-['Roboto'] rounded-[16px] lg:rounded-[26px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            Ai
          </div>
          <!-- Ps -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 180, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#001E36] text-[#31A8FF] text-3xl lg:text-[40px] font-bold font-['Roboto'] rounded-[16px] lg:rounded-[26px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            Ps
          </div>
          <!-- Xd -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 260, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#470137] text-[#FF61F6] text-3xl lg:text-[40px] font-bold font-['Roboto'] rounded-[16px] lg:rounded-[26px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            Xd
          </div>
          <!-- Figma -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 340, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="Figma"
              class="w-10 lg:w-12 h-10 lg:h-12"
            />
          </div>
          <!-- Canva -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 420, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-linear-to-tr from-[#00C4CC] to-[#7D2AE8] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl overflow-hidden"
          >
            <span
              class="text-white font-bold italic text-lg lg:text-[22px] font-['Poppins']"
              >Canva</span
            >
          </div>
          <!-- IbisPaint (Custom Simulation) -->
           <div
            v-motion
            :initial="{ opacity: 0, scale: 0.5, y: 20 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 500, type: 'spring', stiffness: 250, damping: 15 } }"
            class="w-16 h-16 lg:w-[85px] lg:h-[85px] bg-[#1D1D1D] rounded-[16px] lg:rounded-[24px] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*hLRURjB2M29RAHVnOj6nbw.png"
              alt="Figma"
              class="w-10 lg:w-25 h-10 lg:h-22 rounded-[16px] lg:rounded-[24px]"
            />
          </div>
        </div>
      </div>

      <!-- Pagination & Arrow Down -->

      <!-- Text Subtitle List -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400, ease: 'easeOut' } }"
        class="pt-[2rem] text-[11px] lg:text-[16px] text-[#ffffff] font-['Roboto'] font-medium mb-16 max-w-4xl mx-auto leading-loose lg:leading-loose"
      >
        Unity &bull; Firebase &bull; VS Code &bull; Github &bull; Adobe
        Illustrator &bull; Adobe Photoshop &bull; Adobe XD &bull; Figma &bull;
        Canva &bull; Ibispaint X <br class="hidden lg:block" />
        <span class="lg:hidden"> &bull; </span>and more
      </p>

      <!-- Pagination & Arrow Down -->
      <div
      @click="scrollToSection('projects')"
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }"
        class="flex flex-col items-center gap-6 pb-4"
      >
        <div class="flex gap-2.5">
          <div
            class="w-4 lg:w-5 h-[3px] rounded-full border border-gray-500 bg-transparent"
          ></div>
          <div
            class="w-4 lg:w-5 h-[3px] rounded-full border border-gray-500 bg-transparent"
          ></div>
          <div
            class="w-4 lg:w-5 h-[3px] rounded-full border border-gray-500 bg-gray-500"
          ></div>
          <div
            class="w-4 lg:w-5 h-[3px] rounded-full border border-gray-500 bg-transparent"
          ></div>
          <div
            class="w-4 lg:w-5 h-[3px] rounded-full border border-gray-500 bg-transparent"
          ></div>
        </div>
        <i
          class="bi bi-caret-down-fill text-white text-3xl opacity-80 hover:opacity-100 hover:translate-y-1 transition-all cursor-pointer"
        ></i>
      </div>
    </div>
  </section>
</template>
