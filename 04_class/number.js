const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toFixed(3));

let num = 5.123456;

// precision 

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'
