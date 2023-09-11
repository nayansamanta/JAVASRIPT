// primitve datatype or call by value 

// 7 types : string , number , boolean , null , undefined, symbol , BigInt 

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);  // false 
const bignumber = 45856975321594532n  // bigint 
console.log(typeof bignumber);

// non primitive or reference by value 

// array , objects , function 

const heros =["iron man " , "hulk" , "spider man "];

let object ={
    name : "nayan",
    age : 20
}

let example = function(){
    console.log("hello world");
}
