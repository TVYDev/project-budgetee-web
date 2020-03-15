import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleUp,
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import LogEntryForm from './logEntryForm';
import LogEntryItem from './logEntryItem';

class LogEntry extends React.Component {
  render() {
    const { type, data, currency, onEntryAdd } = this.props;
    const { entries } = data;

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
            <span className="amount">{data[`total_${currency}`]}</span>&nbsp;
            <span className="currency">{currency === 'khr' ? '៛' : '$'}</span>
          </div>
        </div>
        <div className="entry-list">
          {entries.map(entry => (
            <LogEntryItem key={entry.name} data={entry} />
          ))}
        </div>
        <LogEntryForm onEntryAdd={onEntryAdd} />
      </div>
    );
  }
}

export default LogEntry;
