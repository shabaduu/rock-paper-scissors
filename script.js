function computerPlay() {
    let x = Math.floor(Math.random() * 3 + 1);
    return (x == 1) ? "Rock" : (x == 2) ? "Paper" : "Scissors";
}

function humanPlay() {
    let choice = prompt("Enter Rock, Paper, or Scissors.").toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let winner;
    let tie;

    if (playerSelection == "Rock") {
        (computerSelection == "Rock") ? tie = true :
        (computerSelection == "Paper") ? winner = false :
        winner = true;
    }
    if (playerSelection == "Paper") {
        (computerSelection == "Rock") ? winner = true :
        (computerSelection == "Paper") ? tie = true :
        winner = false;
    }
    if (playerSelection == "Scissors") {
        (computerSelection == "Rock") ? winner = false :
        (computerSelection == "Paper") ? winner = true :
        tie = true;
    }

    return (winner == true) ? `You win! ${playerSelection} beats ${computerSelection}.` :
        (tie == true) ? "It's a tie!" :
        `You lose! ${computerSelection} beats ${playerSelection}.`
}

function game() {
    let x = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesTied = 0;

    while (x < 5) {
        let result = playRound(humanPlay(), computerPlay());
        (result.charAt(4) == " ") ? ++gamesTied : (result.charAt(4) == "w") ? ++gamesWon : ++ gamesLost;
        console.log(`Wins: ${gamesWon} \nLosses: ${gamesLost} \nTies: ${gamesTied}`);
        alert(result);
        ++x;
    }
}

game();