<template>
  <Teleport to="body">
    <Transition name="cta-toast">
      <div 
        v-if="isVisible && !isClosed" 
        class="fixed top-24 right-4 sm:right-6 lg:right-10 z-[9990] w-[310px] sm:w-[340px] bg-[#171717] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col gap-3 backdrop-blur-md"
      >
        <!-- Header Tag & Close Button -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-violet-500"></span>
            <span class="font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-medium">✦ INTERESTED?</span>
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
          <h4 class="text-white font-['Poppins'] font-semibold text-sm sm:text-base leading-snug">{{ t('cta_title') }}</h4>
          <p class="text-zinc-400 font-['Roboto'] text-xs leading-relaxed">
            {{ t('cta_desc') }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 pt-1">
          <button
            @click="goToContact"
            class="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-violet-600/20 active:scale-95"
          >
            {{ t('cta_contact') }} <i class="bi bi-arrow-right text-xs"></i>
          </button>
          <button
            @click="closePopup"
            class="px-3 py-2.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors hover:bg-white/5 rounded-xl"
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

const { t } = useLanguage();
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
