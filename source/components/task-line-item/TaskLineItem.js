
import React from 'react';
import style from './task-line-item.css';
import actions from '../../scripts/actions.js';

class TaskLineItem extends React.Component {
	constructor(){
		super();
    this.updateToDo = this.updateToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
	}

	// Removes TODO
  removeToDo(){
    actions.removeToDo(this.props.task.id);
  }	

  // Updates TODO
  updateToDo(e){
    var params = {
      id: this.props.task.id,
    };

    if (e.target.type === 'checkbox'){
      params.isCompleted = e.target.checked
    }else{
      params.name = e.target.value
    }

    actions.updateToDo(params);    
  }

  render() {
    return (
      <div className={`task-line-item ${this.props.task.isCompleted ? 'disabled' : ''}` }>
        <input checked={this.props.task.isCompleted} type="checkbox" onChange={this.updateToDo} />
        <input className="no-borders" type="text" value={this.props.task.name} onChange={this.updateToDo} />
        <a className="icon-close" href="#" onClick={this.removeToDo}>x</a>
      </div>
    );
  }
}

export default TaskLineItem;