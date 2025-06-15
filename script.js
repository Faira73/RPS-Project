function getComputerChoice (){ 
    return choice(Math.floor(Math.random() * 3));
}

function choice (x){
    if (x == 0) return 'rock';
    if (x == 1) return 'paper';
    if (x == 2) return 'Scissor';
 }

 function getHumanChoice(){
    let  userInput = prompt ("Rock, Paper, or Scissor");
    return choice(userInput); 
 }

 console.log(getHumanChoice());
