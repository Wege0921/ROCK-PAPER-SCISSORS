

    
function playerPlay(){
    let selection = prompt("Enter Rock, Paper or Scissors");
  
        if (selection.toLowerCase() ==="rock"){

              return "rock";
          }
        else if (selection.toLowerCase() === "paper"){
              return "paper";
          }
        else if (selection.toLowerCase() === "scissors"){
              return "scissors";
          }
        else {
            console.log("Please Enter Rock, Paper or Scissors")
        }
    }

function computerPlay(){

    if (Math.floor(Math.random() * 3)=== 0){
        return "rock";
    }
    else if (Math.floor(Math.random() * 3)=== 1){
        return "paper";
    }
    else if (Math.floor(Math.random() * 3)=== 2){
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){

    if ( playerSelection == "rock" && computerSelection == "paper" ){

            return "You Lose! Paper beats Rock";
    }
    else if ( playerSelection == "rock" && computerSelection == "scissors" ){

        return "You Won! Rock beats Scissors";
    }
    else if ( playerSelection == "paper" && computerSelection == "rock" ){

        return "You Won! Paper beats Rock";
    }
    else if ( playerSelection == "paper" && computerSelection == "scissors" ){

        return "You Lose! Scissors beats Paper";
    }
    else if ( playerSelection == "scissors" && computerSelection == "rock" ){

        return "You Lose! Rock beats Scissors";
    }
    else if ( playerSelection == "scissors" && computerSelection == "paper" ){

        return "You Won! Scissors beats Paper";
    }
    
    else if ( playerSelection == computerSelection ){

        return "Tie";
    }
    else {
        console.log("Plese try again")

    }

}

function game(){

   
    for (let i=1; i<=5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
    }
    
}
game();




















/*  
let myArray = ['I', 'love', 'javascript'];

let myNewArray = myArray.join(' ');

console.log(myNewArray) */
/* 
let myText = 'What is happening ';
let myNewText = myText.replace('What', 'Nothing');
console.log(myNewText);
 
 */
/* function random(number){
    
    return Math.floor(Math.random()*number);

} */

/* function favoriteAnimal(animal){
    
    console.log(animal + " is my favorite animal")
}
favoriteAnimal("cow"); */
/* 
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); */