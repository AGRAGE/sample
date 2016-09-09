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

function pluralize (lang, formsOfCurWord, count) {
	switch(lang){
		case "rus":
				var strangeNum1 = [12, 13, 14];
				var strangeNum2 = [2, 3, 4];
				if (strangeNum1.indexOf(numOfVisits) != -1) return formsOfCurWord[0];
				else if (strangeNum2.indexOf(numOfVisits % 10) != -1) return formsOfCurWord[1];
				else return formsOfCurWord[2];
				break;
		case "eng":
				if (count == 1) return 	formsOfCurWord[0];
				else return formsOfCurWord[1];
				break;
		default:
				return "No such language";
	}
}

function filter(str) {
  let rules = window.rules || [];

	str = str + "";

  rules = rules.map(rule => {
    return {
			regexp: new RegExp("\\b${rule}\\b","g"),
			length: rule.lengths
		};
  });

  rules.forEach(rule => {
    str = str.replace(rule.regexp, (new Array(rule.length + 1)).join("*"))
  });
  return str;
}

if(typeof exports === "object"){
	exports.hello = hello;
	exports.plural = plural;
	exports.pluralize = pluralize;
	exports.filter = filter;
}
