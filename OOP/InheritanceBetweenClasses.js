'use strict';
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2100 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2105 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    //Bước này luôn luôn phải có ! (tạo this trong class con)
    super(fullName, birthYear);// gọi tới constructor của class cha

    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`Because I am a student from a rich family, my life expectancy will be more, 
    specifically ${2100 - this.birthYear}`)
  }
}

const Faraday = new Student('Michael Faraday', 1790);// still work without super(..., ...)
const Linus = new Student('Linus Torvalds', 1970, 'Computer science');
Linus.introduce();
Linus.calcAge();