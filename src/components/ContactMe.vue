<template>
  <section id="contact" class="bg-[#141414] py-20 px-6 lg:px-40 relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <!-- Left Side: Contact Info -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="w-full lg:w-[40%] space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 class="text-4xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight">
            <span class="text-[#A754FF]">{{ t('contact_title_1') }}</span> {{ t('contact_title_2') }}<br class="hidden lg:block" />{{ t('contact_title_3') }}
          </h2>

          <div class="space-y-5 w-full">
            <!-- Phone -->
            <div>
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_phone') }}</p>
              <a href="https://wa.me/6282282421322" target="_blank" class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300">
                (+62) 822 8242 1322
              </a>
            </div>

            <!-- Email -->
            <div>
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_email') }}</p>
              <a href="mailto:muhamadsidik.imy@gmail.com" class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300">
                muhamadsidik.imy@gmail.com
              </a>
            </div>

            <!-- Address -->
            <div>
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_addr') }}</p>
              <p class="text-white text-lg font-bold font-['Roboto']">Bandung, Indonesia</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="space-y-3 flex flex-col items-center lg:items-start">
            <p class="text-gray-400 text-sm">{{ t('contact_socmed') }}</p>
            <div class="flex gap-3">
              <a href="https://github.com/MyusiZ3" target="_blank" class="w-8 h-8 rounded-full bg-[#A754FF] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-github text-sm"></i>
              </a>
              <a href="#" target="_blank" class="w-8 h-8 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-instagram text-sm"></i>
              </a>
              <a href="#" target="_blank" class="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-linkedin text-sm"></i>
              </a>
            </div>
          </div>

          <!-- Download Button -->
          <div class="pt-2">
            <button class="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-400 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 group">
              {{ t('contact_btn') }}
              <i class="bi bi-chevron-right text-xs transition-transform group-hover:translate-x-1"></i>
            </button>
          </div>

          <!-- Logo & Name -->
          <div class="pt-4 flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" class="w-10 h-10 object-contain filter brightness-200" />
            <div class="text-white font-bold leading-tight text-sm text-left">
              <p>Muhamad</p>
              <p>Sidik</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
          class="w-full lg:w-[60%] flex justify-center lg:justify-end relative order-first lg:order-last"
        >
          <img 
            src="/images/contactme.png" 
            alt="Contact Image" 
            class="w-full max-w-[400px] lg:max-w-none lg:w-[150%] h-auto object-contain transform translate-x-0 lg:translate-x-38 translate-y-0 lg:-translate-y-24"
          />
        </div>
      </div>
      

      <!-- Footer Info -->
      <div class="w-full mt-8 pt-8 border-t border-white/10 text-center">
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-gray-300 font-['Roboto'] text-sm flex items-center justify-center gap-2"
        >
          &copy; 2025 Muhamad Sidik | {{ t('contact_footer') }}
        </p>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
</script>

<style scoped>
/* Specific animations or styles if needed */
</style>
