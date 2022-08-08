function computerPlay(computerChoose)
{
  
return computerChoose[Math.floor(Math.random()*computerChoose.length)];
     
}

let computerChoose = ['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(computerChoose));

    