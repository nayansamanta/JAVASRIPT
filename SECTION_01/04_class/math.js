// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // top value 
// console.log(Math.floor(4.9));  // buttom value 
// console.log(Math.min(4, 3, 6, 8));  
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());   // value always 0 to 1 ;
// console.log((Math.random()*10) + 1);    // +1 to avoid 0 value 
// console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20  

console.log( Math.floor ( Math.random() * (max - min + 1)) + min );  