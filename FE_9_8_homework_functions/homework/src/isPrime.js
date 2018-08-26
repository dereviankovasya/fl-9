// Your code goes here
function isPrime(x){
 let i;
 let min = 2;
 for(i = min; i <= Math.sqrt(x); i++){
 if(x % i === 0){
 return false;
 }else{
 return true;
 }
 }
}
//isPrime(5); // => true
