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
  orderPizza: function(mainComponent, ...otherComponent) {
    console.log(mainComponent);
    console.log(otherComponent);
  }
};
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//Nullish: null and undefined (NOT 0 or '')
const guestCorrect  = restaurant.numGuests ?? 10;
console.log(guestCorrect);//only = 10 when numG = null or undefined