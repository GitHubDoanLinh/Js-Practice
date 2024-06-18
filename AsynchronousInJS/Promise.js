'use strict';
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

//similar to this:
const request = fetch('https://restcountries.com/v2/name/vietnam');
console.log(request);