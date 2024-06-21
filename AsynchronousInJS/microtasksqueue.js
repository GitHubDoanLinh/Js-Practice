console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

/*+---------------------------------------------------------+
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