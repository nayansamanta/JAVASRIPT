// for of 

const arr = [1,2,3,5,8,9,7]

for (const numb of arr) {
    //console.log(numb);
}

// maps 

const map = new Map()  // value should be unique 
map.set('in' , "india")
map.set('usa' , "united states of america")
map.set('fr' , "france")

// console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value)
}