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

