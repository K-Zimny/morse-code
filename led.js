// Turns LED on or off
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
