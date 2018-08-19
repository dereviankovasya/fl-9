// Your code goes here

const money = prompt('amount of money','0'),
 discount = prompt('the discount','0'),
 savedMoney = money * discount / 100,
 noDiscount = money - savedMoney;
 let res;

 if (money < 0 || discount > 100 || discount < 0){
    res = 'Invalid data';
    
 }else{
	res = 'Price without discount: ' + Math.round(money * 100) / 100 + 
             '\nDiscount: ' + Math.round(discount * 100) / 100 + '%' + 
             '\nPrice with discount: ' + Math.round(noDiscount * 100) / 100 + 
             '\nSaved: ' + Math.round(savedMoney * 100) / 100;
}
console.log(res);