// Your code goes here
const mAngle = 180;
let p, c,
a = prompt('length of side A: ','0'),
b = prompt('length of side B: ','0'),
angle = prompt('Triangle angle: ','0'), res, square;

if(angle > mAngle || angle <= 0 || a <= 0 || b <= 0){
	res = 'Invalid data';
}else{
 angle = angle * Math.PI / mAngle; 	
 c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * (a * b * Math.cos(angle))) * 100 ) / 100;
 p = parseFloat(a) + parseFloat(b) + parseFloat(c);
  square = Math.round(
        a * b * Math.sin(angle) / 2
    ) * 100 / 100;

 res = 'c length: ' + c +
            '\nTriangle square: ' + square +
            '\nTriangle perimeter: ' + p;

}

console.log(res);


