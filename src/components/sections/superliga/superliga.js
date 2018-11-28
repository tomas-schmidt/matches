import React, { Component } from 'react';
import './superliga.css'
import Matches from '../../matches/matches';
import matchesService from '../../../services/matches-service.js'
import codes from '../../../codes/codes'

class Superliga extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
    matchesService.getMatches(codes.SUPERLIGA).then(res => { this.setState({ matches: res.data }); });
  }

  render() {
    return (
      <div>
        <span className="superliga-title">Superliga</span>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Superliga;
