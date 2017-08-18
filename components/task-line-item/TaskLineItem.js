
import React from 'react';
import style from './task-line-item.css';
import appDispatcher from '../../appDispatcher.js';

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
      type: 'REMOVE_TODO',
      data: this.props.task.id
    });
  }	

  // Updates TODO
  updateTask(e){
    appDispatcher.dispatch({
      type: 'UPDATE_TODO',
      data: {
      	id: this.props.task.id,
      	taskName: e.target.value
      }
    });
  }  

  // Updates TODO's status
  updateTaskStatus(e){
    appDispatcher.dispatch({
      type: 'UPDATE_STATUS_TODO',
      data: {
      	id: this.props.task.id,
      	isCompleted: e.target.checked
      }
    });
  }

  render() {
    return (
      <div className={this.props.task.isCompleted ? 'disabled task-line-item' : 'task-line-item'}>
        <input checked={this.props.task.isCompleted} type="checkbox" onChange={this.updateTaskStatus} />
        <input className="no-borders" type="text" value={this.props.task.name} onChange={this.updateTask} />
        <a className="icon-close" href="#" onClick={this.removeTask}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;