let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let trippledEvenSum = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((sum, current) => sum + current, 0);

console.log(trippledEvenSum);
// ----------------------------------------------------
// Doing the other Java.info Exercises for arrays
// Translate border-left-width to borderLeftWidth

let words = ["java-script-info-exercise", "man-am-i-dumb", "love-your-parents"];

function camelize(wordsToCamelize) {
  let result = [];
  for (const word of wordsToCamelize) {
    let camelized = word
      .split("-")
      .map((part, index) => {
        if (index === 0) return part.toLowerCase();
        else {
          return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }
      })
      .join("");
    result.push(camelized);
  }
  return result;
}

console.log(camelize(words));
