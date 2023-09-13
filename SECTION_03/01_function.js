function myname(){
    console.log("nayan");
    console.log("nayan");
    console.log("nayan");
    console.log("nayan");
    console.log("nayan");
}
// myname()

function addtwonumber(num1 , num2) {  // here num1 and num2 is parameter
    console.log(num1+num2)
}
// addtwonumber(10,5)   // here 10 , 5 is arguments 



function addtwonumber1(num1 , num2) {  
     let result = num1+num2
    return result
}
const answer = addtwonumber1(5,6)
// console.log(answer)



function isloogedin(username) {
    return `${username} just logged in Facebook `
}
// console.log(isloogedin("nayan"))



function isloogedin(username) {
    if(username===undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in Facebook `
}
console.log(isloogedin()) 