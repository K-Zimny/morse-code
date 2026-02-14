let startTime = undefined;
let endTime = undefined;

function startSignalTimer() {
  startTime = Date.now();
}

function endSignalTimer() {
  endTime = Date.now();
}

function determineSignal() {
  let signal = null;
  if (endTime - startTime >= 300) {
    signal = "long";
  } else {
    signal = "short";
  }
  startTime = undefined;
  endTime = undefined;

  return signal;
}

export { startSignalTimer, endSignalTimer, determineSignal };
