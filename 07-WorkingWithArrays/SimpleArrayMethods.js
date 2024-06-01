'use strict';
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));// get the last 2 elements
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

//SPLICE
// console.log(arr.splice(2));
// console.log(arr);//['a','b']
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//reverse
const arr2 = ['j', 'k', 'l', 'm', 'n'];
console.log(arr2);
console.log(arr2.reverse());

const lt1 = ['o', 'p', 'q'];
const lt2 = ['r', 's', 't'];
const letters = lt1.concat(lt2);
console.log(letters);
console.log([...lt1, ...lt2]);
console.log(letters.join(' -> '));