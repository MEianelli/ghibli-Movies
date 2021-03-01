import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  render() {
    const { textMsg } = this.props;
    return (
      <thead>
      <tr>
        <th className="loading">{ textMsg }</th>
      </tr>
    </thead>
    );
  }
}

Loading.propTypes = {
  textMsg: PropTypes.string.isRequired,
}

export default Loading;