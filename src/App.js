import React from 'react';
import logo from './logo.svg';
import LoginForm from './components/loginForm';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="budgetee-app">
      <Navbar />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
