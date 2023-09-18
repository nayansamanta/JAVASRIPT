// reduce 
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const start = 0;
const result  = array1.reduce( (acc, cur) => acc + cur, start);   // at first start value 0 is going to acc 
//console.log(result);



const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);