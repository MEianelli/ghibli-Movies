import { combineReducers } from 'redux';
import { ALL, WATCHED, REQUESTING } from './actions';

const initialState = { leftOverMovies: [], watchedMovie: [], requesting: false}

function movies(state = initialState, action) {
  switch (action.type) {
    case ALL:
      return { ...state, leftOverMovies: action.payload, requesting: false };
    case WATCHED:
      return { ...state,
        leftOverMovies: action.payload.leftOverMovies,
        watchedMovie: action.payload.watchedMovie,
      }
    case REQUESTING:
      return { ...state, requesting: true}
    default:
      return state;
  }
}

const rootReducer = combineReducers({ movies });

export default rootReducer;
