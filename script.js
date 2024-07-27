////// Score
let humanScore = 0;
let computerScore = 0;


///// Logic for computer choice
function getComputerChoice(min, max) {
    // Creates a varible called computerChoice and uses Math.random to pick a number between 1 and 3. 
    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


////// Logic for human choice
function getHumanChoice(min, max) {
    let humanChoice = Number(window.prompt("Please enter a value: 1: Rock  2: Paper  3: Scissors  and click OK"))
    if (humanChoice == 1) {
        return "rock";
    } else if (humanChoice == 2) {
        return "paper";
    } else if (humanChoice == 3) {
        return "scissors";
    } else{
        return "Please enter the option 1, 2 or 3"
    }
}


///// Logic for play round
function playRound(humanChoice, computerChoice){
    console.log(humanSelection);
    console.log(computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(1,4);

playRound(humanSelection, computerSelection);