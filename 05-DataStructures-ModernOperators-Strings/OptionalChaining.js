'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [`day-${2+5}`]: {
    open: 0,
    close: 24
  }
};
const restaurant= {
  name: 'Classical Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced Object Literals
  openingHours,
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(starterIndex, mainIndex,time,address) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be to ${address} at time ${time}`);
  }
};
if(restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);
if(restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);