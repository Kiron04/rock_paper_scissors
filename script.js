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

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice(1,4);

// playRound(humanSelection, computerSelection);


//////////////////// Layout of the game.
// 1. The score is set to zero for both players.
// The game starts. 
// 2. A function needs to be created to get the value from the computer. 
// 3. A function needs to be created to get the value from the human. 
// 4. Checking function to compare results and displays outcome 
// 5. Display the score after the round 
// 6. Repeat the game for 5 rounds. 

function playGame() {
    i = 0
    while (i <=4) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(1,4);
        playRound(humanSelection, computerSelection);
        i++;
    }
}

playGame();

