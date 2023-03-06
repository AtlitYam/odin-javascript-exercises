const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arrayToSum) {
  let result = 0;
  arrayToSum.forEach(value => {
    result += value;
  });
  return result;
};

const multiply = function (arrayToMultiply) {
  let result = 1;
  arrayToMultiply.forEach(value => {
    result *= value;
  });
  return result;

};

const power = function (a, pow) {
  return Math.pow(a, pow)
};

const factorial = function (a) {
  let result = 1;
  for (i = 1; i <= a; i++) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
