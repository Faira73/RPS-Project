function getComputerChoice (){ 
    return choice(Math.floor(Math.random() * 3));
}

function choice (x){
    if (x == 0) return 'rock';
    if (x == 1) return 'paper';
    if (x == 2) return 'scissor';
 }

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
