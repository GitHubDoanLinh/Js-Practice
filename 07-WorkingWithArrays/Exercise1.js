'use strict';
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const allDogs = dogsJuliaCorrected.concat(dogsKate);
  allDogs.forEach(function(age, index){
    const result = age >= 3 ? console.log(`Dog number ${index+1} is an adult, and is ${age} years old`) :
      console.log(`Dog number ${index + 1} is still a puppy 🐶`)
    console.log(result);
  })
}
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);