// Your code goes here
const login = prompt('login: ','');
const password = prompt('password: ','');
const user = 'User';
const superUser = 'SuperUser';

if(login === ''){
	alert('Canceled.');
}else if(login.length < 4) {
	alert('I don’t know any users having name length less than 4 symbols');
}else if(login !== user) {
	alert('I don’t know you');
}else {
	if(password === '' || !password){
		alert('Canceled.');
	}else if(password !== superUser){
		alert('Wrong password');
	}else if(new Date().getHours() < 20){
		alert('Good day!');
	}else{
		alert('Good evening!');
	}
}


