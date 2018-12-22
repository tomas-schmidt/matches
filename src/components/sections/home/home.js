import React, { Component } from 'react';
import './home.css'
import Matches from '../../matches/matches'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <span className="home-title">Hoy</span>
        <Matches></Matches>
        <span className="home-subtitle">Esta semana</span>
        <Matches></Matches>
      </div>
    );
  }
}

export default Home;
