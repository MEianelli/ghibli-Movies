import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import TableHeader from './TableHeader';
import Loading from './Loading';

class MyList extends React.Component {
  render() {
    const { watchedMovie } = this.props;
    return (
      <>
        { watchedMovie.length === 0 ? 
        <Loading textMsg={`ZERO WATCHED`}/> : <TableHeader/> }
        <tbody>
        { watchedMovie.map((movie,index) => (
            <MovieCard key={ index} movie={ movie } button={ false }/>
        ))}
        </tbody>
      </>
    );
  }
}
MyList.propTypes = {
  watchedMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  watchedMovie: state.movies.watchedMovie,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,)(MyList);