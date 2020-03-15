import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class LogEntryItem extends React.Component {
  render() {
    const { name, amount, currency } = this.props.data;

    return (
      <div className="entry-item grid">
        <div className="delete-icon">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <div className="entry-name">{name}</div>
        <div className="entry-amount">
          <span className="amount">{amount}</span>&nbsp;
          <span className="currency">{currency === 'khr' ? '៛' : '$'}</span>
        </div>
      </div>
    );
  }
}

export default LogEntryItem;
