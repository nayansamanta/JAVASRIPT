function cartprice(...num){  // rest operator 
    return num
}
//console.log(cartprice(200 ,500,300));



function cartprice2(val1 ,val2,  ...num1){
    return num1
}
// console.log(cartprice2(200 ,500,  300, 80,900,564,830));   // 200 and 500 are going to store in val1 and val2 and rest of are going to store in num1



// convert object to function 

 user ={
    name:"nayan",
    price :199
}

function comvertObject(anyobject) {   // as a parameter we can give any name 
    console.log(`my username is ${anyobject.name} and price is ${anyobject.price}`);
}
comvertObject(user)    // here we have to pass the correct object name  


// array pass to the function 

let newarray = [20, 50,70,90]
function passarray(getarray) {
    return getarray[2]
}
console.log(passarray(newarray))
