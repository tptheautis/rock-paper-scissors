//start
window.onload
let playerScore = 0;
let computerScore = 0;
console.log(playerScore);
console.log(computerScore);
//UI

//playerSelection
window.onload=function() {
    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorsBtn = document.getElementById('scissorsBtn');
    const playerScoreDoc = document.getElementById('playerScore');
    const computerScoreDoc = document.getElementById('computerScore');

    rockBtn.addEventListener('click', () => btn('rock'));
    paperBtn.addEventListener('click', () => btn('paper'));
    scissorsBtn.addEventListener('click', () => btn('scissors'));

    function btn(playerSelection) {
        const computerSelection = randomChoice();
        playRound(playerSelection, computerSelection);
        updateChoices(playerSelection, computerSelection);
    }
}

//updates
function updateChoices(playerSelection, computerSelection) {
    document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
    document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`;
}

//computerSelection
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
        console.log('You won that round!')

    } else if(
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') )
    {
        computerScore++;
        winner = 'computer'
        console.log('Computer won that round!')
    
    }
    playGame();
}

function playGame() {
    if (playerScore == 5) {
        console.log('You won the game!')
        restart();
    } else if (computerScore == 5) {
        console.log('You lost the game!')
        restart();
    }
}

//Restart
function restart() {
    playerScore = 0;
    computerScore = 0;
    console.log(playerScore);
    console.log(computerScore);
}
