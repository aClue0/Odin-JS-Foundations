const getTheTitles = function (arrOfBooks) {
  // let titles = [];
  // for (const book of arrOfBooks) {
  //   titles.push(book.title);
  // }
  // return titles;
  return arrOfBooks.reduce((titles, currBook) => {
    titles.push(currBook.title);
    return titles;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
