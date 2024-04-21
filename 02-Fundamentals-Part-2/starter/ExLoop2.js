const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`the average if Bills is ${calcAverage(Bills)}`);
console.log(calcAverage([2, 3, 7]));
