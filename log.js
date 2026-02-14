/**
 * log.js
 *
 * Processes a signal and prepends element to the dom's 'log' container element.
 */

const log = document.querySelector("#log");

function writeToLog(signal) {
  const el = document.createElement("li");

  if (signal === "short") {
    console.log("short");
  }
  if (signal === "long") {
    console.log("long");
  }

  log.prepend(el);
}

export { writeToLog };
