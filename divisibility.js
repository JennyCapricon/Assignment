let num = 60;

let div2 = num % 2 === 0;
let div3 = num % 3 === 0;
let div5 = num % 5 === 0;
let divAll = div2 && div3 && div5;

console.log("Divisible by 2:", div2);
console.log("Divisible by 3:", div3);
console.log("Divisible by 5:", div5);
console.log("Divisible by 2, 3, and 5:", divAll);