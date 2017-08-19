
/* This prints apps header */

import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      logoText: '2do',
      logout: {
        uri: '#',
        text: 'logout'
      }
    };
  }

  render() {
    return(
      <header>
        <h1>{this.state.logoText}</h1>
        <a href={this.state.logout.uri}>{this.state.logout.text}</a>
      </header>
    );
  }
}

export default Header;