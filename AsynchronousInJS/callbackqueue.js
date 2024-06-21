console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

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