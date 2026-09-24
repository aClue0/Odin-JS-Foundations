const removeFromArray = function (arr, numberToRemove) {
  let index = arr.indexOf(numberToRemove);
  arr.splice(index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
