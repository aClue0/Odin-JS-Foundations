const removeFromArray = function (arr) {
  let numbersToRemove = Array.from(arguments).slice(1);
  for (let i = 0; i < numbersToRemove.length; i++) {
    const num = numbersToRemove[i];
    while (arr.includes(num)) {
      let index = arr.indexOf(num);
      if (index < 0) continue;
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
