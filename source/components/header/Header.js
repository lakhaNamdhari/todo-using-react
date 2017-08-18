
/* This prints apps header */

import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      navItems: {},
      navLinks: [
        {
          name: 'home',
          url: '/'
        },
        {
          name: 'contact',
          url: '/contact'
        }
      ]
    };
    this.state.activeNav = 'home';
    this.state.navItems[this.state.activeNav] = 'active';
    this.setActiveNavLink = this.setActiveNavLink.bind(this);
  }

  setActiveNavLink(e){
    var clickedItemIndex = e.target.innerText.toLowerCase();
    var state = this.state;

    state.navItems[this.state.activeNav] = '';
    state.activeNav = clickedItemIndex;
    state.navItems[clickedItemIndex] = 'active';
    this.setState(state);
  }

  render() {
    return(
      <header>
        <h1>ToDo List</h1>
        {/* 
        <nav className="flex">
          { this.state.navLinks.map((link, i) => <Link key={i} to={link.url} className={this.state.navItems[link.name]} onClick={this.setActiveNavLink}>{link.name}</Link>) }
        </nav>
        */}
      </header>
    );
  }
}

export default Header;