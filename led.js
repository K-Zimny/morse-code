/**
 * led.js
 *
 * Handles illumination of status light (led).
 */
function ledStatus(status) {
  if (status === "on") {
    led.classList.add("active");
    return;
  }
  if (status === "off") {
    led.classList.remove("active");
    return;
  }
}

export { ledStatus };
