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
          class="fab-circle w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
          :class="[
            item.bg ? item.bg : 'bg-[#1e1e2e]/60 backdrop-blur-sm',
            item.border ? item.border : 'border-white/20'
          ]"
        >
          <i :class="item.icon" class="text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Main FAB Button Wrapper -->
    <div class="relative w-14 h-14 z-50">
      <!-- Particles -->
      <div
        v-for="p in particles"
        :key="p.id"
        class="absolute left-1/2 top-1/2 bg-violet-400 rounded-full pointer-events-none"
        :style="p.style"
      ></div>

      <!-- Main Button -->
      <button
        @click="handleToggle"
        class="fab-main group absolute inset-0 rounded-full text-white flex items-center justify-center transition-all duration-300 active:scale-90 shadow-2xl"
        :class="{ 'fab-is-open': isOpen, 'idle-blob': !isOpen }"
      >
        <!-- Fluid blob background -->
        <span class="fab-bg absolute inset-0 rounded-full bg-violet-500 transition-colors duration-300 group-hover:bg-violet-400 border border-violet-400/30"></span>
        
        <!-- Plus/Close icon with morph -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="relative z-10 transition-transform duration-300"
          :class="isOpen ? 'rotate-135' : 'rotate-0'"
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLanguage } from '@/composables/useLanguage';

const { t, lang } = useLanguage();

const isOpen = ref(false);
const menuRef = ref(null);
const particles = ref([]);
let pid = 0;

const spawnParticles = () => {
  const newGroup = [];
  const numParticles = 6 + Math.floor(Math.random() * 4); // 6 to 9 particles
  
  for (let i = 0; i < numParticles; i++) {
    const angle = (Math.PI * 2 * i) / numParticles + (Math.random() * 0.5); 
    const dist = 35 + Math.random() * 25; // How far they shoot out
    const size = 6 + Math.random() * 8; // Particle size
    
    newGroup.push({
      id: pid++,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(-50%, -50%) translate(0px, 0px) scale(0)`,
        opacity: 1,
        transition: 'none'
      },
      targetTransform: `translate(-50%, -50%) translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0.5)`
    });
  }
  
  particles.value.push(...newGroup);

  // Trigger animation next frame
  setTimeout(() => {
    newGroup.forEach(p => {
      p.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      p.style.transform = p.targetTransform;
      p.style.opacity = 0;
    });
  }, 20);

  // Clean up
  setTimeout(() => {
    particles.value = particles.value.filter(p => !newGroup.includes(p));
  }, 700);
};

const handleToggle = () => {
  isOpen.value = !isOpen.value;
  spawnParticles();
};

const close = () => {
  isOpen.value = false;
  showCVSub.value = false;
};

const handleItemClick = () => {
  isOpen.value = false;
  showCVSub.value = false;
};

const scrollToTop = (e) => {
  e.preventDefault();
  isOpen.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showCVSub = ref(false);

const actions = computed(() => {
  const isId = lang.value === 'ID';
  const baseActions = [
    {
      id: "top",
      label: t('fab_top'),
      icon: "bi bi-arrow-up",
      href: "#",
      external: false,
      action: scrollToTop,
    },
  ];

  if (!showCVSub.value) {
    baseActions.push({
      id: "resume_toggle",
      label: t('fab_cv'),
      icon: "bi bi-file-earmark-arrow-down",
      href: "javascript:void(0)",
      external: false,
      action: (e) => {
        e.preventDefault();
        showCVSub.value = true;
      }
    });
  } else {
    baseActions.push({
      id: "resume_designer",
      label: "CV Designer",
      icon: "bi bi-palette",
      href: "/doc/CV_Muhamad Sidik_Graphic Designer_Intern_2025.pdf",
      external: true,
      bg: "bg-violet-600/90",
      border: "border-violet-400/50"
    });
    baseActions.push({
      id: "resume_developer",
      label: "CV Developer",
      icon: "bi bi-code-slash",
      href: "/doc/CV_Muhamad Sidik_IT_Intern.pdf",
      external: true,
      bg: "bg-blue-600/90",
      border: "border-blue-400/50"
    });
  }

  return [
    ...baseActions,
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
});
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

/* === Liquid Blob Idle Animation === */
.idle-blob .fab-bg {
  animation: liquid-blob 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes liquid-blob {
  0% { 
    border-radius: 50%; 
    transform: scale(1); 
  }
  10% { 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; 
    transform: scale(1.12) rotate(5deg); 
  }
  15% { 
    border-radius: 60% 40% 30% 70% / 50% 60% 40% 40%; 
    transform: scale(1.15) rotate(-5deg); 
  }
  22% { 
    border-radius: 45% 55% 60% 40% / 55% 45% 50% 50%; 
    transform: scale(1.08) rotate(3deg); 
  }
  28% { 
    border-radius: 50%; 
    transform: scale(1) rotate(0deg); 
  }
  100% { 
    border-radius: 50%; 
    transform: scale(1) rotate(0deg); 
  }
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
