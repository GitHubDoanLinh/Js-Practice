'use strict';
const Car = function(brand, speed){
  this.brand = brand;
  this.speed = speed;
}
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.brand} going at ${this.speed} km/h`)
}
Car.prototype.brake = function() {
  this.speed -=5;
  console.log(`${this.brand} going at ${this.speed} km/h`)
}
const car1 = new Car('BMW', 120);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.accelerate();
car2.brake();