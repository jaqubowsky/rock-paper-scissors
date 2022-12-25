let playerScoreValue = 0;
let computerScoreValue = 0;

const choices = ["Rock", "Paper", "Scissors"];
const playerChoiceRock = document.querySelector(".rock-el");
const playerChoicePaper = document.querySelector(".paper-el");
const playerChoiceScissors = document.querySelector(".scissors-el");
const playerScore = document.getElementById("score-player-el");
const computerScore = document.getElementById("score-computer-el");
const scoreTextEl = document.querySelector(".score-text-el");
const scoreSubtextEl = document.querySelector(".score-subtext-el");
const playerSignIcon = document.querySelector(".playerIcon");
const computerSignIcon = document.querySelector(".computerIcon");

function getComputerChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function updateMessage(playerSelection, computerSelection) {
	if (isWinning(playerSelection, computerSelection) === true) {
		playerScoreValue += 1;
		scoreSubtextEl.textContent = `${playerSelection} beats ${computerSelection}`;
		scoreTextEl.textContent = "You win!";
	} else if (isWinning(playerSelection, computerSelection) === false) {
		computerScoreValue += 1;
		scoreSubtextEl.textContent = `${computerSelection} beats ${playerSelection}`;
		scoreTextEl.textContent = "You lose!";
	} else if (isWinning(playerSelection, computerSelection) === "tie") {
		scoreSubtextEl.textContent = `${playerSelection} ties with ${playerSelection}`;
		scoreTextEl.textContent = "It's a tie!";
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

function updateScoreboard(playerSelection, computerSelection) {
	switch (playerSelection) {
		case "Rock":
			playerSignIcon.textContent = "✊";
			break;
		case "Paper":
			playerSignIcon.textContent = "✋";
			break;
		case "Scissors":
			playerSignIcon.textContent = "✌";
			break;
	}

	switch (computerSelection) {
		case "Rock":
			computerSignIcon.textContent = "✊";
			break;
		case "Paper":
			computerSignIcon.textContent = "✋";
			break;
		case "Scissors":
			computerSignIcon.textContent = "✌";
			break;
	}
}

function game(playerSelection, computerChoice) {
	if (playerScoreValue >= 5 || computerScoreValue >= 5) {
		return;
	} else {
		updateMessage(playerSelection, computerChoice);
		updateScoreboard(playerSelection, computerChoice);
	}
}

playerChoiceRock.addEventListener("click", function () {
	game("Rock", getComputerChoice(choices));
});

playerChoiceScissors.addEventListener("click", function () {
	game("Scissors", getComputerChoice(choices));
});

playerChoicePaper.addEventListener("click", function () {
	game("Paper", getComputerChoice(choices));
});
