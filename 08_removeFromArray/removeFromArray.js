const removeFromArray = function (arr) {
  let numbersToRemove = Array.from(arguments).slice(1);
  console.log(numbersToRemove);
  for (let i = 0; i < numbersToRemove.length; i++) {
    const num = numbersToRemove[i];
    index = arr.indexOf(num);
    if (index < 0) continue;
    arr.splice(index, 1);
  }
  console.log(arr);
  return arr;
};
removeFromArray([1, 2, 3, 4], 7, "tacos");
// removeFromArray([1, 2, 3, 4, 5, 6, 7, 7], 1, 2, 3, 4, 5);

// Do not edit below this line
module.exports = removeFromArray;
