import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import yay1 from './yays/yay1.gif';
import yay2 from './yays/yay2.gif';
import yay3 from './yays/yay3.gif';
import yay4 from './yays/yay4.gif';
import yay5 from './yays/yay5.gif';
import yay6 from './yays/yay6.gif';
import yay7 from './yays/yay7.gif';
import yay8 from './yays/yay8.gif';
import yay9 from './yays/yay9.gif';
import yay10 from './yays/yay10.gif';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { image: this.getImage() };
  }

  tick() {
    this.setState(prevState => ({
      image: this.getImage()
    }));
  }

  getImage() {
    const yays = [yay1,yay2,yay3,yay4,yay5,yay6,yay7,yay8,yay9,yay10];
    return yays[Math.floor(Math.random() * yays.length)];
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const date = moment("01.10.2018", "DD-MM-YYYY");
    const days = date.diff(moment(), 'days');


    return (
      <div className="App">
        <header className="header">
          <h1>How many days?!</h1>
          <img src={this.state.image} alt="YAAAAAAAY!" />
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
