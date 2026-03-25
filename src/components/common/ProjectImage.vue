<template>
  <div class="relative w-full h-full overflow-hidden group/img">
    <!-- Main Image -->
    <img
      v-if="src && !hasError"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-all duration-700"
      :class="[
        isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100',
        cssClass
      ]"
      @load="onLoad"
      @error="onError"
    />

    <!-- Fallback / Loading State -->
    <div 
      v-if="!src || hasError || isLoading" 
      class="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 bg-linear-to-br from-[#1E1B4B] via-[#4C1D95] to-[#1E1B4B]"
      :class="isLoading && !hasError ? 'opacity-100 z-10' : 'z-20'"
    >
      <!-- Purple Glow Animation -->
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] animate-pulse"></div>
      
      <div class="relative scale-90 lg:scale-100">
        <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-sm group-hover/img:border-violet-500/50 transition-colors">
          <i 
            class="bi text-white/30 text-3xl lg:text-4xl"
            :class="isLoading && !hasError ? 'bi-arrow-repeat animate-spin' : 'bi-image-fill'"
          ></i>
        </div>
      </div>
      
      <div class="px-4">
        <h4 class="text-white/40 font-['Poppins'] font-bold uppercase tracking-[0.3em] text-[8px] lg:text-[10px] mb-1">
          {{ hasError || !src ? 'Visual Under Development' : 'Loading Assets...' }}
        </h4>
        <div class="w-12 h-0.5 bg-violet-500/30 mx-auto rounded-full overflow-hidden">
          <div class="w-full h-full bg-violet-500/60 animate-shimmer" v-if="isLoading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Project Image'
  },
  cssClass: {
    type: String,
    default: ''
  }
});

const hasError = ref(false);
const isLoading = ref(true);

// Reset state when src changes
watch(() => props.src, () => {
  hasError.value = false;
  isLoading.value = true;
});

const onLoad = () => {
  isLoading.value = false;
};

const onError = () => {
  hasError.value = false;
  setTimeout(() => {
    // Check if truly failing or just slow
    if (isLoading.value) {
      hasError.value = true;
      isLoading.value = false;
    }
  }, 100);
  hasError.value = true;
  isLoading.value = false;
};
</script>

<style scoped>
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 1.5s infinite linear;
}
</style>
