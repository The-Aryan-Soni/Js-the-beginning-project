//array 
const myarr = [1,5,7,8,1,1,8]
const myarr2 = new Array(1,23,4,3)

//console.log(myarr[1]);

//array methods 

// myarr.push(0)
// myarr.pop(1)

// myarr.unshift(0)
// myarr.shift(0)

// console.log(myarr.includes(6));
// console.log(myarr.indexof(6));

// const newarr = myarr.join() //=>join includes all the elements & change the datatype to string 

//console.log(newarr);
// console.log(myarr);


// slice, =>cuts/copy the elements to a new array
// splice => it dont copy but it takes elements away from the array and move to new given array  

// console.log("A",myarr);

// const myn1 = myarr.slice(1,3)

// console.log(myn1);
// console.log("B",myarr);


// const myn2 = myarr.splice(1,3)
// console.log("C",myarr);
// console.log(myn2);

//---------------part-2-------------------//

const marvel = ["spidy","Hulk","ironMan"] 
const Dc = ["flash","wolverine","deadpol"] 

// marvel.push(Dc)

// console.log(marvel);
// console.log(marvel[3][1]);
 
// const all = marvel.concat(Dc)
// console.log(all);

// spread operator->( ...(function)) 
// const all_way = [...marvel, ...Dc]
// console.log(all_way);

// const another_array =[1,2,3,[2,3,4],2,[4,3,[2,3],2]]
// const realanother = another_array.flat(Infinity)

// console.log(realanother);

// console.log(Array.isArray("aryan"));
// console.log(Array.from("aryan"));

console.log(Array.from({name:"aryan"}));//intresting case for interview


let scr1 = 100
let scr2 = 200
let scr3 = 300

console.log(Array.of(scr1,scr2,scr3));
