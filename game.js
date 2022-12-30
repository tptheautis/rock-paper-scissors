//start
window.onload
let playerScore = 0;
let computerScore = 0;
console.log(playerScore);
console.log(computerScore);
//UI

//playerselection
window.onload=function() {
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');

    rockBtn.addEventListener('click', () => btn('rock'));
    paperBtn.addEventListener('click', () => btn('paper'));
    scissorsBtn.addEventListener('click', () => btn('scissors'));

    function btn(playerSelection) {
        const computerSelection = randomChoice();
        playRound(playerSelection, computerSelection);
        updateChoices(playerSelection, computerSelection);
    }

    function updateChoices(playerSelection, computerSelection) {

    }
}
//Computer Choice Randomizer
function randomChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2: 
            return 'scissors'
    }
}

//Rounds
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('tie');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') )
    {    
        playerScore++;
        winner = 'player'
        console.log('player won')

    } else if(
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') )
    {
        computerScore++;
        winner = 'computer'
        console.log('computer won')
    
    }
}

function playGame() {
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        console.log('You win the game!')
    } else if (computerScore == 5) {
        playerScore = 0;
        computerSCore = 0;
        console.log('you lose')
    }
}

//Restart
function restart() {
    playerScore = 0;
    computerScore = 0;
}
