//////////////////// Layout of the game.
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


//////////////////// Score ////////////////////
let humanScore = 0;
let computerScore = 0;

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
function getHumanChoice() {
    // This is the value that the human enters.
    let humanChoice = String(window.prompt("Please Choose One: rock  paper  scissors"));
    // This changes the value to lowercase. 
    let humanAnswer = humanChoice.toLowerCase();

    if (humanAnswer != "rock" && humanAnswer != "paper" && humanAnswer != "scissors") {
        console.log("Error, Please Try Again.");
        getHumanChoice();
    } else {
        return humanAnswer;
    }
}


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


function playGame() {
    // Gets the human choice and saves the value into the variable human selection. 
    let humanSelection = getHumanChoice();
    // gets the computer choice and saves the value into the varible computer selection. 
    let computerSelection = getComputerChoice(1,4);
    playRound(humanSelection, computerSelection);
}

// playGame();

// Event Listeners



