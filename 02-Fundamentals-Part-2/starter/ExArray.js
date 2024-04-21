const calcTip = function(cost){
    return cost>=50 && cost<=300 ? cost*0.15 : cost*0.2;
}
console.log(calcTip(120));

const Bill = [125,555,44];
const Tip = [calcTip(Bill[0]), calcTip(Bill[1]), calcTip(Bill[2])];
console.log(Bill,Tip);