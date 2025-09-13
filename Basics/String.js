const name = "aryan"
const repCount =50

//console.log(name + repCount+ "=> Value");

//console.log(`Hello my name is ${name.toUpperCase()} and My Rep count is ${repCount}`);

//Another way to declare string

const gName = new String('Aryan-akura')

// console.log(gName.__proto__);

// console.log(gName.length);
//console.log(gName.toUpperCase(1));
console.log(gName.charAt('3').toUpperCase());

//console.log(gName.indexOf("a"));

const anotherString = gName.slice(-4,5)
console.log(anotherString);

const newString = gName.substring(0,3)
console.log(newString)

const url = "https:/aryan.com/akura@10aryan"

console.log(url.replace("@10","-"));

console.log(url.includes('akura'));

console.log(gName.split('-'));
