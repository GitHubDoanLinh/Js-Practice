'use strict';
// Định nghĩa hàm constructor Person
const Person = function(firstName, birthYear) {
  console.log(this);
  this.f_Name = firstName;
  this.b_Year = birthYear;

  //never do this
  // this.calcAge = function(){
  //   console.log(2080 - this.b_Year);
  // }
};
//Instead
Person.prototype.calcAge = function() {
  console.log(new Date().getFullYear() - this.b_Year);
};

const Linh = new Person('Linh', 2000);
console.log(Linh);
console.log(Linh instanceof Person);

const Linus = new Person('Linus', 1970);
const Michael = new Person('Michael', 1990);
Linus.calcAge()
Michael.calcAge()

//SUMMARY
//Step1. New {} is created
//Step2. function is called, this = {}
//Step3. {} linked to prototype
//Step4. function automatically return {}