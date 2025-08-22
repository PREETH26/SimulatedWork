const playerScoreEl = document.querySelector("#player-score span");
const computerScoreEl = document.querySelector("#computer-score span");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const messageEl = document.getElementById("message");
const roundInfoEl = document.getElementById("round-info");
const resetBtn = document.getElementById("reset-btn");
const choiceButtons = document.querySelectorAll(".choice-btn");

// Sounds
const clickSound = document.getElementById("click-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
const tieSound = document.getElementById("tie-sound");

let playerScore = 0;
let computerScore = 0;
let round = 1;
const totalRounds = 5;

choiceButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (round > totalRounds) return;

    clickSound.play();

    const playerChoice = btn.dataset.choice;
    const computerChoice = getComputerChoice();

    playerChoiceEl.textContent = capitalize(playerChoice);
    computerChoiceEl.textContent = capitalize(computerChoice);

    const winner = getWinner(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore++;
      messageEl.textContent = "✅ You win this round!";
      messageEl.style.color = "#4ade80";
      winSound.play();
      animateScore(playerScoreEl);
    } else if (winner === "computer") {
      computerScore++;
      messageEl.textContent = "❌ Computer wins this round!";
      messageEl.style.color = "#f87171";
      loseSound.play();
      animateScore(computerScoreEl);
    } else {
      messageEl.textContent = "😐 It's a tie!";
      messageEl.style.color = "#facc15";
      tieSound.play();
    }

    updateScoreboard();

    round++;
    if (round <= totalRounds) {
      roundInfoEl.textContent = `Round ${round} / ${totalRounds}`;
    }

    if (round > totalRounds) {
      endGame();
    }
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScoreboard() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function endGame() {
  if (playerScore > computerScore) {
    messageEl.textContent = "🎉 Congratulations! You Won The Game!";
    messageEl.style.color = "#38bdf8";
  } else if (computerScore > playerScore) {
    messageEl.textContent = "💻 Game Over! Computer Wins The Game!";
    messageEl.style.color = "#ef4444";
  } else {
    messageEl.textContent = "🤝 It's a Tie Game! Try Again!";
    messageEl.style.color = "#facc15";
  }
  resetBtn.classList.remove("hidden");
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerChoiceEl.textContent = "?";
  computerChoiceEl.textContent = "?";
  messageEl.textContent = "Make your choice!";
  messageEl.style.color = "#a78bfa";
  roundInfoEl.textContent = `Round 1 / ${totalRounds}`;
  resetBtn.classList.add("hidden");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function animateScore(element) {
  element.style.transform = "scale(1.4)";
  element.style.color = "#facc15";
  setTimeout(() => {
    element.style.transform = "scale(1)";
    element.style.color = "#fff";
  }, 500);
}
