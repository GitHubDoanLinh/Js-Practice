'use strict';
//First class function (hàm bậc nhất)
//Store function in variables or properties
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function() {this.value++}
};
//return 1 hàm từ 1 hàm khác
counter.inc().bind(someOtherObject);

//truyền các hàm làm đối số cho hàm khác
const greet = () => console.log('Hey Linh');
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', greet);//here

/*-------------------------------------------------------------------*/
//Higher-order functions (Hàm bậc cao)
//Function Nhận 1 function khác
const greet2 = () => console.log('Hey linda');
btnClose.addEventListener('click', greet);


