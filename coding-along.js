// Map to names
//
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
//
// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [john, pete, mary];
// let names = users.map((user) => {
//   return user.name;
// });
//
// console.log(names); // John, Pete, Mary

// Map to objects

// You have an array of user objects, each one has name, surname and id.
//
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//
// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => {
  const fullName = [user.name, user.surname];
  return { fullName: fullName.join(" "), id: user.id };
});

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// Sort users by age
// Get average age
// Create keyed object from array
