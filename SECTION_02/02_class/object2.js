const user = {
    email : "some@gmail.com",
    username:{
        userfullname:{
            firstname:"nayan",
            lastname:"samanta"
        }
    }
}
// console.log(user.username.userfullname);

// add two object 

const obj1 ={1:"a" , 2:"b"}
const obj2 ={2:"c" , 4:"d"}
const obj3 ={5:"nayan" , 6:"samanta"}
// let obj4 ={obj1,obj2}

let obj4 = Object.assign({} , obj1,obj2,obj3)
//console.log(obj4);

let obje5 = {...obj1 , ...obj2 , ...obj3}  // spread operation 
//console.log(obje5);  

let instagramuser = {}
instagramuser.id = "nayan"
instagramuser.password =125
instagramuser.bio ="foucous ur goal"
console.log(Object.keys(instagramuser));
console.log(Object.values(instagramuser));
console.log(Object.entries(instagramuser));  