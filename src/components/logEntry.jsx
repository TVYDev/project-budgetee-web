import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleUp,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

class LogEntry extends React.Component {
  render() {
    return (
      <div className="log-entry-content">
        <div className="entry-total grid">
          <div className="icon">
            <FontAwesomeIcon icon={faChevronCircleUp} />
          </div>
          <div className="total">- 0 KHR</div>
        </div>
        <div className="entry-list">
          <div className="entry-item grid">
            <div className="delete-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="entry-name">Phone Top Up</div>
            <div className="entry-amount">- 5,000 KHR</div>
          </div>
          <div className="entry-item grid">
            <div className="delete-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="entry-name">Phone Top Up</div>
            <div className="entry-amount">- 5,000 KHR</div>
          </div>
        </div>
        <div className="entry-form grid">
          <select className="form-control sel-log-name">
            <option value="lunch">Lunch</option>
            <option value="petrol">Petrol</option>
          </select>
          <input
            type="number"
            className="form-control txt-log-amount"
            placeholder="amount"
          />
          <select className="form-control sel-log-currency">
            <option value="khr">KHR</option>
            <option value="usd">USD</option>
          </select>
          <button type="button" className="btn-primary btn-add-log">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default LogEntry;
