//computer randomizer
let getComputerChoice = Math.random();
if (getComputerChoice < .33) {
    console.log('rock');
} else if (getComputerChoice <= .66) {
    console.log('paper');
} else {
    console.log('scissors');
}

if (playerSelection = 'rock') {
    let playSelection = .33
} else if (playerSelection = 'paper') {
    let playSelection = .66
} else if (playerSelection = 'scissors') {
    let playSelection = .99
}

//declaring winner
function playRound(playerSelection, getComputerChoice) {
    if ((playerSelection.toLowerCase() = 'rock') & (computerSelection = 'paper')) {
        return

        console.log('You Lose! Paper beats Rock')
        console.log('You Lose! Scissors beats paper')
        console.log('You lose! Rock beats scissors')
        console.log('You win! Paper beats Rock')
        console.log('You win! Scissors beats paper')
        console.log('You win! Rock beats scissors')
    }
}
const computerSelection = getComputerChoice
function game (playRound) {
    for (let i = 0; i < 5; i++)
    console.log(playRound(playerSelection, computerSelection));
}
const playSelection = "rock";

