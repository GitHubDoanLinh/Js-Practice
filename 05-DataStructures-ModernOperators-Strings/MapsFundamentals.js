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
const rest = new Map();
rest.set('name', 'Classical Italiano');
rest.set(1, 'Milan, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are close :( ')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('categories'));

const time = 20;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

rest.delete(2);
// rest.clear();
rest.set([1,2],'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get([1,2]));

//fix
const arr = [3,4];
rest.set(arr,'Test2');
console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);