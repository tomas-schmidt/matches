import React, { Component } from 'react';
import './argentina.css'
import Matches from '../../matches/matches';
import matchesService from '../../../services/matches-service.js'
import codes from '../../../codes/codes'

class Argentina extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
    matchesService.getMatches(codes.COPA_ARGENTINA).then(res => { this.setState({ matches: res.data }); });
  }
  
  render() {
    return (
      <div>
        <span className="argentina-title">Copa Argentina</span>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Argentina;
