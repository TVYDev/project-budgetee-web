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
        <div className="log-total-amount positive">
          <FontAwesomeIcon icon={faCheckCircle} />
          &nbsp;&nbsp;&nbsp;Total = <span className="amount">3,000</span>&nbsp;
          <span className="currency">៛</span>
        </div>
        <div className="log-entries grid">
          <LogEntry type="expense" />
          <LogEntry type="income" />
        </div>
      </div>
    );
  }
}

export default LogForm;
