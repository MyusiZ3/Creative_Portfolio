<template>
  <Teleport to="body">
    <Transition name="cta-toast">
      <div 
        v-if="isVisible && !isClosed" 
        class="fixed top-24 right-4 sm:right-6 lg:right-10 z-[9990] w-[310px] sm:w-[340px] p-5 flex flex-col gap-3 backdrop-blur-md transition-all duration-300"
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
              :class="currentTheme === 'pixel' ? 'bg-[#00ff66] rounded-none shadow-[0_0_6px_#00ff66]' : 'rounded-full bg-violet-500'"
            ></span>
            <span 
              class="font-mono text-[10px] tracking-widest uppercase font-medium"
              :class="currentTheme === 'pixel' ? 'text-[#00ff66]' : 'text-zinc-400'"
            >
              {{ currentTheme === 'pixel' ? '⚡ QUEST_INVITE' : '✦ LET\'S CONNECT' }}
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
            {{ t('cta_title') }}
          </h4>
          <p 
            class="text-xs leading-relaxed"
            :class="currentTheme === 'pixel' ? 'text-zinc-300 font-mono' : 'text-zinc-400 font-[\'Roboto\']'"
          >
            {{ t('cta_desc') }}
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
            {{ t('cta_contact') }} <i class="bi bi-arrow-right text-xs"></i>
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
            {{ t('cta_dismiss') }}
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { useTheme } from '@/composables/useTheme';

const { t } = useLanguage();
const { currentTheme } = useTheme();
const isVisible = ref(false);
const isClosed = ref(false);

const closePopup = () => {
  isClosed.value = true;
};

const goToContact = () => {
  isClosed.value = true;
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  // Show popup after 10 seconds of staying on the page
  setTimeout(() => {
    isVisible.value = true;
  }, 10000); 
});
</script>

<style scoped>
.cta-toast-enter-active,
.cta-toast-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-toast-enter-from,
.cta-toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.cta-toast-enter-to,
.cta-toast-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
