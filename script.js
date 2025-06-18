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
    let  humanChoice = prompt ('Rock, Paper, or Scissor');
    return choice(humanChoice); 
 }

 

 function playGame (){
    let humanScore = 0; 
    let computerScore = 0; 


    function playRound(){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice)
        { return 'Tie!'}
    if ((humanChoice == 'rock' && computerChoice == 'scissor') || 
        (humanChoice == 'scissor' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'rock'))
        {   humanScore += 1;
            return `You win this round! ${humanChoice} beats ${computerChoice}`;}
    computerScore += 1;
    return `You lose this round! ${computerChoice} beats ${humanChoice}`;
 }
    while (humanScore < 3 && computerScore < 3){
        console.log(playRound()); 
        console.log(`Your Score: ${humanScore} ------ Computer Score: ${computerScore}`);
    }
    return computerScore === 3 ? 'Computer Wins!' : 'Human Wins!'
 }


 console.log(playGame());
