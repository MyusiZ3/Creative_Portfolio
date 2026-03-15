<template>
  <Teleport to="body">
    <Transition name="notification-slide">
      <div 
        v-if="isVisible" 
        class="fixed top-24 right-4 lg:right-10 z-[10000] w-[300px] lg:w-[340px] bg-[#1a1a24]/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-[0_10px_40px_rgba(245,158,11,0.25)] p-5 flex gap-4 items-start"
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

        <!-- Close button (X) -->
        <button 
          @click="closePopup"
          class="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <i class="bi bi-x text-sm"></i>
        </button>
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
