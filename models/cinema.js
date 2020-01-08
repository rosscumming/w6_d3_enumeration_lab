const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitle = function(){
  const filmsByName = this.films.map((film) => {
    return film.title;
  });
  return filmsByName;
};


Cinema.prototype.getFilmByTitle = function(title){
  const filmByTitle = this.films.find((film) => {
    return film.title === title;
})
// console.log(filmByTitle);
  
return filmByTitle;
};

Cinema.prototype.getFilmsByGenre = function(genre){
  const filmsByGenre = this.films.filter((film) => {
    return film.genre === genre;
  })
  return filmsByGenre;
};

// Cinema.prototype.getFilmsByYear = function(year){
//   const filmsByYear = this.films.filter((film) => {
//     return film.year === year;
//   })
//   return filmsByYear;
// };

Cinema.prototype.getFilmsByYear = function(year){
  return this.films.some((film) => {
    return film.year === year;
  })
};

Cinema.prototype.getFilmsByLength = function(length) {
  return this.films.every((film) => {
    return film.length > length;
  })
};

Cinema.prototype.getAllFilmsLength = function() {

  const filmsByLength = this.films.map((film) => {
    return film.length;
  })
  return filmsByLength.reduce((totalLength, currentValue) => {
    return totalLength + currentValue
  }, 0);
}



module.exports = Cinema;
