<template>
  <section id="contact" class="py-20 bg-[#0d1117] text-[#f0f6fc] font-mono border-t-4 border-black relative">
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="mb-12 border-b-4 border-black pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <span class="text-xs font-bold text-[#ff0055] uppercase tracking-widest bg-[#161b22] px-3 py-1 border border-[#ff0055] shadow-[2px_2px_0px_#000] font-silkscreen">
            ✦ HIGH SCORE ENTRY
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold uppercase mt-2 font-pixel leading-tight">
            SEND <span class="text-[#ff0055]">TRANSMISSION</span>
          </h2>
        </div>

        <div class="text-xs text-[#8b949e] bg-[#161b22] px-3 py-2 border-2 border-black font-silkscreen flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#00ff66] animate-ping"></span>
          SIGNAL: <span class="text-[#00ff66] font-bold">100% ONLINE</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Transmission Form -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
          class="lg:col-span-7 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000]"
        >
          <form @submit.prevent="handleSubmit" class="space-y-5">
            
            <!-- Player Name -->
            <div>
              <label class="block text-xs font-bold text-[#00ff66] uppercase mb-1 font-silkscreen">
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
              <label class="block text-xs font-bold text-[#00f0ff] uppercase mb-1 font-silkscreen">
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
              <label class="block text-xs font-bold text-[#ffd700] uppercase mb-1 font-silkscreen">
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
              class="w-full py-4 bg-[#ff0055] text-white font-extrabold text-xs uppercase border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] transition-all flex items-center justify-center gap-2 font-silkscreen"
            >
              <i class="bi bi-trophy-fill text-yellow-300 text-sm"></i>
              <span>{{ isSubmitting ? "TRANSMITTING..." : "SUBMIT HIGH SCORE MESSAGE" }}</span>
            </button>

            <!-- Success Alert -->
            <div v-if="submitted" class="p-3 bg-[#00ff66]/20 border-2 border-[#00ff66] text-[#00ff66] text-xs font-bold text-center font-silkscreen">
              ✦ TRANSMISSION SENT DIRECTLY TO MUHAMADSIDIK.WORK.ID@GMAIL.COM!
            </div>
            <div v-if="submitError" class="p-3 bg-[#ffd700]/20 border-2 border-[#ffd700] text-[#ffd700] text-xs font-bold text-center font-silkscreen">
              ✦ OPENING EMAIL CLIENT TRANSMISSION FALLBACK...
            </div>

          </form>
        </div>

        <!-- Social Badges & Direct Links -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
          class="lg:col-span-5 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between space-y-6"
        >
          <div>
            <h3 class="text-sm font-bold text-[#ffd700] uppercase tracking-wider border-b-2 border-black pb-3 mb-4 font-silkscreen">
              CONNECT & NETWORK
            </h3>

            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00ff66] hover:bg-[#1f242c] transition-all group"
              >
                <div class="flex items-center gap-3">
                  <span class="text-xl flex items-center justify-center w-7 h-7 group-hover:scale-110 transition-transform">
                    <i :class="link.icon"></i>
                  </span>
                  <div>
                    <div class="text-xs font-bold text-[#f0f6fc] group-hover:text-[#00ff66] transition-colors font-silkscreen">
                      {{ link.name }}
                    </div>
                    <div class="text-[10px] text-[#8b949e] font-mono">{{ link.handle }}</div>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#00ff66] font-silkscreen flex items-center gap-1">
                  <span>CONNECT</span>
                  <i class="bi bi-play-fill text-sm group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
            </div>
          </div>

          <!-- Download CV Section (Pixel-Themed) -->
          <div class="border-t-2 border-black pt-4">
            <div class="text-xs font-bold text-[#00f0ff] uppercase mb-2 font-silkscreen">
              DOWNLOAD LOOT / RESUME:
            </div>
            <div class="grid grid-cols-2 gap-2">
              <a
                href="/doc/CV_Muhamad Sidik_Graphic Designer_Intern_2025.pdf"
                download
                class="p-2.5 bg-[#0d1117] border-2 border-black text-[#f0f6fc] hover:text-[#00ff66] hover:border-[#00ff66] text-[10px] font-bold font-silkscreen text-center flex items-center justify-center gap-1.5 transition-all shadow-[2px_2px_0px_#000]"
              >
                <i class="bi bi-palette text-xs text-[#ff0055]"></i>
                <span>DESIGN CV</span>
              </a>
              <a
                href="/doc/CV_Muhamad Sidik_IT_Intern.pdf"
                download
                class="p-2.5 bg-[#0d1117] border-2 border-black text-[#f0f6fc] hover:text-[#00f0ff] hover:border-[#00f0ff] text-[10px] font-bold font-silkscreen text-center flex items-center justify-center gap-1.5 transition-all shadow-[2px_2px_0px_#000]"
              >
                <i class="bi bi-code-slash text-xs text-[#00f0ff]"></i>
                <span>DEV CV</span>
              </a>
            </div>
          </div>

          <div class="pt-4 border-t-2 border-black text-center text-[10px] text-[#8b949e] font-silkscreen">
            © 2026 MUHAMAD SIDIK • PIXEL ARCADE SYSTEM
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
const submitError = ref(false);

const sendMailtoFallback = () => {
  const subject = encodeURIComponent(`[PIXEL TRANSMISSION] Message from ${form.value.name}`);
  const body = encodeURIComponent(`Player Name: ${form.value.name}\nPlayer Email: ${form.value.email}\n\nTransmission Message:\n${form.value.message}`);
  window.location.href = `mailto:muhamadsidik.work.id@gmail.com?subject=${subject}&body=${body}`;
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = false;

  try {
    const response = await fetch('https://formsubmit.co/ajax/muhamadsidik.work.id@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        _subject: `[PIXEL ARCADE] Transmission from ${form.value.name}`
      })
    });

    if (response.ok) {
      submitted.value = true;
      form.value = { name: '', email: '', message: '' };
    } else {
      submitError.value = true;
      sendMailtoFallback();
    }
  } catch (err) {
    console.error("Submission failed, using mailto fallback", err);
    submitError.value = true;
    sendMailtoFallback();
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitted.value = false;
      submitError.value = false;
    }, 6000);
  }
};

const socialLinks = [
  { name: 'GITHUB', handle: '@MyusiZ3', icon: 'bi bi-github text-[#00ff66]', url: 'https://github.com/MyusiZ3' },
  { name: 'LINKEDIN', handle: 'Muhamad Sidik', icon: 'bi bi-linkedin text-[#00f0ff]', url: 'https://www.linkedin.com/in/muhamad-sidik-a6757b25b' },
  { name: 'INSTAGRAM', handle: '@imyusi_', icon: 'bi bi-instagram text-[#ff0055]', url: 'https://www.instagram.com/imyusi_' },
  { name: 'WHATSAPP', handle: '(+62) 896 4634 7327', icon: 'bi bi-whatsapp text-[#00ff66]', url: 'https://wa.me/6289646347327' }
];
</script>
