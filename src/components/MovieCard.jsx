import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieCard.css';
import { watchedMovie } from '../Redux/actions';

class MovieCard extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const { movie, movies, handleWatched, watched } = this.props;
    const newMovies = [...movies];
    const newWatched = [...watched];
    newWatched.push(movie)
    const indexMovie = newMovies.find(({title}) => title === movie.title);
    newMovies.splice(indexMovie,1);
    handleWatched(newMovies, newWatched);
  }

  render() {
    const { movie, button } = this.props;
    const { title, description, release_date: year } = movie;
    return (
      <tr className="movieCard">
        <td>{ title }</td>
        <td>{ description }</td>
        <td>{ year }</td>
        <td>
        { button ? <button 
        type="button"
        onClick={ this.handleClick }
        >Watched</button> : '✓' }
        </td>
      </tr>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  watched: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleWatched: PropTypes.func.isRequired,
  button: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  movies: state.movies.leftOverMovies,
  watched: state.movies.watchedMovie,
});

const mapDispatchToProps = dispatch => ({
  handleWatched: (arr,obj) => dispatch(watchedMovie(arr,obj)),
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);