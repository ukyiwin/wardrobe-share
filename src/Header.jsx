import React, { Component, Fragment } from 'react';
import './styles/Header.sass';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1 className="header">Wardrobe Share</h1>
          <i />
          <i />
        </header>
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li className="active">Create</li>
            <li>Browse</li>
            <li>About</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Header;
