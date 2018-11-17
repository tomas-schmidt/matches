import React, { Component } from 'react';
import './home.css'
import Matches from '../../matches/matches'
import matchesService from '../../../services/matches-service.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
    matchesService.getMatches('').then(res => { this.setState({ matches: res.data }); });
  }

  render() {
    return (
      <div className="home-container">
        <span>Hoy</span>
        <Matches matches={this.state.matches}></Matches>
        <span>Esta semana</span>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Home;
