# Morse Code

A single-page web app built for the **one-button app challenge**: it simulates a telegraph and teaches the international distress signal **SOS** (··· --- ···). Press one button — or the space bar — to send short (dot) or long (dash) signals with an audible 675 Hz tone.

## What it does

- **Telegraph-style input** — One button (or space bar). Short press = dot, long press = dash (200 ms threshold).
- **Audio feedback** — 675 Hz sine tone while the key/button is held (Web Audio API).
- **Visual feedback** — LED turns on while transmitting; a log shows your recent dots and dashes as animated signals.
- **SOS reference** — The page explains the history of Morse and telegraphy and displays the SOS pattern (three dots, three dashes, three dots) so you can practice it.

No build step: open `index.html` in a modern browser (or serve the folder) and use it.

## How to run

1. **Open directly**  
   Open `index.html` in a browser. Note: ES modules may require a local server when using `file://`.

## Project structure

```
morse/
├── index.html      # Page content and structure
├── style.css       # Layout, telegraph/button/LED and log styles
├── script.js       # Entry point: ties button/key events to audio, LED, signal, log
├── readme.md
└── modules/
    ├── audio.js          # Web Audio oscillator + gain (tone on/off)
    ├── led.js            # LED on/off state
    ├── signal.js         # Measures press duration → short vs long
    ├── log.js            # Appends dot/dash elements to the log
    └── eventlisteners.js # Button + space bar press/release
```

## Tech

- Vanilla HTML, CSS, and JavaScript (ES modules).
- Web Audio API for the 675 Hz tone with smooth gain ramps.
- No frameworks or build tools.

## License

Use and modify as you like.
