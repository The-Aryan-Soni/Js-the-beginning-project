// singleton object  => object.create

// object literals -> non singleton object

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

// jsUser.greet = function(){
//     console.log("this is func.");
// }
// jsUser.greet2 = function(){
//     console.log(`Hello JS User ${this.name}`);
// }

// console.log(jsUser.greet());
// console. log(jsUser.greet2());


/*---------------Objects ADV-part---------------*/


const inUser = {}

inUser.Id = "123xyz"
inUser.name ="sam"
inUser.isRegistered ="true"

const regularUser={
    email:"123xyz@gmail.com",
    fullname:{
        userfullname:{
        firstname :"xyz",
        lastname:"aryan"
    }
  }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"b",4:"d"}
const obj4 = {5:"b",6:"d"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"h23@xmail.com"
    },
     {
        id:2,
        email:"h3@axmail.com"
    }, {
        id:3,
        email:"h33@xamail.com"
    }, {
        id:4,
        email:"h13@gxmail.com"
    }, {
        id:12,
        email:"h23@xmail.com"
    }, {
        id:55,
        email:"h23@xmail.com"
    }, {
        id:121,
        email:"h23@xmail.com"
    },
]

users[1].email
// console.log(inUser);

// console.log(Object.keys(inUser));
// console.log("-------");

// console.log(Object.values(inUser));
// console.log("-------");
// console.log(Object.entries(inUser));
// console.log("-------");

// console.log(inUser.hasOwnProperty('isregistered'));

/*----------object_Prt-3----------*/

//destructuring

const course = {
    coursename: "JsBasics",
    price:"Free",
    courseInstructor: "aryan"
}

//couse.cousreInstructor

const{courseInstructor: tutor} = course
//destructuring->courseInstructor: tutor 
//here tutor is now be new courseInstructor


// console.log(courseInstructor);
console.log(tutor);

/*
HERE WE PASSES PROPS USING PROPS.COMPANY AND BY USING JS METHOD WE ONLY PASS COMPANY NOT PROPS.COMPANY
{}=> USES IN DESTRUCTURING
{}=> ALSO USED TO DECLARE OBJECTS IN JS

const navbar = ({company}) => {
}
navbar(company = "akura")
*/

// {
//     "name":"sample",
//     "age":"infinite",
//     "price": "free"
// }
//  => NOW ITS JSON BUT IN OBJECT FORM

 
// [
//     {},
//     {},
//     {}
// ]

