'use strict';
const Person = function(firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function() {
  console.log(2100 - this.birthYear);
};

const Linh = new Person('Linh', 2000);
Linh.calcAge();
console.log(Linh.__proto__);//at step3
console.log(Linh.__proto__ === Person.prototype);
//Object.prototype (top of prototype chain)
console.log(Linh.__proto__.__proto__);
console.log(Linh.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,3,4,5,6,3,4,1];// new Array === []
console.log(arr.__proto__);

//NOTE: arr kế thừa tất các các phương thức từ prototype của nó
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);


Array.prototype.unique = function() {// tất cả các mảng sẽ kế thừa phương thức này.
  return [...new Set(this)];//  this là mảng mà phương thức unique được gọi trên đó
}// no recommend
console.log(arr.unique());

