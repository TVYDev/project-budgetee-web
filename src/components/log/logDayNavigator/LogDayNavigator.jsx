import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../../../containers/app/App.module.css';
import styles from './LogDayNavigator.module.css';

class LogDayNavigator extends React.Component {
    render() {
        return (
            <div className={`${globalStyles.grid} ${styles.logDayNavigator}`}>
                <div className={styles.previousDay}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <div className={styles.dayToLog}>Today</div>
                <div className={styles.nextDay}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
        );
    }
}

export default LogDayNavigator;
