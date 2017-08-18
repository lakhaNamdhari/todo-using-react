
/* Task component is used to print each table row*/

import React from 'react';
import style from './task-line-item.css';
import appDispatcher from '../../appDispatcher.js';

class TaskLineItem extends React.Component {
	// Removes TODO
  removeTask(e){
    appDispatcher.dispatch({
      type: 'REMOVE_TODO',
      data: parseInt(e.target.parentNode.id)
    });
  }	

  // Updates TODO
  updateTask(e){
    appDispatcher.dispatch({
      type: 'UPDATE_TODO',
      data: {
      	id: parseInt(e.target.parentNode.id),
      	taskName: e.target.value
      }
    });
  }  

  // Updates TODO's status
  updateTaskStatus(e){
    appDispatcher.dispatch({
      type: 'UPDATE_STATUS_TODO',
      data: {
      	id: parseInt(e.target.parentNode.id),
      	isCompleted: e.target.checked
      }
    });
  }

  render() {
    return (
      <div className={this.props.task.isCompleted ? 'disabled task-line-item' : 'task-line-item'} id={this.props.task.id}>
        <input checked={this.props.task.isCompleted} type="checkbox" onChange={this.updateTaskStatus} />
        <input className="no-borders" type="text" value={this.props.task.name} onChange={this.updateTask} />
        <a className="icon-close" href="#" onClick={this.removeTask}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;