// for 

// for (let i = 0; i <10 ; i++) {
//     const element = i;
//     if (element ==8) {
//         console.log("7->Thala for a reason");
        
//     }
//     console.log(element);
// }

for (let i = 1; i <=10; i++) {
   console.log(`this is OUTER area ${i}`);
   
    for (let j = 1; j <= 10; j++) {
//    console.log(`THIS is inner area ${j}`);
        console.log(i+ "*"+ j + '=' + i*j);
        
    }
}
