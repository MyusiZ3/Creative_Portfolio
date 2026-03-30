<template>
  <div 
    class="perspective-container group"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="isHovered = true"
    @touchmove="handleTouchMove"
    @touchend="handleMouseLeave"
  >
    <!-- Dynamic Glow Shadow (Interactive Backlight) -->
    <div 
      class="absolute top-1/2 left-1/2 w-3/4 h-3/4 bg-violet-600/15 blur-[80px] rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10"
      :style="shadowStyle"
    ></div>

    <div 
      ref="cardRef"
      class="main-card overflow-hidden"
      :style="cardStyle"
    >
      <!-- Improved Holographic Shine (Follows Cursor) -->
      <div class="holographic-glow" :style="holographicStyle"></div>
      
      <!-- Animated Scanning Line -->
      <div class="scan-line"></div>

      <!-- Card Content Layers -->
      <div class="card-inner flex flex-col justify-between p-5 sm:p-8 relative z-20">
        
        <!-- TOP: Brand & Status -->
        <div class="flex justify-between items-start layer-1">
           <div class="flex items-center gap-2 sm:gap-3">
              <div class="relative scale-90 sm:scale-100 origin-left">
                <div class="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-colors">
                   <i class="bi bi-cpu text-violet-400 text-xl animate-pulse"></i>
                </div>
                <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a] shadow-lg"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-black text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-none">CORE-ID</span>
                <span class="text-[7px] sm:text-[8px] text-gray-500 font-bold tracking-widest mt-1">SYS v2.0.5</span>
              </div>
           </div>
           
           <!-- Digital Chip -->
           <div class="relative group/chip scale-90 sm:scale-100 origin-right">
             <div class="absolute inset-0 bg-yellow-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div class="w-12 h-10 bg-linear-to-br from-yellow-300 via-yellow-500 to-yellow-700 rounded-lg shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center border border-yellow-200/30 overflow-hidden relative">
                <div class="w-full h-px bg-black/10 my-0.5"></div>
                <div class="w-full h-px bg-black/10 my-0.5"></div>
                <div class="w-full h-px bg-black/10 my-0.5"></div>
                <div class="absolute inset-0 overflow-hidden">
                   <div class="w-full h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
             </div>
           </div>
        </div>

        <!-- MIDDLE: Identity Focus -->
        <div class="flex items-center gap-4 sm:gap-10 layer-2">
          <!-- Profile Photo Frame -->
          <div class="relative photo-frame group-hover:scale-105 transition-transform duration-500 shrink-0">
             <!-- Interactive Ring -->
             <svg class="absolute -inset-2.5 sm:-inset-4 w-[calc(100%+20px)] sm:w-[calc(100%+32px)] h-[calc(100%+20px)] sm:h-[calc(100%+32px)] animate-spin-slow opacity-30 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="url(#ringGradientCard)" stroke-width="1" stroke-dasharray="20 10" />
                <defs>
                  <linearGradient id="ringGradientCard" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#A754FF;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:1" />
                  </linearGradient>
                </defs>
             </svg>
             
             <div class="photo-container relative z-10 aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl bg-black/40">
                <div class="w-full h-full bg-linear-to-br from-violet-600/30 to-blue-600/30 group-hover:opacity-0 transition-opacity"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-3xl font-black tracking-tighter mix-blend-overlay opacity-50">MS</div>
                <div class="absolute inset-0 bg-linear-to-b from-transparent via-violet-400/20 to-transparent -translate-y-full animate-scan duration-2000"></div>
             </div>
          </div>

          <div class="flex flex-col space-y-1 transform translate-z-[70px] overflow-hidden">
            <h3 class="pt-5 sm:pt-5 text-white text-base sm:text-2xl md:text-2xl font-black font-['Poppins'] tracking-tight group-hover:text-[#A754FF] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              MUHAMAD SIDIK
            </h3>
            <div class="flex items-center gap-2 sm:gap-3">
               <div class="px-2 py-0.5 rounded-sm bg-violet-600/20 border border-violet-500/30">
                 <p class="text-[#A754FF] font-black text-[8px] sm:text-[10px] uppercase tracking-widest">{{ t('hero_designer') }}</p>
               </div>
               <div class="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-full border border-white/5">
                 <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                 <span class="text-[7px] sm:text-[8px] text-gray-400 font-bold uppercase tracking-widest">VERIFIED</span>
               </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM: Access & QR -->
        <div class="flex justify-between items-end layer-3 mt-2 sm:mt-0">
          <div class="flex gap-4 sm:gap-8">
             <div class="space-y-0.5">
               <p class="text-[7px] sm:text-[8px] text-gray-500 font-black uppercase tracking-widest">ACCESS LEVEL</p>
               <p class="text-white text-[9px] sm:text-xs font-bold font-mono tracking-tighter">ADMIN_ROOT_99</p>
             </div>
             <div class="space-y-0.5">
               <p class="text-[7px] sm:text-[8px] text-gray-500 font-black uppercase tracking-widest">EXPIRY</p>
               <p class="text-white text-[9px] sm:text-xs font-bold font-mono tracking-tighter">PERPETUAL</p>
             </div>
          </div>
          
          <!-- Interactive QR -->
          <div class="relative group/qr p-1 scale-75 sm:scale-100 origin-bottom-right">
             <div class="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div class="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 p-1 rounded-xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-110">
                <div class="w-full h-full bg-black rounded-lg grid grid-cols-5 grid-rows-5 gap-0.5 p-1 relative overflow-hidden">
                   <div v-for="n in 25" :key="n" :class="[1,2,4,5,6,10,11,13,15,16,20,21,22,24,25].includes(n) ? 'bg-white' : 'bg-transparent'"></div>
                   <div class="absolute inset-0 bg-violet-500/20 animate-pulse"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Dynamic Surface Details -->
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
    rgba(255, 255, 255, 0.2) 0%, 
    rgba(167, 84, 255, 0.15) 25%, 
    rgba(255, 107, 107, 0.1) 50%, 
    transparent 80%
  )`,
  opacity: isHovered.value ? 1 : 0
}));

const shadowStyle = computed(() => ({
  transform: `translate(${(mousePos.x - 50) * 1.5}px, ${(mousePos.y - 50) * 1.5}px) translate(-50%, -50%)`,
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
  background: linear-gradient(135deg, rgba(35, 35, 45, 0.85) 0%, rgba(20, 20, 25, 0.95) 100%);
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
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
  margin-top: 20px;
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

.scan-line {
  position: absolute;
  top: 0;
  left: -50%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(167, 84, 255, 0.1),
    rgba(255, 255, 255, 0.2),
    rgba(167, 84, 255, 0.1),
    transparent
  );
  transform: skewX(-20deg);
  animation: sweep 4s infinite ease-out;
  z-index: 18;
  pointer-events: none;
}

.card-edge {
  position: absolute;
  inset: 0;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 40%, transparent 60%, rgba(255,255,255,0.06));
  z-index: 20;
  pointer-events: none;
}

@keyframes sweep {
  0% { transform: translateX(0) skewX(-20deg); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translateX(450%) skewX(-20deg); opacity: 1; }
  55%, 100% { transform: translateX(450%) skewX(-20deg); opacity: 0; }
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
