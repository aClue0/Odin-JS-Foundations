const palindromes = function (string) {
  // ^ means not , \w means  a word character , \s means  a space so all together means
  // replace all without punctuation or spaces you should \w /g means all
  const parsedString = string.toLowerCase().trim().replace(/[^\w]/g, "");
  console.log(parsedString);
  for (let i = 0; i < parsedString.length; i++) {
    const char = parsedString[i];

    if (char !== parsedString[parsedString.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
console.log(palindromes("A car, a man, a mar'aca."));
