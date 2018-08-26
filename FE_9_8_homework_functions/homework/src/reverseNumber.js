// Your code goes here
function reverseNumber(x){
 let reverse = parseInt(x.toString().split('').reverse().join(''));
 let negativ = -parseInt(x.toString().split('').reverse().join(''));
if(x < 0){
 return negativ; 
 }else{
 return reverse;
 }	     
}

/*
reverseNumber(123); // => 321
reverseNumber(-456); // => -654
reverseNumber(1000); // => 1
*/