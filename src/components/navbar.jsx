import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/budgetee_primary_logo.png';

class Navbar extends React.Component {
  renderButtonLogout = () => {
    if (this.props.auth.isSignedIn) {
      return (
        <div>
          <span className="auth-name"></span>
          &nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-primary btn-logout"
            onClick={this.props.onSignOut}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="bugetee_logo" id="budgetee-logo" />
        </a>
        {this.renderButtonLogout()}
      </nav>
    );
  }
}

export default Navbar;
