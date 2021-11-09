
function computerPlay(){

    if (Math.floor(Math.random() * 3)=== 0){
        return "rock";
    }
    else if (Math.floor(Math.random() * 3)=== 1){
        return "paper";
    }
    else   {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection){
      


    if (( playerSelection == "rock" )&& (computerSelection == "paper") ){
        computerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Lose! Paper beats Rock";
        
    }
    else if ( (playerSelection == "rock") && (computerSelection == "scissors") ){
        
        playerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Won! Rock beats Scissors";
    }
    else if ( (playerSelection == "paper") && (computerSelection == "rock") ){
        playerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Won! Paper beats Rock";
    }

    else if ( (playerSelection == "paper") && (computerSelection == "scissors") ){
        computerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Lose! Scissors beats Paper";

    }
    else if ( (playerSelection == "scissors") && (computerSelection == "rock") ){
        computerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Lose! Rock beats Scissors";

    }
    else if ( (playerSelection == "scissors") && (computerSelection == "paper") ){
        playerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        return "You Won! Scissors beats Paper";
    }
    
    else if ( playerSelection === computerSelection ){
        playerScore +=1;
        computerScore +=1;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);

        return "Tie";

    }
    else {
        console.log("Plese try again")

    }

}


         
let playerScore = 0;
let computerScore = 0; 


function game(){

    for (let i =1; i<=5; i++){
        
         const selection = prompt("Enter Rock, Paper or Scissors: ");
         const playerSelection = selection.toLowerCase();
         const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }

if (playerScore > computerScore){
            
           console.log("*********YOU ARE THE WINNER!*********");    
                
    }
else if (playerScore < computerScore){
        
            console.log("*********YOU LOSE!*********");    
        
}else if (playerScore === computerScore){
        
        console.log("*********YOU ARE TIE*********");    
        

    }else{
        console.log('');
    }    
        
}
game();
