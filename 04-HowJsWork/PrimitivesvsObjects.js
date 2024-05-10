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