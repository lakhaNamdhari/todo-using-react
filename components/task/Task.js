
/* Task component is used to print each table row*/

import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="flex" >
        <input type="checkbox" />
        <input className="no-borders" type="text" name={this.props.id} value={this.props.name} onChange={this.props.updateTask} />
        <a className="icon-close" id={this.props.id} href="#" onClick={this.props.deleteTask}>x</a>
      </div>
    );
  }
}

export default Task;