
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
        <nav className="flex" >
          <a className="active" href="\/">Home</a>
          <a href="\/contact">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;