const factorial = function (number) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    total += number - i;
  }
  return total;
};
let arr = [1, 2, 3, 4];
// console.log(sum(arr));
console.log(factorial(5));
