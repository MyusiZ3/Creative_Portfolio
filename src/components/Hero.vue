<template>
  <div class="bg-[#171717]">
    <section class="pt-12 xl:py-16 px-6 xl:px-40 overflow-hidden">
      <div class="container mx-auto space-y-8 xl:space-y-10 relative">
        <div class="relative z-20">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, ease: 'easeOut' },
            }"
            class="text-[29px] min-[360px]:text-[33px] min-[400px]:text-[37px] xs:text-[40px] sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] 2xl:text-[125px] font-bold text-white mb-4 font-['Poppins'] leading-none tracking-tight whitespace-nowrap"
          >
            <span class="relative inline-block mr-1.5 sm:mr-3 lg:mr-4 xl:mr-5">
              <span
                class="absolute inset-0 text-transparent pointer-events-none select-none translate-x-[2px] translate-y-[2px] sm:translate-x-[4px] sm:translate-y-[4px] xl:translate-x-[7px] xl:translate-y-[7px]"
                style="-webkit-text-stroke: 2px #a754ff"
                aria-hidden="true"
                >Creative</span
              >
              <span class="relative text-white">Creative</span>
            </span>
            <span
              class="text-transparent inline-block"
              style="-webkit-text-stroke: 1.8px #ffffff"
              >{{ t("hero_designer") }}</span
            >
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 700, delay: 200, ease: 'easeOut' },
            }"
            class="text-white text-xs sm:text-base xl:text-[16px] max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-140 xl:ml-2 text-left sm:text-justify font-['Roboto'] leading-relaxed"
          >
            <span class="hidden sm:inline">{{ t("hero_desc") }}</span>
            <span class="sm:hidden">
              {{ isShowMore ? t("hero_desc") : (t("hero_desc").slice(0, 85) + "...") }}
            </span>
            <button
              @click="isShowMore = !isShowMore"
              class="sm:hidden inline-flex items-center gap-1 ml-1.5 text-xs font-semibold text-violet-400 underline hover:text-violet-300 transition pointer-events-auto"
            >
              <span>{{ isShowMore ? t("show_less") : t("show_more") }}</span>
              <i :class="isShowMore ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="text-[10px]"></i>
            </button>
          </p>
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400, ease: 'easeOut' },
            }"
            class="mt-6 xl:mt-8"
          >
            <button
              @click="scrollToContact"
              class="bg-violet-500 text-white rounded-full hover:bg-violet-600 transition text-lg xl:text-2xl font-medium px-6 py-3 xl:px-8 xl:py-4 pointer-events-auto"
            >
              {{ t("hero_contact") }} <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Image Composition -->
    <div
      class="relative w-full mt-1 lg:-mt-20 xl:-mt-60 z-30 pointer-events-none mb-8 sm:mb-0"
    >
      <div class="flex justify-end">
        <div class="relative w-[95%] lg:w-[78%] -mt-5 lg:-mt-20 xl:-mt-28">
          <!-- Main Hero Photo -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9, y: 40 }"
            :visible="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 900, delay: 200, ease: 'easeOut' },
            }"
            class="relative z-10 w-full"
          >
            <img
              src="/images/hero/hero_me.webp"
              alt="Hero Main"
              class="w-full h-auto block"
              fetchpriority="high"
              loading="eager"
              decoding="sync"
              :style="{
                transform: `translate(${heroImgConfig.x}px, ${heroImgConfig.y}px) scale(${heroImgConfig.scale})`,
                transformOrigin: 'center bottom',
              }"
            />
          </div>

          <!-- VISUALZZ* -->
          <img
            v-motion
            :initial="{ opacity: 0, x: 60, rotate: 10 }"
            :visible="{
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 120,
                damping: 14,
                delay: 500,
              },
            }"
            src="/images/hero/visual.webp"
            alt="Visualzz"
            class="absolute -top-[10%] lg:-top-[-2%] right-[2%] lg:right-[8%] w-[38%] lg:w-[30%] z-20 pointer-events-none"
          />

          <!-- UI/UX + Branding & Identity Badge -->
          <img
            v-motion
            :initial="{ opacity: 0, x: -50, rotate: -15 }"
            :visible="{
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 130,
                damping: 14,
                delay: 600,
              },
            }"
            src="/images/hero/branding.webp"
            alt="Branding & Identity"
            class="absolute top-[50%] left-[-4%] lg:left-[-14%] w-[36%] lg:w-[30%] mt-[-10%] lg:mt-[1.5%] z-20 pointer-events-none"
          />

          <!-- User Experience Design -->
          <img
            v-motion
            :initial="{ opacity: 0, y: 40, scale: 0.8 }"
            :visible="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 140,
                damping: 16,
                delay: 700,
              },
            }"
            src="/images/hero/ux_design.webp"
            alt="User Experience Design"
            class="absolute bottom-[-10%] sm:bottom-[-14%] lg:bottom-[-6%] lg:left-[3%] w-[38%] lg:w-[28%] z-20 pointer-events-none"
          />

          <!-- Hire Me Badge -->
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0, rotate: -90 }"
            :visible="{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 12,
                delay: 800,
              },
            }"
            src="/images/hero/hire_me.webp"
            alt="Hire Me"
            class="absolute bottom-[1.5%] lg:bottom-[4%] right-[10%] lg:right-[10%] w-[20%] lg:w-[18%] z-20 pointer-events-none"
          />
        </div>
      </div>
    </div>

    <section
      id="about"
      class="pt-24 pb-10 md:py-16 lg:py-20 xl:py-40 px-6 md:px-16 lg:px-20 xl:px-23"
    >
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 ml-0 lg:ml-0 xl:ml-18 gap-12 lg:gap-16 xl:gap-32 items-start"
      >
        <div class="space-y-12 lg:col-span-2">
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, ease: 'easeOut' },
            }"
          >
            <h2
              class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t("about_title") }}
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
                {{ t("about_intro_1") }}
              </p>
              <p>
                {{ t("about_intro_2") }}
              </p>
              <p>
                {{ t("about_intro_3") }}
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, delay: 150, ease: 'easeOut' },
            }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t("education_title") }}
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 200, ease: 'easeOut' },
                }"
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
                    {{ t("edu_1_desc") }}
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    {{ t("edu_1_detail") }}
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 350, ease: 'easeOut' },
                }"
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
                    {{ t("edu_2_desc") }}
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    {{ t("edu_2_detail") }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, delay: 300, ease: 'easeOut' },
            }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t("skills_title") }}
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 200, ease: 'easeOut' },
                }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t("skills_design_title") }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    {{ t("skills_design_desc") }}
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 300, ease: 'easeOut' },
                }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t("skills_tech_title") }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    {{ t("skills_tech_desc") }}
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 400, ease: 'easeOut' },
                }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t("skills_process_title") }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    {{ t("skills_process_desc") }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-span-1 lg:col-span-3 space-y-12 lg:space-y-16 lg:pl-0 xl:pl-10"
        >
          <div class="flex flex-row gap-8 lg:gap-10 xl:gap-20">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: { duration: 600, ease: 'easeOut' },
              }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/accents/ceklis.webp"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                03+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                {{ t("stat_years") }}
              </p>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: { duration: 600, delay: 200, ease: 'easeOut' },
              }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/accents/ceklis.webp"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                10+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                {{ t("stat_projects") }}
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 100, ease: 'easeOut' },
            }"
            class="relative mt-10 lg:mt-22 pb-10 lg:pb-0"
          >
            <img
              src="/images/hero/about_me.webp"
              alt="About Me Graphic"
              class="w-full lg:w-xl"
            />
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 700, delay: 100, ease: 'easeOut' },
            }"
            class="relative mt-10 lg:mt-25 pb-10 lg:pb-0"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              {{ t("lang_title") }}
            </h3>
            <ul class="space-y-4 lg:space-y-6 relative z-20">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 200, ease: 'easeOut' },
                }"
                class="flex gap-4"
              >
                <span class="text-white mt-0"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t("lang_id_title") }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    {{ t("lang_id_desc") }}
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 500, delay: 350, ease: 'easeOut' },
                }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    {{ t("lang_en_title") }}
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    {{ t("lang_en_level") }}
                  </p>
                  <p
                    class="text-white text-sm italic lg:text-[16px] font-['Roboto'] font-light"
                  >
                    ✦ {{ t("lang_en_cert") }}
                  </p>
                </div>
                <img
                  src="/images/accents/accent_1.webp"
                  alt="Accent"
                  class="w-24 lg:w-40 absolute lg:relative bottom-[-4rem] right-0 lg:bottom-[0rem] lg:float-end opacity-100 lg:opacity-100 z-10 pointer-events-none"
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
import { ref, reactive } from "vue";
import Typewriter from "vue-typewriter-effect";
import { useLanguage } from "@/composables/useLanguage";

const { t, lang } = useLanguage();
const isShowMore = ref(false);

// =========================================================================
// ⚙️ PENGATURAN MANUAL POSISI & UKURAN GAMBAR HERO (hero_me.webp)
// Silakan ubah nilai di bawah ini untuk mengatur posisi & ukuran gambar:
// =========================================================================
const heroImgConfig = reactive({
  scale: 1, // 🔍 Size / Ukuran: 100%
  x: 26, // ⬅️➡️ Kiri (-px) / Kanan (+px): 26px
  y: 14, // ⬆️⬇️ Atas (-px) / Bawah (+px): 14px
});

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.hero-hire-spin {
  animation: slowSpin 12s linear infinite;
}

@keyframes slowSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
