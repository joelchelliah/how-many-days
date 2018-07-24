import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import logo from './logo.gif';
import './App.css';

export default class App extends Component {
  render() {
    const date = moment("01.10.2018", "DD-MM-YYYY");
    const days = date.diff(moment(), 'days');

    return (
      <div className="App">
        <header className="header">
          <h1>How many days?!</h1>
          <img src={logo} alt="YAAAAAAAY!" />
        </header>

        <div className="content">
            {days} DAYS!
        </div>

        <div className="footer">
          until {date.format('MMMM Do YYYY')}
        </div>
      </div>
    );
  }
}
