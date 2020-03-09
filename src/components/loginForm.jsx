import React from 'react';
import savings from '../assets/savings.svg';
import googleLogo from '../assets/google-brands.svg';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-content">
        <div className="login-form grid">
          <img src={savings} alt="saving logo" className="saving-img" />
          <button className="btn btn-primary btn-google-login">
            <img src={googleLogo} alt="google" className="google-logo" />
            &nbsp;&nbsp;&nbsp;Login with Google
          </button>
        </div>
        <div className="developer">
          Developed by <strong>Vannyou_TANG</strong>
        </div>
      </div>
    );
  }
}

export default LoginForm;
