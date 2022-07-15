// contains the computer options
const options = ["rock", "paper", "scissors"]; 
let winners = [];

function playerPlay() {
    let inputSelection = prompt("Let's play!!, choose rock , paper or scissors:")
     // To remove spaces and convert everything in lowercase
    inputSelection = inputSelection.toLowerCase().trim();

    return inputSelection;  
}

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(round) {

    let playerSelection = playerPlay();
    const computerSelection = computerPlay();

    const viewWinner = (pOption, cOption) => {
        if (pOption === cOption) {
            return "Tie";
        } else if (
            (pOption === "rock" && cOption == "scissors") ||
            (pOption === "paper" && cOption == "rock") ||
            (pOption === "scissors" && cOption == "paper")
        ) {
            return "Player";
        } else {
            return "Computer";
        }
    }

    const theWinner = viewWinner(playerSelection, computerSelection)
    
    winners.push(theWinner) // store every winner for each round played

    // Display the round results
    roundResults(playerSelection, computerSelection, theWinner, round);
}


function winnerResults() {
    // To filter every item inside of winners array
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
    // Check results
    if(playerWins > computerWins){
        console.log("Awesome!!! you win.")
    } else if(playerWins < computerWins){
        console.log("Loser!!! Computer wins.")
    } else {
        console.log("It's a tie!!!")
    }
}

// Just shows the round results into the browser console
function roundResults(playerPlay, computerPlay, theWinner, round) {
    console.log(`Round: ${round}`);
    console.log(`Player election: ${playerPlay}`);
    console.log(`Computer election: ${computerPlay}`);
    // If the result is a draw
    if(theWinner === 'Tie'){
        console.log("It's a tie!!!!");
    } else {
        console.log(`${theWinner}: You won this round!!!`);
    }
    console.log("==============================================");
}

function game() {
    let moves = 5;

    for (let i = 1; i <= moves; i++) {
        playRound(i);
    }
    winnerResults();
}

game(); 
