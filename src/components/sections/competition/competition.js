import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import matchesService from '../../../services/matches-service.js'

class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
  }
  
  render() {
    matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data }); });
    return (
      <div>
        <span className="title">{this.props.name}</span>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Competition;
