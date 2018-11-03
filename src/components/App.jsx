import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Tests Demo
          </p>
          <Link className="App-link" to="/users">
            Users
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
