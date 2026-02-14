/**
 * eventlisteners.js
 *
 * Sets up spacebar and UI button event handling.
 */

const button = document.querySelector("button");

function setupListeners(handleButtonPress, handleButtonRelease) {
  let isPressed = false;
  button.addEventListener("mousedown", handleButtonPress);
  button.addEventListener("mouseup", handleButtonRelease);
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code == "Space" && isPressed === false) {
      isPressed = true;
      handleButtonPress();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
      isPressed = false;
      handleButtonRelease();
    }
  });
}

export { setupListeners };
