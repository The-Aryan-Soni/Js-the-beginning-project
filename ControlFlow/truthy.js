// const userEmail = []

// if(userEmail){
//     console.log("has Email");
// }
// else {
//     console.log("not an Email");
// }


// falsy values => false, 0 ,-0,BigInt 0n,"",null,undefined,NaN

// ṭruthy values => "0",'false'," ",[],{},function(){}->Empty Function

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

// const empObj = {}

// if (Object.keys(empObj).length === 0){
//     console.log("object is empty");
    
// }

// nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);


// terniary operator
// ---->
// condition ? true : false

const winnig = 10000

winnig >= 500 ? console.log("more than 500"): console.log("less than 500")
