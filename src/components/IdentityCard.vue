<template>
  <div 
    class="perspective-container group"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="isHovered = true"
    @touchmove="handleTouchMove"
    @touchend="handleMouseLeave"
  >
    <!-- Soft Subdued Backlight (Minimal & High-end, not aggressively purple) -->
    <div 
      class="absolute top-1/2 left-1/2 w-3/4 h-3/4 bg-white/5 blur-[100px] rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10"
      :style="shadowStyle"
    ></div>

    <div 
      ref="cardRef"
      class="main-card overflow-hidden"
      :style="cardStyle"
    >
      <!-- Subtle Elegant Reflection (Not flashy holographic neon) -->
      <div class="holographic-glow" :style="holographicStyle"></div>
      
      <!-- Card Content Layers -->
      <div class="card-inner flex flex-col justify-between p-6 sm:p-8 relative z-20">
        
        <!-- TOP: Branding & Logo -->
        <div class="flex justify-between items-start layer-1">
           <div class="flex items-center gap-3">
              <div class="relative origin-left">
                <!-- Clean Minimalist Geometric Icon -->
                <div class="w-9 h-9 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                   <span class="text-white font-mono text-sm tracking-tighter">M.</span>
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-white/80 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase leading-none">DESIGN PASS</span>
                <span class="text-[8px] text-white/40 font-mono tracking-widest mt-1">NO. 99-2026</span>
              </div>
           </div>
           
           <!-- Minimal Status Badge -->
           <div class="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
             <div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
             <span class="text-[8px] sm:text-[9px] text-white/70 font-mono tracking-wider font-semibold uppercase">ACTIVE</span>
           </div>
        </div>

        <!-- MIDDLE: Name & Title (High-end Typography) -->
        <div class="flex items-center gap-5 sm:gap-8 layer-2 my-auto">
          <!-- Monogram Container (Subtle and classy) -->
          <div class="photo-frame shrink-0">
             <div class="photo-container relative z-10 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e24] flex items-center justify-center group-hover:border-white/25 transition-colors duration-500">
                <span class="text-white text-2xl sm:text-3xl font-light font-['Poppins'] tracking-tighter mix-blend-difference select-none">MS</span>
             </div>
          </div>

          <div class="flex flex-col space-y-1.5 transform translate-z-[50px] overflow-hidden">
            <h3 class="text-white text-lg sm:text-2xl font-semibold font-['Poppins'] tracking-tight group-hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              MUHAMAD SIDIK
            </h3>
            <div class="flex items-center gap-2">
               <span class="text-white/70 font-medium text-[9px] sm:text-[11px] uppercase tracking-widest">{{ t('hero_designer') }}</span>
               <span class="text-white/30 text-xs font-light font-mono select-none">|</span>
               <span class="text-white/40 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider">Telkom University</span>
            </div>
          </div>
        </div>

        <!-- BOTTOM: Access & Specifications -->
        <div class="flex justify-between items-end layer-3">
          <div class="flex gap-6 sm:gap-10">
             <div class="space-y-1">
               <p class="text-[8px] text-white/40 font-mono uppercase tracking-wider">FOCUS AREA</p>
               <p class="text-white text-[9px] sm:text-xs font-mono tracking-tight font-medium">UI/UX & CREATIVE DESIGN</p>
             </div>
             <div class="space-y-1">
               <p class="text-[8px] text-white/40 font-mono uppercase tracking-wider">STATUS</p>
               <p class="text-emerald-400 text-[9px] sm:text-xs font-mono tracking-tight font-semibold">AVAILABLE FOR PROJECTS</p>
             </div>
          </div>
          
          <!-- Elegant signature or subtle stamp -->
          <div class="opacity-50 group-hover:opacity-80 transition-opacity duration-500">
             <span class="font-serif italic text-white/80 text-sm sm:text-base tracking-widest select-none">M. Sidik</span>
          </div>
        </div>
      </div>

      <!-- Subtle Matte/Metallic Bevel Overlay -->
      <div class="card-edge"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
const cardRef = ref(null);
const isHovered = ref(false);

const rotation = reactive({ x: 0, y: 0 });
const mousePos = reactive({ x: 50, y: 50 }); // Center by default

const handleMouseMove = (e) => {
  if (!cardRef.value) return;

  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  updateRotation(x, y, rect.width, rect.height);
};

const handleTouchMove = (e) => {
  if (!cardRef.value || !e.touches[0]) return;
  isHovered.value = true;
  
  const rect = cardRef.value.getBoundingClientRect();
  const x = e.touches[0].clientX - rect.left;
  const y = e.touches[0].clientY - rect.top;

  if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
     e.preventDefault();
     updateRotation(x, y, rect.width, rect.height);
  }
};

const updateRotation = (x, y, width, height) => {
  const centerX = width / 2;
  const centerY = height / 2;

  rotation.y = ((x - centerX) / centerX) * 12;
  rotation.x = ((centerY - y) / centerY) * 12;

  mousePos.x = (x / width) * 100;
  mousePos.y = (y / height) * 100;
};

const handleMouseLeave = () => {
  isHovered.value = false;
  rotation.x = 0;
  rotation.y = 0;
};

const cardStyle = computed(() => {
  const tiltX = isHovered.value ? rotation.x : 0;
  const tiltY = isHovered.value ? rotation.y : 0;
  const scale = isHovered.value ? 1.02 : 1;
  
  return {
    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, 1)`,
    transition: isHovered.value ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: isHovered.value ? 50 : 20
  };
});

const holographicStyle = computed(() => ({
  background: `radial-gradient(
    circle at ${mousePos.x}% ${mousePos.y}%, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.03) 50%, 
    transparent 80%
  )`,
  opacity: isHovered.value ? 1 : 0
}));

const shadowStyle = computed(() => ({
  transform: `translate(${(mousePos.x - 50) * 1}px, ${(mousePos.y - 50) * 1}px) translate(-50%, -50%)`,
}));
</script>

<style scoped>
.perspective-container {
  width: 100%;
  max-width: 600px;
  height: 290px;
  position: relative;
  touch-action: none;
}

.main-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #18181b 0%, #09090b 100%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8);
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.card-inner {
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

/* Layered Parallax Depths */
.layer-1 { transform: translateZ(20px); }
.layer-2 { transform: translateZ(40px); }
.layer-3 { transform: translateZ(30px); }

.photo-frame {
  width: 65px;
  height: 65px;
  transform-style: preserve-3d;
}

.photo-container {
  width: 100%;
  height: 100%;
  transform: translateZ(20px);
}

.holographic-glow {
  position: absolute;
  inset: 0;
  z-index: 15;
  pointer-events: none;
  mix-blend-mode: soft-light;
  transition: opacity 0.5s ease;
}

.card-edge {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 40%, transparent 60%, rgba(255, 255, 255, 0.03) 100%);
  z-index: 20;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .perspective-container {
    max-width: 480px;
    height: 240px;
  }
  .photo-frame {
    width: 68px;
    height: 68px;
  }
}

@media (max-width: 640px) {
  .perspective-container {
    max-width: 330px;
    height: 190px;
  }
  .photo-frame {
    width: 52px;
    height: 52px;
  }
  .main-card {
    border-radius: 20px;
  }
  .card-edge {
    border-radius: 20px;
  }
}
</style>
