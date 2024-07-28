////// Score
let humanScore = 0;
let computerScore = 0;


///// Logic for computer choice
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


////// Logic for human choice
function getHumanChoice(min, max) {
    let humanChoice = Number(window.prompt("Please enter a value: 1: Rock  2: Paper  3: Scissors  and click OK"))
    
    if (humanChoice == 1)
    {
        return "rock";
    }
    
    else if (humanChoice == 2)
    {
        return "paper";
    }
    
    else if (humanChoice == 3) 
    {
        return "scissors";
    }
    
    else
    {
        return "Please enter the option 1, 2 or 3"
    }

}


///// Logic for play round
function playRound(humanChoice, computerChoice){
    console.log(humanSelection);
    console.log(computerSelection);

    if (humanSelection == computerSelection)
    {
        console.log("It's a TIE");
    }
    
    else if (humanSelection === 'rock' && computerSelection === 'paper')
    {
        console.log("COMPUTER WINS! Paper beats rock.")
        computerScore += 1;
    }
    
    else if (humanSelection === 'paper' && computerSelection === 'scissors')
    {
        console.log("COMPUTER WINS! Scissors beats paper.")
        computerScore += 1;
    }
    
    else if (humanSelection === 'scissors' && computerSelection === 'rock')
    {
        console.log("COMPUTER WINS! rock beats scissors.")
        computerScore += 1;
    }
    
    else if (humanSelection === 'rock' && computerSelection === 'scissors')
    {
        console.log("HUMAN WINS! Rock beats scissors.")
        humanScore += 1;
    }
    
    else if (humanSelection === 'paper' && computerSelection === 'rock')
    {
        console.log("HUMAN WINS! Paper beats rock.")
        humanScore += 1;
    }
    
    else if (humanSelection === 'scissors' && computerSelection === 'paper')
    {
        console.log("HUMAN WINS! scissors beats paper.")
        humanScore += 1;
    }
    
    console.log("COMPUTER SCORE", computerScore);
    console.log("HUMAN SCORE", humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(1,4);

function playGame(){
    playRound(humanSelection, computerSelection);
}
playGame();