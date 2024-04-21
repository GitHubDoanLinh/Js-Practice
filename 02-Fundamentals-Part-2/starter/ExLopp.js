const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const Tips = [];
const Totals = [];
for (let i = 0; i < Bills.length; i++) {
  Tips[i] = calcTip(Bills[i]);
  Totals[i] = Bills[i] + Tips[i];
  console.log(
    `Bill with value is ${Bills[i]} with tip is ${Tips[i]} => total = ${Totals[i]} $`
  );
}
