
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
        uri: '/source',
        text: 'logout'
      }
    };
  }

  render() {
    return(
      <header>
        <h1>{this.state.logoText}</h1>
        <Link to={this.state.logout.uri}>{this.state.logout.text}</Link>
      </header>
    );
  }
}

export default Header;