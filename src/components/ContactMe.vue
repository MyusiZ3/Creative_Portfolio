<template>
  <section id="contact" class="bg-[#141414] py-20 px-6 md:px-10 lg:px-16 xl:px-40 relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="w-full md:w-[60%] lg:w-[40%] space-y-8 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 class="text-3xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight">
            <span class="text-[#A754FF]">{{ t('contact_title_1') }}</span> {{ t('contact_title_2') }}<br class="hidden lg:block" />{{ t('contact_title_3') }}
          </h2>

          <div class="space-y-5 w-full">
            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_phone') }}</p>
              <div class="flex items-center gap-2 group/item">
                <a href="https://wa.me/6282282421322" target="_blank" class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300">
                  (+62) 822 8242 1322
                </a>
                <button 
                  @click="copyToClipboard('082282421322', 'phone')"
                  class="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 opacity-100 md:opacity-0 group-hover/item:opacity-100 transition-all flex items-center gap-1.5"
                >
                  <i class="bi" :class="copyStatus.phone ? 'bi-check-lg text-green-400' : 'bi-copy'"></i>
                  <span v-if="copyStatus.phone" class="text-[10px] font-bold text-green-400 uppercase tracking-tighter">Copied</span>
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_email') }}</p>
              <div class="flex items-center gap-2 group/item">
                <a href="mailto:muhamadsidik.imy@gmail.com" class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300">
                  muhamadsidik.imy@gmail.com
                </a>
                <button 
                   @click="copyToClipboard('muhamadsidik.imy@gmail.com', 'email')"
                  class="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 opacity-100 md:opacity-0 group-hover/item:opacity-100 transition-all flex items-center gap-1.5"
                >
                  <i class="bi" :class="copyStatus.email ? 'bi-check-lg text-green-400' : 'bi-copy'"></i>
                  <span v-if="copyStatus.email" class="text-[10px] font-bold text-green-400 uppercase tracking-tighter">Copied</span>
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t('contact_addr') }}</p>
              <p class="text-white text-lg font-bold font-['Roboto'] text-center md:text-left">Bandung, Indonesia</p>
            </div>
          </div>

          <div class="space-y-3 flex flex-col items-center lg:items-start">
            <p class="text-gray-400 text-sm">{{ t('contact_socmed') }}</p>
            <div class="flex gap-3">
              <a href="https://github.com/MyusiZ3" target="_blank" class="w-8 h-8 rounded-full bg-[#A754FF] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-github text-sm"></i>
              </a>
              <a href="https://www.instagram.com/imyusi_" target="_blank" class="w-8 h-8 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhamad-sidik-a6757b25b" target="_blank" class="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300">
                <i class="bi bi-linkedin text-sm"></i>
              </a>
            </div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button 
              @click="showCVOptions = !showCVOptions"
              class="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-400 text-sm font-medium transition-all duration-300 group"
              :class="showCVOptions ? 'bg-white text-black border-white' : 'text-white hover:bg-white hover:text-black'"
            >
              {{ t('contact_btn') }}
              <i class="bi bi-chevron-right text-xs transition-transform" :class="showCVOptions ? 'rotate-90' : 'group-hover:translate-x-1'"></i>
            </button>

            <div v-if="showCVOptions" 
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{ opacity: 1, x: 0 }"
              class="flex flex-col sm:flex-row gap-2"
            >
              <a 
                href="/doc/CV_Muhamad Sidik_Graphic Designer_Intern_2025.pdf" 
                download
                @click="trackDownload('designer')"
                class="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                :class="downloading.designer ? 'bg-green-500 text-white animate-pulse' : 'bg-violet-600 text-white hover:bg-violet-700'"
              >
                <i class="bi" :class="downloading.designer ? 'bi-check2-all' : 'bi-palette'"></i>
                {{ downloading.designer ? (lang === 'ID' ? 'Mengunduh...' : 'Downloading...') : 'Designer' }}
              </a>
              <a 
                href="/doc/CV_Muhamad Sidik_IT_Intern.pdf" 
                download
                @click="trackDownload('developer')"
                class="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                :class="downloading.developer ? 'bg-green-500 text-white animate-pulse' : 'bg-blue-600 text-white hover:bg-blue-700'"
              >
                <i class="bi" :class="downloading.developer ? 'bi-check2-all' : 'bi-code-slash'"></i>
                {{ downloading.developer ? (lang === 'ID' ? 'Mengunduh...' : 'Downloading...') : 'Developer' }}
              </a>
            </div>
          </div>

          <div class="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 w-full">
            <div class="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" class="w-10 h-10 object-contain filter brightness-200" />
              <div class="text-white font-bold leading-tight text-sm text-left">
                <p>Muhamad</p>
                <p>Sidik</p>
              </div>
            </div>

            <!-- Enhanced View Counter -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.9, y: 10 }"
              :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600, delay: 400 } }"
              class="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl group hover:border-[#A754FF]/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div class="relative">
                <div class="absolute inset-0 bg-[#A754FF] blur-md opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
                <div class="relative w-8 h-8 rounded-lg bg-[#A754FF]/20 flex items-center justify-center text-[#A754FF] border border-[#A754FF]/30 group-hover:bg-[#A754FF] group-hover:text-white transition-all duration-500 overflow-hidden">
                  <i class="bi bi-eye-fill text-lg animate-eye-blink"></i>
                </div>
              </div>
              <div class="flex flex-col">
                <p class="text-[9px] text-gray-400 uppercase tracking-[2px] font-black leading-none">{{ t('contact_views') }}</p>
                <p class="text-white font-['Poppins'] font-bold text-base leading-none mt-1">{{ viewCount }}</p>
              </div>
            </div>

            <!-- Security Badge -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.9, y: 10 }"
              :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600, delay: 500 } }"
              class="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl group hover:border-green-500/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div class="relative">
                <div class="absolute inset-0 bg-green-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
                <div class="relative w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/30 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                  <i class="bi bi-shield-lock-fill text-lg"></i>
                </div>
              </div>
              <div class="flex flex-col">
                <p class="text-[9px] text-gray-400 uppercase tracking-[2px] font-black leading-none">SECURITY</p>
                <p class="text-white font-['Poppins'] font-bold text-base leading-none mt-1">SSL ENCRYPTED</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
          class="w-full md:w-[40%] lg:w-[60%] flex justify-center md:justify-end relative order-first md:order-last"
        >
          <img 
            src="/images/contactme.png" 
            alt="Contact Image" 
            class="w-full max-w-[280px] md:max-w-none md:w-[130%] lg:w-[130%] h-auto object-contain transform translate-x-0 md:translate-x-12 lg:translate-x-38 translate-y-0 md:-translate-y-10 lg:-translate-y-24"
          />
        </div>
        
      </div>
      

      <div class="w-full mt-16 relative">
        <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
          <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-600/30 blur-[100px] animate-blob"></div>
          <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-[#FBDF3A]/10 blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div class="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">
          <div class="absolute inset-0 bg-linear-to-r from-transparent via-violet-500/50 to-transparent animate-shimmer"></div>
        </div>

        <div class="py-10 overflow-hidden whitespace-nowrap opacity-10 select-none cursor-default relative marquee-section">
          <div class="inline-block animate-marquee-slow font-['Poppins'] font-bold text-3xl lg:text-5xl uppercase pr-4 text-white hover:text-violet-500 transition-colors duration-500">
            CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST • CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST •&nbsp;
          </div>
          <div class="inline-block animate-marquee-slow font-['Poppins'] font-bold text-3xl lg:text-5xl uppercase pr-4 text-white hover:text-violet-500 transition-colors duration-500">
            CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST • CREATIVE DESIGNER • MULTIMEDIA ENGINEER • UI/UX ENTHUSIAST •&nbsp;
          </div>
        </div>

        <div class="pt-8 text-center relative z-30">
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
import { ref, onMounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

const showCVOptions = ref(false);
const viewCount = ref('...');
const copyStatus = ref({ phone: false, email: false });
const downloading = ref({ designer: false, developer: false });

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text);
  copyStatus.value[type] = true;
  setTimeout(() => {
    copyStatus.value[type] = false;
  }, 2000);
};

const trackDownload = (type) => {
  downloading.value[type] = true;
  setTimeout(() => {
    downloading.value[type] = false;
  }, 3000);
};

// Fetch and increment view count
onMounted(async () => {
  try {
    const response = await fetch('https://api.counterapi.dev/v1/muhamadsidik-porto/visits/up');
    
    if (!response.ok) {
        throw new Error('API-nya lagi bermasalah nih');
    }
    
    const data = await response.json();
    viewCount.value = data?.count ? data.count.toLocaleString() : '1';
  } catch (error) {
    console.error('Error fetching view count:', error);
    viewCount.value = '1';
  }
});

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

@keyframes eye-blink {
  0%, 45%, 55%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0); }
}

.animate-eye-blink {
  animation: eye-blink 3s infinite;
}
</style>