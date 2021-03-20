const NumberArray = require("./lib/NumberArray");

const arr = [5,6,2,3,54,32,22,12,2,3,7]


console.log(NumberArray.min(arr));

console.log(NumberArray.max(arr));
console.log(NumberArray.avg(arr));

// console.log(NumberArray.filter(arr));

console.log(NumberArray.filter(arr, 'even'));
console.log(NumberArray.filter(arr, 'odd'));
console.log(NumberArray.filter(arr, 'div', 2));

console.log(NumberArray.count(arr, 5));

console.log(NumberArray.getDictionary(arr))