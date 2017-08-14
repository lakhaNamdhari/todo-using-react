
/* Task component is used to print each table row*/

import React from 'react';
import style from './task-line-item.css';

class TaskLineItem extends React.Component {
  render() {
    return (
      <div data-completed={this.props.completed} className="task-line-item" id={this.props.id}>
        <input checked={this.props.completed ? true : false} onChange={this.props.updateTaskStatus} type="checkbox" />
        <input className="no-borders" type="text" value={this.props.name} onChange={this.props.updateTask} />
        <a className="icon-close" href="#" onClick={this.props.deleteTask}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;