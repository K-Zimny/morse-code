/**
 * signal.js
 *
 * Processes signal to determine if a 'short' or a 'long' press.
 */

const signalTimer = {
  LONG_THRESHOLD: 200,
  startTime: undefined,
  endTime: undefined,
  start() {
    this.startTime = Date.now();
  },
  end() {
    this.endTime = Date.now();
  },
  process() {
    let signal = null;
    if (this.endTime - this.startTime >= this.LONG_THRESHOLD) {
      signal = "long";
    } else {
      signal = "short";
    }
    this.startTime = undefined;
    this.endTime = undefined;
    return signal;
  },
};

export { signalTimer };
