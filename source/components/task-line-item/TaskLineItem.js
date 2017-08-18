
import React from 'react';
import style from './task-line-item.css';
import actions from '../../scripts/actions.js';

class TaskLineItem extends React.Component {
	constructor(){
		super();
    this.updateToDoStatus = this.updateToDoStatus.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
	}

	// Removes TODO
  removeToDo(){
    actions.removeToDo(this.props.task.id);
  }	

  // Updates TODO
  updateToDo(e){
    if (!this.props.task.isCompleted){
      actions.updateToDo({
        id: this.props.task.id,
        taskName: e.target.value
      });    
    }
  }  

  // Updates TODO's status
  updateToDoStatus(e){
    actions.updateToDoStatus({
      id: this.props.task.id,
      isCompleted: e.target.checked
    });
  }

  render() {
    return (
      <div className={`task-line-item ${this.props.task.isCompleted ? 'disabled' : ''}` }>
        <input checked={this.props.task.isCompleted} type="checkbox" onChange={this.updateToDoStatus} />
        <input className="no-borders" type="text" value={this.props.task.name} onChange={this.updateToDo} />
        <a className="icon-close" href="#" onClick={this.removeToDo}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;