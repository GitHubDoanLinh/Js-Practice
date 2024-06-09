'use strict';
//String
const owner = ['Linh', 'Torvalds', 'Gosling', 'Faraday'];
console.log(owner.sort());
console.log(owner);

//Number
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());// !!!
//Ascending
// movements.sort((a, b) => {
//   if (a > b) //switch order
//     return 1;
//   if (a < b) //keep order
//     return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
//Descending
// movements.sort((a, b) => {
//   if (a > b)
//     return -1;
//   if (a < b)
//     return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);