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

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [john, pete, mary];
//
// let usersMapped = users.map((user) => {
//   const fullName = [user.name, user.surname];
//   return { fullName: fullName.join(" "), id: user.id };
// });
//
// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// Sort users by age
// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
//
// For instance:
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [pete, john, mary];
//
// function sortByAge(arr) {
//   return arr.sort((userA, userB) => userA.age - userB.age);
// }
// sortByAge(arr);
//
// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// Get average age
// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
//
// The formula for the average is (age1 + age2 + ... + ageN) / N.
//
// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
function getAverageAge(arr) {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    const user = arr[i];
    average += user.age;
  }
  return average / arr.length;
}
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
// Create keyed object from array
