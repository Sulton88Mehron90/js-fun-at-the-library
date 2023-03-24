
function shelfBook(book, sciFiShelf){
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

function searchShelf(booksOnShelf){
  console.log(booksOnShelf)
  for(var i = 0; i < booksOnShelf.length; i++){
   if(!booksOnShelf.includes(booksOnShelf[i].title)){
    return true;
   }else if(booksOnShelf.includes(booksOnShelf[i].title)){
    return false;
   };
  };
};




module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};