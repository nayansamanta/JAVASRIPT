
// var c =359;

let a=300

if (true) {      // it is block scope 
    let a =10;
    const b=20;
    // var c =30;
    console.log("inner a:" , a);
}
console.log("outer a: ",a)  
// console.log(b);
// console.log(c); 
