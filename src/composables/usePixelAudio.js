// Web Audio API 8-Bit Chiptune Sound Effects Synthesizer for Pixel Arcade Theme
export function usePixelAudio() {
  let ctx = null;

  const getCtx = () => {
    try {
      if (!ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        ctx = new AudioContext();
      }
      if (ctx.state === "suspended") {
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
      osc.type = "square";
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
      osc.type = "square";
      osc.frequency.setValueAtTime(523.25, c.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, c.currentTime + 0.06); // C6
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
      const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1318.51];
      notes.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.07);
        gain.gain.setValueAtTime(0.15, c.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          c.currentTime + i * 0.07 + 0.12,
        );
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(c.currentTime + i * 0.07);
        osc.stop(c.currentTime + i * 0.07 + 0.12);
      });
    } catch (e) {}
  };

  // Play Laser SFX (fast pitch drop)
  const playLaserSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(880, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, c.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.12);
    } catch (e) {}
  };

  // Play Explosion SFX (noise + low pitch drop)
  const playExplosionSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, c.currentTime);
      osc.frequency.linearRampToValueAtTime(40, c.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.2);
    } catch (e) {}
  };

  // Play Powerup / Heal SFX
  const playPowerupSfx = () => {
    try {
      const c = getCtx();
      if (!c) return;
      const notes = [330, 440, 554.37, 659.25];
      notes.forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.05);
        gain.gain.setValueAtTime(0.15, c.currentTime + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.05 + 0.15);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(c.currentTime + i * 0.05);
        osc.stop(c.currentTime + i * 0.05 + 0.15);
      });
    } catch (e) {}
  };

  return {
    playCoinSfx,
    playBlipSfx,
    playFanfareSfx,
    playLaserSfx,
    playExplosionSfx,
    playPowerupSfx,
  };
}
