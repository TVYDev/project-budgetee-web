import React from 'react';
import logo from '../assets/budgetee_primary_logo.png';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="bugetee_logo" id="budgetee-logo" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
