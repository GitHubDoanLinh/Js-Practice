'use strict'
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);
console.log('------------------------------');
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
//rest element must be last element and only one quantity
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

const add = function(...numbers) {//rest parameter cho phép truyền vào 1 số lượng tham số ko xác định
  // console.log(...numbers)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
};
add(1, 2);// [1,2]
add(3, 4, 5);
add(6, 7, 8, 9);
const x = [7, 8, 9];
add(...x);