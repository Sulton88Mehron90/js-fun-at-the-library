function createTitle(title) {
  return `The ${title}`;
};
function buildMainCharacter(name, age, pronouns){
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
 return character
};

function saveReview(string, reviews){
  reviews.push(string);
  for(var i = 0; i < reviews.lenght; i++){
    console.log(reviews[i]);
  };
};

function calculatePageCount(bookTitle){
  var bookPageCount = bookTitle.length * 20;
    return bookPageCount;
};

function writeBook(bookTitle, bookCharacter, string){
  var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: string
  };
  return book;
};
function editBook(book){
 // console.log(book);
  pageCount = book.pageCount
  book.pageCount = pageCount * 0.75;
  // book.pageCount = bookTitle.length * 0.75;
  console.log(book.pageCount);

};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}