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
    }
    
    else if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        console.log("COMPUTER WINS! Paper beats rock.")
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        console.log("COMPUTER WINS! Scissors beats paper.")
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        console.log("COMPUTER WINS! rock beats scissors.")
    }
    
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log("HUMAN WINS! Rock beats scissors.")
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log("HUMAN WINS! Paper beats rock.")
    }
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log("HUMAN WINS! scissors beats paper.")
    }
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
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// Logic for player and computer score



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

// Scores 
let humanScore = 0;
let computerScore = 0;

// Logic for round
// // get human choice
// // get computer choice
// // determine the winner
// // announce the winner
// // update the score
