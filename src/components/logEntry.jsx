import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

class LogEntry extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <div className={`log-entry-content ${type}`}>
        <div className="entry-total grid">
          <div className="icon">
            <FontAwesomeIcon
              icon={
                type === 'expense' ? faChevronCircleUp : faChevronCircleDown
              }
            />
          </div>
          <div className="total">
            <span className="amount">0</span>&nbsp;
            <span className="currency">៛</span>
          </div>
        </div>
        <div className="entry-list">
          <div className="entry-item grid">
            <div className="delete-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="entry-name">Phone Top Up</div>
            <div className="entry-amount">
              <span className="amount">5,000</span>&nbsp;
              <span className="currency">៛</span>
            </div>
          </div>
          <div className="entry-item grid">
            <div className="delete-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="entry-name">Phone Top Up</div>
            <div className="entry-amount">
              <span className="amount">5,000</span>&nbsp;
              <span className="currency">$</span>
            </div>
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
            placeholder="Amount"
          />
          <select className="form-control sel-log-currency">
            <option value="khr">៛ Riel</option>
            <option value="usd">$ Dollar </option>
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
