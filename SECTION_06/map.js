 const mynums =[1,2,3,4,5,6,7,8,9,10]

//  const newnums = mynums.map( (item) => {
//     return item+10
//     })  
// console.log(newnums);  


const newnumber = mynums
                        .map( (item) => item*10 )  // add 10 
                        .map( (item) => item+1)    // add 1 when 10 is adding afterthat 
                        .filter( (item) => item>41 )   

console.log(newnumber);                 
