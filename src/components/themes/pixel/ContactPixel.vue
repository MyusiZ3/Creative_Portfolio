<template>
  <section id="contact" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-[#ff0055] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#ff0055] shadow-[2px_2px_0px_#000]">
            ✦ HIGH SCORE ENTRY
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold uppercase mt-2">
            SEND <span class="text-[#ff0055]">TRANSMISSION</span>
          </h2>
        </div>

        <div class="text-xs text-[#8b949e] bg-[#161b22] px-3 py-2 border-2 border-black">
          SIGNAL: <span class="text-[#00ff66] font-bold">100% ONLINE</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Transmission Form -->
        <div class="lg:col-span-7 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000]">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            
            <!-- Player Name -->
            <div>
              <label class="block text-xs font-bold text-[#00ff66] uppercase mb-1">
                PLAYER NAME [ID]:
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="ENTER YOUR NAME..."
                class="w-full bg-[#0d1117] border-2 border-black p-3 text-xs font-mono text-[#f0f6fc] focus:border-[#00ff66] focus:outline-none transition-colors"
              />
            </div>

            <!-- Player Email -->
            <div>
              <label class="block text-xs font-bold text-[#00f0ff] uppercase mb-1">
                PLAYER EMAIL:
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="PLAYER@DOMAIN.COM..."
                class="w-full bg-[#0d1117] border-2 border-black p-3 text-xs font-mono text-[#f0f6fc] focus:border-[#00f0ff] focus:outline-none transition-colors"
              />
            </div>

            <!-- Transmission Message -->
            <div>
              <label class="block text-xs font-bold text-[#ffd700] uppercase mb-1">
                TRANSMISSION MESSAGE:
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="ENTER YOUR TRANSMISSION IN DETAIL..."
                class="w-full bg-[#0d1117] border-2 border-black p-3 text-xs font-mono text-[#f0f6fc] focus:border-[#ffd700] focus:outline-none transition-colors"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-[#ff0055] text-white font-extrabold text-xs uppercase border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] transition-all flex items-center justify-center gap-2"
            >
              <span>🏆</span>
              <span>{{ isSubmitting ? "TRANSMITTING..." : "SUBMIT HIGH SCORE MESSAGE" }}</span>
            </button>

            <!-- Success Alert -->
            <div v-if="submitted" class="p-3 bg-[#00ff66]/20 border-2 border-[#00ff66] text-[#00ff66] text-xs font-bold text-center">
              ✦ TRANSMISSION RECEIVED! THANK YOU PLAYER 1.
            </div>

          </form>
        </div>

        <!-- Social Badges & Direct Links -->
        <div class="lg:col-span-5 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-[#ffd700] uppercase tracking-wider border-b-2 border-[#30363d] pb-3 mb-4">
              CONNECT & NETWORK
            </h3>

            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="p-3 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00ff66] transition-colors group"
              >
                <div class="flex items-center gap-3">
                  <span class="text-xl group-hover:scale-110 transition-transform">{{ link.icon }}</span>
                  <div>
                    <div class="text-xs font-bold text-[#f0f6fc] group-hover:text-[#00ff66] transition-colors">
                      {{ link.name }}
                    </div>
                    <div class="text-[10px] text-[#8b949e]">{{ link.handle }}</div>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#00ff66]">CONNECT ►</span>
              </a>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t-2 border-[#30363d] text-center text-[10px] text-[#8b949e]">
            © {{ new Date().getFullYear() }} MUHAMAD SIDIK • PIXEL ARCADE SYSTEM
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitted = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
    form.value = { name: '', email: '', message: '' };
    setTimeout(() => {
      submitted.value = false;
    }, 5000);
  }, 1000);
};

const socialLinks = [
  { name: 'GITHUB', handle: '@muhamadsidik', icon: '💻', url: 'https://github.com' },
  { name: 'LINKEDIN', handle: 'Muhamad Sidik', icon: '💼', url: 'https://linkedin.com' },
  { name: 'BEHANCE', handle: 'Portfolio Showcase', icon: '🎨', url: 'https://behance.net' },
  { name: 'WHATSAPP', handle: '+62 8xx-xxxx-xxxx', icon: '💬', url: 'https://wa.me' }
];
</script>
