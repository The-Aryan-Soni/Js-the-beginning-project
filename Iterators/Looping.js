// for 

// for (let i = 0; i <10 ; i++) {
//     const element = i;
//     if (element ==8) {
//         console.log("7->Thala for a reason");
        
//     }
//     console.log(element);
// }



/*---------------------While--------------------*/

// let i = 0 
// while (i<=12) {
//     console.log(`values in this is iteration is : ${i}`);
//     i = i+5    
// }

/*-------------------Do While-------------------*/

// let scr = 1 

// do {
//     console.log(`Score is ${scr}`);
//     scr = scr +5 
// } while (scr<= 100);


/*---------------Looping in Array--------------*/

// for of -->

// inserting object in array -> [{},{},{}]

// const arr = [1,24,52,1,3]
// for (const num of arr) {
//     console.log(num);    
// }

// const greet = "hello Gittub!"
// for (const val of greet) {
//     console.log(`wlecome all and ${val}`);   
// }


/*---------------------Map--------------------*/

// const map = new Map()
// map.set('IN',"India")
// map.set('FR',"France")
// map.set('UK',"London")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-',value);
// }

/*----------Map{using object in loop}----------*/


// const mine = {
//     Game1: 'NFS',
//     Game2: 'Gta V',
//     Game3: 'psp',
//     Game4: 'RDR2',
// }

// for (const [key,val] of mine) {
//     console.log(key, ':-', val);
    
// }

// for (const key in mine) {
//     console.log(`key For ${key} :- ${mine[key]}`);
// }
/*----------Using For InLoop in Array----------*/

const program = ['html','css','js','react','Next','Angular',"MongoDb",'Figma',""]

for (const key in program) {
    console.log(`Number is ${key} & Value is :- ${program[key]}`); 
}