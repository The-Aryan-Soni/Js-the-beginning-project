const code = ['Js','Node','Git','React',]


// code.forEach( function (val) {
//     console.log(val);
    
// } )

// Using Arrow function ->

// code.forEach( (val)=> {
//     console.log(val);
// })

// function print(item){
//     console.log(item);   
// }

// code.forEach(print)


// code.forEach((key, i , ar) => {
//     console.log(key ,'index is',"->", i," At ->" , ar);
    
// })

// sotrcut to copy paste -> shift+alt+DownArrow


/*----------Using objects in Array----------*/


const newCode = [ 
    {
        languageName: "JavaScript",
        LanguageFileName: "Js"
    },
    {
        languageName: "Cascrading Style Sheet",
        LanguageFileName: "Css"
    },
    {
        languageName: "React",
        LanguageFileName: "React"
    },
]

newCode.forEach((item)=> {
    console.log(item.languageName);
})
