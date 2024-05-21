'use strict';
console.log('a+very+nice+string'.split('+'));
console.log('Michael Faraday'.split(' '));

const [firstName, lastName] = 'Michael Faraday'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for( const word of names) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
    // namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));

}
capitalizeName('wilson billy harry porter');
capitalizeName('michael faraday');

//Padding
const message = 'Back to school!';
console.log(message.padStart(25, "+"));
console.log('Michael'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(1989767878));
console.log(maskCreditCard(1998689892288));
console.log(maskCreditCard('1998689899576987698'));

//Repeat
const messageWarning = 'Bad weather... All flights delayed !!!...';
console.log(messageWarning.repeat(5));

const planesInline = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)};
planesInline(3);
planesInline(5);