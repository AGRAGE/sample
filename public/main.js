"use strict"


function onSubmit (form) {
	let data = {
		user: form.elements["user"].value,
		email: form.elements["email"].value
	};
	let result = request("/users",  data);	

	form.hidden = true;
	window.helloWorld.innerHTML = hello(data.user, result);
	
	console.log(data, result);
}

function hello (userName, numOfVisit){
	return "Привет, " + userName + "! Вы авторизировались у нас уже " + numOfVisit +" " + plural(numOfVisit) + "!";
}

function plural (numOfVisits){
	var strangeNum1 = [12, 13, 14];
	var strangeNum2 = [2, 3, 4];
	if (strangeNum1.indexOf(numOfVisits) != -1) return "раз";
	else if (strangeNum2.indexOf(numOfVisits % 10) != -1) return "раза";
	else return "раз";
}

if(typeof exports === "object"){
	exports.hello = hello;
}
