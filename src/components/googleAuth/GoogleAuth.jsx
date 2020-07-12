import React from 'react';
import googleLogoSvg from '../../assets/google-brands.svg';
import styles from './GoogleAuth.module.css';

class GoogleAuth extends React.Component {
    render() {
        return (
            <button
                className={`btn btn-primary ${styles.btnGoogleSignIn}`}
                onClick={this.props.onSignIn}
            >
                <img
                    src={googleLogoSvg}
                    alt="google"
                    className={styles.googleLogo}
                />
                &nbsp;&nbsp;&nbsp;Login with Google
            </button>
        );
    }
}

export default GoogleAuth;
