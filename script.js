// Function to generate a random integer for computer choice
function getComputerChoice (){ 
    return choice(Math.floor(Math.random() * 3));
}
// Function that converts int inputs to rock, paper, or scissor
function choice (x){
    if (x == 0) return 'rock';
    if (x == 1) return 'paper';
    if (x == 2) return 'scissor';
 }
// Function to prompt the human to choose
 function getHumanChoice(){
    let  humanChoice = prompt ("Rock, Paper, or Scissor");
    return choice(humanChoice); 
 }

 function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice)
        { return 'Tie!'}
    if ((humanChoice == "rock" && computerChoice == "scissor") || 
        (humanChoice == 'scissor' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'rock'))
        {return `You win! ${humanChoice} beats ${computerChoice}`;}
    return `You lose! ${computerChoice} beats ${humanChoice}`;
 }

let humanScore = 0; 
let computerScore = 0; 
 console.log(playRound());
