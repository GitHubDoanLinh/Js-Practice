'use strict';
const airline = 'VietNam Airline';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'mIcHaeL';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'doanlinh1510@gmail.com';
const loginEmail = ' DoanLinh1510@gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//AllIn
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceVN = '288,155VND';
const priceUS = priceVN.replace('VND', '$')
  .replace(',', '.');
console.log(priceUS);
// Replace all similar words
const announcement = 'All passengers come to barding door 23. Barding door 23!';
// console.log(announcement.replaceAll(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));// best choice

const plane = 'Boeing B737bob';
console.log(plane.includes('B737'));
console.log(plane.includes('AirBird'));
console.log(plane.startsWith('Boe'));
if (plane.startsWith('Boeing') && plane.endsWith('bob')) {
  console.log('Part of the new Boeing family');
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board !!!');
  }else {
    console.log('Welcome a board');
  }
}
checkBaggage('I have a laptop, some bread pieces and pocket Knife');
checkBaggage('Shoes, socks and camera');
checkBaggage('Got some snacks and a gun for protection');
