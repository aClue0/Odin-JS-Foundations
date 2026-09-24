const sumAll = function (...args) {
  for (const item of args) {
    if (!(typeof item === "number") || item < 0 || !Number.isInteger(item)) {
      return "ERROR";
    }
  }

  const max = Math.max(...args);
  const min = Math.min(...args);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};
sumAll(1, 2, 3, 4, 5);
// Do not edit below this line
module.exports = sumAll;
