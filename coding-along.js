const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => {
  return cat.startsWith("L");
});
console.log(filtered);
