'use strict';
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Michael');
greeterHey('Linda');

greet('Hello')('Linus Torvalds');

const greet2 = (greeting2) => (name2) => console.log(`${greeting2} ${name2}`);
greet2('Hola')('Steve');