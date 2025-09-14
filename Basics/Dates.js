
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let created = new Date(2020,6,27)
// let Newcreated = new Date(2020,0,23,6,7)
// let NewDatecreated = new Date('2025-09-14')

// console.log(NewDatecreated.toLocaleString());

let TimeStamp = Date.now()
//use cases  for designing quiz to know fastest answers and who give fast reaction to polls

// console.log(TimeStamp);
// console.log(NewDatecreated.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getDay());//COUNTS in form of sun,mon,tue in format pf array - 0,1,2
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));
