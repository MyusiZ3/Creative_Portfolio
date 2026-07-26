<template>
  <Teleport to="body">
    <!-- Backdrop overlay for mobile to dismiss on click outside -->
    <Transition name="fade">
      <div 
        v-if="isVisible" 
        class="fixed inset-0 z-[9989] bg-black/40 backdrop-blur-xs lg:hidden" 
        @click="closePopup"
      ></div>
    </Transition>

    <Transition name="notification-toast">
      <div v-if="isVisible" class="fixed top-24 right-4 sm:right-6 lg:right-10 z-[9990] w-[310px] sm:w-[350px] flex flex-col gap-3 max-w-[calc(100vw-2rem)]">
        <!-- Main Card: Under Development -->
        <div 
          class="w-full bg-[#171717] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col gap-3 relative backdrop-blur-md"
        >
          <!-- Header Tag & Close Button -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              <span class="font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-medium">✦ NOTICE</span>
            </div>
            <button 
              @click="closePopup"
              class="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              <i class="bi bi-x-lg text-xs"></i>
            </button>
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-1">
            <h4 class="text-white font-['Poppins'] font-semibold text-sm sm:text-base leading-snug">
              {{ lang === 'EN' ? 'Under Development' : 'Dalam Pengembangan' }}
            </h4>
            <p class="text-zinc-400 font-['Roboto'] text-xs leading-relaxed">
              {{ lang === 'EN' ? 'This website is currently under development. Some features may not be fully functional yet.' : 'Website ini sedang dalam tahap pengembangan. Beberapa fitur mungkin belum berfungsi sepenuhnya.' }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 pt-1">
            <button
              @click="goToContact"
              class="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-violet-600/20 active:scale-95"
            >
              {{ lang === 'EN' ? 'Get In Touch' : 'Hubungi Saya' }} <i class="bi bi-arrow-right text-xs"></i>
            </button>
            <button
              @click="closePopup"
              class="px-3 py-2.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors hover:bg-white/5 rounded-xl"
            >
              {{ lang === 'EN' ? 'Understood' : 'Mengerti' }}
            </button>
          </div>
        </div>

        <!-- Secondary Card: Work Status -->
        <div 
          class="w-full bg-[#171717] border border-white/10 rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-3 relative backdrop-blur-md"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <i class="bi bi-briefcase-fill text-sm"></i>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span class="text-white font-['Poppins'] font-semibold text-xs">
                  {{ lang === 'EN' ? 'Open to Work' : 'Tersedia untuk Kerja' }}
                </span>
              </div>
              <span class="text-zinc-400 font-['Roboto'] text-[11px]">
                Freelance • Intern • Part-time
              </span>
            </div>
          </div>
          <span class="text-[9px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20 shrink-0">
            AVAILABLE
          </span>
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
.notification-toast-enter-active,
.notification-toast-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.notification-toast-enter-from,
.notification-toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.notification-toast-enter-to,
.notification-toast-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
