const addBtn = document.querySelector("#addItem");
const input = document.querySelector("#item");
const shoppingItems = document.querySelector("#shoppingItems");

addBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  let item = input.value;
  input.value = "";

  const newItem = document.createElement("li");
  newItem.textContent = item;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (ev) => {
    ev.target.parentElement.remove();
  });
  shoppingItems.appendChild(newItem);
  input.focus();
});
