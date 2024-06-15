'use strict';
//1: Định nghĩa một đối tượng prototype
const PersonProto = {
  calcAge(){
    console.log(2100 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
//2; Tạo một đối tượng mới Linh với prototype là PersonProto
const Linh = Object.create(PersonProto);
Linh.birthYear = 2000;
Linh.calcAge();
console.log(Linh.__proto__);
console.log(Linh.__proto__ === PersonProto);

const Sarah = Object.create(PersonProto);
Sarah.init('Sarah', 2010);
Sarah.calcAge();