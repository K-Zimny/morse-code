// Audio
const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
oscillator.type = "sine";
oscillator.frequency.setValueAtTime(675, audioCtx.currentTime);

const audioGain = audioCtx.createGain();
audioGain.gain.value = 0;
oscillator.connect(audioGain);
audioGain.connect(audioCtx.destination);

oscillator.start();

async function playBeep() {
  if (audioCtx.state !== "running") await audioCtx.resume();
  const t = audioCtx.currentTime;
  audioGain.gain.cancelScheduledValues(t);
  audioGain.gain.setValueAtTime(audioGain.gain.value, t);
  audioGain.gain.linearRampToValueAtTime(1, t + 0.005);
}

function stopBeep() {
  const t = audioCtx.currentTime;
  audioGain.gain.cancelScheduledValues(t);
  audioGain.gain.setValueAtTime(audioGain.gain.value, t);
  audioGain.gain.linearRampToValueAtTime(0, t + 0.005);
}

export { playBeep, stopBeep };
