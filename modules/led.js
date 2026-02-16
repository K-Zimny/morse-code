/**
 * led.js
 *
 * Handles illumination of status light (led).
 */

const ledStatus = {
  led: document.querySelector("#led"),
  on() {
    this.led.classList.add("active");
  },
  off() {
    this.led.classList.remove("active");
  },
};

export { ledStatus };
