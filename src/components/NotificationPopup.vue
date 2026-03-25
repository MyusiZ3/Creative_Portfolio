<template>
  <Teleport to="body">
    <Transition name="notification-slide">
      <div v-if="isVisible" class="fixed top-24 right-4 lg:right-10 z-10000 flex flex-col gap-4">
        <!-- Main: Under Development -->
        <div 
          class="w-[300px] lg:w-[340px] bg-[#1a1a24]/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-[0_10px_40px_rgba(245,158,11,0.25)] p-5 flex gap-4 items-start relative overflow-hidden"
        >
          <!-- Icon -->
          <div class="relative shrink-0 w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mt-1">
            <i class="bi bi-tools text-xl animate-pulse"></i>
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border border-[#1a1a24]"></span>
            </span>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h4 class="text-white font-['Poppins'] font-bold text-sm lg:text-base mb-1">
              {{ lang === 'EN' ? 'Under Development' : 'Dalam Pengembangan' }}
            </h4>
            <p class="text-gray-300 font-['Roboto'] text-xs lg:text-sm leading-relaxed mb-4">
              {{ lang === 'EN' ? 'This website is currently under development. Some features may not be fully functional yet.' : 'Website ini sedang dalam tahap pengembangan. Beberapa fitur mungkin belum berfungsi sepenuhnya.' }}
            </p>
            <div class="flex flex-col gap-2">
              <button
                @click="goToContact"
                class="w-full inline-flex items-center justify-center gap-2 bg-violet-500 text-white text-[11px] lg:text-xs font-bold px-4 py-2 rounded-lg hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/30"
              >
                {{ lang === 'EN' ? 'Get In Touch' : 'Hubungi Saya' }} <i class="bi bi-send-fill text-[10px]"></i>
              </button>
              <button
                @click="closePopup"
                class="w-full inline-flex items-center justify-center gap-2 bg-white/5 text-gray-400 text-[11px] lg:text-xs font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
              >
                {{ lang === 'EN' ? 'Understood' : 'Mengerti' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Secondary: Work Status -->
        <div 
          class="w-[300px] lg:w-[340px] bg-[#1a1a24]/95 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl p-4 flex gap-4 items-start relative group hover:border-green-500/60 transition-all duration-500"
        >
          <!-- Status Icon -->
          <div class="relative shrink-0 w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mt-1">
            <i class="bi bi-briefcase-fill text-lg"></i>
            <span class="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <div class="flex items-center justify-between mb-0.5">
              <h5 class="text-white font-['Poppins'] font-bold text-xs lg:text-sm tracking-wide">
                {{ lang === 'EN' ? 'CURRENT STATUS' : 'STATUS SAAT INI' }}
              </h5>
              <span class="text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 animate-pulse">ACTIVE</span>
            </div>
            <p class="text-gray-100 font-['Roboto'] font-bold text-sm lg:text-base mb-0.5">
              {{ lang === 'EN' ? 'Open to Work (Unemployed)' : 'Tersedia untuk Kerja (Nganggur Jirr)' }}
            </p>
            <p class="text-gray-400 font-['Roboto'] text-[10px] lg:text-[11px]">
               Freelance • Intern • Part-time
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const { lang } = useLanguage();
const isVisible = ref(false);

watch(() => props.show, (newVal) => {
  isVisible.value = newVal;
}, { immediate: true });

const closePopup = () => {
  isVisible.value = false;
  emit('close');
};

const goToContact = () => {
  closePopup();
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.notification-slide-enter-active,
.notification-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.notification-slide-enter-from,
.notification-slide-leave-to {
  opacity: 0;
  transform: translateX(100px) translateY(-20px) scale(0.9);
}

.notification-slide-enter-to,
.notification-slide-leave-from {
  opacity: 1;
  transform: translateX(0) translateY(0) scale(1);
}
</style>
