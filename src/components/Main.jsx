import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import TableHeader from './TableHeader';
import Loading from './Loading';
import './Main.css';

class Main extends React.Component {
  render() {
    const { movies, requesting } = this.props;
    return (
      <>
        { requesting ? 
        <Loading textMsg={`LOADING...`}/> : <TableHeader/> }
        <tbody>
        { movies.map((movie,index) => (
            <MovieCard key={ index} movie={ movie } button={ true }/>
        ))}
        </tbody>
    
      </>
    );
  }
}
Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  requesting: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.leftOverMovies,
  requesting: state.movies.requesting,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,)(Main);