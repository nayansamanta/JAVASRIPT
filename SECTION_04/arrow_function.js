const user ={
    username :"nayan",
    price:999,

    welcome : function () {
        console.log(`${this.username}  welcome to our website `)   // 'this' reffer current context 
        console.log(this)
    }

}
console.log(user)
console.log(user.welcome())

user.username ="sam"  // here we are trying to upadate the username 
console.log(user.welcome())


// arrow function 

const chaii = () => {
    let username = "nayan"
    console.log(this.username)
}
chaii()


const chai =() => {
    let username = "nayan"
    console.log(this.username)
}
// chai()

const addtwo = (num1 ,num2) =>{    
    num3 = num1+num2
    return num3     // if we use {}  then we have to write retrun keyword 
}
console.log(addtwo(8 , 2))

const addthree = (num1 , num2 ,num3 )=> (num1+num2+num3)   // here we dont to write return keyword 
console.log(addthree(5,6,9))

