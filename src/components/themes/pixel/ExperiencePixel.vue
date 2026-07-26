<template>
  <section id="experience" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-[#ffd700] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#ffd700] shadow-[2px_2px_0px_#000]">
            ✦ QUEST HISTORY
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold uppercase mt-2">
            CAREER <span class="text-[#ffd700]">QUEST LOG</span>
          </h2>
        </div>

        <div class="text-xs text-[#8b949e] bg-[#161b22] px-3 py-2 border-2 border-black">
          TOTAL XP EARNED: <span class="text-[#ffd700] font-bold">+25,000 XP</span>
        </div>
      </div>

      <!-- Quests Timeline Cards -->
      <div class="space-y-6">
        <div
          v-for="(quest, idx) in quests"
          :key="quest.title"
          class="bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] relative group hover:border-[#ffd700] transition-colors"
        >
          <!-- Quest Header Line -->
          <div class="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#30363d] pb-4 mb-4">
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 bg-[#ffd700] text-black font-extrabold text-xs uppercase shadow-[2px_2px_0px_#000]">
                QUEST 0{{ idx + 1 }}
              </span>
              <span class="text-xs font-bold text-[#00ff66] uppercase border border-[#00ff66] px-2 py-0.5">
                {{ quest.status }}
              </span>
            </div>

            <div class="flex items-center gap-3 text-xs text-[#8b949e]">
              <span>📅 {{ quest.period }}</span>
              <span class="text-[#ffd700] font-bold">{{ quest.xp }}</span>
            </div>
          </div>

          <!-- Quest Content -->
          <div class="space-y-2">
            <h3 class="text-xl sm:text-2xl font-extrabold text-[#f0f6fc] uppercase group-hover:text-[#ffd700] transition-colors">
              {{ quest.role }} <span class="text-[#00f0ff]">@ {{ quest.company }}</span>
            </h3>
            <p class="text-xs sm:text-sm text-[#8b949e] leading-relaxed pt-1">
              {{ quest.desc }}
            </p>
          </div>

          <!-- Key Deliverables List -->
          <div class="mt-4 pt-3 border-t border-[#30363d]">
            <div class="text-[10px] font-bold text-[#ffd700] uppercase mb-2">COMPLETED OBJECTIVES:</div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li
                v-for="obj in quest.objectives"
                :key="obj"
                class="text-xs text-[#f0f6fc] flex items-center gap-2"
              >
                <span class="text-[#00ff66]">✓</span>
                <span>{{ obj }}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { lang } = useLanguage();
const isId = computed(() => lang.value === 'ID');

const quests = computed(() => [
  {
    role: isId.value ? "Asisten Praktikum & Pengembang Web" : "Lab Assistant & Web Dev",
    company: "U-Asprak Studio",
    period: "2024 - PRESENT",
    status: "ACTIVE QUEST",
    xp: "+10,000 XP",
    desc: isId.value
      ? "Memimpin pengembangan platform asisten praktikum laboratorium dan mengelola antarmuka pengguna interaktif."
      : "Leading the lab assistant platform development and building responsive user interfaces for academic workflows.",
    objectives: [
      isId.value ? "Mengembangkan sistem Flutter multi-role" : "Developed multi-role Flutter application",
      isId.value ? "Optimasi database Firestore real-time" : "Optimized real-time Firestore database queries",
      isId.value ? "Meningkatkan efisiensi kerja 40%" : "Boosted workflow efficiency by 40%"
    ]
  },
  {
    role: isId.value ? "Lead Game Developer" : "Lead Game Developer",
    company: "MathRift Studio",
    period: "2023 - 2024",
    status: "QUEST CLEARED",
    xp: "+8,000 XP",
    desc: isId.value
      ? "Merancang mekanik gim 2D platformer edukasi dan mengintegrasikan papan peringkat global."
      : "Engineered educational 2D platformer game mechanics and integrated global high-score leaderboards.",
    objectives: [
      isId.value ? "Merilis 15+ level gim interaktif" : "Released 15+ interactive game stages",
      isId.value ? "Implementasi arsitektur C# modular" : "Implemented modular C# game architecture",
      isId.value ? "Meraih rating kepuasan 4.9/5" : "Achieved 4.9/5 user satisfaction rating"
    ]
  },
  {
    role: isId.value ? "VR / AR Designer & Developer" : "VR / AR Designer & Developer",
    company: "MindEscape VR Lab",
    period: "2023",
    status: "QUEST CLEARED",
    xp: "+7,000 XP",
    desc: isId.value
      ? "Membuat simulasi realitas maya 3D untuk pengujian ruang eskapisme dan interaksi spasial."
      : "Created 3D virtual reality simulations for spatial escape room puzzle interactions.",
    objectives: [
      isId.value ? "Optimasi performa 90 FPS di Quest VR" : "Optimized 90 FPS performance on Meta Quest",
      isId.value ? "Mendesain model 3D di Blender" : "Designed custom 3D assets in Blender",
      isId.value ? "Uji coba pengguna dengan 100+ peserta" : "Conducted user trials with 100+ testers"
    ]
  }
]);
</script>
