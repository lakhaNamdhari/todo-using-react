import React from 'react';
import Header from './components/header/Header';
import Task from './components/task/Task'
import style from './styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newTaskName: '',
      taskList: [
        {
          id: 0,
          name: "Go to doctor"
        },
        {
          id: 1,
          name: "buy choclate"
        },
        {
          id: 2,
          name: "Plan vacations"
        }
      ]
    }

    this.addNewTaskName = this.addNewTaskName.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTaskName(e){
    this.setState({
      newTaskName: e.target.value
    });
  }

  updateTask(e){
    var currentTaskId = parseInt(e.target.name);

    this.state.taskList.forEach((task, i) => {
      if (task.id === currentTaskId){
        task.name = e.target.value;
        return false;
      }
    });
    this.setState({
      taskList: this.state.taskList
    });
  }

  createTask(){
    this.state.taskList.push({
      id: this.state.taskList.length,
      name: this.state.newTaskName
    })
    this.setState({
      taskList : this.state.taskList 
    });
    this.state.newTaskName = '';
  }

  deleteTask(e){
    var currentTaskId = parseInt(e.target.id);

    this.state.taskList.forEach((task, i) => {
      if (task.id === currentTaskId){
        this.state.taskList.splice(i, 1);
        return false;
      }
    });
    this.setState({
      taskList: this.state.taskList
    });  
  }

  render() {
    return (
      <div>
        <Header newTaskName={this.state.newTaskName} addNewTaskName={this.addNewTaskName} createTask={this.createTask} />
        <section>
            { this.state.taskList.map((task, i) => <Task name={task.name} id={task.id} key={task.id} updateTask={this.updateTask} deleteTask={this.deleteTask}/>) }
        </section>
      </div>
    );
  }
}

export default App;
