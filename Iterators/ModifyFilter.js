const my = [1,2,3,4,62,24]

// const news = my.map((num)=>{return num+99})
// console.log(news);
 
const newnums = my
            .map((num)=>num*2)
            .map((num)=>num+1)
            .filter((num)=> num >= 5)
console.log(newnums);
