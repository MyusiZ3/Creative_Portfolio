<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  active: Boolean,
  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["done"]);

const phase = ref("idle"); // idle -> enter -> hold -> exit -> idle

watch(
  () => props.active,
  (val) => {
    if (val) {
      phase.value = "enter";

      // After curtain fully covers the screen, hold briefly
      setTimeout(() => {
        phase.value = "hold";
      }, 500);

      // Then start exit (reveal the page)
      setTimeout(() => {
        phase.value = "exit";
      }, 800);

      // Done — reset
      setTimeout(() => {
        phase.value = "idle";
        emit("done");
      }, 1350);
    }
  },
);
</script>

<template>
  <!-- Page Reveal Overlay -->
  <Teleport to="body">
    <div
      class="page-reveal-container"
      :class="{ active: phase !== 'idle' }"
      aria-hidden="true"
    >
      <!-- First curtain slab (enters from left) -->
      <div
        class="page-reveal-slab slab-1"
        :class="[`slab-${phase}`]"
      ></div>

      <!-- Second curtain slab (enters from right, slightly delayed) -->
      <div
        class="page-reveal-slab slab-2"
        :class="[`slab-${phase}`]"
      ></div>

      <!-- Label text shown briefly on top of the curtain -->
      <div
        class="page-reveal-label"
        :class="{ visible: phase === 'hold' || phase === 'exit' }"
      >
        <span class="label-text">{{ label }}</span>
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

/* --- Slabs --- */
.page-reveal-slab {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.slab-1 {
  background: linear-gradient(135deg, #171717 0%, #1e1e2e 50%, #171717 100%);
  transform: translateY(-101%);
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 2;
}

.slab-2 {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
  transform: translateY(-101%);
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 0.08s;
  z-index: 1;
}

/* Enter phase: slabs slide down to cover */
.slab-enter.slab-1,
.slab-hold.slab-1 {
  transform: translateY(0);
}

.slab-enter.slab-2,
.slab-hold.slab-2 {
  transform: translateY(0);
}

/* Exit phase: slabs slide down and out */
.slab-exit.slab-1 {
  transform: translateY(101%);
  transition: transform 0.55s cubic-bezier(0.77, 0, 0.175, 1);
}

.slab-exit.slab-2 {
  transform: translateY(101%);
  transition: transform 0.55s cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 0.06s;
}

/* Idle phase */
.slab-idle.slab-1,
.slab-idle.slab-2 {
  transform: translateY(-101%);
  transition: none;
}

/* --- Label --- */
.page-reveal-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.page-reveal-label.visible {
  opacity: 1;
}

.label-text {
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 0 2px 20px rgba(124, 58, 237, 0.5);
}
</style>
