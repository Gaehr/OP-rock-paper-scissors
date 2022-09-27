
let playerChoice = prompt('Game Start! Choose your attack, Rock, Paper or Scissors?')

const computerChoose = ['Rock', 'Paper', 'Scissors']; 


function computerPlay(computerChoose) 
/*solved problem of repeating the same string with removing computerChoose from computerPlay()
but by doing so created a anonymous function, now back to be named
*/
{
  
return computerChoose[Math.floor(Math.random()*computerChoose.length)];
/*error that computerChoose is undefined 
use window.console && console.log(computerChoose); to see its an array,
but undefined

test with function containsUndefined(computerChoose) {
  return computerChoose.includes(undefined);
}

*/     
}



let playerSelection = playerChoice.toLowerCase()

//for case insensitive using toLowerCase() or localeCompare()?
let computerSelection = computerPlay(computerChoose)
//added computerChoose in the function to solve the undefined problem

//playRound does not work! Why? the function returns undefined solved with naming computerPlay function but new problem

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Paper"){
        alert('You loose! Paper beats rock!');

    }
    
    else if(playerSelection == "rock" && computerSelection == "Rock"){
        alert('You draw!');
    }

    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        alert('You win! Rock beats Scissors!');
        
    }

    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        alert('You loose! Scissors beat Paper!');
        
    }

    else if(playerSelection == "paper" && computerSelection == "Paper"){
        alert('You draw!');
      
    }

     else if(playerSelection == "paper" && computerSelection == "Rock"){
        alert('You win! Paper beats Rock!');
        
    }

    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        alert('You loose! Rock beats Scissors!');
       
    }

    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        alert('You win! Scissors beat Paper!');
        
    }

    else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        alert('You draw!');
        
    }

    else {
        alert('There seems to be a problem, please pick between Rock, Paper and Scissors!')
     
    }


}

console.log(playRound(playerSelection, computerSelection))

/* game now works, only Problem is returning the result 

/* tried game = playRound, but it returns playRound(playerSelection, computerSelection) 
instead of the wanted result, maybe alert is wrong,
try defining result next */
// let result = window.prompt('You win! Rock beats Scissors!')