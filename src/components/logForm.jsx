import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import LogEntry from './logEntry';
import LogDayNavigator from './logDayNavigator';

class LogForm extends React.Component {
  state = {
    grand_total_khr: 0,
    grand_total_usd: 0,
    currency: 'khr',
    expense: {
      total_khr: 0,
      total_usd: 0,
      entries: []
    },
    income: {
      total_khr: 0,
      total_usd: 0,
      entries: []
    }
  };

  handleEntryAddExpense = data => {
    this.updateEntryData('expense', this.state.expense, data);
    console.log('Log Form Expense', data);
  };

  handleEntryAddIncome = data => {
    this.updateEntryData('income', this.state.income, data);
    console.log('Log Form Income', data);
  };

  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.replace('/');
    }
  }

  updateEntryData = (type, oldData, newData) => {
    const newTotal =
      parseFloat(oldData[`total_${newData.currency}`]) +
      parseFloat(newData.amount);
    let newTotalKhr = 0;
    let newTotalUsd = 0;
    if (newData.currency === 'khr') {
      newTotalKhr = newTotal;
      newTotalUsd = newTotal / 4000;
    } else {
      newTotalKhr = newTotal * 4000;
      newTotalUsd = newTotal;
    }

    let newGrandTotalKhr = 0;
    if (type === 'expense') {
      newGrandTotalKhr = this.state.grand_total_khr - newTotalKhr;
    } else {
      newGrandTotalKhr = this.state.grand_total_khr + newTotalKhr;
    }
    let newGrandTotalUsd = newGrandTotalKhr * 4000;

    let cloneEntries = [...oldData.entries];
    cloneEntries.push(newData);

    this.setState({
      grand_total_khr: newGrandTotalKhr,
      grand_total_usd: newGrandTotalUsd,
      [type]: {
        total_khr: newTotalKhr,
        total_usd: newTotalUsd,
        entries: cloneEntries
      }
    });
  };

  render() {
    const { currency, expense, income } = this.state;

    return (
      <div className="log-form-content container">
        <LogDayNavigator />
        <div className="log-total-amount positive">
          <FontAwesomeIcon icon={faCheckCircle} />
          &nbsp;&nbsp;&nbsp;Total =&nbsp;
          <span className="amount">
            {this.state[`grand_total_${currency}`]}
          </span>
          &nbsp;
          <span className="currency">{currency === 'khr' ? '៛' : '$'}</span>
        </div>
        <div className="log-entries grid">
          <LogEntry
            type="expense"
            currency={currency}
            data={expense}
            onEntryAdd={this.handleEntryAddExpense}
          />
          <LogEntry
            type="income"
            currency={currency}
            data={income}
            onEntryAdd={this.handleEntryAddIncome}
          />
        </div>
      </div>
    );
  }
}

export default LogForm;
