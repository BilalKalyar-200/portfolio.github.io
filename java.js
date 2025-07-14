// AOS Initialization
AOS.init({
  duration: 1500,
  once: true, // Animate only once when scrolling down
});

// Typewriter Animation
const phrases = [
  "Turning ideas into code...",
  "Building what matters, line by line...",
  "Building real-world tech projects...",
  "Learning, coding, and growing...",
];

let i = 0; // Index of current phrase
let j = 0; // Index within the current phrase
let isDeleting = false;
let currentText = "";
let typewriter = null;

function type() {
  if (!typewriter) return;

  const fullPhrase = phrases[i];

  if (isDeleting === true) {
    if (j > 0) {
      j--;
      currentText = fullPhrase.substring(0, j);
    } else {
      isDeleting = false;
      i = i + 1;
      if (i >= phrases.length) {
        i = 0;
      }
    }
  } else {
    if (j <= fullPhrase.length) {
      currentText = fullPhrase.substring(0, j);
      j++;
    }

    if (j > fullPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  }

  typewriter.innerHTML = `<span class="typewriter-line">${currentText}</span><span class="cursor">|</span>`;

  let speed;
  if (isDeleting === true) {
    speed = 30;
  } else {
    speed = 60;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  typewriter = document.getElementById("typewriter");
  if (typewriter !== null) {
    type();
  }
});
