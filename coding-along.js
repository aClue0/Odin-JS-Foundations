let input = document.querySelector("#input");
let para = document.querySelector("p");

let add7button = document.querySelector("#calc7");

function add7(num) {
  if (isNaN(num)) return `Not a number!`;
  return Number(input.value) + 7;
}
add7button.addEventListener("click", () => {
  let calculatedValue = add7(Number(input.value));
  para.textContent = `The result is ${calculatedValue}`;
});
