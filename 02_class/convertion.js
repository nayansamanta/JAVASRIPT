//  here we wii be convert different type of datatypes to another datataype 

let score = "33"   // string 

console.log(typeof score);
console.log(typeof(score));

let valueIn = Number(score)    // here we are converting the string to number 
console.log(typeof(valueIn));   // number 

console.log("helllo : ");

let num = "65ab"  // string 
let num1 = Number(num);   // here num1 tried to convert the num into number but 65ab not a number 
console.log(num1);    // NAN  : not a number 

// now try to convert boolean 
 
let agree =1
let booleannumber = Boolean(agree)
console.log(booleannumber);     // true 

//  1 => true  0 => false  "nayan" => false   " " => false 


// string conversation 

let number3 = 25
let stringNumber = String(number3)
console.log(typeof(stringNumber));   //  it will give me the string 
console.log(stringNumber)