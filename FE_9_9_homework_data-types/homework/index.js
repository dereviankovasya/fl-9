// Your code goes here
function findType(parameter){
	return typeof parameter;
}
 /*findType(‘number’) // returns “string” 
findType(null) // returns “object”  */

function forEach(ar, funk){
let el;
for(let i = 0; i < ar.length; i++){
el = ar[i];
	funk(el);
}
}

//forEach([2,5,8], function(el) { console.log(el) }) // returns 2 5 8

function map(ar, funk){
	let mas = [];
	forEach(ar, el => mas.push(funk(el)));
	return mas;
}
//map([2, 5, 8], function(el) { return el + 3 }) // returns [5, 8, 11]

function filter(ar, funk){
let mas = [];
forEach(ar, el => {
 if(funk(el)){
 mas.push(el);
 } 
}); return mas;
}
//filter([2, 5, 8], function(el) { return el > 3 }) // returns [5, 8]

function getAdultAppleLovers(data){
	return map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'), el => el.name);
}

/*const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }
];
getAdultAppleLovers(data) // returns [‘Stein’] */

function keys(object){
let mas = [];
 for(let key in object) {
   if(object.hasOwnProperty(key)) {
      mas.push(key);
   }
 }
return mas;
}

//keys({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [“keyOne”, “keyTwo”, “keyThree”]

function values(object){
let mas = [];
 for(let key in object) {
   if(object.hasOwnProperty(key)) {
      mas.push(object[key]);
   }
 }
return mas;
}
//values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
function showFormattedDate(date){
 const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 const d = allMonths[date.getMonth()];
 return 'It is ' + date.getDate() + ' of ' + d + ', ' + date.getFullYear();
}
/*showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
*/ 

