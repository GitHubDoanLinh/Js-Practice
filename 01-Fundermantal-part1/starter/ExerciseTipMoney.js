let bill = Number(prompt("Nhap vao gia tri hoa don"));
let guesstrue = bill*0.15;
let guessfailed = bill*0.2;
let total1 = bill+guesstrue;
let total2 = bill+guessfailed;
let isCorrect = 50<=bill<=300 ? console.log(`hóa đơn có giá trị ${bill} với tiền boa ${guesstrue} => tổng = ${total1}`) :
console.log(`hóa đơn có giá trị ${bill} với tiền boa ${guessfailed} => tổng = ${total2}`)