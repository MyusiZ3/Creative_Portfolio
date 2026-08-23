<template>
  <section
    id="process"
    class="bg-white pt-14 pb-36 lg:pt-20 lg:pb-48 px-6 lg:px-16 xl:px-40 relative overflow-hidden -mb-1"
  >
    <!-- Top Right Accent Shape (accent_3.png) -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute top-0 right-0 w-24 md:w-40 lg:w-56 xl:w-180 pointer-events-none transform z-0"
    />
    <!-- Bottom Left Accent Shape (accent_3.png) -->
    <img
      src="/images/accent_3.png"
      alt="Accent Shape"
      loading="lazy"
      decoding="async"
      class="absolute -bottom-1 left-0 w-32 md:w-52 lg:w-72 xl:w-200 pointer-events-none transform rotate-180 z-0"
    />

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 lg:mb-20 text-left">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 100 },
          }"
          class="text-3xl lg:text-[44px] font-extrabold font-['Poppins'] text-[#1a1a2e] leading-tight mb-5"
        >
          {{
            lang === "ID"
              ? "Dari Ide Abstrak hingga Realitas Interaktif"
              : "From Concept Sketches to Interactive Realities"
          }}
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: 200 },
          }"
          class="text-[#555] font-['Roboto'] text-sm lg:text-[16px] leading-relaxed max-w-2xl"
        >
          {{
            lang === "ID"
              ? "Alur kerja terstruktur yang memadukan estetika desain UI/UX, teknologi interaktif AR/Game, serta rekayasa perangkat lunak full-stack yang andal."
              : "A structured workflow bridging UI/UX design craftsmanship, real-time AR/Game engines, and production-grade full-stack engineering."
          }}
        </p>
      </div>

      <!-- Process Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: index * 120,
              ease: 'easeOut',
            },
          }"
          class="process-card group bg-gray-50/70 hover:bg-white border border-gray-200/80 hover:border-violet-500/40 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/5 relative overflow-hidden flex flex-col justify-between"
        >
          <!-- Top Row: Number & Highlight Tag -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <span
                class="font-mono text-3xl lg:text-4xl font-extrabold text-violet-600/30 group-hover:text-violet-600 transition-colors duration-500"
              >
                {{ step.number }}
              </span>
              <span
                class="text-[10px] lg:text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-lg bg-violet-100/70 text-violet-700 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300"
              >
                {{ step.tag }}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3
              class="text-xl lg:text-2xl font-bold font-['Poppins'] text-[#1a1a2e] mb-2 group-hover:text-violet-700 transition-colors duration-300"
            >
              {{ step.title }}
            </h3>

            <p class="text-xs font-mono font-medium text-violet-500 mb-4">
              {{ step.subtitle }}
            </p>

            <!-- Description -->
            <p
              class="text-gray-600 font-['Roboto'] text-sm leading-relaxed mb-8"
            >
              {{ step.description }}
            </p>
          </div>

          <!-- Bottom Row: Tools Badges -->
          <div
            class="pt-6 border-t border-gray-200/60 flex flex-wrap gap-2 items-center"
          >
            <span
              class="text-[10px] font-mono text-gray-400 uppercase tracking-wider mr-2 font-semibold"
            >
              {{ lang === "ID" ? "Tools & Focus:" : "Tools & Focus:" }}
            </span>
            <span
              v-for="tool in step.tools"
              :key="tool"
              class="px-2.5 py-1 rounded-md text-[11px] font-medium font-['Poppins'] bg-white border border-gray-200 text-gray-700 group-hover:border-violet-300 group-hover:text-violet-900 transition-colors duration-300"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { lang } = useLanguage();

const steps = computed(() => {
  const isId = lang.value === "ID";
  return [
    {
      number: "01",
      tag: isId ? "Riset & Visual" : "Research & Visuals",
      title: isId ? "Arsitektur & Desain UI/UX" : "UI/UX & Visual Architecture",
      subtitle: isId
        ? "Wireframing, Hierarki Visual & Design System"
        : "Wireframing, Visual Hierarchy & Design Systems",
      description: isId
        ? "Memahami kebutuhan pengguna dan memetakan alur interaksi. Membuat wireframe presisi, menentukan skema warna, serta membangun design system konsisten di Figma sebelum penulisan kode."
        : "Understanding core user requirements and mapping interaction flows. Crafting precise wireframes, defining color schemes, and establishing a unified design system in Figma before code implementation.",
      tools: ["Figma", "User Flow", "Design System", "Wireframing"],
    },
    {
      number: "02",
      tag: isId ? "Interaktif & AR" : "Interactive & AR",
      title: isId ? "Pengembangan Game & AR" : "AR & Game Engine Prototyping",
      subtitle: isId
        ? "Logika Permainan, Vuforia AR & Lingkungan 3D"
        : "Gameplay Logic, Vuforia AR & 3D Environments",
      description: isId
        ? "Merancang logika aplikasi interaktif dan augmented reality (AR) di Unity engine. Mengintegrasikan target penanda Vuforia, animasi 3D, serta mekanik game yang responsif."
        : "Building real-time interactive applications and augmented reality (AR) mechanics in Unity. Integrating Vuforia marker tracking, 3D animated assets, and responsive gameplay logic.",
      tools: ["Unity 3D", "Vuforia AR", "C#", "3D Asset Compositing"],
    },
    {
      number: "03",
      tag: isId ? "Full-Stack & Data" : "Full-Stack & Data",
      title: isId
        ? "Integrasi Full-Stack & Web CMS"
        : "Full-Stack & Dynamic Web CMS",
      subtitle: isId
        ? "Arsitektur Web, Supabase & Dashboard Admin"
        : "Web Architecture, Supabase & Admin Dashboards",
      description: isId
        ? "Membangun aplikasi web modern berbasis Vue.js/Vite dan menghubungkannya dengan database Supabase/Firebase. Mengembangkan dashboard CMS untuk manajemen konten dinamis (CRUD)."
        : "Constructing modern web applications with Vue.js and Vite, powered by Supabase/Firebase. Developing intuitive admin dashboards for dynamic content management (CRUD) without app rebuilds.",
      tools: ["Vue.js", "Vite", "Supabase", "Firebase", "REST API"],
    },
    {
      number: "04",
      tag: isId ? "Pengujian & HKI" : "Quality & Deployment",
      title: isId
        ? "Optimasi, HKI & Deployment"
        : "Optimization, HKI & Deployment",
      subtitle: isId
        ? "Pengujian Performa, Hak Cipta (HKI) & Production"
        : "Performance Tuning, Copyright (HKI) & Production",
      description: isId
        ? "Melakukan pengujian performa di berbagai perangkat, optimasi framerate, pendaftaran Hak Kekayaan Intelektual (HKI) untuk aplikasi edukasi, serta rilis versi produksi yang stabil."
        : "Conducting rigorous cross-device testing, optimizing frame rates and memory usage, securing Intellectual Property Rights (HKI), and deploying production-ready builds.",
      tools: [
        "Performance Tuning",
        "Mobile Responsive",
        "HKI Certified",
        "Vite Build",
      ],
    },
  ];
});
</script>

<style scoped>
.process-card {
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.03);
}
</style>
