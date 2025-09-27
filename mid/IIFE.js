// Immediatly Invoked Function Expression(IIFE)

// this Below is Named IIFE
(function db(){
    console.log(`Database Connected`);   
})();

(() => {
    console.log(`Database Connected`);   
})();

(its = (name) => { 
    console.log(`Hii ${name} Database Connected`);   
})("Aryan");


// why use IIFE -> we use this because problems
// due to pollution in  global scope 
// how does IIFE works 
// so basically we do ({function wraping})() this here 