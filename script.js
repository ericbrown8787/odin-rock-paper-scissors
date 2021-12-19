function game(){
    //Computer play function
    function computerPlay() {
        let options=['rock','paper','scissors'];
        return options[Math.floor(Math.random() * 3)];
    }

    //Function to initiate playing a round
    function playRound(){
        
        let playerSelection = prompt('Please enter "rock", "paper" or "scissors"').toLowerCase();
        
        let computerSelection = computerPlay();
        
            //Player Selection is Rock
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return alert("This round is a tie");
                
            } else if (computerSelection === "paper"){
                computerScore++
                return alert("Computer wins this round.");
                
            } else if (computerSelection === "scissors"){
                playerScore++;
                return alert("Player wins this round.");
            }

            //Player Selection is paper
        } else if (playerSelection === "paper"){
            if (computerSelection === "rock") {
                playerScore++;
                return alert("Player wins this round.");

            } else if (computerSelection === "paper"){
                return alert("This round is a tie");

            } else if (computerSelection === "scissors"){
                computerScore++;
                return alert("Computer wins this round.");
            }

            // Player Selection is Scissors
        } else if (playerSelection === "scissors"){
            if (computerSelection === "rock") {
                computerScore++;
                return alert("Computer wins this round.");

            } else if (computerSelection === "paper"){
                playerScore++;
                return "Player wins this round.";

            } else if (computerSelection === "scissors"){
                return alert("This round is a tie");
            }

            //Player selection is invalid entry(not rock, paper or scissors)
        } else {
            alert("Invalid entry. Please enter Rock, Paper or Scissors.");
            return playRound();
        }
    }

    //Score Counters
    let playerScore= 0;
    let computerScore = 0;
    
    //Looping through five rounds
    for (let i = 0; i < 5; i++){
        playRound();
        alert(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }

    // Determining the winner. 
    if (playerScore > computerScore) {
        alert("You win this time, human.");

    } else if (playerScore < computerScore) {
        alert("Computer wins. Try again, meatbag.");

    } else if (playerScore = computerScore) {
        alert("Our skills are evenly matched.");
    }

}