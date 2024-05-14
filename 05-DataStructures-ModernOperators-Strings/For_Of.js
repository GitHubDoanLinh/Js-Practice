'use strict';
const restaurant = {
  name: 'Classical Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    }
  }
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('-------  for (const item of menu) console.log(item) -------')
for (const item of menu) console.log(item);
console.log('------- for (const item of menu.entries()) console.log(item);  ------- ')
for (const item of menu.entries()) console.log(item);
console.log('---  console.log(menu.entries())  ---')
console.log(menu.entries());
console.log('---  console.log([...menu.entries()])  ---')
console.log([...menu.entries()]);
console.log('--- console.log(`${item[0] + 1}: ${item[1]}`) ---')
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);//refactor display
}







