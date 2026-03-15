<template>
  <div class="bg-[#171717]">
    <section class="pt-12 xl:py-16 px-6 xl:px-40 overflow-hidden">
      <div class="container mx-auto space-y-8 xl:space-y-10 relative">
        <div class="relative z-20">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
            class="text-6xl sm:text-7xl xl:text-[110px] font-bold text-white mb-4 font-['Poppins']"
          >
            Multimedia <br class="block xl:hidden" />
            <span
              class="text-transparent"
              style="-webkit-text-stroke: 2px #ffffff"
              >{{ t('hero_designer') }}</span
            >
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: 'easeOut' } }"
            class="text-white text-base xl:text-[16px] w-full xl:w-140 xl:ml-2 text-justify font-['Roboto']"
          >
            {{ t('hero_desc') }}
          </p>
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400, ease: 'easeOut' } }"
            class="mt-6 xl:mt-8"
          >
            <button
              @click="scrollToContact"
              class="bg-violet-500 text-white rounded-full hover:bg-violet-600 transition text-lg xl:text-2xl font-medium px-6 py-3 xl:px-8 xl:py-4 pointer-events-auto"
            >
              {{ t('hero_contact') }} <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Image Composition -->
    <div class="relative w-full mt-1 lg:-mt-60 z-10 pointer-events-none">
      <div class="flex justify-end">
        <div class="relative w-[85%] lg:w-[78%] -mt-16 lg:-mt-28">
          <!-- Main Hero Photo -->
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9, y: 40 }"
            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 900, delay: 200, ease: 'easeOut' } }"
            src="/images/hero/hero_main.png"
            alt="Hero Main"
            class="w-full h-auto relative z-10"
          />
          

          <!-- VISUALZZ* -->
          <img
            v-motion
            :initial="{ opacity: 0, x: 60, rotate: 10 }"
            :visible="{ opacity: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 14, delay: 500 } }"
            src="/images/hero/visual.png"
            alt="Visualzz"
            class="absolute -top-[0%] right-[-5%] lg:right-[8%] w-[35%] lg:w-[30%] lg:-top-[-5%] z-20 pointer-events-none"
          />

          <!-- UI/UX + Branding & Identity Badge -->
          <img
            v-motion
            :initial="{ opacity: 0, x: -50, rotate: -15 }"
            :visible="{ opacity: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 130, damping: 14, delay: 600 } }"
            src="/images/hero/branding.png"
            alt="Branding & Identity"
            class="absolute top-[50%] left-[-8%] lg:left-[-14%] w-[30%] lg:w-[25%] z-20 pointer-events-none"
          />

          <!-- User Experience Design -->
          <img
            v-motion
            :initial="{ opacity: 0, y: 40, scale: 0.8 }"
            :visible="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 140, damping: 16, delay: 700 } }"
            src="/images/hero/ux_design.png"
            alt="User Experience Design"
            class="absolute bottom-[5%] lg:bottom-[0%] lg:left-[1%] w-[40%] lg:w-[31%] z-20 pointer-events-none"
          />

          <!-- Hire Me Badge -->
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0, rotate: -90 }"
            :visible="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 12, delay: 800 } }"
            src="/images/hero/hire_me.png"
            alt="Hire Me"
            class="absolute bottom-[10%] lg:bottom-[4%] right-[2%] lg:right-[10%] w-[13%] lg:w-[18%] z-20 pointer-events-none"
          />
        </div>
      </div>
    </div>

    <section id="about" class="py-10 lg:py-40 px-6 lg:px-23">
      <div
        class="container mx-auto grid grid-cols-1 ml-0 lg:ml-18 lg:grid-cols-5 gap-12 lg:gap-32 items-start"
      >
        <div class="space-y-12 lg:col-span-2">
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut' } }"
          >
            <h2
              class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t('about_title') }}
            </h2>
            <h3
              class="text-2xl lg:text-[28px] font-medium font-['Poppins'] text-[#FBDF3A] mb-4 lg:mb-6"
            >
              <Typewriter
                :key="lang"
                :strings="[t('typewriter_1'), t('typewriter_2')]"
                :autoStart="true"
                :loop="true"
                :delay="75"
                :deleteSpeed="50"
                cursorClassName="Typewriter__cursor text-violet-500"
              />
            </h3>
            <div
              class="text-white space-y-4 text-sm lg:text-[16px] text-justify leading-relaxed font-['Roboto'] font-regular"
            >
              <p>
                {{ t('about_intro_1') }}
              </p>
              <p>
                {{ t('about_intro_2') }}
              </p>
              <p>
                {{ t('about_intro_3') }}
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t('education_title') }}
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Telkom University
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-regular"
                  >
                    {{ t('edu_1_desc') }}
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    2022 - Present (GPA : 3.81 / 4.00)
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    SMKN 1 Belitang III
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-regular"
                  >
                    {{ t('edu_2_desc') }}
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    2019 - 2022
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 300, ease: 'easeOut' } }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t('skills_title') }}
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t('hard_skills') }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    {{ t('hard_skills_desc') }}
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t('soft_skills') }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    {{ t('soft_skills_desc') }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-1 lg:col-span-3 space-y-12 lg:space-y-16 lg:pl-10">
          <div class="flex flex-row gap-8 lg:gap-20">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/ceklis.png"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                02+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                {{ t('stat_years') }}
              </p>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200, ease: 'easeOut' } }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/ceklis.png"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                15+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                {{ t('stat_projects') }}
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
            class="relative mt-10 lg:mt-22 pb-10 lg:pb-0"
          >
            <img
              src="/images/about_me.png"
              alt="About Me Graphic"
              class="w-full lg:w-xl"
            />
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 100, ease: 'easeOut' } }"
            class="relative mt-10 lg:mt-25 pb-10 lg:pb-0"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t('lang_title') }}
            </h3>
            <ul class="space-y-4 lg:space-y-6 relative z-20">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-0"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Indonesian
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    {{ t('lang_native') }}
                  </p>
                  <p
                    class="text-white text-sm italic lg:text-[16px] font-['Roboto'] font-light"
                  >
                    ✦ Certification : n/a
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    English
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    Intermediate (CEFR B1)
                  </p>
                  <p
                    class="text-white text-sm italic lg:text-[16px] font-['Roboto'] font-light"
                  >
                    ✦ Certification : EPRT Score: 483 – Telkom University
                  </p>
                </div>
                <img
                  src="/images/accent_1.png"
                  alt="Accent"
                  class="w-24 lg:w-40 absolute lg:relative bottom-0 right-0 lg:float-end opacity-40 lg:opacity-100 z-10 pointer-events-none"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Typewriter from 'vue-typewriter-effect'
import { useLanguage } from "@/composables/useLanguage"

const { t, lang } = useLanguage()

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero-hire-spin {
  animation: slowSpin 12s linear infinite;
}

@keyframes slowSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
