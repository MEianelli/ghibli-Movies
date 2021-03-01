export const ALL = 'ALL';
export const WATCHED = 'WATCHED';
export const REQUESTING = 'REQUESTING';

export const addAllMovies = (arr) => ({
  type: ALL,
  payload: arr,
});

export const watchedMovie = (leftOverMovies, watchedMovie) => ({
  type: WATCHED,
  payload: {
    leftOverMovies,
    watchedMovie,
  }
});

export const requestingMovies = () => ({
  type: REQUESTING,
})

export const fetchAllMovies = () => {
  return async dispatch => {
    dispatch(requestingMovies());
    const allMoviesJSON = await fetch("https://ghibliapi.herokuapp.com/films");
    const allMovies = await allMoviesJSON.json(); 
    return dispatch(addAllMovies(allMovies));
  }
}