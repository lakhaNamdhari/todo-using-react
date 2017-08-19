import React from 'react';
import ToDoList from '../components/to-do-list/ToDoList';
import style from '../styles/app.css';
import Header from '../components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/source" component={ToDoList} />
        </div>
      </Router>
    );
  }
}

export default App;
