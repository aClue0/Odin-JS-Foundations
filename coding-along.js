let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let trippledEven = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((sum, current) => sum + current, 0);

for (const num of trippledEven) {
  console.log(num);
}
