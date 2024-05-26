'use strict';
const vietnamAirLine = {
  airLine: 'VietNamAirLine',
  bnCode: 'VNA',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airLine} flight ${this.bnCode} ${flightNum}`);
    this.bookings.push({flight: `${this.bnCode} ${flightNum}`, name})
  },
};
vietnamAirLine.book(239, 'Doan Huu Linh');
vietnamAirLine.book(635, 'Linus Torvalds');
console.log(vietnamAirLine);

const vietjetAir = {
  name: 'VietJetAir',
  bnCode: 'VJA',
  bookings: [],
};

const book = vietnamAirLine.book;
// book(25,'John chris') //Does NOT work !!!

//Call method
book.call(vietjetAir, 233, 'John chris');
console.log(vietjetAir);

book.call(vietnamAirLine, 249, 'Jessica Billy');
console.log(vietnamAirLine);

//Apply method (no recommend)
const flightData = [469, 'John Doe'];
book.apply(vietjetAir, flightData);
console.log(vietjetAir);

book.call(vietjetAir, ...flightData);