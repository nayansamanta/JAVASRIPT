// nested scope 

function one() {
    const username ="nayan"

    function two(){
        const website = "github"
        console.log(username)  // child function can call parents function 
    }
    // console.log(website);   // but parent function can not call child element 

    two()
}

one() 



// ++++++++++++++++++++++++ important ++++++++++++++++++++++++
console.log(addone(9))   // we can declare here in this situation 
function addone(num2){
    return num2+1
}


// console.log(addtwo(8))     //  Cannot access 'addtwo' before initialization 'error'
const addtwo = function(num3){
    return num3+2
}

