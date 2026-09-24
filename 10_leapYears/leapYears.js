const leapYears = function (num) {
  isLeapYear = false;
  if ((num % 4 === 0 && !(num % 100 === 0)) || num % 400 === 0) {
    isLeapYear = true;
  }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
