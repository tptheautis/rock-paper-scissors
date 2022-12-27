//start
let playerScore = 0;
let computerScore = 0;

var playerscored = document.querySelector('.playerscored');
playerscored.innerHTML = playerScore;

//Computer Randomizer
function randomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1: 
            return 'Paper'
        case 2: 
            return 'Scissors'
    }
}

//button round system
if (playerScore == 5 || computerScore === 5) {
    whoisthewinner();
}

function whoisthewinner() {
    if (playerScore > computerScore) {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
}
//if loop
function playRound(playerSelection, computerSelection) {
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

//Restart
function restart() {
    playerScore = 0;
    computerScore = 0;

}