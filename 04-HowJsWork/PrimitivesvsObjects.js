'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
console.log('------------------but--------------')
const me = {
  name: 'Jonas',
  age: 30
};
const friend = me;
friend.age = 26;
console.log('me: ', me);
console.log('friend: ', friend);
console.log("-------------------------------------")
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age:28
};
const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before married:', jessica);
console.log('After married:' ,marriedJessica);

//Copying objects
const linda = {
  firstName: 'Linda',
  lastName: 'Natalya',
  age: 27,
  family: ['Alice', 'Thane']
};
const lindaCopy = Object.assign({},linda);//only for Global scope
lindaCopy.lastName = 'Dimitri';

lindaCopy.family.push('Peter');
lindaCopy.family.push('John');
console.log('before: ', linda);
console.log('after', lindaCopy);