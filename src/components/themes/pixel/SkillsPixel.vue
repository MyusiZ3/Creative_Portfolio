<template>
  <section id="skills" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-[#00f0ff] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#00f0ff] shadow-[2px_2px_0px_#000]">
            ✦ INVENTORY RACK
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold uppercase mt-2">
            SKILL <span class="text-[#00f0ff]">EQUIPMENT</span>
          </h2>
        </div>

        <div class="text-xs text-[#8b949e] bg-[#161b22] px-3 py-2 border-2 border-black">
          CAPACITY: <span class="text-[#00ff66] font-bold">12/12 SLOTS FILLED</span>
        </div>
      </div>

      <!-- Inventory Category Grids -->
      <div class="space-y-10">
        <div v-for="cat in skillCategories" :key="cat.title" class="bg-[#161b22] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
          
          <!-- Category Label -->
          <div class="flex items-center justify-between border-b-2 border-[#30363d] pb-3 mb-6">
            <h3 class="text-sm font-bold uppercase tracking-wider flex items-center gap-2" :class="cat.color">
              <span>{{ cat.icon }}</span>
              <span>{{ cat.title }}</span>
            </h3>
            <span class="text-[10px] text-[#8b949e] uppercase font-bold">{{ cat.slotType }}</span>
          </div>

          <!-- Items Slot Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="item in cat.items"
              :key="item.name"
              class="relative bg-[#0d1117] border-2 border-black p-4 shadow-[4px_4px_0px_#000000] hover:border-[#00ff66] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all group cursor-pointer"
            >
              <!-- Slot Badge -->
              <div class="flex items-center justify-between text-[9px] font-bold text-[#8b949e] mb-2">
                <span>SLOT</span>
                <span :class="item.rarityColor">{{ item.rarity }}</span>
              </div>

              <!-- Item Icon & Name -->
              <div class="flex items-center gap-3">
                <span class="text-2xl group-hover:scale-110 transition-transform">{{ item.icon }}</span>
                <div>
                  <div class="text-xs font-bold text-[#f0f6fc] uppercase group-hover:text-[#00ff66] transition-colors">
                    {{ item.name }}
                  </div>
                  <div class="text-[10px] text-[#8b949e] uppercase mt-0.5">
                    LVL {{ item.level }}
                  </div>
                </div>
              </div>

              <!-- Progress Bar -->
              <div class="mt-3 pt-2 border-t border-[#30363d]">
                <div class="h-2 w-full bg-[#161b22] border border-black p-0.5">
                  <div
                    class="h-full transition-all duration-500"
                    :class="cat.barBg"
                    :style="{ width: item.level + '%' }"
                  ></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'PRIMARY WEAPONS (GAME DEV & 3D)',
    icon: '⚔️',
    slotType: 'WEAPON RACK',
    color: 'text-[#ffd700]',
    barBg: 'bg-[#ffd700]',
    items: [
      { name: 'UNITY 3D', icon: '🎯', level: 95, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'BLENDER 3D', icon: '🎨', level: 88, rarity: 'EPIC', rarityColor: 'text-[#a78bfa]' },
      { name: 'C# SCRIPTING', icon: '💻', level: 92, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'XR / VR SDK', icon: '🥽', level: 85, rarity: 'EPIC', rarityColor: 'text-[#a78bfa]' }
    ]
  },
  {
    title: 'DESIGN ARMOR (UI/UX & GRAPHICS)',
    icon: '🛡️',
    slotType: 'ARMOR GEAR',
    color: 'text-[#00f0ff]',
    barBg: 'bg-[#00f0ff]',
    items: [
      { name: 'FIGMA', icon: '❖', level: 94, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'PHOTOSHOP', icon: '🖼️', level: 90, rarity: 'EPIC', rarityColor: 'text-[#a78bfa]' },
      { name: 'ILLUSTRATOR', icon: '✒️', level: 86, rarity: 'EPIC', rarityColor: 'text-[#a78bfa]' },
      { name: 'PREMIERE PRO', icon: '🎬', level: 88, rarity: 'EPIC', rarityColor: 'text-[#a78bfa]' }
    ]
  },
  {
    title: 'MAGIC SPELLS (FRONTEND CODE)',
    icon: '⚡',
    slotType: 'SPELLBOOK',
    color: 'text-[#00ff66]',
    barBg: 'bg-[#00ff66]',
    items: [
      { name: 'VUE.JS 3', icon: '💚', level: 90, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'JAVASCRIPT', icon: '💛', level: 92, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'TAILWIND CSS', icon: '🌊', level: 94, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' },
      { name: 'HTML5 / CSS3', icon: '🌐', level: 96, rarity: 'LEGENDARY', rarityColor: 'text-[#ffd700]' }
    ]
  }
];
</script>
