<template>
  <!-- Backdrop overlay -->
  <transition name="backdrop">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9998 bg-black/40 backdrop-blur-[3px]"
      @click="close"
    ></div>
  </transition>

  <!-- FAB Container -->
  <div class="fixed bottom-6 right-6 z-9999 flex flex-col items-end gap-0">
    <!-- Action Items -->
    <div class="flex flex-col items-end mb-4" ref="menuRef">
      <div
        v-for="(item, index) in actions"
        :key="item.id"
        class="flex items-center gap-3 mb-3"
        :style="{
          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? 'translateY(0) scale(1)'
            : `translateY(${(actions.length - index) * 12}px) scale(0.6)`,
          transition: isOpen
            ? `all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 60}ms`
            : `all 0.25s cubic-bezier(0.55, 0, 1, 0.45) ${(actions.length - 1 - index) * 40}ms`,
          pointerEvents: isOpen ? 'auto' : 'none',
        }"
      >
        <!-- Tooltip Label -->
        <span
          class="px-3.5 py-1.5 bg-[#1e1e2e]/90 text-white/80 text-[13px] font-['Roboto'] font-medium rounded-lg border border-white/10 backdrop-blur-sm shadow-lg whitespace-nowrap"
        >
          {{ item.label }}
        </span>

        <!-- Action Circle -->
        <a
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          @click="item.action ? item.action($event) : handleItemClick()"
          class="fab-circle w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-violet-400 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <i :class="item.icon" class="text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Main FAB Button -->
    <button
      @click="toggle"
      class="fab-main group w-14 h-14 rounded-full bg-violet-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-violet-400 active:scale-90"
      :class="{ 'fab-is-open': isOpen }"
    >
      <!-- Plus/Close icon with morph -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="transition-transform duration-300"
        :class="isOpen ? 'rotate-[135deg]' : 'rotate-0'"
      >
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const menuRef = ref(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const handleItemClick = () => {
  isOpen.value = false;
};

const scrollToTop = (e) => {
  e.preventDefault();
  isOpen.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const actions = [
  {
    id: "top",
    label: "Back to Top",
    icon: "bi bi-arrow-up",
    href: "#",
    external: false,
    action: scrollToTop,
  },
  {
    id: "resume",
    label: "Download CV",
    icon: "bi bi-file-earmark-arrow-down",
    href: "/resume.pdf",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    icon: "bi bi-envelope",
    href: "mailto:muhamadsidik@student.telkomuniversity.ac.id",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "bi bi-linkedin",
    href: "https://linkedin.com/in/",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    icon: "bi bi-github",
    href: "https://github.com/MyusiZ3",
    external: true,
  },
];
</script>

<style scoped>
/* === Main FAB glow === */
.fab-main {
  box-shadow:
    0 4px 24px rgba(124, 58, 237, 0.35),
    0 0 0 0 rgba(124, 58, 237, 0);
}

.fab-main:hover {
  box-shadow:
    0 6px 32px rgba(124, 58, 237, 0.5),
    0 0 20px rgba(124, 58, 237, 0.25);
}

.fab-is-open {
  box-shadow:
    0 4px 24px rgba(124, 58, 237, 0.4),
    0 0 30px rgba(124, 58, 237, 0.2);
}

/* === Action circles subtle glow on hover === */
.fab-circle {
  background: rgba(30, 30, 46, 0.6);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.fab-circle:hover {
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(124, 58, 237, 0.15);
}

/* === Backdrop transition === */
.backdrop-enter-active {
  transition: opacity 0.3s ease;
}

.backdrop-leave-active {
  transition: opacity 0.2s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
