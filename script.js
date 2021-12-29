//Score Counters
let playerScore = 0;
let computerScore = 0;

//Divs. These won't actually select the div for some reason
const messageBox = document.getElementById("messageBox");
const playerScoreCounter = document.getElementById("playerScore");
const computerScoreCounter = document.getElementById("computerScore");

function updateScore() {
  playerScoreCounter.innerHTML = `Player Score: ${playerScore}`;
  computerScoreCounter.innerHTML = `Computer Score: ${computerScore}`;
}

//Initial score update so we start at zero.
updateScore();

//Computer play function
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

//Function to initiate playing a round
function playRound(playerSelection) {
  let computerSelection = computerPlay();

  //Player Selection is Rock
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      messageBox.innerHTML = "This round is a tie";
    } else if (computerSelection === "paper") {
      computerScore++;
      messageBox.innerHTML = "Computer wins this round.";
    } else if (computerSelection === "scissors") {
      playerScore++;
      messageBox.innerHTML = "Player wins this round.";
    }

    //Player Selection is paper
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      messageBox.innerHTML = "Player wins this round.";
    } else if (computerSelection === "paper") {
      messageBox.innerHTML = "This round is a tie";
    } else if (computerSelection === "scissors") {
      computerScore++;
      messageBox.innerHTML = "Computer wins this round.";
    }

    // Player Selection is Scissors
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      messageBox.innerHTML = "Computer wins this round.";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "Player wins this round.";
    } else if (computerSelection === "scissors") {
      messageBox.innerHTML = "This round is a tie";
    }
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock");
  updateScore();
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper");
  updateScore();
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors");
  updateScore();
});
