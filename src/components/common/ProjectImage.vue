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

    <!-- Fallback / Loading State (Minimalist Editorial Dark Placeholder) -->
    <div 
      v-if="!src || hasError || isLoading" 
      class="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 bg-[#141416] border border-white/5"
      :class="isLoading && !hasError ? 'opacity-100 z-10' : 'z-20'"
    >
      <div class="flex flex-col items-center gap-2">
        <i 
          class="bi text-zinc-600 text-xl"
          :class="isLoading && !hasError ? 'bi-arrow-repeat animate-spin' : 'bi-image'"
        ></i>
        <span class="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-medium">
          {{ isLoading && !hasError ? 'Loading' : 'No Preview' }}
        </span>
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
