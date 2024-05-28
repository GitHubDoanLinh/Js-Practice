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
  airline: 'VietJetAir',
  bnCode: 'VJA',
  bookings: [],
};

const book = vietnamAirLine.book;
const bookVJ = book.bind(vietjetAir);
bookVJ(23, 'Jenifer Connelly');

//So - I can do this
// const bookBB = book.bind(bambooAirWay);
// const bookJP = book.bind(japanAirLine);

const bookVJ23 = book.bind(vietjetAir, 466);
bookVJ23('Michael Faraday');
bookVJ23('John Doe');
bookVJ23('BilGate');

vietjetAir.planes = 300;
vietjetAir.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}
// vietjetAir.buyPlane();
// document.querySelector('.buy').addEventListener('click', vietjetAir.buyPlane); //:^( --> phải truyền vào 1 hàm thay vì gọi hàm <--

//FIX
// document.querySelector('.buy').addEventListener('click', () => vietjetAir.buyPlane()); //use arrow function
document
  .querySelector('.buy')
  .addEventListener('click', vietjetAir.buyPlane.bind(vietjetAir)); // Recommendations

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//New function with signature = value (use bind)
const addVAT = addTax.bind(null, 0.15);// (value) => addTax(0.15, value)
console.log(addVAT(100));
console.log(addVAT(80));

// A different way with arrow function
const createTaxAdder = rate => value => value + value * rate;
const addTax2 = createTaxAdder(0.1);
console.log(addTax2(200));

// create addVAT2 function with rate = 0.15.
const addVAT2 = createTaxAdder(0.15);
console.log(addVAT2(100));
console.log(addVAT2(80));

//A different way with regular function
const createTaxAdderRF = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}
const addVAT_RF = createTaxAdderRF(0.1);
console.log(addVAT_RF(300));
const addVAT_RFF = createTaxAdderRF(0.2);
console.log(addVAT_RFF(500))