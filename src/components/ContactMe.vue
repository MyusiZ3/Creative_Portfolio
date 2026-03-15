<template>
  <section id="contact" class="bg-[#141414] py-20 px-6 lg:px-16 xl:px-40 relative overflow-hidden">
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
      <div class="w-full mt-16 relative">
        <!-- Floating Aura Background -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
          <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-600/30 blur-[100px] animate-blob"></div>
          <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-[#FBDF3A]/10 blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <!-- Animated Border Line -->
        <div class="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">
          <div class="absolute inset-0 bg-linear-to-r from-transparent via-violet-500/50 to-transparent animate-shimmer"></div>
        </div>

        <!-- Simplified Infinite Marquee -->
        <div class="py-10 overflow-hidden whitespace-nowrap opacity-10 select-none cursor-default relative marquee-section">
          <div class="inline-block animate-marquee-slow font-['Poppins'] font-bold text-3xl lg:text-5xl uppercase pr-4 text-white hover:text-violet-500 transition-colors duration-500">
            CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST • CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST •&nbsp;
          </div>
          <div class="inline-block animate-marquee-slow font-['Poppins'] font-bold text-3xl lg:text-5xl uppercase pr-4 text-white hover:text-violet-500 transition-colors duration-500">
            CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST • CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST •&nbsp;
          </div>
        </div>

        <div class="pt-8 text-center relative z-10">
          <p 
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 200 } }"
            class="text-gray-300 font-['Roboto'] text-sm flex items-center justify-center gap-2 group cursor-default"
          >
            <span 
              @click="spawnHeartParticles"
              class="inline-block animate-bounce-slow text-violet-500 cursor-pointer active:scale-125 transition-transform"
              ref="heartIconRef"
            >
              <i class="bi bi-heart-fill"></i>
            </span>
            &copy; 2025 Muhamad Sidik | 
            <span class="hover:text-violet-400 transition-colors duration-300 cursor-help" :title="lang === 'EN' ? 'Click the heart for a surprise!' : 'Klik hati untuk kejutan!'">{{ t('contact_footer') }}</span>
          </p>
        </div>
      </div>
    </div>
    
    <!-- Heart Particles Container -->
    <div v-for="heart in heartParticles" :key="heart.id" 
      class="fixed pointer-events-none z-9999 text-violet-500"
      :style="{
        left: heart.x + 'px',
        top: heart.y + 'px',
        opacity: heart.opacity,
        transform: `translate(-50%, -50%) scale(${heart.scale}) rotate(${heart.rotate}deg)`,
        transition: 'all 0.8s ease-out'
      }"
    >
      <i class="bi bi-heart-fill text-lg"></i>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

// Heart Particles Logic
const heartIconRef = ref(null);
const heartParticles = ref([]);
let heartPid = 0;

const spawnHeartParticles = () => {
  if (!heartIconRef.value) return;
  const rect = heartIconRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const count = 12;
  const newParticles = [];

  for (let i = 0; i < count; i++) {
    const id = heartPid++;
    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5);
    const velocity = 80 + Math.random() * 100;
    
    const p = {
      id,
      x: centerX,
      y: centerY,
      opacity: 1,
      scale: 0.5 + Math.random() * 1.5,
      rotate: Math.random() * 360,
    };
    newParticles.push(p);
    heartParticles.value.push(p);

    setTimeout(() => {
      p.x += Math.cos(angle) * velocity;
      p.y += Math.sin(angle) * velocity - 40;
      p.opacity = 0;
      p.scale = 0;
      p.rotate += 180;
    }, 50);
  }

  setTimeout(() => {
    heartParticles.value = heartParticles.value.filter(p => !newParticles.includes(p));
  }, 1000);
};
</script>

<style scoped>
.marquee-section {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee-wrapper {
  display: inline-block;
  white-space: nowrap;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes marquee-slow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-shimmer {
  animation: shimmer 3s infinite linear;
}

.animate-marquee-slow {
  animation: marquee-slow 30s linear infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
