
/* This prints apps header */

import React from 'react';

class Header extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentwillUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return(
      <header>
        <h1>ToDo List</h1>
        <input type="text" value={this.props.newTaskName} onChange={this.props.updateNewTaskName} /> 
        <button type="submit" onClick={this.props.createTask} >create</button> 
      </header>
    );
  }
}

export default Header;