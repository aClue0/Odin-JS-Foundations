const output = document.querySelector(".output");
output.textContent = "";

let num = 10;

while (num >= 0) {
  const para = document.createElement("p");
  console.log(num);

  if (num === 10) {
    para.textContent = `Countdown 10!`;
  } else if (num === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = `${num}`;
  }
  output.appendChild(para);
  num--;
}
