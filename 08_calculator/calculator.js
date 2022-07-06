const add = function (...args) {
  let sum = args.reduce((prev, next) => prev + next); // 0 is initial value provided as second parameter to reduce function

  return sum;
};

const subtract = function (...args) {
  let sub = args.reduce((prev, next) => prev - next);

  return sub;
};

const sum = function (array) {
  let sum = array.reduce((prev, next) => prev + next, 0)
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }

  return sum;
};
// console.log(sum([1,2,3]));
const multiply = function (array) {
  let product = array.reduce((prev, next) => prev * next)
  // for (let i = 0; i < array.length; i++) {
  //   product *= array[i];
  // }

  return product;
};
// console.log(multiply([1,2,3]));
const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if(a === 0) return 1;
  let fact = 1;
  temp = a;
  while (temp > 0) {
    fact *= temp; // 5.4.3.2.1 = 120
    temp--;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
