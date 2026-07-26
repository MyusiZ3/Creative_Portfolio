<template>
  <section class="py-16 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Title Marquee -->
      <div class="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-4 border-black pb-6">
        <div>
          <span class="text-xs font-bold text-[#ffd700] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#ffd700] shadow-[2px_2px_0px_#000]">
            ✦ KEY METRICS & MILESTONES
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold uppercase mt-2 text-[#f0f6fc]">
            IMPACT <span class="text-[#00f0ff]">& STATS</span>
          </h2>
        </div>
        <div class="text-xs text-[#8b949e] font-mono bg-[#161b22] p-2 border-2 border-black">
          STATUS: <span class="text-[#00ff66] font-bold">RECORD HIGH</span>
        </div>
      </div>

      <!-- Top Row: Bento Metrics Grid (High-Contrast Bold Colors) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        <!-- Box 1: Yellow - 500K Products -->
        <div class="bg-[#ffd700] text-black border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative overflow-hidden flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 bg-black text-[#ffd700] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              PRODUCTS
            </span>
            <span class="text-2xl">📦</span>
          </div>
          <div>
            <div class="text-4xl sm:text-6xl font-black tracking-tighter leading-none mb-1">
              500K+
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wide opacity-90">
              {{ isId ? "Produk & Aset Terdistribusi" : "Products & Assets Delivered" }}
            </div>
          </div>
        </div>

        <!-- Box 2: Lavender/Purple - 20% Growth -->
        <div class="bg-[#a78bfa] text-black border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative overflow-hidden flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 bg-black text-[#a78bfa] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              GROWTH
            </span>
            <span class="text-2xl">📈</span>
          </div>
          <div>
            <div class="text-4xl sm:text-6xl font-black tracking-tighter leading-none mb-1">
              20%+
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wide opacity-90">
              {{ isId ? "Pertumbuhan Basis Pengguna" : "Growth in Customer Base" }}
            </div>
          </div>
        </div>

        <!-- Box 3: Salmon Pink - 1M+ Visitors -->
        <div class="bg-[#ff6b81] text-black border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative overflow-hidden flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <span class="px-2.5 py-1 bg-black text-[#ff6b81] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
              VISITORS
            </span>
            <span class="text-2xl">🌐</span>
          </div>
          <div>
            <div class="text-4xl sm:text-6xl font-black tracking-tighter leading-none mb-1">
              1M+
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wide opacity-90">
              {{ isId ? "Impresi & Pengunjung Web" : "Total Platform Impressions" }}
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Row: Interactive Month Pills & Timeline Grid -->
      <div class="bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000]">
        
        <!-- Month Navigation Pills -->
        <div class="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#30363d] pb-6 mb-6">
          <button
            v-for="(month, idx) in months"
            :key="month"
            @click="activeQuarter = Math.floor(idx / 3)"
            class="px-3 py-1.5 text-xs font-bold uppercase transition-all border-2"
            :class="[
              Math.floor(idx / 3) === activeQuarter
                ? 'bg-black text-[#00ff66] border-[#00ff66] shadow-[2px_2px_0px_#00ff66]'
                : 'bg-[#0d1117] text-[#8b949e] border-black hover:text-[#f0f6fc]'
            ]"
          >
            {{ month }}
          </button>
        </div>

        <!-- Quarter Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            v-for="(q, index) in quarters"
            :key="q.title"
            class="p-5 border-2 border-black transition-all flex flex-col justify-between"
            :class="[
              activeQuarter === index
                ? 'bg-[#0d1117] border-[#00f0ff] shadow-[4px_4px_0px_#00f0ff]'
                : 'bg-[#0d1117]/60 opacity-60'
            ]"
          >
            <div>
              <!-- Gradient Bar Indicator -->
              <div class="h-2 w-full mb-4 rounded-none" :class="q.gradient"></div>

              <div class="text-[10px] font-bold text-[#ffd700] uppercase mb-1">
                {{ q.quarter }} • {{ q.months }}
              </div>
              <h4 class="text-sm font-bold text-[#f0f6fc] mb-2">
                {{ q.title }}
              </h4>
              <p class="text-xs text-[#8b949e] leading-relaxed">
                {{ q.desc }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-[#30363d] flex items-center justify-between text-[10px]">
              <span class="text-[#00ff66] font-bold">STATUS: DONE</span>
              <span class="text-[#8b949e]">Q{{ index + 1 }}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { lang } = useLanguage();
const isId = computed(() => lang.value === 'ID');

const activeQuarter = ref(0);

const months = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

const quarters = computed(() => [
  {
    quarter: "QUARTER 1",
    months: "JAN - MAR",
    title: isId.value ? "Opened 2 New Labs" : "Opened 2 New Labs",
    desc: isId.value 
      ? "Inisiasi lab gim VR & pengoptimalan framerate untuk MindEscape VR Chamber."
      : "Initiated VR lab testing & framerate optimization for MindEscape VR Chamber.",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    quarter: "QUARTER 2",
    months: "APR - JUN",
    title: isId.value ? "Partnership & U-Asprak" : "Partnership & U-Asprak",
    desc: isId.value
      ? "Peluncuran sistem manajemen asisten praktikum U-Asprak & kolaborasi akademis."
      : "Launched U-Asprak lab assistant system & academic integration platform.",
    gradient: "bg-gradient-to-r from-[#ffd700] to-orange-500"
  },
  {
    quarter: "QUARTER 3",
    months: "JUL - SEP",
    title: isId.value ? "Product Launch 'Luxion 3.0'" : "Product Launch 'Luxion 3.0'",
    desc: isId.value
      ? "Rilis publik gim arkade Luxion RideXP dan MathRift 2D platformer."
      : "Public release of Luxion RideXP arcade game & MathRift 2D platformer.",
    gradient: "bg-gradient-to-r from-[#00ff66] to-[#00f0ff]"
  },
  {
    quarter: "QUARTER 4",
    months: "OCT - DEC",
    title: isId.value ? "Won 3 Industry Awards" : "Won 3 Industry Awards",
    desc: isId.value
      ? "Meraih 3 penghargaan industri & pengajuan Hak Cipta (HKI) publikasi."
      : "Won 3 industry design awards & finalized HKI copyright submissions.",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
  }
]);
</script>
