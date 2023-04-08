"use strict"

let message;
message = "Я JavaScript!";
let user = 'Jack', age = 34, city = 'NY';
const myBirthday = '22.04.1981';
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';

let admin, name;
name = 'John';
admin = name;
let ourPlanetName = 'Earth';
let currentUserName = 'Jess';

let stroka = null
let a, b, c;
a = 29;
b = 33
c = a > b;
let s = null;
let t = typeof s;

//let yourAge = prompt('Сколько тебе лет?', 100);
//let promptValueType = typeof yourAge;
//let isBoss = confirm('Are you Boss?');

let stroka_1 = 'I am drift';

//alert(`stroka = ${stroka} and result of comparison is ${c}, type ${t}`);
//alert(`${isBoss}, type of prompt is ${promptValueType}`);
//alert(Number(stroka_1));

let accessAllowed = (age > 18) ? true : false

if (name == 'John' && age == 34) {
	alert('Access is open!');
} else if (age < 34) {
	alert('You are too young!');	
}

//alert(alert(1) && alert(2));

let value_1 = null;
let value_2 = null;
let value_3 = 'National';

//let final_value = (value_1 || value_2 || value_3);
let final_value = (value_1 ?? value_2 ?? value_3);
alert(final_value);

/* Пример комментария
трям
*/
// И еще немного
