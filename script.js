const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

const playRound = (playerSelection, computerSelection) => {
    let playerSelectionUpper = playerSelection.toUpperCase();
    let computerSelectionUpper = computerSelection.toUpperCase()

    if (playerSelectionUpper === computerSelectionUpper) {
        return 'Draw';
    } else if (playerSelectionUpper === 'ROCK' && computerSelectionUpper === 'PAPER') {
        return 'You Lose! Paper beats Rock';
    } else if (computerSelectionUpper === 'ROCK' && playerSelectionUpper === 'PAPER') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelectionUpper === 'ROCK' && computerSelectionUpper === 'SCISSORS') {
        return 'You Win! Rock beats Scissors';
    } else if (computerSelectionUpper === 'ROCK' && playerSelectionUpper === 'SCISSORS') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelectionUpper === 'SCISSORS' && computerSelectionUpper === 'PAPER') {
        return 'You Win! Scissors beats Paper';
    } else {
        return 'You Lose! Scissors beats Paper';
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game(playerSelection, computerSelection) {
    let message = 'Choose between Rock, Paper and Scissors';
    let inputIsValid = false;
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let validOptions = ['ROCK', 'PAPER', 'SCISSORS'];
        inputIsValid = false;

        while (!inputIsValid) {
            let playerSelection = prompt(message);
            if (validOptions.includes(playerSelection.toUpperCase())){
                inputIsValid = true;
            } else {
                message = `"${playerSelection}" is not an option. Choose between Rock, Paper and Scissors`
            }
        }

        let result = playRound(playerSelection, getComputerChoice());
        
        if (result.includes('Win')) {
            playerScore++;
        } else {
            computerScore++;
        }
        message = 'Choose between Rock, Paper and Scissors';
        message = result + '\n' + message;
    }
    
    if (playerScore > computerScore) {
        console.log('Player Wins the game!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins the game!');
    } else {
        console.log('The game concludes with a draw.');
    }
}

game(playerSelection, computerSelection)