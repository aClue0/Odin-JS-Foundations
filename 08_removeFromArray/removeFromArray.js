const removeFromArray = function (arr) {
  let numbersToRemove = Array.from(arguments).slice(1);
  console.log(numbersToRemove);
  return arr;
};
removeFromArray([1, 2, 3, 4, 5, 6, 7, 7], 1, 2, 3, 4, 5);

// Do not edit below this line
module.exports = removeFromArray;
