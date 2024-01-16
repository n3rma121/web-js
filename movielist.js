const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

// get movies title
const titles = (movies) => movies.map(movie => movie.title);


// Get movies by Christopher Nolan
const nolanMovies = (movies) => movies.filter((movie) => movie.director === 'Christopher Nolan')


// Get titles of movies with an IMDB rating greater or equal to 7.5
const bestTitles = (movies) => movies.filter((movie) => movie.imdbRating >= 7.5).map(movie => movie.title);

// Compute average rating of a movie list
const averageRating = (movies) => movies.reduce((sum, movie) => sum + movie.imdbRating, 0) / movies.length;



console.log(titles(movieList));
const nolanMovieList = nolanMovies(movieList);
console.log(nolanMovieList.length);
console.log(bestTitles(movieList));
console.log(averageRating(nolanMovieList));