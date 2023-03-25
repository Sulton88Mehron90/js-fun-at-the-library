
function shelfBook(book, sciFiShelf){
  console.log(book);
  if(sciFiShelf.length < 3){
    return sciFiShelf.unshift(book);
  };
};

function unshelfBook(bookTitle, sciFiShelf){
  for(var i =0; i < sciFiShelf.length; i++){
    if(sciFiShelf[i].title === bookTitle){
      sciFiShelf.splice(i, 1);
    };
  };  
};

function listTitles(booksInfo){
  var listOfTitles = [];
  for(var i = 0; i < booksInfo.length; i++){
      listOfTitles.push(booksInfo[i].title)
  };
  return listOfTitles.join(", ");
};

function searchShelf(booksShelf, title){
  for(var i = 0; i < booksShelf.length; i++){
    if(booksShelf[i].title === title){
      return true;
    };
  };
   return false;

};


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};