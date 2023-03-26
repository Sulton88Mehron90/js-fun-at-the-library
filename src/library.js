function createLibrary(name){
  var fantasy =[];
  var fiction =[];
  var nonFiction =[];
  var library = {
    name,
    shelves: {fantasy, fiction, nonFiction}
  };
  return library;
};

function addBook(name, title){
  if(title.genre === "fantasy"){
    name.shelves.fantasy.push(title);
  } else if (title.genre === "nonFiction"){
    name.shelves.nonFiction.push(title);
  } else{
    name.shelves.fiction.push(title);
  };
};

function checkoutBook(name, title, genre){
  for(var i = 0; i < name.shelves[genre].length; i++){
    if(genre === "fiction"){
      name.shelves.fiction.splice(title.title);
    }else if(genre === "nonFiction"){
      name.shelves.nonFiction.splice(title.title);
    }else if(genre === "fantasy"){
      name.shelves.fantasy.splice(title.title);
    };
    name.shelves.fantasy[i].title !== title || name.shelves.nonFiction[i].title !== title || name.shelves.fiction[i].title !== title;
    return `You have now checked out ${title} from the ${name.name}.`;
  };
  return `Sorry, there are currently no copies of ${title} available at the ${name.name}.`;
};

function takeStock(name, genre){
  var totalBooks = name.shelves["fantasy"].length + name.shelves["fiction"].length + name.shelves["nonFiction"].length;
  if(genre){
    return `There are a total of ${name.shelves[genre].length} ${genre} books at the ${name.name}.`
  } else{
    return `There are a total of ${totalBooks} books at the ${name.name}.`
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};