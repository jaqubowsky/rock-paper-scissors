const choices = ["Rock", "Paper", "Scissors"];

const playerChoice = "Scissors";

function getComputerChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
	if (isWinning(playerSelection, computerSelection) === true) {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else if (isWinning(playerSelection, computerSelection) === false) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else if (isWinning(playerSelection, computerSelection) === "tie") {
		return "It's a tie!";
	}
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

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerChoice, getComputerChoice(choices)));
		if (isWinning(playerChoice, getComputerChoice(choices))) {
			playerScore += 1;
		} else {
			computerScore += 1;
		}
		console.log(`Player score: ${playerScore}
Computer score: ${computerScore}`);
	}
}

game();
