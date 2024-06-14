'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

};

const jonas = new Person('Jonas', 1991);
console.log(jonas instanceof Person);
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
// jonas.hey() // can NOT

/*-----------------------------------------------------------*/

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance method
  get age(){
    return 2100 - this.birthYear;
  }
  //set a property that already exists
  set fullName(name) {
    if(name.includes(' '))
      this._fullName = name;
    else
      alert(`${name} is not a full name !`)
  }
  get fullName(){
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('hey there 👋')
    console.log(this);
  }
}
PersonCL.hey();

/**-------------------------------------------------------------------------**/
class MathUtil {
  // Định nghĩa phương thức static
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Gọi phương thức tĩnh trực tiếp trên class
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.multiply(5, 3)); // 15

// Tạo một instance của lớp MathUtil
const mathUtilInstance = new MathUtil();

// Cố gắng gọi phương thức tĩnh thông qua instance (sẽ không hoạt động)
try {
  console.log(mathUtilInstance.add(5, 3));
} catch (e) {
  console.error(e.message); // mathUtilInstance.add is not a function
}
