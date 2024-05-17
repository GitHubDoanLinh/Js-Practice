'use strict';
//Spread Operator with Primitive values (giá trị nguyên thủy)

const numbers = [1, 2, 3];
const copyNumbers = [...numbers];

copyNumbers[0] = 99;

console.log(numbers); // [1, 2, 3]
console.log(copyNumbers); // [99, 2, 3]

//Spread Operator with Reference values (giá trị tham chiếu)
const originalArray = [{ a: 1 }, { b: 2 }];
const copyArray = [...originalArray];

copyArray[0].a = 99;

console.log(originalArray); // [{ a: 99 }, { b: 2 }]
console.log(copyArray); // [{ a: 99 }, { b: 2 }]
