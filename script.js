const loveMessages = [
  "You make my bad days better ❤️☀️",
  "I feel safe when I talk to you and can share anything without fear of being judged 🫂💬",
  "You support my dreams and you are always there for me in my hard times 🌟💪",
  "You make me laugh without trying 😄😂🎉",
  "You are my favorite person 🥰💖",
  "I know how much important I am to you and how much you care about me 💕🥹",
  "I choose you. Every single day 💖🌹",
  "I know I offend you with my brutal words because I am mad 😅🙈💌"
];

let index = 0;
let clickCount = 0;
let musicPlayed = false;

function playMusic() {
  if (!musicPlayed) {
    document.getElementById("bg-music").play();
    musicPlayed = true;
  }
}

function showLove() {
  const messageDiv = document.getElementById("message");
  messageDiv.innerText = loveMessages[index];

  createHeart();
  clickCount++;

  if (clickCount === 4) {
    document.getElementById("gallery").classList.remove("hidden");
  }

  index++;
  if (index === loveMessages.length) {
    showFinalMessage();
    index = 0;
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function showFinalMessage() {
  setTimeout(() => {
    alert(
      "You reached the end 💖\n\nJust wanted to say...\nI love you more than words.\nHappy Valentine’s Day ❤️"
    );
  }, 500);
}
