import React from 'react';
import savings from '../assets/savings.svg';
import GoogleAuth from './googleAuth';

class LoginForm extends React.Component {
  componentDidUpdate() {
    if (this.props.isSignedIn) {
      this.props.history.replace('/log');
    }
  }

  render() {
    return (
      <div className="login-content">
        <div className="login-form grid">
          <img src={savings} alt="saving logo" className="saving-img" />
          <GoogleAuth onSignIn={this.props.onSignIn} />
        </div>
        <div className="developer">
          Developed by <strong>Vannyou_TANG</strong>
        </div>
      </div>
    );
  }
}

export default LoginForm;
