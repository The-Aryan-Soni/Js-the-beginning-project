// const one = [1,2,3,4,5,6]

// const myTotal = one.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and Current Value : ${currval}`);
    
//     return acc+currval
// },0)

// console.log(`total value: ${myTotal}`);


const shopCart = [
    {
        CourseName: "JS Course",
        Price: 2999
    },
    {
        CourseName: "Py Course",
        Price: 999
    },
    {
        CourseName: "React Course",
        Price: 4999
    },
    {
        CourseName: "App-Dev Course",
        Price: 9999
    }
]

const Total = shopCart.reduce((acc,item)=>acc+item.Price,0)

console.log(Total);
