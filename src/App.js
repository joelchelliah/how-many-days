import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import logo from './logo.gif';
import './App.css';

class App extends Component {
  formatter(value, unit) {
    return value + ' ' + unit + '!'
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Days Until The Invasion...</h1>
        </header>
        <img src={logo} className="logo" alt="logo" />
        <div className="days">
          <TimeAgo date="Oct 01, 2018" formatter={this.formatter}  />
        </div>
      </div>
    );
  }
}

export default App;
