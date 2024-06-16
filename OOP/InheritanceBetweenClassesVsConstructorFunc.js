'use strict';
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function() {
  console.log(2100 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  // gọi hàm Person và thiết lập ngữ cảnh (this) cho hàm đó là đối tượng hiện tại (Student)
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Đối tg Student.prototype bây giờ là 1 obj kế thừa từ Person.prototype(Linking prototype)
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
const linh = new Student('Linh', 2000, 'Computer science');
linh.introduce();
linh.calcAge();
console.log(linh.__proto__);
console.log(linh.__proto__.__proto__);
console.log(linh instanceof Student);
console.log(linh instanceof Person);
console.log(linh instanceof Object);

console.dir(Student.prototype.constructor);