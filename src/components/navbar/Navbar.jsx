import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/budgetee_primary_logo.png';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
    renderButtonLogout = () => {
        if (this.props.auth.isSignedIn) {
            return (
                <div>
                    <span className={styles.authName}></span>
                    &nbsp;&nbsp;&nbsp;
                    <button
                        className={`btn btn-primary ${styles.btnLogout}`}
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
                    <img
                        src={logo}
                        alt="bugetee_logo"
                        id={styles.budgeteeLogo}
                    />
                </a>
                {this.renderButtonLogout()}
            </nav>
        );
    }
}

export default Navbar;
