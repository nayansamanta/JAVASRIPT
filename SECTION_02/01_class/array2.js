const marvel = [ "thor" , "ironman", "spiderman"] 
const dc = ["superman" , "flash" , "batman"] 

// marvel.push(dc)  
// console.log(marvel);
// console.log(marvel[3]);



let heros = marvel.concat(dc)
// console.log(heros);



let new_heros = [...marvel , ...dc]  // it is called spread operator this is the better away to merge two array 
//console.log(new_heros);



const new_arr = [1,2,3,[4,5,6],7,8,9,[5,2,9,[2,5,8]],85]
//console.log(new_arr.flat(Infinity))



console.log(Array.isArray("nayan"))  // return false 
console.log(Array.from("nayan"))  // convert to array 



let score1= 100;
let score2 =200;
let score3 = 500;
console.log(Array.of(score1,score2,score3))