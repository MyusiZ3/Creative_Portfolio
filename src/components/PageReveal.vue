<script setup>
import { ref, watch, computed } from "vue";
import { useTheme } from "@/composables/useTheme";

const { currentTheme } = useTheme();

const props = defineProps({
  active: Boolean,
  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["done"]);

const phase = ref("idle"); // idle -> enter -> hold -> exit -> idle

const formattedLabel = computed(() => {
  return props.label ? props.label.trim() : "NAVIGATION";
});

watch(
  () => props.active,
  (val) => {
    if (val) {
      phase.value = "enter";

      // Hold screen coverage briefly while scrolling
      setTimeout(() => {
        phase.value = "hold";
      }, 450);

      // Start wiping out to reveal target section
      setTimeout(() => {
        phase.value = "exit";
      }, 800);

      // Reset to idle
      setTimeout(() => {
        phase.value = "idle";
        emit("done");
      }, 1250);
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <div
      class="page-reveal-container"
      :class="{ active: phase !== 'idle' }"
      aria-hidden="true"
    >
      <!-- Single Solid Curtain Slab -->
      <div
        class="page-reveal-slab"
        :class="[`slab-${phase}`, currentTheme === 'pixel' ? 'pixel-slab' : 'editorial-slab']"
      >
        <!-- Label Content -->
        <div
          class="reveal-content-wrapper"
          :class="{ visible: phase === 'enter' || phase === 'hold' }"
        >
          <div class="reveal-content">
            <span
              class="reveal-tag"
              :class="currentTheme === 'pixel' ? 'text-[#00ff66] font-mono tracking-widest' : 'text-zinc-400'"
            >
              {{ currentTheme === 'pixel' ? '⚡ GAME_SYS' : '✦ PORTFOLIO' }}
            </span>
            <h2
              class="reveal-title"
              :class="currentTheme === 'pixel' ? 'font-mono text-[#00ff66] drop-shadow-[0_0_10px_rgba(0,255,102,0.8)]' : 'font-sans text-white'"
            >
              {{ formattedLabel }}
            </h2>
            <div
              class="reveal-accent-line"
              :class="currentTheme === 'pixel' ? 'bg-[#00ff66] shadow-[0_0_10px_#00ff66]' : 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.page-reveal-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
}

.page-reveal-container.active {
  pointer-events: all;
}

/* --- Curtain Slab --- */
.page-reveal-slab {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
}

.editorial-slab {
  background-color: #171717;
}

.pixel-slab {
  background-color: #050b07;
  border-top: 3px solid #00ff66;
  border-bottom: 3px solid #00ff66;
}

/* Base transform state */
.slab-idle {
  transform: translateY(100%);
  transition: none;
}

/* Enter phase: Wipes UP from bottom to cover screen */
.slab-enter {
  transform: translateY(0);
  transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
}

/* Hold phase: Stationary covering screen */
.slab-hold {
  transform: translateY(0);
}

/* Exit phase: Wipes UP out of the screen */
.slab-exit {
  transform: translateY(-100%);
  transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
}

/* --- Content Wrapper & Typography --- */
.reveal-content-wrapper {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.25s ease 0.1s, transform 0.25s ease 0.1s;
}

.reveal-content-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  padding: 0 1.5rem;
}

.reveal-tag {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.reveal-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.reveal-accent-line {
  width: 40px;
  height: 3px;
  margin-top: 0.75rem;
  border-radius: 9999px;
  transition: width 0.4s ease 0.15s;
}

.reveal-content-wrapper.visible .reveal-accent-line {
  width: 60px;
}
</style>
