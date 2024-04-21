'use strict';
const friends = ['John', 'Peter','Ryan'];
friends.push('Linda');
console.log(friends);
console.log(friends.length);

friends.unshift('Alex');
console.log(friends);

friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Nix'));

console.log(friends.includes('John'));

friends.push(23);
console.log(friends.includes('23'));

