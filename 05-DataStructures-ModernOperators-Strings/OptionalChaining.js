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
  },
  [weekdays[6]]: {
    open: 11,
    close: 23
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
if (restaurant.openingHours.fri)//true
  console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours && restaurant.openingHours.mon)//fall
  console.log(restaurant.openingHours.mon.open);

//With optional chaining 👍
console.log(restaurant.openingHours.mon?.open);// monday exists or not
console.log(restaurant.openingHours?.mon?.open);// openingHours exists or not

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}. We open at ${open}`);
}
console.log('---------------------------');
for (const day of days) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}. We open at ${open}`);
}
console.log('-------Refactor with nullish----------');
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}. We open at ${open}`);
}

//Optional chaining with Method
console.log(restaurant.order?.(0, 1) ?? 'Order method does\'nt exist');

const users = [{ name: 'Linh', email: 'doanlinh1510@gmail.com' }];// an arr contain an obj
console.log(users[0]?.email ?? 'User array empty');
if (users.length > 0)
  console.log(users[0].name);
else console.log('Users array empty');