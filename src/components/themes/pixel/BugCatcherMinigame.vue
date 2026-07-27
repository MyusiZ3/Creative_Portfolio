<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none font-mono"
    >
      <!-- Retro Arcade Cabinet Wrapper -->
      <div
        class="relative w-full max-w-2xl bg-[#090d16] border-4 border-[#00f0ff] p-4 sm:p-6 shadow-[0_0_30px_rgba(0,240,255,0.4)] flex flex-col items-center overflow-hidden rounded-none"
      >
        <!-- Top Arcade Cabinet Marquee Header -->
        <div class="w-full flex items-center justify-between border-b-4 border-[#00f0ff] pb-3 mb-3 font-silkscreen bg-[#161b22] px-4 py-2">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-[#00ff66] animate-ping inline-block"></span>
            <h2 class="text-xs sm:text-sm font-extrabold text-[#ffd700] tracking-wider uppercase flex items-center gap-2">
              <i class="bi bi-controller text-[#00ff66] text-base"></i>
              <span>PORTFOLIO ARCADE HUB</span>
            </h2>
          </div>
          
          <div class="flex items-center gap-2">
            <button
              v-if="activeGame !== 'MENU'"
              @click="returnToMenu"
              class="px-2 py-0.5 bg-[#161b22] hover:bg-[#30363d] text-[#00f0ff] border border-[#00f0ff] font-bold text-[10px] sm:text-xs cursor-pointer shadow-[2px_2px_0px_#000] transition-all font-silkscreen flex items-center gap-1"
              title="Game Select Menu"
            >
              <i class="bi bi-grid-fill"></i>
              <span>MENU</span>
            </button>
            <button
              @click="closeModal"
              class="px-2 py-0.5 bg-[#ff0055] hover:bg-[#ff2a70] text-white border border-black font-bold text-[10px] sm:text-xs cursor-pointer shadow-[2px_2px_0px_#000] active:translate-y-0.5 transition-all font-silkscreen"
              title="Exit Arcade"
            >
              ✖ ESC
            </button>
          </div>
        </div>

        <!-- Scoreboard Header (Active during gameplay) -->
        <div 
          v-if="activeGame !== 'MENU'"
          class="w-full grid grid-cols-4 gap-2 mb-3 text-center text-[10px] sm:text-xs font-silkscreen bg-[#0d1117] border-2 border-black p-2 text-[#8b949e]"
        >
          <div>
            <span class="block text-[#00f0ff]">SCORE</span>
            <span class="text-white font-bold text-sm">{{ score.toString().padStart(6, '0') }}</span>
          </div>
          <div>
            <span class="block text-[#ffd700]">HIGH SCORE</span>
            <span class="text-[#ffd700] font-bold text-sm">{{ highScore.toString().padStart(6, '0') }}</span>
          </div>
          <div>
            <span class="block text-[#ff0055]">LIVES</span>
            <div class="flex items-center justify-center gap-1 text-[#ff0055] text-xs pt-1">
              <i 
                v-for="n in Math.max(0, lives)" 
                :key="n" 
                class="bi bi-heart-fill animate-pulse"
              ></i>
              <span v-if="lives <= 0" class="text-[10px] text-[#ff0055] font-mono">GAME OVER</span>
            </div>
          </div>
          <div>
            <span class="block text-[#00ff66]">GAME</span>
            <span class="text-[#00ff66] font-bold text-[11px] uppercase truncate block">{{ getGameTitle(activeGame) }}</span>
          </div>
        </div>

        <!-- CRT Game Display Screen Container -->
        <div
          ref="screenContainerRef"
          class="relative w-full h-[320px] sm:h-[370px] bg-[#05080e] border-4 border-black overflow-hidden shadow-inner flex flex-col items-center justify-center cursor-crosshair"
        >
          <!-- Subtle Scanlines Overlay -->
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_4px] pointer-events-none z-20 opacity-60"></div>

          <!-- ==================== ARCADE MENU SELECTION ==================== -->
          <div
            v-if="activeGame === 'MENU'"
            class="absolute inset-0 z-30 flex flex-col items-center justify-between p-4 sm:p-6 bg-[#090d16] font-silkscreen overflow-y-auto"
          >
            <div class="text-center space-y-1">
              <div class="flex items-center justify-center gap-2 text-[#ffd700] text-xl font-bold">
                <i class="bi bi-disc-fill animate-spin"></i>
                <span>SELECT YOUR CARTRIDGE</span>
              </div>
              <p class="text-[11px] text-[#8b949e] font-mono">
                Choose an 8-bit arcade minigame to play!
              </p>
            </div>

            <!-- Game Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl my-2">
              <button
                v-for="game in gamesList"
                :key="game.id"
                @click="selectGame(game.id)"
                @mouseenter="playBlipSfx"
                class="p-3 bg-[#161b22] border-2 border-[#30363d] hover:border-[#00f0ff] hover:bg-[#1c2129] active:translate-x-0.5 active:translate-y-0.5 transition-all text-left group cursor-pointer flex items-center gap-3 shadow-[3px_3px_0px_#000]"
              >
                <div 
                  class="w-10 h-10 border border-black flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform"
                  :style="{ backgroundColor: game.bgColor, color: game.color }"
                >
                  <i :class="game.icon"></i>
                </div>
                <div class="overflow-hidden">
                  <div class="text-xs font-bold text-[#f0f6fc] group-hover:text-[#00f0ff] transition-colors truncate">
                    {{ game.title }}
                  </div>
                  <div class="text-[9px] text-[#8b949e] font-mono truncate">
                    {{ game.desc }}
                  </div>
                </div>
              </button>
            </div>

            <div class="text-[10px] text-[#00ff66] font-mono flex items-center gap-2">
              <i class="bi bi-info-circle"></i>
              <span>Click any game cartridge to insert credit & play!</span>
            </div>
          </div>

          <!-- ==================== CANVAS SURFACE (BREAKOUT / SNAKE / INVADERS) ==================== -->
          <canvas
            v-show="activeGame !== 'MENU' && activeGame !== 'MEMORY'"
            ref="canvasRef"
            width="600"
            height="400"
            class="w-full h-full object-contain block z-10"
            @mousemove="handleCanvasMouseMove"
            @touchmove.prevent="handleCanvasTouchMove"
            @touchstart.prevent="handleCanvasTouchStart"
            @click="handleCanvasClick"
          ></canvas>

          <!-- ==================== DEV MEMORY MATCH GAME UI ==================== -->
          <div
            v-if="activeGame === 'MEMORY' && gameStatus !== 'START'"
            class="absolute inset-0 z-10 p-4 bg-[#05080e] flex flex-col items-center justify-center"
          >
            <div class="grid grid-cols-4 gap-2.5 w-full max-w-md">
              <button
                v-for="card in memoryCards"
                :key="card.id"
                @click="flipMemoryCard(card)"
                class="h-16 border-2 border-black flex flex-col items-center justify-center transition-all duration-300 transform cursor-pointer shadow-[2px_2px_0px_#000]"
                :class="card.isFlipped || card.isMatched ? 'bg-[#161b22] border-[#00f0ff]' : 'bg-[#0d1117] hover:border-[#ffd700]'"
              >
                <div v-if="card.isFlipped || card.isMatched" class="flex flex-col items-center animate-fadeIn">
                  <i :class="card.icon" class="text-xl" :style="{ color: card.color }"></i>
                  <span class="text-[8px] text-[#f0f6fc] font-silkscreen mt-1">{{ card.label }}</span>
                </div>
                <div v-else class="text-[#30363d] text-lg font-silkscreen">
                  <i class="bi bi-question-square-fill"></i>
                </div>
              </button>
            </div>
          </div>

          <!-- ==================== START OVERLAY ==================== -->
          <div
            v-if="gameStatus === 'START' && activeGame !== 'MENU'"
            class="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-black/90 space-y-4 font-silkscreen"
          >
            <div 
              class="w-14 h-14 border-2 border-black flex items-center justify-center text-3xl animate-bounce"
              :style="{ backgroundColor: currentGameObj?.bgColor, color: currentGameObj?.color }"
            >
              <i :class="currentGameObj?.icon"></i>
            </div>
            <h3 class="text-lg sm:text-2xl font-extrabold text-[#00f0ff] uppercase tracking-wider">
              {{ currentGameObj?.title }}
            </h3>
            <p class="text-xs text-[#8b949e] max-w-sm leading-relaxed font-mono">
              {{ currentGameObj?.instructions }}
            </p>
            <button
              @click="startGameplay"
              class="px-6 py-2.5 bg-[#00ff66] text-black font-extrabold text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#00e055] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer uppercase tracking-widest transition-all"
            >
              ▶ PRESS START
            </button>
          </div>

          <!-- HINT OVERLAY (Breakout waiting launch) -->
          <div
            v-if="activeGame === 'BREAKOUT' && gameStatus === 'PLAYING' && ballState === 'WAITING'"
            class="absolute bottom-16 z-20 px-3 py-1 bg-black/80 border border-[#ffd700] text-[#ffd700] text-[10px] font-silkscreen animate-pulse pointer-events-none"
          >
            CLICK OR PRESS SPACE TO LAUNCH BALL!
          </div>

          <!-- PAUSE OVERLAY -->
          <div
            v-if="gameStatus === 'PAUSED'"
            class="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 space-y-3 font-silkscreen"
          >
            <div class="text-2xl text-[#ffd700] font-bold animate-pulse flex items-center gap-2">
              <i class="bi bi-pause-circle-fill"></i>
              <span>GAME PAUSED</span>
            </div>
            <button
              @click="togglePause"
              class="px-4 py-2 bg-[#00f0ff] text-black font-bold text-xs border border-black shadow-[2px_2px_0px_#000] hover:bg-[#33f3ff]"
            >
              RESUME
            </button>
          </div>

          <!-- GAME OVER OVERLAY -->
          <div
            v-if="gameStatus === 'GAMEOVER'"
            class="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-black/92 space-y-3 font-silkscreen animate-fadeIn"
          >
            <div class="text-4xl text-[#ff0055] animate-bounce">
              <i class="bi bi-x-circle-fill"></i>
            </div>
            <h3 class="text-xl font-bold text-[#ff0055] uppercase tracking-wider">GAME OVER</h3>
            <div class="text-xs text-[#8b949e] font-mono space-y-1">
              <div>FINAL SCORE: <span class="text-[#ffd700] font-bold">{{ score }}</span></div>
              <div>HIGH SCORE: <span class="text-[#00f0ff] font-bold">{{ highScore }}</span></div>
            </div>
            <div class="flex items-center gap-2 pt-2">
              <button
                @click="startGameplay"
                class="px-4 py-2 bg-[#ff0055] text-white font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#ff2a70] cursor-pointer uppercase"
              >
                🔄 REPLAY
              </button>
              <button
                @click="returnToMenu"
                class="px-4 py-2 bg-[#161b22] text-[#00f0ff] font-extrabold text-xs border-2 border-[#00f0ff] shadow-[3px_3px_0px_#000] hover:bg-[#21262d] cursor-pointer uppercase"
              >
                🎮 MENU
              </button>
            </div>
          </div>

          <!-- VICTORY OVERLAY -->
          <div
            v-if="gameStatus === 'VICTORY'"
            class="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-black/92 space-y-3 font-silkscreen animate-fadeIn"
          >
            <div class="text-4xl text-[#ffd700] animate-bounce">
              <i class="bi bi-trophy-fill"></i>
            </div>
            <h3 class="text-xl font-bold text-[#00ff66] uppercase tracking-wider">VICTORY! ALL CLEARED!</h3>
            <p class="text-xs text-[#8b949e] font-mono">
              STAGE COMPLETED WITH FLYING COLORS! <br/>
              FINAL SCORE: <span class="text-[#ffd700] font-bold">{{ score }}</span>
            </p>
            <div class="flex items-center gap-2 pt-2">
              <button
                @click="startGameplay"
                class="px-4 py-2 bg-[#00ff66] text-black font-extrabold text-xs border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#00e055] cursor-pointer uppercase"
              >
                🔄 PLAY AGAIN
              </button>
              <button
                @click="returnToMenu"
                class="px-4 py-2 bg-[#161b22] text-[#00f0ff] font-extrabold text-xs border-2 border-[#00f0ff] shadow-[3px_3px_0px_#000] hover:bg-[#21262d] cursor-pointer uppercase"
              >
                🎮 MENU
              </button>
            </div>
          </div>
        </div>

        <!-- Dynamic Control Bar (Active during gameplay) -->
        <div v-if="activeGame !== 'MENU'" class="w-full mt-3 font-silkscreen">
          <div v-if="activeGame === 'SNAKE'" class="grid grid-cols-4 gap-2">
            <button
              @mousedown="startMoveLeft"
              @touchstart.prevent="startMoveLeft"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <i class="bi bi-arrow-left"></i>
              <span>LEFT</span>
            </button>
            <button
              @mousedown="startMoveUp"
              @touchstart.prevent="startMoveUp"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <i class="bi bi-arrow-up"></i>
              <span>UP</span>
            </button>
            <button
              @mousedown="startMoveDown"
              @touchstart.prevent="startMoveDown"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <i class="bi bi-arrow-down"></i>
              <span>DOWN</span>
            </button>
            <button
              @mousedown="startMoveRight"
              @touchstart.prevent="startMoveRight"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <span>RIGHT</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>

          <div v-else class="grid grid-cols-4 gap-2">
            <button
              @mousedown="startMoveLeft"
              @mouseup="stopMove"
              @mouseleave="stopMove"
              @touchstart.prevent="startMoveLeft"
              @touchend.prevent="stopMove"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <i class="bi bi-arrow-left-square-fill"></i>
              <span>LEFT</span>
            </button>

            <button
              @click="handleActionButton"
              class="col-span-2 py-2 bg-[#00ff66] text-black font-extrabold text-xs border-2 border-black hover:bg-[#00e055] active:translate-y-0.5 cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1.5 select-none"
            >
              <i class="bi bi-play-fill"></i>
              <span>{{ getActionButtonLabel() }}</span>
            </button>

            <button
              @mousedown="startMoveRight"
              @mouseup="stopMove"
              @mouseleave="stopMove"
              @touchstart.prevent="startMoveRight"
              @touchend.prevent="stopMove"
              class="py-2 bg-[#161b22] border-2 border-[#30363d] text-white font-bold text-xs hover:bg-[#21262d] active:bg-[#00f0ff] active:text-black cursor-pointer shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 select-none"
            >
              <span>RIGHT</span>
              <i class="bi bi-arrow-right-square-fill"></i>
            </button>
          </div>
        </div>

        <!-- Footer Instructions -->
        <div class="mt-2 text-[10px] text-[#8b949e] font-mono text-center flex items-center justify-center gap-3">
          <span><i class="bi bi-mouse"></i> Mouse / Touch Drag</span>
          <span>•</span>
          <span><i class="bi bi-keyboard"></i> Arrow Keys / Space</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { usePixelAudio } from '@/composables/usePixelAudio';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'add-score']);
const { playCoinSfx, playBlipSfx, playFanfareSfx, playExplosionSfx, playLaserSfx } = usePixelAudio();

// Canvas & Container Refs
const canvasRef = ref(null);
const screenContainerRef = ref(null);

// Active Selected Game: 'MENU' | 'BREAKOUT' | 'SNAKE' | 'INVADERS' | 'MEMORY'
const activeGame = ref('MENU');
const gameStatus = ref('START'); // 'START' | 'PLAYING' | 'PAUSED' | 'GAMEOVER' | 'VICTORY'

// Common Stats
const score = ref(0);
const highScore = ref(0);
const lives = ref(3);

// Key state for smooth continuous movement
const keysPressed = new Set();
let animFrameId = null;

// Canvas Dimensions
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

// Game List Definition (4 Games)
const gamesList = [
  {
    id: 'BREAKOUT',
    title: 'CODE BREAKOUT 8-BIT',
    desc: 'Destroy bug blocks with your pixel ball!',
    icon: 'bi bi-grid-3x3-gap-fill',
    color: '#00f0ff',
    bgColor: '#0d2238',
    instructions: 'Mouse / Touch drag or ← → Arrow keys to control paddle. Break all code bricks!'
  },
  {
    id: 'SNAKE',
    title: 'BUG SNAKE 8-BIT',
    desc: 'Eat bug chips & grow long without crashing!',
    icon: 'bi bi-bug-fill',
    color: '#00ff66',
    bgColor: '#0d331a',
    instructions: 'Use Arrow keys or Touch buttons to steer snake. Eat pixel chips to score!'
  },
  {
    id: 'INVADERS',
    title: 'CODE INVADERS 8-BIT',
    desc: 'Blast descending bug waves with laser canon!',
    icon: 'bi bi-rocket-takeoff-fill',
    color: '#ff0055',
    bgColor: '#380d1a',
    instructions: 'Move ship Left/Right to shoot lasers and destroy descending bug rows!'
  },
  {
    id: 'MEMORY',
    title: 'DEV MEMORY MATCH',
    desc: 'Match 8-bit tech stack skill cards!',
    icon: 'bi bi-file-code-fill',
    color: '#b800ff',
    bgColor: '#280d38',
    instructions: 'Click cards to flip and match 6 pairs of tech stack icons!'
  }
];

const currentGameObj = computed(() => gamesList.find(g => g.id === activeGame.value));

const getGameTitle = (id) => {
  const g = gamesList.find(item => item.id === id);
  return g ? g.title : 'GAME';
};

const selectGame = (gameId) => {
  playCoinSfx();
  activeGame.value = gameId;
  gameStatus.value = 'START';
  score.value = 0;
  highScore.value = parseInt(localStorage.getItem(`pixel_${gameId}_highscore`) || '0', 10);
};

const returnToMenu = () => {
  playBlipSfx();
  stopLoop();
  activeGame.value = 'MENU';
  gameStatus.value = 'START';
};

const closeModal = () => {
  stopLoop();
  emit('close');
};

const togglePause = () => {
  if (gameStatus.value === 'PLAYING') {
    gameStatus.value = 'PAUSED';
  } else if (gameStatus.value === 'PAUSED') {
    gameStatus.value = 'PLAYING';
  }
};

// ==================== GAME 1: CODE BREAKOUT ====================
const ballState = ref('WAITING');
const paddle = { x: 250, y: 370, w: 100, h: 12, speed: 7, color: '#00f0ff' };
const ball = { x: 300, y: 358, r: 6, vx: 0, vy: 0, speed: 5, color: '#ffd700' };
let breakoutBricks = [];

const initBreakout = () => {
  lives.value = 3;
  paddle.w = 100;
  paddle.x = (CANVAS_WIDTH - paddle.w) / 2;
  resetBreakoutBall();
  breakoutBricks = [];

  const rows = 4;
  const cols = 7;
  const padding = 8;
  const offsetTop = 40;
  const offsetLeft = 25;
  const brickW = Math.floor((CANVAS_WIDTH - offsetLeft * 2 - (cols - 1) * padding) / cols);
  const brickH = 20;

  const brickConfigs = [
    { label: 'MERGE', pts: 300, color: '#ff0055', border: '#ff6699' },
    { label: 'SYNTAX', pts: 200, color: '#ff7700', border: '#ffaa44' },
    { label: 'MEMORY', pts: 150, color: '#ffd700', border: '#ffee77' },
    { label: 'NULL', pts: 100, color: '#00ff66', border: '#77ffaa' }
  ];

  for (let r = 0; r < rows; r++) {
    const cfg = brickConfigs[r];
    for (let c = 0; c < cols; c++) {
      breakoutBricks.push({
        x: offsetLeft + c * (brickW + padding),
        y: offsetTop + r * (brickH + padding),
        w: brickW,
        h: brickH,
        hp: 1,
        pts: cfg.pts,
        color: cfg.color,
        border: cfg.border,
        label: cfg.label
      });
    }
  }
};

const resetBreakoutBall = () => {
  ballState.value = 'WAITING';
  ball.speed = 5;
  ball.x = paddle.x + paddle.w / 2;
  ball.y = paddle.y - ball.r - 2;
  ball.vx = 0;
  ball.vy = 0;
};

const launchBreakoutBall = () => {
  if (ballState.value !== 'WAITING') return;
  playBlipSfx();
  ballState.value = 'MOVING';
  const angle = (Math.random() * 0.4 - 0.2);
  ball.vx = ball.speed * Math.sin(angle);
  ball.vy = -ball.speed * Math.cos(angle);
};

// ==================== GAME 2: BUG SNAKE ====================
const GRID_SIZE = 20;
let snake = [];
let snakeDir = { x: 1, y: 0 };
let snakeNextDir = { x: 1, y: 0 };
let snakeFood = { x: 10, y: 10 };
let snakeMoveTimer = 0;

const initSnake = () => {
  lives.value = 1;
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];
  snakeDir = { x: 1, y: 0 };
  snakeNextDir = { x: 1, y: 0 };
  spawnSnakeFood();
};

const spawnSnakeFood = () => {
  const cols = CANVAS_WIDTH / GRID_SIZE;
  const rows = CANVAS_HEIGHT / GRID_SIZE;
  let newFood;
  let attempts = 0;
  do {
    newFood = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows)
    };
    attempts++;
  } while (
    attempts < 100 &&
    snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
  );
  snakeFood = newFood;
};

// ==================== GAME 3: CODE INVADERS ====================
const invaderShip = { x: 275, y: 360, w: 50, h: 20, speed: 6 };
let invaderLasers = [];
let invaders = [];
let invaderDir = 1;

const initInvaders = () => {
  lives.value = 3;
  invaderShip.x = (CANVAS_WIDTH - invaderShip.w) / 2;
  invaderLasers = [];
  invaders = [];
  invaderDir = 1;

  const rows = 3;
  const cols = 8;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      invaders.push({
        x: 60 + c * 55,
        y: 40 + r * 35,
        w: 35,
        h: 22,
        alive: true,
        pts: (3 - r) * 100
      });
    }
  }
};

const shootInvaderLaser = () => {
  playLaserSfx();
  invaderLasers.push({
    x: invaderShip.x + invaderShip.w / 2 - 2,
    y: invaderShip.y - 10,
    w: 4,
    h: 12,
    vy: -8
  });
};

// ==================== GAME 4: DEV MEMORY MATCH ====================
const memoryCards = ref([]);
let flippedCards = [];

const initMemory = () => {
  lives.value = 1;
  const skillIcons = [
    { label: 'VUE', icon: 'bi bi-filetype-jsx', color: '#00ff66' },
    { label: 'UNITY', icon: 'bi bi-unity', color: '#00f0ff' },
    { label: 'C#', icon: 'bi bi-code-slash', color: '#ffd700' },
    { label: 'FIGMA', icon: 'bi bi-vector-pen', color: '#ff0055' },
    { label: 'VR/AR', icon: 'bi bi-headset', color: '#b800ff' },
    { label: 'CSS', icon: 'bi bi-filetype-css', color: '#ff7700' }
  ];

  const deck = [];
  skillIcons.forEach((item, idx) => {
    deck.push({ id: idx * 2, pairId: idx, ...item, isFlipped: false, isMatched: false });
    deck.push({ id: idx * 2 + 1, pairId: idx, ...item, isFlipped: false, isMatched: false });
  });

  memoryCards.value = deck.sort(() => Math.random() - 0.5);
  flippedCards = [];
};

const flipMemoryCard = (card) => {
  if (card.isFlipped || card.isMatched || flippedCards.length >= 2) return;
  playBlipSfx();
  card.isFlipped = true;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [c1, c2] = flippedCards;
    if (c1.pairId === c2.pairId) {
      playCoinSfx();
      c1.isMatched = true;
      c2.isMatched = true;
      score.value += 200;
      emit('add-score', 200);
      flippedCards = [];

      if (memoryCards.value.every(c => c.isMatched)) {
        playFanfareSfx();
        gameStatus.value = 'VICTORY';
        updateHighScore();
      }
    } else {
      setTimeout(() => {
        c1.isFlipped = false;
        c2.isFlipped = false;
        flippedCards = [];
      }, 800);
    }
  }
};

// ==================== MASTER GAME ENGINE ====================
const startGameplay = () => {
  playCoinSfx();
  gameStatus.value = 'PLAYING';
  score.value = 0;

  if (activeGame.value === 'BREAKOUT') initBreakout();
  else if (activeGame.value === 'SNAKE') initSnake();
  else if (activeGame.value === 'INVADERS') initInvaders();
  else if (activeGame.value === 'MEMORY') initMemory();

  stopLoop();
  if (activeGame.value !== 'MEMORY') {
    gameLoop();
  }
};

const gameLoop = () => {
  if (gameStatus.value === 'PLAYING') {
    updateEngine();
    renderEngine();
  } else if (gameStatus.value === 'PAUSED') {
    renderEngine();
  }
  animFrameId = requestAnimationFrame(gameLoop);
};

const updateEngine = () => {
  if (activeGame.value === 'BREAKOUT') updateBreakout();
  else if (activeGame.value === 'SNAKE') updateSnake();
  else if (activeGame.value === 'INVADERS') updateInvaders();
};

const renderEngine = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#05080e';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (activeGame.value === 'BREAKOUT') renderBreakout(ctx);
  else if (activeGame.value === 'SNAKE') renderSnake(ctx);
  else if (activeGame.value === 'INVADERS') renderInvaders(ctx);
};

// --- UPDATE & RENDER LOGIC FOR BREAKOUT ---
const updateBreakout = () => {
  if (keysPressed.has('left')) paddle.x = Math.max(0, paddle.x - paddle.speed);
  if (keysPressed.has('right')) paddle.x = Math.min(CANVAS_WIDTH - paddle.w, paddle.x + paddle.speed);

  if (ballState.value === 'WAITING') {
    ball.x = paddle.x + paddle.w / 2;
    ball.y = paddle.y - ball.r - 2;
    return;
  }

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x - ball.r <= 0 || ball.x + ball.r >= CANVAS_WIDTH) {
    ball.vx *= -1;
    playBlipSfx();
  }
  if (ball.y - ball.r <= 0) {
    ball.vy *= -1;
    playBlipSfx();
  }

  if (ball.y - ball.r > CANVAS_HEIGHT) {
    playExplosionSfx();
    lives.value -= 1;
    if (lives.value <= 0) {
      gameStatus.value = 'GAMEOVER';
      updateHighScore();
    } else {
      resetBreakoutBall();
    }
    return;
  }

  // Paddle Collision
  if (
    ball.y + ball.r >= paddle.y &&
    ball.y - ball.r <= paddle.y + paddle.h &&
    ball.x >= paddle.x &&
    ball.x <= paddle.x + paddle.w &&
    ball.vy > 0
  ) {
    playCoinSfx();
    const hitPoint = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
    const angle = hitPoint * (Math.PI * 0.38);
    ball.vx = ball.speed * Math.sin(angle);
    ball.vy = -ball.speed * Math.cos(angle);
  }

  // Bricks Collision
  for (let i = 0; i < breakoutBricks.length; i++) {
    const b = breakoutBricks[i];
    if (b.hp <= 0) continue;
    if (
      ball.x + ball.r > b.x &&
      ball.x - ball.r < b.x + b.w &&
      ball.y + ball.r > b.y &&
      ball.y - ball.r < b.y + b.h
    ) {
      b.hp = 0;
      score.value += b.pts;
      emit('add-score', b.pts);
      ball.vy *= -1;
      playBlipSfx();
      break;
    }
  }

  if (breakoutBricks.every(b => b.hp <= 0)) {
    playFanfareSfx();
    gameStatus.value = 'VICTORY';
    updateHighScore();
  }
};

const renderBreakout = (ctx) => {
  breakoutBricks.forEach(b => {
    if (b.hp <= 0) return;
    ctx.fillStyle = b.color;
    ctx.fillRect(b.x, b.y, b.w, b.h);
    ctx.strokeStyle = b.border;
    ctx.strokeRect(b.x, b.y, b.w, b.h);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(b.label, b.x + b.w / 2, b.y + b.h / 2 + 3);
  });

  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
};

// --- UPDATE & RENDER LOGIC FOR SNAKE ---
const updateSnake = () => {
  snakeMoveTimer += 1;
  if (snakeMoveTimer < 15) return; // Slower, relaxed speed threshold (~4 moves/sec)
  snakeMoveTimer = 0;

  if (keysPressed.has('left') && snakeDir.x !== 1) snakeNextDir = { x: -1, y: 0 };
  if (keysPressed.has('right') && snakeDir.x !== -1) snakeNextDir = { x: 1, y: 0 };
  if (keysPressed.has('up') && snakeDir.y !== 1) snakeNextDir = { x: 0, y: -1 };
  if (keysPressed.has('down') && snakeDir.y !== -1) snakeNextDir = { x: 0, y: 1 };

  snakeDir = { ...snakeNextDir };
  const head = { x: snake[0].x + snakeDir.x, y: snake[0].y + snakeDir.y };

  const cols = CANVAS_WIDTH / GRID_SIZE;
  const rows = CANVAS_HEIGHT / GRID_SIZE;

  // Screen wrap around (No wall boundaries)
  if (head.x < 0) head.x = cols - 1;
  else if (head.x >= cols) head.x = 0;

  if (head.y < 0) head.y = rows - 1;
  else if (head.y >= rows) head.y = 0;

  // Self-collision check
  if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    playExplosionSfx();
    gameStatus.value = 'GAMEOVER';
    updateHighScore();
    return;
  }

  snake.unshift(head);

  if (head.x === snakeFood.x && head.y === snakeFood.y) {
    playCoinSfx();
    score.value += 150;
    emit('add-score', 150);
    spawnSnakeFood();
  } else {
    snake.pop();
  }
};

const renderSnake = (ctx) => {
  ctx.fillStyle = '#ff0055';
  ctx.fillRect(snakeFood.x * GRID_SIZE + 2, snakeFood.y * GRID_SIZE + 2, GRID_SIZE - 4, GRID_SIZE - 4);

  snake.forEach((seg, idx) => {
    ctx.fillStyle = idx === 0 ? '#00ff66' : '#00f0ff';
    ctx.fillRect(seg.x * GRID_SIZE + 1, seg.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2);
  });
};

// --- UPDATE & RENDER LOGIC FOR INVADERS ---
const updateInvaders = () => {
  if (keysPressed.has('left')) invaderShip.x = Math.max(0, invaderShip.x - invaderShip.speed);
  if (keysPressed.has('right')) invaderShip.x = Math.min(CANVAS_WIDTH - invaderShip.w, invaderShip.x + invaderShip.speed);

  for (let i = invaderLasers.length - 1; i >= 0; i--) {
    const l = invaderLasers[i];
    l.y += l.vy;

    invaders.forEach(inv => {
      if (inv.alive && l.x >= inv.x && l.x <= inv.x + inv.w && l.y >= inv.y && l.y <= inv.y + inv.h) {
        inv.alive = false;
        score.value += inv.pts;
        emit('add-score', inv.pts);
        playBlipSfx();
        invaderLasers.splice(i, 1);
      }
    });

    if (l && l.y < 0) invaderLasers.splice(i, 1);
  }

  const aliveInvaders = invaders.filter(inv => inv.alive);
  if (aliveInvaders.length === 0) {
    playFanfareSfx();
    gameStatus.value = 'VICTORY';
    updateHighScore();
    return;
  }

  let reachEdge = false;
  aliveInvaders.forEach(inv => {
    inv.x += invaderDir * 1.2;
    if (inv.x <= 10 || inv.x + inv.w >= CANVAS_WIDTH - 10) reachEdge = true;
    if (inv.y + inv.h >= invaderShip.y) {
      gameStatus.value = 'GAMEOVER';
      updateHighScore();
    }
  });

  if (reachEdge) {
    invaderDir *= -1;
    aliveInvaders.forEach(inv => inv.y += 12);
  }
};

const renderInvaders = (ctx) => {
  ctx.fillStyle = '#00ff66';
  ctx.fillRect(invaderShip.x, invaderShip.y, invaderShip.w, invaderShip.h);

  ctx.fillStyle = '#ffd700';
  invaderLasers.forEach(l => ctx.fillRect(l.x, l.y, l.w, l.h));

  invaders.forEach(inv => {
    if (!inv.alive) return;
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(inv.x, inv.y, inv.w, inv.h);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(inv.x + 6, inv.y + 6, 6, 6);
    ctx.fillRect(inv.x + inv.w - 12, inv.y + 6, 6, 6);
  });
};

// ==================== TOUCH & CONTROLS HELPER ====================
const startMoveLeft = () => {
  keysPressed.add('left');
  if (activeGame.value === 'SNAKE' && snakeDir.x !== 1) snakeNextDir = { x: -1, y: 0 };
};
const startMoveRight = () => {
  keysPressed.add('right');
  if (activeGame.value === 'SNAKE' && snakeDir.x !== -1) snakeNextDir = { x: 1, y: 0 };
};
const startMoveUp = () => {
  keysPressed.add('up');
  if (activeGame.value === 'SNAKE' && snakeDir.y !== 1) snakeNextDir = { x: 0, y: -1 };
};
const startMoveDown = () => {
  keysPressed.add('down');
  if (activeGame.value === 'SNAKE' && snakeDir.y !== -1) snakeNextDir = { x: 0, y: 1 };
};

const stopMove = () => {
  keysPressed.delete('left');
  keysPressed.delete('right');
  keysPressed.delete('up');
  keysPressed.delete('down');
};

const handleActionButton = () => {
  if (activeGame.value === 'BREAKOUT') {
    if (ballState.value === 'WAITING') launchBreakoutBall();
    else togglePause();
  } else if (activeGame.value === 'INVADERS') {
    shootInvaderLaser();
  } else {
    togglePause();
  }
};

const getActionButtonLabel = () => {
  if (activeGame.value === 'BREAKOUT') return ballState.value === 'WAITING' ? 'LAUNCH' : 'PAUSE';
  if (activeGame.value === 'INVADERS') return 'SHOOT LASER';
  return 'PAUSE';
};

const getCanvasCoords = (e) => {
  if (!canvasRef.value) return null;
  const rect = canvasRef.value.getBoundingClientRect();
  const scaleX = CANVAS_WIDTH / rect.width;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  return { x: (clientX - rect.left) * scaleX };
};

const handleCanvasMouseMove = (e) => {
  if (gameStatus.value !== 'PLAYING') return;
  const coords = getCanvasCoords(e);
  if (!coords) return;

  if (activeGame.value === 'BREAKOUT') {
    paddle.x = Math.max(0, Math.min(CANVAS_WIDTH - paddle.w, coords.x - paddle.w / 2));
  } else if (activeGame.value === 'INVADERS') {
    invaderShip.x = Math.max(0, Math.min(CANVAS_WIDTH - invaderShip.w, coords.x - invaderShip.w / 2));
  }
};

const handleCanvasTouchMove = (e) => handleCanvasMouseMove(e);

const handleCanvasTouchStart = (e) => {
  handleCanvasMouseMove(e);
  handleCanvasClick();
};

const handleCanvasClick = () => {
  if (gameStatus.value !== 'PLAYING') return;
  if (activeGame.value === 'BREAKOUT' && ballState.value === 'WAITING') launchBreakoutBall();
  else if (activeGame.value === 'INVADERS') shootInvaderLaser();
};

const handleKeyDown = (e) => {
  if (!props.show) return;

  if (e.key === 'ArrowLeft' || e.code === 'KeyA') {
    keysPressed.add('left');
    if (activeGame.value === 'SNAKE' && snakeDir.x !== 1) snakeNextDir = { x: -1, y: 0 };
  } else if (e.key === 'ArrowRight' || e.code === 'KeyD') {
    keysPressed.add('right');
    if (activeGame.value === 'SNAKE' && snakeDir.x !== -1) snakeNextDir = { x: 1, y: 0 };
  } else if (e.key === 'ArrowUp' || e.code === 'KeyW') {
    keysPressed.add('up');
    if (activeGame.value === 'SNAKE' && snakeDir.y !== 1) snakeNextDir = { x: 0, y: -1 };
  } else if (e.key === 'ArrowDown' || e.code === 'KeyS') {
    keysPressed.add('down');
    if (activeGame.value === 'SNAKE' && snakeDir.y !== -1) snakeNextDir = { x: 0, y: 1 };
  } else if (e.key === ' ' || e.key === 'Enter') {
    if (activeGame.value === 'BREAKOUT') launchBreakoutBall();
    else if (activeGame.value === 'INVADERS') shootInvaderLaser();
  } else if (e.key === 'Escape') {
    if (activeGame.value !== 'MENU') returnToMenu();
    else closeModal();
  }
};

const handleKeyUp = (e) => {
  if (!props.show) return;
  if (e.key === 'ArrowLeft' || e.code === 'KeyA') keysPressed.delete('left');
  if (e.key === 'ArrowRight' || e.code === 'KeyD') keysPressed.delete('right');
  if (e.key === 'ArrowUp' || e.code === 'KeyW') keysPressed.delete('up');
  if (e.key === 'ArrowDown' || e.code === 'KeyS') keysPressed.delete('down');
};

const updateHighScore = () => {
  if (score.value > highScore.value) {
    highScore.value = score.value;
    localStorage.setItem(`pixel_${activeGame.value}_highscore`, highScore.value.toString());
  }
};

const stopLoop = () => {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  keysPressed.clear();
  stopMove();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
});

onUnmounted(() => {
  stopLoop();
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
});

watch(() => props.show, (newVal) => {
  if (newVal) {
    activeGame.value = 'MENU';
    gameStatus.value = 'START';
  } else {
    stopLoop();
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
