import React from 'react';
import mononoke from '../images/mononoke.jpg';
import './TopNavBar.css';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className="topNav">
        <img src={ mononoke } alt="Mononoke"/>
        <h1>Studio Ghibli</h1>
      </div>
    );
  }
}

export default TopNavBar;