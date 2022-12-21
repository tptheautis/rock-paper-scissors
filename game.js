let getComputerChoice = Math.random();
if (getComputerChoice < .33) {
    console.log('rock');
} else if (getComputerChoice <= .66) {
    console.log('paper');
} else {
    console.log('scissors');
}
