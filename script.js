
const rockimg = document.getElementById('rock');
const paperimg = document.getElementById('paper');
const scissorsimg = document.getElementById('scissors');
let player_Score = document.getElementById('plScore') 
let computer_Score = document.getElementById('compScore')
const result = document.getElementById('result');
const finalResult = document.getElementById('finalResult')
const btn = document.getElementById('button');
let computerScore=0;
let playerScore=0;

 function playerPlay(){

    rockimg.addEventListener('click', ()=> {
        playRound('rock');
    });
    paperimg.addEventListener('click', ()=> {
        playRound('paper')
    });
    scissorsimg.addEventListener('click', ()=> {
        playRound('scissors')
    });
}
playerPlay();

function computerPlay(){

    if (Math.floor(Math.random() * 3)=== 0){
        return "rock";
    }
    else if (Math.floor(Math.random() * 3)=== 1){
        return "paper";
    }
    else if(Math.floor(Math.random() * 3)=== 2){ 
        return "scissors";
    }
}

function playRound(playerSelection){

    let computerSelection = computerPlay();
    
   

    if ((playerSelection == "rock" )&& (computerSelection == "paper") ){
        computerScore +=1;
        score();
        computer_Score.textContent = computerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent = "You Lose! Paper covers Rock";
        
    }
    else if ( (playerSelection == "rock") && (computerSelection == "scissors") ){
        
        playerScore +=1;
        score();
        player_Score.textContent = playerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent = "You Won! Rock blunts Scissors";
    }
    else if ( (playerSelection == "paper") && (computerSelection == "rock") ){
        playerScore +=1;
        score();
        player_Score.textContent = playerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent = "You Won! Paper covers Rock";
    }

    else if ( (playerSelection == "paper") && (computerSelection == "scissors") ){
        computerScore +=1;
        score();
        computer_Score.textContent = computerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent ="You Lose! Scissors cuts Paper";

    }
    else if ( (playerSelection == "scissors") && (computerSelection == "rock") ){
        computerScore +=1;
        score();
        computer_Score.textContent = computerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent ="You Lose! Rock blunts Scissors";

    }
    else if ( (playerSelection == "scissors") && (computerSelection == "paper") ){
        playerScore +=1;
        score();
        player_Score.textContent = playerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent = "You Won! Scissors cuts Paper";
    }
    
    else if (playerSelection==computerSelection){
        playerScore +=0;
        computerScore +=0;
        score();
        computer_Score.textContent = computerScore;
        player_Score.textContent = playerScore;
        console.log ('Your Score is: '+ playerScore + '  ' + 'Computer Score is: '+ computerScore);
        result.textContent ="You Tied";

    } else {
        return;
    }
    
}

function score(){
    
if ((playerScore == 5) && (computerScore < 5)){
                 
            console.log("*********YOU WON!*********");  
            finalResult.textContent ="*********YOU WON!*********";   
            resetScore();
                 
     }
 else if ((computerScore == 5) && (playerScore < 5)){
    
         
             console.log("*********YOUssors cuts 
 else if ((computerScore == 5) && (playerScore == 5)){
    
         
    console.log("*********YOU TIED!*********");
    finalResult.textContent = "*********YOU TIED!*********";
    resetScore();
}
 else{
     return;
 }
function resetScore(){

    computerScore = 0;
    playerScore = 0;
    computer_Score.textContent = 0;
    player_Score.textContent = 0;
}
 } 