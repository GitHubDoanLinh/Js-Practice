'use sctrict';
const account1 = {
  owner: 'Linh Doan Huu',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Linus Torvalds',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Michael Faraday',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Jame Gosling',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};
const accounts = [account1, account2, account3, account4];

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .length;
console.log(numDeposits1000);
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((counter, cur) => cur >= 1000 ? ++counter  : counter, 0);
// console.log(numDeposits1000);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 });
console.log(sums); // => { deposits: 25180, withdrawals: -7340 }

//difference way with destructuring
const { dep, withd } = accounts
  .flatMap(acc => acc.movements)
  .reduce((summ, curr) => {
    summ[curr > 0 ? 'dep' : 'withd'] += curr;
    return summ;
  }, { dep: 0, withd: 0 });
console.log(dep, withd);

// convert a title : this is a nice title => This Is a Nice Title
const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'and', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word))
    .join(' ');
  return capitalize(titleCase);// áp dụng hàm capitalize lên chuỗi tiêu đề đã được chuyển đổi
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('a hi hi do cho'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


