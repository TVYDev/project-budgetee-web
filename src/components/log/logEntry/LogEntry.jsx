import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronCircleUp,
    faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import LogEntryForm from './logEntryForm/LogEntryForm';
import LogEntryItem from './logEntryItem/LogEntryItem';
import globalStyles from '../../../containers/app/App.module.css';
import styles from './LogEntry.module.css';

class LogEntry extends React.Component {
    render() {
        const { type, data, currency, onEntryAdd } = this.props;
        const { entries } = data;

        return (
            <div className={`${styles.logEntry} ${type}`}>
                <div className={`${globalStyles.grid} ${styles.entryTotal}`}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon
                            icon={
                                type === 'expense'
                                    ? faChevronCircleUp
                                    : faChevronCircleDown
                            }
                        />
                    </div>
                    <div className={styles.total}>
                        <span>{data[`total_${currency}`]}</span>
                        &nbsp;
                        <span>{currency === 'khr' ? '៛' : '$'}</span>
                    </div>
                </div>
                <div className={styles.entryList}>
                    {entries.map((entry) => (
                        <LogEntryItem key={entry.name} data={entry} />
                    ))}
                </div>
                <LogEntryForm onEntryAdd={onEntryAdd} />
            </div>
        );
    }
}

export default LogEntry;
