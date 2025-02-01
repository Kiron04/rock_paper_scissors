// Layout of the game.
// 1. The score is set to zero for both players.
// The game starts. 
// 2. A function needs to be created to get the value from the computer. 
// 3. A function needs to be created to get the human's choice of what button he clicked.
// 4. The two choices needs to be compared to see who the winner of the round is.
// 5. If the result is a tie, the tie tally will go up by one.
// 6. If the human beats the computer, the human's score will go up by one and a new round will begin.
// 7. If the computer beats the human, the computer score will go up by one and a new round will begin. 
// 8. The game will keep playing until someone reaches the score of 5 and the game will end. 
// 9 A display will show the winner of the game. 
// 10. A link will appear after the game ends to ask if the player wants to play again. 


//////////////////// Logic for play round ////////////////////
function playRound(humanChoice, computerChoice){
    console.log("Human has entered", humanChoice);
    console.log("COM has entered", computerChoice);

    if (humanChoice == computerChoice)
    {
        console.log("It's a TIE");
        ties += 1;
    }
    
    else if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        console.log("COMPUTER WINS! Paper beats rock.")
        computerScore += 1;
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        console.log("COMPUTER WINS! Scissors beats paper.")
        computerScore += 1;
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        console.log("COMPUTER WINS! rock beats scissors.")
        computerScore += 1;
    }
    
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log("HUMAN WINS! Rock beats scissors.")
        playerScore += 1;
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log("HUMAN WINS! Paper beats rock.")
        playerScore += 1;
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log("HUMAN WINS! scissors beats paper.")
        playerScore += 1;
    }
    console.log("PLAYER SCORE: ", playerScore);
    console.log("COMPUTER SCORE: ", computerScore);
    console.log("TIES: ", ties);

}

// Rock Paper Scissors UI Requirements
// Instead of the user typing "rock", "paper" or "scossors" into the box, the user will need to click a button instead to choose their answer.
// Fist step is to create three buttons that are labelled "rock", "paper" and "scissors".
// Once the user clciks on one of these buttons, a varible called user_choice will be created and will save their choice. If the user selected the rock button then their choice will be saved as rock.
// Once the user has made their choice, the computer will pick at random, "rock" "paper" "scissors".
// After both parties have made their choice, we need to compare the answers to select the winner. Rock beats scissors, paper beat rock and scissors beats paper. 
// The window will announce the winner of that round.

// main game logic
function playGmae(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// Score 
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Selections
const player_score_text = document.querySelector('#player-score-text')
const ties_text = document.querySelector('#ties-text');
const computer_score_text = document.querySelector('#player-score-text')

const announcement_text = document.querySelector('#announcement-text');




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



// Logic for round
// // get human choice
// // get computer choice
// // determine the winner
// // announce the winner
// // update the score
