
let playerSelection = "";

//prompt("Game start! What do you choose? Rock, Paper or Scissors?"); 
//Removing the prompt helped solve the 


let computerChoose = [
    'Rock', 'Paper', 'Scissors'];


let computerPlay = Math.floor(Math.random() * computerChoose.length);
//Fucking error wtf

let computerSelection = computerChoose[computerPlay];
