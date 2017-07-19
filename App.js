import React from 'react';
import Header from './components/header/Header';
import CreateTask from './components/create-task/CreateTask';
import TaskLineItem from './components/task-line-item/TaskLineItem'
import style from './styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newTaskName: '',
      taskList: [
        {
          id: 0,
          name: "go to doctor"
        },
        {
          id: 1,
          name: "buy choclate"
        }
      ],
      completedTaskList: [
        {
          id: 2,
          name: "plan vacations"
        }      
      ],
      navLinks: [
        {
          name: 'home',
          url: '#'
        },
        {
          name: 'contact',
          url: '#'
        }
      ]
    };
    this.state.nextTaskId = this.state.taskList.length + this.state.completedTaskList.length;
    this.addNewTaskName = this.addNewTaskName.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  /* Finds a task within supplied List using Id and returns task Object ref 
    and its index in List */
  findTask(list, id){
    var taskInf;

    list.forEach((task, i) => {
      if (task.id === id){
        return taskInf = {
          task: task,
          index: i
        };
      }
    });  

    return taskInf;
  }

  /* Updates task status : From Undone to Done or vice bersa */
  updateTaskStatus(e){
    var taskInf, sourceList, destList, id = parseInt(e.target.parentNode.id);

    if (e.target.checked){
      sourceList = this.state.taskList;
      destList = this.state.completedTaskList
    }else{
      sourceList = this.state.completedTaskList;
      destList = this.state.taskList  
    }
    taskInf = this.findTask(sourceList, id);
    sourceList.splice(taskInf.index, 1);
    destList.push(taskInf.task);
    this.setState({
      taskList: this.state.taskList,
      completedTaskList: this.state.completedTaskList
    });
  }

  addNewTaskName(e){
    this.setState({
      newTaskName: e.target.value
    });
  }

  createTask(){
    var list = this.state.taskList;

    list.push({
      id: this.state.nextTaskId++,
      name: this.state.newTaskName
    })
    this.state.newTaskName = '';
    this.setState({
      taskList : list
    });
  }

  // Updates Task Undone Task
  updateTask(e){
    var id = parseInt(e.target.parentNode.id), list = this.state.taskList;

    if (e.target.parentNode.dataset.completed){
      return false;
    }

    list.forEach((task, i) => {
      if (task.id === id){
        task.name = e.target.value;
        return false;
      }
    });
    this.setState({
      taskList: list
    });
  }

  // Deletes Task : Undone or Done
  deleteTask(e){
    var id = parseInt(e.target.parentNode.id), 
      listName = e.target.parentNode.dataset.completed ? "completedTaskList" : "taskList",
      list = this.state[ listName ];
 
    list.splice(this.findTask(list, id).index, 1);
    this.setState({
      listName: list
    });  
  }

  render() {
    return (
      <div>
        <Header navLinks={this.state.navLinks} />
        <CreateTask newTaskName={this.state.newTaskName} addNewTaskName={this.addNewTaskName} createTask={this.createTask} />
        <section>
            { this.state.taskList.map((task, i) => <TaskLineItem name={task.name} id={task.id} key={task.id} updateTask={this.updateTask} deleteTask={this.deleteTask} updateTaskStatus={this.updateTaskStatus}/>) }
        </section>        
        <section className="striked">
            { this.state.completedTaskList.map((task, i) => <TaskLineItem completed={true} name={task.name} id={task.id} key={task.id} updateTask={this.updateTask} deleteTask={this.deleteTask} updateTaskStatus={this.updateTaskStatus}/>) }
        </section>
      </div>
    );
  }
}

export default App;
