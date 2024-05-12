'use strict';
const rest1 = {
  name: 'Capri',
  numGuests: 20,
  //numGuests: 0;
};
const rest2 = {
  name: "Italia Pizza",
  owner: "Lò Văn Tí"
};
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//Refactor
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
console.log('--------------- Nullish ----------------');//it'll work when case Null or Undefined
const rest3 = {
  name: 'Castle',
  // numGuests: 20,
  numGuests: 0
};
const rest4 = {
  name: "Villa",
  owner: "Nguyễn Văn A"
};
rest3.numGuests ??= 10;
rest4.numGuests ??= 10;
rest3.owner = rest3.owner && '<Anonymous>';// != rest3.owner &&= '<Anonymous>';
rest4.owner = rest4.owner && '<Anonymous>';
console.log(rest3);
console.log(rest4);
