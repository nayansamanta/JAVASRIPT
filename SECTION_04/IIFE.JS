// IIFE : immediately invoked function expression 

( function coffe(){
    console.log("before putting semecolon ")
})();   // here we have to put one semicolon 

( () =>{
    console.log(`after putting semicolon it will also execute `)
})();


( (name) =>{
    console.log(`my name is ${name} `)
})("nayan")
