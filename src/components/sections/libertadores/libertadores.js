import React, { Component } from 'react';
import './libertadores.css'
import Matches from '../../matches/matches';
import axios from 'axios'
import environment from '../../../environments/environment';

class Libertadores extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
  }

  getMatches() {
    axios.get(`${environment.apiBaseUrl}/libertadores`).then(res => { this.setState({ matches: res.data }); });
  }

  render() {
    this.getMatches();
    return (
      <div>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Libertadores;
