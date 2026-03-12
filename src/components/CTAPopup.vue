<template>
  <Teleport to="body">
    <Transition name="cta-slide">
      <div 
        v-if="isVisible && !isClosed" 
        class="fixed top-24 right-4 lg:right-10 z-100 w-[300px] lg:w-[340px] bg-[#1a1a24]/95 backdrop-blur-xl border border-violet-500/30 rounded-2xl shadow-[0_10px_40px_rgba(124,58,237,0.25)] p-5 flex gap-4 items-start"
      >
        <!-- Icon / Avatar -->
        <div class="relative shrink-0 w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mt-1">
          <i class="bi bi-emoji-smile-fill text-xl animate-bounce"></i>
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-500 border border-[#1a1a24]"></span>
          </span>
        </div>

        <!-- Content -->
        <div class="flex-1">
          <h4 class="text-white font-['Poppins'] font-bold text-sm lg:text-base mb-1">Are you interested?</h4>
          <p class="text-gray-300 font-['Roboto'] text-xs lg:text-sm leading-relaxed mb-4">
            I'm currently available for work. Let's create something amazing together! ✨
          </p>
          <div class="flex items-center gap-3">
            <button
              @click="goToContact"
              class="inline-flex items-center gap-2 bg-violet-500 text-white text-[11px] lg:text-xs font-bold px-4 py-2 rounded-lg hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/30"
            >
              Contact Me <i class="bi bi-send-fill text-[10px]"></i>
            </button>
            <button
              @click="closePopup"
              class="text-gray-400 text-[11px] lg:text-xs font-medium hover:text-white transition-colors"
            >
              Not now
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
import { ref, onMounted } from 'vue';

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
  // Adjust this timer as needed (e.g. 10000 = 10s)
  setTimeout(() => {
    isVisible.value = true;
  }, 10000); 
});
</script>

<style scoped>
.cta-slide-enter-active,
.cta-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-slide-enter-from,
.cta-slide-leave-to {
  opacity: 0;
  transform: translateX(100px) translateY(-20px) scale(0.9);
}

.cta-slide-enter-to,
.cta-slide-leave-from {
  opacity: 1;
  transform: translateX(0) translateY(0) scale(1);
}
</style>
