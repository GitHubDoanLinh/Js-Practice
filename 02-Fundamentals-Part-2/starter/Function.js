'use strict';
function logger(){
    console.log("hello world");
}
logger();
logger();

function fruitProcessor(apples, orange) {
    console.log(apples,orange);
    const juice = `Juice with ${apples} apple and ${orange} orange.`;
    return juice;
}
// fruitProcessor(6,2);
let result = fruitProcessor(6,2);
console.log(result);

let result2 = fruitProcessor(2,4);
console.log(result2);