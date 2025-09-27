const user = {
    username: "Aryan",
    code:222,

    welcomeMessage: function() {
        console.log(`${this.username} Welcome To GITHUB`);
        // console.log(this); => it tells about the current context of the object we are poninting to.
    }

}

// user.welcomeMessage()
// user.username = "Alice"
// user.welcomeMessage() 

// console.log(this); -> in Node environment 'this' refers to empty object


// function code(){
//     let username = "aryan"
//     console.log(this.username);
// }

// code()


// const chai = function(){
//     let username = "aryan"
//     console.log(this.username);
// }


//  const chai = () =>{
//     let username = "aryan"
//     console.log(this.username);
// }


// arrow function

// const addteo = (num1,num2)=>{
//     return (num1+num2)
// }

// console.log(addteo(2,4))


// another method to use arrow  is called 
// implicit return  => we use it in one line code where we dont use currly brracates
// explicit return => just a basic arrow function code where we use curly brracates

//implicit example-> const oneLine = (num1,num2) => num1+num2 ;


// const oneLine = (num1,num2) => (num1+num2) ;

// another use -->
const oneLine = (num1,num2)=> ({username:"aryan"})
// here if we use only {username: "---"} then error will throw we hve to use what method above is given 

console.log(oneLine(2,3));



