'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
    open: 0,
    close: 24
  }
};
const restaurant = {
  name: 'Classical Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced Object Literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(starterIndex, mainIndex, time, address) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be to ${address} at time ${time}`);
  }
};
const question = new Map([
  ['question','Which is the best food in the world?'],
  [1, 'Bread'],
  [2, 'Rice'],
  [3, 'Noodle'],
  ['correct', 3],
  [true, 'Correct 🥇'],
  [false, 'Try again!']
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Quiz app
console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${
    key}: ${value}`);
}
const answer = Number(prompt('Your answer:'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);











