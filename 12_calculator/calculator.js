const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, currNumber) => {
    total += currNumber;
    return total;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currNumber) => {
    total *= currNumber;
    return total;
  }, 1);
};

const power = function (base, exp) {
  let total = 1;
  for (let i = 0; i < exp; i++) {
    total *= base;
  }
  return total;
};

const factorial = function (number) {
  let total = 1;
  for (let i = 0; i < number; i++) {
    total *= number - i;
  }
  return total;
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
