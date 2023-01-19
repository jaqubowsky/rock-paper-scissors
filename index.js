const playerChoiceRock = document.querySelector(".rock-el");
const playerChoicePaper = document.querySelector(".paper-el");
const playerChoiceScissors = document.querySelector(".scissors-el");
const playerScore = document.getElementById("score-player-el");
const computerScore = document.getElementById("score-computer-el");
const scoreTextEl = document.querySelector(".score-text-el");
const scoreSubtextEl = document.querySelector(".score-subtext-el");
const playerSignIcon = document.querySelector(".playerIcon");
const computerSignIcon = document.querySelector(".computerIcon");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const restartBtn = document.querySelector(".modal__close");

document.addEventListener("click", (e) => {
  if (e.target === playerChoiceRock) {
    game.playGame(player, computer, playerChoiceRock.textContent);
  }
  if (e.target === playerChoicePaper) {
    game.playGame(player, computer, playerChoicePaper.textContent);
  }
  if (e.target === playerChoiceScissors) {
    game.playGame(player, computer, playerChoiceScissors.textContent);
  }
  if (e.target === restartBtn) {
    game.restartGame(player, computer);
  }
});

class Player {
  choice = "";
  score = 0;
  isWinner = false;

  constructor() {
    this.choice = "❔";
    this.score = 0;
    this.isWinner = false;
  }

  updateChoice(choice) {
    this.choice = choice;
  }

  get score() {
    return this.score;
  }

  get isWinner() {
    return this.isWinner;
  }

  get choice() {
    return this.choice;
  }
}

class Computer extends Player {
  updateChoice() {
    this.choice = ["✊", "✋", "✌"][Math.floor(Math.random() * 3)];
  }
}

class Game {
  getRoundResult(player, computer) {
    if (player.choice === computer.choice) {
      player.isWinner = false;
      computer.isWinner = false;
    }
    if (player.choice === "✊" && computer.choice === "✌") {
      player.isWinner = true;
      computer.isWinner = false;
    }
    if (player.choice === "✊" && computer.choice === "✋") {
      player.isWinner = false;
      computer.isWinner = true;
    }
    if (player.choice === "✋" && computer.choice === "✌") {
      player.isWinner = false;
      computer.isWinner = true;
    }
    if (player.choice === "✋" && computer.choice === "✊") {
      player.isWinner = true;
      computer.isWinner = false;
    }
    if (player.choice === "✌" && computer.choice === "✋") {
      player.isWinner = true;
      computer.isWinner = false;
    }
    if (player.choice === "✌" && computer.choice === "✊") {
      player.isWinner = false;
      computer.isWinner = true;
    }
  }

  getWinner(player, computer) {
    if (!player.isWinner && !computer.isWinner) {
      scoreSubtextEl.textContent = `${player.choice} ties with ${player.choice}`;
      scoreTextEl.textContent = "It's a tie!";
      return;
    }

    if (player.isWinner) {
      player.score += 1;
      scoreSubtextEl.textContent = `${player.choice} beats ${computer.choice}`;
      scoreTextEl.textContent = "You win!";
    } else {
      computer.score += 1;
      scoreSubtextEl.textContent = `${computer.choice} beats ${player.choice}`;
      scoreTextEl.textContent = "You lose!";
    }

    if (player.score === 5) openModal("You win");
    if (computer.score === 5) openModal("You lose");
  }

  playGame(player, computer, choice) {
    player.updateChoice(choice);
    computer.updateChoice();

    this.getRoundResult(player, computer);
    this.getWinner(player, computer);

    playerSignIcon.textContent = player.choice;
    computerSignIcon.textContent = computer.choice;
    playerScore.textContent = player.score;
    computerScore.textContent = computer.score;
  }

  restartGame(player, computer) {
    player.score = 0;
    computer.score = 0;
    player.choice = "❔";
    computer.choice = "❔";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    scoreTextEl.textContent = "Choose your weapon";
    scoreSubtextEl.textContent = "First to score 5 points wins the game";
    modal.style.display = "none";
  }
}

const player = new Player();
const computer = new Computer();
const game = new Game();

function openModal(title) {
  modalTitle.textContent = title;
  modal.style.display = "flex";
  return;
}
