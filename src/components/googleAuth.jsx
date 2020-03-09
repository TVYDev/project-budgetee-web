import React from 'react';
import googleLogo from '../assets/google-brands.svg';

class GoogleAuth extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary btn-google-signin"
        onClick={this.props.onSignIn}
      >
        <img src={googleLogo} alt="google" className="google-logo" />
        &nbsp;&nbsp;&nbsp;Login with Google
      </button>
    );
  }
}

export default GoogleAuth;
