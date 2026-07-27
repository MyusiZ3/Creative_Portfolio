<template>
  <section
    id="home"
    class="relative pt-24 pb-12 sm:pb-16 bg-[#0d1117] text-[#f0f6fc] font-mono selection:bg-[#00ff66] selection:text-black overflow-hidden"
  >
    <!-- Subtle CRT Grid Background -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Arcade Banner Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, ease: 'easeOut' },
        }"
        class="mb-8 border-4 border-[#00f0ff] bg-[#161b22] p-4 shadow-[6px_6px_0px_#000000] flex flex-wrap items-center justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 bg-[#00ff66] animate-ping inline-block"></span>
          <span
            @click="handleSystemOnlineClick"
            class="text-xs sm:text-sm font-bold text-[#00ff66] tracking-widest uppercase font-silkscreen cursor-pointer hover:underline transition-all"
            title="Click 3x or press ↑↑↓↓←→←→BA to unlock God Mode!"
          >
            SYSTEM ONLINE • PLAYER 1 READY
          </span>
        </div>
        <div
          class="flex flex-wrap items-center gap-2 text-xs text-[#8b949e] font-silkscreen"
        >
          <VisitorCounter themeOverride="pixel" />
          <button
            @click="insertCoin"
            @mouseenter="playBlipSfx"
            class="px-2 py-1 bg-[#ff0055] border-2 border-black text-white font-bold hover:bg-[#ff2a70] active:translate-y-0.5 shadow-[2px_2px_0px_#000] cursor-pointer flex items-center gap-1.5 transition-all"
            :class="{ 'animate-bounce border-[#ffd700] bg-[#ff2a70]': isCoinShaking }"
            title="Click to Insert Coin!"
          >
            <i class="bi bi-coin text-[#ffd700] animate-bounce"></i>
            <span>CREDITS: {{ creditsCount.toString().padStart(2, "0") }}</span>
          </button>
          <span
            class="px-2 py-1 bg-[#0d1117] border border-[#30363d] text-[#ffd700] font-bold"
            >SCORE: {{ currentScore.toLocaleString() }}</span
          >
        </div>
      </div>

      <!-- Main Character Grid (Bento Layout) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <!-- Left Pane: Player Portrait & Title -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 700, delay: 150, ease: 'easeOut' },
          }"
          class="lg:col-span-7 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between relative group"
          :class="{
            'border-[#ffd700] shadow-[0_0_25px_#ffd700]': isCheatActive,
          }"
        >
          <div class="space-y-4">
            <!-- Level & Class Tag -->
            <div class="flex flex-wrap items-center gap-2 font-silkscreen">
              <span
                class="px-3 py-1 font-bold text-xs uppercase shadow-[2px_2px_0px_#000000] transition-all"
                :class="
                  isCheatActive
                    ? 'bg-[#ff0055] text-white animate-pulse'
                    : 'bg-[#ffd700] text-black'
                "
              >
                {{ isCheatActive ? "LVL 999 GOD MODE" : "LVL 99 CREATIVE DEV" }}
              </span>
              <span
                class="px-3 py-1 bg-[#00ff66] text-black font-bold text-xs uppercase shadow-[2px_2px_0px_#000000]"
              >
                GAME DEV & XR
              </span>
              <span
                class="px-3 py-1 bg-[#ff0055] text-white font-bold text-xs uppercase shadow-[2px_2px_0px_#000000]"
              >
                UI/UX SPECIALIST
              </span>
            </div>

            <!-- Big Pixel Title -->
            <h1
              class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0f6fc] tracking-tight leading-tight uppercase font-pixel py-2"
            >
              MUHAMAD
              <span :class="isCheatActive ? 'text-[#ffd700]' : 'text-[#00ff66]'"
                >SIDIK</span
              >
            </h1>

            <p
              class="text-sm sm:text-base text-[#8b949e] leading-relaxed pt-2 font-mono"
            >
              {{
                isId
                  ? "Creative Developer & Game Developer yang berfokus menciptakan pengalaman interaktif imersif (Arcade Games, VR/AR, dan UI/UX modern)."
                  : "Creative Developer & Game Developer crafting immersive interactive experiences spanning Arcade Games, VR/AR, and modern UI/UX."
              }}
            </p>
          </div>

          <!-- Player Stat Bars (Interactive RPG Restorative Bars) -->
          <div class="mt-6 pt-5 border-t-2 border-[#30363d] space-y-4 relative">
            <!-- HP Bar -->
            <div
              @click="restoreHp"
              @mouseenter="playBlipSfx"
              class="group cursor-pointer select-none p-1.5 -m-1.5 rounded hover:bg-[#161b22]/90 border border-transparent hover:border-[#00ff66]/30 transition-all relative"
              title="Click to Restore HP (-1 Credit, +30 HP, +200 PTS)"
            >
              <div
                class="flex justify-between items-center text-xs font-bold mb-1.5 font-silkscreen gap-2"
              >
                <div class="text-[#00ff66] flex items-center gap-1.5 min-w-0">
                  <i class="bi bi-heart-pulse-fill animate-pulse shrink-0"></i>
                  <span class="truncate">STAMINA (HP)</span>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="text-[9px] bg-[#00ff66]/15 text-[#00ff66] px-1.5 py-0.5 border border-[#00ff66]/30 uppercase group-hover:bg-[#00ff66]/30 group-hover:border-[#00ff66] transition-all">
                    +HEAL (-1🪙)
                  </span>
                  <span class="text-[#00ff66] font-mono text-xs">{{
                    isCheatActive ? "9999/9999" : `${hpValue}/100`
                  }}</span>
                </div>
              </div>
              <div class="h-3.5 w-full bg-[#0d1117] border-2 border-black p-0.5 shadow-[inset_0_0_4px_#000]">
                <div
                  class="h-full bg-[#00ff66] transition-all duration-500 shadow-[0_0_8px_#00ff66]"
                  :style="{ width: isCheatActive ? '100%' : `${hpValue}%` }"
                ></div>
              </div>
            </div>

            <!-- MP Bar -->
            <div
              @click="restoreMp"
              @mouseenter="playBlipSfx"
              class="group cursor-pointer select-none p-1.5 -m-1.5 rounded hover:bg-[#161b22]/90 border border-transparent hover:border-[#00f0ff]/30 transition-all relative"
              title="Click to Restore MP (-1 Credit, +30 MP, +200 PTS)"
            >
              <div
                class="flex justify-between items-center text-xs font-bold mb-1.5 font-silkscreen gap-2"
              >
                <div class="text-[#00f0ff] flex items-center gap-1.5 min-w-0">
                  <i class="bi bi-lightning-charge-fill animate-pulse shrink-0"></i>
                  <span class="truncate">MANA (MP)</span>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="text-[9px] bg-[#00f0ff]/15 text-[#00f0ff] px-1.5 py-0.5 border border-[#00f0ff]/30 uppercase group-hover:bg-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-all">
                    +HEAL (-1🪙)
                  </span>
                  <span class="text-[#00f0ff] font-mono text-xs">{{
                    isCheatActive ? "9999/9999" : `${mpValue}/100`
                  }}</span>
                </div>
              </div>
              <div class="h-3.5 w-full bg-[#0d1117] border-2 border-black p-0.5 shadow-[inset_0_0_4px_#000]">
                <div
                  class="h-full bg-[#00f0ff] transition-all duration-500 shadow-[0_0_8px_#00f0ff]"
                  :style="{ width: isCheatActive ? '100%' : `${mpValue}%` }"
                ></div>
              </div>
            </div>

            <!-- Floating Stat Notifications (HP/MP Popups) -->
            <transition-group name="coin-float">
              <span
                v-for="popup in statPopups"
                :key="popup.id"
                class="absolute left-1/2 -top-6 -translate-x-1/2 text-xs font-silkscreen font-extrabold pointer-events-none drop-shadow-[2px_2px_0px_#000] z-20 whitespace-nowrap"
                :class="{
                  'text-[#00ff66]': popup.type === 'hp',
                  'text-[#00f0ff]': popup.type === 'mp',
                  'text-[#ffd700]': popup.type === 'coin',
                  'text-[#ff0055] animate-bounce': popup.type === 'error'
                }"
              >
                {{ popup.text }}
              </span>
            </transition-group>
          </div>

          <!-- CTA Buttons -->
          <div
            class="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 font-silkscreen"
          >
            <button
              @click="showMinigame = true"
              @mouseenter="playBlipSfx"
              class="flex-1 justify-center px-2 sm:px-5 py-2.5 sm:py-3 bg-[#00ff66] text-black font-extrabold text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-1 sm:gap-1.5 text-center whitespace-nowrap cursor-pointer"
            >
              <i class="bi bi-controller text-xs sm:text-base shrink-0"></i>
              <span class="whitespace-nowrap">{{
                isId ? "PLAY MINIGAME" : "PLAY MINIGAME"
              }}</span>
            </button>

            <a
              href="#projects"
              @mouseenter="playBlipSfx"
              class="flex-1 justify-center px-2 sm:px-5 py-2.5 sm:py-3 bg-[#ffd700] text-black font-extrabold text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all flex items-center gap-1 sm:gap-1.5 text-center whitespace-nowrap"
            >
              <i
                class="bi bi-folder-symlink-fill text-xs sm:text-base shrink-0"
              ></i>
              <span class="whitespace-nowrap">{{
                isId ? "PROYEK SAYA" : "VIEW PROJECTS"
              }}</span>
            </a>

            <a
              href="#contact"
              @mouseenter="playBlipSfx"
              class="flex-1 justify-center px-2 sm:px-5 py-2.5 sm:py-3 bg-[#161b22] text-[#00f0ff] font-extrabold text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase border-2 border-[#00f0ff] shadow-[3px_3px_0px_#000000] hover:bg-[#00f0ff]/10 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all flex items-center gap-1 sm:gap-1.5 text-center whitespace-nowrap"
            >
              <i class="bi bi-send-fill text-xs sm:text-base shrink-0"></i>
              <span class="whitespace-nowrap">{{
                isId ? "KIRIM TRANSMISI" : "SEND TRANSMISSION"
              }}</span>
            </a>
          </div>
        </div>

        <!-- Right Pane: Skill Attributes Grid -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 700, delay: 300, ease: 'easeOut' },
          }"
          class="lg:col-span-5 bg-[#161b22] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between"
        >
          <div>
            <div
              class="flex items-center justify-between border-b-2 border-[#30363d] pb-3 mb-4 font-silkscreen"
            >
              <h3
                class="text-xs font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-2"
              >
                <i class="bi bi-shield-lock-fill text-sm"></i>
                <span>ATTRIBUTES & STATS</span>
              </h3>
              <span class="text-[10px] text-[#8b949e]">EQUIPPED</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="stat in stats"
                :key="stat.name"
                @mouseenter="playBlipSfx"
                class="p-3 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00f0ff] transition-colors cursor-pointer"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="text-xl flex items-center justify-center w-8 h-8 bg-[#161b22] border border-black"
                  >
                    <i :class="stat.icon"></i>
                  </span>
                  <div>
                    <div class="text-xs font-bold text-[#f0f6fc] font-mono">
                      {{ stat.name }}
                    </div>
                    <div class="text-[10px] text-[#8b949e] font-mono">
                      {{ stat.desc }}
                    </div>
                  </div>
                </div>
                <div class="text-right font-silkscreen">
                  <div class="text-xs font-bold text-[#00ff66]">
                    +{{ stat.val }}
                  </div>
                  <div class="text-[9px] text-[#ffd700] uppercase">
                    {{ stat.tier }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Education & Language Hero Highlights -->
            <div
              class="mt-4 pt-4 border-t-2 border-[#30363d] space-y-2.5 font-mono"
            >
              <!-- Education Highlight -->
              <div
                class="p-2.5 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#ffd700] transition-colors"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="text-base text-[#ffd700] flex items-center justify-center w-7 h-7 bg-[#161b22] border border-black shrink-0"
                  >
                    <i class="bi bi-mortarboard-fill"></i>
                  </span>
                  <div>
                    <div
                      class="text-[11px] font-bold text-[#f0f6fc] font-silkscreen"
                    >
                      TELKOM UNIVERSITY
                    </div>
                    <div class="text-[9px] text-[#8b949e]">
                      {{ t("edu_1_desc") }}
                    </div>
                  </div>
                </div>
                <div class="text-right font-silkscreen shrink-0">
                  <div class="text-[10px] font-bold text-[#ffd700]">
                    GPA 3.81
                  </div>
                  <div class="text-[8px] text-[#00ff66] uppercase">
                    {{ isId ? "2022 - SEKARANG" : "2022 - PRESENT" }}
                  </div>
                </div>
              </div>

              <!-- Language Highlight -->
              <div
                class="p-2.5 bg-[#0d1117] border-2 border-black flex items-center justify-between hover:border-[#00f0ff] transition-colors"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="text-base text-[#00f0ff] flex items-center justify-center w-7 h-7 bg-[#161b22] border border-black shrink-0"
                  >
                    <i class="bi bi-translate"></i>
                  </span>
                  <div>
                    <div
                      class="text-[11px] font-bold text-[#f0f6fc] font-silkscreen"
                    >
                      {{ isId ? "KEMAMPUAN BAHASA" : "LANGUAGE SKILLS" }}
                    </div>
                    <div class="text-[9px] text-[#8b949e]">
                      {{
                        isId
                          ? "ID: Asli (Native) • EN: Menengah (B1 - EPRT 483)"
                          : "ID: Native • EN: Intermediate (B1 - EPRT 483)"
                      }}
                    </div>
                  </div>
                </div>
                <div class="text-right font-silkscreen shrink-0">
                  <div class="text-[10px] font-bold text-[#00f0ff]">
                    B1 READY
                  </div>
                  <div class="text-[8px] text-[#00ff66] uppercase">
                    {{ isId ? "DWIBAHASA" : "BILINGUAL" }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Insert Coin Footer Prompt -->
          <div
            class="mt-6 pt-4 border-t-2 border-[#30363d] text-center font-pixel relative"
          >
            <button
              @click="insertCoin"
              @mouseenter="playBlipSfx"
              class="w-full py-2 bg-[#ff0055] hover:bg-[#ff2a70] text-white border-2 border-black font-silkscreen text-[10px] sm:text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <i class="bi bi-coin text-[#ffd700] animate-bounce"></i>
              <span>▲ INSERT COIN TO EXPLORE (+100 PTS) ▲</span>
            </button>

            <!-- Floating Popups for Coins -->
            <transition-group name="coin-float">
              <span
                v-for="popup in coinPopups"
                :key="popup.id"
                class="absolute left-1/2 -top-6 -translate-x-1/2 text-xs font-silkscreen text-[#ffd700] font-extrabold pointer-events-none drop-shadow-[2px_2px_0px_#000]"
              >
                +100 PTS 🪙
              </span>
            </transition-group>
          </div>
        </div>
      </div>
    </div>

    <!-- Konami Code Easter Egg Modal Notification -->
    <Teleport to="body">
      <div
        v-if="showCheatModal"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      >
        <div
          class="bg-[#0a0d14] text-white border-4 border-[#ffd700] p-6 sm:p-8 max-w-md w-full shadow-[8px_8px_0px_#ffd700] font-silkscreen relative text-center"
        >
          <div class="text-4xl mb-3 text-[#ffd700] animate-bounce">🎮</div>
          <h3
            class="text-lg sm:text-xl font-bold text-[#00ff66] uppercase mb-2"
          >
            SECRET CHEAT UNLOCKED!
          </h3>
          <p class="text-xs text-[#8b949e] font-mono mb-4 leading-relaxed">
            KONAMI CODE DETECTED: <br />
            <span class="text-[#ffd700] font-bold">↑ ↑ ↓ ↓ ← → ← → B A</span>
          </p>

          <div
            class="bg-[#161b22] border-2 border-black p-4 text-left text-xs font-mono space-y-2 mb-6 text-[#f0f6fc]"
          >
            <div class="flex justify-between text-[#00ff66]">
              <span>✦ GOD MODE:</span>
              <span>ACTIVATED</span>
            </div>
            <div class="flex justify-between text-[#00f0ff]">
              <span>✦ CREDITS:</span>
              <span>99 COINS</span>
            </div>
            <div class="flex justify-between text-[#ffd700]">
              <span>✦ STAMINA & MANA:</span>
              <span>9999 / 9999</span>
            </div>
            <div class="flex justify-between text-[#ff0055]">
              <span>✦ CHEAT STATUS:</span>
              <span>INVINCIBLE</span>
            </div>
          </div>

          <button
            @click="closeCheatModal"
            class="w-full py-3 bg-[#00ff66] text-black font-extrabold border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#00e055] cursor-pointer text-xs uppercase"
          >
            CONTINUE WITH GOD MODE ★
          </button>
        </div>
      </div>
    </Teleport>

    <!-- 8-Bit Bug Defender Arcade Minigame Modal -->
    <BugCatcherMinigame
      :show="showMinigame"
      @close="showMinigame = false"
      @add-score="(pts) => (currentScore += pts)"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useLanguage } from "@/composables/useLanguage";
import { usePixelAudio } from "@/composables/usePixelAudio";
import VisitorCounter from "@/components/common/VisitorCounter.vue";
import BugCatcherMinigame from "./BugCatcherMinigame.vue";

const { t, lang } = useLanguage();
const isId = computed(() => lang.value === "ID");
const { playCoinSfx, playBlipSfx, playFanfareSfx, playPowerupSfx, playExplosionSfx } = usePixelAudio();

const showMinigame = ref(false);

const getSavedStorage = (key, defaultVal) => {
  try {
    const val = localStorage.getItem(key);
    if (val !== null) {
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed)) return parsed;
    }
  } catch (e) {}
  return defaultVal;
};

const creditsCount = ref(getSavedStorage("pixel_arcade_credits", 0));
const currentScore = ref(getSavedStorage("pixel_arcade_score", 12500));
const hpValue = ref(getSavedStorage("pixel_arcade_hp", 70));
const mpValue = ref(getSavedStorage("pixel_arcade_mp", 50));

watch(
  [currentScore, creditsCount, hpValue, mpValue],
  ([newScore, newCredits, newHp, newMp]) => {
    try {
      localStorage.setItem("pixel_arcade_score", newScore);
      localStorage.setItem("pixel_arcade_credits", newCredits);
      localStorage.setItem("pixel_arcade_hp", newHp);
      localStorage.setItem("pixel_arcade_mp", newMp);
    } catch (e) {}
  },
  { immediate: true }
);

const coinPopups = ref([]);
const statPopups = ref([]);
const isCoinShaking = ref(false);
const isCheatActive = ref(false);
const showCheatModal = ref(false);

const insertCoin = () => {
  if (isCheatActive.value) {
    playCoinSfx();
    creditsCount.value += 1;
    addStatPopup("+1 CREDIT (GOD MODE) 🪙", "coin");
    return;
  }

  if (currentScore.value < 100) {
    playExplosionSfx();
    addStatPopup("NEED 100 PTS! Play Minigame 🎮", "error");
    return;
  }

  playCoinSfx();
  creditsCount.value += 1;
  currentScore.value -= 100;
  addStatPopup("+1 COIN (-100 PTS) 🪙", "coin");
};

const triggerNoCoinAlert = (msg) => {
  isCoinShaking.value = true;
  setTimeout(() => (isCoinShaking.value = false), 600);
  addStatPopup(msg, 'error');
};

const addStatPopup = (text, type) => {
  const id = Date.now() + Math.random();
  statPopups.value.push({ id, text, type });
  setTimeout(() => {
    statPopups.value = statPopups.value.filter((p) => p.id !== id);
  }, 1200);
};

const restoreHp = () => {
  if (isCheatActive.value) return;
  if (creditsCount.value <= 0) {
    playExplosionSfx();
    triggerNoCoinAlert("NO COINS! Click INSERT COIN 🪙");
    return;
  }
  if (hpValue.value >= 100) {
    playBlipSfx();
    addStatPopup("HP FULL! 💚", "hp");
    return;
  }
  creditsCount.value -= 1;
  hpValue.value = Math.min(100, hpValue.value + 30);
  playPowerupSfx();
  addStatPopup("+30 HP 💚", "hp");
};

const restoreMp = () => {
  if (isCheatActive.value) return;
  if (creditsCount.value <= 0) {
    playExplosionSfx();
    triggerNoCoinAlert("NO COINS! Click INSERT COIN 🪙");
    return;
  }
  if (mpValue.value >= 100) {
    playBlipSfx();
    addStatPopup("MP FULL! 💙", "mp");
    return;
  }
  creditsCount.value -= 1;
  mpValue.value = Math.min(100, mpValue.value + 30);
  playPowerupSfx();
  addStatPopup("+30 MP 💙", "mp");
};

// Konami Code Detection
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;
const systemOnlineClicks = ref(0);

const normalizeKey = (e) => {
  if (e.key === "ArrowUp" || e.code === "ArrowUp") return "ArrowUp";
  if (e.key === "ArrowDown" || e.code === "ArrowDown") return "ArrowDown";
  if (e.key === "ArrowLeft" || e.code === "ArrowLeft") return "ArrowLeft";
  if (e.key === "ArrowRight" || e.code === "ArrowRight") return "ArrowRight";
  if ((e.key && e.key.toLowerCase() === "b") || e.code === "KeyB") return "b";
  if ((e.key && e.key.toLowerCase() === "a") || e.code === "KeyA") return "a";
  return e.key;
};

const handleKeyDown = (e) => {
  // Prevent page scroll when typing arrow keys for Konami code
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    // Only prevent default if focus is not in an input/textarea
    if (
      document.activeElement.tagName !== "INPUT" &&
      document.activeElement.tagName !== "TEXTAREA"
    ) {
      e.preventDefault();
    }
  }

  const inputKey = normalizeKey(e);
  const expectedKey = konamiCode[konamiIndex];

  if (inputKey === expectedKey) {
    konamiIndex++;
    playBlipSfx();
    console.log(
      `[🎮 KONAMI CODE] Progress: (${konamiIndex}/${konamiCode.length}) -> Matched '${inputKey}'`,
    );
    if (konamiIndex === konamiCode.length) {
      triggerKonamiCheat();
      konamiIndex = 0;
    }
  } else {
    if (inputKey === konamiCode[0]) {
      konamiIndex = 1;
      playBlipSfx();
      console.log(
        `[🎮 KONAMI CODE] Restarted: (1/${konamiCode.length}) -> Matched '${inputKey}'`,
      );
    } else {
      if (konamiIndex > 0) {
        console.log(
          `[🎮 KONAMI CODE] Reset. Received '${inputKey}', expected '${expectedKey}'`,
        );
      }
      konamiIndex = 0;
    }
  }
};

const triggerKonamiCheat = () => {
  isCheatActive.value = true;
  showCheatModal.value = true;
  creditsCount.value = 99;
  currentScore.value += 99900;
  playFanfareSfx();
  console.log("[🎮 GOD MODE ACTIVATED] Welcome, Player 1!");
};

const handleSystemOnlineClick = () => {
  playBlipSfx();
  systemOnlineClicks.value++;
  if (systemOnlineClicks.value >= 3) {
    triggerKonamiCheat();
    systemOnlineClicks.value = 0;
  }
};

const closeCheatModal = () => {
  showCheatModal.value = false;
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

const stats = computed(() => [
  {
    icon: "bi bi-controller text-[#00ff66]",
    name: "GAME DEVELOPMENT",
    desc: "Unity 3D / C# / 2D Platformer",
    val: 95,
    tier: "MASTER",
  },
  {
    icon: "bi bi-headset text-[#00f0ff]",
    name: "VR / AR EXPERIENCE",
    desc: "XR Locomotion & Spatial Design",
    val: 92,
    tier: "EXPERT",
  },
  {
    icon: "bi bi-palette-fill text-[#ff0055]",
    name: "UI / UX DESIGN",
    desc: "Figma & Design Systems",
    val: 94,
    tier: "EXPERT",
  },
  {
    icon: "bi bi-code-slash text-[#ffd700]",
    name: "FRONTEND CODE",
    desc: "Vue.js & Web Interactive",
    val: 90,
    tier: "ADVANCED",
  },
]);
</script>

<style scoped>
.coin-float-enter-active {
  transition: all 0.6s ease-out;
}
.coin-float-leave-active {
  transition: all 0.4s ease-in;
}
.coin-float-enter-from {
  opacity: 0;
  transform: translate(-50%, 10px);
}
.coin-float-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
</style>
