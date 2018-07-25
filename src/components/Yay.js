import React, { Component } from 'react';
import axios from 'axios'

import yay1 from '../yays/yay1.gif';
import yay2 from '../yays/yay2.gif';
import yay3 from '../yays/yay3.gif';
import yay4 from '../yays/yay4.gif';
import yay5 from '../yays/yay5.gif';
import yay6 from '../yays/yay6.gif';
import yay7 from '../yays/yay7.gif';
import yay8 from '../yays/yay8.gif';
import yay9 from '../yays/yay9.gif';
import yay10 from '../yays/yay10.gif';
import './Yay.css';

export default class Yay extends Component {
  constructor(props) {
    const yaays = [yay1, yay2, yay3, yay4, yay5, yay6, yay7, yay8, yay9, yay10]
    const image = yaays[Math.floor(Math.random() * yaays.length)]

    super(props)
    this.state = { image }
  }

  getImage() {
    const gifUrl = 'https://api.giphy.com/v1/gifs/random'
    const apiKey = '7KOfwwXSM6Ao8nCJpYZg6OvLI06Gy2CW'
    const gifTag = 'excited'

    return axios
      .get(`${gifUrl}?api_key=${apiKey}&tag=${gifTag}`)
      .then(resp => this.setState(prevState => ({ image: resp.data.data.image_url })))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getImage(), 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (<img src={this.state.image} alt="YAAAAAAAY!" />)
  }
}
