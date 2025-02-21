//////////////////// Logic for play round ////////////////////
function playRound(humanChoice, computerChoice){
    player_choice_text.textContent = `Player Chose: ${humanChoice}`; //this will update the player choice title to change to what the player chooses. 
    computer_choice_text.textContent = `Computer Chose: ${computerChoice}`; //this will update the computer choice title to change to what the computer chooses.

    if (humanChoice == computerChoice) // if the result is a tie
    {
        announcement_text.textContent = "It's a TIE"; // announces that it is a tie
        ties += 1; // increment the tie score by one
        ties_text.textContent = `Ties: ${ties}`; // change the score on the webpage to the tie total.
    }
    
    ////////// If the computer wins the round ////////// 
    else if (humanChoice === 'rock' && computerChoice === 'paper') 
    {
        announcement_text.textContent = `COMPUTER WINS! Paper beats rock.`; 
        computerScore += 1; 
        computer_score_text.textContent = `Computer Score: ${computerScore}`; 
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'scissors') // if the computer wins
    {
        announcement_text.textContent = `COMPUTER WINS! Scissors beats paper.`; // announces that the computer wins
        computerScore += 1; // increment the computer score by one
        computer_score_text.textContent = `Computer Score: ${computerScore}`; // change the score on the webpage to the computer score total.
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        announcement_text.textContent = `COMPUTER WINS! rock beats scissors.`;
        computerScore += 1;
        computer_score_text.textContent = `Computer Score: ${computerScore}`;
    }
    
    ////////// If the player wins //////////
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        announcement_text.textContent = `HUMAN WINS! Rock beats scissors.`;
        playerScore += 1;
        player_score_text.textContent = `Player Score: ${playerScore}`;
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        announcement_text.textContent = `HUMAN WINS! Paper beats rock.`;
        playerScore += 1;
        player_score_text.textContent = `Player Score: ${playerScore}`;
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        announcement_text.textContent = `HUMAN WINS! scissors beats paper.`;
        playerScore += 1;
        player_score_text.textContent = `Player Score: ${playerScore}`;
    }
}
// End of play round logic


// main game logic
function playGmae(humanChoice) {
    const computerChoice = getComputerChoice();
    if (playerScore === 5 || computerScore === 5)
    {
        console.log("End of game")
    }
    else{
        playRound(humanChoice, computerChoice);    
    } 
}

// Score 
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Selections
const player_score_text = document.querySelector('#player-score-text');
const ties_text = document.querySelector('#ties-text');
const computer_score_text = document.querySelector('#computer-score-text');

const announcement_text = document.querySelector('#announcement-text');

const player_choice_text = document.querySelector('#player-choice-text');
const computer_choice_text = document.querySelector('#computer-choice-text');




// logic for human choice
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        playGmae(humanChoice);
    });
});

// Logic for computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return (choices[randomIndex]); // This will return the value into computerChoice.
}
