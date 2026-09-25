// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
//
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const bluePara = document.createElement("h3");
bluePara.style.color = "blue";
bluePara.textContent = "I'm a blue h3!";
container.appendChild(bluePara);

const pink = document.createElement("div");
pink.style.backgroundColor = "pink";
pink.style.borderColor = "black";

const pinkh1 = document.createElement("h1");
pinkh1.textContent = "I'm in a div";

const pinkP = document.createElement("p");
pinkP.textContent = "ME TOO!";
pink.appendChild(pinkh1);
pink.appendChild(pinkP);
container.appendChild(pink);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    ev.target.style.backgroundColor = "blue";
    alert(button.id);
  });
});
