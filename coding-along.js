// Map to names
//
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
//
// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
let names = users.map((user) => {
  return user.name;
});

console.log(names); // John, Pete, Mary
// Map to objects
// Sort users by age
// Get average age
// Create keyed object from array
