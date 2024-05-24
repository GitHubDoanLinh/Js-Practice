'use strict';
const bookings = [];
const createBooking = function(flightNum,
                               numPassenger = 1,
                               price = 269 * numPassenger) {
  //ES5
  // numPassenger = numPassenger || 1;
  // price = price || 1;
  const booking = {
    flightNum,
    numPassenger,
    price
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('VN266');
createBooking('LH256', 27, 262);
createBooking('LH256', 2);
createBooking('LH256', 5);
createBooking('LH256', undefined, 1000)