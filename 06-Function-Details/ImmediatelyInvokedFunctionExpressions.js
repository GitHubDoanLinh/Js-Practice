'use strict';
const runOnce = function() {
  console.log('This will never run again');
};
runOnce();
// runOnce();  // :^(

(function () {
  console.log('This will never run again!');
})(); // :^)

(() => console.log('This will also never run again!!'))();

{
  const isPrivate = 46;
  let isPrivate2 = 48;
  var notPrivate = 33;// no recommend
}
// console.log(isPrivate); //Can NOT do it
// console.log(isPrivate2);// Can NOT do it
  console.log(notPrivate);
