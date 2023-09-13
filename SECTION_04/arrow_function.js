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

