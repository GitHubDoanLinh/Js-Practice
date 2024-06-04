'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUsd = movements.map(function(mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUsd);

const movementsUsdAF = movements.map(mov_af => mov_af * eurToUsd);
console.log(movementsUsdAF);

const movementsUsdForLoop = [];
for (const mov of movements)
  movementsUsdForLoop.push(mov * eurToUsd);
console.log(movementsUsdForLoop);

const  movDescriptions  = movements.map((mov, i, arr) =>
  `Movements ${i+1}: You ${mov > 0 ? `Deposited ${mov}` : `You withdrew ${Math.abs(mov)}`}`);
console.log(movDescriptions);
