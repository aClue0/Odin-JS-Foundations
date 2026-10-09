function calcAge(person) {
  const now = new Date();
  const currYear = now.getFullYear();
  if (!person.yearOfDeath) person.yearOfDeath = currYear;
  return Number(person.yearOfDeath) - Number(person.yearOfBirth);
}

const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    let ageOfOldest = calcAge(oldest);
    let ageOfCurrent = calcAge(person);

    if (!(ageOfOldest > ageOfCurrent)) {
      oldest = person;
    }
    return oldest;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
