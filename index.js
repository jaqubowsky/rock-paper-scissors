let playerScoreValue = 0;
let computerScoreValue = 0;

const choices = ["Rock", "Paper", "Scissors"];
const playerChoiceRock = document.querySelector(".rock-el");
const playerChoicePaper = document.querySelector(".paper-el");
const playerChoiceScissors = document.querySelector(".scissors-el");
const playerScore = document.getElementById("score-player-el");
const computerScore = document.getElementById("score-computer-el");
const scoreSubtextEl = document.querySelector(".score-subtext-el");

function getComputerChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function updateMessage(playerSelection, computerSelection) {
	if (isWinning(playerSelection, computerSelection) === true) {
		playerScoreValue += 1;
		scoreSubtextEl.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
	} else if (isWinning(playerSelection, computerSelection) === false) {
		computerScoreValue += 1;
		scoreSubtextEl.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
	} else if (isWinning(playerSelection, computerSelection) === "tie") {
		scoreSubtextEl.textContent = "It's a tie!";
	}
	playerScore.textContent = playerScoreValue;
	computerScore.textContent = computerScoreValue;
}

function isWinning(playerSelection, computerSelection) {
	if (playerSelection === "Rock" && computerSelection === "Scissors") {
		return true;
	} else if (playerSelection === "Rock" && computerSelection === "Paper") {
		return false;
	} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
		return false;
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		return true;
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		return true;
	} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
		return false;
	} else {
		return "tie";
	}
}

function game(playerSelection) {
	updateMessage(playerSelection, getComputerChoice(choices));
}

playerChoiceRock.addEventListener("click", function () {
	game("Rock");
});

playerChoiceScissors.addEventListener("click", function () {
	game("Scissors");
});

playerChoicePaper.addEventListener("click", function () {
	game("Paper");
});
