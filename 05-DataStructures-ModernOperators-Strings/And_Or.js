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
console.log('------------ OR --------------');
console.log('John' || 3);//user any data type, return any datatype. But prioritize real value
console.log('' || 'Linda');
console.log(true || 0);
console.log(undefined || null);
console.log(23 || 'Linda' || '' || true || 0 || undefined || null);
console.log('------------------------------');
// restaurant.numGuests = 24; //not work with 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('------------ AND --------------');
console.log(0 && 'Peter');
console.log(7 && 'Jonas');
console.log('Hello world' && 23 && null && 'Peter');
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom','Spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');