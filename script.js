const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

const getOutcome = () => {
    let message;
    if (computerScore > playerScore) {
        message = 'Computer Wins!'
    } else if (playerScore > computerScore) {
        message = 'Player Wins!'
    } else {
        message = 'Draw!'
    }
    return message
}

const updateScoresDiv = () => {
    const playerScoreDiv = document.querySelector('#player-score');
    playerScoreDiv.textContent = `Player's Score \n${playerScore} Wins`;

    const computerScoreDiv = document.querySelector('#computer-score');
    computerScoreDiv.textContent = `Computer's Score \n${computerScore} Wins`;

    const drawsDiv = document.querySelector('#draw');
    drawsDiv.textContent = `Draws \n${draws}`;
}

let computerScore = 0;
let playerScore = 0;
let draws = 0;
let numberOfRounds = 0;

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();

    if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper') {
            computerScore++;
    } else 
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerScore++;
    } else{
        draws++;
    }
    numberOfRounds++;

    if (numberOfRounds >= 5) {
        endOfGameDisplay()
    }

    updateScoresDiv()
}

const endOfGameDisplay = () => {
    const optionsDiv = document.querySelector('#options-container');
    optionsDiv.style.display = 'None';

    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = getOutcome();

    const playAgainBtn = document.createElement('button')
    playAgainBtn.textContent = 'Play Again';
    
    const parentDiv = document.querySelector('#scores-container').parentNode;
    parentDiv.insertBefore(resultsDiv, optionsDiv)
    parentDiv.appendChild(playAgainBtn, optionsDiv)
    
    playAgainBtn.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;
        draws = 0;
        numberOfRounds = 0;

        resultsDiv.remove();
        playAgainBtn.remove();
        updateScoresDiv()
        optionsDiv.style.display = 'Block';
    })
}

// Buttons 
const rockButton = document.querySelector('#rock-button');
rockButton.addEventListener('click', () => {
    playRound('Rock');
  });

const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', () => {
    playRound('Paper');
  });

const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', () => {
    playRound('Scissors');
  });

