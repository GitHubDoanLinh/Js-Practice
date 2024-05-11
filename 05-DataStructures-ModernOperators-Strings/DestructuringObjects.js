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
  },
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function(starterIndex, mainIndex,time,address) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be to ${address} at time ${time}`);
  }
};
restaurant.orderDelivery(2, 1, '06:15', 'Đại học Thủy Lợi');

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;//Default value
console.log(menu, starter);

//Mutating variables
let a = 100;
let b = 111;
const obj = { a: 22, b: 26, c: 27 };
({ a, b } = obj);
console.log(a, b);

//Nested object
const { fri } = openingHours;
console.log(fri);
//Refactoring fri object
const { fri: { open, close } } = openingHours;
console.log(open, close);

