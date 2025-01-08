const titleText = "Ambrel Crest Technologies";
const subtitleText = "Crafting something great—stay tuned!";
const typingTitle = document.getElementById("typing-title");
const typingSubtitle = document.getElementById("typing-subtitle");

let titleLetterIndex = 0;
let subtitleLetterIndex = 0;
let subtitleStarted = false;

// Function to clear text and restart typing
function restartTyping() {
  titleLetterIndex = 0;
  subtitleLetterIndex = 0;
  subtitleStarted = false;
  typingTitle.innerHTML = "";
  typingSubtitle.innerHTML = "";
  typeTitle();  // Start typing the title first
}

// Function to type the title text letter by letter
function typeTitle() {
  if (titleLetterIndex < titleText.length) {
    typingTitle.innerHTML += titleText[titleLetterIndex];
    titleLetterIndex++;
    setTimeout(typeTitle, 100); // Adjust typing speed here
  } else {
    // Once the title is fully typed, start typing the subtitle after a delay
    setTimeout(typeSubtitle, 500);
  }
}

// Function to type the subtitle text letter by letter
function typeSubtitle() {
  if (subtitleLetterIndex < subtitleText.length) {
    typingSubtitle.innerHTML += subtitleText[subtitleLetterIndex];
    subtitleLetterIndex++;
    setTimeout(typeSubtitle, 100); // Adjust typing speed here
  } else {
    // Once the subtitle is fully typed, restart after a delay
    setTimeout(restartTyping, 2000);
  }
}

// Start the typing animation
typeTitle();

// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  } else {
    countdown.innerHTML = "We're Live!";
  }
}

setInterval(updateCountdown, 1000);
