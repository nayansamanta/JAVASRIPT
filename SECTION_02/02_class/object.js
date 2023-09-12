// object literals 

const mysymbol = Symbol("key")

const user ={
    name:"nayan",
    age:20,
    location:"kolkata",
    [mysymbol] :"key2"
}
// console.log(user.location);
// console.log(user["location"]);  // objects treated key value as a string 
// console.log(typeof user.location);  // string 
// console.log(user[mysymbol]);
// console.log(user);  // see the all output 

user.greeting = function(){
    console.log("hello user good morning!")
}
// console.log(user.greeting()); 

user.greeting2 = function(){
    console.log(`hello ${this.name} good morning!`)  // when we call same object 
}
console.log(user.greeting2())
