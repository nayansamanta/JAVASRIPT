// if 

// if(2=="2"){
//     console.log("executed");
// }

// const score =200
// if (score>100) {
//     const power = "fly"
//     console.log("ur score is greater than 100");
//     console.log(`you can ${power}`);
// } 

// implicit scope 

const balance =5000;
if(balance>500) console.log("u have sufficient balance ") 

// and operator 
const userlogedin = true 
const debitcard =true 
if (userlogedin && debitcard) {  // two condition have to true 
    console.log("you can buy anything");
}

// or operator 
const loggedinfromGoogle = true
const loggesinfromEmail = false 
if (loggedinfromGoogle||loggesinfromEmail) {  // if anyone is true then condition will be check otherwise not  
    console.log("ok you can enter into this website ")
}