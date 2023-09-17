const email = "nayan@gmail.com"

if(email){
    console.log("got a email");
}else{
    console.log("dont got a email")
}

// empty string is treated as a false value 
const email1 = ""

if(email1){
    console.log("got a email");
}else{
    console.log("dont got a email")
}

// falsy value : 0 , -0 , false , bigint 0n, " " , null , undefined , nan 
// truthy value : "0" , 'false' , " " , [] , {} , function(){} , 

// Nullish Coalescing Operator(??)  : null / undefined 

let val1 ;
// val1= 5 ?? 10

// val1= null ?? 10
val1= null ?? 30 ??20

console.log(val1);