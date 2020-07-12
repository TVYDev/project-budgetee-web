import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../../../../containers/app/App.module.css';
import styles from './LogEntryItem.module.css';

class LogEntryItem extends React.Component {
    render() {
        const { name, amount, currency } = this.props.data;

        return (
            <div className={`${globalStyles.grid} ${styles.entryItem}`}>
                <div className={styles.deleteIcon}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
                <div className={styles.entryName}>{name}</div>
                <div className={styles.entryAmount}>
                    <span>{amount}</span>&nbsp;
                    <span>{currency === 'khr' ? '៛' : '$'}</span>
                </div>
            </div>
        );
    }
}

export default LogEntryItem;
