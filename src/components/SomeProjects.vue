<template>
  <section id="projects" class="bg-white py-20 px-6 lg:px-40 relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <!-- Title -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
        class="text-3xl lg:text-[48px] font-extrabold font-['Poppins'] text-[#1a1a2e] leading-tight mb-4"
      >
        Some Projects I've Designed &amp;<br />
        Developed
      </h2>

      <!-- Subtitle -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
        class="text-[#555] font-['Roboto'] text-[13px] lg:text-[15px] max-w-xl leading-relaxed mb-12 lg:mb-16"
      >
        A selection of works spanning UI/UX design, game development, AR/VR,
        and web-based platforms — built during academic and collaborative
        projects.
      </p>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          v-motion
          :initial="{ opacity: 0, y: 40, scale: 0.95 }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              delay: index * 80,
              ease: 'easeOut',
            },
          }"
          class="project-card group relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-4/3 cursor-pointer"
          :style="{ background: project.bg }"
        >
          <!-- Project Image -->
          <img
            :src="project.image"
            :alt="project.name"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          ></div>

          <!-- Text overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-10">
            <h3
              class="text-white font-['Poppins'] font-bold text-base lg:text-xl leading-tight mb-1 drop-shadow-lg"
            >
              {{ project.name }}
            </h3>
            <p
              class="text-white/80 font-['Roboto'] text-xs lg:text-sm font-medium drop-shadow-md"
            >
              {{ project.category }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom accent -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 800, ease: 'easeOut' } }"
        class="flex justify-end mt-10"
      >
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 35L20 5L35 35"
            stroke="#7c3aed"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 35L40 5L55 35"
            stroke="#7c3aed"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: "Luxion RideXP",
    category: "Arcade Game Project",
    bg: "#C0392B",
    image: "/images/projects/luxion_ridexp.png",
  },
  {
    name: "MindEscape: VR Chamber",
    category: "VR Game Project",
    bg: "#7c3aed",
    image: "/images/projects/mindescape_vr.png",
  },
  {
    name: "MathRift",
    category: "Educational 2D Platformer Game",
    bg: "#1a3a4a",
    image: "/images/projects/mathrift.png",
  },
  {
    name: "Stellar Adventures",
    category: "AR Game Project",
    bg: "#1a2a3a",
    image: "/images/projects/stellar_adventures.png",
  },
  {
    name: "U-Asprak",
    category: "Mobile App Design",
    bg: "#5b6abf",
    image: "/images/projects/u_asprak.png",
  },
  {
    name: "empEDU",
    category: "Mobile App Design",
    bg: "#2a4a3a",
    image: "/images/projects/empedu.png",
  },
  {
    name: "IUDEX",
    category: "Team Portfolio Web Design",
    bg: "#6a5acd",
    image: "/images/projects/iudex.png",
  },
  {
    name: "Arch",
    category: "Personal Portfolio Web Design",
    bg: "#7c3aed",
    image: "/images/projects/arch.png",
  },
  {
    name: "Merch",
    category: "Merch design for Event",
    bg: "#8b5cf6",
    image: "/images/projects/merch.png",
  },
];
</script>

<style scoped>
.project-card {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}
</style>
