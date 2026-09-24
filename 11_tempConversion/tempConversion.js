const convertToCelsius = function (num) {
  // function to convert from F to C
  return Math.round((num - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (num) {
  // function to convert from C to F
  return Math.round((num * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
