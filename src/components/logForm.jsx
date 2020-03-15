import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import LogEntry from './logEntry';
import LogDayNavigator from './logDayNavigator';

class LogForm extends React.Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.replace('/');
    }
  }
  render() {
    return (
      <div className="log-form-content container">
        <LogDayNavigator />
        <div className="log-total-amount">
          <FontAwesomeIcon icon={faCheckCircle} />
          &nbsp;&nbsp;&nbsp;Total = <span>+3,000 KHR</span>
        </div>
        <LogEntry />
        <LogEntry />
      </div>
    );
  }
}

export default LogForm;
