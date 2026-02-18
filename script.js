/**
 * script.js
 *
 * Main App Entry Point
 *
 * Defines functions that run on button press and release.
 */

import { audio } from "./modules/audio.js";
import { ledStatus } from "./modules/led.js";
import { signalTimer } from "./modules/signal.js";
import { writeToLog } from "./modules/log.js";
import { setupListeners } from "./modules/eventlisteners.js";

function handleButtonPress() {
  ledStatus.on();
  audio.on();
  signalTimer.start();
}

function handleButtonRelease() {
  ledStatus.off();
  audio.off();
  signalTimer.end();
  writeToLog(signalTimer.process());
}

setupListeners(handleButtonPress, handleButtonRelease);
