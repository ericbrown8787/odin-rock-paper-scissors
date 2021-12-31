function loadGame() {
  //Divs
  const messageBox = document.getElementById("messageBox");
  const playerStatBox = document.getElementById("playerStats");
  const computerStatBox = document.getElementById("computerStats");

  document.getElementById("commandMenu").style.display = "none";
  document.getElementById("replayButton").style.visibility = "hidden";

  function game() {
    document.getElementById("commandMenu").style.display = "block";

    //Score Counters
    let playerHealth = 5;
    let computerHealth = 5;
    let playerHearts = Array(playerHealth).fill("<span>❤️</span>").join("");
    let computerHearts = Array(computerHealth).fill("<span>❤️</span>").join("");

    function setHealthBar() {
      playerStatBox.innerHTML = `<h3>Player</h3> <div class="hearts">${playerHearts}</div>`;
      computerStatBox.innerHTML = `<h3>Computer</h3> <div class="hearts">${computerHearts}</div>`;
    }

    //Function to initiate playing a round
    function playRound(playerSelection) {
      function updateStatsDisplay() {
        let playerMove = playerSelection.toUpperCase();
        let computerMove = computerSelection.toUpperCase();

        //Makes healthbars reflect newly calculated health values
        playerHearts = Array(playerHealth).fill("<span>❤️</span>").join("");
        computerHearts = Array(computerHealth).fill("<span>❤️</span>").join("");

        setHealthBar();

        playerStatBox.innerHTML += `<div>You chose: ${playerMove}</div>`;
        computerStatBox.innerHTML += `<div>Computer chose: ${computerMove}`;

        if (playerHealth === 0) {
          messageBox.innerHTML = "You lose, meatbag!";
          document.getElementById("replayButton").style.visibility = "visible";
          document.getElementById("commandMenu").style.display = "none";
        } else if (computerHealth === 0) {
          messageBox.innerHTML = "You win this time, meatbag!";
          document.getElementById("replayButton").style.visibility = "visible";
          document.getElementById("commandMenu").style.display = "none";
        } else {
          document.getElementById("commandMenu").style.display = "block";
        }
      }

      let computerSelection = computerPlay();

      //Computer play function
      function computerPlay() {
        let options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random() * 3)];
      }

      //Player Selection is Rock
      if (playerSelection === "rock") {
        if (computerSelection === "rock") {
          messageBox.innerHTML = "This round is a tie";
        } else if (computerSelection === "paper") {
          playerHealth--;
          messageBox.innerHTML = "Computer wins this round.";
        } else if (computerSelection === "scissors") {
          computerHealth--;
          messageBox.innerHTML = "Player wins this round.";
        }

        //Player Selection is paper
      } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
          computerHealth--;
          messageBox.innerHTML = "Player wins this round.";
        } else if (computerSelection === "paper") {
          messageBox.innerHTML = "This round is a tie";
        } else if (computerSelection === "scissors") {
          playerHealth--;
          messageBox.innerHTML = "Computer wins this round.";
        }

        // Player Selection is Scissors
      } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          playerHealth--;
          messageBox.innerHTML = "Computer wins this round.";
        } else if (computerSelection === "paper") {
          computerHealth--;
          return "Player wins this round.";
        } else if (computerSelection === "scissors") {
          messageBox.innerHTML = "This round is a tie";
        }
      }

      updateStatsDisplay();
    }

    // //Initial healthbar fill.
    setHealthBar();

    //Initial Messagebox content
    messageBox.innerHTML = "Make your move, human!";

    //Command Menu Buttons
    document.getElementById("rock").addEventListener("click", () => {
      playRound("rock");
    });

    document.getElementById("paper").addEventListener("click", () => {
      playRound("paper");
    });

    document.getElementById("scissors").addEventListener("click", () => {
      playRound("scissors");
    });
  }

  // Start Game Button
  messageBox.innerHTML = "<button id='playButton'>Begin Game</button>";
  document.getElementById("playButton").addEventListener("click", () => {
    game();
  });

  //Restart Game Button
  document.getElementById("replayButton").addEventListener("click", () => {
    loadGame();
    playerStatBox.innerHTML = "";
    computerStatBox.innerHTML = "";
  });
}

loadGame();
