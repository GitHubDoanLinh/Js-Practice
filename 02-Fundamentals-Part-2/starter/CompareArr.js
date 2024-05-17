'use strict';
const a = [1, 2];
const b = [1, 2];
console.log(a === b); // false, vì a và b là hai đối tượng khác nhau trong bộ nhớ!

const c = a;
console.log(a === c); // true, vì c và a tham chiếu đến cùng một đối tượng trong bộ nhớ!