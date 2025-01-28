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

//////////////////// Logic for computer choice ////////////////////
function getComputerChoice(min, max){
    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    
    if (computerChoice == 1)
    {
        return "rock";
    }
    
    else if (computerChoice == 2)
    {
        return "paper";
    } 
    
    else
    {
        return "scissors";
    }

}

//////////////////// Logic for human choice ////////////////////
// function getHumanChoice() {
//     // This is the value that the human enters.
//     let humanChoice = String(window.prompt("Please Choose One: rock  paper  scissors"));
//     // This changes the value to lowercase. 
//     let humanAnswer = humanChoice.toLowerCase();

//     if (humanAnswer != "rock" && humanAnswer != "paper" && humanAnswer != "scissors") {
//         console.log("Error, Please Try Again.");
//         getHumanChoice();
//     } else {
//         return humanAnswer;
//     }
// }


//////////////////// Logic for play round ////////////////////
function playRound(humanAnswer, computerChoice){
    console.log("Human has entered", humanAnswer);
    console.log("COM has entered", computerChoice);

    if (humanAnswer == computerChoice)
    {
        console.log("It's a TIE");
    }
    
    else if (humanAnswer === 'rock' && computerChoice === 'paper')
    {
        console.log("COMPUTER WINS! Paper beats rock.")
        computerScore += 1;
    }
    
    else if (humanAnswer === 'paper' && computerChoice === 'scissors')
    {
        console.log("COMPUTER WINS! Scissors beats paper.")
        computerScore += 1;
    }
    
    else if (humanAnswer === 'scissors' && computerChoice === 'rock')
    {
        console.log("COMPUTER WINS! rock beats scissors.")
        computerScore += 1;
    }
    
    else if (humanAnswer === 'rock' && computerChoice === 'scissors')
    {
        console.log("HUMAN WINS! Rock beats scissors.")
        humanScore += 1;
    }
    
    else if (humanAnswer === 'paper' && computerChoice === 'rock')
    {
        console.log("HUMAN WINS! Paper beats rock.")
        humanScore += 1;
    }
    
    else if (humanAnswer === 'scissors' && computerChoice === 'paper')
    {
        console.log("HUMAN WINS! scissors beats paper.")
        humanScore += 1;
    }
    
    console.log("COMPUTER SCORE", computerScore);
    console.log("HUMAN SCORE", humanScore); 
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

// get references to the buttons
const buttons = document.querySelectorAll('button');

// possible choices
const choices = ['rock', 'paper', 'scissors'];

// add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        console.log(userChoice);
        // playGame(userChoice);
    });
});



