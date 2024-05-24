'use strict';
const flight = 'VJ266';
const linh = {
  name: 'Doan Huu Linh',
  passport: '181289966898'
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH198';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === '181289966898') {
    alert('Check in');
  } else {
    alert('Wrong password!');
  }
};
checkIn(flight, linh);
console.log(flight);
console.log(linh);
// Is the same as doing...
const flightNum = flight;
const passenger = linh;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * Math.pow(10, 6));
};
newPassport(linh);
checkIn(flight, linh);