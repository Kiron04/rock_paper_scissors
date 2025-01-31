//////////////////// Layout of the game.
// 1. The score is set to zero for both players.
// The game starts. 
// 2. A function needs to be created to get the value from the computer. 
// 3. A function needs to be created to get the value from the human. 
// 4. Checking function to compare results and displays outcome 
// 5. Display the score after the round 
// 6. Repeat the game for 5 rounds. 


//////////////////// Score ////////////////////
// let humanScore = 0;
// let computerScore = 0;


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


// function playGame() {
//     // A counter is set to zero, this is to keep count of how many rounds the user plays with the computer. 
//     i = 0
//     // i <= 2 totals 3 rounds of rock paper scissors.
//     while (i <=2) {
//         // Gets the human choice and saves the value into the variable human selection. 
//         let humanSelection = getHumanChoice();
//         // gets the computer choice and saves the value into the varible computer selection. 
//         let computerSelection = getComputerChoice(1,4);
//         playRound(humanSelection, computerSelection);
//         i++;
//     }
// }

// playGame();


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

// playGmae(); Uncomment me

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

// Logic for round
// // get human choice
// // get computer choice
// // determine the winner
// // announce the winner
// // update the score
