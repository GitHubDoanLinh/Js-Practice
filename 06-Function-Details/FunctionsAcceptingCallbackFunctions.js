'use strict';
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}
//Higher-order function
const transformer = function(str, fuc){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fuc(str)}`);
  console.log(`Transformed by ${fuc.name}`);
}
transformer('javascript is fun!', upperFirstWord);
transformer('javascript is fun!', oneWord);
const high2 = function() {
  console.log('✌️');
}
document.body.addEventListener('click', high2);//high2 is a callback function, add...er is a higher-order function
['Michael', 'Linda', 'Peter'].forEach(high2);