import React from 'react';

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Year</th>
          <th>Watched?</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;