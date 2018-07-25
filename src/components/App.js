import React, { Component } from 'react';
import moment from 'moment';

import Yay from './Yay.js';
import './App.css';

export default class App extends Component {
  render() {
    const date = moment("01.10.2018", "DD-MM-YYYY");
    const days = date.diff(moment(), 'days');

    return (
      <div className="App">
        <header className="header">
          <h1>How many days?!</h1>
          <Yay/>
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
