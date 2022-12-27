//computer randomizer
let getComputerChoice = Math.random();
if (getComputerChoice < .33) {
    console.log('rock');
} else if (getComputerChoice <= .66) {
    console.log('paper');
} else {
    console.log('scissors');
}

//round system
function game (playRound) {
    for (let i = 0; i < 5; i++)
    console.log(playRound(playerSelection, computerSelection));
}
const computerSelection = getComputerChoice.toLowerCase;

//loop

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log('Tie!')
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        playerScore = playerScore ++;
    } else {
        computerScore = playerScore ++;
    }
}
//scoring


//rock-paper-scissors button functions

function rock() {
    let playerSelection = 'rock';
    console.log('player selected rock')
}

function paper() {
    let playerSelection = 'paper';
    console.log('player selected paper');
}

function scissors() {
    let playerSelection = 'scissors';
    console.log('player selected scissors');
}