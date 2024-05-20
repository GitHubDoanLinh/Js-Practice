'use strict';
const airline = 'VietNam Airline';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B320'[0]);
console.log(airline.length);
console.log('Boeing737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('airline'));
console.log(airline.slice(8));
console.log(airline.slice(8,11))
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));
const checkMiddleSeat = function(seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if(s === 'B' || s === "E")
    console.log('You got middle seat!');
  else
    console.log('You got lucky');
}
checkMiddleSeat('06B');
checkMiddleSeat('23C');
checkMiddleSeat('07E');
console.log(new String('michael'));
console.log(typeof new String('michael'));
console.log(typeof new String('michael').slice(1));