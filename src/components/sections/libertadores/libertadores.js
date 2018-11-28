import React, { Component } from 'react';
import './libertadores.css'
import Matches from '../../matches/matches';
import matchesService from '../../../services/matches-service.js'

class Libertadores extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
    matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data }); });
  }

  render() {
    return (
      <div>
        <span className="inter-title">Copa Libertadores</span>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Libertadores;
