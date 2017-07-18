import React from 'react';
import Header from './components/header/Header';
import Task from './components/task/Task'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newTaskName: '',
      data: [
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

    this.updateTaskName = this.updateTaskName.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  updateTaskName(e){
    this.setState({
      newTaskName: e.target.value
    });
  }

  createTask(){
    this.state.data.push({
      id: this.state.data.length,
      name: this.state.newTaskName
    })
    this.setState({
      data: this.state.data
    });
    this.state.newTaskName = '';
  }

  render() {
    return (
      <div>
        <Header newTaskName={this.state.newTaskName} updateTaskName={this.updateTaskName} createTask={this.createTask} />
        <table>
          <tbody>
            { this.state.data.map((task, i) => <Task name={task.name} key={task.id} />) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
