import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Main from './components/Main';
import MyList from './components/MyList';
import './App.css';
import { fetchAllMovies } from './Redux/actions';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'

class App extends React.Component {
  componentDidMount(){
    const { getMoviesAPi } = this.props;
    getMoviesAPi();
  }

  render() {
    return (
      <>
      <TopNavBar />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="myList">My List</Link>
      </div>
      <table className="movieList">
          <Switch>
            <Route path="/myList" component={ MyList }/>
            <Route path="/" component={ Main } />
          </Switch>
      </table>
      </>
    );
  }
}
App.propTypes = {
  getMoviesAPi: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  watched: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.leftOverMovies,
  watched: state.movies.watchedMovie,
});

const mapDispatchToProps = dispatch => ({
  getMoviesAPi: () => dispatch(fetchAllMovies()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);


