function createLibrary(name){
  var library = {
    name:name,
    // shelves:[genre]
  };
  return library;
};


module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook,
  // takeStock
};