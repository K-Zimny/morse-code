/**
 * audio.js
 *
 * Morse Code audio generation.
 * Creates oscillator (tone).
 * Functions provide gain (volume) modulation.
 */

// Setup
const SIGNAL_TYPE = "sine";
const FREQUENCY = 675;
const RAMP_VALUE = 0.005;

// Create oscillator (tone)
const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
oscillator.type = SIGNAL_TYPE;
oscillator.frequency.setValueAtTime(FREQUENCY, audioCtx.currentTime);

// Create gain node (volume)
const audioGain = audioCtx.createGain();
audioGain.gain.value = 0;
oscillator.connect(audioGain);
audioGain.connect(audioCtx.destination);

oscillator.start();

// Sets gain full, tone is audible
async function playBeep() {
  if (audioCtx.state !== "running") await audioCtx.resume();
  const t = audioCtx.currentTime;
  audioGain.gain.cancelScheduledValues(t);
  audioGain.gain.setValueAtTime(audioGain.gain.value, t);
  audioGain.gain.linearRampToValueAtTime(1, t + RAMP_VALUE);
}

// Sets gain zero, tone is not audible
function stopBeep() {
  const t = audioCtx.currentTime;
  audioGain.gain.cancelScheduledValues(t);
  audioGain.gain.setValueAtTime(audioGain.gain.value, t);
  audioGain.gain.linearRampToValueAtTime(0, t + RAMP_VALUE);
}

export { playBeep, stopBeep };
