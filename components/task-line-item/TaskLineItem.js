
import React from 'react';
import style from './task-line-item.css';
import appDispatcher from '../../appDispatcher.js';
import actionTypes from '../../actionTypes.js';

class TaskLineItem extends React.Component {
	constructor(){
		super();
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
	}

	// Removes TODO
  removeTask(){
    appDispatcher.dispatch({
      type: actionTypes.REMOVE_TODO,
      data: this.props.task.id
    });
  }	

  // Updates TODO
  updateTask(e){
    if (!this.props.task.isCompleted){
      appDispatcher.dispatch({
        type: actionTypes.UPDATE_TODO,
        data: {
          id: this.props.task.id,
          taskName: e.target.value
        }
      });    
    }
  }  

  // Updates TODO's status
  updateTaskStatus(e){
    appDispatcher.dispatch({
      type: actionTypes.UPDATE_TODO_STATUS,
      data: {
      	id: this.props.task.id,
      	isCompleted: e.target.checked
      }
    });
  }

  render() {
    return (
      <div className={`task-line-item ${this.props.task.isCompleted ? 'disabled' : ''}` }>
        <input checked={this.props.task.isCompleted} type="checkbox" onChange={this.updateTaskStatus} />
        <input className="no-borders" type="text" value={this.props.task.name} onChange={this.updateTask} />
        <a className="icon-close" href="#" onClick={this.removeTask}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;