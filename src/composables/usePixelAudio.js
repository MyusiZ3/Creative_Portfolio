// Web Audio API 8-Bit Chiptune Sound Effects Synthesizer for Pixel Arcade Theme
export function usePixelAudio() {
  let ctx = null;

  const getCtx = () => {
    try {
      if (!ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        ctx = new AudioContext();
      }
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      return ctx;
    } catch (e) {
      return null;
    }
  };

  // Play Coin SFX (classic arcade double note pitch glide B5 -> E6)
  const playCoinSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, c.currentTime); // B5
      osc.frequency.setValueAtTime(1318.51, c.currentTime + 0.08); // E6
      gain.gain.setValueAtTime(0.15, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.35);
    } catch (e) {}
  };

  // Play Button Blip SFX
  const playBlipSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(523.25, c.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, c.currentTime + 0.06); // C6
      gain.gain.setValueAtTime(0.08, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.07);
    } catch (e) {}
  };

  // Play Konami Fanfare SFX (classic victory 8-bit arpeggio)
  const playFanfareSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.07);
        gain.gain.setValueAtTime(0.15, c.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.07 + 0.12);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(c.currentTime + i * 0.07);
        osc.stop(c.currentTime + i * 0.07 + 0.12);
      });
    } catch (e) {}
  };

  // Play Power Up SFX
  const playPowerUpSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, c.currentTime);
      osc.frequency.linearRampToValueAtTime(1200, c.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.25);
    } catch (e) {}
  };

  return { playCoinSfx, playBlipSfx, playFanfareSfx, playPowerUpSfx };
}
