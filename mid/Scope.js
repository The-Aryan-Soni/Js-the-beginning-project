/*
 {} => SCOPE
   Scope of program -> almost in every programming language

   ->scope is not declared/applicable for var ex-> var c = 34
   
*/ 
let a = 203

if (true){
  let a = 10 
  const b =29
  // console.log("Inner:", a);
}



// looping

/*------------------advance-----------------*/


// nested Scope

function one(){
  const username = "aruka"

  function Two(){
    const website = 'Git'
    console.log(username);
  }
  // console.log(website);

  // Two()

}


if (true) {
  const username ="Aruka"
  if (username=="Aruka") {
    const web = " Github"
    // console.log(username+web);
    
  }
  // console.log(web); -> error due to no sacope resolution
}

// console.log(username); =>error is coming due to no scope resolved

console.log(add(3));


function add(num){
  return num+1
}

add(5)

// addtwo(3) -> didnt execute because of hoisting

const addtwo = function(num){
  return num+2
}

addtwo(3)