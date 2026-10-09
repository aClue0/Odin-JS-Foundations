const findTheOldest = function (people) {
  let oldestPerson = {};
  const now = new Date();
  const currYear = now.getFullYear();

  function calcAge(person) {
    if (!person.yearOfDeath) person.yearOfDeath = currYear;
    return Number(person.yearOfDeath) - Number(person.yearOfBirth);
  }

  for (const person of people) {
    let ageOfOldest = calcAge(oldestPerson);
    let ageOfCurrent = calcAge(person);

    if (!(ageOfOldest > ageOfCurrent)) {
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
