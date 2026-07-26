<template>
  <Teleport to="body">
    <div v-if="isPointerFine" class="cursor-multifollow" aria-hidden="true">
      <!-- Large outer ring (slowest) -->
      <div
        class="cursor-ring"
        :style="{
          width: '32px',
          height: '32px',
          borderColor: currentTheme === 'pixel' ? '#00ff66' : '#7c3aed',
          borderRadius: currentTheme === 'pixel' ? '0px' : '50%',
          boxShadow: currentTheme === 'pixel' ? '0 0 8px rgba(0, 255, 102, 0.4)' : 'none',
          transform: `translate3d(${circles[0].x - 16}px, ${circles[0].y - 16}px, 0) scale(${circles[0].scale})`,
          opacity: circles[0].opacity,
        }"
      ></div>

      <!-- Medium ring -->
      <div
        class="cursor-ring"
        :style="{
          width: '20px',
          height: '20px',
          borderColor: currentTheme === 'pixel' ? '#33ff88' : '#a78bfa',
          borderRadius: currentTheme === 'pixel' ? '0px' : '50%',
          transform: `translate3d(${circles[1].x - 10}px, ${circles[1].y - 10}px, 0) scale(${circles[1].scale})`,
          opacity: circles[1].opacity,
        }"
      ></div>

      <!-- Small ring -->
      <div
        class="cursor-ring"
        :style="{
          width: '12px',
          height: '12px',
          borderColor: currentTheme === 'pixel' ? '#00cc55' : '#e879f9',
          borderRadius: currentTheme === 'pixel' ? '0px' : '50%',
          transform: `translate3d(${circles[2].x - 6}px, ${circles[2].y - 6}px, 0) scale(${circles[2].scale})`,
          opacity: circles[2].opacity,
        }"
      ></div>

      <!-- Dot (cursor tip, fastest) -->
      <div
        class="cursor-dot"
        :style="{
          background: currentTheme === 'pixel' ? '#00ff66' : 'white',
          borderRadius: currentTheme === 'pixel' ? '0px' : '50%',
          boxShadow: currentTheme === 'pixel' ? '0 0 10px #00ff66' : 'none',
          transform: `translate3d(${mouse.x - 3}px, ${mouse.y - 3}px, 0) scale(${dotScale})`,
          opacity: dotOpacity,
        }"
      ></div>

      <!-- Click ripple -->
      <div
        v-for="ripple in ripples"
        :key="ripple.id"
        class="click-ripple"
        :style="{
          ...ripple.style,
          borderColor: currentTheme === 'pixel' ? '#00ff66' : '#a78bfa',
          borderRadius: currentTheme === 'pixel' ? '0px' : '50%',
        }"
      ></div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

const { currentTheme } = useTheme();
const isPointerFine = ref(false);
const mouse = reactive({ x: -100, y: -100 });
const dotScale = ref(1);
const dotOpacity = ref(0);

const ripples = ref([]);
let rippleId = 0;

// 3 trailing ring circles with different spring speeds
const circleConfig = [
  { stiffness: 0.005, damping: 0.88 },  // large, slowest — very lazy
  { stiffness: 0.015, damping: 0.87 },  // medium
  { stiffness: 0.025,  damping: 0.86 },  // small, faster but still smooth
];

const circles = reactive(
  circleConfig.map((cfg) => ({
    x: -100,
    y: -100,
    vx: 0,
    vy: 0,
    stiffness: cfg.stiffness,
    damping: cfg.damping,
    scale: 1,
    opacity: 0,
  }))
);

let animFrame = null;

const onMouseMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  dotOpacity.value = 1;
  circles.forEach((c) => { c.opacity = 1; });
};

const onMouseDown = () => {
  // Squeeze dot
  dotScale.value = 0.5;

  // Scale burst on rings
  circles[0].scale = 1.5;
  circles[1].scale = 1.4;
  circles[2].scale = 1.3;

  // Spawn a ripple ring
  spawnRipple(mouse.x, mouse.y);
};

const onMouseUp = () => {
  dotScale.value = 1;
};

const onMouseLeave = () => {
  dotOpacity.value = 0;
  circles.forEach((c) => { c.opacity = 0; });
};

const spawnRipple = (cx, cy) => {
  const id = rippleId++;
  const r = {
    id,
    style: {
      left: `${cx}px`,
      top: `${cy}px`,
      width: '8px',
      height: '8px',
      opacity: 0.7,
      borderColor: currentTheme.value === 'pixel' ? '#00ff66' : '#a78bfa',
      transform: 'translate(-50%, -50%) scale(1)',
      transition: 'none',
    },
  };
  ripples.value.push(r);

  // Animate outward
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const found = ripples.value.find((p) => p.id === id);
      if (found) {
        found.style = {
          ...found.style,
          width: '60px',
          height: '60px',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      }
    });
  });

  setTimeout(() => {
    ripples.value = ripples.value.filter((p) => p.id !== id);
  }, 600);
};

const animate = () => {
  circles.forEach((circle) => {
    const dx = mouse.x - circle.x;
    const dy = mouse.y - circle.y;
    circle.vx += dx * circle.stiffness;
    circle.vy += dy * circle.stiffness;
    circle.vx *= circle.damping;
    circle.vy *= circle.damping;
    circle.x += circle.vx;
    circle.y += circle.vy;

    // Return scale to 1
    if (circle.scale !== 1) {
      circle.scale += (1 - circle.scale) * 0.1;
      if (Math.abs(circle.scale - 1) < 0.01) circle.scale = 1;
    }
  });

  animFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    isPointerFine.value = true;
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    animFrame = requestAnimationFrame(animate);
  }
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseleave', onMouseLeave);
  if (animFrame) cancelAnimationFrame(animFrame);
});
</script>

<style scoped>
.cursor-multifollow {
  position: fixed;
  inset: 0;
  z-index: 99999;
  pointer-events: none;
  overflow: hidden;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid;
  pointer-events: none;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transition: opacity 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease;
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  pointer-events: none;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transition: transform 0.15s ease, opacity 0.3s ease, background-color 0.3s ease, border-radius 0.3s ease;
}

.click-ripple {
  position: fixed;
  border: 2px solid;
  pointer-events: none;
  will-change: transform, opacity, width, height;
}
</style>
