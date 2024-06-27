///// Logic for computer choice
function getComputerChoice(min, max) {
    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice(1,4));
