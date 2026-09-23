let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let trippledEvenSum = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((sum, current) => sum + current, 0);

console.log(trippledEvenSum);
// ----------------------------------------------------
// Doing the other Java.info Exercises for arrays
// Translate border-left-width to borderLeftWidth

let words = [
  "java-script-info-exercise",
  "man-am-i-dumb",
  "love-your-parents",
  "--web-kit",
  "background-color",
];

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

// better solution I can just use .map instead of a for function
function camelizeBetter(wordsToCamelize) {
  return wordsToCamelize.map((word) => {
    return word
      .split("-")
      .map((part, index) => {
        if (index === 0) return part.toLowerCase();
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      })
      .join("");
  });
}
console.log(camelizeBetter(words));

// ----------------------------------------------------
// Filter Range
arr = [1, 2, 3, 3, 4, 5, 6, 7, 2, 8, 9, 10];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

console.log(filterRange(arr, 2, 7));
// ----------------------------------------------------
// Filter Range inplace
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number < a || number > b) {
      arr.splice(i, 1);
      // This is really important because we removed an item from the array so the length is --
      i--;
    }
  }
}

filterRangeInPlace(arr, 3, 6);
console.log(arr);
// ----------------------------------------------------
// Sort in decreasing order

arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10
// ----------------------------------------------------
// copy and sort array
arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  // This doesn't work because result points at the reference of arr so it's not a different array
  // let result = arr;
  // return result.sort();

  return arr.slice().sort();
}
let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
// ----------------------------------------------------
// shuffle array

arr = [1, 2, 3];
function shuffle(arr) {
  const LENGTH = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    arr.splice(i, 1);
    const randomNumber = Math.floor(Math.random() * (LENGTH - 1) + 1);
    arr.splice(randomNumber, 0, num);
  }
  console.log(arr);
}
shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
