import React from 'react';

class LogForm extends React.Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.replace('/');
    }
  }
  render() {
    return <h1>Log Form</h1>;
  }
}

export default LogForm;
