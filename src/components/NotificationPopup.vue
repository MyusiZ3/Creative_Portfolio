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
      <div 
        v-if="isVisible" 
        class="fixed top-24 right-4 sm:right-6 lg:right-10 z-[9990] w-[310px] sm:w-[350px] flex flex-col gap-3 max-w-[calc(100vw-2rem)]"
        @mouseenter="resetAutoCloseTimer"
        @mousemove="resetAutoCloseTimer"
        @touchstart="resetAutoCloseTimer"
        @click="resetAutoCloseTimer"
      >
        <!-- Main Card: Under Development -->
        <div 
          class="w-full p-5 flex flex-col gap-3 relative backdrop-blur-md transition-all duration-300"
          :class="
            currentTheme === 'pixel'
              ? 'bg-[#050b07] border-2 border-[#00ff66] rounded-none shadow-[4px_4px_0px_#000]'
              : 'bg-[#171717] border border-white/10 rounded-2xl shadow-2xl'
          "
        >
          <!-- Header Tag & Close Button -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span 
                class="w-2 h-2" 
                :class="currentTheme === 'pixel' ? 'bg-[#00ff66] rounded-none shadow-[0_0_6px_#00ff66]' : 'rounded-full bg-amber-400'"
              ></span>
              <span 
                class="font-mono text-[10px] tracking-widest uppercase font-medium"
                :class="currentTheme === 'pixel' ? 'text-[#00ff66]' : 'text-zinc-400'"
              >
                {{ currentTheme === 'pixel' ? '⚡ NOTICE_SYS' : '✦ NOTICE' }}
              </span>
            </div>
            <button 
              @click="closePopup"
              class="transition-colors p-1"
              :class="currentTheme === 'pixel' ? 'text-[#00ff66] hover:bg-[#00ff66]/20 rounded-none' : 'text-zinc-400 hover:text-white rounded-lg hover:bg-white/5'"
              aria-label="Close"
            >
              <i class="bi bi-x-lg text-xs"></i>
            </button>
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-1">
            <h4 
              class="font-semibold text-sm sm:text-base leading-snug"
              :class="currentTheme === 'pixel' ? 'text-white font-mono' : 'text-white font-[\'Poppins\']'"
            >
              {{ lang === 'EN' ? 'Under Development' : 'Dalam Pengembangan' }}
            </h4>
            <p 
              class="text-xs leading-relaxed"
              :class="currentTheme === 'pixel' ? 'text-zinc-300 font-mono' : 'text-zinc-400 font-[\'Roboto\']'"
            >
              {{ lang === 'EN' ? 'This website is currently under development. Some features may not be fully functional yet.' : 'Website ini sedang dalam tahap pengembangan. Beberapa fitur mungkin belum berfungsi sepenuhnya.' }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 pt-1">
            <button
              @click="goToContact"
              class="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 transition-all active:scale-95"
              :class="
                currentTheme === 'pixel'
                  ? 'bg-[#00ff66] hover:bg-[#33ff88] text-black font-mono font-bold rounded-none border-2 border-black shadow-[2px_2px_0px_#000]'
                  : 'bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-md shadow-violet-600/20'
              "
            >
              {{ lang === 'EN' ? 'Get In Touch' : 'Hubungi Saya' }} <i class="bi bi-arrow-right text-xs"></i>
            </button>
            <button
              @click="closePopup"
              class="px-3 py-2.5 text-xs font-medium transition-colors"
              :class="
                currentTheme === 'pixel'
                  ? 'text-[#00ff66] hover:bg-[#00ff66]/20 font-mono rounded-none border border-[#00ff66]/40'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl'
              "
            >
              {{ lang === 'EN' ? 'Understood' : 'Mengerti' }}
            </button>
          </div>
        </div>

        <!-- Secondary Card: Work Status -->
        <div 
          class="w-full p-4 flex items-center justify-between gap-3 relative backdrop-blur-md transition-all duration-300"
          :class="
            currentTheme === 'pixel'
              ? 'bg-[#050b07] border-2 border-[#00ff66] rounded-none shadow-[4px_4px_0px_#000]'
              : 'bg-[#171717] border border-white/10 rounded-2xl shadow-2xl'
          "
        >
          <div class="flex items-center gap-3">
            <div 
              class="w-8 h-8 flex items-center justify-center shrink-0"
              :class="
                currentTheme === 'pixel'
                  ? 'bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] rounded-none'
                  : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl'
              "
            >
              <i class="bi bi-briefcase-fill text-sm"></i>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span 
                  class="font-semibold text-xs"
                  :class="currentTheme === 'pixel' ? 'text-white font-mono' : 'text-white font-[\'Poppins\']'"
                >
                  {{ lang === 'EN' ? 'Open to Work' : 'Tersedia untuk Kerja' }}
                </span>
              </div>
              <span 
                class="text-[11px]"
                :class="currentTheme === 'pixel' ? 'text-zinc-400 font-mono text-[10px]' : 'text-zinc-400 font-[\'Roboto\']'"
              >
                Freelance • Intern • Part-time
              </span>
            </div>
          </div>
          <span 
            class="text-[9px] font-mono font-semibold px-2 py-1 shrink-0"
            :class="
              currentTheme === 'pixel'
                ? 'text-[#00ff66] bg-[#00ff66]/20 border border-[#00ff66] rounded-none shadow-[1px_1px_0px_#000]'
                : 'text-emerald-400 bg-emerald-500/10 rounded-md border border-emerald-500/20'
            "
          >
            AVAILABLE
          </span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { useTheme } from '@/composables/useTheme';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const { lang } = useLanguage();
const { currentTheme } = useTheme();
const isVisible = ref(false);

const autoCloseTimer = ref(null);
const AUTO_CLOSE_DELAY = 15000; // 15 seconds

const startAutoCloseTimer = () => {
  clearAutoCloseTimer();
  autoCloseTimer.value = setTimeout(() => {
    closePopup();
  }, AUTO_CLOSE_DELAY);
};

const clearAutoCloseTimer = () => {
  if (autoCloseTimer.value) {
    clearTimeout(autoCloseTimer.value);
    autoCloseTimer.value = null;
  }
};

const resetAutoCloseTimer = () => {
  if (isVisible.value) {
    startAutoCloseTimer();
  }
};

watch(() => props.show, (newVal) => {
  isVisible.value = newVal;
  if (newVal) {
    startAutoCloseTimer();
  } else {
    clearAutoCloseTimer();
  }
}, { immediate: true });

onUnmounted(() => {
  clearAutoCloseTimer();
});

const closePopup = () => {
  clearAutoCloseTimer();
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
