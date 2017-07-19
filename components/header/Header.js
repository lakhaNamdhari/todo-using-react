
/* This prints apps header */

import React from 'react';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      navItems: {}
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
        <nav className="flex" >
          { this.props.navLinks.map((link, i) => <a key={i} onClick={this.setActiveNavLink} className={this.state.navItems[link.name]} href={link.url} >{link.name}</a>)}
        </nav>
      </header>
    );
  }
}

export default Header;