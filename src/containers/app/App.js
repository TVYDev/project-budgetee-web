import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import Navbar from '../../components/navbar/Navbar';
import LogForm from '../logForm/LogForm';

class App extends React.Component {
    state = {
        auth: {
            isSignedIn: false
        }
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '789019493071-e0rmhmsekbrss09l5q8njacngbtkc8dn.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    console.log(this.auth);
                    this.setState({
                        auth: {
                            isSignedIn: this.auth.isSignedIn.get()
                        }
                    });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    onAuthChange = () => {
        this.setState({
            auth: {
                isSignedIn: this.auth.isSignedIn.get()
            }
        });
    };

    render() {
        const { isSignedIn } = this.state.auth;

        return (
            <div className="budgetee-app">
                <Navbar auth={this.state.auth} onSignOut={this.onSignOut} />
                <div className="container">
                    <Switch>
                        <Route
                            path="/log"
                            render={(props) => (
                                <LogForm isSignedIn={isSignedIn} {...props} />
                            )}
                        />
                        <Route
                            path="/"
                            render={(props) => (
                                <LoginForm
                                    onSignIn={this.onSignIn}
                                    {...props}
                                    isSignedIn={isSignedIn}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
