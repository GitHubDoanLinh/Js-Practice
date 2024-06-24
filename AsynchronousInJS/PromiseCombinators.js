'use strict';
// Promise.race
const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
(async function() {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/vietnam`),
    getJSON(`https://restcountries.com/v2/name/portugal`),
    getJSON(`https://restcountries.com/v2/name/netherlands`)
  ]);
  console.log(res[0]);
})();

const timeOut = function(sec) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error('Request took too long!'));
    }, sec);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v2/name/brazil`)
], timeOut(0.1))
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));