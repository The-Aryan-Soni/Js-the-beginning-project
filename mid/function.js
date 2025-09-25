function myname(){
    console.log('aryan');
}
// myname()

// function addNum(num1,num2){
//     console.log(num1+num2)
// }

function addNum(num1,num2){

    // let result = num1+num2
    // return result
    return num1+num2
}

// addNum(1,null)

// const result = addNum(3,5)
// console.log(result);

// function loginUserMsg(username){
//     if (!username){
//         console.log("Please Enter Username");
//         return 
//     }
//     return `${username} Just logged in`
// }

// console.log(loginUserMsg("aryan"))

// console.log(loginUserMsg())


// function calCart(...num1){
//     return num1
// }

// console.log(calCart(230,2,12,25,13,445));

const user = {
    username: "aryan",
    price: 99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "xmple",
//     price:99
// })


const newArray = [2,214,454,345]

function secondValue(getvalue){
    return getvalue[1]
}

// console.log(secondValue(newArray));
console.log(secondValue([23,23,234,765,23]))
