import React from 'react';
import savingsSvg from '../../assets/savings.svg';
import GoogleAuth from '../../components/googleAuth/GoogleAuth';
import globalStyles from '../app/App.module.css';
import styles from './LoginForm.module.css';

class LoginForm extends React.Component {
    componentDidUpdate() {
        if (this.props.isSignedIn) {
            this.props.history.replace('/log');
        }
    }

    render() {
        return (
            <div className={styles.loginForm}>
                <div className={globalStyles.grid}>
                    <img
                        src={savingsSvg}
                        alt="saving logo"
                        className={styles.savingsSvg}
                    />
                    <GoogleAuth onSignIn={this.props.onSignIn} />
                </div>
                <div className={styles.developer}>
                    Developed by <strong>Vannyou_TANG</strong>
                </div>
            </div>
        );
    }
}

export default LoginForm;
