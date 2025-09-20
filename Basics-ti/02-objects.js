// singleton => object.create

// object literals ->

const sym = Symbol("haha")//making a symbol

const  jsUser = {
    name:"aryan",
    age:21,
    loc:"panipat",
    isLoggedIn:true,
    lastLoginDays: ["mon","tues","sat"],
    email:"aryan@gmail.com",
    [sym]: "MEME"
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[sym])
// console.log(typeof jsUser[sym])
// console.log(jsUser);


// jsUser.email = "aryan@gpt.com"
// Object.freeze(jsUser)
// jsUser.email = "chat@gpt.com"
// console.log(jsUser);


// function making ->

jsUser.greet = function(){
    console.log("this is func.");
}
jsUser.greet2 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greet());
console.log(jsUser.greet2());


/*---------------Objects ADV-part---------------*/