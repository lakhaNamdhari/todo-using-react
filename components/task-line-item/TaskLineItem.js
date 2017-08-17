
/* Task component is used to print each table row*/

import React from 'react';
import style from './task-line-item.css';
import appDispatcher from '../../appDispatcher.js';

class TaskLineItem extends React.Component {
	// Removes a  TODO
  removeTask(e){
    appDispatcher.dispatch({
      type: 'REMOVE_TODO',
      data: parseInt(e.target.parentNode.id)
    });
  }	

  // Updates a  TODO
  updateTask(e){
    appDispatcher.dispatch({
      type: 'UPDATE_TODO',
      data: {
      	id: parseInt(e.target.parentNode.id),
      	taskName: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="task-line-item" id={this.props.id}>
        <input type="checkbox" />
        <input className="no-borders" type="text" value={this.props.name} onChange={this.updateTask} />
        <a className="icon-close" href="#" onClick={this.removeTask}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;