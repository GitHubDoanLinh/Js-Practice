'use strict';
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test end');

// flow of event loop
/*
+---------------------------------------------------------+
| Mã đồng bộ                                              |
| - console.log('Start')                                  |
| - console.log('End')                                    |
+---------------------------------------------------------+
                          ↓
+---------------------------------------------------------+
| Microtasks Queue                                        |
| - Promise.resolve().then(...)                           |
+---------------------------------------------------------+
                          ↓
+---------------------------------------------------------+
| Callback Queue (Task Queue)                             |
| - setTimeout(...)                                       |
+---------------------------------------------------------+
*/