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

function loginUserMsg(username){
    if (!username){
        console.log("Please Enter Username");
        return 
    }
    return `${username} Just logged in`
}

// console.log(loginUserMsg("aryan"))

// console.log(loginUserMsg())


