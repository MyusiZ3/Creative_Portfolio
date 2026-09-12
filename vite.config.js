import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/vue/") || id.includes("node_modules/vue-router/")) {
            return "vue-vendor";
          }
          if (
            id.includes("node_modules/gsap") ||
            id.includes("node_modules/animejs") ||
            id.includes("node_modules/@vueuse/motion")
          ) {
            return "animation-vendor";
          }
          if (
            id.includes("node_modules/@vercel/analytics") ||
            id.includes("node_modules/@vercel/speed-insights")
          ) {
            return "vercel-vendor";
          }
        },
      },
    },
  },
});
