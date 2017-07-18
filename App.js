import React from 'react';
import Header from './components/header/Header';
import Task from './components/task/Task'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          name: "Go to doctor"
        },
        {
          id: 2,
          name: "buy choclate"
        },
        {
          id: 3,
          name: "Plan vacations"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header/>
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
