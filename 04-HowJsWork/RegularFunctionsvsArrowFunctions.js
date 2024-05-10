'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`)// sẽ là hey jonas nếu đây là hàm thông thường !
  }
};
jonas.greet();
console.log('----------------------------------')
const jonas2 = {
  firstName: 'Jonas',
  year: 1992,
  calcAge2: function() {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet2: function() {
    console.log(this);
    console.log(`Hey ${this.firstName}`)
  }
};
jonas2.greet2();
console.log('----------------------------------')
const michael = {
  firstName: 'michael',
  year: 1991,
  calcAge3: function() {
    console.log(2037 - this.year)
    // Solution 1
    // const self = this;
    // const isMillenial = function() {
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996)
    };
    isMillenial();
  },
  greet3: () =>{
    console.log(this);
    console.log(`Hey ${this.firstName}`)
  }
}
michael.greet3();
michael.calcAge3();

console.log('---------------------------------')
// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
//
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);