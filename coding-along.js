// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.table(
  inventors.filter((user) => {
    if (user.year >= 1500 && user.year < 1600) {
      return true;
    }
  }),
);

// Array.prototypetablemap()
// 2. Give us an array of the inventors first and last names
let fullnames = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});
console.log(fullnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.table(sortedInventors);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const allTogether = inventors.reduce((total, currentInventor) => {
  return total + (currentInventor.passed - currentInventor.year);
}, 0);

console.log(allTogether);
// 5. Sort the inventors by years lived

const sortedbyYearsInventors = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year),
);
console.table(sortedbyYearsInventors);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const page = document.querySelector("#mw-pages");
// const links = Array.from(page.querySelectorAll("a"));
// const onlyDe = links
//   .map((link) => {
//     return link.textContent;
//   })
//   .filter((link) => {
//     return link.includes("de");
//   });
// console.table(onlyDe);

// 7. sort Exercise
// Sort the people alphabetically by last name
let sortedAlpha = inventors.sort((inventor1, inventor2) =>
  inventor1.last.localeCompare(inventor2.last),
);
console.table(sortedAlpha);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
// make a key for each word and for each instance increase the value
function sumInstances(data) {
  let instances = {};
  for (const word of data) {
    if (!instances[word]) instances[word] = 0;
    instances[word]++;
  }
  return instances;
}
console.table(sumInstances(data));
