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

function saveReview(review){
  var reviews = []
  for(var i = 0; i < reviews.lenght; i++){
    if(reviews === review){
      reviews[i].push(review)
    };
  };
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}