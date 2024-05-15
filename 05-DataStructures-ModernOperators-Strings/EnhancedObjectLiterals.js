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
  [`day-${2+4}`]: {
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
  //before ES6
  //openingHours: openingHours,
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 Enhanced Object Literals :^)
  openingHours,
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(starterIndex, mainIndex,time,address) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be to ${address} at time ${time}`);
  }
};

