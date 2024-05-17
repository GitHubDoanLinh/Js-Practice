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
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Noodle',
  'Risotto',
  'Pasta'
]);
console.log(orderSet);
console.log(new Set('Linh'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
console.log(orderSet[0]);
// orderSet.clear();

for(const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

console.log(new Set(['Students', 'Teacher', 'Principle', 'Students', 'Teacher']).size);
console.log(new Set('doanhuulinh').size);
//=> khi muốn lưu trữ các giá trị có thứ tự và có thể trùng lặp => dùng mảng
//=> khi muốn lưu trữ các giá trị ko có thứ tự và là duy nhất => dùng set