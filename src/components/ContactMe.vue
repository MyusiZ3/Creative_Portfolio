<template>
  <section
    id="contact"
    class="bg-[#171717] py-16 lg:py-24 pl-6 md:pl-10 lg:pl-16 xl:pl-24 pr-6 md:pr-10 lg:pr-16 xl:pr-24 relative overflow-hidden"
  >
    <div class="w-full max-w-[1600px] mx-auto relative z-10">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="w-full md:w-5/12 lg:w-4/12 space-y-7 flex flex-col items-center md:items-start text-center md:text-left shrink-0"
        >
          <h2
            class="text-3xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight"
          >
            <span class="inline-block whitespace-nowrap">
              <span class="text-[#A754FF]">{{ t("contact_title_1") }}</span>
              {{ t("contact_title_2") }}
            </span>
            <br class="hidden md:block" />
            {{ t("contact_title_3") }}
          </h2>

          <div class="space-y-5 w-full">
            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t("contact_phone") }}</p>
              <div class="flex items-center gap-2 group/item">
                <a
                  href="https://wa.me/6289646347327"
                  target="_blank"
                  class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300"
                >
                  (+62) 896 4634 7327
                </a>
                <button
                  @click="copyToClipboard('089646347327', 'phone')"
                  class="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 opacity-100 md:opacity-0 group-hover/item:opacity-100 transition-all flex items-center gap-1.5"
                >
                  <i
                    class="bi"
                    :class="
                      copyStatus.phone
                        ? 'bi-check-lg text-green-400'
                        : 'bi-copy'
                    "
                  ></i>
                  <span
                    v-if="copyStatus.phone"
                    class="text-[10px] font-bold text-green-400 uppercase tracking-tighter"
                    >Copied</span
                  >
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t("contact_email") }}</p>
              <div class="flex items-center gap-2 group/item">
                <a
                  href="mailto:muhamadsidik.work.id@gmail.com"
                  class="inline-block text-white text-lg font-bold font-['Roboto'] hover:text-[#A754FF] hover:underline transition-colors duration-300"
                >
                  muhamadsidik.work.id@gmail.com
                </a>
                <button
                  @click="
                    copyToClipboard('muhamadsidik.work.id@gmail.com', 'email')
                  "
                  class="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 opacity-100 md:opacity-0 group-hover/item:opacity-100 transition-all flex items-center gap-1.5"
                >
                  <i
                    class="bi"
                    :class="
                      copyStatus.email
                        ? 'bi-check-lg text-green-400'
                        : 'bi-copy'
                    "
                  ></i>
                  <span
                    v-if="copyStatus.email"
                    class="text-[10px] font-bold text-green-400 uppercase tracking-tighter"
                    >Copied</span
                  >
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center md:items-start">
              <p class="text-gray-400 text-sm mb-1">{{ t("contact_addr") }}</p>
              <p
                class="text-white text-lg font-bold font-['Roboto'] text-center md:text-left"
              >
                Bandung, Indonesia
              </p>
            </div>
          </div>

          <div class="space-y-3 flex flex-col items-center lg:items-start">
            <p class="text-gray-400 text-sm">{{ t("contact_socmed") }}</p>
            <div class="flex gap-3">
              <a
                href="https://github.com/MyusiZ3"
                target="_blank"
                class="w-8 h-8 rounded-full bg-[#A754FF] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              >
                <i class="bi bi-github text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/imyusi_"
                target="_blank"
                class="w-8 h-8 rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              >
                <i class="bi bi-instagram text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-sidik-a6757b25b"
                target="_blank"
                class="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              >
                <i class="bi bi-linkedin text-sm"></i>
              </a>
              <!-- Universal Share Button -->
              <button
                @click="sharePortfolio"
                class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:border-violet-500 hover:text-violet-400 transition-all duration-300 relative group/share"
              >
                <i class="bi bi-share-fill text-[10px]"></i>
                <span
                  v-if="copyStatus.share"
                  class="absolute -top-10 left-1/2 -translate-x-1/2 bg-violet-600 text-[10px] px-2 py-1 rounded-md whitespace-nowrap"
                  >Link Copied!</span
                >
              </button>
            </div>
          </div>

          <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              @click="showCVOptions = !showCVOptions"
              class="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-400 text-sm font-medium transition-all duration-300 group"
              :class="
                showCVOptions
                  ? 'bg-white text-black border-white'
                  : 'text-white hover:bg-white hover:text-black'
              "
            >
              {{ t("contact_btn") }}
              <i
                class="bi bi-chevron-right text-xs transition-transform"
                :class="
                  showCVOptions ? 'rotate-90' : 'group-hover:translate-x-1'
                "
              ></i>
            </button>

            <div
              v-if="showCVOptions"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{ opacity: 1, x: 0 }"
              class="flex flex-col sm:flex-row gap-2"
            >
              <a
                href="/doc/CV_Muhamad Sidik_Graphic Designer_Intern_2025.pdf"
                download
                @click="trackDownload('designer')"
                class="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                :class="
                  downloading.designer
                    ? 'bg-green-500 text-white animate-pulse'
                    : 'bg-violet-600 text-white hover:bg-violet-700'
                "
              >
                <i
                  class="bi"
                  :class="downloading.designer ? 'bi-check2-all' : 'bi-palette'"
                ></i>
                {{
                  downloading.designer
                    ? lang === "ID"
                      ? "Mengunduh..."
                      : "Downloading..."
                    : "Designer"
                }}
              </a>
              <a
                href="/doc/CV_Muhamad Sidik_IT_Intern.pdf"
                download
                @click="trackDownload('developer')"
                class="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                :class="
                  downloading.developer
                    ? 'bg-green-500 text-white animate-pulse'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                "
              >
                <i
                  class="bi"
                  :class="
                    downloading.developer ? 'bi-check2-all' : 'bi-code-slash'
                  "
                ></i>
                {{
                  downloading.developer
                    ? lang === "ID"
                      ? "Mengunduh..."
                      : "Downloading..."
                    : "Developer"
                }}
              </a>
            </div>

            <!-- Designed with Figma Badge -->
            <a
              href="https://www.figma.com/design/nlAJcmktDv5cCtASBfbYfW/Updated-Creative-Portfolio-_-Muhamad-Sidik?node-id=0-1&t=W9cHA0ZnXIl8OsD4-1"
              target="_blank"
              rel="noopener noreferrer"
              title="View design in Figma"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-['Poppins'] shadow-sm hover:border-violet-500/60 hover:bg-neutral-800/80 hover:text-white hover:scale-105 transition-all duration-300 select-none group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                alt="Figma"
                class="w-4 h-4 object-contain group-hover:rotate-12 transition-transform duration-300"
              />
              <span class="text-[12px] font-medium tracking-wide">Designed with <span class="text-white font-semibold group-hover:text-violet-300 transition-colors">Figma</span></span>
              <i class="bi bi-box-arrow-up-right text-[10px] text-neutral-400 group-hover:text-violet-300 transition-colors ml-0.5"></i>
            </a>
          </div>

          <div
            class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
          >
            <div class="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                alt="Logo"
                class="w-10 h-10 object-contain filter brightness-200"
              />
              <div class="text-white font-bold leading-tight text-sm text-left">
                <p>Muhamad</p>
                <p>Sidik</p>
              </div>
            </div>

            <!-- Total Views Counter (Minimalist Editorial Layout) -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 400 },
              }"
              class="pt-2"
            >
              <div class="inline-flex items-baseline gap-2 font-mono text-xs text-zinc-400">
                <span class="text-zinc-500 uppercase tracking-widest">// {{ t("contact_views") }}:</span>
                <span class="text-white font-bold tracking-wider">{{ viewCount }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Flush Right Image -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95, x: 40 }"
          :visible="{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1000 },
          }"
          class="w-full md:w-7/12 lg:w-8/12 flex justify-center md:justify-end items-start md:self-start relative order-first md:order-last mb-8 md:mb-0 md:-mt-6 lg:-mt-12 xl:-mt-26 -mr-6 md:-mr-10 lg:-mr-16 xl:-mr-24 overflow-hidden"
        >
          <img
            src="/images/contactme.webp"
            alt="Contact Me"
            class="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain md:object-right transition-transform duration-500"
          />
        </div>
      </div>

      <div class="w-full mt-16 relative">
        <div
          class="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
          ></div>
        </div>

        <div
          class="py-6 overflow-hidden whitespace-nowrap opacity-30 select-none cursor-default relative marquee-section"
        >
          <div
            class="inline-block animate-marquee-slow font-['Poppins'] text-sm sm:text-base tracking-[0.3em] text-zinc-400 pr-4 uppercase"
          >
            CREATIVE DEVELOPER <span class="text-zinc-600">//</span> <span class="text-transparent [-webkit-text-stroke:1px_rgba(161,161,170,0.8)]">CREATIVE DESIGNER</span> <span class="text-zinc-600">//</span> UI/UX ENTHUSIAST <span class="text-zinc-600">//</span>&nbsp;
            CREATIVE DEVELOPER <span class="text-zinc-600">//</span> <span class="text-transparent [-webkit-text-stroke:1px_rgba(161,161,170,0.8)]">CREATIVE DESIGNER</span> <span class="text-zinc-600">//</span> UI/UX ENTHUSIAST <span class="text-zinc-600">//</span>&nbsp;
          </div>
          <div
            class="inline-block animate-marquee-slow font-['Poppins'] text-sm sm:text-base tracking-[0.3em] text-zinc-400 pr-4 uppercase"
          >
            CREATIVE DEVELOPER <span class="text-zinc-600">//</span> <span class="text-transparent [-webkit-text-stroke:1px_rgba(161,161,170,0.8)]">CREATIVE DESIGNER</span> <span class="text-zinc-600">//</span> UI/UX ENTHUSIAST <span class="text-zinc-600">//</span>&nbsp;
            CREATIVE DEVELOPER <span class="text-zinc-600">//</span> <span class="text-transparent [-webkit-text-stroke:1px_rgba(161,161,170,0.8)]">CREATIVE DESIGNER</span> <span class="text-zinc-600">//</span> UI/UX ENTHUSIAST <span class="text-zinc-600">//</span>&nbsp;
          </div>
        </div>

        <div class="pt-8 text-center relative z-30">
          <p
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{
              opacity: 1,
              scale: 1,
              transition: { duration: 800, delay: 200 },
            }"
            class="text-gray-300 font-['Roboto'] text-sm flex items-center justify-center gap-2 group cursor-default"
          >
            &copy; 2026 Muhamad Sidik |
            <span>{{ t("contact_footer") }}</span>
          </p>
        </div>
      </div>
    </div>

    <div
      v-for="heart in heartParticles"
      :key="heart.id"
      class="fixed pointer-events-none z-9999 text-violet-500"
      :style="{
        left: heart.x + 'px',
        top: heart.y + 'px',
        opacity: heart.opacity,
        transform: `translate(-50%, -50%) scale(${heart.scale}) rotate(${heart.rotate}deg)`,
        transition: 'all 0.8s ease-out',
      }"
    >
      <i class="bi bi-heart-fill text-lg"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { t, lang } = useLanguage();

const localTime = ref("");
let timeInterval = null;

const updateLocalTime = () => {
  const options = {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  localTime.value = new Intl.DateTimeFormat("en-US", options).format(
    new Date(),
  );
};

onMounted(() => {
  updateLocalTime();
  timeInterval = setInterval(updateLocalTime, 1000);
});

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval);
});

const showCVOptions = ref(false);
const viewCount = ref("...");
const copyStatus = ref({ phone: false, email: false, share: false });
const downloading = ref({ designer: false, developer: false });

const sharePortfolio = async () => {
  const shareData = {
    title: "Muhamad Sidik | Creative Designer",
    text: "Check out this amazing creative portfolio by Muhamad Sidik!",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: Copy Link
      await copyToClipboard(window.location.href, 'share');
    }
  } catch (err) {
    console.error("Sharing failed:", err);
  }
};

const copyToClipboard = async (text, type) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    copyStatus.value[type] = true;
    setTimeout(() => {
      copyStatus.value[type] = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

const trackDownload = (type) => {
  downloading.value[type] = true;
  setTimeout(() => {
    downloading.value[type] = false;
  }, 3000);
};

// Fetch and increment view count with 258+ base count
const BASE_VIEW_COUNT = 258;

onMounted(async () => {
  const STORAGE_KEY = "porto_editorial_total_views";
  const LAST_VISIT_KEY = "porto_editorial_last_visit";
  const now = Date.now();
  const ONE_HOUR = 3600 * 1000;

  let localCount = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
  if (!localCount || localCount < BASE_VIEW_COUNT) {
    localCount = BASE_VIEW_COUNT;
  }

  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  if (!lastVisit || now - parseInt(lastVisit, 10) > ONE_HOUR) {
    localCount += 1;
    localStorage.setItem(STORAGE_KEY, localCount.toString());
    localStorage.setItem(LAST_VISIT_KEY, now.toString());
  }

  viewCount.value = localCount.toLocaleString();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const response = await fetch(
      "https://api.counterapi.dev/v1/muhamadsidik-porto/visits/up",
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.count === "number" && data.count > 0) {
        const finalCount = Math.max(localCount, data.count + BASE_VIEW_COUNT);
        viewCount.value = finalCount.toLocaleString();
        localStorage.setItem(STORAGE_KEY, finalCount.toString());
      }
    }
  } catch (error) {
    // Keep local stored count (minimum 258+)
  }
});

// Heart Particles Logic
const heartIconRef = ref(null);
const heartParticles = ref([]);
let heartPid = 0;

const spawnHeartParticles = () => {
  if (!heartIconRef.value) return;
  const rect = heartIconRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const count = 12;
  const newParticles = [];

  for (let i = 0; i < count; i++) {
    const id = heartPid++;
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const velocity = 80 + Math.random() * 100;

    const p = {
      id,
      x: centerX,
      y: centerY,
      opacity: 1,
      scale: 0.5 + Math.random() * 1.5,
      rotate: Math.random() * 360,
    };
    newParticles.push(p);
    heartParticles.value.push(p);

    setTimeout(() => {
      p.x += Math.cos(angle) * velocity;
      p.y += Math.sin(angle) * velocity - 40;
      p.opacity = 0;
      p.scale = 0;
      p.rotate += 180;
    }, 50);
  }

  setTimeout(() => {
    heartParticles.value = heartParticles.value.filter(
      (p) => !newParticles.includes(p),
    );
  }, 1000);
};
</script>

<style scoped>
.marquee-section {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
}

.marquee-wrapper {
  display: inline-block;
  white-space: nowrap;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes marquee-slow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-shimmer {
  animation: shimmer 3s infinite linear;
}

.animate-marquee-slow {
  animation: marquee-slow 30s linear infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes eye-blink {
  0%,
  45%,
  55%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
}

.animate-eye-blink {
  animation: eye-blink 3s infinite;
}
</style>
