import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

class LogDayNavigator extends React.Component {
  render() {
    return (
      <div className="log-day-navigator-content grid">
        <div className="previous-day">
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className="day-to-log">Today</div>
        <div className="next-day">
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    );
  }
}

export default LogDayNavigator;
