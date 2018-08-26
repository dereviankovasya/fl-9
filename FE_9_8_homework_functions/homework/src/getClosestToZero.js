// Your code goes here
function getClosestToZero(){
let i;
let toZero = Math.abs(arguments[0]);
for(i = 1; i < arguments.length; i++){
 if(Math.abs(arguments[i]) < toZero){
	toZero = arguments[i];
}
}
return toZero;
}
//getClosestToZero(9, 5, -4, -9); // => -4