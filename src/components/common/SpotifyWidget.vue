<template>
  <div
    class="spotify-widget relative overflow-hidden transition-all duration-300 select-none"
    :class="[
      theme === 'pixel'
        ? 'bg-[#0a0d14] text-[#f0f6fc] border-4 border-black p-4 sm:p-5 shadow-[6px_6px_0px_#000000] font-mono'
        : 'bg-neutral-900/90 backdrop-blur-md text-white border border-white/10 p-4 sm:p-5 rounded-2xl shadow-xl font-[\'Roboto\']'
    ]"
  >
    <!-- Hidden HTML5 Audio Element for Real Audio Playback -->
    <audio 
      ref="audioPlayer" 
      :src="activeTrack.audioUrl" 
      @ended="autoShuffleTrack"
      @play="isPlaying = true"
    ></audio>

    <!-- Subtle CRT Scanlines Overlay for Pixel Theme -->
    <div 
      v-if="theme === 'pixel'" 
      class="crt-scanlines pointer-events-none absolute inset-0 z-20 opacity-15"
    ></div>

    <!-- Background subtle glow accent -->
    <div 
      class="absolute -right-6 -bottom-6 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
      :class="theme === 'pixel' ? 'bg-[#00ff66]' : 'bg-[#1db954]'"
    ></div>

    <!-- Top Retro Arcade Header Bar -->
    <div 
      class="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b relative z-10"
      :class="theme === 'pixel' ? 'border-black/80 bg-black/30 p-2 border-2 shadow-[2px_2px_0px_#000]' : 'border-white/10'"
    >
      <div class="flex items-center gap-2 min-w-0">
        <!-- Blinking LED Dot & Sound Chip Icon -->
        <div class="flex items-center gap-1.5 shrink-0">
          <span 
            class="w-2.5 h-2.5 rounded-full inline-block shadow-[0_0_8px]"
            :class="[
              isPlaying 
                ? (theme === 'pixel' ? 'bg-[#00ff66] shadow-[#00ff66] animate-pulse' : 'bg-emerald-400 shadow-emerald-400 animate-pulse') 
                : 'bg-gray-500 shadow-transparent'
            ]"
          ></span>
          <i class="bi bi-disc-fill text-lg animate-spin-slow" :class="theme === 'pixel' ? 'text-[#00f0ff]' : 'text-[#1db954]'"></i>
        </div>

        <span 
          class="text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate"
          :class="theme === 'pixel' ? 'font-silkscreen text-[#00ff66] text-shadow-pixel' : 'text-gray-200'"
        >
          {{ isListening ? (isId ? '▶ LIVE SPOTIFY SESSION' : '▶ LIVE SPOTIFY SESSION') : (isId ? '8-BIT SPOTIFY TAPE DECK' : '8-BIT SPOTIFY TAPE DECK') }}
        </span>
      </div>

      <!-- Header Controls: Mode Toggle & Visualizer -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          @click="showEmbed = !showEmbed"
          class="px-2 py-0.5 text-[9px] font-bold uppercase transition-all duration-150 border cursor-pointer"
          :class="[
            theme === 'pixel' 
              ? 'bg-[#161b22] text-[#ffd700] border-black hover:border-[#00ff66] hover:bg-[#00ff66] hover:text-black font-silkscreen shadow-[1.5px_1.5px_0px_#000]' 
              : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20 hover:text-white rounded-lg'
          ]"
          :title="showEmbed ? 'Hide Spotify Embed' : 'Show Live Spotify Embed'"
        >
          {{ showEmbed ? (isId ? '📼 TAPE CARD' : '📼 TAPE CARD') : (isId ? '🎵 EMBED SPOTIFY' : '🎵 EMBED SPOTIFY') }}
        </button>

        <!-- 8-Bit Multi-Bar Visualizer / VU Equalizer -->
        <div 
          class="flex items-end gap-0.5 h-4 px-1.5 py-0.5 rounded border"
          :class="theme === 'pixel' ? 'bg-black border-black/80 shadow-[inset_0_0_4px_rgba(0,255,102,0.3)]' : 'bg-black/40 border-white/10'"
        >
          <span 
            v-for="bar in 6" 
            :key="bar"
            class="w-1 transition-all duration-150"
            :class="[
              theme === 'pixel' 
                ? (bar % 3 === 0 ? 'bg-[#ff0055]' : bar % 2 === 0 ? 'bg-[#ffd700]' : 'bg-[#00ff66]') 
                : 'bg-[#1db954]',
              isPlaying ? 'animate-eq-bar' : 'h-1 opacity-40'
            ]"
            :style="isPlaying ? `animation-delay: ${(bar * 0.12).toFixed(2)}s; animation-duration: ${(0.4 + (bar % 3) * 0.2).toFixed(2)}s` : ''"
          ></span>
        </div>
      </div>
    </div>

    <!-- Live Spotify Embed (If toggled by user for streaming full Spotify playlist) -->
    <div v-if="showEmbed" class="relative z-10 my-2">
      <iframe 
        :src="formattedEmbedUrl" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        :class="theme === 'pixel' ? 'border-4 border-black shadow-[4px_4px_0px_#000] bg-black' : 'rounded-xl shadow-lg'"
      ></iframe>
    </div>

    <!-- Retro 8-Bit Cassette Tape Player View -->
    <div v-else class="relative z-10 space-y-3">
      <div 
        class="flex flex-col sm:flex-row items-center gap-3.5 p-3 relative"
        :class="theme === 'pixel' ? 'bg-black/50 border-2 border-black shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]' : 'bg-white/5 rounded-xl border border-white/5'"
      >
        <!-- 8-Bit Animated Cassette Spools / Album Cover -->
        <div class="relative group shrink-0">
          <div 
            class="relative w-16 h-16 sm:w-18 sm:h-18 overflow-hidden flex items-center justify-center"
            :class="theme === 'pixel' ? 'border-2 border-black shadow-[3px_3px_0px_#000] bg-[#1a1e29]' : 'rounded-xl shadow-md bg-neutral-800'"
          >
            <img
              :src="activeTrack.albumArt"
              :alt="activeTrack.title"
              class="w-full h-full object-cover transition-transform duration-500"
              :class="isPlaying ? 'scale-105 brightness-95' : 'grayscale-30 opacity-80'"
            />

            <!-- Cassette Tape Spools Overlay (Pixel Mode) -->
            <div 
              v-if="theme === 'pixel'"
              class="absolute inset-0 bg-black/30 pointer-events-none flex items-center justify-around px-1"
            >
              <div 
                class="w-6 h-6 border-2 border-[#ffd700] rounded-full flex items-center justify-center bg-black/60 shadow-[0_0_4px_#ffd700]"
                :class="isPlaying ? 'animate-spin-spool' : ''"
              >
                <div class="w-2 h-2 bg-[#ffd700] rounded-full border border-black"></div>
              </div>
              <div 
                class="w-6 h-6 border-2 border-[#ffd700] rounded-full flex items-center justify-center bg-black/60 shadow-[0_0_4px_#ffd700]"
                :class="isPlaying ? 'animate-spin-spool' : ''"
              >
                <div class="w-2 h-2 bg-[#ffd700] rounded-full border border-black"></div>
              </div>
            </div>

            <!-- Play/Pause Overlay Click Trigger -->
            <button
              @click="toggleAudioPlay"
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all cursor-pointer z-10"
              title="Play / Pause Audio"
            >
              <i :class="isPlaying ? 'bi bi-pause-fill text-2xl text-[#00ff66]' : 'bi bi-play-fill text-2xl text-[#00ff66]'"></i>
            </button>
          </div>
        </div>

        <!-- Track Info & Controls -->
        <div class="flex-1 min-w-0 w-full text-left">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span 
              class="text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wide border"
              :class="theme === 'pixel' ? 'bg-[#00ff66]/10 text-[#00ff66] border-[#00ff66]/40 font-silkscreen' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 rounded'"
            >
              {{ isListening ? 'DISCORD LIVE' : `TRACK 0${(trackIndex % defaultTracks.length) + 1}` }}
            </span>

            <span class="text-[9px] font-mono text-gray-400">
              {{ isPlaying ? 'PLAYING AUDIO 🔊' : 'PAUSED 🔇' }}
            </span>
          </div>

          <h4 
            class="text-xs sm:text-sm font-bold truncate leading-snug mb-0.5"
            :class="theme === 'pixel' ? 'font-pixel text-[#00f0ff] drop-shadow-[1px_1px_0px_#000]' : 'text-white font-semibold'"
          >
            {{ activeTrack.title }}
          </h4>
          
          <p class="text-[11px] text-gray-400 truncate font-mono mb-2">
            {{ activeTrack.artist }}
          </p>

          <!-- Retro Interactive Controls & Open Spotify Link -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5">
              <!-- Prev Track Button -->
              <button 
                @click="prevTrack" 
                class="w-7 h-6 flex items-center justify-center text-[9px] border transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                :class="theme === 'pixel' ? 'bg-[#161b22] text-[#00ff66] border-black hover:bg-[#00ff66] hover:text-black font-silkscreen shadow-[1.5px_1.5px_0px_#000]' : 'bg-white/10 text-gray-300 hover:text-white rounded'"
                title="Previous Track"
              >
                ◀◀
              </button>

              <!-- Play/Pause Button -->
              <button 
                @click="toggleAudioPlay" 
                class="px-2.5 h-6 flex items-center justify-center text-[9px] font-bold border transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                :class="isPlaying ? (theme === 'pixel' ? 'bg-[#ff0055] text-white border-black font-silkscreen shadow-[1.5px_1.5px_0px_#000]' : 'bg-red-500 text-white rounded') : (theme === 'pixel' ? 'bg-[#ffd700] text-black border-black hover:bg-white font-silkscreen shadow-[1.5px_1.5px_0px_#000]' : 'bg-emerald-500 text-black hover:bg-emerald-400 rounded')"
                title="Play/Pause Audio"
              >
                {{ isPlaying ? 'PAUSE' : 'PLAY ♪' }}
              </button>

              <!-- Next Track Button -->
              <button 
                @click="nextTrack" 
                class="w-7 h-6 flex items-center justify-center text-[9px] border transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                :class="theme === 'pixel' ? 'bg-[#161b22] text-[#00ff66] border-black hover:bg-[#00ff66] hover:text-black font-silkscreen shadow-[1.5px_1.5px_0px_#000]' : 'bg-white/10 text-gray-300 hover:text-white rounded'"
                title="Next Track"
              >
                ▶▶
              </button>
            </div>

            <!-- Open in Spotify Link -->
            <a
              :href="activeTrack.spotifyUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-2 py-1 text-[9px] font-bold uppercase transition-all duration-150 shrink-0 flex items-center gap-1 border active:translate-x-0.5 active:translate-y-0.5"
              :class="theme === 'pixel' ? 'bg-[#1db954] text-black border-black hover:bg-[#00ff66] font-silkscreen shadow-[2px_2px_0px_#000]' : 'text-[#1db954] hover:text-emerald-400 border-emerald-500/30 rounded'"
            >
              <span>SPOTIFY</span>
              <i class="bi bi-box-arrow-up-right text-[8px]"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Animated Progress Tape Bar -->
      <div class="px-1">
        <div class="flex items-center justify-between text-[9px] font-mono text-gray-400 mb-1">
          <span>00:{{ Math.floor((progressPercent / 100) * 45).toString().padStart(2, '0') }}</span>
          <span class="font-silkscreen text-[8px] text-[#ffd700]">TAPE SOUND ENGINE</span>
          <span>00:45</span>
        </div>

        <div class="h-2 bg-black rounded-none border border-black/80 overflow-hidden shadow-[inset_0_0_4px_#000]">
          <div 
            class="h-full transition-all duration-300 relative"
            :class="theme === 'pixel' ? 'bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#ffd700]' : 'bg-[#1db954]'"
            :style="{ width: `${progressPercent}%` }"
          >
            <div class="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { useTheme } from '@/composables/useTheme';

const props = defineProps({
  themeOverride: {
    type: String,
    default: ''
  },
  discordId: {
    type: String,
    default: '' // Optional Discord User ID for Lanyard API
  },
  spotifyEmbedUrl: {
    type: String,
    default: 'https://open.spotify.com/embed/playlist/0YSzquUNB6qYW9ukvaPZ66'
  },
  customTracks: {
    type: Array,
    default: () => []
  }
});

const { lang } = useLanguage();
const { currentTheme } = useTheme();

const theme = computed(() => props.themeOverride || currentTheme.value);
const isId = computed(() => lang.value === 'ID');

const audioPlayer = ref(null);
const isListening = ref(false);
const isPlaying = ref(false);
const showEmbed = ref(false);
const progressPercent = ref(0);
let progressInterval = null;

// Web Audio API Synthesizer Fallback for 8-Bit Chiptune Melody
let audioCtx = null;
let synthTimer = null;

const formattedEmbedUrl = computed(() => {
  if (!props.spotifyEmbedUrl) return 'https://open.spotify.com/embed/playlist/0YSzquUNB6qYW9ukvaPZ66';
  if (props.spotifyEmbedUrl.includes('/embed/')) return props.spotifyEmbedUrl;
  return props.spotifyEmbedUrl.replace('open.spotify.com/', 'open.spotify.com/embed/');
});

// Curated 8-Bit / Synth Playlist Tracks with Audio URLs
const defaultTracks = [
  {
    title: '8-Bit Cyberpunk Theme',
    artist: 'Retro Chiptune Soundtrack',
    albumArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=8-bit-arcade-138828.mp3',
    spotifyUrl: 'https://open.spotify.com/playlist/0YSzquUNB6qYW9ukvaPZ66'
  },
  {
    title: 'Midnight Synthwave Drive',
    artist: 'Neon Pixel Chiptune',
    albumArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cyberpunk-2099-10701.mp3',
    spotifyUrl: 'https://open.spotify.com/playlist/0YSzquUNB6qYW9ukvaPZ66'
  },
  {
    title: 'Arcade Level Boss Vibe',
    artist: 'Retro Arcade Orchestra',
    albumArt: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_8b86d94df0.mp3?filename=8-bit-retro-game-music-23214.mp3',
    spotifyUrl: 'https://open.spotify.com/playlist/0YSzquUNB6qYW9ukvaPZ66'
  }
];

const trackIndex = ref(0);
const liveTrack = ref(null);

const activeTrack = computed(() => {
  if (liveTrack.value) return liveTrack.value;
  if (props.customTracks && props.customTracks.length > 0) {
    return props.customTracks[trackIndex.value % props.customTracks.length];
  }
  return defaultTracks[trackIndex.value % defaultTracks.length];
});

// Web Audio API 8-Bit Sound Generator
const playChiptuneNote = (freq, duration = 0.15) => {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'square'; // Classic 8-Bit Square Wave
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Ignore audio context errors
  }
};

const notesMelody = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 440.00, 587.33];
let noteIdx = 0;

const startChiptuneSynth = () => {
  stopChiptuneSynth();
  synthTimer = setInterval(() => {
    if (isPlaying.value) {
      playChiptuneNote(notesMelody[noteIdx % notesMelody.length]);
      noteIdx++;
    }
  }, 220);
};

const stopChiptuneSynth = () => {
  if (synthTimer) clearInterval(synthTimer);
  synthTimer = null;
};

const toggleAudioPlay = () => {
  if (isPlaying.value) {
    pauseAudio();
  } else {
    playAudio();
  }
};

const playAudio = async () => {
  isPlaying.value = true;

  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }
  } catch (e) {
    // Ignore audio context errors
  }

  startChiptuneSynth();

  if (audioPlayer.value) {
    try {
      await audioPlayer.value.play();
    } catch (e) {
      // Browsers may block mp3 autoplay until user interaction, fallback to Web Audio
    }
  }
};

const pauseAudio = () => {
  isPlaying.value = false;
  stopChiptuneSynth();

  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
};

const autoShuffleTrack = () => {
  let nextIdx;
  if (defaultTracks.length > 1) {
    do {
      nextIdx = Math.floor(Math.random() * defaultTracks.length);
    } while (nextIdx === trackIndex.value);
  } else {
    nextIdx = 0;
  }
  trackIndex.value = nextIdx;
  progressPercent.value = 0;
  if (isPlaying.value) {
    setTimeout(() => playAudio(), 50);
  }
};

const nextTrack = () => {
  trackIndex.value = (trackIndex.value + 1) % defaultTracks.length;
  progressPercent.value = 0;
  if (isPlaying.value) {
    setTimeout(() => playAudio(), 50);
  }
};

const prevTrack = () => {
  trackIndex.value = (trackIndex.value - 1 + defaultTracks.length) % defaultTracks.length;
  progressPercent.value = 0;
  if (isPlaying.value) {
    setTimeout(() => playAudio(), 50);
  }
};

const fetchLanyardStatus = async () => {
  if (!props.discordId) return;
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${props.discordId}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data?.spotify) {
        const spotify = data.data.spotify;
        isListening.value = true;
        liveTrack.value = {
          title: spotify.song,
          artist: spotify.artist,
          albumArt: spotify.album_art_url,
          audioUrl: defaultTracks[0].audioUrl,
          spotifyUrl: `https://open.spotify.com/track/${spotify.track_id}`
        };
      }
    }
  } catch (err) {
    // Keep fallback
  }
};

watch(trackIndex, async () => {
  if (audioPlayer.value) {
    audioPlayer.value.load();
    if (isPlaying.value) {
      try {
        await audioPlayer.value.play();
      } catch (e) {}
    }
  }
});

// Auto play on return to Tape Card mode or theme change (Pixel theme only)
watch(showEmbed, (isEmbed) => {
  if (isEmbed || theme.value !== 'pixel') {
    pauseAudio();
  } else {
    playAudio();
  }
});

watch(theme, (newTheme) => {
  if (newTheme === 'pixel' && !showEmbed.value) {
    playAudio();
  } else {
    pauseAudio();
  }
}, { immediate: true });

const handleFirstInteraction = () => {
  if (!isPlaying.value && !showEmbed.value && theme.value === 'pixel') {
    playAudio();
  }
  window.removeEventListener('click', handleFirstInteraction);
  window.removeEventListener('keydown', handleFirstInteraction);
  window.removeEventListener('touchstart', handleFirstInteraction);
};

onMounted(() => {
  if (props.discordId) {
    fetchLanyardStatus();
  }

  // Auto play when entering pixel theme
  if (theme.value === 'pixel' && !showEmbed.value) {
    playAudio();
  } else {
    pauseAudio();
  }

  // Attach interaction fallback for browsers with strict autoplay policies
  window.addEventListener('click', handleFirstInteraction, { once: true });
  window.addEventListener('keydown', handleFirstInteraction, { once: true });
  window.addEventListener('touchstart', handleFirstInteraction, { once: true });

  // Progress Bar update & Automatic track shuffle on completion
  progressInterval = setInterval(() => {
    if (isPlaying.value) {
      progressPercent.value += 0.8;
      if (progressPercent.value >= 100) {
        autoShuffleTrack();
      }
    }
  }, 800);
});

onUnmounted(() => {
  pauseAudio();
  if (progressInterval) clearInterval(progressInterval);
  window.removeEventListener('click', handleFirstInteraction);
  window.removeEventListener('keydown', handleFirstInteraction);
  window.removeEventListener('touchstart', handleFirstInteraction);
});
</script>

<style scoped>
@keyframes eqBar {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}

.animate-eq-bar {
  animation: eqBar 0.6s ease-in-out infinite alternate;
}

@keyframes spinSpool {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-spool {
  animation: spinSpool 4s linear infinite;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spinSlow 10s linear infinite;
}

/* CRT Scanlines Overlay */
.crt-scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.25) 50%
  ), linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.03),
    rgba(0, 255, 0, 0.01),
    rgba(0, 0, 255, 0.03)
  );
  background-size: 100% 3px, 6px 100%;
}

.text-shadow-pixel {
  text-shadow: 1px 1px 0px #000000;
}
</style>
