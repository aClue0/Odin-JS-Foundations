let input = document.querySelector("#input");
let para = document.querySelector("p");

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(4, 2));

let testingWord = "ABCD";
function capitalize(word) {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize(testingWord));

function lastLetter(word) {
  return word.slice(-1);
}
console.log(lastLetter(testingWord));
