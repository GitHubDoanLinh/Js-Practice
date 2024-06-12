'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
//1
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

//3
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

//4&5
const ownersEatToMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(`${ownersEatToMuch.join(' and ')}'s dogs eat too much!`);

const ownersEatToLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatToLittle.join(' and ')}'s dogs eat too little!`);

//6
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//7
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9
  && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

//8
const dogsSortByEat = dogs.slice().sort((a, b) =>
  a.recFood - b.recFood);
console.log(dogsSortByEat);






