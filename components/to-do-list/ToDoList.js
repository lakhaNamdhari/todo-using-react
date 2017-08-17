import React from 'react';
import TaskLineItem from '../task-line-item/TaskLineItem'
import style from './to-do-list.css';
import appDispatcher from '../../appDispatcher.js';
import taskStore from '../../taskStore.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      taskList: taskStore.getTaskList()
    };

    this.updateState = this.updateState.bind(this);
    taskStore.onChange(this.updateState);
  }

  updateState(){
    this.setState({
      taskList: taskStore.getTaskList()
    })
  }

  // Creates a new TODO
  createTask(e){
    appDispatcher.dispatch({
      type: 'ADD_TODO',
      data: e.target.previousSibling.value
    });
    e.target.previousSibling.value = '';
  }

  render() {
    return (
      <div className="to-do-list">
        <div className="create-task">
          <input type="text" /> 
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
