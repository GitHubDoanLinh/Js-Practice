'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};
const arr = [2,3,4];
const [x,y,z,t] = arr;
console.log(x,y,z,t);

const [main, ,secondary] = restaurant.categories;
console.log(main,secondary);
const [starter, mainCourse] = restaurant.order(2,0);//Receive 2 return values from a function
console.log(starter, mainCourse);

const nested = [2,4,[5,6]];
const [i, ,[j,k]] = nested;
console.log(i,j,k);

const [p=1, q=1, r=1] = [8,9];//Default values 
console.log(p,q,r);