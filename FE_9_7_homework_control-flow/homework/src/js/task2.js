// Your code goes here
const myGame = confirm('Do you want to play a game?');
const maxPrize = 10;
const midlePrize = 5;
const minPrize = 2;
let gamePrizes = [maxPrize, midlePrize, minPrize];
let numberRange = 5;
const randomNumber = Math.floor(Math.random() * numberRange);
let fullPrize = 0;

if(myGame === false){
	alert('You did not become a millionaire, but can.');
}else {
	startGame();
}

function startGame(){
	for(let i = 0; i < 3; i++){
	let number = +prompt('Enter a number from 0 to ' + numberRange +
			'\nAttempts left: ' + (3 - i) +
			'\nTotal prize: ' + fullPrize + '$' +
			'\nPossible prize on current attempt: ' + gamePrizes[i] + '$');
		if(number === randomNumber){
      fullPrize = fullPrize + gamePrizes[i];
      alert('Congratulation! Your prize is: ' + fullPrize);
 
   if (confirm('Do you want to continue?')) {
    numberRange = numberRange * 2;
    gamePrizes = gamePrizes.map(function (somePrize) {
       return somePrize * 3;
   });
   gamePrizes[2]++;
   startGame();
            } return;
        }
    }
    alert('Thank you for a game. Your prize is: ' + fullPrize);
}
	


