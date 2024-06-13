const Person = function(firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function() {
  console.log(2100 - this.birthYear);
}

const Linh = new Person('Linh', 2000);
Linh.calcAge();
console.log(Linh.__proto__);//at step3
console.log(Linh.__proto__ === Person.prototype)//Prototype của đối tượng Linh chính là thuộc tính prototype của hàm khởi tạo
//NOTE: Person.prototype không phải là prototype của Person, thay vào đó nó đc sử dụng làm
// prototype của tất các các đối tượng được tạo bằng hàm tạo Person !
console.log(Person.prototype.isPrototypeOf(Linh));//true
console.log(Person.prototype.isPrototypeOf(Person));//false
//SO. Should be called "Person.prototypeLinkedObjects"

const Linus = new Person('Linus', 1970);
const Michael = new Person('Michael', 1791);
Person.prototype.species = 'dân tộc King';
console.log(Linus.species, Linus.species, Michael.species);
//NOTE: species không phải thuôc tính trực tiếp của đối tượng Linh, Linus, Michael,
// vì vậy, các tt riêng chính là những thuộc tính được khai báo trực tiếp trên
// chính đối tượng ! .=> Check
console.log(Linh.hasOwnProperty('firstName'));//true
console.log(Linh.hasOwnProperty('species'))//false