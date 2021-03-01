import fetch from 'node-fetch';

export const getAllMovies = async () => {
  const allMoviesJSON = await fetch("https://ghibliapi.herokuapp.com/films");
  const allMovies = await allMoviesJSON.json(); 
  return allMovies;
}
