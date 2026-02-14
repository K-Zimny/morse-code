/**
 * led.js
 *
 * Handles illumination of status light (led).
 */
const led = document.querySelector("#led");

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
