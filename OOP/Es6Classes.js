'use strict';
//class expression
// const PersonCL = class {}

//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //method will bw added to .prototype property`
  calcAge() {
    console.log(2100 - this.birthYear);
  }
}
const michael = new PersonCL('Michael', 1996);
michael.calcAge();
console.log(michael.__proto__ === PersonCL.prototype);

PersonCL.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`)
}
michael.greet();