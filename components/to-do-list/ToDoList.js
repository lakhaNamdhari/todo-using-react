import React from 'react';
import TaskLineItem from '../task-line-item/TaskLineItem'
import style from './to-do-list.css';
import taskStore from '../../taskStore.js';
import actions from '../../actions.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      taskList: taskStore.getTaskList()
    };

    this.updateState = this.updateState.bind(this);
    this.newTaskHandler = this.newTaskHandler.bind(this);
    this.createTask = this.createTask.bind(this);
    taskStore.onChange(this.updateState);
  }

  // Update View when store changes
  updateState(){
    this.setState({
      taskList: taskStore.getTaskList()
    })
  }

  // Creates a new TODO
  createTask(){
    actions.addToDo(this.newTaskInput.value);
    this.newTaskInput.value = '';
  }  

  // Creates a new TODO
  newTaskHandler(e){
    if (e.keyCode === 13){
      this.createTask();
    }
  }

  // Renders the component
  render() {
    return (
      <div className="to-do-list">
        <div className="create-task">
          <input type="text" ref={(input) => this.newTaskInput = input} onKeyUp={this.newTaskHandler} /> 
          <button type="submit" onClick={this.createTask} >+</button> 
        </div>
        <div>
					{ this.state.taskList.map((task, i) => <TaskLineItem task={task} key={task.id} />) }
        </div>        
      </div>
    );
  }
}

export default App;
