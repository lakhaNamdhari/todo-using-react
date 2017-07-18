
/* Task component is used to print each table row*/

import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <tr>
        <td><input type="checkbox" /></td>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}

export default Task;