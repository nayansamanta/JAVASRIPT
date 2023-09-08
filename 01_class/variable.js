const accountID = 145856
let accountEmail = "nayan@gmail.com"
var accountPassword = "1234"
accountCity = "kolkata"
let accountState ;

// accountID =23  // not allowed because const keyword is used 

accountEmail = "sayan@12gmai.com"
accountPassword = "21212121"
accountCity = "mumbai"

// console.log(accountID);

/*
always prefer not to use var keyword  ...
because of some issue in block scope and functional scope 
 */
console.table([accountID , accountEmail ,accountPassword ,accountCity , accountState]) 

