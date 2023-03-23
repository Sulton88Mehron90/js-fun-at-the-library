
function shelfBook(book, sciFiShelf){
  for(var i = 0; i < sciFiShelf.length; i++){
    return  sciFiShelf[i];
    //sciFiShelf.push(book);
  };
  //return sciFiShelf;

};



module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};