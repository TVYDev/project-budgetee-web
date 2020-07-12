import React from 'react';
import globalStyles from '../../../../containers/app/App.module.css';
import styles from './LogEntryForm.module.css';

class LogEntryForm extends React.Component {
    state = {
        name: '',
        amount: '',
        currency: 'khr'
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onEntryAdd(this.state);
        this.setState({ name: '', amount: '', currency: 'khr' });
        console.log('Log Entry Form is submitted', this.state);
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { name, amount, currency } = this.state;

        return (
            <div className={styles.entryForm}>
                <form
                    className={globalStyles.grid}
                    onSubmit={this.handleFormSubmit}
                >
                    <select
                        name="name"
                        className={`form-control ${styles.selLogName}`}
                        onChange={this.handleInputChange}
                        value={name}
                    >
                        <option value="">Choose one</option>
                        <option value="lunch">Lunch</option>
                        <option value="petrol">Petrol</option>
                    </select>
                    <input
                        name="amount"
                        type="number"
                        className={`form-control ${styles.txtLogAmount}`}
                        placeholder="Amount"
                        onChange={this.handleInputChange}
                        value={amount}
                    />
                    <select
                        name="currency"
                        className={`form-control ${styles.selLogCurrency}`}
                        onChange={this.handleInputChange}
                        value={currency}
                    >
                        <option value="khr">៛ Riel</option>
                        <option value="usd">$ Dollar </option>
                    </select>
                    <button
                        type="submit"
                        className={`btn-primary ${styles.btnAddLog}`}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default LogEntryForm;
