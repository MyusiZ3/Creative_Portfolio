<template>
  <section id="experience" class="-mb-4">
    <div class="bg-white p-8 md:p-14 lg:p-20 xl:p-40 relative overflow-hidden shadow-2xl">
      <!-- Accents -->
      <img
        src="/images/accent_2.png"
        alt="Accent Shape"
        class="absolute top-0 left-0 w-24 md:w-32 lg:w-48 xl:w-150 pointer-events-none z-0"
      />
      <img
        src="/images/accent_4.png"
        alt="Accent Shape"
        class="absolute top-0 right-0 w-32 md:w-48 lg:w-64 xl:w-260 pointer-events-none  z-0 "
      />
      <img
        src="/images/accent_2.png"
        alt="Accent Shape"
        class="absolute bottom-0 right-0 w-24 md:w-32 lg:w-48 xl:w-150 pointer-events-none transform rotate-180 z-0"
      />
      <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        class="absolute bottom-[0.9rem] lg:bottom-0 py-[-0.1rem] left-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform rotate-180 z-0"
      />

      <!-- Content -->

      <div class="relative z-10 w-full md:w-11/12 lg:w-11/12 mx-auto mb-20">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
          class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#171717] mb-4 mt-20"
        >
          {{ t('exp_title') }}
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
          class="text-[14px] lg:text-[15px] text-gray-600 font-['Roboto'] italic mb-12 flex items-start gap-2 max-w-4xl"
        >
          <span class="text-violet-500 text-xl font-normal leading-none mt-1"
            >✦</span
          >
          <span
            >{{ t('exp_desc') }}</span
          >
        </p>

        <!-- Work & Organizational Experience -->
        <h3
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
          class="text-2xl lg:text-[24px] font-bold font-['Poppins'] text-violet-500 mb-8"
        >
          {{ t('exp_work_org') }}
        </h3>

        <!-- Continuous Timeline Row 1 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left hidden md:block"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Item 1 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                AUG 2025 - PRESENT
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 200 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_w1_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_w1_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_w1_desc') }}
                </p>
              </div>
            </div>
            <!-- Item 2 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - JUL 2025
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 350 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_w2_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_w2_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_w2_desc') }}
                </p>
              </div>
            </div>
            <!-- Item 3 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - DEC 2023
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 500 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_w3_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_w3_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_w3_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Continuous Timeline Row 2 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left hidden md:block"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Item 4 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                DEC 2019 - JUNE 2022
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 200 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_w4_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_w4_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_w4_desc') }}
                </p>
              </div>
            </div>
            <!-- Item 5 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2021 - JUNE 2021
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 350 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_w5_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_w5_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_w5_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Experience -->
        <h3
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
          class="text-2xl lg:text-[24px] font-bold font-['Poppins'] text-violet-500 mb-8 mt-4"
        >
          {{ t('exp_proj_title') }}
        </h3>

        <!-- Continuous Timeline Project Row 1 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left hidden md:block"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Project 1 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 200 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p1_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p1_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p1_desc') }}
                </p>
              </div>
            </div>
            <!-- Project 2 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 350 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p2_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p2_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p2_desc') }}
                </p>
              </div>
            </div>
            <!-- Project 3 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 500 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p3_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p3_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p3_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Continuous Timeline Project Row 2 -->
        <div class="relative px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left hidden md:block"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Project 4 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2024 - FEB 2025
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 200 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p4_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p4_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p4_desc') }}
                </p>
              </div>
            </div>
            <!-- Project 5 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2024 - JUNE 2024
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 350 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p5_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p5_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p5_desc') }}
                </p>
              </div>
            </div>
            <!-- Project 6 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - FEB 2024
              </p>
              <div class="h-6 flex items-center mb-4 relative timeline-dot-wrapper z-10">
                <div 
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15, delay: 500 } }"
                  class="w-3 h-3 bg-[#171717] rounded-full ml-[20%] relative z-20"
                ></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  {{ t('exp_p6_title') }}
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  {{ t('exp_p6_sub') }}
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  {{ t('exp_p6_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
</script>

<style scoped>
.timeline-dot-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #D1D5DB; /* bg-gray-300 */
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}

@media (min-width: 768px) {
  .timeline-dot-wrapper::before {
    display: none;
  }
}
</style>
