'use strict';
const linh = {
  name: 'Doan Huu Linh',
  year: 2000,
  calcAge: function() {
    return 2100 - this.year;
  }
};
const linhsAge = linh.calcAge();
console.log(`Linh's age = ${linhsAge}`);

const calcAges = function(birthYear) {
  console.log(2039 - birthYear);
  console.log(this);
}
calcAges(1991);

const calcAgeArrow = birthYear =>{
  console.log(2039 - birthYear);
  console.log(this);
}
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAgeJonas : function() {
    console.log(this);// 'this' chính là obj jonas vì jonas gọi tới phương thức chứa this
    console.log(2037 - this.year);
  }
}
jonas.calcAgeJonas();

const michael = {
  year: 2016
};
michael.calcAgeJonas  = jonas.calcAgeJonas;
michael.calcAgeJonas();// 'this' lúc này trỏ đến đối tượng michael